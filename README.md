# Conversational Mastery Platform

A standalone, dependency-free educational web application for mastering
conversation across three tracks, built from real source literature:

| Track | Source | Author |
|-------|--------|--------|
| **Comedy** — Comedic Engineering & Structural Humor | *The Comic Toolbox* | John Vorhaus |
| **Communication** — Core Communication Foundations | *Thank You for Arguing* | Jay Heinrichs |
| **Banter** — Conversational Dynamics & Social Mastery | *The Art of Witty Banter* | Patrick King |

## Features
- **Adaptive Planning Engine** on the homepage:
  - Rank the three tracks (drag-and-drop or ↑/↓) to set your interest vector.
  - **Dynamic Daily Challenge** — proportionally weighted **60% / 30% / 10%** across your ranked tracks.
  - **Long-Term Master Plan** — a 12-week, 3-phase roadmap (Foundation → Acceleration → Integration). Every week blends all three sources; phase focus follows your ranking.
  - Interactive progress checkboxes + full **localStorage** persistence.
- **Three learning modules**, each concept presented in a 6-part layout:
  1. Source citation with page/section references
  2. Concept & usage breakdown
  3. Application examples
  4. Practical preparation drills
  5. Mental models & reframing exercises
  6. **300-question interactive practice simulator** (900 unique prompts total)

## Tech
Pure **HTML5 + CSS3 + Vanilla JavaScript (ES6)**. No frameworks, no libraries,
no CDNs, no build step. Native inline SVG icons, system fonts.

## Run
Open `index.html` directly in any modern browser, or serve the folder:
```
python3 -m http.server 8000
```

## Structure
```
├── index.html            # Master dashboard + planning engine
├── css/styles.css        # Design system
├── js/
│   ├── content.js        # Concept knowledge base (6-part layout)
│   ├── questions.js      # 300-question bank generator per track
│   ├── planner.js        # Daily + long-term weighted algorithms
│   ├── app.js            # Orchestrator + localStorage engine
│   └── module.js         # Module page + simulator renderer
└── modules/
    ├── comedy/index.html
    ├── communication/index.html
    └── banter/index.html
```
