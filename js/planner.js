/* =============================================================================
 * planner.js  —  Algorithmic, interest-weighted planning engine.
 *
 *   A. generateDailyChallenge(prefs)  -> proportional 60/30/10 daily block
 *   B. generateMasterPlan(prefs)      -> 12-week, 3-phase mastery roadmap
 *
 * "prefs" is an ordered array of track ids, HIGHEST interest first, e.g.
 *   ["banter", "comedy", "communication"]
 *
 * Depends on window.CM_CONTENT (concepts) and window.CM_QUESTIONS (prompts).
 * Classic script, exposed as window.CM_PLANNER.
 * ========================================================================== */
(function (global) {
  "use strict";

  var C = global.CM_CONTENT;
  var Q = global.CM_QUESTIONS;

  function trackMeta(id) {
    return { id: id, name: C[id].short, book: C[id].book, accent: C[id].accent };
  }

  function pick(arr, n, rng) {
    var a = arr.slice(), out = [];
    for (var i = 0; i < n && a.length; i++) {
      var j = Math.floor((rng ? rng() : Math.random()) * a.length);
      out.push(a.splice(j, 1)[0]);
    }
    return out;
  }

  function rngFrom(seed) {
    var a = seed >>> 0;
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* ---------------------------------------------------------------------------
   * A. DAILY CHALLENGE  — weighted 60% / 30% / 10% by preference order.
   * Produces a fixed-size block of concrete tasks; each task references a real
   * concept and a real practice prompt drawn from that track's question bank.
   * ------------------------------------------------------------------------ */
  function generateDailyChallenge(prefs, opts) {
    opts = opts || {};
    var total = opts.total || 6;                 // total tasks in the block
    // seed by calendar day so "today's challenge" is stable across reloads
    var seed = opts.seed != null ? opts.seed : dayNumber() ^ hash(prefs.join(","));
    var rng = rngFrom(seed);

    // 60/30/10 → convert to integer task counts that sum to `total`.
    var weights = [0.6, 0.3, 0.1];
    var counts = weights.map(function (w) { return Math.round(w * total); });
    // fix rounding drift
    var drift = total - counts.reduce(function (s, x) { return s + x; }, 0);
    counts[0] += drift;
    if (counts[2] < 1 && total >= 3) { counts[2] = 1; counts[0]--; } // always seed lowest

    var tasks = [];
    prefs.forEach(function (tid, i) {
      var n = counts[i] || 0;
      var concepts = pick(C[tid].concepts, Math.min(n, C[tid].concepts.length), rng);
      // if we need more tasks than distinct concepts, allow repeats of concepts
      while (concepts.length < n) concepts.push(C[tid].concepts[Math.floor(rng() * C[tid].concepts.length)]);
      var bank = Q.getBank(tid);
      concepts.forEach(function (concept) {
        var prompt = bank[Math.floor(rng() * bank.length)];
        tasks.push({
          track: tid,
          trackName: C[tid].short,
          accent: C[tid].accent,
          concept: concept.name,
          conceptId: concept.id,
          weightLabel: ["Primary (High)", "Secondary (Medium)", "Seed (Low)"][i],
          prompt: prompt ? prompt.prompt : "Practice this concept in your next conversation.",
          book: C[tid].book,
          page: concept.page,
          source: concept.source,
          link: "modules/" + tid + "/concept.html?c=" + concept.id
        });
      });
    });

    return {
      date: new Date().toISOString().slice(0, 10),
      seed: seed,
      prefs: prefs.slice(),
      distribution: { high: counts[0], medium: counts[1], low: counts[2] },
      tasks: tasks
    };
  }

  /* ---------------------------------------------------------------------------
   * B. LONG-TERM MASTER PLAN — 12 weeks across 3 phases.
   *
   * The Mix Rule: every week blends concepts from ALL three tracks.
   * Preference-driven focus:
   *   Phase 1 (wk 1-4)  : ~65% HIGH interest  + seed medium/low
   *   Phase 2 (wk 5-8)  : ~65% MEDIUM interest + deep-dive LOW + maintain high
   *   Phase 3 (wk 9-12) : focus LOW interest    + integration combo challenges
   * ------------------------------------------------------------------------ */
  function generateMasterPlan(prefs, opts) {
    opts = opts || {};
    var seed = opts.seed != null ? opts.seed : hash(prefs.join(","));
    var rng = rngFrom(seed);

    var high = prefs[0], medium = prefs[1], low = prefs[2];

    // rotating pools of concepts per track so weeks don't repeat concepts
    var pools = {};
    prefs.forEach(function (t) { pools[t] = shuffleArr(C[t].concepts.slice(), rng); });
    var cursor = { comedy: 0, communication: 0, banter: 0 };
    function next(tid) {
      var pool = pools[tid];
      var c = pool[cursor[tid] % pool.length];
      cursor[tid]++;
      return {
        track: tid, trackName: C[tid].short, accent: C[tid].accent,
        id: c.id, name: c.name, book: C[tid].book,
        page: c.page, source: c.source,
        link: "modules/" + tid + "/concept.html?c=" + c.id
      };
    }

    var phases = [
      {
        n: 1, name: "Foundation Phase", focus: high,
        blurb: "Build a strong base in your highest-interest track while seeding the other two.",
        // per-week concept mix (track id per slot)
        mix: [high, high, high, medium, low]
      },
      {
        n: 2, name: "Acceleration Phase", focus: medium,
        blurb: "Shift the core to your medium track, deep-dive the lowest, and maintain the first.",
        mix: [medium, medium, medium, low, high]
      },
      {
        n: 3, name: "Integration Phase", focus: low,
        blurb: "Master your lowest-interest track and fuse all three with combination challenges.",
        mix: [low, low, medium, high, "combo"]
      }
    ];

    var weeks = [];
    var weekNo = 0;
    phases.forEach(function (phase) {
      for (var w = 0; w < 4; w++) {
        weekNo++;
        var concepts = [];
        phase.mix.forEach(function (slot) {
          if (slot === "combo") {
            // an integration challenge merging all three tracks
            var a = next(high), b = next(medium), c = next(low);
            concepts.push({
              track: "combo", trackName: "Integration", accent: "#7c3aed",
              id: "combo-" + weekNo,
              name: "Combo Challenge: fuse " + a.name + " + " + b.name + " + " + c.name,
              book: "All three sources",
              combo: true,
              parts: [a, b, c],
              link: a.link
            });
          } else {
            concepts.push(next(slot));
          }
        });
        weeks.push({
          week: weekNo,
          phase: phase.n,
          phaseName: phase.name,
          focusTrack: phase.focus,
          focusName: C[phase.focus].short,
          blurb: phase.blurb,
          concepts: concepts
        });
      }
    });

    return {
      createdAt: new Date().toISOString(),
      seed: seed,
      prefs: prefs.slice(),
      phaseSummary: phases.map(function (p) {
        return { n: p.n, name: p.name, focus: C[p.focus].short, blurb: p.blurb };
      }),
      weeks: weeks
    };
  }

  function shuffleArr(a, rng) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(rng() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function dayNumber() {
    return Math.floor(Date.now() / 86400000);
  }

  function hash(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  global.CM_PLANNER = {
    generateDailyChallenge: generateDailyChallenge,
    generateMasterPlan: generateMasterPlan,
    trackMeta: trackMeta
  };
})(window);
