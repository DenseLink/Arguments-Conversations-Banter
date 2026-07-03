/* =============================================================================
 * content.js  —  Consolidated concept knowledge base for the three tracks.
 *
 * Sources ingested from local materials in /Uploads:
 *   Track 1 (comedy)        : John Vorhaus — "The Comic Toolbox: How to Be
 *                             Funny Even If You're Not" (Silman-James, 1994)
 *   Track 2 (communication) : Jay Heinrichs — "Thank You for Arguing"
 *                             (Broadway Books, Revised & Updated ed.)
 *   Track 3 (banter)        : Patrick King — "The Art of Witty Banter: Be
 *                             Clever, Quick, & Magnetic" (2nd Edition)
 *
 * Every concept carries a rich, teach-yourself payload:
 *   source     -> full citation string
 *   page       -> short page/section label (shown on daily & plan cards)
 *   breakdown  -> concept & usage breakdown (what / why / how)
 *   examples[] -> application examples
 *   drills[]   -> practical preparation drills
 *   models[]   -> mental models & reframing
 *   deepDive[] -> "Learn, Develop & Apply" teaching paragraphs (self-study)
 *   method[]   -> ordered execution protocol (also powers example breakdowns)
 *   task       -> imperative used to generate practice scenarios
 *   outputs[]  -> concrete model-output templates ({subj} = context subject)
 *   related[]  -> cross-links to complementary skills in other tracks
 *
 * All prose is original paraphrasing of the source ideas (no verbatim text).
 * Exposed as window.CM_CONTENT (classic script; runs from file://).
 * ========================================================================== */
(function (global) {
  "use strict";

  var CONTENT = {
    comedy: {
      id: "comedy",
      title: "Comedic Engineering & Structural Humor",
      short: "Comedy",
      book: "The Comic Toolbox",
      author: "John Vorhaus",
      tagline: "Truth and pain, engineered into laughter.",
      accent: "#e4572e",
      concepts: [
        {
          id: "truth-and-pain",
          name: "Comedy Is Truth and Pain",
          source: "The Comic Toolbox, Ch. 1 \u2014 \u201cComedy Is Truth and Pain\u201d (pp. 1\u201312).",
          page: "The Comic Toolbox, Ch. 1, pp. 1\u201312",
          breakdown:
            "Vorhaus's founding axiom: every reliable laugh sits on top of a truth we all recognize and a pain we all fear. The truth makes a joke relatable ('that could be me'); the pain \u2014 embarrassment, loss, death, sex, failure \u2014 gives it stakes. Psychologically, laughter is a release valve: we discharge the tension of a threatening truth in a safe, shared burst.",
          task: "Find the honest human truth and the pain inside the moment, then turn it into one self-aware line the whole room can laugh WITH.",
          method: [
            "Name the honest human truth inside the situation ({subj}).",
            "Locate the pain attached to that truth \u2014 the fear, loss, or embarrassment.",
            "Exaggerate or reframe the pain until it's recognizable but not wounding.",
            "Aim it at the shared condition (or yourself), never at a defenseless target."
          ],
          outputs: [
            "\u201cHonestly, {subj} is just my ego and my anxiety fighting over the aux cord.\u201d",
            "\u201cAh yes, {subj} \u2014 where I get to disappoint people in real time instead of over email.\u201d",
            "\u201cNothing humbles you like {subj}; it's basically a live demo of my worst instincts.\u201d",
            "\u201cI love {subj}. It's the closest I get to being publicly reviewed by strangers.\u201d"
          ],
          examples: [
            "A clown takes a pie in the face: truth = we are all vulnerable to sudden humiliation; pain = 'there but for the grace of pie go I.'",
            "\u201cI told my therapist about my fear of abandonment. She left.\u201d \u2014 a real fear, and the pain of it coming true.",
            "Traveling-salesman jokes: truth = he wants something badly; pain = he's never going to get it."
          ],
          drills: [
            "Write down the most embarrassing thing that happened this week. Underline the universal truth, then the pain. That pair is your raw material.",
            "Take three ordinary complaints ('commute', 'inbox', 'landlord') and write the painful truth beneath each in one sentence.",
            "Run the 'that could be me' test on a joke: if the room doesn't share the truth, it won't land."
          ],
          models: [
            "Reframe pain as generosity: exposing a shared fear first gives the room permission to laugh at their own.",
            "Nothing human is off-limits \u2014 only cruelty is. Aim at the shared condition.",
            "You are the safest target in the room; self-aimed truth-and-pain lowers everyone's guard."
          ],
          deepDive: [
            "Learn: Comedy isn't randomness \u2014 it's recognition. Train yourself to hear the truth-and-pain pair beneath ordinary talk. Keep a 'pain journal': jot small daily frustrations and, beside each, the universal truth it reveals. Over weeks you'll stop hunting for jokes and start seeing the raw material everywhere.",
            "Develop: Practice the escalation dial. Take one true pain and write it three ways \u2014 understated, honest, and wildly exaggerated \u2014 then notice which version your listeners react to. Most beginners under-commit; the laugh usually lives one notch past comfortable.",
            "Apply: In real conversation, lead with a small self-aimed truth-and-pain before teasing anyone else. It signals warmth, earns the right to joke, and makes your later material land because the room already trusts you."
          ],
          related: [
            { track: "comedy", id: "flaws-humanity", why: "Truth-and-pain is the raw material; a flawed-but-human character is how you dramatize it." },
            { track: "banter", id: "agree-and-amplify", why: "Self-aimed pain pairs perfectly with agreeing-and-amplifying a tease about yourself." },
            { track: "communication", id: "control-the-mood", why: "Naming a shared pain is a fast, honest way to set the emotional mood of a room." }
          ]
        },
        {
          id: "comic-premise",
          name: "The Comic Premise",
          source: "The Comic Toolbox, Ch. on \u201cThe Comic Premise\u201d (pp. ~30\u201348).",
          page: "The Comic Toolbox, \u201cThe Comic Premise\u201d, pp. ~30\u201348",
          breakdown:
            "A comic premise is the single 'what if' distortion of reality a whole piece grows from \u2014 the one lie the audience agrees to believe. It's the engine, not a gag. A strong premise generates jokes automatically because every scene simply asks 'given this distortion, what happens next?'",
          task: "State a one-sentence comic premise ('what if...') and name one complication it automatically creates.",
          method: [
            "Take an ordinary element of the situation ({subj}) and pick ONE rule of reality to bend.",
            "State the distortion in a single 'What if...' sentence.",
            "Ask 'given this, what happens next?' and mine the collisions with the normal world.",
            "Honor the premise's logic ruthlessly \u2014 consistency is what makes absurdity funny."
          ],
          outputs: [
            "\u201cWhat if everyone at {subj} could hear each other's inner monologue for one hour?\u201d \u2192 first complication: nobody can lie about the snacks.",
            "\u201cWhat if {subj} ran on a strict medieval honor code?\u201d \u2192 first complication: someone challenges the manager to a duel over parking.",
            "\u201cWhat if attendance at {subj} was mandatory by law and enforced by a very tired bailiff?\u201d \u2192 first complication: fake IDs to get OUT."
          ],
          examples: [
            "The Sopranos: 'What if a violent mob boss suffered panic attacks and saw a therapist?' Every episode farms that collision.",
            "Liar Liar: 'What if a lawyer physically could not tell a lie for 24 hours?'",
            "Groundhog Day: 'What if a cynical man relived the same day until he became a better person?'"
          ],
          drills: [
            "Write ten 'What if...' sentences in five minutes. Volume first, quality later.",
            "Take a normal profession and add one impossible constraint (a surgeon who faints at blood).",
            "For your best premise, list five automatic complications. If it generates jokes on its own, it's strong."
          ],
          models: [
            "A premise is a promise \u2014 once set, honor its logic.",
            "Engine, not decoration: if a joke doesn't spring from the premise, it's a stray gag.",
            "Big lie, small world: the more outrageous the premise, the more grounded the reactions must be."
          ],
          deepDive: [
            "Learn: Premises are found by asking 'what's the rule here, and what if it broke?' Every setting has invisible rules (of behavior, physics, status). Cataloguing those rules is the real skill; the distortion is easy once you see the rule.",
            "Develop: Keep a 'what if' file on your phone. One entry a day. Revisit weekly and pick the premise that still generates fresh complications after a week \u2014 that longevity test separates a durable premise from a one-line gag.",
            "Apply: In storytelling and pitching (not just comedy), a crisp premise makes anything memorable. Frame a work update or anecdote around a single distortion ('imagine if our inbox had feelings') and people remember it."
          ],
          related: [
            { track: "comedy", id: "comic-throughline", why: "A premise sets the world; the throughline is the want that drives a scene through it." },
            { track: "comedy", id: "clash-of-context", why: "Premises usually work by colliding a distorted world with a normal one." },
            { track: "communication", id: "high-ground-framing", why: "Framing is the persuasive cousin of the premise \u2014 both define the terms everyone then argues inside." }
          ]
        },
        {
          id: "flaws-humanity",
          name: "Character: Flaws vs. Humanity",
          source: "The Comic Toolbox, Ch. on Comic Characters (pp. ~60\u201380).",
          page: "The Comic Toolbox, \u201cComic Character\u201d, pp. ~60\u201380",
          breakdown:
            "A comic character needs a big, exploitable flaw (vanity, greed, cowardice, cheapness) to generate jokes \u2014 but must carry enough humanity that we root for them instead of despising them. Flaw drives the comedy; humanity keeps the audience attached.",
          task: "Sketch a comic character: exaggerate ONE flaw, then add ONE humanizing line so we still root for them.",
          method: [
            "Choose one exploitable flaw and connect it to the situation ({subj}).",
            "Dial the flaw up to an exaggerated, joke-generating extreme.",
            "Add one moment of genuine vulnerability or care that redeems them.",
            "Check the balance: too much flaw = monster, too much humanity = nothing's funny."
          ],
          outputs: [
            "At {subj}: a man so vain he practices 'candid' laughs in the bathroom mirror \u2014 then quietly gives his coat to a stranger who's cold.",
            "At {subj}: someone so cheap they bring their own tea bag \u2014 but they always remember your kid's birthday.",
            "At {subj}: a know-it-all who corrects everyone's grammar \u2014 and cries at every commercial with a dog in it."
          ],
          examples: [
            "Michael Scott: flaw = desperate need to be loved; humanity = he genuinely cares about his people.",
            "Basil Fawlty: flaw = snobbish rage; humanity = his hopeless, doomed striving keeps him pitiable.",
            "Scrooge: flaw = cartoonish miserliness; humanity = the wounded child revealed just enough."
          ],
          drills: [
            "Pick a flaw and dial it to 11 in a one-paragraph sketch, then add a single humanizing sentence.",
            "Rewrite a person who annoys you as a comic character: exaggerate the flaw, then find the vulnerability.",
            "Take a beloved sitcom character; name their flaw and their humanity in one line each."
          ],
          models: [
            "Flaw is the accelerator, humanity is the seatbelt \u2014 you need both.",
            "We laugh hardest at people we also love. Earn the love first.",
            "Your own worst trait, exaggerated and owned, is often your most magnetic persona."
          ],
          deepDive: [
            "Learn: Flaws are funny because they're recognizable exaggerations of universal weaknesses. Study people you find funny in real life \u2014 almost always they have one loud, owned flaw plus obvious warmth. The combination is the formula.",
            "Develop: Build a 'flaw wardrobe' \u2014 three exaggerated versions of your own real quirks you can slip into on command. Rehearse the humanizing beat too; amateurs perform the flaw and forget the warmth, which reads as mean.",
            "Apply: In self-presentation (dates, interviews, hosting), leading with a lovable-flaw self-portrait makes you disarming and memorable. It's vulnerability with a laugh attached, which builds trust fast."
          ],
          related: [
            { track: "comedy", id: "truth-and-pain", why: "A character's flaw is just personified truth-and-pain." },
            { track: "banter", id: "agree-and-amplify", why: "Owning and amplifying your own flaw is agree-and-amplify applied to yourself." },
            { track: "communication", id: "ethos-logos-pathos", why: "A humanizing flaw is an ethos move \u2014 it makes you trustworthy and likable." }
          ]
        },
        {
          id: "clash-of-context",
          name: "Clash of Context & The Wildly Inappropriate Response",
          source: "The Comic Toolbox, Chs. on \u201cClash of Context\u201d and \u201cThe Wildly Inappropriate Response.\u201d",
          page: "The Comic Toolbox, \u201cClash of Context\u201d, pp. ~85\u2013100",
          breakdown:
            "Comedy erupts when two incompatible contexts collide \u2014 a formal frame invaded by a low element, or vice versa. The 'wildly inappropriate response' forces that clash: react to a situation with the emotion or register that absolutely doesn't belong. The brain expects context-appropriate behavior; violating it (safely) produces surprise.",
          task: "React to the moment with a wildly inappropriate register (operatic despair or bureaucratic calm) to force a context clash.",
          method: [
            "Identify the response the situation ({subj}) actually expects.",
            "Pick an alien context with the opposite register (courtroom, locker room, opera, spreadsheet).",
            "Deliver the mismatched response sincerely \u2014 the character must fully mean it.",
            "Widen the gap: the bigger the mismatch, the bigger the laugh."
          ],
          outputs: [
            "Someone spills a drink at {subj}: \u201cWe will speak of this day in whispers. Generations will know your name... and it will be a warning.\u201d",
            "A tiny scheduling hiccup at {subj}, met with total NASA calm: \u201cCopy that. Initiating contingency protocol. Everyone stay off the main channel.\u201d",
            "Announcing a snack shortage at {subj} like a war correspondent: \u201cReporting live \u2014 the pretzels have fallen. Morale is... complicated.\u201d"
          ],
          examples: [
            "A eulogy delivered like a stand-up roast; a toddler's birthday run like a military briefing.",
            "Reacting to spilled coffee with operatic, world-ending despair.",
            "Answering an emergency with bureaucratic calm: 'Have you tried turning the fire off and on again?'"
          ],
          drills: [
            "List five 'high' contexts and five 'low' ones. Randomly pair them and imagine the scene.",
            "Take today's most stressful moment and script a wildly inappropriate calm \u2014 or panic \u2014 response.",
            "Register-swap: say 'pass the salt' as Shakespearean tragedy, then as a sports announcer."
          ],
          models: [
            "Every setting carries invisible rules. Comedy breaks exactly one on purpose.",
            "The bigger the gap between context and response, the bigger the laugh \u2014 if the character means it.",
            "See mismatch everywhere: the funniest option is rarely the appropriate one."
          ],
          deepDive: [
            "Learn: Register (how formal, how emotional, how loud) is the dial you're playing with. Train your ear to name the expected register of any moment; only then can you deliberately violate it. This is the same muscle great improvisers use.",
            "Develop: Practice 'register laddering' \u2014 take one flat sentence and perform it across five registers (news anchor, toddler, Shakespearean, corporate, noir). The flexibility to jump registers on demand is what makes the clash feel effortless.",
            "Apply: Beyond jokes, deliberate register-mismatch is a charisma tool \u2014 treating a trivial thing with grand ceremony (or a big thing with breezy calm) reads as confident and playful in almost any social setting."
          ],
          related: [
            { track: "comedy", id: "comic-premise", why: "A premise is often just a sustained clash of context turned into a whole world." },
            { track: "banter", id: "sarcasm-and-irony", why: "Sarcasm is a verbal context clash \u2014 tone that contradicts the literal words." },
            { track: "banter", id: "misdirection-surprise", why: "Both rely on violating an expectation to create the surprise that triggers a laugh." }
          ]
        },
        {
          id: "rule-of-three",
          name: "The Rule of Three",
          source: "The Comic Toolbox, Ch. on \u201cThe Rule of Three\u201d (comic lists & triples).",
          page: "The Comic Toolbox, \u201cThe Rule of Three\u201d, pp. ~110\u2013122",
          breakdown:
            "Three is the smallest number that establishes a pattern and then breaks it. Items one and two set an expectation; item three subverts it \u2014 the 'turn.' Two beats create a rhythm the mind predicts; the third betrays the prediction, and the gap is the laugh.",
          task: "Build a comic triple: two honest items, then a subversive third \u2014 with the punch word placed last.",
          method: [
            "Pick a real list prompted by the situation ({subj}).",
            "Write two straight, related items that build a clear pattern.",
            "Make the third item veer into an unrelated or absurd direction.",
            "Put the surprising word at the very end of the sentence for maximum jolt."
          ],
          outputs: [
            "\u201cTo survive {subj} you need patience, a sense of humor, and an exit strategy involving a fake phone call.\u201d",
            "\u201c{subj} taught me three things: teamwork, resilience, and exactly who to avoid at lunch.\u201d",
            "\u201cMy plan for {subj}: show up, contribute, and quietly reevaluate every life choice since 2011.\u201d"
          ],
          examples: [
            "\u201cI need three things in a partner: kindness, honesty, and the ability to reach the top shelf.\u201d",
            "\u201cMy weekend plans: relax, recharge, and reconsider every decision I've made since 2011.\u201d",
            "\u201cThis job requires focus, discipline, and a complete disregard for your own well-being.\u201d"
          ],
          drills: [
            "Write ten triples today. Keep the first two honest; let the third break the frame.",
            "Take a serious two-item list from work and add a subversive third item.",
            "Placement drill: rewrite weak triples so the punch word is the LAST word."
          ],
          models: [
            "Set, set, subvert. Two to build the road, one to drive it off a cliff.",
            "The audience is a prediction machine; reward the setup, then betray it.",
            "Brevity is the payload \u2014 the laugh needs silence to land."
          ],
          deepDive: [
            "Learn: The triple works on prediction. Understanding this means you can control WHERE the surprise sits (always beat three) and WHAT kind of surprise (tonal, logical, or scale). It's the most teachable joke structure in existence \u2014 pure mechanics.",
            "Develop: Do 'triple reps' daily \u2014 turn any two-item list you naturally say into three with a turn. Speed matters: the goal is to generate the third beat in real time, mid-sentence, without visibly reaching for it.",
            "Apply: Triples sharpen writing and speaking far beyond comedy \u2014 toasts, captions, presentations. A well-placed third-beat turn makes you sound quick and deliberate, and it's the single most reliable way to punch up any line."
          ],
          related: [
            { track: "banter", id: "comic-triple", why: "The banter track teaches the same triple as a real-time conversational reflex." },
            { track: "banter", id: "misdirection-surprise", why: "The third-beat turn is a micro-dose of misdirection." },
            { track: "comedy", id: "clash-of-context", why: "The surprising third item usually works by clashing contexts." }
          ]
        },
        {
          id: "comic-throughline",
          name: "The Comic Throughline",
          source: "The Comic Toolbox, Ch. on \u201cThe Comic Throughline.\u201d",
          page: "The Comic Toolbox, \u201cThe Comic Throughline\u201d, pp. ~130\u2013145",
          breakdown:
            "The throughline is the spine of intention running through a comic piece \u2014 what the character wants, pursued relentlessly, tying loose gags into a story. Isolated jokes fatigue an audience; a throughline gives momentum and lets earlier jokes pay off later (the callback).",
          task: "Define one desperate want in a single sentence, then escalate it across three rising beats.",
          method: [
            "State the character's want in one sentence: 'desperately wants to ___' (tied to {subj}).",
            "Raise an obstacle that blocks the want.",
            "Escalate: make the same want cost more with each beat.",
            "Plant an early detail you can bring back later as a callback payoff."
          ],
          outputs: [
            "Want: 'get through {subj} without crying.' Beat 1: eyes water at hello. Beat 2: pretends it's allergies. Beat 3: openly weeping while insisting he's 'fine, it's the AC.'",
            "Want: 'seem effortlessly cool at {subj}.' Beat 1: leans on a wall that isn't there. Beat 2: laughs too loud at nothing. Beat 3: introduces himself with the wrong name and commits to it.",
            "Want: 'leave {subj} early undetected.' Beat 1: inches toward the door. Beat 2: fake phone call. Beat 3: gets roped into helping clean up, trapped forever."
          ],
          examples: [
            "In a first-date scene, the throughline 'he desperately wants to seem wealthy' organizes every gag.",
            "A running want ('get through this meeting without crying') turns random jokes into an escalating story.",
            "Callback: a throwaway line in beat one becomes the punchline in beat ten."
          ],
          drills: [
            "State the want in one sentence beginning 'This character desperately wants to ___.'",
            "Take three unrelated jokes and invent a single want that chains them.",
            "Plant-and-payoff: write a small detail early, then bring it back transformed as a later punchline."
          ],
          models: [
            "A want is a magnet \u2014 it pulls scattered jokes into a line.",
            "Escalation is oxygen: the same want must cost more each beat.",
            "Nothing is wasted \u2014 an early detail is a loaded gun for a later laugh."
          ],
          deepDive: [
            "Learn: Comedy scales from single lines to stories via intention. A want gives the audience something to track, so jokes feel like progress instead of a pile. This is the bridge from 'funny person' to 'funny storyteller.'",
            "Develop: Retell your real anecdotes with a stated want up front ('I just wanted ONE quiet coffee'). Then escalate the obstacles. Practicing this turns forgettable stories into ones people ask you to tell again.",
            "Apply: The throughline is how you hold a table's attention. In any story you tell socially, declaring your want early and escalating the stakes keeps people leaning in \u2014 and sets up your callbacks."
          ],
          related: [
            { track: "comedy", id: "sitcom-structure", why: "The throughline is the engine that structure organizes into beats." },
            { track: "banter", id: "pinning-the-tail", why: "The 1:1:1 method (action/reaction/emotion) is a micro-throughline for a single story." },
            { track: "communication", id: "set-your-goals", why: "A clear 'want' in comedy mirrors setting a single clear goal in persuasion." }
          ]
        },
        {
          id: "sitcom-structure",
          name: "Sitcom Story Structure",
          source: "The Comic Toolbox, Part II \u2014 \u201cThe Toolbox at Work.\u201d",
          page: "The Comic Toolbox, Part II, pp. ~150\u2013180",
          breakdown:
            "Vorhaus's workhorse sitcom shape: a normal world, a disruption that launches the comic engine, escalating complications driven by flaws, a crisis where the lie collapses, and a resolution restoring a (changed) normal \u2014 often as A-story / B-story echoing one theme.",
          task: "Outline a 5-beat mini-episode: want \u2192 obstacle \u2192 complication \u2192 crisis \u2192 button.",
          method: [
            "Establish the normal world and one want inside the situation ({subj}).",
            "Introduce a disruption that launches the comic engine.",
            "Escalate complications, each driven by the character's flaw.",
            "Hit a crisis where the convenient lie collapses, then snap shut on a button (final laugh)."
          ],
          outputs: [
            "{subj}: (1) wants to look competent, (2) is handed a task he doesn't understand, (3) fakes it, complications pile up, (4) the bluff is exposed publicly, (5) button: 'So... who WAS supposed to bring the projector?'",
            "{subj}: A-story he lies about having plans to escape early; B-story a friend lies about the same thing; theme 'small lies spiral'; both collide at the exit at once.",
            "{subj}: (1) wants to impress one person, (2) says yes to everything, (3) overcommits, (4) two commitments collide at the worst moment, (5) button: 'I contain multitudes. Sadly, they're all double-booked.'"
          ],
          examples: [
            "A-story: return a jacket; B-story: lie about a job \u2014 both echo 'small deceptions spiral.'",
            "The 'liar revealed' engine: a convenient Act-1 lie detonates in Act 3.",
            "Reset ending: the disruption resolves but the character has (comically) learned the lesson."
          ],
          drills: [
            "Outline a 5-beat mini-episode of your day using want\u2192obstacle\u2192complication\u2192crisis\u2192button.",
            "Watch one sitcom scene and label each beat; note where the flaw creates the complication.",
            "Write a B-story that thematically rhymes with your A-story, then find the tie line."
          ],
          models: [
            "Structure is a trellis, not a cage \u2014 it holds jokes up so they can climb.",
            "Comedy is a machine for making things worse in the funniest order.",
            "End on a button: the last beat should snap shut with a laugh."
          ],
          deepDive: [
            "Learn: Structure is why some funny people can sustain a bit and others run out after one line. Internalizing the five beats lets you 'feel' where a scene is and what it needs next \u2014 rising, cresting, or buttoning.",
            "Develop: Reverse-engineer episodes you love: pause and predict the next beat. When your predictions start matching the writers', you've absorbed the shape. Then outline your own five-beat scenes weekly.",
            "Apply: The same arc powers great storytelling, pitches, and even meeting narratives \u2014 setup, disruption, escalation, crisis, resolution. Audiences are wired for it, comic or not."
          ],
          related: [
            { track: "comedy", id: "comic-throughline", why: "Structure organizes the throughline's want into escalating beats." },
            { track: "comedy", id: "comic-premise", why: "The premise supplies the disruption that launches the structure." },
            { track: "communication", id: "control-the-tense", why: "A satisfying button lands in the future tense \u2014 the resolution/choice beat." }
          ]
        }
      ]
    },

    communication: {
      id: "communication",
      title: "Core Communication Foundations",
      short: "Communication",
      book: "Thank You for Arguing",
      author: "Jay Heinrichs",
      tagline: "The 3,000-year-old art of persuasion, made practical.",
      accent: "#2d6cdf",
      concepts: [
        {
          id: "invisible-argument",
          name: "Open Your Eyes: The Invisible Argument",
          source: "Thank You for Arguing, Ch. 1 \u2014 \u201cOpen Your Eyes: The Invisible Argument.\u201d",
          page: "Thank You for Arguing, Ch. 1",
          breakdown:
            "Heinrichs distinguishes a fight (aims to win, to dominate) from an argument (aims to win over, to reach a decision). Persuasion happens constantly and invisibly. Once you see arguments everywhere, you can choose your goal instead of reacting emotionally.",
          task: "Decide whether the disagreement is a fight or an argument, then steer it toward a decision everyone can accept.",
          method: [
            "Notice the persuasion happening in the situation ({subj}).",
            "Ask: is this a fight (someone must lose) or an argument (reach a decision)?",
            "Name your real objective \u2014 usually agreement or a decision, not domination.",
            "Redirect the exchange away from winning and toward what you actually want."
          ],
          outputs: [
            "During a tense moment at {subj}: \u201cI don't need to be right here \u2014 I just want us to land on something we can both live with. What would that look like?\u201d",
            "At {subj}: \u201cAre we trying to win this, or fix it? Because I'd rather fix it.\u201d",
            "At {subj}: reframing a blow-up \u2014 \u201cSounds like we actually agree on the goal and just disagree on the route. Let's argue about the route.\u201d"
          ],
          examples: [
            "A couple 'fighting' over the thermostat is really arguing over comfort, control, and being heard.",
            "An ad argues that buying a product makes you the person you want to be.",
            "In a meeting, whoever reframes 'who's to blame' into 'what next' has quietly won."
          ],
          drills: [
            "For one day, tally every persuasion attempt aimed at you \u2014 ads, requests, nudges.",
            "Next disagreement, silently label it 'fight' or 'argument' before speaking, and steer toward argument.",
            "Rewrite a recent conflict as a decision to reach rather than a battle to win."
          ],
          models: [
            "The goal of arguing isn't to win \u2014 it's to get what you want.",
            "You can win a fight and lose the relationship. Choose the game first.",
            "Rhetoric is the water you swim in; opening your eyes makes you the navigator."
          ],
          deepDive: [
            "Learn: The first competency of persuasion is perception \u2014 seeing argument where others see only conflict or noise. This reframes emotional situations as solvable ones and instantly lowers your reactivity.",
            "Develop: Build the 'fight vs. argument' reflex by narrating conflicts (yours and others') in your head with that label. Within weeks the label appears automatically in real time, giving you a beat to choose your response instead of reacting.",
            "Apply: In relationships and work, explicitly naming 'let's make this an argument, not a fight' de-escalates and aligns people on a shared decision \u2014 one of the highest-leverage moves in all of communication."
          ],
          related: [
            { track: "communication", id: "set-your-goals", why: "Once you see the argument, you must choose a single clear goal for it." },
            { track: "communication", id: "control-the-tense", why: "Steering a fight into an argument usually means shifting to the future tense." },
            { track: "banter", id: "flow-like-a-river", why: "Removing the 'win' pressure keeps conversation flowing rather than combative." }
          ]
        },
        {
          id: "set-your-goals",
          name: "Set Your Goals: Mood, Mind, Action",
          source: "Thank You for Arguing, Ch. 2 \u2014 \u201cSet Your Goals: Cicero's Lightbulb.\u201d",
          page: "Thank You for Arguing, Ch. 2",
          breakdown:
            "Every persuasion aims to change the audience's MOOD (how they feel), MIND (what they believe), or ACTION (what they'll do). The rookie mistake is aiming at all three, or arguing to change minds when you only needed to change a mood. Usually action is the real target and mood is the lever.",
          task: "Name your single most important goal \u2014 feel, believe, or do \u2014 and aim only at that.",
          method: [
            "Clarify what you actually want from the person in the situation ({subj}).",
            "Sort it into one bucket: change their mood, their mind, or their action.",
            "Pick the ONE that matters most \u2014 usually action.",
            "Design the argument around that single goal (and use mood as the lever to action)."
          ],
          outputs: [
            "Before an ask at {subj}: \u201cGoal: I don't need them to agree it's important \u2014 I need them to actually do it by Friday.\u201d",
            "At {subj}: \u201cI don't need to change their mind about the plan; I need to change the mood from anxious to confident so we can move.\u201d",
            "At {subj}: applying the action test \u2014 \u201cIf they nod along but nothing happens, I've lost. So I'll ask for one concrete commitment.\u201d"
          ],
          examples: [
            "You don't need your spouse to AGREE dishes matter \u2014 you need them to DO the dishes.",
            "A leader before a hard project changes the team's MOOD (confidence), not the facts.",
            "Marketing changes how you FEEL about a brand, which changes what you buy."
          ],
          drills: [
            "Before your next ask, write: 'By the end I want them to ___ (feel / believe / do).' Pick one.",
            "Audit an old failed argument: were you aiming at the wrong goal?",
            "Apply the 'action test': if they felt right but did nothing, did you win?"
          ],
          models: [
            "Mood \u2192 Mind \u2192 Action is a ladder; you usually need only the rung you're on.",
            "People act on emotion and justify with logic \u2014 mood is the shortest path to action.",
            "Clarity of goal is 80% of persuasion."
          ],
          deepDive: [
            "Learn: Most failed persuasion fails at the goal-setting stage, not the delivery stage. Naming exactly which of the three changes you want prevents the scattershot arguing that convinces no one of anything.",
            "Develop: Before every meaningful conversation, spend ten seconds writing your one-sentence goal. This tiny habit compounds; you'll notice your arguments getting shorter, sharper, and more effective.",
            "Apply: In leadership and negotiation, aiming precisely at ACTION (with a concrete, time-bound ask) is what turns agreement into results. 'Everyone agreed' is worthless if nobody moved."
          ],
          related: [
            { track: "communication", id: "control-the-mood", why: "Mood is the primary lever for moving people to action." },
            { track: "communication", id: "invisible-argument", why: "Seeing the argument comes first; setting the goal comes immediately after." },
            { track: "comedy", id: "comic-throughline", why: "A single clear goal is the persuasion version of a comic throughline's 'want.'" }
          ]
        },
        {
          id: "control-the-tense",
          name: "Control the Tense: Blame, Values, Choice",
          source: "Thank You for Arguing, Ch. 3 \u2014 \u201cControl the Tense: Orphan Annie's Law.\u201d",
          page: "Thank You for Arguing, Ch. 3",
          breakdown:
            "Aristotle's three argument types map to tenses. PAST = blame (who did it) \u2014 good for courts, bad for solving. PRESENT = values (who we are, good vs. bad) \u2014 tends to tribalism. FUTURE = choice (what should we do) \u2014 the only tense that reaches a decision.",
          task: "When the argument stalls in blame or values, shift it to the future: 'what do we do now?'",
          method: [
            "Detect the tense the conversation is stuck in during the situation ({subj}).",
            "Recognize past = blame and present = values rarely reach a decision.",
            "Deliberately introduce future-tense language: 'going forward', 'next time', 'what do we do now'.",
            "Anchor the group on choosing the next action."
          ],
          outputs: [
            "At {subj}, defusing blame: \u201cWe can figure out whose fault it was later \u2014 right now, what's our next move?\u201d",
            "At {subj}: \u201cGoing forward, how do we make sure this doesn't happen again?\u201d",
            "At {subj}, flipping a 'you always': \u201cInstead of what went wrong, let's decide what we'll do differently next time.\u201d"
          ],
          examples: [
            "Kids arguing 'you started it!' (past) is defused by 'what happens next?' (future).",
            "A team blaming a missed deadline moves forward with 'how do we prevent it next sprint?'",
            "Political fights live in present-tense values because they aren't meant to be solved."
          ],
          drills: [
            "In your next stuck disagreement, literally say 'Going forward, what should we do?'",
            "Label three recent arguments by tense; note how many never reached a decision.",
            "Rewrite a 'you always...' into 'next time, let's...'."
          ],
          models: [
            "The future tense is the language of leadership; blame is the language of losing.",
            "You can't decide the past \u2014 only what comes next.",
            "Whoever controls the tense controls the outcome."
          ],
          deepDive: [
            "Learn: Tense is a hidden steering wheel in every disagreement. Blame and values arguments feel productive but spin in place; only future-tense deliberation produces decisions. Knowing this lets you diagnose why an argument is stuck.",
            "Develop: Train the phrase 'going forward' as a reflex. Deploy it the instant you feel an argument circling the past. Over time you'll redirect conversations toward solutions almost automatically.",
            "Apply: In meetings, families, and conflict resolution, being the person who reliably shifts the room into the future tense makes you the de facto problem-solver \u2014 and quietly, the leader."
          ],
          related: [
            { track: "communication", id: "invisible-argument", why: "Shifting tense is the core move for turning a fight into a solvable argument." },
            { track: "communication", id: "high-ground-framing", why: "Choosing the tense is a form of framing the debate on your terms." },
            { track: "comedy", id: "sitcom-structure", why: "A story's satisfying 'button' resolves it in the future tense \u2014 the choice beat." }
          ]
        },
        {
          id: "ethos-logos-pathos",
          name: "Soften Them Up: Ethos, Logos, Pathos",
          source: "Thank You for Arguing, Ch. 4 \u2014 \u201cSoften Them Up: Character, Logic, Emotion.\u201d",
          page: "Thank You for Arguing, Ch. 4",
          breakdown:
            "Aristotle's three modes: ETHOS = argument by character (do they trust you?), LOGOS = logic (does it make sense?), PATHOS = emotion (do they feel it?). Sequence: lead with ethos to earn a hearing, use logos to justify, deploy pathos to move people to act.",
          task: "Audit which leg your argument stands on \u2014 character, logic, or emotion \u2014 and add the missing one.",
          method: [
            "State your core claim for the situation ({subj}).",
            "Establish ethos: why should this audience trust you here?",
            "Add logos: the clean reason or evidence that justifies the claim.",
            "Finish with pathos: the feeling that actually moves them to act."
          ],
          outputs: [
            "At {subj}: \u201cI've sat where you're sitting (ethos). The numbers back this up (logos). And honestly, imagine how good it'll feel to have this off our plate (pathos).\u201d",
            "At {subj}, spotting a gap: \u201cMy case is all logic and no feeling \u2014 let me add the story of who this actually helps.\u201d",
            "At {subj}: \u201cBefore I make the case, here's why I care about getting this right for you (ethos first).\u201d"
          ],
          examples: [
            "A doctor uses ethos ('trust my expertise'), logos ('the data'), pathos ('healthy at your daughter's wedding').",
            "Charity appeals lean on pathos (one child's story) over logos (statistics).",
            "A negotiator concedes a small point first to build ethos before the logical case."
          ],
          drills: [
            "Take one claim and write three versions: pure ethos, pure logos, pure pathos.",
            "Diagnose an ad or speech \u2014 which mode dominates, and what's missing?",
            "Before an important ask, list your ethos assets explicitly."
          ],
          models: [
            "Logic gets a nod; emotion gets a decision \u2014 usually you need both, in that order.",
            "Ethos is the ticket to the room; without trust, logic goes unheard.",
            "The strongest arguments stand on all three legs."
          ],
          deepDive: [
            "Learn: These three modes are the periodic table of persuasion \u2014 nearly every persuasive act is a mix. Learning to hear which one is doing the work (and which is absent) turns you into a sharp analyst of speeches, ads, and everyday requests.",
            "Develop: Practice by rewriting your own arguments to over-index on each mode in turn. The exercise reveals your default (most people over-rely on logos) and builds the flexibility to add the mode a given audience actually needs.",
            "Apply: In high-stakes communication \u2014 pitches, tough conversations, leadership \u2014 consciously stacking ethos then logos then pathos is a repeatable recipe that dramatically raises your hit rate."
          ],
          related: [
            { track: "communication", id: "decorum", why: "Decorum is how you build ethos \u2014 by fitting the audience's expectations." },
            { track: "communication", id: "control-the-mood", why: "Controlling mood is pathos in practice." },
            { track: "comedy", id: "flaws-humanity", why: "A humanizing flaw is a fast ethos builder \u2014 it makes you likable and trusted." }
          ]
        },
        {
          id: "decorum",
          name: "Get Them to Like You: Decorum",
          source: "Thank You for Arguing, Ch. 5 \u2014 \u201cGet Them to Like You: Eminem's Rules of Decorum.\u201d",
          page: "Thank You for Arguing, Ch. 5",
          breakdown:
            "Decorum is fitting your argument to your audience's expectations \u2014 matching their language, values, and style so they see you as one of them. It's not about being 'proper'; it's meeting the audience where they are. People are persuaded by those they identify with.",
          task: "Mirror the audience's vocabulary and values so they see you as one of them, then make your ask.",
          method: [
            "Read the audience of the situation ({subj}): their values, code, and favorite words.",
            "Mirror their register and vocabulary rather than your own.",
            "Show you share what they care about before you ask.",
            "Preempt their objection about you by voicing it first."
          ],
          outputs: [
            "At {subj}, mirroring: \u201cLook, I know we all just want this to be simple and not eat our whole week \u2014 so here's the no-drama version.\u201d",
            "At {subj}, preempting: \u201cYou're probably thinking I'd say that \u2014 and fair. So let me show you, not tell you.\u201d",
            "At {subj}, shared values: \u201cWe both care about getting this right more than getting it fast \u2014 so here's what 'right' looks like.\u201d"
          ],
          examples: [
            "Eminem in '8 Mile' voices every insult about himself first \u2014 perfect decorum for that crowd.",
            "A candidate rolls up sleeves and drops jargon in a factory town; suits up and cites data in a boardroom.",
            "A teenager persuades a parent by adopting the parent's own values ('responsibility', 'trust')."
          ],
          drills: [
            "Before a pitch, list your audience's three core values and three favorite words; weave them in.",
            "Code-switch: deliver the same request to a friend, a boss, and a stranger.",
            "Preempt: voice their likely objection about you before they can."
          ],
          models: [
            "Persuasion runs on identity: 'you're one of us' beats 'you're right.'",
            "Fit the tool to the hand \u2014 the right argument in the wrong register still fails.",
            "Lower defenses by seeming to want what your audience wants."
          ],
          deepDive: [
            "Learn: Decorum is emotional intelligence turned into a persuasion tool. It's the recognition that HOW you say something \u2014 register, vocabulary, dress, references \u2014 often outweighs the content in whether you're believed.",
            "Develop: Become a register chameleon by consciously observing how different groups talk, then practicing their code. This isn't fakery; it's translation \u2014 delivering the same sincere message in the dialect your audience trusts.",
            "Apply: Across sales, dating, cross-cultural work, and leadership, matching your audience's expectations is the difference between 'outsider making a point' and 'insider we listen to.'"
          ],
          related: [
            { track: "communication", id: "ethos-logos-pathos", why: "Decorum is the primary engine of ethos (trust and likability)." },
            { track: "banter", id: "flow-like-a-river", why: "Matching a person's conversational register keeps rapport and flow alive." },
            { track: "comedy", id: "clash-of-context", why: "Knowing the expected register (decorum) is what lets you break it for comic effect." }
          ]
        },
        {
          id: "control-the-mood",
          name: "Control the Mood: Emotional Craft",
          source: "Thank You for Arguing, Ch. 9 \u2014 \u201cControl the Mood: The Aquinas Maneuver.\u201d",
          page: "Thank You for Arguing, Ch. 9",
          breakdown:
            "Because people decide on emotion, controlling the room's mood is often decisive. Set mood through vivid, concrete storytelling (make them SEE it), through your own displayed emotion (it's contagious), and through simple sensory language rather than abstraction.",
          task: "Replace an abstract claim with one vivid, concrete image that produces the feeling you need \u2014 then ask.",
          method: [
            "Decide the exact mood you need in the room for the situation ({subj}).",
            "Find the abstract claim you were going to make.",
            "Replace it with a single concrete, sensory image or short story.",
            "Project the emotion yourself \u2014 the room catches what you show \u2014 then make the ask."
          ],
          outputs: [
            "At {subj}, instead of 'response times are slow': \u201cA customer waited on hold through her whole lunch break, then hung up hungry and furious. That's the moment we're fixing.\u201d",
            "At {subj}: \u201cDon't picture a 12% gap \u2014 picture the one family that 12% is.\u201d",
            "At {subj}, setting calm: (slower, lower voice) \u201cOkay. Deep breath. Here's exactly what we're going to do, step by step.\u201d"
          ],
          examples: [
            "'A customer waited on hold through her lunch break and hung up hungry and angry.' beats 'response time is slow.'",
            "A speaker slows down and lowers their voice to create gravity before a key point.",
            "'Meet Amina, who walks six miles for water each morning' beats '10,000 affected.'"
          ],
          drills: [
            "Turn one statistic from your work into a single vivid human image.",
            "Practice showing the feeling you want: record yourself conveying calm, then urgency.",
            "Before persuading, choose the exact mood and design one story to create it."
          ],
          models: [
            "Facts inform; images move. Paint the picture, then make the ask.",
            "Emotion is contagious \u2014 the room catches the feeling you project.",
            "The concrete beats the abstract when the stakes are human."
          ],
          deepDive: [
            "Learn: Mood is upstream of decisions. If you can set how a room feels, you've pre-loaded how it will choose. The tools \u2014 vivid imagery, contagious emotion, sensory language \u2014 are learnable and reliable, not mysterious charisma.",
            "Develop: Collect 'image swaps' \u2014 for every abstract point you make often, bank a concrete image or micro-story. Rehearse projecting the target emotion with voice and pace; people mirror what you visibly feel.",
            "Apply: In presentations, fundraising, sales, and leadership, deliberately engineering mood before the ask is what separates memorable, moving communicators from accurate-but-forgettable ones."
          ],
          related: [
            { track: "communication", id: "set-your-goals", why: "Mood is the lever you pull to reach the action goal." },
            { track: "banter", id: "vivid-language", why: "Vivid, specific language is the shared tool that makes people see and feel." },
            { track: "comedy", id: "truth-and-pain", why: "Naming a shared pain is a powerful, honest way to set an emotional mood." }
          ]
        },
        {
          id: "high-ground-framing",
          name: "Gain the High Ground & Persuade on Your Terms",
          source: "Thank You for Arguing, Chs. 11\u201312 \u2014 \u201cAristotle's Favorite Topic\u201d & \u201cThe Sister Frame.\u201d",
          page: "Thank You for Arguing, Chs. 11\u201312",
          breakdown:
            "Two linked moves. The COMMONPLACE is a belief your audience already holds; anchoring to it gives you high ground. FRAMING defines the terms and context so the argument is fought where you chose \u2014 redefine the issue, the words, and the standard of judgment.",
          task: "Find a value the audience already holds, plant your flag on it, and name the debate in your own words.",
          method: [
            "Identify a commonplace \u2014 a value the audience of the situation ({subj}) won't argue with.",
            "Anchor your argument on top of that shared value.",
            "Reframe the question in your own terms, changing the standard of judgment.",
            "Refuse the opponent's frame \u2014 replace it rather than fight inside it."
          ],
          outputs: [
            "At {subj}, anchoring to fairness: \u201cWe all agree pay should match contribution \u2014 so let's just make the numbers reflect that.\u201d",
            "At {subj}, sister frame: \u201cThe real question isn't whether this is expensive \u2014 it's what doing nothing will cost us.\u201d",
            "At {subj}, replacing a frame: \u201cLet's not argue about 'cutting' anything \u2014 let's argue about where the money does the most good.\u201d"
          ],
          examples: [
            "Anchoring to 'fairness', a manager reframes a raise as 'aligning pay with contribution.'",
            "'Gun control' vs 'gun rights' \u2014 whoever names the debate has half-won.",
            "Sister frame: 'is this expensive?' \u2192 'compared to the cost of doing nothing?'"
          ],
          drills: [
            "For your next ask, identify one value the other side already accepts and build on it.",
            "Reframe a losing debate by changing the standard ('the real question is...').",
            "Collect the loaded words each side uses for the same thing; choose your frame."
          ],
          models: [
            "The one who frames the question usually wins the answer.",
            "Argue from their beliefs, not yours \u2014 the high ground is the values they hold.",
            "Don't fight the frame; replace it."
          ],
          deepDive: [
            "Learn: Framing is arguably the most powerful idea in rhetoric \u2014 whoever defines the terms and the question controls the whole exchange before it starts. Recognizing frames (yours and others') is a superpower against manipulation.",
            "Develop: Practice spotting frames in news and ads \u2014 name the standard of judgment being smuggled in. Then rehearse reframing: for any position you hold, find the shared value that makes it feel like common sense.",
            "Apply: In negotiation, politics, and everyday advocacy, entering with your own frame (anchored to a value your audience already holds) is how you win agreements that feel voluntary rather than forced."
          ],
          related: [
            { track: "communication", id: "control-the-tense", why: "Choosing the tense is one specific way to frame a debate." },
            { track: "comedy", id: "comic-premise", why: "A premise and a frame both define the terms everyone then operates inside." },
            { track: "banter", id: "agree-and-amplify", why: "Agree-and-amplify wins by accepting a frame and pushing it past absurdity \u2014 a playful reframe." }
          ]
        }
      ]
    },

    banter: {
      id: "banter",
      title: "Conversational Dynamics & Social Mastery",
      short: "Banter",
      book: "The Art of Witty Banter",
      author: "Patrick King",
      tagline: "Be clever, quick, and magnetic \u2014 in real time.",
      accent: "#16a085",
      concepts: [
        {
          id: "flow-like-a-river",
          name: "Flow Like a River",
          source: "The Art of Witty Banter, Ch. 1 \u2014 \u201cFlow Like a River\u201d (Summary Guide, p. 245).",
          page: "The Art of Witty Banter, Ch. 1, p. 245",
          breakdown:
            "Witty is a cultivated skill, not a birth gift. The first element is conversational flow \u2014 keeping an easy back-and-forth. King's foundational trick: never speak in absolutes. Drop 'favorite / best / worst / only' questions, which pressurize the other person and stall flow. Ask softer, open questions and offer stories.",
          task: "Rephrase a closed 'what's your favorite...?' into an easy, pressure-free open question, or offer a small story to revive flow.",
          method: [
            "Spot the pressure: any 'favorite / best / worst / only' question aimed at the situation ({subj}).",
            "Rephrase it as an open, low-stakes prompt ('lately', 'these days', 'that surprised you').",
            "Offer a small piece of yourself for every question you ask (2:1 sharing).",
            "When a topic dies, reignite with a short related story instead of interrogating."
          ],
          outputs: [
            "At {subj}, instead of 'what's your favorite...?': \u201cWhat's something you've been into lately?\u201d",
            "At {subj}, reviving a lull: \u201cThat reminds me \u2014 the last time I was somewhere like this, I completely embarrassed myself. Ever have one of those?\u201d",
            "At {subj}, easy on-ramp: \u201cSeen or read anything good recently? I need recommendations.\u201d"
          ],
          examples: [
            "Weak: 'What's your favorite movie?' (pressure). Better: 'Seen anything good lately?' (easy).",
            "Instead of 'best trip', ask 'where's somewhere that surprised you?'",
            "When a topic dies, offer a small related story of your own to reignite it."
          ],
          drills: [
            "For one day, ban 'favorite' from your questions and rephrase each as open-ended.",
            "Prepare three 'easy on-ramp' questions you can drop into any lull.",
            "Practice the 2:1 ratio \u2014 for every question, offer one small piece of yourself."
          ],
          models: [
            "Conversation is a river, not an exam \u2014 remove the pressure and it flows.",
            "Ease beats cleverness; a relaxed partner is your best material.",
            "You're a host, not an interrogator. Make it easy to answer."
          ],
          deepDive: [
            "Learn: Flow is the foundation everything else in banter sits on \u2014 you can't be witty in a conversation that keeps stalling. The core insight is counterintuitive: lowering the stakes of your questions makes people MORE forthcoming and interesting, not less.",
            "Develop: Audit your default questions for hidden pressure. Rebuild a small arsenal of open on-ramps and short personal stories you can deploy in lulls. Rehearse the 2:1 give/ask ratio until sharing feels natural rather than interview-like.",
            "Apply: In dating, networking, and everyday small talk, being the person who makes conversation effortless is magnetic. People leave thinking 'that was easy and fun' \u2014 and they attribute the good feeling to you."
          ],
          related: [
            { track: "banter", id: "pinning-the-tail", why: "Once flow is going, 'pinning the tail' turns their stories into shared moments." },
            { track: "communication", id: "decorum", why: "Matching register keeps flow smooth and builds rapport." },
            { track: "communication", id: "invisible-argument", why: "Removing 'win' pressure keeps conversations flowing instead of turning into fights." }
          ]
        },
        {
          id: "vivid-language",
          name: "Vivid Language & Specificity",
          source: "The Art of Witty Banter, Ch. on word choice & mental imagery.",
          page: "The Art of Witty Banter, \u201cWord Choice\u201d, pp. ~244\u2013245",
          breakdown:
            "Wit lives in specific, colorful language that paints mental images. Swap flat words ('good', 'bad', 'tired') for vivid ones and analogies. When a normal adjective appears, reach for a stronger synonym or an 'as ___ as ___' comparison. Specificity makes you interesting and gives your partner something to riff on.",
          task: "Upgrade a flat adjective into a vivid image or an 'as ___ as ___' analogy on the fly.",
          method: [
            "Catch the flat adjective you're about to use about the situation ({subj}).",
            "Reach for a stronger, more specific synonym or a concrete image.",
            "If stuck, fall back on an 'as [adjective] as [vivid comparison]' analogy.",
            "Keep it sensory \u2014 the more the listener can picture it, the more they'll respond."
          ],
          outputs: [
            "Instead of '{subj} was good': \u201c{subj} was as good as finding money in last winter's coat.\u201d",
            "Instead of '{subj} was bad': \u201c{subj} was about as smooth as a shopping cart with one broken wheel.\u201d",
            "Instead of 'I'm tired after {subj}': \u201cAfter {subj} I'm running on the fumes of a fume.\u201d"
          ],
          examples: [
            "Flat: 'the food was good.' Vivid: 'that pasta was as good as a warm hug on a bad day.'",
            "Flat: 'traffic was bad.' Vivid: 'traffic was as bad as the seventh circle of hell.'",
            "Flat: 'I'm tired.' Vivid: 'I'm running on the fumes of a fume.'"
          ],
          drills: [
            "Take five words you overuse ('good', 'nice', 'cool') and write two vivid replacements each.",
            "Analogy reps: complete 'as good as ___' and 'as bad as ___' ten times.",
            "Describe your commute using only concrete, sensory images \u2014 no generic adjectives."
          ],
          models: [
            "Specificity is charisma \u2014 the vivid detail is what people remember and reply to.",
            "Every flat adjective is a missed laugh. Upgrade on the fly.",
            "Give your partner a handle: a colorful image invites the next line."
          ],
          deepDive: [
            "Learn: Vivid language is the quickest upgrade to how interesting you sound, and it's pure craft \u2014 not talent. Flat words give listeners nothing to grab; specific images and analogies hand them a springboard for the next exchange.",
            "Develop: Keep a running list of upgraded words and reusable analogies. Practice 'as ___ as ___' reps until comparisons arrive instantly. Read writers known for imagery and steal their moves (structure, not lines).",
            "Apply: This transfers straight into storytelling, writing, presentations, and dating profiles \u2014 anywhere being memorable matters. Specificity is also persuasive: concrete images move people (see 'Control the Mood')."
          ],
          related: [
            { track: "communication", id: "control-the-mood", why: "Vivid, concrete imagery is exactly how you set a room's emotional mood." },
            { track: "banter", id: "comic-triple", why: "Vivid descriptors are the raw ingredients you arrange into a comic triple." },
            { track: "comedy", id: "truth-and-pain", why: "A specific, vivid detail is often what makes a truth land as recognizable pain." }
          ]
        },
        {
          id: "comic-triple",
          name: "The Comic Triple",
          source: "The Art of Witty Banter, Ch. on the comedic triple (pp. 254\u2013255).",
          page: "The Art of Witty Banter, pp. 254\u2013255",
          breakdown:
            "King's core mechanical technique: describe something with three adjectives \u2014 two related and one that veers off. The first two set an expectation; the unrelated third throws the listener and creates surprise. Alternatively, two positives and one sharp negative.",
          task: "Describe something with two related descriptors and one that veers off \u2014 punch word last.",
          method: [
            "Pick something to describe from the situation ({subj}).",
            "Choose two descriptors in the same lane that build a clear expectation.",
            "Steer the third descriptor into oncoming traffic \u2014 unrelated or sharply negative.",
            "Place the surprise word last so it lands clean."
          ],
          outputs: [
            "\u201c{subj} was fun, memorable, and quietly a fire-code violation.\u201d",
            "\u201cHe's charming, well-read, and completely convinced pineapple belongs on pizza.\u201d",
            "\u201c{subj}: relaxing, scenic, and financially catastrophic.\u201d"
          ],
          examples: [
            "'He's tall, handsome, and legally not allowed within 500 feet of a school.'",
            "'The trip was relaxing, scenic, and financially ruinous.'",
            "'She's smart, driven, and convinced pineapple belongs on pizza.'"
          ],
          drills: [
            "Write ten triples: two matching descriptors, one that breaks the pattern, punch word last.",
            "Take a compliment and add a subversive third beat to make it banter.",
            "Practice the negative-turn triple about yourself for safe self-deprecation."
          ],
          models: [
            "Two to lull, one to jolt \u2014 misdirection is the whole trick.",
            "The odd item goes last, or the surprise leaks early.",
            "Relatedness sets the trap; unrelatedness springs it."
          ],
          deepDive: [
            "Learn: The triple is the most reliable, learnable joke form for real-time banter because it's mechanical: pattern, pattern, break. Master the mechanics and you can be 'quick' on demand without waiting for inspiration.",
            "Develop: Do daily triple reps until the third-beat turn arrives mid-sentence. Practice both flavors \u2014 the tonal veer (absurd third item) and the scale veer (two positives, one big negative). Speed is the whole game.",
            "Apply: Triples elevate toasts, captions, intros, and everyday quips. It's the single highest-ROI comedic technique for someone who wants to sound witty quickly in conversation."
          ],
          related: [
            { track: "comedy", id: "rule-of-three", why: "This is the same structure taught in the comedy track \u2014 study both for depth." },
            { track: "banter", id: "vivid-language", why: "Vivid descriptors are the ingredients your triple arranges." },
            { track: "banter", id: "misdirection-surprise", why: "The third-beat turn is a compact form of misdirection." }
          ]
        },
        {
          id: "sarcasm-and-irony",
          name: "Sarcasm & Irony",
          source: "The Art of Witty Banter, Ch. on sarcasm & irony (pp. 254\u2013255).",
          page: "The Art of Witty Banter, pp. 254\u2013255",
          breakdown:
            "Sarcasm = saying the opposite of what you mean, usually to make light fun; irony = when the outcome is the opposite of what's expected. King's caution: sarcasm without warmth reads as hostility. Deliver it with obvious playfulness and clear good intent, or pair it with tone and body language that signal you're joking.",
          task: "Respond with warm, clearly-playful sarcasm (not hostility), or point out a real irony in one dry line.",
          method: [
            "Pick a low-stakes target in the situation ({subj}) \u2014 never someone's soft spot.",
            "Say the opposite of what you mean, or point at an outcome that flipped expectation.",
            "Signal the wink: warm tone, smile, or body language, so it reads as play.",
            "Keep it brief \u2014 explaining a sarcastic line kills it."
          ],
          outputs: [
            "A tiny thing goes wrong at {subj}: \u201cOh perfect, exactly according to plan. Flawless execution as always.\u201d (warm tone)",
            "Spotting irony at {subj}: \u201cWe scheduled the time-management workshop... and it's running forty minutes over.\u201d",
            "Sarcastic agreement at {subj}: \u201cYes, because THIS is clearly everyone's idea of a relaxing time.\u201d"
          ],
          examples: [
            "Friend trips: 'Oh wonderful, gravity's working perfectly today.' (warm tone).",
            "Irony: a fire station burning down; a marriage counselor getting divorced.",
            "Sarcastic agreement: 'Yeah, waking up at 5am is definitely everyone's idea of a good time.'"
          ],
          drills: [
            "Say 'great, just what I needed' three ways \u2014 warm, neutral, hostile \u2014 and feel the difference.",
            "Spot five real ironies in your week and phrase each as a one-line observation.",
            "Rewrite a complaint as gentle sarcastic exaggeration instead of a straight gripe."
          ],
          models: [
            "Sarcasm needs a smile behind it \u2014 warmth is the safety catch.",
            "Irony is the universe's own punchline; just point at it.",
            "Aim sarcasm at situations, not people's soft spots."
          ],
          deepDive: [
            "Learn: Sarcasm is high-risk, high-reward. The single variable that decides whether it charms or wounds is perceived warmth. Understanding that lets you keep the wit while removing the sting \u2014 the mistake beginners make is tone, not content.",
            "Develop: Train your delivery, not just your lines. Record yourself; find the tone that reads as playful. Practice aiming sarcasm at situations and shared circumstances rather than at a person's insecurities.",
            "Apply: Warm sarcasm builds in-group closeness fast \u2014 it's the language of established friendships. Used carefully with newer acquaintances (situational, clearly winking), it signals confidence and quick thinking."
          ],
          related: [
            { track: "comedy", id: "clash-of-context", why: "Sarcasm is a verbal context clash \u2014 tone contradicting literal meaning." },
            { track: "banter", id: "agree-and-amplify", why: "Sarcastic agreement blends naturally into agree-and-amplify." },
            { track: "communication", id: "control-the-mood", why: "Tone control is the exact skill that keeps sarcasm warm rather than hostile." }
          ]
        },
        {
          id: "misdirection-surprise",
          name: "Misdirection & Surprise",
          source: "The Art of Witty Banter, Ch. on misdirection & the unexpected (pp. 254\u2013256).",
          page: "The Art of Witty Banter, pp. 254\u2013256",
          breakdown:
            "The most flexible technique: build an expectation, then violate it. Comedy is fundamentally surprise, and misdirection engineers it by leading the listener one way and pivoting. It underlies the triple, the unrelated descriptor, and the deadpan non-sequitur.",
          task: "Set a clear expectation, then deliver a surprising 'left turn' payoff that's unexpected yet retrospectively logical.",
          method: [
            "Start a normal setup grounded in the situation ({subj}).",
            "Lead the listener toward the obvious expectation.",
            "Pivot to an unexpected \u2014 but in hindsight logical \u2014 payoff.",
            "Land on the surprise word; don't over-explain the turn."
          ],
          outputs: [
            "At {subj}: \u201cI'm a big believer in long, romantic walks... straight to the snack table.\u201d",
            "At {subj}: \u201cI've got a five-year plan. It's mostly just this year, repeated, in denial.\u201d",
            "At {subj}: \u201cPeople say I'm hard to read. My mom agrees. So does the DMV.\u201d"
          ],
          examples: [
            "'I love long romantic walks... to the fridge.'",
            "'My therapist says I have a preoccupation with vengeance. We'll see about that.'",
            "Deadpan pivot: start ordinary, end absurd."
          ],
          drills: [
            "Write five setups; give each two payoffs \u2014 one expected, one surprising. Keep the surprising ones.",
            "Practice the 'left turn': start a normal sentence and end it somewhere absurd.",
            "Study a joke you love and find the exact word where the misdirection turns."
          ],
          models: [
            "No surprise, no laugh \u2014 predictability is the enemy of wit.",
            "Lead them down the garden path, then open a trapdoor.",
            "The best twist is surprising yet, in hindsight, inevitable."
          ],
          deepDive: [
            "Learn: Misdirection is the parent principle behind almost every joke technique \u2014 the triple, sarcasm, non-sequiturs are all species of 'set expectation, break it.' Grasping the general principle lets you invent your own forms.",
            "Develop: Train the 'two payoffs' habit \u2014 for any setup, generate the obvious ending and then a surprising one, and always take the surprise. Build sensitivity to exactly where the turn word should sit for maximum jolt.",
            "Apply: Beyond jokes, controlled surprise makes writing, hooks, and storytelling gripping. Openings that subvert expectation grab attention; punchy endings that pivot are what make lines quotable."
          ],
          related: [
            { track: "banter", id: "comic-triple", why: "The triple is misdirection in its most compact, teachable form." },
            { track: "comedy", id: "rule-of-three", why: "The comedy track's rule of three is the same surprise mechanism, studied in depth." },
            { track: "comedy", id: "clash-of-context", why: "Context clash is a reliable engine for generating the surprise turn." }
          ]
        },
        {
          id: "agree-and-amplify",
          name: "Agree & Amplify (The Reverse)",
          source: "The Art of Witty Banter, Ch. on playful agreement & exaggeration.",
          page: "The Art of Witty Banter, \u201cAgree & Amplify\u201d, pp. ~230\u2013237",
          breakdown:
            "Instead of defending against a tease or wild statement, agree with it and exaggerate to absurdity. This defuses tension, signals unshakable confidence, and turns an attack into shared play. You're collaborating, not combating \u2014 guards drop and everyone laughs.",
          task: "Take a tease or wild statement, agree with it, and inflate it past the point of seriousness.",
          method: [
            "Catch the tease or wild claim aimed at you in the situation ({subj}).",
            "Resist defending \u2014 instead say 'yes, and...'.",
            "Inflate the premise to a cartoonish extreme.",
            "Deliver it deadpan-confident so it reads as play, not insecurity."
          ],
          outputs: [
            "\u201cYou're such a nerd.\u201d \u2192 \u201cA nerd? The mathletes have a restraining order against me.\u201d",
            "\u201cYou're always late.\u201d \u2192 \u201cLate? They start meetings in a different time zone just for me.\u201d",
            "\u201cNice dad shoes.\u201d \u2192 \u201cThanks \u2014 bought them with my AARP discount and a coupon I clipped in 1997.\u201d"
          ],
          examples: [
            "'You're such a nerd.' \u2192 'A nerd? I'm the reason the mathletes have a restraining order against me.'",
            "'You're always late.' \u2192 'Late? I'm so slow they start meetings in a different time zone for me.'",
            "'Nice dad shoes.' \u2192 'Thanks, I bought them with my AARP discount and a coupon.'"
          ],
          drills: [
            "List five common teases about you and write an amplified agreement for each.",
            "'Yes, and' escalation: partner jabs, you accept and inflate three times.",
            "Reframe a genuine insecurity into a self-amplified joke so it can't be used against you."
          ],
          models: [
            "You can't be knocked off a hill you happily jumped off \u2014 agreement removes the target.",
            "Turn attack into collaboration; you're building a bit together now.",
            "Confidence is agreeing with the joke and making it bigger."
          ],
          deepDive: [
            "Learn: Agree-and-amplify is the ultimate anti-fragile social move: it converts incoming attacks into fuel. The psychology is that defending signals the jab landed, while amplifying signals total security \u2014 which is magnetic.",
            "Develop: Pre-write amplified responses to the teases you actually get (about your job, your quirks, your looks). Rehearse them so they arrive instantly. The muscle is 'accept + inflate', trainable through the 'yes, and' drill.",
            "Apply: This defuses hecklers, playful rivals, and awkward call-outs, and it's the fastest way to appear confident under fire \u2014 in dating, at work, and among friends. It also protects your insecurities by owning them first."
          ],
          related: [
            { track: "comedy", id: "truth-and-pain", why: "Amplifying a tease about yourself is self-aimed truth-and-pain, owned confidently." },
            { track: "comedy", id: "flaws-humanity", why: "You're exaggerating your own flaw \u2014 the comic-character move, live." },
            { track: "communication", id: "high-ground-framing", why: "Accepting then inflating a frame is a playful way to seize the high ground." }
          ]
        },
        {
          id: "pinning-the-tail",
          name: "Pinning the Tail on the Donkey (The 1:1:1 Method)",
          source: "The Art of Witty Banter, Ch. on assisting stories (pp. 238\u2013241, 258\u2013259).",
          page: "The Art of Witty Banter, pp. 238\u2013241 & 258\u2013259",
          breakdown:
            "When someone tells a story (the 'donkey'), your witty addition is the 'tail' \u2014 a comment that amplifies the story's primary emotion. It makes the teller feel heard and turns their story into something you created together. Paired with the 1:1:1 method: a good story reduces to (1) one action, (2) one reaction, and (3) one emotion to evoke.",
          task: "Identify the story's ONE primary emotion, then add a 'tail' that amplifies exactly that \u2014 keeping the spotlight on the teller.",
          method: [
            "Listen for the ONE primary emotion the teller wants to convey in the situation ({subj}).",
            "Resist hijacking with your own story.",
            "Add a short 'tail' \u2014 a comment or comparison that magnifies that exact emotion.",
            "Keep the spotlight on them; your line should make THEIR story better."
          ],
          outputs: [
            "They describe chaos at {subj}: \u201cSo basically it was less an event and more a hostage situation with snacks?\u201d",
            "They're proud of something from {subj}: \u201cSo what you're telling me is you basically won a beauty pageant and a Nobel in the same afternoon.\u201d",
            "They're frustrated by {subj}: \u201cThe universe clearly has a personal vendetta \u2014 what did you DO to it?\u201d"
          ],
          examples: [
            "Bob: 'I tripped at the bank and made it rain cash.' Tail: 'Did you think you were Scrooge McDuck for a second?'",
            "Sabrina: 'The company president remembered me!' Tail: 'So basically you won a beauty pageant.'",
            "Friend: 'my flight got cancelled twice.' Tail: 'the airline has a personal vendetta \u2014 what did you do to them?'"
          ],
          drills: [
            "Next three stories you hear, name the ONE primary emotion, then craft a tail that amplifies it.",
            "1:1:1 reps: retell a recent event in exactly one action, one reaction, one emotion.",
            "Practice 'assist, don't hijack': add a tail that keeps the spotlight on the teller."
          ],
          models: [
            "Give people the floor and gild it \u2014 they'll love you for amplifying their story.",
            "The tail serves the donkey: your line makes THEIR story better, not steals it.",
            "Simplicity lands \u2014 one action, one reaction, one emotion beats an overloaded anecdote."
          ],
          deepDive: [
            "Learn: This is the empathy-plus-wit move that makes people adore talking to you. Most people either stay silent or hijack with their own story; amplifying the teller's emotion is rare and deeply flattering, and it builds a private bond ('you get me').",
            "Develop: Train emotion-detection first \u2014 practice naming the single feeling behind any story you hear. Then build tails: comparisons and hyperbole that inflate that feeling. The 1:1:1 method keeps your own stories tight enough to invite tails back.",
            "Apply: In friendships, dating, and networking, being a great 'assist' partner makes conversations feel co-created and memorable. People associate the good feeling of being heard-and-amplified directly with you."
          ],
          related: [
            { track: "comedy", id: "comic-throughline", why: "The 1:1:1 method is a micro-throughline (action \u2192 reaction \u2192 emotion) for one story." },
            { track: "banter", id: "flow-like-a-river", why: "Pinning the tail is how you reward the flow once someone opens up." },
            { track: "communication", id: "control-the-mood", why: "Amplifying a story's emotion is mood-setting through vivid, felt language." }
          ]
        }
      ]
    }
  };

  CONTENT._order = ["comedy", "communication", "banter"];

  CONTENT.getConcept = function (track, id) {
    var t = CONTENT[track];
    if (!t) return null;
    for (var i = 0; i < t.concepts.length; i++) if (t.concepts[i].id === id) return t.concepts[i];
    return null;
  };

  CONTENT.conceptLink = function (track, id) {
    // relative to /modules/<track>/ pages and to root differ; callers pass base.
    return "modules/" + track + "/concept.html?c=" + id;
  };

  CONTENT.allConcepts = function () {
    var out = [];
    CONTENT._order.forEach(function (tid) {
      CONTENT[tid].concepts.forEach(function (c) {
        out.push({ track: tid, id: c.id, name: c.name, page: c.page, book: CONTENT[tid].book });
      });
    });
    return out;
  };

  global.CM_CONTENT = CONTENT;
})(window);
