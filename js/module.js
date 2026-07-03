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

    setText("modEyebrow", "Track \u2014 " + track.short);
    setText("modTitle", track.title);
    setHTML("modSrc",
      "Source: <strong>" + track.book + "</strong> by " + track.author +
      " &middot; " + track.concepts.length + " concepts &middot; " +
      (track.concepts.length * 300).toLocaleString() + " interactive examples");
    document.title = track.short + " \u2014 Conversational Mastery";

    renderCards(track);
  }

  function renderCards(track) {
    var host = document.getElementById("conceptGrid");
    if (!host) return;
    host.innerHTML = track.concepts.map(function (c, i) {
      var practiced = STORE ? STORE.simCount(track.id + "-" + c.id) : 0;
      var snippet = c.breakdown.length > 180 ? c.breakdown.slice(0, 178) + "\u2026" : c.breakdown;
      var relCount = (c.related || []).length;
      return '' +
        '<a class="concept-card" href="concept.html?c=' + c.id + '" style="--accent:' + track.accent + '">' +
          '<div class="cc-top">' +
            '<span class="cc-num">' + (i + 1 < 10 ? "0" : "") + (i + 1) + '</span>' +
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
    }).join("");
  }

  function setText(id, t) { var el = document.getElementById(id); if (el) el.textContent = t; }
  function setHTML(id, t) { var el = document.getElementById(id); if (el) el.innerHTML = t; }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})(window);
