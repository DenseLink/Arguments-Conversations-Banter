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
 * Each concept follows the mandated 6-part instructional layout:
 *   1. source     -> Source Citation Rigor (document + page/section)
 *   2. breakdown  -> Concept & Usage Breakdown (what / why / how)
 *   3. examples[] -> Application Examples
 *   4. drills[]   -> Practical Preparation Drills
 *   5. models[]   -> Mental Models & State-of-Mind Reframing
 *   6. (simulator) -> served dynamically from questions.js by track id
 *
 * Exposed as the global  window.CM_CONTENT  (classic script, no ES modules,
 * so the app runs by double-clicking index.html straight off the file system).
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
          breakdown:
            "Vorhaus's founding axiom: every reliable laugh sits on top of a truth we all recognize and a pain we all fear. The truth is what makes a joke relatable ('that could be me'); the pain is the discomfort \u2014 embarrassment, loss, death, sex, failure \u2014 that gives it stakes. Psychologically, laughter is a release valve: we discharge the tension of a threatening truth in a safe, shared burst. Execution protocol: (1) name the honest human truth inside your situation, (2) locate the pain attached to it, (3) exaggerate or reframe that pain until the audience recognizes it without being wounded by it.",
          examples: [
            "A clown takes a pie in the face: truth = we are all vulnerable to sudden humiliation; pain = 'there but for the grace of pie go I.'",
            "Traveling-salesman jokes: truth = the salesman wants something badly; pain = he is never going to get it.",
            "\u201cI told my therapist about my fear of abandonment. She left.\u201d \u2014 the truth of a real fear, the pain of it coming true."
          ],
          drills: [
            "Write down the most embarrassing thing that happened to you this week. Underline the universal truth inside it, then the pain. That pair is your raw material.",
            "Take three ordinary complaints ('my commute', 'my inbox', 'my landlord') and, for each, write the one-sentence painful truth beneath it.",
            "Practice the 'that could be me' test: read a joke aloud and check whether the audience shares the truth. If they don't recognize it, it will not land."
          ],
          models: [
            "Reframe pain as generosity: by exposing a shared fear first, you give the room permission to laugh at their own.",
            "Nothing human is off-limits \u2014 only cruelty is. Aim the pain at the shared condition, never at a defenseless individual.",
            "See yourself as the safest target in the room. Self-aimed truth-and-pain lowers everyone's guard instantly."
          ]
        },
        {
          id: "comic-premise",
          name: "The Comic Premise",
          source: "The Comic Toolbox, Ch. on \u201cThe Comic Premise\u201d (pp. ~30\u201348).",
          breakdown:
            "A comic premise is the single 'what if' distortion of reality that a whole piece of comedy grows from \u2014 the one lie the audience agrees to believe so that everything downstream can be funny. It is the engine, not a gag. Why it works: a strong premise generates jokes automatically because every scene simply asks 'given this distortion, what happens next?' Execution: state your premise in one sentence ('What if a mob boss went to therapy?'), then mine the collisions between the distorted world and the normal one.",
          examples: [
            "The Sopranos premise: 'What if a violent mob boss suffered from panic attacks and saw a therapist?' Every episode farms that collision.",
            "Liar Liar premise: 'What if a lawyer physically could not tell a lie for 24 hours?'",
            "Groundhog Day premise: 'What if a cynical man relived the same day until he became a better person?'"
          ],
          drills: [
            "Write ten 'What if...' sentences in five minutes. Do not judge them; volume first, quality later.",
            "Take a normal profession and add one impossible constraint (a surgeon who faints at blood, a hostage negotiator who can't say no).",
            "For your best premise, list five automatic complications it creates. If it generates jokes on its own, it is strong."
          ],
          models: [
            "A premise is a promise. Once you set the distortion, honor its logic ruthlessly \u2014 consistency is what makes absurdity funny.",
            "Think 'engine, not decoration.' If a joke doesn't spring from the premise, it is a stray gag and usually should be cut.",
            "Big lie, small world: the more outrageous the premise, the more ordinary and grounded the reactions around it must be."
          ]
        },
        {
          id: "flaws-humanity",
          name: "Character: Flaws vs. Humanity",
          source: "The Comic Toolbox, Ch. on Comic Characters (pp. ~60\u201380).",
          breakdown:
            "A comic character needs a big, exploitable flaw (vanity, greed, cowardice, cheapness) to generate jokes \u2014 but must also carry enough humanity that we root for them instead of despising them. Vorhaus frames it as a balance: flaw drives the comedy, humanity keeps the audience attached. Too much flaw = a monster we can't stand; too much humanity = a nice person nothing is funny about. Execution: give your character one exaggerated flaw, then one moment of genuine vulnerability that redeems them.",
          examples: [
            "Michael Scott (The Office): flaw = desperate need to be loved; humanity = he genuinely cares about his people.",
            "Basil Fawlty: flaw = snobbish rage; humanity = his hopeless, doomed striving keeps him pitiable rather than hateful.",
            "Scrooge: flaw = miserliness taken to cartoonish extremes; humanity = the wounded child underneath, revealed just enough."
          ],
          drills: [
            "Pick a flaw and dial it to 11 in a one-paragraph character sketch, then add a single humanizing sentence.",
            "Rewrite a person who annoys you as a comic character: exaggerate the flaw, then find the vulnerability that makes them sympathetic.",
            "Take a beloved sitcom character and identify their flaw and their humanity in one line each. Reverse-engineer the balance."
          ],
          models: [
            "Flaw is the accelerator, humanity is the seatbelt. You need both to enjoy the ride.",
            "We laugh hardest at people we also love. Earn the love first.",
            "Your own worst trait, exaggerated and owned, is often your most magnetic comic persona."
          ]
        },
        {
          id: "clash-of-context",
          name: "Clash of Context & The Wildly Inappropriate Response",
          source: "The Comic Toolbox, Chs. on \u201cClash of Context\u201d and \u201cThe Wildly Inappropriate Response.\u201d",
          breakdown:
            "Comedy erupts when two incompatible contexts collide \u2014 a formal frame invaded by a low element, or vice versa. The 'wildly inappropriate response' is the fastest way to force that clash: react to a situation with the emotion or register that absolutely does not belong. Why it works: the brain expects context-appropriate behavior; violating it (safely) produces surprise, and surprise is the seed of laughter. Execution: identify the expected response, then substitute one from an alien context.",
          examples: [
            "A eulogy delivered like a stand-up roast; a toddler's birthday party run like a military briefing.",
            "Reacting to a minor inconvenience (spilled coffee) with operatic, world-ending despair.",
            "Answering a life-or-death emergency with total bureaucratic calm: 'Have you tried turning the building fire off and on again?'"
          ],
          drills: [
            "List five 'high' contexts (funeral, courtroom, wedding) and five 'low' ones (locker room, drive-thru). Randomly pair them and imagine the scene.",
            "Take today's most stressful moment and script a wildly inappropriate calm \u2014 or wildly inappropriate panic \u2014 response.",
            "Practice register-swapping: say a mundane sentence ('pass the salt') as if it were Shakespearean tragedy, then as a sports announcer."
          ],
          models: [
            "Every setting carries invisible rules. Comedy is the art of breaking exactly one of them on purpose.",
            "The bigger the gap between context and response, the bigger the laugh \u2014 as long as the character means it sincerely.",
            "See mismatch everywhere: the funniest option is rarely the appropriate one."
          ]
        },
        {
          id: "rule-of-three",
          name: "The Rule of Three",
          source: "The Comic Toolbox, Ch. on \u201cThe Rule of Three\u201d (comic lists & triples).",
          breakdown:
            "Three is the smallest number that establishes a pattern and then breaks it. In a comic triple, items one and two set an expectation and item three subverts it \u2014 the 'turn.' Why it works: two beats create a rhythm the mind predicts; the third beat betrays the prediction, and the gap is the laugh. Execution: two straight (related, escalating) items, then one that veers into an unrelated or absurd direction, placed last for maximum surprise.",
          examples: [
            "\u201cI need three things from a partner: kindness, honesty, and the ability to reach the top shelf.\u201d",
            "\u201cMy weekend plans: relax, recharge, and reconsider every decision I've made since 2011.\u201d",
            "\u201cThis job requires focus, discipline, and a complete disregard for your own well-being.\u201d"
          ],
          drills: [
            "Write ten triples today. Keep the first two honest and let the third one break the frame.",
            "Take a serious two-item list from your work and add a subversive third item.",
            "Practice placement: the surprise word must be the LAST word of the sentence. Rewrite weak triples so the punch lands at the end."
          ],
          models: [
            "Set, set, subvert. Two to build the road, one to drive it off a cliff.",
            "The audience is a prediction machine; your job is to reward the setup and then betray the prediction.",
            "Brevity is the payload \u2014 trim everything after the third beat; the laugh needs silence to land."
          ]
        },
        {
          id: "comic-throughline",
          name: "The Comic Throughline",
          source: "The Comic Toolbox, Ch. on \u201cThe Comic Throughline.\u201d",
          breakdown:
            "The throughline is the spine of intention that runs through a comic piece \u2014 what the character wants, pursued relentlessly, tying otherwise loose gags into a story. Why it matters: isolated jokes fatigue an audience; a throughline gives momentum and lets earlier jokes pay off later (the callback). Execution: define one clear want for the character, keep raising the obstacles, and route every bit back to that want.",
          examples: [
            "In a scene about a first date, the throughline 'he desperately wants to seem wealthy' organizes every gag around that single lie.",
            "A running want ('get through this meeting without crying') turns random office jokes into an escalating story.",
            "Callbacks: a throwaway line in beat one becomes the punchline in beat ten because the throughline connected them."
          ],
          drills: [
            "State the want of your bit in one sentence beginning 'This character desperately wants to ___.' If you can't, you have gags, not a scene.",
            "Take three unrelated jokes and invent a single want that could chain them into a sequence.",
            "Plant-and-payoff drill: write a small detail early, then bring it back transformed as a later punchline."
          ],
          models: [
            "A want is a magnet \u2014 it pulls scattered jokes into a line.",
            "Escalation is oxygen: the same want must cost more with each beat.",
            "Nothing is wasted in comedy \u2014 an early detail is a loaded gun for a later laugh."
          ]
        },
        {
          id: "sitcom-structure",
          name: "Sitcom Story Structure",
          source: "The Comic Toolbox, Part II \u2014 \u201cThe Toolbox at Work\u201d (story machine & sitcom form).",
          breakdown:
            "Vorhaus lays out the workhorse sitcom shape: a normal world, a disruption that launches the comic engine, escalating complications driven by character flaws, a crisis where the lie collapses, and a resolution restoring (a changed) normal. Often built as A-story / B-story that echo a shared theme. Why it works: structure gives jokes a place to live and pay off; escalation keeps energy climbing. Execution: map want \u2192 obstacle \u2192 complication \u2192 crisis \u2192 button.",
          examples: [
            "A-story: Jerry tries to return a jacket; B-story: George lies about his job \u2014 both echo the theme 'small deceptions spiral.'",
            "The 'liar revealed' engine: a character's convenient lie in Act 1 detonates in Act 3.",
            "Reset ending: the disruption resolves but the character has learned (or comically failed to learn) the lesson."
          ],
          drills: [
            "Outline a 5-beat mini-episode of your own day using want\u2192obstacle\u2192complication\u2192crisis\u2192button.",
            "Watch one sitcom scene and label each beat. Notice where the flaw creates the complication.",
            "Write a B-story that rhymes thematically with your A-story, then find the line that ties them together."
          ],
          models: [
            "Structure is a trellis, not a cage \u2014 it holds the jokes up so they can climb.",
            "Comedy is a machine for making things worse in the funniest possible order.",
            "End on a button: the last beat should snap shut with a laugh, not trail off."
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
          breakdown:
            "Heinrichs distinguishes a fight (aims to win, to dominate) from an argument (aims to win over, to reach agreement or a decision). Persuasion happens constantly and invisibly \u2014 in ads, chats, and your own head. Why it matters: once you see arguments everywhere, you can choose your goal instead of reacting emotionally. Execution: before responding, ask 'Is this a fight or an argument?' A fight has a loser; a good argument has a decision everyone can live with.",
          examples: [
            "A couple 'fighting' over the thermostat is really arguing over comfort, control, and being heard.",
            "An ad doesn't argue that a product is best \u2014 it argues that buying it makes you the person you want to be.",
            "In a meeting, the person who reframes 'who's to blame' into 'what should we do next' has quietly won the argument."
          ],
          drills: [
            "For one day, tally every persuasion attempt aimed at you \u2014 ads, requests, nudges. Awareness is the first tool.",
            "Next disagreement, silently label it 'fight' or 'argument' before you speak, and steer toward argument.",
            "Rewrite a recent conflict as a decision to be reached rather than a battle to be won."
          ],
          models: [
            "The goal of arguing is not to win \u2014 it's to get what you want. Sometimes losing the point wins the goal.",
            "You can win a fight and lose the relationship. Choose the game before you play.",
            "Rhetoric is the water you swim in; opening your eyes turns you from prey into navigator."
          ]
        },
        {
          id: "set-your-goals",
          name: "Set Your Goals: Mood, Mind, Action",
          source: "Thank You for Arguing, Ch. 2 \u2014 \u201cSet Your Goals: Cicero's Lightbulb.\u201d",
          breakdown:
            "Every persuasion has one of three possible goals: change the audience's MOOD (how they feel), change their MIND (what they believe), or change their WILLINGNESS TO ACT (what they'll do). The rookie mistake is aiming for all three at once, or arguing to change minds when you only needed to change a mood. Execution: name your single most important goal first; usually 'get them to want to act' is the real target, and mood is the lever that moves it.",
          examples: [
            "You don't need your spouse to AGREE the dishes matter \u2014 you need them to DO the dishes. Aim at action.",
            "A leader before a hard project changes the team's MOOD (confidence) rather than debating facts.",
            "Marketing rarely changes minds about needs; it changes how you FEEL about a brand, which changes what you buy."
          ],
          drills: [
            "Before your next ask, write one sentence: 'By the end, I want them to ___ (feel / believe / do).' Pick one.",
            "Audit an old failed argument: were you aiming at the wrong goal (mind when you needed action)?",
            "Practice the 'action test': if they felt exactly as you wish but did nothing, did you actually win?"
          ],
          models: [
            "Mood \u2192 Mind \u2192 Action is a ladder; you usually only need the rung you're standing on.",
            "People act on emotion and justify with logic \u2014 so mood is often the shortest path to action.",
            "Clarity of goal is 80% of persuasion; a vague aim produces a vague argument."
          ]
        },
        {
          id: "control-the-tense",
          name: "Control the Tense: Blame, Values, Choice",
          source: "Thank You for Arguing, Ch. 3 \u2014 \u201cControl the Tense: Orphan Annie's Law.\u201d",
          breakdown:
            "Heinrichs maps Aristotle's three argument types onto tenses. PAST tense = blame (forensic / who did it) \u2014 good for courtrooms, terrible for solving problems. PRESENT tense = values (demonstrative / who we are, good vs. bad) \u2014 tends toward tribalism. FUTURE tense = choice (deliberative / what should we do) \u2014 the only tense that leads to a decision. Execution: when an argument stalls in blame or values, deliberately shift it to the future: 'What do we do now?'",
          examples: [
            "Kids arguing 'you started it!' (past) is defused by a parent asking 'what happens next?' (future).",
            "A team stuck blaming a missed deadline moves forward the moment someone asks 'how do we prevent it next sprint?'",
            "Political fights live in present-tense values ('we are / they are') precisely because they aren't meant to be solved."
          ],
          drills: [
            "In your next stuck disagreement, say the literal words 'Going forward, what should we do?' and watch the tense flip.",
            "Label three recent arguments by tense. Notice how many past/present ones never reached a decision.",
            "Rewrite a blame sentence ('you always...') into a future-choice sentence ('next time, let's...')."
          ],
          models: [
            "The future tense is the language of leadership; blame is the language of losing.",
            "You can't decide the past \u2014 you can only decide what comes next.",
            "Whoever controls the tense controls the outcome of the argument."
          ]
        },
        {
          id: "ethos-logos-pathos",
          name: "Soften Them Up: Ethos, Logos, Pathos",
          source: "Thank You for Arguing, Ch. 4 \u2014 \u201cSoften Them Up: Character, Logic, Emotion.\u201d",
          breakdown:
            "Aristotle's three modes of persuasion. ETHOS = argument by character (do they trust you?). LOGOS = argument by logic (does it make sense?). PATHOS = argument by emotion (do they feel it?). Heinrichs's sequencing tip: lead with ethos to earn the right to be heard, use logos to justify, and deploy pathos to actually move people to act. Execution: audit which leg your argument is standing on \u2014 a wobbly argument is usually missing one.",
          examples: [
            "A doctor persuades with ethos ('trust my expertise'), logos ('here's the data'), and pathos ('imagine being healthy at your daughter's wedding').",
            "Charity appeals lean on pathos (one child's story) far more than logos (statistics), because emotion drives donation.",
            "A negotiator first builds ethos by conceding a small point, earning trust before making the logical case."
          ],
          drills: [
            "Take one claim and write three versions: one pure ethos, one pure logos, one pure pathos.",
            "Diagnose a persuasive ad or speech \u2014 which of the three is it mostly using, and what's missing?",
            "Before an important ask, list your ethos assets (why they should trust you) explicitly."
          ],
          models: [
            "Logic gets a nod; emotion gets a decision. You usually need both, in that order.",
            "Ethos is the ticket to the room \u2014 without trust, your logic never gets heard.",
            "The strongest arguments stand on all three legs; find the missing leg and add it."
          ]
        },
        {
          id: "decorum",
          name: "Get Them to Like You: Decorum",
          source: "Thank You for Arguing, Ch. 5 \u2014 \u201cGet Them to Like You: Eminem's Rules of Decorum.\u201d",
          breakdown:
            "Decorum is fitting your argument to your audience's expectations \u2014 matching their language, values, and style so they see you as one of them. It's not about being 'proper'; it's about meeting the audience where they are. Why it works: people are persuaded by those they identify with. Execution: mirror the group's vocabulary and code, show you share their values, and violate their norms only strategically.",
          examples: [
            "Eminem in '8 Mile' wins the rap battle by voicing all the insults about himself first \u2014 perfect decorum for that audience.",
            "A candidate rolls up their sleeves and drops jargon in a factory town; wears a suit and cites data in a boardroom.",
            "A teenager persuades a parent by adopting the parent's own values ('responsibility', 'trust') in the pitch."
          ],
          drills: [
            "Before a pitch, list your audience's three core values and three favorite words; weave them in.",
            "Practice code-switching: deliver the same request to a friend, a boss, and a stranger, adjusting register each time.",
            "Do the 'preempt' move: voice their likely objection about you before they can."
          ],
          models: [
            "Persuasion runs on identity: 'you're one of us' beats 'you're right.'",
            "Fit the tool to the hand \u2014 the most correct argument in the wrong register still fails.",
            "Lower defenses by seeming to want what your audience wants."
          ]
        },
        {
          id: "control-the-mood",
          name: "Control the Mood: Emotional Craft",
          source: "Thank You for Arguing, Ch. 9 \u2014 \u201cControl the Mood: The Aquinas Maneuver.\u201d",
          breakdown:
            "Because people decide on emotion, controlling the room's mood is often decisive. Heinrichs teaches setting mood through vivid, concrete storytelling (make them SEE it), through your own displayed emotion (emotion is contagious), and through simple, sensory language rather than abstraction. Execution: replace abstract claims with a specific image or story that produces the feeling you need before you make your ask.",
          examples: [
            "Instead of 'our response time is slow', say 'a customer waited on hold through her lunch break and hung up hungry and angry.'",
            "A speaker lowers their own voice and slows down to create gravity before a key point.",
            "Charity: not '10,000 affected' but 'meet Amina, who walks six miles for water each morning.'"
          ],
          drills: [
            "Turn one statistic from your work into a single vivid human image.",
            "Practice 'show the feeling you want': record yourself conveying calm confidence, then contagious urgency.",
            "Before persuading, decide the exact mood you need in the room and design one story to create it."
          ],
          models: [
            "Facts inform; images move. Paint the picture, then make the ask.",
            "Emotion is contagious \u2014 the room will catch the feeling you actually project.",
            "The concrete beats the abstract every time the stakes are human."
          ]
        },
        {
          id: "high-ground-framing",
          name: "Gain the High Ground & Persuade on Your Terms",
          source: "Thank You for Arguing, Chs. 11\u201312 \u2014 \u201cAristotle's Favorite Topic\u201d & \u201cThe Sister Frame.\u201d",
          breakdown:
            "Two linked moves. The COMMONPLACE (Aristotle's favorite topic) is a belief your audience already holds; anchoring your argument to a shared commonplace gives you the high ground. FRAMING is defining the terms and context so the argument is fought on ground you chose \u2014 redefine the issue, the words, and the standard of judgment. Execution: find the value your audience won't argue with, plant your flag on it, and name the debate in your own words.",
          examples: [
            "Anchoring to the commonplace 'fairness', a manager reframes a raise request as 'aligning pay with contribution.'",
            "Reframing 'gun control' vs 'gun rights' \u2014 whoever names the debate has already half-won it.",
            "A 'sister frame': shift the comparison ('is this expensive?' \u2192 'compared to the cost of doing nothing?')."
          ],
          drills: [
            "For your next ask, identify one commonplace value the other side already accepts and build on it.",
            "Reframe a losing debate by changing the standard of judgment ('the real question isn't X, it's Y').",
            "Collect the loaded words each side uses for the same thing; choose which frame you'll speak in."
          ],
          models: [
            "The one who frames the question usually wins the answer.",
            "Argue from their beliefs, not yours \u2014 the high ground is the values they already hold.",
            "Don't fight the frame; replace it."
          ]
        },
        {
          id: "spot-fallacies",
          name: "Spot Fallacies: The Seven Deadly Logical Sins",
          source: "Thank You for Arguing, Ch. 15 \u2014 \u201cSpot Fallacies: The Seven Deadly Logical Sins.\u201d",
          breakdown:
            "Heinrichs equips you to detect broken logic so you're neither fooled nor guilty of it. Core fallacies include: false choice (only two options), the straw man (attacking a distorted version), red herring (irrelevant distraction), tautology (circular reasoning), false comparison, ad hominem (attacking the person), and hasty generalization. Execution: when an argument 'feels' wrong, test it \u2014 does the proof actually support the conclusion, or is a trick doing the work?",
          examples: [
            "False choice: 'You're either with us or against us' ignores every middle option.",
            "Straw man: 'You want to cut this budget line, so you must want the whole department to fail.'",
            "Red herring: answering 'why were you late?' with 'well, YOU were late last week.'"
          ],
          drills: [
            "Name-the-fallacy drill: collect three ads or headlines and label the logical sin in each.",
            "In your next debate, silently ask 'does the proof fit the conclusion?' before conceding.",
            "Rewrite one of your own recent arguments to remove a fallacy you spot in it."
          ],
          models: [
            "A fallacy is a magic trick \u2014 once you see the method, it stops working on you.",
            "Attack the argument, never the arguer; the reverse is the tell of a weak case.",
            "'Because I said so' is circular \u2014 authority is not evidence."
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
          breakdown:
            "Witty is a cultivated skill, not a birth gift. The first element is conversational flow \u2014 keeping an easy back-and-forth going. King's foundational trick: never speak in absolutes. Eliminate 'favorite / best / worst / only / absolute' questions, because they pressurize the other person and stall flow. Instead, ask softer, open questions and offer stories. Execution: replace closed 'what's your favorite X?' with 'what's a X you've been into lately?' so answers come easily.",
          examples: [
            "Weak: 'What's your favorite movie?' (pressure). Better: 'Seen anything good lately?' (easy).",
            "Instead of demanding a single 'best trip', ask 'where's somewhere that surprised you?'",
            "Flow rescue: when a topic dies, don't interrogate \u2014 offer a small related story of your own to reignite it."
          ],
          drills: [
            "For one day, ban the word 'favorite' from your questions and rephrase every one as open-ended.",
            "Prepare three 'easy on-ramp' questions you can drop into any lull.",
            "Practice the 2:1 ratio \u2014 for every question you ask, offer one small piece of yourself."
          ],
          models: [
            "Conversation is a river, not an exam \u2014 remove the pressure and it flows on its own.",
            "Ease beats cleverness; a relaxed partner is a witty partner's best material.",
            "You are a host, not an interrogator. Make it easy to answer."
          ]
        },
        {
          id: "vivid-language",
          name: "Vivid Language & Specificity",
          source: "The Art of Witty Banter, Ch. on word choice & mental imagery (pp. ~ mid-book).",
          breakdown:
            "Wit lives in specific, colorful language that paints mental images. Swap flat words ('good', 'bad', 'tired') for vivid ones and analogies. King's move: when a normal adjective appears, reach for a stronger synonym or an 'as ___ as ___' comparison. Why it works: specific imagery makes you more interesting and gives your partner something to riff on. Execution: pre-load a few upgraded words and analogies so they're available in real time.",
          examples: [
            "Flat: 'the food was good.' Vivid: 'that pasta was as good as a warm hug on a bad day.'",
            "Flat: 'traffic was bad.' Vivid: 'traffic was as bad as the seventh circle of hell.'",
            "Flat: 'I'm tired.' Vivid: 'I'm running on the fumes of a fume.'"
          ],
          drills: [
            "Take five words you overuse ('good', 'nice', 'cool') and write two vivid replacements for each.",
            "Analogy reps: complete 'as good as ___' and 'as bad as ___' ten times.",
            "Describe your commute using only concrete, sensory images \u2014 no generic adjectives."
          ],
          models: [
            "Specificity is charisma \u2014 the vivid detail is what people remember and reply to.",
            "Every flat adjective is a missed laugh. Upgrade on the fly.",
            "Give your partner something to grab: a colorful image is a handle for the next line."
          ]
        },
        {
          id: "comic-triple",
          name: "The Comic Triple",
          source: "The Art of Witty Banter, Ch. on the comedic triple (pp. ~254\u2013255).",
          breakdown:
            "King's core mechanical technique: describe something with three adjectives \u2014 two related and one that veers off. The pattern of the first two sets an expectation; the unrelated third throws the audience and produces surprise. Alternatively, two positive descriptors and one highly negative (or vice versa). Execution: X, Y, and Z \u2014 keep X and Y in one lane and steer Z into oncoming traffic, placing the odd one last.",
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
            "The odd item goes last, or the surprise leaks out early.",
            "Relatedness sets the trap; unrelatedness springs it."
          ]
        },
        {
          id: "sarcasm-and-irony",
          name: "Sarcasm & Irony",
          source: "The Art of Witty Banter, Ch. on sarcasm & irony (pp. ~254\u2013255).",
          breakdown:
            "Sarcasm = saying the opposite of what you mean, usually to make light fun; irony = when the outcome is the opposite of what's expected. King's caution: sarcasm without warmth reads as hostility, so it must be delivered with obvious playfulness and clearly good intent, or paired with body language and tone that signal you're joking. Execution: use gentle sarcastic agreement/exaggeration on low-stakes topics, and clearly telegraph the wink.",
          examples: [
            "Friend trips: 'Oh wonderful, gravity's working perfectly today.' (sarcasm, warm tone).",
            "Irony: a fire station burning down; a marriage counselor getting divorced.",
            "Sarcastic agreement: 'Yeah, waking up at 5am is definitely everyone's idea of a good time.'"
          ],
          drills: [
            "Practice tone: say 'great, just what I needed' three ways \u2014 warm, neutral, hostile \u2014 and feel the difference.",
            "Spot five real ironies in your week and phrase each as a one-line observation.",
            "Rewrite a complaint as gentle sarcastic exaggeration instead of a straight gripe."
          ],
          models: [
            "Sarcasm needs a smile behind it \u2014 warmth is the safety catch.",
            "Irony is the universe's own punchline; just point at it.",
            "Aim sarcasm at situations, not at people's soft spots."
          ]
        },
        {
          id: "misdirection-surprise",
          name: "Misdirection & Surprise",
          source: "The Art of Witty Banter, Ch. on misdirection & the unexpected (pp. ~254\u2013256).",
          breakdown:
            "The final and most flexible technique: build an expectation, then violate it. Comedy is fundamentally about surprise, and misdirection engineers it by leading the listener one way and pivoting. This underlies the triple, the unrelated descriptor, and the deadpan non-sequitur. Execution: set a clear expectation with your setup, then deliver a payoff from an unexpected but retrospectively-logical angle.",
          examples: [
            "'I love long romantic walks... to the fridge.'",
            "'I'm not saying I'm Batman, but have you ever seen me and Batman in the same room? ...Yes. Constantly. Never mind.'",
            "Deadpan pivot: 'My therapist says I have a preoccupation with vengeance. We'll see about that.'"
          ],
          drills: [
            "Write five setups and give each two payoffs: one expected, one surprising. Keep the surprising ones.",
            "Practice the 'left turn': start a normal sentence and end it somewhere absurd.",
            "Study a joke you love and locate the exact word where the misdirection turns."
          ],
          models: [
            "No surprise, no laugh \u2014 predictability is the enemy of wit.",
            "Lead them down the garden path, then open a trapdoor.",
            "The best twist is surprising yet, in hindsight, inevitable."
          ]
        },
        {
          id: "agree-and-amplify",
          name: "Agree & Amplify (The Reverse)",
          source: "The Art of Witty Banter, Ch. on playful agreement & exaggeration.",
          breakdown:
            "Instead of defending against a tease or a wild statement, agree with it and exaggerate it to absurdity. This defuses tension, signals unshakable confidence, and turns an attack into shared play. King frames it as collaborating rather than combating \u2014 you both get to laugh and guards drop. Execution: take the premise thrown at you, say 'yes, and...', then inflate it past the point of seriousness.",
          examples: [
            "'You're such a nerd.' \u2192 'A nerd? I'm the reason the mathletes have a restraining order against me.'",
            "'You're always late.' \u2192 'Late? I'm so slow they start meetings in a different time zone for me.'",
            "'Nice dad shoes.' \u2192 'Thanks, I bought them with my AARP discount and a coupon.'"
          ],
          drills: [
            "List five common teases about you and write an amplified agreement for each.",
            "Practice 'yes, and' escalation: partner throws a jab, you accept and inflate three times.",
            "Reframe a genuine insecurity into a self-amplified joke so it can never be used against you."
          ],
          models: [
            "You can't be knocked off a hill you happily jumped off of \u2014 agreement removes the target.",
            "Turn attack into collaboration; you're building a bit together now.",
            "Confidence is agreeing with the joke and making it bigger."
          ]
        },
        {
          id: "pinning-the-tail",
          name: "Pinning the Tail on the Donkey (The 1:1:1 Method)",
          source: "The Art of Witty Banter, Ch. on assisting stories (pp. 238\u2013241, 258\u2013259).",
          breakdown:
            "When someone tells a story (the 'donkey'), your witty addition is the 'tail' \u2014 a comment that amplifies the story's primary emotion. This makes the teller feel heard and turns their story into something you created together. King pairs it with the 1:1:1 method: a good story/reaction reduces to (1) one action, (2) one reaction, and (3) one emotion to be evoked \u2014 simplify, don't over-complicate. Execution: identify the story's main emotion, then add a comment that magnifies exactly that.",
          examples: [
            "Bob: 'I tripped at the bank and made it rain cash.' Tail: 'Did you think you were Scrooge McDuck for a second?'",
            "Sabrina: 'The company president remembered me from the last meeting!' Tail: 'So basically you won a beauty pageant.'",
            "Friend: 'my flight got cancelled twice.' Tail: 'the airline clearly has a personal vendetta \u2014 what did you do to them?'"
          ],
          drills: [
            "Next three stories you hear, name the ONE primary emotion, then craft a tail that amplifies it.",
            "1:1:1 reps: retell a recent event of your own in exactly one action, one reaction, one emotion.",
            "Practice 'assist, don't hijack': add a tail that keeps the spotlight on the teller, not on you."
          ],
          models: [
            "Give people the floor and gild it \u2014 they'll love you for amplifying their story.",
            "The tail serves the donkey: your line should make THEIR story better, not steal it.",
            "Simplicity lands \u2014 one action, one reaction, one emotion beats an overloaded anecdote."
          ]
        }
      ]
    }
  };

  // Handy ordered list of track ids.
  CONTENT._order = ["comedy", "communication", "banter"];

  // Flatten helper: every concept with its track id attached (used by planner).
  CONTENT.allConcepts = function () {
    var out = [];
    CONTENT._order.forEach(function (tid) {
      CONTENT[tid].concepts.forEach(function (c) {
        out.push({ track: tid, id: c.id, name: c.name });
      });
    });
    return out;
  };

  global.CM_CONTENT = CONTENT;
})(window);
