/*!
Smallipop (05/01/2013) - CodeNegar.com Customized Version
Copyright (c) 2011-2013 Small Improvements (http://www.small-improvements.com)

Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.

@author Sebastian Helzle (sebastian@helzle.net)
*/
(function(b) {
  var a;
  b.smallipop = a = {
    version: "0.5.2",
    defaults: {
      autoscrollPadding: 200,
      contentAnimationSpeed: 150,
      cssAnimations: {
        enabled: false,
        show: "animated fadeIn",
        hide: "animated fadeOut"
      },
      funcEase: "easeInOutQuad",
      handleInputs: true,
      hideDelay: 500,
      hideTrigger: false,
      hideOnPopupClick: true,
      hideOnTriggerClick: true,
      infoClass: "smallipopHint",
      invertAnimation: false,
      popupOffset: 31,
      popupYOffset: 0,
      popupDistance: 20,
      popupDelay: 100,
      popupAnimationSpeed: 200,
      preferredPosition: "top",
      referencedSelector: null,
      theme: "default",
      touchSupport: true,
      tourHighlight: false,
      tourHighlightColor: "#222",
      tourHightlightFadeDuration: 200,
      tourHighlightOpacity: 0.5,
      tourHighlightZIndex: 9997,
      tourNavigationEnabled: true,
      triggerAnimationSpeed: 150,
      triggerOnClick: false,
      onAfterHide: null,
      onAfterShow: null,
      onBeforeHide: null,
      onBeforeShow: null,
      onTourClose: null,
      onTourNext: null,
      onTourPrev: null,
      windowPadding: 30
    },
    currentTour: null,
    lastId: 1,
    nextInstanceId: 1,
    lastScrollCheck: 0,
    labels: {
      prev: "Prev",
      next: "Next",
      close: "Close",
      of: "of"
    },
    instances: {},
    scrollTimer: null,
    refreshQueueTimer: null,
    templates: {
      popup: '<div class="smallipop-instance"><div class="sipContent"/><div class="sipArrowBorder"/><div class="sipArrow"/></div>'
    },
    tours: {},
    _hideSmallipop: function(r) {
      var t, h, q, c, i, o, n, v, m, j, p, k, u, s, l, g, f, d;
      clearTimeout(a.scrollTimer);
      v = (r != null ? r.target : void 0) ? b(r.target) : r;
      l = a.instances;
      d = [];
      for (o in l) {
        c = l[o];
        i = c.data();
        if (!(n = i.shown)) {
          continue
        }
        m = b(".smallipop" + n);
        j = m.is(v);
        if (i.isTour && !c.is(v) && !(j && c.is(m.data("smallipop").popupInstance))) {
          continue
        }
        m = b(".smallipop" + n);
        p = ((g = m.data("smallipop")) != null ? g.options : void 0) || a.defaults;
        if (i.isTour) {
          a.currentTour = null;
          if ((f = m.data("smallipop")) != null) {
            if (typeof(s = f.options).onTourClose === "function") {
              s.onTourClose()
            }
          }
          a._hideTourOverlay(p)
        }
        q = !p.hideOnTriggerClick && j;
        h = !p.hideOnPopupClick && c.find(v).length;
        if (v && m.length && (r != null ? r.type : void 0) === "click" && (q || h)) {
          continue
        }
        if (n && p.hideTrigger) {
          m.stop(true).fadeTo(p.triggerAnimationSpeed, 1)
        }
        c.data({
          hideDelayTimer: null,
          beingShown: false
        });
        if (p.cssAnimations.enabled) {
          c.removeClass(p.cssAnimations.show).addClass(p.cssAnimations.hide).data("shown", "");
          if (p.onAfterHide) {
            d.push(window.setTimeout(p.onAfterHide, p.popupAnimationSpeed))
          } else {
            d.push(void 0)
          }
        } else {
          t = p.invertAnimation ? -1 : 1;
          k = i.xDistance * t;
          u = i.yDistance * t;
          d.push(c.stop(true).animate({
            top: "-=" + u + "px",
            left: "+=" + k + "px",
            opacity: 0
          }, p.popupAnimationSpeed, p.funcEase, function() {
            var e;
            e = b(this);
            if (!e.data("beingShown")) {
              e.css("display", "none").data("shown", "")
            }
            return typeof p.onAfterHide === "function" ? p.onAfterHide() : void 0
          }))
        }
      }
      return d
    },
    _showSmallipop: function(f) {
      var c, d;
      c = b(this).data("smallipop");
      if (!c) {
        return
      }
      if (c.popupInstance.data("shown") !== c.id && ((d = !c.type) === "checkbox" || d === "radio")) {
        if (f != null) {
          f.preventDefault()
        }
      }
      return a._triggerMouseover.call(this)
    },
    _onTouchDevice: function() {
      return typeof Modernizr !== "undefined" && Modernizr !== null ? Modernizr.touch : void 0
    },
    _killTimers: function(c) {
      clearTimeout(c.data("hideDelayTimer"));
      return clearTimeout(c.data("showDelayTimer"))
    },
    _queueRefreshPosition: function(c) {
      if (c == null) {
        c = 50
      }
      clearTimeout(a.refreshQueueTimer);
      return a.refreshQueueTimer = setTimeout(a._refreshPosition, c)
    },
    _refreshPosition: function(j) {
      var C, E, O, u, A, B, k, G, q, N, p, x, d, s, m, o, n, K, h, z, l, J, y, f, I, D, H, g, e, i, c, v, r, t, w, M, F, L;
      if (j == null) {
        j = true
      }
      F = a.instances;
      L = [];
      for (d in F) {
        A = F[d];
        k = A.data();
        J = k.shown;
        if (!J) {
          continue
        }
        y = b(".smallipop" + J);
        f = y.data("smallipop");
        u = f.options;
        A.removeClass(function(P, Q) {
          return ((Q != null ? Q.match(/sip\w+/g) : void 0) || []).join(" ")
        });
        if (j) {
          A.attr("class", "smallipop-instance " + u.theme)
        }
        I = b(window);
        c = t = u.popupDistance;
        v = u.popupOffset;
        w = u.popupYOffset;
        C = A.data("position") === "fixed";
        x = A.outerHeight();
        o = A.outerWidth();
        B = o / 2;
        e = I.width();
        D = I.height();
        g = I.scrollTop();
        H = I.scrollLeft();
        i = u.windowPadding;
        E = y.offset();
        z = y.outerWidth();
        h = y.outerHeight();
        l = E.top - g;
        s = E.left + z / 2;
        m = E.top - x + w;
        n = x + u.popupDistance - w;
        p = l - n;
        G = D - l - h - n;
        q = E.left - o - v;
        N = e - E.left - z - o;
        K = u.preferredPosition;
        if (K === "left" || K === "right") {
          t = 0;
          m += h / 2 + x / 2;
          if ((K === "right" && N > i) || q < i) {
            A.addClass("sipPositionedRight");
            s = E.left + z + v
          } else {
            A.addClass("sipPositionedLeft");
            s = E.left - o - v;
            c = -c
          }
        } else {
          c = 0;
          if (s + B > e - i) {
            s -= B * 2 - v;
            A.addClass("sipAlignLeft")
          } else {
            if (s - B < i) {
              s -= v;
              A.addClass("sipAlignRight")
            } else {
              s -= B
            }
          }
          if (s < i) {
            s = i
          }
          if ((K === "bottom" && G > i) || p < i) {
            t = -t;
            m += x + h - 2 * w;
            A.addClass("sipAlignBottom")
          }
        }
        if (x < h) {
          M = m + x + i - t + w - g - D;
          if (M > 0) {
            m = Math.max(m - M - i, E.top + w + i + t)
          }
        }
        if (o < z) {
          r = s + o + i + c + v - H - e;
          if (r > 0) {
            s = Math.max(s - r + i, E.left + v + i - c)
          }
        }
        if (u.hideTrigger) {
          y.stop(true).fadeTo(u.triggerAnimationSpeed, 0)
        }
        O = 0;
        if (!k.beingShown || u.cssAnimations.enabled) {
          m -= t;
          s += c;
          c = 0;
          t = 0;
          O = 1
        }
        if (C) {
          s -= H;
          m -= g
        }
        A.data({
          xDistance: c,
          yDistance: t
        }).css({
          top: m,
          left: s,
          display: "block",
          opacity: O
        });
        L.push(a._fadeInPopup(A, {
          top: "-=" + t + "px",
          left: "+=" + c + "px",
          opacity: 1
        }))
      }
      return L
    },
    _fadeInPopup: function(d, c) {
      var e, f;
      e = ((f = a._getTrigger(d.data("shown")).data("smallipop")) != null ? f.options : void 0) || a.defaults;
      if (e.cssAnimations.enabled) {
        d.addClass(e.cssAnimations.show);
        return window.setTimeout(function() {
          return a._fadeInPopupFinished(d, e)
        }, e.popupAnimationSpeed)
      } else {
        return d.stop(true).animate(c, e.popupAnimationSpeed, e.funcEase, function() {
          return a._fadeInPopupFinished(d, e)
        })
      }
    },
    _fadeInPopupFinished: function(d, e) {
      var c;
      c = d.data();
      if (c.beingShown) {
        d.data("beingShown", false);
        return typeof e.onAfterShow === "function" ? e.onAfterShow(a._getTrigger(c.shown)) : void 0
      }
    },
    _getTrigger: function(c) {
      return b(".smallipop" + c)
    },
    _showPopup: function(e, k) {
      var i, g, d, m, h, l, j, c, f;
      if (k == null) {
        k = ""
      }
      c = e.data("smallipop");
      f = c.options;
      d = c.popupInstance;
      if (!d.data("triggerHovered")) {
        return
      }
      l = d.data("shown");
      if (l) {
        i = a._getTrigger(l);
        if (i.length) {
          g = i.data("smallipop").options || a.defaults;
          if (g.hideTrigger) {
            i.stop(true).fadeTo(g.fadeSpeed, 1)
          }
        }
      }
      if (f.tourHighlight && f.tourIndex) {
        j = this._getTourOverlay(f);
        this._resetTourZIndices();
        if (e.css("position") === "static") {
          e.css("position", "relative")
        }
        if (!e.data("originalZIndex")) {
          e.data("originalZIndex", e.css("zIndex"))
        }
        e.css("zIndex", f.tourHighlightZIndex + 1);
        j.fadeTo(f.tourHightlightFadeDuration, f.tourHighlightOpacity)
      } else {
        this._hideTourOverlay(f)
      }
      m = k || c.hint;
      if (f.referencedContent && !k) {
        m = b(f.referencedContent).clone(true, true) || m
      }
      h = this._isElementFixed(e) ? "fixed" : "absolute";
      if (l !== c.id) {
        d.hide(0)
      }
      d.data({
        beingShown: true,
        shown: c.id,
        position: h
      }).find(".sipContent").empty().append(m);
      d.css("position", h);
      return a._queueRefreshPosition(0)
    },
    _isElementFixed: function(c) {
      var d;
      d = c;
      while (d.length && d[0].nodeName !== "HTML") {
        if (d.css("position") === "fixed") {
          return true
        }
        d = d.parent()
      }
      return false
    },
    _triggerMouseover: function() {
      var h, c, e, d, g, f;
      d = c = b(this);
      h = d.hasClass("sipInitialized");
      if (!h) {
        d = a._getTrigger(c.data("shown"))
      }
      if (!d.length) {
        return
      }
      g = d.data("smallipop");
      c = g.popupInstance.data((h ? "triggerHovered" : "hovered"), true);
      a._killTimers(c);
      e = c.data("shown");
      if (e !== g.id || c.css("opacity") === 0) {
        if (typeof(f = g.options).onBeforeShow === "function") {
          f.onBeforeShow(d)
        }
        return c.data("showDelayTimer", setTimeout(function() {
          return a._showPopup(d)
        }, g.options.popupDelay))
      }
    },
    // _triggerMouseout: function() {
    //   var h, d, c, e, g, f;
    //   e = d = b(this);
    //   h = e.hasClass("sipInitialized");
    //   if (!h) {
    //     e = a._getTrigger(d.data("shown"))
    //   }
    //   if (!e.length) {
    //     return
    //   }
    //   g = e.data("smallipop");
    //   d = g.popupInstance.data((h ? "triggerHovered" : "hovered"), false);
    //   a._killTimers(d);
    //   c = d.data();
    //   if (!(c.hovered || c.triggerHovered)) {
    //     if (typeof(f = g.options).onBeforeHide === "function") {
    //       f.onBeforeHide(e)
    //     }
    //     return d.data("hideDelayTimer", setTimeout(function() {
    //       return a._hideSmallipop(d)
    //     }, g.options.hideDelay))
    //   }
    // },
    _onWindowScroll: function(c) {
      var d = this;
      clearTimeout(a.scrollTimer);
      return a.scrollTimer = setTimeout(function() {
        return a._refreshPosition(false)
      }, 250)
    },
    setContent: function(e, g) {
      var d, c, f;
      if (!(e != null ? e.length : void 0)) {
        return
      }
      f = e.data("smallipop");
      d = f.tourTitle;
      if (d) {
        c = f.popupInstance.find(".smallipop-tour-content")
      } else {
        c = f.popupInstance.find(".sipContent")
      }
      if (c.html() !== g) {
        return c.stop(true).fadeTo(f.options.contentAnimationSpeed, 0, function() {
          b(this).html(g).fadeTo(f.options.contentAnimationSpeed, 1);
          return a._refreshPosition()
        })
      }
    },
    _runTour: function(d, h) {
      var g, e, c, f, k, j;
      f = d.data("smallipop");
      c = f != null ? f.tourTitle : void 0;
      if (!(c && a.tours[c])) {
        return
      }
      a.tours[c].sort(function(l, i) {
        return l.index - i.index
      });
      if (!(typeof h === "number" && h % 1 === 0)) {
        h = -1
      } else {
        h -= 1
      }
      a.currentTour = c;
      g = a.tours[c];
      for (e = k = 0, j = g.length - 1; 0 <= j ? k <= j : k >= j; e = 0 <= j ? ++k : --k) {
        if ((h >= 0 && e === h) || (h < 0 && g[e].id === f.id)) {
          return a._tourShow(c, e)
        }
      }
    },
    _tourShow: function(k, i) {
      var d, e, j, f, h, g, c;
      j = a.tours[k];
      if (!j) {
        return
      }
      g = j[i].trigger;
      c = g.data("smallipop");
      h = c.options.tourNavigationEnabled;
      f = "";
      if (h) {
        f += '<div class="smallipop-tour-progress">' + (i + 1) + " " + a.labels.of + " " + j.length + "</div>";
        f += i > 0 ? '<a href="#" class="smallipop-tour-prev">' + a.labels.prev + "</a>" : "";
        f += i < j.length - 1 ? '<a href="#" class="smallipop-tour-next">' + a.labels.next + "</a>" : ""
      }
      f += !h || i === j.length - 1 ? '<a href="#" class="smallipop-tour-close">' + a.labels.close + "</a>" : "";
      e = '<a href="#" class="smallipop-tour-close-icon">&Chi;</a>';
      d = b(b.trim('        <div class="smallipop-tour-content"></div>        ' + e + '        <div class="smallipop-tour-footer">' + f + "</div>"));
      d.eq(0).append(c.hint);
      a._killTimers(c.popupInstance);
      c.popupInstance.data("triggerHovered", true);
      return a._showWhenVisible(g, d)
    },
    _getTourOverlay: function(d) {
      var c;
      c = b("#smallipop-tour-overlay");
      if (!c.length) {
        c = b('<div id="smallipop-tour-overlay"/>').appendTo(b("body")).fadeOut(0)
      }
      return c.css({
        backgroundColor: d.tourHighlightColor,
        zIndex: d.tourHighlightZIndex
      })
    },
    _hideTourOverlay: function(c) {
      b("#smallipop-tour-overlay").fadeOut(c.tourHightlightFadeDuration);
      return a._resetTourZIndices()
    },
    _resetTourZIndices: function() {
      var f, d, h, e, g, c;
      g = a.tours;
      c = [];
      for (h in g) {
        d = g[h];
        c.push((function() {
          var k, i, j;
          j = [];
          for (k = 0, i = d.length; k < i; k++) {
            f = d[k];
            e = f.trigger;
            if (e.data("originalZIndex")) {
              j.push(e.css("zIndex", e.data("originalZIndex")))
            } else {
              j.push(void 0)
            }
          }
          return j
        })())
      }
      return c
    },
    _showWhenVisible: function(c, e) {
      var g, d, f, h;
      d = c.offset().top;
      g = d - b(document).scrollTop();
      h = b(window).height();
      f = c.data("smallipop").options;
      if (!this._isElementFixed(c) && (g < f.autoscrollPadding || g > h - f.autoscrollPadding)) {
        return b("html, body").animate({
          scrollTop: d - h / 2
        }, 800, "swing", function() {
          return a._showPopup(c, e)
        })
      } else {
        return a._showPopup(c, e)
      }
    },
    _tourNext: function(l) {
      var g, f, c, d, k, j, h;
      if (l != null) {
        l.preventDefault()
      }
      g = a.tours[a.currentTour];
      if (!g) {
        return
      }
      c = g[0].popupInstance;
      d = c.data("shown") || g[0].id;
      for (f = j = 0, h = g.length - 2; 0 <= h ? j <= h : j >= h; f = 0 <= h ? ++j : --j) {
        if (!(g[f].id === d)) {
          continue
        }
        k = g[f].trigger.data("smallipop").options;
        if (k.tourNavigationEnabled) {
          if (typeof k.onTourNext === "function") {
            k.onTourNext(g[f + 1].trigger)
          }
          return a._tourShow(a.currentTour, f + 1)
        }
      }
    },
    _tourPrev: function(l) {
      var g, f, c, d, k, j, h;
      if (l != null) {
        l.preventDefault()
      }
      g = a.tours[a.currentTour];
      if (!g) {
        return
      }
      c = g[0].popupInstance;
      d = c.data("shown") || g[0].id;
      for (f = j = 1, h = g.length - 1; 1 <= h ? j <= h : j >= h; f = 1 <= h ? ++j : --j) {
        if (!(g[f].id === d)) {
          continue
        }
        k = g[f].trigger.data("smallipop").options;
        if (k.tourNavigationEnabled) {
          if (typeof k.onTourPrev === "function") {
            k.onTourPrev(g[f - 1].trigger)
          }
          return a._tourShow(a.currentTour, f - 1)
        }
      }
    },
    _tourClose: function(d) {
      var c;
      if (d != null) {
        d.preventDefault()
      }
      c = b(d.target).closest(".smallipop-instance");
      return a._hideSmallipop(c)
    },
    _destroy: function(c) {
      return c.each(function() {
        var e, d;
        d = b(this);
        e = d.data("smallipop");
        if (e) {
          return d.unbind(".smallipop").data("smallipop", {}).removeClass("smallipop sipInitialized smallipop" + e.id + " " + e.options.theme)
        }
      })
    },
    _onWindowKeyUp: function(j) {
      var f, g, h, i, c, d;
      h = (i = j != null ? j.target.tagName.toLowerCase() : void 0) === "input" || i === "textarea";
      switch (j.which) {
        case 27:
          c = a.instances;
          d = [];
          for (g in c) {
            f = c[g];
            d.push(a._hideSmallipop(f))
          }
          return d;
          break;
        case 37:
          if (!h) {
            return a._tourPrev()
          }
          break;
        case 39:
          if (!h) {
            return a._tourNext()
          }
      }
    },
    _getInstance: function(e, d) {
      var c;
      if (e == null) {
        e = "default"
      }
      if (d == null) {
        d = false
      }
      if (a.instances[e]) {
        return a.instances[e]
      }
      c = b(a.templates.popup).css({
        opacity: 0,
        minWidth: b(a.templates.popup).attr("data-min-width"),
        maxWidth: b(a.templates.popup).attr("data-max-width")
      }).attr("id", "smallipop" + (a.nextInstanceId++)).addClass("smallipop-instance").data({
        xDistance: 0,
        yDistance: 0,
        isTour: d
      }).bind({
        "mouseover.smallipop": a._triggerMouseover,
        "mouseout.smallipop": a._triggerMouseout
      });
      b("body").append(c);
      if (d) {
        c.delegate(".smallipop-tour-prev", "click.smallipop", a._tourPrev).delegate(".smallipop-tour-next", "click.smallipop", a._tourNext).delegate(".smallipop-tour-close, .smallipop-tour-close-icon", "click.smallipop", a._tourClose)
      } else {
        c.delegate("a", "click.smallipop", a._hideSmallipop)
      }
      if (a.nextInstanceId === 2) {
        b(document).bind("click.smallipop", a._hideSmallipop);
        b(window).bind({
          "resize.smallipop": a._queueRefreshPosition,
          "scroll.smallipop": a._onWindowScroll,
          keyup: a._onWindowKeyUp
        })
      }
      return a.instances[e] = c
    }
  };
  if (!b.easing.easeInOutQuad) {
    b.easing.easeInOutQuad = function(f, g, e, i, h) {
      if ((g /= h / 2) < 1) {
        return i / 2 * g * g + e
      } else {
        return -i / 2 * ((--g) * (g - 2) - 1) + e
      }
    }
  }
  return b.fn.smallipop = function(d, e) {
    var c;
    if (d == null) {
      d = {}
    }
    if (e == null) {
      e = ""
    }
    if (typeof d === "string") {
      switch (d.toLowerCase()) {
        case "show":
          a._showSmallipop.call(this.first().get(0));
          break;
        case "hide":
          a._hideSmallipop(this.first().get(0));
          break;
        case "destroy":
          a._destroy(this);
          break;
        case "tour":
          a._runTour(this.first(), e);
          break;
        case "update":
          a.setContent(this.first(), e)
      }
      return this
    }
    d = b.extend({}, a.defaults, d);
    if ((typeof Modernizr !== "undefined" && Modernizr !== null ? Modernizr.cssanimations : void 0) === false) {
      d.cssAnimations.enabled = false
    }
    c = a._getInstance();
    return this.each(function() {
      var h, m, j, s, o, g, t, i, l, f, p, k, n, q, r;
      t = b(this);
      i = t[0].tagName.toLowerCase();
      q = t.attr("type");
      f = t.data();
      s = e || t.attr("title");
      h = b("." + d.infoClass + " #data-" + t.attr("id")).first();
      if (h.length) {
        s = h.clone(true, true).removeClass("" + d.infoClass)
      }
      if (s && !t.hasClass("sipInitialized")) {
        j = a.lastId++;
        p = {};
        n = c;
        k = b.extend(true, {}, d);
        if (typeof f.smallipop === "object") {
          b.extend(true, k, f.smallipop)
        }
        for (o in f) {
          r = f[o];
          if (!(o.indexOf("smallipop") >= 0)) {
            continue
          }
          g = o.replace("smallipop", "");
          if (g) {
            g = g.substr(0, 1).toLowerCase() + g.substr(1);
            k[g] = r
          }
        }
        m = k.handleInputs && (i === "input" || i === "select" || i === "textarea");
        if (m) {
          k.hideOnTriggerClick = false;
          p["focus.smallipop"] = a._triggerMouseover;
          p["blur.smallipop"] = a._triggerMouseout
        } else {
          p["mouseout.smallipop"] = a._triggerMouseout
        }
        if (k.triggerOnClick || (k.touchSupport && a._onTouchDevice())) {
          p["click.smallipop"] = a._showSmallipop
        }
        // else {
        //  p["click.smallipop"] = a._triggerMouseout;
        //  p["mouseover.smallipop"] = a._triggerMouseover
        // }
        if (k.tourIndex) {
          l = k.tourTitle || "defaultTour";
          p = {};
          k.hideOnTriggerClick = false;
          k.hideOnPopupClick = false;
          n = a._getInstance(l, true);
          if (!a.tours[l]) {
            a.tours[l] = []
          }
          a.tours[l].push({
            index: k.tourIndex || 0,
            id: j,
            trigger: t,
            popupInstance: n
          })
        }
        t.addClass("sipInitialized smallipop" + j).attr("title", "").data("smallipop", {
          id: j,
          hint: s,
          options: k,
          tagName: i,
          type: q,
          tourTitle: l,
          popupInstance: n
        }).bind(p);
        if (!k.hideOnTriggerClick) {
          return t.delegate("a", "click.smallipop", a._hideSmallipop)
        }
      }
    })
  }
})(jQuery);
