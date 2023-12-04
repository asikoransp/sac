(function () {
  !(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define(e)
      : ((t = "undefined" != typeof globalThis ? globalThis : t || self).Chart =
          e());
  })(this, function () {
    "use strict";
    var s = Object.freeze({
      __proto__: null,
      get Colors() {
        return dn;
      },
      get Decimation() {
        return fn;
      },
      get Filler() {
        return Dn;
      },
      get Legend() {
        return Tn;
      },
      get SubTitle() {
        return In;
      },
      get Title() {
        return En;
      },
      get Tooltip() {
        return Un;
      },
    });
    function t() {}
    const F = (() => {
      let t = 0;
      return () => t++;
    })();
    function P(t) {
      return null == t;
    }
    function O(t) {
      if (Array.isArray && Array.isArray(t)) return !0;
      const e = Object.prototype.toString.call(t);
      return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
    }
    function A(t) {
      return (
        null !== t && "[object Object]" === Object.prototype.toString.call(t)
      );
    }
    function p(t) {
      return ("number" == typeof t || t instanceof Number) && isFinite(+t);
    }
    function g(t, e) {
      return p(t) ? t : e;
    }
    function T(t, e) {
      return void 0 === t ? e : t;
    }
    const V = (t, e) =>
        "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / e,
      B = (t, e) =>
        "string" == typeof t && t.endsWith("%")
          ? (parseFloat(t) / 100) * e
          : +t;
    function d(t, e, i) {
      if (t && "function" == typeof t.call) return t.apply(i, e);
    }
    function k(t, e, i, s) {
      let a, n, o;
      if (O(t))
        if (((n = t.length), s))
          for (a = n - 1; 0 <= a; a--) e.call(i, t[a], a);
        else for (a = 0; a < n; a++) e.call(i, t[a], a);
      else if (A(t))
        for (o = Object.keys(t), n = o.length, a = 0; a < n; a++)
          e.call(i, t[o[a]], o[a]);
    }
    function W(t, e) {
      let i, s, a, n;
      if (!t || !e || t.length !== e.length) return !1;
      for (i = 0, s = t.length; i < s; ++i)
        if (
          ((a = t[i]),
          (n = e[i]),
          a.datasetIndex !== n.datasetIndex || a.index !== n.index)
        )
          return !1;
      return !0;
    }
    function N(e) {
      if (O(e)) return e.map(N);
      if (A(e)) {
        const i = Object.create(null),
          s = Object.keys(e),
          a = s.length;
        let t = 0;
        for (; t < a; ++t) i[s[t]] = N(e[s[t]]);
        return i;
      }
      return e;
    }
    function H(t) {
      return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
    }
    function j(t, e, i, s) {
      var a;
      H(t) &&
        ((a = e[t]), (i = i[t]), A(a) && A(i) ? Y(a, i, s) : (e[t] = N(i)));
    }
    function Y(i, t, s) {
      var a,
        e = O(t) ? t : [t],
        n = e.length;
      if (!A(i)) return i;
      const o = (s = s || {}).merger || j;
      for (let t = 0; t < n; ++t)
        if (A((a = e[t]))) {
          const O = Object.keys(a);
          for (let t = 0, e = O.length; t < e; ++t) o(O[t], i, a, s);
        }
      return i;
    }
    function $(t, e) {
      return Y(t, e, { merger: U });
    }
    function U(t, e, i) {
      var s;
      H(t) &&
        ((s = e[t]),
        (i = i[t]),
        A(s) && A(i)
          ? $(s, i)
          : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = N(i)));
    }
    const X = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
    function q(t) {
      const e = t.split("."),
        i = [];
      let s = "";
      for (const t of e)
        (s += t),
          (s = s.endsWith("\\") ? s.slice(0, -1) + "." : (i.push(s), ""));
      return i;
    }
    function m(t, e) {
      const i =
        X[e] ||
        (X[e] = (function () {
          const i = q(e);
          return (t) => {
            for (const e of i) {
              if ("" === e) break;
              t = t && t[e];
            }
            return t;
          };
        })());
      return i(t);
    }
    function K(t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    }
    const G = (t) => void 0 !== t,
      u = (t) => "function" == typeof t,
      Z = (t, e) => {
        if (t.size !== e.size) return !1;
        for (const i of t) if (!e.has(i)) return !1;
        return !0;
      };
    function J(t) {
      return (
        "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type
      );
    }
    const S = Math.PI,
      _ = 2 * S,
      Q = _ + S,
      tt = Number.POSITIVE_INFINITY,
      et = S / 180,
      D = S / 2,
      it = S / 4,
      st = (2 * S) / 3,
      r = Math.log10,
      y = Math.sign;
    function at(t, e, i) {
      return Math.abs(t - e) < i;
    }
    function nt(t) {
      var e = Math.round(t),
        e = ((t = at(t, e, t / 1e3) ? e : t), Math.pow(10, Math.floor(r(t)))),
        t = t / e;
      return (t <= 1 ? 1 : t <= 2 ? 2 : t <= 5 ? 5 : 10) * e;
    }
    function ot(t) {
      const e = [],
        i = Math.sqrt(t);
      let s;
      for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
      return i === (0 | i) && e.push(i), e.sort((t, e) => t - e).pop(), e;
    }
    function rt(t) {
      return !isNaN(parseFloat(t)) && isFinite(t);
    }
    function lt(t, e) {
      var i = Math.round(t);
      return i - e <= t && t <= i + e;
    }
    function ht(t, e, i) {
      let s, a, n;
      for (s = 0, a = t.length; s < a; s++)
        (n = t[s][i]),
          isNaN(n) ||
            ((e.min = Math.min(e.min, n)), (e.max = Math.max(e.max, n)));
    }
    function L(t) {
      return t * (S / 180);
    }
    function ct(t) {
      return t * (180 / S);
    }
    function dt(i) {
      if (p(i)) {
        let t = 1,
          e = 0;
        for (; Math.round(i * t) / t !== i; ) (t *= 10), e++;
        return e;
      }
    }
    function ut(t, e) {
      var i = e.x - t.x,
        e = e.y - t.y,
        t = Math.sqrt(i * i + e * e);
      let s = Math.atan2(e, i);
      return s < -0.5 * S && (s += _), { angle: s, distance: t };
    }
    function gt(t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }
    function ft(t, e) {
      return ((t - e + Q) % _) - S;
    }
    function v(t) {
      return ((t % _) + _) % _;
    }
    function pt(t, e, i, s) {
      var t = v(t),
        e = v(e),
        i = v(i),
        a = v(e - t),
        n = v(i - t),
        o = v(t - e),
        r = v(t - i);
      return t === e || t === i || (s && e === i) || (n < a && o < r);
    }
    function C(t, e, i) {
      return Math.max(e, Math.min(i, t));
    }
    function mt(t) {
      return C(t, -32768, 32767);
    }
    function c(t, e, i, s = 1e-6) {
      return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
    }
    function bt(e, i, t) {
      t = t || ((t) => e[t] < i);
      let s,
        a = e.length - 1,
        n = 0;
      for (; 1 < a - n; ) t((s = (n + a) >> 1)) ? (n = s) : (a = s);
      return { lo: n, hi: a };
    }
    const f = (i, s, a, t) =>
        bt(
          i,
          a,
          t
            ? (t) => {
                var e = i[t][s];
                return e < a || (e === a && i[t + 1][s] === a);
              }
            : (t) => i[t][s] < a
        ),
      xt = (e, i, s) => bt(e, s, (t) => e[t][i] >= s);
    function vt(t, e, i) {
      let s = 0,
        a = t.length;
      for (; s < a && t[s] < e; ) s++;
      for (; a > s && t[a - 1] > i; ) a--;
      return 0 < s || a < t.length ? t.slice(s, a) : t;
    }
    const _t = ["push", "pop", "shift", "splice", "unshift"];
    function yt(a, t) {
      a._chartjs
        ? a._chartjs.listeners.push(t)
        : (Object.defineProperty(a, "_chartjs", {
            configurable: !0,
            enumerable: !1,
            value: { listeners: [t] },
          }),
          _t.forEach((t) => {
            const i = "_onData" + K(t),
              s = a[t];
            Object.defineProperty(a, t, {
              configurable: !0,
              enumerable: !1,
              value(...e) {
                var t = s.apply(this, e);
                return (
                  a._chartjs.listeners.forEach((t) => {
                    "function" == typeof t[i] && t[i](...e);
                  }),
                  t
                );
              },
            });
          }));
    }
    function Mt(e, t) {
      var i = e._chartjs;
      if (i) {
        const s = i.listeners,
          a = s.indexOf(t);
        -1 !== a && s.splice(a, 1),
          0 < s.length ||
            (_t.forEach((t) => {
              delete e[t];
            }),
            delete e._chartjs);
      }
    }
    function wt(t) {
      var e = new Set(t);
      return e.size === t.length ? t : Array.from(e);
    }
    const kt =
      "undefined" == typeof window
        ? function (t) {
            return t();
          }
        : window.requestAnimationFrame;
    function St(e, i) {
      let s,
        a = !1;
      return function (...t) {
        (s = t),
          a ||
            ((a = !0),
            kt.call(window, () => {
              (a = !1), e.apply(i, s);
            }));
      };
    }
    function Pt(e, i) {
      let s;
      return function (...t) {
        return (
          i ? (clearTimeout(s), (s = setTimeout(e, i, t))) : e.apply(this, t), i
        );
      };
    }
    const Dt = (t) =>
        "start" === t ? "left" : "end" === t ? "right" : "center",
      E = (t, e, i) => ("start" === t ? e : "end" === t ? i : (e + i) / 2),
      Ct = (t, e, i, s) =>
        t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e;
    function Ot(t, e, i) {
      var s = e.length;
      let a = 0,
        n = s;
      if (t._sorted) {
        const { iScale: o, _parsed: r } = t,
          l = o.axis,
          { min: h, max: c, minDefined: d, maxDefined: u } = o.getUserBounds();
        d &&
          (a = C(
            Math.min(f(r, l, h).lo, i ? s : f(e, l, o.getPixelForValue(h)).lo),
            0,
            s - 1
          )),
          (n = u
            ? C(
                Math.max(
                  f(r, o.axis, c, !0).hi + 1,
                  i ? 0 : f(e, l, o.getPixelForValue(c), !0).hi + 1
                ),
                a,
                s
              ) - a
            : s - a);
      }
      return { start: a, count: n };
    }
    function At(t) {
      var { xScale: e, yScale: i, _scaleRanges: s } = t,
        a = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
      if (!s) return (t._scaleRanges = a), !0;
      t =
        s.xmin !== e.min ||
        s.xmax !== e.max ||
        s.ymin !== i.min ||
        s.ymax !== i.max;
      return Object.assign(s, a), t;
    }
    var l = new (class {
      constructor() {
        (this._request = null),
          (this._charts = new Map()),
          (this._running = !1),
          (this._lastDate = void 0);
      }
      _notify(e, i, s, t) {
        const a = i.listeners[t],
          n = i.duration;
        a.forEach((t) =>
          t({
            chart: e,
            initial: i.initial,
            numSteps: n,
            currentStep: Math.min(s - i.start, n),
          })
        );
      }
      _refresh() {
        this._request ||
          ((this._running = !0),
          (this._request = kt.call(window, () => {
            this._update(),
              (this._request = null),
              this._running && this._refresh();
          })));
      }
      _update(o = Date.now()) {
        let r = 0;
        this._charts.forEach((s, a) => {
          if (s.running && s.items.length) {
            const n = s.items;
            let t,
              e = n.length - 1,
              i = !1;
            for (; 0 <= e; --e)
              (t = n[e])._active
                ? (t._total > s.duration && (s.duration = t._total),
                  t.tick(o),
                  (i = !0))
                : ((n[e] = n[n.length - 1]), n.pop());
            i && (a.draw(), this._notify(a, s, o, "progress")),
              n.length ||
                ((s.running = !1),
                this._notify(a, s, o, "complete"),
                (s.initial = !1)),
              (r += n.length);
          }
        }),
          (this._lastDate = o),
          0 === r && (this._running = !1);
      }
      _getAnims(t) {
        const e = this._charts;
        let i = e.get(t);
        return (
          i ||
            ((i = {
              running: !1,
              initial: !0,
              items: [],
              listeners: { complete: [], progress: [] },
            }),
            e.set(t, i)),
          i
        );
      }
      listen(t, e, i) {
        this._getAnims(t).listeners[e].push(i);
      }
      add(t, e) {
        e && e.length && this._getAnims(t).items.push(...e);
      }
      has(t) {
        return 0 < this._getAnims(t).items.length;
      }
      start(t) {
        const e = this._charts.get(t);
        e &&
          ((e.running = !0),
          (e.start = Date.now()),
          (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
          this._refresh());
      }
      running(t) {
        if (!this._running) return !1;
        t = this._charts.get(t);
        return !!(t && t.running && t.items.length);
      }
      stop(e) {
        const i = this._charts.get(e);
        if (i && i.items.length) {
          const s = i.items;
          let t = s.length - 1;
          for (; 0 <= t; --t) s[t].cancel();
          (i.items = []), this._notify(e, i, Date.now(), "complete");
        }
      }
      remove(t) {
        return this._charts.delete(t);
      }
    })();
    function Tt(t) {
      return (t + 0.5) | 0;
    }
    const Lt = (t, e, i) => Math.max(Math.min(t, i), e);
    function Et(t) {
      return Lt(Tt(2.55 * t), 0, 255);
    }
    function Rt(t) {
      return Lt(Tt(255 * t), 0, 255);
    }
    function o(t) {
      return Lt(Tt(t / 2.55) / 100, 0, 1);
    }
    function It(t) {
      return Lt(Tt(100 * t), 0, 100);
    }
    const n = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
      },
      zt = [..."0123456789ABCDEF"],
      Ft = (t) => zt[15 & t],
      Vt = (t) => zt[(240 & t) >> 4] + zt[15 & t],
      Bt = (t) => (240 & t) >> 4 == (15 & t);
    const Wt =
      /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
    function Nt(i, t, s) {
      const a = t * Math.min(s, 1 - s),
        e = (t, e = (t + i / 30) % 12) =>
          s - a * Math.max(Math.min(e - 3, 9 - e, 1), -1);
      return [e(0), e(8), e(4)];
    }
    function Ht(i, s, a) {
      i = (t, e = (t + i / 60) % 6) =>
        a - a * s * Math.max(Math.min(e, 4 - e, 1), 0);
      return [i(5), i(3), i(1)];
    }
    function jt(t, e, i) {
      const s = Nt(t, 1, 0.5);
      let a;
      for (1 < e + i && ((e *= a = 1 / (e + i)), (i *= a)), a = 0; a < 3; a++)
        (s[a] *= 1 - e - i), (s[a] += e);
      return s;
    }
    function Yt(t) {
      var e = t.r / 255,
        i = t.g / 255,
        t = t.b / 255,
        s = Math.max(e, i, t),
        a = Math.min(e, i, t),
        n = (s + a) / 2;
      let o, r, l;
      return (
        s !== a &&
          ((l = s - a),
          (r = 0.5 < n ? l / (2 - s - a) : l / (s + a)),
          (o =
            60 *
              (o =
                ((a = i),
                (i = t),
                (t = e) === s
                  ? (a - i) / l + (a < i ? 6 : 0)
                  : a === s
                  ? (i - t) / l + 2
                  : (t - a) / l + 4)) +
            0.5)),
        [0 | o, r || 0, n]
      );
    }
    function $t(t, e, i, s) {
      return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(Rt);
    }
    function Ut(t, e, i) {
      return $t(Nt, t, e, i);
    }
    function Xt(t) {
      return ((t % 360) + 360) % 360;
    }
    const qt = {
        x: "dark",
        Z: "light",
        Y: "re",
        X: "blu",
        W: "gr",
        V: "medium",
        U: "slate",
        A: "ee",
        T: "ol",
        S: "or",
        B: "ra",
        C: "lateg",
        D: "ights",
        R: "in",
        Q: "turquois",
        E: "hi",
        P: "ro",
        O: "al",
        N: "le",
        M: "de",
        L: "yello",
        F: "en",
        K: "ch",
        G: "arks",
        H: "ea",
        I: "ightg",
        J: "wh",
      },
      Kt = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32",
      };
    let Gt;
    const Zt =
        /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
      Jt = (t) =>
        t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
      Qt = (t) =>
        t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
    function te(e, i, s) {
      if (e) {
        let t = Yt(e);
        (t[i] = Math.max(0, Math.min(t[i] + t[i] * s, 0 === i ? 360 : 1))),
          (t = Ut(t)),
          (e.r = t[0]),
          (e.g = t[1]),
          (e.b = t[2]);
      }
    }
    function ee(t, e) {
      return t && Object.assign(e || {}, t);
    }
    function ie(t) {
      var e = { r: 0, g: 0, b: 0, a: 255 };
      return (
        Array.isArray(t)
          ? 3 <= t.length &&
            ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
            3 < t.length && (e.a = Rt(t[3])))
          : ((e = ee(t, { r: 0, g: 0, b: 0, a: 1 })).a = Rt(e.a)),
        e
      );
    }
    function se(t) {
      return (
        "r" === t.charAt(0)
          ? function (t) {
              var e = Zt.exec(t);
              let i,
                s,
                a,
                n = 255;
              if (e) {
                if (e[7] !== i) {
                  const t = +e[7];
                  n = e[8] ? Et(t) : Lt(255 * t, 0, 255);
                }
                return (
                  (i = +e[1]),
                  (s = +e[3]),
                  (a = +e[5]),
                  (i = 255 & (e[2] ? Et(i) : Lt(i, 0, 255))),
                  (s = 255 & (e[4] ? Et(s) : Lt(s, 0, 255))),
                  (a = 255 & (e[6] ? Et(a) : Lt(a, 0, 255))),
                  { r: i, g: s, b: a, a: n }
                );
              }
            }
          : function (t) {
              var e,
                i,
                s,
                t = Wt.exec(t);
              let a,
                n = 255;
              if (t)
                return (
                  void 0 !== t[5] && (n = (t[6] ? Et : Rt)(+t[5])),
                  (e = Xt(+t[2])),
                  (i = +t[3] / 100),
                  (s = +t[4] / 100),
                  {
                    r: (a =
                      "hwb" === t[1]
                        ? $t(jt, e, i, s)
                        : "hsv" === t[1]
                        ? $t(Ht, e, i, s)
                        : Ut(e, i, s))[0],
                    g: a[1],
                    b: a[2],
                    a: n,
                  }
                );
            }
      )(t);
    }
    class ae {
      constructor(t) {
        if (t instanceof ae) return t;
        var e,
          i,
          s = typeof t;
        let a;
        "object" == s
          ? (a = ie(t))
          : "string" == s &&
            ((i = (s = t).length),
            "#" === s[0] &&
              (4 === i || 5 === i
                ? (e = {
                    r: 255 & (17 * n[s[1]]),
                    g: 255 & (17 * n[s[2]]),
                    b: 255 & (17 * n[s[3]]),
                    a: 5 === i ? 17 * n[s[4]] : 255,
                  })
                : (7 !== i && 9 !== i) ||
                  (e = {
                    r: (n[s[1]] << 4) | n[s[2]],
                    g: (n[s[3]] << 4) | n[s[4]],
                    b: (n[s[5]] << 4) | n[s[6]],
                    a: 9 === i ? (n[s[7]] << 4) | n[s[8]] : 255,
                  })),
            (a =
              e ||
              ((i = t),
              Gt ||
                ((Gt = (function () {
                  const t = {},
                    e = Object.keys(Kt),
                    i = Object.keys(qt);
                  let s, a, n, o, r;
                  for (s = 0; s < e.length; s++) {
                    for (o = r = e[s], a = 0; a < i.length; a++)
                      (n = i[a]), (r = r.replace(n, qt[n]));
                    (n = parseInt(Kt[o], 16)),
                      (t[r] = [(n >> 16) & 255, (n >> 8) & 255, 255 & n]);
                  }
                  return t;
                })()).transparent = [0, 0, 0, 0]),
              (i = Gt[i.toLowerCase()]) && {
                r: i[0],
                g: i[1],
                b: i[2],
                a: 4 === i.length ? i[3] : 255,
              }) ||
              se(t))),
          (this._rgb = a),
          (this._valid = !!a);
      }
      get valid() {
        return this._valid;
      }
      get rgb() {
        var t = ee(this._rgb);
        return t && (t.a = o(t.a)), t;
      }
      set rgb(t) {
        this._rgb = ie(t);
      }
      rgbString() {
        return this._valid
          ? (t = this._rgb) &&
              (t.a < 255
                ? `rgba(${t.r}, ${t.g}, ${t.b}, ${o(t.a)})`
                : `rgb(${t.r}, ${t.g}, ${t.b})`)
          : void 0;
        var t;
      }
      hexString() {
        return this._valid
          ? ((t = this._rgb),
            (e = t),
            (e = Bt(e.r) && Bt(e.g) && Bt(e.b) && Bt(e.a) ? Ft : Vt),
            t
              ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t = t.a) < 255 ? e(t) : "")
              : void 0)
          : void 0;
        var t, e;
      }
      hslString() {
        if (this._valid) {
          var t,
            e,
            i,
            s = this._rgb;
          if (s)
            return (
              (i = Yt(s)),
              (t = i[0]),
              (e = It(i[1])),
              (i = It(i[2])),
              s.a < 255
                ? `hsla(${t}, ${e}%, ${i}%, ${o(s.a)})`
                : `hsl(${t}, ${e}%, ${i}%)`
            );
        }
      }
      mix(t, e) {
        if (t) {
          const s = this.rgb,
            a = t.rgb;
          var t = void 0 === e ? 0.5 : e,
            e = 2 * t - 1,
            i = s.a - a.a,
            e = (1 + (e * i == -1 ? e : (e + i) / (1 + e * i))) / 2,
            i = 1 - e;
          (s.r = 255 & (e * s.r + i * a.r + 0.5)),
            (s.g = 255 & (e * s.g + i * a.g + 0.5)),
            (s.b = 255 & (e * s.b + i * a.b + 0.5)),
            (s.a = t * s.a + (1 - t) * a.a),
            (this.rgb = s);
        }
        return this;
      }
      interpolate(t, e) {
        return (
          t &&
            (this._rgb =
              ((i = this._rgb),
              (t = t._rgb),
              (e = e),
              (s = Qt(o(i.r))),
              (a = Qt(o(i.g))),
              (n = Qt(o(i.b))),
              {
                r: Rt(Jt(s + e * (Qt(o(t.r)) - s))),
                g: Rt(Jt(a + e * (Qt(o(t.g)) - a))),
                b: Rt(Jt(n + e * (Qt(o(t.b)) - n))),
                a: i.a + e * (t.a - i.a),
              })),
          this
        );
        var i, s, a, n;
      }
      clone() {
        return new ae(this.rgb);
      }
      alpha(t) {
        return (this._rgb.a = Rt(t)), this;
      }
      clearer(t) {
        return (this._rgb.a *= 1 - t), this;
      }
      greyscale() {
        const t = this._rgb,
          e = Tt(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
        return (t.r = t.g = t.b = e), this;
      }
      opaquer(t) {
        return (this._rgb.a *= 1 + t), this;
      }
      negate() {
        const t = this._rgb;
        return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
      }
      lighten(t) {
        return te(this._rgb, 2, t), this;
      }
      darken(t) {
        return te(this._rgb, 2, -t), this;
      }
      saturate(t) {
        return te(this._rgb, 1, t), this;
      }
      desaturate(t) {
        return te(this._rgb, 1, -t), this;
      }
      rotate(t) {
        return (
          (e = this._rgb),
          (t = t),
          ((i = Yt(e))[0] = Xt(i[0] + t)),
          (i = Ut(i)),
          (e.r = i[0]),
          (e.g = i[1]),
          (e.b = i[2]),
          this
        );
        var e, i;
      }
    }
    function ne(t) {
      return (
        !(!t || "object" != typeof t) &&
        ("[object CanvasPattern]" === (t = t.toString()) ||
          "[object CanvasGradient]" === t)
      );
    }
    function oe(t) {
      return ne(t) ? t : new ae(t);
    }
    function re(t) {
      return ne(t) ? t : new ae(t).saturate(0.5).darken(0.1).hexString();
    }
    const le = ["x", "y", "borderWidth", "radius", "tension"],
      he = ["color", "borderColor", "backgroundColor"],
      ce = new Map();
    function de(t, e, a) {
      return (function (t, e) {
        e = a || {};
        var i = t + JSON.stringify(e);
        let s = ce.get(i);
        return s || ((s = new Intl.NumberFormat(t, e)), ce.set(i, s)), s;
      })(e).format(t);
    }
    const ue = {
      values: (t) => (O(t) ? t : "" + t),
      numeric(t, e, i) {
        if (0 === t) return "0";
        var s = this.chart.options.locale;
        let a,
          n = t;
        if (1 < i.length) {
          const e = Math.max(
            Math.abs(i[0].value),
            Math.abs(i[i.length - 1].value)
          );
          (e < 1e-4 || 1e15 < e) && (a = "scientific"),
            (n = (function (t) {
              let e =
                3 < i.length
                  ? i[2].value - i[1].value
                  : i[1].value - i[0].value;
              return (e =
                1 <= Math.abs(e) && t !== Math.floor(t)
                  ? t - Math.floor(t)
                  : e);
            })(t));
        }
        var o = r(Math.abs(n)),
          o = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
          o = {
            notation: a,
            minimumFractionDigits: o,
            maximumFractionDigits: o,
          };
        return Object.assign(o, this.options.ticks.format), de(t, s, o);
      },
      logarithmic(t, e, i) {
        if (0 === t) return "0";
        var s = i[e].significand || t / Math.pow(10, Math.floor(r(t)));
        return [1, 2, 3, 5, 10, 15].includes(s) || e > 0.8 * i.length
          ? ue.numeric.call(this, t, e, i)
          : "";
      },
    };
    var ge = { formatters: ue };
    const fe = Object.create(null),
      pe = Object.create(null);
    function me(i, t) {
      if (!t) return i;
      var s = t.split(".");
      for (let t = 0, e = s.length; t < e; ++t) {
        var a = s[t];
        i = i[a] || (i[a] = Object.create(null));
      }
      return i;
    }
    function be(t, e, i) {
      return "string" == typeof e ? Y(me(t, e), i) : Y(me(t, ""), e);
    }
    var R = new (class {
      constructor(t, e) {
        (this.animation = void 0),
          (this.backgroundColor = "rgba(0,0,0,0.1)"),
          (this.borderColor = "rgba(0,0,0,0.1)"),
          (this.color = "#666"),
          (this.datasets = {}),
          (this.devicePixelRatio = (t) =>
            t.chart.platform.getDevicePixelRatio()),
          (this.elements = {}),
          (this.events = [
            "mousemove",
            "mouseout",
            "click",
            "touchstart",
            "touchmove",
          ]),
          (this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null,
          }),
          (this.hover = {}),
          (this.hoverBackgroundColor = (t, e) => re(e.backgroundColor)),
          (this.hoverBorderColor = (t, e) => re(e.borderColor)),
          (this.hoverColor = (t, e) => re(e.color)),
          (this.indexAxis = "x"),
          (this.interaction = {
            mode: "nearest",
            intersect: !0,
            includeInvisible: !1,
          }),
          (this.maintainAspectRatio = !0),
          (this.onHover = null),
          (this.onClick = null),
          (this.parsing = !0),
          (this.plugins = {}),
          (this.responsive = !0),
          (this.scale = void 0),
          (this.scales = {}),
          (this.showLine = !0),
          (this.drawActiveElementsOnTop = !0),
          this.describe(t),
          this.apply(e);
      }
      set(t, e) {
        return be(this, t, e);
      }
      get(t) {
        return me(this, t);
      }
      describe(t, e) {
        return be(pe, t, e);
      }
      override(t, e) {
        return be(fe, t, e);
      }
      route(t, e, i, s) {
        const a = me(this, t),
          n = me(this, i),
          o = "_" + e;
        Object.defineProperties(a, {
          [o]: { value: a[e], writable: !0 },
          [e]: {
            enumerable: !0,
            get() {
              var t = this[o],
                e = n[s];
              return A(t) ? Object.assign({}, e, t) : T(t, e);
            },
            set(t) {
              this[o] = t;
            },
          },
        });
      }
      apply(t) {
        t.forEach((t) => t(this));
      }
    })(
      {
        _scriptable: (t) => !t.startsWith("on"),
        _indexable: (t) => "events" !== t,
        hover: { _fallback: "interaction" },
        interaction: { _scriptable: !1, _indexable: !1 },
      },
      [
        function (t) {
          t.set("animation", {
            delay: void 0,
            duration: 1e3,
            easing: "easeOutQuart",
            fn: void 0,
            from: void 0,
            loop: void 0,
            to: void 0,
            type: void 0,
          }),
            t.describe("animation", {
              _fallback: !1,
              _indexable: !1,
              _scriptable: (t) =>
                "onProgress" !== t && "onComplete" !== t && "fn" !== t,
            }),
            t.set("animations", {
              colors: { type: "color", properties: he },
              numbers: { type: "number", properties: le },
            }),
            t.describe("animations", { _fallback: "animation" }),
            t.set("transitions", {
              active: { animation: { duration: 400 } },
              resize: { animation: { duration: 0 } },
              show: {
                animations: {
                  colors: { from: "transparent" },
                  visible: { type: "boolean", duration: 0 },
                },
              },
              hide: {
                animations: {
                  colors: { to: "transparent" },
                  visible: {
                    type: "boolean",
                    easing: "linear",
                    fn: (t) => 0 | t,
                  },
                },
              },
            });
        },
        function (t) {
          t.set("layout", {
            autoPadding: !0,
            padding: { top: 0, right: 0, bottom: 0, left: 0 },
          });
        },
        function (t) {
          t.set("scale", {
            display: !0,
            offset: !1,
            reverse: !1,
            beginAtZero: !1,
            bounds: "ticks",
            clip: !0,
            grace: 0,
            grid: {
              display: !0,
              lineWidth: 1,
              drawOnChartArea: !0,
              drawTicks: !0,
              tickLength: 8,
              tickWidth: (t, e) => e.lineWidth,
              tickColor: (t, e) => e.color,
              offset: !1,
            },
            border: { display: !0, dash: [], dashOffset: 0, width: 1 },
            title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
            ticks: {
              minRotation: 0,
              maxRotation: 50,
              mirror: !1,
              textStrokeWidth: 0,
              textStrokeColor: "",
              padding: 3,
              display: !0,
              autoSkip: !0,
              autoSkipPadding: 3,
              labelOffset: 0,
              callback: ge.formatters.values,
              minor: {},
              major: {},
              align: "center",
              crossAlign: "near",
              showLabelBackdrop: !1,
              backdropColor: "rgba(255, 255, 255, 0.75)",
              backdropPadding: 2,
            },
          }),
            t.route("scale.ticks", "color", "", "color"),
            t.route("scale.grid", "color", "", "borderColor"),
            t.route("scale.border", "color", "", "borderColor"),
            t.route("scale.title", "color", "", "color"),
            t.describe("scale", {
              _fallback: !1,
              _scriptable: (t) =>
                !t.startsWith("before") &&
                !t.startsWith("after") &&
                "callback" !== t &&
                "parser" !== t,
              _indexable: (t) =>
                "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t,
            }),
            t.describe("scales", { _fallback: "scale" }),
            t.describe("scale.ticks", {
              _scriptable: (t) => "backdropPadding" !== t && "callback" !== t,
              _indexable: (t) => "backdropPadding" !== t,
            });
        },
      ]
    );
    function xe() {
      return "undefined" != typeof window && "undefined" != typeof document;
    }
    function ve(t) {
      let e = t.parentNode;
      return (e = e && "[object ShadowRoot]" === e.toString() ? e.host : e);
    }
    function _e(t, e, i) {
      let s;
      return (
        "string" == typeof t
          ? ((s = parseInt(t, 10)),
            -1 !== t.indexOf("%") && (s = (s / 100) * e.parentNode[i]))
          : (s = t),
        s
      );
    }
    const ye = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null);
    function Me(t, e) {
      return ye(t).getPropertyValue(e);
    }
    const we = ["top", "right", "bottom", "left"];
    function ke(e, i, s) {
      const a = {};
      s = s ? "-" + s : "";
      for (let t = 0; t < 4; t++) {
        var n = we[t];
        a[n] = parseFloat(e[i + "-" + n + s]) || 0;
      }
      return (a.width = a.left + a.right), (a.height = a.top + a.bottom), a;
    }
    function Se(t, e) {
      if ("native" in t) return t;
      var { canvas: i, currentDevicePixelRatio: s } = e,
        a = ye(i),
        n = "border-box" === a.boxSizing,
        o = ke(a, "padding"),
        a = ke(a, "border", "width"),
        {
          x: t,
          y: r,
          box: l,
        } = (function (t, e) {
          var i,
            s = t.touches,
            s = s && s.length ? s[0] : t,
            { offsetX: a, offsetY: n } = s;
          let o,
            r,
            l = !1;
          if (
            ((i = n), (t = t.target), !(0 < a || 0 < i) || (t && t.shadowRoot))
          ) {
            const t = e.getBoundingClientRect();
            (o = s.clientX - t.left), (r = s.clientY - t.top), (l = !0);
          } else (o = a), (r = n);
          return { x: o, y: r, box: l };
        })(t, i),
        h = o.left + (l && a.left),
        l = o.top + (l && a.top);
      let { width: c, height: d } = e;
      return (
        n && ((c -= o.width + a.width), (d -= o.height + a.height)),
        {
          x: Math.round((((t - h) / c) * i.width) / s),
          y: Math.round((((r - l) / d) * i.height) / s),
        }
      );
    }
    const Pe = (t) => Math.round(10 * t) / 10;
    function De(t, e, i, s) {
      var a = ye(t),
        n = ke(a, "margin"),
        o = _e(a.maxWidth, t, "clientWidth") || tt,
        r = _e(a.maxHeight, t, "clientHeight") || tt,
        t = (function (t, e, i) {
          let s, a;
          if (void 0 === e || void 0 === i) {
            const n = ve(t);
            if (n) {
              const t = n.getBoundingClientRect(),
                o = ye(n),
                r = ke(o, "border", "width"),
                l = ke(o, "padding");
              (e = t.width - l.width - r.width),
                (i = t.height - l.height - r.height),
                (s = _e(o.maxWidth, n, "clientWidth")),
                (a = _e(o.maxHeight, n, "clientHeight"));
            } else (e = t.clientWidth), (i = t.clientHeight);
          }
          return { width: e, height: i, maxWidth: s || tt, maxHeight: a || tt };
        })(t, e, i);
      let { width: l, height: h } = t;
      if ("content-box" === a.boxSizing) {
        const t = ke(a, "border", "width"),
          e = ke(a, "padding");
        (l -= e.width + t.width), (h -= e.height + t.height);
      }
      return (
        (l = Math.max(0, l - n.width)),
        (h = Math.max(0, s ? l / s : h - n.height)),
        (l = Pe(Math.min(l, o, t.maxWidth))),
        (h = Pe(Math.min(h, r, t.maxHeight))),
        l && !h && (h = Pe(l / 2)),
        (void 0 !== e || void 0 !== i) &&
          s &&
          t.height &&
          h > t.height &&
          ((h = t.height), (l = Pe(Math.floor(h * s)))),
        { width: l, height: h }
      );
    }
    function Ce(t, e, i) {
      var e = e || 1,
        s = Math.floor(t.height * e),
        a = Math.floor(t.width * e);
      (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
      const n = t.canvas;
      return (
        n.style &&
          (i || (!n.style.height && !n.style.width)) &&
          ((n.style.height = t.height + "px"),
          (n.style.width = t.width + "px")),
        (t.currentDevicePixelRatio !== e || n.height !== s || n.width !== a) &&
          ((t.currentDevicePixelRatio = e),
          (n.height = s),
          (n.width = a),
          t.ctx.setTransform(e, 0, 0, e, 0, 0),
          !0)
      );
    }
    var Oe = (function () {
      let t = !1;
      try {
        var e = {
          get passive() {
            return !(t = !0);
          },
        };
        window.addEventListener("test", null, e),
          window.removeEventListener("test", null, e);
      } catch (t) {}
      return t;
    })();
    function Ae(t, e) {
      const i = Me(t, e),
        s = i && i.match(/^(\d+)(\.\d+)?px$/);
      return s ? +s[1] : void 0;
    }
    function Te(t) {
      return !t || P(t.size) || P(t.family)
        ? null
        : (t.style ? t.style + " " : "") +
            (t.weight ? t.weight + " " : "") +
            t.size +
            "px " +
            t.family;
    }
    function Le(t, e, i, s, a) {
      let n = e[a];
      return (
        n || ((n = e[a] = t.measureText(a).width), i.push(a)),
        (s = n > s ? n : s)
      );
    }
    function Ee(t, e, i, s) {
      let a = ((s = s || {}).data = s.data || {}),
        n = (s.garbageCollect = s.garbageCollect || []),
        o =
          (s.font !== e &&
            ((a = s.data = {}), (n = s.garbageCollect = []), (s.font = e)),
          t.save(),
          (t.font = e),
          0);
      var r = i.length;
      let l, h, c, d, u;
      for (l = 0; l < r; l++)
        if (null == (d = i[l]) || O(d)) {
          if (O(d))
            for (h = 0, c = d.length; h < c; h++)
              null == (u = d[h]) || O(u) || (o = Le(t, a, n, o, u));
        } else o = Le(t, a, n, o, d);
      t.restore();
      var g = n.length / 2;
      if (g > i.length) {
        for (l = 0; l < g; l++) delete a[n[l]];
        n.splice(0, g);
      }
      return o;
    }
    function Re(t, e, i) {
      (t = t.currentDevicePixelRatio), (i = 0 !== i ? Math.max(i / 2, 0.5) : 0);
      return Math.round((e - i) * t) / t + i;
    }
    function Ie(t, e) {
      (e = e || t.getContext("2d")).save(),
        e.resetTransform(),
        e.clearRect(0, 0, t.width, t.height),
        e.restore();
    }
    function ze(t, e, i, s) {
      Fe(t, e, i, s, null);
    }
    function Fe(t, e, i, s, a) {
      let n, o, r, l, h, c, d, u;
      const g = e.pointStyle,
        f = e.rotation,
        p = e.radius;
      let m = (f || 0) * et;
      if (
        g &&
        "object" == typeof g &&
        ("[object HTMLImageElement]" === (n = g.toString()) ||
          "[object HTMLCanvasElement]" === n)
      )
        return (
          t.save(),
          t.translate(i, s),
          t.rotate(m),
          t.drawImage(g, -g.width / 2, -g.height / 2, g.width, g.height),
          void t.restore()
        );
      if (!(isNaN(p) || p <= 0)) {
        switch ((t.beginPath(), g)) {
          default:
            a ? t.ellipse(i, s, a / 2, p, 0, 0, _) : t.arc(i, s, p, 0, _),
              t.closePath();
            break;
          case "triangle":
            (c = a ? a / 2 : p),
              t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
              (m += st),
              t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
              (m += st),
              t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
              t.closePath();
            break;
          case "rectRounded":
            (h = 0.516 * p),
              (l = p - h),
              (o = Math.cos(m + it) * l),
              (d = Math.cos(m + it) * (a ? a / 2 - h : l)),
              (r = Math.sin(m + it) * l),
              (u = Math.sin(m + it) * (a ? a / 2 - h : l)),
              t.arc(i - d, s - r, h, m - S, m - D),
              t.arc(i + u, s - o, h, m - D, m),
              t.arc(i + d, s + r, h, m, m + D),
              t.arc(i - u, s + o, h, m + D, m + S),
              t.closePath();
            break;
          case "rect":
            if (!f) {
              (l = Math.SQRT1_2 * p),
                (c = a ? a / 2 : l),
                t.rect(i - c, s - l, 2 * c, 2 * l);
              break;
            }
            m += it;
          case "rectRot":
            (d = Math.cos(m) * (a ? a / 2 : p)),
              (o = Math.cos(m) * p),
              (r = Math.sin(m) * p),
              (u = Math.sin(m) * (a ? a / 2 : p)),
              t.moveTo(i - d, s - r),
              t.lineTo(i + u, s - o),
              t.lineTo(i + d, s + r),
              t.lineTo(i - u, s + o),
              t.closePath();
            break;
          case "crossRot":
            m += it;
          case "cross":
            (d = Math.cos(m) * (a ? a / 2 : p)),
              (o = Math.cos(m) * p),
              (r = Math.sin(m) * p),
              (u = Math.sin(m) * (a ? a / 2 : p)),
              t.moveTo(i - d, s - r),
              t.lineTo(i + d, s + r),
              t.moveTo(i + u, s - o),
              t.lineTo(i - u, s + o);
            break;
          case "star":
            (d = Math.cos(m) * (a ? a / 2 : p)),
              (o = Math.cos(m) * p),
              (r = Math.sin(m) * p),
              (u = Math.sin(m) * (a ? a / 2 : p)),
              t.moveTo(i - d, s - r),
              t.lineTo(i + d, s + r),
              t.moveTo(i + u, s - o),
              t.lineTo(i - u, s + o),
              (m += it),
              (d = Math.cos(m) * (a ? a / 2 : p)),
              (o = Math.cos(m) * p),
              (r = Math.sin(m) * p),
              (u = Math.sin(m) * (a ? a / 2 : p)),
              t.moveTo(i - d, s - r),
              t.lineTo(i + d, s + r),
              t.moveTo(i + u, s - o),
              t.lineTo(i - u, s + o);
            break;
          case "line":
            (o = a ? a / 2 : Math.cos(m) * p),
              (r = Math.sin(m) * p),
              t.moveTo(i - o, s - r),
              t.lineTo(i + o, s + r);
            break;
          case "dash":
            t.moveTo(i, s),
              t.lineTo(i + Math.cos(m) * (a ? a / 2 : p), s + Math.sin(m) * p);
            break;
          case !1:
            t.closePath();
        }
        t.fill(), 0 < e.borderWidth && t.stroke();
      }
    }
    function M(t, e, i) {
      return (
        (i = i || 0.5),
        !e ||
          (t &&
            t.x > e.left - i &&
            t.x < e.right + i &&
            t.y > e.top - i &&
            t.y < e.bottom + i)
      );
    }
    function Ve(t, e) {
      t.save(),
        t.beginPath(),
        t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
        t.clip();
    }
    function Be(t) {
      t.restore();
    }
    function We(t, e, i, s, a) {
      if (!e) return t.lineTo(i.x, i.y);
      if ("middle" === a) {
        const s = (e.x + i.x) / 2;
        t.lineTo(s, e.y), t.lineTo(s, i.y);
      } else ("after" === a) != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
      t.lineTo(i.x, i.y);
    }
    function Ne(t, e, i, s) {
      if (!e) return t.lineTo(i.x, i.y);
      t.bezierCurveTo(
        s ? e.cp1x : e.cp2x,
        s ? e.cp1y : e.cp2y,
        s ? i.cp2x : i.cp1x,
        s ? i.cp2y : i.cp1y,
        i.x,
        i.y
      );
    }
    function He(t, e, i, s, a, n = {}) {
      var o,
        r,
        l,
        h,
        c,
        d,
        u,
        g,
        f = O(e) ? e : [e],
        p = 0 < n.strokeWidth && "" !== n.strokeColor;
      let m, b;
      for (
        t.save(),
          t.font = a.string,
          e = t,
          (g = n).translation &&
            e.translate(g.translation[0], g.translation[1]),
          P(g.rotation) || e.rotate(g.rotation),
          g.color && (e.fillStyle = g.color),
          g.textAlign && (e.textAlign = g.textAlign),
          g.textBaseline && (e.textBaseline = g.textBaseline),
          m = 0;
        m < f.length;
        ++m
      )
        (b = f[m]),
          n.backdrop &&
            ((c = t),
            (d = n.backdrop),
            (u = void 0),
            (u = c.fillStyle),
            (c.fillStyle = d.color),
            c.fillRect(d.left, d.top, d.width, d.height),
            (c.fillStyle = u)),
          p &&
            (n.strokeColor && (t.strokeStyle = n.strokeColor),
            P(n.strokeWidth) || (t.lineWidth = n.strokeWidth),
            t.strokeText(b, i, s, n.maxWidth)),
          t.fillText(b, i, s, n.maxWidth),
          (d = t),
          (c = i),
          (u = s),
          (o = b),
          (h = l = void 0),
          ((r = n).strikethrough || r.underline) &&
            ((l = c - (o = d.measureText(o)).actualBoundingBoxLeft),
            (c = c + o.actualBoundingBoxRight),
            (h = u - o.actualBoundingBoxAscent),
            (u = u + o.actualBoundingBoxDescent),
            (o = r.strikethrough ? (h + u) / 2 : u),
            (d.strokeStyle = d.fillStyle),
            d.beginPath(),
            (d.lineWidth = r.decorationWidth || 2),
            d.moveTo(l, o),
            d.lineTo(c, o),
            d.stroke()),
          (s += Number(a.lineHeight));
      t.restore();
    }
    function je(t, e) {
      var { x: e, y: i, w: s, h: a, radius: n } = e;
      t.arc(e + n.topLeft, i + n.topLeft, n.topLeft, 1.5 * S, S, !0),
        t.lineTo(e, i + a - n.bottomLeft),
        t.arc(e + n.bottomLeft, i + a - n.bottomLeft, n.bottomLeft, S, D, !0),
        t.lineTo(e + s - n.bottomRight, i + a),
        t.arc(
          e + s - n.bottomRight,
          i + a - n.bottomRight,
          n.bottomRight,
          D,
          0,
          !0
        ),
        t.lineTo(e + s, i + n.topRight),
        t.arc(e + s - n.topRight, i + n.topRight, n.topRight, 0, -D, !0),
        t.lineTo(e + n.topLeft, i);
    }
    function Ye(r, l = [""], t, e, a = () => r[0]) {
      const i = t || r;
      void 0 === e && (e = ti("_fallback", r));
      t = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: r,
        _rootScopes: i,
        _fallback: e,
        _getTarget: a,
        override: (t) => Ye([t, ...r], l, i, e),
      };
      return new Proxy(t, {
        deleteProperty: (t, e) => (
          delete t[e], delete t._keys, delete r[0][e], !0
        ),
        get: (n, o) =>
          Ke(n, o, () => {
            var t,
              e = o,
              i = r,
              s = n;
            for (const a of l)
              if (((t = ti(Xe(a, e), i)), void 0 !== t))
                return qe(e, t) ? Je(i, s, e, t) : t;
          }),
        getOwnPropertyDescriptor: (t, e) =>
          Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
        getPrototypeOf: () => Reflect.getPrototypeOf(r[0]),
        has: (t, e) => ei(t).includes(e),
        ownKeys: (t) => ei(t),
        set(t, e, i) {
          const s = t._storage || (t._storage = a());
          return (t[e] = s[e] = i), delete t._keys, !0;
        },
      });
    }
    function $e(s, e, i, a) {
      var t = {
        _cacheable: !1,
        _proxy: s,
        _context: e,
        _subProxy: i,
        _stack: new Set(),
        _descriptors: Ue(s, a),
        setContext: (t) => $e(s, t, i, a),
        override: (t) => $e(s.override(t), e, i, a),
      };
      return new Proxy(t, {
        deleteProperty: (t, e) => (delete t[e], delete s[e], !0),
        get: (r, h, c) =>
          Ke(r, h, () => {
            {
              var l = r,
                e = h,
                i = c;
              const {
                _proxy: s,
                _context: a,
                _subProxy: n,
                _descriptors: o,
              } = l;
              let t = s[e];
              return (
                O(
                  (t =
                    u(t) && o.isScriptable(e)
                      ? (function (t, e, i) {
                          const {
                            _proxy: s,
                            _context: a,
                            _subProxy: n,
                            _stack: o,
                          } = l;
                          if (o.has(t))
                            throw new Error(
                              "Recursion detected: " +
                                Array.from(o).join("->") +
                                "->" +
                                t
                            );
                          o.add(t);
                          let r = e(a, n || i);
                          return (
                            o.delete(t),
                            (r = qe(t, r) ? Je(s._scopes, s, t, r) : r)
                          );
                        })(e, t, i)
                      : t)
                ) &&
                  t.length &&
                  (t = (function (t, e, i, s) {
                    const {
                      _proxy: a,
                      _context: n,
                      _subProxy: o,
                      _descriptors: r,
                    } = i;
                    if (void 0 !== n.index && s(t))
                      return e[n.index % e.length];
                    if (A(e[0])) {
                      const i = e,
                        s = a._scopes.filter((t) => t !== i);
                      e = [];
                      for (const A of i) {
                        const i = Je(s, a, t, A);
                        e.push($e(i, n, o && o[t], r));
                      }
                    }
                    return e;
                  })(e, t, l, o.isIndexable)),
                (t = qe(e, t) ? $e(t, a, n && n[e], o) : t)
              );
            }
          }),
        getOwnPropertyDescriptor: (t, e) =>
          t._descriptors.allKeys
            ? Reflect.has(s, e)
              ? { enumerable: !0, configurable: !0 }
              : void 0
            : Reflect.getOwnPropertyDescriptor(s, e),
        getPrototypeOf: () => Reflect.getPrototypeOf(s),
        has: (t, e) => Reflect.has(s, e),
        ownKeys: () => Reflect.ownKeys(s),
        set: (t, e, i) => ((s[e] = i), delete t[e], !0),
      });
    }
    function Ue(t, e = { scriptable: !0, indexable: !0 }) {
      const {
        _scriptable: i = e.scriptable,
        _indexable: s = e.indexable,
        _allKeys: a = e.allKeys,
      } = t;
      return {
        allKeys: a,
        scriptable: i,
        indexable: s,
        isScriptable: u(i) ? i : () => i,
        isIndexable: u(s) ? s : () => s,
      };
    }
    const Xe = (t, e) => (t ? t + K(e) : e),
      qe = (t, e) =>
        A(e) &&
        "adapters" !== t &&
        (null === Object.getPrototypeOf(e) || e.constructor === Object);
    function Ke(t, e, i) {
      if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
      i = i();
      return (t[e] = i);
    }
    function Ge(t, e, i) {
      return u(t) ? t(e, i) : t;
    }
    function Ze(t, e, i, s, a) {
      for (const r of e) {
        (n = i), (o = r);
        const e = !0 === n ? o : "string" == typeof n ? m(o, n) : void 0;
        if (e) {
          t.add(e);
          o = Ge(e._fallback, i, a);
          if (void 0 !== o && o !== i && o !== s) return o;
        } else if (!1 === e && void 0 !== s && i !== s) return null;
      }
      var n, o;
      return !1;
    }
    function Je(t, s, a, n) {
      const e = s._rootScopes,
        i = Ge(s._fallback, a, n),
        o = [...t, ...e],
        r = new Set();
      r.add(n);
      t = Qe(r, o, a, i || a, n);
      return (
        null !== t &&
        (void 0 === i || i === a || null !== Qe(r, o, i, t, n)) &&
        Ye(Array.from(r), [""], e, i, () => {
          {
            var t = a,
              e = n;
            const i = s._getTarget();
            return t in i || (i[t] = {}), O((t = i[t])) && A(e) ? e : t || {};
          }
        })
      );
    }
    function Qe(t, e, i, s, a) {
      for (; i; ) i = Ze(t, e, i, s, a);
      return i;
    }
    function ti(t, e) {
      for (const i of e)
        if (i) {
          const e = i[t];
          if (void 0 !== e) return e;
        }
    }
    function ei(t) {
      let e = t._keys;
      return (e =
        e ||
        (t._keys = (function (t) {
          const e = new Set();
          for (const i of t)
            for (const t of Object.keys(i).filter((t) => !t.startsWith("_")))
              e.add(t);
          return Array.from(e);
        })(t._scopes)));
    }
    function ii(t, e, i, s) {
      const a = t["iScale"],
        { key: n = "r" } = this._parsing,
        o = new Array(s);
      let r, l, h, c;
      for (r = 0, l = s; r < l; ++r)
        (c = e[(h = r + i)]), (o[r] = { r: a.parse(m(c, n), h) });
      return o;
    }
    const si = Number.EPSILON || 1e-14,
      ai = (t, e) => e < t.length && !t[e].skip && t[e],
      ni = (t) => ("x" === t ? "y" : "x");
    function oi(t, e, i, s) {
      var t = t.skip ? e : t,
        a = e,
        e = i.skip ? e : i,
        i = gt(a, t),
        n = gt(e, a);
      let o = i / (i + n),
        r = n / (i + n);
      (o = isNaN(o) ? 0 : o), (r = isNaN(r) ? 0 : r);
      (i = s * o), (n = s * r);
      return {
        previous: { x: a.x - i * (e.x - t.x), y: a.y - i * (e.y - t.y) },
        next: { x: a.x + n * (e.x - t.x), y: a.y + n * (e.y - t.y) },
      };
    }
    function ri(t, n = "x") {
      const e = ni(n),
        i = t.length,
        r = Array(i).fill(0),
        l = Array(i);
      let s,
        a,
        o,
        h = ai(t, 0);
      for (s = 0; s < i; ++s)
        if (((a = o), (o = h), (h = ai(t, s + 1)), o)) {
          if (h) {
            const t = h[n] - o[n];
            r[s] = 0 != t ? (h[e] - o[e]) / t : 0;
          }
          l[s] = a
            ? h
              ? y(r[s - 1]) !== y(r[s])
                ? 0
                : (r[s - 1] + r[s]) / 2
              : r[s - 1]
            : r[s];
        }
      {
        var c = t,
          d = r,
          u = l,
          g = c.length;
        let e,
          i,
          s,
          a,
          n,
          o = ai(c, 0);
        for (let t = 0; t < g - 1; ++t)
          (n = o),
            (o = ai(c, t + 1)),
            n &&
              o &&
              (at(d[t], 0, si)
                ? (u[t] = u[t + 1] = 0)
                : ((e = u[t] / d[t]),
                  (i = u[t + 1] / d[t]),
                  (a = Math.pow(e, 2) + Math.pow(i, 2)) <= 9 ||
                    ((s = 3 / Math.sqrt(a)),
                    (u[t] = e * s * d[t]),
                    (u[t + 1] = i * s * d[t]))));
      }
      {
        var [f, p, m = "x"] = [t, l, n];
        const b = ni(m),
          x = f.length;
        let e,
          i,
          s,
          a = ai(f, 0);
        for (let t = 0; t < x; ++t)
          if (((i = s), (s = a), (a = ai(f, t + 1)), s)) {
            const x = s[m],
              v = s[b];
            i &&
              ((e = (x - i[m]) / 3),
              (s["cp1" + m] = x - e),
              (s["cp1" + b] = v - e * p[t])),
              a &&
                ((e = (a[m] - x) / 3),
                (s["cp2" + m] = x + e),
                (s["cp2" + b] = v + e * p[t]));
          }
        return;
      }
    }
    function li(t, e, i) {
      return Math.max(Math.min(t, i), e);
    }
    function hi(o, e, r, i, t) {
      let s, a, n, l;
      if (
        (e.spanGaps && (o = o.filter((t) => !t.skip)),
        "monotone" === e.cubicInterpolationMode)
      )
        ri(o, t);
      else {
        let t = i ? o[o.length - 1] : o[0];
        for (s = 0, a = o.length; s < a; ++s)
          (n = o[s]),
            (l = oi(t, n, o[Math.min(s + 1, a - (i ? 0 : 1)) % a], e.tension)),
            (n.cp1x = l.previous.x),
            (n.cp1y = l.previous.y),
            (n.cp2x = l.next.x),
            (n.cp2y = l.next.y),
            (t = n);
      }
      if (e.capBezierPoints) {
        var h = o,
          c = r;
        let t,
          e,
          i,
          s,
          a,
          n = M(h[0], c);
        for (t = 0, e = h.length; t < e; ++t)
          (a = s),
            (s = n),
            (n = t < e - 1 && M(h[t + 1], c)),
            s &&
              ((i = h[t]),
              a &&
                ((i.cp1x = li(i.cp1x, c.left, c.right)),
                (i.cp1y = li(i.cp1y, c.top, c.bottom))),
              n &&
                ((i.cp2x = li(i.cp2x, c.left, c.right)),
                (i.cp2y = li(i.cp2y, c.top, c.bottom))));
      }
    }
    const ci = (t) => 0 === t || 1 === t,
      di = (t, e, i) => -Math.pow(2, 10 * --t) * Math.sin(((t - e) * _) / i),
      ui = (t, e, i) => Math.pow(2, -10 * t) * Math.sin(((t - e) * _) / i) + 1,
      gi = {
        linear: (t) => t,
        easeInQuad: (t) => t * t,
        easeOutQuad: (t) => -t * (t - 2),
        easeInOutQuad: (t) =>
          (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
        easeInCubic: (t) => t * t * t,
        easeOutCubic: (t) => --t * t * t + 1,
        easeInOutCubic: (t) =>
          (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
        easeInQuart: (t) => t * t * t * t,
        easeOutQuart: (t) => -(--t * t * t * t - 1),
        easeInOutQuart: (t) =>
          (t /= 0.5) < 1
            ? 0.5 * t * t * t * t
            : -0.5 * ((t -= 2) * t * t * t - 2),
        easeInQuint: (t) => t * t * t * t * t,
        easeOutQuint: (t) => --t * t * t * t * t + 1,
        easeInOutQuint: (t) =>
          (t /= 0.5) < 1
            ? 0.5 * t * t * t * t * t
            : 0.5 * ((t -= 2) * t * t * t * t + 2),
        easeInSine: (t) => 1 - Math.cos(t * D),
        easeOutSine: (t) => Math.sin(t * D),
        easeInOutSine: (t) => -0.5 * (Math.cos(S * t) - 1),
        easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
        easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
        easeInOutExpo: (t) =>
          ci(t)
            ? t
            : t < 0.5
            ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
            : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
        easeInCirc: (t) => (1 <= t ? t : -(Math.sqrt(1 - t * t) - 1)),
        easeOutCirc: (t) => Math.sqrt(1 - --t * t),
        easeInOutCirc: (t) =>
          (t /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - t * t) - 1)
            : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
        easeInElastic: (t) => (ci(t) ? t : di(t, 0.075, 0.3)),
        easeOutElastic: (t) => (ci(t) ? t : ui(t, 0.075, 0.3)),
        easeInOutElastic(t) {
          return ci(t)
            ? t
            : t < 0.5
            ? 0.5 * di(2 * t, 0.1125, 0.45)
            : 0.5 + 0.5 * ui(2 * t - 1, 0.1125, 0.45);
        },
        easeInBack(t) {
          return t * t * (2.70158 * t - 1.70158);
        },
        easeOutBack(t) {
          return --t * t * (2.70158 * t + 1.70158) + 1;
        },
        easeInOutBack(t) {
          let e = 1.70158;
          return (t /= 0.5) < 1
            ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
            : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        },
        easeInBounce: (t) => 1 - gi.easeOutBounce(1 - t),
        easeOutBounce(t) {
          var e = 7.5625,
            i = 2.75;
          return t < 1 / i
            ? e * t * t
            : t < 2 / i
            ? e * (t -= 1.5 / i) * t + 0.75
            : t < 2.5 / i
            ? e * (t -= 2.25 / i) * t + 0.9375
            : e * (t -= 2.625 / i) * t + 0.984375;
        },
        easeInOutBounce: (t) =>
          t < 0.5
            ? 0.5 * gi.easeInBounce(2 * t)
            : 0.5 * gi.easeOutBounce(2 * t - 1) + 0.5,
      };
    function fi(t, e, i, s) {
      return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
    }
    function pi(t, e, i, s) {
      return {
        x: t.x + i * (e.x - t.x),
        y: ("middle" === s
          ? i < 0.5
            ? t
            : e
          : "after" === s
          ? i < 1
            ? t
            : e
          : 0 < i
          ? e
          : t
        ).y,
      };
    }
    function mi(t, e, i, s) {
      var a = { x: t.cp2x, y: t.cp2y },
        n = { x: e.cp1x, y: e.cp1y },
        t = fi(t, a, i),
        a = fi(a, n, i),
        n = fi(n, e, i),
        e = fi(t, a, i),
        t = fi(a, n, i);
      return fi(e, t, i);
    }
    const bi = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
      xi =
        /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
    function vi(t, e) {
      var i = ("" + t).match(bi);
      if (!i || "normal" === i[1]) return 1.2 * e;
      switch (((t = +i[2]), i[3])) {
        case "px":
          return t;
        case "%":
          t /= 100;
      }
      return e * t;
    }
    const _i = (t) => +t || 0;
    function yi(e, i) {
      const t = {},
        s = A(i),
        a = s ? Object.keys(i) : i,
        n = A(e) ? (s ? (t) => T(e[t], e[i[t]]) : (t) => e[t]) : () => e;
      for (const e of a) t[e] = _i(n(e));
      return t;
    }
    function Mi(t) {
      return yi(t, { top: "y", right: "x", bottom: "y", left: "x" });
    }
    function wi(t) {
      return yi(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
    }
    function I(t) {
      const e = Mi(t);
      return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
    }
    function z(t, e) {
      e = e || R.font;
      let i = T((t = t || {}).size, e.size),
        s =
          ("string" == typeof i && (i = parseInt(i, 10)), T(t.style, e.style));
      s &&
        !("" + s).match(xi) &&
        (console.warn('Invalid font style specified: "' + s + '"'),
        (s = void 0));
      const a = {
        family: T(t.family, e.family),
        lineHeight: vi(T(t.lineHeight, e.lineHeight), i),
        size: i,
        style: s,
        weight: T(t.weight, e.weight),
        string: "",
      };
      return (a.string = Te(a)), a;
    }
    function ki(t, e, i, s) {
      let a,
        n,
        o,
        r = !0;
      for (a = 0, n = t.length; a < n; ++a)
        if (
          void 0 !== (o = t[a]) &&
          (void 0 !== e && "function" == typeof o && ((o = o(e)), (r = !1)),
          void 0 !== i && O(o) && ((o = o[i % o.length]), (r = !1)),
          void 0 !== o)
        )
          return s && !r && (s.cacheable = !1), o;
    }
    function Si(t, e, i) {
      var { min: t, max: s } = t,
        e = B(e, (s - t) / 2),
        a = (t, e) => (i && 0 === t ? 0 : t + e);
      return { min: a(t, -Math.abs(e)), max: a(s, e) };
    }
    function Pi(t, e) {
      return Object.assign(Object.create(t), e);
    }
    function Di(t, e, i) {
      return t
        ? ((s = e),
          (a = i),
          {
            x: (t) => s + s + a - t,
            setWidth(t) {
              a = t;
            },
            textAlign: (t) =>
              "center" === t ? t : "right" === t ? "left" : "right",
            xPlus: (t, e) => t - e,
            leftForLtr: (t, e) => t - e,
          })
        : {
            x: (t) => t,
            setWidth(t) {},
            textAlign: (t) => t,
            xPlus: (t, e) => t + e,
            leftForLtr: (t, e) => t,
          };
      var s, a;
    }
    function Ci(t, e) {
      let i, s;
      ("ltr" !== e && "rtl" !== e) ||
        ((s = [
          (i = t.canvas.style).getPropertyValue("direction"),
          i.getPropertyPriority("direction"),
        ]),
        i.setProperty("direction", e, "important"),
        (t.prevTextDirection = s));
    }
    function Oi(t, e) {
      void 0 !== e &&
        (delete t.prevTextDirection,
        t.canvas.style.setProperty("direction", e[0], e[1]));
    }
    function Ai(t) {
      return "angle" === t
        ? { between: pt, compare: ft, normalize: v }
        : { between: c, compare: (t, e) => t - e, normalize: (t) => t };
    }
    function Ti({ start: t, end: e, count: i, loop: s, style: a }) {
      return {
        start: t % i,
        end: e % i,
        loop: s && (e - t + 1) % i == 0,
        style: a,
      };
    }
    function Li(t, i, g) {
      if (!g) return [t];
      const { property: s, start: a, end: n } = g,
        o = i.length,
        { compare: r, between: l, normalize: h } = Ai(s),
        {
          start: c,
          end: d,
          loop: u,
          style: f,
        } = (function (t, e) {
          const { property: i, start: s, end: a } = g,
            { between: n, normalize: o } = Ai(i),
            r = e.length;
          let l,
            h,
            { start: c, end: d, loop: u } = t;
          if (u) {
            for (
              c += r, d += r, l = 0, h = r;
              l < h && n(o(e[c % r][i]), s, a);
              ++l
            )
              c--, d--;
            (c %= r), (d %= r);
          }
          return (
            d < c && (d += r), { start: c, end: d, loop: u, style: t.style }
          );
        })(t, i),
        p = [];
      let m,
        b,
        x,
        v,
        _ = null;
      for (let t = c, e = c; t <= d; ++t)
        (b = i[t % o]).skip ||
          ((m = h(b[s])) !== x &&
            ((v = l(m, a, n)),
            null ===
              (_ =
                null === _ && (v || (l(a, x, m) && 0 !== r(a, x)))
                  ? 0 === r(m, a)
                    ? t
                    : e
                  : _) ||
              (v && 0 !== r(n, m) && !l(n, x, m)) ||
              (p.push(Ti({ start: _, end: t, loop: u, count: o, style: f })),
              (_ = null)),
            (e = t),
            (x = m)));
      return (
        null !== _ &&
          p.push(Ti({ start: _, end: d, loop: u, count: o, style: f })),
        p
      );
    }
    function Ei(e, i) {
      const s = [],
        a = e.segments;
      for (let t = 0; t < a.length; t++) {
        var n = Li(a[t], e.points, i);
        n.length && s.push(...n);
      }
      return s;
    }
    function Ri(t, e) {
      var i = t.points,
        n = t.options.spanGaps,
        s = i.length;
      if (!s) return [];
      var a = !!t._loop,
        { start: o, end: r } = (function (t, e, i) {
          let s = 0,
            a = e - 1;
          if (i && !n) for (; s < e && !t[s].skip; ) s++;
          for (; s < e && t[s].skip; ) s++;
          for (s %= e, i && (a += s); a > s && t[a % e].skip; ) a--;
          return (a %= e), { start: s, end: a };
        })(i, s, a);
      return Ii(
        t,
        !0 === n
          ? [{ start: o, end: r, loop: a }]
          : (function (t, e, i, s) {
              const a = t.length,
                n = [];
              let o,
                r = e,
                l = t[e];
              for (o = e + 1; o <= i; ++o) {
                const i = t[o % a];
                i.skip || i.stop
                  ? l.skip ||
                    ((s = !1),
                    n.push({ start: e % a, end: (o - 1) % a, loop: s }),
                    (e = r = i.stop ? o : null))
                  : ((r = o), l.skip && (e = o)),
                  (l = i);
              }
              return (
                null !== r && n.push({ start: e % a, end: r % a, loop: s }), n
              );
            })(
              i,
              o,
              r < o ? r + s : r,
              !!t._fullLoop && 0 === o && r === s - 1
            ),
        i,
        e
      );
    }
    function Ii(t, e, s, a) {
      if (a && a.setContext && s) {
        var r = t,
          t = e,
          l = s,
          h = a;
        const d = r._chart.getContext(),
          u = zi(r.options),
          {
            _datasetIndex: g,
            options: { spanGaps: f },
          } = r,
          p = l.length,
          m = [];
        let n = u,
          o = t[0].start,
          i = o;
        function c(t, e, i, s) {
          var a = f ? -1 : 1;
          if (t !== e) {
            for (t += p; l[t % p].skip; ) t -= a;
            for (; l[e % p].skip; ) e += a;
            t % p != e % p &&
              (m.push({ start: t % p, end: e % p, loop: i, style: s }),
              (n = s),
              (o = e % p));
          }
        }
        for (const r of t) {
          o = f ? o : r.start;
          let t,
            e = l[o % p];
          for (i = o + 1; i <= r.end; i++) {
            const f = l[i % p];
            (function (t, e) {
              if (!e) return;
              function i(t, e) {
                return ne(e) ? (s.includes(e) || s.push(e), s.indexOf(e)) : e;
              }
              const s = [];
              return JSON.stringify(t, i) !== JSON.stringify(e, i);
            })(
              (t = zi(
                h.setContext(
                  Pi(d, {
                    type: "segment",
                    p0: e,
                    p1: f,
                    p0DataIndex: (i - 1) % p,
                    p1DataIndex: i % p,
                    datasetIndex: g,
                  })
                )
              )),
              n
            ) && c(o, i - 1, r.loop, n),
              (e = f),
              (n = t);
          }
          o < i - 1 && c(o, i - 1, r.loop, n);
        }
        return m;
      }
      return e;
    }
    function zi(t) {
      return {
        backgroundColor: t.backgroundColor,
        borderCapStyle: t.borderCapStyle,
        borderDash: t.borderDash,
        borderDashOffset: t.borderDashOffset,
        borderJoinStyle: t.borderJoinStyle,
        borderWidth: t.borderWidth,
        borderColor: t.borderColor,
      };
    }
    var Fi = Object.freeze({
      __proto__: null,
      HALF_PI: D,
      INFINITY: tt,
      PI: S,
      PITAU: Q,
      QUARTER_PI: it,
      RAD_PER_DEG: et,
      TAU: _,
      TWO_THIRDS_PI: st,
      _addGrace: Si,
      _alignPixel: Re,
      _alignStartEnd: E,
      _angleBetween: pt,
      _angleDiff: ft,
      _arrayUnique: wt,
      _attachContext: $e,
      _bezierCurveTo: Ne,
      _bezierInterpolation: mi,
      _boundSegment: Li,
      _boundSegments: Ei,
      _capitalize: K,
      _computeSegments: Ri,
      _createResolver: Ye,
      _decimalPlaces: dt,
      _deprecated: function (t, e, i, s) {
        void 0 !== e &&
          console.warn(
            t + ': "' + i + '" is deprecated. Please use "' + s + '" instead'
          );
      },
      _descriptors: Ue,
      _elementsEqual: W,
      _factorize: ot,
      _filterBetween: vt,
      _getParentNode: ve,
      _getStartAndCountOfVisiblePoints: Ot,
      _int16Range: mt,
      _isBetween: c,
      _isClickEvent: J,
      _isDomSupported: xe,
      _isPointInArea: M,
      _limitValue: C,
      _longestText: Ee,
      _lookup: bt,
      _lookupByKey: f,
      _measureText: Le,
      _merger: j,
      _mergerIf: U,
      _normalizeAngle: v,
      _parseObjectDataRadialScale: ii,
      _pointInLine: fi,
      _readValueToProps: yi,
      _rlookupByKey: xt,
      _scaleRangesChanged: At,
      _setMinAndMaxByKey: ht,
      _splitKey: q,
      _steppedInterpolation: pi,
      _steppedLineTo: We,
      _textX: Ct,
      _toLeftRightCenter: Dt,
      _updateBezierControlPoints: hi,
      addRoundedRectPath: je,
      almostEquals: at,
      almostWhole: lt,
      callback: d,
      clearCanvas: Ie,
      clipArea: Ve,
      clone: N,
      color: oe,
      createContext: Pi,
      debounce: Pt,
      defined: G,
      distanceBetweenPoints: gt,
      drawPoint: ze,
      drawPointLegend: Fe,
      each: k,
      easingEffects: gi,
      finiteOrDefault: g,
      fontString: function (t, e, i) {
        return e + " " + t + "px " + i;
      },
      formatNumber: de,
      getAngleFromPoint: ut,
      getHoverColor: re,
      getMaximumSize: De,
      getRelativePosition: Se,
      getRtlAdapter: Di,
      getStyle: Me,
      isArray: O,
      isFinite: p,
      isFunction: u,
      isNullOrUndef: P,
      isNumber: rt,
      isObject: A,
      isPatternOrGradient: ne,
      listenArrayEvents: yt,
      log10: r,
      merge: Y,
      mergeIf: $,
      niceNum: nt,
      noop: t,
      overrideTextDirection: Ci,
      readUsedSize: Ae,
      renderText: He,
      requestAnimFrame: kt,
      resolve: ki,
      resolveObjectKey: m,
      restoreTextDirection: Oi,
      retinaScale: Ce,
      setsEqual: Z,
      sign: y,
      splineCurve: oi,
      splineCurveMonotone: ri,
      supportsEventListenerOptions: Oe,
      throttled: St,
      toDegrees: ct,
      toDimension: B,
      toFont: z,
      toFontString: Te,
      toLineHeight: vi,
      toPadding: I,
      toPercentage: V,
      toRadians: L,
      toTRBL: Mi,
      toTRBLCorners: wi,
      uid: F,
      unclipArea: Be,
      unlistenArrayEvents: Mt,
      valueOrDefault: T,
    });
    function Vi(t, i, s, a, n) {
      var o = t.getSortedVisibleDatasetMetas(),
        r = s[i];
      for (let t = 0, e = o.length; t < e; ++t) {
        const { index: s, data: l } = o[t],
          { lo: h, hi: c } = (function (t, e, i, s) {
            const { controller: a, data: n, _sorted: o } = t,
              r = a._cachedMeta.iScale;
            if (r && e === r.axis && "r" !== e && o && n.length) {
              const t = r._reversePixels ? xt : f;
              if (!s) return t(n, e, i);
              if (a._sharedOptions) {
                const s = n[0],
                  a = "function" == typeof s.getRange && s.getRange(e);
                if (a) {
                  const s = t(n, e, i - a),
                    o = t(n, e, i + a);
                  return { lo: s.lo, hi: o.hi };
                }
              }
            }
            return { lo: 0, hi: n.length - 1 };
          })(o[t], i, r, n);
        for (let t = h; t <= c; ++t) {
          const i = l[t];
          i.skip || a(i, s, t);
        }
      }
    }
    function Bi(s, a, t, n, o) {
      const r = [];
      return (
        (o || s.isPointInArea(a)) &&
          Vi(
            s,
            t,
            a,
            function (t, e, i) {
              (o || M(t, s.chartArea, 0)) &&
                t.inRange(a.x, a.y, n) &&
                r.push({ element: t, datasetIndex: e, index: i });
            },
            !0
          ),
        r
      );
    }
    function Wi(t, e, i, s, a, r) {
      {
        if (r || t.isPointInArea(e)) {
          if ("r" !== i || s) {
            var l = t,
              h = e,
              c = i,
              d = s,
              u = a,
              g = r;
            let n = [];
            const m = (function (t) {
              const s = -1 !== t.indexOf("x"),
                a = -1 !== t.indexOf("y");
              return function (t, e) {
                var i = s ? Math.abs(t.x - e.x) : 0,
                  t = a ? Math.abs(t.y - e.y) : 0;
                return Math.sqrt(Math.pow(i, 2) + Math.pow(t, 2));
              };
            })(c);
            let o = Number.POSITIVE_INFINITY;
            return (
              Vi(l, c, h, function (t, e, i) {
                var s,
                  a = t.inRange(h.x, h.y, u);
                (d && !a) ||
                  ((s = t.getCenterPoint(u)),
                  (g || l.isPointInArea(s) || a) &&
                    ((a = m(h, s)) < o
                      ? ((n = [{ element: t, datasetIndex: e, index: i }]),
                        (o = a))
                      : a === o &&
                        n.push({ element: t, datasetIndex: e, index: i })));
              }),
              n
            );
          }
          {
            var f = e,
              p = a;
            let o = [];
            return (
              Vi(t, i, f, function (t, e, i) {
                var { startAngle: s, endAngle: a } = t.getProps(
                    ["startAngle", "endAngle"],
                    p
                  ),
                  n = ut(t, { x: f.x, y: f.y })["angle"];
                pt(n, s, a) &&
                  o.push({ element: t, datasetIndex: e, index: i });
              }),
              o
            );
          }
        }
        return [];
      }
    }
    function Ni(t, s, a, e, n) {
      const o = [],
        r = "x" === a ? "inXRange" : "inYRange";
      let l = !1;
      return (
        Vi(t, a, s, (t, e, i) => {
          t[r](s[a], n) &&
            (o.push({ element: t, datasetIndex: e, index: i }),
            (l = l || t.inRange(s.x, s.y, n)));
        }),
        e && !l ? [] : o
      );
    }
    var Hi = {
      evaluateInteractionItems: Vi,
      modes: {
        index(t, e, i, s) {
          const a = Se(e, t),
            n = i.axis || "x",
            o = i.includeInvisible || !1,
            r = i.intersect ? Bi(t, a, n, s, o) : Wi(t, a, n, !1, s, o),
            l = [];
          return r.length
            ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                var e = r[0].index,
                  i = t.data[e];
                i &&
                  !i.skip &&
                  l.push({ element: i, datasetIndex: t.index, index: e });
              }),
              l)
            : [];
        },
        dataset(t, e, i, s) {
          var e = Se(e, t),
            a = i.axis || "xy",
            n = i.includeInvisible || !1;
          let o = i.intersect ? Bi(t, e, a, s, n) : Wi(t, e, a, !1, s, n);
          if (0 < o.length) {
            const e = o[0].datasetIndex,
              i = t.getDatasetMeta(e).data;
            o = [];
            for (let t = 0; t < i.length; ++t)
              o.push({ element: i[t], datasetIndex: e, index: t });
          }
          return o;
        },
        point: (t, e, i, s) =>
          Bi(t, Se(e, t), i.axis || "xy", s, i.includeInvisible || !1),
        nearest(t, e, i, s) {
          var e = Se(e, t),
            a = i.axis || "xy",
            n = i.includeInvisible || !1;
          return Wi(t, e, a, i.intersect, s, n);
        },
        x: (t, e, i, s) => Ni(t, Se(e, t), "x", i.intersect, s),
        y: (t, e, i, s) => Ni(t, Se(e, t), "y", i.intersect, s),
      },
    };
    const ji = ["left", "top", "right", "bottom"];
    function Yi(t, e) {
      return t.filter((t) => t.pos === e);
    }
    function $i(t, e) {
      return t.filter((t) => -1 === ji.indexOf(t.pos) && t.box.axis === e);
    }
    function Ui(t, s) {
      return t.sort((t, e) => {
        var i = s ? e : t,
          t = s ? t : e;
        return i.weight === t.weight ? i.index - t.index : i.weight - t.weight;
      });
    }
    function Xi(t, e, i, s) {
      return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
    }
    function qi(t, e) {
      (t.top = Math.max(t.top, e.top)),
        (t.left = Math.max(t.left, e.left)),
        (t.bottom = Math.max(t.bottom, e.bottom)),
        (t.right = Math.max(t.right, e.right));
    }
    function Ki(t, e, i, s) {
      const a = [];
      let n, o, r, l, h, c;
      for (n = 0, o = t.length, h = 0; n < o; ++n) {
        (r = t[n]),
          (l = r.box).update(
            r.width || e.w,
            r.height || e.h,
            (function (t, e) {
              const i = e.maxPadding;
              {
                const s = { left: 0, top: 0, right: 0, bottom: 0 };
                return (
                  (t = t ? ["left", "right"] : ["top", "bottom"]).forEach(
                    (t) => {
                      s[t] = Math.max(e[t], i[t]);
                    }
                  ),
                  s
                );
              }
            })(r.horizontal, e)
          );
        const { same: o, other: d } = (function (t, e, i, s) {
          const { pos: a, box: n } = i,
            o = t.maxPadding;
          if (!A(a)) {
            i.size && (t[a] -= i.size);
            const e = s[i.stack] || { size: 0, count: 1 };
            (e.size = Math.max(e.size, i.horizontal ? n.height : n.width)),
              (i.size = e.size / e.count),
              (t[a] += i.size);
          }
          n.getPadding && qi(o, n.getPadding());
          var s = Math.max(0, e.outerWidth - Xi(o, t, "left", "right")),
            e = Math.max(0, e.outerHeight - Xi(o, t, "top", "bottom")),
            r = s !== t.w,
            l = e !== t.h;
          return (
            (t.w = s),
            (t.h = e),
            i.horizontal ? { same: r, other: l } : { same: l, other: r }
          );
        })(e, i, r, s);
        (h |= o && a.length), (c = c || d), l.fullSize || a.push(r);
      }
      return (h && Ki(a, e, i, s)) || c;
    }
    function Gi(t, e, i, s, a) {
      (t.top = i),
        (t.left = e),
        (t.right = e + s),
        (t.bottom = i + a),
        (t.width = s),
        (t.height = a);
    }
    function Zi(t, e, i, s) {
      var a = i.padding;
      let { x: n, y: o } = e;
      for (const r of t) {
        const t = r.box,
          l = s[r.stack] || { count: 1, placed: 0, weight: 1 },
          h = r.stackWeight / l.weight || 1;
        if (r.horizontal) {
          const s = e.w * h,
            n = l.size || t.height;
          G(l.start) && (o = l.start),
            t.fullSize
              ? Gi(t, a.left, o, i.outerWidth - a.right - a.left, n)
              : Gi(t, e.left + l.placed, o, s, n),
            (l.start = o),
            (l.placed += s),
            (o = t.bottom);
        } else {
          const s = e.h * h,
            o = l.size || t.width;
          G(l.start) && (n = l.start),
            t.fullSize
              ? Gi(t, n, a.top, o, i.outerHeight - a.bottom - a.top)
              : Gi(t, n, e.top + l.placed, o, s),
            (l.start = n),
            (l.placed += s),
            (n = t.right);
        }
      }
      (e.x = n), (e.y = o);
    }
    var a = {
      addBox(t, e) {
        t.boxes || (t.boxes = []),
          (e.fullSize = e.fullSize || !1),
          (e.position = e.position || "top"),
          (e.weight = e.weight || 0),
          (e._layers =
            e._layers ||
            function () {
              return [
                {
                  z: 0,
                  draw(t) {
                    e.draw(t);
                  },
                },
              ];
            }),
          t.boxes.push(e);
      },
      removeBox(t, e) {
        e = t.boxes ? t.boxes.indexOf(e) : -1;
        -1 !== e && t.boxes.splice(e, 1);
      },
      configure(t, e, i) {
        (e.fullSize = i.fullSize),
          (e.position = i.position),
          (e.weight = i.weight);
      },
      update(l, t, e, i) {
        if (l) {
          const o = I(l.options.layout.padding),
            r = Math.max(t - o.width, 0),
            h = Math.max(e - o.height, 0),
            c = (function () {
              const t = (function (t) {
                  const e = [];
                  let i, s, a, n, o, r;
                  for (i = 0, s = (t || []).length; i < s; ++i)
                    ({
                      position: n,
                      options: { stack: o, stackWeight: r = 1 },
                    } = a =
                      t[i]),
                      e.push({
                        index: i,
                        box: a,
                        pos: n,
                        horizontal: a.isHorizontal(),
                        weight: a.weight,
                        stack: o && n + o,
                        stackWeight: r,
                      });
                  return e;
                })(l.boxes),
                e = Ui(
                  t.filter((t) => t.box.fullSize),
                  !0
                ),
                i = Ui(Yi(t, "left"), !0),
                s = Ui(Yi(t, "right")),
                a = Ui(Yi(t, "top"), !0),
                n = Ui(Yi(t, "bottom")),
                o = $i(t, "x"),
                r = $i(t, "y");
              return {
                fullSize: e,
                leftAndTop: i.concat(a),
                rightAndBottom: s.concat(r).concat(n).concat(o),
                chartArea: Yi(t, "chartArea"),
                vertical: i.concat(s).concat(r),
                horizontal: a.concat(n).concat(o),
              };
            })(),
            d = c.vertical,
            u = c.horizontal;
          k(l.boxes, (t) => {
            "function" == typeof t.beforeLayout && t.beforeLayout();
          });
          var s =
              d.reduce(
                (t, e) =>
                  e.box.options && !1 === e.box.options.display ? t : t + 1,
                0
              ) || 1,
            t = Object.freeze({
              outerWidth: t,
              outerHeight: e,
              padding: o,
              availableWidth: r,
              availableHeight: h,
              vBoxMaxWidth: r / 2 / s,
              hBoxMaxHeight: h / 2,
            }),
            e = Object.assign({}, o);
          qi(e, I(i));
          const g = Object.assign(
              { maxPadding: e, w: r, h: h, x: o.left, y: o.top },
              o
            ),
            f = (function (t, e) {
              var i = (function (t) {
                  const e = {};
                  for (const i of t) {
                    const { stack: t, pos: s, stackWeight: a } = i;
                    if (t && ji.includes(s)) {
                      const n =
                        e[t] ||
                        (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
                      n.count++, (n.weight += a);
                    }
                  }
                  return e;
                })(t),
                { vBoxMaxWidth: s, hBoxMaxHeight: a } = e;
              let n, o, r;
              for (n = 0, o = t.length; n < o; ++n) {
                const o = (r = t[n]).box["fullSize"],
                  l = i[r.stack],
                  h = l && r.stackWeight / l.weight;
                r.horizontal
                  ? ((r.width = h ? h * s : o && e.availableWidth),
                    (r.height = a))
                  : ((r.width = s),
                    (r.height = h ? h * a : o && e.availableHeight));
              }
              return i;
            })(d.concat(u), t);
          Ki(c.fullSize, g, t, f),
            Ki(d, g, t, f),
            Ki(u, g, t, f) && Ki(d, g, t, f);
          {
            var a = g;
            const p = a.maxPadding;
            function n(t) {
              var e = Math.max(p[t] - a[t], 0);
              return (a[t] += e), e;
            }
            (a.y += n("top")), (a.x += n("left")), n("right"), n("bottom");
          }
          Zi(c.leftAndTop, g, t, f),
            (g.x += g.w),
            (g.y += g.h),
            Zi(c.rightAndBottom, g, t, f),
            (l.chartArea = {
              left: g.left,
              top: g.top,
              right: g.left + g.w,
              bottom: g.top + g.h,
              height: g.h,
              width: g.w,
            }),
            k(c.chartArea, (t) => {
              const e = t.box;
              Object.assign(e, l.chartArea),
                e.update(g.w, g.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
        }
      },
    };
    class Ji {
      acquireContext(t, e) {}
      releaseContext(t) {
        return !1;
      }
      addEventListener(t, e, i) {}
      removeEventListener(t, e, i) {}
      getDevicePixelRatio() {
        return 1;
      }
      getMaximumSize(t, e, i, s) {
        return (
          (e = Math.max(0, e || t.width)),
          (i = i || t.height),
          { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) }
        );
      }
      isAttached(t) {
        return !0;
      }
      updateConfig(t) {}
    }
    class Qi extends Ji {
      acquireContext(t) {
        return (t && t.getContext && t.getContext("2d")) || null;
      }
      updateConfig(t) {
        t.options.animation = !1;
      }
    }
    const ts = "$chartjs",
      es = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout",
      },
      is = (t) => null === t || "" === t,
      ss = !!Oe && { passive: !0 };
    function as(t, e) {
      for (const i of t) if (i === e || i.contains(e)) return !0;
    }
    function ns(t, e, i) {
      const s = t.canvas,
        a = new MutationObserver((t) => {
          let e = !1;
          for (const i of t)
            (e = e || as(i.addedNodes, s)), (e = e && !as(i.removedNodes, s));
          e && i();
        });
      return a.observe(document, { childList: !0, subtree: !0 }), a;
    }
    function os(t, e, i) {
      const s = t.canvas,
        a = new MutationObserver((t) => {
          let e = !1;
          for (const i of t)
            (e = e || as(i.removedNodes, s)), (e = e && !as(i.addedNodes, s));
          e && i();
        });
      return a.observe(document, { childList: !0, subtree: !0 }), a;
    }
    const rs = new Map();
    let ls = 0;
    function hs() {
      const i = window.devicePixelRatio;
      i !== ls &&
        ((ls = i),
        rs.forEach((t, e) => {
          e.currentDevicePixelRatio !== i && t();
        }));
    }
    function cs(t, e, s) {
      const i = t.canvas,
        a = i && ve(i);
      if (a) {
        const o = St((t, e) => {
            var i = a.clientWidth;
            s(t, e), i < a.clientWidth && s();
          }, window),
          r = new ResizeObserver((t) => {
            var t = t[0],
              e = t.contentRect.width,
              t = t.contentRect.height;
            (0 === e && 0 === t) || o(e, t);
          });
        return (
          r.observe(a),
          (t = t),
          (n = o),
          rs.size || window.addEventListener("resize", hs),
          rs.set(t, n),
          r
        );
        var n;
      }
    }
    function ds(t, e, i) {
      i && i.disconnect(),
        "resize" === e &&
          ((i = t),
          rs.delete(i),
          rs.size || window.removeEventListener("resize", hs));
    }
    function us(e, t, i) {
      var s = e.canvas,
        a = St((t) => {
          null !== e.ctx &&
            i(
              (function (t, e) {
                var i = es[t.type] || t.type,
                  { x: s, y: a } = Se(t, e);
                return {
                  type: i,
                  chart: e,
                  native: t,
                  x: void 0 !== s ? s : null,
                  y: void 0 !== a ? a : null,
                };
              })(t, e)
            );
        }, e);
      return s.addEventListener(t, a, ss), a;
    }
    class gs extends Ji {
      acquireContext(t, e) {
        var i = t && t.getContext && t.getContext("2d");
        {
          if (i && i.canvas === t) {
            {
              var s = e;
              const a = t.style,
                n = t.getAttribute("height"),
                o = t.getAttribute("width");
              if (
                ((t[ts] = {
                  initial: {
                    height: n,
                    width: o,
                    style: {
                      display: a.display,
                      height: a.height,
                      width: a.width,
                    },
                  },
                }),
                (a.display = a.display || "block"),
                (a.boxSizing = a.boxSizing || "border-box"),
                is(o))
              ) {
                const s = Ae(t, "width");
                void 0 !== s && (t.width = s);
              }
              if (is(n))
                if ("" === t.style.height) t.height = t.width / (s || 2);
                else {
                  const s = Ae(t, "height");
                  void 0 !== s && (t.height = s);
                }
            }
            return i;
          }
          return null;
        }
      }
      releaseContext(t) {
        const i = t.canvas;
        if (!i[ts]) return !1;
        const s = i[ts].initial,
          e =
            (["height", "width"].forEach((t) => {
              var e = s[t];
              P(e) ? i.removeAttribute(t) : i.setAttribute(t, e);
            }),
            s.style || {});
        return (
          Object.keys(e).forEach((t) => {
            i.style[t] = e[t];
          }),
          (i.width = i.width),
          delete i[ts],
          !0
        );
      }
      addEventListener(t, e, i) {
        this.removeEventListener(t, e);
        const s = t.$proxies || (t.$proxies = {}),
          a = { attach: ns, detach: os, resize: cs }[e] || us;
        s[e] = a(t, e, i);
      }
      removeEventListener(t, e) {
        const i = t.$proxies || (t.$proxies = {}),
          s = i[e];
        s &&
          ((
            { attach: ds, detach: ds, resize: ds }[e] ||
            function (t, e, i) {
              t.canvas.removeEventListener(e, i, ss);
            }
          )(t, e, s),
          (i[e] = void 0));
      }
      getDevicePixelRatio() {
        return window.devicePixelRatio;
      }
      getMaximumSize(t, e, i, s) {
        return De(t, e, i, s);
      }
      isAttached(t) {
        t = ve(t);
        return !(!t || !t.isConnected);
      }
    }
    function fs(t) {
      return !xe() ||
        ("undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas)
        ? Qi
        : gs;
    }
    Oe = Object.freeze({
      __proto__: null,
      BasePlatform: Ji,
      BasicPlatform: Qi,
      DomPlatform: gs,
      _detectPlatform: fs,
    });
    const ps = "transparent",
      ms = {
        boolean: (t, e, i) => (0.5 < i ? e : t),
        color(t, e, i) {
          const s = oe(t || ps),
            a = s.valid && oe(e || ps);
          return a && a.valid ? a.mix(s, i).hexString() : e;
        },
        number: (t, e, i) => t + (e - t) * i,
      };
    class bs {
      constructor(t, e, i, s) {
        var a = e[i],
          a = ((s = ki([t.to, s, a, t.from])), ki([t.from, a, s]));
        (this._active = !0),
          (this._fn = t.fn || ms[t.type || typeof a]),
          (this._easing = gi[t.easing] || gi.linear),
          (this._start = Math.floor(Date.now() + (t.delay || 0))),
          (this._duration = this._total = Math.floor(t.duration)),
          (this._loop = !!t.loop),
          (this._target = e),
          (this._prop = i),
          (this._from = a),
          (this._to = s),
          (this._promises = void 0);
      }
      active() {
        return this._active;
      }
      update(t, e, i) {
        var s, a, n;
        this._active &&
          (this._notify(!1),
          (s = this._target[this._prop]),
          (a = i - this._start),
          (n = this._duration - a),
          (this._start = i),
          (this._duration = Math.floor(Math.max(n, t.duration))),
          (this._total += a),
          (this._loop = !!t.loop),
          (this._to = ki([t.to, e, s, t.from])),
          (this._from = ki([t.from, s, e])));
      }
      cancel() {
        this._active &&
          (this.tick(Date.now()), (this._active = !1), this._notify(!1));
      }
      tick(t) {
        var t = t - this._start,
          e = this._duration,
          i = this._prop,
          s = this._from,
          a = this._loop,
          n = this._to;
        let o;
        if (((this._active = s !== n && (a || t < e)), !this._active))
          return (this._target[i] = n), void this._notify(!0);
        t < 0
          ? (this._target[i] = s)
          : ((o = (t / e) % 2),
            (o = a && 1 < o ? 2 - o : o),
            (o = this._easing(Math.min(1, Math.max(0, o)))),
            (this._target[i] = this._fn(s, n, o)));
      }
      wait() {
        const i = this._promises || (this._promises = []);
        return new Promise((t, e) => {
          i.push({ res: t, rej: e });
        });
      }
      _notify(t) {
        const e = t ? "res" : "rej",
          i = this._promises || [];
        for (let t = 0; t < i.length; t++) i[t][e]();
      }
    }
    class xs {
      constructor(t, e) {
        (this._chart = t), (this._properties = new Map()), this.configure(e);
      }
      configure(s) {
        if (A(s)) {
          const a = Object.keys(R.animation),
            n = this._properties;
          Object.getOwnPropertyNames(s).forEach((e) => {
            const t = s[e];
            if (A(t)) {
              const i = {};
              for (const s of a) i[s] = t[s];
              ((O(t.properties) && t.properties) || [e]).forEach((t) => {
                (t !== e && n.has(t)) || n.set(t, i);
              });
            }
          });
        }
      }
      _animateOptions(t, e) {
        const i = e.options,
          s = (function (e, i) {
            if (i) {
              let t = e.options;
              if (t)
                return (
                  t.$shared &&
                    (e.options = t =
                      Object.assign({}, t, { $shared: !1, $animations: {} })),
                  t
                );
              e.options = i;
            }
          })(t, i);
        if (!s) return [];
        e = this._createAnimations(s, i);
        return (
          i.$shared &&
            (function (e, t) {
              const i = [],
                s = Object.keys(t);
              for (let t = 0; t < s.length; t++) {
                const a = e[s[t]];
                a && a.active() && i.push(a.wait());
              }
              return Promise.all(i);
            })(t.options.$animations, i).then(
              () => {
                t.options = i;
              },
              () => {}
            ),
          e
        );
      }
      _createAnimations(e, i) {
        const s = this._properties,
          a = [],
          n = e.$animations || (e.$animations = {}),
          t = Object.keys(i),
          o = Date.now();
        let r;
        for (r = t.length - 1; 0 <= r; --r) {
          const c = t[r];
          if ("$" !== c.charAt(0))
            if ("options" === c) a.push(...this._animateOptions(e, i));
            else {
              var l = i[c];
              let t = n[c];
              var h = s.get(c);
              if (t) {
                if (h && t.active()) {
                  t.update(h, l, o);
                  continue;
                }
                t.cancel();
              }
              h && h.duration
                ? ((n[c] = t = new bs(h, e, c, l)), a.push(t))
                : (e[c] = l);
            }
        }
        return a;
      }
      update(t, e) {
        {
          if (0 !== this._properties.size)
            return (t = this._createAnimations(t, e)).length
              ? (l.add(this._chart, t), !0)
              : void 0;
          Object.assign(t, e);
        }
      }
    }
    function vs(t, e) {
      var t = (t && t.options) || {},
        i = t.reverse,
        s = void 0 === t.min ? e : 0,
        t = void 0 === t.max ? e : 0;
      return { start: i ? t : s, end: i ? s : t };
    }
    function _s(t, e) {
      const i = [],
        s = t._getSortedDatasetMetas(e);
      let a, n;
      for (a = 0, n = s.length; a < n; ++a) i.push(s[a].index);
      return i;
    }
    function ys(t, e, i, s = {}) {
      var a = t.keys,
        n = "single" === s.mode;
      let o, r, l, h;
      if (null !== e) {
        for (o = 0, r = a.length; o < r; ++o) {
          if ((l = +a[o]) === i) {
            if (s.all) continue;
            break;
          }
          p((h = t.values[l])) && (n || 0 === e || y(e) === y(h)) && (e += h);
        }
        return e;
      }
    }
    function Ms(t, e) {
      t = t && t.options.stacked;
      return t || (void 0 === t && void 0 !== e.stack);
    }
    function ws(t, e, i, s) {
      for (const a of e.getMatchingVisibleMetas(s).reverse()) {
        const e = t[a.index];
        if ((i && 0 < e) || (!i && e < 0)) return a.index;
      }
      return null;
    }
    function ks(t, e) {
      const { chart: i, _cachedMeta: s } = t,
        a = i._stacks || (i._stacks = {}),
        { iScale: n, vScale: o, index: r } = s,
        l = n.axis,
        h = o.axis,
        c = `${n.id}.${o.id}.` + (s.stack || s.type),
        d = e.length;
      let u;
      for (let t = 0; t < d; ++t) {
        const i = e[t],
          { [l]: n, [h]: d } = i;
        ((u = (i._stacks || (i._stacks = {}))[h] =
          (function (t, e, i) {
            const s = t[e] || (t[e] = {});
            return s[i] || (s[i] = {});
          })(a, c, n))[r] = d),
          (u._top = ws(u, o, !0, s.type)),
          (u._bottom = ws(u, o, !1, s.type)),
          ((u._visualValues || (u._visualValues = {}))[r] = d);
      }
    }
    function Ss(t, e) {
      const i = t.scales;
      return Object.keys(i)
        .filter((t) => i[t].axis === e)
        .shift();
    }
    function Ps(t, e) {
      var i = t.controller.index,
        s = t.vScale && t.vScale.axis;
      if (s) {
        e = e || t._parsed;
        for (const t of e) {
          const e = t._stacks;
          if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
          delete e[s][i],
            void 0 !== e[s]._visualValues &&
              void 0 !== e[s]._visualValues[i] &&
              delete e[s]._visualValues[i];
        }
      }
    }
    const Ds = (t) => "reset" === t || "none" === t,
      Cs = (t, e) => (e ? t : Object.assign({}, t));
    class Os {
      static defaults = {};
      static datasetElementType = null;
      static dataElementType = null;
      constructor(t, e) {
        (this.chart = t),
          (this._ctx = t.ctx),
          (this.index = e),
          (this._cachedDataOpts = {}),
          (this._cachedMeta = this.getMeta()),
          (this._type = this._cachedMeta.type),
          (this.options = void 0),
          (this._parsing = !1),
          (this._data = void 0),
          (this._objectData = void 0),
          (this._sharedOptions = void 0),
          (this._drawStart = void 0),
          (this._drawCount = void 0),
          (this.enableOptionSharing = !1),
          (this.supportsDecimation = !1),
          (this.$context = void 0),
          (this._syncList = []),
          (this.datasetElementType = new.target.datasetElementType),
          (this.dataElementType = new.target.dataElementType),
          this.initialize();
      }
      initialize() {
        const t = this._cachedMeta;
        this.configure(),
          this.linkScales(),
          (t._stacked = Ms(t.vScale, t)),
          this.addElements(),
          this.options.fill &&
            !this.chart.isPluginEnabled("filler") &&
            console.warn(
              "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
            );
      }
      updateIndex(t) {
        this.index !== t && Ps(this._cachedMeta), (this.index = t);
      }
      linkScales() {
        const t = this.chart,
          e = this._cachedMeta,
          i = this.getDataset(),
          s = (t, e, i, s) => ("x" === t ? e : "r" === t ? s : i),
          a = (e.xAxisID = T(i.xAxisID, Ss(t, "x"))),
          n = (e.yAxisID = T(i.yAxisID, Ss(t, "y"))),
          o = (e.rAxisID = T(i.rAxisID, Ss(t, "r"))),
          r = e.indexAxis,
          l = (e.iAxisID = s(r, a, n, o)),
          h = (e.vAxisID = s(r, n, a, o));
        (e.xScale = this.getScaleForId(a)),
          (e.yScale = this.getScaleForId(n)),
          (e.rScale = this.getScaleForId(o)),
          (e.iScale = this.getScaleForId(l)),
          (e.vScale = this.getScaleForId(h));
      }
      getDataset() {
        return this.chart.data.datasets[this.index];
      }
      getMeta() {
        return this.chart.getDatasetMeta(this.index);
      }
      getScaleForId(t) {
        return this.chart.scales[t];
      }
      _getOtherScale(t) {
        var e = this._cachedMeta;
        return t === e.iScale ? e.vScale : e.iScale;
      }
      reset() {
        this._update("reset");
      }
      _destroy() {
        var t = this._cachedMeta;
        this._data && Mt(this._data, this), t._stacked && Ps(t);
      }
      _dataCheck() {
        const t = this.getDataset(),
          e = t.data || (t.data = []),
          i = this._data;
        if (A(e))
          this._data = (function (t) {
            const e = Object.keys(t),
              i = new Array(e.length);
            let s, a, n;
            for (s = 0, a = e.length; s < a; ++s)
              (n = e[s]), (i[s] = { x: n, y: t[n] });
            return i;
          })(e);
        else if (i !== e) {
          if (i) {
            Mt(i, this);
            const t = this._cachedMeta;
            Ps(t), (t._parsed = []);
          }
          e && Object.isExtensible(e) && yt(e, this),
            (this._syncList = []),
            (this._data = e);
        }
      }
      addElements() {
        const t = this._cachedMeta;
        this._dataCheck(),
          this.datasetElementType &&
            (t.dataset = new this.datasetElementType());
      }
      buildOrUpdateElements(t) {
        const e = this._cachedMeta,
          i = this.getDataset();
        let s = !1;
        this._dataCheck();
        var a = e._stacked;
        (e._stacked = Ms(e.vScale, e)),
          e.stack !== i.stack && ((s = !0), Ps(e), (e.stack = i.stack)),
          this._resyncElements(t),
          (!s && a === e._stacked) || ks(this, e._parsed);
      }
      configure() {
        const t = this.chart.config,
          e = t.datasetScopeKeys(this._type),
          i = t.getOptionScopes(this.getDataset(), e, !0);
        (this.options = t.createResolver(i, this.getContext())),
          (this._parsing = this.options.parsing),
          (this._cachedDataOpts = {});
      }
      parse(t, e) {
        const { _cachedMeta: i, _data: s } = this,
          { iScale: a, _stacked: n } = i,
          o = a.axis;
        let r,
          l,
          h,
          c = (0 === t && e === s.length) || i._sorted,
          d = 0 < t && i._parsed[t - 1];
        if (!1 === this._parsing) (i._parsed = s), (i._sorted = !0), (h = s);
        else {
          h = O(s[t])
            ? this.parseArrayData(i, s, t, e)
            : A(s[t])
            ? this.parseObjectData(i, s, t, e)
            : this.parsePrimitiveData(i, s, t, e);
          const a = () => null === l[o] || (d && l[o] < d[o]);
          for (r = 0; r < e; ++r)
            (i._parsed[r + t] = l = h[r]), c && (a() && (c = !1), (d = l));
          i._sorted = c;
        }
        n && ks(this, h);
      }
      parsePrimitiveData(t, e, i, s) {
        const { iScale: a, vScale: n } = t,
          o = a.axis,
          r = n.axis,
          l = a.getLabels(),
          h = a === n,
          c = new Array(s);
        let d, u, g;
        for (d = 0, u = s; d < u; ++d)
          (g = d + i),
            (c[d] = { [o]: h || a.parse(l[g], g), [r]: n.parse(e[g], g) });
        return c;
      }
      parseArrayData(t, e, i, s) {
        const { xScale: a, yScale: n } = t,
          o = new Array(s);
        let r, l, h, c;
        for (r = 0, l = s; r < l; ++r)
          (c = e[(h = r + i)]),
            (o[r] = { x: a.parse(c[0], h), y: n.parse(c[1], h) });
        return o;
      }
      parseObjectData(t, e, i, s) {
        const { xScale: a, yScale: n } = t,
          { xAxisKey: o = "x", yAxisKey: r = "y" } = this._parsing,
          l = new Array(s);
        let h, c, d, u;
        for (h = 0, c = s; h < c; ++h)
          (u = e[(d = h + i)]),
            (l[h] = { x: a.parse(m(u, o), d), y: n.parse(m(u, r), d) });
        return l;
      }
      getParsed(t) {
        return this._cachedMeta._parsed[t];
      }
      getDataElement(t) {
        return this._cachedMeta.data[t];
      }
      applyStack(t, e, i) {
        var s = this.chart,
          a = this._cachedMeta,
          n = e[t.axis];
        return ys(
          { keys: _s(s, !0), values: e._stacks[t.axis]._visualValues },
          n,
          a.index,
          { mode: i }
        );
      }
      updateRangeFromParsed(t, e, i, s) {
        var a = i[e.axis];
        let n = null === a ? NaN : a;
        i = s && i._stacks[e.axis];
        s && i && ((s.values = i), (n = ys(s, a, this._cachedMeta.index))),
          (t.min = Math.min(t.min, n)),
          (t.max = Math.max(t.max, n));
      }
      getMinMax(e, t) {
        const i = this._cachedMeta,
          s = i._parsed,
          a = i._sorted && e === i.iScale,
          n = s.length,
          o = this._getOtherScale(e),
          r =
            ((d = this.chart),
            t && !i.hidden && i._stacked && { keys: _s(d, !0), values: null }),
          l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
          { min: h, max: c } = (function () {
            var {
              min: t,
              max: e,
              minDefined: i,
              maxDefined: s,
            } = o.getUserBounds();
            return {
              min: i ? t : Number.NEGATIVE_INFINITY,
              max: s ? e : Number.POSITIVE_INFINITY,
            };
          })();
        var d;
        let u, g;
        function f() {
          var t = (g = s[u])[o.axis];
          return !p(g[e.axis]) || h > t || c < t;
        }
        for (
          u = 0;
          u < n && (f() || (this.updateRangeFromParsed(l, e, g, r), !a));
          ++u
        );
        if (a)
          for (u = n - 1; 0 <= u; --u)
            if (!f()) {
              this.updateRangeFromParsed(l, e, g, r);
              break;
            }
        return l;
      }
      getAllParsedValues(t) {
        const e = this._cachedMeta._parsed,
          i = [];
        let s, a, n;
        for (s = 0, a = e.length; s < a; ++s)
          p((n = e[s][t.axis])) && i.push(n);
        return i;
      }
      getMaxOverflow() {
        return !1;
      }
      getLabelAndValue(t) {
        const e = this._cachedMeta,
          i = e.iScale,
          s = e.vScale,
          a = this.getParsed(t);
        return {
          label: i ? "" + i.getLabelForValue(a[i.axis]) : "",
          value: s ? "" + s.getLabelForValue(a[s.axis]) : "",
        };
      }
      _update(t) {
        const e = this._cachedMeta;
        this.update(t || "default"),
          (e._clip = (function (t) {
            let e, i, s, a;
            return (
              A(t)
                ? ((e = t.top), (i = t.right), (s = t.bottom), (a = t.left))
                : (e = i = s = a = t),
              { top: e, right: i, bottom: s, left: a, disabled: !1 === t }
            );
          })(
            T(
              this.options.clip,
              (function (t, e, i) {
                if (!1 === i) return !1;
                (t = vs(t, i)), (e = vs(e, i));
                return {
                  top: e.end,
                  right: t.end,
                  bottom: e.start,
                  left: t.start,
                };
              })(e.xScale, e.yScale, this.getMaxOverflow())
            )
          ));
      }
      update(t) {}
      draw() {
        const t = this._ctx,
          e = this.chart,
          i = this._cachedMeta,
          s = i.data || [],
          a = e.chartArea,
          n = [],
          o = this._drawStart || 0,
          r = this._drawCount || s.length - o,
          l = this.options.drawActiveElementsOnTop;
        let h;
        for (i.dataset && i.dataset.draw(t, a, o, r), h = o; h < o + r; ++h) {
          const e = s[h];
          e.hidden || (e.active && l ? n.push(e) : e.draw(t, a));
        }
        for (h = 0; h < n.length; ++h) n[h].draw(t, a);
      }
      getStyle(t, e) {
        e = e ? "active" : "default";
        return void 0 === t && this._cachedMeta.dataset
          ? this.resolveDatasetElementOptions(e)
          : this.resolveDataElementOptions(t || 0, e);
      }
      getContext(t, e, i) {
        var s,
          a = this.getDataset();
        let n;
        if (0 <= t && t < this._cachedMeta.data.length) {
          const e = this._cachedMeta.data[t];
          ((n =
            e.$context ||
            (e.$context = Pi(this.getContext(), {
              active: !1,
              dataIndex: t,
              parsed: void 0,
              raw: void 0,
              element: e,
              index: t,
              mode: "default",
              type: "data",
            }))).parsed = this.getParsed(t)),
            (n.raw = a.data[t]),
            (n.index = n.dataIndex = t);
        } else ((n = this.$context || (this.$context = ((t = this.chart.getContext()), (s = this.index), Pi(t, { active: !1, dataset: void 0, datasetIndex: s, index: s, mode: "default", type: "dataset" })))).dataset = a), (n.index = n.datasetIndex = this.index);
        return (n.active = !!e), (n.mode = i), n;
      }
      resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t);
      }
      resolveDataElementOptions(t, e) {
        return this._resolveElementOptions(this.dataElementType.id, e, t);
      }
      _resolveElementOptions(t, e = "default", i) {
        const s = "active" === e,
          a = this._cachedDataOpts,
          n = t + "-" + e,
          o = a[n],
          r = this.enableOptionSharing && G(i);
        if (o) return Cs(o, r);
        const l = this.chart.config,
          h = l.datasetElementScopeKeys(this._type, t),
          c = s ? [t + "Hover", "hover", t, ""] : [t, ""],
          d = l.getOptionScopes(this.getDataset(), h),
          u = Object.keys(R.elements[t]),
          g = l.resolveNamedOptions(d, u, () => this.getContext(i, s, e), c);
        return (
          g.$shared && ((g.$shared = r), (a[n] = Object.freeze(Cs(g, r)))), g
        );
      }
      _resolveAnimations(t, e, i) {
        const s = this.chart,
          a = this._cachedDataOpts,
          n = "animation-" + e,
          o = a[n];
        if (o) return o;
        let r;
        if (!1 !== s.options.animation) {
          const s = this.chart.config,
            a = s.datasetAnimationScopeKeys(this._type, e),
            n = s.getOptionScopes(this.getDataset(), a);
          r = s.createResolver(n, this.getContext(t, i, e));
        }
        t = new xs(s, r && r.animations);
        return r && r._cacheable && (a[n] = Object.freeze(t)), t;
      }
      getSharedOptions(t) {
        if (t.$shared)
          return (
            this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
          );
      }
      includeOptions(t, e) {
        return !e || Ds(t) || this.chart._animationsDisabled;
      }
      _getSharedOptions(t, e) {
        var t = this.resolveDataElementOptions(t, e),
          i = this._sharedOptions,
          s = this.getSharedOptions(t),
          i = this.includeOptions(e, s) || s !== i;
        return (
          this.updateSharedOptions(s, e, t),
          { sharedOptions: s, includeOptions: i }
        );
      }
      updateElement(t, e, i, s) {
        Ds(s)
          ? Object.assign(t, i)
          : this._resolveAnimations(e, s).update(t, i);
      }
      updateSharedOptions(t, e, i) {
        t && !Ds(e) && this._resolveAnimations(void 0, e).update(t, i);
      }
      _setStyle(t, e, i, s) {
        t.active = s;
        var a = this.getStyle(e, s);
        this._resolveAnimations(e, i, s).update(t, {
          options: (!s && this.getSharedOptions(a)) || a,
        });
      }
      removeHoverStyle(t, e, i) {
        this._setStyle(t, i, "active", !1);
      }
      setHoverStyle(t, e, i) {
        this._setStyle(t, i, "active", !0);
      }
      _removeDatasetHoverStyle() {
        var t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !1);
      }
      _setDatasetHoverStyle() {
        var t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !0);
      }
      _resyncElements(t) {
        const e = this._data,
          i = this._cachedMeta.data;
        for (const [t, e, i] of this._syncList) this[t](e, i);
        this._syncList = [];
        var s = i.length,
          a = e.length,
          n = Math.min(a, s);
        n && this.parse(0, n),
          s < a
            ? this._insertElements(s, a - s, t)
            : a < s && this._removeElements(a, s - a);
      }
      _insertElements(t, e, i = !0) {
        const s = this._cachedMeta,
          a = s.data,
          n = t + e;
        let o;
        var r = (t) => {
          for (t.length += e, o = t.length - 1; o >= n; o--) t[o] = t[o - e];
        };
        for (r(a), o = t; o < n; ++o) a[o] = new this.dataElementType();
        this._parsing && r(s._parsed),
          this.parse(t, e),
          i && this.updateElements(a, t, e, "reset");
      }
      updateElements(t, e, i, s) {}
      _removeElements(t, e) {
        const i = this._cachedMeta;
        var s;
        this._parsing && ((s = i._parsed.splice(t, e)), i._stacked && Ps(i, s)),
          i.data.splice(t, e);
      }
      _sync(t) {
        var e, i, s;
        this._parsing
          ? this._syncList.push(t)
          : (([e, i, s] = t), this[e](i, s)),
          this.chart._dataChanges.push([this.index, ...t]);
      }
      _onDataPush() {
        var t = arguments.length;
        this._sync(["_insertElements", this.getDataset().data.length - t, t]);
      }
      _onDataPop() {
        this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
      }
      _onDataShift() {
        this._sync(["_removeElements", 0, 1]);
      }
      _onDataSplice(t, e) {
        e && this._sync(["_removeElements", t, e]);
        e = arguments.length - 2;
        e && this._sync(["_insertElements", t, e]);
      }
      _onDataUnshift() {
        this._sync(["_insertElements", 0, arguments.length]);
      }
    }
    class e {
      static defaults = {};
      static defaultRoutes = void 0;
      x;
      y;
      active = !1;
      options;
      $animations;
      tooltipPosition(t) {
        var { x: t, y: e } = this.getProps(["x", "y"], t);
        return { x: t, y: e };
      }
      hasValue() {
        return rt(this.x) && rt(this.y);
      }
      getProps(t, e) {
        const i = this.$animations;
        if (!e || !i) return this;
        const s = {};
        return (
          t.forEach((t) => {
            s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
          }),
          s
        );
      }
    }
    function As(t, e, i, s, a) {
      var n = T(s, 0),
        o = Math.min(T(a, t.length), t.length);
      let r,
        l,
        h,
        c = 0;
      for (
        i = Math.ceil(i), a && (i = (r = a - s) / Math.floor(r / i)), h = n;
        h < 0;

      )
        c++, (h = Math.round(n + c * i));
      for (l = Math.max(n, 0); l < o; l++)
        l === h && (e.push(t[l]), c++, (h = Math.round(n + c * i)));
    }
    const Ts = (t, e, i) => ("top" === e || "left" === e ? t[e] + i : t[e] - i),
      Ls = (t, e) => Math.min(e || t, t);
    function Es(t, e) {
      const i = [],
        s = t.length / e,
        a = t.length;
      let n = 0;
      for (; n < a; n += s) i.push(t[Math.floor(n)]);
      return i;
    }
    function Rs(t) {
      return t.drawTicks ? t.tickLength : 0;
    }
    function Is(t, e) {
      if (!t.display) return 0;
      var e = z(t.font, e),
        i = I(t.padding);
      return (O(t.text) ? t.text.length : 1) * e.lineHeight + i.height;
    }
    class zs extends e {
      constructor(t) {
        super(),
          (this.id = t.id),
          (this.type = t.type),
          (this.options = void 0),
          (this.ctx = t.ctx),
          (this.chart = t.chart),
          (this.top = void 0),
          (this.bottom = void 0),
          (this.left = void 0),
          (this.right = void 0),
          (this.width = void 0),
          (this.height = void 0),
          (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
          (this.maxWidth = void 0),
          (this.maxHeight = void 0),
          (this.paddingTop = void 0),
          (this.paddingBottom = void 0),
          (this.paddingLeft = void 0),
          (this.paddingRight = void 0),
          (this.axis = void 0),
          (this.labelRotation = void 0),
          (this.min = void 0),
          (this.max = void 0),
          (this._range = void 0),
          (this.ticks = []),
          (this._gridLineItems = null),
          (this._labelItems = null),
          (this._labelSizes = null),
          (this._length = 0),
          (this._maxLength = 0),
          (this._longestTextCache = {}),
          (this._startPixel = void 0),
          (this._endPixel = void 0),
          (this._reversePixels = !1),
          (this._userMax = void 0),
          (this._userMin = void 0),
          (this._suggestedMax = void 0),
          (this._suggestedMin = void 0),
          (this._ticksLength = 0),
          (this._borderValue = 0),
          (this._cache = {}),
          (this._dataLimitsCached = !1),
          (this.$context = void 0);
      }
      init(t) {
        (this.options = t.setContext(this.getContext())),
          (this.axis = t.axis),
          (this._userMin = this.parse(t.min)),
          (this._userMax = this.parse(t.max)),
          (this._suggestedMin = this.parse(t.suggestedMin)),
          (this._suggestedMax = this.parse(t.suggestedMax));
      }
      parse(t, e) {
        return t;
      }
      getUserBounds() {
        var {
            _userMin: t,
            _userMax: e,
            _suggestedMin: i,
            _suggestedMax: s,
          } = this,
          t = g(t, Number.POSITIVE_INFINITY),
          e = g(e, Number.NEGATIVE_INFINITY),
          i = g(i, Number.POSITIVE_INFINITY),
          s = g(s, Number.NEGATIVE_INFINITY);
        return {
          min: g(t, i),
          max: g(e, s),
          minDefined: p(t),
          maxDefined: p(e),
        };
      }
      getMinMax(i) {
        let s,
          {
            min: a,
            max: n,
            minDefined: o,
            maxDefined: r,
          } = this.getUserBounds();
        if (o && r) return { min: a, max: n };
        const l = this.getMatchingVisibleMetas();
        for (let t = 0, e = l.length; t < e; ++t)
          (s = l[t].controller.getMinMax(this, i)),
            o || (a = Math.min(a, s.min)),
            r || (n = Math.max(n, s.max));
        return (
          (a = r && a > n ? n : a),
          (n = o && a > n ? a : n),
          { min: g(a, g(n, a)), max: g(n, g(a, n)) }
        );
      }
      getPadding() {
        return {
          left: this.paddingLeft || 0,
          top: this.paddingTop || 0,
          right: this.paddingRight || 0,
          bottom: this.paddingBottom || 0,
        };
      }
      getTicks() {
        return this.ticks;
      }
      getLabels() {
        var t = this.chart.data;
        return (
          this.options.labels ||
          (this.isHorizontal() ? t.xLabels : t.yLabels) ||
          t.labels ||
          []
        );
      }
      getLabelItems(t = this.chart.chartArea) {
        return (
          this._labelItems || (this._labelItems = this._computeLabelItems(t))
        );
      }
      beforeLayout() {
        (this._cache = {}), (this._dataLimitsCached = !1);
      }
      beforeUpdate() {
        d(this.options.beforeUpdate, [this]);
      }
      update(t, e, i) {
        var { beginAtZero: s, grace: a, ticks: n } = this.options,
          o = n.sampleSize,
          t =
            (this.beforeUpdate(),
            (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = i =
              Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
              ? this.width + i.left + i.right
              : this.height + i.top + i.bottom),
            this._dataLimitsCached ||
              (this.beforeDataLimits(),
              this.determineDataLimits(),
              this.afterDataLimits(),
              (this._range = Si(this, a, s)),
              (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks(),
            o < this.ticks.length);
        this._convertTicksToLabels(t ? Es(this.ticks, o) : this.ticks),
          this.configure(),
          this.beforeCalculateLabelRotation(),
          this.calculateLabelRotation(),
          this.afterCalculateLabelRotation(),
          n.display &&
            (n.autoSkip || "auto" === n.source) &&
            ((this.ticks = (function (t, s) {
              const e = t.options.ticks,
                i =
                  ((c = (t = t).options.offset),
                  (d = t._tickSize()),
                  (c = t._length / d + (c ? 0 : 1)),
                  (t = t._maxLength / d),
                  Math.floor(Math.min(c, t))),
                a = Math.min(e.maxTicksLimit || i, i),
                n = e.major.enabled
                  ? (function (t) {
                      const e = [];
                      let i, s;
                      for (i = 0, s = t.length; i < s; i++)
                        t[i].major && e.push(i);
                      return e;
                    })(s)
                  : [],
                o = n.length,
                r = n[0],
                l = n[o - 1],
                h = [];
              var c, d;
              if (a < o) {
                {
                  var u = s;
                  var g = h;
                  var f = n;
                  var p = o / a;
                  let t,
                    e = 0,
                    i = f[0];
                  for (p = Math.ceil(p), t = 0; t < u.length; t++)
                    t === i && (g.push(u[t]), e++, (i = f[e * p]));
                }
                return h;
              }
              var m = (function (t, i, e) {
                var t = (function (t) {
                    var e = t.length;
                    let i, s;
                    if (e < 2) return !1;
                    for (s = t[0], i = 1; i < e; ++i)
                      if (t[i] - t[i - 1] !== s) return !1;
                    return s;
                  })(t),
                  s = i.length / e;
                if (!t) return Math.max(s, 1);
                var a = ot(t);
                for (let t = 0, e = a.length - 1; t < e; t++) {
                  const i = a[t];
                  if (i > s) return i;
                }
                return Math.max(s, 1);
              })(n, s, a);
              if (0 < o) {
                let t, e;
                const i = 1 < o ? Math.round((l - r) / (o - 1)) : null;
                for (
                  As(s, h, m, P(i) ? 0 : r - i, r), t = 0, e = o - 1;
                  t < e;
                  t++
                )
                  As(s, h, m, n[t], n[t + 1]);
                return As(s, h, m, l, P(i) ? s.length : l + i), h;
              }
              return As(s, h, m), h;
            })(this, this.ticks)),
            (this._labelSizes = null),
            this.afterAutoSkip()),
          t && this._convertTicksToLabels(this.ticks),
          this.beforeFit(),
          this.fit(),
          this.afterFit(),
          this.afterUpdate();
      }
      configure() {
        let t,
          e,
          i = this.options.reverse;
        this.isHorizontal()
          ? ((t = this.left), (e = this.right))
          : ((t = this.top), (e = this.bottom), (i = !i)),
          (this._startPixel = t),
          (this._endPixel = e),
          (this._reversePixels = i),
          (this._length = e - t),
          (this._alignToPixels = this.options.alignToPixels);
      }
      afterUpdate() {
        d(this.options.afterUpdate, [this]);
      }
      beforeSetDimensions() {
        d(this.options.beforeSetDimensions, [this]);
      }
      setDimensions() {
        this.isHorizontal()
          ? ((this.width = this.maxWidth),
            (this.left = 0),
            (this.right = this.width))
          : ((this.height = this.maxHeight),
            (this.top = 0),
            (this.bottom = this.height)),
          (this.paddingLeft = 0),
          (this.paddingTop = 0),
          (this.paddingRight = 0),
          (this.paddingBottom = 0);
      }
      afterSetDimensions() {
        d(this.options.afterSetDimensions, [this]);
      }
      _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()),
          d(this.options[t], [this]);
      }
      beforeDataLimits() {
        this._callHooks("beforeDataLimits");
      }
      determineDataLimits() {}
      afterDataLimits() {
        this._callHooks("afterDataLimits");
      }
      beforeBuildTicks() {
        this._callHooks("beforeBuildTicks");
      }
      buildTicks() {
        return [];
      }
      afterBuildTicks() {
        this._callHooks("afterBuildTicks");
      }
      beforeTickToLabelConversion() {
        d(this.options.beforeTickToLabelConversion, [this]);
      }
      generateTickLabels(t) {
        var e = this.options.ticks;
        let i, s, a;
        for (i = 0, s = t.length; i < s; i++)
          (a = t[i]).label = d(e.callback, [a.value, i, t], this);
      }
      afterTickToLabelConversion() {
        d(this.options.afterTickToLabelConversion, [this]);
      }
      beforeCalculateLabelRotation() {
        d(this.options.beforeCalculateLabelRotation, [this]);
      }
      calculateLabelRotation() {
        var t,
          e,
          i,
          s,
          a = this.options,
          n = a.ticks,
          o = Ls(this.ticks.length, a.ticks.maxTicksLimit),
          r = n.minRotation || 0,
          l = n.maxRotation;
        let h,
          c,
          d,
          u = r;
        !this._isVisible() ||
        !n.display ||
        l <= r ||
        o <= 1 ||
        !this.isHorizontal()
          ? (this.labelRotation = r)
          : ((e = (t = this._getLabelSizes()).widest.width),
            (i = t.highest.height),
            (s = C(this.chart.width - e, 0, this.maxWidth)),
            (a.offset ? this.maxWidth / o : s / (o - 1)) < e + 6 &&
              ((h = s / (o - (a.offset ? 0.5 : 1))),
              (c =
                this.maxHeight -
                Rs(a.grid) -
                n.padding -
                Is(a.title, this.chart.options.font)),
              (d = Math.sqrt(e * e + i * i)),
              (u = ct(
                Math.min(
                  Math.asin(C((t.highest.height + 6) / h, -1, 1)),
                  Math.asin(C(c / d, -1, 1)) - Math.asin(C(i / d, -1, 1))
                )
              )),
              (u = Math.max(r, Math.min(l, u)))),
            (this.labelRotation = u));
      }
      afterCalculateLabelRotation() {
        d(this.options.afterCalculateLabelRotation, [this]);
      }
      afterAutoSkip() {}
      beforeFit() {
        d(this.options.beforeFit, [this]);
      }
      fit() {
        const t = { width: 0, height: 0 },
          {
            chart: e,
            options: { ticks: i, title: s, grid: a },
          } = this,
          n = this._isVisible(),
          o = this.isHorizontal();
        if (n) {
          const n = Is(s, e.options.font);
          if (
            (o
              ? ((t.width = this.maxWidth), (t.height = Rs(a) + n))
              : ((t.height = this.maxHeight), (t.width = Rs(a) + n)),
            i.display && this.ticks.length)
          ) {
            const {
                first: e,
                last: s,
                widest: a,
                highest: n,
              } = this._getLabelSizes(),
              r = 2 * i.padding,
              l = L(this.labelRotation),
              h = Math.cos(l),
              c = Math.sin(l);
            if (o) {
              const e = i.mirror ? 0 : c * a.width + h * n.height;
              t.height = Math.min(this.maxHeight, t.height + e + r);
            } else {
              const e = i.mirror ? 0 : h * a.width + c * n.height;
              t.width = Math.min(this.maxWidth, t.width + e + r);
            }
            this._calculatePadding(e, s, c, h);
          }
        }
        this._handleMargins(),
          o
            ? ((this.width = this._length =
                e.width - this._margins.left - this._margins.right),
              (this.height = t.height))
            : ((this.width = t.width),
              (this.height = this._length =
                e.height - this._margins.top - this._margins.bottom));
      }
      _calculatePadding(i, s, a, n) {
        const {
            ticks: { align: o, padding: r },
            position: l,
          } = this.options,
          h = 0 !== this.labelRotation,
          c = "top" !== l && "x" === this.axis;
        if (this.isHorizontal()) {
          const l = this.getPixelForTick(0) - this.left,
            d = this.right - this.getPixelForTick(this.ticks.length - 1);
          let t = 0,
            e = 0;
          h
            ? (e = c
                ? ((t = n * i.width), a * s.height)
                : ((t = a * i.height), n * s.width))
            : "start" === o
            ? (e = s.width)
            : "end" === o
            ? (t = i.width)
            : "inner" !== o && ((t = i.width / 2), (e = s.width / 2)),
            (this.paddingLeft = Math.max(
              ((t - l + r) * this.width) / (this.width - l),
              0
            )),
            (this.paddingRight = Math.max(
              ((e - d + r) * this.width) / (this.width - d),
              0
            ));
        } else {
          let t = s.height / 2,
            e = i.height / 2;
          "start" === o
            ? ((t = 0), (e = i.height))
            : "end" === o && ((t = s.height), (e = 0)),
            (this.paddingTop = t + r),
            (this.paddingBottom = e + r);
        }
      }
      _handleMargins() {
        this._margins &&
          ((this._margins.left = Math.max(
            this.paddingLeft,
            this._margins.left
          )),
          (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
          (this._margins.right = Math.max(
            this.paddingRight,
            this._margins.right
          )),
          (this._margins.bottom = Math.max(
            this.paddingBottom,
            this._margins.bottom
          )));
      }
      afterFit() {
        d(this.options.afterFit, [this]);
      }
      isHorizontal() {
        var { axis: t, position: e } = this.options;
        return "top" === e || "bottom" === e || "x" === t;
      }
      isFullSize() {
        return this.options.fullSize;
      }
      _convertTicksToLabels(t) {
        let e, i;
        for (
          this.beforeTickToLabelConversion(),
            this.generateTickLabels(t),
            e = 0,
            i = t.length;
          e < i;
          e++
        )
          P(t[e].label) && (t.splice(e, 1), i--, e--);
        this.afterTickToLabelConversion();
      }
      _getLabelSizes() {
        let e = this._labelSizes;
        if (!e) {
          var i = this.options.ticks.sampleSize;
          let t = this.ticks;
          i < t.length && (t = Es(t, i)),
            (this._labelSizes = e =
              this._computeLabelSizes(
                t,
                t.length,
                this.options.ticks.maxTicksLimit
              ));
        }
        return e;
      }
      _computeLabelSizes(t, e, i) {
        const { ctx: s, _longestTextCache: a } = this,
          n = [],
          o = [],
          r = Math.floor(e / Ls(e, i));
        let l,
          h,
          c,
          d,
          u,
          g,
          f,
          p,
          m,
          b,
          x,
          v = 0,
          _ = 0;
        for (l = 0; l < e; l += r) {
          if (
            ((d = t[l].label),
            (u = this._resolveTickFontOptions(l)),
            (s.font = g = u.string),
            (f = a[g] = a[g] || { data: {}, gc: [] }),
            (p = u.lineHeight),
            (m = b = 0),
            P(d) || O(d))
          ) {
            if (O(d))
              for (h = 0, c = d.length; h < c; ++h)
                P((x = d[h])) ||
                  O(x) ||
                  ((m = Le(s, f.data, f.gc, m, x)), (b += p));
          } else (m = Le(s, f.data, f.gc, m, d)), (b = p);
          n.push(m), o.push(b), (v = Math.max(m, v)), (_ = Math.max(b, _));
        }
        (i = a),
          (y = e),
          k(i, (t) => {
            const e = t.gc,
              i = e.length / 2;
            let s;
            if (y < i) {
              for (s = 0; s < i; ++s) delete t.data[e[s]];
              e.splice(0, i);
            }
          });
        var y,
          i = n.indexOf(v),
          M = o.indexOf(_),
          w = (t) => ({ width: n[t] || 0, height: o[t] || 0 });
        return {
          first: w(0),
          last: w(e - 1),
          widest: w(i),
          highest: w(M),
          widths: n,
          heights: o,
        };
      }
      getLabelForValue(t) {
        return t;
      }
      getPixelForValue(t, e) {
        return NaN;
      }
      getValueForPixel(t) {}
      getPixelForTick(t) {
        var e = this.ticks;
        return t < 0 || t > e.length - 1
          ? null
          : this.getPixelForValue(e[t].value);
      }
      getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        t = this._startPixel + t * this._length;
        return mt(this._alignToPixels ? Re(this.chart, t, 0) : t);
      }
      getDecimalForPixel(t) {
        t = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - t : t;
      }
      getBasePixel() {
        return this.getPixelForValue(this.getBaseValue());
      }
      getBaseValue() {
        var { min: t, max: e } = this;
        return t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0;
      }
      getContext(t) {
        var e = this.ticks || [];
        if (0 <= t && t < e.length) {
          const i = e[t];
          return (
            i.$context ||
            (i.$context = Pi(this.getContext(), {
              tick: i,
              index: t,
              type: "tick",
            }))
          );
        }
        return (
          this.$context ||
          (this.$context = Pi(this.chart.getContext(), {
            scale: this,
            type: "scale",
          }))
        );
      }
      _tickSize() {
        var t = this.options.ticks,
          e = L(this.labelRotation),
          i = Math.abs(Math.cos(e)),
          e = Math.abs(Math.sin(e)),
          s = this._getLabelSizes(),
          t = t.autoSkipPadding || 0,
          a = s ? s.widest.width + t : 0,
          s = s ? s.highest.height + t : 0;
        return this.isHorizontal()
          ? a * e < s * i
            ? a / i
            : s / e
          : s * e < a * i
          ? s / i
          : a / e;
      }
      _isVisible() {
        var t = this.options.display;
        return "auto" !== t ? !!t : 0 < this.getMatchingVisibleMetas().length;
      }
      _computeGridLineItems(t) {
        function e(t) {
          return Re(s, t, f);
        }
        const i = this.axis,
          s = this.chart,
          a = this.options,
          { grid: n, position: o, border: r } = a,
          l = n.offset,
          h = this.isHorizontal(),
          c = this.ticks.length + (l ? 1 : 0),
          d = Rs(n),
          u = [],
          g = r.setContext(this.getContext()),
          f = g.display ? g.width : 0,
          p = f / 2;
        let m, b, x, v, _, y, M, w, k, S, P, D;
        if ("top" === o)
          (m = e(this.bottom)),
            (y = this.bottom - d),
            (w = m - p),
            (S = e(t.top) + p),
            (D = t.bottom);
        else if ("bottom" === o)
          (m = e(this.top)),
            (S = t.top),
            (D = e(t.bottom) - p),
            (y = m + p),
            (w = this.top + d);
        else if ("left" === o)
          (m = e(this.right)),
            (_ = this.right - d),
            (M = m - p),
            (k = e(t.left) + p),
            (P = t.right);
        else if ("right" === o)
          (m = e(this.left)),
            (k = t.left),
            (P = e(t.right) - p),
            (_ = m + p),
            (M = this.left + d);
        else if ("x" === i) {
          if ("center" === o) m = e((t.top + t.bottom) / 2 + 0.5);
          else if (A(o)) {
            const t = Object.keys(o)[0],
              i = o[t];
            m = e(this.chart.scales[t].getPixelForValue(i));
          }
          (S = t.top), (D = t.bottom), (y = m + p), (w = y + d);
        } else if ("y" === i) {
          if ("center" === o) m = e((t.left + t.right) / 2);
          else if (A(o)) {
            const t = Object.keys(o)[0],
              i = o[t];
            m = e(this.chart.scales[t].getPixelForValue(i));
          }
          (_ = m - p), (M = _ - d), (k = t.left), (P = t.right);
        }
        var t = T(a.ticks.maxTicksLimit, c),
          C = Math.max(1, Math.ceil(c / t));
        for (b = 0; b < c; b += C) {
          const t = this.getContext(b),
            i = n.setContext(t),
            a = r.setContext(t),
            A = i.lineWidth,
            o = i.color,
            T = a.dash || [],
            c = a.dashOffset,
            d = i.tickWidth,
            g = i.tickColor,
            f = i.tickBorderDash || [],
            p = i.tickBorderDashOffset;
          void 0 !==
            (x = (function (t, e, i) {
              var s = t.ticks.length,
                a = Math.min(e, s - 1),
                n = t._startPixel,
                o = t._endPixel;
              let r,
                l = t.getPixelForTick(a);
              if (
                !(
                  i &&
                  ((r =
                    1 === s
                      ? Math.max(l - n, o - l)
                      : 0 === e
                      ? (t.getPixelForTick(1) - l) / 2
                      : (l - t.getPixelForTick(a - 1)) / 2),
                  (l += a < e ? r : -r) < n - 1e-6 || l > o + 1e-6)
                )
              )
                return l;
            })(this, b, l)) &&
            ((v = Re(s, x, A)),
            h ? (_ = M = k = P = v) : (y = w = S = D = v),
            u.push({
              tx1: _,
              ty1: y,
              tx2: M,
              ty2: w,
              x1: k,
              y1: S,
              x2: P,
              y2: D,
              width: A,
              color: o,
              borderDash: T,
              borderDashOffset: c,
              tickWidth: d,
              tickColor: g,
              tickBorderDash: f,
              tickBorderDashOffset: p,
            }));
        }
        return (this._ticksLength = c), (this._borderValue = m), u;
      }
      _computeLabelItems(s) {
        const a = this.axis,
          n = this.options,
          { position: o, ticks: e } = n,
          r = this.isHorizontal(),
          l = this.ticks,
          { align: h, crossAlign: c, padding: t, mirror: d } = e,
          i = Rs(n.grid),
          u = i + t,
          g = d ? -t : u,
          f = -L(this.labelRotation),
          p = [];
        let m,
          b,
          x,
          v,
          _,
          y,
          M,
          w,
          k,
          S,
          P,
          D = "middle";
        if ("top" === o)
          (_ = this.bottom - g), (y = this._getXAxisLabelAlignment());
        else if ("bottom" === o)
          (_ = this.top + g), (y = this._getXAxisLabelAlignment());
        else if ("left" === o) {
          const s = this._getYAxisLabelAlignment(i);
          (y = s.textAlign), (v = s.x);
        } else if ("right" === o) {
          const s = this._getYAxisLabelAlignment(i);
          (y = s.textAlign), (v = s.x);
        } else if ("x" === a) {
          if ("center" === o) _ = (s.top + s.bottom) / 2 + u;
          else if (A(o)) {
            const s = Object.keys(o)[0],
              a = o[s];
            _ = this.chart.scales[s].getPixelForValue(a) + u;
          }
          y = this._getXAxisLabelAlignment();
        } else if ("y" === a) {
          if ("center" === o) v = (s.left + s.right) / 2 - u;
          else if (A(o)) {
            const s = Object.keys(o)[0],
              a = o[s];
            v = this.chart.scales[s].getPixelForValue(a);
          }
          y = this._getYAxisLabelAlignment(i).textAlign;
        }
        "y" === a &&
          ("start" === h ? (D = "top") : "end" === h && (D = "bottom"));
        var C = this._getLabelSizes();
        for (m = 0, b = l.length; m < b; ++m) {
          x = l[m].label;
          const s = e.setContext(this.getContext(m)),
            a =
              ((M = this.getPixelForTick(m) + e.labelOffset),
              (k = (w = this._resolveTickFontOptions(m)).lineHeight),
              (S = O(x) ? x.length : 1) / 2),
            n = s.color,
            A = s.textStrokeColor,
            h = s.textStrokeWidth;
          let i,
            t = y;
          if (
            (r
              ? ((v = M),
                "inner" === y &&
                  (t =
                    m === b - 1
                      ? this.options.reverse
                        ? "left"
                        : "right"
                      : 0 === m
                      ? this.options.reverse
                        ? "right"
                        : "left"
                      : "center"),
                (P =
                  "top" === o
                    ? "near" === c || 0 != f
                      ? -S * k + k / 2
                      : "center" === c
                      ? -C.highest.height / 2 - a * k + k
                      : -C.highest.height + k / 2
                    : "near" === c || 0 != f
                    ? k / 2
                    : "center" === c
                    ? C.highest.height / 2 - a * k
                    : C.highest.height - S * k),
                d && (P *= -1),
                0 == f || s.showLabelBackdrop || (v += (k / 2) * Math.sin(f)))
              : ((_ = M), (P = ((1 - S) * k) / 2)),
            s.showLabelBackdrop)
          ) {
            const a = I(s.backdropPadding),
              n = C.heights[m],
              o = C.widths[m];
            let t = P - a.top,
              e = 0 - a.left;
            switch (D) {
              case "middle":
                t -= n / 2;
                break;
              case "bottom":
                t -= n;
            }
            switch (y) {
              case "center":
                e -= o / 2;
                break;
              case "right":
                e -= o;
            }
            i = {
              left: e,
              top: t,
              width: o + a.width,
              height: n + a.height,
              color: s.backdropColor,
            };
          }
          p.push({
            label: x,
            font: w,
            textOffset: P,
            options: {
              rotation: f,
              color: n,
              strokeColor: A,
              strokeWidth: h,
              textAlign: t,
              textBaseline: D,
              translation: [v, _],
              backdrop: i,
            },
          });
        }
        return p;
      }
      _getXAxisLabelAlignment() {
        var { position: t, ticks: e } = this.options;
        if (-L(this.labelRotation)) return "top" === t ? "left" : "right";
        let i = "center";
        return (
          "start" === e.align
            ? (i = "left")
            : "end" === e.align
            ? (i = "right")
            : "inner" === e.align && (i = "inner"),
          i
        );
      }
      _getYAxisLabelAlignment(t) {
        var {
            position: e,
            ticks: { crossAlign: i, mirror: s, padding: a },
          } = this.options,
          t = t + a,
          n = this._getLabelSizes().widest.width;
        let o, r;
        return (
          "left" === e
            ? s
              ? ((r = this.right + a),
                "near" === i
                  ? (o = "left")
                  : "center" === i
                  ? ((o = "center"), (r += n / 2))
                  : ((o = "right"), (r += n)))
              : ((r = this.right - t),
                "near" === i
                  ? (o = "right")
                  : "center" === i
                  ? ((o = "center"), (r -= n / 2))
                  : ((o = "left"), (r = this.left)))
            : "right" === e
            ? s
              ? ((r = this.left + a),
                "near" === i
                  ? (o = "right")
                  : "center" === i
                  ? ((o = "center"), (r -= n / 2))
                  : ((o = "left"), (r -= n)))
              : ((r = this.left + t),
                "near" === i
                  ? (o = "left")
                  : "center" === i
                  ? ((o = "center"), (r += n / 2))
                  : ((o = "right"), (r = this.right)))
            : (o = "right"),
          { textAlign: o, x: r }
        );
      }
      _computeLabelArea() {
        var t, e;
        if (!this.options.ticks.mirror)
          return (
            (t = this.chart),
            (e = this.options.position),
            "left" === e || "right" === e
              ? { top: 0, left: this.left, bottom: t.height, right: this.right }
              : "top" === e || "bottom" === e
              ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
              : void 0
          );
      }
      drawBackground() {
        const {
          ctx: t,
          options: { backgroundColor: e },
          left: i,
          top: s,
          width: a,
          height: n,
        } = this;
        e && (t.save(), (t.fillStyle = e), t.fillRect(i, s, a, n), t.restore());
      }
      getLineWidthForValue(e) {
        const t = this.options.grid;
        if (!this._isVisible() || !t.display) return 0;
        var i = this.ticks.findIndex((t) => t.value === e);
        return 0 <= i ? t.setContext(this.getContext(i)).lineWidth : 0;
      }
      drawGrid(t) {
        const e = this.options.grid,
          s = this.ctx,
          i =
            this._gridLineItems ||
            (this._gridLineItems = this._computeGridLineItems(t));
        let a, n;
        var o = (t, e, i) => {
          i.width &&
            i.color &&
            (s.save(),
            (s.lineWidth = i.width),
            (s.strokeStyle = i.color),
            s.setLineDash(i.borderDash || []),
            (s.lineDashOffset = i.borderDashOffset),
            s.beginPath(),
            s.moveTo(t.x, t.y),
            s.lineTo(e.x, e.y),
            s.stroke(),
            s.restore());
        };
        if (e.display)
          for (a = 0, n = i.length; a < n; ++a) {
            const t = i[a];
            e.drawOnChartArea &&
              o({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
              e.drawTicks &&
                o(
                  { x: t.tx1, y: t.ty1 },
                  { x: t.tx2, y: t.ty2 },
                  {
                    color: t.tickColor,
                    width: t.tickWidth,
                    borderDash: t.tickBorderDash,
                    borderDashOffset: t.tickBorderDashOffset,
                  }
                );
          }
      }
      drawBorder() {
        const {
            chart: a,
            ctx: n,
            options: { border: t, grid: o },
          } = this,
          r = t.setContext(this.getContext()),
          l = t.display ? r.width : 0;
        if (l) {
          var h = o.setContext(this.getContext(0)).lineWidth,
            c = this._borderValue;
          let t, e, i, s;
          this.isHorizontal()
            ? ((t = Re(a, this.left, l) - l / 2),
              (e = Re(a, this.right, h) + h / 2),
              (i = s = c))
            : ((i = Re(a, this.top, l) - l / 2),
              (s = Re(a, this.bottom, h) + h / 2),
              (t = e = c)),
            n.save(),
            (n.lineWidth = r.width),
            (n.strokeStyle = r.color),
            n.beginPath(),
            n.moveTo(t, i),
            n.lineTo(e, s),
            n.stroke(),
            n.restore();
        }
      }
      drawLabels(t) {
        if (this.options.ticks.display) {
          const e = this.ctx,
            i = this._computeLabelArea(),
            s = (i && Ve(e, i), this.getLabelItems(t));
          for (const t of s) {
            const i = t.options,
              s = t.font;
            He(e, t.label, 0, t.textOffset, s, i);
          }
          i && Be(e);
        }
      }
      drawTitle() {
        var {
          ctx: e,
          options: { position: i, title: s, reverse: a },
        } = this;
        if (s.display) {
          var n = z(s.font),
            o = I(s.padding),
            r = s.align;
          let t = n.lineHeight / 2;
          "bottom" === i || "center" === i || A(i)
            ? ((t += o.bottom),
              O(s.text) && (t += n.lineHeight * (s.text.length - 1)))
            : (t += o.top);
          var {
            titleX: o,
            titleY: l,
            maxWidth: h,
            rotation: c,
          } = (function (t, e, i, s) {
            const { top: a, left: n, bottom: o, right: r, chart: l } = t,
              { chartArea: h, scales: c } = l;
            let d,
              u,
              g,
              f = 0;
            var p = o - a,
              m = r - n;
            if (t.isHorizontal()) {
              if (((u = E(s, n, r)), A(i))) {
                const t = Object.keys(i)[0],
                  s = i[t];
                g = c[t].getPixelForValue(s) + p - e;
              } else
                g =
                  "center" === i ? (h.bottom + h.top) / 2 + p - e : Ts(t, i, e);
              d = r - n;
            } else {
              if (A(i)) {
                const t = Object.keys(i)[0],
                  s = i[t];
                u = c[t].getPixelForValue(s) - m + e;
              } else
                u =
                  "center" === i ? (h.left + h.right) / 2 - m + e : Ts(t, i, e);
              (g = E(s, o, a)), (f = "left" === i ? -D : D);
            }
            return { titleX: u, titleY: g, maxWidth: d, rotation: f };
          })(this, t, i, r);
          He(e, s.text, 0, 0, n, {
            color: s.color,
            maxWidth: h,
            rotation: c,
            textAlign: (function (t, e, i) {
              let s = Dt(t);
              return (s =
                (i && "right" !== e) || (!i && "right" === e)
                  ? "left" === (t = s)
                    ? "right"
                    : "right" === t
                    ? "left"
                    : t
                  : s);
            })(r, i, a),
            textBaseline: "middle",
            translation: [o, l],
          });
        }
      }
      draw(t) {
        this._isVisible() &&
          (this.drawBackground(),
          this.drawGrid(t),
          this.drawBorder(),
          this.drawTitle(),
          this.drawLabels(t));
      }
      _layers() {
        var t = this.options,
          e = (t.ticks && t.ticks.z) || 0,
          i = T(t.grid && t.grid.z, -1),
          t = T(t.border && t.border.z, 0);
        return this._isVisible() && this.draw === zs.prototype.draw
          ? [
              {
                z: i,
                draw: (t) => {
                  this.drawBackground(), this.drawGrid(t), this.drawTitle();
                },
              },
              {
                z: t,
                draw: () => {
                  this.drawBorder();
                },
              },
              {
                z: e,
                draw: (t) => {
                  this.drawLabels(t);
                },
              },
            ]
          : [
              {
                z: e,
                draw: (t) => {
                  this.draw(t);
                },
              },
            ];
      }
      getMatchingVisibleMetas(t) {
        const e = this.chart.getSortedVisibleDatasetMetas(),
          i = this.axis + "AxisID",
          s = [];
        let a, n;
        for (a = 0, n = e.length; a < n; ++a) {
          const n = e[a];
          n[i] !== this.id || (t && n.type !== t) || s.push(n);
        }
        return s;
      }
      _resolveTickFontOptions(t) {
        return z(this.options.ticks.setContext(this.getContext(t)).font);
      }
      _maxDigits() {
        var t = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / t;
      }
    }
    class Fs {
      constructor(t, e, i) {
        (this.type = t),
          (this.scope = e),
          (this.override = i),
          (this.items = Object.create(null));
      }
      isForType(t) {
        return Object.prototype.isPrototypeOf.call(
          this.type.prototype,
          t.prototype
        );
      }
      register(t) {
        var e,
          i,
          r,
          l,
          s = Object.getPrototypeOf(t);
        let a;
        "id" in (e = s) && "defaults" in e && (a = this.register(s));
        const n = this.items,
          o = t.id,
          h = this.scope + "." + o;
        if (o)
          return (
            o in n ||
              ((n[o] = t),
              (e = t),
              (s = h),
              (i = a),
              (i = Y(Object.create(null), [
                i ? R.get(i) : {},
                R.get(s),
                e.defaults,
              ])),
              R.set(s, i),
              e.defaultRoutes &&
                ((r = s),
                (l = e.defaultRoutes),
                Object.keys(l).forEach((t) => {
                  const e = t.split("."),
                    i = e.pop(),
                    s = [r].concat(e).join("."),
                    a = l[t].split("."),
                    n = a.pop(),
                    o = a.join(".");
                  R.route(s, i, o, n);
                })),
              e.descriptors && R.describe(s, e.descriptors),
              this.override && R.override(t.id, t.overrides)),
            h
          );
        throw new Error("class does not have id: " + t);
      }
      get(t) {
        return this.items[t];
      }
      unregister(t) {
        const e = this.items,
          i = t.id,
          s = this.scope;
        i in e && delete e[i],
          s && i in R[s] && (delete R[s][i], this.override && delete fe[i]);
      }
    }
    var b = new (class {
      constructor() {
        (this.controllers = new Fs(Os, "datasets", !0)),
          (this.elements = new Fs(e, "elements")),
          (this.plugins = new Fs(Object, "plugins")),
          (this.scales = new Fs(zs, "scales")),
          (this._typedRegistries = [
            this.controllers,
            this.scales,
            this.elements,
          ]);
      }
      add(...t) {
        this._each("register", t);
      }
      remove(...t) {
        this._each("unregister", t);
      }
      addControllers(...t) {
        this._each("register", t, this.controllers);
      }
      addElements(...t) {
        this._each("register", t, this.elements);
      }
      addPlugins(...t) {
        this._each("register", t, this.plugins);
      }
      addScales(...t) {
        this._each("register", t, this.scales);
      }
      getController(t) {
        return this._get(t, this.controllers, "controller");
      }
      getElement(t) {
        return this._get(t, this.elements, "element");
      }
      getPlugin(t) {
        return this._get(t, this.plugins, "plugin");
      }
      getScale(t) {
        return this._get(t, this.scales, "scale");
      }
      removeControllers(...t) {
        this._each("unregister", t, this.controllers);
      }
      removeElements(...t) {
        this._each("unregister", t, this.elements);
      }
      removePlugins(...t) {
        this._each("unregister", t, this.plugins);
      }
      removeScales(...t) {
        this._each("unregister", t, this.scales);
      }
      _each(i, t, s) {
        [...t].forEach((t) => {
          const e = s || this._getRegistryForType(t);
          s || e.isForType(t) || (e === this.plugins && t.id)
            ? this._exec(i, e, t)
            : k(t, (t) => {
                var e = s || this._getRegistryForType(t);
                this._exec(i, e, t);
              });
        });
      }
      _exec(t, e, i) {
        var s = K(t);
        d(i["before" + s], [], i), e[t](i), d(i["after" + s], [], i);
      }
      _getRegistryForType(e) {
        for (let t = 0; t < this._typedRegistries.length; t++) {
          const i = this._typedRegistries[t];
          if (i.isForType(e)) return i;
        }
        return this.plugins;
      }
      _get(t, e, i) {
        e = e.get(t);
        if (void 0 === e)
          throw new Error('"' + t + '" is not a registered ' + i + ".");
        return e;
      }
    })();
    class Vs {
      constructor() {
        this._init = [];
      }
      notify(t, e, i, s) {
        "beforeInit" === e &&
          ((this._init = this._createDescriptors(t, !0)),
          this._notify(this._init, t, "install"));
        (s = s ? this._descriptors(t).filter(s) : this._descriptors(t)),
          (i = this._notify(s, t, e, i));
        return (
          "afterDestroy" === e &&
            (this._notify(s, t, "stop"),
            this._notify(this._init, t, "uninstall")),
          i
        );
      }
      _notify(t, e, i, s) {
        s = s || {};
        for (const a of t) {
          const t = a.plugin;
          if (!1 === d(t[i], [e, s, a.options], t) && s.cancelable) return !1;
        }
        return !0;
      }
      invalidate() {
        P(this._cache) ||
          ((this._oldCache = this._cache), (this._cache = void 0));
      }
      _descriptors(t) {
        if (this._cache) return this._cache;
        var e = (this._cache = this._createDescriptors(t));
        return this._notifyStateChanges(t), e;
      }
      _createDescriptors(t, e) {
        var i,
          s = t && t.config,
          a = T(s.options && s.options.plugins, {}),
          s = (function (t) {
            const e = {},
              i = [],
              s = Object.keys(b.plugins.items);
            for (let t = 0; t < s.length; t++) i.push(b.getPlugin(s[t]));
            var a = t.plugins || [];
            for (let t = 0; t < a.length; t++) {
              const s = a[t];
              -1 === i.indexOf(s) && (i.push(s), (e[s.id] = !0));
            }
            return { plugins: i, localIds: e };
          })(s);
        if (!1 !== a || e) {
          var [n, { plugins: o, localIds: r }, l, h] = [t, s, a, e];
          const c = [],
            d = n.getContext();
          for (const u of o) {
            const o = u.id,
              g = ((i = l[o]), h || !1 !== i ? (!0 === i ? {} : i) : null);
            null !== g &&
              c.push({
                plugin: u,
                options: (function (t, { plugin: e, local: i }, s, a) {
                  const n = t.pluginScopeKeys(e),
                    o = t.getOptionScopes(s, n);
                  return (
                    i && e.defaults && o.push(e.defaults),
                    t.createResolver(o, a, [""], {
                      scriptable: !1,
                      indexable: !1,
                      allKeys: !0,
                    })
                  );
                })(n.config, { plugin: u, local: r[o] }, g, d),
              });
          }
          return c;
        }
        return [];
      }
      _notifyStateChanges(t) {
        var e = this._oldCache || [],
          i = this._cache,
          s = (t, i) =>
            t.filter((e) => !i.some((t) => e.plugin.id === t.plugin.id));
        this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
      }
    }
    function Bs(t, e) {
      var i = R.datasets[t] || {};
      return (
        ((e.datasets || {})[t] || {}).indexAxis ||
        e.indexAxis ||
        i.indexAxis ||
        "x"
      );
    }
    function Ws(t) {
      if ("x" === t || "y" === t || "r" === t) return t;
    }
    function Ns(t, ...e) {
      if (Ws(t)) return t;
      for (const s of e) {
        const e =
          s.axis ||
          ("top" === (i = s.position) || "bottom" === i
            ? "x"
            : "left" === i || "right" === i
            ? "y"
            : void 0) ||
          (1 < t.length && Ws(t[0].toLowerCase()));
        if (e) return e;
      }
      var i;
      throw new Error(
        `Cannot determine type of '${t}' axis. Please provide 'axis' or 'position' option.`
      );
    }
    function Hs(t, e, i) {
      if (i[e + "AxisID"] === t) return { axis: e };
    }
    function js(t) {
      const e = t.options || (t.options = {});
      (e.plugins = T(e.plugins, {})),
        (e.scales = (function (o, e) {
          const n = fe[o.type] || { scales: {} },
            r = e.scales || {},
            l = Bs(o.type, e),
            h = Object.create(null);
          return (
            Object.keys(r).forEach((t) => {
              var e = r[t];
              if (!A(e))
                return console.error(
                  "Invalid scale configuration for scale: " + t
                );
              if (e._proxy)
                return console.warn(
                  "Ignoring resolver passed as options for scale: " + t
                );
              const i = Ns(
                  t,
                  e,
                  (function (e, t) {
                    if (t.data && t.data.datasets) {
                      t = t.data.datasets.filter(
                        (t) => t.xAxisID === e || t.yAxisID === e
                      );
                      if (t.length) return Hs(e, "x", t[0]) || Hs(e, "y", t[0]);
                    }
                    return {};
                  })(t, o),
                  R.scales[e.type]
                ),
                s = i === l ? "_index_" : "_value_",
                a = n.scales || {};
              h[t] = $(Object.create(null), [{ axis: i }, e, a[i], a[s]]);
            }),
            o.data.datasets.forEach((s) => {
              const t = s.type || o.type,
                a = s.indexAxis || Bs(t, e),
                n = (fe[t] || {}).scales || {};
              Object.keys(n).forEach((t) => {
                var e = (function (t, e) {
                    let i = t;
                    return (
                      "_index_" === t
                        ? (i = e)
                        : "_value_" === t && (i = "x" === e ? "y" : "x"),
                      i
                    );
                  })(t, a),
                  i = s[e + "AxisID"] || e;
                (h[i] = h[i] || Object.create(null)),
                  $(h[i], [{ axis: e }, r[i], n[t]]);
              });
            }),
            Object.keys(h).forEach((t) => {
              t = h[t];
              $(t, [R.scales[t.type], R.scale]);
            }),
            h
          );
        })(t, e));
    }
    function Ys(t) {
      return (
        ((t = t || {}).datasets = t.datasets || []),
        (t.labels = t.labels || []),
        t
      );
    }
    const $s = new Map(),
      Us = new Set();
    function Xs(t, e) {
      let i = $s.get(t);
      return i || ((i = e()), $s.set(t, i), Us.add(i)), i;
    }
    const qs = (t, e, i) => {
      e = m(e, i);
      void 0 !== e && t.add(e);
    };
    class Ks {
      constructor(t) {
        (this._config = (((t = (t = t) || {}).data = Ys(t.data)), js(t), t)),
          (this._scopeCache = new Map()),
          (this._resolverCache = new Map());
      }
      get platform() {
        return this._config.platform;
      }
      get type() {
        return this._config.type;
      }
      set type(t) {
        this._config.type = t;
      }
      get data() {
        return this._config.data;
      }
      set data(t) {
        this._config.data = Ys(t);
      }
      get options() {
        return this._config.options;
      }
      set options(t) {
        this._config.options = t;
      }
      get plugins() {
        return this._config.plugins;
      }
      update() {
        var t = this._config;
        this.clearCache(), js(t);
      }
      clearCache() {
        this._scopeCache.clear(), this._resolverCache.clear();
      }
      datasetScopeKeys(t) {
        return Xs(t, () => [["datasets." + t, ""]]);
      }
      datasetAnimationScopeKeys(t, e) {
        return Xs(t + ".transition." + e, () => [
          [`datasets.${t}.transitions.` + e, "transitions." + e],
          ["datasets." + t, ""],
        ]);
      }
      datasetElementScopeKeys(t, e) {
        return Xs(t + "-" + e, () => [
          [`datasets.${t}.elements.` + e, "datasets." + t, "elements." + e, ""],
        ]);
      }
      pluginScopeKeys(t) {
        const e = t.id;
        return Xs(this.type + "-plugin-" + e, () => [
          ["plugins." + e, ...(t.additionalOptionScopes || [])],
        ]);
      }
      _cachedScopes(t, e) {
        const i = this._scopeCache;
        let s = i.get(t);
        return (s && !e) || ((s = new Map()), i.set(t, s)), s;
      }
      getOptionScopes(e, t, i) {
        const { options: s, type: a } = this,
          n = this._cachedScopes(e, i),
          o = n.get(t);
        if (o) return o;
        const r = new Set(),
          l =
            (t.forEach((t) => {
              e && (r.add(e), t.forEach((t) => qs(r, e, t))),
                t.forEach((t) => qs(r, s, t)),
                t.forEach((t) => qs(r, fe[a] || {}, t)),
                t.forEach((t) => qs(r, R, t)),
                t.forEach((t) => qs(r, pe, t));
            }),
            Array.from(r));
        return (
          0 === l.length && l.push(Object.create(null)),
          Us.has(t) && n.set(t, l),
          l
        );
      }
      chartOptionScopes() {
        var { options: t, type: e } = this;
        return [t, fe[e] || {}, R.datasets[e] || {}, { type: e }, R, pe];
      }
      resolveNamedOptions(t, e, i, s = [""]) {
        const a = { $shared: !0 },
          { resolver: n, subPrefixes: o } = Gs(this._resolverCache, t, s);
        let r = n;
        !(function (t, e) {
          const { isScriptable: i, isIndexable: s } = Ue(t);
          for (const a of e) {
            const e = i(a),
              n = s(a),
              o = (n || e) && t[a];
            if ((e && (u(o) || Zs(o))) || (n && O(o))) return 1;
          }
        })(n, e) ||
          ((a.$shared = !1),
          (r = $e(n, (i = u(i) ? i() : i), this.createResolver(t, i, o))));
        for (const t of e) a[t] = r[t];
        return a;
      }
      createResolver(t, e, i = [""], s) {
        t = Gs(this._resolverCache, t, i).resolver;
        return A(e) ? $e(t, e, void 0, s) : t;
      }
    }
    function Gs(t, e, i) {
      let s = t.get(e);
      s || ((s = new Map()), t.set(e, s));
      t = i.join();
      let a = s.get(t);
      return (
        a ||
          ((a = {
            resolver: Ye(e, i),
            subPrefixes: i.filter((t) => !t.toLowerCase().includes("hover")),
          }),
          s.set(t, a)),
        a
      );
    }
    const Zs = (i) =>
        A(i) &&
        Object.getOwnPropertyNames(i).reduce((t, e) => t || u(i[e]), !1),
      Js = ["top", "bottom", "left", "right", "chartArea"];
    function Qs(t, e) {
      return (
        "top" === t || "bottom" === t || (-1 === Js.indexOf(t) && "x" === e)
      );
    }
    function ta(i, s) {
      return function (t, e) {
        return t[i] === e[i] ? t[s] - e[s] : t[i] - e[i];
      };
    }
    function ea(t) {
      const e = t.chart,
        i = e.options.animation;
      e.notifyPlugins("afterRender"), d(i && i.onComplete, [t], e);
    }
    function ia(t) {
      var e = t.chart,
        i = e.options.animation;
      d(i && i.onProgress, [t], e);
    }
    function sa(t) {
      return (
        xe() && "string" == typeof t
          ? (t = document.getElementById(t))
          : t && t.length && (t = t[0]),
        (t = t && t.canvas ? t.canvas : t)
      );
    }
    const aa = {},
      na = (t) => {
        const e = sa(t);
        return Object.values(aa)
          .filter((t) => t.canvas === e)
          .pop();
      };
    function oa(t, e, i) {
      return (t.options.clip ? t : e)[i];
    }
    class i {
      static defaults = R;
      static instances = aa;
      static overrides = fe;
      static registry = b;
      static version = "4.4.0";
      static getChart = na;
      static register(...t) {
        b.add(...t), ra();
      }
      static unregister(...t) {
        b.remove(...t), ra();
      }
      constructor(t, e) {
        const i = (this.config = new Ks(e)),
          s = sa(t),
          a = na(s);
        if (a)
          throw new Error(
            "Canvas is already in use. Chart with ID '" +
              a.id +
              "' must be destroyed before the canvas with ID '" +
              a.canvas.id +
              "' can be reused."
          );
        var e = i.createResolver(i.chartOptionScopes(), this.getContext()),
          t =
            ((this.platform = new (i.platform || fs(s))()),
            this.platform.updateConfig(i),
            this.platform.acquireContext(s, e.aspectRatio)),
          n = t && t.canvas,
          o = n && n.height,
          r = n && n.width;
        (this.id = F()),
          (this.ctx = t),
          (this.canvas = n),
          (this.width = r),
          (this.height = o),
          (this._options = e),
          (this._aspectRatio = this.aspectRatio),
          (this._layers = []),
          (this._metasets = []),
          (this._stacks = void 0),
          (this.boxes = []),
          (this.currentDevicePixelRatio = void 0),
          (this.chartArea = void 0),
          (this._active = []),
          (this._lastEvent = void 0),
          (this._listeners = {}),
          (this._responsiveListeners = void 0),
          (this._sortedMetasets = []),
          (this.scales = {}),
          (this._plugins = new Vs()),
          (this.$proxies = {}),
          (this._hiddenIndices = {}),
          (this.attached = !1),
          (this._animationsDisabled = void 0),
          (this.$context = void 0),
          (this._doResize = Pt((t) => this.update(t), e.resizeDelay || 0)),
          (this._dataChanges = []),
          (aa[this.id] = this),
          t && n
            ? (l.listen(this, "complete", ea),
              l.listen(this, "progress", ia),
              this._initialize(),
              this.attached && this.update())
            : console.error(
                "Failed to create chart: can't acquire context from the given item"
              );
      }
      get aspectRatio() {
        var {
          options: { aspectRatio: t, maintainAspectRatio: e },
          width: i,
          height: s,
          _aspectRatio: a,
        } = this;
        return P(t) ? (e && a ? a : s ? i / s : null) : t;
      }
      get data() {
        return this.config.data;
      }
      set data(t) {
        this.config.data = t;
      }
      get options() {
        return this._options;
      }
      set options(t) {
        this.config.options = t;
      }
      get registry() {
        return b;
      }
      _initialize() {
        return (
          this.notifyPlugins("beforeInit"),
          this.options.responsive
            ? this.resize()
            : Ce(this, this.options.devicePixelRatio),
          this.bindEvents(),
          this.notifyPlugins("afterInit"),
          this
        );
      }
      clear() {
        return Ie(this.canvas, this.ctx), this;
      }
      stop() {
        return l.stop(this), this;
      }
      resize(t, e) {
        l.running(this)
          ? (this._resizeBeforeDraw = { width: t, height: e })
          : this._resize(t, e);
      }
      _resize(t, e) {
        var i = this.options,
          s = this.canvas,
          a = i.maintainAspectRatio && this.aspectRatio,
          s = this.platform.getMaximumSize(s, t, e, a),
          t = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
          e = this.width ? "resize" : "attach";
        (this.width = s.width),
          (this.height = s.height),
          (this._aspectRatio = this.aspectRatio),
          Ce(this, t, !0) &&
            (this.notifyPlugins("resize", { size: s }),
            d(i.onResize, [this, s], this),
            this.attached && this._doResize(e) && this.render());
      }
      ensureScalesHaveIDs() {
        k(this.options.scales || {}, (t, e) => {
          t.id = e;
        });
      }
      buildOrUpdateScales() {
        const o = this.options,
          s = o.scales,
          r = this.scales,
          l = Object.keys(r).reduce((t, e) => ((t[e] = !1), t), {});
        let t = [];
        k(
          (t = s
            ? t.concat(
                Object.keys(s).map((t) => {
                  var e = s[t],
                    t = Ns(t, e),
                    i = "r" === t,
                    t = "x" === t;
                  return {
                    options: e,
                    dposition: i ? "chartArea" : t ? "bottom" : "left",
                    dtype: i ? "radialLinear" : t ? "category" : "linear",
                  };
                })
              )
            : t),
          (t) => {
            const e = t.options,
              i = e.id,
              s = Ns(i, e),
              a = T(e.type, t.dtype);
            (void 0 !== e.position && Qs(e.position, s) === Qs(t.dposition)) ||
              (e.position = t.dposition),
              (l[i] = !0);
            let n = null;
            i in r && r[i].type === a
              ? (n = r[i])
              : ((n = new (b.getScale(a))({
                  id: i,
                  type: a,
                  ctx: this.ctx,
                  chart: this,
                })),
                (r[n.id] = n)),
              n.init(e, o);
          }
        ),
          k(l, (t, e) => {
            t || delete r[e];
          }),
          k(r, (t) => {
            a.configure(this, t, t.options), a.addBox(this, t);
          });
      }
      _updateMetasets() {
        const t = this._metasets,
          e = this.data.datasets.length,
          i = t.length;
        if ((t.sort((t, e) => t.index - e.index), e < i)) {
          for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
          t.splice(e, i - e);
        }
        this._sortedMetasets = t.slice(0).sort(ta("order", "index"));
      }
      _removeUnreferencedMetasets() {
        const {
          _metasets: t,
          data: { datasets: i },
        } = this;
        t.length > i.length && delete this._stacks,
          t.forEach((e, t) => {
            0 === i.filter((t) => t === e._dataset).length &&
              this._destroyDatasetMeta(t);
          });
      }
      buildOrUpdateControllers() {
        const e = [],
          i = this.data.datasets;
        let s, a;
        for (
          this._removeUnreferencedMetasets(), s = 0, a = i.length;
          s < a;
          s++
        ) {
          const a = i[s];
          let t = this.getDatasetMeta(s);
          var n = a.type || this.config.type;
          if (
            (t.type &&
              t.type !== n &&
              (this._destroyDatasetMeta(s), (t = this.getDatasetMeta(s))),
            (t.type = n),
            (t.indexAxis = a.indexAxis || Bs(n, this.options)),
            (t.order = a.order || 0),
            (t.index = s),
            (t.label = "" + a.label),
            (t.visible = this.isDatasetVisible(s)),
            t.controller)
          )
            t.controller.updateIndex(s), t.controller.linkScales();
          else {
            const i = b.getController(n),
              { datasetElementType: a, dataElementType: o } = R.datasets[n];
            Object.assign(i, {
              dataElementType: b.getElement(o),
              datasetElementType: a && b.getElement(a),
            }),
              (t.controller = new i(this, s)),
              e.push(t.controller);
          }
        }
        return this._updateMetasets(), e;
      }
      _resetElements() {
        k(
          this.data.datasets,
          (t, e) => {
            this.getDatasetMeta(e).controller.reset();
          },
          this
        );
      }
      reset() {
        this._resetElements(), this.notifyPlugins("reset");
      }
      update(t) {
        const s = this.config,
          a =
            (s.update(),
            (this._options = s.createResolver(
              s.chartOptionScopes(),
              this.getContext()
            ))),
          n = (this._animationsDisabled = !a.animation);
        if (
          (this._updateScales(),
          this._checkEventBindings(),
          this._updateHiddenIndices(),
          this._plugins.invalidate(),
          !1 !==
            this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
        ) {
          const o = this.buildOrUpdateControllers();
          this.notifyPlugins("beforeElementsUpdate");
          let i = 0;
          for (let t = 0, e = this.data.datasets.length; t < e; t++) {
            const s = this.getDatasetMeta(t)["controller"],
              a = !n && -1 === o.indexOf(s);
            s.buildOrUpdateElements(a), (i = Math.max(+s.getMaxOverflow(), i));
          }
          (i = this._minPadding = a.layout.autoPadding ? i : 0),
            this._updateLayout(i),
            n ||
              k(o, (t) => {
                t.reset();
              }),
            this._updateDatasets(t),
            this.notifyPlugins("afterUpdate", { mode: t }),
            this._layers.sort(ta("z", "_idx"));
          var { _active: t, _lastEvent: e } = this;
          e
            ? this._eventHandler(e, !0)
            : t.length && this._updateHoverStyles(t, t, !0),
            this.render();
        }
      }
      _updateScales() {
        k(this.scales, (t) => {
          a.removeBox(this, t);
        }),
          this.ensureScalesHaveIDs(),
          this.buildOrUpdateScales();
      }
      _checkEventBindings() {
        var t = this.options,
          e = new Set(Object.keys(this._listeners)),
          i = new Set(t.events);
        (Z(e, i) && !!this._responsiveListeners === t.responsive) ||
          (this.unbindEvents(), this.bindEvents());
      }
      _updateHiddenIndices() {
        var t,
          e,
          i,
          s,
          a = this["_hiddenIndices"];
        for ({
          method: t,
          start: e,
          count: i,
        } of this._getUniformDataChanges() || []) {
          n = void 0;
          o = void 0;
          r = void 0;
          s = void 0;
          var n = a;
          var o = e;
          var r = "_removeElements" === t ? -i : i;
          const l = Object.keys(n);
          for (const h of l) {
            const l = +h;
            l >= o &&
              ((s = n[h]), delete n[h], (0 < r || l > o) && (n[l + r] = s));
          }
        }
      }
      _getUniformDataChanges() {
        const t = this._dataChanges;
        if (t && t.length) {
          this._dataChanges = [];
          var e = this.data.datasets.length,
            i = (e) =>
              new Set(
                t
                  .filter((t) => t[0] === e)
                  .map((t, e) => e + "," + t.splice(1).join(","))
              ),
            s = i(0);
          for (let t = 1; t < e; t++) if (!Z(s, i(t))) return;
          return Array.from(s)
            .map((t) => t.split(","))
            .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
        }
      }
      _updateLayout(t) {
        if (!1 !== this.notifyPlugins("beforeLayout", { cancelable: !0 })) {
          a.update(this, this.width, this.height, t);
          const e = this.chartArea,
            i = e.width <= 0 || e.height <= 0;
          (this._layers = []),
            k(
              this.boxes,
              (t) => {
                (i && "chartArea" === t.position) ||
                  (t.configure && t.configure(),
                  this._layers.push(...t._layers()));
              },
              this
            ),
            this._layers.forEach((t, e) => {
              t._idx = e;
            }),
            this.notifyPlugins("afterLayout");
        }
      }
      _updateDatasets(i) {
        if (
          !1 !==
          this.notifyPlugins("beforeDatasetsUpdate", {
            mode: i,
            cancelable: !0,
          })
        ) {
          for (let t = 0, e = this.data.datasets.length; t < e; ++t)
            this.getDatasetMeta(t).controller.configure();
          for (let t = 0, e = this.data.datasets.length; t < e; ++t)
            this._updateDataset(t, u(i) ? i({ datasetIndex: t }) : i);
          this.notifyPlugins("afterDatasetsUpdate", { mode: i });
        }
      }
      _updateDataset(t, e) {
        const i = this.getDatasetMeta(t),
          s = { meta: i, index: t, mode: e, cancelable: !0 };
        !1 !== this.notifyPlugins("beforeDatasetUpdate", s) &&
          (i.controller._update(e),
          (s.cancelable = !1),
          this.notifyPlugins("afterDatasetUpdate", s));
      }
      render() {
        !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
          (l.has(this)
            ? this.attached && !l.running(this) && l.start(this)
            : (this.draw(), ea({ chart: this })));
      }
      draw() {
        let t;
        if (this._resizeBeforeDraw) {
          const { width: t, height: e } = this._resizeBeforeDraw;
          this._resize(t, e), (this._resizeBeforeDraw = null);
        }
        if (
          (this.clear(),
          !(this.width <= 0 || this.height <= 0) &&
            !1 !== this.notifyPlugins("beforeDraw", { cancelable: !0 }))
        ) {
          const e = this._layers;
          for (t = 0; t < e.length && e[t].z <= 0; ++t)
            e[t].draw(this.chartArea);
          for (this._drawDatasets(); t < e.length; ++t)
            e[t].draw(this.chartArea);
          this.notifyPlugins("afterDraw");
        }
      }
      _getSortedDatasetMetas(t) {
        const e = this._sortedMetasets,
          i = [];
        let s, a;
        for (s = 0, a = e.length; s < a; ++s) {
          const a = e[s];
          (t && !a.visible) || i.push(a);
        }
        return i;
      }
      getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0);
      }
      _drawDatasets() {
        if (
          !1 !== this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
        ) {
          var e = this.getSortedVisibleDatasetMetas();
          for (let t = e.length - 1; 0 <= t; --t) this._drawDataset(e[t]);
          this.notifyPlugins("afterDatasetsDraw");
        }
      }
      _drawDataset(s) {
        const t = this.ctx,
          e = s._clip,
          i = !e.disabled,
          a = (function (t) {
            var { xScale: e, yScale: i } = s;
            return e && i
              ? {
                  left: oa(e, t, "left"),
                  right: oa(e, t, "right"),
                  top: oa(i, t, "top"),
                  bottom: oa(i, t, "bottom"),
                }
              : t;
          })(this.chartArea),
          n = { meta: s, index: s.index, cancelable: !0 };
        !1 !== this.notifyPlugins("beforeDatasetDraw", n) &&
          (i &&
            Ve(t, {
              left: !1 === e.left ? 0 : a.left - e.left,
              right: !1 === e.right ? this.width : a.right + e.right,
              top: !1 === e.top ? 0 : a.top - e.top,
              bottom: !1 === e.bottom ? this.height : a.bottom + e.bottom,
            }),
          s.controller.draw(),
          i && Be(t),
          (n.cancelable = !1),
          this.notifyPlugins("afterDatasetDraw", n));
      }
      isPointInArea(t) {
        return M(t, this.chartArea, this._minPadding);
      }
      getElementsAtEventForMode(t, e, i, s) {
        const a = Hi.modes[e];
        return "function" == typeof a ? a(this, t, i, s) : [];
      }
      getDatasetMeta(t) {
        const e = this.data.datasets[t],
          i = this._metasets;
        let s = i.filter((t) => t && t._dataset === e).pop();
        return (
          s ||
            ((s = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null,
              order: (e && e.order) || 0,
              index: t,
              _dataset: e,
              _parsed: [],
              _sorted: !1,
            }),
            i.push(s)),
          s
        );
      }
      getContext() {
        return (
          this.$context ||
          (this.$context = Pi(null, { chart: this, type: "chart" }))
        );
      }
      getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length;
      }
      isDatasetVisible(t) {
        var e = this.data.datasets[t];
        if (!e) return !1;
        t = this.getDatasetMeta(t);
        return "boolean" == typeof t.hidden ? !t.hidden : !e.hidden;
      }
      setDatasetVisibility(t, e) {
        this.getDatasetMeta(t).hidden = !e;
      }
      toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t];
      }
      getDataVisibility(t) {
        return !this._hiddenIndices[t];
      }
      _updateVisibility(e, t, i) {
        const s = i ? "show" : "hide",
          a = this.getDatasetMeta(e),
          n = a.controller._resolveAnimations(void 0, s);
        G(t)
          ? ((a.data[t].hidden = !i), this.update())
          : (this.setDatasetVisibility(e, i),
            n.update(a, { visible: i }),
            this.update((t) => (t.datasetIndex === e ? s : void 0)));
      }
      hide(t, e) {
        this._updateVisibility(t, e, !1);
      }
      show(t, e) {
        this._updateVisibility(t, e, !0);
      }
      _destroyDatasetMeta(t) {
        const e = this._metasets[t];
        e && e.controller && e.controller._destroy(), delete this._metasets[t];
      }
      _stop() {
        let t, e;
        for (
          this.stop(), l.remove(this), t = 0, e = this.data.datasets.length;
          t < e;
          ++t
        )
          this._destroyDatasetMeta(t);
      }
      destroy() {
        this.notifyPlugins("beforeDestroy");
        var { canvas: t, ctx: e } = this;
        this._stop(),
          this.config.clearCache(),
          t &&
            (this.unbindEvents(),
            Ie(t, e),
            this.platform.releaseContext(e),
            (this.canvas = null),
            (this.ctx = null)),
          delete aa[this.id],
          this.notifyPlugins("afterDestroy");
      }
      toBase64Image(...t) {
        return this.canvas.toDataURL(...t);
      }
      bindEvents() {
        this.bindUserEvents(),
          this.options.responsive
            ? this.bindResponsiveEvents()
            : (this.attached = !0);
      }
      bindUserEvents() {
        const i = this._listeners,
          s = this.platform,
          e = (t, e) => {
            s.addEventListener(this, t, e), (i[t] = e);
          },
          a = (t, e, i) => {
            (t.offsetX = e), (t.offsetY = i), this._eventHandler(t);
          };
        k(this.options.events, (t) => e(t, a));
      }
      bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const i = this._responsiveListeners,
          s = this.platform,
          t = (t, e) => {
            s.addEventListener(this, t, e), (i[t] = e);
          },
          e = (t, e) => {
            i[t] && (s.removeEventListener(this, t, e), delete i[t]);
          },
          a = (t, e) => {
            this.canvas && this.resize(t, e);
          };
        let n;
        const o = () => {
          e("attach", o),
            (this.attached = !0),
            this.resize(),
            t("resize", a),
            t("detach", n);
        };
        (n = () => {
          (this.attached = !1),
            e("resize", a),
            this._stop(),
            this._resize(0, 0),
            t("attach", o);
        }),
          (s.isAttached(this.canvas) ? o : n)();
      }
      unbindEvents() {
        k(this._listeners, (t, e) => {
          this.platform.removeEventListener(this, e, t);
        }),
          (this._listeners = {}),
          k(this._responsiveListeners, (t, e) => {
            this.platform.removeEventListener(this, e, t);
          }),
          (this._responsiveListeners = void 0);
      }
      updateHoverStyle(t, e, i) {
        var s = i ? "set" : "remove";
        let a, n, o, r;
        for (
          "dataset" === e &&
            (a = this.getDatasetMeta(t[0].datasetIndex)).controller[
              "_" + s + "DatasetHoverStyle"
            ](),
            o = 0,
            r = t.length;
          o < r;
          ++o
        ) {
          const e =
            (n = t[o]) && this.getDatasetMeta(n.datasetIndex).controller;
          e && e[s + "HoverStyle"](n.element, n.datasetIndex, n.index);
        }
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t) {
        var e = this._active || [],
          t = t.map(({ datasetIndex: t, index: e }) => {
            var i = this.getDatasetMeta(t);
            if (i) return { datasetIndex: t, element: i.data[e], index: e };
            throw new Error("No dataset found at index " + t);
          });
        W(t, e) ||
          ((this._active = t),
          (this._lastEvent = null),
          this._updateHoverStyles(t, e));
      }
      notifyPlugins(t, e, i) {
        return this._plugins.notify(this, t, e, i);
      }
      isPluginEnabled(e) {
        return (
          1 === this._plugins._cache.filter((t) => t.plugin.id === e).length
        );
      }
      _updateHoverStyles(t, e, i) {
        var s = this.options.hover,
          a = (t, i) =>
            t.filter(
              (e) =>
                !i.some(
                  (t) =>
                    e.datasetIndex === t.datasetIndex && e.index === t.index
                )
            ),
          n = a(e, t),
          i = i ? t : a(t, e);
        n.length && this.updateHoverStyle(n, s.mode, !1),
          i.length && s.mode && this.updateHoverStyle(i, s.mode, !0);
      }
      _eventHandler(e, t) {
        const i = {
            event: e,
            replay: t,
            cancelable: !0,
            inChartArea: this.isPointInArea(e),
          },
          s = (t) =>
            (t.options.events || this.options.events).includes(e.native.type);
        if (!1 !== this.notifyPlugins("beforeEvent", i, s))
          return (
            (t = this._handleEvent(e, t, i.inChartArea)),
            (i.cancelable = !1),
            this.notifyPlugins("afterEvent", i, s),
            (t || i.changed) && this.render(),
            this
          );
      }
      _handleEvent(t, e, i) {
        const { _active: s = [], options: a } = this,
          n = e,
          o = this._getActiveElements(t, s, i, n),
          r = J(t),
          l =
            ((h = t),
            (c = this._lastEvent),
            i && "mouseout" !== h.type ? (r ? c : h) : null);
        i &&
          ((this._lastEvent = null),
          d(a.onHover, [t, o, this], this),
          r && d(a.onClick, [t, o, this], this));
        var h,
          c = !W(o, s);
        return (
          (c || e) && ((this._active = o), this._updateHoverStyles(o, s, e)),
          (this._lastEvent = l),
          c
        );
      }
      _getActiveElements(t, e, i, s) {
        if ("mouseout" === t.type) return [];
        if (!i) return e;
        i = this.options.hover;
        return this.getElementsAtEventForMode(t, i.mode, i, s);
      }
    }
    function ra() {
      k(i.instances, (t) => t._plugins.invalidate());
    }
    function la() {
      throw new Error(
        "This method is not implemented: Check that a complete date adapter is provided."
      );
    }
    var ha = {
      _date: class Xn {
        static override(t) {
          Object.assign(Xn.prototype, t);
        }
        options;
        constructor(t) {
          this.options = t || {};
        }
        init() {}
        formats() {
          return la();
        }
        parse() {
          return la();
        }
        format() {
          return la();
        }
        add() {
          return la();
        }
        diff() {
          return la();
        }
        startOf() {
          return la();
        }
        endOf() {
          return la();
        }
      },
    };
    function ca(i, s, a, n) {
      if (O(i)) {
        var o = i,
          r = s,
          l = a,
          h = n,
          c = l.parse(o[0], h),
          o = l.parse(o[1], h),
          h = Math.min(c, o),
          d = Math.max(c, o);
        let t = h,
          e = d;
        Math.abs(h) > Math.abs(d) && ((t = d), (e = h)),
          (r[l.axis] = e),
          (r._custom = {
            barStart: t,
            barEnd: e,
            start: c,
            end: o,
            min: h,
            max: d,
          });
      } else s[a.axis] = a.parse(i, n);
      return s;
    }
    function da(t, e, i, s) {
      const a = t.iScale,
        n = t.vScale,
        o = a.getLabels(),
        r = a === n,
        l = [];
      let h, c, d, u;
      for (c = (h = i) + s; h < c; ++h)
        (u = e[h]),
          ((d = {})[a.axis] = r || a.parse(o[h], h)),
          l.push(ca(u, d, n, h));
      return l;
    }
    function ua(t) {
      return t && void 0 !== t.barStart && void 0 !== t.barEnd;
    }
    function ga(t, e, i, s) {
      return (t = s
        ? fa((t = t === e ? i : t === i ? e : t), i, e)
        : fa(t, e, i));
    }
    function fa(t, e, i) {
      return "start" === t ? e : "end" === t ? i : t;
    }
    class pa extends Os {
      static id = "doughnut";
      static defaults = {
        datasetElementType: !1,
        dataElementType: "arc",
        animation: { animateRotate: !0, animateScale: !1 },
        animations: {
          numbers: {
            type: "number",
            properties: [
              "circumference",
              "endAngle",
              "innerRadius",
              "outerRadius",
              "startAngle",
              "x",
              "y",
              "offset",
              "borderWidth",
              "spacing",
            ],
          },
        },
        cutout: "50%",
        rotation: 0,
        circumference: 360,
        radius: "100%",
        spacing: 0,
        indexAxis: "r",
      };
      static descriptors = {
        _scriptable: (t) => "spacing" !== t,
        _indexable: (t) =>
          "spacing" !== t &&
          !t.startsWith("borderDash") &&
          !t.startsWith("hoverBorderDash"),
      };
      static overrides = {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels(s) {
                const t = s.data;
                if (t.labels.length && t.datasets.length) {
                  const { pointStyle: a, color: n } =
                    s.legend.options["labels"];
                  return t.labels.map((t, e) => {
                    var i = s.getDatasetMeta(0).controller.getStyle(e);
                    return {
                      text: t,
                      fillStyle: i.backgroundColor,
                      strokeStyle: i.borderColor,
                      fontColor: n,
                      lineWidth: i.borderWidth,
                      pointStyle: a,
                      hidden: !s.getDataVisibility(e),
                      index: e,
                    };
                  });
                }
                return [];
              },
            },
            onClick(t, e, i) {
              i.chart.toggleDataVisibility(e.index), i.chart.update();
            },
          },
        },
      };
      constructor(t, e) {
        super(t, e),
          (this.enableOptionSharing = !0),
          (this.innerRadius = void 0),
          (this.outerRadius = void 0),
          (this.offsetX = void 0),
          (this.offsetY = void 0);
      }
      linkScales() {}
      parse(s, a) {
        const n = this.getDataset().data,
          o = this._cachedMeta;
        if (!1 === this._parsing) o._parsed = n;
        else {
          let t,
            e,
            i = (t) => +n[t];
          if (A(n[s])) {
            const { key: s = "value" } = this._parsing;
            i = (t) => +m(n[t], s);
          }
          for (e = (t = s) + a; t < e; ++t) o._parsed[t] = i(t);
        }
      }
      _getRotation() {
        return L(this.options.rotation - 90);
      }
      _getCircumference() {
        return L(this.options.circumference);
      }
      _getRotationExtents() {
        let e = _,
          i = -_;
        for (let t = 0; t < this.chart.data.datasets.length; ++t)
          if (
            this.chart.isDatasetVisible(t) &&
            this.chart.getDatasetMeta(t).type === this._type
          ) {
            const s = this.chart.getDatasetMeta(t).controller,
              a = s._getRotation(),
              n = s._getCircumference();
            (e = Math.min(e, a)), (i = Math.max(i, a + n));
          }
        return { rotation: e, circumference: i - e };
      }
      update(t) {
        const e = this.chart,
          i = e["chartArea"],
          s = this._cachedMeta,
          a = s.data,
          n =
            this.getMaxBorderWidth() +
            this.getMaxOffset(a) +
            this.options.spacing,
          o = Math.max((Math.min(i.width, i.height) - n) / 2, 0),
          r = Math.min(V(this.options.cutout, o), 1),
          l = this._getRingWeight(this.index),
          { circumference: h, rotation: c } = this._getRotationExtents(),
          {
            ratioX: d,
            ratioY: u,
            offsetX: g,
            offsetY: f,
          } = (function (t, e, s) {
            let i = 1,
              a = 1,
              n = 0,
              o = 0;
            if (e < _) {
              const r = t,
                l = r + e,
                h = Math.cos(r),
                c = Math.sin(r),
                d = Math.cos(l),
                u = Math.sin(l),
                g = (t, e, i) =>
                  pt(t, r, l, !0) ? 1 : Math.max(e, e * s, i, i * s),
                f = (t, e, i) =>
                  pt(t, r, l, !0) ? -1 : Math.min(e, e * s, i, i * s),
                p = g(0, h, d),
                m = g(D, c, u),
                b = f(S, h, d),
                x = f(S + D, c, u);
              (i = (p - b) / 2),
                (a = (m - x) / 2),
                (n = -(p + b) / 2),
                (o = -(m + x) / 2);
            }
            return { ratioX: i, ratioY: a, offsetX: n, offsetY: o };
          })(c, h, r),
          p = (i.width - n) / d,
          m = (i.height - n) / u,
          b = Math.max(Math.min(p, m) / 2, 0),
          x = B(this.options.radius, b),
          v = (x - Math.max(x * r, 0)) / this._getVisibleDatasetWeightTotal();
        (this.offsetX = g * x),
          (this.offsetY = f * x),
          (s.total = this.calculateTotal()),
          (this.outerRadius = x - v * this._getRingWeightOffset(this.index)),
          (this.innerRadius = Math.max(this.outerRadius - v * l, 0)),
          this.updateElements(a, 0, a.length, t);
      }
      _circumference(t, e) {
        var i = this.options,
          s = this._cachedMeta,
          a = this._getCircumference();
        return (e && i.animation.animateRotate) ||
          !this.chart.getDataVisibility(t) ||
          null === s._parsed[t] ||
          s.data[t].hidden
          ? 0
          : this.calculateCircumference((s._parsed[t] * a) / _);
      }
      updateElements(t, e, i, s) {
        const a = "reset" === s,
          n = this.chart,
          o = n.chartArea,
          r = n.options.animation,
          l = (o.left + o.right) / 2,
          h = (o.top + o.bottom) / 2,
          c = a && r.animateScale,
          d = c ? 0 : this.innerRadius,
          u = c ? 0 : this.outerRadius,
          { sharedOptions: g, includeOptions: f } = this._getSharedOptions(
            e,
            s
          );
        let p,
          m = this._getRotation();
        for (p = 0; p < e; ++p) m += this._circumference(p, a);
        for (p = e; p < e + i; ++p) {
          const e = this._circumference(p, a),
            i = t[p],
            n = {
              x: l + this.offsetX,
              y: h + this.offsetY,
              startAngle: m,
              endAngle: m + e,
              circumference: e,
              outerRadius: u,
              innerRadius: d,
            };
          f &&
            (n.options =
              g || this.resolveDataElementOptions(p, i.active ? "active" : s)),
            (m += e),
            this.updateElement(i, p, n, s);
        }
      }
      calculateTotal() {
        var t = this._cachedMeta,
          e = t.data;
        let i,
          s = 0;
        for (i = 0; i < e.length; i++) {
          var a = t._parsed[i];
          null === a ||
            isNaN(a) ||
            !this.chart.getDataVisibility(i) ||
            e[i].hidden ||
            (s += Math.abs(a));
        }
        return s;
      }
      calculateCircumference(t) {
        var e = this._cachedMeta.total;
        return 0 < e && !isNaN(t) ? _ * (Math.abs(t) / e) : 0;
      }
      getLabelAndValue(t) {
        var e = this._cachedMeta,
          i = this.chart,
          s = i.data.labels || [],
          e = de(e._parsed[t], i.options.locale);
        return { label: s[t] || "", value: e };
      }
      getMaxBorderWidth(t) {
        let e = 0;
        const i = this.chart;
        let s, a, n, o, r;
        if (!t)
          for (s = 0, a = i.data.datasets.length; s < a; ++s)
            if (i.isDatasetVisible(s)) {
              (t = (n = i.getDatasetMeta(s)).data), (o = n.controller);
              break;
            }
        if (!t) return 0;
        for (s = 0, a = t.length; s < a; ++s)
          "inner" !== (r = o.resolveDataElementOptions(s)).borderAlign &&
            (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0));
        return e;
      }
      getMaxOffset(i) {
        let s = 0;
        for (let t = 0, e = i.length; t < e; ++t) {
          const i = this.resolveDataElementOptions(t);
          s = Math.max(s, i.offset || 0, i.hoverOffset || 0);
        }
        return s;
      }
      _getRingWeightOffset(e) {
        let i = 0;
        for (let t = 0; t < e; ++t)
          this.chart.isDatasetVisible(t) && (i += this._getRingWeight(t));
        return i;
      }
      _getRingWeight(t) {
        return Math.max(T(this.chart.data.datasets[t].weight, 1), 0);
      }
      _getVisibleDatasetWeightTotal() {
        return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
      }
    }
    class ma extends Os {
      static id = "polarArea";
      static defaults = {
        dataElementType: "arc",
        animation: { animateRotate: !0, animateScale: !0 },
        animations: {
          numbers: {
            type: "number",
            properties: [
              "x",
              "y",
              "startAngle",
              "endAngle",
              "innerRadius",
              "outerRadius",
            ],
          },
        },
        indexAxis: "r",
        startAngle: 0,
      };
      static overrides = {
        aspectRatio: 1,
        plugins: {
          legend: {
            labels: {
              generateLabels(s) {
                const t = s.data;
                if (t.labels.length && t.datasets.length) {
                  const { pointStyle: a, color: n } =
                    s.legend.options["labels"];
                  return t.labels.map((t, e) => {
                    var i = s.getDatasetMeta(0).controller.getStyle(e);
                    return {
                      text: t,
                      fillStyle: i.backgroundColor,
                      strokeStyle: i.borderColor,
                      fontColor: n,
                      lineWidth: i.borderWidth,
                      pointStyle: a,
                      hidden: !s.getDataVisibility(e),
                      index: e,
                    };
                  });
                }
                return [];
              },
            },
            onClick(t, e, i) {
              i.chart.toggleDataVisibility(e.index), i.chart.update();
            },
          },
        },
        scales: {
          r: {
            type: "radialLinear",
            angleLines: { display: !1 },
            beginAtZero: !0,
            grid: { circular: !0 },
            pointLabels: { display: !1 },
            startAngle: 0,
          },
        },
      };
      constructor(t, e) {
        super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
      }
      getLabelAndValue(t) {
        var e = this._cachedMeta,
          i = this.chart,
          s = i.data.labels || [],
          e = de(e._parsed[t].r, i.options.locale);
        return { label: s[t] || "", value: e };
      }
      parseObjectData(t, e, i, s) {
        return ii.bind(this)(t, e, i, s);
      }
      update(t) {
        var e = this._cachedMeta.data;
        this._updateRadius(), this.updateElements(e, 0, e.length, t);
      }
      getMinMax() {
        const t = this._cachedMeta,
          s = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
        return (
          t.data.forEach((t, e) => {
            var i = this.getParsed(e).r;
            !isNaN(i) &&
              this.chart.getDataVisibility(e) &&
              (i < s.min && (s.min = i), i > s.max && (s.max = i));
          }),
          s
        );
      }
      _updateRadius() {
        const t = this.chart,
          e = t.chartArea,
          i = t.options,
          s = Math.min(e.right - e.left, e.bottom - e.top),
          a = Math.max(s / 2, 0),
          n =
            (a -
              Math.max(
                i.cutoutPercentage ? (a / 100) * i.cutoutPercentage : 1,
                0
              )) /
            t.getVisibleDatasetCount();
        (this.outerRadius = a - n * this.index),
          (this.innerRadius = this.outerRadius - n);
      }
      updateElements(s, a, t, n) {
        const o = "reset" === n,
          r = this.chart,
          l = r.options.animation,
          h = this._cachedMeta.rScale,
          c = h.xCenter,
          d = h.yCenter,
          u = h.getIndexAngle(0) - 0.5 * S;
        let g,
          f = u;
        var p = 360 / this.countVisibleElements();
        for (g = 0; g < a; ++g) f += this._computeAngle(g, n, p);
        for (g = a; g < a + t; g++) {
          const a = s[g];
          let t = f,
            e = f + this._computeAngle(g, n, p),
            i = r.getDataVisibility(g)
              ? h.getDistanceFromCenterForValue(this.getParsed(g).r)
              : 0;
          (f = e),
            o && (l.animateScale && (i = 0), l.animateRotate && (t = e = u));
          var m = {
            x: c,
            y: d,
            innerRadius: 0,
            outerRadius: i,
            startAngle: t,
            endAngle: e,
            options: this.resolveDataElementOptions(g, a.active ? "active" : n),
          };
          this.updateElement(a, g, m, n);
        }
      }
      countVisibleElements() {
        const t = this._cachedMeta;
        let i = 0;
        return (
          t.data.forEach((t, e) => {
            !isNaN(this.getParsed(e).r) &&
              this.chart.getDataVisibility(e) &&
              i++;
          }),
          i
        );
      }
      _computeAngle(t, e, i) {
        return this.chart.getDataVisibility(t)
          ? L(this.resolveDataElementOptions(t, e).angle || i)
          : 0;
      }
    }
    var ba = Object.freeze({
      __proto__: null,
      BarController: class extends Os {
        static id = "bar";
        static defaults = {
          datasetElementType: !1,
          dataElementType: "bar",
          categoryPercentage: 0.8,
          barPercentage: 0.9,
          grouped: !0,
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "base", "width", "height"],
            },
          },
        };
        static overrides = {
          scales: {
            _index_: { type: "category", offset: !0, grid: { offset: !0 } },
            _value_: { type: "linear", beginAtZero: !0 },
          },
        };
        parsePrimitiveData(t, e, i, s) {
          return da(t, e, i, s);
        }
        parseArrayData(t, e, i, s) {
          return da(t, e, i, s);
        }
        parseObjectData(t, e, i, s) {
          const { iScale: a, vScale: n } = t,
            { xAxisKey: o = "x", yAxisKey: r = "y" } = this._parsing,
            l = "x" === a.axis ? o : r,
            h = "x" === n.axis ? o : r,
            c = [];
          let d, u, g, f;
          for (u = (d = i) + s; d < u; ++d)
            (f = e[d]),
              ((g = {})[a.axis] = a.parse(m(f, l), d)),
              c.push(ca(m(f, h), g, n, d));
          return c;
        }
        updateRangeFromParsed(t, e, i, s) {
          super.updateRangeFromParsed(t, e, i, s);
          s = i._custom;
          s &&
            e === this._cachedMeta.vScale &&
            ((t.min = Math.min(t.min, s.min)),
            (t.max = Math.max(t.max, s.max)));
        }
        getMaxOverflow() {
          return 0;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            { iScale: i, vScale: s } = e,
            a = this.getParsed(t),
            n = a._custom,
            o = ua(n)
              ? "[" + n.start + ", " + n.end + "]"
              : "" + s.getLabelForValue(a[s.axis]);
          return { label: "" + i.getLabelForValue(a[i.axis]), value: o };
        }
        initialize() {
          (this.enableOptionSharing = !0),
            super.initialize(),
            (this._cachedMeta.stack = this.getDataset().stack);
        }
        update(t) {
          var e = this._cachedMeta;
          this.updateElements(e.data, 0, e.data.length, t);
        }
        updateElements(e, i, s, a) {
          const n = "reset" === a,
            {
              index: o,
              _cachedMeta: { vScale: r },
            } = this,
            l = r.getBasePixel(),
            h = r.isHorizontal(),
            c = this._getRuler(),
            { sharedOptions: d, includeOptions: u } = this._getSharedOptions(
              i,
              a
            );
          for (let t = i; t < i + s; t++) {
            const i = this.getParsed(t),
              s =
                n || P(i[r.axis])
                  ? { base: l, head: l }
                  : this._calculateBarValuePixels(t),
              m = this._calculateBarIndexPixels(t, c),
              b = (i._stacks || {})[r.axis],
              x = {
                horizontal: h,
                base: s.base,
                enableBorderRadius:
                  !b || ua(i._custom) || o === b._top || o === b._bottom,
                x: h ? s.head : m.center,
                y: h ? m.center : s.head,
                height: h ? m.size : Math.abs(s.size),
                width: h ? Math.abs(s.size) : m.size,
              };
            u &&
              (x.options =
                d ||
                this.resolveDataElementOptions(t, e[t].active ? "active" : a));
            var g = x.options || e[t].options;
            (function (n, t, e, i) {
              let s = t.borderSkipped;
              const a = {};
              if (!s) return (n.borderSkipped = a);
              if (!0 === s)
                return (n.borderSkipped = {
                  top: !0,
                  right: !0,
                  bottom: !0,
                  left: !0,
                });
              var {
                start: t,
                end: o,
                reverse: r,
                top: l,
                bottom: h,
              } = (function () {
                let t, e, i, s, a;
                return (
                  (i = n.horizontal
                    ? ((t = n.base > n.x), (e = "left"), "right")
                    : ((t = n.base < n.y), (e = "bottom"), "top")),
                  (a = t ? ((s = "end"), "start") : ((s = "start"), "end")),
                  { start: e, end: i, reverse: t, top: s, bottom: a }
                );
              })();
              "middle" === s &&
                e &&
                ((n.enableBorderRadius = !0),
                (s =
                  (e._top || 0) === i
                    ? l
                    : (e._bottom || 0) === i
                    ? h
                    : ((a[ga(h, t, o, r)] = !0), l))),
                (a[ga(s, t, o, r)] = !0),
                (n.borderSkipped = a);
            })(x, g, b, o),
              ([g, f, p] = [x, g["inflateAmount"], c.ratio]),
              (g.inflateAmount = "auto" === f ? (1 === p ? 0.33 : 0) : f),
              this.updateElement(e[t], t, x, a);
          }
          var f, p;
        }
        _getStacks(t, i) {
          const e = this._cachedMeta["iScale"],
            s = e
              .getMatchingVisibleMetas(this._type)
              .filter((t) => t.controller.options.grouped),
            a = e.options.stacked,
            n = [];
          for (const e of s)
            if (
              (void 0 === i ||
                !((t) => {
                  var e = t.controller.getParsed(i),
                    e = e && e[t.vScale.axis];
                  if (P(e) || isNaN(e)) return !0;
                })(e)) &&
              ((!1 === a ||
                -1 === n.indexOf(e.stack) ||
                (void 0 === a && void 0 === e.stack)) &&
                n.push(e.stack),
              e.index === t)
            )
              break;
          return n.length || n.push(void 0), n;
        }
        _getStackCount(t) {
          return this._getStacks(void 0, t).length;
        }
        _getStackIndex(t, e, i) {
          const s = this._getStacks(t, i),
            a = void 0 !== e ? s.indexOf(e) : -1;
          return -1 === a ? s.length - 1 : a;
        }
        _getRuler() {
          const t = this.options,
            e = this._cachedMeta,
            i = e.iScale,
            s = [];
          let a, n;
          for (a = 0, n = e.data.length; a < n; ++a)
            s.push(i.getPixelForValue(this.getParsed(a)[i.axis], a));
          var o = t.barThickness;
          return {
            min:
              o ||
              (function (t) {
                const e = t.iScale,
                  i = (function (s, t) {
                    if (!s._cache.$bar) {
                      const a = s.getMatchingVisibleMetas(t);
                      let i = [];
                      for (let t = 0, e = a.length; t < e; t++)
                        i = i.concat(a[t].controller.getAllParsedValues(s));
                      s._cache.$bar = wt(i.sort((t, e) => t - e));
                    }
                    return s._cache.$bar;
                  })(e, t.type);
                let s,
                  a,
                  n,
                  o,
                  r = e._length;
                var l = () => {
                  32767 !== n &&
                    -32768 !== n &&
                    (G(o) && (r = Math.min(r, Math.abs(n - o) || r)), (o = n));
                };
                for (s = 0, a = i.length; s < a; ++s)
                  (n = e.getPixelForValue(i[s])), l();
                for (o = void 0, s = 0, a = e.ticks.length; s < a; ++s)
                  (n = e.getPixelForTick(s)), l();
                return r;
              })(e),
            pixels: s,
            start: i._startPixel,
            end: i._endPixel,
            stackCount: this._getStackCount(),
            scale: i,
            grouped: t.grouped,
            ratio: o ? 1 : t.categoryPercentage * t.barPercentage,
          };
        }
        _calculateBarValuePixels(t) {
          const {
              _cachedMeta: { vScale: e, _stacked: i, index: s },
              options: { base: a, minBarLength: n },
            } = this,
            o = a || 0,
            r = this.getParsed(t),
            l = r._custom,
            h = ua(l);
          let c,
            d,
            u = r[e.axis],
            g = 0,
            f = i ? this.applyStack(e, r, i) : u;
          f !== u && ((g = f - u), (f = u)),
            h &&
              ((u = l.barStart),
              (f = l.barEnd - l.barStart),
              0 !== u && y(u) !== y(l.barEnd) && (g = 0),
              (g += u));
          var p,
            m,
            b = P(a) || h ? g : a;
          let x = e.getPixelForValue(b);
          if (
            ((c = this.chart.getDataVisibility(t)
              ? e.getPixelForValue(g + f)
              : x),
            (d = c - x),
            Math.abs(d) < n)
          ) {
            (d =
              ((b = d),
              (p = e),
              (m = o),
              (0 !== b
                ? y(b)
                : (p.isHorizontal() ? 1 : -1) * (p.min >= m ? 1 : -1)) * n)),
              u === o && (x -= d / 2);
            const t = e.getPixelForDecimal(0),
              P = e.getPixelForDecimal(1),
              a = Math.min(t, P),
              l = Math.max(t, P);
            (x = Math.max(Math.min(x, l), a)),
              (c = x + d),
              i &&
                !h &&
                (r._stacks[e.axis]._visualValues[s] =
                  e.getValueForPixel(c) - e.getValueForPixel(x));
          }
          if (x === e.getPixelForValue(o)) {
            const t = (y(d) * e.getLineWidthForValue(o)) / 2;
            (x += t), (d -= t);
          }
          return { size: d, base: x, head: c, center: c + d / 2 };
        }
        _calculateBarIndexPixels(t, e) {
          const i = e.scale,
            s = this.options,
            a = s.skipNull,
            n = T(s.maxBarThickness, 1 / 0);
          let o, r;
          if (e.grouped) {
            const i = a ? this._getStackCount(t) : e.stackCount,
              T = (
                "flex" === s.barThickness
                  ? function (t, e, i, s) {
                      var a = e.pixels,
                        n = a[t];
                      let o = 0 < t ? a[t - 1] : null,
                        r = t < a.length - 1 ? a[t + 1] : null;
                      (a = i.categoryPercentage),
                        null === o &&
                          (o = n - (null === r ? e.end - e.start : r - n)),
                        null === r && (r = n + n - o),
                        (t = n - ((n - Math.min(o, r)) / 2) * a);
                      return {
                        chunk: ((Math.abs(r - o) / 2) * a) / s,
                        ratio: i.barPercentage,
                        start: t,
                      };
                    }
                  : function (t, e, i, s) {
                      var a = i.barThickness;
                      let n, o;
                      return (
                        (o = P(a)
                          ? ((n = e.min * i.categoryPercentage),
                            i.barPercentage)
                          : ((n = a * s), 1)),
                        { chunk: n / s, ratio: o, start: e.pixels[t] - n / 2 }
                      );
                    }
              )(t, e, s, i),
              l = this._getStackIndex(
                this.index,
                this._cachedMeta.stack,
                a ? t : void 0
              );
            (o = T.start + T.chunk * l + T.chunk / 2),
              (r = Math.min(n, T.chunk * T.ratio));
          } else
            (o = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
              (r = Math.min(n, e.min * e.ratio));
          return { base: o - r / 2, head: o + r / 2, center: o, size: r };
        }
        draw() {
          const t = this._cachedMeta,
            e = t.vScale,
            i = t.data,
            s = i.length;
          let a = 0;
          for (; a < s; ++a)
            null !== this.getParsed(a)[e.axis] && i[a].draw(this._ctx);
        }
      },
      BubbleController: class extends Os {
        static id = "bubble";
        static defaults = {
          datasetElementType: !1,
          dataElementType: "point",
          animations: {
            numbers: {
              type: "number",
              properties: ["x", "y", "borderWidth", "radius"],
            },
          },
        };
        static overrides = {
          scales: { x: { type: "linear" }, y: { type: "linear" } },
        };
        initialize() {
          (this.enableOptionSharing = !0), super.initialize();
        }
        parsePrimitiveData(t, e, i, s) {
          const a = super.parsePrimitiveData(t, e, i, s);
          for (let t = 0; t < a.length; t++)
            a[t]._custom = this.resolveDataElementOptions(t + i).radius;
          return a;
        }
        parseArrayData(t, e, i, s) {
          const a = super.parseArrayData(t, e, i, s);
          for (let t = 0; t < a.length; t++) {
            const s = e[i + t];
            a[t]._custom = T(
              s[2],
              this.resolveDataElementOptions(t + i).radius
            );
          }
          return a;
        }
        parseObjectData(t, e, i, s) {
          const a = super.parseObjectData(t, e, i, s);
          for (let t = 0; t < a.length; t++) {
            const s = e[i + t];
            a[t]._custom = T(
              s && s.r && +s.r,
              this.resolveDataElementOptions(t + i).radius
            );
          }
          return a;
        }
        getMaxOverflow() {
          const e = this._cachedMeta.data;
          let i = 0;
          for (let t = e.length - 1; 0 <= t; --t)
            i = Math.max(i, e[t].size(this.resolveDataElementOptions(t)) / 2);
          return 0 < i && i;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart.data.labels || [],
            { xScale: s, yScale: a } = e,
            n = this.getParsed(t),
            o = s.getLabelForValue(n.x),
            r = a.getLabelForValue(n.y),
            l = n._custom;
          return {
            label: i[t] || "",
            value: "(" + o + ", " + r + (l ? ", " + l : "") + ")",
          };
        }
        update(t) {
          var e = this._cachedMeta.data;
          this.updateElements(e, 0, e.length, t);
        }
        updateElements(e, i, s, a) {
          const n = "reset" === a,
            { iScale: o, vScale: r } = this._cachedMeta,
            { sharedOptions: l, includeOptions: h } = this._getSharedOptions(
              i,
              a
            ),
            c = o.axis,
            d = r.axis;
          for (let t = i; t < i + s; t++) {
            const i = e[t],
              s = !n && this.getParsed(t),
              u = {},
              g = (u[c] = n
                ? o.getPixelForDecimal(0.5)
                : o.getPixelForValue(s[c])),
              f = (u[d] = n ? r.getBasePixel() : r.getPixelForValue(s[d]));
            (u.skip = isNaN(g) || isNaN(f)),
              h &&
                ((u.options =
                  l ||
                  this.resolveDataElementOptions(t, i.active ? "active" : a)),
                n && (u.options.radius = 0)),
              this.updateElement(i, t, u, a);
          }
        }
        resolveDataElementOptions(t, e) {
          var i = this.getParsed(t);
          let s = super.resolveDataElementOptions(t, e);
          t = (s = s.$shared ? Object.assign({}, s, { $shared: !1 }) : s)
            .radius;
          return (
            "active" !== e && (s.radius = 0),
            (s.radius += T(i && i._custom, t)),
            s
          );
        }
      },
      DoughnutController: pa,
      LineController: class extends Os {
        static id = "line";
        static defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          showLine: !0,
          spanGaps: !1,
        };
        static overrides = {
          scales: {
            _index_: { type: "category" },
            _value_: { type: "linear" },
          },
        };
        initialize() {
          (this.enableOptionSharing = !0),
            (this.supportsDecimation = !0),
            super.initialize();
        }
        update(t) {
          const e = this._cachedMeta,
            { dataset: i, data: s = [], _dataset: a } = e,
            n = this.chart._animationsDisabled;
          let { start: o, count: r } = Ot(e, s, n);
          (this._drawStart = o),
            (this._drawCount = r),
            At(e) && ((o = 0), (r = s.length)),
            (i._chart = this.chart),
            (i._datasetIndex = this.index),
            (i._decimated = !!a._decimated),
            (i.points = s);
          const l = this.resolveDatasetElementOptions(t);
          this.options.showLine || (l.borderWidth = 0),
            (l.segment = this.options.segment),
            this.updateElement(i, void 0, { animated: !n, options: l }, t),
            this.updateElements(s, o, r, t);
        }
        updateElements(e, i, t, s) {
          const a = "reset" === s,
            {
              iScale: n,
              vScale: o,
              _stacked: r,
              _dataset: l,
            } = this._cachedMeta,
            { sharedOptions: h, includeOptions: c } = this._getSharedOptions(
              i,
              s
            ),
            d = n.axis,
            u = o.axis,
            { spanGaps: g, segment: f } = this.options,
            p = rt(g) ? g : Number.POSITIVE_INFINITY,
            m = this.chart._animationsDisabled || a || "none" === s,
            b = i + t,
            x = e.length;
          let v = 0 < i && this.getParsed(i - 1);
          for (let t = 0; t < x; ++t) {
            const g = e[t],
              x = m ? g : {};
            var _, y, M, w;
            t < i || t >= b
              ? (x.skip = !0)
              : ((y = P((_ = this.getParsed(t))[u])),
                (M = x[d] = n.getPixelForValue(_[d], t)),
                (w = x[u] =
                  a || y
                    ? o.getBasePixel()
                    : o.getPixelForValue(
                        r ? this.applyStack(o, _, r) : _[u],
                        t
                      )),
                (x.skip = isNaN(M) || isNaN(w) || y),
                (x.stop = 0 < t && Math.abs(_[d] - v[d]) > p),
                f && ((x.parsed = _), (x.raw = l.data[t])),
                c &&
                  (x.options =
                    h ||
                    this.resolveDataElementOptions(t, g.active ? "active" : s)),
                m || this.updateElement(g, t, x, s),
                (v = _));
          }
        }
        getMaxOverflow() {
          const t = this._cachedMeta,
            e = t.dataset,
            i = (e.options && e.options.borderWidth) || 0,
            s = t.data || [];
          if (!s.length) return i;
          var a = s[0].size(this.resolveDataElementOptions(0)),
            n = s[s.length - 1].size(
              this.resolveDataElementOptions(s.length - 1)
            );
          return Math.max(i, a, n) / 2;
        }
        draw() {
          const t = this._cachedMeta;
          t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
            super.draw();
        }
      },
      PieController: class extends pa {
        static id = "pie";
        static defaults = {
          cutout: 0,
          rotation: 0,
          circumference: 360,
          radius: "100%",
        };
      },
      PolarAreaController: ma,
      RadarController: class extends Os {
        static id = "radar";
        static defaults = {
          datasetElementType: "line",
          dataElementType: "point",
          indexAxis: "r",
          showLine: !0,
          elements: { line: { fill: "start" } },
        };
        static overrides = {
          aspectRatio: 1,
          scales: { r: { type: "radialLinear" } },
        };
        getLabelAndValue(t) {
          const e = this._cachedMeta.vScale,
            i = this.getParsed(t);
          return {
            label: e.getLabels()[t],
            value: "" + e.getLabelForValue(i[e.axis]),
          };
        }
        parseObjectData(t, e, i, s) {
          return ii.bind(this)(t, e, i, s);
        }
        update(t) {
          const e = this._cachedMeta,
            i = e.dataset,
            s = e.data || [],
            a = e.iScale.getLabels();
          if (((i.points = s), "resize" !== t)) {
            const e = this.resolveDatasetElementOptions(t);
            this.options.showLine || (e.borderWidth = 0);
            var n = { _loop: !0, _fullLoop: a.length === s.length, options: e };
            this.updateElement(i, void 0, n, t);
          }
          this.updateElements(s, 0, s.length, t);
        }
        updateElements(e, i, s, a) {
          const n = this._cachedMeta.rScale,
            o = "reset" === a;
          for (let t = i; t < i + s; t++) {
            const i = e[t],
              s = this.resolveDataElementOptions(t, i.active ? "active" : a),
              r = n.getPointPositionForValue(t, this.getParsed(t).r),
              l = o ? n.xCenter : r.x,
              h = o ? n.yCenter : r.y,
              c = {
                x: l,
                y: h,
                angle: r.angle,
                skip: isNaN(l) || isNaN(h),
                options: s,
              };
            this.updateElement(i, t, c, a);
          }
        }
      },
      ScatterController: class extends Os {
        static id = "scatter";
        static defaults = {
          datasetElementType: !1,
          dataElementType: "point",
          showLine: !1,
          fill: !1,
        };
        static overrides = {
          interaction: { mode: "point" },
          scales: { x: { type: "linear" }, y: { type: "linear" } },
        };
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart.data.labels || [],
            { xScale: s, yScale: a } = e,
            n = this.getParsed(t),
            o = s.getLabelForValue(n.x),
            r = a.getLabelForValue(n.y);
          return { label: i[t] || "", value: "(" + o + ", " + r + ")" };
        }
        update(t) {
          const e = this._cachedMeta,
            { data: i = [] } = e,
            s = this.chart._animationsDisabled;
          let { start: a, count: n } = Ot(e, i, s);
          if (
            ((this._drawStart = a),
            (this._drawCount = n),
            At(e) && ((a = 0), (n = i.length)),
            this.options.showLine)
          ) {
            this.datasetElementType || this.addElements();
            const { dataset: a, _dataset: n } = e,
              o =
                ((a._chart = this.chart),
                (a._datasetIndex = this.index),
                (a._decimated = !!n._decimated),
                (a.points = i),
                this.resolveDatasetElementOptions(t));
            (o.segment = this.options.segment),
              this.updateElement(a, void 0, { animated: !s, options: o }, t);
          } else
            this.datasetElementType &&
              (delete e.dataset, (this.datasetElementType = !1));
          this.updateElements(i, a, n, t);
        }
        addElements() {
          var t = this.options["showLine"];
          !this.datasetElementType &&
            t &&
            (this.datasetElementType = this.chart.registry.getElement("line")),
            super.addElements();
        }
        updateElements(e, i, s, a) {
          const n = "reset" === a,
            {
              iScale: o,
              vScale: r,
              _stacked: l,
              _dataset: h,
            } = this._cachedMeta,
            t = this.resolveDataElementOptions(i, a),
            c = this.getSharedOptions(t),
            d = this.includeOptions(a, c),
            u = o.axis,
            g = r.axis,
            { spanGaps: f, segment: p } = this.options,
            m = rt(f) ? f : Number.POSITIVE_INFINITY,
            b = this.chart._animationsDisabled || n || "none" === a;
          let x = 0 < i && this.getParsed(i - 1);
          for (let t = i; t < i + s; ++t) {
            const i = e[t],
              s = this.getParsed(t),
              f = b ? i : {},
              v = P(s[g]),
              _ = (f[u] = o.getPixelForValue(s[u], t)),
              y = (f[g] =
                n || v
                  ? r.getBasePixel()
                  : r.getPixelForValue(l ? this.applyStack(r, s, l) : s[g], t));
            (f.skip = isNaN(_) || isNaN(y) || v),
              (f.stop = 0 < t && Math.abs(s[u] - x[u]) > m),
              p && ((f.parsed = s), (f.raw = h.data[t])),
              d &&
                (f.options =
                  c ||
                  this.resolveDataElementOptions(t, i.active ? "active" : a)),
              b || this.updateElement(i, t, f, a),
              (x = s);
          }
          this.updateSharedOptions(c, a, t);
        }
        getMaxOverflow() {
          const t = this._cachedMeta,
            i = t.data || [];
          if (!this.options.showLine) {
            let e = 0;
            for (let t = i.length - 1; 0 <= t; --t)
              e = Math.max(e, i[t].size(this.resolveDataElementOptions(t)) / 2);
            return 0 < e && e;
          }
          var e = t.dataset,
            e = (e.options && e.options.borderWidth) || 0;
          if (!i.length) return e;
          var s = i[0].size(this.resolveDataElementOptions(0)),
            a = i[i.length - 1].size(
              this.resolveDataElementOptions(i.length - 1)
            );
          return Math.max(e, s, a) / 2;
        }
      },
    });
    function xa(t, e, i, s) {
      return { x: i + t * Math.cos(e), y: s + t * Math.sin(e) };
    }
    function va(t, e, i, s, a, n) {
      var { x: o, y: r, startAngle: l, pixelMargin: h, innerRadius: c } = e,
        d = Math.max(e.outerRadius + s + i - h, 0),
        h = 0 < c ? c + s + i + h : 0;
      let u = 0;
      var g = a - l;
      if (s) {
        const t = ((0 < c ? c - s : 0) + (0 < d ? d - s : 0)) / 2;
        u = (g - (0 != t ? (g * t) / (t + s) : g)) / 2;
      }
      var c = (g - Math.max(0.001, g * d - i / S) / d) / 2,
        g = l + c + u,
        l = a - c - u,
        {
          outerStart: c,
          outerEnd: f,
          innerStart: p,
          innerEnd: m,
        } = (function (t, e, i, s) {
          t = yi(t.options.borderRadius, [
            "outerStart",
            "outerEnd",
            "innerStart",
            "innerEnd",
          ]);
          const a = (i - e) / 2,
            n = Math.min(a, (s * e) / 2),
            o = (t) => {
              var e = ((i - Math.min(a, t)) * s) / 2;
              return C(t, 0, Math.min(a, e));
            };
          return {
            outerStart: o(t.outerStart),
            outerEnd: o(t.outerEnd),
            innerStart: C(t.innerStart, 0, n),
            innerEnd: C(t.innerEnd, 0, n),
          };
        })(e, h, d, l - g),
        b = d - c,
        x = d - f,
        v = g + c / b,
        _ = l - f / x,
        y = h + p,
        M = h + m,
        w = g + p / y,
        k = l - m / M;
      if ((t.beginPath(), n)) {
        const e = (v + _) / 2;
        if ((t.arc(o, r, d, v, e), t.arc(o, r, d, e, _), 0 < f)) {
          const e = xa(x, _, o, r);
          t.arc(e.x, e.y, f, _, l + D);
        }
        const i = xa(M, l, o, r);
        if ((t.lineTo(i.x, i.y), 0 < m)) {
          const e = xa(M, k, o, r);
          t.arc(e.x, e.y, m, l + D, k + Math.PI);
        }
        const s = (l - m / h + (g + p / h)) / 2;
        if (
          (t.arc(o, r, h, l - m / h, s, !0),
          t.arc(o, r, h, s, g + p / h, !0),
          0 < p)
        ) {
          const e = xa(y, w, o, r);
          t.arc(e.x, e.y, p, w + Math.PI, g - D);
        }
        const a = xa(b, g, o, r);
        if ((t.lineTo(a.x, a.y), 0 < c)) {
          const e = xa(b, v, o, r);
          t.arc(e.x, e.y, c, g - D, v);
        }
      } else {
        t.moveTo(o, r);
        const e = Math.cos(v) * d + o,
          i = Math.sin(v) * d + r,
          s = (t.lineTo(e, i), Math.cos(_) * d + o),
          a = Math.sin(_) * d + r;
        t.lineTo(s, a);
      }
      t.closePath();
    }
    function _a(t, e, i = e) {
      (t.lineCap = T(i.borderCapStyle, e.borderCapStyle)),
        t.setLineDash(T(i.borderDash, e.borderDash)),
        (t.lineDashOffset = T(i.borderDashOffset, e.borderDashOffset)),
        (t.lineJoin = T(i.borderJoinStyle, e.borderJoinStyle)),
        (t.lineWidth = T(i.borderWidth, e.borderWidth)),
        (t.strokeStyle = T(i.borderColor, e.borderColor));
    }
    function ya(t, e, i) {
      t.lineTo(i.x, i.y);
    }
    function Ma(t, e, i = {}) {
      var t = t.length,
        { start: i = 0, end: s = t - 1 } = i,
        { start: a, end: n } = e,
        o = Math.max(i, a),
        r = Math.min(s, n);
      return {
        count: t,
        start: o,
        loop: e.loop,
        ilen:
          r < o && !((i < a && s < a) || (n < i && n < s)) ? t + r - o : r - o,
      };
    }
    function wa(t, e, i, s) {
      const { points: a, options: n } = e,
        { count: o, start: r, loop: l, ilen: h } = Ma(a, i, s),
        c = n.stepped
          ? We
          : n.tension || "monotone" === n.cubicInterpolationMode
          ? Ne
          : ya;
      let d,
        u,
        g,
        { move: f = !0, reverse: p } = s || {};
      for (d = 0; d <= h; ++d)
        (u = a[(r + (p ? h - d : d)) % o]).skip ||
          (f ? (t.moveTo(u.x, u.y), (f = !1)) : c(t, g, u, p, n.stepped),
          (g = u));
      return (
        l && ((u = a[(r + (p ? h : 0)) % o]), c(t, g, u, p, n.stepped)), !!l
      );
    }
    function ka(t, e, i, s) {
      const a = e.points,
        { count: n, start: o, ilen: r } = Ma(a, i, s),
        { move: l = !0, reverse: h } = s || {};
      let c,
        d,
        u,
        g,
        f,
        p,
        m = 0,
        b = 0;
      var x = (t) => (o + (h ? r - t : t)) % n,
        v = () => {
          g !== f && (t.lineTo(m, f), t.lineTo(m, g), t.lineTo(m, p));
        };
      for (l && ((d = a[x(0)]), t.moveTo(d.x, d.y)), c = 0; c <= r; ++c)
        if (!(d = a[x(c)]).skip) {
          const e = d.x,
            i = d.y,
            s = 0 | e;
          s === u
            ? (i < g ? (g = i) : i > f && (f = i), (m = (b * m + e) / ++b))
            : (v(), t.lineTo(e, i), (u = s), (b = 0), (g = f = i)),
            (p = i);
        }
      v();
    }
    function Sa(t) {
      var e = t.options,
        i = e.borderDash && e.borderDash.length;
      return t._decimated ||
        t._loop ||
        e.tension ||
        "monotone" === e.cubicInterpolationMode ||
        e.stepped ||
        i
        ? wa
        : ka;
    }
    const Pa = "function" == typeof Path2D;
    class Da extends e {
      static id = "line";
      static defaults = {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: "default",
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0,
      };
      static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor",
      };
      static descriptors = {
        _scriptable: !0,
        _indexable: (t) => "borderDash" !== t && "fill" !== t,
      };
      constructor(t) {
        super(),
          (this.animated = !0),
          (this.options = void 0),
          (this._chart = void 0),
          (this._loop = void 0),
          (this._fullLoop = void 0),
          (this._path = void 0),
          (this._points = void 0),
          (this._segments = void 0),
          (this._decimated = !1),
          (this._pointsUpdated = !1),
          (this._datasetIndex = void 0),
          t && Object.assign(this, t);
      }
      updateControlPoints(t, e) {
        var i,
          s = this.options;
        (!s.tension && "monotone" !== s.cubicInterpolationMode) ||
          s.stepped ||
          this._pointsUpdated ||
          ((i = s.spanGaps ? this._loop : this._fullLoop),
          hi(this._points, s, t, i, e),
          (this._pointsUpdated = !0));
      }
      set points(t) {
        (this._points = t),
          delete this._segments,
          delete this._path,
          (this._pointsUpdated = !1);
      }
      get points() {
        return this._points;
      }
      get segments() {
        return (
          this._segments || (this._segments = Ri(this, this.options.segment))
        );
      }
      first() {
        var t = this.segments,
          e = this.points;
        return t.length && e[t[0].start];
      }
      last() {
        var t = this.segments,
          e = this.points,
          i = t.length;
        return i && e[t[i - 1].end];
      }
      interpolate(i, s) {
        var a = this.options,
          n = i[s],
          o = this.points,
          r = Ei(this, { property: s, start: n, end: n });
        if (r.length) {
          const l = [],
            h = a.stepped
              ? pi
              : a.tension || "monotone" === a.cubicInterpolationMode
              ? mi
              : fi;
          let e, t;
          for (e = 0, t = r.length; e < t; ++e) {
            const { start: t, end: c } = r[e],
              d = o[t],
              u = o[c];
            if (d === u) l.push(d);
            else {
              const g = h(
                d,
                u,
                Math.abs((n - d[s]) / (u[s] - d[s])),
                a.stepped
              );
              (g[s] = i[s]), l.push(g);
            }
          }
          return 1 === l.length ? l[0] : l;
        }
      }
      pathSegment(t, e, i) {
        return Sa(this)(t, this, e, i);
      }
      path(t, e, i) {
        const s = this.segments,
          a = Sa(this);
        let n = this._loop;
        (e = e || 0), (i = i || this.points.length - e);
        for (const o of s) n &= a(t, this, o, { start: e, end: e + i - 1 });
        return !!n;
      }
      draw(t, e, i, s) {
        var a,
          n = this.options || {};
        (this.points || []).length &&
          n.borderWidth &&
          (t.save(),
          (n = t),
          (a = this),
          (i = i),
          (s = s),
          (Pa && !a.options.segment
            ? function (t, e, i, s) {
                let a = e._path;
                a ||
                  ((a = e._path = new Path2D()),
                  e.path(a, i, s) && a.closePath()),
                  _a(t, e.options),
                  t.stroke(a);
              }
            : function (t, e, i, s) {
                const { segments: a, options: n } = e,
                  o = Sa(e);
                for (const r of a)
                  _a(t, n, r.style),
                    t.beginPath(),
                    o(t, e, r, { start: i, end: i + s - 1 }) && t.closePath(),
                    t.stroke();
              })(n, a, i, s),
          t.restore()),
          this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
      }
    }
    function Ca(t, e, i, s) {
      var a = t.options,
        { [i]: t } = t.getProps([i], s);
      return Math.abs(e - t) < a.radius + a.hitRadius;
    }
    function Oa(t, e) {
      var {
        x: e,
        y: i,
        base: s,
        width: a,
        height: n,
      } = t.getProps(["x", "y", "base", "width", "height"], e);
      let o, r, l, h, c;
      return (
        (h = t.horizontal
          ? ((c = n / 2),
            (o = Math.min(e, s)),
            (r = Math.max(e, s)),
            (l = i - c),
            i + c)
          : ((c = a / 2),
            (o = e - c),
            (r = e + c),
            (l = Math.min(i, s)),
            Math.max(i, s))),
        { left: o, top: l, right: r, bottom: h }
      );
    }
    function Aa(t, e, i, s) {
      return t ? 0 : C(e, i, s);
    }
    function Ta(t, e, i, s) {
      var a = null === e,
        n = null === i,
        t = t && !(a && n) && Oa(t, s);
      return t && (a || c(e, t.left, t.right)) && (n || c(i, t.top, t.bottom));
    }
    function La(t, e) {
      t.rect(e.x, e.y, e.w, e.h);
    }
    function Ea(t, e, i = {}) {
      var s = t.x !== i.x ? -e : 0,
        a = t.y !== i.y ? -e : 0,
        n = (t.x + t.w !== i.x + i.w ? e : 0) - s,
        i = (t.y + t.h !== i.y + i.h ? e : 0) - a;
      return {
        x: t.x + s,
        y: t.y + a,
        w: t.w + n,
        h: t.h + i,
        radius: t.radius,
      };
    }
    var Ra = Object.freeze({
      __proto__: null,
      ArcElement: class extends e {
        static id = "arc";
        static defaults = {
          borderAlign: "center",
          borderColor: "#fff",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: void 0,
          borderRadius: 0,
          borderWidth: 2,
          offset: 0,
          spacing: 0,
          angle: void 0,
          circular: !0,
        };
        static defaultRoutes = { backgroundColor: "backgroundColor" };
        static descriptors = {
          _scriptable: !0,
          _indexable: (t) => "borderDash" !== t,
        };
        circumference;
        endAngle;
        fullCircles;
        innerRadius;
        outerRadius;
        pixelMargin;
        startAngle;
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.circumference = void 0),
            (this.startAngle = void 0),
            (this.endAngle = void 0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.pixelMargin = 0),
            (this.fullCircles = 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, i) {
          var { angle: t, distance: e } = ut(this.getProps(["x", "y"], i), {
              x: t,
              y: e,
            }),
            {
              startAngle: i,
              endAngle: s,
              innerRadius: a,
              outerRadius: n,
              circumference: o,
            } = this.getProps(
              [
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "circumference",
              ],
              i
            ),
            r = (this.options.spacing + this.options.borderWidth) / 2,
            o = T(o, s - i) >= _ || pt(t, i, s),
            t = c(e, a + r, n + r);
          return o && t;
        }
        getCenterPoint(t) {
          var {
              x: t,
              y: e,
              startAngle: i,
              endAngle: s,
              innerRadius: a,
              outerRadius: n,
            } = this.getProps(
              [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
              ],
              t
            ),
            { offset: o, spacing: r } = this.options,
            i = (i + s) / 2,
            s = (a + n + r + o) / 2;
          return { x: t + Math.cos(i) * s, y: e + Math.sin(i) * s };
        }
        tooltipPosition(t) {
          return this.getCenterPoint(t);
        }
        draw(e) {
          var { options: i, circumference: s } = this,
            a = (i.offset || 0) / 4,
            n = (i.spacing || 0) / 2,
            o = i.circular;
          if (
            ((this.pixelMargin = "inner" === i.borderAlign ? 0.33 : 0),
            (this.fullCircles = s > _ ? Math.floor(s / _) : 0),
            !(0 === s || this.innerRadius < 0 || this.outerRadius < 0))
          ) {
            e.save();
            var r = (this.startAngle + this.endAngle) / 2,
              r =
                (e.translate(Math.cos(r) * a, Math.sin(r) * a),
                a * (1 - Math.sin(Math.min(S, s || 0))));
            (e.fillStyle = i.backgroundColor), (e.strokeStyle = i.borderColor);
            {
              var l = e;
              a = this;
              s = r;
              i = n;
              var h = o;
              var { fullCircles: c, startAngle: d, circumference: u } = a;
              let t = a.endAngle;
              if (c) {
                va(l, a, s, i, t, h);
                for (let t = 0; t < c; ++t) l.fill();
                isNaN(u) || (t = d + (u % _ || _));
              }
              va(l, a, s, i, t, h), l.fill();
            }
            var g = e,
              d = this,
              u = r,
              a = n,
              s = o,
              {
                fullCircles: f,
                startAngle: i,
                circumference: h,
                options: r,
              } = d,
              {
                borderWidth: n,
                borderJoinStyle: o,
                borderDash: p,
                borderDashOffset: m,
              } = r,
              r = "inner" === r.borderAlign;
            if (n) {
              g.setLineDash(p || []),
                (g.lineDashOffset = m),
                r
                  ? ((g.lineWidth = 2 * n), (g.lineJoin = o || "round"))
                  : ((g.lineWidth = n), (g.lineJoin = o || "bevel"));
              let t = d.endAngle;
              if (f) {
                va(g, d, u, a, t, s);
                for (let t = 0; t < f; ++t) g.stroke();
                isNaN(h) || (t = i + (h % _ || _));
              }
              if (r) {
                p = g;
                m = d;
                n = t;
                var {
                    startAngle: m,
                    pixelMargin: o,
                    x: i,
                    y: h,
                    outerRadius: r,
                    innerRadius: b,
                  } = m,
                  x = o / r;
                p.beginPath(),
                  p.arc(i, h, r, m - x, n + x),
                  o < b
                    ? p.arc(i, h, b, n + (x = o / b), m - x, !0)
                    : p.arc(i, h, o, n + D, m - D),
                  p.closePath(),
                  p.clip();
              }
              f || (va(g, d, u, a, t, s), g.stroke());
            }
            e.restore();
          }
        }
      },
      BarElement: class extends e {
        static id = "bar";
        static defaults = {
          borderSkipped: "start",
          borderWidth: 0,
          borderRadius: 0,
          inflateAmount: "auto",
          pointStyle: void 0,
        };
        static defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        };
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.horizontal = void 0),
            (this.base = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.inflateAmount = void 0),
            t && Object.assign(this, t);
        }
        draw(t) {
          const {
              inflateAmount: e,
              options: { borderColor: i, backgroundColor: s },
            } = this,
            { inner: a, outer: n } =
              ((u = Oa((r = this))),
              (g = u.right - u.left),
              (f = u.bottom - u.top),
              (c = g / 2),
              (p = f / 2),
              (d = (h = r).options.borderWidth),
              (h = h.borderSkipped),
              (d = Mi(d)),
              (p = {
                t: Aa(h.top, d.top, 0, p),
                r: Aa(h.right, d.right, 0, c),
                b: Aa(h.bottom, d.bottom, 0, p),
                l: Aa(h.left, d.left, 0, c),
              }),
              (h = g / 2),
              (d = f / 2),
              (r = (c = r).getProps(["enableBorderRadius"]).enableBorderRadius),
              (m = c.options.borderRadius),
              (l = wi(m)),
              (h = Math.min(h, d)),
              (d = c.borderSkipped),
              (r = {
                topLeft: Aa(
                  !(c = r || A(m)) || d.top || d.left,
                  l.topLeft,
                  0,
                  h
                ),
                topRight: Aa(!c || d.top || d.right, l.topRight, 0, h),
                bottomLeft: Aa(!c || d.bottom || d.left, l.bottomLeft, 0, h),
                bottomRight: Aa(!c || d.bottom || d.right, l.bottomRight, 0, h),
              }),
              {
                outer: { x: u.left, y: u.top, w: g, h: f, radius: r },
                inner: {
                  x: u.left + p.l,
                  y: u.top + p.t,
                  w: g - p.l - p.r,
                  h: f - p.t - p.b,
                  radius: {
                    topLeft: Math.max(0, r.topLeft - Math.max(p.t, p.l)),
                    topRight: Math.max(0, r.topRight - Math.max(p.t, p.r)),
                    bottomLeft: Math.max(0, r.bottomLeft - Math.max(p.b, p.l)),
                    bottomRight: Math.max(
                      0,
                      r.bottomRight - Math.max(p.b, p.r)
                    ),
                  },
                },
              }),
            o =
              (m = n.radius).topLeft ||
              m.topRight ||
              m.bottomLeft ||
              m.bottomRight
                ? je
                : La;
          var r, l, h, c, d, u, g, f, p, m;
          t.save(),
            (n.w === a.w && n.h === a.h) ||
              (t.beginPath(),
              o(t, Ea(n, e, a)),
              t.clip(),
              o(t, Ea(a, -e, n)),
              (t.fillStyle = i),
              t.fill("evenodd")),
            t.beginPath(),
            o(t, Ea(a, e)),
            (t.fillStyle = s),
            t.fill(),
            t.restore();
        }
        inRange(t, e, i) {
          return Ta(this, t, e, i);
        }
        inXRange(t, e) {
          return Ta(this, t, null, e);
        }
        inYRange(t, e) {
          return Ta(this, null, t, e);
        }
        getCenterPoint(t) {
          var {
            x: t,
            y: e,
            base: i,
            horizontal: s,
          } = this.getProps(["x", "y", "base", "horizontal"], t);
          return { x: s ? (t + i) / 2 : t, y: s ? e : (e + i) / 2 };
        }
        getRange(t) {
          return "x" === t ? this.width / 2 : this.height / 2;
        }
      },
      LineElement: Da,
      PointElement: class extends e {
        static id = "point";
        parsed;
        skip;
        stop;
        static defaults = {
          borderWidth: 1,
          hitRadius: 1,
          hoverBorderWidth: 1,
          hoverRadius: 4,
          pointStyle: "circle",
          radius: 3,
          rotation: 0,
        };
        static defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        };
        constructor(t) {
          super(),
            (this.options = void 0),
            (this.parsed = void 0),
            (this.skip = void 0),
            (this.stop = void 0),
            t && Object.assign(this, t);
        }
        inRange(t, e, i) {
          var s = this.options,
            { x: i, y: a } = this.getProps(["x", "y"], i);
          return (
            Math.pow(t - i, 2) + Math.pow(e - a, 2) <
            Math.pow(s.hitRadius + s.radius, 2)
          );
        }
        inXRange(t, e) {
          return Ca(this, t, "x", e);
        }
        inYRange(t, e) {
          return Ca(this, t, "y", e);
        }
        getCenterPoint(t) {
          var { x: t, y: e } = this.getProps(["x", "y"], t);
          return { x: t, y: e };
        }
        size(t) {
          var e = (t = t || this.options || {}).radius || 0;
          return (
            2 *
            ((e = Math.max(e, (e && t.hoverRadius) || 0)) +
              ((e && t.borderWidth) || 0))
          );
        }
        draw(t, e) {
          var i = this.options;
          this.skip ||
            i.radius < 0.1 ||
            !M(this, e, this.size(i) / 2) ||
            ((t.strokeStyle = i.borderColor),
            (t.lineWidth = i.borderWidth),
            (t.fillStyle = i.backgroundColor),
            ze(t, i, this.x, this.y));
        }
        getRange() {
          var t = this.options || {};
          return t.radius + t.hitRadius;
        }
      },
    });
    function Ia(t) {
      var e = this.getLabels();
      return 0 <= t && t < e.length ? e[t] : t;
    }
    function za(t, e, { horizontal: i, minRotation: s }) {
      (s = L(s)), (i = (i ? Math.sin(s) : Math.cos(s)) || 0.001);
      return Math.min(e / i, 0.75 * e * ("" + t).length);
    }
    class Fa extends zs {
      constructor(t) {
        super(t),
          (this.start = void 0),
          (this.end = void 0),
          (this._startValue = void 0),
          (this._endValue = void 0),
          (this._valueRange = 0);
      }
      parse(t, e) {
        return P(t) ||
          (("number" == typeof t || t instanceof Number) && !isFinite(+t))
          ? null
          : +t;
      }
      handleTickRangeOptions() {
        const t = this.options["beginAtZero"],
          { minDefined: e, maxDefined: i } = this.getUserBounds();
        let { min: s, max: a } = this;
        var n,
          o = (t) => (s = e ? s : t),
          r = (t) => (a = i ? a : t);
        if (t) {
          const t = y(s),
            e = y(a);
          t < 0 && e < 0 ? r(0) : 0 < t && 0 < e && o(0);
        }
        s === a &&
          ((n = 0 === a ? 1 : Math.abs(0.05 * a)), r(a + n), t || o(s - n)),
          (this.min = s),
          (this.max = a);
      }
      getTickLimit() {
        let t,
          { maxTicksLimit: e, stepSize: i } = this.options.ticks;
        return (
          i
            ? 1e3 <
                (t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1) &&
              (console.warn(
                `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${t} ticks. Limiting to 1000.`
              ),
              (t = 1e3))
            : ((t = this.computeTickLimit()), (e = e || 11)),
          (t = e ? Math.min(e, t) : t)
        );
      }
      computeTickLimit() {
        return Number.POSITIVE_INFINITY;
      }
      buildTicks() {
        var t = this.options,
          e = t.ticks,
          i = this.getTickLimit();
        const s = (function (t, e) {
          const i = [],
            {
              bounds: s,
              step: a,
              min: n,
              max: o,
              precision: r,
              count: l,
              maxTicks: h,
              maxDigits: c,
              includeBounds: d,
            } = t,
            u = a || 1,
            g = h - 1,
            { min: f, max: p } = e,
            m = !P(n),
            b = !P(o),
            x = !P(l),
            v = (p - f) / (c + 1);
          let _,
            y,
            M,
            w,
            k = nt((p - f) / g / u) * u;
          if (k < 1e-14 && !m && !b) return [{ value: f }, { value: p }];
          (w = Math.ceil(p / k) - Math.floor(f / k)) > g &&
            (k = nt((w * k) / g / u) * u),
            P(r) || ((_ = Math.pow(10, r)), (k = Math.ceil(k * _) / _)),
            (M =
              "ticks" === s
                ? ((y = Math.floor(f / k) * k), Math.ceil(p / k) * k)
                : ((y = f), p)),
            m && b && a && lt((o - n) / a, k / 1e3)
              ? ((w = Math.round(Math.min((o - n) / k, h))),
                (k = (o - n) / w),
                (y = n),
                (M = o))
              : x
              ? ((y = m ? n : y),
                (M = b ? o : M),
                (w = l - 1),
                (k = (M - y) / w))
              : (w = at((w = (M - y) / k), Math.round(w), k / 1e3)
                  ? Math.round(w)
                  : Math.ceil(w));
          e = Math.max(dt(k), dt(y));
          (_ = Math.pow(10, P(r) ? e : r)),
            (y = Math.round(y * _) / _),
            (M = Math.round(M * _) / _);
          let S = 0;
          for (
            m &&
            (d && y !== n
              ? (i.push({ value: n }),
                y < n && S++,
                at(Math.round((y + S * k) * _) / _, n, za(n, v, t)) && S++)
              : y < n && S++);
            S < w;
            ++S
          ) {
            const t = Math.round((y + S * k) * _) / _;
            if (b && t > o) break;
            i.push({ value: t });
          }
          return (
            b && d && M !== o
              ? i.length && at(i[i.length - 1].value, o, za(o, v, t))
                ? (i[i.length - 1].value = o)
                : i.push({ value: o })
              : (b && M !== o) || i.push({ value: M }),
            i
          );
        })(
          {
            maxTicks: Math.max(2, i),
            bounds: t.bounds,
            min: t.min,
            max: t.max,
            precision: e.precision,
            step: e.stepSize,
            count: e.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: e.minRotation || 0,
            includeBounds: !1 !== e.includeBounds,
          },
          this._range || this
        );
        return (
          "ticks" === t.bounds && ht(s, this, "value"),
          t.reverse
            ? (s.reverse(), (this.start = this.max), (this.end = this.min))
            : ((this.start = this.min), (this.end = this.max)),
          s
        );
      }
      configure() {
        var t = this.ticks;
        let e = this.min,
          i = this.max;
        super.configure(),
          this.options.offset &&
            t.length &&
            ((t = (i - e) / Math.max(t.length - 1, 1) / 2), (e -= t), (i += t)),
          (this._startValue = e),
          (this._endValue = i),
          (this._valueRange = i - e);
      }
      getLabelForValue(t) {
        return de(t, this.chart.options.locale, this.options.ticks.format);
      }
    }
    class Va extends Fa {
      static id = "linear";
      static defaults = { ticks: { callback: ge.formatters.numeric } };
      determineDataLimits() {
        var { min: t, max: e } = this.getMinMax(!0);
        (this.min = p(t) ? t : 0),
          (this.max = p(e) ? e : 1),
          this.handleTickRangeOptions();
      }
      computeTickLimit() {
        var t = this.isHorizontal(),
          e = t ? this.width : this.height,
          i = L(this.options.ticks.minRotation),
          t = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
          i = this._resolveTickFontOptions(0);
        return Math.ceil(e / Math.min(40, i.lineHeight / t));
      }
      getPixelForValue(t) {
        return null === t
          ? NaN
          : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
      }
      getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
      }
    }
    const Ba = (t) => Math.floor(r(t)),
      Wa = (t, e) => Math.pow(10, Ba(t) + e);
    function Na(t) {
      return 1 == t / Math.pow(10, Ba(t));
    }
    function Ha(t, e, i) {
      (i = Math.pow(10, i)), (t = Math.floor(t / i));
      return Math.ceil(e / i) - t;
    }
    class ja extends zs {
      static id = "logarithmic";
      static defaults = {
        ticks: { callback: ge.formatters.logarithmic, major: { enabled: !0 } },
      };
      constructor(t) {
        super(t),
          (this.start = void 0),
          (this.end = void 0),
          (this._startValue = void 0),
          (this._valueRange = 0);
      }
      parse(t, e) {
        t = Fa.prototype.parse.apply(this, [t, e]);
        if (0 !== t) return p(t) && 0 < t ? t : null;
        this._zero = !0;
      }
      determineDataLimits() {
        var { min: t, max: e } = this.getMinMax(!0);
        (this.min = p(t) ? Math.max(0, t) : null),
          (this.max = p(e) ? Math.max(0, e) : null),
          this.options.beginAtZero && (this._zero = !0),
          this._zero &&
            this.min !== this._suggestedMin &&
            !p(this._userMin) &&
            (this.min =
              t === Wa(this.min, 0) ? Wa(this.min, -1) : Wa(this.min, 0)),
          this.handleTickRangeOptions();
      }
      handleTickRangeOptions() {
        const { minDefined: e, maxDefined: i } = this.getUserBounds();
        let s = this.min,
          a = this.max;
        var t = (t) => (s = e ? s : t),
          n = (t) => (a = i ? a : t);
        s === a && (s <= 0 ? (t(1), n(10)) : (t(Wa(s, -1)), n(Wa(a, 1)))),
          s <= 0 && t(Wa(a, -1)),
          a <= 0 && n(Wa(s, 1)),
          (this.min = s),
          (this.max = a);
      }
      buildTicks() {
        const t = this.options,
          e = (function (t, { min: e, max: i }) {
            e = g(t.min, e);
            const s = [],
              a = Ba(e);
            let n = (function (t, e) {
                let i = Ba(e - t);
                for (; 10 < Ha(t, e, i); ) i++;
                for (; Ha(t, e, i) < 10; ) i--;
                return Math.min(i, Ba(t));
              })(e, i),
              o = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
            var r = Math.pow(10, n),
              l = a > n ? Math.pow(10, a) : 0,
              h = Math.round((e - l) * o) / o,
              c = Math.floor((e - l) / r / 10) * r * 10;
            let d = Math.floor((h - c) / Math.pow(10, n)),
              u = g(t.min, Math.round((l + c + d * Math.pow(10, n)) * o) / o);
            for (; u < i; )
              s.push({ value: u, major: Na(u), significand: d }),
                10 <= d ? (d = d < 15 ? 15 : 20) : d++,
                20 <= d && (n++, (d = 2), (o = 0 <= n ? 1 : o)),
                (u = Math.round((l + c + d * Math.pow(10, n)) * o) / o);
            return (
              (e = g(t.max, u)),
              s.push({ value: e, major: Na(e), significand: d }),
              s
            );
          })({ min: this._userMin, max: this._userMax }, this);
        return (
          "ticks" === t.bounds && ht(e, this, "value"),
          t.reverse
            ? (e.reverse(), (this.start = this.max), (this.end = this.min))
            : ((this.start = this.min), (this.end = this.max)),
          e
        );
      }
      getLabelForValue(t) {
        return void 0 === t
          ? "0"
          : de(t, this.chart.options.locale, this.options.ticks.format);
      }
      configure() {
        var t = this.min;
        super.configure(),
          (this._startValue = r(t)),
          (this._valueRange = r(this.max) - r(t));
      }
      getPixelForValue(t) {
        return null === (t = void 0 !== t && 0 !== t ? t : this.min) || isNaN(t)
          ? NaN
          : this.getPixelForDecimal(
              t === this.min ? 0 : (r(t) - this._startValue) / this._valueRange
            );
      }
      getValueForPixel(t) {
        t = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + t * this._valueRange);
      }
    }
    function Ya(t) {
      var e = t.ticks;
      if (e.display && t.display) {
        const t = I(e.backdropPadding);
        return T(e.font && e.font.size, R.font.size) + t.height;
      }
      return 0;
    }
    function $a(t, e, i, s, a) {
      return t === s || t === a
        ? { start: e - i / 2, end: e + i / 2 }
        : t < s || a < t
        ? { start: e - i, end: e }
        : { start: e, end: e + i };
    }
    function Ua(e) {
      const i = {
          l: e.left + e._padding.left,
          r: e.right - e._padding.right,
          t: e.top + e._padding.top,
          b: e.bottom - e._padding.bottom,
        },
        s = Object.assign({}, i),
        a = [],
        n = [],
        o = e._pointLabels.length,
        r = e.options.pointLabels,
        l = r.centerPointLabels ? S / o : 0;
      for (let t = 0; t < o; t++) {
        const o = r.setContext(e.getPointLabelContext(t));
        n[t] = o.padding;
        var h = e.getPointPosition(t, e.drawingArea + n[t], l),
          c = z(o.font),
          d =
            ((d = e.ctx),
            (c = c),
            (u = O((u = e._pointLabels[t])) ? u : [u]),
            { w: Ee(d, c.string, u), h: u.length * c.lineHeight }),
          u = ((a[t] = d), v(e.getIndexAngle(t) + l)),
          c = Math.round(ct(u));
        {
          g = void 0;
          f = void 0;
          p = void 0;
          m = void 0;
          b = void 0;
          x = void 0;
          p = void 0;
          var g = s;
          var f = i;
          var p = u;
          var m = $a(c, h.x, d.w, 0, 180);
          var b = $a(c, h.y, d.h, 90, 270);
          var x = Math.abs(Math.sin(p)),
            p = Math.abs(Math.cos(p));
          let t = 0,
            e = 0;
          m.start < f.l
            ? ((t = (f.l - m.start) / x), (g.l = Math.min(g.l, f.l - t)))
            : m.end > f.r &&
              ((t = (m.end - f.r) / x), (g.r = Math.max(g.r, f.r + t))),
            b.start < f.t
              ? ((e = (f.t - b.start) / p), (g.t = Math.min(g.t, f.t - e)))
              : b.end > f.b &&
                ((e = (b.end - f.b) / p), (g.b = Math.max(g.b, f.b + e)));
        }
      }
      var d, u;
      e.setCenterPoint(i.l - s.l, s.r - i.r, i.t - s.t, s.b - i.b),
        (e._pointLabelItems = (function (e, i, s) {
          const a = [],
            n = e._pointLabels.length,
            t = e.options,
            { centerPointLabels: o, display: r } = t.pointLabels,
            l = { extra: Ya(t) / 2, additionalAngle: o ? S / n : 0 };
          let h;
          for (let t = 0; t < n; t++) {
            (l.padding = s[t]), (l.size = i[t]);
            const n = (function (t, e, i) {
              const s = t.drawingArea,
                { extra: a, additionalAngle: n, padding: o, size: r } = i,
                l = t.getPointPosition(e, s + a + o, n),
                h = Math.round(ct(v(l.angle + D))),
                c = (function (t, e) {
                  return (
                    90 === h || 270 === h
                      ? (t -= e / 2)
                      : (270 < h || h < 90) && (t -= e),
                    t
                  );
                })(l.y, r.h),
                d = (function (t) {
                  return 0 === t || 180 === t
                    ? "center"
                    : t < 180
                    ? "left"
                    : "right";
                })(h),
                u = (function (t, e) {
                  return (
                    "right" === d ? (t -= e) : "center" === d && (t -= e / 2), t
                  );
                })(l.x, r.w);
              return {
                visible: !0,
                x: l.x,
                y: c,
                textAlign: d,
                left: u,
                top: c,
                right: u + r.w,
                bottom: c + r.h,
              };
            })(e, t, l);
            a.push(n),
              "auto" === r &&
                ((n.visible = (function (t, e) {
                  if (!e) return !0;
                  var { left: t, top: i, right: s, bottom: a } = t;
                  return !(
                    M({ x: t, y: i }, e) ||
                    M({ x: t, y: a }, e) ||
                    M({ x: s, y: i }, e) ||
                    M({ x: s, y: a }, e)
                  );
                })(n, h)),
                n.visible && (h = n));
          }
          return a;
        })(e, a, n));
    }
    function Xa(e, i, t, s) {
      const a = e["ctx"];
      if (t) a.arc(e.xCenter, e.yCenter, i, 0, _);
      else {
        var n = e.getPointPosition(0, i);
        a.moveTo(n.x, n.y);
        for (let t = 1; t < s; t++)
          (n = e.getPointPosition(t, i)), a.lineTo(n.x, n.y);
      }
    }
    class qa extends Fa {
      static id = "radialLinear";
      static defaults = {
        display: !0,
        animate: !0,
        position: "chartArea",
        angleLines: {
          display: !0,
          lineWidth: 1,
          borderDash: [],
          borderDashOffset: 0,
        },
        grid: { circular: !1 },
        startAngle: 0,
        ticks: { showLabelBackdrop: !0, callback: ge.formatters.numeric },
        pointLabels: {
          backdropColor: void 0,
          backdropPadding: 2,
          display: !0,
          font: { size: 10 },
          callback: (t) => t,
          padding: 5,
          centerPointLabels: !1,
        },
      };
      static defaultRoutes = {
        "angleLines.color": "borderColor",
        "pointLabels.color": "color",
        "ticks.color": "color",
      };
      static descriptors = { angleLines: { _fallback: "grid" } };
      constructor(t) {
        super(t),
          (this.xCenter = void 0),
          (this.yCenter = void 0),
          (this.drawingArea = void 0),
          (this._pointLabels = []),
          (this._pointLabelItems = []);
      }
      setDimensions() {
        var t = (this._padding = I(Ya(this.options) / 2)),
          e = (this.width = this.maxWidth - t.width),
          i = (this.height = this.maxHeight - t.height);
        (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
          (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
          (this.drawingArea = Math.floor(Math.min(e, i) / 2));
      }
      determineDataLimits() {
        var { min: t, max: e } = this.getMinMax(!1);
        (this.min = p(t) && !isNaN(t) ? t : 0),
          (this.max = p(e) && !isNaN(e) ? e : 0),
          this.handleTickRangeOptions();
      }
      computeTickLimit() {
        return Math.ceil(this.drawingArea / Ya(this.options));
      }
      generateTickLabels(t) {
        Fa.prototype.generateTickLabels.call(this, t),
          (this._pointLabels = this.getLabels()
            .map((t, e) => {
              t = d(this.options.pointLabels.callback, [t, e], this);
              return t || 0 === t ? t : "";
            })
            .filter((t, e) => this.chart.getDataVisibility(e)));
      }
      fit() {
        var t = this.options;
        t.display && t.pointLabels.display
          ? Ua(this)
          : this.setCenterPoint(0, 0, 0, 0);
      }
      setCenterPoint(t, e, i, s) {
        (this.xCenter += Math.floor((t - e) / 2)),
          (this.yCenter += Math.floor((i - s) / 2)),
          (this.drawingArea -= Math.min(
            this.drawingArea / 2,
            Math.max(t, e, i, s)
          ));
      }
      getIndexAngle(t) {
        return v(
          t * (_ / (this._pointLabels.length || 1)) +
            L(this.options.startAngle || 0)
        );
      }
      getDistanceFromCenterForValue(t) {
        if (P(t)) return NaN;
        var e = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
      }
      getValueForDistanceFromCenter(t) {
        if (P(t)) return NaN;
        t /= this.drawingArea / (this.max - this.min);
        return this.options.reverse ? this.max - t : this.min + t;
      }
      getPointLabelContext(t) {
        var e = this._pointLabels || [];
        if (0 <= t && t < e.length)
          return (
            (e = e[t]),
            Pi(this.getContext(), { label: e, index: t, type: "pointLabel" })
          );
      }
      getPointPosition(t, e, i = 0) {
        t = this.getIndexAngle(t) - D + i;
        return {
          x: Math.cos(t) * e + this.xCenter,
          y: Math.sin(t) * e + this.yCenter,
          angle: t,
        };
      }
      getPointPositionForValue(t, e) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
      }
      getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue());
      }
      getPointLabelPosition(t) {
        var { left: t, top: e, right: i, bottom: s } = this._pointLabelItems[t];
        return { left: t, top: e, right: i, bottom: s };
      }
      drawBackground() {
        var {
          backgroundColor: t,
          grid: { circular: e },
        } = this.options;
        if (t) {
          const i = this.ctx;
          i.save(),
            i.beginPath(),
            Xa(
              this,
              this.getDistanceFromCenterForValue(this._endValue),
              e,
              this._pointLabels.length
            ),
            i.closePath(),
            (i.fillStyle = t),
            i.fill(),
            i.restore();
        }
      }
      drawGrid() {
        const t = this.ctx,
          e = this.options,
          { angleLines: i, grid: h, border: c } = e,
          d = this._pointLabels.length;
        let s, u, a;
        if (e.pointLabels.display) {
          var n = this,
            o = d;
          const {
            ctx: _,
            options: { pointLabels: y },
          } = n;
          for (let t = o - 1; 0 <= t; t--) {
            const o = n._pointLabelItems[t];
            if (o.visible) {
              var r,
                l = y.setContext(n.getPointLabelContext(t)),
                g =
                  ((m = x = r = f = r = v = x = b = m = p = f = g = void 0), _),
                f = l,
                p = o,
                { left: m, top: b, right: x, bottom: v } = p;
              if (!P((r = f["backdropColor"]))) {
                const p = wi(f.borderRadius),
                  P = I(f.backdropPadding);
                g.fillStyle = r;
                (f = m - P.left),
                  (r = b - P.top),
                  (x = x - m + P.width),
                  (m = v - b + P.height);
                Object.values(p).some((t) => 0 !== t)
                  ? (g.beginPath(),
                    je(g, { x: f, y: r, w: x, h: m, radius: p }),
                    g.fill())
                  : g.fillRect(f, r, x, m);
              }
              var p = z(l.font),
                { x: v, y: b, textAlign: g } = o;
              He(_, n._pointLabels[t], v, b + p.lineHeight / 2, p, {
                color: l.color,
                textAlign: g,
                textBaseline: "middle",
              });
            }
          }
        }
        if (
          (h.display &&
            this.ticks.forEach((t, e) => {
              if (0 !== e) {
                u = this.getDistanceFromCenterForValue(t.value);
                (t = this.getContext(e)),
                  (e = h.setContext(t)),
                  (t = c.setContext(t));
                {
                  var i = this,
                    s = u,
                    a = d;
                  const n = i.ctx,
                    o = e.circular,
                    { color: r, lineWidth: l } = e;
                  (!o && !a) ||
                    !r ||
                    !l ||
                    s < 0 ||
                    (n.save(),
                    (n.strokeStyle = r),
                    (n.lineWidth = l),
                    n.setLineDash(t.dash),
                    (n.lineDashOffset = t.dashOffset),
                    n.beginPath(),
                    Xa(i, s, o, a),
                    n.closePath(),
                    n.stroke(),
                    n.restore());
                }
              }
            }),
          i.display)
        ) {
          for (t.save(), s = d - 1; 0 <= s; s--) {
            const h = i.setContext(this.getPointLabelContext(s)),
              { color: c, lineWidth: d } = h;
            d &&
              c &&
              ((t.lineWidth = d),
              (t.strokeStyle = c),
              t.setLineDash(h.borderDash),
              (t.lineDashOffset = h.borderDashOffset),
              (u = this.getDistanceFromCenterForValue(
                e.ticks.reverse ? this.min : this.max
              )),
              (a = this.getPointPosition(s, u)),
              t.beginPath(),
              t.moveTo(this.xCenter, this.yCenter),
              t.lineTo(a.x, a.y),
              t.stroke());
          }
          t.restore();
        }
      }
      drawBorder() {}
      drawLabels() {
        const o = this.ctx,
          r = this.options,
          l = r.ticks;
        if (l.display) {
          var t = this.getIndexAngle(0);
          let a, n;
          o.save(),
            o.translate(this.xCenter, this.yCenter),
            o.rotate(t),
            (o.textAlign = "center"),
            (o.textBaseline = "middle"),
            this.ticks.forEach((t, e) => {
              if (0 !== e || r.reverse) {
                var i = l.setContext(this.getContext(e)),
                  s = z(i.font);
                if (
                  ((a = this.getDistanceFromCenterForValue(
                    this.ticks[e].value
                  )),
                  i.showLabelBackdrop)
                ) {
                  (o.font = s.string),
                    (n = o.measureText(t.label).width),
                    (o.fillStyle = i.backdropColor);
                  const r = I(i.backdropPadding);
                  o.fillRect(
                    -n / 2 - r.left,
                    -a - s.size / 2 - r.top,
                    n + r.width,
                    s.size + r.height
                  );
                }
                He(o, t.label, 0, -a, s, {
                  color: i.color,
                  strokeColor: i.textStrokeColor,
                  strokeWidth: i.textStrokeWidth,
                });
              }
            }),
            o.restore();
        }
      }
      drawTitle() {}
    }
    const Ka = {
        millisecond: { common: !0, size: 1, steps: 1e3 },
        second: { common: !0, size: 1e3, steps: 60 },
        minute: { common: !0, size: 6e4, steps: 60 },
        hour: { common: !0, size: 36e5, steps: 24 },
        day: { common: !0, size: 864e5, steps: 30 },
        week: { common: !1, size: 6048e5, steps: 4 },
        month: { common: !0, size: 2628e6, steps: 12 },
        quarter: { common: !1, size: 7884e6, steps: 4 },
        year: { common: !0, size: 3154e7 },
      },
      h = Object.keys(Ka);
    function Ga(t, e) {
      return t - e;
    }
    function Za(t, e) {
      if (P(e)) return null;
      const i = t._adapter,
        { parser: s, round: a, isoWeekday: n } = t._parseOpts;
      let o = e;
      return null ===
        (o = p((o = "function" == typeof s ? s(o) : o))
          ? o
          : "string" == typeof s
          ? i.parse(o, s)
          : i.parse(o))
        ? null
        : +(o = a
            ? "week" !== a || (!rt(n) && !0 !== n)
              ? i.startOf(o, a)
              : i.startOf(o, "isoWeek", n)
            : o);
    }
    function Ja(e, i, s, a) {
      const n = h.length;
      for (let t = h.indexOf(e); t < n - 1; ++t) {
        const e = Ka[h[t]],
          n = e.steps || Number.MAX_SAFE_INTEGER;
        if (e.common && Math.ceil((s - i) / (n * e.size)) <= a) return h[t];
      }
      return h[n - 1];
    }
    function Qa(t, e, i) {
      var s, a;
      i
        ? i.length &&
          (({ lo: s, hi: a } = bt(i, e)), (t[i[s] >= e ? i[s] : i[a]] = !0))
        : (t[e] = !0);
    }
    function tn(i, t, s) {
      const a = [],
        n = {},
        e = t.length;
      let o, r;
      for (o = 0; o < e; ++o)
        (r = t[o]), (n[r] = o), a.push({ value: r, major: !1 });
      if (0 !== e && s) {
        var l = a,
          h = n,
          c = s;
        const d = i._adapter,
          u = +d.startOf(l[0].value, c),
          g = l[l.length - 1].value;
        let t, e;
        for (t = u; t <= g; t = +d.add(t, 1, c))
          0 <= (e = h[t]) && (l[e].major = !0);
        return l;
      }
      return a;
    }
    class en extends zs {
      static id = "time";
      static defaults = {
        bounds: "data",
        adapters: {},
        time: {
          parser: !1,
          unit: !1,
          round: !1,
          isoWeekday: !1,
          minUnit: "millisecond",
          displayFormats: {},
        },
        ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
      };
      constructor(t) {
        super(t),
          (this._cache = { data: [], labels: [], all: [] }),
          (this._unit = "day"),
          (this._majorUnit = void 0),
          (this._offsets = {}),
          (this._normalized = !1),
          (this._parseOpts = void 0);
      }
      init(t, e = {}) {
        const i = t.time || (t.time = {}),
          s = (this._adapter = new ha._date(t.adapters.date));
        s.init(e),
          $(i.displayFormats, s.formats()),
          (this._parseOpts = {
            parser: i.parser,
            round: i.round,
            isoWeekday: i.isoWeekday,
          }),
          super.init(t),
          (this._normalized = e.normalized);
      }
      parse(t, e) {
        return void 0 === t ? null : Za(this, t);
      }
      beforeLayout() {
        super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
      }
      determineDataLimits() {
        const t = this.options,
          e = this._adapter,
          i = t.time.unit || "day";
        let {
          min: s,
          max: a,
          minDefined: n,
          maxDefined: o,
        } = this.getUserBounds();
        function r(t) {
          n || isNaN(t.min) || (s = Math.min(s, t.min)),
            o || isNaN(t.max) || (a = Math.max(a, t.max));
        }
        (n && o) ||
          (r(this._getLabelBounds()),
          ("ticks" === t.bounds && "labels" === t.ticks.source) ||
            r(this.getMinMax(!1))),
          (s = p(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
          (a = p(a) && !isNaN(a) ? a : +e.endOf(Date.now(), i) + 1),
          (this.min = Math.min(s, a - 1)),
          (this.max = Math.max(s + 1, a));
      }
      _getLabelBounds() {
        var t = this.getLabelTimestamps();
        let e = Number.POSITIVE_INFINITY,
          i = Number.NEGATIVE_INFINITY;
        return (
          t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i }
        );
      }
      buildTicks() {
        var t = this.options,
          e = t.time,
          i = t.ticks,
          s =
            "labels" === i.source
              ? this.getLabelTimestamps()
              : this._generate();
        "ticks" === t.bounds &&
          s.length &&
          ((this.min = this._userMin || s[0]),
          (this.max = this._userMax || s[s.length - 1]));
        const a = this.min,
          n = vt(s, a, this.max);
        return (
          (this._unit =
            e.unit ||
            (i.autoSkip
              ? Ja(e.minUnit, this.min, this.max, this._getLabelCapacity(a))
              : (function (e, i, s, a, n) {
                  for (let t = h.length - 1; t >= h.indexOf(s); t--) {
                    const s = h[t];
                    if (Ka[s].common && e._adapter.diff(n, a, s) >= i - 1)
                      return s;
                  }
                  return h[s ? h.indexOf(s) : 0];
                })(this, n.length, e.minUnit, this.min, this.max))),
          (this._majorUnit =
            i.major.enabled && "year" !== this._unit
              ? (function (i) {
                  for (let t = h.indexOf(i) + 1, e = h.length; t < e; ++t)
                    if (Ka[h[t]].common) return h[t];
                })(this._unit)
              : void 0),
          this.initOffsets(s),
          t.reverse && n.reverse(),
          tn(this, n, this._majorUnit)
        );
      }
      afterAutoSkip() {
        this.options.offsetAfterAutoskip &&
          this.initOffsets(this.ticks.map((t) => +t.value));
      }
      initOffsets(t = []) {
        let e,
          i,
          s = 0,
          a = 0;
        this.options.offset &&
          t.length &&
          ((e = this.getDecimalForValue(t[0])),
          (s =
            1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
          (i = this.getDecimalForValue(t[t.length - 1])),
          (a =
            1 === t.length
              ? i
              : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
        t = t.length < 3 ? 0.5 : 0.25;
        (s = C(s, 0, t)),
          (a = C(a, 0, t)),
          (this._offsets = { start: s, end: a, factor: 1 / (s + 1 + a) });
      }
      _generate() {
        const t = this._adapter,
          e = this.min,
          i = this.max,
          s = this.options,
          a = s.time,
          n = a.unit || Ja(a.minUnit, e, i, this._getLabelCapacity(e)),
          o = T(s.ticks.stepSize, 1),
          r = "week" === n && a.isoWeekday,
          l = rt(r) || !0 === r,
          h = {};
        let c,
          d,
          u = e;
        if (
          (l && (u = +t.startOf(u, "isoWeek", r)),
          (u = +t.startOf(u, l ? "day" : n)),
          t.diff(i, e, n) > 1e5 * o)
        )
          throw new Error(
            e +
              " and " +
              i +
              " are too far apart with stepSize of " +
              o +
              " " +
              n
          );
        var g = "data" === s.ticks.source && this.getDataTimestamps();
        for (c = u, d = 0; c < i; c = +t.add(c, o, n), d++) Qa(h, c, g);
        return (
          (c !== i && "ticks" !== s.bounds && 1 !== d) || Qa(h, c, g),
          Object.keys(h)
            .sort(Ga)
            .map((t) => +t)
        );
      }
      getLabelForValue(t) {
        const e = this._adapter,
          i = this.options.time;
        return i.tooltipFormat
          ? e.format(t, i.tooltipFormat)
          : e.format(t, i.displayFormats.datetime);
      }
      format(t, e) {
        var i = this.options.time.displayFormats,
          s = this._unit,
          e = e || i[s];
        return this._adapter.format(t, e);
      }
      _tickFormatFunction(t, e, i, s) {
        var a = this.options,
          n = a.ticks.callback;
        if (n) return d(n, [t, e, i], this);
        var n = a.time.displayFormats,
          a = this._unit,
          o = this._majorUnit,
          a = a && n[a],
          n = o && n[o],
          i = i[e],
          e = o && n && i && i.major;
        return this._adapter.format(t, s || (e ? n : a));
      }
      generateTickLabels(t) {
        let e, i, s;
        for (e = 0, i = t.length; e < i; ++e)
          (s = t[e]).label = this._tickFormatFunction(s.value, e, t);
      }
      getDecimalForValue(t) {
        return null === t ? NaN : (t - this.min) / (this.max - this.min);
      }
      getPixelForValue(t) {
        var e = this._offsets,
          t = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + t) * e.factor);
      }
      getValueForPixel(t) {
        var e = this._offsets,
          t = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + t * (this.max - this.min);
      }
      _getLabelSize(t) {
        var e = this.options.ticks,
          t = this.ctx.measureText(t).width,
          e = L(this.isHorizontal() ? e.maxRotation : e.minRotation),
          i = Math.cos(e),
          e = Math.sin(e),
          s = this._resolveTickFontOptions(0).size;
        return { w: t * i + s * e, h: t * e + s * i };
      }
      _getLabelCapacity(t) {
        var e = this.options.time,
          i = e.displayFormats,
          e = i[e.unit] || i.millisecond,
          i = this._tickFormatFunction(t, 0, tn(this, [t], this._majorUnit), e),
          t = this._getLabelSize(i),
          e =
            Math.floor(
              this.isHorizontal() ? this.width / t.w : this.height / t.h
            ) - 1;
        return 0 < e ? e : 1;
      }
      getDataTimestamps() {
        let t,
          e,
          i = this._cache.data || [];
        if (i.length) return i;
        const s = this.getMatchingVisibleMetas();
        if (this._normalized && s.length)
          return (this._cache.data = s[0].controller.getAllParsedValues(this));
        for (t = 0, e = s.length; t < e; ++t)
          i = i.concat(s[t].controller.getAllParsedValues(this));
        return (this._cache.data = this.normalize(i));
      }
      getLabelTimestamps() {
        const t = this._cache.labels || [];
        let e, i;
        if (t.length) return t;
        var s = this.getLabels();
        for (e = 0, i = s.length; e < i; ++e) t.push(Za(this, s[e]));
        return (this._cache.labels = this._normalized ? t : this.normalize(t));
      }
      normalize(t) {
        return wt(t.sort(Ga));
      }
    }
    function sn(t, e, i) {
      let s,
        a,
        n,
        o,
        r = 0,
        l = t.length - 1;
      i
        ? (e >= t[r].pos &&
            e <= t[l].pos &&
            ({ lo: r, hi: l } = f(t, "pos", e)),
          ({ pos: s, time: n } = t[r]),
          ({ pos: a, time: o } = t[l]))
        : (e >= t[r].time &&
            e <= t[l].time &&
            ({ lo: r, hi: l } = f(t, "time", e)),
          ({ time: s, pos: n } = t[r]),
          ({ time: a, pos: o } = t[l]));
      i = a - s;
      return i ? n + ((o - n) * (e - s)) / i : n;
    }
    var an = Object.freeze({
      __proto__: null,
      CategoryScale: class extends zs {
        static id = "category";
        static defaults = { ticks: { callback: Ia } };
        constructor(t) {
          super(t),
            (this._startValue = void 0),
            (this._valueRange = 0),
            (this._addedLabels = []);
        }
        init(t) {
          var e = this._addedLabels;
          if (e.length) {
            const t = this.getLabels();
            for (var { index: i, label: s } of e) t[i] === s && t.splice(i, 1);
            this._addedLabels = [];
          }
          super.init(t);
        }
        parse(t, e) {
          if (P(t)) return null;
          var i,
            s,
            a,
            n,
            o,
            r,
            l = this.getLabels();
          return (
            (a = e =
              isFinite(e) && l[e] === t
                ? e
                : ((i = l),
                  (s = T(e, (t = t))),
                  (a = this._addedLabels),
                  -1 === (r = i.indexOf(t))
                    ? ((o = s),
                      (a = a),
                      "string" == typeof (n = t)
                        ? ((o = i.push(n) - 1),
                          a.unshift({ index: o, label: n }))
                        : isNaN(n) && (o = null),
                      o)
                    : r !== i.lastIndexOf(t)
                    ? s
                    : r)),
            (n = l.length - 1),
            null === a ? null : C(Math.round(a), 0, n)
          );
        }
        determineDataLimits() {
          var { minDefined: t, maxDefined: e } = this.getUserBounds();
          let { min: i, max: s } = this.getMinMax(!0);
          "ticks" === this.options.bounds &&
            (t || (i = 0), e || (s = this.getLabels().length - 1)),
            (this.min = i),
            (this.max = s);
        }
        buildTicks() {
          const e = this.min,
            i = this.max,
            t = this.options.offset,
            s = [];
          let a = this.getLabels();
          (a = 0 === e && i === a.length - 1 ? a : a.slice(e, i + 1)),
            (this._valueRange = Math.max(a.length - (t ? 0 : 1), 1)),
            (this._startValue = this.min - (t ? 0.5 : 0));
          for (let t = e; t <= i; t++) s.push({ value: t });
          return s;
        }
        getLabelForValue(t) {
          return Ia.call(this, t);
        }
        configure() {
          super.configure(),
            this.isHorizontal() || (this._reversePixels = !this._reversePixels);
        }
        getPixelForValue(t) {
          return null === (t = "number" != typeof t ? this.parse(t) : t)
            ? NaN
            : this.getPixelForDecimal(
                (t - this._startValue) / this._valueRange
              );
        }
        getPixelForTick(t) {
          var e = this.ticks;
          return t < 0 || t > e.length - 1
            ? null
            : this.getPixelForValue(e[t].value);
        }
        getValueForPixel(t) {
          return Math.round(
            this._startValue + this.getDecimalForPixel(t) * this._valueRange
          );
        }
        getBasePixel() {
          return this.bottom;
        }
      },
      LinearScale: Va,
      LogarithmicScale: ja,
      RadialLinearScale: qa,
      TimeScale: en,
      TimeSeriesScale: class extends en {
        static id = "timeseries";
        static defaults = en.defaults;
        constructor(t) {
          super(t),
            (this._table = []),
            (this._minPos = void 0),
            (this._tableRange = void 0);
        }
        initOffsets() {
          var t = this._getTimestampsForTable(),
            e = (this._table = this.buildLookupTable(t));
          (this._minPos = sn(e, this.min)),
            (this._tableRange = sn(e, this.max) - this._minPos),
            super.initOffsets(t);
        }
        buildLookupTable(t) {
          const { min: e, max: i } = this,
            s = [],
            a = [];
          let n, o, r, l, h;
          for (n = 0, o = t.length; n < o; ++n)
            (l = t[n]) >= e && l <= i && s.push(l);
          if (s.length < 2)
            return [
              { time: e, pos: 0 },
              { time: i, pos: 1 },
            ];
          for (n = 0, o = s.length; n < o; ++n)
            (h = s[n + 1]),
              (r = s[n - 1]),
              (l = s[n]),
              Math.round((h + r) / 2) !== l &&
                a.push({ time: l, pos: n / (o - 1) });
          return a;
        }
        _generate() {
          var t = this.min,
            e = this.max;
          let i = super.getDataTimestamps();
          return (
            (i.includes(t) && i.length) || i.splice(0, 0, t),
            (i.includes(e) && 1 !== i.length) || i.push(e),
            i.sort((t, e) => t - e)
          );
        }
        _getTimestampsForTable() {
          let t = this._cache.all || [];
          if (t.length) return t;
          const e = this.getDataTimestamps(),
            i = this.getLabelTimestamps();
          return (
            (t =
              e.length && i.length
                ? this.normalize(e.concat(i))
                : e.length
                ? e
                : i),
            (t = this._cache.all = t)
          );
        }
        getDecimalForValue(t) {
          return (sn(this._table, t) - this._minPos) / this._tableRange;
        }
        getValueForPixel(t) {
          var e = this._offsets,
            t = this.getDecimalForPixel(t) / e.factor - e.end;
          return sn(this._table, t * this._tableRange + this._minPos, !0);
        }
      },
    });
    const nn = [
        "rgb(54, 162, 235)",
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      on = nn.map((t) => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
    function rn(t) {
      return nn[t % nn.length];
    }
    function ln(t) {
      return on[t % on.length];
    }
    function hn(n) {
      let o = 0;
      return (t, e) => {
        var i,
          s,
          a,
          e = n.getDatasetMeta(e).controller;
        e instanceof pa
          ? (o =
              ((s = t),
              (a = o),
              (s.backgroundColor = s.data.map(() => rn(a++))),
              a))
          : e instanceof ma
          ? (o =
              ((s = t),
              (i = o),
              (s.backgroundColor = s.data.map(() => ln(i++))),
              i))
          : e &&
            (o =
              ((e = t),
              (t = o),
              (e.borderColor = rn(t)),
              (e.backgroundColor = ln(t)),
              ++t));
      };
    }
    function cn(t) {
      let e;
      for (e in t) if (t[e].borderColor || t[e].backgroundColor) return 1;
    }
    var dn = {
      id: "colors",
      defaults: { enabled: !0, forceOverride: !1 },
      beforeLayout(t, e, i) {
        if (i.enabled) {
          const {
              data: { datasets: s },
              options: a,
            } = t.config,
            n = a["elements"];
          (!i.forceOverride &&
            (cn(s) ||
              (a && (a.borderColor || a.backgroundColor)) ||
              (n && cn(n)))) ||
            ((i = hn(t)), s.forEach(i));
        }
      },
    };
    function un(t) {
      var e;
      t._decimated &&
        ((e = t._data),
        delete t._decimated,
        delete t._data,
        Object.defineProperty(t, "data", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: e,
        }));
    }
    function gn(t) {
      t.data.datasets.forEach((t) => {
        un(t);
      });
    }
    var fn = {
      id: "decimation",
      defaults: { algorithm: "min-max", enabled: !1 },
      beforeElementsUpdate: (r, t, M) => {
        if (M.enabled) {
          const l = r.width;
          r.data.datasets.forEach((e, t) => {
            var { _data: i, indexAxis: s } = e,
              h = r.getDatasetMeta(t),
              a = i || e.data;
            if (
              "y" !== ki([s, r.options.indexAxis]) &&
              h.controller.supportsDecimation
            ) {
              t = r.scales[h.xAxisID];
              if (
                ("linear" === t.type || "time" === t.type) &&
                !r.options.parsing
              ) {
                var { start: n, count: o } = (function (t) {
                  var e = t.length;
                  let i,
                    s = 0;
                  const a = h["iScale"],
                    {
                      min: n,
                      max: o,
                      minDefined: r,
                      maxDefined: l,
                    } = a.getUserBounds();
                  return (
                    r && (s = C(f(t, a.axis, n).lo, 0, e - 1)),
                    (i = l ? C(f(t, a.axis, o).hi + 1, s, e) - s : e - s),
                    { start: s, count: i }
                  );
                })(a);
                if (o <= (M.threshold || 4 * l)) un(e);
                else {
                  let t;
                  switch (
                    (P(i) &&
                      ((e._data = a),
                      delete e.data,
                      Object.defineProperty(e, "data", {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                          return this._decimated;
                        },
                        set: function (t) {
                          this._data = t;
                        },
                      })),
                    M.algorithm)
                  ) {
                    case "lttb":
                      t = (function (s, a, n, t) {
                        var e = M.samples || t;
                        if (n <= e) return s.slice(a, a + n);
                        const o = [],
                          r = (n - 2) / (e - 2);
                        let l = 0;
                        const h = a + n - 1;
                        let c,
                          d,
                          u,
                          g,
                          f,
                          p = a;
                        for (o[l++] = s[p], c = 0; c < e - 2; c++) {
                          let t,
                            e = 0,
                            i = 0;
                          const h = Math.floor((c + 1) * r) + 1 + a,
                            _ = Math.min(Math.floor((c + 2) * r) + 1, n) + a,
                            y = _ - h;
                          for (t = h; t < _; t++) (e += s[t].x), (i += s[t].y);
                          (e /= y), (i /= y);
                          var m = Math.floor(c * r) + 1 + a,
                            b = Math.min(Math.floor((c + 1) * r) + 1, n) + a,
                            { x, y: v } = s[p];
                          for (u = -1, t = m; t < b; t++)
                            (g =
                              0.5 *
                              Math.abs(
                                (x - e) * (s[t].y - v) - (x - s[t].x) * (i - v)
                              )) > u && ((u = g), (d = s[t]), (f = t));
                          (o[l++] = d), (p = f);
                        }
                        return (o[l++] = s[h]), o;
                      })(a, n, o, l);
                      break;
                    case "min-max":
                      t = (function (t, e, i, s) {
                        let a,
                          n,
                          o,
                          r,
                          l,
                          h,
                          c,
                          d,
                          u,
                          g,
                          f = 0,
                          p = 0;
                        const m = [],
                          b = e + i - 1,
                          x = t[e].x,
                          v = t[b].x - x;
                        for (a = e; a < e + i; ++a) {
                          (o = (((n = t[a]).x - x) / v) * s), (r = n.y);
                          const e = 0 | o;
                          if (e === l)
                            r < u
                              ? ((u = r), (h = a))
                              : r > g && ((g = r), (c = a)),
                              (f = (p * f + n.x) / ++p);
                          else {
                            const i = a - 1;
                            if (!P(h) && !P(c)) {
                              const e = Math.min(h, c),
                                P = Math.max(h, c);
                              e !== d && e !== i && m.push({ ...t[e], x: f }),
                                P !== d && P !== i && m.push({ ...t[P], x: f });
                            }
                            0 < a && i !== d && m.push(t[i]),
                              m.push(n),
                              (l = e),
                              (p = 0),
                              (u = g = r),
                              (h = c = d = a);
                          }
                        }
                        return m;
                      })(a, n, o, l);
                      break;
                    default:
                      throw new Error(
                        `Unsupported decimation algorithm '${M.algorithm}'`
                      );
                  }
                  e._decimated = t;
                }
              }
            }
          });
        } else gn(r);
      },
      destroy(t) {
        gn(t);
      },
    };
    function pn(i, s, a, t) {
      if (!t) {
        let t = s[i],
          e = a[i];
        return (
          "angle" === i && ((t = v(t)), (e = v(e))),
          { property: i, start: t, end: e }
        );
      }
    }
    function mn(t, e, i) {
      for (; t < e; e--) {
        const t = i[e];
        if (!isNaN(t.x) && !isNaN(t.y)) break;
      }
      return e;
    }
    function bn(t, e, i, s) {
      return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
    }
    function xn(e, t) {
      let i = [],
        s = !1;
      return (i = O(e)
        ? ((s = !0), e)
        : (function (t) {
            const { x: i = null, y: s = null } = e || {},
              a = t.points,
              n = [];
            return (
              t.segments.forEach(({ start: t, end: e }) => {
                e = mn(t, e, a);
                (t = a[t]), (e = a[e]);
                null !== s
                  ? (n.push({ x: t.x, y: s }), n.push({ x: e.x, y: s }))
                  : null !== i &&
                    (n.push({ x: i, y: t.y }), n.push({ x: i, y: e.y }));
              }),
              n
            );
          })(t)).length
        ? new Da({ points: i, options: { tension: 0 }, _loop: s, _fullLoop: s })
        : null;
    }
    function vn(t) {
      return t && !1 !== t.fill;
    }
    function _n(e, i, s) {
      const a = [];
      for (let t = 0; t < s.length; t++) {
        var {
          first: n,
          last: o,
          point: r,
        } = (function (t, e, i) {
          const s = t.interpolate(e, i);
          if (!s) return {};
          var a = s[i],
            n = t.segments,
            o = t.points;
          let r = !1,
            l = !1;
          for (let t = 0; t < n.length; t++) {
            const e = n[t],
              s = o[e.start][i],
              h = o[e.end][i];
            if (c(a, s, h)) {
              (r = a === s), (l = a === h);
              break;
            }
          }
          return { first: r, last: l, point: s };
        })(s[t], i, "x");
        if (!(!r || (n && o)))
          if (n) a.unshift(r);
          else if ((e.push(r), !o)) break;
      }
      e.push(...a);
    }
    class yn {
      constructor(t) {
        (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
      }
      pathSegment(t, e, i) {
        var { x: s, y: a, radius: n } = this;
        return (
          (e = e || { start: 0, end: _ }),
          t.arc(s, a, n, e.end, e.start, !0),
          !i.bounds
        );
      }
      interpolate(t) {
        var { x: e, y: i, radius: s } = this,
          t = t.angle;
        return { x: e + Math.cos(t) * s, y: i + Math.sin(t) * s, angle: t };
      }
    }
    function Mn(t) {
      var e,
        i,
        { chart: s, fill: a, line: n } = t;
      if (p(a))
        return (
          (e = a),
          (i = (s = s).getDatasetMeta(e)) && s.isDatasetVisible(e)
            ? i.dataset
            : null
        );
      if ("stack" === a) {
        const { scale: o, index: r, line: l } = t,
          h = [],
          c = l.segments,
          d = l.points,
          u = (function (t, e) {
            const i = [],
              s = t.getMatchingVisibleMetas("line");
            for (let t = 0; t < s.length; t++) {
              var a = s[t];
              if (a.index === e) break;
              a.hidden || i.unshift(a.dataset);
            }
            return i;
          })(o, r);
        u.push(xn({ x: null, y: o.bottom }, l));
        for (let t = 0; t < c.length; t++) {
          const o = c[t];
          for (let t = o.start; t <= o.end; t++) _n(h, d[t], u);
        }
        return new Da({ points: h, options: {} });
      }
      if ("shape" === a) return !0;
      s = (function (t) {
        var e = t.scale || {};
        if (e.getPointPositionForValue) {
          var i = t;
          const { scale: a, fill: n } = i,
            o = a.options,
            r = a.getLabels().length,
            l = o.reverse ? a.max : a.min,
            h =
              ((i = n),
              (e = a),
              "start" === i
                ? l
                : "end" === i
                ? e.options.reverse
                  ? e.min
                  : e.max
                : A(i)
                ? i.value
                : e.getBaseValue()),
            c = [];
          if (o.grid.circular) {
            const i = a.getPointPositionForValue(0, l);
            return new yn({
              x: i.x,
              y: i.y,
              radius: a.getDistanceFromCenterForValue(h),
            });
          }
          for (let t = 0; t < r; ++t) c.push(a.getPointPositionForValue(t, h));
          return c;
        }
        {
          var s = t;
          const { scale: d = {}, fill: u } = s,
            g = (function (t, e) {
              let i = null;
              return (
                "start" === t
                  ? (i = e.bottom)
                  : "end" === t
                  ? (i = e.top)
                  : A(t)
                  ? (i = e.getPixelForValue(t.value))
                  : e.getBasePixel && (i = e.getBasePixel()),
                i
              );
            })(u, d);
          if (p(g)) {
            const s = d.isHorizontal();
            return { x: s ? g : null, y: s ? null : g };
          }
          return null;
        }
      })(t);
      return s instanceof yn ? s : xn(s, n);
    }
    function wn(t, e, i) {
      var s,
        a = Mn(e),
        { line: e, scale: n, axis: o } = e,
        r = e.options,
        l = r.fill,
        r = r.backgroundColor,
        { above: l = r, below: r = r } = l || {};
      a &&
        e.points.length &&
        (Ve(t, i),
        (s = t),
        ({
          line: a,
          target: l,
          above: r,
          below: i,
          area: n,
          scale: o,
        } = e =
          {
            line: e,
            target: a,
            above: l,
            below: r,
            area: i,
            scale: n,
            axis: o,
          }),
        (e = a._loop ? "angle" : e.axis),
        s.save(),
        "x" === e &&
          i !== r &&
          (kn(s, l, n.top),
          Sn(s, { line: a, target: l, color: r, scale: o, property: e }),
          s.restore(),
          s.save(),
          kn(s, l, n.bottom)),
        Sn(s, { line: a, target: l, color: i, scale: o, property: e }),
        s.restore(),
        Be(t));
    }
    function kn(t, e, i) {
      const { segments: s, points: a } = e;
      let n = !0,
        o = !1;
      t.beginPath();
      for (const r of s) {
        const { start: s, end: l } = r,
          h = a[s],
          c = a[mn(s, l, a)];
        n
          ? (t.moveTo(h.x, h.y), (n = !1))
          : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)),
          (o = !!e.pathSegment(t, r, { move: o }))
            ? t.closePath()
            : t.lineTo(c.x, i);
      }
      t.lineTo(e.first().x, i), t.closePath(), t.clip();
    }
    function Sn(e, i) {
      const { line: s, target: a, property: n, color: o, scale: r } = i,
        l = (function (t, e, i) {
          const s = t.segments,
            a = t.points,
            n = e.points,
            o = [];
          for (const t of s) {
            var { start: r, end: l } = t,
              l = mn(r, l, a),
              h = pn(i, a[r], a[l], t.loop);
            if (e.segments) {
              var c = Ei(e, h);
              for (const e of c) {
                const s = pn(i, n[e.start], n[e.end], e.loop),
                  d = Li(t, a, s);
                for (const t of d)
                  o.push({
                    source: t,
                    target: e,
                    start: { [i]: bn(h, s, "start", Math.max) },
                    end: { [i]: bn(h, s, "end", Math.min) },
                  });
              }
            } else o.push({ source: t, target: h, start: a[r], end: a[l] });
          }
          return o;
        })(s, a, n);
      for (const { source: i, target: p, start: m, end: b } of l) {
        const { style: { backgroundColor: l = o } = {} } = i,
          x = !0 !== a;
        e.save(), (e.fillStyle = l), (f = g = d = u = c = d = c = h = void 0);
        var h = e,
          c = r,
          d = x && pn(n, m, b),
          { top: c, bottom: u } = c.chart.chartArea,
          { property: d, start: g, end: f } = d || {},
          d =
            ("x" === d && (h.beginPath(), h.rect(g, c, f - g, u - c), h.clip()),
            e.beginPath(),
            !!s.pathSegment(e, i));
        let t;
        if (x) {
          d ? e.closePath() : Pn(e, a, b, n);
          const i = !!a.pathSegment(e, p, { move: d, reverse: !0 });
          (t = d && i) || Pn(e, a, m, n);
        }
        e.closePath(), e.fill(t ? "evenodd" : "nonzero"), e.restore();
      }
    }
    function Pn(t, e, i, s) {
      e = e.interpolate(i, s);
      e && t.lineTo(e.x, e.y);
    }
    var Dn = {
      id: "filler",
      afterDatasetsUpdate(t, e, i) {
        const s = (t.data.datasets || []).length,
          a = [];
        let n, o, r, l;
        for (o = 0; o < s; ++o)
          (r = (n = t.getDatasetMeta(o)).dataset),
            (l = null),
            r &&
              r.options &&
              r instanceof Da &&
              (l = {
                visible: t.isDatasetVisible(o),
                index: o,
                fill: (function (s, t, e) {
                  var i = (function () {
                    var t = s.options,
                      e = t.fill;
                    let i = T(e && e.target, e);
                    return (
                      !1 !== (i = void 0 === i ? !!t.backgroundColor : i) &&
                      null !== i &&
                      (!0 === i ? "origin" : i)
                    );
                  })();
                  if (A(i)) return !isNaN(i.value) && i;
                  var a,
                    n = parseFloat(i);
                  return p(n) && Math.floor(n) === n
                    ? ((a = i[0]),
                      (n = n),
                      !(
                        (n = "-" !== a && "+" !== a ? n : t + n) === t ||
                        n < 0 ||
                        e <= n
                      ) && n)
                    : 0 <=
                        ["origin", "start", "end", "stack", "shape"].indexOf(
                          i
                        ) && i;
                })(r, o, s),
                chart: t,
                axis: n.controller.options.indexAxis,
                scale: n.vScale,
                line: r,
              }),
            (n.$filler = l),
            a.push(l);
        for (o = 0; o < s; ++o)
          (l = a[o]) &&
            !1 !== l.fill &&
            (l.fill = (function (t, e, i) {
              let s = t[e].fill;
              const a = [e];
              var n;
              if (!i) return s;
              for (; !1 !== s && -1 === a.indexOf(s); ) {
                if (!p(s)) return s;
                if (!(n = t[s])) return !1;
                if (n.visible) return s;
                a.push(s), (s = n.fill);
              }
              return !1;
            })(a, o, i.propagate));
      },
      beforeDraw(e, t, i) {
        var s = "beforeDraw" === i.drawTime,
          a = e.getSortedVisibleDatasetMetas(),
          n = e.chartArea;
        for (let t = a.length - 1; 0 <= t; --t) {
          const i = a[t].$filler;
          i &&
            (i.line.updateControlPoints(n, i.axis),
            s && i.fill && wn(e.ctx, i, n));
        }
      },
      beforeDatasetsDraw(e, t, i) {
        if ("beforeDatasetsDraw" === i.drawTime) {
          var s = e.getSortedVisibleDatasetMetas();
          for (let t = s.length - 1; 0 <= t; --t) {
            const i = s[t].$filler;
            vn(i) && wn(e.ctx, i, e.chartArea);
          }
        }
      },
      beforeDatasetDraw(t, e, i) {
        e = e.meta.$filler;
        vn(e) &&
          "beforeDatasetDraw" === i.drawTime &&
          wn(t.ctx, e, t.chartArea);
      },
      defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
    };
    const Cn = (t, e) => {
      let { boxHeight: i = e, boxWidth: s = e } = t;
      return (
        t.usePointStyle &&
          ((i = Math.min(i, e)), (s = t.pointStyleWidth || Math.min(s, e))),
        { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) }
      );
    };
    class On extends e {
      constructor(t) {
        super(),
          (this._added = !1),
          (this.legendHitBoxes = []),
          (this._hoveredItem = null),
          (this.doughnutMode = !1),
          (this.chart = t.chart),
          (this.options = t.options),
          (this.ctx = t.ctx),
          (this.legendItems = void 0),
          (this.columnSizes = void 0),
          (this.lineWidths = void 0),
          (this.maxHeight = void 0),
          (this.maxWidth = void 0),
          (this.top = void 0),
          (this.bottom = void 0),
          (this.left = void 0),
          (this.right = void 0),
          (this.height = void 0),
          (this.width = void 0),
          (this._margins = void 0),
          (this.position = void 0),
          (this.weight = void 0),
          (this.fullSize = void 0);
      }
      update(t, e, i) {
        (this.maxWidth = t),
          (this.maxHeight = e),
          (this._margins = i),
          this.setDimensions(),
          this.buildLabels(),
          this.fit();
      }
      setDimensions() {
        this.isHorizontal()
          ? ((this.width = this.maxWidth),
            (this.left = this._margins.left),
            (this.right = this.width))
          : ((this.height = this.maxHeight),
            (this.top = this._margins.top),
            (this.bottom = this.height));
      }
      buildLabels() {
        const i = this.options.labels || {};
        let t = d(i.generateLabels, [this.chart], this) || [];
        i.filter && (t = t.filter((t) => i.filter(t, this.chart.data))),
          i.sort && (t = t.sort((t, e) => i.sort(t, e, this.chart.data))),
          this.options.reverse && t.reverse(),
          (this.legendItems = t);
      }
      fit() {
        const { options: i, ctx: s } = this;
        if (i.display) {
          var a = i.labels,
            n = z(a.font),
            o = n.size,
            r = this._computeTitleHeight(),
            { boxWidth: a, itemHeight: l } = Cn(a, o);
          let t, e;
          (s.font = n.string),
            this.isHorizontal()
              ? ((t = this.maxWidth), (e = this._fitRows(r, o, a, l) + 10))
              : ((e = this.maxHeight), (t = this._fitCols(r, n, a, l) + 10)),
            (this.width = Math.min(t, i.maxWidth || this.maxWidth)),
            (this.height = Math.min(e, i.maxHeight || this.maxHeight));
        } else this.width = this.height = 0;
      }
      _fitRows(t, i, s, a) {
        const {
            ctx: n,
            maxWidth: o,
            options: {
              labels: { padding: r },
            },
          } = this,
          l = (this.legendHitBoxes = []),
          h = (this.lineWidths = [0]),
          c = a + r;
        let d = t,
          u = ((n.textAlign = "left"), (n.textBaseline = "middle"), -1),
          g = -c;
        return (
          this.legendItems.forEach((t, e) => {
            t = s + i / 2 + n.measureText(t.text).width;
            (0 === e || h[h.length - 1] + t + 2 * r > o) &&
              ((d += c), (h[h.length - (0 < e ? 0 : 1)] = 0), (g += c), u++),
              (l[e] = { left: 0, top: g, row: u, width: t, height: a }),
              (h[h.length - 1] += t + r);
          }),
          d
        );
      }
      _fitCols(t, r, l, h) {
        const {
            ctx: c,
            maxHeight: e,
            options: {
              labels: { padding: d },
            },
          } = this,
          u = (this.legendHitBoxes = []),
          g = (this.columnSizes = []),
          f = e - t;
        let p = d,
          m = 0,
          b = 0,
          x = 0,
          v = 0;
        return (
          this.legendItems.forEach((t, e) => {
            (o = l), (i = r), (s = c), (a = t), (n = h);
            var i,
              s,
              a,
              n,
              { itemWidth: t, itemHeight: o } = {
                itemWidth: (function (t, e, i) {
                  let s = a.text;
                  return (
                    s &&
                      "string" != typeof s &&
                      (s = s.reduce((t, e) => (t.length > e.length ? t : e))),
                    t + e.size / 2 + i.measureText(s).width
                  );
                })(o, i, s),
                itemHeight: (function (t) {
                  let e = n;
                  return (e = "string" != typeof a.text ? An(a, t) : e);
                })(i.lineHeight),
              };
            0 < e &&
              b + o + 2 * d > f &&
              ((p += m + d),
              g.push({ width: m, height: b }),
              (x += m + d),
              v++,
              (m = b = 0)),
              (u[e] = { left: x, top: b, col: v, width: t, height: o }),
              (m = Math.max(m, t)),
              (b += o + d);
          }),
          (p += m),
          g.push({ width: m, height: b }),
          p
        );
      }
      adjustHitBoxes() {
        if (this.options.display) {
          const i = this._computeTitleHeight(),
            {
              legendHitBoxes: s,
              options: {
                align: a,
                labels: { padding: n },
                rtl: t,
              },
            } = this,
            o = Di(t, this.left, this.width);
          if (this.isHorizontal()) {
            let t = 0,
              e = E(a, this.left + n, this.right - this.lineWidths[t]);
            for (const r of s)
              t !== r.row &&
                ((t = r.row),
                (e = E(a, this.left + n, this.right - this.lineWidths[t]))),
                (r.top += this.top + i + n),
                (r.left = o.leftForLtr(o.x(e), r.width)),
                (e += r.width + n);
          } else {
            let t = 0,
              e = E(
                a,
                this.top + i + n,
                this.bottom - this.columnSizes[t].height
              );
            for (const l of s)
              l.col !== t &&
                ((t = l.col),
                (e = E(
                  a,
                  this.top + i + n,
                  this.bottom - this.columnSizes[t].height
                ))),
                (l.top = e),
                (l.left += this.left + n),
                (l.left = o.leftForLtr(o.x(l.left), l.width)),
                (e += l.height + n);
          }
        }
      }
      isHorizontal() {
        return (
          "top" === this.options.position || "bottom" === this.options.position
        );
      }
      draw() {
        var t;
        this.options.display && (Ve((t = this.ctx), this), this._draw(), Be(t));
      }
      _draw() {
        const { options: h, columnSizes: c, lineWidths: d, ctx: u } = this,
          { align: g, labels: f } = h,
          p = R.color,
          m = Di(h.rtl, this.left, this.width),
          b = z(f.font),
          x = f["padding"],
          v = b.size,
          _ = v / 2;
        let y;
        this.drawTitle(),
          (u.textAlign = m.textAlign("left")),
          (u.textBaseline = "middle"),
          (u.lineWidth = 0.5),
          (u.font = b.string);
        const { boxWidth: M, boxHeight: w, itemHeight: k } = Cn(f, v),
          S = this.isHorizontal(),
          P = this._computeTitleHeight(),
          D =
            ((y = S
              ? {
                  x: E(g, this.left + x, this.right - d[0]),
                  y: this.top + x + P,
                  line: 0,
                }
              : {
                  x: this.left + x,
                  y: E(g, this.top + P + x, this.bottom - c[0].height),
                  line: 0,
                }),
            Ci(this.ctx, h.textDirection),
            k + x);
        this.legendItems.forEach((t, e) => {
          (u.strokeStyle = t.fontColor), (u.fillStyle = t.fontColor);
          var i = u.measureText(t.text).width,
            s = m.textAlign(t.textAlign || (t.textAlign = f.textAlign)),
            i = M + _ + i;
          let a = y.x,
            n = y.y;
          m.setWidth(this.width),
            S
              ? 0 < e &&
                a + i + x > this.right &&
                ((n = y.y += D),
                y.line++,
                (a = y.x = E(g, this.left + x, this.right - d[y.line])))
              : 0 < e &&
                n + D > this.bottom &&
                ((a = y.x = a + c[y.line].width + x),
                y.line++,
                (n = y.y =
                  E(g, this.top + P + x, this.bottom - c[y.line].height)));
          var e = m.x(a),
            o = n,
            r = t;
          if (!(isNaN(M) || M <= 0 || isNaN(w) || w < 0)) {
            u.save();
            var l = T(r.lineWidth, 1);
            if (
              ((u.fillStyle = T(r.fillStyle, p)),
              (u.lineCap = T(r.lineCap, "butt")),
              (u.lineDashOffset = T(r.lineDashOffset, 0)),
              (u.lineJoin = T(r.lineJoin, "miter")),
              (u.lineWidth = l),
              (u.strokeStyle = T(r.strokeStyle, p)),
              u.setLineDash(T(r.lineDash, [])),
              f.usePointStyle)
            ) {
              const p = {
                  radius: (w * Math.SQRT2) / 2,
                  pointStyle: r.pointStyle,
                  rotation: r.rotation,
                  borderWidth: l,
                },
                T = m.xPlus(e, M / 2);
              Fe(u, p, T, o + _, f.pointStyleWidth && M);
            } else {
              const f = o + Math.max((v - w) / 2, 0),
                p = m.leftForLtr(e, M),
                T = wi(r.borderRadius);
              u.beginPath(),
                Object.values(T).some((t) => 0 !== t)
                  ? je(u, { x: p, y: f, w: M, h: w, radius: T })
                  : u.rect(p, f, M, w),
                u.fill(),
                0 !== l && u.stroke();
            }
            u.restore();
          }
          if (
            ((a = Ct(s, a + M + _, S ? a + i : this.right, h.rtl)),
            (o = m.x(a)),
            (e = n),
            (r = t),
            He(u, r.text, o, e + k / 2, b, {
              strikethrough: r.hidden,
              textAlign: m.textAlign(r.textAlign),
            }),
            S)
          )
            y.x += i + x;
          else if ("string" != typeof t.text) {
            const h = b.lineHeight;
            y.y += An(t, h) + x;
          } else y.y += D;
        }),
          Oi(this.ctx, h.textDirection);
      }
      drawTitle() {
        const s = this.options,
          a = s.title,
          n = z(a.font),
          o = I(a.padding);
        if (a.display) {
          const l = Di(s.rtl, this.left, this.width),
            h = this.ctx,
            c = a.position,
            d = n.size / 2,
            u = o.top + d;
          let t,
            e = this.left,
            i = this.width;
          if (this.isHorizontal())
            (i = Math.max(...this.lineWidths)),
              (t = this.top + u),
              (e = E(s.align, e, this.right - i));
          else {
            const a = this.columnSizes.reduce(
              (t, e) => Math.max(t, e.height),
              0
            );
            t =
              u +
              E(
                s.align,
                this.top,
                this.bottom - a - s.labels.padding - this._computeTitleHeight()
              );
          }
          var r = E(c, e, e + i);
          (h.textAlign = l.textAlign(Dt(c))),
            (h.textBaseline = "middle"),
            (h.strokeStyle = a.color),
            (h.fillStyle = a.color),
            (h.font = n.string),
            He(h, a.text, r, t, n);
        }
      }
      _computeTitleHeight() {
        var t = this.options.title,
          e = z(t.font),
          i = I(t.padding);
        return t.display ? e.lineHeight + i.height : 0;
      }
      _getLegendItemAt(t, e) {
        let i, s, a;
        if (c(t, this.left, this.right) && c(e, this.top, this.bottom))
          for (a = this.legendHitBoxes, i = 0; i < a.length; ++i)
            if (
              c(t, (s = a[i]).left, s.left + s.width) &&
              c(e, s.top, s.top + s.height)
            )
              return this.legendItems[i];
        return null;
      }
      handleEvent(t) {
        var e,
          i,
          s,
          a = this.options;
        ((("mousemove" !== (e = t.type) && "mouseout" !== e) ||
          (!a.onHover && !a.onLeave)) &&
          (!a.onClick || ("click" !== e && "mouseup" !== e))) ||
          ((e = this._getLegendItemAt(t.x, t.y)),
          "mousemove" === t.type || "mouseout" === t.type
            ? ((s =
                null !== (i = this._hoveredItem) &&
                null !== e &&
                i.datasetIndex === e.datasetIndex &&
                i.index === e.index),
              i && !s && d(a.onLeave, [t, i, this], this),
              (this._hoveredItem = e) && !s && d(a.onHover, [t, e, this], this))
            : e && d(a.onClick, [t, e, this], this));
      }
    }
    function An(t, e) {
      return e * (t.text ? t.text.length : 0);
    }
    var Tn = {
      id: "legend",
      _element: On,
      start(t, e, i) {
        var s = (t.legend = new On({ ctx: t.ctx, options: i, chart: t }));
        a.configure(t, s, i), a.addBox(t, s);
      },
      stop(t) {
        a.removeBox(t, t.legend), delete t.legend;
      },
      beforeUpdate(t, e, i) {
        const s = t.legend;
        a.configure(t, s, i), (s.options = i);
      },
      afterUpdate(t) {
        const e = t.legend;
        e.buildLabels(), e.adjustHitBoxes();
      },
      afterEvent(t, e) {
        e.replay || t.legend.handleEvent(e.event);
      },
      defaults: {
        display: !0,
        position: "top",
        align: "center",
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick(t, e, i) {
          const s = e.datasetIndex,
            a = i.chart;
          a.isDatasetVisible(s)
            ? (a.hide(s), (e.hidden = !0))
            : (a.show(s), (e.hidden = !1));
        },
        onHover: null,
        onLeave: null,
        labels: {
          color: (t) => t.chart.options.color,
          boxWidth: 40,
          padding: 10,
          generateLabels(t) {
            const s = t.data.datasets,
              {
                usePointStyle: a,
                pointStyle: n,
                textAlign: o,
                color: r,
                useBorderRadius: l,
                borderRadius: h,
              } = t.legend.options["labels"];
            return t._getSortedDatasetMetas().map((t) => {
              var e = t.controller.getStyle(a ? 0 : void 0),
                i = I(e.borderWidth);
              return {
                text: s[t.index].label,
                fillStyle: e.backgroundColor,
                fontColor: r,
                hidden: !t.visible,
                lineCap: e.borderCapStyle,
                lineDash: e.borderDash,
                lineDashOffset: e.borderDashOffset,
                lineJoin: e.borderJoinStyle,
                lineWidth: (i.width + i.height) / 4,
                strokeStyle: e.borderColor,
                pointStyle: n || e.pointStyle,
                rotation: e.rotation,
                textAlign: o || e.textAlign,
                borderRadius: l && (h || e.borderRadius),
                datasetIndex: t.index,
              };
            }, this);
          },
        },
        title: {
          color: (t) => t.chart.options.color,
          display: !1,
          position: "center",
          text: "",
        },
      },
      descriptors: {
        _scriptable: (t) => !t.startsWith("on"),
        labels: {
          _scriptable: (t) => !["generateLabels", "filter", "sort"].includes(t),
        },
      },
    };
    class Ln extends e {
      constructor(t) {
        super(),
          (this.chart = t.chart),
          (this.options = t.options),
          (this.ctx = t.ctx),
          (this._padding = void 0),
          (this.top = void 0),
          (this.bottom = void 0),
          (this.left = void 0),
          (this.right = void 0),
          (this.width = void 0),
          (this.height = void 0),
          (this.position = void 0),
          (this.weight = void 0),
          (this.fullSize = void 0);
      }
      update(t, e) {
        var i = this.options;
        (this.left = 0),
          (this.top = 0),
          i.display
            ? ((this.width = this.right = t),
              (this.height = this.bottom = e),
              (t = O(i.text) ? i.text.length : 1),
              (this._padding = I(i.padding)),
              (e = t * z(i.font).lineHeight + this._padding.height),
              this.isHorizontal() ? (this.height = e) : (this.width = e))
            : (this.width = this.height = this.right = this.bottom = 0);
      }
      isHorizontal() {
        var t = this.options.position;
        return "top" === t || "bottom" === t;
      }
      _drawArgs(t) {
        var { top: e, left: i, bottom: s, right: a, options: n } = this,
          o = n.align;
        let r,
          l,
          h,
          c = 0;
        return (
          (r = this.isHorizontal()
            ? ((l = E(o, i, a)), (h = e + t), a - i)
            : ((c =
                "left" === n.position
                  ? ((l = i + t), (h = E(o, s, e)), -0.5 * S)
                  : ((l = a - t), (h = E(o, e, s)), 0.5 * S)),
              s - e)),
          { titleX: l, titleY: h, maxWidth: r, rotation: c }
        );
      }
      draw() {
        var t,
          e,
          i,
          s,
          a,
          n = this.ctx,
          o = this.options;
        o.display &&
          ((e = (t = z(o.font)).lineHeight / 2 + this._padding.top),
          ({
            titleX: e,
            titleY: i,
            maxWidth: s,
            rotation: a,
          } = this._drawArgs(e)),
          He(n, o.text, 0, 0, t, {
            color: o.color,
            maxWidth: s,
            rotation: a,
            textAlign: Dt(o.align),
            textBaseline: "middle",
            translation: [e, i],
          }));
      }
    }
    var En = {
      id: "title",
      _element: Ln,
      start(t, e, i) {
        var s;
        (t = t),
          (i = i),
          (s = new Ln({ ctx: t.ctx, options: i, chart: t })),
          a.configure(t, s, i),
          a.addBox(t, s),
          (t.titleBlock = s);
      },
      stop(t) {
        var e = t.titleBlock;
        a.removeBox(t, e), delete t.titleBlock;
      },
      beforeUpdate(t, e, i) {
        const s = t.titleBlock;
        a.configure(t, s, i), (s.options = i);
      },
      defaults: {
        align: "center",
        display: !1,
        font: { weight: "bold" },
        fullSize: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2e3,
      },
      defaultRoutes: { color: "color" },
      descriptors: { _scriptable: !0, _indexable: !1 },
    };
    const Rn = new WeakMap();
    var In = {
      id: "subtitle",
      start(t, e, i) {
        var s = new Ln({ ctx: t.ctx, options: i, chart: t });
        a.configure(t, s, i), a.addBox(t, s), Rn.set(t, s);
      },
      stop(t) {
        a.removeBox(t, Rn.get(t)), Rn.delete(t);
      },
      beforeUpdate(t, e, i) {
        const s = Rn.get(t);
        a.configure(t, s, i), (s.options = i);
      },
      defaults: {
        align: "center",
        display: !1,
        font: { weight: "normal" },
        fullSize: !0,
        padding: 0,
        position: "top",
        text: "",
        weight: 1500,
      },
      defaultRoutes: { color: "color" },
      descriptors: { _scriptable: !0, _indexable: !1 },
    };
    const zn = {
      average(t) {
        if (!t.length) return !1;
        let e,
          i,
          s = 0,
          a = 0,
          n = 0;
        for (e = 0, i = t.length; e < i; ++e) {
          const i = t[e].element;
          if (i && i.hasValue()) {
            const t = i.tooltipPosition();
            (s += t.x), (a += t.y), ++n;
          }
        }
        return { x: s / n, y: a / n };
      },
      nearest(t, e) {
        if (!t.length) return !1;
        let i,
          s,
          a,
          n = e.x,
          o = e.y,
          r = Number.POSITIVE_INFINITY;
        for (i = 0, s = t.length; i < s; ++i) {
          const s = t[i].element;
          if (s && s.hasValue()) {
            const t = gt(e, s.getCenterPoint());
            t < r && ((r = t), (a = s));
          }
        }
        if (a) {
          const t = a.tooltipPosition();
          (n = t.x), (o = t.y);
        }
        return { x: n, y: o };
      },
    };
    function x(t, e) {
      return e && (O(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
    }
    function Fn(t) {
      return ("string" == typeof t || t instanceof String) &&
        -1 < t.indexOf("\n")
        ? t.split("\n")
        : t;
    }
    function Vn(t, e) {
      const i = t.chart.ctx,
        { body: s, footer: a, title: n } = t,
        { boxWidth: o, boxHeight: r } = e,
        l = z(e.bodyFont),
        h = z(e.titleFont),
        c = z(e.footerFont),
        d = n.length,
        u = a.length,
        g = s.length,
        f = I(e.padding);
      let p = f.height,
        m = 0,
        b = s.reduce(
          (t, e) => t + e.before.length + e.lines.length + e.after.length,
          0
        ),
        x =
          ((b += t.beforeBody.length + t.afterBody.length),
          d &&
            (p +=
              d * h.lineHeight +
              (d - 1) * e.titleSpacing +
              e.titleMarginBottom),
          b &&
            (p +=
              g * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) +
              (b - g) * l.lineHeight +
              (b - 1) * e.bodySpacing),
          u &&
            (p +=
              e.footerMarginTop + u * c.lineHeight + (u - 1) * e.footerSpacing),
          0);
      function v(t) {
        m = Math.max(m, i.measureText(t).width + x);
      }
      return (
        i.save(),
        (i.font = h.string),
        k(t.title, v),
        (i.font = l.string),
        k(t.beforeBody.concat(t.afterBody), v),
        (x = e.displayColors ? o + 2 + e.boxPadding : 0),
        k(s, (t) => {
          k(t.before, v), k(t.lines, v), k(t.after, v);
        }),
        (x = 0),
        (i.font = c.string),
        k(t.footer, v),
        i.restore(),
        { width: (m += f.width), height: p }
      );
    }
    function Bn(i, t, s) {
      var e =
        s.yAlign ||
        t.yAlign ||
        (function () {
          var { y: t, height: e } = s;
          return t < e / 2 ? "top" : t > i.height - e / 2 ? "bottom" : "center";
        })();
      return {
        xAlign:
          s.xAlign ||
          t.xAlign ||
          (function (a, n, o, t) {
            var { x: e, width: i } = o,
              {
                width: s,
                chartArea: { left: r, right: l },
              } = a;
            let h = "center";
            return (
              "center" === t
                ? (h = e <= (r + l) / 2 ? "left" : "right")
                : e <= i / 2
                ? (h = "left")
                : s - i / 2 <= e && (h = "right"),
              (h = (function (t) {
                var { x: e, width: i } = o,
                  s = n.caretSize + n.caretPadding;
                return (
                  ("left" === t && e + i + s > a.width) ||
                  ("right" === t && e - i - s < 0)
                );
              })(h)
                ? "center"
                : h)
            );
          })(i, t, s, e),
        yAlign: e,
      };
    }
    function Wn(t, i, e, s) {
      var { caretSize: t, caretPadding: a, cornerRadius: n } = t,
        { xAlign: o, yAlign: r } = e,
        l = t + a,
        { topLeft: e, topRight: a, bottomLeft: n, bottomRight: h } = wi(n);
      let c = (function () {
        let { x: t, width: e } = i;
        return "right" === o ? (t -= e) : "center" === o && (t -= e / 2), t;
      })();
      var d = (function () {
        let { y: t, height: e } = i;
        return (
          "top" === r ? (t += l) : (t -= "bottom" === r ? e + l : e / 2), t
        );
      })();
      return (
        "center" === r
          ? "left" === o
            ? (c += l)
            : "right" === o && (c -= l)
          : "left" === o
          ? (c -= Math.max(e, n) + t)
          : "right" === o && (c += Math.max(a, h) + t),
        { x: C(c, 0, s.width - i.width), y: C(d, 0, s.height - i.height) }
      );
    }
    function Nn(t, e, i) {
      i = I(i.padding);
      return "center" === e
        ? t.x + t.width / 2
        : "right" === e
        ? t.x + t.width - i.right
        : t.x + i.left;
    }
    function Hn(t) {
      return x([], Fn(t));
    }
    function jn(t, e) {
      e = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
      return e ? t.override(e) : t;
    }
    const Yn = {
      beforeTitle: t,
      title(t) {
        if (0 < t.length) {
          var t = t[0],
            e = t.chart.data.labels,
            i = e ? e.length : 0;
          if (this && this.options && "dataset" === this.options.mode)
            return t.dataset.label || "";
          if (t.label) return t.label;
          if (0 < i && t.dataIndex < i) return e[t.dataIndex];
        }
        return "";
      },
      afterTitle: t,
      beforeBody: t,
      beforeLabel: t,
      label(t) {
        if (this && this.options && "dataset" === this.options.mode)
          return t.label + ": " + t.formattedValue || t.formattedValue;
        let e = t.dataset.label || "";
        e && (e += ": ");
        t = t.formattedValue;
        return P(t) || (e += t), e;
      },
      labelColor(t) {
        t = t.chart
          .getDatasetMeta(t.datasetIndex)
          .controller.getStyle(t.dataIndex);
        return {
          borderColor: t.borderColor,
          backgroundColor: t.backgroundColor,
          borderWidth: t.borderWidth,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderRadius: 0,
        };
      },
      labelTextColor() {
        return this.options.bodyColor;
      },
      labelPointStyle(t) {
        t = t.chart
          .getDatasetMeta(t.datasetIndex)
          .controller.getStyle(t.dataIndex);
        return { pointStyle: t.pointStyle, rotation: t.rotation };
      },
      afterLabel: t,
      afterBody: t,
      beforeFooter: t,
      footer: t,
      afterFooter: t,
    };
    function w(t, e, i, s) {
      t = t[e].call(i, s);
      return void 0 === t ? Yn[e].call(i, s) : t;
    }
    class $n extends e {
      static positioners = zn;
      constructor(t) {
        super(),
          (this.opacity = 0),
          (this._active = []),
          (this._eventPosition = void 0),
          (this._size = void 0),
          (this._cachedAnimations = void 0),
          (this._tooltipItems = []),
          (this.$animations = void 0),
          (this.$context = void 0),
          (this.chart = t.chart),
          (this.options = t.options),
          (this.dataPoints = void 0),
          (this.title = void 0),
          (this.beforeBody = void 0),
          (this.body = void 0),
          (this.afterBody = void 0),
          (this.footer = void 0),
          (this.xAlign = void 0),
          (this.yAlign = void 0),
          (this.x = void 0),
          (this.y = void 0),
          (this.height = void 0),
          (this.width = void 0),
          (this.caretX = void 0),
          (this.caretY = void 0),
          (this.labelColors = void 0),
          (this.labelPointStyles = void 0),
          (this.labelTextColors = void 0);
      }
      initialize(t) {
        (this.options = t),
          (this._cachedAnimations = void 0),
          (this.$context = void 0);
      }
      _resolveAnimations() {
        var t = this._cachedAnimations;
        if (t) return t;
        var t = this.chart,
          e = this.options.setContext(this.getContext()),
          t = e.enabled && t.options.animation && e.animations,
          e = new xs(this.chart, t);
        return t._cacheable && (this._cachedAnimations = Object.freeze(e)), e;
      }
      getContext() {
        return (
          this.$context ||
          (this.$context =
            ((t = this.chart.getContext()),
            Pi(t, {
              tooltip: this,
              tooltipItems: this._tooltipItems,
              type: "tooltip",
            })))
        );
        var t;
      }
      getTitle(t, e) {
        var e = e["callbacks"],
          i = w(e, "beforeTitle", this, t),
          s = w(e, "title", this, t),
          e = w(e, "afterTitle", this, t),
          t = x([], Fn(i));
        return (t = x(t, Fn(s))), x(t, Fn(e));
      }
      getBeforeBody(t, e) {
        return Hn(w(e.callbacks, "beforeBody", this, t));
      }
      getBody(t, e) {
        const s = e["callbacks"],
          a = [];
        return (
          k(t, (t) => {
            var e = { before: [], lines: [], after: [] },
              i = jn(s, t);
            x(e.before, Fn(w(i, "beforeLabel", this, t))),
              x(e.lines, w(i, "label", this, t)),
              x(e.after, Fn(w(i, "afterLabel", this, t))),
              a.push(e);
          }),
          a
        );
      }
      getAfterBody(t, e) {
        return Hn(w(e.callbacks, "afterBody", this, t));
      }
      getFooter(t, e) {
        var e = e["callbacks"],
          i = w(e, "beforeFooter", this, t),
          s = w(e, "footer", this, t),
          e = w(e, "afterFooter", this, t),
          t = x([], Fn(i));
        return (t = x(t, Fn(s))), x(t, Fn(e));
      }
      _createItems(s) {
        const t = this._active,
          a = this.chart.data,
          i = [],
          n = [],
          o = [];
        let e,
          r,
          l = [];
        for (e = 0, r = t.length; e < r; ++e)
          l.push(
            (function (t, e) {
              const { element: i, datasetIndex: s, index: a } = e,
                n = t.getDatasetMeta(s).controller,
                { label: o, value: r } = n.getLabelAndValue(a);
              return {
                chart: t,
                label: o,
                parsed: n.getParsed(a),
                raw: t.data.datasets[s].data[a],
                formattedValue: r,
                dataset: n.getDataset(),
                dataIndex: a,
                datasetIndex: s,
                element: i,
              };
            })(this.chart, t[e])
          );
        return (
          s.filter && (l = l.filter((t, e, i) => s.filter(t, e, i, a))),
          k(
            (l = s.itemSort ? l.sort((t, e) => s.itemSort(t, e, a)) : l),
            (t) => {
              var e = jn(s.callbacks, t);
              i.push(w(e, "labelColor", this, t)),
                n.push(w(e, "labelPointStyle", this, t)),
                o.push(w(e, "labelTextColor", this, t));
            }
          ),
          (this.labelColors = i),
          (this.labelPointStyles = n),
          (this.labelTextColors = o),
          (this.dataPoints = l)
        );
      }
      update(t, e) {
        const i = this.options.setContext(this.getContext()),
          s = this._active;
        let a,
          n = [];
        if (s.length) {
          const t = zn[i.position].call(this, s, this._eventPosition),
            e =
              ((n = this._createItems(i)),
              (this.title = this.getTitle(n, i)),
              (this.beforeBody = this.getBeforeBody(n, i)),
              (this.body = this.getBody(n, i)),
              (this.afterBody = this.getAfterBody(n, i)),
              (this.footer = this.getFooter(n, i)),
              (this._size = Vn(this, i))),
            o = Object.assign({}, t, e),
            r = Bn(this.chart, i, o),
            l = Wn(i, o, r, this.chart);
          (this.xAlign = r.xAlign),
            (this.yAlign = r.yAlign),
            (a = {
              opacity: 1,
              x: l.x,
              y: l.y,
              width: e.width,
              height: e.height,
              caretX: t.x,
              caretY: t.y,
            });
        } else 0 !== this.opacity && (a = { opacity: 0 });
        (this._tooltipItems = n),
          (this.$context = void 0),
          a && this._resolveAnimations().update(this, a),
          t &&
            i.external &&
            i.external.call(this, {
              chart: this.chart,
              tooltip: this,
              replay: e,
            });
      }
      drawCaret(t, e, i, s) {
        t = this.getCaretPosition(t, i, s);
        e.lineTo(t.x1, t.y1), e.lineTo(t.x2, t.y2), e.lineTo(t.x3, t.y3);
      }
      getCaretPosition(t, e, i) {
        var { xAlign: s, yAlign: a } = this,
          { caretSize: i, cornerRadius: n } = i,
          { topLeft: n, topRight: o, bottomLeft: r, bottomRight: l } = wi(n),
          { x: t, y: h } = t,
          { width: e, height: c } = e;
        let d, u, g, f, p, m;
        return (
          "center" === a
            ? ((p = h + c / 2),
              (m =
                "left" === s
                  ? ((d = t), (u = d - i), (f = p + i), p - i)
                  : ((d = t + e), (u = d + i), (f = p - i), p + i)),
              (g = d))
            : ((u =
                "left" === s
                  ? t + Math.max(n, r) + i
                  : "right" === s
                  ? t + e - Math.max(o, l) - i
                  : this.caretX),
              (g =
                "top" === a
                  ? ((f = h), (p = f - i), (d = u - i), u + i)
                  : ((f = h + c), (p = f + i), (d = u + i), u - i)),
              (m = f)),
          { x1: d, x2: u, x3: g, y1: f, y2: p, y3: m }
        );
      }
      drawTitle(t, e, i) {
        var s = this.title,
          a = s.length;
        let n, o, r;
        if (a) {
          const l = Di(i.rtl, this.x, this.width);
          for (
            t.x = Nn(this, i.titleAlign, i),
              e.textAlign = l.textAlign(i.titleAlign),
              e.textBaseline = "middle",
              n = z(i.titleFont),
              o = i.titleSpacing,
              e.fillStyle = i.titleColor,
              e.font = n.string,
              r = 0;
            r < a;
            ++r
          )
            e.fillText(s[r], l.x(t.x), t.y + n.lineHeight / 2),
              (t.y += n.lineHeight + o),
              r + 1 === a && (t.y += i.titleMarginBottom - o);
        }
      }
      _drawColorBox(t, e, i, s, a) {
        const n = this.labelColors[i],
          o = this.labelPointStyles[i],
          { boxHeight: r, boxWidth: l } = a,
          h = z(a.bodyFont),
          c = Nn(this, "left", a),
          d = s.x(c),
          u = r < h.lineHeight ? (h.lineHeight - r) / 2 : 0,
          g = e.y + u;
        if (a.usePointStyle) {
          const e = {
              radius: Math.min(l, r) / 2,
              pointStyle: o.pointStyle,
              rotation: o.rotation,
              borderWidth: 1,
            },
            i = s.leftForLtr(d, l) + l / 2,
            A = g + r / 2;
          (t.strokeStyle = a.multiKeyBackground),
            (t.fillStyle = a.multiKeyBackground),
            ze(t, e, i, A),
            (t.strokeStyle = n.borderColor),
            (t.fillStyle = n.backgroundColor),
            ze(t, e, i, A);
        } else {
          (t.lineWidth = A(n.borderWidth)
            ? Math.max(...Object.values(n.borderWidth))
            : n.borderWidth || 1),
            (t.strokeStyle = n.borderColor),
            t.setLineDash(n.borderDash || []),
            (t.lineDashOffset = n.borderDashOffset || 0);
          const e = s.leftForLtr(d, l),
            i = s.leftForLtr(s.xPlus(d, 1), l - 2),
            o = wi(n.borderRadius);
          Object.values(o).some((t) => 0 !== t)
            ? (t.beginPath(),
              (t.fillStyle = a.multiKeyBackground),
              je(t, { x: e, y: g, w: l, h: r, radius: o }),
              t.fill(),
              t.stroke(),
              (t.fillStyle = n.backgroundColor),
              t.beginPath(),
              je(t, { x: i, y: g + 1, w: l - 2, h: r - 2, radius: o }),
              t.fill())
            : ((t.fillStyle = a.multiKeyBackground),
              t.fillRect(e, g, l, r),
              t.strokeRect(e, g, l, r),
              (t.fillStyle = n.backgroundColor),
              t.fillRect(i, g + 1, l - 2, r - 2));
        }
        t.fillStyle = this.labelTextColors[i];
      }
      drawBody(e, i, t) {
        const s = this["body"],
          {
            bodySpacing: a,
            bodyAlign: n,
            displayColors: o,
            boxHeight: r,
            boxWidth: l,
            boxPadding: h,
          } = t,
          c = z(t.bodyFont);
        let d = c.lineHeight,
          u = 0;
        function g(t) {
          i.fillText(t, f.x(e.x + u), e.y + d / 2), (e.y += d + a);
        }
        const f = Di(t.rtl, this.x, this.width),
          p = f.textAlign(n);
        let m, b, x, v, _, y, M;
        for (
          i.textAlign = n,
            i.textBaseline = "middle",
            i.font = c.string,
            e.x = Nn(this, p, t),
            i.fillStyle = t.bodyColor,
            k(this.beforeBody, g),
            u =
              o && "right" !== p ? ("center" === n ? l / 2 + h : l + 2 + h) : 0,
            v = 0,
            y = s.length;
          v < y;
          ++v
        ) {
          for (
            m = s[v],
              b = this.labelTextColors[v],
              i.fillStyle = b,
              k(m.before, g),
              x = m.lines,
              o &&
                x.length &&
                (this._drawColorBox(i, e, v, f, t),
                (d = Math.max(c.lineHeight, r))),
              _ = 0,
              M = x.length;
            _ < M;
            ++_
          )
            g(x[_]), (d = c.lineHeight);
          k(m.after, g);
        }
        (u = 0), (d = c.lineHeight), k(this.afterBody, g), (e.y -= a);
      }
      drawFooter(t, e, i) {
        var s = this.footer,
          a = s.length;
        let n, o;
        if (a) {
          const r = Di(i.rtl, this.x, this.width);
          for (
            t.x = Nn(this, i.footerAlign, i),
              t.y += i.footerMarginTop,
              e.textAlign = r.textAlign(i.footerAlign),
              e.textBaseline = "middle",
              n = z(i.footerFont),
              e.fillStyle = i.footerColor,
              e.font = n.string,
              o = 0;
            o < a;
            ++o
          )
            e.fillText(s[o], r.x(t.x), t.y + n.lineHeight / 2),
              (t.y += n.lineHeight + i.footerSpacing);
        }
      }
      drawBackground(t, e, i, s) {
        var { xAlign: a, yAlign: n } = this,
          { x: o, y: r } = t,
          { width: l, height: h } = i,
          {
            topLeft: c,
            topRight: d,
            bottomLeft: u,
            bottomRight: g,
          } = wi(s.cornerRadius);
        (e.fillStyle = s.backgroundColor),
          (e.strokeStyle = s.borderColor),
          (e.lineWidth = s.borderWidth),
          e.beginPath(),
          e.moveTo(o + c, r),
          "top" === n && this.drawCaret(t, e, i, s),
          e.lineTo(o + l - d, r),
          e.quadraticCurveTo(o + l, r, o + l, r + d),
          "center" === n && "right" === a && this.drawCaret(t, e, i, s),
          e.lineTo(o + l, r + h - g),
          e.quadraticCurveTo(o + l, r + h, o + l - g, r + h),
          "bottom" === n && this.drawCaret(t, e, i, s),
          e.lineTo(o + u, r + h),
          e.quadraticCurveTo(o, r + h, o, r + h - u),
          "center" === n && "left" === a && this.drawCaret(t, e, i, s),
          e.lineTo(o, r + c),
          e.quadraticCurveTo(o, r, o + c, r),
          e.closePath(),
          e.fill(),
          0 < s.borderWidth && e.stroke();
      }
      _updateAnimationTarget(t) {
        const e = this.chart,
          i = this.$animations,
          s = i && i.x,
          a = i && i.y;
        if (s || a) {
          const i = zn[t.position].call(
            this,
            this._active,
            this._eventPosition
          );
          var n, o;
          i &&
            ((n = this._size = Vn(this, t)),
            (o = Wn(
              t,
              (o = Object.assign({}, i, this._size)),
              (t = Bn(e, t, o)),
              e
            )),
            (s._to === o.x && a._to === o.y) ||
              ((this.xAlign = t.xAlign),
              (this.yAlign = t.yAlign),
              (this.width = n.width),
              (this.height = n.height),
              (this.caretX = i.x),
              (this.caretY = i.y),
              this._resolveAnimations().update(this, o)));
        }
      }
      _willRender() {
        return !!this.opacity;
      }
      draw(t) {
        var e = this.options.setContext(this.getContext());
        let i = this.opacity;
        if (i) {
          this._updateAnimationTarget(e);
          const n = { width: this.width, height: this.height },
            o = { x: this.x, y: this.y };
          i = Math.abs(i) < 0.001 ? 0 : i;
          var s = I(e.padding),
            a =
              this.title.length ||
              this.beforeBody.length ||
              this.body.length ||
              this.afterBody.length ||
              this.footer.length;
          e.enabled &&
            a &&
            (t.save(),
            (t.globalAlpha = i),
            this.drawBackground(o, t, n, e),
            Ci(t, e.textDirection),
            (o.y += s.top),
            this.drawTitle(o, t, e),
            this.drawBody(o, t, e),
            this.drawFooter(o, t, e),
            Oi(t, e.textDirection),
            t.restore());
        }
      }
      getActiveElements() {
        return this._active || [];
      }
      setActiveElements(t, e) {
        var i = this._active,
          t = t.map(({ datasetIndex: t, index: e }) => {
            var i = this.chart.getDatasetMeta(t);
            if (i) return { datasetIndex: t, element: i.data[e], index: e };
            throw new Error("Cannot find a dataset at index " + t);
          }),
          i = !W(i, t),
          s = this._positionChanged(t, e);
        (i || s) &&
          ((this._active = t),
          (this._eventPosition = e),
          (this._ignoreReplayEvents = !0),
          this.update(!0));
      }
      handleEvent(t, e, i = !0) {
        if (e && this._ignoreReplayEvents) return !1;
        this._ignoreReplayEvents = !1;
        var s = this.options,
          a = this._active || [],
          i = this._getActiveElements(t, a, e, i),
          n = this._positionChanged(i, t),
          a = e || !W(i, a) || n;
        return (
          a &&
            ((this._active = i),
            (s.enabled || s.external) &&
              ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, e))),
          a
        );
      }
      _getActiveElements(t, e, i, s) {
        var a = this.options;
        if ("mouseout" === t.type) return [];
        if (!s) return e;
        const n = this.chart.getElementsAtEventForMode(t, a.mode, a, i);
        return a.reverse && n.reverse(), n;
      }
      _positionChanged(t, e) {
        var { caretX: i, caretY: s, options: a } = this,
          a = zn[a.position].call(this, t, e);
        return !1 !== a && (i !== a.x || s !== a.y);
      }
    }
    var Un = {
      id: "tooltip",
      _element: $n,
      positioners: zn,
      afterInit(t, e, i) {
        i && (t.tooltip = new $n({ chart: t, options: i }));
      },
      beforeUpdate(t, e, i) {
        t.tooltip && t.tooltip.initialize(i);
      },
      reset(t, e, i) {
        t.tooltip && t.tooltip.initialize(i);
      },
      afterDraw(t) {
        const e = t.tooltip;
        var i;
        e &&
          e._willRender() &&
          !(i = { tooltip: e }) !==
            t.notifyPlugins("beforeTooltipDraw", { ...i, cancelable: !0 }) &&
          (e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i));
      },
      afterEvent(t, e) {
        var i;
        t.tooltip &&
          ((i = e.replay),
          t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0));
      },
      defaults: {
        enabled: !0,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: { weight: "bold" },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: { weight: "bold" },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (t, e) => e.bodyFont.size,
        boxWidth: (t, e) => e.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: !0,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: { duration: 400, easing: "easeOutQuart" },
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "width", "height", "caretX", "caretY"],
          },
          opacity: { easing: "linear", duration: 200 },
        },
        callbacks: Yn,
      },
      defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font",
      },
      descriptors: {
        _scriptable: (t) =>
          "filter" !== t && "itemSort" !== t && "external" !== t,
        _indexable: !1,
        callbacks: { _scriptable: !1, _indexable: !1 },
        animation: { _fallback: !1 },
        animations: { _fallback: "animation" },
      },
      additionalOptionScopes: ["interaction"],
    };
    return (
      i.register(ba, an, Ra, s),
      (i.helpers = { ...Fi }),
      (i._adapters = ha),
      (i.Animation = bs),
      (i.Animations = xs),
      (i.animator = l),
      (i.controllers = b.controllers.items),
      (i.DatasetController = Os),
      (i.Element = e),
      (i.elements = Ra),
      (i.Interaction = Hi),
      (i.layouts = a),
      (i.platforms = Oe),
      (i.Scale = zs),
      (i.Ticks = ge),
      Object.assign(i, ba, an, Ra, s, Oe),
      (i.Chart = i),
      "undefined" != typeof window && (window.Chart = i),
      i
    );
  });

  let tmpl = document.createElement("template");
  tmpl.innerHTML = `
    <style>
      .widget-wrapper {
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #fff;
        border-radius: 15px;
        background: #fff;
      }

      .widget-wrapper h2 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .chart-wrapper {
        display: block !important;
        height: 370px !important;
      }

    </style>

    <div class="widget-wrapper">
      <h2>Company Sales Revenue</h2>
      <div class="chart-wrapper">
        <canvas id="company-sales-revenue-chart"></canvas>
      </div>
    </div>
    `;

  class PerformanceHelp extends HTMLElement {
    template = null;
    chart = null;
    chartColors = { purple: "rgba(70, 49, 238, 0.5)",
                    pink: "rgba(255, 70, 118, 0.5)",
                    blue: "rgba(0, 82, 255, 0.6)"
                  };

    constructor() {
      super();
      this.init();
    }

    init() {
      let shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
      this.template = shadowRoot;
    }

    onCustomWidgetAfterUpdate(changedProperties) {
      this.renderChart();

      console.log(changedProperties);
      this.updateChartData();
    }

    updateChartData() {
      if (!this.dataSet || !this.dataSet.data) return;

      const data = this.getData();
      this.chart.data.datasets[0].data = data.values;
      this.chart.data.datasets[1].data = data.values;
      this.chart.data.datasets[2].data = data.values;
      this.chart.data.labels = data.labels;
      this.chart.update();
    }

    getData() {
      const dataSet = this.dataSet.data
        // .sort((a, b) => b.measures_0.raw - a.measures_0.raw)
        // .slice(0, 10);
        // const dataSet1 = this.dataSet.data
        // .sort((a, b) => b.measures_1.raw - a.measures_1.raw)

      const labels = [];
      const values = [];
      const values1 = [];

      dataSet.forEach((el) => {
        labels.push(el.dimensions_0.label.split("_").join(" "));
        values.push(el.measures_0.raw);
        values1.push(el.measures_1.raw);
      });

      return {
        labels,
        values,
        values1
      };
    }

    renderChart() {
      if (this.chart) return;

      if (this.dataSet && this.dataSet.data) {
        console.log(this.dataSet.data);
        const data = this.getData();
        console.log("data",data)

        const chartElement = this.template
          .querySelector("canvas")
          .getContext("2d");

        this.chart = new Chart(chartElement, {
          type: "bar",
          data: {
            labels: data.labels,
            datasets: [
              {
                label: '2018',
                data: data.values,
                borderColor: this.chartColors.purple,
                backgroundColor: this.chartColors.purple,
                order: 1,
                borderRadius: 6,
              },
              {
                label: '2019',
                data: data.values1,
                borderColor: this.chartColors.pink,
                backgroundColor: this.chartColors.pink,
                order: 1,
                borderRadius: 6,
              },
              {
                label: 'Change',
                data: data.values,
                borderColor: this.chartColors.blue,
                backgroundColor: this.chartColors.blue,
                type: 'line',
                order: 0,
                tension: 0.4
              },
              
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "x",
            plugins: {
              title: {
                display: false,
              },
              legend: {
                display: false,
              },
            },
          },
        });
      }
    }
  }

  customElements.define("company-sales-revenue", PerformanceHelp);
})();
