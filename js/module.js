/* =============================================================================
 * module.js  —  Renderer for the three learning-module pages.
 * Each module page sets  window.CM_TRACK = "comedy" | "communication" | "banter"
 * before loading this script; it then renders the 6-part concept layout and
 * the 300-question Solo Practice Simulator for that track.
 * ========================================================================== */
(function (global) {
  "use strict";
  var C = global.CM_CONTENT;
  var Q = global.CM_QUESTIONS;
  var STORE = global.CM_STORE;
  var ICON = global.CM_ICON || {};

  function init() {
    var tid = global.CM_TRACK;
    var track = C[tid];
    if (!track) return;
    document.documentElement.style.setProperty("--accent", track.accent);

    // header
    setText("modEyebrow", "Track \u2014 " + track.short);
    setText("modTitle", track.title);
    setHTML("modSrc", "Source: <strong>" + track.book + "</strong> by " + track.author + " &middot; " + track.concepts.length + " concepts &middot; 300 practice questions");
    document.title = track.short + " \u2014 Conversational Mastery";

    renderNav(track);
    renderConcepts(track);
    initSimulator(track);
    updateSimStat(tid);
  }

  function renderNav(track) {
    var nav = document.getElementById("conceptNav");
    if (!nav) return;
    nav.style.setProperty("--accent", track.accent);
    nav.innerHTML = track.concepts.map(function (c) {
      return '<a href="#' + c.id + '">' + c.name + '</a>';
    }).join("") + '<a href="#simulator">Practice Simulator</a>';
  }

  function renderConcepts(track) {
    var host = document.getElementById("concepts");
    if (!host) return;
    var html = track.concepts.map(function (c) {
      return conceptHTML(c, track.accent);
    }).join("");
    host.innerHTML = html;
  }

  function conceptHTML(c, accent) {
    return '' +
      '<article class="concept" id="' + c.id + '" style="--accent:' + accent + '">' +
        '<h2>' + c.name + '</h2>' +
        block(1, "Source Citation", '<p class="c-source">' + c.source + '</p>') +
        block(2, "Concept &amp; Usage Breakdown", '<p class="c-breakdown">' + c.breakdown + '</p>') +
        block(3, "Application Examples", listHTML(c.examples)) +
        block(4, "Practical Preparation Drills", listHTML(c.drills)) +
        block(5, "Mental Models &amp; Reframing", listHTML(c.models)) +
      '</article>';
  }
  function block(n, title, body) {
    return '<div class="c-block"><h4><span class="num">' + n + '</span>' + title + '</h4>' + body + '</div>';
  }
  function listHTML(arr) {
    return '<ul class="c-list">' + arr.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul>';
  }

  /* -------------------------- 300-question simulator -------------------- */
  var sim = { bank: [], order: [], idx: 0, track: null };

  function initSimulator(track) {
    sim.track = track.id;
    sim.bank = Q.getBank(track.id);
    sim.order = Q.shuffle(sim.bank).map(function (q) { return q; });
    sim.idx = 0;
    renderSimCard();

    bind("simNext", function () { advance(1); });
    bind("simPrev", function () { advance(-1); });
    bind("simShuffle", function () { sim.order = Q.shuffle(sim.bank); sim.idx = 0; renderSimCard(); });
    bind("simDone", function () {
      var q = sim.order[sim.idx];
      STORE.markSim(sim.track + "-" + q.id.split("-q")[1]);
      updateSimStat(sim.track);
      flash("Marked as practiced \u2014 great rep!");
      advance(1);
    });
  }

  function advance(step) {
    sim.idx = (sim.idx + step + sim.order.length) % sim.order.length;
    renderSimCard();
  }

  function renderSimCard() {
    var host = document.getElementById("simCard");
    if (!host) return;
    var q = sim.order[sim.idx];
    var conceptName = "";
    C[sim.track].concepts.forEach(function (c) { if (c.id === q.concept) conceptName = c.name; });
    host.innerHTML =
      '<span class="sim-qnum">Question ' + (sim.idx + 1) + ' of ' + sim.order.length + ' &middot; ' + conceptName + '</span>' +
      '<p class="sim-prompt">' + q.prompt + '</p>';
  }

  function updateSimStat(tid) {
    var done = STORE.simCount(tid);
    var pct = Math.round(done / 300 * 100);
    var lbl = document.getElementById("simProgress");
    if (lbl) lbl.textContent = done + " / 300 practiced";
    var bar = document.getElementById("simBar");
    if (bar) bar.style.width = pct + "%";
  }

  function bind(id, fn) { var el = document.getElementById(id); if (el) el.addEventListener("click", fn); }
  function setText(id, t) { var el = document.getElementById(id); if (el) el.textContent = t; }
  function setHTML(id, t) { var el = document.getElementById(id); if (el) el.innerHTML = t; }
  function flash(m) { if (global.CM_FLASH) global.CM_FLASH(m); }

  // active-link highlight on scroll
  function initScrollSpy() {
    var nav = document.getElementById("conceptNav");
    if (!nav) return;
    var links = Array.prototype.slice.call(nav.querySelectorAll("a"));
    window.addEventListener("scroll", function () {
      var pos = window.scrollY + 150;
      var current = null;
      document.querySelectorAll(".concept, #simulator").forEach(function (sec) {
        if (sec.offsetTop <= pos) current = sec.id;
      });
      links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + current); });
    }, { passive: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { init(); initScrollSpy(); });
  else { init(); initScrollSpy(); }
})(window);
