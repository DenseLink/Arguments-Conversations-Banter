/* =============================================================================
 * content-extra.js  —  Expansion pack: full chapter->skills coverage.
 *
 * Loaded IMMEDIATELY AFTER content.js (and before module/concept/planner/app).
 * It does three things without touching the original 21 concepts' payloads:
 *   1. Corrects source/page citations on existing concepts (esp. banter, which
 *      is cited against the reader's actual print edition, verified from the
 *      uploaded page photos).
 *   2. Pushes the remaining skills so EVERY chapter of each book is covered.
 *   3. Declares CM_CONTENT.<track>.chapters = [...] so each module renders as
 *      "chapter of the book -> skills within that chapter."
 *
 * All prose is original paraphrasing of the source ideas (no verbatim text).
 * New skills carry the same shape the simulator needs: task + method[] +
 * outputs[] (each output uses {subj} = the practice subject), plus breakdown,
 * deepDive[] and related[]. Classic script; file:// friendly.
 * ========================================================================== */
(function (global) {
  "use strict";
  var C = global.CM_CONTENT;
  if (!C) return;

  function add(track, arr) {
    if (C[track] && C[track].concepts) C[track].concepts.push.apply(C[track].concepts, arr);
  }
  function recite(track, id, source, page) {
    var c = C.getConcept(track, id);
    if (c) { c.source = source; c.page = page; }
  }

  /* ---------------------------------------------------------------------------
   * 1. Citation corrections (verified against the reader's edition / photos)
   * ------------------------------------------------------------------------- */
  // Banter — Patrick King, The Art of Witty Banter (2nd ed.), by chapter & page.
  recite("banter", "flow-like-a-river",
    "The Art of Witty Banter (2nd ed.), Ch. 1 \u2014 \u201cFlow Like a River\u201d (chapter opens p. 1).",
    "The Art of Witty Banter, Ch. 1, p. 1");
  recite("banter", "vivid-language",
    "The Art of Witty Banter (2nd ed.), Ch. 1 \u2014 \u201cMore Effective Compliments\u201d (~p. 46).",
    "The Art of Witty Banter, Ch. 1, p. 46");
  recite("banter", "agree-and-amplify",
    "The Art of Witty Banter (2nd ed.), Ch. 3 \u2014 \u201cA Touch of Witty Banter,\u201d comeback type #2 (Agree & Amplify, ~p. 118).",
    "The Art of Witty Banter, Ch. 3, p. 118");
  recite("banter", "comic-triple",
    "The Art of Witty Banter (2nd ed.), Ch. 4 \u2014 \u201cThe Comic Triple\u201d (~p. 166).",
    "The Art of Witty Banter, Ch. 4, p. 166");
  recite("banter", "misdirection-surprise",
    "The Art of Witty Banter (2nd ed.), Ch. 4 \u2014 \u201cMisdirection Aplenty\u201d (~p. 176).",
    "The Art of Witty Banter, Ch. 4, p. 176");
  recite("banter", "sarcasm-and-irony",
    "The Art of Witty Banter (2nd ed.), Ch. 4 \u2014 Irony, Ironic Simile & Hyperbole (~p. 195).",
    "The Art of Witty Banter, Ch. 4, p. 195");
  recite("banter", "pinning-the-tail",
    "The Art of Witty Banter (2nd ed.), Ch. 5 \u2014 \u201cPinning the Tail on the Donkey\u201d / the 1:1:1 method (~p. 238).",
    "The Art of Witty Banter, Ch. 5, p. 238");

  // Comedy — align existing concepts to the book's real chapter/pages.
  recite("comedy", "comic-premise",
    "The Comic Toolbox, Ch. 3 \u2014 \u201cThe Comic Premise\u201d (p. 19).",
    "The Comic Toolbox, Ch. 3, p. 19");
  recite("comedy", "flaws-humanity",
    "The Comic Toolbox, Ch. 4 \u2014 \u201cComic Characters\u201d (p. 30).",
    "The Comic Toolbox, Ch. 4, p. 30");
  recite("comedy", "clash-of-context",
    "The Comic Toolbox, Ch. 5 \u2014 \u201cSome Tools from the Toolbox\u201d (p. 47).",
    "The Comic Toolbox, Ch. 5, p. 47");
  recite("comedy", "comic-throughline",
    "The Comic Toolbox, Ch. 7 \u2014 \u201cThe Comic Throughline\u201d (p. 75).",
    "The Comic Toolbox, Ch. 7, p. 75");
  recite("comedy", "rule-of-three",
    "The Comic Toolbox, Ch. 8 \u2014 \u201cMore Tools from the Toolbox\u201d (p. 103).",
    "The Comic Toolbox, Ch. 8, p. 103");
  recite("comedy", "sitcom-structure",
    "The Comic Toolbox, Ch. 12 \u2014 \u201cSituation Comedy\u201d (p. 139).",
    "The Comic Toolbox, Ch. 12, p. 139");

  // Communication — Thank You for Arguing chapter alignment.
  recite("communication", "high-ground-framing",
    "Thank You for Arguing, Ch. 11 \u2014 \u201cGain the High Ground\u201d (Aristotle's favorite topic).",
    "Thank You for Arguing, Ch. 11");

  /* ---------------------------------------------------------------------------
   * 2a. NEW COMEDY skills  (The Comic Toolbox, remaining chapters)
   * ------------------------------------------------------------------------- */
  add("comedy", [
    {
      id: "kill-ferocious-editor",
      name: "Kill Your Ferocious Editor",
      source: "The Comic Toolbox, Ch. 2 \u2014 \u201cThe Will to Risk\u201d (p. 9).",
      page: "The Comic Toolbox, Ch. 2, p. 9",
      breakdown:
        "Comedy dies under self-censorship. Vorhaus argues the biggest enemy is the internal 'ferocious editor' that kills ideas before they're spoken. Separate generating from judging: produce lots of bad ideas fast, because volume is how you reach the good ones.",
      task: "Silence the inner critic and generate a flood of raw comic angles on the subject before judging any of them.",
      method: [
        "Set a fixed target for {subj}: ten angles, no editing allowed.",
        "Write every idea down, especially the stupid ones \u2014 speed over quality.",
        "Only after the list is full do you circle the two or three with real spark."
      ],
      outputs: [
        "\u201cGive me ten terrible takes on {subj} first \u2014 the good one is hiding behind them.\u201d",
        "\u201cRule for {subj}: no idea gets vetoed until we've got ten on the board.\u201d",
        "\u201cMy first nine thoughts about {subj} are warm-up reps; number ten is the keeper.\u201d"
      ],
      deepDive: [
        "Learn: Fear of looking unfunny is what makes people unfunny; the editor confuses a rough draft with a final one.",
        "Develop: Practice timed idea dumps \u2014 quantity quotas train your brain to stop pre-filtering.",
        "Apply: In any brainstorm, pitch, or writers' room, generate wide first and curate second."
      ],
      related: [
        { track: "comedy", id: "truth-and-pain", why: "Risk is required to say the true, slightly painful thing that actually lands." },
        { track: "communication", id: "set-your-goals", why: "Generate freely, then let a clear goal select which idea survives." }
      ]
    },
    {
      id: "rule-of-nine",
      name: "The Rule of Nine",
      source: "The Comic Toolbox, Ch. 2 \u2014 \u201cThe Will to Risk\u201d: the Rule of Nine (p. 9).",
      page: "The Comic Toolbox, Ch. 2, p. 9",
      breakdown:
        "A working ratio: for every ten comic ideas you have, expect roughly nine to be weak and one to be strong. Instead of being discouraged, treat the nine misses as the necessary cost of the one hit. It reframes failure as throughput.",
      task: "Reframe rejected ideas as the expected price of the one that works, and keep producing without discouragement.",
      method: [
        "Assume nine of your next ten swings at {subj} will miss \u2014 and that's normal.",
        "Track hits, not misses; the misses were always part of the deal.",
        "Refill the pipeline immediately so the next 'one in nine' can arrive."
      ],
      outputs: [
        "\u201cThat bit on {subj} bombing? That was one of the nine. The tenth is coming.\u201d",
        "\u201cI need nine bad {subj} jokes to earn the one good one \u2014 so let's burn through them.\u201d",
        "\u201cKeep pitching {subj}; the ratio only works if you keep swinging.\u201d"
      ],
      deepDive: [
        "Learn: Prolific comics aren't miss-free \u2014 they just generate enough volume that hits are inevitable.",
        "Develop: Keep an idea log and count kept-vs-cut so the 1:9 reality stops feeling like failure.",
        "Apply: Any creative or persuasive output improves when you decouple your ego from each attempt."
      ],
      related: [
        { track: "comedy", id: "kill-ferocious-editor", why: "The Rule of Nine is why silencing the editor pays off \u2014 volume produces the hit." }
      ]
    },
    {
      id: "three-types-conflict",
      name: "Three Types of Comic Conflict",
      source: "The Comic Toolbox, Ch. 3 \u2014 \u201cThe Comic Premise\u201d: three types of comic conflict (p. 19).",
      page: "The Comic Toolbox, Ch. 3, p. 19",
      breakdown:
        "A comic premise runs on conflict, and it comes in three flavors: a character against another character, a character against themselves, and a character against the environment or situation. Naming which one you're using sharpens the joke and keeps a scene from going flat.",
      task: "Identify which of the three comic conflicts is driving the moment, then push that specific tension harder.",
      method: [
        "Ask what {subj} is really fighting: a person, their own nature, or the situation itself.",
        "Name the conflict out loud \u2014 that clarity tells you where the laugh lives.",
        "Escalate that one axis instead of muddying the scene with all three at once."
      ],
      outputs: [
        "\u201cThe funny part of {subj} isn't the other guy \u2014 it's the war going on inside your own head.\u201d",
        "\u201c{subj} is just me versus the universe, and the universe is winning on points.\u201d",
        "\u201cThe whole comedy of {subj} is one stubborn person losing a fight with a vending machine.\u201d"
      ],
      deepDive: [
        "Learn: Conflict is the engine; without a clash there is tension to release and no laugh.",
        "Develop: Label sitcom scenes you watch by conflict type to build fast recognition.",
        "Apply: When a bit feels soft, you've usually blurred the conflict \u2014 pick one and commit."
      ],
      related: [
        { track: "comedy", id: "comic-premise", why: "The premise is the 'what if'; conflict type is the engine that makes it move." },
        { track: "comedy", id: "clash-of-context", why: "Character-vs-situation conflict is often a sustained clash of context." }
      ]
    },
    {
      id: "comic-perspective",
      name: "The Comic Perspective",
      source: "The Comic Toolbox, Ch. 4 \u2014 \u201cComic Characters\u201d: the comic perspective (p. 30).",
      page: "The Comic Toolbox, Ch. 4, p. 30",
      breakdown:
        "Every strong comic character sees the world through one distorting lens \u2014 a fixed, slightly wrong attitude they apply to everything. That consistent skew is what makes them reliably funny: we know how they'll misread any new situation.",
      task: "Give the character (or yourself) one consistent distorted worldview and filter every situation through it.",
      method: [
        "Pin down the single belief that colors how the character reads {subj}.",
        "Apply that same lens no matter what the situation actually calls for.",
        "Let the gap between their view and reality generate the comedy."
      ],
      outputs: [
        "\u201cTo him, {subj} is obviously a personal insult \u2014 everything is a personal insult.\u201d",
        "\u201cShe treats {subj} like a military operation, because she treats brushing her teeth like one too.\u201d",
        "\u201cMy whole take on {subj} is 'this will definitely go wrong,' and I'm rarely disappointed.\u201d"
      ],
      deepDive: [
        "Learn: A stable comic lens is why we laugh in anticipation \u2014 we can predict the misfire.",
        "Develop: Write a character bio as one sentence: 'X believes ___ about everything.'",
        "Apply: Consistent perspective is what turns a random funny line into a recognizable character."
      ],
      related: [
        { track: "comedy", id: "flaws-humanity", why: "The comic perspective is usually rooted in the character's central flaw." },
        { track: "comedy", id: "exaggeration", why: "Exaggeration is how you dial that fixed perspective up to comic size." }
      ]
    },
    {
      id: "exaggeration",
      name: "Exaggeration",
      source: "The Comic Toolbox, Ch. 4 \u2014 \u201cComic Characters\u201d: exaggeration (p. 30).",
      page: "The Comic Toolbox, Ch. 4, p. 30",
      breakdown:
        "Comedy magnifies. Take a real trait, fear, or reaction and blow it up past life-size until the truth inside it becomes unmistakable and absurd. The exaggeration must stay anchored to something real, or it reads as random rather than funny.",
      task: "Take one true trait of the subject and inflate it to absurd size while keeping its recognizable core.",
      method: [
        "Isolate one real, recognizable trait inside {subj}.",
        "Inflate it well past realistic proportions \u2014 to the point of absurdity.",
        "Keep a thread back to the truth so the exaggeration still rings familiar."
      ],
      outputs: [
        "\u201cI don't just check if the door's locked; {subj} means I've filed a full incident report by 2 a.m.\u201d",
        "\u201cShe's not a little competitive about {subj} \u2014 she's requested instant replay on a board game.\u201d",
        "\u201cMy reaction to {subj} could be measured on the Richter scale.\u201d"
      ],
      deepDive: [
        "Learn: Exaggeration works because it's a lie built on a truth \u2014 the truth earns the laugh.",
        "Develop: Practice 'and then what' \u2014 keep escalating a real reaction one absurd step at a time.",
        "Apply: Use it for self-deprecation, character work, and vivid storytelling alike."
      ],
      related: [
        { track: "banter", id: "exaggerated-conclusion", why: "Banter's exaggerated conclusion is this same move deployed in real-time reply." },
        { track: "comedy", id: "comic-perspective", why: "Exaggeration amplifies the fixed lens into full comic character." }
      ]
    },
    {
      id: "wildly-inappropriate",
      name: "The Wildly Inappropriate Response",
      source: "The Comic Toolbox, Ch. 5 \u2014 \u201cSome Tools from the Toolbox\u201d: the wildly inappropriate response (p. 47).",
      page: "The Comic Toolbox, Ch. 5, p. 47",
      breakdown:
        "A reliable laugh comes from responding to a situation with an emotion or scale wildly out of proportion to it \u2014 calm about catastrophe, or hysterical about nothing. The mismatch between event and reaction is the joke.",
      task: "Answer the situation with an emotional scale that is comically mismatched to what actually happened.",
      method: [
        "Gauge the 'correct' proportional reaction to {subj}.",
        "Swap in a reaction that's wildly too big or too small.",
        "Deliver it with full conviction \u2014 the commitment sells the mismatch."
      ],
      outputs: [
        "\u201cThe wifi dropped for {subj} and I have, calmly, begun drafting my will.\u201d",
        "\u201cThey cancelled {subj}. Anyway, I've decided to move to the mountains and start a new life.\u201d",
        "\u201cA genuine disaster during {subj}? *sips coffee* Neat.\u201d"
      ],
      deepDive: [
        "Learn: This is a context clash in emotional form \u2014 the size of the feeling is the surprise.",
        "Develop: Practice deadpan (too small) and meltdown (too big) as two ends of one dial.",
        "Apply: Great for defusing tension \u2014 an absurd response can lighten a heavy moment."
      ],
      related: [
        { track: "comedy", id: "clash-of-context", why: "It's a clash of context expressed through disproportionate emotion." },
        { track: "banter", id: "sarcasm-and-irony", why: "Deadpan under-reaction is close cousin to dry ironic delivery." }
      ]
    },
    {
      id: "tension-and-release",
      name: "Tension and Release",
      source: "The Comic Toolbox, Ch. 5 \u2014 \u201cSome Tools from the Toolbox\u201d: tension and release (p. 47).",
      page: "The Comic Toolbox, Ch. 5, p. 47",
      breakdown:
        "The physical mechanism of laughter: build a little tension (a setup, an expectation, a discomfort) and then discharge it suddenly with a surprise. No tension, no release; no release, no laugh. Comedy is controlled pressure.",
      task: "Deliberately build a beat of tension, then puncture it with a sudden turn so the pressure releases as a laugh.",
      method: [
        "Build a small pocket of tension or expectation around {subj}.",
        "Hold it one beat longer than comfortable.",
        "Release it with a sharp, surprising turn \u2014 the exhale is the laugh."
      ],
      outputs: [
        "\u201cSo we're all staring at {subj}, dead silent... and then someone's phone plays a kazoo ringtone.\u201d",
        "\u201cI built up this huge speech about {subj}, took a breath \u2014 and completely forgot the point.\u201d",
        "\u201cEveryone braced for the worst about {subj}. Turns out it was a wrong number.\u201d"
      ],
      deepDive: [
        "Learn: Timing IS tension management \u2014 the pause is where the pressure lives.",
        "Develop: Practice the beat: setups need a held moment before the turn to work.",
        "Apply: Stories, toasts, and jokes all run on this build-and-pop rhythm."
      ],
      related: [
        { track: "comedy", id: "rule-of-three", why: "The triple builds tension across two beats and releases it on the third." },
        { track: "banter", id: "misdirection-surprise", why: "Misdirection is a way to manufacture the tension that release then pops." }
      ]
    },
    {
      id: "fish-out-of-water",
      name: "Fish Out of Water",
      source: "The Comic Toolbox, Ch. 6 \u2014 \u201cTypes of Comic Stories\u201d: fish out of water (p. 58).",
      page: "The Comic Toolbox, Ch. 6, p. 58",
      breakdown:
        "A classic comic story engine: drop a character into a world where they don't belong and let the mismatch generate conflict and comedy. Their wrong instincts, wrong rules, and wrong assumptions collide with the new environment at every turn.",
      task: "Place a character in a world whose rules they don't know, and mine comedy from every wrong instinct.",
      method: [
        "Define the character's home rules and the alien world of {subj}.",
        "Have them apply home rules where they don't fit.",
        "Let each mismatch produce a fresh conflict or misunderstanding."
      ],
      outputs: [
        "\u201cPutting me in charge of {subj} is like handing a cat a spreadsheet \u2014 confident and completely wrong.\u201d",
        "\u201cI walked into {subj} using all my old rules, and every single one was the exact wrong move.\u201d",
        "\u201cShe treats {subj} like her old job, which is why everyone's quietly horrified.\u201d"
      ],
      deepDive: [
        "Learn: The setup guarantees ongoing conflict \u2014 the character can't stop misfiring.",
        "Develop: List the new world's unwritten rules; each one is a joke waiting to be broken.",
        "Apply: Great for pitches and stories \u2014 'right person, wrong world' writes itself."
      ],
      related: [
        { track: "comedy", id: "clash-of-context", why: "Fish-out-of-water is clash of context stretched across an entire story." },
        { track: "comedy", id: "three-types-conflict", why: "It's primarily character-vs-environment conflict, sustained." }
      ]
    },
    {
      id: "character-comedy",
      name: "Character Comedy",
      source: "The Comic Toolbox, Ch. 6 \u2014 \u201cTypes of Comic Stories\u201d: character comedy (p. 58).",
      page: "The Comic Toolbox, Ch. 6, p. 58",
      breakdown:
        "Here the comedy flows from who the character is rather than the plot they're in. A strong, specific comic personality generates laughs in any situation, because the humor is baked into their reactions, not the events.",
      task: "Let the humor come from a vivid, specific personality reacting, rather than from plot mechanics.",
      method: [
        "Build a distinct comic personality with clear wants and blind spots.",
        "Drop that personality into {subj} and watch how they'd uniquely react.",
        "Let the laugh come from character, not from an engineered gag."
      ],
      outputs: [
        "\u201cIt doesn't matter what {subj} is \u2014 put him in it and he'll find a way to make it about parking.\u201d",
        "\u201cThe joke isn't {subj}; the joke is exactly how she'd overthink it.\u201d",
        "\u201cGive me any situation and my anxiety will provide the comedy, thanks.\u201d"
      ],
      deepDive: [
        "Learn: Durable comedy is character-driven \u2014 it survives any plot because the person is funny.",
        "Develop: Write the same mundane scene for three different personalities to feel the difference.",
        "Apply: Sitcoms and personal storytelling both lean on distinct, consistent characters."
      ],
      related: [
        { track: "comedy", id: "comic-perspective", why: "Character comedy is powered by a consistent comic perspective." },
        { track: "comedy", id: "flaws-humanity", why: "The flaws are what make the character both funny and lovable." }
      ]
    },
    {
      id: "running-gag",
      name: "The Running Gag",
      source: "The Comic Toolbox, Ch. 8 \u2014 \u201cMore Tools from the Toolbox\u201d: the running gag (p. 103).",
      page: "The Comic Toolbox, Ch. 8, p. 103",
      breakdown:
        "A joke that returns across a scene, story, or conversation, getting funnier with each repetition because the audience is now in on it. The recurrence itself becomes the payoff \u2014 familiarity is the fuel.",
      task: "Plant a joke early, then bring it back at unexpected intervals so recurrence itself becomes the laugh.",
      method: [
        "Plant a distinctive small joke about {subj} early on.",
        "Bring it back later when least expected, unchanged or slightly escalated.",
        "Trust that recognition does the work \u2014 the callback is the punchline."
      ],
      outputs: [
        "\u201cAnd \u2014 as predicted \u2014 {subj} came up again. It always comes up again.\u201d",
        "\u201cRemember the thing about {subj}? Yeah. It's back. It's always back.\u201d",
        "\u201cThat's the third time {subj} has ruined this exact moment. We should charge it rent.\u201d"
      ],
      deepDive: [
        "Learn: Repetition builds a private in-joke; the audience laughs at being in the club.",
        "Develop: Note which early details could 'return' \u2014 the best running gags are seeded, not forced.",
        "Apply: Works in speeches, group chats, and storytelling to create a satisfying thread."
      ],
      related: [
        { track: "comedy", id: "callback", why: "A callback is a running gag's single, well-timed return." },
        { track: "banter", id: "banter-chain", why: "Group banter chains often ride a shared running gag." }
      ]
    },
    {
      id: "callback",
      name: "The Callback",
      source: "The Comic Toolbox, Ch. 8 \u2014 \u201cMore Tools from the Toolbox\u201d: the callback (p. 103).",
      page: "The Comic Toolbox, Ch. 8, p. 103",
      breakdown:
        "Referencing an earlier joke at a later, well-chosen moment. Unlike a running gag's repetition, a callback is usually a single, surprising return that rewards everyone who was paying attention and ties the whole piece together.",
      task: "Reach back to an earlier joke and re-land it at a fresh moment for a bonus laugh of recognition.",
      method: [
        "Bank a memorable line or image from earlier in the exchange about {subj}.",
        "Wait for a new moment where it unexpectedly applies again.",
        "Drop the reference clean \u2014 no explaining \u2014 and let recognition pay off."
      ],
      outputs: [
        "\u201cWell, that brings us right back to {subj}, doesn't it? Full circle.\u201d",
        "\u201cAnd this, ladies and gentlemen, is the {subj} situation all over again.\u201d",
        "\u201cCalled it. {subj}. Told you an hour ago.\u201d"
      ],
      deepDive: [
        "Learn: Callbacks feel clever because they reward memory and create structure from chaos.",
        "Develop: Train yourself to remember the room's earlier laughs \u2014 those are your callback ammo.",
        "Apply: End toasts, sets, and essays on a callback for a satisfying sense of closure."
      ],
      related: [
        { track: "comedy", id: "running-gag", why: "A running gag is repeated callbacks; a callback is the single-shot version." },
        { track: "banter", id: "flow-like-a-river", why: "Callbacks reward the flow by reusing what the conversation already built." }
      ]
    },
    {
      id: "practical-jokes",
      name: "Practical Jokes & Real Stakes",
      source: "The Comic Toolbox, Ch. 9 \u2014 \u201cPractical Jokes\u201d (p. 116).",
      page: "The Comic Toolbox, Ch. 9, p. 116",
      breakdown:
        "A short chapter on comedy that plays out in the real world rather than on the page. The lesson generalizes: comedy needs real consequences to feel alive \u2014 a joke with nothing at stake rarely lands as hard as one where something could actually go wrong.",
      task: "Give the bit a real (even small) stake so the audience senses something could actually go wrong.",
      method: [
        "Identify what could genuinely go wrong in {subj}.",
        "Let that real risk stay visible instead of neutralizing it.",
        "Ride the edge \u2014 the sense of stakes is what makes it thrilling and funny."
      ],
      outputs: [
        "\u201cThe funny part of {subj} is that it could have gone very, very badly \u2014 and almost did.\u201d",
        "\u201c{subj} works as a story because for one second nobody knew how it would end.\u201d",
        "\u201cNo stakes, no story. The near-disaster is exactly why {subj} is worth telling.\u201d"
      ],
      deepDive: [
        "Learn: Real consequence is what separates a limp anecdote from an edge-of-seat one.",
        "Develop: When telling a story, foreground what was at risk before revealing the outcome.",
        "Apply: Use stakes to make even small everyday moments feel like they mattered."
      ],
      related: [
        { track: "comedy", id: "comedy-jeopardy", why: "Stakes and jeopardy are the same principle at story scale." }
      ]
    },
    {
      id: "comedy-jeopardy",
      name: "Comedy and Jeopardy",
      source: "The Comic Toolbox, Ch. 10 \u2014 \u201cComedy and Jeopardy\u201d (p. 117).",
      page: "The Comic Toolbox, Ch. 10, p. 117",
      breakdown:
        "Jeopardy \u2014 the price of failure \u2014 is what gives comedy weight. Vorhaus distinguishes story logic (what makes sense) from story dynamic (what keeps us watching), and layers microconflict inside macroconflict so tension exists at every scale.",
      task: "Raise the price of failure and stack small conflicts inside the big one so tension never goes slack.",
      method: [
        "Name the big thing at risk in {subj} \u2014 the macroconflict.",
        "Seed smaller conflicts inside each beat \u2014 microconflicts \u2014 so no moment is idle.",
        "Keep the price of failure visible so the audience stays invested."
      ],
      outputs: [
        "\u201cThe big problem in {subj} was bad enough, but every tiny step to fix it made it worse.\u201d",
        "\u201cWith {subj}, it wasn't one disaster \u2014 it was forty small ones holding hands.\u201d",
        "\u201cEverything about {subj} mattered, because failing meant losing something real.\u201d"
      ],
      deepDive: [
        "Learn: Story dynamic (momentum) can matter more than story logic in comedy.",
        "Develop: Audit a scene for 'dead' beats and inject a microconflict into each.",
        "Apply: Layered stakes keep talks, pitches, and stories gripping start to finish."
      ],
      related: [
        { track: "comedy", id: "practical-jokes", why: "Both hinge on real stakes making the comedy matter." },
        { track: "comedy", id: "comic-throughline", why: "The throughline carries the macroconflict that microconflicts feed." }
      ]
    },
    {
      id: "ear-tickles",
      name: "Ear Tickles & Details",
      source: "The Comic Toolbox, Ch. 11 \u2014 \u201cStill More Tools from the Toolbox\u201d: ear tickles & details (p. 125).",
      page: "The Comic Toolbox, Ch. 11, p. 125",
      breakdown:
        "Small pleasures of language \u2014 a funny-sounding word, a satisfying rhythm, a hyper-specific detail \u2014 that reward the listener even before the 'real' joke lands. The right concrete detail is often funnier than a general statement.",
      task: "Swap vague words for the funniest specific detail and let the sound and specificity do extra work.",
      method: [
        "Find the vague word in your line about {subj}.",
        "Replace it with the most specific, best-sounding detail available.",
        "Read it aloud \u2014 keep the version that tickles the ear."
      ],
      outputs: [
        "\u201cIt wasn't just food at {subj} \u2014 it was a single, sweating deviled egg on a paper plate.\u201d",
        "\u201cHe didn't drive to {subj}; he arrived in a 1997 Corolla held together by bumper stickers.\u201d",
        "\u201cThe word 'kerfuffle' does more for {subj} than any three sentences could.\u201d"
      ],
      deepDive: [
        "Learn: Specificity is credibility and comedy at once \u2014 details make the picture real and funny.",
        "Develop: Collect words you find inherently funny; deploy them where a bland word sat.",
        "Apply: Detail-rich language elevates storytelling, writing, and everyday description."
      ],
      related: [
        { track: "banter", id: "vivid-language", why: "Ear tickles are the comedy-craft version of banter's vivid, specific language." },
        { track: "communication", id: "control-the-mood", why: "Concrete detail is how you make an audience see and feel a mood." }
      ]
    },
    {
      id: "the-eyebrow-effect",
      name: "The Eyebrow Effect",
      source: "The Comic Toolbox, Ch. 11 \u2014 \u201cStill More Tools from the Toolbox\u201d: the eyebrow (p. 125).",
      page: "The Comic Toolbox, Ch. 11, p. 125",
      breakdown:
        "A trigger that signals 'a joke is coming' \u2014 a raised eyebrow, a shift in tone, a tiny setup cue \u2014 priming the audience to laugh. Used well it sharpens timing; overused it telegraphs and kills the surprise.",
      task: "Use a subtle cue to prime the listener that a punch is coming, without over-telegraphing it.",
      method: [
        "Set a light cue before your turn on {subj} \u2014 a pause, a look, a tonal shift.",
        "Let it prime the listener that something's coming.",
        "Deliver the turn quickly after \u2014 don't oversell the wind-up."
      ],
      outputs: [
        "\u201c*small pause* ...So about {subj}. *raises eyebrow* You're going to love this.\u201d",
        "\u201cLet me tell you how {subj} really went. *leans in* Buckle up.\u201d",
        "\u201cNow, {subj}. *tiny smirk* This is the good part.\u201d"
      ],
      deepDive: [
        "Learn: A subtle 'get ready' cue improves timing by focusing attention on the beat.",
        "Develop: Practice one physical and one verbal primer; watch for when it helps vs. spoils.",
        "Apply: Storytellers and presenters use the eyebrow to steer a room's attention."
      ],
      related: [
        { track: "comedy", id: "tension-and-release", why: "The eyebrow is a tool for building the tension you then release." }
      ]
    },
    {
      id: "sketch-comedy",
      name: "Sketch Comedy: Mining & Refining",
      source: "The Comic Toolbox, Ch. 13 \u2014 \u201cSketch Comedy\u201d: mining and refining (p. 154).",
      page: "The Comic Toolbox, Ch. 13, p. 154",
      breakdown:
        "A sketch finds one comic idea and mines it thoroughly \u2014 exploring every implication of a single premise \u2014 then refines by cutting everything that doesn't serve the core joke. Find the game, play the game, cut the rest.",
      task: "Find the one game of the scene, exhaust its variations, then cut everything that isn't the game.",
      method: [
        "Identify the single funny idea (the 'game') inside {subj}.",
        "Mine it \u2014 list every escalation and variation the premise allows.",
        "Refine \u2014 cut anything that doesn't feed that one core joke."
      ],
      outputs: [
        "\u201cThe whole game of {subj} is one guy who won't admit he's lost \u2014 so let's run that into the ground.\u201d",
        "\u201cEverything in {subj} that isn't about that one joke? Cut it. It's diluting the good part.\u201d",
        "\u201cWe found the funny in {subj}; now we push it seven escalations further.\u201d"
      ],
      deepDive: [
        "Learn: 'Find the game' is the core discipline \u2014 one premise, fully explored, beats many half-ideas.",
        "Develop: Take any premise and force ten escalations before you allow yourself to edit.",
        "Apply: The mine-then-refine loop applies to writing, pitches, and bits of any length."
      ],
      related: [
        { track: "comedy", id: "comic-premise", why: "The 'game' of a sketch is the comic premise, pushed to its limit." },
        { track: "comedy", id: "good-enemy-great", why: "Refining is where 'good is the enemy of great' does its cutting work." }
      ]
    },
    {
      id: "good-enemy-great",
      name: "Good Is the Enemy of Great",
      source: "The Comic Toolbox, Ch. 14 \u2014 \u201cToward Polish and Perfection\u201d (p. 162).",
      page: "The Comic Toolbox, Ch. 14, p. 162",
      breakdown:
        "The temptation to settle for a joke that works 'well enough' is what stops good material from becoming great. Rewriting, testing with beta audiences, and refusing to stop at the first passable version is how comedy gets sharpened.",
      task: "Refuse to settle at 'good enough' \u2014 rewrite and test the bit until it is genuinely great.",
      method: [
        "Get your take on {subj} to 'good' \u2014 then treat that as the starting line, not the finish.",
        "Test it on a small honest audience and watch the real reaction.",
        "Rewrite the weakest beat and test again until it's clearly great."
      ],
      outputs: [
        "\u201c{subj} is good. Which means it's not done \u2014 what would make it great?\u201d",
        "\u201cI ran {subj} past three people, watched where they didn't laugh, and fixed exactly that.\u201d",
        "\u201cGood enough is a trap. Let's rewrite the middle of {subj} one more time.\u201d"
      ],
      deepDive: [
        "Learn: Beta testers reveal what you can't see in your own material \u2014 use them honestly.",
        "Develop: Build a rewrite habit: never present the first passable draft as final.",
        "Apply: Applies to jokes, talks, and writing \u2014 iteration is where quality actually lives."
      ],
      related: [
        { track: "comedy", id: "kill-ferocious-editor", why: "Generate freely first, THEN apply ruthless polish \u2014 different phases." },
        { track: "communication", id: "persuasive-essay", why: "Revision discipline is the shared craft behind great writing and great jokes." }
      ]
    },
    {
      id: "fraud-police",
      name: "The Fraud Police",
      source: "The Comic Toolbox, Ch. 15 \u2014 \u201cScrapmetal and Doughnuts\u201d: the fraud police (p. 174).",
      page: "The Comic Toolbox, Ch. 15, p. 174",
      breakdown:
        "The 'fraud police' is the nagging fear that you're not a real comic/writer and will be found out. Vorhaus names it so you can dismiss it: everyone feels like an impostor, and the feeling is not evidence. You keep working anyway.",
      task: "Name the impostor feeling as a bluff and keep creating despite it.",
      method: [
        "Notice the 'you're a fraud at {subj}' voice for what it is \u2014 a feeling, not a fact.",
        "Name it out loud so it loses its authority.",
        "Do the work anyway; action is the only thing that quiets it."
      ],
      outputs: [
        "\u201cThe fraud police showed up about {subj} again. Noted. Carrying on.\u201d",
        "\u201cFeeling like I'm faking {subj} isn't proof I am \u2014 everyone feels this.\u201d",
        "\u201cI'll take 'impostor doing the work' over 'confident doing nothing' on {subj} any day.\u201d"
      ],
      deepDive: [
        "Learn: Impostor feelings are near-universal among creatives and mean nothing about ability.",
        "Develop: Keep a 'done' list \u2014 evidence beats the fraud-police narrative.",
        "Apply: This reframe protects momentum in any high-exposure creative or speaking work."
      ],
      related: [
        { track: "comedy", id: "kill-ferocious-editor", why: "The fraud police is the ferocious editor wearing a scarier badge." }
      ]
    },
    {
      id: "comic-vocabulary",
      name: "Build Your Comic Vocabulary",
      source: "The Comic Toolbox, Ch. 15 \u2014 \u201cScrapmetal and Doughnuts\u201d: frames of reference & comic vocabulary (p. 174).",
      page: "The Comic Toolbox, Ch. 15, p. 174",
      breakdown:
        "Your comic range is limited by your frames of reference \u2014 the pool of images, facts, and cultural touchstones you can pull from. Deliberately widening that vocabulary gives you more unexpected connections to make, which is the raw material of wit.",
      task: "Deliberately widen your frames of reference so you have more raw material to connect unexpectedly.",
      method: [
        "Notice which frames of reference you keep reaching for around {subj}.",
        "Deliberately stock new ones \u2014 read, watch, and collect outside your defaults.",
        "Practice connecting {subj} to a frame you'd never normally use."
      ],
      outputs: [
        "\u201cMost people compare {subj} to the same three things; I've got a weirder shelf to pull from.\u201d",
        "\u201cThe fresh laugh in {subj} came from linking it to something no one expected.\u201d",
        "\u201cI collect odd references so that {subj} can be compared to a 15th-century tax dispute.\u201d"
      ],
      deepDive: [
        "Learn: Wit is unexpected connection; more references means more possible connections.",
        "Develop: Keep a swipe file of interesting facts, phrases, and images to draw on.",
        "Apply: A broad frame of reference sharpens metaphors, analogies, and comparisons everywhere."
      ],
      related: [
        { track: "banter", id: "go-beyond-literal", why: "A rich reference pool is what lets you jump beyond the literal in real time." },
        { track: "communication", id: "right-tools", why: "Figures of speech and references are the shared vocabulary of persuasion and wit." }
      ]
    },
    {
      id: "revelation",
      name: "Revelation: Comedy as Truth-Telling",
      source: "The Comic Toolbox, Ch. 16 \u2014 \u201cHomilies and Exhortations\u201d: revelation (p. 186).",
      page: "The Comic Toolbox, Ch. 16, p. 186",
      breakdown:
        "Vorhaus closes by returning to the point he opened with: comedy at its best is revelation \u2014 it shows an audience a true thing they recognize but hadn't put into words. The laugh is the sound of recognition. Aim to reveal, not just to amuse.",
      task: "Aim beyond the laugh for a moment of recognition \u2014 reveal a true thing the audience already feels.",
      method: [
        "Ask what true, unspoken thing hides inside {subj}.",
        "Shape the joke so it surfaces that truth rather than just being clever.",
        "Let the laugh be the sound of the audience recognizing themselves."
      ],
      outputs: [
        "\u201cThe best line about {subj} isn't the cleverest \u2014 it's the one that makes everyone go 'that's SO true.'\u201d",
        "\u201c{subj} got the biggest laugh because I finally said the thing we were all thinking.\u201d",
        "\u201cComedy about {subj} works when it reveals us to ourselves, not when it just wins.\u201d"
      ],
      deepDive: [
        "Learn: Recognition ('that's so true') is the deepest, most durable kind of laugh.",
        "Develop: After writing a joke, ask 'what truth does this reveal?' \u2014 if none, dig deeper.",
        "Apply: Truth-telling comedy builds trust and connection, not just amusement."
      ],
      related: [
        { track: "comedy", id: "truth-and-pain", why: "Revelation is the pay-off of the truth-and-pain principle the book opened with." },
        { track: "communication", id: "ethos-logos-pathos", why: "Revealed truth builds ethos \u2014 the audience trusts someone who names what's real." }
      ]
    }
  ]);
})(window);


/* ---------------------------------------------------------------------------
 * 2b. NEW COMMUNICATION skills  (Thank You for Arguing, remaining chapters)
 * ------------------------------------------------------------------------- */
(function (global) {
  "use strict";
  var C = global.CM_CONTENT;
  if (!C) return;
  function add(track, arr) {
    if (C[track] && C[track].concepts) C[track].concepts.push.apply(C[track].concepts, arr);
  }
  add("communication", [
    {
      id: "make-them-listen",
      name: "Make Them Listen (The Lincoln Gambit)",
      source: "Thank You for Arguing, Ch. 6 \u2014 \u201cMake Them Listen.\u201d",
      page: "Thank You for Arguing, Ch. 6",
      breakdown:
        "Before you can persuade, people have to actually want to hear you. Heinrichs shows how to earn attention by aligning yourself with the audience's interests and identity first \u2014 speaking as one of them, about what they care about, before advancing your point.",
      task: "Earn the right to be heard by aligning with the audience's identity and interests before making your point.",
      method: [
        "Open on shared ground about {subj} \u2014 a value or interest you both hold.",
        "Signal you're one of them before you ask them to move.",
        "Only then introduce your actual point, now that they're leaning in."
      ],
      outputs: [
        "\u201cWe both want {subj} to actually work \u2014 that's exactly why I want to raise something.\u201d",
        "\u201cYou care about {subj} as much as I do; here's an angle I think we're both missing.\u201d",
        "\u201cBefore anything else \u2014 I'm on your side about {subj}. Now can I add one thing?\u201d"
      ],
      deepDive: [
        "Learn: Attention is earned through identification \u2014 people listen to their own tribe first.",
        "Develop: Draft the shared-value opener before the argument itself; lead with belonging.",
        "Apply: Meetings, tough talks, and pitches all go better after you've signaled 'I'm one of you.'"
      ],
      related: [
        { track: "communication", id: "decorum", why: "Fitting the audience's expectations is how you earn the standing to be heard." },
        { track: "banter", id: "flow-like-a-river", why: "Rapport-first is the conversational cousin of earning attention before arguing." }
      ]
    },
    {
      id: "use-your-craft",
      name: "Use Your Craft (The Belushi Paradigm)",
      source: "Thank You for Arguing, Ch. 7 \u2014 \u201cUse Your Craft.\u201d",
      page: "Thank You for Arguing, Ch. 7",
      breakdown:
        "Persuasion is a learnable craft, not innate charisma. Heinrichs frames the three appeals (character, logic, emotion) as tools you consciously deploy in sequence \u2014 typically likability first, then emotion, then logic as the closer. Craft beats talent when talent isn't trained.",
      task: "Sequence your appeals deliberately \u2014 likability, then emotion, then logic \u2014 as a repeatable craft.",
      method: [
        "Open by making yourself likable and credible on {subj}.",
        "Raise the emotional stakes so they want to move.",
        "Close with the logic that lets them justify moving."
      ],
      outputs: [
        "\u201cLet me earn your trust on {subj} first, then show you why it matters, then prove it.\u201d",
        "\u201cThe order for {subj}: be likable, make them care, then hand them the reasons.\u201d",
        "\u201cI don't wing {subj} \u2014 I lead with character, build the feeling, land the logic.\u201d"
      ],
      deepDive: [
        "Learn: Sequence matters \u2014 logic lands only after character and emotion have opened the door.",
        "Develop: Outline any persuasion in three labeled beats: ethos, pathos, logos.",
        "Apply: Sales, leadership, and negotiation all reward this deliberate ordering."
      ],
      related: [
        { track: "communication", id: "ethos-logos-pathos", why: "This is the practical sequencing of the three appeals." },
        { track: "comedy", id: "comic-throughline", why: "Both organize material into a deliberate, escalating order." }
      ]
    },
    {
      id: "show-you-care",
      name: "Show You Care (Quintilian's Useful Doubt)",
      source: "Thank You for Arguing, Ch. 8 \u2014 \u201cShow You Care.\u201d",
      page: "Thank You for Arguing, Ch. 8",
      breakdown:
        "Audiences trust people who seem to have their interests at heart. A touch of visible doubt or humility \u2014 admitting the decision is hard, or that you could be wrong \u2014 paradoxically boosts credibility by showing you care more about them than about winning.",
      task: "Signal genuine concern for the audience's interest, using a touch of humility to build trust.",
      method: [
        "Show that {subj} matters to you because it matters to them.",
        "Admit a small, honest uncertainty to prove you're weighing it seriously.",
        "Let that visible care become the reason they trust your conclusion."
      ],
      outputs: [
        "\u201cI've gone back and forth on {subj}, because getting it right for you actually matters to me.\u201d",
        "\u201cI could be wrong about {subj} \u2014 but here's how hard I've thought about your side of it.\u201d",
        "\u201cThis isn't about me winning {subj}; it's about what's genuinely best for us.\u201d"
      ],
      deepDive: [
        "Learn: Selfless-seeming concern (eunoia) is a core ingredient of trustworthy ethos.",
        "Develop: Practice one honest admission of doubt per argument \u2014 it reads as integrity.",
        "Apply: Great for high-stakes trust situations: leadership, care work, tough negotiations."
      ],
      related: [
        { track: "communication", id: "ethos-logos-pathos", why: "Showing care is the 'goodwill' pillar of ethos." },
        { track: "comedy", id: "flaws-humanity", why: "Admitting doubt is a humanizing flaw that builds likability." }
      ]
    },
    {
      id: "turn-volume-down",
      name: "Turn the Volume Down",
      source: "Thank You for Arguing, Ch. 10 \u2014 \u201cTurn the Volume Down.\u201d",
      page: "Thank You for Arguing, Ch. 10",
      breakdown:
        "When an argument overheats, escalation loses. Lowering your intensity \u2014 calmer tone, slower pace, conceding small points \u2014 de-escalates the other person and shifts the exchange from a fight back into a solvable argument. Calm is a power move.",
      task: "De-escalate a heated exchange by deliberately lowering your intensity and conceding small points.",
      method: [
        "Notice the heat rising around {subj} and consciously drop your own volume.",
        "Concede a small, true point to signal you're not the enemy.",
        "Slow the pace so the emotional temperature can fall with you."
      ],
      outputs: [
        "\u201cYou know what, you're right about part of {subj}. Let's take this down a notch.\u201d",
        "\u201cI'm not trying to beat you on {subj} \u2014 give me a second, let's slow this down.\u201d",
        "\u201cFair point on {subj}. Honestly, we agree on more of this than it feels like right now.\u201d"
      ],
      deepDive: [
        "Learn: De-escalation flips the frame from combat (win/lose) back to problem-solving.",
        "Develop: Rehearse a calm concession line you can reach for when you feel yourself heating up.",
        "Apply: Essential for conflict resolution, customer situations, and family arguments."
      ],
      related: [
        { track: "communication", id: "control-the-mood", why: "Lowering the volume is direct mood control in a hot moment." },
        { track: "communication", id: "invisible-argument", why: "Cooling things down is how you turn a fight back into an argument." }
      ]
    },
    {
      id: "persuade-your-terms",
      name: "Persuade on Your Terms (The Sister Frame)",
      source: "Thank You for Arguing, Ch. 12 \u2014 \u201cPersuade on Your Terms.\u201d",
      page: "Thank You for Arguing, Ch. 12",
      breakdown:
        "Whoever defines the terms of a debate usually wins it. Reframing means redefining the words and categories so the argument happens on ground favorable to you \u2014 changing not the facts but the label through which they're judged.",
      task: "Redefine the terms and category of the debate so it plays out on ground that favors your position.",
      method: [
        "Notice the frame currently defining {subj} \u2014 and whom it favors.",
        "Offer a different label or category that fits the facts but reframes the stakes.",
        "Argue inside your frame so the terms themselves carry the point."
      ],
      outputs: [
        "\u201cThis isn't really about the cost of {subj} \u2014 it's about what it costs us to do nothing.\u201d",
        "\u201cLet's not call {subj} a risk. Call it what it is: an investment.\u201d",
        "\u201cThe question about {subj} isn't 'can we afford it' \u2014 it's 'can we afford to skip it.'\u201d"
      ],
      deepDive: [
        "Learn: Reframing changes the label, not the facts \u2014 and the label decides the verdict.",
        "Develop: For any position, draft two competing frames and pick the one that owns the terms.",
        "Apply: Central to negotiation, marketing, and any contested decision."
      ],
      related: [
        { track: "communication", id: "high-ground-framing", why: "Reframing is the mechanism behind seizing the high ground." },
        { track: "comedy", id: "comic-premise", why: "A frame and a premise both define the world everyone then argues inside." }
      ]
    },
    {
      id: "canons-of-logic",
      name: "Control the Argument (Homer's Canons of Logic)",
      source: "Thank You for Arguing, Ch. 13 \u2014 \u201cControl the Argument.\u201d",
      page: "Thank You for Arguing, Ch. 13",
      breakdown:
        "A quick toolkit for building and stress-testing arguments: use solid proof, sound examples, and valid comparisons, and check that your conclusion actually follows from them. Heinrichs frames it playfully but the point is rigorous \u2014 an argument controlled by logic is hard to derail.",
      task: "Build a claim on sound proof and examples, and check the conclusion truly follows before you deploy it.",
      method: [
        "State your claim about {subj} and the proof behind it.",
        "Back it with a concrete example or a fair comparison.",
        "Check the logic connects \u2014 does the conclusion actually follow?"
      ],
      outputs: [
        "\u201cHere's my claim on {subj}, here's the evidence, and here's why it follows \u2014 in that order.\u201d",
        "\u201cBefore I argue {subj}, does my conclusion actually follow from my proof? If not, I fix it.\u201d",
        "\u201cGive me one solid example for {subj} and a fair comparison, and the case makes itself.\u201d"
      ],
      deepDive: [
        "Learn: Controlling an argument means owning its logical structure, not just its volume.",
        "Develop: Practice stating claim / proof / conclusion as three separate sentences.",
        "Apply: Rigorous structure protects you in debates, reviews, and written arguments."
      ],
      related: [
        { track: "communication", id: "spot-fallacies", why: "Sound logic is the flip side of spotting broken logic." },
        { track: "communication", id: "use-your-craft", why: "Logic is the closer that lands after character and emotion open the door." }
      ]
    },
    {
      id: "make-connection",
      name: "Make a Connection (The Chandler Bing Adjustment)",
      source: "Thank You for Arguing, Ch. 14 \u2014 \u201cMake a Connection.\u201d",
      page: "Thank You for Arguing, Ch. 14",
      breakdown:
        "Persuasion needs a live emotional connection with the audience, and that means adjusting to their mood in the moment \u2014 reading the room and tuning your energy, humor, and register to match. Connection precedes conviction.",
      task: "Read the room's current mood and adjust your energy and register to match before you push your point.",
      method: [
        "Read the room's actual mood around {subj} right now.",
        "Adjust your energy, humor, and register to meet it, not fight it.",
        "Once you're in sync, guide the mood toward where you need it."
      ],
      outputs: [
        "\u201cRead the room on {subj}: match their energy first, then nudge it where it needs to go.\u201d",
        "\u201cThey're tense about {subj} \u2014 so I'll lighten first, connect, then make the ask.\u201d",
        "\u201cI meet people where they are on {subj} before I try to move them anywhere.\u201d"
      ],
      deepDive: [
        "Learn: You can't lead a mood you haven't first joined \u2014 mismatch breaks connection.",
        "Develop: Practice naming a room's mood in one word before you speak.",
        "Apply: Vital for presentations, teaching, and reading a negotiation's temperature."
      ],
      related: [
        { track: "communication", id: "control-the-mood", why: "Connecting is step one of controlling the mood." },
        { track: "banter", id: "words-vs-body", why: "Reading tone and body language is how you gauge the room to connect." }
      ]
    },
    {
      id: "spot-fallacies",
      name: "Spot Fallacies (The Seven Deadly Logical Sins)",
      source: "Thank You for Arguing, Ch. 15 \u2014 \u201cSpot Fallacies.\u201d",
      page: "Thank You for Arguing, Ch. 15",
      breakdown:
        "Most bad arguments fail in predictable ways: wrong number of choices, unproven cause, bad example, ad hominem, and so on. Learning to name the fault lets you calmly dismantle a weak argument \u2014 or avoid making one yourself.",
      task: "Identify the specific logical fault in a weak argument and name it to dismantle it calmly.",
      method: [
        "Test the argument about {subj}: does the proof actually support the claim?",
        "Look for the classic fault \u2014 false choice, bad cause, unfair example, personal attack.",
        "Name the fault plainly and redirect to the real question."
      ],
      outputs: [
        "\u201cThat's a false choice on {subj} \u2014 there are more than two options here.\u201d",
        "\u201cYou're attacking me, not my point about {subj}. Let's get back to the actual issue.\u201d",
        "\u201cOne bad example doesn't settle {subj}. What does the pattern actually show?\u201d"
      ],
      deepDive: [
        "Learn: Naming a fallacy defuses it \u2014 you expose the trick without raising your voice.",
        "Develop: Memorize a short list of common fallacies and practice spotting them in the wild.",
        "Apply: Protects you in debates, meetings, and media literacy generally."
      ],
      related: [
        { track: "communication", id: "canons-of-logic", why: "Spotting fallacies is the inverse skill of building sound logic." },
        { track: "communication", id: "call-a-foul", why: "Once you spot the foul, calling it is the next move." }
      ]
    },
    {
      id: "call-a-foul",
      name: "Call a Foul (Nixon's Trick)",
      source: "Thank You for Arguing, Ch. 16 \u2014 \u201cCall a Foul.\u201d",
      page: "Thank You for Arguing, Ch. 16",
      breakdown:
        "When someone argues in bad faith \u2014 dodging, manipulating, breaking the rules of fair argument \u2014 you can call the foul, naming the tactic to strip it of power. Done with composure, it turns the audience against the offender rather than you.",
      task: "Name an opponent's unfair tactic out loud, calmly, so it loses its power over the audience.",
      method: [
        "Spot the unfair move being pulled on {subj} \u2014 dodging, manipulating, changing the subject.",
        "Name the tactic calmly and specifically, without heat.",
        "Redirect to the fair question so the audience sees who's playing straight."
      ],
      outputs: [
        "\u201cThat's changing the subject on {subj}. Let's answer the question that was actually asked.\u201d",
        "\u201cI notice we jumped away from {subj} the moment it got specific. Let's go back.\u201d",
        "\u201cThat's a clever dodge on {subj} \u2014 but it's still a dodge. What's the real answer?\u201d"
      ],
      deepDive: [
        "Learn: Calling a foul works only when you stay composed \u2014 heat makes YOU look like the problem.",
        "Develop: Practice neutral, specific phrasing that describes the tactic without insulting the person.",
        "Apply: Useful in debates, negotiations, and dealing with manipulation."
      ],
      related: [
        { track: "communication", id: "spot-fallacies", why: "You must spot the foul before you can call it." },
        { track: "communication", id: "deal-with-bully", why: "Calling fouls is part of standing up to bad-faith bullying." }
      ]
    },
    {
      id: "persuasion-detectors",
      name: "Know Whom to Trust (Persuasion Detectors)",
      source: "Thank You for Arguing, Ch. 17 \u2014 \u201cKnow Whom to Trust.\u201d",
      page: "Thank You for Arguing, Ch. 17",
      breakdown:
        "To judge a source, weigh three things: their virtue (do they share your values?), practical wisdom (do they know what works?), and disinterest (do they lack a hidden stake?). A source strong on all three earns trust; weakness on any is a red flag.",
      task: "Weigh a source on virtue, practical wisdom, and disinterest before trusting their claim.",
      method: [
        "On {subj}, ask: does this source share the relevant values (virtue)?",
        "Ask: do they actually know what works here (practical wisdom)?",
        "Ask: do they have a hidden stake in the answer (disinterest)?"
      ],
      outputs: [
        "\u201cBefore I trust them on {subj}: do they know their stuff, and do they have a stake in the answer?\u201d",
        "\u201cThey're smart about {subj}, sure \u2014 but who profits if I believe them?\u201d",
        "\u201cI trust advice on {subj} from someone knowledgeable, values-aligned, and with nothing to gain.\u201d"
      ],
      deepDive: [
        "Learn: Credibility = virtue + practical wisdom + disinterest; a gap in any erodes trust.",
        "Develop: Run new sources through the three-part check before accepting their claims.",
        "Apply: Essential for evaluating experts, salespeople, news, and advice."
      ],
      related: [
        { track: "communication", id: "ethos-logos-pathos", why: "These detectors are how audiences judge YOUR ethos too." },
        { track: "communication", id: "show-you-care", why: "Disinterest and goodwill are the trust signals you also want to project." }
      ]
    },
    {
      id: "find-sweet-spot",
      name: "Find the Sweet Spot (The Middle Way)",
      source: "Thank You for Arguing, Ch. 18 \u2014 \u201cFind the Sweet Spot.\u201d",
      page: "Thank You for Arguing, Ch. 18",
      breakdown:
        "Persuasion often lives between extremes. Rather than defending a pole, you locate the reasonable middle that most of the audience can accept, framing your position as the sensible balance between two unappealing extremes.",
      task: "Position your point as the reasonable balance between two extremes the audience already rejects.",
      method: [
        "Name the two extreme positions on {subj} the audience dislikes.",
        "Place your point between them as the sensible middle.",
        "Let the extremes make your moderate position look obviously reasonable."
      ],
      outputs: [
        "\u201cOn {subj}, we don't have to pick 'do nothing' or 'burn it down' \u2014 here's the sensible middle.\u201d",
        "\u201cThe extreme takes on {subj} are both wrong. The reasonable path is right between them.\u201d",
        "\u201cI'm not for either extreme on {subj}; I'm for the version that actually works.\u201d"
      ],
      deepDive: [
        "Learn: Framing yourself as the moderate makes opponents look like the radicals.",
        "Develop: Practice defining both extremes first so your position lands as the balanced one.",
        "Apply: Effective in negotiations, policy debates, and team decisions."
      ],
      related: [
        { track: "communication", id: "persuade-your-terms", why: "Defining the extremes is itself a reframing move." },
        { track: "communication", id: "high-ground-framing", why: "The 'reasonable middle' is a high-ground position everyone wants to occupy." }
      ]
    },
    {
      id: "deal-with-bully",
      name: "Deal with a Bully (Socrates' Smile)",
      source: "Thank You for Arguing, Ch. 19 \u2014 \u201cDeal with a Bully.\u201d",
      page: "Thank You for Arguing, Ch. 19",
      breakdown:
        "Against an aggressor, composure is your weapon. Staying calm, asking pointed questions, and refusing to match their heat makes the bully's aggression backfire in front of any audience. You win by not playing their game.",
      task: "Neutralize an aggressor with calm composure and pointed questions instead of matching their heat.",
      method: [
        "Refuse to match the aggression around {subj} \u2014 stay visibly calm.",
        "Ask a pointed, genuine question that exposes the weakness in their attack.",
        "Let their heat contrast with your composure in front of the audience."
      ],
      outputs: [
        "\u201cThat's a strong reaction to {subj}. Genuinely \u2014 what specifically are you objecting to?\u201d",
        "\u201cI'm happy to talk {subj} calmly whenever you are. What's the actual concern?\u201d",
        "\u201cInteresting. Help me understand your point on {subj} \u2014 walk me through it.\u201d"
      ],
      deepDive: [
        "Learn: A bully needs you to escalate; calm questions starve the aggression of oxygen.",
        "Develop: Rehearse a composed question you can deploy when someone comes in hot.",
        "Apply: Powerful in confrontations, hostile meetings, and online arguments."
      ],
      related: [
        { track: "communication", id: "turn-volume-down", why: "Composure and de-escalation are the same underlying discipline." },
        { track: "banter", id: "agree-and-amplify", why: "Playful agreement is another way to disarm an aggressor without heat." }
      ]
    },
    {
      id: "instant-cleverness",
      name: "Get Instant Cleverness",
      source: "Thank You for Arguing, Ch. 20 \u2014 \u201cGet Instant Cleverness.\u201d",
      page: "Thank You for Arguing, Ch. 20",
      breakdown:
        "Wit on demand comes from a few reusable tricks: repeat the other person's word with a twist, invert their phrase, or take their metaphor and extend it. Having these patterns ready lets you sound quick without being a natural improviser.",
      task: "Deploy a reusable wit pattern \u2014 twist a word, invert a phrase, or extend their metaphor \u2014 on the spot.",
      method: [
        "Grab a key word or image the other person used about {subj}.",
        "Apply a pattern: twist it, invert it, or push their metaphor further.",
        "Deliver it quickly and lightly \u2014 speed sells the cleverness."
      ],
      outputs: [
        "\u201cYou call {subj} a headache? At this point it's a full migraine with a parking ticket.\u201d",
        "\u201cYou said {subj} is 'fine.' Fine like a fine, or fine like a hostage saying it's fine?\u201d",
        "\u201cIf {subj} is a marathon, I've been handed the wrong map and one shoe.\u201d"
      ],
      deepDive: [
        "Learn: 'Instant' cleverness is really pre-loaded patterns applied fast, not raw genius.",
        "Develop: Drill three patterns \u2014 the twist, the inversion, the extended metaphor \u2014 until reflexive.",
        "Apply: Great for meetings, banter, and any moment that rewards a quick line."
      ],
      related: [
        { track: "banter", id: "go-beyond-literal", why: "Extending a metaphor is a core beyond-the-literal banter move." },
        { track: "communication", id: "right-tools", why: "These patterns are lightweight versions of classical figures of speech." }
      ]
    },
    {
      id: "change-reality",
      name: "Change Reality (Verbal Persuasion)",
      source: "Thank You for Arguing, Ch. 21 \u2014 \u201cChange Reality.\u201d",
      page: "Thank You for Arguing, Ch. 21",
      breakdown:
        "Words don't just describe reality \u2014 they can create shared expectations that become real. Naming a group, declaring a norm, or speaking a future as if inevitable can shape how people then behave. Language is a tool for constructing, not just reporting.",
      task: "Use language to declare a norm or future as real, shaping the expectations that guide behavior.",
      method: [
        "Decide the reality you want people to act on around {subj}.",
        "Name it as already true \u2014 a shared identity, norm, or inevitable future.",
        "Speak and act from that reality so others adopt it too."
      ],
      outputs: [
        "\u201cWe're the kind of team that gets {subj} right \u2014 so of course we'll figure this out.\u201d",
        "\u201cBy this time next month, {subj} is just how we do things here.\u201d",
        "\u201cThis is already a group that handles {subj} well. Let's act like it.\u201d"
      ],
      deepDive: [
        "Learn: Declared norms and identities become self-fulfilling \u2014 speech shapes behavior.",
        "Develop: Practice stating desired outcomes in the present tense, as established fact.",
        "Apply: Powerful for leadership, culture-setting, and motivating groups."
      ],
      related: [
        { track: "communication", id: "control-the-tense", why: "Speaking a future as settled is a tense move that changes reality." },
        { track: "comedy", id: "kill-ferocious-editor", why: "Positive reinforcement as self-fulfilling prophecy is the comedy-track parallel." }
      ]
    },
    {
      id: "recover-screwup",
      name: "Recover from a Screw-Up",
      source: "Thank You for Arguing, Ch. 22 \u2014 \u201cRecover from a Screw-Up.\u201d",
      page: "Thank You for Arguing, Ch. 22",
      breakdown:
        "A mistake is a persuasion opportunity if handled right: acknowledge it quickly, reframe it as evidence of your values, and pivot to what you'll do next. Owning an error well often builds more trust than never erring.",
      task: "Turn an error into trust by owning it fast, reframing it around your values, and pivoting to the fix.",
      method: [
        "Acknowledge the mistake around {subj} quickly and plainly \u2014 no minimizing.",
        "Reframe it as proof of a value you hold (honesty, care, high standards).",
        "Pivot immediately to the concrete next step."
      ],
      outputs: [
        "\u201cI got {subj} wrong. Here's exactly what happened and here's how I'm fixing it.\u201d",
        "\u201cThat one's on me. The fact that I care about {subj} is why I'm not going to hide it.\u201d",
        "\u201cMistake made, owned, done dwelling. Here's the plan for {subj} from here.\u201d"
      ],
      deepDive: [
        "Learn: A clean, fast admission plus a fix often builds MORE trust than an unblemished record.",
        "Develop: Practice the three-beat recovery: own it, reframe it, pivot to action.",
        "Apply: Essential for leadership, client relations, and personal credibility."
      ],
      related: [
        { track: "communication", id: "show-you-care", why: "Owning a mistake is a powerful demonstration of goodwill and integrity." },
        { track: "comedy", id: "fraud-police", why: "Recovering from error also means not letting one mistake trigger the impostor spiral." }
      ]
    },
    {
      id: "seize-occasion",
      name: "Seize the Occasion (Stalin's Timing / Kairos)",
      source: "Thank You for Arguing, Ch. 23 \u2014 \u201cSeize the Occasion.\u201d",
      page: "Thank You for Arguing, Ch. 23",
      breakdown:
        "Kairos is the art of the right moment. The same argument can fail or triumph depending on timing \u2014 when the audience is ready, when the mood is ripe, when a window opens. Persuaders watch for the moment and strike when it's open.",
      task: "Watch for the ripe moment and time your argument to when the audience is most ready to hear it.",
      method: [
        "Read whether the moment for {subj} is actually open right now.",
        "If not, wait \u2014 hold your point until the audience is ready.",
        "When the window opens, strike decisively before it closes."
      ],
      outputs: [
        "\u201cNow's the moment to raise {subj} \u2014 they're finally ready to hear it.\u201d",
        "\u201cRight argument, wrong time kills {subj}. Let's wait for the opening.\u201d",
        "\u201cThe window on {subj} just opened. We move now, not next week.\u201d"
      ],
      deepDive: [
        "Learn: Timing (kairos) can matter more than the argument's content.",
        "Develop: Practice reading readiness cues \u2014 mood, attention, and openness \u2014 before you pitch.",
        "Apply: Crucial for asking for raises, big decisions, and sensitive conversations."
      ],
      related: [
        { track: "communication", id: "control-the-tense", why: "Timing and tense both concern WHEN an argument lives." },
        { track: "banter", id: "think-before-react", why: "Reading the moment before speaking is the conversational version of kairos." }
      ]
    },
    {
      id: "right-medium",
      name: "Use the Right Medium",
      source: "Thank You for Arguing, Ch. 24 \u2014 \u201cUse the Right Medium.\u201d",
      page: "Thank You for Arguing, Ch. 24",
      breakdown:
        "The channel shapes the message. A hard conversation lands differently in person, on the phone, or over text; each medium carries different emotional bandwidth and permanence. Choosing the right one is a persuasion decision in itself.",
      task: "Match your message to the medium whose emotional bandwidth and permanence best serve your goal.",
      method: [
        "Ask what {subj} really needs: nuance, speed, warmth, or a record.",
        "Match the medium \u2014 face-to-face for nuance, writing for a record, etc.",
        "Switch mediums if the current one is fighting your goal."
      ],
      outputs: [
        "\u201c{subj} is too important for text \u2014 this is a face-to-face conversation.\u201d",
        "\u201cLet's put {subj} in writing so we both have the details straight.\u201d",
        "\u201cThis part of {subj} needs tone of voice; I'll call rather than message.\u201d"
      ],
      deepDive: [
        "Learn: Each medium changes emotional bandwidth, permanence, and how a message is received.",
        "Develop: Before sending, ask 'is this the right channel for this message?'",
        "Apply: Prevents avoidable conflict in work and personal communication."
      ],
      related: [
        { track: "communication", id: "control-the-mood", why: "Medium choice is a mood lever \u2014 it shapes how the message feels." }
      ]
    },
    {
      id: "persuasive-talk",
      name: "Give a Persuasive Talk",
      source: "Thank You for Arguing, Ch. 25 \u2014 \u201cGive a Persuasive Talk.\u201d",
      page: "Thank You for Arguing, Ch. 25",
      breakdown:
        "A persuasive speech follows a classical arc: grab attention, establish the issue, make your case, address objections, and close with a memorable, action-oriented ending. Structure carries the audience from indifference to a decision.",
      task: "Structure a talk through attention, issue, case, objections, and a memorable action-focused close.",
      method: [
        "Open on {subj} with a hook that earns attention fast.",
        "State the issue, make your case, then answer the obvious objection.",
        "Close with one memorable, action-oriented line."
      ],
      outputs: [
        "\u201cMy talk on {subj}: hook, the problem, my case, the objection, then a line they'll remember.\u201d",
        "\u201cI'll open {subj} with a story, prove the point, handle the pushback, and end on the ask.\u201d",
        "\u201cEvery talk on {subj} needs a close people repeat afterward \u2014 that's the whole game.\u201d"
      ],
      deepDive: [
        "Learn: The close is what people remember \u2014 engineer it to carry your call to action.",
        "Develop: Draft the last line first; build the talk to earn it.",
        "Apply: Works for presentations, pitches, and toasts alike."
      ],
      related: [
        { track: "communication", id: "capture-audience", why: "Delivery and audience capture make the structured talk land." },
        { track: "comedy", id: "comic-throughline", why: "A talk's arc is a throughline organizing material into escalating beats." }
      ]
    },
    {
      id: "capture-audience",
      name: "Capture Your Audience",
      source: "Thank You for Arguing, Ch. 26 \u2014 \u201cCapture Your Audience.\u201d",
      page: "Thank You for Arguing, Ch. 26",
      breakdown:
        "Beyond structure, delivery captures a room: eye contact, pacing, strategic pauses, and vocal variety keep attention alive. A pause before a key point does more than volume; presence is a craft you can rehearse.",
      task: "Hold the room with delivery \u2014 pacing, pauses, eye contact, and vocal variety \u2014 not just content.",
      method: [
        "Identify the key point in your delivery of {subj}.",
        "Place a deliberate pause right before it to focus attention.",
        "Vary pace and volume so the room can't drift."
      ],
      outputs: [
        "\u201cThe most powerful part of talking about {subj} is the pause right before the point.\u201d",
        "\u201cI capture the room on {subj} with eye contact and pacing, not by talking louder.\u201d",
        "\u201cVary the rhythm on {subj} \u2014 a monotone loses them no matter how good the content is.\u201d"
      ],
      deepDive: [
        "Learn: Attention is held by variation and pauses \u2014 silence is a tool, not a gap.",
        "Develop: Rehearse marking pauses and pace changes in your notes like a musical score.",
        "Apply: Elevates any spoken persuasion \u2014 meetings, talks, storytelling."
      ],
      related: [
        { track: "communication", id: "persuasive-talk", why: "Capture is the delivery layer on top of the talk's structure." },
        { track: "comedy", id: "the-eyebrow-effect", why: "The pre-point pause is the persuasive twin of the comic 'eyebrow.'" }
      ]
    },
    {
      id: "persuasive-essay",
      name: "Write a Persuasive Essay",
      source: "Thank You for Arguing, Ch. 27 \u2014 \u201cWrite a Persuasive Essay.\u201d",
      page: "Thank You for Arguing, Ch. 27",
      breakdown:
        "On the page you lose tone and timing, so structure and word choice carry the whole load. A persuasive essay states its point clearly, orders evidence for momentum, anticipates objections, and lands a strong, resonant conclusion.",
      task: "Order a written argument for momentum \u2014 clear claim, escalating evidence, objections, strong close.",
      method: [
        "State your claim about {subj} clearly and early.",
        "Order evidence to build momentum, strongest points framing the piece.",
        "Answer the key objection, then close on a resonant final line."
      ],
      outputs: [
        "\u201cMy essay on {subj}: clear claim up top, evidence that builds, objection handled, strong last line.\u201d",
        "\u201cOn the page {subj} needs structure to do the work my voice would do out loud.\u201d",
        "\u201cThe conclusion on {subj} should echo the opening \u2014 that's what makes it feel complete.\u201d"
      ],
      deepDive: [
        "Learn: Writing removes tone and timing, so ordering and word choice must carry persuasion.",
        "Develop: Outline claim / evidence / objection / close before drafting prose.",
        "Apply: Emails, proposals, and op-eds all reward this discipline."
      ],
      related: [
        { track: "comedy", id: "good-enemy-great", why: "Revision discipline is what turns a passable essay into a great one." },
        { track: "communication", id: "canons-of-logic", why: "A written case still stands or falls on sound logical structure." }
      ]
    },
    {
      id: "right-tools",
      name: "Use the Right Tools (Figures of Speech)",
      source: "Thank You for Arguing, Ch. 28 \u2014 \u201cUse the Right Tools\u201d (and Appendix II: The Tools).",
      page: "Thank You for Arguing, Ch. 28",
      breakdown:
        "Rhetorical figures \u2014 repetition, contrast (chiasmus), memorable framing, the tactical flaw \u2014 are the finishing tools that make lines land and stick. Heinrichs catalogs them as a toolkit you reach into once your argument's structure is sound.",
      task: "Add a rhetorical figure \u2014 repetition, contrast, or a memorable turn \u2014 to make a key line land and stick.",
      method: [
        "Find the one line about {subj} you most want remembered.",
        "Apply a figure: repeat a word, invert a clause, or sharpen a contrast.",
        "Tighten it until it's quotable \u2014 the figure is what makes it stick."
      ],
      outputs: [
        "\u201cWith {subj}, ask not what's easy \u2014 ask what's right. (Contrast makes it stick.)\u201d",
        "\u201cThe line on {subj} people will repeat is the one with a twist or a mirror in it.\u201d",
        "\u201cSame point on {subj}, but with a repeated beat \u2014 now it lands and lingers.\u201d"
      ],
      deepDive: [
        "Learn: Figures are the polish, not the substance \u2014 apply them after the logic is sound.",
        "Develop: Learn three figures (anaphora, chiasmus, antithesis) and practice inserting them.",
        "Apply: Makes slogans, closings, and key lines memorable across any medium."
      ],
      related: [
        { track: "communication", id: "instant-cleverness", why: "Instant-cleverness patterns are figures deployed spontaneously." },
        { track: "comedy", id: "comic-vocabulary", why: "A rich vocabulary and reference pool feeds sharper figures." }
      ]
    },
    {
      id: "agreeable-country",
      name: "Run an Agreeable Country (Rhetoric & Consensus)",
      source: "Thank You for Arguing, Ch. 29 \u2014 \u201cRun an Agreeable Country.\u201d",
      page: "Thank You for Arguing, Ch. 29",
      breakdown:
        "Heinrichs closes by scaling rhetoric up to community: healthy groups argue toward shared decisions rather than fighting to win. The goal of rhetoric is agreement and cohesion \u2014 persuasion in service of a functioning 'us,' not domination.",
      task: "Steer a group from winning-fights toward shared decisions that keep the community cohesive.",
      method: [
        "Reframe {subj} from 'who wins' to 'what do we decide together.'",
        "Invite the group to argue toward a shared choice, not against each other.",
        "Protect the relationship so the 'us' survives the disagreement."
      ],
      outputs: [
        "\u201cThe goal with {subj} isn't for me to win \u2014 it's for us to land somewhere we can all stand.\u201d",
        "\u201cLet's argue {subj} toward a decision, not toward a scoreboard.\u201d",
        "\u201cWhatever we choose on {subj}, the point is we're still a team afterward.\u201d"
      ],
      deepDive: [
        "Learn: Rhetoric's highest purpose is consensus and cohesion, not conquest.",
        "Develop: Practice closing arguments by naming the shared decision, not the winner.",
        "Apply: Vital for teams, families, and communities that must keep working together."
      ],
      related: [
        { track: "communication", id: "invisible-argument", why: "Arguing (toward agreement) versus fighting (to win) is the book's founding distinction." },
        { track: "banter", id: "flow-like-a-river", why: "Cooperative, non-combative exchange keeps both banter and communities flowing." }
      ]
    }
  ]);
})(window);


/* ---------------------------------------------------------------------------
 * 2c. NEW BANTER skills  (The Art of Witty Banter, verified chapters/pages)
 * ------------------------------------------------------------------------- */
(function (global) {
  "use strict";
  var C = global.CM_CONTENT;
  if (!C) return;
  function add(track, arr) {
    if (C[track] && C[track].concepts) C[track].concepts.push.apply(C[track].concepts, arr);
  }
  add("banter", [
    {
      id: "never-speak-absolutes",
      name: "Never Speak in Absolutes",
      source: "The Art of Witty Banter (2nd ed.), Ch. 1 \u2014 \u201cNever Speak in Absolutes\u201d (~p. 12).",
      page: "The Art of Witty Banter, Ch. 1, p. 12",
      breakdown:
        "Absolute answers (\u201cyes,\u201d \u201cno,\u201d \u201cit was fine\u201d) are conversational dead ends \u2014 they give the other person nothing to grab onto. King's fix is to add color, detail, or a hook to even simple answers so the conversation always has somewhere to go next.",
      task: "Replace flat, absolute answers with a detail or hook that gives the other person something to respond to.",
      method: [
        "Catch the one-word or flat answer you'd normally give about {subj}.",
        "Add a specific detail, opinion, or small tangent as a hook.",
        "Leave a thread dangling that invites the other person to pull."
      ],
      outputs: [
        "\u201cWas {subj} good? Good is underselling it \u2014 remind me to tell you about the parking situation.\u201d",
        "\u201cHow was {subj}? Honestly a rollercoaster; the ending alone deserves its own podcast.\u201d",
        "\u201cDid I like {subj}? I have a three-part rant and a surprising amount of feelings.\u201d"
      ],
      deepDive: [
        "Learn: Flat answers stall momentum; hooks keep the ball in the air.",
        "Develop: Practice turning every 'yes/no/fine' into a one-line answer plus a hook.",
        "Apply: Instantly makes small talk livelier and gives partners easy openings."
      ],
      related: [
        { track: "banter", id: "flow-like-a-river", why: "Hooks are what keep the river of conversation flowing forward." },
        { track: "banter", id: "double-explanation", why: "Both add color so the other person always has a way in." }
      ]
    },
    {
      id: "think-before-react",
      name: "Think Before You React",
      source: "The Art of Witty Banter (2nd ed.), Ch. 1 \u2014 \u201cThink Before You React\u201d (~p. 26).",
      page: "The Art of Witty Banter, Ch. 1, p. 26",
      breakdown:
        "The best conversationalists create a tiny gap between stimulus and response, choosing the more interesting reply instead of the first automatic one. That half-second of deliberate choice is where wit, warmth, and steering actually happen.",
      task: "Insert a deliberate half-second before replying and choose the more interesting response over the automatic one.",
      method: [
        "Feel the automatic reply forming about {subj} \u2014 and pause on it.",
        "Ask quickly: is there a warmer, funnier, or more curious option?",
        "Choose the deliberate response rather than the reflexive one."
      ],
      outputs: [
        "\u201c*beat* Okay, my first reaction to {subj} was boring \u2014 here's the real one.\u201d",
        "\u201cGive me a second on {subj}; the interesting answer is worth the pause.\u201d",
        "\u201cI could give you the reflex take on {subj}, but let's do the good one instead.\u201d"
      ],
      deepDive: [
        "Learn: Reactivity kills wit; a deliberate beat is where better responses live.",
        "Develop: Practice the pause on low-stakes questions until it becomes natural.",
        "Apply: Improves banter, conflict, and any moment you'd normally answer on autopilot."
      ],
      related: [
        { track: "communication", id: "seize-occasion", why: "The pause is a micro-version of reading the right moment (kairos)." },
        { track: "communication", id: "turn-volume-down", why: "A beat before reacting is the core of de-escalation too." }
      ]
    },
    {
      id: "double-explanation",
      name: "The Double Explanation",
      source: "The Art of Witty Banter (2nd ed.), Ch. 1 \u2014 \u201cThe Double Explanation\u201d (~p. 40).",
      page: "The Art of Witty Banter, Ch. 1, p. 40",
      breakdown:
        "When you answer a question, give a bit more than asked \u2014 the fact plus a why, a feeling, or a small story. The 'double' gives the other person two or three threads to grab, dramatically increasing the odds the conversation keeps rolling.",
      task: "Answer with the fact PLUS a second layer (why, feeling, or story) to hand over extra threads.",
      method: [
        "Give the direct answer about {subj}.",
        "Add a second layer \u2014 the why behind it, or a quick related detail.",
        "That extra layer becomes the other person's easiest next question."
      ],
      outputs: [
        "\u201cI'm into {subj} \u2014 partly because it reminds me of a summer that went hilariously wrong.\u201d",
        "\u201cYeah, {subj}. And the reason is a story that involves a raccoon and poor decisions.\u201d",
        "\u201cI do {subj}, mostly because I'm stubborn and it annoys exactly the right people.\u201d"
      ],
      deepDive: [
        "Learn: Extra threads reduce the burden on your partner to think of the next question.",
        "Develop: Practice 'answer + one more layer' until it's your default response shape.",
        "Apply: Makes you easy and rewarding to talk to in any setting."
      ],
      related: [
        { track: "banter", id: "never-speak-absolutes", why: "Both cure the dead-end answer by adding grabbable material." },
        { track: "banter", id: "a-life-of-stories", why: "The extra layer is often a mini-story invitation." }
      ]
    },
    {
      id: "break-fourth-wall",
      name: "Break the Fourth Wall",
      source: "The Art of Witty Banter (2nd ed.), Ch. 2 \u2014 \u201cConversation Is Play\u201d: break the fourth wall (~p. 67).",
      page: "The Art of Witty Banter, Ch. 2, p. 67",
      breakdown:
        "Playfully commenting on the conversation itself \u2014 naming the awkward silence, the small talk, or the dynamic between you \u2014 creates instant intimacy and humor. It signals confidence and invites the other person to stop performing and actually play.",
      task: "Playfully name the conversation or dynamic itself to create intimacy and break the small-talk script.",
      method: [
        "Notice the meta-layer around {subj} \u2014 the awkwardness, the script, the dynamic.",
        "Name it out loud, lightly and without judgment.",
        "Let the shared acknowledgment turn strangers into co-conspirators."
      ],
      outputs: [
        "\u201cWe are absolutely making the world's most polite small talk about {subj} right now.\u201d",
        "\u201cThis is the part where we both pretend {subj} is riveting. I respect the commitment.\u201d",
        "\u201cOkay, we've done the {subj} script beautifully \u2014 want to have a real conversation now?\u201d"
      ],
      deepDive: [
        "Learn: Naming the dynamic breaks tension and signals easy confidence.",
        "Develop: Practice one light meta-comment when a conversation feels stuck in script mode.",
        "Apply: Fast-tracks rapport on dates, at networking events, and in new groups."
      ],
      related: [
        { track: "banter", id: "flow-like-a-river", why: "Breaking the fourth wall re-opens flow when small talk stalls it." },
        { track: "comedy", id: "clash-of-context", why: "Commenting on the frame is a playful context clash." }
      ]
    },
    {
      id: "instant-role-play",
      name: "Instant Role Play",
      source: "The Art of Witty Banter (2nd ed.), Ch. 2 \u2014 \u201cConversation Is Play\u201d: instant role play (~p. 95).",
      page: "The Art of Witty Banter, Ch. 2, p. 95",
      breakdown:
        "Assign the other person (or yourself) a fun role or persona and play it out for a beat \u2014 'you're clearly the villain in this story,' 'we're basically co-founders now.' A quick shared fiction creates a private game that's instantly bonding and funny.",
      task: "Assign a playful role or shared fiction and briefly act it out to create an instant bonding game.",
      method: [
        "Spot a fun role or persona suggested by {subj}.",
        "Assign it lightly \u2014 to them, to yourself, or to both of you.",
        "Play the bit for a beat, then let it fold back into normal talk."
      ],
      outputs: [
        "\u201cBased on {subj}, you're officially the mastermind and I'm the reluctant sidekick.\u201d",
        "\u201cCongratulations, {subj} makes us co-founders of a company that will absolutely fail.\u201d",
        "\u201cSo in this scenario about {subj}, I'm clearly the comic relief. I accept my role.\u201d"
      ],
      deepDive: [
        "Learn: A shared fiction is a private game \u2014 playing together bonds faster than talking about.",
        "Develop: Practice assigning quick, flattering-ish roles that invite them to play along.",
        "Apply: Great for flirtation, group fun, and turning acquaintances into friends."
      ],
      related: [
        { track: "banter", id: "break-fourth-wall", why: "Both turn conversation into shared play rather than exchange of facts." },
        { track: "comedy", id: "character-comedy", why: "Instant roles are lightweight comic characters you both inhabit." }
      ]
    },
    {
      id: "go-beyond-literal",
      name: "Go Beyond the Literal",
      source: "The Art of Witty Banter (2nd ed.), Ch. 3 \u2014 \u201cA Touch of Witty Banter\u201d: go beyond the literal (~p. 133).",
      page: "The Art of Witty Banter, Ch. 3, p. 133",
      breakdown:
        "Instead of answering the literal content, respond to the implication, the subtext, or a deliberately 'wrong' reading. Choosing the non-literal interpretation is one of the fastest engines of wit, because it surprises and reframes in a single move.",
      task: "Respond to the implication or a deliberately non-literal reading rather than the literal content.",
      method: [
        "Hear the literal meaning of what was said about {subj}.",
        "Find a funnier implication, subtext, or 'wrong' reading to answer instead.",
        "Deliver that non-literal take as if it were the obvious one."
      ],
      outputs: [
        "\u201cYou said {subj} is 'a lot.' A lot of what \u2014 fun, regret, or federal charges?\u201d",
        "\u201cTechnically {subj} is fine, and 'fine' is what people say right before the plot twist.\u201d",
        "\u201cOh, {subj} is 'interesting'? That's the word people use for haunted houses.\u201d"
      ],
      deepDive: [
        "Learn: Non-literal reading is a core wit engine \u2014 it reframes and surprises at once.",
        "Develop: Practice grabbing the second meaning of ordinary phrases and running with it.",
        "Apply: Powers quick comebacks, flirtation, and playful teasing."
      ],
      related: [
        { track: "communication", id: "instant-cleverness", why: "Twisting a word's meaning is the same reusable wit pattern." },
        { track: "comedy", id: "clash-of-context", why: "Answering a non-literal reading is a verbal clash of context." }
      ]
    },
    {
      id: "exaggerated-conclusion",
      name: "The Exaggerated Conclusion",
      source: "The Art of Witty Banter (2nd ed.), Ch. 3 \u2014 \u201cA Touch of Witty Banter\u201d: exaggerated conclusion (~p. 140).",
      page: "The Art of Witty Banter, Ch. 3, p. 140",
      breakdown:
        "Take what someone said and follow it to an absurd, over-the-top conclusion \u2014 'so basically you're saying we should all quit our jobs and live in the woods.' The playful leap to an extreme is funny because it treats a small point as if it had enormous consequences.",
      task: "Follow the other person's point to a comically extreme conclusion as if it were the logical result.",
      method: [
        "Take the modest point being made about {subj}.",
        "Extend it, straight-faced, to an absurd extreme conclusion.",
        "Deliver it as if it's the obvious, inevitable result."
      ],
      outputs: [
        "\u201cSo what you're telling me about {subj} is that society, as we know it, is over.\u201d",
        "\u201cGreat, so {subj} means we abandon the city and start a goat farm. Bold. I'm in.\u201d",
        "\u201cIf {subj} is true, then honestly nothing matters and we should all take up the accordion.\u201d"
      ],
      deepDive: [
        "Learn: The humor is in the disproportion \u2014 a tiny cause with an apocalyptic 'therefore.'",
        "Develop: Practice the 'so basically...' launch into an escalating absurd conclusion.",
        "Apply: A reliable, low-risk way to be funny in almost any exchange."
      ],
      related: [
        { track: "comedy", id: "exaggeration", why: "This is exaggeration applied to someone else's point in real time." },
        { track: "banter", id: "agree-and-amplify", why: "Amplifying a premise to absurdity is the same over-the-top engine." }
      ]
    },
    {
      id: "playful-tease",
      name: "The Playful Tease",
      source: "The Art of Witty Banter (2nd ed.), Ch. 3 \u2014 \u201cA Touch of Witty Banter\u201d: playful tease (~p. 147).",
      page: "The Art of Witty Banter, Ch. 3, p. 147",
      breakdown:
        "A gentle, affectionate tease signals comfort and creates a spark \u2014 but it only works when it's clearly warm, aimed at something trivial, and paired with obvious goodwill. The line between charming and cruel is intent and target; tease up or sideways, never down at a sore spot.",
      task: "Land a warm, trivial tease that signals comfort \u2014 aimed with obvious goodwill, never at a sore spot.",
      method: [
        "Pick a small, non-sensitive detail in {subj} to tease.",
        "Deliver it with unmistakable warmth \u2014 a smile in the voice.",
        "Be ready to amplify or drop it based on how it lands."
      ],
      outputs: [
        "\u201cOh, you're a {subj} person? Bold choice. I'm choosing to find it charming.\u201d",
        "\u201cWow, very strong opinion about {subj} for someone who was wrong about lunch earlier.\u201d",
        "\u201cYou and {subj} \u2014 name a more chaotic duo. I'll wait. Fondly.\u201d"
      ],
      deepDive: [
        "Learn: Teasing works only with visible warmth and a trivial target \u2014 intent is everything.",
        "Develop: Practice teasing 'up or sideways' and reading the reaction to calibrate.",
        "Apply: Builds spark and comfort in friendships and flirtation."
      ],
      related: [
        { track: "banter", id: "agree-and-amplify", why: "When teased back, agree-and-amplify is the ideal warm response." },
        { track: "comedy", id: "truth-and-pain", why: "Good teasing rides truth-and-pain aimed gently, never at a wound." }
      ]
    },
    {
      id: "banter-chain",
      name: "Banter Chains",
      source: "The Art of Witty Banter (2nd ed.), Ch. 3 \u2014 \u201cA Touch of Witty Banter\u201d: banter chains (~p. 150).",
      page: "The Art of Witty Banter, Ch. 3, p. 150",
      breakdown:
        "The best banter isn't a single zinger but a volley \u2014 each person builds on the last line, escalating a shared bit. The skill is 'yes-and': accept the premise your partner offers and add to it rather than resetting, so the chain climbs together.",
      task: "Build a volley by accepting your partner's last line and escalating it, rather than resetting the bit.",
      method: [
        "Accept the premise your partner just added about {subj} \u2014 don't reset it.",
        "Add one escalation that raises the stakes or absurdity.",
        "Leave room for them to top you \u2014 the chain is a shared climb."
      ],
      outputs: [
        "\u201cRight, and if {subj} keeps up, we'll need a bigger boat. \u2014 A bigger boat AND a lawyer.\u201d",
        "\u201cYes, and {subj} is exactly how legends start. Terrible, cautionary legends.\u201d",
        "\u201cExactly \u2014 and then {subj} escalates until we're both on a watchlist. Worth it.\u201d"
      ],
      deepDive: [
        "Learn: 'Yes-and' beats topping \u2014 the goal is a shared climb, not winning the exchange.",
        "Develop: Practice building on the last line instead of launching a new joke.",
        "Apply: Turns one-off quips into memorable, bonding runs of banter."
      ],
      related: [
        { track: "comedy", id: "running-gag", why: "A banter chain often becomes a spontaneous running gag." },
        { track: "banter", id: "flow-like-a-river", why: "Chains are flow at its most playful \u2014 always building forward." }
      ]
    },
    {
      id: "words-vs-body",
      name: "Words Versus Body Language",
      source: "The Art of Witty Banter (2nd ed.), Ch. 4 \u2014 \u201cFunny on Command\u201d: words versus body language (~p. 193).",
      page: "The Art of Witty Banter, Ch. 4, p. 193",
      breakdown:
        "Delivery often matters more than the line itself. A deadpan face, a raised eyebrow, timing, and tone can make an ordinary sentence hilarious \u2014 and a great line can die from poor delivery. Banter is performance, not just wording.",
      task: "Make an ordinary line land through delivery \u2014 deadpan, timing, tone, and expression \u2014 not just wording.",
      method: [
        "Take your plain line about {subj}.",
        "Choose a delivery that adds the comedy \u2014 deadpan, mock-serious, or a knowing look.",
        "Let timing and expression carry what the words alone can't."
      ],
      outputs: [
        "\u201c*completely deadpan* Yes. {subj} was the highlight of my entire life. Truly.\u201d",
        "\u201c*long pause, slow nod* ...{subj}. Sure. That's a normal thing that happened.\u201d",
        "\u201c*mock-serious* I need you to understand how important {subj} is to me. It is not.\u201d"
      ],
      deepDive: [
        "Learn: Tone and timing can outweigh the words \u2014 delivery is half the joke.",
        "Develop: Practice the same line deadpan, excited, and dry to feel how delivery changes it.",
        "Apply: Sharpens in-person humor, storytelling, and presence."
      ],
      related: [
        { track: "banter", id: "sarcasm-and-irony", why: "Irony lives entirely in the gap between words and delivery." },
        { track: "communication", id: "capture-audience", why: "Delivery, pacing, and pauses are shared performance skills." }
      ]
    },
    {
      id: "a-life-of-stories",
      name: "A Life of Stories",
      source: "The Art of Witty Banter (2nd ed.), Ch. 5 \u2014 \u201cCaptivating Stories\u201d: a life of stories (~p. 205).",
      page: "The Art of Witty Banter, Ch. 5, p. 205",
      breakdown:
        "Compelling conversationalists keep a mental library of small, ready-to-tell stories \u2014 not for showing off, but so they always have something vivid to offer and to prompt others' stories. Curating your own anecdotes in advance is what makes you 'spontaneously' interesting.",
      task: "Curate a small library of ready-to-tell personal stories so you always have something vivid to offer.",
      method: [
        "Mine your life for a few short, vivid stories connected to {subj}.",
        "Trim each to its sharpest version \u2014 setup, turn, payoff.",
        "Keep them ready so the right cue lets you offer one naturally."
      ],
      outputs: [
        "\u201cOh, {subj} reminds me \u2014 I have a very short, very stupid story about exactly this.\u201d",
        "\u201cFunny you mention {subj}; I've got a two-minute disaster that fits perfectly.\u201d",
        "\u201cSpeaking of {subj}, I keep one story in my back pocket for this exact moment.\u201d"
      ],
      deepDive: [
        "Learn: 'Spontaneous' storytellers are really well-prepared \u2014 they curate in advance.",
        "Develop: Build a running list of your best 5-6 anecdotes and refine them over time.",
        "Apply: Makes you reliably engaging at dinners, dates, and networking."
      ],
      related: [
        { track: "banter", id: "pinning-the-tail", why: "A curated story is easy to keep tight with the 1:1:1 method." },
        { track: "banter", id: "story-spine", why: "The story spine is how you structure each anecdote you curate." }
      ]
    },
    {
      id: "story-spine",
      name: "The Story Spine",
      source: "The Art of Witty Banter (2nd ed.), Ch. 5 \u2014 \u201cCaptivating Stories\u201d: the story spine (~p. 219).",
      page: "The Art of Witty Banter, Ch. 5, p. 219",
      breakdown:
        "A reliable structure for any anecdote: the ordinary setup, the moment something changes, the escalating consequences, and the resolution. Following a spine keeps a story from rambling and gives listeners the tension-and-payoff they crave.",
      task: "Structure an anecdote on a clear spine \u2014 setup, the change, escalation, resolution \u2014 so it never rambles.",
      method: [
        "Set the ordinary 'before' of your {subj} story in one line.",
        "Mark the moment it changed \u2014 the 'but then.'",
        "Escalate the consequences, then land a clean resolution."
      ],
      outputs: [
        "\u201cSo everything about {subj} was totally normal... until it very much wasn't.\u201d",
        "\u201c{subj} started fine. Then one small thing broke, and it all went sideways from there.\u201d",
        "\u201cPicture {subj}, calm and boring \u2014 and then the 'but then' arrives right on cue.\u201d"
      ],
      deepDive: [
        "Learn: A spine supplies tension (the change) and payoff (resolution) \u2014 the heart of story.",
        "Develop: Map your anecdotes to before / but-then / escalation / resolution before telling them.",
        "Apply: Keeps toasts, updates, and anecdotes tight and satisfying."
      ],
      related: [
        { track: "comedy", id: "comic-throughline", why: "The spine is the conversational cousin of the comic throughline's beats." },
        { track: "banter", id: "a-life-of-stories", why: "The spine is how you shape each story in your curated library." }
      ]
    },
    {
      id: "ask-for-stories",
      name: "Ask for Stories First",
      source: "The Art of Witty Banter (2nd ed.), Ch. 5 \u2014 \u201cCaptivating Stories\u201d: ask for stories first (~p. 230).",
      page: "The Art of Witty Banter, Ch. 5, p. 230",
      breakdown:
        "Instead of asking flat factual questions ('what do you do?'), ask questions that invite a story ('what's the weirdest thing that's happened at your job?'). Story-prompting questions get people talking vividly and give you material to amplify.",
      task: "Ask story-inviting questions instead of factual ones, so people open up with vivid material to work with.",
      method: [
        "Take the flat factual question you'd ask about {subj}.",
        "Rephrase it to invite a story \u2014 'weirdest,' 'best,' 'how did that happen.'",
        "Follow the vivid part they light up on and ask for more."
      ],
      outputs: [
        "\u201cForget the basics about {subj} \u2014 what's the wildest thing that's ever happened with it?\u201d",
        "\u201cWhat's the story behind {subj}? There's always a story.\u201d",
        "\u201cInstead of 'how's {subj}' \u2014 tell me the moment {subj} completely surprised you.\u201d"
      ],
      deepDive: [
        "Learn: Story-prompts beat fact-questions \u2014 they get people vivid and give you material.",
        "Develop: Rewrite your default questions into 'what's the story / weirdest / best' forms.",
        "Apply: Transforms interviews, dates, and small talk into real conversation."
      ],
      related: [
        { track: "banter", id: "pinning-the-tail", why: "Once they share, pinning the tail amplifies the emotion of their story." },
        { track: "communication", id: "make-connection", why: "Story-prompts are a fast route to genuine connection." }
      ]
    }
  ]);
})(window);

/* ---------------------------------------------------------------------------
 * 3. Chapter -> skills structure for each track (book chapter -> skills within)
 * ------------------------------------------------------------------------- */
(function (global) {
  "use strict";
  var C = global.CM_CONTENT;
  if (!C) return;

  C.comedy.chapters = [
    { n: 1, title: "Comedy Is Truth and Pain", page: "p. 1",
      blurb: "The founding axiom: every reliable laugh sits on a recognizable truth and a shared pain.",
      skills: ["truth-and-pain"] },
    { n: 2, title: "The Will to Risk", page: "p. 9",
      blurb: "Silence the inner censor and generate volume \u2014 the raw courage comedy requires.",
      skills: ["kill-ferocious-editor", "rule-of-nine"] },
    { n: 3, title: "The Comic Premise", page: "p. 19",
      blurb: "The distorted 'what if' at the heart of a bit, and the conflict that powers it.",
      skills: ["comic-premise", "three-types-conflict"] },
    { n: 4, title: "Comic Characters", page: "p. 30",
      blurb: "Flaws, humanity, a fixed comic lens, and exaggeration make a character funny.",
      skills: ["flaws-humanity", "comic-perspective", "exaggeration"] },
    { n: 5, title: "Some Tools from the Toolbox", page: "p. 47",
      blurb: "Core mechanisms: clash of context, the wildly inappropriate response, tension and release.",
      skills: ["clash-of-context", "wildly-inappropriate", "tension-and-release"] },
    { n: 6, title: "Types of Comic Stories", page: "p. 58",
      blurb: "Story engines \u2014 fish out of water and character comedy \u2014 that generate ongoing conflict.",
      skills: ["fish-out-of-water", "character-comedy"] },
    { n: 7, title: "The Comic Throughline", page: "p. 75",
      blurb: "The want that drives a comic story through its escalating beats.",
      skills: ["comic-throughline"] },
    { n: 8, title: "More Tools from the Toolbox", page: "p. 103",
      blurb: "The rule of three, running gags, and callbacks \u2014 structural laugh generators.",
      skills: ["rule-of-three", "running-gag", "callback"] },
    { n: 9, title: "Practical Jokes", page: "p. 116",
      blurb: "Comedy with real-world stakes: something must be able to actually go wrong.",
      skills: ["practical-jokes"] },
    { n: 10, title: "Comedy and Jeopardy", page: "p. 117",
      blurb: "The price of failure, plus micro- and macroconflict, keeps comedy gripping.",
      skills: ["comedy-jeopardy"] },
    { n: 11, title: "Still More Tools from the Toolbox", page: "p. 125",
      blurb: "Ear tickles, specific detail, and the 'eyebrow' cue that primes a laugh.",
      skills: ["ear-tickles", "the-eyebrow-effect"] },
    { n: 12, title: "Situation Comedy", page: "p. 139",
      blurb: "How sitcom structure organizes a comic throughline into satisfying beats.",
      skills: ["sitcom-structure"] },
    { n: 13, title: "Sketch Comedy", page: "p. 154",
      blurb: "Find the game, mine every variation, then refine ruthlessly.",
      skills: ["sketch-comedy"] },
    { n: 14, title: "Toward Polish and Perfection", page: "p. 162",
      blurb: "Good is the enemy of great \u2014 rewrite and beta-test until it's genuinely great.",
      skills: ["good-enemy-great"] },
    { n: 15, title: "Scrapmetal and Doughnuts", page: "p. 174",
      blurb: "Beat the 'fraud police' and widen your comic vocabulary and frames of reference.",
      skills: ["fraud-police", "comic-vocabulary"] },
    { n: 16, title: "Homilies and Exhortations", page: "p. 186",
      blurb: "The closing turn: comedy at its best is revelation \u2014 truth we recognize.",
      skills: ["revelation"] }
  ];

  C.communication.chapters = [
    { n: 1, title: "Open Your Eyes", page: "Ch. 1",
      blurb: "See the arguments happening everywhere \u2014 and the difference between fighting and arguing.",
      skills: ["invisible-argument"] },
    { n: 2, title: "Set Your Goals", page: "Ch. 2",
      blurb: "Choose one clear outcome \u2014 change of mind, mood, or willingness to act.",
      skills: ["set-your-goals"] },
    { n: 3, title: "Control the Tense", page: "Ch. 3",
      blurb: "Steer between blame (past), values (present), and choices (future).",
      skills: ["control-the-tense"] },
    { n: 4, title: "Soften Them Up", page: "Ch. 4",
      blurb: "The three appeals \u2014 character, logic, and emotion \u2014 that move an audience.",
      skills: ["ethos-logos-pathos"] },
    { n: 5, title: "Get Them to Like You", page: "Ch. 5",
      blurb: "Decorum: fit the audience's expectations to earn trust and likability.",
      skills: ["decorum"] },
    { n: 6, title: "Make Them Listen", page: "Ch. 6",
      blurb: "Earn attention by aligning with the audience's identity before you argue.",
      skills: ["make-them-listen"] },
    { n: 7, title: "Use Your Craft", page: "Ch. 7",
      blurb: "Persuasion as learnable craft: sequence likability, emotion, then logic.",
      skills: ["use-your-craft"] },
    { n: 8, title: "Show You Care", page: "Ch. 8",
      blurb: "Visible concern and a touch of useful doubt build trustworthy ethos.",
      skills: ["show-you-care"] },
    { n: 9, title: "Control the Mood", page: "Ch. 9",
      blurb: "Set the emotional weather so the audience wants to move.",
      skills: ["control-the-mood"] },
    { n: 10, title: "Turn the Volume Down", page: "Ch. 10",
      blurb: "De-escalate heat by lowering intensity and conceding small points.",
      skills: ["turn-volume-down"] },
    { n: 11, title: "Gain the High Ground", page: "Ch. 11",
      blurb: "Define the terms of the debate so it plays out on your ground.",
      skills: ["high-ground-framing"] },
    { n: 12, title: "Persuade on Your Terms", page: "Ch. 12",
      blurb: "Reframe the category so the label itself carries your point.",
      skills: ["persuade-your-terms"] },
    { n: 13, title: "Control the Argument", page: "Ch. 13",
      blurb: "Build claims on sound proof and check the conclusion actually follows.",
      skills: ["canons-of-logic"] },
    { n: 14, title: "Make a Connection", page: "Ch. 14",
      blurb: "Read the room and adjust your energy to match before you push.",
      skills: ["make-connection"] },
    { n: 15, title: "Spot Fallacies", page: "Ch. 15",
      blurb: "Name the classic logical faults to calmly dismantle a weak argument.",
      skills: ["spot-fallacies"] },
    { n: 16, title: "Call a Foul", page: "Ch. 16",
      blurb: "Name an opponent's unfair tactic to strip it of power.",
      skills: ["call-a-foul"] },
    { n: 17, title: "Know Whom to Trust", page: "Ch. 17",
      blurb: "Judge a source on virtue, practical wisdom, and disinterest.",
      skills: ["persuasion-detectors"] },
    { n: 18, title: "Find the Sweet Spot", page: "Ch. 18",
      blurb: "Position your point as the reasonable middle between two extremes.",
      skills: ["find-sweet-spot"] },
    { n: 19, title: "Deal with a Bully", page: "Ch. 19",
      blurb: "Neutralize aggression with calm composure and pointed questions.",
      skills: ["deal-with-bully"] },
    { n: 20, title: "Get Instant Cleverness", page: "Ch. 20",
      blurb: "Reusable wit patterns \u2014 twist, invert, extend \u2014 for quick replies.",
      skills: ["instant-cleverness"] },
    { n: 21, title: "Change Reality", page: "Ch. 21",
      blurb: "Use language to declare norms and futures that shape behavior.",
      skills: ["change-reality"] },
    { n: 22, title: "Recover from a Screw-Up", page: "Ch. 22",
      blurb: "Turn a mistake into trust: own it, reframe it, pivot to the fix.",
      skills: ["recover-screwup"] },
    { n: 23, title: "Seize the Occasion", page: "Ch. 23",
      blurb: "Kairos \u2014 time your argument to the moment the audience is ready.",
      skills: ["seize-occasion"] },
    { n: 24, title: "Use the Right Medium", page: "Ch. 24",
      blurb: "Match the message to the channel's bandwidth and permanence.",
      skills: ["right-medium"] },
    { n: 25, title: "Give a Persuasive Talk", page: "Ch. 25",
      blurb: "Structure a speech: attention, issue, case, objections, memorable close.",
      skills: ["persuasive-talk"] },
    { n: 26, title: "Capture Your Audience", page: "Ch. 26",
      blurb: "Hold the room with pacing, pauses, eye contact, and vocal variety.",
      skills: ["capture-audience"] },
    { n: 27, title: "Write a Persuasive Essay", page: "Ch. 27",
      blurb: "On the page, structure and word choice carry the whole argument.",
      skills: ["persuasive-essay"] },
    { n: 28, title: "Use the Right Tools", page: "Ch. 28",
      blurb: "Rhetorical figures \u2014 repetition, contrast \u2014 that make lines stick.",
      skills: ["right-tools"] },
    { n: 29, title: "Run an Agreeable Country", page: "Ch. 29",
      blurb: "Scale rhetoric to community: argue toward shared decisions, not conquest.",
      skills: ["agreeable-country"] }
  ];

  C.banter.chapters = [
    { n: 1, title: "Flow Like a River", page: "p. 1",
      blurb: "Keep conversation moving: avoid dead ends, add hooks, choose your response, compliment well.",
      skills: ["flow-like-a-river", "never-speak-absolutes", "think-before-react", "double-explanation", "vivid-language"] },
    { n: 2, title: "Conversation Is Play", page: "p. 65",
      blurb: "Treat talk as a shared game \u2014 break the fourth wall and play instant roles.",
      skills: ["break-fourth-wall", "instant-role-play"] },
    { n: 3, title: "A Touch of Witty Banter", page: "p. 103",
      blurb: "Comeback patterns and playful moves: amplify, go beyond the literal, tease, and build chains.",
      skills: ["agree-and-amplify", "go-beyond-literal", "exaggerated-conclusion", "playful-tease", "banter-chain"] },
    { n: 4, title: "Funny on Command", page: "p. 153",
      blurb: "Repeatable humor engines: the comic triple, misdirection, delivery, and irony.",
      skills: ["comic-triple", "misdirection-surprise", "words-vs-body", "sarcasm-and-irony"] },
    { n: 5, title: "Captivating Stories", page: "p. 203",
      blurb: "Curate stories, structure them on a spine, prompt others, and amplify their emotion.",
      skills: ["a-life-of-stories", "story-spine", "ask-for-stories", "pinning-the-tail"] }
  ];
})(window);
