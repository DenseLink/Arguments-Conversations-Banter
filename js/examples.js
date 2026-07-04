/* =============================================================================
 * examples.js  —  Per-concept worked-example engine.
 *
 * For EVERY concept (21 total) it deterministically composes 300 UNIQUE
 * practice examples. Each example expands into a step-by-step breakdown built
 * from that concept's `method` (from content.js), applied to a specific social
 * CONTEXT, and ending with a concrete "model output" drawn from the concept's
 * output templates.
 *
 * API (window.CM_EXAMPLES):
 *   getExamples(track, conceptId) -> [ { id, n, scenario, context, steps[], output } ] (300)
 *   count(track, conceptId)       -> 300
 *   shuffle(arr, seed?)           -> shuffled copy
 *
 * Uniqueness is guaranteed by a per-concept seen-set; a jittered PRNG breaks
 * any collision loops. Classic script (file:// friendly).
 * ========================================================================== */
(function (global) {
  "use strict";
  var C = global.CM_CONTENT;

  // Contexts carry both a natural phrase and a short "subject" noun used to
  // fill {subj} inside model-output templates so outputs read concretely.
  var CONTEXTS = [
    { ph: "at a work happy hour", subj: "this happy hour" },
    { ph: "on a first date", subj: "this date" },
    { ph: "at a family dinner", subj: "family dinner" },
    { ph: "in a team stand-up meeting", subj: "this stand-up" },
    { ph: "at a friend's party", subj: "this party" },
    { ph: "in a job interview", subj: "this interview" },
    { ph: "waiting in a long coffee line", subj: "this coffee line" },
    { ph: "at the gym", subj: "the gym" },
    { ph: "on a group text thread", subj: "this group chat" },
    { ph: "meeting your partner's parents", subj: "this dinner" },
    { ph: "at a networking mixer", subj: "this mixer" },
    { ph: "in an elevator with a colleague", subj: "this elevator ride" },
    { ph: "at a wedding reception", subj: "this reception" },
    { ph: "on a road trip with friends", subj: "this road trip" },
    { ph: "in the office kitchen", subj: "the office kitchen" },
    { ph: "at a neighbor's barbecue", subj: "this barbecue" },
    { ph: "on a video call", subj: "this call" },
    { ph: "in a crowded bar", subj: "this bar" },
    { ph: "at a conference lunch", subj: "this conference" },
    { ph: "reconnecting with an old friend", subj: "this reunion" },
    { ph: "in a dating-app chat", subj: "this chat" },
    { ph: "at a book club", subj: "book club" },
    { ph: "while stuck in an airport", subj: "this airport" },
    { ph: "at a house-warming", subj: "this house-warming" },
    { ph: "in a client pitch", subj: "this pitch" },
    { ph: "on your first day at a new job", subj: "the new job" },
    { ph: "at a dinner party with strangers", subj: "this dinner party" },
    { ph: "during small talk with a barista", subj: "this coffee run" },
    { ph: "at a high-school reunion", subj: "this reunion" },
    { ph: "in a heated group debate", subj: "this debate" },
    { ph: "at a coworking space", subj: "this coworking space" },
    { ph: "on a hiking group meetup", subj: "this hike" },
    { ph: "at a cousin's graduation", subj: "this graduation" },
    { ph: "in the break room", subj: "the break room" },
    { ph: "at a community class", subj: "this class" }
  ];

  // Communication is persuasion, not small talk — so it gets its own bank of
  // real-stakes rhetorical situations (work, negotiation, family, civic, written)
  // so every drill is targeted to where arguments actually get won or lost.
  var CONTEXTS_COMM = [
    { ph: "in a salary-review conversation", subj: "your raise" },
    { ph: "pitching a plan to a skeptical boss", subj: "the plan" },
    { ph: "in a tense team meeting", subj: "the decision" },
    { ph: "negotiating a deadline with a client", subj: "the timeline" },
    { ph: "talking a teenager out of a bad idea", subj: "the choice" },
    { ph: "in a disagreement with your partner about money", subj: "the budget" },
    { ph: "asking a landlord to fix something", subj: "the repair" },
    { ph: "in a performance review you're leading", subj: "the feedback" },
    { ph: "defusing an argument between two coworkers", subj: "the conflict" },
    { ph: "persuading a committee to fund your project", subj: "the proposal" },
    { ph: "handling an angry customer", subj: "their complaint" },
    { ph: "in a hiring debrief where opinions split", subj: "the candidate" },
    { ph: "asking your team to adopt a new process", subj: "the change" },
    { ph: "responding to a critical email from a stakeholder", subj: "the concern" },
    { ph: "at a town-hall about a local issue", subj: "the issue" },
    { ph: "talking a friend out of a risky decision", subj: "the risk" },
    { ph: "negotiating a car price", subj: "the price" },
    { ph: "asking for an extension from a professor", subj: "the extension" },
    { ph: "mediating a family dispute at a holiday dinner", subj: "the disagreement" },
    { ph: "convincing a vendor to honor a warranty", subj: "the warranty" },
    { ph: "presenting quarterly results to leadership", subj: "the numbers" },
    { ph: "in a debate with a colleague over strategy", subj: "the strategy" },
    { ph: "asking a direct report to raise their game", subj: "their work" },
    { ph: "winning over a resistant new client", subj: "the partnership" },
    { ph: "in a heated group chat about weekend plans", subj: "the plan" },
    { ph: "making the case for a promotion", subj: "the promotion" },
    { ph: "talking down a frustrated teammate", subj: "the setback" },
    { ph: "in a neighborhood-association meeting", subj: "the rule" },
    { ph: "explaining a missed deadline to your manager", subj: "the delay" },
    { ph: "recommending a course of action to a wary audience", subj: "the recommendation" },
    { ph: "closing a deal on the phone", subj: "the deal" },
    { ph: "settling a rules dispute during a board game", subj: "the ruling" },
    { ph: "asking investors for a follow-on check", subj: "the round" },
    { ph: "steering a derailed meeting back on track", subj: "the agenda" }
  ];

  // Global scenario framings ({ctx} = context phrase, {task} = concept task).
  var FRAMINGS = [
    "You're {ctx}. {task}",
    "While {ctx}, an opening comes up. {task}",
    "Mid-conversation {ctx}: {task}",
    "Someone {ctx} hands you the perfect setup. {task}",
    "It's a slow moment {ctx}. {task}",
    "The energy dips {ctx}. {task}",
    "You want to make a stronger impression {ctx}. {task}",
    "A small awkward silence lands {ctx}. {task}",
    "{cap_task} \u2014 the setting: {ctx}.",
    "Practice this {ctx}: {task}"
  ];

  // Persuasion-specific framings: they name the stakes and the resistance, so
  // the drill rehearses winning a real argument rather than filling a silence.
  var FRAMINGS_COMM = [
    "You're {ctx} and the room is leaning the other way. {task}",
    "You're {ctx}. The moment to move them is now \u2014 {task}",
    "Resistance is building {ctx}. {task}",
    "You get one clean shot {ctx}. {task}",
    "The other side just pushed back {ctx}. {task}",
    "Emotions are running hot {ctx}. {task}",
    "You need a yes {ctx}. {task}",
    "They're skeptical {ctx}. {task}",
    "{cap_task} \u2014 the stakes: you're {ctx}.",
    "Before they decide {ctx}, {task}"
  ];

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  function lower(s) { return s.charAt(0).toLowerCase() + s.slice(1); }

  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function hash(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  function fill(str, ctx) {
    return str.replace(/\{subj\}/g, ctx.subj).replace(/\{ctx\}/g, ctx.ph);
  }

  function buildBank(track, concept) {
    var task = concept.task || "Apply this concept.";
    var method = concept.method || [];
    var outputs = concept.outputs && concept.outputs.length ? concept.outputs : ["Craft your response and say it out loud."];
    var rng = mulberry32(hash(track + ":" + concept.id));
    var bank = [], seen = {};
    var fi = 0, ci = 0, guard = 0;

    // Communication drills use the persuasion-specific context + framing banks
    // so every generated example is targeted to a real argument.
    var ctxSet = track === "communication" ? CONTEXTS_COMM : CONTEXTS;
    var frameSet = track === "communication" ? FRAMINGS_COMM : FRAMINGS;

    while (bank.length < 300 && guard < 200000) {
      guard++;
      var framing = frameSet[fi % frameSet.length];
      var ctx = ctxSet[ci % ctxSet.length];
      var scenario = framing
        .replace("{ctx}", ctx.ph)
        .replace("{task}", task)
        .replace("{cap_task}", cap(task));
      scenario = cap(scenario);

      if (!seen[scenario]) {
        seen[scenario] = true;
        var n = bank.length + 1;
        // pick a model output for this example deterministically
        var out = fill(outputs[Math.floor(rng() * outputs.length)], ctx);
        // build contextualized breakdown steps from the concept method
        var steps = method.map(function (m, idx) {
          return { label: "Step " + (idx + 1), text: fill(m, ctx) };
        });
        bank.push({
          id: track + "-" + concept.id + "-" + n,
          n: n,
          context: ctx.ph,
          scenario: scenario,
          steps: steps,
          output: out
        });
      }
      ci++;
      if (ci % ctxSet.length === 0) fi++;
      if (guard % 991 === 0) { ci += 1 + Math.floor(rng() * 3); fi += 1; }
    }
    return bank;
  }

  // Lazy cache: build a concept's bank on first request.
  var CACHE = {};
  function getExamples(track, conceptId) {
    var key = track + ":" + conceptId;
    if (CACHE[key]) return CACHE[key].slice();
    var concept = C.getConcept(track, conceptId);
    if (!concept) return [];
    var bank = buildBank(track, concept);
    CACHE[key] = bank;
    return bank.slice();
  }

  function shuffle(arr, seed) {
    var a = arr.slice();
    var rng = typeof seed === "number" ? mulberry32(seed) : Math.random;
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  global.CM_EXAMPLES = {
    getExamples: getExamples,
    count: function (track, id) { return getExamples(track, id).length; },
    shuffle: shuffle
  };
})(window);
