/* =============================================================================
 * concept.js  —  Dedicated per-concept lesson page renderer.
 *
 * URL contract:  modules/<track>/concept.html?c=<conceptId>
 *   window.CM_TRACK is set by the page to the track id.
 *   ?c=<conceptId>  selects which concept to render.
 *
 * Renders, top to bottom:
 *   1. Header + source citation + page badge
 *   2. Concept & Usage Breakdown
 *   3. Deep Dive: Learn / Develop / Apply  (self-study teaching)
 *   4. The Method  (ordered execution protocol)
 *   5. Signature Examples  (hand-picked from the source)
 *   6. Practical Preparation Drills
 *   7. Mental Models & Reframing
 *   8. Related Skills  (cross-links to complementary concept pages)
 *   9. Interactive Example Simulator  (300 examples, each expandable to a
 *      step-by-step breakdown ending in a concrete model output)
 *
 * Depends on CM_CONTENT, CM_EXAMPLES, CM_STORE, CM_ICON, CM_FLASH.
 * Classic script; runs from file://.
 * ========================================================================== */
(function (global) {
  "use strict";
  var C = global.CM_CONTENT;
  var EX = global.CM_EXAMPLES;
  var STORE = global.CM_STORE;
  var ICON = global.CM_ICON || {};

  var PAGE_SIZE = 20;
  var st = { track: null, concept: null, examples: [], page: 0, filter: "" };

  function qs(name) {
    var m = new RegExp("[?&]" + name + "=([^&]+)").exec(location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g, " ")) : null;
  }

  function init() {
    var tid = global.CM_TRACK;
    var track = C[tid];
    if (!track) return;
    var cid = qs("c") || (track.concepts[0] && track.concepts[0].id);
    var concept = C.getConcept(tid, cid);
    if (!concept) {
      // graceful fallback: send back to overview
      var root = document.getElementById("conceptRoot");
      if (root) root.innerHTML = '<p class="empty">Concept not found. <a href="index.html">Back to module overview</a>.</p>';
      return;
    }
    st.track = tid; st.concept = concept;
    document.documentElement.style.setProperty("--accent", track.accent);
    document.title = concept.name + " \u2014 " + track.short;

    renderHeader(track, concept);
    renderLesson(track, concept);
    renderRelated(track, concept);
    initSimulator(track, concept);
  }

  /* ------------------------------- HEADER -------------------------------- */
  function renderHeader(track, c) {
    setText("cEyebrow", track.short + " \u2014 Concept lesson");
    setText("cTitle", c.name);
    setHTML("cCite",
      (ICON.book || "") + '<span><b>' + c.page + '</b><small>' + c.source + '</small></span>');
    // build the in-track "other concepts" quick nav
    var nav = document.getElementById("cSiblingNav");
    if (nav) {
      nav.innerHTML = track.concepts.map(function (x) {
        return '<a href="concept.html?c=' + x.id + '"' + (x.id === c.id ? ' class="active"' : '') + '>' + x.name + '</a>';
      }).join("");
    }
  }

  /* ------------------------------- LESSON -------------------------------- */
  function renderLesson(track, c) {
    var host = document.getElementById("cLesson");
    if (!host) return;
    var html = "";

    html += block("Concept &amp; Usage Breakdown",
      '<p class="c-breakdown">' + c.breakdown + '</p>');

    // Deep Dive — Learn / Develop / Apply
    if (c.deepDive && c.deepDive.length) {
      html += '<div class="c-block deepdive"><h4><span class="num">' + (ICON.spark || "") + '</span>Deep Dive \u2014 Learn, Develop &amp; Apply</h4><div class="dd-grid">';
      c.deepDive.forEach(function (para) {
        var idx = para.indexOf(":");
        var label = idx > -1 ? para.slice(0, idx) : "Note";
        var text = idx > -1 ? para.slice(idx + 1).trim() : para;
        html += '<div class="dd-card dd-' + label.toLowerCase() + '"><span class="dd-tag">' + label + '</span><p>' + text + '</p></div>';
      });
      html += '</div></div>';
    }

    // The Method
    if (c.method && c.method.length) {
      html += '<div class="c-block"><h4><span class="num">' + (ICON.arrow || "") + '</span>The Method \u2014 Step by Step</h4><ol class="c-method">';
      c.method.forEach(function (m) {
        // strip the {subj}/{ctx} placeholders for the generic teaching view
        var clean = m.replace(/\{subj\}/g, "the moment").replace(/\{ctx\}/g, "the setting");
        html += '<li>' + clean + '</li>';
      });
      html += '</ol></div>';
    }

    html += listBlock("Signature Examples", c.examples);
    html += listBlock("Practical Preparation Drills", c.drills);
    html += listBlock("Mental Models &amp; Reframing", c.models);

    host.innerHTML = html;
  }

  function block(title, body) {
    return '<div class="c-block"><h4>' + title + '</h4>' + body + '</div>';
  }
  // Renders a block only when the list has content (keeps lean skills tidy).
  function listBlock(title, arr) {
    if (!arr || !arr.length) return '';
    return block(title, listHTML(arr));
  }
  function listHTML(arr) {
    return '<ul class="c-list">' + (arr || []).map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul>';
  }

  /* ---------------------------- RELATED SKILLS --------------------------- */
  function renderRelated(track, c) {
    var host = document.getElementById("cRelated");
    if (!host) return;
    if (!c.related || !c.related.length) { host.style.display = "none"; return; }
    var cards = c.related.map(function (r) {
      var rt = C[r.track];
      var rc = C.getConcept(r.track, r.id);
      if (!rt || !rc) return "";
      // cross-track links need ../<track>/, same-track just concept.html
      var href = r.track === track.id ? ("concept.html?c=" + r.id) : ("../" + r.track + "/concept.html?c=" + r.id);
      return '<a class="rel-card" href="' + href + '" style="--accent:' + rt.accent + '">' +
        '<span class="rel-track">' + rt.short + '</span>' +
        '<strong>' + rc.name + '</strong>' +
        '<span class="rel-why">' + r.why + '</span>' +
        '<span class="rel-cite">' + (ICON.book || "") + rc.page + '</span>' +
        '</a>';
    }).join("");
    host.querySelector(".rel-grid").innerHTML = cards;
  }

  /* ------------------------ EXAMPLE SIMULATOR ---------------------------- */
  function initSimulator(track, c) {
    st.examples = EX.getExamples(track.id, c.id);
    st.page = 0;
    st.filter = "";

    updateSimStat();
    renderFeatured();
    renderList();

    bind("simShuffleAll", function () {
      st.examples = EX.shuffle(st.examples);
      st.page = 0;
      renderFeatured();
      renderList();
      flash("Examples reshuffled.");
    });
    bind("simRandom", function () {
      st.featuredIdx = Math.floor(Math.random() * st.examples.length);
      renderFeatured(true);
    });
    bind("simPrevPage", function () { if (st.page > 0) { st.page--; renderList(); scrollToList(); } });
    bind("simNextPage", function () {
      var max = Math.ceil(filtered().length / PAGE_SIZE) - 1;
      if (st.page < max) { st.page++; renderList(); scrollToList(); }
    });
    var search = document.getElementById("simSearch");
    if (search) search.addEventListener("input", function () {
      st.filter = search.value.trim().toLowerCase();
      st.page = 0;
      renderList();
    });
  }

  function filtered() {
    if (!st.filter) return st.examples;
    return st.examples.filter(function (e) {
      return e.scenario.toLowerCase().indexOf(st.filter) > -1 ||
             e.context.toLowerCase().indexOf(st.filter) > -1 ||
             e.output.toLowerCase().indexOf(st.filter) > -1;
    });
  }

  /* Featured "spotlight" example — one big expandable card. */
  function renderFeatured(forceOpen) {
    var host = document.getElementById("simFeatured");
    if (!host) return;
    if (st.featuredIdx == null) st.featuredIdx = 0;
    var e = st.examples[st.featuredIdx];
    host.innerHTML = exampleCardHTML(e, true, forceOpen !== false);
    wireCard(host);
  }

  function renderList() {
    var host = document.getElementById("simList");
    if (!host) return;
    var data = filtered();
    var total = data.length;
    var pages = Math.max(1, Math.ceil(total / PAGE_SIZE));
    if (st.page >= pages) st.page = pages - 1;
    var start = st.page * PAGE_SIZE;
    var slice = data.slice(start, start + PAGE_SIZE);

    host.innerHTML = slice.map(function (e) { return exampleCardHTML(e, false, false); }).join("") ||
      '<p class="empty">No examples match \u201c' + st.filter + '\u201d.</p>';
    wireCard(host);

    setText("simPageInfo", "Showing " + (total ? start + 1 : 0) + "\u2013" + Math.min(start + PAGE_SIZE, total) +
      " of " + total.toLocaleString() + (st.filter ? " matched" : "") + " examples");
    var prev = document.getElementById("simPrevPage");
    var next = document.getElementById("simNextPage");
    if (prev) prev.disabled = st.page <= 0;
    if (next) next.disabled = st.page >= pages - 1;
  }

  function exampleCardHTML(e, featured, open) {
    var key = st.track + "-" + st.concept.id + "-" + e.n;
    var done = STORE && STORE.isSimDone(key);
    var steps = e.steps.map(function (s) {
      return '<li><span class="st-label">' + s.label + '</span><span class="st-text">' + s.text + '</span></li>';
    }).join("");
    return '' +
      '<div class="ex-card' + (featured ? ' featured' : '') + (done ? ' done' : '') + (open ? ' open' : '') + '" data-key="' + key + '" data-n="' + e.n + '">' +
        '<div class="ex-head" role="button" tabindex="0">' +
          '<span class="ex-n">#' + e.n + '</span>' +
          '<span class="ex-scenario">' + e.scenario + '</span>' +
          '<span class="ex-toggle" aria-hidden="true">' + (ICON.arrow || "\u2192") + '</span>' +
        '</div>' +
        '<div class="ex-body">' +
          '<div class="ex-steps-wrap"><h5>Step-by-step breakdown</h5><ol class="ex-steps">' + steps + '</ol></div>' +
          '<div class="ex-output"><h5>Model output \u2014 what you\u2019d actually say</h5><blockquote>' + e.output + '</blockquote></div>' +
          '<div class="ex-actions">' +
            '<button class="btn btn-primary ex-mark"' + (done ? ' disabled' : '') + '>' + (done ? "\u2713 Practiced" : "Mark practiced") + '</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function wireCard(scope) {
    scope.querySelectorAll(".ex-head").forEach(function (h) {
      var toggle = function () { h.parentNode.classList.toggle("open"); };
      h.addEventListener("click", toggle);
      h.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); toggle(); }
      });
    });
    scope.querySelectorAll(".ex-mark").forEach(function (b) {
      b.addEventListener("click", function (ev) {
        ev.stopPropagation();
        var card = b.closest(".ex-card");
        var key = card.dataset.key;
        STORE.markSim(key);
        card.classList.add("done");
        b.textContent = "\u2713 Practiced";
        b.disabled = true;
        updateSimStat();
        flash("Marked as practiced \u2014 great rep!");
      });
    });
  }

  function updateSimStat() {
    var done = STORE ? STORE.simCount(st.track + "-" + st.concept.id) : 0;
    var pct = Math.round(done / 300 * 100);
    setText("simProgress", done + " / 300 practiced");
    var bar = document.getElementById("simBar");
    if (bar) bar.style.width = pct + "%";
  }

  function scrollToList() {
    var el = document.getElementById("simListTop");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function bind(id, fn) { var el = document.getElementById(id); if (el) el.addEventListener("click", fn); }
  function setText(id, t) { var el = document.getElementById(id); if (el) el.textContent = t; }
  function setHTML(id, t) { var el = document.getElementById(id); if (el) el.innerHTML = t; }
  function flash(m) { if (global.CM_FLASH) global.CM_FLASH(m); }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})(window);
