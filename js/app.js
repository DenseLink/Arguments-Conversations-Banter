/* =============================================================================
 * app.js  —  Main orchestrator + localStorage persistence engine, and all
 * wiring for the master dashboard (index.html).
 *
 * State schema (persisted under a single localStorage key):
 *   {
 *     prefs:      ["banter","comedy","communication"],  // high -> low
 *     daily:      { ...challenge, done: { taskIndex: true } },
 *     plan:       { ...masterPlan },
 *     planProgress: { "w<week>-<conceptId>": true },     // checked milestones
 *     sim:        { "<track>-<qid>": true }               // practiced questions
 *   }
 *
 * Classic script; exposed as window.CM_STORE (state API) and auto-inits the
 * dashboard when the DOM is ready and #dashboard exists.
 * ========================================================================== */
(function (global) {
  "use strict";

  var KEY = "cm_platform_state_v1";
  var C = global.CM_CONTENT;
  var P = global.CM_PLANNER;

  /* ----------------------------- STORE ----------------------------------- */
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return defaults();
      var s = JSON.parse(raw);
      return Object.assign(defaults(), s);
    } catch (e) { return defaults(); }
  }
  function defaults() {
    return {
      prefs: ["comedy", "communication", "banter"],
      daily: null,
      plan: null,
      planProgress: {},
      sim: {}
    };
  }
  var state = load();
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  var STORE = {
    get: function () { return state; },
    setPrefs: function (p) { state.prefs = p.slice(); save(); },
    getPrefs: function () { return state.prefs.slice(); },
    setDaily: function (d) { d.done = d.done || {}; state.daily = d; save(); },
    getDaily: function () { return state.daily; },
    toggleDailyTask: function (i) {
      if (!state.daily) return;
      state.daily.done = state.daily.done || {};
      state.daily.done[i] = !state.daily.done[i];
      save();
    },
    setPlan: function (p) { state.plan = p; save(); },
    getPlan: function () { return state.plan; },
    togglePlan: function (k) { state.planProgress[k] = !state.planProgress[k]; save(); },
    isPlanDone: function (k) { return !!state.planProgress[k]; },
    markSim: function (k) { state.sim[k] = true; save(); },
    isSimDone: function (k) { return !!state.sim[k]; },
    simCount: function (track) {
      return Object.keys(state.sim).filter(function (k) { return k.indexOf(track + "-") === 0; }).length;
    },
    reset: function () { state = defaults(); save(); }
  };
  global.CM_STORE = STORE;

  /* --------------------------- SVG ICONS --------------------------------- */
  var ICON = {
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z"/><path d="M9 4v14M15 6v14"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6 9 17l-5-5"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2Z"/><path d="M4 17h14"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    drag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="18" r="1"/></svg>'
  };
  global.CM_ICON = ICON;

  /* ------------------------ DASHBOARD WIRING ----------------------------- */
  function initDashboard() {
    var root = document.getElementById("dashboard");
    if (!root) return; // not on the homepage

    renderPrefEditor();
    renderTrackCards();
    bindButtons();
    renderDaily();
    renderPlan();
    updateStats();
  }

  /* Preference editor: draggable + accessible up/down buttons. */
  function renderPrefEditor() {
    var host = document.getElementById("prefList");
    if (!host) return;
    host.innerHTML = "";
    var prefs = STORE.getPrefs();
    prefs.forEach(function (tid, idx) {
      var t = C[tid];
      var li = document.createElement("li");
      li.className = "pref-item";
      li.draggable = true;
      li.dataset.track = tid;
      li.style.setProperty("--accent", t.accent);
      li.innerHTML =
        '<span class="pref-rank">' + (idx + 1) + '</span>' +
        '<span class="pref-grip" aria-hidden="true">' + ICON.drag + '</span>' +
        '<span class="pref-body"><strong>' + t.short + '</strong>' +
        '<small>' + t.book + '</small></span>' +
        '<span class="pref-move">' +
        '<button class="mini" data-dir="up" aria-label="Move up">\u2191</button>' +
        '<button class="mini" data-dir="down" aria-label="Move down">\u2193</button>' +
        '</span>';
      host.appendChild(li);
    });
    wireDrag(host);
    host.querySelectorAll(".mini").forEach(function (b) {
      b.addEventListener("click", function () {
        var li = b.closest(".pref-item");
        var tid = li.dataset.track;
        var prefs = STORE.getPrefs();
        var i = prefs.indexOf(tid);
        var j = b.dataset.dir === "up" ? i - 1 : i + 1;
        if (j < 0 || j >= prefs.length) return;
        var tmp = prefs[i]; prefs[i] = prefs[j]; prefs[j] = tmp;
        STORE.setPrefs(prefs);
        renderPrefEditor();
        flash("Preferences updated \u2014 regenerate to apply.");
      });
    });
  }

  function wireDrag(host) {
    var dragEl = null;
    host.querySelectorAll(".pref-item").forEach(function (li) {
      li.addEventListener("dragstart", function () { dragEl = li; li.classList.add("dragging"); });
      li.addEventListener("dragend", function () {
        li.classList.remove("dragging");
        var order = Array.prototype.map.call(host.querySelectorAll(".pref-item"), function (x) { return x.dataset.track; });
        STORE.setPrefs(order);
        renderPrefEditor();
      });
      li.addEventListener("dragover", function (e) {
        e.preventDefault();
        var after = getAfter(host, e.clientY);
        if (after == null) host.appendChild(dragEl);
        else host.insertBefore(dragEl, after);
      });
    });
  }
  function getAfter(host, y) {
    var els = Array.prototype.slice.call(host.querySelectorAll(".pref-item:not(.dragging)"));
    return els.reduce(function (closest, child) {
      var box = child.getBoundingClientRect();
      var offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) return { offset: offset, element: child };
      return closest;
    }, { offset: -Infinity }).element || null;
  }

  function renderTrackCards() {
    var host = document.getElementById("trackCards");
    if (!host) return;
    var links = { comedy: "modules/comedy/index.html", communication: "modules/communication/index.html", banter: "modules/banter/index.html" };
    host.innerHTML = "";
    C._order.forEach(function (tid) {
      var t = C[tid];
      var a = document.createElement("a");
      a.className = "track-card";
      a.href = links[tid];
      a.style.setProperty("--accent", t.accent);
      a.innerHTML =
        '<div class="tc-top">' + ICON.book + '<span class="tc-count">' + t.concepts.length + ' concepts \u00b7 300 drills</span></div>' +
        '<h3>' + t.title + '</h3>' +
        '<p class="tc-book">' + t.book + ' \u2014 ' + t.author + '</p>' +
        '<p class="tc-tag">' + t.tagline + '</p>' +
        '<span class="tc-go">Open module ' + ICON.arrow + '</span>';
      host.appendChild(a);
    });
  }

  function bindButtons() {
    var d = document.getElementById("genDaily");
    if (d) d.addEventListener("click", function () {
      var challenge = P.generateDailyChallenge(STORE.getPrefs(), { total: 6 });
      STORE.setDaily(challenge);
      renderDaily();
      flash("New daily challenge generated.");
    });
    var m = document.getElementById("genPlan");
    if (m) m.addEventListener("click", function () {
      var plan = P.generateMasterPlan(STORE.getPrefs());
      STORE.setPlan(plan);
      state.planProgress = {}; save();
      renderPlan();
      flash("12-week master plan generated.");
    });
    var r = document.getElementById("resetAll");
    if (r) r.addEventListener("click", function () {
      if (confirm("Reset all preferences, plans and progress?")) {
        STORE.reset(); initDashboard(); flash("All progress reset.");
      }
    });
  }

  function renderDaily() {
    var host = document.getElementById("dailyBlock");
    if (!host) return;
    var d = STORE.getDaily();
    if (!d) { host.innerHTML = '<p class="empty">No challenge yet. Click <strong>Generate Daily Challenge</strong> to build today\u2019s block.</p>'; updateStats(); return; }
    var dist = d.distribution;
    var html = '<div class="daily-meta"><span class="pill">' + d.date + '</span>' +
      '<span class="pill">High \u00d7' + dist.high + '</span>' +
      '<span class="pill">Medium \u00d7' + dist.medium + '</span>' +
      '<span class="pill">Low \u00d7' + dist.low + '</span></div>';
    html += '<ol class="daily-list">';
    d.tasks.forEach(function (task, i) {
      var done = d.done && d.done[i];
      var cite = task.page || task.book;
      html += '<li class="daily-task' + (done ? ' done' : '') + '" style="--accent:' + task.accent + '">' +
        '<label><input type="checkbox" data-i="' + i + '"' + (done ? ' checked' : '') + '>' +
        '<span class="dt-body">' +
        '<span class="dt-head"><b>' + task.trackName + '</b> \u00b7 ' + task.weightLabel + ' \u00b7 <i>' + task.concept + '</i></span>' +
        '<span class="dt-prompt">' + task.prompt + '</span>' +
        '</span></label>' +
        '<a class="dt-cite" href="' + task.link + '" title="Open the full concept lesson, simulator &amp; 300 examples">' +
        ICON.book + '<span><b>' + cite + '</b><small>Click to learn this concept \u2192</small></span></a>' +
        '</li>';
    });
    html += '</ol>';
    host.innerHTML = html;
    host.querySelectorAll('input[type=checkbox]').forEach(function (cb) {
      cb.addEventListener("change", function () {
        STORE.toggleDailyTask(parseInt(cb.dataset.i, 10));
        cb.closest(".daily-task").classList.toggle("done", cb.checked);
        updateStats();
      });
    });
    updateStats();
  }

  function renderPlan() {
    var host = document.getElementById("planBlock");
    if (!host) return;
    var plan = STORE.getPlan();
    if (!plan) { host.innerHTML = '<p class="empty">No roadmap yet. Click <strong>Generate Long-Term Master Plan</strong> to build your 12-week timeline.</p>'; return; }

    var html = '<div class="phase-legend">';
    plan.phaseSummary.forEach(function (p) {
      html += '<div class="phase-chip p' + p.n + '"><b>Phase ' + p.n + ': ' + p.name + '</b><span>Focus: ' + p.focus + '</span><small>' + p.blurb + '</small></div>';
    });
    html += '</div><div class="timeline">';

    plan.weeks.forEach(function (wk) {
      var items = wk.concepts.map(function (c) {
        var key = "w" + wk.week + "-" + c.id;
        var done = STORE.isPlanDone(key);
        var cite = c.combo ? c.book : (c.page || c.book);
        var link = c.link || (c.track && c.track !== "combo" ? "modules/" + c.track + "/concept.html?c=" + c.id : null);
        var citeHtml = link
          ? '<a class="tl-cite" href="' + link + '" title="Open the full concept lesson">' + ICON.book + cite + ' \u2192</a>'
          : '<span class="tl-cite plain">' + ICON.book + cite + '</span>';
        return '<li class="' + (done ? 'done' : '') + (c.combo ? ' combo' : '') + '" style="--accent:' + c.accent + '">' +
          '<label><input type="checkbox" data-key="' + key + '"' + (done ? ' checked' : '') + '>' +
          '<span><em>' + c.trackName + '</em> ' + c.name + '</span></label>' +
          citeHtml + '</li>';
      }).join("");
      html += '<div class="tl-week p' + wk.phase + '">' +
        '<div class="tl-head"><span class="tl-no">Week ' + wk.week + '</span>' +
        '<span class="tl-phase">Phase ' + wk.phase + ' \u00b7 ' + wk.phaseName + '</span>' +
        '<span class="tl-focus">Focus: ' + wk.focusName + '</span></div>' +
        '<ul class="tl-items">' + items + '</ul>' +
        '<div class="tl-bar"><span></span></div></div>';
    });
    html += '</div>';
    host.innerHTML = html;

    host.querySelectorAll('input[type=checkbox]').forEach(function (cb) {
      cb.addEventListener("change", function () {
        STORE.togglePlan(cb.dataset.key);
        cb.closest("li").classList.toggle("done", cb.checked);
        updateWeekBars();
        updateStats();
      });
    });
    updateWeekBars();
  }

  function updateWeekBars() {
    document.querySelectorAll(".tl-week").forEach(function (wk) {
      var boxes = wk.querySelectorAll('input[type=checkbox]');
      var done = wk.querySelectorAll('input:checked').length;
      var pct = boxes.length ? Math.round(done / boxes.length * 100) : 0;
      var bar = wk.querySelector(".tl-bar span");
      if (bar) bar.style.width = pct + "%";
    });
  }

  function updateStats() {
    var host = document.getElementById("statBar");
    if (!host) return;
    var d = STORE.getDaily();
    var dailyDone = d && d.done ? Object.keys(d.done).filter(function (k) { return d.done[k]; }).length : 0;
    var dailyTotal = d ? d.tasks.length : 0;
    var plan = STORE.getPlan();
    var planTotal = 0, planDone = 0;
    if (plan) plan.weeks.forEach(function (w) { w.concepts.forEach(function (c) { planTotal++; if (STORE.isPlanDone("w" + w.week + "-" + c.id)) planDone++; }); });
    var sim = STORE.simCount("comedy") + STORE.simCount("communication") + STORE.simCount("banter");
    var totalEx = 0;
    C._order.forEach(function (tid) { totalEx += C[tid].concepts.length * 300; });
    host.innerHTML =
      stat(dailyDone + "/" + dailyTotal, "Daily tasks done") +
      stat(planDone + "/" + planTotal, "Milestones complete") +
      stat(sim + "", "Examples practiced") +
      stat(totalEx.toLocaleString(), "Interactive examples");
  }
  function stat(v, l) { return '<div class="stat"><span class="stat-v">' + v + '</span><span class="stat-l">' + l + '</span></div>'; }

  var flashTimer = null;
  function flash(msg) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg; el.classList.add("show");
    clearTimeout(flashTimer);
    flashTimer = setTimeout(function () { el.classList.remove("show"); }, 2600);
  }
  global.CM_FLASH = flash;

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initDashboard);
  else initDashboard();
})(window);
