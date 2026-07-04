/* =============================================================================
 * content-comm.js  —  Deep-dive expansion for the Communication track.
 *
 * Loaded IMMEDIATELY AFTER content-extra.js (before module/concept/planner/app).
 *
 * Purpose: "Thank You for Arguing (Revised & Updated)" is far deeper than one
 * skill per chapter. Jay Heinrichs packs each chapter with named, teachable
 * TOOLS (from the book's own "The Tools" appendix and glossary). This file
 * captures those tools as first-class, practiceable skills so every technique
 * in the book is represented, drillable, and wired into the daily challenge,
 * the interactive simulator, and the Long-Term Mastery Plan.
 *
 * It does four things:
 *   1. Adds the missing tool-skills (ethos, pathos, logos, fallacies, fouls,
 *      detectors, figures, kairos, speechmaking) — including two techniques
 *      the reader flagged from the Revised & Updated edition: THE HOOK and
 *      THE LOVE OFFENSE.
 *   2. Assigns every communication skill a difficulty LEVEL (1 foundational,
 *      2 intermediate, 3 advanced) and a BUILDS list (prerequisite skills),
 *      so the master plan can order skills simple -> complex and show how each
 *      one builds on the last.
 *   3. Rebuilds CM_CONTENT.communication.chapters so each chapter lists ALL of
 *      its skills (runs last, so it overwrites the earlier one-skill-per-chapter
 *      mapping).
 *
 * All prose is original paraphrasing of the source ideas (no verbatim text).
 * Each skill carries the shape the simulator needs: task + method[] +
 * outputs[] (each output uses {subj} = the practice subject) plus breakdown,
 * level, builds[], deepDive[] (Learn/Develop/Apply) and related[].
 * Classic script; file:// friendly.
 * ========================================================================== */
(function (global) {
  "use strict";
  var C = global.CM_CONTENT;
  if (!C || !C.communication) return;

  var SRC = "Thank You for Arguing (Revised & Updated)";
  function cite(n) { return SRC + ", Ch. " + n; }

  /* Compact builder -> full concept object the app/simulator expects. */
  function tool(o) {
    return {
      id: o.id,
      name: o.name,
      source: o.src || (cite(o.ch) + (o.sub ? " \u2014 " + o.sub : "")),
      page: SRC + ", Ch. " + o.ch,
      level: o.level,
      builds: o.builds || [],
      breakdown: o.breakdown,
      task: o.task,
      method: o.method,
      outputs: o.outputs,
      deepDive: [
        "Learn: " + o.learn,
        "Develop: " + o.develop,
        "Apply: " + o.apply
      ],
      related: o.related || []
    };
  }

  var NEW = [];


  /* ========================= ETHOS — Ch. 5 (Decorum) ===================== */
  NEW.push(tool({
    id: "code-grooming", name: "Code Grooming (Speak the Tribe's Language)",
    ch: 5, sub: "Decorum \u2014 Code Grooming", level: 2, builds: ["decorum", "ethos-logos-pathos"],
    breakdown: "Decorum means fitting the audience's expectations. Code grooming is the sharpest tool for it: use the vocabulary, references, and shorthand unique to the group so you signal 'I'm one of you' before you argue anything.",
    task: "Borrow the audience's own words, jargon, and in-references so you read as an insider.",
    method: [
      "Listen for the words the audience of the situation ({subj}) repeats \u2014 their code.",
      "Fold two or three of those exact terms into your own phrasing.",
      "Drop the outsider vocabulary that would mark you as not-one-of-them."
    ],
    outputs: [
      "At {subj}: \u201cWe both know the real bottleneck here \u2014 let me use your word for it.\u201d",
      "At {subj}: \u201cYou call this 'the crunch.' Fine \u2014 here's how we beat the crunch together.\u201d",
      "At {subj}: switching from formal jargon to the room's own shorthand so you sound like a local."
    ],
    learn: "People trust their own tribe first; shared language is the fastest credential you can show.",
    develop: "Before a conversation, jot the three words this audience uses that an outsider wouldn't, and plan to echo them.",
    apply: "New teams, client meetings, and communities open up faster when you speak their code rather than importing your own.",
    related: [
      { track: "communication", id: "decorum", why: "Code grooming is the most concrete way to achieve decorum." },
      { track: "banter", id: "flow-like-a-river", why: "Matching someone's language is rapport-building at the sentence level." }
    ]
  }));

  NEW.push(tool({
    id: "identity-strategy", name: "Identity Strategy (Make the Choice Define Them)",
    ch: 5, sub: "Decorum \u2014 Identity Strategy", level: 2, builds: ["decorum", "high-ground-framing"],
    breakdown: "Get the audience to see your proposed action as an expression of who they are. When a choice becomes part of the group's identity, agreeing feels like being themselves rather than being persuaded.",
    task: "Frame the action as something 'people like us' naturally do.",
    method: [
      "Name the group identity in play around {subj} \u2014 the 'us' you're speaking to.",
      "Tie the choice to what that group already believes about itself.",
      "Phrase it so refusing would feel out of character for them."
    ],
    outputs: [
      "At {subj}: \u201cWe've always been the team that ships when it's hard \u2014 so let's ship.\u201d",
      "At {subj}: \u201cPeople who care about this the way we do don't cut that corner.\u201d",
      "At {subj}: \u201cThat's just who we are \u2014 and this is the version of us I want to show up as.\u201d"
    ],
    learn: "Identity is a stronger motivator than logic; we act to stay consistent with who we think we are.",
    develop: "Practice completing 'People like us do things like this' for causes you care about.",
    apply: "Culture change, fundraising, and team rallying all work by attaching the ask to a group identity.",
    related: [
      { track: "communication", id: "make-them-listen", why: "Both earn movement by speaking to the audience's sense of belonging." }
    ]
  }));

  /* ================= ETHOS — Ch. 6 (Make Them Listen / Virtue) =========== */
  NEW.push(tool({
    id: "witness-bragging", name: "Witness Bragging (Let Others Praise You)",
    ch: 6, sub: "Virtue \u2014 Witness Bragging", level: 2, builds: ["make-them-listen", "ethos-logos-pathos"],
    breakdown: "Straightforward bragging is the least effective way to build virtue. Witness bragging routes the praise through a third party \u2014 the more disinterested the source, the more credible the compliment.",
    task: "Establish your credibility by quoting someone else's endorsement instead of praising yourself.",
    method: [
      "Recall who has vouched for you on matters like {subj}.",
      "Report their words rather than your own claim.",
      "Favor the most disinterested witness \u2014 someone with nothing to gain."
    ],
    outputs: [
      "About {subj}: \u201cI won't oversell it \u2014 but the client said it was the best rollout they'd seen.\u201d",
      "About {subj}: \u201cMy toughest critic on the team is the one who told me to pitch this.\u201d",
      "About {subj}: \u201cDon't take my word for it \u2014 even the folks who opposed it now use it daily.\u201d"
    ],
    learn: "Third-party praise dodges the trust penalty that self-praise triggers.",
    develop: "Keep a running file of specific compliments and who said them, so you can quote instead of boast.",
    apply: "Interviews, proposals, and introductions land better when someone else supplies the superlatives.",
    related: [
      { track: "communication", id: "show-you-care", why: "Both build ethos by de-emphasizing your own self-interest." }
    ]
  }));

  NEW.push(tool({
    id: "tactical-flaw", name: "Tactical Flaw (Admit a Weakness to Build Trust)",
    ch: 6, sub: "Virtue \u2014 Tactical Flaw", level: 2, builds: ["make-them-listen", "decorum"],
    breakdown: "Reveal a small, real defect on purpose. A well-chosen admission makes you look honest and human, which raises your credibility on everything you didn't admit.",
    task: "Concede a minor, disarming flaw to make your larger case more believable.",
    method: [
      "Pick a small true weakness related to {subj} that won't sink you.",
      "Admit it plainly, before anyone else raises it.",
      "Let the honesty vouch for the rest of your argument."
    ],
    outputs: [
      "On {subj}: \u201cI'm not the fastest at this \u2014 which is exactly why I double-check the numbers.\u201d",
      "On {subj}: \u201cFull disclosure, I hated this idea at first. Then the results changed my mind.\u201d",
      "On {subj}: \u201cWe got the timeline wrong last quarter. Here's the fix, and here's why to trust it.\u201d"
    ],
    learn: "A calculated admission signals honesty and defuses the audience's skepticism.",
    develop: "Rehearse naming one genuine limitation up front instead of hiding it.",
    apply: "Sales, leadership, and apologies all gain credibility from an honest, well-placed flaw.",
    related: [
      { track: "communication", id: "recover-screwup", why: "Both use candor about a shortcoming to rebuild standing." },
      { track: "comedy", id: "flaws-humanity", why: "Owning a flaw is disarming whether the goal is trust or a laugh." }
    ]
  }));

  NEW.push(tool({
    id: "eddie-haskell-ploy", name: "The Eddie Haskell Ploy (Back the Inevitable)",
    ch: 6, sub: "Virtue \u2014 Eddie Haskell Ploy", level: 3, builds: ["witness-bragging", "high-ground-framing"],
    breakdown: "Throw your visible support behind an outcome that's already going to happen, so you share in its virtue. Heinrichs names it after the smooth TV character; the move is old and everywhere.",
    task: "Publicly endorse the likely winner early to be seen on the right side.",
    method: [
      "Read where {subj} is clearly heading regardless of you.",
      "Voice your support for that direction before it's obvious to everyone.",
      "Position yourself as an early, principled backer \u2014 not a latecomer."
    ],
    outputs: [
      "On {subj}: \u201cI've been saying for weeks this is the way we should go \u2014 glad we're finally here.\u201d",
      "On {subj}: \u201cCount me in early; this is going to work and I want to help it land.\u201d",
      "On {subj}: getting on record in favor before the decision becomes unanimous."
    ],
    learn: "Being seen to champion the inevitable borrows its momentum for your own reputation.",
    develop: "Notice which way a decision is trending and practice stating support a beat before the crowd.",
    apply: "Office politics and coalition-building reward those who visibly back the winning direction early.",
    related: [
      { track: "communication", id: "seize-occasion", why: "Both are about timing your move to the moment." }
    ]
  }));

  /* ============== ETHOS — Ch. 8 (Show You Care / Disinterest) ============ */
  NEW.push(tool({
    id: "reluctant-conclusion", name: "The Reluctant Conclusion (Arrive Against Your Own Interest)",
    ch: 8, sub: "Disinterest \u2014 Reluctant Conclusion", level: 2, builds: ["show-you-care", "ethos-logos-pathos"],
    breakdown: "Show that you reached your position reluctantly, only because the evidence forced you \u2014 ideally against what you'd have preferred. Disinterest (eunoia) is the appearance of putting the audience's good above your own.",
    task: "Signal you'd rather conclude otherwise, so your conclusion looks forced by the facts, not by self-interest.",
    method: [
      "Acknowledge you had every reason to want a different answer on {subj}.",
      "Walk through what changed your mind.",
      "Land on the conclusion as something the evidence forced, not something you wanted."
    ],
    outputs: [
      "On {subj}: \u201cBelieve me, I wanted this to be cheaper \u2014 the numbers just won't let me say that.\u201d",
      "On {subj}: \u201cI came in hoping to defend the old way. I can't, and here's why.\u201d",
      "On {subj}: \u201cThis isn't the answer I was rooting for, but it's the honest one.\u201d"
    ],
    learn: "A conclusion reached reluctantly reads as honest because it appears to cost the speaker something.",
    develop: "Practice framing recommendations as 'I wish I could say otherwise, but...'.",
    apply: "Recommendations, verdicts, and hard calls gain weight when you show you'd have preferred another outcome.",
    related: [
      { track: "communication", id: "show-you-care", why: "Both project disinterest \u2014 that you serve the audience, not yourself." }
    ]
  }));

  NEW.push(tool({
    id: "personal-sacrifice", name: "Personal Sacrifice (This Helps You More Than Me)",
    ch: 8, sub: "Disinterest \u2014 Personal Sacrifice", level: 2, builds: ["show-you-care"],
    breakdown: "Claim, credibly, that the choice benefits the audience more than it benefits you. Apparent self-sacrifice is one of the strongest signals of good character.",
    task: "Make plain what the choice costs you and how it serves them.",
    method: [
      "Name what you personally give up if {subj} goes the way you're urging.",
      "Show the larger share of the benefit landing with the audience.",
      "Let the lopsided trade speak to your motives."
    ],
    outputs: [
      "On {subj}: \u201cThis makes more work for me, not less \u2014 but it's the right call for the team.\u201d",
      "On {subj}: \u201cI don't get anything out of this except knowing you're better off.\u201d",
      "On {subj}: \u201cI'd earn more the other way. I'm recommending this because it helps you.\u201d"
    ],
    learn: "Visible sacrifice is powerful evidence of disinterest \u2014 it proves you're not just serving yourself.",
    develop: "Identify the real cost to you in your asks and name it out loud.",
    apply: "Leadership, negotiation, and persuasion all deepen trust when your own cost is on the table.",
    related: [
      { track: "communication", id: "reluctant-conclusion", why: "Both are disinterest moves that put the audience's good first." }
    ]
  }));

  NEW.push(tool({
    id: "dubitatio", name: "Dubitatio (Downplay Your Own Skill)",
    ch: 8, sub: "Disinterest \u2014 Dubitatio", level: 2, builds: ["show-you-care", "decorum"],
    breakdown: "Seem modestly doubtful of your own eloquence. By lowering expectations of your rhetorical polish, you disarm suspicion that you're manipulating anyone \u2014 and you exceed the bar you just set.",
    task: "Open by underselling your own persuasive skill, then let the substance carry you.",
    method: [
      "Admit you're no smooth talker about {subj}.",
      "Shift the audience's attention to the facts rather than your delivery.",
      "Deliver plainly, so you clear the low bar you just set."
    ],
    outputs: [
      "On {subj}: \u201cI'm not going to dress this up \u2014 I'm bad at that. Let me just show you.\u201d",
      "On {subj}: \u201cYou won't get a polished speech from me, but you'll get the truth.\u201d",
      "On {subj}: \u201cForgive me if this is clumsy \u2014 the point matters more than my phrasing.\u201d"
    ],
    learn: "Feigned modesty about your eloquence lowers defenses and makes plain speech feel trustworthy.",
    develop: "Practice a humble opener that shifts focus from your delivery to your evidence.",
    apply: "High-stakes or skeptical rooms often warm to a speaker who disclaims slickness.",
    related: [
      { track: "communication", id: "tactical-flaw", why: "Both lower expectations to raise trust." }
    ]
  }));


  /* ================= PATHOS — Ch. 9 (Control the Mood) =================== */
  NEW.push(tool({
    id: "sympathy-first", name: "Sympathy (Register Their Emotion First)",
    ch: 9, sub: "Pathos \u2014 Sympathy", level: 2, builds: ["control-the-mood", "ethos-logos-pathos"],
    breakdown: "Before you change an audience's emotion, show that you feel it with them. Naming and honoring their current emotion makes them receptive; skipping this step makes every later appeal bounce off.",
    task: "Acknowledge and mirror the audience's present emotion before trying to shift it.",
    method: [
      "Name the emotion the audience is feeling about {subj}, out loud.",
      "Show you take it seriously rather than arguing them out of it.",
      "Only once they feel understood, begin to guide the mood elsewhere."
    ],
    outputs: [
      "On {subj}: \u201cYou're frustrated, and honestly you've earned the right to be. Can I show you one thing?\u201d",
      "On {subj}: \u201cThis worried me too. Let's sit with that for a second before I say what I think.\u201d",
      "On {subj}: \u201cI'd be angry in your shoes. So let's start there, not with my pitch.\u201d"
    ],
    learn: "Emotion has to be met before it can be moved; sympathy is the on-ramp to every pathos appeal.",
    develop: "Practice naming the other person's feeling in one sentence before you make any case.",
    apply: "Complaints, conflict, and grief all need sympathy before solutions or persuasion.",
    related: [
      { track: "communication", id: "control-the-mood", why: "Sympathy is the first, enabling move of emotional craft." },
      { track: "banter", id: "flow-like-a-river", why: "Both start by attuning to the other person's state." }
    ]
  }));

  NEW.push(tool({
    id: "storytelling-belief", name: "Storytelling & Belief (Give a Virtual Experience)",
    ch: 9, sub: "Pathos \u2014 Belief / Storytelling", level: 2, builds: ["sympathy-first", "control-the-mood"],
    breakdown: "Aristotle said belief is the key to emotion, and experience is the key to belief. A story hands the audience a borrowed experience, so they feel the emotion as if it were their own memory.",
    task: "Trigger the emotion you want by telling a short, concrete story instead of asserting a claim.",
    method: [
      "Choose one specific, sensory moment that captures the point of {subj}.",
      "Tell it as a scene \u2014 person, place, action \u2014 not as a summary.",
      "Let the audience draw the feeling from the story rather than stating it for them."
    ],
    outputs: [
      "On {subj}: \u201cPicture the new hire on day one, staring at a screen no one explained \u2014 that's what we're fixing.\u201d",
      "On {subj}: \u201cLast winter a customer waited on hold for an hour. Here's exactly what she heard.\u201d",
      "On {subj}: replacing 'morale is low' with a 60-second scene from the actual floor."
    ],
    learn: "Stories create a virtual experience, and experience is what makes an audience believe \u2014 and feel.",
    develop: "For any claim you want to land, draft the one-scene story that would let listeners feel it.",
    apply: "Pitches, eulogies, and change efforts move people through concrete stories, not abstractions.",
    related: [
      { track: "comedy", id: "comic-premise", why: "Both work by dramatizing a specific situation instead of explaining it." }
    ]
  }));

  NEW.push(tool({
    id: "set-expectation", name: "Expectation (Pre-Load the Emotion)",
    ch: 9, sub: "Pathos \u2014 Expectation", level: 2, builds: ["control-the-mood"],
    breakdown: "Make an audience expect something good or bad and the matching emotion arrives on its own. Managing expectations is quietly one of the most powerful mood tools you have.",
    task: "Set up what's coming so the audience's own anticipation supplies the feeling.",
    method: [
      "Decide the emotion you want the audience to feel about {subj}.",
      "Prime it by telling them what to expect a beat before it lands.",
      "Deliver in line with (or just beyond) the expectation you set."
    ],
    outputs: [
      "On {subj}: \u201cThis next number is going to sting \u2014 brace yourselves \u2014 and then I'll show you the fix.\u201d",
      "On {subj}: \u201cYou're about to see something that made our whole team cheer.\u201d",
      "On {subj}: \u201cWhat I'm about to say is uncomfortable, and that discomfort is the point.\u201d"
    ],
    learn: "Anticipation manufactures emotion; the mind starts feeling what it's told to expect.",
    develop: "Practice one-line 'here's what's coming' primers before big reveals.",
    apply: "Presentations, announcements, and negotiations all land harder when you seed the reaction first.",
    related: [
      { track: "banter", id: "misdirection-surprise", why: "Both play the gap between what's expected and what arrives." }
    ]
  }));

  NEW.push(tool({
    id: "the-love-offense", name: "The Love Offense (Disarm Hostility with Warmth)",
    ch: 9, sub: "Pathos \u2014 The Love Offense", level: 3, builds: ["sympathy-first", "control-the-mood", "turn-volume-down"],
    breakdown: "When an audience is hostile, the counterintuitive winning move is an offensive of warmth: unexpected sympathy, generosity, and open concession. Aggression invites resistance; disarming affection makes it hard for the other side to keep fighting and reopens the path to agreement.",
    task: "Meet hostility with deliberate, disarming warmth \u2014 sympathy, praise, and concession \u2014 instead of counter-attack.",
    method: [
      "Resist matching the hostility around {subj}; lower your own temperature first.",
      "Lead with genuine warmth \u2014 sympathy for their position or credit for their point.",
      "Concede something real early, so continued attack starts to look ungracious.",
      "From that softened ground, guide them toward the agreement you want."
    ],
    outputs: [
      "On {subj}: \u201cYou're right, and I should have said so sooner. Now can we solve this together?\u201d",
      "On {subj}: \u201cI actually admire how hard you've fought for this \u2014 so let's get you what matters most.\u201d",
      "On {subj}: \u201cI'm not here to win against you. I'm here because I think we want the same thing.\u201d"
    ],
    learn: "Warmth is an offensive weapon: it's nearly impossible to keep attacking someone who refuses to fight back and instead offers sympathy and concession.",
    develop: "Rehearse responding to a hostile line with a warm concession instead of a rebuttal \u2014 it feels unnatural at first, which is why it works.",
    apply: "Furious customers, family blowups, and adversarial negotiations often flip fastest when you go on the offensive with kindness.",
    related: [
      { track: "communication", id: "turn-volume-down", why: "Both defuse heat, but the love offense actively wins the audience over with warmth." },
      { track: "communication", id: "deal-with-bully", why: "Both handle hostility \u2014 the love offense disarms rather than confronts." },
      { track: "banter", id: "agree-and-amplify", why: "Both neutralize an attack by refusing to take the bait and warming instead." }
    ]
  }));

  NEW.push(tool({
    id: "backfire-control", name: "Backfire (Overplay It to Defuse It)",
    ch: 9, sub: "Pathos \u2014 Backfire", level: 3, builds: ["control-the-mood", "recover-screwup"],
    breakdown: "You can pre-empt someone's anger by overplaying the emotion yourself. Beat them to the outrage \u2014 especially after a screw-up \u2014 and there's little left for them to unload.",
    task: "Defuse looming anger by expressing more alarm about the problem than the other person can.",
    method: [
      "Anticipate the wrath headed your way over {subj}.",
      "Voice the outrage first, and bigger, so it's already on the table.",
      "Leave them nothing to escalate, then pivot to the fix."
    ],
    outputs: [
      "On {subj}: \u201cI'm more furious about this than you are \u2014 and here's what I'm already doing about it.\u201d",
      "On {subj}: \u201cThis is unacceptable. I've said so louder than anyone. Now let me make it right.\u201d",
      "On {subj}: \u201cYou should be angry. I'm angrier. Let's fix it together.\u201d"
    ],
    learn: "Overplaying an emotion yourself can drain it from the room before it turns on you.",
    develop: "Practice getting ahead of criticism by naming the failure more sharply than your critic would.",
    apply: "Owning mistakes to a boss or client works best when you out-alarm them, then lead the recovery.",
    related: [
      { track: "communication", id: "recover-screwup", why: "Backfire is a front-loaded version of recovering from a mistake." }
    ]
  }));

  /* ================= PATHOS — Ch. 10 (Turn the Volume Down) ============== */
  NEW.push(tool({
    id: "simple-speech", name: "Simple Speech (Strip Language When Emotions Rise)",
    ch: 10, sub: "Volume Control \u2014 Simple Speech", level: 2, builds: ["turn-volume-down", "control-the-mood"],
    breakdown: "When the stakes and the feelings are highest, drop the fancy words. Plain, short language reads as sincere; ornate language at an emotional peak reads as performance and breaks trust.",
    task: "Match rising emotion with plainer, shorter language, not bigger words.",
    method: [
      "Notice when the emotion around {subj} is peaking.",
      "Cut adjectives, jargon, and long sentences.",
      "Say the core thing in the fewest, plainest words."
    ],
    outputs: [
      "On {subj}: \u201cI'm sorry. I was wrong. I'll fix it.\u201d",
      "On {subj}: \u201cThis matters. So do you. Let's start.\u201d",
      "On {subj}: replacing a florid paragraph with three short, honest sentences."
    ],
    learn: "At emotional peaks, simplicity signals sincerity; ornament signals distance.",
    develop: "Take an emotional message and rewrite it using only short words and short sentences.",
    apply: "Apologies, condolences, and high-stakes asks land hardest when the language is simplest.",
    related: [
      { track: "communication", id: "turn-volume-down", why: "Simple speech is a core volume-control technique." }
    ]
  }));

  NEW.push(tool({
    id: "unannounced-emotion", name: "Unannounced Emotion (Don't Telegraph the Mood)",
    ch: 10, sub: "Volume Control \u2014 Unannounced Emotion", level: 3, builds: ["turn-volume-down", "control-the-mood"],
    breakdown: "If you announce the emotion you want the audience to feel, they brace against it. Let the feeling arrive through the content and the moment, not through a label you slap on it in advance.",
    task: "Evoke a feeling without naming it first, so the audience isn't primed to resist.",
    method: [
      "Decide the emotion you want around {subj} \u2014 but keep it to yourself.",
      "Build the scene or evidence that produces that feeling naturally.",
      "Let the audience arrive at the emotion on their own."
    ],
    outputs: [
      "On {subj}: showing the before/after instead of saying 'this is inspiring.'",
      "On {subj}: describing what actually happened instead of announcing 'this is outrageous.'",
      "On {subj}: letting a silence do the work you were tempted to narrate."
    ],
    learn: "Announced emotions trigger resistance; unannounced ones slip past the audience's guard.",
    develop: "Edit out phrases like 'this is exciting/sad/shocking' and let the material carry the load.",
    apply: "Speeches and stories move people more when the feeling is shown, not pre-labeled.",
    related: [
      { track: "communication", id: "set-expectation", why: "Two sides of a coin: sometimes prime the emotion, sometimes hide it." },
      { track: "banter", id: "misdirection-surprise", why: "Both rely on not tipping your hand." }
    ]
  }));


  /* ============= FRAMING — Ch. 11 (Gain the High Ground) ================= */
  NEW.push(tool({
    id: "the-hook", name: "The Hook (Attach Your Argument to Their Desire)",
    ch: 11, sub: "Framing \u2014 The Hook", level: 2, builds: ["high-ground-framing", "ethos-logos-pathos"],
    breakdown: "The Hook attaches your argument to a need or desire your audience already has. Instead of asking them to want what you want, you show that what you're proposing is the route to something they already want \u2014 so agreeing serves their own goal.",
    task: "Connect your proposal to a need or desire the audience already holds, so your point rides on their motivation.",
    method: [
      "Name what the audience of {subj} already wants \u2014 their live need or desire.",
      "Show that your proposal is the path to that thing.",
      "Phrase the ask so saying yes is how they get what they wanted anyway."
    ],
    outputs: [
      "On {subj}: \u201cYou want your evenings back \u2014 this is exactly what buys them.\u201d",
      "On {subj}: \u201cYou've said you want this team to be known for quality. Here's how we earn that name.\u201d",
      "On {subj}: \u201cYou care about getting home on time. So do I. This change is how we both do.\u201d"
    ],
    learn: "People act on their own desires, not yours; the hook borrows the pull of a want they already feel.",
    develop: "Before any ask, write down what the other person most wants and connect your proposal to it in one sentence.",
    apply: "Sales, management, and everyday requests succeed when the ask is hooked to the audience's existing desire.",
    related: [
      { track: "communication", id: "high-ground-framing", why: "The hook frames your proposal in terms of what the audience already values." },
      { track: "communication", id: "identity-strategy", why: "Both tie your ask to something the audience already cares about." }
    ]
  }));

  NEW.push(tool({
    id: "commonplace-spotting", name: "Commonplaces (Find Their Boiled-Down Belief)",
    ch: 11, sub: "Logos \u2014 Commonplace", level: 2, builds: ["high-ground-framing", "ethos-logos-pathos"],
    breakdown: "A commonplace is any belief, value, or cliché the audience already holds \u2014 their public opinion, boiled down. It's the starting point of persuasion: you spot it (in what they repeat or reject) and build your argument on top of it.",
    task: "Detect the audience's shared belief and use it as the foundation of your argument.",
    method: [
      "Listen for what the audience of {subj} repeats (babbling) or rejects \u2014 both reveal a commonplace.",
      "State that belief back to them as common ground.",
      "Build your case as the natural conclusion of their own belief."
    ],
    outputs: [
      "On {subj}: \u201cWe all agree hard work should pay off \u2014 so here's what that means here.\u201d",
      "On {subj}: \u201cYou keep saying 'we take care of our own.' Good \u2014 this is us doing exactly that.\u201d",
      "On {subj}: catching the phrase they resist with, then arguing from the value underneath it."
    ],
    learn: "Every persuasion starts from a belief the audience already holds; find it and you have your foundation.",
    develop: "Practice spotting commonplaces in the words people repeat, and in the reasons they reject a pitch.",
    apply: "Advocacy, marketing, and negotiation all begin by naming the shared value everyone already accepts.",
    related: [
      { track: "communication", id: "canons-of-logic", why: "The commonplace is the base of the enthymeme \u2014 logic's core move." }
    ]
  }));

  /* ============= LOGOS — Ch. 12 (Persuade on Your Terms) ================= */
  NEW.push(tool({
    id: "definition-strategy", name: "Definition Strategy (Control the Words)",
    ch: 12, sub: "Logos \u2014 Definition Strategy", level: 2, builds: ["high-ground-framing", "persuade-your-terms"],
    breakdown: "Whoever controls the language controls the argument. Definition strategy means inserting your own terms, redefining the opponent's, or using their words against them \u2014 so the debate is fought on ground you named.",
    task: "Win by naming the terms \u2014 swap, redefine, or turn the other side's words.",
    method: [
      "Identify the loaded word doing the work in {subj}.",
      "Choose your move: replace it with your term, or accept theirs and shift its meaning.",
      "Make your definition the one everyone ends up using."
    ],
    outputs: [
      "On {subj}: \u201cLet's not call it a 'cut' \u2014 call it a 'reset,' because that's what it is.\u201d",
      "On {subj}: \u201cYou say 'risky.' I say 'the only responsible option.' Same plan, truer word.\u201d",
      "On {subj}: taking their word and redefining it: \u201c'Expensive'? Compared to doing nothing? Then no.\u201d"
    ],
    learn: "Definition is quiet power: the side whose words are used has already half-won the argument.",
    develop: "For any debate, list each side's word for the same thing and pick the frame you want to own.",
    apply: "Policy, branding, and negotiation are won by whoever's terms become the default vocabulary.",
    related: [
      { track: "communication", id: "persuade-your-terms", why: "Definition strategy is how you persuade on your own terms." },
      { track: "communication", id: "high-ground-framing", why: "Controlling words is controlling the frame." }
    ]
  }));

  NEW.push(tool({
    id: "concession-jujitsu", name: "Concession Jujitsu (Use Their Argument For You)",
    ch: 12, sub: "Logos \u2014 Concession", level: 3, builds: ["definition-strategy", "canons-of-logic"],
    breakdown: "Concession takes your opponent's own point and turns it to your advantage. Instead of resisting their argument, you accept it \u2014 then show that it actually leads to your conclusion.",
    task: "Agree with the opponent's premise, then redirect it to support your position.",
    method: [
      "Grant the point the other side makes about {subj} \u2014 genuinely.",
      "Show that, taken seriously, it leads where you want.",
      "Let their own logic carry your conclusion."
    ],
    outputs: [
      "On {subj}: \u201cYou're right that we're stretched thin \u2014 which is the exact reason we need this.\u201d",
      "On {subj}: \u201cAgreed, budgets are tight. So let's stop spending on the thing that isn't working.\u201d",
      "On {subj}: \u201cGood point \u2014 and it's why my proposal, not yours, actually solves it.\u201d"
    ],
    learn: "Turning an opponent's argument to your side is more disarming than contradicting it.",
    develop: "Practice the 'you're right, and that's exactly why...' move on objections you usually resist.",
    apply: "Debate, sales objections, and disagreements soften when you concede first, then redirect.",
    related: [
      { track: "banter", id: "agree-and-amplify", why: "Both start by agreeing, then bend the momentum your way." }
    ]
  }));

  /* ============= LOGOS — Ch. 13 (Control the Argument) ================== */
  NEW.push(tool({
    id: "enthymeme", name: "The Enthymeme (The Logic Sandwich)",
    ch: 13, sub: "Logos \u2014 Enthymeme", level: 2, builds: ["commonplace-spotting", "canons-of-logic"],
    breakdown: "The enthymeme is Aristotle's everyday syllogism: 'We should [choice], because [commonplace].' It bases a conclusion on a belief the audience already holds, so the audience supplies the missing piece themselves \u2014 and feels they reasoned their way there.",
    task: "Build a persuasive because-statement on top of a belief the audience already accepts.",
    method: [
      "State the choice you want on {subj}.",
      "Attach 'because' + a commonplace the audience already believes.",
      "Let them fill the logical gap, so the conclusion feels like their own."
    ],
    outputs: [
      "On {subj}: \u201cWe should do this, because we owe it to the people who got us here.\u201d",
      "On {subj}: \u201cLet's fix it now, because problems only get more expensive with time.\u201d",
      "On {subj}: \u201cChoose the harder road, because that's the kind of team we said we are.\u201d"
    ],
    learn: "The enthymeme persuades by making the audience complete the logic from a value they already hold.",
    develop: "Draft 'We should X, because [belief they hold]' for any position you want to advance.",
    apply: "Every crisp argument \u2014 in a memo, a meeting, or a speech \u2014 is at heart an enthymeme.",
    related: [
      { track: "communication", id: "commonplace-spotting", why: "The enthymeme's 'because' is a commonplace." },
      { track: "communication", id: "canons-of-logic", why: "The enthymeme is the engine of rhetorical logic." }
    ]
  }));

  NEW.push(tool({
    id: "induction-examples", name: "Induction (Argue by Example)",
    ch: 13, sub: "Logos \u2014 Induction", level: 2, builds: ["canons-of-logic"],
    breakdown: "Induction moves from the specific to the general. You stack examples \u2014 fact, comparison, and story \u2014 until the audience draws the broad conclusion you want.",
    task: "Prove a general point by choosing the right specific examples: a fact, a comparison, and a story.",
    method: [
      "Pick a hard fact about {subj} that's hard to dispute.",
      "Add a comparison that makes the fact meaningful.",
      "Close with a story that makes it felt \u2014 then let the pattern imply the conclusion."
    ],
    outputs: [
      "On {subj}: \u201cThe numbers doubled (fact); that's faster than any rival (comparison); and here's one customer who saw it (story).\u201d",
      "On {subj}: three quick cases that all point the same direction, so the conclusion feels inevitable.",
      "On {subj}: \u201cIt happened here, it happened there, and it happened to us \u2014 see the pattern?\u201d"
    ],
    learn: "Examples persuade more than assertions; fact, comparison, and story cover head and heart.",
    develop: "For any claim, assemble one fact, one comparison, and one story before you argue it.",
    apply: "Reports, cases, and pitches convince when a well-chosen set of examples does the arguing.",
    related: [
      { track: "communication", id: "storytelling-belief", why: "Story is one of the three inductive examples \u2014 the one that makes it felt." }
    ]
  }));


  /* ============= FALLACIES — Ch. 15 (Spot Fallacies) ==================== */
  NEW.push(tool({
    id: "red-herring", name: "Red Herring & Straw Man (Spot the Distraction)",
    ch: 15, sub: "Fallacies \u2014 Red Herring / Straw Man", level: 3, builds: ["spot-fallacies", "canons-of-logic"],
    breakdown: "Two of the most common dodges. A red herring drags in an irrelevant issue to distract; a straw man swaps your argument for a weaker one that's easier to knock down. Naming the move out loud is how you neutralize it.",
    task: "Catch a distraction or misrepresentation and drag the argument back to the real issue.",
    method: [
      "Notice when the topic of {subj} suddenly shifts to something irrelevant, or your point is restated as something weaker.",
      "Name the move plainly without taking the bait.",
      "Restate the actual issue and return to it."
    ],
    outputs: [
      "On {subj}: \u201cThat's a separate issue \u2014 let's not lose the one on the table.\u201d",
      "On {subj}: \u201cThat's not what I argued. Here's what I actually said.\u201d",
      "On {subj}: \u201cInteresting, but off-topic. Back to the real question.\u201d"
    ],
    learn: "Most bad-faith arguments win by changing the subject or your position; naming it defuses it.",
    develop: "Practice the two-second catch: 'Is this relevant? Is this what they actually said?'",
    apply: "Debates, comment threads, and tense meetings stay honest when you refuse to chase the herring.",
    related: [
      { track: "communication", id: "spot-fallacies", why: "These are the two fallacies you'll meet most often." },
      { track: "communication", id: "call-a-foul", why: "A deliberate red herring shades into a foul you may need to call." }
    ]
  }));

  NEW.push(tool({
    id: "false-dilemma", name: "False Dilemma & Slippery Slope (Refuse the Trap)",
    ch: 15, sub: "Fallacies \u2014 False Dilemma / Slippery Slope", level: 3, builds: ["red-herring", "spot-fallacies"],
    breakdown: "A false dilemma offers two choices when more exist; a slippery slope predicts a chain of disasters from one step. Both shrink your options dishonestly \u2014 the counter is to expand the field or break the chain.",
    task: "Reject a rigged 'either/or' or a doom chain by naming the missing options.",
    method: [
      "Spot the trap in {subj}: only two choices offered, or one step framed as certain catastrophe.",
      "Name the third (or fourth) option that was left out, or the weak link in the chain.",
      "Reopen the real range of choices."
    ],
    outputs: [
      "On {subj}: \u201cThose aren't the only two options \u2014 here's a third.\u201d",
      "On {subj}: \u201cOne step doesn't force all the rest; where exactly does that chain break?\u201d",
      "On {subj}: \u201cIt's not 'all or nothing.' Let's talk about the middle.\u201d"
    ],
    learn: "Fallacies of choice work by hiding options; persuasion-proofing means putting them back.",
    develop: "When handed two choices, habitually ask 'what's the option they didn't mention?'",
    apply: "Ultimatums, scare tactics, and hard sells lose power once you name the missing middle.",
    related: [
      { track: "communication", id: "find-sweet-spot", why: "Both restore the middle ground a false choice tries to erase." }
    ]
  }));

  /* ============= FOULS — Ch. 16 (Call a Foul) ========================== */
  NEW.push(tool({
    id: "call-fouls", name: "Name the Fouls (Humiliation, Innuendo, Threat)",
    ch: 16, sub: "Fouls \u2014 Humiliation / Innuendo / Threatening", level: 3, builds: ["call-a-foul", "spot-fallacies"],
    breakdown: "Some moves aren't arguments at all \u2014 they end argument. Humiliation only debases; innuendo plants an idea by denying it; threatening (argument by the stick) removes the audience's choice. Calling the foul stops the game from being hijacked.",
    task: "Identify an argument-ending foul and call it, restoring a real exchange.",
    method: [
      "Detect the foul in {subj}: is this meant to shame, smear, or coerce rather than decide?",
      "Name it calmly for what it is.",
      "Insist on returning to an actual choice."
    ],
    outputs: [
      "On {subj}: \u201cThat was meant to embarrass, not to decide anything. Let's get back to the choice.\u201d",
      "On {subj}: \u201cYou're implying something you won't say outright. Say it plainly or drop it.\u201d",
      "On {subj}: \u201cA threat isn't an argument. What are the actual options?\u201d"
    ],
    learn: "Fouls short-circuit persuasion; the remedy is to name them and reopen a genuine choice.",
    develop: "Rehearse a calm, non-escalating line for each foul so you're not caught flat-footed.",
    apply: "Toxic meetings, online pile-ons, and manipulation get defanged when the foul is named.",
    related: [
      { track: "communication", id: "deal-with-bully", why: "Calling a foul is the first step in handling a bully." }
    ]
  }));

  /* ============= DETECTORS — Ch. 17 (Know Whom to Trust) =============== */
  NEW.push(tool({
    id: "persuasion-detectors-kit", name: "The Detector Kit (Needs Test, Dodged Question, Extremes)",
    ch: 17, sub: "Detectors \u2014 Needs Test / Dodged Question / Extremist", level: 3, builds: ["persuasion-detectors", "spot-fallacies"],
    breakdown: "Three quick tests for credibility. The Needs Test: do their needs match yours? The Dodged Question: ask who benefits \u2014 no straight answer, no trust. The Extremist Detector: someone who paints a moderate choice as extreme is the real extremist.",
    task: "Run the three trust tests on a persuader before you buy what they're selling.",
    method: [
      "Needs Test: on {subj}, ask whether their interests line up with yours.",
      "Dodged Question: ask who benefits; watch whether you get a straight answer.",
      "Extremist Detector: notice if they cast a reasonable middle option as radical."
    ],
    outputs: [
      "On {subj}: \u201cWhat do you get out of this? \u2014 and does that line up with what I need?\u201d",
      "On {subj}: \u201cI asked who benefits and got a speech, not an answer. Noted.\u201d",
      "On {subj}: \u201cYou're calling a pretty moderate idea 'extreme' \u2014 that tells me where you actually stand.\u201d"
    ],
    learn: "Credibility is testable; a few fast questions reveal whether a persuader is disinterested.",
    develop: "Make the three tests a reflex whenever someone's pushing a choice at you.",
    apply: "Sales, punditry, and advice get filtered fast when you run needs, benefit, and extreme checks.",
    related: [
      { track: "communication", id: "persuasion-detectors", why: "This is the concrete toolkit behind knowing whom to trust." }
    ]
  }));

  /* ============= FIGURES — Ch. 20 (Instant Cleverness) ================= */
  NEW.push(tool({
    id: "cliche-twisting", name: "Cliché Twisting (Instant Wit from Worn Phrases)",
    ch: 20, sub: "Figures \u2014 Cliché Twisting", level: 3, builds: ["instant-cleverness"],
    breakdown: "Turn overworked language to your advantage. Take a phrase everyone knows and give it a surprise ending, swap its words, or read it literally \u2014 instant cleverness that sounds effortless.",
    task: "Take a familiar phrase or cliché about the topic and twist it for a clever line.",
    method: [
      "Grab a cliché that touches {subj}.",
      "Twist it: surprise ending, swapped words, or a too-literal reading.",
      "Deliver it deadpan so the twist does the work."
    ],
    outputs: [
      "On {subj}: starting a familiar saying, then ending it somewhere unexpected.",
      "On {subj}: swapping two words in a proverb so it suddenly fits the moment.",
      "On {subj}: taking a figure of speech about it literally for a laugh."
    ],
    learn: "Familiar phrases are raw material; a small twist reads as quick, original wit.",
    develop: "Collect clichés tied to your common topics and pre-draft one twist for each.",
    apply: "Toasts, tweets, and meetings sparkle with a well-placed twist on something everyone knows.",
    related: [
      { track: "banter", id: "comic-triple", why: "Both manufacture wit from a familiar setup and a swerve." },
      { track: "banter", id: "misdirection-surprise", why: "A twisted cliché is a miniature misdirection." }
    ]
  }));

  NEW.push(tool({
    id: "chiasmus", name: "Chiasmus (The Criss-Cross Sentence)",
    ch: 20, sub: "Figures \u2014 Chiasmus", level: 3, builds: ["cliche-twisting", "instant-cleverness"],
    breakdown: "Chiasmus reverses the order of words in the second half of a phrase to create a memorable crisscross \u2014 'ask not what your country can do for you...' It sounds profound and sticks in the memory.",
    task: "Craft a criss-cross line that flips its own words to sound quotable.",
    method: [
      "Take the key pair of ideas in {subj}.",
      "State them one way, then reverse the order in the second half.",
      "Trim it tight so the flip snaps."
    ],
    outputs: [
      "On {subj}: \u201cWe don't do this because it's easy \u2014 it's easy because we do this.\u201d",
      "On {subj}: \u201cPlan the work, then work the plan.\u201d",
      "On {subj}: \u201cIt's not the years, it's the mileage \u2014 and not the mileage, the road.\u201d"
    ],
    learn: "The crisscross structure makes a line feel wise and lodges it in memory.",
    develop: "Practice flipping the two nouns or verbs in a sentence to find the quotable version.",
    apply: "Slogans, closings, and titles gain staying power from a clean chiasmus.",
    related: [
      { track: "communication", id: "right-tools", why: "Chiasmus is one of the highest-impact figures of speech." }
    ]
  }));

  /* ============= KAIROS — Ch. 23 (Seize the Occasion) ================== */
  NEW.push(tool({
    id: "moment-spotter", name: "The Moment Spotter (Find the Persuadable Instant)",
    ch: 23, sub: "Kairos \u2014 Persuadable Moment", level: 3, builds: ["seize-occasion", "control-the-mood"],
    breakdown: "Kairos is the art of the right moment. Uncertain moods and shifting beliefs \u2014 when minds are already starting to move \u2014 signal a persuadable moment. Spot it, and pounce; miss it, and even a great argument bounces off.",
    task: "Read the timing and strike your argument when the audience is ripest.",
    method: [
      "Watch {subj} for signs of an unsettled mood or a belief in flux.",
      "Treat that wobble as your opening \u2014 the persuadable moment.",
      "Make your move then, not before and not after."
    ],
    outputs: [
      "On {subj}: \u201cThings are up in the air right now \u2014 which is exactly why this is the moment to decide.\u201d",
      "On {subj}: holding your pitch until the room's mood tips, then moving fast.",
      "On {subj}: \u201cYou're already rethinking this. Let's take the next step while it's live.\u201d"
    ],
    learn: "Timing can matter more than content; the same argument wins or loses on the moment you choose.",
    develop: "Practice noticing wobble \u2014 hesitation, second thoughts \u2014 as the green light to persuade.",
    apply: "Sales, proposals, and tough talks land when timed to a moment of genuine uncertainty.",
    related: [
      { track: "communication", id: "seize-occasion", why: "The moment spotter is the practical core of kairos." },
      { track: "communication", id: "right-medium", why: "Right moment and right medium are the two halves of kairos." }
    ]
  }));

  /* ============= SPEECHMAKING — Ch. 25 (Give a Persuasive Talk) ======== */
  NEW.push(tool({
    id: "five-canons", name: "The Five Canons (Build a Speech Like Cicero)",
    ch: 25, sub: "Speechmaking \u2014 Invention, Arrangement, Style, Memory, Delivery", level: 3, builds: ["persuasive-talk", "enthymeme"],
    breakdown: "Classical rhetoric builds a speech in five stages: Invention (find your arguments), Arrangement (order them), Style (choose the words), Memory (speak without notes), and Delivery (voice and gesture). Working through them in order turns a blank page into a persuasive talk.",
    task: "Draft a talk by moving through the five canons in order.",
    method: [
      "Invention: brainstorm the arguments and examples for {subj}.",
      "Arrangement: order them \u2014 intro, narration, proof, refutation, conclusion.",
      "Style, then Memory and Delivery: choose vivid words, learn the shape, plan voice and eyes."
    ],
    outputs: [
      "On {subj}: an outline that moves intro \u2192 story \u2192 proof \u2192 answering objections \u2192 call to act.",
      "On {subj}: picking three vivid phrases to carry the whole talk (style).",
      "On {subj}: rehearsing the opening and closing until you can deliver them notes-free."
    ],
    learn: "The five canons break the terrifying task of a speech into five solvable steps.",
    develop: "Next talk, literally label your prep by canon so nothing is skipped.",
    apply: "Presentations, toasts, and pitches get dramatically stronger built canon by canon.",
    related: [
      { track: "communication", id: "persuasive-talk", why: "The five canons are the machinery behind a persuasive talk." },
      { track: "communication", id: "capture-audience", why: "Delivery \u2014 the fifth canon \u2014 is how you capture the room." }
    ]
  }));

  /* ============= DELIVERY — Ch. 26 (Capture Your Audience) ============= */
  NEW.push(tool({
    id: "delivery-eyes-voice", name: "Delivery (Lead with the Eyes and Voice)",
    ch: 26, sub: "Delivery \u2014 Voice & Gesture", level: 3, builds: ["five-canons", "capture-audience"],
    breakdown: "Delivery is the action of the speech. Voice should fill the room; the eyes matter most, even at a distance, because they lead the rest of the face \u2014 and hand gestures should be few in a formal setting.",
    task: "Capture the room through eye contact and a room-filling voice, not busy hands.",
    method: [
      "On {subj}, project your voice to reach the back of the room.",
      "Lead with your eyes \u2014 hold gaze; let the face follow.",
      "Keep hand gestures few and deliberate."
    ],
    outputs: [
      "On {subj}: landing the key line while holding one person's eyes, then moving to the next.",
      "On {subj}: dropping to a slower, fuller voice on the sentence that matters most.",
      "On {subj}: cutting fidgety gestures so stillness makes you look composed."
    ],
    learn: "Audiences read the eyes first; steady gaze and full voice project the confidence that persuades.",
    develop: "Rehearse holding eye contact for a full thought, and record yourself to cut nervous gestures.",
    apply: "Talks, interviews, and toasts command attention through delivery as much as content.",
    related: [
      { track: "banter", id: "flow-like-a-river", why: "Presence and eye contact carry a conversation as much as a speech." }
    ]
  }));


  /* ---------------------------------------------------------------------------
   * Register the new skills (skip any id that somehow already exists).
   * ------------------------------------------------------------------------- */
  var existingIds = {};
  C.communication.concepts.forEach(function (c) { existingIds[c.id] = true; });
  NEW.forEach(function (c) {
    if (!existingIds[c.id]) { C.communication.concepts.push(c); existingIds[c.id] = true; }
  });

  /* ---------------------------------------------------------------------------
   * Difficulty LEVEL (1 foundational, 2 intermediate, 3 advanced) and BUILDS
   * (prerequisite skills) for the ORIGINAL chapter skills, so the master plan
   * can order everything simple -> complex and show each skill building on the
   * last. (New skills already carry level + builds.)
   * ------------------------------------------------------------------------- */
  var META = {
    "invisible-argument":   { level: 1, builds: [] },
    "set-your-goals":       { level: 1, builds: ["invisible-argument"] },
    "control-the-tense":    { level: 1, builds: ["set-your-goals"] },
    "ethos-logos-pathos":   { level: 1, builds: ["set-your-goals"] },
    "decorum":              { level: 2, builds: ["ethos-logos-pathos"] },
    "make-them-listen":     { level: 2, builds: ["decorum"] },
    "use-your-craft":       { level: 2, builds: ["ethos-logos-pathos"] },
    "show-you-care":        { level: 2, builds: ["ethos-logos-pathos"] },
    "control-the-mood":     { level: 2, builds: ["ethos-logos-pathos"] },
    "turn-volume-down":     { level: 2, builds: ["control-the-mood"] },
    "high-ground-framing":  { level: 2, builds: ["ethos-logos-pathos", "control-the-tense"] },
    "persuade-your-terms":  { level: 2, builds: ["high-ground-framing"] },
    "canons-of-logic":      { level: 2, builds: ["ethos-logos-pathos"] },
    "make-connection":      { level: 2, builds: ["decorum"] },
    "spot-fallacies":       { level: 3, builds: ["canons-of-logic"] },
    "call-a-foul":          { level: 3, builds: ["spot-fallacies"] },
    "persuasion-detectors": { level: 3, builds: ["spot-fallacies"] },
    "find-sweet-spot":      { level: 3, builds: ["persuasion-detectors"] },
    "deal-with-bully":      { level: 3, builds: ["call-a-foul"] },
    "instant-cleverness":   { level: 3, builds: ["use-your-craft"] },
    "change-reality":       { level: 3, builds: ["high-ground-framing"] },
    "recover-screwup":      { level: 2, builds: ["show-you-care"] },
    "seize-occasion":       { level: 3, builds: ["control-the-mood"] },
    "right-medium":         { level: 2, builds: ["seize-occasion"] },
    "persuasive-talk":      { level: 3, builds: ["canons-of-logic"] },
    "capture-audience":     { level: 3, builds: ["persuasive-talk"] },
    "persuasive-essay":     { level: 3, builds: ["canons-of-logic"] },
    "right-tools":          { level: 3, builds: ["instant-cleverness"] },
    "agreeable-country":    { level: 3, builds: ["high-ground-framing"] }
  };
  C.communication.concepts.forEach(function (c) {
    var m = META[c.id];
    if (m) {
      if (c.level == null) c.level = m.level;
      if (!c.builds || !c.builds.length) c.builds = m.builds.slice();
    }
    if (c.level == null) c.level = 2;
    if (!c.builds) c.builds = [];
  });

  /* ---------------------------------------------------------------------------
   * Rebuild the chapter -> skills map so every chapter lists ALL of its skills.
   * Runs last, overwriting the earlier one-skill-per-chapter mapping.
   * ------------------------------------------------------------------------- */
  var CH = [
    { n: 1,  title: "Open Your Eyes",          blurb: "See the arguments happening everywhere \u2014 and the difference between fighting and arguing.", skills: ["invisible-argument"] },
    { n: 2,  title: "Set Your Goals",          blurb: "Choose one clear outcome \u2014 change of mind, mood, or willingness to act.", skills: ["set-your-goals"] },
    { n: 3,  title: "Control the Tense",       blurb: "Steer between blame (past), values (present), and choices (future).", skills: ["control-the-tense"] },
    { n: 4,  title: "Soften Them Up",          blurb: "The three appeals \u2014 character, logic, and emotion \u2014 that move an audience.", skills: ["ethos-logos-pathos"] },
    { n: 5,  title: "Get Them to Like You",    blurb: "Decorum: fit the audience's expectations, speak their code, tie the choice to who they are.", skills: ["decorum", "code-grooming", "identity-strategy"] },
    { n: 6,  title: "Make Them Listen",        blurb: "Earn attention and build virtue \u2014 through others' praise, a candid flaw, and good timing.", skills: ["make-them-listen", "witness-bragging", "tactical-flaw", "eddie-haskell-ploy"] },
    { n: 7,  title: "Use Your Craft",          blurb: "Persuasion as learnable craft: sequence likability, emotion, then logic.", skills: ["use-your-craft"] },
    { n: 8,  title: "Show You Care",           blurb: "Disinterest: reluctant conclusions, personal sacrifice, and useful doubt build trustworthy ethos.", skills: ["show-you-care", "reluctant-conclusion", "personal-sacrifice", "dubitatio"] },
    { n: 9,  title: "Control the Mood",         blurb: "Set the emotional weather: sympathy, story, expectation, the love offense, and backfire.", skills: ["control-the-mood", "sympathy-first", "storytelling-belief", "set-expectation", "the-love-offense", "backfire-control"] },
    { n: 10, title: "Turn the Volume Down",    blurb: "De-escalate heat: plainer language, unannounced emotion, and small concessions.", skills: ["turn-volume-down", "simple-speech", "unannounced-emotion"] },
    { n: 11, title: "Gain the High Ground",    blurb: "Define the terms and hook your argument to what the audience already wants and believes.", skills: ["high-ground-framing", "the-hook", "commonplace-spotting"] },
    { n: 12, title: "Persuade on Your Terms",  blurb: "Control the words \u2014 swap, redefine, and turn the opponent's own language and arguments.", skills: ["persuade-your-terms", "definition-strategy", "concession-jujitsu"] },
    { n: 13, title: "Control the Argument",    blurb: "Build claims with the enthymeme and induction, and check the conclusion actually follows.", skills: ["canons-of-logic", "enthymeme", "induction-examples"] },
    { n: 14, title: "Make a Connection",       blurb: "Read the room and adjust your energy to match before you push.", skills: ["make-connection"] },
    { n: 15, title: "Spot Fallacies",          blurb: "Name the classic logical faults \u2014 red herring, straw man, false dilemma, slippery slope.", skills: ["spot-fallacies", "red-herring", "false-dilemma"] },
    { n: 16, title: "Call a Foul",             blurb: "Name an opponent's unfair tactic \u2014 humiliation, innuendo, threat \u2014 to strip it of power.", skills: ["call-a-foul", "call-fouls"] },
    { n: 17, title: "Know Whom to Trust",      blurb: "Judge a source with the detector kit: needs test, dodged question, extremist detector.", skills: ["persuasion-detectors", "persuasion-detectors-kit"] },
    { n: 18, title: "Find the Sweet Spot",     blurb: "Position your point as the reasonable middle between two extremes.", skills: ["find-sweet-spot"] },
    { n: 19, title: "Deal with a Bully",       blurb: "Neutralize aggression with calm composure and pointed questions.", skills: ["deal-with-bully"] },
    { n: 20, title: "Get Instant Cleverness",  blurb: "Reusable wit patterns \u2014 twist a cliché, build a chiasmus \u2014 for quick replies.", skills: ["instant-cleverness", "cliche-twisting", "chiasmus"] },
    { n: 21, title: "Change Reality",          blurb: "Use language to declare norms and futures that shape behavior.", skills: ["change-reality"] },
    { n: 22, title: "Recover from a Screw-Up", blurb: "Turn a mistake into trust: own it, reframe it, pivot to the fix.", skills: ["recover-screwup"] },
    { n: 23, title: "Seize the Occasion",      blurb: "Kairos \u2014 spot the persuadable moment and time your argument to it.", skills: ["seize-occasion", "moment-spotter"] },
    { n: 24, title: "Use the Right Medium",    blurb: "Match the message to the channel's bandwidth and permanence.", skills: ["right-medium"] },
    { n: 25, title: "Give a Persuasive Talk",  blurb: "Structure a speech through the five canons: invention, arrangement, style, memory, delivery.", skills: ["persuasive-talk", "five-canons"] },
    { n: 26, title: "Capture Your Audience",   blurb: "Hold the room with delivery \u2014 pacing, pauses, eye contact, and vocal variety.", skills: ["capture-audience", "delivery-eyes-voice"] },
    { n: 27, title: "Write a Persuasive Essay",blurb: "On the page, structure and word choice carry the whole argument.", skills: ["persuasive-essay"] },
    { n: 28, title: "Use the Right Tools",     blurb: "Rhetorical figures \u2014 repetition, contrast \u2014 that make lines stick.", skills: ["right-tools"] },
    { n: 29, title: "Run an Agreeable Country",blurb: "Scale rhetoric to community: argue toward shared decisions, not conquest.", skills: ["agreeable-country"] }
  ];
  CH.forEach(function (ch) { ch.page = "Ch. " + ch.n; });
  C.communication.chapters = CH;

})(window);
