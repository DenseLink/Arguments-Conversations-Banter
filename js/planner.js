/* =============================================================================
 * planner.js  —  Algorithmic, interest-weighted planning engine.
 *
 *   A. generateDailyChallenge(prefs)  -> proportional 60/30/10 daily block
 *   B. generateMasterPlan(prefs)      -> full-coverage, 3-phase mastery roadmap
 *                                        (scales to cover every skill)
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
   * B. LONG-TERM MASTER PLAN — full-coverage, interest-weighted roadmap.
   *
   * The plan length is NOT fixed. It scales to however many weeks are needed to
   * cover EVERY skill across ALL three tracks at least once (5 skills/week), so
   * a bigger library simply produces a longer roadmap.
   *
   * The Mix Rule: every week blends skills from all three tracks.
   * Preference-driven focus (phases are thirds of the total length):
   *   Phase 1 (Foundation)   : lean HIGH interest   + seed medium/low
   *   Phase 2 (Acceleration) : lean MEDIUM interest + deep-dive low + maintain high
   *   Phase 3 (Integration)  : lean LOW interest     + combo challenges that fuse
   *                            already-learned skills from all three tracks
   * ------------------------------------------------------------------------ */
  var SLOTS_PER_WEEK = 5;

  function generateMasterPlan(prefs, opts) {
    opts = opts || {};
    var seed = opts.seed != null ? opts.seed : hash(prefs.join(","));
    var rng = rngFrom(seed);

    var high = prefs[0], medium = prefs[1], low = prefs[2];

    // shuffled pools of skills per track so the ordering feels fresh
    var pools = {};
    prefs.forEach(function (t) { pools[t] = shuffleArr(C[t].concepts.slice(), rng); });
    var cursor = { comedy: 0, communication: 0, banter: 0 };
    var covered = {};        // "track/id" -> true, real (non-combo) skills only
    var coveredCount = 0;

    var totalConcepts = prefs.reduce(function (s, t) { return s + C[t].concepts.length; }, 0);

    function mk(tid, c) {
      return {
        track: tid, trackName: C[tid].short, accent: C[tid].accent,
        id: c.id, name: c.name, book: C[tid].book,
        page: c.page, source: c.source,
        link: "modules/" + tid + "/concept.html?c=" + c.id
      };
    }

    // Draw the next *uncovered* skill, preferring the requested track. If that
    // track is fully covered, fall back to any track that still has uncovered
    // skills (preference order). Once everything is covered, cycle for review.
    function next(preferred) {
      var order = [preferred].concat(prefs.filter(function (t) { return t !== preferred; }));
      for (var k = 0; k < order.length; k++) {
        var t = order[k], pool = pools[t];
        for (var i = 0; i < pool.length; i++) {
          var idx = (cursor[t] + i) % pool.length;
          var c = pool[idx], key = t + "/" + c.id;
          if (!covered[key]) {
            cursor[t] = idx + 1;
            covered[key] = true; coveredCount++;
            return mk(t, c);
          }
        }
      }
      // all covered — return a review pick from the preferred track
      var rp = pools[preferred];
      var rc = rp[cursor[preferred] % rp.length];
      cursor[preferred]++;
      return mk(preferred, rc);
    }

    function coveredPick(tid) {
      var pool = pools[tid];
      for (var i = 0; i < pool.length; i++) {
        var c = pool[i];
        if (covered[tid + "/" + c.id]) return mk(tid, c);
      }
      return mk(tid, pool[Math.floor(rng() * pool.length)]);
    }

    // Number of weeks needed to touch every skill (5 new skills/week),
    // rounded up to a whole number of 3 equal phases (min 12 for a full arc).
    var weeksNeeded = Math.ceil(totalConcepts / SLOTS_PER_WEEK);
    var phaseLen = Math.max(4, Math.ceil(weeksNeeded / 3));
    var totalWeeks = phaseLen * 3;

    var phaseDefs = [
      { n: 1, name: "Foundation Phase", focus: high,
        blurb: "Build a strong base in your highest-interest track while seeding the other two.",
        mix: [high, high, high, medium, low] },
      { n: 2, name: "Acceleration Phase", focus: medium,
        blurb: "Shift the core to your medium track, deep-dive the lowest, and maintain the first.",
        mix: [medium, medium, medium, low, high] },
      { n: 3, name: "Integration Phase", focus: low,
        blurb: "Master your lowest-interest track and fuse all three with combination challenges.",
        mix: [low, low, medium, high, high] }
    ];

    var weeks = [];
    for (var weekNo = 1; weekNo <= totalWeeks; weekNo++) {
      var phase = phaseDefs[Math.min(2, Math.floor((weekNo - 1) / phaseLen))];
      var concepts = [];
      phase.mix.forEach(function (slot) { concepts.push(next(slot)); });

      // Integration weeks add a combo challenge that fuses already-learned
      // skills from all three tracks (does not consume new coverage).
      if (phase.n === 3) {
        var a = coveredPick(high), b = coveredPick(medium), c = coveredPick(low);
        concepts.push({
          track: "combo", trackName: "Integration", accent: "#7c3aed",
          id: "combo-" + weekNo,
          name: "Combo Challenge: fuse " + a.name + " + " + b.name + " + " + c.name,
          book: "All three sources", combo: true, parts: [a, b, c], link: a.link
        });
      }

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

    return {
      createdAt: new Date().toISOString(),
      seed: seed,
      prefs: prefs.slice(),
      totalWeeks: totalWeeks,
      totalSkills: totalConcepts,
      phaseSummary: phaseDefs.map(function (p) {
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
