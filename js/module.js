/* =============================================================================
 * module.js  —  Track OVERVIEW renderer.
 *
 * Each module page sets  window.CM_TRACK = "comedy" | "communication" | "banter"
 * before loading this script. The overview lists every concept in the track as
 * a card that links to its own DEDICATED page (concept.html?c=<id>), where the
 * full lesson, deep-dive, related skills and the 300-example interactive
 * simulator live. Classic script; file:// friendly.
 * ========================================================================== */
(function (global) {
  "use strict";
  var C = global.CM_CONTENT;
  var STORE = global.CM_STORE;
  var ICON = global.CM_ICON || {};

  function init() {
    var tid = global.CM_TRACK;
    var track = C[tid];
    if (!track) return;
    document.documentElement.style.setProperty("--accent", track.accent);

    var chapCount = (track.chapters && track.chapters.length) || 0;
    setText("modEyebrow", "Track \u2014 " + track.short);
    setText("modTitle", track.title);
    setHTML("modSrc",
      "Source: <strong>" + track.book + "</strong> by " + track.author +
      " &middot; " + (chapCount ? chapCount + " chapters &middot; " : "") +
      track.concepts.length + " skills &middot; " +
      (track.concepts.length * 300).toLocaleString() + " interactive examples");
    document.title = track.short + " \u2014 Conversational Mastery";

    if (chapCount) renderByChapter(track);
    else renderCards(track, track.concepts, 0);
  }

  // Build one skill card (index n is 1-based global order for the number badge).
  function card(track, c, n) {
    var snippet = (c.breakdown || "").length > 165
      ? c.breakdown.slice(0, 163) + "\u2026" : (c.breakdown || "");
    var relCount = (c.related || []).length;
    return '' +
      '<a class="concept-card" href="concept.html?c=' + c.id + '" style="--accent:' + track.accent + '">' +
        '<div class="cc-top">' +
          '<span class="cc-num">' + (n < 10 ? "0" : "") + n + '</span>' +
          '<span class="cc-cite">' + (ICON.book || "") + c.page + '</span>' +
        '</div>' +
        '<h3>' + c.name + '</h3>' +
        '<p class="cc-snip">' + snippet + '</p>' +
        '<div class="cc-foot">' +
          '<span class="cc-badge">300 examples</span>' +
          '<span class="cc-badge">Simulator</span>' +
          (relCount ? '<span class="cc-badge">' + relCount + ' linked skills</span>' : '') +
          '<span class="cc-go">Open lesson ' + (ICON.arrow || "\u2192") + '</span>' +
        '</div>' +
      '</a>';
  }

  // Grouped rendering: chapter of the book -> skills within that chapter.
  function renderByChapter(track) {
    var host = document.getElementById("conceptGrid");
    if (!host) return;
    host.className = "chapter-list";
    var byId = {};
    track.concepts.forEach(function (c) { byId[c.id] = c; });
    var n = 0;
    host.innerHTML = track.chapters.map(function (ch) {
      var skills = (ch.skills || []).map(function (id) { return byId[id]; }).filter(Boolean);
      if (!skills.length) return "";
      var cards = skills.map(function (c) { n++; return card(track, c, n); }).join("");
      return '' +
        '<section class="chapter" style="--accent:' + track.accent + '">' +
          '<div class="chapter-head">' +
            '<span class="chapter-num">Chapter ' + ch.n + '</span>' +
            '<h2>' + ch.title + '</h2>' +
            (ch.page ? '<span class="chapter-page">' + (ICON.book || "") + ch.page + '</span>' : '') +
            (ch.blurb ? '<p class="chapter-blurb">' + ch.blurb + '</p>' : '') +
            '<span class="chapter-count">' + skills.length + ' skill' + (skills.length > 1 ? 's' : '') + '</span>' +
          '</div>' +
          '<div class="concept-grid">' + cards + '</div>' +
        '</section>';
    }).join("");
  }

  function renderCards(track, list, offset) {
    var host = document.getElementById("conceptGrid");
    if (!host) return;
    host.innerHTML = list.map(function (c, i) {
      return card(track, c, (offset || 0) + i + 1);
    }).join("");
  }

  function setText(id, t) { var el = document.getElementById(id); if (el) el.textContent = t; }
  function setHTML(id, t) { var el = document.getElementById(id); if (el) el.innerHTML = t; }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})(window);
