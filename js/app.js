// Renders the guide into index.html. All view data comes from Component#renderVals() in guide.js.
(function () {
  "use strict";

  const comp = new Component({ followZoom: 2.6 });
  const $ = function (id) { return document.getElementById(id); };
  let H = [];
  function h(fn) { H.push(fn); return H.length - 1; }
  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  const CHEV3_R = '<svg aria-hidden="true" width="24" height="14" viewBox="0 0 26 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5l6 7-6 7"/><path d="M10 5l6 7-6 7"/><path d="M16 5l6 7-6 7"/></svg>';
  const CHEV3_L = '<svg aria-hidden="true" width="22" height="14" viewBox="0 0 26 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 5l-6 7 6 7"/><path d="M16 5l-6 7 6 7"/><path d="M22 5l-6 7 6 7"/></svg>';
  const CLOCK = '<svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';
  const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4l9 8-9 8"/></svg>';
  const CLOSE = '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  function boxHtml(b) {
    return '<div class="bx" style="' + b.wrap + '"><div class="t" style="' + b.top + '"></div><div class="s" style="' + b.south + '"></div><div class="e" style="' + b.east + '"></div></div>';
  }

  function renderScene(v) {
    const sc = v.scene;
    $("cam1").setAttribute("style", sc.camera);
    $("cam2").setAttribute("style", sc.camera);
    $("plane1").setAttribute("style", sc.planeSize);
    $("plane2").setAttribute("style", sc.planeSize);
    $("slab").innerHTML = boxHtml(sc.slab);

    $("rooms").innerHTML = sc.rooms.map(function (g) {
      const top = g.route
        ? '<button class="t" data-h="' + h(g.pick) + '" aria-label="' + esc(g.aria) + '" style="' + g.top + '"></button>'
        : '<div class="t" style="' + g.top + '"></div>';
      return '<div class="bx" style="' + g.wrap + '">' + top + '<div class="s" style="' + g.south + '"></div><div class="e" style="' + g.east + '"></div></div>';
    }).join("");

    $("props").innerHTML = sc.props.map(boxHtml).join("");

    $("arrows").innerHTML = sc.arrows.map(function (a) {
      return '<div class="arrow ' + a.cls + '" style="' + a.style + '">' + ARROW + "</div>";
    }).join("");

    $("labels").innerHTML = sc.labels.map(function (z) {
      return '<div class="anchor ' + z.cls + '" style="' + z.anchor + '"><div class="bb tag" style="transform: ' + sc.bb + " " + sc.labelScale + " translate(-50%, -100%); " + z.look + '">' + esc(z.text) + "</div></div>";
    }).join("");

    $("markers").innerHTML = sc.markers.map(function (m) {
      return '<div class="anchor" style="' + m.anchor + '"><div class="bb marker" style="transform: ' + sc.bb + " " + sc.labelScale + ' translate(-50%, -100%)"><span>' + esc(m.label) + "</span><span></span></div></div>";
    }).join("");

    $("pins").innerHTML = sc.pins.map(function (p) {
      return '<div class="anchor" style="' + p.anchor + '"><div class="bb pin" style="transform: ' + sc.bb + " " + sc.pinScale + ' translate(-50%, -100%)">' +
        '<div class="pin ' + p.bob + '">' + (p.here ? '<span class="here">' + esc(p.hereText) + "</span>" : "") +
        '<button class="' + p.cls + '" data-h="' + h(p.pick) + '" aria-label="' + esc(p.aria) + '" style="' + p.dot + '">' + esc(p.n) + "</button></div>" +
        '<span class="stem" style="' + p.stem + '"></span><span class="foot"></span></div></div>';
    }).join("");
  }

  function renderControls(v) {
    $("controls").innerHTML =
      '<div class="seg"><button data-h="' + h(v.showF1) + '" aria-pressed="' + v.f1Pressed + '" style="' + v.f1Style + '">' + esc(t("floor1")) + '</button>' +
      '<button data-h="' + h(v.showF2) + '" aria-pressed="' + v.f2Pressed + '" style="' + v.f2Style + '">' + esc(t("floor2")) + '</button></div>' +
      '<button class="btn-ghost" data-h="' + h(v.toggleView) + '" aria-pressed="' + v.overviewPressed + '">' + esc(v.viewLabel) + "</button>";
    renderTools(v);
  }

  // ---------- free map navigation: drag to pan, wheel / pinch to zoom, twist or buttons to rotate ----------
  const ICON = {
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    rotl: '<path d="M4 12a8 8 0 1 0 2.3-5.6"/><path d="M4 4v4h4"/>',
    rotr: '<path d="M20 12a8 8 0 1 1-2.3-5.6"/><path d="M20 4v4h-4"/>',
    center: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>'
  };
  function icon(k) { return '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + ICON[k] + "</svg>"; }
  function curView() { return Object.assign({}, (lastV && lastV.scene.view) || VIEW0); }
  function clampView(v) {
    v.zoom = Math.min(6, Math.max(0.45, v.zoom));
    v.rot = Math.min(45, Math.max(-35, v.rot));
    v.dx = Math.min(180, Math.max(-180, v.dx));
    v.dy = Math.min(220, Math.max(-220, v.dy));
    return v;
  }
  function setView(patch) { comp.setState({ view: clampView(Object.assign(curView(), patch)) }); }
  function renderTools(v) {
    let el = $("maptools");
    if (!el) { el = document.createElement("div"); el.id = "maptools"; el.className = "maptools"; el.setAttribute("role", "group"); el.setAttribute("aria-label", t("moveMap")); $("stage").appendChild(el); }
    const vw = v.scene.view; const moved = vw.dx || vw.dy || vw.zoom !== 1 || vw.rot;
    const b = function (fn, k, label, extra) { return '<button data-h="' + h(fn) + '" aria-label="' + label + '" title="' + label + '"' + (extra || "") + ">" + icon(k) + "</button>"; };
    el.innerHTML =
      b(function () { setView({ zoom: curView().zoom * 1.4 }); }, "plus", t("zoomIn")) +
      b(function () { setView({ zoom: curView().zoom / 1.4 }); }, "minus", t("zoomOut")) +
      b(function () { setView({ rot: curView().rot - 15 }); }, "rotl", t("rotL")) +
      b(function () { setView({ rot: curView().rot + 15 }); }, "rotr", t("rotR")) +
      b(function () { comp.setState({ view: null }); }, "center", moved ? t("recenter") : t("centered"), moved ? ' class="on"' : "");
  }

  const ptrs = new Map();
  let drag = null, suppressClick = false, wheelTimer = 0, rafPending = false;
  function applyCam(view) {
    if (!lastV) return;
    const css = cameraCss(lastV.scene.camBase, view);
    $("cam1").setAttribute("style", css);
    $("cam2").setAttribute("style", css);
  }
  function scheduleCam() {
    if (rafPending) return; rafPending = true;
    requestAnimationFrame(function () { rafPending = false; if (drag) applyCam(drag.view); });
  }
  function twoPointer() {
    const a = Array.from(ptrs.values());
    const dx = a[1].x - a[0].x, dy = a[1].y - a[0].y;
    return { d: Math.hypot(dx, dy) || 1, ang: Math.atan2(dy, dx) * 180 / Math.PI };
  }
  function panBy(view, sx, sy) {
    const stage = $("stage");
    const unit = U * (stage.clientWidth / 100) * lastV.scene.camBase.Z * view.zoom;
    if (!unit) return;
    const x1 = sx / unit, y1 = sy / (unit * Math.cos(TILT * Math.PI / 180));
    const r = (BASE_ROT + view.rot) * Math.PI / 180;
    view.dx -= x1 * Math.cos(r) + y1 * Math.sin(r);
    view.dy -= -x1 * Math.sin(r) + y1 * Math.cos(r);
    clampView(view);
  }
  function startPinch() {
    if (ptrs.size !== 2 || !drag) return;
    const t = twoPointer();
    drag.pinch = { d0: t.d, a0: t.ang, zoom0: drag.view.zoom, rot0: drag.view.rot };
  }
  function bindGestures() {
    const stage = $("stage");
    stage.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      if (e.target.closest(".controls, .maptools")) return;
      ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (!drag) drag = { view: curView(), moved: false, sx: e.clientX, sy: e.clientY, pinch: null };
      startPinch();
    });
    stage.addEventListener("pointermove", function (e) {
      const p = ptrs.get(e.pointerId);
      if (!p || !drag) return;
      const dx = e.clientX - p.x, dy = e.clientY - p.y;
      p.x = e.clientX; p.y = e.clientY;
      if (!drag.moved && (ptrs.size >= 2 || Math.hypot(e.clientX - drag.sx, e.clientY - drag.sy) > 6)) {
        drag.moved = true;
        stage.classList.add("dragging");
        try { stage.setPointerCapture(e.pointerId); } catch (err) {}
      }
      if (!drag.moved) return;
      if (ptrs.size >= 2 && drag.pinch) {
        const t = twoPointer();
        drag.view.zoom = drag.pinch.zoom0 * (t.d / drag.pinch.d0);
        drag.view.rot = drag.pinch.rot0 + (t.ang - drag.pinch.a0);
        clampView(drag.view);
        panBy(drag.view, dx / 2, dy / 2);
      } else {
        panBy(drag.view, dx, dy);
      }
      scheduleCam();
    });
    function end(e) {
      if (!ptrs.has(e.pointerId)) return;
      ptrs.delete(e.pointerId);
      if (ptrs.size === 1) { if (drag) drag.pinch = null; return; }
      if (ptrs.size > 0 || !drag) return;
      const d = drag; drag = null;
      stage.classList.remove("dragging");
      if (d.moved) {
        suppressClick = true;
        setTimeout(function () { suppressClick = false; }, 0);
        comp.setState({ view: d.view });
      }
    }
    stage.addEventListener("pointerup", end);
    stage.addEventListener("pointercancel", end);
    stage.addEventListener("wheel", function (e) {
      if (e.target.closest(".controls, .maptools")) return;
      e.preventDefault();
      const v = drag ? drag.view : curView();
      v.zoom *= Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0015));
      clampView(v);
      stage.classList.add("dragging");
      applyCam(v);
      if (!drag && lastV) lastV.scene.view = v;
      clearTimeout(wheelTimer);
      wheelTimer = setTimeout(function () { stage.classList.remove("dragging"); comp.setState({ view: v }); }, 180);
    }, { passive: false });
  }

  function renderHud(v) {
    const hud = $("hud");
    hud.setAttribute("style", v.hudWrap);
    if (v.hudClosed) {
      hud.innerHTML = '<button class="hudtab lift" data-h="' + h(v.toggleHud) + '" aria-expanded="false" aria-label="' + esc(t("hudShow")) + '">' + CHEV3_L +
        '<span class="dot" style="background:' + v.hereColor + '"></span><span class="v">' + esc(v.hereTab) + "</span></button>";
      return;
    }
    hud.innerHTML = '<div class="hudcard fadein">' +
      '<div style="display:flex;align-items:center;gap:8px"><span class="dot" style="background:' + v.hereColor + '"></span>' +
      '<span class="kicker" style="flex:1 1 auto;min-width:0;color:' + v.eraInk + '">' + esc(v.hereKicker) + "</span>" +
      '<button class="lift" data-h="' + h(v.toggleHud) + '" aria-expanded="true" aria-label="' + esc(t("hudCollapse")) + '" style="flex:0 0 auto;min-width:40px;height:32px;margin:-4px -6px -4px 0;padding:0 4px;border:0;background:transparent;color:#3A352E;cursor:pointer;display:flex;align-items:center;justify-content:center">' + CHEV3_R + "</button></div>" +
      '<div style="display:flex;gap:10px;align-items:flex-start">' +
      (v.hereHasImg ? '<img src="' + v.hereImg + '" alt="" style="width:44px;height:44px;object-fit:cover;flex:0 0 auto;border-radius:2px">' : "") +
      '<div style="display:flex;flex-direction:column;gap:2px;min-width:0"><div class="serif" style="font-size:20px;font-weight:600;line-height:1.1">' + esc(v.hereTitle) + "</div>" +
      '<div style="font-size:13px;color:#3A352E;line-height:1.35">' + esc(v.hereSub) + "</div></div></div>" +
      '<div class="serif" style="font-style:italic;font-size:16px;line-height:1.25">' + esc(v.hereTrend) + "</div>" +
      (v.hereCanOpen ? '<div><button class="lift" data-h="' + h(v.openCurrent) + '" style="min-height:36px;padding:0 12px;margin-top:2px;background:#fff;color:#1C1A17;border:1px solid #1C1A17;border-radius:2px;font-size:14px;font-weight:600;cursor:pointer">' + esc(t("openCard")) + '</button></div>' : "") +
      "</div>";
  }

  function renderNav(v) {
    $("navbar").innerHTML =
      '<button class="btn line lift" data-h="' + h(v.prev) + '"' + (v.atStart ? " disabled" : "") + ' aria-label="' + esc(t("prevStep")) + '" style="padding:0 16px">←<span class="hide-narrow">' + esc(t("previous")) + '</span></button>' +
      '<div aria-live="polite" class="hide-narrow" style="flex:1 1 200px;text-align:center;font-size:14px;color:#3A352E"><strong style="font-weight:600">' + esc(v.progressA) + "</strong> · " + esc(v.progressB) + "</div>" +
      '<button class="btn solid lift" data-h="' + h(v.next) + '"' + (v.atEnd ? " disabled" : "") + ' style="flex:1 1 auto;max-width:420px;background:' + v.eraInk + ";border:1px solid " + v.eraInk + '">' + esc(v.nextLabel) + " →</button>";
  }

  let lastEraIdx = -1;
  function renderEras(v) {
    const nav = $("eras");
    const keep = nav.scrollLeft;
    let curIdx = 0;
    nav.innerHTML = v.eras.map(function (t, i) {
      if (t.ariaCur === "step") curIdx = i;
      return '<button class="lift" data-h="' + h(t.pick) + '" aria-current="' + t.ariaCur + '" style="' + t.style + '">' +
        '<span style="display:flex;align-items:center;gap:8px"><span class="dot" style="' + t.dot + '"></span><span class="num">' + esc(t.num) + "</span></span>" +
        '<span class="nm">' + esc(t.name) + '</span><span class="dt">' + esc(t.dates) + "</span>" +
        '<span class="tm" style="' + t.timeLine + '">' + CLOCK + esc(t.time) + "</span></button>";
    }).join("");
    nav.scrollLeft = keep;
    if (curIdx !== lastEraIdx) {
      const first = lastEraIdx === -1;
      lastEraIdx = curIdx;
      const el = nav.children[curIdx];
      if (el && !first) {
        const target = Math.max(0, el.offsetLeft - nav.offsetLeft - 16);
        if (target < nav.scrollLeft || el.offsetLeft - nav.offsetLeft + el.offsetWidth > nav.scrollLeft + nav.clientWidth) {
          try { nav.scrollTo({ left: target, behavior: "smooth" }); } catch (e) { nav.scrollLeft = target; }
        }
      }
    }
  }

  function tile(w, side, eraInk) {
    const ph = w.hasImg
      ? '<img src="' + w.img + '" alt="" loading="lazy">'
      : '<span class="phtext" style="' + w.phBg + '">' + esc(w.title) + "</span>";
    const badge = side
      ? '<span class="badge" style="height:26px;padding:0 9px;font-size:12px;background:#fff;color:#1C1A17;border:1px dashed #1C1A17">' + esc(w.badge) + "</span>"
      : '<span class="badge" style="' + w.numStyle + '">' + esc(w.n) + "</span>";
    return '<button class="tile" data-h="' + h(w.open) + '" aria-label="' + esc(w.aria) + '" style="' + (side ? "border:1px dashed #A89C86" : w.border) + '">' +
      '<span class="ph">' + ph + badge + "</span>" +
      '<span class="meta"><span class="ti">' + esc(w.title) + '</span><span class="by">' + esc(w.byline) + '</span><span class="gl">' + esc(w.gallery) + "</span></span></button>";
  }

  function renderPanel(v) {
    let html = "";
    if (v.showEra) {
      const er = v.era;
      html = '<div class="cols fadein">' +
        '<section class="col-story" aria-label="' + esc(t("aboutEra")) + '">' +
        '<div style="display:flex;flex-direction:column;gap:4px"><div class="kicker" style="color:' + v.eraInk + '">' + esc(t("eraOf", er.num, er.dates)) + "</div>" +
        '<h2 class="h2">' + esc(er.name) + '</h2><div style="font-size:14px;color:#3A352E">' + esc(er.where) + "</div></div>" +
        '<div class="box"><div class="kicker">' + esc(t("inOneLine")) + '</div><div class="trend">' + esc(er.trend) + "</div>" +
        '<div class="kicker" style="margin-top:8px">' + esc(t("whyLooks")) + '</div><p style="margin:0;text-wrap:pretty">' + esc(er.why) + "</p></div>" +
        '<p style="margin:0;font-size:15px"><strong style="font-weight:600">' + esc(t("gettingThere")) + '</strong> ' + esc(er.walk) + "</p></section>" +
        '<section class="col-works" aria-label="' + esc(t("keyWorks")) + '"><h3 class="kicker" style="margin:0">' + esc(t("onRoute")) + '</h3>' +
        '<div class="grid">' + v.works.map(function (w) { return tile(w, false, v.eraInk); }).join("") + "</div>" +
        (v.hasSide ? '<h3 class="kicker" style="margin:12px 0 0">' + esc(t("meanwhile")) + '</h3><div class="grid">' + v.sides.map(function (w) { return tile(w, true, v.eraInk); }).join("") + "</div>" : "") +
        (v.isOverview ? '<div><button class="btn solid lift" data-h="' + h(v.next) + '" style="background:' + v.eraInk + ";border:1px solid " + v.eraInk + '">' + esc(t("walkStop1")) + '</button></div>' : "") +
        "</section></div>";
    } else if (v.showTrans) {
      const tr = v.tr;
      html = '<section class="trans fadein" aria-label="' + esc(t("betweenEras")) + '">' +
        '<div class="kicker">' + esc(t("betweenKicker", tr.fromNum, tr.toNum)) + "</div>" +
        '<div class="serif" style="display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 12px;font-size:22px;color:#5E574D"><span>' + esc(tr.fromName) + '</span><span aria-hidden="true" style="color:' + v.eraInk + '">⟶</span><span style="color:#1C1A17;font-weight:600">' + esc(tr.toName) + "</span></div>" +
        '<h2 class="serif" style="margin:0;font-size:clamp(30px,4.4vw,48px);font-weight:600;line-height:1.06;text-wrap:balance">' + esc(tr.headline) + "</h2>" +
        '<div class="kicker">' + esc(t("howWhy")) + '</div><ol>' +
        tr.points.map(function (pt) { return '<li><span class="serif" style="flex:0 0 auto;font-size:26px;font-weight:600;line-height:1;color:' + v.eraInk + ';min-width:20px">' + pt.n + '</span><span style="text-wrap:pretty">' + esc(pt.text) + "</span></li>"; }).join("") +
        '</ol><p class="walk"><strong style="font-weight:600">' + esc(t("walkOn")) + '</strong> ' + esc(tr.walk) + "</p>" +
        '<div><button class="btn solid lift" data-h="' + h(v.next) + '" style="background:' + v.eraInk + ";border:1px solid " + v.eraInk + '">' + esc(v.nextLabel) + " →</button></div></section>";
    } else if (v.showEnd) {
      html = '<section class="trans fadein" aria-label="' + esc(t("routeComplete")) + '"><div class="kicker">' + esc(t("routeComplete")) + '</div>' +
        '<h2 class="serif" style="margin:0;font-size:clamp(30px,4.4vw,48px);font-weight:600;line-height:1.06">' + esc(t("endTitle")) + '</h2>' +
        '<p style="margin:0;text-wrap:pretty">' + esc(t("endText")) + '</p>' +
        '<ol class="recap">' + v.recap.map(function (r) { return '<li><span class="dot" style="margin-top:8px;' + r.dot + '"></span><span style="display:flex;flex-direction:column;gap:2px"><strong style="font-weight:600">' + esc(r.num) + " · " + esc(r.name) + '</strong><span class="serif" style="font-style:italic;font-size:19px;line-height:1.25">' + esc(r.trend) + "</span></span></li>"; }).join("") + "</ol>" +
        '<p style="margin:0">' + esc(t("endLeave")) + '</p>' +
        '<div><button class="btn line lift" data-h="' + h(v.restart) + '">' + esc(t("restart")) + '</button></div></section>';
    }
    $("panel").innerHTML = html;
  }

  let drawerWasOpen = false;
  function renderDrawer(v) {
    const d = $("drawer");
    if (!v.drawerOpen) { d.innerHTML = ""; drawerWasOpen = false; return; }
    const c = v.card;
    const art = c.hasImg
      ? '<img src="' + c.img + '" alt="' + esc(c.alt) + '">'
      : '<div class="noimg"><span class="serif" style="font-style:italic;font-size:26px;line-height:1.15">' + esc(c.title) + '</span><span style="font-size:13px;color:#D9D1C1;max-width:300px">' + esc(c.imgNote) + "</span></div>";
    d.innerHTML = '<div class="drawer">' +
      '<button class="scrim" data-h="' + h(v.closeDrawer) + '" aria-label="' + esc(t("closeCard")) + '"></button>' +
      '<aside class="sheet' + (drawerWasOpen ? "" : " slidein") + '" role="dialog" aria-modal="true" aria-label="' + esc(c.title) + '">' +
      '<div class="top"><span class="kicker" style="color:' + c.ink + '">' + esc(c.kicker) + '</span><button class="iconbtn lift" id="drawer-close" data-h="' + h(v.closeDrawer) + '" aria-label="' + esc(t("closeCard")) + '">' + CLOSE + "</button></div>" +
      '<div class="body"><div class="art">' + art + "</div>" +
      '<div class="txt"><div style="display:flex;flex-direction:column;gap:4px"><h2>' + esc(c.title) + '</h2><div style="font-size:15px;color:#3A352E">' + esc(c.byline) + '</div><div style="font-size:13px;color:#5E574D">' + esc(c.medium) + "</div></div>" +
      '<div style="display:flex;flex-wrap:wrap;gap:8px"><span class="chip" style="background:' + c.ink + ';color:#fff">' + esc(c.gallery) + "</span>" +
      (c.hasStatus ? '<span class="chip" style="background:#F4E3B5;color:#4A3A10">' + esc(c.status) + "</span>" : "") + "</div>" +
      '<div style="display:flex;flex-direction:column;gap:4px"><div class="kicker" style="color:' + c.ink + '">' + esc(t("lookFor")) + '</div><p style="margin:0;text-wrap:pretty">' + esc(c.look) + "</p></div>" +
      '<div style="display:flex;flex-direction:column;gap:4px"><div class="kicker" style="color:' + c.ink + '">' + esc(t("story")) + '</div><p style="margin:0;text-wrap:pretty">' + esc(c.context) + "</p></div>" +
      "</div></div>" +
      '<div class="bottom">' +
      (c.onRoute ? '<button class="btn line lift" data-h="' + h(c.prev) + '"' + (c.isFirst ? " disabled" : "") + ' aria-label="' + esc(t("prevWork")) + '" style="padding:0 16px">←</button>' : "") +
      '<button class="btn solid lift" data-h="' + h(c.next) + '" style="flex:1 1 auto;padding:0 16px;background:' + c.ink + ";border:1px solid " + c.ink + '">' + esc(c.nextLabel) + " →</button></div>" +
      "</aside></div>";
    if (!drawerWasOpen) { const btn = $("drawer-close"); if (btn) btn.focus({ preventScroll: true }); }
    drawerWasOpen = true;
  }

  let lastV = null;
  function render() {
    H = [];
    const v = comp.renderVals();
    lastV = v;
    renderScene(v);
    renderControls(v);
    renderHud(v);
    renderNav(v);
    renderEras(v);
    renderPanel(v);
    renderDrawer(v);
  }

  let queued = false;
  window.__rerender = function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; render(); });
  };

  document.addEventListener("click", function (ev) {
    if (suppressClick) { ev.preventDefault(); ev.stopPropagation(); return; }
    const t = ev.target.closest("[data-h]");
    if (!t || t.disabled) return;
    const fn = H[+t.getAttribute("data-h")];
    if (fn) fn();
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && lastV && lastV.drawerOpen) lastV.closeDrawer();
  });

  render();
  bindGestures();
  comp.componentDidMount();
})();
