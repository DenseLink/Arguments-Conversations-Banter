/* =============================================================================
 * questions.js  —  Consolidated database engine for the 300-question Solo
 * Practice Simulator, one 300-item bank per track.
 *
 * Rather than hard-coding 900 static strings, a deterministic generator
 * composes each track's 300 UNIQUE scenario prompts from:
 *   - concept-specific prompt templates (drawn from the source books), and
 *   - a rotating matrix of real-life social CONTEXTS.
 * A uniqueness guard guarantees exactly 300 distinct prompts per track.
 *
 * Exposed as window.CM_QUESTIONS with:
 *   CM_QUESTIONS.getBank(trackId)      -> array of 300 {id, prompt, concept}
 *   CM_QUESTIONS.shuffle(arr, seed?)   -> shuffled copy (optionally seeded)
 *   CM_QUESTIONS.count(trackId)        -> 300
 *
 * Classic script (no ES modules) so it works from the file:// system.
 * ========================================================================== */
(function (global) {
  "use strict";

  // Shared library of social contexts the drills get situated in.
  var CONTEXTS = [
    "at a work happy hour", "on a first date", "at a family dinner",
    "in a team stand-up meeting", "at a friend's party", "in a job interview",
    "waiting in a long coffee line", "at the gym", "on a group text thread",
    "meeting your partner's parents", "at a networking mixer", "in an elevator",
    "at a wedding reception", "during a road trip with friends", "in the office kitchen",
    "at a neighbor's barbecue", "on a video call", "in a crowded bar",
    "at a conference lunch", "reconnecting with an old friend", "in a dating-app chat",
    "at a book club", "while stuck in an airport", "at a house-warming",
    "in a client pitch", "on a first day at a new job", "at a dinner party with strangers",
    "during small talk with a barista", "at a reunion", "in a heated group debate"
  ];

  // Per-concept prompt templates. {ctx} is replaced with a context.
  // Each concept supplies several templates; combined with 30 contexts this
  // yields far more than 300 candidates per track, from which we take 300.
  var TEMPLATES = {
    comedy: {
      "truth-and-pain": [
        "Something mildly embarrassing just happened to you {ctx}. Find the universal truth and the pain inside it, and turn it into one self-aware line.",
        "You're {ctx} and someone shares a small failure. Name the shared truth-and-pain and respond so the whole group can laugh WITH them.",
        "Take a common complaint you might hear {ctx} and expose the painful truth beneath it in a single funny sentence."
      ],
      "comic-premise": [
        "Invent a one-sentence comic premise ('what if...') inspired by something you notice {ctx}.",
        "You're {ctx}. Take the most ordinary detail around you and distort it into a premise that would generate jokes on its own.",
        "Pitch a comic premise about the exact situation of being {ctx}, then name one complication it automatically creates."
      ],
      "flaws-humanity": [
        "Sketch a comic character based on someone you might meet {ctx}: exaggerate one flaw, then add one humanizing line.",
        "You're {ctx}. Turn your own most annoying trait into a lovable comic flaw in two sentences.",
        "Describe a character {ctx} whose big flaw drives the comedy but whose vulnerability keeps us rooting for them."
      ],
      "clash-of-context": [
        "Respond to a trivial event {ctx} with a wildly inappropriate emotional register (operatic despair or bureaucratic calm).",
        "Collide the setting of being {ctx} with an alien context (a courtroom, a locker room) and describe the funny result.",
        "You're {ctx}. Deliver a mundane sentence in a completely mismatched register for comic effect."
      ],
      "rule-of-three": [
        "Write a comic triple about your experience {ctx}: two honest items, then a subversive third (punch word last).",
        "You're {ctx}. List three things you 'need' where the third one breaks the pattern.",
        "Turn an ordinary observation from being {ctx} into a rule-of-three with a surprise on beat three."
      ],
      "comic-throughline": [
        "You're {ctx} with one desperate want. State it in one sentence, then escalate it across three beats.",
        "Invent a throughline for a scene set {ctx}, then plant an early detail that could pay off later as a callback.",
        "Take three unrelated jokes you could make {ctx} and chain them with a single character want."
      ],
      "sitcom-structure": [
        "Outline a 5-beat mini-episode (want\u2192obstacle\u2192complication\u2192crisis\u2192button) triggered by something {ctx}.",
        "You're {ctx}. Design an A-story and a thematically rhyming B-story from what's happening around you.",
        "Build a 'liar revealed' engine: a small convenient lie you might tell {ctx} that detonates by the end."
      ]
    },
    communication: {
      "invisible-argument": [
        "You're {ctx} and a disagreement starts. Decide out loud whether it's a fight or an argument, and steer it toward a decision.",
        "Spot an invisible persuasion attempt aimed at you {ctx} and name what it actually wants you to feel or do.",
        "Rewrite a brewing conflict {ctx} as a shared decision to reach rather than a battle to win."
      ],
      "set-your-goals": [
        "Before an ask you'd make {ctx}, write one sentence: by the end you want them to feel, believe, or DO exactly what?",
        "You're {ctx}. Identify whether you truly need to change their mood, their mind, or their action \u2014 and aim at just one.",
        "Apply the 'action test' to a request {ctx}: if they felt right but did nothing, did you win?"
      ],
      "control-the-tense": [
        "A conversation {ctx} is stuck in blame (past). Say the exact words that shift it to the future 'what do we do now?'",
        "You're {ctx}. Rewrite a 'you always...' accusation into a future-tense 'next time, let's...' sentence.",
        "Label a disagreement {ctx} by tense (blame/values/choice) and move it toward a decision."
      ],
      "ethos-logos-pathos": [
        "Make one claim you might need {ctx} in three versions: pure ethos, pure logos, pure pathos.",
        "You're {ctx}. List your ethos assets \u2014 why should this audience trust you before you argue?",
        "Diagnose which leg (character, logic, emotion) a persuasive message {ctx} is standing on, and add the missing one."
      ],
      "decorum": [
        "You're {ctx}. Name your audience's three core values and three favorite words, then weave them into a request.",
        "Deliver the same ask {ctx} in two registers (to a boss vs. a friend) and note what you changed.",
        "Preempt the objection this audience has about you {ctx} by voicing it first."
      ],
      "control-the-mood": [
        "Turn a dry statistic you might cite {ctx} into a single vivid human image that creates the feeling you want.",
        "You're {ctx}. Decide the exact mood you need in the room and design one short story to produce it.",
        "Replace an abstract claim you'd make {ctx} with a concrete, sensory picture."
      ],
      "high-ground-framing": [
        "Find one commonplace value your audience already holds {ctx} and build your argument on top of it.",
        "You're {ctx}. Reframe a losing debate by changing the standard of judgment ('the real question is...').",
        "Name the loaded words each side uses {ctx} for the same thing, and choose the frame you'll speak in."
      ],
      "spot-fallacies": [
        "Identify a likely fallacy (false choice, straw man, red herring...) in an argument you might hear {ctx} and name it.",
        "You're {ctx}. Someone attacks you instead of your point (ad hominem). Redirect back to the argument.",
        "Test a claim made {ctx}: does the proof actually fit the conclusion, or is a trick doing the work?"
      ]
    },
    banter: {
      "flow-like-a-river": [
        "You're {ctx}. Rephrase a closed 'what's your favorite...?' question into an easy, pressure-free open one.",
        "The conversation {ctx} just died. Offer a small story of your own to reignite the flow instead of interrogating.",
        "Drop an 'easy on-ramp' question suited to being {ctx} that anyone could answer without effort."
      ],
      "vivid-language": [
        "Describe how you feel {ctx} using a vivid 'as ___ as ___' analogy instead of a flat adjective.",
        "You're {ctx}. Upgrade the word 'good', 'bad', or 'tired' into a colorful image on the fly.",
        "Paint a one-line vivid picture of your surroundings {ctx} with only concrete, sensory detail."
      ],
      "comic-triple": [
        "Craft a comic triple about something {ctx}: two related descriptors, one that veers off, punch word last.",
        "You're {ctx}. Turn a plain compliment into banter by adding a subversive third beat.",
        "Describe a person you might meet {ctx} with two positives and one absurd negative."
      ],
      "sarcasm-and-irony": [
        "Respond to a minor annoyance {ctx} with warm, clearly-playful sarcasm (not hostility).",
        "Point out a real irony you could observe {ctx} in a single dry line.",
        "You're {ctx}. Turn a straight complaint into gentle sarcastic exaggeration."
      ],
      "misdirection-surprise": [
        "Write a setup about being {ctx} and give it a surprising 'left turn' payoff.",
        "You're {ctx}. Start a normal sentence and end it somewhere absurd but retrospectively logical.",
        "Build a deadpan non-sequitur inspired by something around you {ctx}."
      ],
      "agree-and-amplify": [
        "Someone teases you {ctx}. Agree with the jab and exaggerate it to absurdity instead of defending.",
        "You're {ctx}. Take a wild statement thrown at you and 'yes, and' it three times bigger.",
        "Reframe an insecurity that might surface {ctx} into a self-amplified joke that can't be used against you."
      ],
      "pinning-the-tail": [
        "Someone {ctx} tells a story with one clear emotion. Add a 'tail' that amplifies exactly that emotion.",
        "You're {ctx}. Retell a recent event in the 1:1:1 method: one action, one reaction, one emotion.",
        "Assist a story you might hear {ctx} with a witty comment that keeps the spotlight on the teller, not you."
      ]
    }
  };

  // Small deterministic PRNG (mulberry32) so seeded shuffles are reproducible.
  function mulberry32(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  // Build a bank of exactly 300 unique prompts for a track.
  function buildBank(trackId) {
    var tmpl = TEMPLATES[trackId];
    var conceptIds = Object.keys(tmpl);
    var bank = [];
    var seen = {};
    var rng = mulberry32(hashString(trackId));

    // Round-robin across concepts, contexts and template variants until 300.
    var ci = 0, xi = 0, ti = 0, guard = 0;
    while (bank.length < 300 && guard < 100000) {
      guard++;
      var cid = conceptIds[ci % conceptIds.length];
      var variants = tmpl[cid];
      var ctx = CONTEXTS[xi % CONTEXTS.length];
      var tpl = variants[ti % variants.length];
      var prompt = cap(tpl.replace("{ctx}", ctx));

      if (!seen[prompt]) {
        seen[prompt] = true;
        bank.push({
          id: trackId + "-q" + (bank.length + 1),
          concept: cid,
          prompt: prompt
        });
      }
      // advance the three counters at different rates for good spread
      ci++;
      if (ci % conceptIds.length === 0) xi++;
      if (xi % CONTEXTS.length === 0 && ci % conceptIds.length === 0) ti++;
      // occasional jitter so we don't loop forever on collisions
      if (guard % 997 === 0) { xi += 1 + Math.floor(rng() * 3); ti += 1; }
    }
    return bank;
  }

  function hashString(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }

  // Pre-build and cache the three banks.
  var BANKS = {
    comedy: buildBank("comedy"),
    communication: buildBank("communication"),
    banter: buildBank("banter")
  };

  function shuffle(arr, seed) {
    var a = arr.slice();
    var rng = typeof seed === "number" ? mulberry32(seed) : Math.random;
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  global.CM_QUESTIONS = {
    getBank: function (trackId) { return (BANKS[trackId] || []).slice(); },
    count: function (trackId) { return (BANKS[trackId] || []).length; },
    shuffle: shuffle
  };
})(window);
