/* =============================================================================
 * content-comm.js  —  Authoritative rebuild of the Communication track.
 *
 * Loaded IMMEDIATELY AFTER content-extra.js (before module/concept/planner/app).
 *
 * This file is a chapter-by-chapter capture of EVERY teachable tool, skill and
 * nuance in "Thank You for Arguing (Revised and Updated)" by Jay Heinrichs.
 * Each chapter of the book packs multiple named "Argument Tool" techniques,
 * "Persuasion Alert" cautions, and "Try this" applications. This file turns
 * every one of those into a first-class, practiceable skill so nothing in the
 * book is missing from the app.
 *
 * It REPLACES CM_CONTENT.communication.concepts and .chapters with a complete
 * set derived directly from the 29 chapters (Offense -> Defense -> Advanced
 * Offense -> Advanced Agreement). Because the book itself is ordered simple ->
 * complex, every skill carries a difficulty LEVEL (1 foundational,
 * 2 intermediate, 3 advanced) and a BUILDS list of prerequisite skills, so the
 * Long-Term Mastery Plan can sequence practice so each skill builds on the last.
 *
 * All prose is original paraphrasing of the book's ideas (no verbatim text).
 * Every skill carries the shape the simulator + concept page expect:
 *   task + method[] + outputs[] ({subj} = the practice subject) + breakdown,
 *   level, builds[], deepDive[] (Learn / Develop / Apply), examples[], related[].
 * Classic script; file:// friendly.
 * ========================================================================== */
(function (global) {
  "use strict";
  var C = global.CM_CONTENT;
  if (!C || !C.communication) return;

  var SRC = "Thank You for Arguing (Revised and Updated)";

  /* Update the track's book label to the edition under study. */
  C.communication.book = SRC;
  C.communication.author = "Jay Heinrichs";
  C.communication.tagline = "The 3,000-year-old art of persuasion, captured chapter by chapter.";

  /* ---- Chapter page numbers (actual PDF pages) ---------------------------- */
  var CHAPTER_PAGES = {
    1:14, 2:27, 3:40, 4:55, 5:67, 6:81, 7:98, 8:107, 9:117, 10:142,
    11:154, 12:168, 13:188, 14:204, 15:221, 16:249, 17:275, 18:289, 19:300,
    20:311, 21:339, 22:356, 23:370, 24:385, 25:399, 26:420, 27:437, 28:456, 29:472
  };

  /* ---- Chapter metadata (title + one-line focus for the module view) ------ */
  var CHAPTERS = {
    1:  ["Open Your Eyes", "See the arguments happening everywhere \u2014 and the difference between fighting and arguing."],
    2:  ["Set Your Goals", "Decide what you actually want out of an argument before you open your mouth."],
    3:  ["Control the Tense", "Blame, values, or choice \u2014 pick the right issue and the right tense."],
    4:  ["Soften Them Up", "Aristotle's three tools: argue by character, by logic, and by emotion."],
    5:  ["Get Them to Like You", "Decorum \u2014 meet the audience's expectations so they find you agreeable."],
    6:  ["Make Them Listen", "Build the ethos of a leader: virtue, practical wisdom, and disinterest."],
    7:  ["Use Your Craft", "Phronesis \u2014 show the audience you know how to solve their problem."],
    8:  ["Show You Care", "Prove you put the audience's interests ahead of your own."],
    9:  ["Control the Mood", "Move an audience's emotions with stories, timing, and desire."],
    10: ["Turn the Volume Down", "Calm an angry audience and keep their guard down."],
    11: ["Gain the High Ground", "Argue from the audience's own commonplaces and self-interest."],
    12: ["Persuade on Your Terms", "Framing and definition: control the words and you control the argument."],
    13: ["Control the Argument", "Rhetorical logic \u2014 the enthymeme, proof, and the rhetorical example."],
    14: ["Make a Connection", "The Hook: attach your argument to what the audience already wants."],
    15: ["Spot Fallacies", "The seven deadly logical sins and how to catch them."],
    16: ["Call a Foul", "Name the argument-stoppers that make agreement impossible."],
    17: ["Know Whom to Trust", "Persuasion detectors that reveal a persuader's true interests."],
    18: ["Find the Sweet Spot", "More detectors: judge a persuader's practical wisdom."],
    19: ["Deal with a Bully", "Co-opt the bully or win the onlookers instead of striking back."],
    20: ["Get Instant Cleverness", "Figures of speech that make you quick, witty, and memorable."],
    21: ["Change Reality", "Tropes \u2014 words that make a thing stand for something bigger."],
    22: ["Recover from a Screw-Up", "Turn a mistake into an advantage with more than an apology."],
    23: ["Seize the Occasion", "Kairos \u2014 spot and exploit the most persuadable moment."],
    24: ["Use the Right Medium", "Match the medium's senses to the ethos, logos, or pathos you need."],
    25: ["Give a Persuasive Talk", "Cicero's five canons: invention, arrangement, style, memory, delivery."],
    26: ["Capture Your Audience", "Structure and figures that hold a crowd and paint the picture."],
    27: ["Write a Persuasive Essay", "Persuade the reader \u2014 and yourself \u2014 through story and epiphany."],
    28: ["Use the Right Tools", "Pull the whole arsenal together into an offense and a defense."],
    29: ["Run an Agreeable Country", "Rhetoric's real purpose: argue your way to consensus."]
  };

  function cite(ch) {
    var m = CHAPTERS[ch];
    return "Ch. " + ch + (m ? " \u2014 " + m[0] : "");
  }

  /* Compact builder -> full concept object the app/simulator expects. */
  function tool(o) {
    var dd = [];
    if (o.learn)   dd.push("Learn: " + o.learn);
    if (o.develop) dd.push("Develop: " + o.develop);
    if (o.apply)   dd.push("Apply: " + o.apply);
    return {
      id: o.id,
      name: o.name,
      ch: o.ch,
      source: cite(o.ch),
      page: CHAPTER_PAGES[o.ch] ? ("p. " + CHAPTER_PAGES[o.ch]) : ("Ch. " + o.ch),
      level: o.level,
      builds: o.builds || [],
      breakdown: o.breakdown,
      task: o.task,
      method: o.method,
      outputs: o.outputs,
      examples: o.examples || [],
      drills: o.drills || [],
      models: o.models || [],
      deepDive: dd,
      related: o.related || []
    };
  }

  var S = [];  /* all communication skills, in book order */


  /* ===================== CHAPTER 1 — Open Your Eyes ====================== */
  S.push(tool({
    id: "spot-the-argument", name: "Spot the Invisible Argument", ch: 1, level: 1,
    builds: [],
    breakdown: "Heinrichs separates a fight (which aims to dominate, to make someone lose) from an argument (which aims to win someone over to a choice). Persuasion is happening around you constantly and invisibly. The first skill is simply to notice it \u2014 because once you see it, you can choose a goal instead of reacting.",
    task: "Notice the persuasion in a situation and decide whether it is a fight or an argument.",
    method: [
      "Catch the moment of persuasion in {subj} \u2014 someone is trying to move someone.",
      "Ask: is this a fight (someone must lose) or an argument (reach a decision)?",
      "If it has turned into a fight, name the decision you actually want instead.",
      "Steer the exchange away from winning and toward agreeing."
    ],
    outputs: [
      "At {subj}: \u201cAre we trying to win this, or fix it? I\u2019d rather fix it.\u201d",
      "During a blow-up at {subj}: \u201cSounds like we agree on the goal and only disagree on the route \u2014 let\u2019s argue about the route.\u201d",
      "At {subj}: \u201cI don\u2019t need to be right here. I just want us to land on something we can both live with.\u201d"
    ],
    learn: "An argument in the rhetorical sense is not a quarrel \u2014 it is any attempt to get an audience to think or do something. Fights seek to score points; arguments seek agreement and action.",
    develop: "For one day, tally every argument aimed at you \u2014 ads, requests, headlines, a partner\u2019s sigh. Label each one fight or argument. The habit of seeing rhetoric is the foundation of using it.",
    apply: "The next time a discussion heats up, silently ask \u2018fight or argument?\u2019 and, if it\u2019s a fight, restate the shared goal to convert it back into an argument.",
    examples: [
      "A couple \u2018fighting\u2019 over the thermostat are really running an argument about a choice \u2014 who turns it down.",
      "A commercial that seems to be entertaining you is quietly arguing that you need the product."
    ],
    related: ["set-your-goal", "control-the-tense"]
  }));

  /* ===================== CHAPTER 2 — Set Your Goals ===================== */
  S.push(tool({
    id: "set-your-goal", name: "Set Your Goal", ch: 2, level: 1,
    builds: ["spot-the-argument"],
    breakdown: "Before arguing, decide what you want at the end. If you get your way, you won \u2014 no matter who \u2018scored\u2019 more points. Winning the argument means getting the result, not silencing the opponent.",
    task: "Name the single outcome you want from the argument before it starts.",
    method: [
      "Ask yourself: at the end of {subj}, what do I want to be different?",
      "Phrase it as a result you control, not as \u2018being right.\u2019",
      "Drop the urge to out-score your opponent.",
      "Aim every move at that result."
    ],
    outputs: [
      "Before {subj}: privately \u2014 \u201cMy goal isn\u2019t to prove them wrong; it\u2019s to leave with a yes on the timeline.\u201d",
      "Mid-argument at {subj}: \u201cLet\u2019s set the point-scoring aside \u2014 what would actually solve this for both of us?\u201d",
      "At {subj}: \u201cI care less about who started it than about what we do next.\u201d"
    ],
    learn: "A deliberative arguer measures success by the result, not by the debate. Trying to out-argue people often loses you the outcome you actually wanted.",
    develop: "Before your next real conversation, write one sentence: \u2018By the end, I want ___.\u2019 Keep checking your moves against it.",
    apply: "When you feel the itch to win a point, pause and ask whether the point actually advances your goal. If not, let it go.",
    examples: [
      "You can \u2018lose\u2019 every exchange of an argument and still win by getting the raise you wanted.",
      "A parent who \u2018wins\u2019 by lecturing a teen into silence has usually lost the goal of changed behavior."
    ],
    related: ["audience-goals", "control-the-tense"]
  }));
  S.push(tool({
    id: "audience-goals", name: "Set the Audience's Goal (Mood, Mind, Willingness)", ch: 2, level: 1,
    builds: ["set-your-goal"],
    breakdown: "Besides your own goal you have a goal for the audience, and it comes in three escalating levels: change their MOOD (easiest), change their MIND, or change their WILLINGNESS TO ACT (hardest, because action needs emotional commitment).",
    task: "Decide whether you need to change the audience's mood, mind, or willingness to act.",
    method: [
      "Read the audience's current state in {subj}.",
      "Choose the level you actually need: mood, mind, or action.",
      "Start by fixing the mood \u2014 you can\u2019t move a mind that\u2019s upset.",
      "Only push for action once mood and mind are with you."
    ],
    outputs: [
      "Mood, at {subj}: \u201cBefore we get into it, I want you to know I\u2019m on your side here.\u201d",
      "Mind, at {subj}: \u201cHere\u2019s the one fact that changed how I see this\u2026\u201d",
      "Willingness, at {subj}: \u201cSo can I count on you to send that email today?\u201d"
    ],
    learn: "Mood is the easiest thing to change, mind harder, and willingness to act hardest of all \u2014 because acting requires the audience to identify emotionally with the choice.",
    develop: "For a request you\u2019re about to make, decide which of the three you truly need. Most people over-reach for action when they only needed to shift the mood first.",
    apply: "Sequence your argument: settle the mood, then the mind, then ask for the action \u2014 in that order.",
    examples: [
      "A boss won\u2019t approve your plan (action) while she\u2019s annoyed (mood) \u2014 fix the mood first.",
      "Getting a friend to merely agree (mind) is far easier than getting them to show up and help (action)."
    ],
    related: ["set-your-goal", "sympathy", "the-advantageous"]
  }));
  S.push(tool({
    id: "concession", name: "Concession", ch: 2, level: 1,
    builds: ["audience-goals"],
    breakdown: "Concede your opponent's point in order to win what you actually want. Agreement disarms; once you grant the small thing, you can redirect to your goal. Concession is a workhorse of both offense and defense.",
    task: "Grant a point your opponent cares about, then pivot to the outcome you want.",
    method: [
      "Find the point in {subj} you can safely give away.",
      "Concede it warmly and out loud \u2014 \u2018You\u2019re right that\u2026\u2019",
      "Immediately pivot with \u2018\u2026and so the question becomes\u2026\u2019",
      "Steer the newly-agreeable audience toward your choice."
    ],
    outputs: [
      "At {subj}: \u201cYou\u2019re right, I was late \u2014 which is exactly why I want to fix the schedule so it can\u2019t happen again.\u201d",
      "At {subj}: \u201cFair point, it costs more up front. Given that, how do we make the money back fastest?\u201d",
      "At {subj}: \u201cI agree it\u2019s a risk. So let\u2019s talk about how we\u2019d handle the risk.\u201d"
    ],
    learn: "Conceding is not losing \u2014 it removes the other side\u2019s ammunition and buys you the goodwill to steer the argument to the future.",
    develop: "Practice the move \u2018You\u2019re right that X, and so\u2026\u2019 until the pivot feels natural. The word \u2018and\u2019 (not \u2018but\u2019) keeps it disarming.",
    apply: "When cornered, concede the smallest true thing your opponent said, then use it as the launch pad for your own choice.",
    examples: [
      "\u201cYes, the old logo had history \u2014 and that\u2019s why the new one should honor it while modernizing.\u201d",
      "Conceding a fact you can\u2019t deny lets you redefine what that fact means."
    ],
    related: ["redefinition", "definition-jujitsu", "full-arsenal"]
  }));

  /* ===================== CHAPTER 3 — Control the Tense ================== */
  S.push(tool({
    id: "control-the-tense", name: "Control the Tense", ch: 3, level: 1,
    builds: ["set-your-goal"],
    breakdown: "Most arguments fail because they happen in the wrong tense. The past is for blame, the present is for values (who's good or bad), and the future is for choices. If you want a decision, drag the argument into the future tense.",
    task: "Notice which tense the argument is in and move it to the future when you need a decision.",
    method: [
      "Listen to the tense in {subj}: past (blame), present (values), or future (choice)?",
      "If it\u2019s stuck in blame or name-calling, that\u2019s the wrong tense for a decision.",
      "Ask a future-tense question: \u2018So what do we do now?\u2019",
      "Keep nudging it forward whenever it slides back to the past."
    ],
    outputs: [
      "At {subj}: \u201cWe can keep going over who caused it, or we can decide what to do about it. I vote we decide.\u201d",
      "At {subj}: \u201cOkay \u2014 going forward, what would make this work?\u201d",
      "At {subj}: \u201cThat\u2019s the past. The question in front of us is the next step.\u201d"
    ],
    learn: "Aristotle gave each tense its own branch of rhetoric: forensic (past/blame), demonstrative (present/values), deliberative (future/choice). Only the future tense produces decisions.",
    develop: "Catch yourself and others slipping into \u2018who did this\u2019 (past). Practice the reset line \u2018going forward\u2026\u2019 until it\u2019s automatic.",
    apply: "In any stuck argument, name the tense silently, then ask the future-tense question to break the deadlock.",
    examples: [
      "\u201cWho set the volume last?\u201d (blame) derails an argument whose real issue is the choice to turn it down.",
      "Courtrooms argue the past, ceremonies the present, legislatures the future."
    ],
    related: ["three-core-issues", "recover-from-screwup", "full-arsenal"]
  }));
  S.push(tool({
    id: "three-core-issues", name: "The Three Core Issues: Blame, Values, Choice", ch: 3, level: 1,
    builds: ["control-the-tense"],
    breakdown: "Every persuasive issue slots into one of three categories: blame (whose fault?), values (what's good or right?), or choice (what should we do?). Argue the wrong core issue and you'll never reach your goal.",
    task: "Identify which of the three issues the argument is really about, and match it to your goal.",
    method: [
      "Ask what {subj} is fundamentally about: blame, values, or choice?",
      "Check whether that matches what you actually want.",
      "If you want an action, make sure the issue is framed as a choice.",
      "Redirect if the argument drifts into the wrong core issue."
    ],
    outputs: [
      "At {subj}: \u201cThis isn\u2019t about who\u2019s a bad person \u2014 it\u2019s about which option we pick.\u201d",
      "At {subj}: \u201cWe\u2019re arguing values when the real question is a choice: do we ship Friday or not?\u201d",
      "At {subj}: \u201cBlame won\u2019t change anything. The choice will.\u201d"
    ],
    learn: "Blame is forensic (past), values are demonstrative (present), choice is deliberative (future). Productive arguments make choice the central issue.",
    develop: "Take three recent disagreements and label each blame, values, or choice. Notice how often the real goal was a choice buried under blame.",
    apply: "Before engaging, decide which core issue serves your goal, and refuse to be dragged onto the other two.",
    examples: [
      "\u201cShould we build the plant in Detroit?\u201d is a choice; \u201cDid O.J. do it?\u201d is blame; \u201cShould abortion be legal?\u201d is values.",
      "A partner\u2019s \u2018you always\u2026\u2019 turns a choice into blame \u2014 the wrong issue for a solution."
    ],
    related: ["control-the-tense", "call-a-foul", "framing"]
  }));
  S.push(tool({
    id: "spot-the-inarguable", name: "Spot the Inarguable", ch: 3, level: 2,
    builds: ["three-core-issues"],
    breakdown: "You cannot deliberate about what is permanent, necessary, or undeniably true \u2014 the sun will (probably) rise tomorrow. Rhetoric works on what's uncertain. When your opponent treats a mere belief as inarguable fact, that's your opening.",
    task: "Separate what is truly inarguable from what is only a belief you can challenge or use.",
    method: [
      "Ask what in {subj} is being treated as \u2018just the way it is.\u2019",
      "Test it: is it permanent and necessary, or only a belief?",
      "If it\u2019s a belief, you can challenge it \u2014 or better, use it to your advantage.",
      "Keep the argument on the arguable part."
    ],
    outputs: [
      "At {subj}: \u201cThat\u2019s not a law of nature \u2014 it\u2019s a choice we made, and choices can change.\u201d",
      "At {subj}: \u201cYou\u2019re calling it impossible, but it\u2019s only unfamiliar. Let\u2019s test it.\u201d",
      "At {subj}: \u201cWe agree the deadline is real. Everything about how we hit it is up for grabs.\u201d"
    ],
    learn: "Deliberative argument prefers to use beliefs to its advantage rather than attack them head-on. Attacking a cherished belief usually just hardens it.",
    develop: "When someone says \u2018that\u2019s just how it is,\u2019 practice distinguishing genuine constraints from disguised opinions.",
    apply: "Locate the false \u2018inarguable\u2019 in an opponent\u2019s case and reopen it as a choice.",
    examples: [
      "\u201cWe\u2019ve always done it this way\u201d dresses up a choice as a necessity.",
      "You can\u2019t argue that 2+2=4, but you can argue almost everything people call \u2018obvious.\u2019"
    ],
    related: ["commonplace", "framing"]
  }));

  /* ===================== CHAPTER 4 — Soften Them Up ==================== */
  S.push(tool({
    id: "the-three-appeals", name: "The Three Appeals: Ethos, Logos, Pathos", ch: 4, level: 1,
    builds: ["set-your-goal"],
    breakdown: "Aristotle's three tools of persuasion: ethos (argue by character \u2014 they trust you), logos (argue by logic \u2014 it makes sense to them), and pathos (argue by emotion \u2014 they feel moved to act). Most real persuasion uses all three, usually in that order.",
    task: "Choose which appeal \u2014 character, logic, or emotion \u2014 to lead with, then combine all three.",
    method: [
      "Diagnose what\u2019s missing in {subj}: do they doubt you (ethos), the reasoning (logos), or lack the will (pathos)?",
      "Lead with the appeal that\u2019s weakest.",
      "Establish trust (ethos) early, make the case (logos) in the middle, and move them (pathos) near the end.",
      "Check that all three are present, not just your favorite."
    ],
    outputs: [
      "Ethos, at {subj}: \u201cI\u2019ve shipped three of these before, so hear me out.\u201d",
      "Logos, at {subj}: \u201cThe numbers only work if we start now \u2014 here\u2019s why.\u201d",
      "Pathos, at {subj}: \u201cImagine how it feels to finally have this off our plate.\u201d"
    ],
    learn: "Logic alone rarely moves people to act; even Aristotle, who invented formal logic, said persuasion needs character and emotion too.",
    develop: "Audit your own arguing style \u2014 most people lean on one appeal. Deliberately practice the two you neglect.",
    apply: "For an upcoming ask, draft one ethos line, one logos line, and one pathos line, and deliver them in that sequence.",
    examples: [
      "A doctor persuades with ethos (credentials), logos (test results), and pathos (\u2018for your kids\u2019).",
      "A pure-logic pitch to an anxious client fails because it skips ethos and pathos."
    ],
    related: ["sympathy", "the-perfect-audience", "the-hook"]
  }));
  S.push(tool({
    id: "sympathy", name: "Sympathy: Share Their Mood", ch: 4, level: 1,
    builds: ["the-three-appeals"],
    breakdown: "Rhetorical sympathy means aligning yourself with the audience's emotion instead of contradicting it. You don't have to feel it; you have to show you register it. A denied mood ('calm down!') resists; a shared mood opens.",
    task: "Register and mirror the audience's emotion before you try to change it.",
    method: [
      "Read the dominant emotion in {subj}.",
      "Show you see it \u2014 match your face, tone, and words to it.",
      "Never deny or belittle the mood (\u2018whoa, decaf\u2019 makes it worse).",
      "Once they feel understood, gently move the mood where you want it."
    ],
    outputs: [
      "At {subj}: \u201cYou have every right to be furious \u2014 I would be too.\u201d",
      "At {subj}: \u201cThis is genuinely scary. Let\u2019s look at it together.\u201d",
      "At {subj}: \u201cI can hear how tired you are of this. So can we make it the last time?\u201d"
    ],
    learn: "Sympathy is a pathos tool of alignment, not agreement. It proves \u2018I care,\u2019 which is the price of admission to change anyone\u2019s mind.",
    develop: "Practice naming the other person\u2019s emotion out loud before responding. It slows you down and disarms them.",
    apply: "Facing an upset audience, lead with a line that mirrors their feeling before you offer a single fact.",
    examples: [
      "To an angry man, look stern and concerned rather than telling him to relax.",
      "\u201cI\u2019d be frustrated too\u201d earns the right to then say \u2018here\u2019s what we can do.\u2019"
    ],
    related: ["storytelling", "emotional-volume-control", "expressed-love"]
  }));


  /* ===================== CHAPTER 5 — Get Them to Like You ============== */
  S.push(tool({
    id: "decorum", name: "Decorum: Meet Their Expectations", ch: 5, level: 2,
    builds: ["the-three-appeals"],
    breakdown: "Decorum is agreeability by fitting the audience's expectations for how a trustworthy person in your position should look, sound, and behave. It is not 'being yourself' \u2014 it is matching the group's picture of a leader they can follow.",
    task: "Adjust your tone, appearance, and manner to fit what this audience expects of someone they'd trust.",
    method: [
      "Ask what this audience in {subj} expects from someone worth listening to.",
      "Notice where your natural style clashes with that expectation.",
      "Adjust your dress, tone, and manner to fit \u2014 without faking who you are.",
      "Fit in first; stand out only once you\u2019ve earned it."
    ],
    outputs: [
      "At {subj}: matching the room \u2014 crisp and brief with executives, warm and plain with a family.",
      "At {subj}: \u201cLet me put this the way it matters to you\u2026\u201d then use their frame, not yours.",
      "At {subj}: dialing your energy up or down to mirror the group\u2019s tempo."
    ],
    learn: "Rhetorical decorum is deeper than etiquette \u2014 it\u2019s the art of belonging enough that the audience lets its guard down and grants you influence.",
    develop: "Before entering a room, name the group\u2019s expectations and one adjustment you\u2019ll make to meet them.",
    apply: "Match the audience\u2019s code before you try to lead it anywhere new.",
    examples: [
      "Eminem wins a rap battle by owning every insult first \u2014 perfect decorum for that crowd.",
      "A brilliant idea delivered in the wrong register (too casual, too stiff) gets rejected on style alone."
    ],
    related: ["code-grooming", "the-perfect-audience", "identity-strategy"]
  }));
  S.push(tool({
    id: "code-grooming", name: "Code Grooming: Speak Their Language", ch: 5, level: 2,
    builds: ["decorum"],
    breakdown: "Every group has its own vocabulary, references, and in-jokes. Using that code signals 'I'm one of you' and earns instant belonging. The reverse \u2014 code inoculation \u2014 is noticing when someone uses your group's code to manipulate you.",
    task: "Use the audience's own words and references to show you belong to their group.",
    method: [
      "Listen for the special terms, names, and references the group in {subj} uses.",
      "Fold a few of them naturally into your own speech.",
      "Avoid overdoing it \u2014 forced slang backfires.",
      "Stay alert when others use YOUR code on you (code inoculation)."
    ],
    outputs: [
      "At {subj}: dropping the team\u2019s shorthand \u2014 \u201cLet\u2019s not let this become another Q3 fire drill.\u201d",
      "At {subj}: referencing the shared touchstone everyone in the group knows.",
      "At {subj}: \u201cNotice they\u2019re using our words to sell us something \u2014 let\u2019s check the substance.\u201d"
    ],
    learn: "Shared code is a shortcut to ethos: it proves membership faster than any argument. Insiders trust insiders.",
    develop: "Collect the vocabulary of a group you want to persuade. Note which words are passwords of belonging.",
    apply: "Sprinkle the group\u2019s own terms into your pitch \u2014 and flag it when a persuader uses yours.",
    examples: [
      "A new manager who learns the team\u2019s nicknames and rituals is trusted faster.",
      "Politicians borrow a community\u2019s code words to seem like one of its own."
    ],
    related: ["decorum", "identity-strategy"]
  }));

  /* ===================== CHAPTER 6 — Make Them Listen ================== */
  S.push(tool({
    id: "the-perfect-audience", name: "Build Leadership Ethos", ch: 6, level: 2,
    builds: ["the-three-appeals", "decorum"],
    breakdown: "To make an audience listen and follow, they must find you not just likable but trustworthy as a leader. Aristotle's three ingredients of that trust are virtue (you share their values), practical wisdom (you know how to fix the problem), and disinterest (you're not just in it for yourself). Heinrichs abbreviates them 'C3': cause, craft, caring.",
    task: "Project the three traits of persuasive leadership: virtue (cause), practical wisdom (craft), and disinterest (caring).",
    method: [
      "Diagnose which of the three the audience in {subj} doubts about you.",
      "Signal virtue: show you live by their values.",
      "Signal craft: show you can actually solve the problem.",
      "Signal caring: show the choice helps them, not just you."
    ],
    outputs: [
      "At {subj}: \u201cWe all want the same thing here (cause) \u2014 and I\u2019ve fixed this before (craft) \u2014 and honestly it costs me more than you (caring).\u201d",
      "At {subj}: \u201cI\u2019m not doing this for credit; I just want it done right.\u201d",
      "At {subj}: quietly demonstrating competence instead of claiming it."
    ],
    learn: "Likable knuckleheads make bad leaders. Audiences follow people they believe are good (virtue), capable (wisdom), and unselfish (disinterest).",
    develop: "For a role you want people to trust you in, list one proof for each of cause, craft, and caring.",
    apply: "Before asking an audience to follow you, make sure all three C3 traits are visible.",
    examples: [
      "A candidate wins by looking principled, competent, and selfless \u2014 lose any one and trust collapses.",
      "\u201cThink of the ethos traits as C3: cause, craft, caring.\u201d"
    ],
    related: ["persuasive-virtue", "practical-wisdom", "caring-disinterest"]
  }));
  S.push(tool({
    id: "persuasive-virtue", name: "Persuasive Virtue (Cause)", ch: 6, level: 2,
    builds: ["the-perfect-audience"],
    breakdown: "Rhetorical virtue is the appearance of living up to your audience's values \u2014 not moral perfection, but visible alignment with the cause the audience cares about. It is temporary and situational: you show the virtue this audience wants to see.",
    task: "Show the audience you embody the values they care most about.",
    method: [
      "Identify the top value of the audience in {subj}.",
      "Attach yourself to that value in word and deed.",
      "Avoid bragging about it \u2014 demonstrate it instead.",
      "Keep the virtue tuned to THIS audience\u2019s values, not your own."
    ],
    outputs: [
      "At {subj}: \u201cI\u2019d rather be fair than fast \u2014 same as this team.\u201d",
      "At {subj}: showing up early and prepared to prove you value their time.",
      "At {subj}: \u201cWhat matters to me here is exactly what matters to you.\u201d"
    ],
    learn: "Virtue in rhetoric is a costume you wear for the argument \u2014 the appearance of your audience\u2019s values \u2014 which is why it must adapt to each audience.",
    develop: "Practice naming an audience\u2019s core value in one word, then finding an honest way you share it.",
    apply: "Lead with the value your audience prizes and let your behavior prove you hold it too.",
    examples: [
      "George Washington won loyalty by visibly sacrificing for the cause his soldiers believed in.",
      "The same person plays up thrift to one crowd and generosity to another."
    ],
    related: ["borrowed-bragging", "tactical-flaw", "virtue-yardstick", "identity-strategy"]
  }));
  S.push(tool({
    id: "borrowed-bragging", name: "Borrowed Bragging (Character Reference)", ch: 6, level: 2,
    builds: ["persuasive-virtue"],
    breakdown: "Reciting your own r\u00e9sum\u00e9 is the least effective way to boost your ethos. Get others to do your bragging for you: a third-party endorsement, the more disinterested the better, carries the credit without the conceit. Straight bragging only works for audiences who enjoy hyperbole (think Muhammad Ali).",
    task: "Establish your credibility through a third party instead of boasting directly.",
    method: [
      "Decide what credibility you need in {subj}.",
      "Find someone the audience trusts to vouch for it.",
      "Let the endorsement surface naturally rather than quoting yourself.",
      "Reserve direct bragging only for crowds who love bravado."
    ],
    outputs: [
      "At {subj}: \u201cThe last team I helped said the rollout paid for itself in a month \u2014 ask them.\u201d",
      "At {subj}: letting a respected colleague introduce your track record.",
      "At {subj}: \u201cDon\u2019t take my word for it \u2014 here\u2019s what the client wrote.\u201d"
    ],
    learn: "Witness bragging borrows a trusted third party\u2019s ethos; the more disinterested the witness, the more persuasive.",
    develop: "Line up references and testimonials in advance so your credibility arrives from someone else\u2019s mouth.",
    apply: "Replace \u2018I\u2019m great at this\u2019 with a specific, disinterested voice that says it for you.",
    examples: [
      "A job candidate lets a glowing reference make the claims she can\u2019t make herself.",
      "\u201cGod\u2019s ethos needs no r\u00e9sum\u00e9\u201d \u2014 but the rest of us do better with witnesses."
    ],
    related: ["persuasive-virtue", "the-perfect-audience"]
  }));
  S.push(tool({
    id: "tactical-flaw", name: "The Tactical Flaw", ch: 6, level: 2,
    builds: ["persuasive-virtue"],
    breakdown: "Deliberately reveal a small weakness that wins sympathy or shows the sacrifice you've made for the audience's cause. A well-chosen flaw makes you human and trustworthy \u2014 and can be a first-rate ethos move precisely because it looks like honesty.",
    task: "Reveal a modest, disarming weakness that proves your dedication or humanity.",
    method: [
      "Pick a flaw in {subj} that is real but not disqualifying.",
      "Reveal it before an opponent can weaponize it.",
      "Tie the flaw to your commitment (\u2018I lose sleep over this\u2019).",
      "Let it earn sympathy, then return to your case."
    ],
    outputs: [
      "At {subj}: \u201cI\u2019m not the smoothest presenter \u2014 I care more about getting this right than looking polished.\u201d",
      "At {subj}: \u201cI\u2019ll admit I pushed too hard last quarter because I wanted this so badly.\u201d",
      "At {subj}: \u201cI\u2019m exhausted \u2014 that\u2019s how much this project means to me.\u201d"
    ],
    learn: "A flaw revealed on your own terms shows virtue and disarms critics; hidden and exposed by others, the same flaw destroys ethos.",
    develop: "Identify one endearing weakness you can own publicly. Rehearse revealing it lightly.",
    apply: "Pre-empt your most likely criticism by naming a small version of it yourself, tied to how much you care.",
    examples: [
      "A nervous speaker admits the nerves \u2014 the audience roots for them.",
      "Washington\u2019s glasses moment: \u2018I have grown gray in your service\u2019 revealed a flaw that won the room."
    ],
    related: ["dubitatio", "persuasive-virtue", "epiphany"]
  }));
  S.push(tool({
    id: "eddie-haskell-ploy", name: "The Eddie Haskell Ploy", ch: 6, level: 3,
    builds: ["persuasive-virtue", "control-the-tense"],
    breakdown: "When a decision is going to go against you anyway, endorse it heartily \u2014 make the inevitable look like your own willing sacrifice. You lose nothing you were going to keep, and you gain a reputation for virtue and disinterest. (Also called the opinion switch.)",
    task: "Turn an unavoidable loss into a display of virtue by enthusiastically backing it.",
    method: [
      "Recognize when the outcome in {subj} is already decided against you.",
      "Stop resisting and switch to hearty support.",
      "Frame your switch as putting the greater good first.",
      "Bank the credit for being gracious and unselfish."
    ],
    outputs: [
      "At {subj}: \u201cYou know what \u2014 the team\u2019s right. Let\u2019s do it their way, and I\u2019m all in.\u201d",
      "At {subj}: \u201cI\u2019ll happily give up my slot if it helps the whole project land.\u201d",
      "At {subj}: \u201cSince this is where we\u2019re headed, let me be the first to champion it.\u201d"
    ],
    learn: "Endorsing the inevitable is the greatest sucking-up tool ever invented \u2014 it converts a certain defeat into a reputation for virtue.",
    develop: "Learn to sense when a fight is truly lost, and practice pivoting to gracious support before you\u2019re forced to.",
    apply: "When you can\u2019t win, be the first and most enthusiastic to back the winning side.",
    examples: [
      "A politician who can\u2019t stop a popular bill co-sponsors it and takes credit.",
      "Conceding a lost point loudly earns more than losing it quietly."
    ],
    related: ["concession", "persuasive-virtue"]
  }));

  /* ===================== CHAPTER 7 — Use Your Craft =================== */
  S.push(tool({
    id: "practical-wisdom", name: "Practical Wisdom (Craft / Phronesis)", ch: 7, level: 2,
    builds: ["the-perfect-audience"],
    breakdown: "Phronesis is the audience's sense that you know your craft and can solve the problem at hand. You show it three ways: display relevant experience, show you can bend the rules when needed, and appear to take the sensible middle course. Competence in one field does not automatically transfer \u2014 show craft relevant to THIS problem.",
    task: "Demonstrate you have the specific know-how to solve the audience's actual problem.",
    method: [
      "Pin down the exact problem the audience in {subj} needs solved.",
      "Show experience with that specific problem, not a vaguely related one.",
      "Show you know when to bend the rule to fit the case.",
      "Position yourself in the reasonable middle, not the extreme."
    ],
    outputs: [
      "At {subj}: \u201cI\u2019ve handled this exact situation twice \u2014 here\u2019s what actually works.\u201d",
      "At {subj}: \u201cThe rule says X, but in this case the smarter move is Y, and here\u2019s why.\u201d",
      "At {subj}: \u201cI\u2019m not for scrapping it or keeping it \u2014 there\u2019s a sensible middle.\u201d"
    ],
    learn: "Aristotle\u2019s phronesis is street-smart judgment: knowing not just the rules but when and how to apply them to a particular case.",
    develop: "For a domain you want authority in, gather concrete stories of solving that exact problem.",
    apply: "Replace generic expertise claims with a specific, relevant example of craft.",
    examples: [
      "You trust the mechanic who\u2019s fixed your exact model, not the one with a general degree.",
      "A leader who knows when to break protocol looks wiser than one who never bends."
    ],
    related: ["that-depends-test", "comparable-experience-test", "sussing-the-real-issue"]
  }));

  /* ===================== CHAPTER 8 — Show You Care ==================== */
  S.push(tool({
    id: "caring-disinterest", name: "Disinterest (Caring / Eunoia)", ch: 8, level: 2,
    builds: ["the-perfect-audience"],
    breakdown: "Disinterest \u2014 Aristotle's eunoia \u2014 is the appearance of putting the audience's interests ahead of your own. It is the hardest of the three ethos traits to fake and the most powerful when real: audiences follow people who seem willing to sacrifice for them.",
    task: "Show the audience that the choice serves them more than it serves you.",
    method: [
      "Ask what the audience in {subj} stands to gain versus what you gain.",
      "Emphasize their benefit; downplay yours.",
      "Where possible, show a real cost to you.",
      "Never let self-interest look like your motive."
    ],
    outputs: [
      "At {subj}: \u201cHonestly this makes more work for me \u2014 I\u2019m pushing it because it\u2019s right for the team.\u201d",
      "At {subj}: \u201cI\u2019d benefit either way; I\u2019m recommending the one that\u2019s better for you.\u201d",
      "At {subj}: \u201cI have no stake in which vendor \u2014 only in you getting the best result.\u201d"
    ],
    learn: "Disinterest is about alignment of needs, not selflessness \u2014 the audience trusts a persuader whose interests visibly match theirs.",
    develop: "Before advocating, find the honest way your recommendation costs you something or benefits them most.",
    apply: "Foreground the audience\u2019s benefit and any real sacrifice of yours; hide nothing but flaunt nothing.",
    examples: [
      "A salesman you trust points you to the cheaper option that suits you better.",
      "\u201cThis will help you more than it helps me\u201d is the most disarming sentence in rhetoric."
    ],
    related: ["reluctant-conclusion", "personal-sacrifice", "disinterest-disconnect"]
  }));
  S.push(tool({
    id: "reluctant-conclusion", name: "The Reluctant Conclusion", ch: 8, level: 2,
    builds: ["caring-disinterest"],
    breakdown: "Act as though you reached your conclusion only because its rightness compelled you \u2014 against your own wishes. A conclusion you seem to have resisted looks unbiased, which makes it far more persuasive than one you obviously wanted all along.",
    task: "Present your conclusion as one you arrived at reluctantly, driven only by the evidence.",
    method: [
      "State that you\u2019d have preferred a different answer in {subj}.",
      "Walk through what forced you to your conclusion.",
      "Show the conclusion overrode your own preference.",
      "Let your reluctance vouch for your objectivity."
    ],
    outputs: [
      "At {subj}: \u201cI really wanted to keep the current plan \u2014 but the numbers left me no choice.\u201d",
      "At {subj}: \u201cBelieve me, I argued the other side first. It didn\u2019t hold up.\u201d",
      "At {subj}: \u201cThis isn\u2019t the answer I hoped for, but it\u2019s the honest one.\u201d"
    ],
    learn: "A conclusion you seem to have fought against reads as truth, not preference \u2014 reluctance is a badge of disinterest.",
    develop: "Practice framing recommendations as \u2018I didn\u2019t want to believe it, but\u2026\u2019 when it\u2019s honestly true.",
    apply: "When your favored view could look self-serving, show the journey that reluctantly led you there.",
    examples: [
      "\u201cI\u2019d just as soon walk her to the movie\u2026\u201d \u2014 the reluctant setup that makes the ask land.",
      "A judge who clearly wishes she could rule otherwise is more convincing."
    ],
    related: ["caring-disinterest", "dubitatio"]
  }));
  S.push(tool({
    id: "personal-sacrifice", name: "Personal Sacrifice", ch: 8, level: 2,
    builds: ["caring-disinterest"],
    breakdown: "Claim (truthfully) that the choice will cost you and help the audience \u2014 the strongest possible proof of disinterest. Visible sacrifice for the audience's benefit converts skeptics because self-interested people don't give things up.",
    task: "Point to a real cost you bear so the audience benefits.",
    method: [
      "Identify what you genuinely give up in {subj}.",
      "Make that sacrifice visible without whining about it.",
      "Connect your sacrifice directly to the audience\u2019s gain.",
      "Let the sacrifice speak louder than any claim of good intent."
    ],
    outputs: [
      "At {subj}: \u201cI\u2019m taking the late shift so the rest of you don\u2019t have to.\u201d",
      "At {subj}: \u201cThis cuts into my budget too \u2014 I think it\u2019s worth it for the team.\u201d",
      "At {subj}: \u201cI\u2019ll be the one on the hook if it fails. I still say we do it.\u201d"
    ],
    learn: "Sacrifice is disinterest made concrete: people believe you care when you visibly pay for it.",
    develop: "Look for honest ways your proposals cost you, and learn to surface them modestly.",
    apply: "When trust is thin, lead with the price you\u2019re personally willing to pay.",
    examples: [
      "A boss who takes the blame to protect the team earns fierce loyalty.",
      "Leaders who go last in line eat first in their followers\u2019 esteem."
    ],
    related: ["caring-disinterest", "tactical-flaw"]
  }));
  S.push(tool({
    id: "dubitatio", name: "Dubitatio: Seem to Doubt Yourself", ch: 8, level: 2,
    builds: ["caring-disinterest"],
    breakdown: "Don't look slick. Seem momentarily unsure of exactly what to say. A touch of doubt makes you look honest rather than manipulative \u2014 the audience must never notice the rhetoric working. Overpolished delivery triggers suspicion.",
    task: "Show a flicker of humble uncertainty so you don't seem too rehearsed.",
    method: [
      "Notice where you might sound too smooth in {subj}.",
      "Add a small, genuine-seeming hesitation (\u2018I\u2019m not sure how to put this\u2026\u2019).",
      "Let the audience feel you\u2019re thinking, not performing.",
      "Keep it light \u2014 doubt seasons the speech; it doesn\u2019t drown it."
    ],
    outputs: [
      "At {subj}: \u201cI\u2019ve been trying to find the right way to say this\u2026\u201d",
      "At {subj}: \u201cHonestly, I\u2019m of two minds \u2014 but here\u2019s where I land.\u201d",
      "At {subj}: \u201cForgive me if this comes out wrong \u2014 I really care about getting it right.\u201d"
    ],
    learn: "Dubitatio hides the craft; a speaker who seems to search for words looks sincere, not scripted.",
    develop: "Practice a natural-sounding pause or self-correction to soften your most polished lines.",
    apply: "When you risk sounding too rehearsed, add one honest note of hesitation.",
    examples: [
      "A leader who pauses to \u2018find the words\u2019 seems more truthful than one who never falters.",
      "The nervous speaker who admits nerves turns a flaw into trust."
    ],
    related: ["tactical-flaw", "reluctant-conclusion"]
  }));



  /* ===================== CHAPTER 9 — Control the Mood ==================== */
  S.push(tool({
    id: "storytelling", name: "Persuade with a Story", ch: 9, level: 2,
    builds: ["sympathy"],
    breakdown: "Emotion is the engine of action, and the surest way to move emotion is narrative. A story bypasses the audience's logical defenses and lets them feel the point before they can argue with it. Heinrichs shows that a well-told anecdote \u2014 concrete, sensory, with a character the audience roots for \u2014 does more persuading than a page of statistics.",
    task: "Replace an abstract claim with a concrete, feeling-filled story.",
    method: [
      "Find the emotion you want the audience to feel about {subj}.",
      "Pick one real, specific person or moment that embodies it.",
      "Tell it in the present, with sensory detail, so they live it.",
      "Land the story exactly on the choice you want them to make."
    ],
    outputs: [
      "Instead of a statistic about {subj}, open with: \u201cLet me tell you about the night this actually happened\u2026\u201d",
      "At {subj}: \u201cPicture one person this affects \u2014 here\u2019s her Tuesday morning.\u201d",
      "At {subj}: \u201cI\u2019ll never forget the look on his face when\u2026\u201d"
    ],
    learn: "Facts inform, but stories move. A narrative gives the audience a character to care about and lets them feel the conclusion before you state it.",
    develop: "Take a claim you often make and rebuild it as a 30-second story about one specific person, in the present tense, ending on your point.",
    apply: "Before your next persuasive moment, swap your strongest statistic for the single human story behind it.",
    examples: [
      "A charity raises more with one named child\u2019s story than with a chart of millions in need.",
      "A safety briefing lands harder as \u2018here\u2019s what happened to Dave\u2019 than as a list of rules."
    ],
    related: ["sympathy", "the-pathetic-ending", "enargeia"]
  }));
  S.push(tool({
    id: "emotional-volume-control", name: "Set the Emotional Volume", ch: 9, level: 2,
    builds: ["sympathy"],
    breakdown: "Pathos is not just about turning emotion up; it is about setting it to the right level. The rhetorician decides how much feeling the moment needs \u2014 sometimes a surge, sometimes a hush \u2014 and adjusts volume, pace, and word choice to hit it. Matching the audience's current mood first (then leading it where you want) is the key.",
    task: "Decide the emotional level the moment needs, then dial the audience to it.",
    method: [
      "Read the room's current emotional temperature about {subj}.",
      "Decide the level you need \u2014 fired up, or calmed down?",
      "Match their mood first so they feel understood.",
      "Then lead the volume up or down with your pace and words."
    ],
    outputs: [
      "To raise the heat at {subj}: shorten sentences, quicken pace, name the stakes.",
      "To lower it at {subj}: slow down, soften the voice, acknowledge the feeling.",
      "At {subj}: \u201cI know this feels huge \u2014 let\u2019s take it one calm step at a time.\u201d"
    ],
    learn: "Persuaders control not just which emotion but how much of it. The right volume for the moment matters as much as the right feeling.",
    develop: "Practice delivering the same line three ways \u2014 low, medium, high emotional volume \u2014 and notice which fits which audience.",
    apply: "Next time you argue, first match the audience\u2019s mood, then nudge the volume toward the level your goal requires.",
    examples: [
      "A coach quiets a panicking team before lifting them, rather than shouting into their fear.",
      "A negotiator lowers her voice as the other side raises theirs, pulling the temperature down."
    ],
    related: ["sympathy", "storytelling", "calming-humor", "passive-voice"]
  }));
  S.push(tool({
    id: "the-pathetic-ending", name: "End with Emotion", ch: 9, level: 2,
    builds: ["emotional-volume-control"],
    breakdown: "Heinrichs' rule for structure: lead with logic and character, but finish with emotion. The end of an argument is what sticks, so the most feeling-laden material \u2014 the story, the vivid image, the call \u2014 belongs last. Peak the emotion right before you ask for the choice.",
    task: "Arrange your argument so the strongest emotion comes at the very end.",
    method: [
      "Lay out {subj} logic and credibility first, while the audience is thinking.",
      "Save the most moving material \u2014 the story, the image \u2014 for last.",
      "Peak the feeling right before you ask for the decision.",
      "Stop on the emotional high; don\u2019t dilute it with more data."
    ],
    outputs: [
      "Close {subj} with: \u201cSo that\u2019s the case \u2014 but here\u2019s what it really means for us.\u201d",
      "End {subj} on the vivid picture, then the ask: \u201cThat\u2019s the future I want. Are you with me?\u201d",
      "Finish {subj} with the human story, not the spreadsheet."
    ],
    learn: "Audiences remember endings. Logic earns the nod; emotion drives the action, so it belongs at the close.",
    develop: "Reorder an argument you\u2019ve made so the emotional punch lands in the final line, and feel how much stronger it closes.",
    apply: "In your next pitch, move your most moving moment to the very end, immediately before the request.",
    examples: [
      "A closing argument saves the victim\u2019s story for its final minute.",
      "A fundraising email ends on the child\u2019s photo and a single sentence, not the budget."
    ],
    related: ["emotional-volume-control", "storytelling", "the-period"]
  }));
  S.push(tool({
    id: "patriotism", name: "Summon Belonging", ch: 9, level: 2,
    builds: ["storytelling"],
    breakdown: "One of the strongest persuasive emotions is the feeling of belonging to a group \u2014 a team, a family, a nation, a cause. Heinrichs shows how invoking shared identity (\u2018people like us\u2019) makes an audience want to act in the group's name. It works because we take pride in the tribe and dread letting it down.",
    task: "Frame the choice as something \u2018people like us\u2019 do.",
    method: [
      "Name the group the audience is proud to belong to in {subj}.",
      "Tie the choice to what that group stands for.",
      "Invoke the shared pride \u2014 and the quiet fear of letting it down.",
      "Make acting your way the way to belong."
    ],
    outputs: [
      "At {subj}: \u201cThis team has never walked away from a hard thing \u2014 let\u2019s not start now.\u201d",
      "At {subj}: \u201cThat\u2019s not who we are. We\u2019re the people who\u2026\u201d",
      "At {subj}: \u201cImagine telling the next generation we were the ones who did this.\u201d"
    ],
    learn: "Belonging is a powerful motivator; people act to honor the group they identify with and to avoid its shame.",
    develop: "Practice naming the identity behind an audience and phrasing your ask as an expression of that identity.",
    apply: "When you need action, remind the audience who they are and let the choice become a matter of group pride.",
    examples: [
      "A captain rallies a team by invoking everything the jersey has stood for.",
      "A community organizer frames volunteering as \u2018what this neighborhood does for its own.\u2019"
    ],
    related: ["storytelling", "emulation", "commonplace"]
  }));
  S.push(tool({
    id: "emulation", name: "Inspire by Emulation", ch: 9, level: 2,
    builds: ["storytelling"],
    breakdown: "Emulation is the productive cousin of envy: the desire to be as good as someone we admire. Heinrichs shows persuaders can light this fire by holding up a model \u2014 a hero, a rival, a better version of the audience itself \u2014 so the audience strains to measure up. It channels aspiration into action.",
    task: "Hold up an admired model so the audience wants to measure up.",
    method: [
      "Find who or what the audience admires in the world of {subj}.",
      "Paint that model as achievable, not out of reach.",
      "Show the gap between where they are and who they could be.",
      "Make your choice the path to closing that gap."
    ],
    outputs: [
      "At {subj}: \u201cThe best teams in our field already do this \u2014 we can be one of them.\u201d",
      "At {subj}: \u201cYou\u2019re better than this result, and I think you know it.\u201d",
      "At {subj}: \u201cImagine being the group everyone else tries to copy.\u201d"
    ],
    learn: "Emulation turns admiration into ambition; a well-chosen model makes the audience want to rise to it.",
    develop: "Practice describing an aspirational model vividly enough that an audience feels the pull to match it.",
    apply: "When motivation flags, show the audience an admired example and frame your ask as the way to join it.",
    examples: [
      "A teacher motivates a class by pointing to alumni who started exactly where they are.",
      "A startup rallies around \u2018let\u2019s be the company others benchmark against.\u2019"
    ],
    related: ["storytelling", "patriotism", "the-advantageous"]
  }));
  S.push(tool({
    id: "unannounced-emotion", name: "Show Feeling, Don't Announce It", ch: 9, level: 2,
    builds: ["emotional-volume-control"],
    breakdown: "Heinrichs warns that stating your emotion (\u2018I'm so excited\u2019) is far weaker than showing it. The audience catches feeling by contagion, not by being told. The persuader displays the emotion \u2014 in voice, face, story \u2014 and lets the audience feel it, never labeling it out loud.",
    task: "Convey your emotion through delivery instead of naming it.",
    method: [
      "Identify the feeling you want to transmit about {subj}.",
      "Delete the label (\u2018I\u2019m angry / thrilled\u2019) from your script.",
      "Show it instead \u2014 in pace, tone, word choice, a telling detail.",
      "Trust emotional contagion to carry it to the audience."
    ],
    outputs: [
      "Not \u201cI\u2019m passionate about {subj}\u201d but a story told with unmistakable fire.",
      "Not \u201cThis worries me\u201d but a lowered voice and a long pause at {subj}.",
      "Let the audience conclude \u201cshe really cares\u201d without you ever saying it."
    ],
    learn: "Announced emotion feels fake; shown emotion is contagious. Audiences feel with you when you display, not declare.",
    develop: "Rewrite an emotional line to remove the feeling-word and instead convey it through detail and delivery.",
    apply: "In your next argument, cut every \u2018I feel\u2019 label and let your voice and story do the work.",
    examples: [
      "A eulogy that shows grief through one memory moves more than \u2018I am very sad today.\u2019",
      "A leader\u2019s quiet, steady tone signals resolve better than the word \u2018resolute.\u2019"
    ],
    related: ["emotional-volume-control", "storytelling", "dubitatio"]
  }));
  S.push(tool({
    id: "nostalgia-and-desire", name: "Wield Nostalgia and Desire", ch: 9, level: 2,
    builds: ["storytelling"],
    breakdown: "Two of the most persuadable emotions look in opposite directions: nostalgia (longing for a better past) and desire (longing for a better future). Heinrichs shows the persuader can summon either \u2014 the warm memory that says \u2018let's get back to that,\u2019 or the vivid want that says \u2018imagine having this.\u2019 Both make the audience yearn, and yearning drives choice.",
    task: "Summon a longing \u2014 backward (nostalgia) or forward (desire) \u2014 that points to your choice.",
    method: [
      "Decide whether {subj} is better sold as a return or an arrival.",
      "For nostalgia, evoke the good old moment they want back.",
      "For desire, paint the future they can almost taste.",
      "Make your choice the bridge to that longed-for state."
    ],
    outputs: [
      "Nostalgia at {subj}: \u201cRemember when things felt simpler? We can have that again.\u201d",
      "Desire at {subj}: \u201cPicture opening the door on the very thing you\u2019ve wanted.\u201d",
      "At {subj}: \u201cThis is how we get back to \u2014 or forward to \u2014 what matters.\u201d"
    ],
    learn: "Longing moves people. Nostalgia sells a return to a cherished past; desire sells arrival at a wanted future.",
    develop: "Practice pitching the same idea twice \u2014 once as nostalgia, once as desire \u2014 and see which fits your audience.",
    apply: "Choose the direction of longing that suits your audience, then make your proposal the way to satisfy it.",
    examples: [
      "A brand revives an old logo to sell the feeling of a simpler time.",
      "A realtor sells not a house but the Sunday mornings the buyer already imagines there."
    ],
    related: ["storytelling", "emulation", "the-hook"]
  }));
  S.push(tool({
    id: "belittlement-charge", name: "Answer Anger by Belittling the Threat", ch: 9, level: 3,
    builds: ["storytelling", "emotional-volume-control"],
    breakdown: "Aristotle taught that anger comes from a sense of being belittled, and it fades when the threat itself seems small or the offender beneath notice. Heinrichs turns this into a tool: to defuse an angry audience, make the thing they fear look manageable, or make the antagonist look too minor to merit the fury \u2014 without belittling the audience itself.",
    task: "Shrink the perceived threat or offender so the audience's anger loses its fuel.",
    method: [
      "Name what the audience feels belittled or threatened by in {subj}.",
      "Recast the threat as smaller, slower, or already handled.",
      "Or recast the offender as too minor to deserve their energy.",
      "Never belittle the audience \u2014 only the danger."
    ],
    outputs: [
      "At {subj}: \u201cIt looks huge from here, but broken into steps it\u2019s completely doable.\u201d",
      "At {subj}: \u201cAre we really going to let someone that small run our whole day?\u201d",
      "At {subj}: \u201cThe scary version is the rumor; the real thing is much smaller.\u201d"
    ],
    learn: "Anger feeds on a sense of belittlement and a menacing threat; shrink the threat and the anger has nothing to burn.",
    develop: "Practice describing a feared problem in deliberately manageable, unthreatening terms.",
    apply: "Facing an angry group, calmly cut the threat down to size so the fear \u2014 and the fury \u2014 subsides.",
    examples: [
      "A manager calms a panicked team by breaking a \u2018disaster\u2019 into three fixable tasks.",
      "A leader defuses outrage by treating a troll as too trivial to reward with anger."
    ],
    related: ["emotional-volume-control", "calming-humor", "backfire"]
  }));

  /* ================= CHAPTER 10 — Turn the Volume Down ================== */
  S.push(tool({
    id: "passive-voice", name: "Cool It with the Passive Voice", ch: 10, level: 2,
    builds: ["emotional-volume-control"],
    breakdown: "Usually we're told to avoid the passive voice, but Heinrichs shows it has a use: it lowers the emotional temperature by hiding the actor. \u2018Mistakes were made\u2019 removes the accused person and takes blame out of the room. When an audience is hot with blame, shifting to passive, agent-less language turns the heat down.",
    task: "Defuse blame by removing the accused actor from the sentence.",
    method: [
      "Notice where blame is heating up {subj}.",
      "Rewrite the accusation without naming who did it.",
      "Shift the focus from the person to the problem.",
      "Redirect the cooled conversation toward a fix."
    ],
    outputs: [
      "Not \u201cYou broke it\u201d but at {subj}: \u201cSomething got broken \u2014 let\u2019s fix it.\u201d",
      "At {subj}: \u201cThe deadline was missed. Now, how do we recover?\u201d",
      "At {subj}: \u201cMistakes happened on all sides \u2014 let\u2019s move forward.\u201d"
    ],
    learn: "The passive voice hides the actor, and hiding the actor takes the accusation \u2014 and the anger \u2014 out of the room.",
    develop: "Practice converting three blaming sentences into agent-less passive ones and feel the temperature drop.",
    apply: "When blame threatens to derail a talk, restate the problem in the passive to cool it and pivot to solutions.",
    examples: [
      "\u2018Errors were made\u2019 lets a team regroup without a witch hunt.",
      "A mediator says \u2018trust was lost\u2019 rather than \u2018you lied,\u2019 keeping both sides at the table."
    ],
    related: ["emotional-volume-control", "control-the-tense", "calming-humor"]
  }));
  S.push(tool({
    id: "cognitive-ease", name: "Make Agreement Feel Easy", ch: 10, level: 2,
    builds: ["emotional-volume-control"],
    breakdown: "People resist when they feel pushed and relax when things feel familiar and effortless. Heinrichs draws on the idea that a comfortable, low-effort argument \u2014 plain words, familiar framing, an unhurried pace \u2014 slips past resistance. A calm, easy delivery signals safety and keeps the audience's guard down.",
    task: "Lower resistance by making your argument feel familiar and effortless.",
    method: [
      "Strip jargon and complexity out of {subj}.",
      "Frame the idea in terms the audience already knows.",
      "Slow the pace so nothing feels rushed or forced.",
      "Let the ease itself signal that agreeing is safe."
    ],
    outputs: [
      "At {subj}: \u201cThis is simpler than it sounds \u2014 it\u2019s really just one small change.\u201d",
      "At {subj}: \u201cYou already do this in other areas; it\u2019s the same idea here.\u201d",
      "At {subj}: an unhurried tone that says \u2018no pressure, take your time.\u2019"
    ],
    learn: "Familiar, low-effort arguments feel true and safe; ease disarms the resistance that pressure provokes.",
    develop: "Practice re-explaining a complex idea in plain, familiar language a distracted person could follow.",
    apply: "When an audience feels cornered, simplify and slow down so agreement feels like the easy, natural choice.",
    examples: [
      "A doctor calms a nervous patient by comparing a procedure to something ordinary.",
      "A salesperson relaxes a wary buyer with plain talk and an unhurried pace."
    ],
    related: ["emotional-volume-control", "passive-voice", "decorum"]
  }));
  S.push(tool({
    id: "calming-humor", name: "Calm with Humor", ch: 10, level: 2,
    builds: ["emotional-volume-control"],
    breakdown: "A well-placed bit of humor releases tension and re-establishes the persuader's calm, likable ethos. Heinrichs notes humor must fit the decorum of the moment \u2014 self-deprecating and gentle rather than mocking \u2014 so it lowers the temperature without belittling anyone. Shared laughter turns adversaries into an audience again.",
    task: "Use gentle, well-timed humor to release tension and regain goodwill.",
    method: [
      "Spot the tension building around {subj}.",
      "Choose humor that fits the moment \u2014 usually at your own expense.",
      "Land it lightly to break the tension, not to mock.",
      "Use the shared laugh to reset the conversation."
    ],
    outputs: [
      "At {subj}: a small self-deprecating joke that says \u2018I\u2019m not your enemy.\u2019",
      "At {subj}: \u201cWell, that went about as smoothly as I planned \u2014 which is to say, not at all.\u201d",
      "At {subj}: light humor that lets everyone exhale before you continue."
    ],
    learn: "Shared laughter dissolves tension and rebuilds likability \u2014 as long as the joke lands on you, not the audience.",
    develop: "Practice a self-deprecating line you can deploy to defuse a tense moment without insulting anyone.",
    apply: "When a room tightens, offer a small, gentle joke at your own expense to reopen goodwill.",
    examples: [
      "A speaker who trips over a word jokes about it and instantly wins the room back.",
      "A manager defuses a tense meeting with a light jab at their own forecasting record."
    ],
    related: ["emotional-volume-control", "decorum", "belittlement-charge"]
  }));



  /* ================= CHAPTER 11 — Gain the High Ground ================== */
  S.push(tool({
    id: "the-advantageous", name: "Argue the Advantageous", ch: 11, level: 2,
    builds: ["audience-goals"],
    breakdown: "In arguments about the future (choice), the winning appeal is rarely what is right or good \u2014 it is what is advantageous to the audience. Heinrichs shows that deliberative rhetoric turns on the audience's own self-interest: their comfort, safety, gain, or convenience. Frame your proposal as the choice that benefits them, not merely the noble one.",
    task: "Recast your proposal as the option that most benefits the audience.",
    method: [
      "Identify what the audience most wants or fears in {subj}.",
      "Show how your choice serves that interest better than the alternatives.",
      "Lead with their advantage, not your rightness.",
      "Let \u2018what\u2019s good for you\u2019 carry the argument."
    ],
    outputs: [
      "At {subj}: \u201cHere\u2019s what this actually does for you.\u201d",
      "At {subj}: \u201cThe safe, low-cost move happens to be the one I\u2019m proposing.\u201d",
      "At {subj}: \u201cYou come out ahead either way \u2014 but most ahead if we do this.\u201d"
    ],
    learn: "Arguments about the future turn on advantage. People choose what benefits them, so lead with their interest, not your virtue.",
    develop: "Take a proposal you\u2019d normally defend as \u2018right\u2019 and rewrite it purely in terms of the audience\u2019s advantage.",
    apply: "In your next pitch, open with what the audience gains rather than why you\u2019re correct.",
    examples: [
      "A policy sells better as \u2018this saves you money\u2019 than as \u2018this is the moral thing.\u2019",
      "A vendor wins by showing the buyer\u2019s upside, not the vendor\u2019s features."
    ],
    related: ["audience-goals", "commonplace", "the-hook", "emulation"]
  }));
  S.push(tool({
    id: "commonplace", name: "Argue from Commonplaces", ch: 11, level: 2,
    builds: ["the-advantageous"],
    breakdown: "A commonplace is a belief, value, or attitude an audience already holds \u2014 the shared assumptions of the tribe. Heinrichs calls them the high ground of rhetoric: argue from the audience's own commonplaces and you seem to be simply confirming what they already know. The trick is to spot their commonplaces and root your argument in them.",
    task: "Ground your argument in a belief the audience already holds.",
    method: [
      "Listen for the values and sayings the audience takes for granted in {subj}.",
      "Pick the commonplace that best supports your choice.",
      "Phrase your argument as a natural extension of that belief.",
      "Let them feel they\u2019re agreeing with themselves, not you."
    ],
    outputs: [
      "At {subj}: \u201cWe\u2019ve always believed in X \u2014 and that\u2019s exactly why we should do this.\u201d",
      "At {subj}: \u201cYou already know that Y; this is just Y applied here.\u201d",
      "At {subj}: quote their own motto back to them, pointed at your choice."
    ],
    learn: "Commonplaces are the audience\u2019s shared beliefs. Argue from them and agreement feels like common sense, not persuasion.",
    develop: "For an audience you face often, list five commonplaces they hold, then practice attaching an argument to each.",
    apply: "Before arguing, name one belief your audience already shares and build your case on top of it.",
    examples: [
      "A manager sells change by invoking the team\u2019s pride in \u2018doing things right the first time.\u2019",
      "A campaign roots its pitch in the community\u2019s shared value of looking after its own."
    ],
    related: ["the-advantageous", "babbling-spotter", "commonplace-label", "the-rejection", "framing"]
  }));
  S.push(tool({
    id: "babbling-spotter", name: "Spot the Tribe's Babble", ch: 11, level: 2,
    builds: ["commonplace"],
    breakdown: "Heinrichs' term for the repeated words, slogans, and buzzwords a group can't stop saying \u2014 its 'babble.' The babble reveals a tribe's commonplaces in the open. By listening for the phrases an audience keeps repeating, you locate the values you can argue from and the identity you can appeal to.",
    task: "Detect a group's repeated words to reveal what it values.",
    method: [
      "Listen for the words and phrases the group repeats around {subj}.",
      "Note which ones carry pride, approval, or scorn.",
      "Map each buzzword to the value beneath it.",
      "Use their own vocabulary when you argue back."
    ],
    outputs: [
      "At {subj}: notice they keep saying \u2018scrappy\u2019 \u2014 they value doing more with less.",
      "At {subj}: echo their prized word: \u201cThis is the scrappy way to solve it.\u201d",
      "At {subj}: avoid the words they say with a sneer."
    ],
    learn: "A tribe\u2019s repeated buzzwords \u2014 its babble \u2014 broadcast its commonplaces; listen and you learn exactly how to argue to it.",
    develop: "Eavesdrop on a group you want to persuade and write down the ten words they can\u2019t stop using.",
    apply: "Before persuading a group, collect its favorite words and thread them into your argument.",
    examples: [
      "A tech team that keeps saying \u2018ship it\u2019 values speed \u2014 argue in those terms.",
      "A boardroom that repeats \u2018shareholder value\u2019 tells you the commonplace to invoke."
    ],
    related: ["commonplace", "commonplace-label", "decorum"]
  }));
  S.push(tool({
    id: "commonplace-label", name: "Label to Own the High Ground", ch: 11, level: 3,
    builds: ["commonplace"],
    breakdown: "A powerful move is to attach a value-laden label to your side and a negative one to the other \u2014 turning a commonplace into a banner. Heinrichs shows that whoever controls the labels controls the moral high ground: 'pro-choice' vs. 'pro-life,' 'reform' vs. 'radical.' Choose labels that carry the audience's commonplaces on your behalf.",
    task: "Attach an approving label to your side and a fitting one to the alternative.",
    method: [
      "Find the commonplace that most favors your position on {subj}.",
      "Coin a short label that packs that value in.",
      "Apply it to your side consistently until it sticks.",
      "Let the label do the arguing every time it\u2019s repeated."
    ],
    outputs: [
      "At {subj}: call your plan \u2018the responsible option\u2019 and repeat it.",
      "At {subj}: name the alternative \u2018the risky shortcut.\u2019",
      "At {subj}: give your idea a title that sounds like the audience\u2019s own value."
    ],
    learn: "Labels carry commonplaces. Whoever names the options frames the whole argument on favorable ground.",
    develop: "Practice inventing a two-word, value-loaded label for a position you hold and its opposite.",
    apply: "Before a debate, decide the label you\u2019ll attach to your side and use it every time.",
    examples: [
      "\u2018Tax relief\u2019 wins where \u2018tax cut\u2019 merely informs.",
      "Branding a policy \u2018common-sense reform\u2019 borrows two commonplaces at once."
    ],
    related: ["commonplace", "framing", "redefinition"]
  }));
  S.push(tool({
    id: "the-rejection", name: "The Persuasive Rejection", ch: 11, level: 2,
    builds: ["commonplace"],
    breakdown: "Sometimes the strongest move is to reject a false choice or a hostile premise outright \u2014 but from higher ground. Heinrichs shows you can decline the terms you're handed by appealing to a shared commonplace that trumps them, refusing the frame without seeming defensive. You reject the question and offer a better one rooted in common values.",
    task: "Decline a bad premise by appealing to a higher shared value.",
    method: [
      "Spot the loaded premise being pushed on you in {subj}.",
      "Name a commonplace the audience holds even more strongly.",
      "Reject the premise in the name of that higher value.",
      "Offer your own framing to replace it."
    ],
    outputs: [
      "At {subj}: \u201cI won\u2019t accept that either/or \u2014 what we really care about is X.\u201d",
      "At {subj}: \u201cThat\u2019s the wrong question. The real one is\u2026\u201d",
      "At {subj}: \u201cWe don\u2019t do things that way here, and here\u2019s the value that says so.\u201d"
    ],
    learn: "You can refuse a hostile frame by standing on a commonplace the audience prizes more than the premise being pushed.",
    develop: "Practice answering a loaded question by rejecting its premise and re-anchoring on a shared value.",
    apply: "When handed a bad frame, decline it out loud in the name of a higher common value and re-pose the question.",
    examples: [
      "A leader refuses \u2018cut jobs or cut quality\u2019 by invoking the value of long-term trust.",
      "A candidate rejects a gotcha premise: \u2018The question isn\u2019t who to blame \u2014 it\u2019s how we fix it.\u2019"
    ],
    related: ["commonplace", "control-the-tense", "call-a-foul", "redefinition"]
  }));

  /* ============== CHAPTER 12 — Persuade on Your Terms =================== */
  S.push(tool({
    id: "framing", name: "Frame the Argument", ch: 12, level: 2,
    builds: ["commonplace"],
    breakdown: "A frame is the context and set of terms through which an audience sees an issue. Heinrichs shows that whoever sets the frame usually wins, because the frame decides what counts as relevant, what the choice even is, and which values apply. Framing means choosing the story, the words, and the standard by which the argument will be judged.",
    task: "Set the terms and context so the argument is judged on your ground.",
    method: [
      "Decide the single lens you want {subj} seen through.",
      "Choose words and a story that make that lens feel natural.",
      "State the frame early, before the other side sets theirs.",
      "Judge every point by whether it reinforces your frame."
    ],
    outputs: [
      "At {subj}: \u201cThe real question here is about safety, not cost.\u201d",
      "At {subj}: \u201cLet\u2019s look at this as an investment, not an expense.\u201d",
      "At {subj}: define the standard first: \u2018Whatever we decide, it has to protect the team.\u2019"
    ],
    learn: "The frame decides which facts matter and which values apply. Set it first and the argument tilts your way.",
    develop: "Take a contested issue and write two opposite frames for it, noticing how each changes what seems relevant.",
    apply: "Before your next argument, state the frame \u2014 the lens and the standard \u2014 before anyone else can.",
    examples: [
      "\u2018Estate tax\u2019 vs. \u2018death tax\u2019 frames the same policy to opposite effect.",
      "Calling a program an \u2018investment\u2019 rather than \u2018spending\u2019 flips how it\u2019s judged."
    ],
    related: ["commonplace", "redefinition", "stance-theory", "cliche-twist", "five-canons"]
  }));
  S.push(tool({
    id: "redefinition", name: "Redefine the Terms", ch: 12, level: 2,
    builds: ["framing"],
    breakdown: "Definition is a battleground. Heinrichs shows that redefining a key word \u2014 what counts as 'fair,' 'help,' 'winning' \u2014 can decide an argument before the facts are even weighed. To redefine is to accept the word but change its meaning so it favors your side, moving the argument onto ground where you win.",
    task: "Change the working meaning of a key word so it favors your side.",
    method: [
      "Identify the pivotal word everyone is using in {subj}.",
      "Offer a definition of it that supports your choice.",
      "Back the new definition with a shared value or example.",
      "Argue from the redefined term as if it were obvious."
    ],
    outputs: [
      "At {subj}: \u201cReal fairness here doesn\u2019t mean equal shares \u2014 it means equal effort rewarded.\u201d",
      "At {subj}: \u201cWhen I say \u2018success,\u2019 I mean something that lasts, not a quick spike.\u201d",
      "At {subj}: \u201cLet\u2019s be clear what \u2018help\u2019 actually looks like.\u201d"
    ],
    learn: "Whoever defines the key term often wins the argument; redefinition moves the fight to ground where you\u2019re strong.",
    develop: "Take a loaded word in a dispute you care about and write a definition of it that quietly favors your view.",
    apply: "When a debate hinges on one word, offer your definition of it early and argue from there.",
    examples: [
      "A negotiator redefines \u2018winning\u2019 as \u2018a deal both sides keep\u2019 to unlock compromise.",
      "A manager redefines \u2018productivity\u2019 from hours logged to problems solved."
    ],
    related: ["framing", "definition-jujitsu", "definition-judo", "commonplace-label"]
  }));
  S.push(tool({
    id: "definition-jujitsu", name: "Definition Jujitsu", ch: 12, level: 3,
    builds: ["redefinition"],
    breakdown: "Jujitsu uses an opponent's own momentum against them. Heinrichs' definition jujitsu takes the very term your opponent relies on and redefines it so it now supports your side. Instead of fighting their word, you seize it and flip its meaning, turning their strongest word into your weapon.",
    task: "Take the opponent's own key word and redefine it to serve you.",
    method: [
      "Find the word your opponent leans on hardest in {subj}.",
      "Accept the word rather than fight it.",
      "Redefine it so its meaning now backs your position.",
      "Return it to them, now working on your behalf."
    ],
    outputs: [
      "At {subj}: \u201cYou want \u2018freedom\u2019? Then you should want exactly what I\u2019m proposing.\u201d",
      "At {subj}: \u201cIf \u2018responsibility\u2019 is the standard, my plan is the responsible one.\u201d",
      "At {subj}: turn their banner word into the reason to agree with you."
    ],
    learn: "Rather than resist a strong word, absorb and redefine it \u2014 the opponent\u2019s momentum now carries your argument.",
    develop: "Take an opponent\u2019s favorite value-word and practice redefining it so it supports the opposite conclusion.",
    apply: "When an opponent rests on one word, redefine that very word to make their point serve you.",
    examples: [
      "\u2018You say you value tradition? Then keep the tradition of welcoming newcomers.\u2019",
      "\u2018If security matters most, the secure choice is the one I\u2019m backing.\u2019"
    ],
    related: ["redefinition", "definition-judo", "framing"]
  }));
  S.push(tool({
    id: "definition-judo", name: "Definition Judo", ch: 12, level: 3,
    builds: ["redefinition"],
    breakdown: "Where jujitsu flips the opponent's word, judo throws the opponent's whole position by accepting their premise and riding it to your conclusion. Heinrichs shows you can agree with what they claim and then show that it actually leads where you want, using their momentum to carry the audience to your side.",
    task: "Accept the opponent's premise and ride it to your own conclusion.",
    method: [
      "State the opponent\u2019s premise about {subj} back to them, agreeing.",
      "Follow that premise further than they did.",
      "Show it actually leads to your conclusion.",
      "Let their own logic deliver your point."
    ],
    outputs: [
      "At {subj}: \u201cYou\u2019re right that we must cut costs \u2014 which is exactly why we should invest here now.\u201d",
      "At {subj}: \u201cAgreed, speed matters most \u2014 so we should slow down just enough to avoid rework.\u201d",
      "At {subj}: \u201cYes, and if that\u2019s true, then it follows that\u2026\u201d"
    ],
    learn: "Accepting a premise and extending it can throw an opponent, letting their own reasoning arrive at your conclusion.",
    develop: "Practice conceding an opponent\u2019s starting point and then reasoning from it toward your own position.",
    apply: "When you can\u2019t deny a premise, accept it and follow it all the way to where you want to go.",
    examples: [
      "\u2018You value the budget? Then you\u2019ll love that this pays for itself in a year.\u2019",
      "\u2018If we truly can\u2019t afford mistakes, we can\u2019t afford to skip testing.\u2019"
    ],
    related: ["redefinition", "definition-jujitsu", "concession"]
  }));
  S.push(tool({
    id: "stance-theory", name: "Find Your Stance", ch: 12, level: 3,
    builds: ["framing"],
    breakdown: "Ancient rhetoric's 'stasis' theory helps you locate exactly where an argument stands \u2014 is the dispute about fact (did it happen?), definition (what is it?), quality (how bad/good is it?), or jurisdiction (is this the right forum?). Heinrichs shows that pinpointing the stance tells you what to argue and stops you wasting effort on the wrong question.",
    task: "Pinpoint whether the dispute is about fact, definition, quality, or jurisdiction.",
    method: [
      "Ask what the real point of disagreement in {subj} is.",
      "Test it: is it about what happened, what it is, how serious it is, or who decides?",
      "Argue at that stance and no other.",
      "If you\u2019re losing, try shifting the argument to a stance you can win."
    ],
    outputs: [
      "At {subj}: \u201cWe agree it happened \u2014 the real question is whether it was actually wrong.\u201d",
      "At {subj}: \u201cBefore we judge it, let\u2019s settle what we\u2019re even calling it.\u201d",
      "At {subj}: \u201cIs this even the right place to decide this?\u201d"
    ],
    learn: "Stasis theory locates the true point of dispute \u2014 fact, definition, quality, or jurisdiction \u2014 so you argue the right question.",
    develop: "Take a running argument and diagnose which of the four stances it\u2019s really stuck on.",
    apply: "Before arguing, identify the stance; if you\u2019re losing there, move the dispute to a stance you can win.",
    examples: [
      "A defense shifts from \u2018did he do it\u2019 (fact) to \u2018was it really a crime\u2019 (definition).",
      "A team stops arguing severity and first settles what actually happened."
    ],
    related: ["framing", "control-the-tense", "redefinition", "three-core-issues"]
  }));



  /* ================ CHAPTER 13 — Control the Argument ================== */
  S.push(tool({
    id: "enthymeme", name: "Build an Enthymeme", ch: 13, level: 2,
    builds: ["commonplace"],
    breakdown: "The enthymeme is rhetoric's version of logic: a syllogism that leaves out a step because the audience supplies it themselves. Heinrichs shows its power is participation \u2014 the missing premise is one of the audience's own commonplaces, so they help build the argument and end up convincing themselves. Form: proof + conclusion, with the shared belief unspoken.",
    task: "Make an argument whose missing premise the audience fills in from its own beliefs.",
    method: [
      "State a conclusion you want the audience to reach about {subj}.",
      "Attach one proof they can plainly see.",
      "Leave the connecting belief unspoken \u2014 pick one they already hold.",
      "Let them complete the logic and own the conclusion."
    ],
    outputs: [
      "At {subj}: \u201cWe should do this \u2014 it\u2019s the safe choice.\u201d (unspoken: we value safety)",
      "At {subj}: \u201cShe\u2019s the one who\u2019s always delivered, so she should lead.\u201d",
      "At {subj}: state proof + conclusion and let the shared value bridge them."
    ],
    learn: "An enthymeme omits the premise the audience already believes, so they help build the argument and persuade themselves.",
    develop: "Take a claim and strip it to proof + conclusion, choosing a commonplace the audience will silently supply.",
    apply: "In your next argument, leave the obvious shared belief unstated and let the audience complete it.",
    examples: [
      "\u2018He lied under oath, so he can\u2019t be trusted\u2019 relies on the unspoken value of honesty.",
      "\u2018It\u2019s cheaper and it lasts longer \u2014 obviously we buy it\u2019 lets the audience finish the logic."
    ],
    related: ["commonplace", "proof-spotter", "rhetorical-example"]
  }));
  S.push(tool({
    id: "proof-spotter", name: "Spot the Missing Proof", ch: 13, level: 2,
    builds: ["enthymeme"],
    breakdown: "Because enthymemes hide a premise, the alert arguer can expose a weak one by dragging the unspoken assumption into the light. Heinrichs shows that to test any argument you ask: what does this quietly assume, and is that assumption actually true? Surfacing the buried premise is how you both build strong arguments and dismantle bad ones.",
    task: "Expose the hidden premise an argument is quietly resting on.",
    method: [
      "Take the argument being made in {subj} at face value.",
      "Ask what it must be assuming to work.",
      "Say the hidden premise out loud.",
      "Test whether that assumption actually holds."
    ],
    outputs: [
      "At {subj}: \u201cThat only works if we assume X \u2014 do we actually believe X?\u201d",
      "At {subj}: \u201cThe unspoken part here is Y, and Y isn\u2019t true.\u201d",
      "At {subj}: \u201cWhat are we taking for granted that we shouldn\u2019t?\u201d"
    ],
    learn: "Every enthymeme hides a premise; surface it and you can test the argument \u2014 or dismantle a weak one.",
    develop: "Practice restating others\u2019 arguments as \u2018you\u2019re assuming ___\u2019 to reveal the buried premise.",
    apply: "When an argument feels off, name the hidden assumption aloud and check whether it\u2019s really true.",
    examples: [
      "\u2018We\u2019ve always done it this way\u2019 assumes the past still fits \u2014 say so.",
      "A pitch that \u2018everyone\u2019s switching\u2019 assumes the crowd is right; question it."
    ],
    related: ["enthymeme", "three-question-test", "call-a-foul"]
  }));
  S.push(tool({
    id: "rhetorical-example", name: "Prove with an Example", ch: 13, level: 2,
    builds: ["enthymeme"],
    breakdown: "Where the enthymeme is deductive, the rhetorical example is inductive: one vivid, well-chosen case that stands in for a general truth. Heinrichs shows a single memorable example often persuades better than data because it is concrete and repeatable. Choose an example the audience will accept as typical, and it becomes proof.",
    task: "Use one vivid, representative case to stand for the general point.",
    method: [
      "Identify the general claim you\u2019re making about {subj}.",
      "Find one concrete case the audience will accept as typical.",
      "Tell it vividly enough to remember and repeat.",
      "Let the single example imply the rule."
    ],
    outputs: [
      "At {subj}: \u201cTake just one case \u2014 remember what happened last spring?\u201d",
      "At {subj}: \u201cHere\u2019s a single example that says it all.\u201d",
      "At {subj}: one story that stands in for the whole pattern."
    ],
    learn: "A single vivid, representative example can prove a general point more memorably than a table of numbers.",
    develop: "For a claim you make often, find the one case that best captures it and practice telling it crisply.",
    apply: "Back your next general claim with one concrete, typical example the audience can picture.",
    examples: [
      "\u2018One customer\u2019s Monday\u2019 sells a usability fix better than an analytics dashboard.",
      "A doctor cites one patient\u2019s recovery to make a treatment feel real."
    ],
    related: ["enthymeme", "storytelling", "bad-example-fallacies"]
  }));

  /* ================= CHAPTER 14 — Make a Connection ==================== */
  S.push(tool({
    id: "the-hook", name: "Set the Hook", ch: 14, level: 2,
    builds: ["the-advantageous"],
    breakdown: "The Hook is Heinrichs' term for the moment you connect your argument to something the audience already needs, wants, or fears. Instead of pushing your agenda, you attach it to theirs, so pursuing your goal becomes the way for them to get what they want. Find the audience's desire and hang your proposal on it.",
    task: "Attach your argument to a need or desire the audience already has.",
    method: [
      "Name what the audience already wants or fears in {subj}.",
      "Find the point where your goal and their desire overlap.",
      "Hang your proposal on that desire, not on your own agenda.",
      "Show that getting what they want means doing what you propose."
    ],
    outputs: [
      "At {subj}: \u201cYou want more time back \u2014 this is how you get it.\u201d",
      "At {subj}: \u201cThis solves the exact thing that\u2019s been keeping you up.\u201d",
      "At {subj}: \u201cWhat you\u2019re after and what I\u2019m proposing are the same thing.\u201d"
    ],
    learn: "The Hook links your argument to the audience\u2019s existing desire, so your goal becomes the path to theirs.",
    develop: "Practice restating your ask as the fulfillment of something the audience already wants.",
    apply: "Before persuading, find the audience\u2019s want and phrase your proposal as the way to satisfy it.",
    examples: [
      "A gym sells not exercise but the confidence and energy the member craves.",
      "A manager wins support for a tool by tying it to the team\u2019s wish to stop working weekends."
    ],
    related: ["the-advantageous", "audience-goals", "expressed-love", "nostalgia-and-desire"]
  }));
  S.push(tool({
    id: "expressed-love", name: "Express the Connection", ch: 14, level: 2,
    builds: ["sympathy"],
    breakdown: "Heinrichs shows that openly signaling care and common cause \u2014 what he frames as a kind of 'love' between persuader and audience \u2014 dissolves resistance. When the audience believes you genuinely want good things for them, they lower their guard and let your argument in. Connection precedes persuasion.",
    task: "Signal genuine goodwill so the audience opens up to your argument.",
    method: [
      "Find what you honestly value or admire about the audience in {subj}.",
      "Say it plainly and early, before you ask for anything.",
      "Show your goal includes their good, not just yours.",
      "Let the felt connection carry the argument."
    ],
    outputs: [
      "At {subj}: \u201cI\u2019m on your side here \u2014 I want this to go well for you.\u201d",
      "At {subj}: \u201cI respect how hard you\u2019ve worked on this, and that\u2019s why I\u2019m raising it.\u201d",
      "At {subj}: lead with warmth, then the argument."
    ],
    learn: "Audiences open to people who clearly wish them well; expressed goodwill lowers the guard that resists persuasion.",
    develop: "Practice opening a hard conversation with a sincere statement of care before the ask.",
    apply: "Before your next difficult argument, lead with genuine goodwill so the audience lets you in.",
    examples: [
      "A teacher who says \u2018I believe in you\u2019 gets tougher feedback accepted.",
      "A leader\u2019s honest \u2018I want this to work for all of us\u2019 disarms a wary room."
    ],
    related: ["sympathy", "the-hook", "decorum", "caring-disinterest"]
  }));



  /* ================== CHAPTER 15 — Spot Fallacies ===================== */
  S.push(tool({
    id: "three-question-test", name: "The Three-Question Fallacy Test", ch: 15, level: 3,
    builds: ["proof-spotter"],
    breakdown: "Heinrichs boils fallacy-detection down to three questions you can run on any argument: (1) Does the proof hold up? (bad proof), (2) Am I being given the right number of choices? (bad conclusion via false choice), (3) Does the proof lead to the conclusion? (disconnect). If an argument fails any of the three, its logic is broken \u2014 the seven deadly sins all fall under these three faults.",
    task: "Run any argument through the three questions to locate its logical fault.",
    method: [
      "Ask of {subj}: does the proof actually hold up?",
      "Ask: am I being offered the right number of choices?",
      "Ask: does the proof really lead to this conclusion?",
      "If it fails any one, name the broken link out loud."
    ],
    outputs: [
      "At {subj}: \u201cIs that evidence even solid?\u201d",
      "At {subj}: \u201cAre those really the only two options?\u201d",
      "At {subj}: \u201cEven if that\u2019s true, does it get us to your conclusion?\u201d"
    ],
    learn: "Three questions catch nearly every logical fallacy: bad proof, wrong number of choices, and proof that doesn\u2019t lead to the conclusion.",
    develop: "Run the three questions on an argument in the news and identify which one it fails.",
    apply: "When something sounds persuasive but off, run the three questions to pinpoint the fault before responding.",
    examples: [
      "\u2018Everyone\u2019s doing it\u2019 fails question one \u2014 popularity isn\u2019t proof.",
      "\u2018We either cut the budget or we fail\u2019 fails question two \u2014 false choice."
    ],
    related: ["proof-spotter", "false-comparison-fallacies", "bad-example-fallacies", "false-choice-fallacies", "red-herring-strawman", "wrong-ending-fallacies"]
  }));
  S.push(tool({
    id: "bad-example-fallacies", name: "Catch a Bad Example", ch: 15, level: 3,
    builds: ["three-question-test"],
    breakdown: "The first family of bad proof: fallacies of example. These include the hasty generalization (too few cases), the unrepresentative sample, and misinterpreted evidence. Heinrichs shows that a single flashy anecdote or a cherry-picked case can masquerade as proof. The test: is there enough evidence, and is it typical?",
    task: "Test whether an example is sufficient and representative before it counts as proof.",
    method: [
      "Isolate the example being used as proof in {subj}.",
      "Ask if there are enough cases to generalize.",
      "Ask if this case is actually typical, not cherry-picked.",
      "If it fails, call the generalization hasty."
    ],
    outputs: [
      "At {subj}: \u201cThat\u2019s one case \u2014 is it typical or just memorable?\u201d",
      "At {subj}: \u201cTwo examples isn\u2019t a pattern.\u201d",
      "At {subj}: \u201cAre we sure that sample represents everyone?\u201d"
    ],
    learn: "Fallacies of example use too few or unrepresentative cases; sound proof needs enough evidence that is genuinely typical.",
    develop: "Spot a hasty generalization in advertising and articulate why the example isn\u2019t representative.",
    apply: "When someone proves a rule with one story, ask whether the example is sufficient and typical.",
    examples: [
      "\u2018My grandfather smoked and lived to 90\u2019 generalizes from one lucky case.",
      "A single glowing review isn\u2019t proof the product works for everyone."
    ],
    related: ["three-question-test", "rhetorical-example", "false-comparison-fallacies"]
  }));
  S.push(tool({
    id: "false-comparison-fallacies", name: "Catch a False Comparison", ch: 15, level: 3,
    builds: ["three-question-test"],
    breakdown: "The second family of bad proof: fallacies of comparison. These include the false analogy, the appeal to popularity ('all-natural,' 'everyone does it'), and the reductio ad absurdum that stretches a point past reason. Heinrichs shows these smuggle in a likeness that doesn't really hold. The test: are the two things actually comparable in the way that matters?",
    task: "Test whether a comparison or analogy actually holds where it counts.",
    method: [
      "Find the comparison doing the persuading in {subj}.",
      "Ask what the two things are claimed to share.",
      "Check whether they\u2019re alike in the way that actually matters.",
      "If not, name the false analogy or bandwagon."
    ],
    outputs: [
      "At {subj}: \u201cThose two situations aren\u2019t really alike where it counts.\u201d",
      "At {subj}: \u201c\u2018Natural\u2019 doesn\u2019t automatically mean \u2018good.\u2019\u201d",
      "At {subj}: \u201cPopular isn\u2019t the same as right.\u201d"
    ],
    learn: "False-comparison fallacies rest on a likeness that breaks down \u2014 including bandwagon and \u2018all-natural\u2019 appeals \u2014 where the analogy fails.",
    develop: "Find an analogy in an ad and identify the crucial way the two things are not alike.",
    apply: "When an argument leans on \u2018it\u2019s just like\u2019 or \u2018everyone does it,\u2019 test whether the comparison truly holds.",
    examples: [
      "\u2018Running a country is just like running a business\u2019 ignores where they differ.",
      "\u2018It\u2019s all-natural\u2019 treats natural as automatically safe \u2014 poison ivy is natural too."
    ],
    related: ["three-question-test", "bad-example-fallacies", "false-choice-fallacies"]
  }));
  S.push(tool({
    id: "false-choice-fallacies", name: "Catch a False Choice", ch: 15, level: 3,
    builds: ["three-question-test"],
    breakdown: "The wrong-number-of-choices family: the false dilemma (only two options when there are more), the complex-cause fallacy (one cause when there are many), and the many-questions trick ('have you stopped cheating?'). Heinrichs shows these rig the conclusion by limiting the options. The test: is this really the right number of choices?",
    task: "Test whether you are being offered the right number of options.",
    method: [
      "Spot the choice being framed in {subj}.",
      "Ask whether there are really only these options.",
      "Look for the third, fourth, or hidden alternative.",
      "If it\u2019s rigged, name the false dilemma."
    ],
    outputs: [
      "At {subj}: \u201cThose aren\u2019t the only two choices \u2014 there\u2019s at least a third.\u201d",
      "At {subj}: \u201cYou\u2019re assuming one cause when there are several.\u201d",
      "At {subj}: \u201cThat question hides an assumption I don\u2019t accept.\u201d"
    ],
    learn: "False-choice fallacies rig the outcome by limiting options \u2014 the false dilemma, the single-cause claim, the loaded question.",
    develop: "Rewrite an \u2018either/or\u2019 argument to reveal a legitimate third option it hid.",
    apply: "When handed two choices, ask whether a third exists before accepting the frame.",
    examples: [
      "\u2018You\u2019re either with us or against us\u2019 erases every middle position.",
      "\u2018Have you stopped wasting money?\u2019 smuggles in an accusation."
    ],
    related: ["three-question-test", "the-rejection", "red-herring-strawman"]
  }));
  S.push(tool({
    id: "red-herring-strawman", name: "Catch a Red Herring or Straw Man", ch: 15, level: 3,
    builds: ["three-question-test"],
    breakdown: "The disconnect family, where the proof doesn't lead to the conclusion. The red herring drags in an irrelevant point; the straw man attacks a distorted version of your position; Heinrichs' 'Chewbacca defense' floods the argument with nonsense that has nothing to do with the issue. The test: does this proof actually bear on the conclusion?",
    task: "Test whether the 'proof' is even relevant to the conclusion.",
    method: [
      "Restate the actual conclusion at issue in {subj}.",
      "Check whether the point offered actually bears on it.",
      "Watch for a distorted version of your view being attacked.",
      "If it\u2019s off-topic, name the red herring or straw man."
    ],
    outputs: [
      "At {subj}: \u201cThat\u2019s a different issue \u2014 let\u2019s get back to the real one.\u201d",
      "At {subj}: \u201cThat\u2019s not what I said; you\u2019re arguing with a version I don\u2019t hold.\u201d",
      "At {subj}: \u201cInteresting, but it has nothing to do with the question.\u201d"
    ],
    learn: "Red herrings and straw men break the link between proof and conclusion by changing the subject or distorting the position.",
    develop: "Find a straw-man rebuttal online and restate the position it distorted, fairly.",
    apply: "When a reply feels off-target, name it \u2014 red herring or straw man \u2014 and steer back to the real point.",
    examples: [
      "Answering a budget question by praising the team dodges the issue.",
      "\u2018So you want total chaos?\u2019 attacks a caricature of a modest proposal."
    ],
    related: ["three-question-test", "false-choice-fallacies", "wrong-ending-fallacies"]
  }));
  S.push(tool({
    id: "wrong-ending-fallacies", name: "Catch a Wrong Ending", ch: 15, level: 3,
    builds: ["three-question-test"],
    breakdown: "The last disconnect family: fallacies where the conclusion doesn't follow. The slippery slope claims one step leads inevitably to disaster; the post hoc (Heinrichs' 'Chanticleer' fallacy) mistakes sequence for cause; the tautology proves nothing by restating itself; the appeal to ignorance treats 'unproven' as 'false.' The test: even if the proof is true, does the conclusion really follow?",
    task: "Test whether the conclusion actually follows from true premises.",
    method: [
      "Grant the premises of {subj} for a moment.",
      "Ask whether the conclusion truly follows from them.",
      "Watch for slippery slopes and \u2018after, so because\u2019 reasoning.",
      "If the ending doesn\u2019t follow, name the leap."
    ],
    outputs: [
      "At {subj}: \u201cOne step doesn\u2019t automatically lead to the disaster you describe.\u201d",
      "At {subj}: \u201cIt happened after, but that doesn\u2019t mean it happened because.\u201d",
      "At {subj}: \u201cNo proof against it isn\u2019t proof for it.\u201d"
    ],
    learn: "Wrong-ending fallacies leap to a conclusion that doesn\u2019t follow \u2014 slippery slope, false cause, tautology, and appeal to ignorance.",
    develop: "Spot a slippery-slope claim and identify the missing steps it skips.",
    apply: "When a conclusion feels like a leap, check whether it really follows even if the premises are granted.",
    examples: [
      "\u2018If we allow this, next thing you know everything collapses\u2019 skips every intermediate step.",
      "\u2018The rooster crowed, then the sun rose \u2014 so the rooster caused it.\u2019"
    ],
    related: ["three-question-test", "red-herring-strawman", "call-a-foul"]
  }));

  /* ==================== CHAPTER 16 — Call a Foul ======================= */
  S.push(tool({
    id: "call-a-foul", name: "Call a Rhetorical Foul", ch: 16, level: 3,
    builds: ["three-core-issues"],
    breakdown: "Heinrichs distinguishes fallacies (bad logic, still allowed in rhetoric) from fouls \u2014 moves that stop argument altogether and so should be called out. The seven argument-stoppers: switching to the wrong tense, treating rules as inflexible, humiliating an opponent, innuendo, threats, obscenity, and 'utter stupidity' (refusing to make sense). Naming the foul restores the possibility of agreement.",
    task: "Name an argument-stopping foul so deliberation can resume.",
    method: [
      "Notice when {subj} has stopped being an argument at all.",
      "Identify which foul did it \u2014 threat, humiliation, innuendo, rigid rule, obscenity.",
      "Name it calmly and without matching it.",
      "Invite a return to a real, choice-focused argument."
    ],
    outputs: [
      "At {subj}: \u201cThreats end the conversation \u2014 let\u2019s get back to the actual choice.\u201d",
      "At {subj}: \u201cMocking me doesn\u2019t settle anything; what do we actually decide?\u201d",
      "At {subj}: \u201cIf the rule can never bend, there\u2019s nothing left to discuss \u2014 can it?\u201d"
    ],
    learn: "Fouls stop argument entirely \u2014 threats, humiliation, innuendo, rigid rules, obscenity. Name the foul to reopen the path to agreement.",
    develop: "Learn the seven stoppers so you can recognize and name one the instant it appears.",
    apply: "When a discussion stops being winnable by anyone, name the foul and steer back to choices.",
    examples: [
      "\u2018We can keep threatening each other, or we can solve this \u2014 your call.\u2019",
      "Naming a personal jab as a foul lets a stalled meeting resume."
    ],
    related: ["three-core-issues", "wrong-ending-fallacies", "truthiness-defense", "the-rejection"]
  }));
  S.push(tool({
    id: "truthiness-defense", name: "Answer Truthiness", ch: 16, level: 3,
    builds: ["call-a-foul"],
    breakdown: "Heinrichs names the foulest foul 'truthiness' \u2014 rejecting facts simply because they don't feel right. It stops argument because it denies the shared reality any argument needs. The defense is not more facts (which bounce off) but re-engaging feeling and identity: connect the fact to a value or story the audience already holds so the truth can feel true.",
    task: "Get a fact accepted by connecting it to feeling, not just piling on more data.",
    method: [
      "Notice when facts are being rejected on feel alone in {subj}.",
      "Stop stacking data \u2014 it only hardens resistance.",
      "Tie the fact to a value or story the audience already trusts.",
      "Let it feel true before you expect it to be believed."
    ],
    outputs: [
      "At {subj}: \u201cI know it doesn\u2019t feel right \u2014 here\u2019s a story that might change that.\u201d",
      "At {subj}: connect the number to one real person the audience cares about.",
      "At {subj}: \u201cThis fits what you already value \u2014 let me show you how.\u201d"
    ],
    learn: "Truthiness rejects facts that don\u2019t feel right; you counter it by making the fact feel true through value and story, not more data.",
    develop: "Take a fact people resist and practice attaching it to a value or story that makes it feel true.",
    apply: "When facts bounce off, stop arguing data and reconnect the truth to the audience\u2019s feelings and identity.",
    examples: [
      "A health message lands when tied to protecting one\u2019s own kids, not just statistics.",
      "A leader wins a resisted fact by linking it to the team\u2019s pride, not another chart."
    ],
    related: ["call-a-foul", "storytelling", "commonplace"]
  }));

  /* ================ CHAPTER 17 — Know Whom to Trust =================== */
  S.push(tool({
    id: "disinterest-disconnect", name: "Detect the Disinterest Disconnect", ch: 17, level: 3,
    builds: ["caring-disinterest"],
    breakdown: "A persuasion detector: watch for a gap between a persuader's claimed selflessness and their actual stake. Heinrichs shows the trustworthy persuader reveals their interest; the manipulator hides it behind a show of caring only about you. When someone insists they want nothing for themselves, ask what they actually gain.",
    task: "Reveal a persuader's hidden stake behind a show of selflessness.",
    method: [
      "Note how selfless the persuader in {subj} claims to be.",
      "Ask what they actually stand to gain.",
      "Measure the gap between the pose and the payoff.",
      "Trust in proportion to how openly they own their interest."
    ],
    outputs: [
      "At {subj}: \u201cWhat do you get out of this, honestly?\u201d",
      "At {subj}: \u201cThe more they insist it\u2019s all for me, the more I check the fine print.\u201d",
      "At {subj}: trust the one who says \u2018here\u2019s my stake\u2019 over the one who claims none."
    ],
    learn: "A gap between claimed selflessness and real stake is a warning sign; honest persuaders disclose their interest.",
    develop: "Watch an ad or pitch and name the interest it\u2019s hiding behind its show of caring about you.",
    apply: "When someone claims to want nothing for themselves, quietly ask what they actually gain.",
    examples: [
      "\u2018I\u2019m only telling you this for your own good\u2019 often hides the teller\u2019s benefit.",
      "The advisor who discloses their commission is safer than the one who claims none."
    ],
    related: ["caring-disinterest", "dodged-question", "virtue-yardstick"]
  }));
  S.push(tool({
    id: "dodged-question", name: "Detect the Dodged Question", ch: 17, level: 3,
    builds: ["disinterest-disconnect"],
    breakdown: "Another detector: watch how a persuader handles a direct question. Heinrichs shows that a dodge \u2014 answering a different question, retreating to talking points, attacking the asker \u2014 signals a hidden weakness or interest. The reliable move is to notice the non-answer and gently re-ask, holding the persuader to the actual question.",
    task: "Spot a non-answer and hold the persuader to the real question.",
    method: [
      "Ask a clear, direct question about {subj}.",
      "Check whether the answer actually addresses it.",
      "Notice dodges: changing the subject, talking points, attacking you.",
      "Re-ask the exact question, calmly, once more."
    ],
    outputs: [
      "At {subj}: \u201cThat\u2019s a fine speech, but it wasn\u2019t my question \u2014 let me ask again.\u201d",
      "At {subj}: \u201cYes or no first, then all the context you like.\u201d",
      "At {subj}: notice the pivot and gently steer back."
    ],
    learn: "A dodged question signals a hidden weakness; re-asking calmly reveals whether there\u2019s a real answer.",
    develop: "Watch an interview and mark each moment the subject answers a different question than asked.",
    apply: "When you get a non-answer, restate your exact question rather than accepting the pivot.",
    examples: [
      "A politician\u2019s pivot to talking points is itself the answer \u2014 there isn\u2019t a good one.",
      "\u2018I hear you, but my question was specifically about the refund.\u2019"
    ],
    related: ["disinterest-disconnect", "call-a-foul", "virtue-yardstick"]
  }));
  S.push(tool({
    id: "virtue-yardstick", name: "Measure Their Virtue", ch: 17, level: 3,
    builds: ["persuasive-virtue"],
    breakdown: "A detector for character: judge a persuader not by their claims of virtue but by whether they align with the audience's values in the moment. Heinrichs warns that the appearance of virtue is easily staged, so watch for consistency between stated values and behavior, and for whether the values invoked are the audience's own or the persuader's imposed ones.",
    task: "Judge a persuader's virtue by consistency, not by their own claims to it.",
    method: [
      "Note the values the persuader in {subj} claims to hold.",
      "Compare those claims to how they actually behave.",
      "Check whether the values are the audience\u2019s or imposed.",
      "Trust the match between word and deed, not the profession."
    ],
    outputs: [
      "At {subj}: \u201cDo their actions match the values they\u2019re preaching?\u201d",
      "At {subj}: \u201cAre those our values, or ones they\u2019re assigning us?\u201d",
      "At {subj}: watch behavior over time, not the speech."
    ],
    learn: "Stated virtue is easy to fake; real character shows in consistency between values professed and actions taken.",
    develop: "Pick a public figure and compare their stated values with a week of their actual behavior.",
    apply: "Before trusting a persuader\u2019s character, check whether their deeds match the virtues they claim.",
    examples: [
      "A leader who preaches thrift while spending lavishly fails the yardstick.",
      "The colleague whose actions match their stated values earns durable trust."
    ],
    related: ["persuasive-virtue", "disinterest-disconnect", "extremist-detector"]
  }));
  S.push(tool({
    id: "extremist-detector", name: "Detect the Extremist", ch: 17, level: 3,
    builds: ["virtue-yardstick"],
    breakdown: "Heinrichs offers a test for spotting a dangerous persuader: extremists reveal themselves by rejecting compromise, treating every issue as values (good vs. evil) rather than choice, and refusing to grant any legitimacy to the other side. The moderate seeks a workable choice; the extremist seeks purity. Watching for the refusal to deal tells you whom not to trust.",
    task: "Identify an extremist by their refusal to compromise or treat issues as choices.",
    method: [
      "Notice whether the persuader in {subj} allows any middle ground.",
      "Check if they frame every issue as good vs. evil.",
      "See whether they grant the other side any legitimacy.",
      "Treat refusal to deal as the warning sign it is."
    ],
    outputs: [
      "At {subj}: \u201cIs there any version of compromise they\u2019d accept?\u201d",
      "At {subj}: \u201cThey\u2019ve turned a practical choice into a purity test.\u201d",
      "At {subj}: \u201cAnyone who won\u2019t deal at all is telling you something.\u201d"
    ],
    learn: "Extremists reject compromise and recast every choice as a moral absolute; the refusal to deal is the tell.",
    develop: "Contrast two commentators on one issue and note which one allows for any middle ground.",
    apply: "When judging whom to trust, watch for the refusal to compromise as a marker of the extremist.",
    examples: [
      "A negotiator who calls every concession a betrayal isn\u2019t negotiating.",
      "The voice that turns every policy into good-vs-evil has left deliberation behind."
    ],
    related: ["virtue-yardstick", "call-a-foul", "deal-with-a-bully"]
  }));

  /* ================ CHAPTER 18 — Find the Sweet Spot ================== */
  S.push(tool({
    id: "that-depends-test", name: "The 'That Depends' Test", ch: 18, level: 3,
    builds: ["practical-wisdom"],
    breakdown: "A detector of practical wisdom (phronesis): the wise persuader answers hard questions with 'it depends,' because they grasp that context changes the right choice. Heinrichs shows that someone who gives the same rigid answer regardless of circumstances lacks practical wisdom. The willingness to say 'that depends' \u2014 and explain on what \u2014 is a mark of trustworthy judgment.",
    task: "Gauge practical wisdom by whether a persuader adapts the answer to context.",
    method: [
      "Pose a hard, real-world question about {subj}.",
      "Notice whether the answer accounts for circumstances.",
      "Distrust the one-size-fits-all response.",
      "Trust the \u2018it depends \u2014 on these things\u2019 that shows judgment."
    ],
    outputs: [
      "At {subj}: \u201cUnder what conditions would your advice change?\u201d",
      "At {subj}: \u201cThe honest answer starts with \u2018it depends,\u2019 then explains on what.\u201d",
      "At {subj}: distrust the person who never says \u2018it depends.\u2019"
    ],
    learn: "Practical wisdom shows in adapting to context; \u2018it depends \u2014 on these factors\u2019 signals judgment, rigid answers signal its lack.",
    develop: "Ask an expert a hard question and note whether they qualify by circumstance or give a canned answer.",
    apply: "When taking advice, prefer the counselor who explains what the right choice depends on.",
    examples: [
      "A good doctor\u2019s \u2018it depends on your history\u2019 beats a blanket prescription.",
      "The advisor who names the conditions for their advice is the one to trust."
    ],
    related: ["practical-wisdom", "comparable-experience-test", "sussing-the-real-issue"]
  }));
  S.push(tool({
    id: "comparable-experience-test", name: "The Comparable-Experience Test", ch: 18, level: 3,
    builds: ["practical-wisdom"],
    breakdown: "Another phronesis detector: does the persuader have relevant experience with a situation like yours? Heinrichs warns that expertise in one domain doesn't transfer to another, and that a track record with comparable problems predicts good judgment far better than confidence or credentials. Ask whether they've actually solved a problem like this one.",
    task: "Judge advice by whether the persuader has faced a genuinely comparable situation.",
    method: [
      "Clarify what your actual situation in {subj} requires.",
      "Ask whether the persuader has handled something truly like it.",
      "Discount expertise borrowed from an unrelated domain.",
      "Weight advice by relevant, comparable experience."
    ],
    outputs: [
      "At {subj}: \u201cHave you dealt with a situation genuinely like this one?\u201d",
      "At {subj}: \u201cBeing brilliant elsewhere doesn\u2019t mean brilliant here.\u201d",
      "At {subj}: trust the scars from comparable problems."
    ],
    learn: "Judgment transfers with experience, not confidence; relevant, comparable experience predicts good advice better than credentials.",
    develop: "For a decision you face, list who has actually solved a comparable problem \u2014 and who just sounds confident.",
    apply: "Before following advice, confirm the advisor has faced a situation genuinely like yours.",
    examples: [
      "A star in one field can give terrible advice in a field they\u2019ve never worked.",
      "The mentor who\u2019s navigated your exact dilemma is worth ten confident strangers."
    ],
    related: ["practical-wisdom", "that-depends-test", "sussing-the-real-issue"]
  }));
  S.push(tool({
    id: "sussing-the-real-issue", name: "Suss Out the Real Issue", ch: 18, level: 3,
    builds: ["practical-wisdom"],
    breakdown: "The sweet spot of judgment is knowing which core issue a situation actually calls for. Heinrichs shows the wise persuader diagnoses whether the moment needs blame, values, or choice \u2014 and doesn't get dragged into the wrong one. This detector asks: is this persuader addressing the issue that actually matters, or a convenient substitute?",
    task: "Diagnose which core issue a situation truly calls for, and stay on it.",
    method: [
      "Ask what {subj} actually needs settled \u2014 blame, values, or a choice.",
      "Notice if the persuader is arguing a different, easier issue.",
      "Name the real issue plainly.",
      "Refuse to be dragged off it."
    ],
    outputs: [
      "At {subj}: \u201cWe\u2019re assigning blame when what we need is a decision.\u201d",
      "At {subj}: \u201cThis is really a values question dressed up as a factual one.\u201d",
      "At {subj}: \u201cLet\u2019s name what we\u2019re actually here to settle.\u201d"
    ],
    learn: "Wisdom lies in diagnosing the true core issue \u2014 blame, values, or choice \u2014 and refusing to argue the wrong one.",
    develop: "Take a stuck argument and diagnose which core issue it really needs versus the one it\u2019s stuck on.",
    apply: "When a discussion spins, name the real issue it should be settling and steer everyone to it.",
    examples: [
      "A team stuck blaming each other really needs to choose a path forward.",
      "A \u2018budget\u2019 fight that\u2019s actually about values gets solved once that\u2019s named."
    ],
    related: ["practical-wisdom", "three-core-issues", "control-the-tense"]
  }));

  /* ================= CHAPTER 19 — Deal with a Bully =================== */
  S.push(tool({
    id: "deal-with-a-bully", name: "Deal with a Bully", ch: 19, level: 3,
    builds: ["the-advantageous"],
    breakdown: "Against a bully who fights rather than argues, Heinrichs offers indirect tactics instead of counterpunching. You can win over the onlookers (the real audience) rather than the bully; disarm with unexpected 'ironic love' or agreement; pose as the calm, virtuous adult while the bully rages; or take an aggressive interest in the bully's own logic until it collapses. The goal is never to out-fight but to out-argue in front of the crowd.",
    task: "Neutralize a bully by winning the onlookers instead of counterpunching.",
    method: [
      "Identify the real audience watching {subj} \u2014 not the bully.",
      "Refuse the fight; stay the calm, reasonable adult.",
      "Disarm with unexpected warmth or agreement, or probe their logic.",
      "Let the bully\u2019s rage discredit them in front of the crowd."
    ],
    outputs: [
      "At {subj}: \u201cYou might be right \u2014 help me understand your reasoning.\u201d (ironic calm)",
      "At {subj}: address the room, not the bully: \u201cLet\u2019s keep this useful for everyone.\u201d",
      "At {subj}: stay warm and unruffled while the bully overheats."
    ],
    learn: "You beat a bully not by fighting but by staying calm and winning the onlookers, who judge who\u2019s reasonable.",
    develop: "Rehearse a calm, warm response to a hostile jab that plays to the watching audience.",
    apply: "Facing a bully, ignore the bait, address the real audience, and let composure win the room.",
    examples: [
      "A panelist stays gracious while a shouting rival loses the crowd\u2019s sympathy.",
      "\u2018I\u2019d genuinely like to understand your view\u2019 disarms an attacker in front of others."
    ],
    related: ["the-advantageous", "extremist-detector", "calming-humor", "backfire"]
  }));



  /* ============== CHAPTER 20 — Get Instant Cleverness ================= */
  S.push(tool({
    id: "cliche-twist", name: "Twist a Cliché", ch: 20, level: 3,
    builds: ["framing"],
    breakdown: "Heinrichs' fastest route to wit: take a familiar phrase, saying, or expectation and give it a small unexpected turn. The audience recognizes the original, so the twist lands instantly and feels clever without needing set-up. Reversing, updating, or subverting a cliché is the workhorse figure of on-the-spot cleverness.",
    task: "Take a familiar phrase and give it one unexpected turn.",
    method: [
      "Recall a cliché or expected phrase tied to {subj}.",
      "Find the word or ending you can flip.",
      "Twist it so the familiar setup lands somewhere new.",
      "Deliver it deadpan and let the recognition do the work."
    ],
    outputs: [
      "At {subj}: \u201cIf it ain\u2019t broke\u2026 you\u2019re not looking hard enough.\u201d",
      "At {subj}: \u201cWe came, we saw, we scheduled another meeting.\u201d",
      "At {subj}: take their expected phrase and end it unexpectedly."
    ],
    learn: "Twisting a cliché borrows the audience\u2019s recognition and adds surprise \u2014 instant wit with no set-up required.",
    develop: "Take five common sayings and practice writing a fresh twist for each.",
    apply: "In your next talk, set up a familiar phrase and swap its ending for something pointed.",
    examples: [
      "\u2018Give a man a fish\u2026 and he\u2019ll ask for chips.\u2019",
      "\u2018The early bird gets the worm, but the second mouse gets the cheese.\u2019"
    ],
    related: ["framing", "chiasmus", "weighing-figures", "self-correction"]
  }));
  S.push(tool({
    id: "chiasmus", name: "Reverse with Chiasmus", ch: 20, level: 3,
    builds: ["cliche-twist"],
    breakdown: "Chiasmus is the figure that reverses the order of a phrase to flip its meaning \u2014 'ask not what your country can do for you; ask what you can do for your country.' Heinrichs highlights it as one of the most memorable rhetorical moves because the mirrored structure sounds profound and sticks in memory. Take two ideas and cross them.",
    task: "Cross two terms in reverse order to make a memorable line.",
    method: [
      "Pick the two key ideas in {subj}.",
      "State them in one order, then reverse them.",
      "Tighten the wording so the mirror is clean.",
      "Deliver it as the quotable line of the argument."
    ],
    outputs: [
      "At {subj}: \u201cWe don\u2019t plan to work; we work to plan.\u201d",
      "At {subj}: \u201cIt\u2019s not the size of the effort, it\u2019s the effort of the size.\u201d",
      "At {subj}: cross the two nouns to coin a slogan."
    ],
    learn: "Chiasmus reverses a phrase to flip and deepen its meaning; the mirrored structure is inherently memorable.",
    develop: "Take two concepts you care about and practice crossing them into a chiasmus.",
    apply: "For a point you want remembered, craft a reversed, mirrored version and lead with it.",
    examples: [
      "\u2018When the going gets tough, the tough get going.\u2019",
      "\u2018You can take the person out of the job, but not the job out of the person.\u2019"
    ],
    related: ["cliche-twist", "weighing-figures", "the-period"]
  }));
  S.push(tool({
    id: "weighing-figures", name: "Weigh with a Figure", ch: 20, level: 3,
    builds: ["cliche-twist"],
    breakdown: "Some figures make ideas feel weighty and balanced \u2014 the tricolon (three parallel items), antithesis (paired opposites), and parallel repetition. Heinrichs shows these rhythmic structures make a point sound considered and true. Grouping in threes and balancing opposites turns an ordinary claim into something that rings.",
    task: "Give a point rhythm and weight with parallel structure or opposites.",
    method: [
      "Take the plain version of your point about {subj}.",
      "Rebuild it as three parallel items, or two balanced opposites.",
      "Match the grammar so the rhythm is even.",
      "Deliver it with a beat on each part."
    ],
    outputs: [
      "At {subj}: \u201cFaster, cheaper, and simpler \u2014 pick this.\u201d (tricolon)",
      "At {subj}: \u201cWe planned for the best and prepared for the worst.\u201d (antithesis)",
      "At {subj}: \u201cNot louder, but clearer; not more, but better.\u201d"
    ],
    learn: "Parallel structures \u2014 threes and balanced opposites \u2014 give a claim rhythm and gravity, making it sound considered and true.",
    develop: "Rewrite a flat sentence as a tricolon and as an antithesis and compare their weight.",
    apply: "For your key point, cast it in threes or paired opposites so it lands with rhythm.",
    examples: [
      "\u2018Government of the people, by the people, for the people.\u2019",
      "\u2018We shall fight on the beaches, we shall fight on the landing grounds\u2026\u2019"
    ],
    related: ["cliche-twist", "chiasmus", "the-period"]
  }));
  S.push(tool({
    id: "self-correction", name: "Correct Yourself for Effect", ch: 20, level: 3,
    builds: ["cliche-twist"],
    breakdown: "The figure of self-correction (correctio) states something, then pointedly upgrades it \u2014 'this isn't a problem; it's a catastrophe.' Heinrichs shows the move draws attention and adds intensity, because the audience watches you reach for the stronger, truer word. It also signals honesty, as if you're refining your thought in real time.",
    task: "State a word, then replace it with a stronger, truer one for emphasis.",
    method: [
      "Say your point about {subj} in ordinary terms.",
      "Pause as if reaching for a better word.",
      "Correct upward to the stronger, more precise term.",
      "Let the visible upgrade carry the emphasis."
    ],
    outputs: [
      "At {subj}: \u201cThis is a challenge \u2014 no, it\u2019s an opportunity.\u201d",
      "At {subj}: \u201cShe did well; actually, she was extraordinary.\u201d",
      "At {subj}: \u201cIt\u2019s not a delay \u2014 let\u2019s be honest, it\u2019s a failure.\u201d"
    ],
    learn: "Self-correction upgrades a word in real time, drawing attention and signaling that you\u2019re reaching for the exact truth.",
    develop: "Practice stating a claim mildly, then correcting it upward to a sharper word.",
    apply: "For a point you want to intensify, say the ordinary word, then visibly replace it with the stronger one.",
    examples: [
      "\u2018We\u2019re interested \u2014 no, we\u2019re committed.\u2019",
      "\u2018It helped a little; actually, it changed everything.\u2019"
    ],
    related: ["cliche-twist", "weighing-figures", "reality-tropes"]
  }));

  /* =================== CHAPTER 21 — Change Reality ==================== */
  S.push(tool({
    id: "reality-tropes", name: "Change Reality with Tropes", ch: 21, level: 3,
    builds: ["framing"],
    breakdown: "Tropes are figures that swap one thing for another to change how the audience sees reality: metaphor, metonymy (a related thing stands in \u2014 'the White House said'), synecdoche (a part stands for the whole \u2014 'boots on the ground'), and hyperbole (deliberate exaggeration). Heinrichs shows tropes let you make a thing bigger, smaller, or different simply by renaming it. Choose the trope that reshapes perception your way.",
    task: "Rename a thing with a trope so the audience sees it your way.",
    method: [
      "Decide how you want {subj} to be perceived \u2014 bigger, smaller, nobler, uglier.",
      "Pick a trope: metaphor, metonymy, synecdoche, or hyperbole.",
      "Swap the plain name for the trope that reshapes it.",
      "Repeat the new name until it becomes the reality."
    ],
    outputs: [
      "At {subj}: call a small setback \u2018a speed bump,\u2019 or a big one \u2018a train wreck.\u2019",
      "At {subj}: \u201cWe need more boots on the ground here.\u201d (part for whole)",
      "At {subj}: \u201cThis is a mountain we can absolutely climb.\u201d (metaphor)"
    ],
    learn: "Tropes swap names to reshape perception \u2014 metaphor, metonymy, synecdoche, hyperbole each make a thing bigger, smaller, or different.",
    develop: "Take one plain object or event and rename it four ways using each trope.",
    apply: "When perception matters, choose the trope that makes the thing look the way your argument needs.",
    examples: [
      "\u2018Silicon Valley\u2019 stands for a whole industry (metonymy).",
      "\u2018A sea of troubles\u2019 makes ordinary problems feel vast (metaphor + hyperbole)."
    ],
    related: ["framing", "redefinition", "self-correction", "enargeia"]
  }));

  /* ============== CHAPTER 22 — Recover from a Screw-Up =============== */
  S.push(tool({
    id: "recover-from-screwup", name: "Recover from a Screw-Up", ch: 22, level: 3,
    builds: ["control-the-tense"],
    breakdown: "Heinrichs gives a recipe for turning a blunder into an advantage that goes far beyond apologizing. Set a goal for the recovery; get out in front of the story before others define it; switch the tense to the future ('here's what we'll do'); don't belittle the victim; and express your feelings rather than issue a bare 'I'm sorry.' A well-handled screw-up can build more trust than never erring at all.",
    task: "Turn a mistake into rebuilt trust by managing goal, timing, tense, and feeling.",
    method: [
      "Set your goal for {subj}: what should people believe afterward?",
      "Get ahead of the story before others frame it.",
      "Switch to the future: \u2018here\u2019s what we\u2019ll do now.\u2019",
      "Show genuine feeling and honor those affected \u2014 don\u2019t just say \u2018sorry.\u2019"
    ],
    outputs: [
      "At {subj}: \u201cI own this, here\u2019s exactly how we make it right, starting today.\u201d",
      "At {subj}: \u201cYou deserved better, and here\u2019s what changes because of it.\u201d",
      "At {subj}: express real regret, then pivot fast to the fix."
    ],
    learn: "Recovery beats apology: set a goal, get ahead of the story, switch to the future, honor the victim, and show real feeling.",
    develop: "Draft a recovery statement for a past mistake using goal, first-mover, future tense, and genuine feeling.",
    apply: "After a blunder, resist the bare apology \u2014 get ahead of it and pivot to what you\u2019ll do next.",
    examples: [
      "A CEO who fronts a recall and details the fix keeps more trust than one who hides.",
      "\u2018I let you down; here\u2019s my plan\u2019 rebuilds faith better than \u2018mistakes were made.\u2019"
    ],
    related: ["control-the-tense", "set-your-goal", "backfire", "personal-sacrifice"]
  }));
  S.push(tool({
    id: "backfire", name: "The Backfire: Overplay to Calm", ch: 22, level: 3,
    builds: ["emotional-volume-control"],
    breakdown: "A counterintuitive recovery tool: when an authority or angry party is escalating, deliberately overplay your own emotion so their anger has nowhere to go, or so they feel compelled to calm you \u2014 flipping the dynamic. Heinrichs shows that sometimes the way to lower another's heat is to briefly raise your own, making them the reasonable one who must de-escalate.",
    task: "Briefly overplay emotion so the other party is forced into the calming role.",
    method: [
      "Notice who is escalating in {subj} and who holds authority.",
      "Deliberately raise your own visible emotion a notch.",
      "Let them feel the need to calm you down.",
      "Once they shift to reassurance, settle and steer to the fix."
    ],
    outputs: [
      "At {subj}: \u201cHonestly, I\u2019m devastated about this \u2014 it matters that much to me.\u201d",
      "At {subj}: show heightened concern so the boss says \u2018okay, let\u2019s just fix it.\u2019",
      "At {subj}: let visible feeling flip them into the reasonable role."
    ],
    learn: "Sometimes raising your own emotion forces the other party to become the calming, reasonable one \u2014 a deliberate backfire.",
    develop: "Rehearse a moment of heightened (but controlled) emotion that invites the other side to de-escalate.",
    apply: "When an authority is escalating, briefly overplay your feeling so they take on the calming role.",
    examples: [
      "An employee\u2019s visible distress prompts a raging manager to soften and problem-solve.",
      "Showing you\u2019re shaken can flip an angry customer into reassuring you."
    ],
    related: ["emotional-volume-control", "recover-from-screwup", "belittlement-charge"]
  }));

  /* ================ CHAPTER 23 — Seize the Occasion ================== */
  S.push(tool({
    id: "kairos-timing", name: "Seize the Kairos", ch: 23, level: 3,
    builds: ["the-perfect-audience"],
    breakdown: "Kairos is the rhetorical art of timing \u2014 the persuadable moment when an audience is ripe for your argument. Heinrichs shows that the same argument fails or succeeds depending on when it's made; the skilled persuader waits for (or engineers) the opening when emotions, events, and attention align. Recognizing the ripe moment matters as much as the words.",
    task: "Spot or create the ripe moment when your argument will land.",
    method: [
      "Read the mood and events surrounding {subj}.",
      "Wait for (or engineer) the moment the audience is ready.",
      "Strike when emotion, attention, and events align.",
      "Hold your argument until the opening appears."
    ],
    outputs: [
      "At {subj}: \u201cThis is the moment \u2014 they\u2019re finally ready to hear it.\u201d",
      "At {subj}: hold the pitch until right after the win, when goodwill is high.",
      "At {subj}: \u201cGiven what just happened, now is exactly the time.\u201d"
    ],
    learn: "Kairos is timing: the same argument wins or loses depending on the ripeness of the moment you choose.",
    develop: "Recall an argument that failed and identify the better moment it should have waited for.",
    apply: "Before making a big ask, wait for the moment when mood and events make the audience most ready.",
    examples: [
      "A raise request lands better right after a visible win than during a crisis.",
      "A reformer seizes the moment after a scandal to push a change long resisted."
    ],
    related: ["the-perfect-audience", "moment-spotter", "right-medium"]
  }));
  S.push(tool({
    id: "moment-spotter", name: "Spot the Opening", ch: 23, level: 3,
    builds: ["kairos-timing"],
    breakdown: "A tactical companion to kairos: recognizing the specific verbal or situational cues that signal an opening has arrived \u2014 a question asked, a mood shift, a lull, an admission. Heinrichs shows that persuadable moments announce themselves if you're watching, and the quick persuader steps through the door the instant it opens.",
    task: "Detect the in-the-moment cue that an opening has arrived, and step through it.",
    method: [
      "Stay alert to shifts in tone and attention during {subj}.",
      "Watch for cues: a question, a pause, a softened mood, an admission.",
      "Treat the cue as your signal to speak.",
      "Step through the opening before it closes."
    ],
    outputs: [
      "At {subj}: the moment they ask \u2018so what would you do?\u2019 \u2014 that\u2019s your cue.",
      "At {subj}: a lull after the argument cools is the opening to propose.",
      "At {subj}: \u201cSince you asked \u2014 here\u2019s exactly what I\u2019d suggest.\u201d"
    ],
    learn: "Openings announce themselves \u2014 a question, a pause, a softening \u2014 and the quick persuader steps through before they close.",
    develop: "In your next meeting, note every moment someone opens a door you could have walked through.",
    apply: "Watch for the cue \u2014 a question or a lull \u2014 and make your move the instant the opening appears.",
    examples: [
      "\u2018What do you think we should do?\u2019 is an engraved invitation to persuade.",
      "A pause after venting is the moment to offer the calm proposal."
    ],
    related: ["kairos-timing", "the-perfect-audience", "right-medium"]
  }));

  /* ============== CHAPTER 24 — Use the Right Medium ================== */
  S.push(tool({
    id: "right-medium", name: "Choose the Right Medium", ch: 24, level: 3,
    builds: ["kairos-timing"],
    breakdown: "Heinrichs shows the medium shapes which appeal works: sight favors ethos and pathos (we judge character and feel emotion through images and presence), sound favors logos (the ear follows argument and reason), and the intimate senses \u2014 touch, taste, smell \u2014 hit emotion hardest of all. Match your channel to the appeal you need: a hard logical case may work better spoken, an emotional one shown.",
    task: "Match the channel (sight, sound, or intimate senses) to the appeal you need.",
    method: [
      "Decide which appeal {subj} most needs \u2014 character, logic, or emotion.",
      "For character or feeling, favor the visual and the in-person.",
      "For logic, favor the spoken or written, where reasoning follows.",
      "For deep emotion, use the intimate senses of touch, taste, smell."
    ],
    outputs: [
      "At {subj}: deliver the trust-building message face-to-face, not by email.",
      "At {subj}: put the logical case in writing where it can be followed step by step.",
      "At {subj}: use a tangible, sensory detail when you need pure emotion."
    ],
    learn: "The medium shapes the appeal: sight carries character and emotion, sound carries logic, and the intimate senses hit feeling hardest.",
    develop: "Take one message and decide which medium best fits whether it needs ethos, logos, or pathos.",
    apply: "Before sending an important message, choose the channel that best carries the appeal it depends on.",
    examples: [
      "An apology lands better in person (ethos) than in a text.",
      "A complex justification is clearer written out than delivered in a rushed call."
    ],
    related: ["kairos-timing", "the-three-appeals", "delivery"]
  }));



  /* ============== CHAPTER 25 — Give a Persuasive Talk ================ */
  S.push(tool({
    id: "five-canons", name: "Work the Five Canons", ch: 25, level: 3,
    builds: ["framing"],
    breakdown: "Cicero's five canons are the master checklist for building any persuasive talk: Invention (find the arguments and appeals), Arrangement (order them for effect), Style (choose the words and figures), Memory (internalize it so you can adapt), and Delivery (perform it). Heinrichs uses them as a production line \u2014 run an argument through all five and nothing important gets left out.",
    task: "Build a talk by running it through invention, arrangement, style, memory, and delivery.",
    method: [
      "Invention: gather the arguments and appeals for {subj}.",
      "Arrangement: order them \u2014 logic first, emotion last.",
      "Style & memory: choose the words and internalize the flow.",
      "Delivery: rehearse the performance out loud."
    ],
    outputs: [
      "At {subj}: list every possible argument first, then cut to the best (invention).",
      "At {subj}: open with a hook, prove in the middle, close on emotion (arrangement).",
      "At {subj}: rehearse aloud until you can adapt on the fly (memory + delivery)."
    ],
    learn: "The five canons \u2014 invention, arrangement, style, memory, delivery \u2014 are a complete checklist so no part of a persuasive talk is neglected.",
    develop: "Take a talk you must give and draft one line of notes for each of the five canons.",
    apply: "Before your next presentation, run it through all five canons to catch what\u2019s missing.",
    examples: [
      "A speaker who nails content but skips delivery loses the room anyway.",
      "Great arrangement \u2014 emotion saved for last \u2014 rescues an average argument."
    ],
    related: ["framing", "ciceros-outline", "delivery", "full-arsenal"]
  }));
  S.push(tool({
    id: "ciceros-outline", name: "Use Cicero's Outline", ch: 25, level: 3,
    builds: ["five-canons"],
    breakdown: "For arrangement, Heinrichs offers Cicero's classic speech structure: Introduction (win attention and goodwill), Narration (tell the story of the situation), Division (state what's agreed and what's in dispute), Proof (make your case), Refutation (answer objections), and Conclusion (stir emotion and call to action). It's a reliable skeleton for any persuasive talk.",
    task: "Structure a persuasive talk using Cicero's six-part outline.",
    method: [
      "Introduction: open {subj} by winning attention and goodwill.",
      "Narration + division: tell the story, then name what\u2019s actually disputed.",
      "Proof + refutation: make your case and answer the objections.",
      "Conclusion: stir emotion and call for the choice."
    ],
    outputs: [
      "At {subj}: hook first, then \u2018here\u2019s how we got here,\u2019 then \u2018here\u2019s the real question.\u2019",
      "At {subj}: prove your case, then knock down the top objection before it\u2019s raised.",
      "At {subj}: close on feeling and a clear ask."
    ],
    learn: "Cicero\u2019s outline \u2014 intro, narration, division, proof, refutation, conclusion \u2014 is a dependable skeleton for a persuasive talk.",
    develop: "Outline an argument you care about into all six of Cicero\u2019s parts.",
    apply: "For your next talk, draft it in Cicero\u2019s six sections so nothing structural is missing.",
    examples: [
      "A trial lawyer\u2019s summation follows this outline almost exactly.",
      "A strong pitch tells the story, names the dispute, proves, rebuts, and closes hard."
    ],
    related: ["five-canons", "the-period", "delivery"]
  }));
  S.push(tool({
    id: "delivery", name: "Master Delivery", ch: 25, level: 3,
    builds: ["five-canons"],
    breakdown: "Delivery \u2014 the actual performance \u2014 often decides persuasion more than content. Heinrichs stresses two channels above all: the voice (pace, pauses, volume, pitch) and the eyes (contact that commands attention and signals confidence). Slowing down, pausing before key points, and holding eye contact project the ethos of someone worth believing.",
    task: "Command attention through deliberate control of voice and eyes.",
    method: [
      "Slow your pace and add pauses before the key points of {subj}.",
      "Vary volume and pitch so nothing goes flat.",
      "Hold steady eye contact to project confidence.",
      "Let silence do work \u2014 pause instead of filling."
    ],
    outputs: [
      "At {subj}: pause a full beat before your most important line.",
      "At {subj}: drop your volume to draw the room in, rather than pushing louder.",
      "At {subj}: hold the eyes of one listener at a time."
    ],
    learn: "Delivery often outweighs content; the voice (pace, pauses, pitch) and the eyes (steady contact) project believable authority.",
    develop: "Record yourself making a point and practice adding pauses and eye contact until it commands attention.",
    apply: "In your next talk, slow down, pause before key lines, and hold eye contact to project confidence.",
    examples: [
      "A well-placed pause makes an ordinary line feel momentous.",
      "Steady eye contact reads as honesty; darting eyes read as doubt."
    ],
    related: ["five-canons", "ciceros-outline", "right-medium"]
  }));

  /* ============== CHAPTER 26 — Capture Your Audience ================ */
  S.push(tool({
    id: "the-period", name: "Build to the Period", ch: 26, level: 3,
    builds: ["ciceros-outline"],
    breakdown: "The 'period' is a long, suspenseful sentence that builds through mounting clauses to a climax \u2014 releasing its meaning only at the end, ideally in about the length of a single breath. Heinrichs shows the period grips an audience because they must wait for the payoff. Master it and you can hold a room right up to a powerful landing.",
    task: "Build one long, suspenseful sentence that lands its meaning at the very end.",
    method: [
      "Take the climactic point of {subj}.",
      "Delay it behind a series of mounting clauses.",
      "Keep the whole build to about one breath.",
      "Release the meaning on the final words."
    ],
    outputs: [
      "At {subj}: \u201cIf we act now, if we hold our nerve, if we refuse to quit \u2014 we win.\u201d",
      "At {subj}: stack the conditions, then drop the payoff last.",
      "At {subj}: make them wait through the clauses for the point."
    ],
    learn: "The period is a suspense-building sentence that withholds its meaning until the climactic end, gripping the audience through the wait.",
    develop: "Take a flat conclusion and rebuild it as a period \u2014 mounting clauses to a final payoff.",
    apply: "For a climactic moment, craft one long, suspenseful sentence that lands its point on the last word.",
    examples: [
      "\u2018We shall fight\u2026 we shall never surrender\u2019 builds through clauses to its climax.",
      "A toast that stacks memories before landing on the final tribute."
    ],
    related: ["ciceros-outline", "the-pathetic-ending", "weighing-figures", "enargeia"]
  }));
  S.push(tool({
    id: "enargeia", name: "Make Them See It", ch: 26, level: 3,
    builds: ["storytelling"],
    breakdown: "Enargeia is the art of vivid description \u2014 making an audience see, hear, and feel a scene as if present. Heinrichs shows that concrete, sensory detail turns an abstraction into an experience, and experience persuades. Instead of telling the audience a fact, you put them inside the moment so they draw the conclusion themselves.",
    task: "Replace abstraction with vivid, sensory detail that puts the audience in the scene.",
    method: [
      "Find the abstraction in {subj} you want them to feel.",
      "Choose concrete, specific, sensory details.",
      "Describe it in the present so they\u2019re inside it.",
      "Let the vivid scene make your point for you."
    ],
    outputs: [
      "At {subj}: not \u2018it was chaotic\u2019 but \u2018phones ringing, three people shouting, coffee cold.\u2019",
      "At {subj}: \u201cPicture the room: the door\u2019s open, the light\u2019s on, and no one\u2019s there.\u201d",
      "At {subj}: make them smell, hear, and see the moment."
    ],
    learn: "Enargeia turns abstraction into experience through vivid sensory detail \u2014 and experience persuades better than assertion.",
    develop: "Take a dull statement and rewrite it with concrete, sensory detail until you can picture it.",
    apply: "When a point feels abstract, describe it so vividly the audience sees it and concludes for themselves.",
    examples: [
      "\u2018The line stretched around the block in the rain\u2019 beats \u2018demand was high.\u2019",
      "A safety talk that describes the actual accident scene stays with people."
    ],
    related: ["storytelling", "reality-tropes", "the-period"]
  }));
  S.push(tool({
    id: "identity-strategy", name: "Speak to Their Identity", ch: 26, level: 3,
    builds: ["persuasive-virtue"],
    breakdown: "Heinrichs shows the deepest way to capture an audience is to speak to who they believe they are. When your argument affirms and flatters the audience's identity \u2014 their self-image, their group, their story about themselves \u2014 they embrace it as their own. You align your proposal with the person the audience wants to be.",
    task: "Align your argument with the identity the audience wants to claim.",
    method: [
      "Name the self-image the audience holds around {subj}.",
      "Affirm that identity sincerely.",
      "Frame your proposal as an expression of who they are.",
      "Let agreeing become a way to be more themselves."
    ],
    outputs: [
      "At {subj}: \u201cYou\u2019ve always been the people who do the hard, right thing.\u201d",
      "At {subj}: \u201cThis is exactly the kind of bold move that defines this team.\u201d",
      "At {subj}: tie the choice to the person they\u2019re proud to be."
    ],
    learn: "Audiences embrace arguments that affirm their identity; align your proposal with who they want to be and they own it.",
    develop: "For an audience you face, write down the identity they cherish and phrase an appeal to it.",
    apply: "Frame your next argument as an expression of the audience\u2019s own valued identity.",
    examples: [
      "A brand sells belonging to a tribe more than it sells a product.",
      "\u2018We\u2019re innovators\u2019 makes a risky choice feel like staying true to themselves."
    ],
    related: ["persuasive-virtue", "patriotism", "commonplace"]
  }));

  /* ============= CHAPTER 27 — Write a Persuasive Essay ============== */
  S.push(tool({
    id: "theme-twist", name: "Open with a Theme, Close with a Twist", ch: 27, level: 3,
    builds: ["framing"],
    breakdown: "For persuasive writing, Heinrichs recommends stating a clear theme up front and then delivering a satisfying twist or turn at the end that deepens or reframes it. The reader is carried by the theme and rewarded by the twist, which makes the whole piece feel purposeful and memorable rather than merely informative.",
    task: "State a clear theme early and pay it off with a turn at the end.",
    method: [
      "Name the single theme of your piece on {subj} up front.",
      "Develop it consistently through the body.",
      "Plant a detail that will pay off later.",
      "Close with a twist that deepens or reframes the theme."
    ],
    outputs: [
      "At {subj}: open \u2018This is a story about trust,\u2019 then end by redefining what trust meant.",
      "At {subj}: return to the opening image, now changed by everything between.",
      "At {subj}: land a final turn that recasts the whole point."
    ],
    learn: "A clear theme carries the reader; a closing twist rewards them and makes the piece purposeful and memorable.",
    develop: "Take an essay you\u2019ve written and add a closing twist that reframes its opening theme.",
    apply: "When you write to persuade, declare a theme early and deliver a satisfying turn at the close.",
    examples: [
      "An essay opens on \u2018failure\u2019 and closes by redefining it as the start of success.",
      "A column returns to its first anecdote with a meaning the reader now understands."
    ],
    related: ["framing", "epiphany", "narrative-arc"]
  }));
  S.push(tool({
    id: "epiphany", name: "Lead the Reader to an Epiphany", ch: 27, level: 3,
    builds: ["storytelling"],
    breakdown: "The most persuasive writing engineers a moment of realization in the reader \u2014 an epiphany they feel they reached themselves. Heinrichs shows that when you arrange evidence and story so the conclusion dawns on the reader rather than being announced, they own it completely. You set up the pieces; the reader has the 'aha.'",
    task: "Arrange the piece so the reader reaches the conclusion as their own realization.",
    method: [
      "Decide the realization you want the reader to reach about {subj}.",
      "Lay out the pieces without stating the conclusion.",
      "Order them so understanding builds toward the turn.",
      "Let the reader have the \u2018aha\u2019 themselves."
    ],
    outputs: [
      "At {subj}: withhold the thesis and let the evidence assemble it in the reader\u2019s mind.",
      "At {subj}: \u201cBy now you\u2019ve probably seen it too\u2026\u201d",
      "At {subj}: set the pieces so the last one clicks everything into place."
    ],
    learn: "A reader who reaches the conclusion themselves owns it completely; arrange the pieces so the insight dawns rather than being told.",
    develop: "Take a claim and restructure the case so the reader concludes it before you state it.",
    apply: "In persuasive writing, hold back the thesis and lead the reader to discover it.",
    examples: [
      "A mystery lets the reader solve it a beat before the reveal, and they feel clever.",
      "An essay that assembles clues so the point lands as the reader\u2019s own idea."
    ],
    related: ["storytelling", "theme-twist", "enthymeme"]
  }));
  S.push(tool({
    id: "narrative-arc", name: "Shape a Narrative Arc", ch: 27, level: 3,
    builds: ["storytelling"],
    breakdown: "Persuasive essays borrow the shape of story: a beginning that sets up tension, a middle that develops it, and an end that resolves it in favor of your point. Heinrichs shows that giving an argument the momentum of narrative \u2014 with stakes, a turn, and a resolution \u2014 keeps the reader moving and makes the conclusion feel earned.",
    task: "Give your argument the momentum of a story: setup, rising tension, resolution.",
    method: [
      "Open {subj} with a tension or question that needs resolving.",
      "Raise the stakes through the middle.",
      "Reach a turning point that shifts the reader.",
      "Resolve in favor of your point, so the conclusion feels earned."
    ],
    outputs: [
      "At {subj}: open on the problem at its most acute, not on background.",
      "At {subj}: build tension, then deliver the turn that changes everything.",
      "At {subj}: resolve so the reader feels the conclusion was inevitable."
    ],
    learn: "An argument shaped like a story \u2014 setup, rising tension, turn, resolution \u2014 carries the reader and makes the conclusion feel earned.",
    develop: "Rewrite a flat argument as a three-act arc with stakes, a turn, and a resolution.",
    apply: "Structure your next persuasive piece as a story with tension that resolves toward your point.",
    examples: [
      "A case study that opens on crisis and resolves on the fix reads like a story.",
      "An op-ed that builds tension to a turn keeps readers to the last line."
    ],
    related: ["storytelling", "theme-twist", "epiphany"]
  }));

  /* ============== CHAPTER 28 — Use the Right Tools ================== */
  S.push(tool({
    id: "full-arsenal", name: "Deploy the Full Arsenal", ch: 28, level: 3,
    builds: ["framing"],
    breakdown: "Heinrichs' capstone: a sequence for combining the tools into a full persuasive campaign. On offense: set your goal, control the tense (aim at the future), find the audience's commonplaces and values, then blend ethos, logos, and pathos, ending on emotion. On defense: concede what you can, redefine the terms, and steer to the future. It's the whole book fired in order.",
    task: "Combine the tools in sequence into a complete offense and defense.",
    method: [
      "Offense: set the goal for {subj}, then aim the argument at the future.",
      "Find their commonplaces; blend character, logic, and emotion.",
      "Defense: concede what you can, then redefine the terms.",
      "Steer everything back to a choice about the future."
    ],
    outputs: [
      "At {subj}: goal \u2192 future tense \u2192 shared values \u2192 ethos/logos/pathos \u2192 emotional close.",
      "At {subj}: \u201cYou\u2019re right about that (concede) \u2014 which is why we should\u2026 (redefine + future).\u201d",
      "At {subj}: run the sequence rather than firing tools at random."
    ],
    learn: "The tools work best in sequence \u2014 goal, tense, values, the three appeals on offense; concede, redefine, future on defense.",
    develop: "Take a real argument and script it end to end using the full offensive and defensive sequence.",
    apply: "For a high-stakes argument, plan the whole sequence in advance rather than improvising tool by tool.",
    examples: [
      "A negotiator concedes a small point, redefines the issue, and closes on the future.",
      "A leader runs goal-to-emotion in order and wins a room that random tactics wouldn\u2019t."
    ],
    related: ["framing", "set-your-goal", "control-the-tense", "the-three-appeals", "concession", "redefinition"]
  }));

  /* ============ CHAPTER 29 — Run an Agreeable Country =============== */
  S.push(tool({
    id: "argue-for-consensus", name: "Argue Toward Consensus", ch: 29, level: 3,
    builds: ["spot-the-argument"],
    breakdown: "Heinrichs closes by returning to rhetoric's true purpose: not to defeat opponents but to bring people to agreement and shared action. The mature persuader uses every tool in service of consensus \u2014 seeking the choice a group can commit to, keeping arguments in the future tense, and treating disagreement as the raw material of a decision rather than a war. Rhetoric, done well, is how free people decide together.",
    task: "Use the tools to move a group toward a decision it can commit to together.",
    method: [
      "Frame {subj} as a shared choice, not a contest to win.",
      "Keep the argument in the future tense, aimed at what to do.",
      "Fold in each side\u2019s values so everyone is represented.",
      "Steer toward the option the group can commit to together."
    ],
    outputs: [
      "At {subj}: \u201cWhat can we all live with and actually commit to?\u201d",
      "At {subj}: \u201cWe agree on the goal \u2014 let\u2019s decide the route together.\u201d",
      "At {subj}: turn a standoff into a shared decision about the future."
    ],
    learn: "Rhetoric\u2019s true aim is consensus \u2014 using the tools to bring a group to a choice it can commit to, not to defeat an opponent.",
    develop: "Take a divisive issue and practice framing it as a shared choice that includes every side\u2019s values.",
    apply: "In group disagreements, aim your tools at the decision everyone can commit to, not at winning.",
    examples: [
      "A chair turns a deadlocked committee toward the compromise all can support.",
      "A family settles a dispute by agreeing on the future instead of relitigating the past."
    ],
    related: ["spot-the-argument", "set-your-goal", "control-the-tense", "full-arsenal"]
  }));


  /* ============================================================================
   * REGISTRATION — replace the track's concepts and rebuild its chapter list.
   * ========================================================================== */
  C.communication.concepts = S;

  var byCh = {};
  S.forEach(function (s) { (byCh[s.ch] = byCh[s.ch] || []).push(s.id); });

  C.communication.chapters = Object.keys(CHAPTERS).map(function (k) {
    var n = +k;
    return {
      n: n,
      title: CHAPTERS[n][0],
      blurb: CHAPTERS[n][1],
      skills: byCh[n] || [],
      page: "p. " + (CHAPTER_PAGES[n] || "?")
    };
  });

})(window);
