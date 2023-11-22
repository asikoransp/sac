"use strict";
// @ts-nocheck
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chartJs = void 0;
var chartJs = function () {
    return function () {
        !(function (t, e) {
            "object" == typeof exports && "undefined" != typeof module
                ? (module.exports = e())
                : "function" == typeof define && define.amd
                    ? define(e)
                    : ((t =
                        "undefined" != typeof globalThis ? globalThis : t || self).Chart =
                        e());
        })(this, function () {
            "use strict";
            var _b, _c, _d, _f, _g, _h, _j, _k, _l, _m, _o;
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
            function t() { }
            var F = (function () {
                var t = 0;
                return function () { return t++; };
            })();
            function P(t) {
                return null == t;
            }
            function O(t) {
                if (Array.isArray && Array.isArray(t))
                    return !0;
                var e = Object.prototype.toString.call(t);
                return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
            }
            function A(t) {
                return (null !== t && "[object Object]" === Object.prototype.toString.call(t));
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
            var V = function (t, e) {
                return "string" == typeof t && t.endsWith("%")
                    ? parseFloat(t) / 100
                    : +t / e;
            }, B = function (t, e) {
                return "string" == typeof t && t.endsWith("%")
                    ? (parseFloat(t) / 100) * e
                    : +t;
            };
            function d(t, e, i) {
                if (t && "function" == typeof t.call)
                    return t.apply(i, e);
            }
            function k(t, e, i, s) {
                var a, n, o;
                if (O(t))
                    if (((n = t.length), s))
                        for (a = n - 1; 0 <= a; a--)
                            e.call(i, t[a], a);
                    else
                        for (a = 0; a < n; a++)
                            e.call(i, t[a], a);
                else if (A(t))
                    for (o = Object.keys(t), n = o.length, a = 0; a < n; a++)
                        e.call(i, t[o[a]], o[a]);
            }
            function W(t, e) {
                var i, s, a, n;
                if (!t || !e || t.length !== e.length)
                    return !1;
                for (i = 0, s = t.length; i < s; ++i)
                    if (((a = t[i]),
                        (n = e[i]),
                        a.datasetIndex !== n.datasetIndex || a.index !== n.index))
                        return !1;
                return !0;
            }
            function N(e) {
                if (O(e))
                    return e.map(N);
                if (A(e)) {
                    var i_1 = Object.create(null), s_1 = Object.keys(e), a_1 = s_1.length;
                    var t_1 = 0;
                    for (; t_1 < a_1; ++t_1)
                        i_1[s_1[t_1]] = N(e[s_1[t_1]]);
                    return i_1;
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
                var a, e = O(t) ? t : [t], n = e.length;
                if (!A(i))
                    return i;
                var o = (s = s || {}).merger || j;
                for (var t_2 = 0; t_2 < n; ++t_2)
                    if (A((a = e[t_2]))) {
                        var O_1 = Object.keys(a);
                        for (var t_3 = 0, e_1 = O_1.length; t_3 < e_1; ++t_3)
                            o(O_1[t_3], i, a, s);
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
            var X = { "": function (t) { return t; }, x: function (t) { return t.x; }, y: function (t) { return t.y; } };
            function q(t) {
                var e = t.split("."), i = [];
                var s = "";
                for (var _b = 0, e_2 = e; _b < e_2.length; _b++) {
                    var t_4 = e_2[_b];
                    (s += t_4),
                        (s = s.endsWith("\\") ? s.slice(0, -1) + "." : (i.push(s), ""));
                }
                return i;
            }
            function m(t, e) {
                var i = X[e] ||
                    (X[e] = (function () {
                        var i = q(e);
                        return function (t) {
                            for (var _b = 0, i_2 = i; _b < i_2.length; _b++) {
                                var e_3 = i_2[_b];
                                if ("" === e_3)
                                    break;
                                t = t && t[e_3];
                            }
                            return t;
                        };
                    })());
                return i(t);
            }
            function K(t) {
                return t.charAt(0).toUpperCase() + t.slice(1);
            }
            var G = function (t) { return void 0 !== t; }, u = function (t) { return "function" == typeof t; }, Z = function (t, e) {
                if (t.size !== e.size)
                    return !1;
                for (var _b = 0, t_5 = t; _b < t_5.length; _b++) {
                    var i_3 = t_5[_b];
                    if (!e.has(i_3))
                        return !1;
                }
                return !0;
            };
            function J(t) {
                return ("mouseup" === t.type || "click" === t.type || "contextmenu" === t.type);
            }
            var S = Math.PI, _ = 2 * S, Q = _ + S, tt = Number.POSITIVE_INFINITY, et = S / 180, D = S / 2, it = S / 4, st = (2 * S) / 3, r = Math.log10, y = Math.sign;
            function at(t, e, i) {
                return Math.abs(t - e) < i;
            }
            function nt(t) {
                var e = Math.round(t), e = ((t = at(t, e, t / 1e3) ? e : t), Math.pow(10, Math.floor(r(t)))), t = t / e;
                return (t <= 1 ? 1 : t <= 2 ? 2 : t <= 5 ? 5 : 10) * e;
            }
            function ot(t) {
                var e = [], i = Math.sqrt(t);
                var s;
                for (s = 1; s < i; s++)
                    t % s == 0 && (e.push(s), e.push(t / s));
                return i === (0 | i) && e.push(i), e.sort(function (t, e) { return t - e; }).pop(), e;
            }
            function rt(t) {
                return !isNaN(parseFloat(t)) && isFinite(t);
            }
            function lt(t, e) {
                var i = Math.round(t);
                return i - e <= t && t <= i + e;
            }
            function ht(t, e, i) {
                var s, a, n;
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
                    var t_6 = 1, e_4 = 0;
                    for (; Math.round(i * t_6) / t_6 !== i;)
                        (t_6 *= 10), e_4++;
                    return e_4;
                }
            }
            function ut(t, e) {
                var i = e.x - t.x, e = e.y - t.y, t = Math.sqrt(i * i + e * e);
                var s = Math.atan2(e, i);
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
                var t = v(t), e = v(e), i = v(i), a = v(e - t), n = v(i - t), o = v(t - e), r = v(t - i);
                return t === e || t === i || (s && e === i) || (n < a && o < r);
            }
            function C(t, e, i) {
                return Math.max(e, Math.min(i, t));
            }
            function mt(t) {
                return C(t, -32768, 32767);
            }
            function c(t, e, i, s) {
                if (s === void 0) { s = 1e-6; }
                return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
            }
            function bt(e, i, t) {
                t = t || (function (t) { return e[t] < i; });
                var s, a = e.length - 1, n = 0;
                for (; 1 < a - n;)
                    t((s = (n + a) >> 1)) ? (n = s) : (a = s);
                return { lo: n, hi: a };
            }
            var f = function (i, s, a, t) {
                return bt(i, a, t
                    ? function (t) {
                        var e = i[t][s];
                        return e < a || (e === a && i[t + 1][s] === a);
                    }
                    : function (t) { return i[t][s] < a; });
            }, xt = function (e, i, s) { return bt(e, s, function (t) { return e[t][i] >= s; }); };
            function vt(t, e, i) {
                var s = 0, a = t.length;
                for (; s < a && t[s] < e;)
                    s++;
                for (; a > s && t[a - 1] > i;)
                    a--;
                return 0 < s || a < t.length ? t.slice(s, a) : t;
            }
            var _t = ["push", "pop", "shift", "splice", "unshift"];
            function yt(a, t) {
                a._chartjs
                    ? a._chartjs.listeners.push(t)
                    : (Object.defineProperty(a, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: { listeners: [t] },
                    }),
                        _t.forEach(function (t) {
                            var i = "_onData" + K(t), s = a[t];
                            Object.defineProperty(a, t, {
                                configurable: !0,
                                enumerable: !1,
                                value: function () {
                                    var e = [];
                                    for (var _b = 0; _b < arguments.length; _b++) {
                                        e[_b] = arguments[_b];
                                    }
                                    var t = s.apply(this, e);
                                    return (a._chartjs.listeners.forEach(function (t) {
                                        "function" == typeof t[i] && t[i].apply(t, e);
                                    }),
                                        t);
                                },
                            });
                        }));
            }
            function Mt(e, t) {
                var i = e._chartjs;
                if (i) {
                    var s_2 = i.listeners, a_2 = s_2.indexOf(t);
                    -1 !== a_2 && s_2.splice(a_2, 1),
                        0 < s_2.length ||
                            (_t.forEach(function (t) {
                                delete e[t];
                            }),
                                delete e._chartjs);
                }
            }
            function wt(t) {
                var e = new Set(t);
                return e.size === t.length ? t : Array.from(e);
            }
            var kt = "undefined" == typeof window
                ? function (t) {
                    return t();
                }
                : window.requestAnimationFrame;
            function St(e, i) {
                var s, a = !1;
                return function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    (s = t),
                        a ||
                            ((a = !0),
                                kt.call(window, function () {
                                    (a = !1), e.apply(i, s);
                                }));
                };
            }
            function Pt(e, i) {
                var s;
                return function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    return (i ? (clearTimeout(s), (s = setTimeout(e, i, t))) : e.apply(this, t),
                        i);
                };
            }
            var Dt = function (t) {
                return "start" === t ? "left" : "end" === t ? "right" : "center";
            }, E = function (t, e, i) { return ("start" === t ? e : "end" === t ? i : (e + i) / 2); }, Ct = function (t, e, i, s) {
                return t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e;
            };
            function Ot(t, e, i) {
                var s = e.length;
                var a = 0, n = s;
                if (t._sorted) {
                    var o_1 = t.iScale, r_1 = t._parsed, l_1 = o_1.axis, _b = o_1.getUserBounds(), h_1 = _b.min, c_1 = _b.max, d_1 = _b.minDefined, u_1 = _b.maxDefined;
                    d_1 &&
                        (a = C(Math.min(f(r_1, l_1, h_1).lo, i ? s : f(e, l_1, o_1.getPixelForValue(h_1)).lo), 0, s - 1)),
                        (n = u_1
                            ? C(Math.max(f(r_1, o_1.axis, c_1, !0).hi + 1, i ? 0 : f(e, l_1, o_1.getPixelForValue(c_1), !0).hi + 1), a, s) - a
                            : s - a);
                }
                return { start: a, count: n };
            }
            function At(t) {
                var e = t.xScale, i = t.yScale, s = t._scaleRanges, a = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
                if (!s)
                    return (t._scaleRanges = a), !0;
                t =
                    s.xmin !== e.min ||
                        s.xmax !== e.max ||
                        s.ymin !== i.min ||
                        s.ymax !== i.max;
                return Object.assign(s, a), t;
            }
            var l = new (/** @class */ (function () {
                function class_1() {
                    (this._request = null),
                        (this._charts = new Map()),
                        (this._running = !1),
                        (this._lastDate = void 0);
                }
                class_1.prototype._notify = function (e, i, s, t) {
                    var a = i.listeners[t], n = i.duration;
                    a.forEach(function (t) {
                        return t({
                            chart: e,
                            initial: i.initial,
                            numSteps: n,
                            currentStep: Math.min(s - i.start, n),
                        });
                    });
                };
                class_1.prototype._refresh = function () {
                    var _this = this;
                    this._request ||
                        ((this._running = !0),
                            (this._request = kt.call(window, function () {
                                _this._update(),
                                    (_this._request = null),
                                    _this._running && _this._refresh();
                            })));
                };
                class_1.prototype._update = function (o) {
                    var _this = this;
                    if (o === void 0) { o = Date.now(); }
                    var r = 0;
                    this._charts.forEach(function (s, a) {
                        if (s.running && s.items.length) {
                            var n_1 = s.items;
                            var t_7, e_5 = n_1.length - 1, i_4 = !1;
                            for (; 0 <= e_5; --e_5)
                                (t_7 = n_1[e_5])._active
                                    ? (t_7._total > s.duration && (s.duration = t_7._total),
                                        t_7.tick(o),
                                        (i_4 = !0))
                                    : ((n_1[e_5] = n_1[n_1.length - 1]), n_1.pop());
                            i_4 && (a.draw(), _this._notify(a, s, o, "progress")),
                                n_1.length ||
                                    ((s.running = !1),
                                        _this._notify(a, s, o, "complete"),
                                        (s.initial = !1)),
                                (r += n_1.length);
                        }
                    }),
                        (this._lastDate = o),
                        0 === r && (this._running = !1);
                };
                class_1.prototype._getAnims = function (t) {
                    var e = this._charts;
                    var i = e.get(t);
                    return (i ||
                        ((i = {
                            running: !1,
                            initial: !0,
                            items: [],
                            listeners: { complete: [], progress: [] },
                        }),
                            e.set(t, i)),
                        i);
                };
                class_1.prototype.listen = function (t, e, i) {
                    this._getAnims(t).listeners[e].push(i);
                };
                class_1.prototype.add = function (t, e) {
                    var _b;
                    e && e.length && (_b = this._getAnims(t).items).push.apply(_b, e);
                };
                class_1.prototype.has = function (t) {
                    return 0 < this._getAnims(t).items.length;
                };
                class_1.prototype.start = function (t) {
                    var e = this._charts.get(t);
                    e &&
                        ((e.running = !0),
                            (e.start = Date.now()),
                            (e.duration = e.items.reduce(function (t, e) { return Math.max(t, e._duration); }, 0)),
                            this._refresh());
                };
                class_1.prototype.running = function (t) {
                    if (!this._running)
                        return !1;
                    t = this._charts.get(t);
                    return !!(t && t.running && t.items.length);
                };
                class_1.prototype.stop = function (e) {
                    var i = this._charts.get(e);
                    if (i && i.items.length) {
                        var s_3 = i.items;
                        var t_8 = s_3.length - 1;
                        for (; 0 <= t_8; --t_8)
                            s_3[t_8].cancel();
                        (i.items = []), this._notify(e, i, Date.now(), "complete");
                    }
                };
                class_1.prototype.remove = function (t) {
                    return this._charts.delete(t);
                };
                return class_1;
            }()))();
            function Tt(t) {
                return (t + 0.5) | 0;
            }
            var Lt = function (t, e, i) { return Math.max(Math.min(t, i), e); };
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
            var n = {
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
            }, zt = __spreadArray([], "0123456789ABCDEF", true), Ft = function (t) { return zt[15 & t]; }, Vt = function (t) { return zt[(240 & t) >> 4] + zt[15 & t]; }, Bt = function (t) { return (240 & t) >> 4 == (15 & t); };
            var Wt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
            function Nt(i, t, s) {
                var a = t * Math.min(s, 1 - s), e = function (t, e) {
                    if (e === void 0) { e = (t + i / 30) % 12; }
                    return s - a * Math.max(Math.min(e - 3, 9 - e, 1), -1);
                };
                return [e(0), e(8), e(4)];
            }
            function Ht(i, s, a) {
                i = function (t, e) {
                    if (e === void 0) { e = (t + i / 60) % 6; }
                    return a - a * s * Math.max(Math.min(e, 4 - e, 1), 0);
                };
                return [i(5), i(3), i(1)];
            }
            function jt(t, e, i) {
                var s = Nt(t, 1, 0.5);
                var a;
                for (1 < e + i && ((e *= a = 1 / (e + i)), (i *= a)), a = 0; a < 3; a++)
                    (s[a] *= 1 - e - i), (s[a] += e);
                return s;
            }
            function Yt(t) {
                var e = t.r / 255, i = t.g / 255, t = t.b / 255, s = Math.max(e, i, t), a = Math.min(e, i, t), n = (s + a) / 2;
                var o, r, l;
                return (s !== a &&
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
                    [0 | o, r || 0, n]);
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
            var qt = {
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
            }, Kt = {
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
            var Gt;
            var Zt = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/, Jt = function (t) {
                return t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055;
            }, Qt = function (t) {
                return t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
            };
            function te(e, i, s) {
                if (e) {
                    var t_9 = Yt(e);
                    (t_9[i] = Math.max(0, Math.min(t_9[i] + t_9[i] * s, 0 === i ? 360 : 1))),
                        (t_9 = Ut(t_9)),
                        (e.r = t_9[0]),
                        (e.g = t_9[1]),
                        (e.b = t_9[2]);
                }
            }
            function ee(t, e) {
                return t && Object.assign(e || {}, t);
            }
            function ie(t) {
                var e = { r: 0, g: 0, b: 0, a: 255 };
                return (Array.isArray(t)
                    ? 3 <= t.length &&
                        ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
                            3 < t.length && (e.a = Rt(t[3])))
                    : ((e = ee(t, { r: 0, g: 0, b: 0, a: 1 })).a = Rt(e.a)),
                    e);
            }
            function se(t) {
                return ("r" === t.charAt(0)
                    ? function (t) {
                        var e = Zt.exec(t);
                        var i, s, a, n = 255;
                        if (e) {
                            if (e[7] !== i) {
                                var t_10 = +e[7];
                                n = e[8] ? Et(t_10) : Lt(255 * t_10, 0, 255);
                            }
                            return ((i = +e[1]),
                                (s = +e[3]),
                                (a = +e[5]),
                                (i = 255 & (e[2] ? Et(i) : Lt(i, 0, 255))),
                                (s = 255 & (e[4] ? Et(s) : Lt(s, 0, 255))),
                                (a = 255 & (e[6] ? Et(a) : Lt(a, 0, 255))),
                                { r: i, g: s, b: a, a: n });
                        }
                    }
                    : function (t) {
                        var e, i, s, t = Wt.exec(t);
                        var a, n = 255;
                        if (t)
                            return (void 0 !== t[5] && (n = (t[6] ? Et : Rt)(+t[5])),
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
                                });
                    })(t);
            }
            var ae = /** @class */ (function () {
                function ae(t) {
                    if (t instanceof ae)
                        return t;
                    var e, i, s = typeof t;
                    var a;
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
                                                    var t = {}, e = Object.keys(Kt), i = Object.keys(qt);
                                                    var s, a, n, o, r;
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
                Object.defineProperty(ae.prototype, "valid", {
                    get: function () {
                        return this._valid;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(ae.prototype, "rgb", {
                    get: function () {
                        var t = ee(this._rgb);
                        return t && (t.a = o(t.a)), t;
                    },
                    set: function (t) {
                        this._rgb = ie(t);
                    },
                    enumerable: false,
                    configurable: true
                });
                ae.prototype.rgbString = function () {
                    return this._valid
                        ? (t = this._rgb) &&
                            (t.a < 255
                                ? "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(o(t.a), ")")
                                : "rgb(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ")"))
                        : void 0;
                    var t;
                };
                ae.prototype.hexString = function () {
                    return this._valid
                        ? ((t = this._rgb),
                            (e = t),
                            (e = Bt(e.r) && Bt(e.g) && Bt(e.b) && Bt(e.a) ? Ft : Vt),
                            t
                                ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t = t.a) < 255 ? e(t) : "")
                                : void 0)
                        : void 0;
                    var t, e;
                };
                ae.prototype.hslString = function () {
                    if (this._valid) {
                        var t, e, i, s = this._rgb;
                        if (s)
                            return ((i = Yt(s)),
                                (t = i[0]),
                                (e = It(i[1])),
                                (i = It(i[2])),
                                s.a < 255
                                    ? "hsla(".concat(t, ", ").concat(e, "%, ").concat(i, "%, ").concat(o(s.a), ")")
                                    : "hsl(".concat(t, ", ").concat(e, "%, ").concat(i, "%)"));
                    }
                };
                ae.prototype.mix = function (t, e) {
                    if (t) {
                        var s_4 = this.rgb, a_3 = t.rgb;
                        var t = void 0 === e ? 0.5 : e, e = 2 * t - 1, i = s_4.a - a_3.a, e = (1 + (e * i == -1 ? e : (e + i) / (1 + e * i))) / 2, i = 1 - e;
                        (s_4.r = 255 & (e * s_4.r + i * a_3.r + 0.5)),
                            (s_4.g = 255 & (e * s_4.g + i * a_3.g + 0.5)),
                            (s_4.b = 255 & (e * s_4.b + i * a_3.b + 0.5)),
                            (s_4.a = t * s_4.a + (1 - t) * a_3.a),
                            (this.rgb = s_4);
                    }
                    return this;
                };
                ae.prototype.interpolate = function (t, e) {
                    return (t &&
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
                        this);
                    var i, s, a, n;
                };
                ae.prototype.clone = function () {
                    return new ae(this.rgb);
                };
                ae.prototype.alpha = function (t) {
                    return (this._rgb.a = Rt(t)), this;
                };
                ae.prototype.clearer = function (t) {
                    return (this._rgb.a *= 1 - t), this;
                };
                ae.prototype.greyscale = function () {
                    var t = this._rgb, e = Tt(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
                    return (t.r = t.g = t.b = e), this;
                };
                ae.prototype.opaquer = function (t) {
                    return (this._rgb.a *= 1 + t), this;
                };
                ae.prototype.negate = function () {
                    var t = this._rgb;
                    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
                };
                ae.prototype.lighten = function (t) {
                    return te(this._rgb, 2, t), this;
                };
                ae.prototype.darken = function (t) {
                    return te(this._rgb, 2, -t), this;
                };
                ae.prototype.saturate = function (t) {
                    return te(this._rgb, 1, t), this;
                };
                ae.prototype.desaturate = function (t) {
                    return te(this._rgb, 1, -t), this;
                };
                ae.prototype.rotate = function (t) {
                    return ((e = this._rgb),
                        (t = t),
                        ((i = Yt(e))[0] = Xt(i[0] + t)),
                        (i = Ut(i)),
                        (e.r = i[0]),
                        (e.g = i[1]),
                        (e.b = i[2]),
                        this);
                    var e, i;
                };
                return ae;
            }());
            function ne(t) {
                return (!(!t || "object" != typeof t) &&
                    ("[object CanvasPattern]" === (t = t.toString()) ||
                        "[object CanvasGradient]" === t));
            }
            function oe(t) {
                return ne(t) ? t : new ae(t);
            }
            function re(t) {
                return ne(t) ? t : new ae(t).saturate(0.5).darken(0.1).hexString();
            }
            var le = ["x", "y", "borderWidth", "radius", "tension"], he = ["color", "borderColor", "backgroundColor"], ce = new Map();
            function de(t, e, a) {
                return (function (t, e) {
                    e = a || {};
                    var i = t + JSON.stringify(e);
                    var s = ce.get(i);
                    return s || ((s = new Intl.NumberFormat(t, e)), ce.set(i, s)), s;
                })(e).format(t);
            }
            var ue = {
                values: function (t) { return (O(t) ? t : "" + t); },
                numeric: function (t, e, i) {
                    if (0 === t)
                        return "0";
                    var s = this.chart.options.locale;
                    var a, n = t;
                    if (1 < i.length) {
                        var e_6 = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
                        (e_6 < 1e-4 || 1e15 < e_6) && (a = "scientific"),
                            (n = (function (t) {
                                var e = 3 < i.length
                                    ? i[2].value - i[1].value
                                    : i[1].value - i[0].value;
                                return (e =
                                    1 <= Math.abs(e) && t !== Math.floor(t)
                                        ? t - Math.floor(t)
                                        : e);
                            })(t));
                    }
                    var o = r(Math.abs(n)), o = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0), o = {
                        notation: a,
                        minimumFractionDigits: o,
                        maximumFractionDigits: o,
                    };
                    return Object.assign(o, this.options.ticks.format), de(t, s, o);
                },
                logarithmic: function (t, e, i) {
                    if (0 === t)
                        return "0";
                    var s = i[e].significand || t / Math.pow(10, Math.floor(r(t)));
                    return [1, 2, 3, 5, 10, 15].includes(s) || e > 0.8 * i.length
                        ? ue.numeric.call(this, t, e, i)
                        : "";
                },
            };
            var ge = { formatters: ue };
            var fe = Object.create(null), pe = Object.create(null);
            function me(i, t) {
                if (!t)
                    return i;
                var s = t.split(".");
                for (var t_11 = 0, e_7 = s.length; t_11 < e_7; ++t_11) {
                    var a = s[t_11];
                    i = i[a] || (i[a] = Object.create(null));
                }
                return i;
            }
            function be(t, e, i) {
                return "string" == typeof e ? Y(me(t, e), i) : Y(me(t, ""), e);
            }
            var R = new (/** @class */ (function () {
                function class_2(t, e) {
                    (this.animation = void 0),
                        (this.backgroundColor = "rgba(0,0,0,0.1)"),
                        (this.borderColor = "rgba(0,0,0,0.1)"),
                        (this.color = "#666"),
                        (this.datasets = {}),
                        (this.devicePixelRatio = function (t) {
                            return t.chart.platform.getDevicePixelRatio();
                        }),
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
                        (this.hoverBackgroundColor = function (t, e) { return re(e.backgroundColor); }),
                        (this.hoverBorderColor = function (t, e) { return re(e.borderColor); }),
                        (this.hoverColor = function (t, e) { return re(e.color); }),
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
                class_2.prototype.set = function (t, e) {
                    return be(this, t, e);
                };
                class_2.prototype.get = function (t) {
                    return me(this, t);
                };
                class_2.prototype.describe = function (t, e) {
                    return be(pe, t, e);
                };
                class_2.prototype.override = function (t, e) {
                    return be(fe, t, e);
                };
                class_2.prototype.route = function (t, e, i, s) {
                    var _b;
                    var a = me(this, t), n = me(this, i), o = "_" + e;
                    Object.defineProperties(a, (_b = {},
                        _b[o] = { value: a[e], writable: !0 },
                        _b[e] = {
                            enumerable: !0,
                            get: function () {
                                var t = this[o], e = n[s];
                                return A(t) ? Object.assign({}, e, t) : T(t, e);
                            },
                            set: function (t) {
                                this[o] = t;
                            },
                        },
                        _b));
                };
                class_2.prototype.apply = function (t) {
                    var _this = this;
                    t.forEach(function (t) { return t(_this); });
                };
                return class_2;
            }()))({
                _scriptable: function (t) { return !t.startsWith("on"); },
                _indexable: function (t) { return "events" !== t; },
                hover: { _fallback: "interaction" },
                interaction: { _scriptable: !1, _indexable: !1 },
            }, [
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
                            _scriptable: function (t) {
                                return "onProgress" !== t && "onComplete" !== t && "fn" !== t;
                            },
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
                                        fn: function (t) { return 0 | t; },
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
                            tickWidth: function (t, e) { return e.lineWidth; },
                            tickColor: function (t, e) { return e.color; },
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
                            _scriptable: function (t) {
                                return !t.startsWith("before") &&
                                    !t.startsWith("after") &&
                                    "callback" !== t &&
                                    "parser" !== t;
                            },
                            _indexable: function (t) {
                                return "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t;
                            },
                        }),
                        t.describe("scales", { _fallback: "scale" }),
                        t.describe("scale.ticks", {
                            _scriptable: function (t) { return "backdropPadding" !== t && "callback" !== t; },
                            _indexable: function (t) { return "backdropPadding" !== t; },
                        });
                },
            ]);
            function xe() {
                return "undefined" != typeof window && "undefined" != typeof document;
            }
            function ve(t) {
                var e = t.parentNode;
                return (e = e && "[object ShadowRoot]" === e.toString() ? e.host : e);
            }
            function _e(t, e, i) {
                var s;
                return ("string" == typeof t
                    ? ((s = parseInt(t, 10)),
                        -1 !== t.indexOf("%") && (s = (s / 100) * e.parentNode[i]))
                    : (s = t),
                    s);
            }
            var ye = function (t) { return t.ownerDocument.defaultView.getComputedStyle(t, null); };
            function Me(t, e) {
                return ye(t).getPropertyValue(e);
            }
            var we = ["top", "right", "bottom", "left"];
            function ke(e, i, s) {
                var a = {};
                s = s ? "-" + s : "";
                for (var t_12 = 0; t_12 < 4; t_12++) {
                    var n = we[t_12];
                    a[n] = parseFloat(e[i + "-" + n + s]) || 0;
                }
                return (a.width = a.left + a.right), (a.height = a.top + a.bottom), a;
            }
            function Se(t, e) {
                if ("native" in t)
                    return t;
                var i = e.canvas, s = e.currentDevicePixelRatio, a = ye(i), n = "border-box" === a.boxSizing, o = ke(a, "padding"), a = ke(a, "border", "width"), _b = (function (t, e) {
                    var i, s = t.touches, s = s && s.length ? s[0] : t, a = s.offsetX, n = s.offsetY;
                    var o, r, l = !1;
                    if (((i = n),
                        (t = t.target),
                        !(0 < a || 0 < i) || (t && t.shadowRoot))) {
                        var t_13 = e.getBoundingClientRect();
                        (o = s.clientX - t_13.left), (r = s.clientY - t_13.top), (l = !0);
                    }
                    else
                        (o = a), (r = n);
                    return { x: o, y: r, box: l };
                })(t, i), t = _b.x, r = _b.y, l = _b.box, h = o.left + (l && a.left), l = o.top + (l && a.top);
                var c = e.width, d = e.height;
                return (n && ((c -= o.width + a.width), (d -= o.height + a.height)),
                    {
                        x: Math.round((((t - h) / c) * i.width) / s),
                        y: Math.round((((r - l) / d) * i.height) / s),
                    });
            }
            var Pe = function (t) { return Math.round(10 * t) / 10; };
            function De(t, e, i, s) {
                var a = ye(t), n = ke(a, "margin"), o = _e(a.maxWidth, t, "clientWidth") || tt, r = _e(a.maxHeight, t, "clientHeight") || tt, t = (function (t, e, i) {
                    var s, a;
                    if (void 0 === e || void 0 === i) {
                        var n_2 = ve(t);
                        if (n_2) {
                            var t_14 = n_2.getBoundingClientRect(), o_2 = ye(n_2), r_2 = ke(o_2, "border", "width"), l_2 = ke(o_2, "padding");
                            (e = t_14.width - l_2.width - r_2.width),
                                (i = t_14.height - l_2.height - r_2.height),
                                (s = _e(o_2.maxWidth, n_2, "clientWidth")),
                                (a = _e(o_2.maxHeight, n_2, "clientHeight"));
                        }
                        else
                            (e = t.clientWidth), (i = t.clientHeight);
                    }
                    return {
                        width: e,
                        height: i,
                        maxWidth: s || tt,
                        maxHeight: a || tt,
                    };
                })(t, e, i);
                var l = t.width, h = t.height;
                if ("content-box" === a.boxSizing) {
                    var t_15 = ke(a, "border", "width"), e_8 = ke(a, "padding");
                    (l -= e_8.width + t_15.width), (h -= e_8.height + t_15.height);
                }
                return ((l = Math.max(0, l - n.width)),
                    (h = Math.max(0, s ? l / s : h - n.height)),
                    (l = Pe(Math.min(l, o, t.maxWidth))),
                    (h = Pe(Math.min(h, r, t.maxHeight))),
                    l && !h && (h = Pe(l / 2)),
                    (void 0 !== e || void 0 !== i) &&
                        s &&
                        t.height &&
                        h > t.height &&
                        ((h = t.height), (l = Pe(Math.floor(h * s)))),
                    { width: l, height: h });
            }
            function Ce(t, e, i) {
                var e = e || 1, s = Math.floor(t.height * e), a = Math.floor(t.width * e);
                (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
                var n = t.canvas;
                return (n.style &&
                    (i || (!n.style.height && !n.style.width)) &&
                    ((n.style.height = t.height + "px"),
                        (n.style.width = t.width + "px")),
                    (t.currentDevicePixelRatio !== e ||
                        n.height !== s ||
                        n.width !== a) &&
                        ((t.currentDevicePixelRatio = e),
                            (n.height = s),
                            (n.width = a),
                            t.ctx.setTransform(e, 0, 0, e, 0, 0),
                            !0));
            }
            var Oe = (function () {
                var t = !1;
                try {
                    var e = {
                        get passive() {
                            return !(t = !0);
                        },
                    };
                    window.addEventListener("test", null, e),
                        window.removeEventListener("test", null, e);
                }
                catch (t) { }
                return t;
            })();
            function Ae(t, e) {
                var i = Me(t, e), s = i && i.match(/^(\d+)(\.\d+)?px$/);
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
                var n = e[a];
                return (n || ((n = e[a] = t.measureText(a).width), i.push(a)),
                    (s = n > s ? n : s));
            }
            function Ee(t, e, i, s) {
                var a = ((s = s || {}).data = s.data || {}), n = (s.garbageCollect = s.garbageCollect || []), o = (s.font !== e &&
                    ((a = s.data = {}), (n = s.garbageCollect = []), (s.font = e)),
                    t.save(),
                    (t.font = e),
                    0);
                var r = i.length;
                var l, h, c, d, u;
                for (l = 0; l < r; l++)
                    if (null == (d = i[l]) || O(d)) {
                        if (O(d))
                            for (h = 0, c = d.length; h < c; h++)
                                null == (u = d[h]) || O(u) || (o = Le(t, a, n, o, u));
                    }
                    else
                        o = Le(t, a, n, o, d);
                t.restore();
                var g = n.length / 2;
                if (g > i.length) {
                    for (l = 0; l < g; l++)
                        delete a[n[l]];
                    n.splice(0, g);
                }
                return o;
            }
            function Re(t, e, i) {
                (t = t.currentDevicePixelRatio),
                    (i = 0 !== i ? Math.max(i / 2, 0.5) : 0);
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
                var n, o, r, l, h, c, d, u;
                var g = e.pointStyle, f = e.rotation, p = e.radius;
                var m = (f || 0) * et;
                if (g &&
                    "object" == typeof g &&
                    ("[object HTMLImageElement]" === (n = g.toString()) ||
                        "[object HTMLCanvasElement]" === n))
                    return (t.save(),
                        t.translate(i, s),
                        t.rotate(m),
                        t.drawImage(g, -g.width / 2, -g.height / 2, g.width, g.height),
                        void t.restore());
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
                return ((i = i || 0.5),
                    !e ||
                        (t &&
                            t.x > e.left - i &&
                            t.x < e.right + i &&
                            t.y > e.top - i &&
                            t.y < e.bottom + i));
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
                if (!e)
                    return t.lineTo(i.x, i.y);
                if ("middle" === a) {
                    var s_5 = (e.x + i.x) / 2;
                    t.lineTo(s_5, e.y), t.lineTo(s_5, i.y);
                }
                else
                    ("after" === a) != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
                t.lineTo(i.x, i.y);
            }
            function Ne(t, e, i, s) {
                if (!e)
                    return t.lineTo(i.x, i.y);
                t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y);
            }
            function He(t, e, i, s, a, n) {
                if (n === void 0) { n = {}; }
                var o, r, l, h, c, d, u, g, f = O(e) ? e : [e], p = 0 < n.strokeWidth && "" !== n.strokeColor;
                var m, b;
                for (t.save(),
                    t.font = a.string,
                    e = t,
                    (g = n).translation &&
                        e.translate(g.translation[0], g.translation[1]),
                    P(g.rotation) || e.rotate(g.rotation),
                    g.color && (e.fillStyle = g.color),
                    g.textAlign && (e.textAlign = g.textAlign),
                    g.textBaseline && (e.textBaseline = g.textBaseline),
                    m = 0; m < f.length; ++m)
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
                var _b = e, e = _b.x, i = _b.y, s = _b.w, a = _b.h, n = _b.radius;
                t.arc(e + n.topLeft, i + n.topLeft, n.topLeft, 1.5 * S, S, !0),
                    t.lineTo(e, i + a - n.bottomLeft),
                    t.arc(e + n.bottomLeft, i + a - n.bottomLeft, n.bottomLeft, S, D, !0),
                    t.lineTo(e + s - n.bottomRight, i + a),
                    t.arc(e + s - n.bottomRight, i + a - n.bottomRight, n.bottomRight, D, 0, !0),
                    t.lineTo(e + s, i + n.topRight),
                    t.arc(e + s - n.topRight, i + n.topRight, n.topRight, 0, -D, !0),
                    t.lineTo(e + n.topLeft, i);
            }
            function Ye(r, l, t, e, a) {
                var _b;
                if (l === void 0) { l = [""]; }
                if (a === void 0) { a = function () { return r[0]; }; }
                var i = t || r;
                void 0 === e && (e = ti("_fallback", r));
                t = (_b = {},
                    _b[Symbol.toStringTag] = "Object",
                    _b._cacheable = !0,
                    _b._scopes = r,
                    _b._rootScopes = i,
                    _b._fallback = e,
                    _b._getTarget = a,
                    _b.override = function (t) { return Ye(__spreadArray([t], r, true), l, i, e); },
                    _b);
                return new Proxy(t, {
                    deleteProperty: function (t, e) { return (delete t[e], delete t._keys, delete r[0][e], !0); },
                    get: function (n, o) {
                        return Ke(n, o, function () {
                            var t, e = o, i = r, s = n;
                            for (var _b = 0, l_3 = l; _b < l_3.length; _b++) {
                                var a_4 = l_3[_b];
                                if (((t = ti(Xe(a_4, e), i)), void 0 !== t))
                                    return qe(e, t) ? Je(i, s, e, t) : t;
                            }
                        });
                    },
                    getOwnPropertyDescriptor: function (t, e) {
                        return Reflect.getOwnPropertyDescriptor(t._scopes[0], e);
                    },
                    getPrototypeOf: function () { return Reflect.getPrototypeOf(r[0]); },
                    has: function (t, e) { return ei(t).includes(e); },
                    ownKeys: function (t) { return ei(t); },
                    set: function (t, e, i) {
                        var s = t._storage || (t._storage = a());
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
                    setContext: function (t) { return $e(s, t, i, a); },
                    override: function (t) { return $e(s.override(t), e, i, a); },
                };
                return new Proxy(t, {
                    deleteProperty: function (t, e) { return (delete t[e], delete s[e], !0); },
                    get: function (r, h, c) {
                        return Ke(r, h, function () {
                            {
                                var l = r, e = h, i = c;
                                var s_6 = l._proxy, a_5 = l._context, n_3 = l._subProxy, o_3 = l._descriptors;
                                var t_16 = s_6[e];
                                return (O((t_16 =
                                    u(t_16) && o_3.isScriptable(e)
                                        ? (function (t, e, i) {
                                            var s = l._proxy, a = l._context, n = l._subProxy, o = l._stack;
                                            if (o.has(t))
                                                throw new Error("Recursion detected: " +
                                                    Array.from(o).join("->") +
                                                    "->" +
                                                    t);
                                            o.add(t);
                                            var r = e(a, n || i);
                                            return (o.delete(t),
                                                (r = qe(t, r) ? Je(s._scopes, s, t, r) : r));
                                        })(e, t_16, i)
                                        : t_16)) &&
                                    t_16.length &&
                                    (t_16 = (function (t, e, i, s) {
                                        var a = i._proxy, n = i._context, o = i._subProxy, r = i._descriptors;
                                        if (void 0 !== n.index && s(t))
                                            return e[n.index % e.length];
                                        if (A(e[0])) {
                                            var i_6 = e, s_7 = a._scopes.filter(function (t) { return t !== i_6; });
                                            e = [];
                                            for (var _b = 0, i_5 = i_6; _b < i_5.length; _b++) {
                                                var A_1 = i_5[_b];
                                                var i_7 = Je(s_7, a, t, A_1);
                                                e.push($e(i_7, n, o && o[t], r));
                                            }
                                        }
                                        return e;
                                    })(e, t_16, l, o_3.isIndexable)),
                                    (t_16 = qe(e, t_16) ? $e(t_16, a_5, n_3 && n_3[e], o_3) : t_16));
                            }
                        });
                    },
                    getOwnPropertyDescriptor: function (t, e) {
                        return t._descriptors.allKeys
                            ? Reflect.has(s, e)
                                ? { enumerable: !0, configurable: !0 }
                                : void 0
                            : Reflect.getOwnPropertyDescriptor(s, e);
                    },
                    getPrototypeOf: function () { return Reflect.getPrototypeOf(s); },
                    has: function (t, e) { return Reflect.has(s, e); },
                    ownKeys: function () { return Reflect.ownKeys(s); },
                    set: function (t, e, i) { return ((s[e] = i), delete t[e], !0); },
                });
            }
            function Ue(t, e) {
                if (e === void 0) { e = { scriptable: !0, indexable: !0 }; }
                var _b = t._scriptable, i = _b === void 0 ? e.scriptable : _b, _c = t._indexable, s = _c === void 0 ? e.indexable : _c, _d = t._allKeys, a = _d === void 0 ? e.allKeys : _d;
                return {
                    allKeys: a,
                    scriptable: i,
                    indexable: s,
                    isScriptable: u(i) ? i : function () { return i; },
                    isIndexable: u(s) ? s : function () { return s; },
                };
            }
            var Xe = function (t, e) { return (t ? t + K(e) : e); }, qe = function (t, e) {
                return A(e) &&
                    "adapters" !== t &&
                    (null === Object.getPrototypeOf(e) || e.constructor === Object);
            };
            function Ke(t, e, i) {
                if (Object.prototype.hasOwnProperty.call(t, e))
                    return t[e];
                i = i();
                return (t[e] = i);
            }
            function Ge(t, e, i) {
                return u(t) ? t(e, i) : t;
            }
            function Ze(t, e, i, s, a) {
                for (var _b = 0, e_9 = e; _b < e_9.length; _b++) {
                    var r_3 = e_9[_b];
                    (n = i), (o = r_3);
                    var e_10 = !0 === n ? o : "string" == typeof n ? m(o, n) : void 0;
                    if (e_10) {
                        t.add(e_10);
                        o = Ge(e_10._fallback, i, a);
                        if (void 0 !== o && o !== i && o !== s)
                            return o;
                    }
                    else if (!1 === e_10 && void 0 !== s && i !== s)
                        return null;
                }
                var n, o;
                return !1;
            }
            function Je(t, s, a, n) {
                var e = s._rootScopes, i = Ge(s._fallback, a, n), o = __spreadArray(__spreadArray([], t, true), e, true), r = new Set();
                r.add(n);
                t = Qe(r, o, a, i || a, n);
                return (null !== t &&
                    (void 0 === i || i === a || null !== Qe(r, o, i, t, n)) &&
                    Ye(Array.from(r), [""], e, i, function () {
                        {
                            var t = a, e = n;
                            var i_8 = s._getTarget();
                            return t in i_8 || (i_8[t] = {}), O((t = i_8[t])) && A(e) ? e : t || {};
                        }
                    }));
            }
            function Qe(t, e, i, s, a) {
                for (; i;)
                    i = Ze(t, e, i, s, a);
                return i;
            }
            function ti(t, e) {
                for (var _b = 0, e_11 = e; _b < e_11.length; _b++) {
                    var i_9 = e_11[_b];
                    if (i_9) {
                        var e_12 = i_9[t];
                        if (void 0 !== e_12)
                            return e_12;
                    }
                }
            }
            function ei(t) {
                var e = t._keys;
                return (e =
                    e ||
                        (t._keys = (function (t) {
                            var e = new Set();
                            for (var _b = 0, t_17 = t; _b < t_17.length; _b++) {
                                var i_10 = t_17[_b];
                                for (var _c = 0, _d = Object.keys(i_10).filter(function (t) { return !t.startsWith("_"); }); _c < _d.length; _c++) {
                                    var t_18 = _d[_c];
                                    e.add(t_18);
                                }
                            }
                            return Array.from(e);
                        })(t._scopes)));
            }
            function ii(t, e, i, s) {
                var a = t["iScale"], _b = this._parsing.key, n = _b === void 0 ? "r" : _b, o = new Array(s);
                var r, l, h, c;
                for (r = 0, l = s; r < l; ++r)
                    (c = e[(h = r + i)]), (o[r] = { r: a.parse(m(c, n), h) });
                return o;
            }
            var si = Number.EPSILON || 1e-14, ai = function (t, e) { return e < t.length && !t[e].skip && t[e]; }, ni = function (t) { return ("x" === t ? "y" : "x"); };
            function oi(t, e, i, s) {
                var t = t.skip ? e : t, a = e, e = i.skip ? e : i, i = gt(a, t), n = gt(e, a);
                var o = i / (i + n), r = n / (i + n);
                (o = isNaN(o) ? 0 : o), (r = isNaN(r) ? 0 : r);
                (i = s * o), (n = s * r);
                return {
                    previous: { x: a.x - i * (e.x - t.x), y: a.y - i * (e.y - t.y) },
                    next: { x: a.x + n * (e.x - t.x), y: a.y + n * (e.y - t.y) },
                };
            }
            function ri(t, n) {
                if (n === void 0) { n = "x"; }
                var e = ni(n), i = t.length, r = Array(i).fill(0), l = Array(i);
                var s, a, o, h = ai(t, 0);
                for (s = 0; s < i; ++s)
                    if (((a = o), (o = h), (h = ai(t, s + 1)), o)) {
                        if (h) {
                            var t_19 = h[n] - o[n];
                            r[s] = 0 != t_19 ? (h[e] - o[e]) / t_19 : 0;
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
                    var c = t, d = r, u = l, g = c.length;
                    var e_13, i_11, s_8, a_6, n_4, o_4 = ai(c, 0);
                    for (var t_20 = 0; t_20 < g - 1; ++t_20)
                        (n_4 = o_4),
                            (o_4 = ai(c, t_20 + 1)),
                            n_4 &&
                                o_4 &&
                                (at(d[t_20], 0, si)
                                    ? (u[t_20] = u[t_20 + 1] = 0)
                                    : ((e_13 = u[t_20] / d[t_20]),
                                        (i_11 = u[t_20 + 1] / d[t_20]),
                                        (a_6 = Math.pow(e_13, 2) + Math.pow(i_11, 2)) <= 9 ||
                                            ((s_8 = 3 / Math.sqrt(a_6)),
                                                (u[t_20] = e_13 * s_8 * d[t_20]),
                                                (u[t_20 + 1] = i_11 * s_8 * d[t_20]))));
                }
                {
                    var _b = [t, l, n], f = _b[0], p = _b[1], _c = _b[2], m = _c === void 0 ? "x" : _c;
                    var b_1 = ni(m), x_1 = f.length;
                    var e_14, i_12, s_9, a_7 = ai(f, 0);
                    for (var t_21 = 0; t_21 < x_1; ++t_21)
                        if (((i_12 = s_9), (s_9 = a_7), (a_7 = ai(f, t_21 + 1)), s_9)) {
                            var x_2 = s_9[m], v_1 = s_9[b_1];
                            i_12 &&
                                ((e_14 = (x_2 - i_12[m]) / 3),
                                    (s_9["cp1" + m] = x_2 - e_14),
                                    (s_9["cp1" + b_1] = v_1 - e_14 * p[t_21])),
                                a_7 &&
                                    ((e_14 = (a_7[m] - x_2) / 3),
                                        (s_9["cp2" + m] = x_2 + e_14),
                                        (s_9["cp2" + b_1] = v_1 + e_14 * p[t_21]));
                        }
                    return;
                }
            }
            function li(t, e, i) {
                return Math.max(Math.min(t, i), e);
            }
            function hi(o, e, r, i, t) {
                var s, a, n, l;
                if ((e.spanGaps && (o = o.filter(function (t) { return !t.skip; })),
                    "monotone" === e.cubicInterpolationMode))
                    ri(o, t);
                else {
                    var t_22 = i ? o[o.length - 1] : o[0];
                    for (s = 0, a = o.length; s < a; ++s)
                        (n = o[s]),
                            (l = oi(t_22, n, o[Math.min(s + 1, a - (i ? 0 : 1)) % a], e.tension)),
                            (n.cp1x = l.previous.x),
                            (n.cp1y = l.previous.y),
                            (n.cp2x = l.next.x),
                            (n.cp2y = l.next.y),
                            (t_22 = n);
                }
                if (e.capBezierPoints) {
                    var h = o, c = r;
                    var t_23, e_15, i_13, s_10, a_8, n_5 = M(h[0], c);
                    for (t_23 = 0, e_15 = h.length; t_23 < e_15; ++t_23)
                        (a_8 = s_10),
                            (s_10 = n_5),
                            (n_5 = t_23 < e_15 - 1 && M(h[t_23 + 1], c)),
                            s_10 &&
                                ((i_13 = h[t_23]),
                                    a_8 &&
                                        ((i_13.cp1x = li(i_13.cp1x, c.left, c.right)),
                                            (i_13.cp1y = li(i_13.cp1y, c.top, c.bottom))),
                                    n_5 &&
                                        ((i_13.cp2x = li(i_13.cp2x, c.left, c.right)),
                                            (i_13.cp2y = li(i_13.cp2y, c.top, c.bottom))));
                }
            }
            var ci = function (t) { return 0 === t || 1 === t; }, di = function (t, e, i) { return -Math.pow(2, 10 * --t) * Math.sin(((t - e) * _) / i); }, ui = function (t, e, i) {
                return Math.pow(2, -10 * t) * Math.sin(((t - e) * _) / i) + 1;
            }, gi = {
                linear: function (t) { return t; },
                easeInQuad: function (t) { return t * t; },
                easeOutQuad: function (t) { return -t * (t - 2); },
                easeInOutQuad: function (t) {
                    return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
                },
                easeInCubic: function (t) { return t * t * t; },
                easeOutCubic: function (t) { return --t * t * t + 1; },
                easeInOutCubic: function (t) {
                    return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
                },
                easeInQuart: function (t) { return t * t * t * t; },
                easeOutQuart: function (t) { return -(--t * t * t * t - 1); },
                easeInOutQuart: function (t) {
                    return (t /= 0.5) < 1
                        ? 0.5 * t * t * t * t
                        : -0.5 * ((t -= 2) * t * t * t - 2);
                },
                easeInQuint: function (t) { return t * t * t * t * t; },
                easeOutQuint: function (t) { return --t * t * t * t * t + 1; },
                easeInOutQuint: function (t) {
                    return (t /= 0.5) < 1
                        ? 0.5 * t * t * t * t * t
                        : 0.5 * ((t -= 2) * t * t * t * t + 2);
                },
                easeInSine: function (t) { return 1 - Math.cos(t * D); },
                easeOutSine: function (t) { return Math.sin(t * D); },
                easeInOutSine: function (t) { return -0.5 * (Math.cos(S * t) - 1); },
                easeInExpo: function (t) { return (0 === t ? 0 : Math.pow(2, 10 * (t - 1))); },
                easeOutExpo: function (t) { return (1 === t ? 1 : 1 - Math.pow(2, -10 * t)); },
                easeInOutExpo: function (t) {
                    return ci(t)
                        ? t
                        : t < 0.5
                            ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
                            : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1)));
                },
                easeInCirc: function (t) { return (1 <= t ? t : -(Math.sqrt(1 - t * t) - 1)); },
                easeOutCirc: function (t) { return Math.sqrt(1 - --t * t); },
                easeInOutCirc: function (t) {
                    return (t /= 0.5) < 1
                        ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                        : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
                },
                easeInElastic: function (t) { return (ci(t) ? t : di(t, 0.075, 0.3)); },
                easeOutElastic: function (t) { return (ci(t) ? t : ui(t, 0.075, 0.3)); },
                easeInOutElastic: function (t) {
                    return ci(t)
                        ? t
                        : t < 0.5
                            ? 0.5 * di(2 * t, 0.1125, 0.45)
                            : 0.5 + 0.5 * ui(2 * t - 1, 0.1125, 0.45);
                },
                easeInBack: function (t) {
                    return t * t * (2.70158 * t - 1.70158);
                },
                easeOutBack: function (t) {
                    return --t * t * (2.70158 * t + 1.70158) + 1;
                },
                easeInOutBack: function (t) {
                    var e = 1.70158;
                    return (t /= 0.5) < 1
                        ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                        : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
                },
                easeInBounce: function (t) { return 1 - gi.easeOutBounce(1 - t); },
                easeOutBounce: function (t) {
                    var e = 7.5625, i = 2.75;
                    return t < 1 / i
                        ? e * t * t
                        : t < 2 / i
                            ? e * (t -= 1.5 / i) * t + 0.75
                            : t < 2.5 / i
                                ? e * (t -= 2.25 / i) * t + 0.9375
                                : e * (t -= 2.625 / i) * t + 0.984375;
                },
                easeInOutBounce: function (t) {
                    return t < 0.5
                        ? 0.5 * gi.easeInBounce(2 * t)
                        : 0.5 * gi.easeOutBounce(2 * t - 1) + 0.5;
                },
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
                                : t).y,
                };
            }
            function mi(t, e, i, s) {
                var a = { x: t.cp2x, y: t.cp2y }, n = { x: e.cp1x, y: e.cp1y }, t = fi(t, a, i), a = fi(a, n, i), n = fi(n, e, i), e = fi(t, a, i), t = fi(a, n, i);
                return fi(e, t, i);
            }
            var bi = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, xi = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
            function vi(t, e) {
                var i = ("" + t).match(bi);
                if (!i || "normal" === i[1])
                    return 1.2 * e;
                switch (((t = +i[2]), i[3])) {
                    case "px":
                        return t;
                    case "%":
                        t /= 100;
                }
                return e * t;
            }
            var _i = function (t) { return +t || 0; };
            function yi(e, i) {
                var t = {}, s = A(i), a = s ? Object.keys(i) : i, n = A(e) ? (s ? function (t) { return T(e[t], e[i[t]]); } : function (t) { return e[t]; }) : function () { return e; };
                for (var _b = 0, a_9 = a; _b < a_9.length; _b++) {
                    var e_16 = a_9[_b];
                    t[e_16] = _i(n(e_16));
                }
                return t;
            }
            function Mi(t) {
                return yi(t, { top: "y", right: "x", bottom: "y", left: "x" });
            }
            function wi(t) {
                return yi(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
            }
            function I(t) {
                var e = Mi(t);
                return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
            }
            function z(t, e) {
                e = e || R.font;
                var i = T((t = t || {}).size, e.size), s = ("string" == typeof i && (i = parseInt(i, 10)),
                    T(t.style, e.style));
                s &&
                    !("" + s).match(xi) &&
                    (console.warn('Invalid font style specified: "' + s + '"'),
                        (s = void 0));
                var a = {
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
                var a, n, o, r = !0;
                for (a = 0, n = t.length; a < n; ++a)
                    if (void 0 !== (o = t[a]) &&
                        (void 0 !== e && "function" == typeof o && ((o = o(e)), (r = !1)),
                            void 0 !== i && O(o) && ((o = o[i % o.length]), (r = !1)),
                            void 0 !== o))
                        return s && !r && (s.cacheable = !1), o;
            }
            function Si(t, e, i) {
                var _b = t, t = _b.min, s = _b.max, e = B(e, (s - t) / 2), a = function (t, e) { return (i && 0 === t ? 0 : t + e); };
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
                            x: function (t) { return s + s + a - t; },
                            setWidth: function (t) {
                                a = t;
                            },
                            textAlign: function (t) {
                                return "center" === t ? t : "right" === t ? "left" : "right";
                            },
                            xPlus: function (t, e) { return t - e; },
                            leftForLtr: function (t, e) { return t - e; },
                        })
                    : {
                        x: function (t) { return t; },
                        setWidth: function (t) { },
                        textAlign: function (t) { return t; },
                        xPlus: function (t, e) { return t + e; },
                        leftForLtr: function (t, e) { return t; },
                    };
                var s, a;
            }
            function Ci(t, e) {
                var i, s;
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
                    : { between: c, compare: function (t, e) { return t - e; }, normalize: function (t) { return t; } };
            }
            function Ti(_b) {
                var t = _b.start, e = _b.end, i = _b.count, s = _b.loop, a = _b.style;
                return {
                    start: t % i,
                    end: e % i,
                    loop: s && (e - t + 1) % i == 0,
                    style: a,
                };
            }
            function Li(t, i, g) {
                if (!g)
                    return [t];
                var s = g.property, a = g.start, n = g.end, o = i.length, _b = Ai(s), r = _b.compare, l = _b.between, h = _b.normalize, _c = (function (t, e) {
                    var i = g.property, s = g.start, a = g.end, _b = Ai(i), n = _b.between, o = _b.normalize, r = e.length;
                    var l, h, c = t.start, d = t.end, u = t.loop;
                    if (u) {
                        for (c += r, d += r, l = 0, h = r; l < h && n(o(e[c % r][i]), s, a); ++l)
                            c--, d--;
                        (c %= r), (d %= r);
                    }
                    return (d < c && (d += r), { start: c, end: d, loop: u, style: t.style });
                })(t, i), c = _c.start, d = _c.end, u = _c.loop, f = _c.style, p = [];
                var m, b, x, v, _ = null;
                for (var t_24 = c, e_17 = c; t_24 <= d; ++t_24)
                    (b = i[t_24 % o]).skip ||
                        ((m = h(b[s])) !== x &&
                            ((v = l(m, a, n)),
                                null ===
                                    (_ =
                                        null === _ && (v || (l(a, x, m) && 0 !== r(a, x)))
                                            ? 0 === r(m, a)
                                                ? t_24
                                                : e_17
                                            : _) ||
                                    (v && 0 !== r(n, m) && !l(n, x, m)) ||
                                    (p.push(Ti({ start: _, end: t_24, loop: u, count: o, style: f })),
                                        (_ = null)),
                                (e_17 = t_24),
                                (x = m)));
                return (null !== _ &&
                    p.push(Ti({ start: _, end: d, loop: u, count: o, style: f })),
                    p);
            }
            function Ei(e, i) {
                var s = [], a = e.segments;
                for (var t_25 = 0; t_25 < a.length; t_25++) {
                    var n = Li(a[t_25], e.points, i);
                    n.length && s.push.apply(s, n);
                }
                return s;
            }
            function Ri(t, e) {
                var i = t.points, n = t.options.spanGaps, s = i.length;
                if (!s)
                    return [];
                var a = !!t._loop, _b = (function (t, e, i) {
                    var s = 0, a = e - 1;
                    if (i && !n)
                        for (; s < e && !t[s].skip;)
                            s++;
                    for (; s < e && t[s].skip;)
                        s++;
                    for (s %= e, i && (a += s); a > s && t[a % e].skip;)
                        a--;
                    return (a %= e), { start: s, end: a };
                })(i, s, a), o = _b.start, r = _b.end;
                return Ii(t, !0 === n
                    ? [{ start: o, end: r, loop: a }]
                    : (function (t, e, i, s) {
                        var a = t.length, n = [];
                        var o, r = e, l = t[e];
                        for (o = e + 1; o <= i; ++o) {
                            var i_14 = t[o % a];
                            i_14.skip || i_14.stop
                                ? l.skip ||
                                    ((s = !1),
                                        n.push({ start: e % a, end: (o - 1) % a, loop: s }),
                                        (e = r = i_14.stop ? o : null))
                                : ((r = o), l.skip && (e = o)),
                                (l = i_14);
                        }
                        return (null !== r && n.push({ start: e % a, end: r % a, loop: s }), n);
                    })(i, o, r < o ? r + s : r, !!t._fullLoop && 0 === o && r === s - 1), i, e);
            }
            function Ii(t, e, s, a) {
                if (a && a.setContext && s) {
                    var r = t, t = e, l = s, h = a;
                    var d_2 = r._chart.getContext(), u_2 = zi(r.options), g_1 = r._datasetIndex, f_1 = r.options.spanGaps, p_1 = l.length, m_1 = [];
                    var n_6 = u_2, o_5 = t[0].start, i_15 = o_5;
                    function c(t, e, i, s) {
                        var a = f_1 ? -1 : 1;
                        if (t !== e) {
                            for (t += p_1; l[t % p_1].skip;)
                                t -= a;
                            for (; l[e % p_1].skip;)
                                e += a;
                            t % p_1 != e % p_1 &&
                                (m_1.push({ start: t % p_1, end: e % p_1, loop: i, style: s }),
                                    (n_6 = s),
                                    (o_5 = e % p_1));
                        }
                    }
                    for (var _b = 0, t_26 = t; _b < t_26.length; _b++) {
                        var r_4 = t_26[_b];
                        o_5 = f_1 ? o_5 : r_4.start;
                        var t_27 = void 0, e_18 = l[o_5 % p_1];
                        for (i_15 = o_5 + 1; i_15 <= r_4.end; i_15++) {
                            var f_2 = l[i_15 % p_1];
                            (function (t, e) {
                                if (!e)
                                    return;
                                function i(t, e) {
                                    return ne(e) ? (s.includes(e) || s.push(e), s.indexOf(e)) : e;
                                }
                                var s = [];
                                return JSON.stringify(t, i) !== JSON.stringify(e, i);
                            })((t_27 = zi(h.setContext(Pi(d_2, {
                                type: "segment",
                                p0: e_18,
                                p1: f_2,
                                p0DataIndex: (i_15 - 1) % p_1,
                                p1DataIndex: i_15 % p_1,
                                datasetIndex: g_1,
                            })))), n_6) && c(o_5, i_15 - 1, r_4.loop, n_6),
                                (e_18 = f_2),
                                (n_6 = t_27);
                        }
                        o_5 < i_15 - 1 && c(o_5, i_15 - 1, r_4.loop, n_6);
                    }
                    return m_1;
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
                        console.warn(t + ': "' + i + '" is deprecated. Please use "' + s + '" instead');
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
                var o = t.getSortedVisibleDatasetMetas(), r = s[i];
                for (var t_28 = 0, e_19 = o.length; t_28 < e_19; ++t_28) {
                    var _b = o[t_28], s_11 = _b.index, l_4 = _b.data, _c = (function (t, e, i, s) {
                        var a = t.controller, n = t.data, o = t._sorted, r = a._cachedMeta.iScale;
                        if (r && e === r.axis && "r" !== e && o && n.length) {
                            var t_29 = r._reversePixels ? xt : f;
                            if (!s)
                                return t_29(n, e, i);
                            if (a._sharedOptions) {
                                var s_12 = n[0], a_10 = "function" == typeof s_12.getRange && s_12.getRange(e);
                                if (a_10) {
                                    var s_13 = t_29(n, e, i - a_10), o_6 = t_29(n, e, i + a_10);
                                    return { lo: s_13.lo, hi: o_6.hi };
                                }
                            }
                        }
                        return { lo: 0, hi: n.length - 1 };
                    })(o[t_28], i, r, n), h_2 = _c.lo, c_2 = _c.hi;
                    for (var t_30 = h_2; t_30 <= c_2; ++t_30) {
                        var i_16 = l_4[t_30];
                        i_16.skip || a(i_16, s_11, t_30);
                    }
                }
            }
            function Bi(s, a, t, n, o) {
                var r = [];
                return ((o || s.isPointInArea(a)) &&
                    Vi(s, t, a, function (t, e, i) {
                        (o || M(t, s.chartArea, 0)) &&
                            t.inRange(a.x, a.y, n) &&
                            r.push({ element: t, datasetIndex: e, index: i });
                    }, !0),
                    r);
            }
            function Wi(t, e, i, s, a, r) {
                {
                    if (r || t.isPointInArea(e)) {
                        if ("r" !== i || s) {
                            var l = t, h = e, c = i, d = s, u = a, g = r;
                            var n_7 = [];
                            var m_2 = (function (t) {
                                var s = -1 !== t.indexOf("x"), a = -1 !== t.indexOf("y");
                                return function (t, e) {
                                    var i = s ? Math.abs(t.x - e.x) : 0, t = a ? Math.abs(t.y - e.y) : 0;
                                    return Math.sqrt(Math.pow(i, 2) + Math.pow(t, 2));
                                };
                            })(c);
                            var o_7 = Number.POSITIVE_INFINITY;
                            return (Vi(l, c, h, function (t, e, i) {
                                var s, a = t.inRange(h.x, h.y, u);
                                (d && !a) ||
                                    ((s = t.getCenterPoint(u)),
                                        (g || l.isPointInArea(s) || a) &&
                                            ((a = m_2(h, s)) < o_7
                                                ? ((n_7 = [{ element: t, datasetIndex: e, index: i }]),
                                                    (o_7 = a))
                                                : a === o_7 &&
                                                    n_7.push({ element: t, datasetIndex: e, index: i })));
                            }),
                                n_7);
                        }
                        {
                            var f = e, p = a;
                            var o_8 = [];
                            return (Vi(t, i, f, function (t, e, i) {
                                var _b = t.getProps(["startAngle", "endAngle"], p), s = _b.startAngle, a = _b.endAngle, n = ut(t, { x: f.x, y: f.y })["angle"];
                                pt(n, s, a) &&
                                    o_8.push({ element: t, datasetIndex: e, index: i });
                            }),
                                o_8);
                        }
                    }
                    return [];
                }
            }
            function Ni(t, s, a, e, n) {
                var o = [], r = "x" === a ? "inXRange" : "inYRange";
                var l = !1;
                return (Vi(t, a, s, function (t, e, i) {
                    t[r](s[a], n) &&
                        (o.push({ element: t, datasetIndex: e, index: i }),
                            (l = l || t.inRange(s.x, s.y, n)));
                }),
                    e && !l ? [] : o);
            }
            var Hi = {
                evaluateInteractionItems: Vi,
                modes: {
                    index: function (t, e, i, s) {
                        var a = Se(e, t), n = i.axis || "x", o = i.includeInvisible || !1, r = i.intersect ? Bi(t, a, n, s, o) : Wi(t, a, n, !1, s, o), l = [];
                        return r.length
                            ? (t.getSortedVisibleDatasetMetas().forEach(function (t) {
                                var e = r[0].index, i = t.data[e];
                                i &&
                                    !i.skip &&
                                    l.push({ element: i, datasetIndex: t.index, index: e });
                            }),
                                l)
                            : [];
                    },
                    dataset: function (t, e, i, s) {
                        var e = Se(e, t), a = i.axis || "xy", n = i.includeInvisible || !1;
                        var o = i.intersect ? Bi(t, e, a, s, n) : Wi(t, e, a, !1, s, n);
                        if (0 < o.length) {
                            var e_20 = o[0].datasetIndex, i_17 = t.getDatasetMeta(e_20).data;
                            o = [];
                            for (var t_31 = 0; t_31 < i_17.length; ++t_31)
                                o.push({ element: i_17[t_31], datasetIndex: e_20, index: t_31 });
                        }
                        return o;
                    },
                    point: function (t, e, i, s) {
                        return Bi(t, Se(e, t), i.axis || "xy", s, i.includeInvisible || !1);
                    },
                    nearest: function (t, e, i, s) {
                        var e = Se(e, t), a = i.axis || "xy", n = i.includeInvisible || !1;
                        return Wi(t, e, a, i.intersect, s, n);
                    },
                    x: function (t, e, i, s) { return Ni(t, Se(e, t), "x", i.intersect, s); },
                    y: function (t, e, i, s) { return Ni(t, Se(e, t), "y", i.intersect, s); },
                },
            };
            var ji = ["left", "top", "right", "bottom"];
            function Yi(t, e) {
                return t.filter(function (t) { return t.pos === e; });
            }
            function $i(t, e) {
                return t.filter(function (t) { return -1 === ji.indexOf(t.pos) && t.box.axis === e; });
            }
            function Ui(t, s) {
                return t.sort(function (t, e) {
                    var i = s ? e : t, t = s ? t : e;
                    return i.weight === t.weight
                        ? i.index - t.index
                        : i.weight - t.weight;
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
                var a = [];
                var n, o, r, l, h, c;
                for (n = 0, o = t.length, h = 0; n < o; ++n) {
                    (r = t[n]),
                        (l = r.box).update(r.width || e.w, r.height || e.h, (function (t, e) {
                            var i = e.maxPadding;
                            {
                                var s_14 = { left: 0, top: 0, right: 0, bottom: 0 };
                                return ((t = t ? ["left", "right"] : ["top", "bottom"]).forEach(function (t) {
                                    s_14[t] = Math.max(e[t], i[t]);
                                }),
                                    s_14);
                            }
                        })(r.horizontal, e));
                    var _b = (function (t, e, i, s) {
                        var a = i.pos, n = i.box, o = t.maxPadding;
                        if (!A(a)) {
                            i.size && (t[a] -= i.size);
                            var e_21 = s[i.stack] || { size: 0, count: 1 };
                            (e_21.size = Math.max(e_21.size, i.horizontal ? n.height : n.width)),
                                (i.size = e_21.size / e_21.count),
                                (t[a] += i.size);
                        }
                        n.getPadding && qi(o, n.getPadding());
                        var s = Math.max(0, e.outerWidth - Xi(o, t, "left", "right")), e = Math.max(0, e.outerHeight - Xi(o, t, "top", "bottom")), r = s !== t.w, l = e !== t.h;
                        return ((t.w = s),
                            (t.h = e),
                            i.horizontal ? { same: r, other: l } : { same: l, other: r });
                    })(e, i, r, s), o_9 = _b.same, d_3 = _b.other;
                    (h |= o_9 && a.length), (c = c || d_3), l.fullSize || a.push(r);
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
                var n = e.x, o = e.y;
                for (var _b = 0, t_32 = t; _b < t_32.length; _b++) {
                    var r_5 = t_32[_b];
                    var t_33 = r_5.box, l_5 = s[r_5.stack] || { count: 1, placed: 0, weight: 1 }, h_3 = r_5.stackWeight / l_5.weight || 1;
                    if (r_5.horizontal) {
                        var s_15 = e.w * h_3, n_8 = l_5.size || t_33.height;
                        G(l_5.start) && (o = l_5.start),
                            t_33.fullSize
                                ? Gi(t_33, a.left, o, i.outerWidth - a.right - a.left, n_8)
                                : Gi(t_33, e.left + l_5.placed, o, s_15, n_8),
                            (l_5.start = o),
                            (l_5.placed += s_15),
                            (o = t_33.bottom);
                    }
                    else {
                        var s_16 = e.h * h_3, o_10 = l_5.size || t_33.width;
                        G(l_5.start) && (n = l_5.start),
                            t_33.fullSize
                                ? Gi(t_33, n, a.top, o_10, i.outerHeight - a.bottom - a.top)
                                : Gi(t_33, n, e.top + l_5.placed, o_10, s_16),
                            (l_5.start = n),
                            (l_5.placed += s_16),
                            (n = t_33.right);
                    }
                }
                (e.x = n), (e.y = o);
            }
            var a = {
                addBox: function (t, e) {
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
                                            draw: function (t) {
                                                e.draw(t);
                                            },
                                        },
                                    ];
                                }),
                        t.boxes.push(e);
                },
                removeBox: function (t, e) {
                    e = t.boxes ? t.boxes.indexOf(e) : -1;
                    -1 !== e && t.boxes.splice(e, 1);
                },
                configure: function (t, e, i) {
                    (e.fullSize = i.fullSize),
                        (e.position = i.position),
                        (e.weight = i.weight);
                },
                update: function (l, t, e, i) {
                    if (l) {
                        var o_11 = I(l.options.layout.padding), r_6 = Math.max(t - o_11.width, 0), h_4 = Math.max(e - o_11.height, 0), c_3 = (function () {
                            var t = (function (t) {
                                var _b, _c, _d;
                                var e = [];
                                var i, s, a, n, o, r;
                                for (i = 0, s = (t || []).length; i < s; ++i)
                                    (_b = a =
                                        t[i], n = _b.position, _c = _b.options, o = _c.stack, _d = _c.stackWeight, r = _d === void 0 ? 1 : _d),
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
                            })(l.boxes), e = Ui(t.filter(function (t) { return t.box.fullSize; }), !0), i = Ui(Yi(t, "left"), !0), s = Ui(Yi(t, "right")), a = Ui(Yi(t, "top"), !0), n = Ui(Yi(t, "bottom")), o = $i(t, "x"), r = $i(t, "y");
                            return {
                                fullSize: e,
                                leftAndTop: i.concat(a),
                                rightAndBottom: s.concat(r).concat(n).concat(o),
                                chartArea: Yi(t, "chartArea"),
                                vertical: i.concat(s).concat(r),
                                horizontal: a.concat(n).concat(o),
                            };
                        })(), d_4 = c_3.vertical, u_3 = c_3.horizontal;
                        k(l.boxes, function (t) {
                            "function" == typeof t.beforeLayout && t.beforeLayout();
                        });
                        var s = d_4.reduce(function (t, e) {
                            return e.box.options && !1 === e.box.options.display ? t : t + 1;
                        }, 0) || 1, t = Object.freeze({
                            outerWidth: t,
                            outerHeight: e,
                            padding: o_11,
                            availableWidth: r_6,
                            availableHeight: h_4,
                            vBoxMaxWidth: r_6 / 2 / s,
                            hBoxMaxHeight: h_4 / 2,
                        }), e = Object.assign({}, o_11);
                        qi(e, I(i));
                        var g_2 = Object.assign({ maxPadding: e, w: r_6, h: h_4, x: o_11.left, y: o_11.top }, o_11), f_3 = (function (t, e) {
                            var i = (function (t) {
                                var e = {};
                                for (var _b = 0, t_34 = t; _b < t_34.length; _b++) {
                                    var i_18 = t_34[_b];
                                    var t_35 = i_18.stack, s_17 = i_18.pos, a_11 = i_18.stackWeight;
                                    if (t_35 && ji.includes(s_17)) {
                                        var n_9 = e[t_35] ||
                                            (e[t_35] = { count: 0, placed: 0, weight: 0, size: 0 });
                                        n_9.count++, (n_9.weight += a_11);
                                    }
                                }
                                return e;
                            })(t), s = e.vBoxMaxWidth, a = e.hBoxMaxHeight;
                            var n, o, r;
                            for (n = 0, o = t.length; n < o; ++n) {
                                var o_12 = (r = t[n]).box["fullSize"], l_6 = i[r.stack], h_5 = l_6 && r.stackWeight / l_6.weight;
                                r.horizontal
                                    ? ((r.width = h_5 ? h_5 * s : o_12 && e.availableWidth),
                                        (r.height = a))
                                    : ((r.width = s),
                                        (r.height = h_5 ? h_5 * a : o_12 && e.availableHeight));
                            }
                            return i;
                        })(d_4.concat(u_3), t);
                        Ki(c_3.fullSize, g_2, t, f_3),
                            Ki(d_4, g_2, t, f_3),
                            Ki(u_3, g_2, t, f_3) && Ki(d_4, g_2, t, f_3);
                        {
                            var a = g_2;
                            var p_2 = a.maxPadding;
                            function n(t) {
                                var e = Math.max(p_2[t] - a[t], 0);
                                return (a[t] += e), e;
                            }
                            (a.y += n("top")), (a.x += n("left")), n("right"), n("bottom");
                        }
                        Zi(c_3.leftAndTop, g_2, t, f_3),
                            (g_2.x += g_2.w),
                            (g_2.y += g_2.h),
                            Zi(c_3.rightAndBottom, g_2, t, f_3),
                            (l.chartArea = {
                                left: g_2.left,
                                top: g_2.top,
                                right: g_2.left + g_2.w,
                                bottom: g_2.top + g_2.h,
                                height: g_2.h,
                                width: g_2.w,
                            }),
                            k(c_3.chartArea, function (t) {
                                var e = t.box;
                                Object.assign(e, l.chartArea),
                                    e.update(g_2.w, g_2.h, { left: 0, top: 0, right: 0, bottom: 0 });
                            });
                    }
                },
            };
            var Ji = /** @class */ (function () {
                function Ji() {
                }
                Ji.prototype.acquireContext = function (t, e) { };
                Ji.prototype.releaseContext = function (t) {
                    return !1;
                };
                Ji.prototype.addEventListener = function (t, e, i) { };
                Ji.prototype.removeEventListener = function (t, e, i) { };
                Ji.prototype.getDevicePixelRatio = function () {
                    return 1;
                };
                Ji.prototype.getMaximumSize = function (t, e, i, s) {
                    return ((e = Math.max(0, e || t.width)),
                        (i = i || t.height),
                        { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) });
                };
                Ji.prototype.isAttached = function (t) {
                    return !0;
                };
                Ji.prototype.updateConfig = function (t) { };
                return Ji;
            }());
            var Qi = /** @class */ (function (_super) {
                __extends(Qi, _super);
                function Qi() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Qi.prototype.acquireContext = function (t) {
                    return (t && t.getContext && t.getContext("2d")) || null;
                };
                Qi.prototype.updateConfig = function (t) {
                    t.options.animation = !1;
                };
                return Qi;
            }(Ji));
            var ts = "$chartjs", es = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
                pointerenter: "mouseenter",
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointerleave: "mouseout",
                pointerout: "mouseout",
            }, is = function (t) { return null === t || "" === t; }, ss = !!Oe && { passive: !0 };
            function as(t, e) {
                for (var _b = 0, t_36 = t; _b < t_36.length; _b++) {
                    var i_19 = t_36[_b];
                    if (i_19 === e || i_19.contains(e))
                        return !0;
                }
            }
            function ns(t, e, i) {
                var s = t.canvas, a = new MutationObserver(function (t) {
                    var e = !1;
                    for (var _b = 0, t_37 = t; _b < t_37.length; _b++) {
                        var i_20 = t_37[_b];
                        (e = e || as(i_20.addedNodes, s)), (e = e && !as(i_20.removedNodes, s));
                    }
                    e && i();
                });
                return a.observe(document, { childList: !0, subtree: !0 }), a;
            }
            function os(t, e, i) {
                var s = t.canvas, a = new MutationObserver(function (t) {
                    var e = !1;
                    for (var _b = 0, t_38 = t; _b < t_38.length; _b++) {
                        var i_21 = t_38[_b];
                        (e = e || as(i_21.removedNodes, s)), (e = e && !as(i_21.addedNodes, s));
                    }
                    e && i();
                });
                return a.observe(document, { childList: !0, subtree: !0 }), a;
            }
            var rs = new Map();
            var ls = 0;
            function hs() {
                var i = window.devicePixelRatio;
                i !== ls &&
                    ((ls = i),
                        rs.forEach(function (t, e) {
                            e.currentDevicePixelRatio !== i && t();
                        }));
            }
            function cs(t, e, s) {
                var i = t.canvas, a = i && ve(i);
                if (a) {
                    var o_13 = St(function (t, e) {
                        var i = a.clientWidth;
                        s(t, e), i < a.clientWidth && s();
                    }, window), r_7 = new ResizeObserver(function (t) {
                        var t = t[0], e = t.contentRect.width, t = t.contentRect.height;
                        (0 === e && 0 === t) || o_13(e, t);
                    });
                    return (r_7.observe(a),
                        (t = t),
                        (n = o_13),
                        rs.size || window.addEventListener("resize", hs),
                        rs.set(t, n),
                        r_7);
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
                var s = e.canvas, a = St(function (t) {
                    null !== e.ctx &&
                        i((function (t, e) {
                            var i = es[t.type] || t.type, _b = Se(t, e), s = _b.x, a = _b.y;
                            return {
                                type: i,
                                chart: e,
                                native: t,
                                x: void 0 !== s ? s : null,
                                y: void 0 !== a ? a : null,
                            };
                        })(t, e));
                }, e);
                return s.addEventListener(t, a, ss), a;
            }
            var gs = /** @class */ (function (_super) {
                __extends(gs, _super);
                function gs() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                gs.prototype.acquireContext = function (t, e) {
                    var i = t && t.getContext && t.getContext("2d");
                    {
                        if (i && i.canvas === t) {
                            {
                                var s = e;
                                var a_12 = t.style, n_10 = t.getAttribute("height"), o_14 = t.getAttribute("width");
                                if (((t[ts] = {
                                    initial: {
                                        height: n_10,
                                        width: o_14,
                                        style: {
                                            display: a_12.display,
                                            height: a_12.height,
                                            width: a_12.width,
                                        },
                                    },
                                }),
                                    (a_12.display = a_12.display || "block"),
                                    (a_12.boxSizing = a_12.boxSizing || "border-box"),
                                    is(o_14))) {
                                    var s_18 = Ae(t, "width");
                                    void 0 !== s_18 && (t.width = s_18);
                                }
                                if (is(n_10))
                                    if ("" === t.style.height)
                                        t.height = t.width / (s || 2);
                                    else {
                                        var s_19 = Ae(t, "height");
                                        void 0 !== s_19 && (t.height = s_19);
                                    }
                            }
                            return i;
                        }
                        return null;
                    }
                };
                gs.prototype.releaseContext = function (t) {
                    var i = t.canvas;
                    if (!i[ts])
                        return !1;
                    var s = i[ts].initial, e = (["height", "width"].forEach(function (t) {
                        var e = s[t];
                        P(e) ? i.removeAttribute(t) : i.setAttribute(t, e);
                    }),
                        s.style || {});
                    return (Object.keys(e).forEach(function (t) {
                        i.style[t] = e[t];
                    }),
                        (i.width = i.width),
                        delete i[ts],
                        !0);
                };
                gs.prototype.addEventListener = function (t, e, i) {
                    this.removeEventListener(t, e);
                    var s = t.$proxies || (t.$proxies = {}), a = { attach: ns, detach: os, resize: cs }[e] || us;
                    s[e] = a(t, e, i);
                };
                gs.prototype.removeEventListener = function (t, e) {
                    var i = t.$proxies || (t.$proxies = {}), s = i[e];
                    s &&
                        (({ attach: ds, detach: ds, resize: ds }[e] ||
                            function (t, e, i) {
                                t.canvas.removeEventListener(e, i, ss);
                            })(t, e, s),
                            (i[e] = void 0));
                };
                gs.prototype.getDevicePixelRatio = function () {
                    return window.devicePixelRatio;
                };
                gs.prototype.getMaximumSize = function (t, e, i, s) {
                    return De(t, e, i, s);
                };
                gs.prototype.isAttached = function (t) {
                    t = ve(t);
                    return !(!t || !t.isConnected);
                };
                return gs;
            }(Ji));
            function fs(t) {
                return !xe() ||
                    ("undefined" != typeof OffscreenCanvas &&
                        t instanceof OffscreenCanvas)
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
            var ps = "transparent", ms = {
                boolean: function (t, e, i) { return (0.5 < i ? e : t); },
                color: function (t, e, i) {
                    var s = oe(t || ps), a = s.valid && oe(e || ps);
                    return a && a.valid ? a.mix(s, i).hexString() : e;
                },
                number: function (t, e, i) { return t + (e - t) * i; },
            };
            var bs = /** @class */ (function () {
                function bs(t, e, i, s) {
                    var a = e[i], a = ((s = ki([t.to, s, a, t.from])), ki([t.from, a, s]));
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
                bs.prototype.active = function () {
                    return this._active;
                };
                bs.prototype.update = function (t, e, i) {
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
                };
                bs.prototype.cancel = function () {
                    this._active &&
                        (this.tick(Date.now()), (this._active = !1), this._notify(!1));
                };
                bs.prototype.tick = function (t) {
                    var t = t - this._start, e = this._duration, i = this._prop, s = this._from, a = this._loop, n = this._to;
                    var o;
                    if (((this._active = s !== n && (a || t < e)), !this._active))
                        return (this._target[i] = n), void this._notify(!0);
                    t < 0
                        ? (this._target[i] = s)
                        : ((o = (t / e) % 2),
                            (o = a && 1 < o ? 2 - o : o),
                            (o = this._easing(Math.min(1, Math.max(0, o)))),
                            (this._target[i] = this._fn(s, n, o)));
                };
                bs.prototype.wait = function () {
                    var i = this._promises || (this._promises = []);
                    return new Promise(function (t, e) {
                        i.push({ res: t, rej: e });
                    });
                };
                bs.prototype._notify = function (t) {
                    var e = t ? "res" : "rej", i = this._promises || [];
                    for (var t_39 = 0; t_39 < i.length; t_39++)
                        i[t_39][e]();
                };
                return bs;
            }());
            var xs = /** @class */ (function () {
                function xs(t, e) {
                    (this._chart = t), (this._properties = new Map()), this.configure(e);
                }
                xs.prototype.configure = function (s) {
                    if (A(s)) {
                        var a_13 = Object.keys(R.animation), n_11 = this._properties;
                        Object.getOwnPropertyNames(s).forEach(function (e) {
                            var t = s[e];
                            if (A(t)) {
                                var i_22 = {};
                                for (var _b = 0, a_14 = a_13; _b < a_14.length; _b++) {
                                    var s_20 = a_14[_b];
                                    i_22[s_20] = t[s_20];
                                }
                                ((O(t.properties) && t.properties) || [e]).forEach(function (t) {
                                    (t !== e && n_11.has(t)) || n_11.set(t, i_22);
                                });
                            }
                        });
                    }
                };
                xs.prototype._animateOptions = function (t, e) {
                    var i = e.options, s = (function (e, i) {
                        if (i) {
                            var t_40 = e.options;
                            if (t_40)
                                return (t_40.$shared &&
                                    (e.options = t_40 =
                                        Object.assign({}, t_40, { $shared: !1, $animations: {} })),
                                    t_40);
                            e.options = i;
                        }
                    })(t, i);
                    if (!s)
                        return [];
                    e = this._createAnimations(s, i);
                    return (i.$shared &&
                        (function (e, t) {
                            var i = [], s = Object.keys(t);
                            for (var t_41 = 0; t_41 < s.length; t_41++) {
                                var a_15 = e[s[t_41]];
                                a_15 && a_15.active() && i.push(a_15.wait());
                            }
                            return Promise.all(i);
                        })(t.options.$animations, i).then(function () {
                            t.options = i;
                        }, function () { }),
                        e);
                };
                xs.prototype._createAnimations = function (e, i) {
                    var s = this._properties, a = [], n = e.$animations || (e.$animations = {}), t = Object.keys(i), o = Date.now();
                    var r;
                    for (r = t.length - 1; 0 <= r; --r) {
                        var c_4 = t[r];
                        if ("$" !== c_4.charAt(0))
                            if ("options" === c_4)
                                a.push.apply(a, this._animateOptions(e, i));
                            else {
                                var l = i[c_4];
                                var t_42 = n[c_4];
                                var h = s.get(c_4);
                                if (t_42) {
                                    if (h && t_42.active()) {
                                        t_42.update(h, l, o);
                                        continue;
                                    }
                                    t_42.cancel();
                                }
                                h && h.duration
                                    ? ((n[c_4] = t_42 = new bs(h, e, c_4, l)), a.push(t_42))
                                    : (e[c_4] = l);
                            }
                    }
                    return a;
                };
                xs.prototype.update = function (t, e) {
                    {
                        if (0 !== this._properties.size)
                            return (t = this._createAnimations(t, e)).length
                                ? (l.add(this._chart, t), !0)
                                : void 0;
                        Object.assign(t, e);
                    }
                };
                return xs;
            }());
            function vs(t, e) {
                var t = (t && t.options) || {}, i = t.reverse, s = void 0 === t.min ? e : 0, t = void 0 === t.max ? e : 0;
                return { start: i ? t : s, end: i ? s : t };
            }
            function _s(t, e) {
                var i = [], s = t._getSortedDatasetMetas(e);
                var a, n;
                for (a = 0, n = s.length; a < n; ++a)
                    i.push(s[a].index);
                return i;
            }
            function ys(t, e, i, s) {
                if (s === void 0) { s = {}; }
                var a = t.keys, n = "single" === s.mode;
                var o, r, l, h;
                if (null !== e) {
                    for (o = 0, r = a.length; o < r; ++o) {
                        if ((l = +a[o]) === i) {
                            if (s.all)
                                continue;
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
                for (var _b = 0, _c = e.getMatchingVisibleMetas(s).reverse(); _b < _c.length; _b++) {
                    var a_16 = _c[_b];
                    var e_22 = t[a_16.index];
                    if ((i && 0 < e_22) || (!i && e_22 < 0))
                        return a_16.index;
                }
                return null;
            }
            function ks(t, e) {
                var i = t.chart, s = t._cachedMeta, a = i._stacks || (i._stacks = {}), n = s.iScale, o = s.vScale, r = s.index, l = n.axis, h = o.axis, c = "".concat(n.id, ".").concat(o.id, ".") + (s.stack || s.type), d = e.length;
                var u;
                for (var t_43 = 0; t_43 < d; ++t_43) {
                    var i_23 = e[t_43], _b = i_23, _c = l, n_12 = _b[_c], _d = h, d_5 = _b[_d];
                    ((u = (i_23._stacks || (i_23._stacks = {}))[h] =
                        (function (t, e, i) {
                            var s = t[e] || (t[e] = {});
                            return s[i] || (s[i] = {});
                        })(a, c, n_12))[r] = d_5),
                        (u._top = ws(u, o, !0, s.type)),
                        (u._bottom = ws(u, o, !1, s.type)),
                        ((u._visualValues || (u._visualValues = {}))[r] = d_5);
                }
            }
            function Ss(t, e) {
                var i = t.scales;
                return Object.keys(i)
                    .filter(function (t) { return i[t].axis === e; })
                    .shift();
            }
            function Ps(t, e) {
                var i = t.controller.index, s = t.vScale && t.vScale.axis;
                if (s) {
                    e = e || t._parsed;
                    for (var _b = 0, e_23 = e; _b < e_23.length; _b++) {
                        var t_44 = e_23[_b];
                        var e_24 = t_44._stacks;
                        if (!e_24 || void 0 === e_24[s] || void 0 === e_24[s][i])
                            return;
                        delete e_24[s][i],
                            void 0 !== e_24[s]._visualValues &&
                                void 0 !== e_24[s]._visualValues[i] &&
                                delete e_24[s]._visualValues[i];
                    }
                }
            }
            var Ds = function (t) { return "reset" === t || "none" === t; }, Cs = function (t, e) { return (e ? t : Object.assign({}, t)); };
            var Os = /** @class */ (function () {
                function Os(t, e) {
                    var _newTarget = this.constructor;
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
                        (this.datasetElementType = _newTarget.datasetElementType),
                        (this.dataElementType = _newTarget.dataElementType),
                        this.initialize();
                }
                Os.prototype.initialize = function () {
                    var t = this._cachedMeta;
                    this.configure(),
                        this.linkScales(),
                        (t._stacked = Ms(t.vScale, t)),
                        this.addElements(),
                        this.options.fill &&
                            !this.chart.isPluginEnabled("filler") &&
                            console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
                };
                Os.prototype.updateIndex = function (t) {
                    this.index !== t && Ps(this._cachedMeta), (this.index = t);
                };
                Os.prototype.linkScales = function () {
                    var t = this.chart, e = this._cachedMeta, i = this.getDataset(), s = function (t, e, i, s) { return ("x" === t ? e : "r" === t ? s : i); }, a = (e.xAxisID = T(i.xAxisID, Ss(t, "x"))), n = (e.yAxisID = T(i.yAxisID, Ss(t, "y"))), o = (e.rAxisID = T(i.rAxisID, Ss(t, "r"))), r = e.indexAxis, l = (e.iAxisID = s(r, a, n, o)), h = (e.vAxisID = s(r, n, a, o));
                    (e.xScale = this.getScaleForId(a)),
                        (e.yScale = this.getScaleForId(n)),
                        (e.rScale = this.getScaleForId(o)),
                        (e.iScale = this.getScaleForId(l)),
                        (e.vScale = this.getScaleForId(h));
                };
                Os.prototype.getDataset = function () {
                    return this.chart.data.datasets[this.index];
                };
                Os.prototype.getMeta = function () {
                    return this.chart.getDatasetMeta(this.index);
                };
                Os.prototype.getScaleForId = function (t) {
                    return this.chart.scales[t];
                };
                Os.prototype._getOtherScale = function (t) {
                    var e = this._cachedMeta;
                    return t === e.iScale ? e.vScale : e.iScale;
                };
                Os.prototype.reset = function () {
                    this._update("reset");
                };
                Os.prototype._destroy = function () {
                    var t = this._cachedMeta;
                    this._data && Mt(this._data, this), t._stacked && Ps(t);
                };
                Os.prototype._dataCheck = function () {
                    var t = this.getDataset(), e = t.data || (t.data = []), i = this._data;
                    if (A(e))
                        this._data = (function (t) {
                            var e = Object.keys(t), i = new Array(e.length);
                            var s, a, n;
                            for (s = 0, a = e.length; s < a; ++s)
                                (n = e[s]), (i[s] = { x: n, y: t[n] });
                            return i;
                        })(e);
                    else if (i !== e) {
                        if (i) {
                            Mt(i, this);
                            var t_45 = this._cachedMeta;
                            Ps(t_45), (t_45._parsed = []);
                        }
                        e && Object.isExtensible(e) && yt(e, this),
                            (this._syncList = []),
                            (this._data = e);
                    }
                };
                Os.prototype.addElements = function () {
                    var t = this._cachedMeta;
                    this._dataCheck(),
                        this.datasetElementType &&
                            (t.dataset = new this.datasetElementType());
                };
                Os.prototype.buildOrUpdateElements = function (t) {
                    var e = this._cachedMeta, i = this.getDataset();
                    var s = !1;
                    this._dataCheck();
                    var a = e._stacked;
                    (e._stacked = Ms(e.vScale, e)),
                        e.stack !== i.stack && ((s = !0), Ps(e), (e.stack = i.stack)),
                        this._resyncElements(t),
                        (!s && a === e._stacked) || ks(this, e._parsed);
                };
                Os.prototype.configure = function () {
                    var t = this.chart.config, e = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), e, !0);
                    (this.options = t.createResolver(i, this.getContext())),
                        (this._parsing = this.options.parsing),
                        (this._cachedDataOpts = {});
                };
                Os.prototype.parse = function (t, e) {
                    var _b = this, i = _b._cachedMeta, s = _b._data, a = i.iScale, n = i._stacked, o = a.axis;
                    var r, l, h, c = (0 === t && e === s.length) || i._sorted, d = 0 < t && i._parsed[t - 1];
                    if (!1 === this._parsing)
                        (i._parsed = s), (i._sorted = !0), (h = s);
                    else {
                        h = O(s[t])
                            ? this.parseArrayData(i, s, t, e)
                            : A(s[t])
                                ? this.parseObjectData(i, s, t, e)
                                : this.parsePrimitiveData(i, s, t, e);
                        var a_17 = function () { return null === l[o] || (d && l[o] < d[o]); };
                        for (r = 0; r < e; ++r)
                            (i._parsed[r + t] = l = h[r]), c && (a_17() && (c = !1), (d = l));
                        i._sorted = c;
                    }
                    n && ks(this, h);
                };
                Os.prototype.parsePrimitiveData = function (t, e, i, s) {
                    var _b;
                    var a = t.iScale, n = t.vScale, o = a.axis, r = n.axis, l = a.getLabels(), h = a === n, c = new Array(s);
                    var d, u, g;
                    for (d = 0, u = s; d < u; ++d)
                        (g = d + i),
                            (c[d] = (_b = {}, _b[o] = h || a.parse(l[g], g), _b[r] = n.parse(e[g], g), _b));
                    return c;
                };
                Os.prototype.parseArrayData = function (t, e, i, s) {
                    var a = t.xScale, n = t.yScale, o = new Array(s);
                    var r, l, h, c;
                    for (r = 0, l = s; r < l; ++r)
                        (c = e[(h = r + i)]),
                            (o[r] = { x: a.parse(c[0], h), y: n.parse(c[1], h) });
                    return o;
                };
                Os.prototype.parseObjectData = function (t, e, i, s) {
                    var a = t.xScale, n = t.yScale, _b = this._parsing, _c = _b.xAxisKey, o = _c === void 0 ? "x" : _c, _d = _b.yAxisKey, r = _d === void 0 ? "y" : _d, l = new Array(s);
                    var h, c, d, u;
                    for (h = 0, c = s; h < c; ++h)
                        (u = e[(d = h + i)]),
                            (l[h] = { x: a.parse(m(u, o), d), y: n.parse(m(u, r), d) });
                    return l;
                };
                Os.prototype.getParsed = function (t) {
                    return this._cachedMeta._parsed[t];
                };
                Os.prototype.getDataElement = function (t) {
                    return this._cachedMeta.data[t];
                };
                Os.prototype.applyStack = function (t, e, i) {
                    var s = this.chart, a = this._cachedMeta, n = e[t.axis];
                    return ys({ keys: _s(s, !0), values: e._stacks[t.axis]._visualValues }, n, a.index, { mode: i });
                };
                Os.prototype.updateRangeFromParsed = function (t, e, i, s) {
                    var a = i[e.axis];
                    var n = null === a ? NaN : a;
                    i = s && i._stacks[e.axis];
                    s && i && ((s.values = i), (n = ys(s, a, this._cachedMeta.index))),
                        (t.min = Math.min(t.min, n)),
                        (t.max = Math.max(t.max, n));
                };
                Os.prototype.getMinMax = function (e, t) {
                    var i = this._cachedMeta, s = i._parsed, a = i._sorted && e === i.iScale, n = s.length, o = this._getOtherScale(e), r = ((d = this.chart),
                        t &&
                            !i.hidden &&
                            i._stacked && { keys: _s(d, !0), values: null }), l = {
                        min: Number.POSITIVE_INFINITY,
                        max: Number.NEGATIVE_INFINITY,
                    }, _b = (function () {
                        var _b = o.getUserBounds(), t = _b.min, e = _b.max, i = _b.minDefined, s = _b.maxDefined;
                        return {
                            min: i ? t : Number.NEGATIVE_INFINITY,
                            max: s ? e : Number.POSITIVE_INFINITY,
                        };
                    })(), h = _b.min, c = _b.max;
                    var d;
                    var u, g;
                    function f() {
                        var t = (g = s[u])[o.axis];
                        return !p(g[e.axis]) || h > t || c < t;
                    }
                    for (u = 0; u < n && (f() || (this.updateRangeFromParsed(l, e, g, r), !a)); ++u)
                        ;
                    if (a)
                        for (u = n - 1; 0 <= u; --u)
                            if (!f()) {
                                this.updateRangeFromParsed(l, e, g, r);
                                break;
                            }
                    return l;
                };
                Os.prototype.getAllParsedValues = function (t) {
                    var e = this._cachedMeta._parsed, i = [];
                    var s, a, n;
                    for (s = 0, a = e.length; s < a; ++s)
                        p((n = e[s][t.axis])) && i.push(n);
                    return i;
                };
                Os.prototype.getMaxOverflow = function () {
                    return !1;
                };
                Os.prototype.getLabelAndValue = function (t) {
                    var e = this._cachedMeta, i = e.iScale, s = e.vScale, a = this.getParsed(t);
                    return {
                        label: i ? "" + i.getLabelForValue(a[i.axis]) : "",
                        value: s ? "" + s.getLabelForValue(a[s.axis]) : "",
                    };
                };
                Os.prototype._update = function (t) {
                    var e = this._cachedMeta;
                    this.update(t || "default"),
                        (e._clip = (function (t) {
                            var e, i, s, a;
                            return (A(t)
                                ? ((e = t.top), (i = t.right), (s = t.bottom), (a = t.left))
                                : (e = i = s = a = t),
                                { top: e, right: i, bottom: s, left: a, disabled: !1 === t });
                        })(T(this.options.clip, (function (t, e, i) {
                            if (!1 === i)
                                return !1;
                            (t = vs(t, i)), (e = vs(e, i));
                            return {
                                top: e.end,
                                right: t.end,
                                bottom: e.start,
                                left: t.start,
                            };
                        })(e.xScale, e.yScale, this.getMaxOverflow()))));
                };
                Os.prototype.update = function (t) { };
                Os.prototype.draw = function () {
                    var t = this._ctx, e = this.chart, i = this._cachedMeta, s = i.data || [], a = e.chartArea, n = [], o = this._drawStart || 0, r = this._drawCount || s.length - o, l = this.options.drawActiveElementsOnTop;
                    var h;
                    for (i.dataset && i.dataset.draw(t, a, o, r), h = o; h < o + r; ++h) {
                        var e_25 = s[h];
                        e_25.hidden || (e_25.active && l ? n.push(e_25) : e_25.draw(t, a));
                    }
                    for (h = 0; h < n.length; ++h)
                        n[h].draw(t, a);
                };
                Os.prototype.getStyle = function (t, e) {
                    e = e ? "active" : "default";
                    return void 0 === t && this._cachedMeta.dataset
                        ? this.resolveDatasetElementOptions(e)
                        : this.resolveDataElementOptions(t || 0, e);
                };
                Os.prototype.getContext = function (t, e, i) {
                    var s, a = this.getDataset();
                    var n;
                    if (0 <= t && t < this._cachedMeta.data.length) {
                        var e_26 = this._cachedMeta.data[t];
                        ((n =
                            e_26.$context ||
                                (e_26.$context = Pi(this.getContext(), {
                                    active: !1,
                                    dataIndex: t,
                                    parsed: void 0,
                                    raw: void 0,
                                    element: e_26,
                                    index: t,
                                    mode: "default",
                                    type: "data",
                                }))).parsed = this.getParsed(t)),
                            (n.raw = a.data[t]),
                            (n.index = n.dataIndex = t);
                    }
                    else
                        ((n = this.$context || (this.$context = ((t = this.chart.getContext()), (s = this.index), Pi(t, { active: !1, dataset: void 0, datasetIndex: s, index: s, mode: "default", type: "dataset" })))).dataset = a), (n.index = n.datasetIndex = this.index);
                    return (n.active = !!e), (n.mode = i), n;
                };
                Os.prototype.resolveDatasetElementOptions = function (t) {
                    return this._resolveElementOptions(this.datasetElementType.id, t);
                };
                Os.prototype.resolveDataElementOptions = function (t, e) {
                    return this._resolveElementOptions(this.dataElementType.id, e, t);
                };
                Os.prototype._resolveElementOptions = function (t, e, i) {
                    var _this = this;
                    if (e === void 0) { e = "default"; }
                    var s = "active" === e, a = this._cachedDataOpts, n = t + "-" + e, o = a[n], r = this.enableOptionSharing && G(i);
                    if (o)
                        return Cs(o, r);
                    var l = this.chart.config, h = l.datasetElementScopeKeys(this._type, t), c = s ? [t + "Hover", "hover", t, ""] : [t, ""], d = l.getOptionScopes(this.getDataset(), h), u = Object.keys(R.elements[t]), g = l.resolveNamedOptions(d, u, function () { return _this.getContext(i, s, e); }, c);
                    return (g.$shared && ((g.$shared = r), (a[n] = Object.freeze(Cs(g, r)))), g);
                };
                Os.prototype._resolveAnimations = function (t, e, i) {
                    var s = this.chart, a = this._cachedDataOpts, n = "animation-" + e, o = a[n];
                    if (o)
                        return o;
                    var r;
                    if (!1 !== s.options.animation) {
                        var s_21 = this.chart.config, a_18 = s_21.datasetAnimationScopeKeys(this._type, e), n_13 = s_21.getOptionScopes(this.getDataset(), a_18);
                        r = s_21.createResolver(n_13, this.getContext(t, i, e));
                    }
                    t = new xs(s, r && r.animations);
                    return r && r._cacheable && (a[n] = Object.freeze(t)), t;
                };
                Os.prototype.getSharedOptions = function (t) {
                    if (t.$shared)
                        return (this._sharedOptions ||
                            (this._sharedOptions = Object.assign({}, t)));
                };
                Os.prototype.includeOptions = function (t, e) {
                    return !e || Ds(t) || this.chart._animationsDisabled;
                };
                Os.prototype._getSharedOptions = function (t, e) {
                    var t = this.resolveDataElementOptions(t, e), i = this._sharedOptions, s = this.getSharedOptions(t), i = this.includeOptions(e, s) || s !== i;
                    return (this.updateSharedOptions(s, e, t),
                        { sharedOptions: s, includeOptions: i });
                };
                Os.prototype.updateElement = function (t, e, i, s) {
                    Ds(s)
                        ? Object.assign(t, i)
                        : this._resolveAnimations(e, s).update(t, i);
                };
                Os.prototype.updateSharedOptions = function (t, e, i) {
                    t && !Ds(e) && this._resolveAnimations(void 0, e).update(t, i);
                };
                Os.prototype._setStyle = function (t, e, i, s) {
                    t.active = s;
                    var a = this.getStyle(e, s);
                    this._resolveAnimations(e, i, s).update(t, {
                        options: (!s && this.getSharedOptions(a)) || a,
                    });
                };
                Os.prototype.removeHoverStyle = function (t, e, i) {
                    this._setStyle(t, i, "active", !1);
                };
                Os.prototype.setHoverStyle = function (t, e, i) {
                    this._setStyle(t, i, "active", !0);
                };
                Os.prototype._removeDatasetHoverStyle = function () {
                    var t = this._cachedMeta.dataset;
                    t && this._setStyle(t, void 0, "active", !1);
                };
                Os.prototype._setDatasetHoverStyle = function () {
                    var t = this._cachedMeta.dataset;
                    t && this._setStyle(t, void 0, "active", !0);
                };
                Os.prototype._resyncElements = function (t) {
                    var e = this._data, i = this._cachedMeta.data;
                    for (var _b = 0, _c = this._syncList; _b < _c.length; _b++) {
                        var _d = _c[_b], t_46 = _d[0], e_27 = _d[1], i_24 = _d[2];
                        this[t_46](e_27, i_24);
                    }
                    this._syncList = [];
                    var s = i.length, a = e.length, n = Math.min(a, s);
                    n && this.parse(0, n),
                        s < a
                            ? this._insertElements(s, a - s, t)
                            : a < s && this._removeElements(a, s - a);
                };
                Os.prototype._insertElements = function (t, e, i) {
                    if (i === void 0) { i = !0; }
                    var s = this._cachedMeta, a = s.data, n = t + e;
                    var o;
                    var r = function (t) {
                        for (t.length += e, o = t.length - 1; o >= n; o--)
                            t[o] = t[o - e];
                    };
                    for (r(a), o = t; o < n; ++o)
                        a[o] = new this.dataElementType();
                    this._parsing && r(s._parsed),
                        this.parse(t, e),
                        i && this.updateElements(a, t, e, "reset");
                };
                Os.prototype.updateElements = function (t, e, i, s) { };
                Os.prototype._removeElements = function (t, e) {
                    var i = this._cachedMeta;
                    var s;
                    this._parsing &&
                        ((s = i._parsed.splice(t, e)), i._stacked && Ps(i, s)),
                        i.data.splice(t, e);
                };
                Os.prototype._sync = function (t) {
                    var e, i, s;
                    this._parsing
                        ? this._syncList.push(t)
                        : ((e = t[0], i = t[1], s = t[2]), this[e](i, s)),
                        this.chart._dataChanges.push(__spreadArray([this.index], t, true));
                };
                Os.prototype._onDataPush = function () {
                    var t = arguments.length;
                    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
                };
                Os.prototype._onDataPop = function () {
                    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
                };
                Os.prototype._onDataShift = function () {
                    this._sync(["_removeElements", 0, 1]);
                };
                Os.prototype._onDataSplice = function (t, e) {
                    e && this._sync(["_removeElements", t, e]);
                    e = arguments.length - 2;
                    e && this._sync(["_insertElements", t, e]);
                };
                Os.prototype._onDataUnshift = function () {
                    this._sync(["_insertElements", 0, arguments.length]);
                };
                Os.defaults = {};
                Os.datasetElementType = null;
                Os.dataElementType = null;
                return Os;
            }());
            var e = /** @class */ (function () {
                function e() {
                    this.active = !1;
                }
                e.prototype.tooltipPosition = function (t) {
                    var _b = this.getProps(["x", "y"], t), t = _b.x, e = _b.y;
                    return { x: t, y: e };
                };
                e.prototype.hasValue = function () {
                    return rt(this.x) && rt(this.y);
                };
                e.prototype.getProps = function (t, e) {
                    var _this = this;
                    var i = this.$animations;
                    if (!e || !i)
                        return this;
                    var s = {};
                    return (t.forEach(function (t) {
                        s[t] = i[t] && i[t].active() ? i[t]._to : _this[t];
                    }),
                        s);
                };
                e.defaults = {};
                e.defaultRoutes = void 0;
                return e;
            }());
            function As(t, e, i, s, a) {
                var n = T(s, 0), o = Math.min(T(a, t.length), t.length);
                var r, l, h, c = 0;
                for (i = Math.ceil(i), a && (i = (r = a - s) / Math.floor(r / i)), h = n; h < 0;)
                    c++, (h = Math.round(n + c * i));
                for (l = Math.max(n, 0); l < o; l++)
                    l === h && (e.push(t[l]), c++, (h = Math.round(n + c * i)));
            }
            var Ts = function (t, e, i) {
                return "top" === e || "left" === e ? t[e] + i : t[e] - i;
            }, Ls = function (t, e) { return Math.min(e || t, t); };
            function Es(t, e) {
                var i = [], s = t.length / e, a = t.length;
                var n = 0;
                for (; n < a; n += s)
                    i.push(t[Math.floor(n)]);
                return i;
            }
            function Rs(t) {
                return t.drawTicks ? t.tickLength : 0;
            }
            function Is(t, e) {
                if (!t.display)
                    return 0;
                var e = z(t.font, e), i = I(t.padding);
                return (O(t.text) ? t.text.length : 1) * e.lineHeight + i.height;
            }
            var zs = /** @class */ (function (_super) {
                __extends(zs, _super);
                function zs(t) {
                    var _this = this;
                    _this = _super.call(this) || this,
                        (_this.id = t.id),
                        (_this.type = t.type),
                        (_this.options = void 0),
                        (_this.ctx = t.ctx),
                        (_this.chart = t.chart),
                        (_this.top = void 0),
                        (_this.bottom = void 0),
                        (_this.left = void 0),
                        (_this.right = void 0),
                        (_this.width = void 0),
                        (_this.height = void 0),
                        (_this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
                        (_this.maxWidth = void 0),
                        (_this.maxHeight = void 0),
                        (_this.paddingTop = void 0),
                        (_this.paddingBottom = void 0),
                        (_this.paddingLeft = void 0),
                        (_this.paddingRight = void 0),
                        (_this.axis = void 0),
                        (_this.labelRotation = void 0),
                        (_this.min = void 0),
                        (_this.max = void 0),
                        (_this._range = void 0),
                        (_this.ticks = []),
                        (_this._gridLineItems = null),
                        (_this._labelItems = null),
                        (_this._labelSizes = null),
                        (_this._length = 0),
                        (_this._maxLength = 0),
                        (_this._longestTextCache = {}),
                        (_this._startPixel = void 0),
                        (_this._endPixel = void 0),
                        (_this._reversePixels = !1),
                        (_this._userMax = void 0),
                        (_this._userMin = void 0),
                        (_this._suggestedMax = void 0),
                        (_this._suggestedMin = void 0),
                        (_this._ticksLength = 0),
                        (_this._borderValue = 0),
                        (_this._cache = {}),
                        (_this._dataLimitsCached = !1),
                        (_this.$context = void 0);
                    return _this;
                }
                zs.prototype.init = function (t) {
                    (this.options = t.setContext(this.getContext())),
                        (this.axis = t.axis),
                        (this._userMin = this.parse(t.min)),
                        (this._userMax = this.parse(t.max)),
                        (this._suggestedMin = this.parse(t.suggestedMin)),
                        (this._suggestedMax = this.parse(t.suggestedMax));
                };
                zs.prototype.parse = function (t, e) {
                    return t;
                };
                zs.prototype.getUserBounds = function () {
                    var _b = this, t = _b._userMin, e = _b._userMax, i = _b._suggestedMin, s = _b._suggestedMax, t = g(t, Number.POSITIVE_INFINITY), e = g(e, Number.NEGATIVE_INFINITY), i = g(i, Number.POSITIVE_INFINITY), s = g(s, Number.NEGATIVE_INFINITY);
                    return {
                        min: g(t, i),
                        max: g(e, s),
                        minDefined: p(t),
                        maxDefined: p(e),
                    };
                };
                zs.prototype.getMinMax = function (i) {
                    var s, _b = this.getUserBounds(), a = _b.min, n = _b.max, o = _b.minDefined, r = _b.maxDefined;
                    if (o && r)
                        return { min: a, max: n };
                    var l = this.getMatchingVisibleMetas();
                    for (var t_47 = 0, e_28 = l.length; t_47 < e_28; ++t_47)
                        (s = l[t_47].controller.getMinMax(this, i)),
                            o || (a = Math.min(a, s.min)),
                            r || (n = Math.max(n, s.max));
                    return ((a = r && a > n ? n : a),
                        (n = o && a > n ? a : n),
                        { min: g(a, g(n, a)), max: g(n, g(a, n)) });
                };
                zs.prototype.getPadding = function () {
                    return {
                        left: this.paddingLeft || 0,
                        top: this.paddingTop || 0,
                        right: this.paddingRight || 0,
                        bottom: this.paddingBottom || 0,
                    };
                };
                zs.prototype.getTicks = function () {
                    return this.ticks;
                };
                zs.prototype.getLabels = function () {
                    var t = this.chart.data;
                    return (this.options.labels ||
                        (this.isHorizontal() ? t.xLabels : t.yLabels) ||
                        t.labels ||
                        []);
                };
                zs.prototype.getLabelItems = function (t) {
                    if (t === void 0) { t = this.chart.chartArea; }
                    return (this._labelItems || (this._labelItems = this._computeLabelItems(t)));
                };
                zs.prototype.beforeLayout = function () {
                    (this._cache = {}), (this._dataLimitsCached = !1);
                };
                zs.prototype.beforeUpdate = function () {
                    d(this.options.beforeUpdate, [this]);
                };
                zs.prototype.update = function (t, e, i) {
                    var _b = this.options, s = _b.beginAtZero, a = _b.grace, n = _b.ticks, o = n.sampleSize, t = (this.beforeUpdate(),
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
                                var e = t.options.ticks, i = ((c = (t = t).options.offset),
                                    (d = t._tickSize()),
                                    (c = t._length / d + (c ? 0 : 1)),
                                    (t = t._maxLength / d),
                                    Math.floor(Math.min(c, t))), a = Math.min(e.maxTicksLimit || i, i), n = e.major.enabled
                                    ? (function (t) {
                                        var e = [];
                                        var i, s;
                                        for (i = 0, s = t.length; i < s; i++)
                                            t[i].major && e.push(i);
                                        return e;
                                    })(s)
                                    : [], o = n.length, r = n[0], l = n[o - 1], h = [];
                                var c, d;
                                if (a < o) {
                                    {
                                        var u = s;
                                        var g = h;
                                        var f = n;
                                        var p = o / a;
                                        var t_48, e_29 = 0, i_25 = f[0];
                                        for (p = Math.ceil(p), t_48 = 0; t_48 < u.length; t_48++)
                                            t_48 === i_25 && (g.push(u[t_48]), e_29++, (i_25 = f[e_29 * p]));
                                    }
                                    return h;
                                }
                                var m = (function (t, i, e) {
                                    var t = (function (t) {
                                        var e = t.length;
                                        var i, s;
                                        if (e < 2)
                                            return !1;
                                        for (s = t[0], i = 1; i < e; ++i)
                                            if (t[i] - t[i - 1] !== s)
                                                return !1;
                                        return s;
                                    })(t), s = i.length / e;
                                    if (!t)
                                        return Math.max(s, 1);
                                    var a = ot(t);
                                    for (var t_49 = 0, e_30 = a.length - 1; t_49 < e_30; t_49++) {
                                        var i_26 = a[t_49];
                                        if (i_26 > s)
                                            return i_26;
                                    }
                                    return Math.max(s, 1);
                                })(n, s, a);
                                if (0 < o) {
                                    var t_50, e_31;
                                    var i_27 = 1 < o ? Math.round((l - r) / (o - 1)) : null;
                                    for (As(s, h, m, P(i_27) ? 0 : r - i_27, r), t_50 = 0, e_31 = o - 1; t_50 < e_31; t_50++)
                                        As(s, h, m, n[t_50], n[t_50 + 1]);
                                    return As(s, h, m, l, P(i_27) ? s.length : l + i_27), h;
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
                };
                zs.prototype.configure = function () {
                    var t, e, i = this.options.reverse;
                    this.isHorizontal()
                        ? ((t = this.left), (e = this.right))
                        : ((t = this.top), (e = this.bottom), (i = !i)),
                        (this._startPixel = t),
                        (this._endPixel = e),
                        (this._reversePixels = i),
                        (this._length = e - t),
                        (this._alignToPixels = this.options.alignToPixels);
                };
                zs.prototype.afterUpdate = function () {
                    d(this.options.afterUpdate, [this]);
                };
                zs.prototype.beforeSetDimensions = function () {
                    d(this.options.beforeSetDimensions, [this]);
                };
                zs.prototype.setDimensions = function () {
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
                };
                zs.prototype.afterSetDimensions = function () {
                    d(this.options.afterSetDimensions, [this]);
                };
                zs.prototype._callHooks = function (t) {
                    this.chart.notifyPlugins(t, this.getContext()),
                        d(this.options[t], [this]);
                };
                zs.prototype.beforeDataLimits = function () {
                    this._callHooks("beforeDataLimits");
                };
                zs.prototype.determineDataLimits = function () { };
                zs.prototype.afterDataLimits = function () {
                    this._callHooks("afterDataLimits");
                };
                zs.prototype.beforeBuildTicks = function () {
                    this._callHooks("beforeBuildTicks");
                };
                zs.prototype.buildTicks = function () {
                    return [];
                };
                zs.prototype.afterBuildTicks = function () {
                    this._callHooks("afterBuildTicks");
                };
                zs.prototype.beforeTickToLabelConversion = function () {
                    d(this.options.beforeTickToLabelConversion, [this]);
                };
                zs.prototype.generateTickLabels = function (t) {
                    var e = this.options.ticks;
                    var i, s, a;
                    for (i = 0, s = t.length; i < s; i++)
                        (a = t[i]).label = d(e.callback, [a.value, i, t], this);
                };
                zs.prototype.afterTickToLabelConversion = function () {
                    d(this.options.afterTickToLabelConversion, [this]);
                };
                zs.prototype.beforeCalculateLabelRotation = function () {
                    d(this.options.beforeCalculateLabelRotation, [this]);
                };
                zs.prototype.calculateLabelRotation = function () {
                    var t, e, i, s, a = this.options, n = a.ticks, o = Ls(this.ticks.length, a.ticks.maxTicksLimit), r = n.minRotation || 0, l = n.maxRotation;
                    var h, c, d, u = r;
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
                                    (u = ct(Math.min(Math.asin(C((t.highest.height + 6) / h, -1, 1)), Math.asin(C(c / d, -1, 1)) - Math.asin(C(i / d, -1, 1))))),
                                    (u = Math.max(r, Math.min(l, u)))),
                            (this.labelRotation = u));
                };
                zs.prototype.afterCalculateLabelRotation = function () {
                    d(this.options.afterCalculateLabelRotation, [this]);
                };
                zs.prototype.afterAutoSkip = function () { };
                zs.prototype.beforeFit = function () {
                    d(this.options.beforeFit, [this]);
                };
                zs.prototype.fit = function () {
                    var t = { width: 0, height: 0 }, _b = this, e = _b.chart, _c = _b.options, i = _c.ticks, s = _c.title, a = _c.grid, n = this._isVisible(), o = this.isHorizontal();
                    if (n) {
                        var n_14 = Is(s, e.options.font);
                        if ((o
                            ? ((t.width = this.maxWidth), (t.height = Rs(a) + n_14))
                            : ((t.height = this.maxHeight), (t.width = Rs(a) + n_14)),
                            i.display && this.ticks.length)) {
                            var _d = this._getLabelSizes(), e_32 = _d.first, s_22 = _d.last, a_19 = _d.widest, n_15 = _d.highest, r_8 = 2 * i.padding, l_7 = L(this.labelRotation), h_6 = Math.cos(l_7), c_5 = Math.sin(l_7);
                            if (o) {
                                var e_33 = i.mirror ? 0 : c_5 * a_19.width + h_6 * n_15.height;
                                t.height = Math.min(this.maxHeight, t.height + e_33 + r_8);
                            }
                            else {
                                var e_34 = i.mirror ? 0 : h_6 * a_19.width + c_5 * n_15.height;
                                t.width = Math.min(this.maxWidth, t.width + e_34 + r_8);
                            }
                            this._calculatePadding(e_32, s_22, c_5, h_6);
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
                };
                zs.prototype._calculatePadding = function (i, s, a, n) {
                    var _b = this.options, _c = _b.ticks, o = _c.align, r = _c.padding, l = _b.position, h = 0 !== this.labelRotation, c = "top" !== l && "x" === this.axis;
                    if (this.isHorizontal()) {
                        var l_8 = this.getPixelForTick(0) - this.left, d_6 = this.right - this.getPixelForTick(this.ticks.length - 1);
                        var t_51 = 0, e_35 = 0;
                        h
                            ? (e_35 = c
                                ? ((t_51 = n * i.width), a * s.height)
                                : ((t_51 = a * i.height), n * s.width))
                            : "start" === o
                                ? (e_35 = s.width)
                                : "end" === o
                                    ? (t_51 = i.width)
                                    : "inner" !== o && ((t_51 = i.width / 2), (e_35 = s.width / 2)),
                            (this.paddingLeft = Math.max(((t_51 - l_8 + r) * this.width) / (this.width - l_8), 0)),
                            (this.paddingRight = Math.max(((e_35 - d_6 + r) * this.width) / (this.width - d_6), 0));
                    }
                    else {
                        var t_52 = s.height / 2, e_36 = i.height / 2;
                        "start" === o
                            ? ((t_52 = 0), (e_36 = i.height))
                            : "end" === o && ((t_52 = s.height), (e_36 = 0)),
                            (this.paddingTop = t_52 + r),
                            (this.paddingBottom = e_36 + r);
                    }
                };
                zs.prototype._handleMargins = function () {
                    this._margins &&
                        ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
                            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
                            (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
                            (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)));
                };
                zs.prototype.afterFit = function () {
                    d(this.options.afterFit, [this]);
                };
                zs.prototype.isHorizontal = function () {
                    var _b = this.options, t = _b.axis, e = _b.position;
                    return "top" === e || "bottom" === e || "x" === t;
                };
                zs.prototype.isFullSize = function () {
                    return this.options.fullSize;
                };
                zs.prototype._convertTicksToLabels = function (t) {
                    var e, i;
                    for (this.beforeTickToLabelConversion(),
                        this.generateTickLabels(t),
                        e = 0,
                        i = t.length; e < i; e++)
                        P(t[e].label) && (t.splice(e, 1), i--, e--);
                    this.afterTickToLabelConversion();
                };
                zs.prototype._getLabelSizes = function () {
                    var e = this._labelSizes;
                    if (!e) {
                        var i = this.options.ticks.sampleSize;
                        var t_53 = this.ticks;
                        i < t_53.length && (t_53 = Es(t_53, i)),
                            (this._labelSizes = e =
                                this._computeLabelSizes(t_53, t_53.length, this.options.ticks.maxTicksLimit));
                    }
                    return e;
                };
                zs.prototype._computeLabelSizes = function (t, e, i) {
                    var _b = this, s = _b.ctx, a = _b._longestTextCache, n = [], o = [], r = Math.floor(e / Ls(e, i));
                    var l, h, c, d, u, g, f, p, m, b, x, v = 0, _ = 0;
                    for (l = 0; l < e; l += r) {
                        if (((d = t[l].label),
                            (u = this._resolveTickFontOptions(l)),
                            (s.font = g = u.string),
                            (f = a[g] = a[g] || { data: {}, gc: [] }),
                            (p = u.lineHeight),
                            (m = b = 0),
                            P(d) || O(d))) {
                            if (O(d))
                                for (h = 0, c = d.length; h < c; ++h)
                                    P((x = d[h])) ||
                                        O(x) ||
                                        ((m = Le(s, f.data, f.gc, m, x)), (b += p));
                        }
                        else
                            (m = Le(s, f.data, f.gc, m, d)), (b = p);
                        n.push(m), o.push(b), (v = Math.max(m, v)), (_ = Math.max(b, _));
                    }
                    (i = a),
                        (y = e),
                        k(i, function (t) {
                            var e = t.gc, i = e.length / 2;
                            var s;
                            if (y < i) {
                                for (s = 0; s < i; ++s)
                                    delete t.data[e[s]];
                                e.splice(0, i);
                            }
                        });
                    var y, i = n.indexOf(v), M = o.indexOf(_), w = function (t) { return ({ width: n[t] || 0, height: o[t] || 0 }); };
                    return {
                        first: w(0),
                        last: w(e - 1),
                        widest: w(i),
                        highest: w(M),
                        widths: n,
                        heights: o,
                    };
                };
                zs.prototype.getLabelForValue = function (t) {
                    return t;
                };
                zs.prototype.getPixelForValue = function (t, e) {
                    return NaN;
                };
                zs.prototype.getValueForPixel = function (t) { };
                zs.prototype.getPixelForTick = function (t) {
                    var e = this.ticks;
                    return t < 0 || t > e.length - 1
                        ? null
                        : this.getPixelForValue(e[t].value);
                };
                zs.prototype.getPixelForDecimal = function (t) {
                    this._reversePixels && (t = 1 - t);
                    t = this._startPixel + t * this._length;
                    return mt(this._alignToPixels ? Re(this.chart, t, 0) : t);
                };
                zs.prototype.getDecimalForPixel = function (t) {
                    t = (t - this._startPixel) / this._length;
                    return this._reversePixels ? 1 - t : t;
                };
                zs.prototype.getBasePixel = function () {
                    return this.getPixelForValue(this.getBaseValue());
                };
                zs.prototype.getBaseValue = function () {
                    var _b = this, t = _b.min, e = _b.max;
                    return t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0;
                };
                zs.prototype.getContext = function (t) {
                    var e = this.ticks || [];
                    if (0 <= t && t < e.length) {
                        var i_28 = e[t];
                        return (i_28.$context ||
                            (i_28.$context = Pi(this.getContext(), {
                                tick: i_28,
                                index: t,
                                type: "tick",
                            })));
                    }
                    return (this.$context ||
                        (this.$context = Pi(this.chart.getContext(), {
                            scale: this,
                            type: "scale",
                        })));
                };
                zs.prototype._tickSize = function () {
                    var t = this.options.ticks, e = L(this.labelRotation), i = Math.abs(Math.cos(e)), e = Math.abs(Math.sin(e)), s = this._getLabelSizes(), t = t.autoSkipPadding || 0, a = s ? s.widest.width + t : 0, s = s ? s.highest.height + t : 0;
                    return this.isHorizontal()
                        ? a * e < s * i
                            ? a / i
                            : s / e
                        : s * e < a * i
                            ? s / i
                            : a / e;
                };
                zs.prototype._isVisible = function () {
                    var t = this.options.display;
                    return "auto" !== t ? !!t : 0 < this.getMatchingVisibleMetas().length;
                };
                zs.prototype._computeGridLineItems = function (t) {
                    function e(t) {
                        return Re(s, t, f);
                    }
                    var i = this.axis, s = this.chart, a = this.options, n = a.grid, o = a.position, r = a.border, l = n.offset, h = this.isHorizontal(), c = this.ticks.length + (l ? 1 : 0), d = Rs(n), u = [], g = r.setContext(this.getContext()), f = g.display ? g.width : 0, p = f / 2;
                    var m, b, x, v, _, y, M, w, k, S, P, D;
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
                        if ("center" === o)
                            m = e((t.top + t.bottom) / 2 + 0.5);
                        else if (A(o)) {
                            var t_54 = Object.keys(o)[0], i_29 = o[t_54];
                            m = e(this.chart.scales[t_54].getPixelForValue(i_29));
                        }
                        (S = t.top), (D = t.bottom), (y = m + p), (w = y + d);
                    }
                    else if ("y" === i) {
                        if ("center" === o)
                            m = e((t.left + t.right) / 2);
                        else if (A(o)) {
                            var t_55 = Object.keys(o)[0], i_30 = o[t_55];
                            m = e(this.chart.scales[t_55].getPixelForValue(i_30));
                        }
                        (_ = m - p), (M = _ - d), (k = t.left), (P = t.right);
                    }
                    var t = T(a.ticks.maxTicksLimit, c), C = Math.max(1, Math.ceil(c / t));
                    for (b = 0; b < c; b += C) {
                        var t_56 = this.getContext(b), i_31 = n.setContext(t_56), a_20 = r.setContext(t_56), A_2 = i_31.lineWidth, o_15 = i_31.color, T_1 = a_20.dash || [], c_6 = a_20.dashOffset, d_7 = i_31.tickWidth, g_3 = i_31.tickColor, f_4 = i_31.tickBorderDash || [], p_3 = i_31.tickBorderDashOffset;
                        void 0 !==
                            (x = (function (t, e, i) {
                                var s = t.ticks.length, a = Math.min(e, s - 1), n = t._startPixel, o = t._endPixel;
                                var r, l = t.getPixelForTick(a);
                                if (!(i &&
                                    ((r =
                                        1 === s
                                            ? Math.max(l - n, o - l)
                                            : 0 === e
                                                ? (t.getPixelForTick(1) - l) / 2
                                                : (l - t.getPixelForTick(a - 1)) / 2),
                                        (l += a < e ? r : -r) < n - 1e-6 || l > o + 1e-6)))
                                    return l;
                            })(this, b, l)) &&
                            ((v = Re(s, x, A_2)),
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
                                    width: A_2,
                                    color: o_15,
                                    borderDash: T_1,
                                    borderDashOffset: c_6,
                                    tickWidth: d_7,
                                    tickColor: g_3,
                                    tickBorderDash: f_4,
                                    tickBorderDashOffset: p_3,
                                }));
                    }
                    return (this._ticksLength = c), (this._borderValue = m), u;
                };
                zs.prototype._computeLabelItems = function (s) {
                    var a = this.axis, n = this.options, o = n.position, e = n.ticks, r = this.isHorizontal(), l = this.ticks, h = e.align, c = e.crossAlign, t = e.padding, d = e.mirror, i = Rs(n.grid), u = i + t, g = d ? -t : u, f = -L(this.labelRotation), p = [];
                    var m, b, x, v, _, y, M, w, k, S, P, D = "middle";
                    if ("top" === o)
                        (_ = this.bottom - g), (y = this._getXAxisLabelAlignment());
                    else if ("bottom" === o)
                        (_ = this.top + g), (y = this._getXAxisLabelAlignment());
                    else if ("left" === o) {
                        var s_23 = this._getYAxisLabelAlignment(i);
                        (y = s_23.textAlign), (v = s_23.x);
                    }
                    else if ("right" === o) {
                        var s_24 = this._getYAxisLabelAlignment(i);
                        (y = s_24.textAlign), (v = s_24.x);
                    }
                    else if ("x" === a) {
                        if ("center" === o)
                            _ = (s.top + s.bottom) / 2 + u;
                        else if (A(o)) {
                            var s_25 = Object.keys(o)[0], a_21 = o[s_25];
                            _ = this.chart.scales[s_25].getPixelForValue(a_21) + u;
                        }
                        y = this._getXAxisLabelAlignment();
                    }
                    else if ("y" === a) {
                        if ("center" === o)
                            v = (s.left + s.right) / 2 - u;
                        else if (A(o)) {
                            var s_26 = Object.keys(o)[0], a_22 = o[s_26];
                            v = this.chart.scales[s_26].getPixelForValue(a_22);
                        }
                        y = this._getYAxisLabelAlignment(i).textAlign;
                    }
                    "y" === a &&
                        ("start" === h ? (D = "top") : "end" === h && (D = "bottom"));
                    var C = this._getLabelSizes();
                    for (m = 0, b = l.length; m < b; ++m) {
                        x = l[m].label;
                        var s_27 = e.setContext(this.getContext(m)), a_23 = ((M = this.getPixelForTick(m) + e.labelOffset),
                            (k = (w = this._resolveTickFontOptions(m)).lineHeight),
                            (S = O(x) ? x.length : 1) / 2), n_16 = s_27.color, A_3 = s_27.textStrokeColor, h_7 = s_27.textStrokeWidth;
                        var i_32 = void 0, t_57 = y;
                        if ((r
                            ? ((v = M),
                                "inner" === y &&
                                    (t_57 =
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
                                                ? -C.highest.height / 2 - a_23 * k + k
                                                : -C.highest.height + k / 2
                                        : "near" === c || 0 != f
                                            ? k / 2
                                            : "center" === c
                                                ? C.highest.height / 2 - a_23 * k
                                                : C.highest.height - S * k),
                                d && (P *= -1),
                                0 == f || s_27.showLabelBackdrop || (v += (k / 2) * Math.sin(f)))
                            : ((_ = M), (P = ((1 - S) * k) / 2)),
                            s_27.showLabelBackdrop)) {
                            var a_24 = I(s_27.backdropPadding), n_17 = C.heights[m], o_16 = C.widths[m];
                            var t_58 = P - a_24.top, e_37 = 0 - a_24.left;
                            switch (D) {
                                case "middle":
                                    t_58 -= n_17 / 2;
                                    break;
                                case "bottom":
                                    t_58 -= n_17;
                            }
                            switch (y) {
                                case "center":
                                    e_37 -= o_16 / 2;
                                    break;
                                case "right":
                                    e_37 -= o_16;
                            }
                            i_32 = {
                                left: e_37,
                                top: t_58,
                                width: o_16 + a_24.width,
                                height: n_17 + a_24.height,
                                color: s_27.backdropColor,
                            };
                        }
                        p.push({
                            label: x,
                            font: w,
                            textOffset: P,
                            options: {
                                rotation: f,
                                color: n_16,
                                strokeColor: A_3,
                                strokeWidth: h_7,
                                textAlign: t_57,
                                textBaseline: D,
                                translation: [v, _],
                                backdrop: i_32,
                            },
                        });
                    }
                    return p;
                };
                zs.prototype._getXAxisLabelAlignment = function () {
                    var _b = this.options, t = _b.position, e = _b.ticks;
                    if (-L(this.labelRotation))
                        return "top" === t ? "left" : "right";
                    var i = "center";
                    return ("start" === e.align
                        ? (i = "left")
                        : "end" === e.align
                            ? (i = "right")
                            : "inner" === e.align && (i = "inner"),
                        i);
                };
                zs.prototype._getYAxisLabelAlignment = function (t) {
                    var _b = this.options, e = _b.position, _c = _b.ticks, i = _c.crossAlign, s = _c.mirror, a = _c.padding, t = t + a, n = this._getLabelSizes().widest.width;
                    var o, r;
                    return ("left" === e
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
                        { textAlign: o, x: r });
                };
                zs.prototype._computeLabelArea = function () {
                    var t, e;
                    if (!this.options.ticks.mirror)
                        return ((t = this.chart),
                            (e = this.options.position),
                            "left" === e || "right" === e
                                ? {
                                    top: 0,
                                    left: this.left,
                                    bottom: t.height,
                                    right: this.right,
                                }
                                : "top" === e || "bottom" === e
                                    ? {
                                        top: this.top,
                                        left: 0,
                                        bottom: this.bottom,
                                        right: t.width,
                                    }
                                    : void 0);
                };
                zs.prototype.drawBackground = function () {
                    var _b = this, t = _b.ctx, e = _b.options.backgroundColor, i = _b.left, s = _b.top, a = _b.width, n = _b.height;
                    e &&
                        (t.save(), (t.fillStyle = e), t.fillRect(i, s, a, n), t.restore());
                };
                zs.prototype.getLineWidthForValue = function (e) {
                    var t = this.options.grid;
                    if (!this._isVisible() || !t.display)
                        return 0;
                    var i = this.ticks.findIndex(function (t) { return t.value === e; });
                    return 0 <= i ? t.setContext(this.getContext(i)).lineWidth : 0;
                };
                zs.prototype.drawGrid = function (t) {
                    var e = this.options.grid, s = this.ctx, i = this._gridLineItems ||
                        (this._gridLineItems = this._computeGridLineItems(t));
                    var a, n;
                    var o = function (t, e, i) {
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
                            var t_59 = i[a];
                            e.drawOnChartArea &&
                                o({ x: t_59.x1, y: t_59.y1 }, { x: t_59.x2, y: t_59.y2 }, t_59),
                                e.drawTicks &&
                                    o({ x: t_59.tx1, y: t_59.ty1 }, { x: t_59.tx2, y: t_59.ty2 }, {
                                        color: t_59.tickColor,
                                        width: t_59.tickWidth,
                                        borderDash: t_59.tickBorderDash,
                                        borderDashOffset: t_59.tickBorderDashOffset,
                                    });
                        }
                };
                zs.prototype.drawBorder = function () {
                    var _b = this, a = _b.chart, n = _b.ctx, _c = _b.options, t = _c.border, o = _c.grid, r = t.setContext(this.getContext()), l = t.display ? r.width : 0;
                    if (l) {
                        var h = o.setContext(this.getContext(0)).lineWidth, c = this._borderValue;
                        var t_60, e_38, i_33, s_28;
                        this.isHorizontal()
                            ? ((t_60 = Re(a, this.left, l) - l / 2),
                                (e_38 = Re(a, this.right, h) + h / 2),
                                (i_33 = s_28 = c))
                            : ((i_33 = Re(a, this.top, l) - l / 2),
                                (s_28 = Re(a, this.bottom, h) + h / 2),
                                (t_60 = e_38 = c)),
                            n.save(),
                            (n.lineWidth = r.width),
                            (n.strokeStyle = r.color),
                            n.beginPath(),
                            n.moveTo(t_60, i_33),
                            n.lineTo(e_38, s_28),
                            n.stroke(),
                            n.restore();
                    }
                };
                zs.prototype.drawLabels = function (t) {
                    if (this.options.ticks.display) {
                        var e_39 = this.ctx, i_34 = this._computeLabelArea(), s_30 = (i_34 && Ve(e_39, i_34), this.getLabelItems(t));
                        for (var _b = 0, s_29 = s_30; _b < s_29.length; _b++) {
                            var t_61 = s_29[_b];
                            var i_35 = t_61.options, s_31 = t_61.font;
                            He(e_39, t_61.label, 0, t_61.textOffset, s_31, i_35);
                        }
                        i_34 && Be(e_39);
                    }
                };
                zs.prototype.drawTitle = function () {
                    var _b = this, e = _b.ctx, _c = _b.options, i = _c.position, s = _c.title, a = _c.reverse;
                    if (s.display) {
                        var n = z(s.font), o = I(s.padding), r = s.align;
                        var t_62 = n.lineHeight / 2;
                        "bottom" === i || "center" === i || A(i)
                            ? ((t_62 += o.bottom),
                                O(s.text) && (t_62 += n.lineHeight * (s.text.length - 1)))
                            : (t_62 += o.top);
                        var _d = (function (t, e, i, s) {
                            var a = t.top, n = t.left, o = t.bottom, r = t.right, l = t.chart, h = l.chartArea, c = l.scales;
                            var d, u, g, f = 0;
                            var p = o - a, m = r - n;
                            if (t.isHorizontal()) {
                                if (((u = E(s, n, r)), A(i))) {
                                    var t_63 = Object.keys(i)[0], s_32 = i[t_63];
                                    g = c[t_63].getPixelForValue(s_32) + p - e;
                                }
                                else
                                    g =
                                        "center" === i
                                            ? (h.bottom + h.top) / 2 + p - e
                                            : Ts(t, i, e);
                                d = r - n;
                            }
                            else {
                                if (A(i)) {
                                    var t_64 = Object.keys(i)[0], s_33 = i[t_64];
                                    u = c[t_64].getPixelForValue(s_33) - m + e;
                                }
                                else
                                    u =
                                        "center" === i
                                            ? (h.left + h.right) / 2 - m + e
                                            : Ts(t, i, e);
                                (g = E(s, o, a)), (f = "left" === i ? -D : D);
                            }
                            return { titleX: u, titleY: g, maxWidth: d, rotation: f };
                        })(this, t_62, i, r), o = _d.titleX, l = _d.titleY, h = _d.maxWidth, c = _d.rotation;
                        He(e, s.text, 0, 0, n, {
                            color: s.color,
                            maxWidth: h,
                            rotation: c,
                            textAlign: (function (t, e, i) {
                                var s = Dt(t);
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
                };
                zs.prototype.draw = function (t) {
                    this._isVisible() &&
                        (this.drawBackground(),
                            this.drawGrid(t),
                            this.drawBorder(),
                            this.drawTitle(),
                            this.drawLabels(t));
                };
                zs.prototype._layers = function () {
                    var _this = this;
                    var t = this.options, e = (t.ticks && t.ticks.z) || 0, i = T(t.grid && t.grid.z, -1), t = T(t.border && t.border.z, 0);
                    return this._isVisible() && this.draw === zs.prototype.draw
                        ? [
                            {
                                z: i,
                                draw: function (t) {
                                    _this.drawBackground(), _this.drawGrid(t), _this.drawTitle();
                                },
                            },
                            {
                                z: t,
                                draw: function () {
                                    _this.drawBorder();
                                },
                            },
                            {
                                z: e,
                                draw: function (t) {
                                    _this.drawLabels(t);
                                },
                            },
                        ]
                        : [
                            {
                                z: e,
                                draw: function (t) {
                                    _this.draw(t);
                                },
                            },
                        ];
                };
                zs.prototype.getMatchingVisibleMetas = function (t) {
                    var e = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", s = [];
                    var a, n;
                    for (a = 0, n = e.length; a < n; ++a) {
                        var n_18 = e[a];
                        n_18[i] !== this.id || (t && n_18.type !== t) || s.push(n_18);
                    }
                    return s;
                };
                zs.prototype._resolveTickFontOptions = function (t) {
                    return z(this.options.ticks.setContext(this.getContext(t)).font);
                };
                zs.prototype._maxDigits = function () {
                    var t = this._resolveTickFontOptions(0).lineHeight;
                    return (this.isHorizontal() ? this.width : this.height) / t;
                };
                return zs;
            }(e));
            var Fs = /** @class */ (function () {
                function Fs(t, e, i) {
                    (this.type = t),
                        (this.scope = e),
                        (this.override = i),
                        (this.items = Object.create(null));
                }
                Fs.prototype.isForType = function (t) {
                    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
                };
                Fs.prototype.register = function (t) {
                    var e, i, r, l, s = Object.getPrototypeOf(t);
                    var a;
                    "id" in (e = s) && "defaults" in e && (a = this.register(s));
                    var n = this.items, o = t.id, h = this.scope + "." + o;
                    if (o)
                        return (o in n ||
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
                                        Object.keys(l).forEach(function (t) {
                                            var e = t.split("."), i = e.pop(), s = [r].concat(e).join("."), a = l[t].split("."), n = a.pop(), o = a.join(".");
                                            R.route(s, i, o, n);
                                        })),
                                e.descriptors && R.describe(s, e.descriptors),
                                this.override && R.override(t.id, t.overrides)),
                            h);
                    throw new Error("class does not have id: " + t);
                };
                Fs.prototype.get = function (t) {
                    return this.items[t];
                };
                Fs.prototype.unregister = function (t) {
                    var e = this.items, i = t.id, s = this.scope;
                    i in e && delete e[i],
                        s && i in R[s] && (delete R[s][i], this.override && delete fe[i]);
                };
                return Fs;
            }());
            var b = new (/** @class */ (function () {
                function class_3() {
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
                class_3.prototype.add = function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    this._each("register", t);
                };
                class_3.prototype.remove = function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    this._each("unregister", t);
                };
                class_3.prototype.addControllers = function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    this._each("register", t, this.controllers);
                };
                class_3.prototype.addElements = function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    this._each("register", t, this.elements);
                };
                class_3.prototype.addPlugins = function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    this._each("register", t, this.plugins);
                };
                class_3.prototype.addScales = function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    this._each("register", t, this.scales);
                };
                class_3.prototype.getController = function (t) {
                    return this._get(t, this.controllers, "controller");
                };
                class_3.prototype.getElement = function (t) {
                    return this._get(t, this.elements, "element");
                };
                class_3.prototype.getPlugin = function (t) {
                    return this._get(t, this.plugins, "plugin");
                };
                class_3.prototype.getScale = function (t) {
                    return this._get(t, this.scales, "scale");
                };
                class_3.prototype.removeControllers = function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    this._each("unregister", t, this.controllers);
                };
                class_3.prototype.removeElements = function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    this._each("unregister", t, this.elements);
                };
                class_3.prototype.removePlugins = function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    this._each("unregister", t, this.plugins);
                };
                class_3.prototype.removeScales = function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    this._each("unregister", t, this.scales);
                };
                class_3.prototype._each = function (i, t, s) {
                    var _this = this;
                    __spreadArray([], t, true).forEach(function (t) {
                        var e = s || _this._getRegistryForType(t);
                        s || e.isForType(t) || (e === _this.plugins && t.id)
                            ? _this._exec(i, e, t)
                            : k(t, function (t) {
                                var e = s || _this._getRegistryForType(t);
                                _this._exec(i, e, t);
                            });
                    });
                };
                class_3.prototype._exec = function (t, e, i) {
                    var s = K(t);
                    d(i["before" + s], [], i), e[t](i), d(i["after" + s], [], i);
                };
                class_3.prototype._getRegistryForType = function (e) {
                    for (var t_65 = 0; t_65 < this._typedRegistries.length; t_65++) {
                        var i_36 = this._typedRegistries[t_65];
                        if (i_36.isForType(e))
                            return i_36;
                    }
                    return this.plugins;
                };
                class_3.prototype._get = function (t, e, i) {
                    e = e.get(t);
                    if (void 0 === e)
                        throw new Error('"' + t + '" is not a registered ' + i + ".");
                    return e;
                };
                return class_3;
            }()))();
            var Vs = /** @class */ (function () {
                function Vs() {
                    this._init = [];
                }
                Vs.prototype.notify = function (t, e, i, s) {
                    "beforeInit" === e &&
                        ((this._init = this._createDescriptors(t, !0)),
                            this._notify(this._init, t, "install"));
                    (s = s ? this._descriptors(t).filter(s) : this._descriptors(t)),
                        (i = this._notify(s, t, e, i));
                    return ("afterDestroy" === e &&
                        (this._notify(s, t, "stop"),
                            this._notify(this._init, t, "uninstall")),
                        i);
                };
                Vs.prototype._notify = function (t, e, i, s) {
                    s = s || {};
                    for (var _b = 0, t_66 = t; _b < t_66.length; _b++) {
                        var a_25 = t_66[_b];
                        var t_67 = a_25.plugin;
                        if (!1 === d(t_67[i], [e, s, a_25.options], t_67) && s.cancelable)
                            return !1;
                    }
                    return !0;
                };
                Vs.prototype.invalidate = function () {
                    P(this._cache) ||
                        ((this._oldCache = this._cache), (this._cache = void 0));
                };
                Vs.prototype._descriptors = function (t) {
                    if (this._cache)
                        return this._cache;
                    var e = (this._cache = this._createDescriptors(t));
                    return this._notifyStateChanges(t), e;
                };
                Vs.prototype._createDescriptors = function (t, e) {
                    var i, s = t && t.config, a = T(s.options && s.options.plugins, {}), s = (function (t) {
                        var e = {}, i = [], s = Object.keys(b.plugins.items);
                        for (var t_68 = 0; t_68 < s.length; t_68++)
                            i.push(b.getPlugin(s[t_68]));
                        var a = t.plugins || [];
                        for (var t_69 = 0; t_69 < a.length; t_69++) {
                            var s_34 = a[t_69];
                            -1 === i.indexOf(s_34) && (i.push(s_34), (e[s_34.id] = !0));
                        }
                        return { plugins: i, localIds: e };
                    })(s);
                    if (!1 !== a || e) {
                        var _b = [t, s, a, e], n = _b[0], _c = _b[1], o = _c.plugins, r = _c.localIds, l = _b[2], h = _b[3];
                        var c_7 = [], d_8 = n.getContext();
                        for (var _d = 0, o_17 = o; _d < o_17.length; _d++) {
                            var u_4 = o_17[_d];
                            var o_18 = u_4.id, g_4 = ((i = l[o_18]), h || !1 !== i ? (!0 === i ? {} : i) : null);
                            null !== g_4 &&
                                c_7.push({
                                    plugin: u_4,
                                    options: (function (t, _b, s, a) {
                                        var e = _b.plugin, i = _b.local;
                                        var n = t.pluginScopeKeys(e), o = t.getOptionScopes(s, n);
                                        return (i && e.defaults && o.push(e.defaults),
                                            t.createResolver(o, a, [""], {
                                                scriptable: !1,
                                                indexable: !1,
                                                allKeys: !0,
                                            }));
                                    })(n.config, { plugin: u_4, local: r[o_18] }, g_4, d_8),
                                });
                        }
                        return c_7;
                    }
                    return [];
                };
                Vs.prototype._notifyStateChanges = function (t) {
                    var e = this._oldCache || [], i = this._cache, s = function (t, i) {
                        return t.filter(function (e) { return !i.some(function (t) { return e.plugin.id === t.plugin.id; }); });
                    };
                    this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
                };
                return Vs;
            }());
            function Bs(t, e) {
                var i = R.datasets[t] || {};
                return (((e.datasets || {})[t] || {}).indexAxis ||
                    e.indexAxis ||
                    i.indexAxis ||
                    "x");
            }
            function Ws(t) {
                if ("x" === t || "y" === t || "r" === t)
                    return t;
            }
            function Ns(t) {
                var e = [];
                for (var _b = 1; _b < arguments.length; _b++) {
                    e[_b - 1] = arguments[_b];
                }
                if (Ws(t))
                    return t;
                for (var _c = 0, e_40 = e; _c < e_40.length; _c++) {
                    var s_35 = e_40[_c];
                    var e_41 = s_35.axis ||
                        ("top" === (i = s_35.position) || "bottom" === i
                            ? "x"
                            : "left" === i || "right" === i
                                ? "y"
                                : void 0) ||
                        (1 < t.length && Ws(t[0].toLowerCase()));
                    if (e_41)
                        return e_41;
                }
                var i;
                throw new Error("Cannot determine type of '".concat(t, "' axis. Please provide 'axis' or 'position' option."));
            }
            function Hs(t, e, i) {
                if (i[e + "AxisID"] === t)
                    return { axis: e };
            }
            function js(t) {
                var e = t.options || (t.options = {});
                (e.plugins = T(e.plugins, {})),
                    (e.scales = (function (o, e) {
                        var n = fe[o.type] || { scales: {} }, r = e.scales || {}, l = Bs(o.type, e), h = Object.create(null);
                        return (Object.keys(r).forEach(function (t) {
                            var e = r[t];
                            if (!A(e))
                                return console.error("Invalid scale configuration for scale: " + t);
                            if (e._proxy)
                                return console.warn("Ignoring resolver passed as options for scale: " + t);
                            var i = Ns(t, e, (function (e, t) {
                                if (t.data && t.data.datasets) {
                                    t = t.data.datasets.filter(function (t) { return t.xAxisID === e || t.yAxisID === e; });
                                    if (t.length)
                                        return Hs(e, "x", t[0]) || Hs(e, "y", t[0]);
                                }
                                return {};
                            })(t, o), R.scales[e.type]), s = i === l ? "_index_" : "_value_", a = n.scales || {};
                            h[t] = $(Object.create(null), [{ axis: i }, e, a[i], a[s]]);
                        }),
                            o.data.datasets.forEach(function (s) {
                                var t = s.type || o.type, a = s.indexAxis || Bs(t, e), n = (fe[t] || {}).scales || {};
                                Object.keys(n).forEach(function (t) {
                                    var e = (function (t, e) {
                                        var i = t;
                                        return ("_index_" === t
                                            ? (i = e)
                                            : "_value_" === t && (i = "x" === e ? "y" : "x"),
                                            i);
                                    })(t, a), i = s[e + "AxisID"] || e;
                                    (h[i] = h[i] || Object.create(null)),
                                        $(h[i], [{ axis: e }, r[i], n[t]]);
                                });
                            }),
                            Object.keys(h).forEach(function (t) {
                                t = h[t];
                                $(t, [R.scales[t.type], R.scale]);
                            }),
                            h);
                    })(t, e));
            }
            function Ys(t) {
                return (((t = t || {}).datasets = t.datasets || []),
                    (t.labels = t.labels || []),
                    t);
            }
            var $s = new Map(), Us = new Set();
            function Xs(t, e) {
                var i = $s.get(t);
                return i || ((i = e()), $s.set(t, i), Us.add(i)), i;
            }
            var qs = function (t, e, i) {
                e = m(e, i);
                void 0 !== e && t.add(e);
            };
            var Ks = /** @class */ (function () {
                function Ks(t) {
                    (this._config = (((t = (t = t) || {}).data = Ys(t.data)), js(t), t)),
                        (this._scopeCache = new Map()),
                        (this._resolverCache = new Map());
                }
                Object.defineProperty(Ks.prototype, "platform", {
                    get: function () {
                        return this._config.platform;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Ks.prototype, "type", {
                    get: function () {
                        return this._config.type;
                    },
                    set: function (t) {
                        this._config.type = t;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Ks.prototype, "data", {
                    get: function () {
                        return this._config.data;
                    },
                    set: function (t) {
                        this._config.data = Ys(t);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Ks.prototype, "options", {
                    get: function () {
                        return this._config.options;
                    },
                    set: function (t) {
                        this._config.options = t;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Ks.prototype, "plugins", {
                    get: function () {
                        return this._config.plugins;
                    },
                    enumerable: false,
                    configurable: true
                });
                Ks.prototype.update = function () {
                    var t = this._config;
                    this.clearCache(), js(t);
                };
                Ks.prototype.clearCache = function () {
                    this._scopeCache.clear(), this._resolverCache.clear();
                };
                Ks.prototype.datasetScopeKeys = function (t) {
                    return Xs(t, function () { return [["datasets." + t, ""]]; });
                };
                Ks.prototype.datasetAnimationScopeKeys = function (t, e) {
                    return Xs(t + ".transition." + e, function () { return [
                        ["datasets.".concat(t, ".transitions.") + e, "transitions." + e],
                        ["datasets." + t, ""],
                    ]; });
                };
                Ks.prototype.datasetElementScopeKeys = function (t, e) {
                    return Xs(t + "-" + e, function () { return [
                        [
                            "datasets.".concat(t, ".elements.") + e,
                            "datasets." + t,
                            "elements." + e,
                            "",
                        ],
                    ]; });
                };
                Ks.prototype.pluginScopeKeys = function (t) {
                    var e = t.id;
                    return Xs(this.type + "-plugin-" + e, function () { return [
                        __spreadArray(["plugins." + e], (t.additionalOptionScopes || []), true),
                    ]; });
                };
                Ks.prototype._cachedScopes = function (t, e) {
                    var i = this._scopeCache;
                    var s = i.get(t);
                    return (s && !e) || ((s = new Map()), i.set(t, s)), s;
                };
                Ks.prototype.getOptionScopes = function (e, t, i) {
                    var _b = this, s = _b.options, a = _b.type, n = this._cachedScopes(e, i), o = n.get(t);
                    if (o)
                        return o;
                    var r = new Set(), l = (t.forEach(function (t) {
                        e && (r.add(e), t.forEach(function (t) { return qs(r, e, t); })),
                            t.forEach(function (t) { return qs(r, s, t); }),
                            t.forEach(function (t) { return qs(r, fe[a] || {}, t); }),
                            t.forEach(function (t) { return qs(r, R, t); }),
                            t.forEach(function (t) { return qs(r, pe, t); });
                    }),
                        Array.from(r));
                    return (0 === l.length && l.push(Object.create(null)),
                        Us.has(t) && n.set(t, l),
                        l);
                };
                Ks.prototype.chartOptionScopes = function () {
                    var _b = this, t = _b.options, e = _b.type;
                    return [t, fe[e] || {}, R.datasets[e] || {}, { type: e }, R, pe];
                };
                Ks.prototype.resolveNamedOptions = function (t, e, i, s) {
                    if (s === void 0) { s = [""]; }
                    var a = { $shared: !0 }, _b = Gs(this._resolverCache, t, s), n = _b.resolver, o = _b.subPrefixes;
                    var r = n;
                    !(function (t, e) {
                        var _b = Ue(t), i = _b.isScriptable, s = _b.isIndexable;
                        for (var _c = 0, e_43 = e; _c < e_43.length; _c++) {
                            var a_26 = e_43[_c];
                            var e_44 = i(a_26), n_19 = s(a_26), o_19 = (n_19 || e_44) && t[a_26];
                            if ((e_44 && (u(o_19) || Zs(o_19))) || (n_19 && O(o_19)))
                                return 1;
                        }
                    })(n, e) ||
                        ((a.$shared = !1),
                            (r = $e(n, (i = u(i) ? i() : i), this.createResolver(t, i, o))));
                    for (var _c = 0, e_42 = e; _c < e_42.length; _c++) {
                        var t_70 = e_42[_c];
                        a[t_70] = r[t_70];
                    }
                    return a;
                };
                Ks.prototype.createResolver = function (t, e, i, s) {
                    if (i === void 0) { i = [""]; }
                    t = Gs(this._resolverCache, t, i).resolver;
                    return A(e) ? $e(t, e, void 0, s) : t;
                };
                return Ks;
            }());
            function Gs(t, e, i) {
                var s = t.get(e);
                s || ((s = new Map()), t.set(e, s));
                t = i.join();
                var a = s.get(t);
                return (a ||
                    ((a = {
                        resolver: Ye(e, i),
                        subPrefixes: i.filter(function (t) { return !t.toLowerCase().includes("hover"); }),
                    }),
                        s.set(t, a)),
                    a);
            }
            var Zs = function (i) {
                return A(i) &&
                    Object.getOwnPropertyNames(i).reduce(function (t, e) { return t || u(i[e]); }, !1);
            }, Js = ["top", "bottom", "left", "right", "chartArea"];
            function Qs(t, e) {
                return ("top" === t || "bottom" === t || (-1 === Js.indexOf(t) && "x" === e));
            }
            function ta(i, s) {
                return function (t, e) {
                    return t[i] === e[i] ? t[s] - e[s] : t[i] - e[i];
                };
            }
            function ea(t) {
                var e = t.chart, i = e.options.animation;
                e.notifyPlugins("afterRender"), d(i && i.onComplete, [t], e);
            }
            function ia(t) {
                var e = t.chart, i = e.options.animation;
                d(i && i.onProgress, [t], e);
            }
            function sa(t) {
                return (xe() && "string" == typeof t
                    ? (t = document.getElementById(t))
                    : t && t.length && (t = t[0]),
                    (t = t && t.canvas ? t.canvas : t));
            }
            var aa = {}, na = function (t) {
                var e = sa(t);
                return Object.values(aa)
                    .filter(function (t) { return t.canvas === e; })
                    .pop();
            };
            function oa(t, e, i) {
                return (t.options.clip ? t : e)[i];
            }
            var i = /** @class */ (function () {
                function i(t, e) {
                    var _this = this;
                    var i = (this.config = new Ks(e)), s = sa(t), a = na(s);
                    if (a)
                        throw new Error("Canvas is already in use. Chart with ID '" +
                            a.id +
                            "' must be destroyed before the canvas with ID '" +
                            a.canvas.id +
                            "' can be reused.");
                    var e = i.createResolver(i.chartOptionScopes(), this.getContext()), t = ((this.platform = new (i.platform || fs(s))()),
                        this.platform.updateConfig(i),
                        this.platform.acquireContext(s, e.aspectRatio)), n = t && t.canvas, o = n && n.height, r = n && n.width;
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
                        (this._doResize = Pt(function (t) { return _this.update(t); }, e.resizeDelay || 0)),
                        (this._dataChanges = []),
                        (aa[this.id] = this),
                        t && n
                            ? (l.listen(this, "complete", ea),
                                l.listen(this, "progress", ia),
                                this._initialize(),
                                this.attached && this.update())
                            : console.error("Failed to create chart: can't acquire context from the given item");
                }
                i.register = function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    b.add.apply(b, t), ra();
                };
                i.unregister = function () {
                    var t = [];
                    for (var _b = 0; _b < arguments.length; _b++) {
                        t[_b] = arguments[_b];
                    }
                    b.remove.apply(b, t), ra();
                };
                Object.defineProperty(i.prototype, "aspectRatio", {
                    get: function () {
                        var _b = this, _c = _b.options, t = _c.aspectRatio, e = _c.maintainAspectRatio, i = _b.width, s = _b.height, a = _b._aspectRatio;
                        return P(t) ? (e && a ? a : s ? i / s : null) : t;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(i.prototype, "data", {
                    get: function () {
                        return this.config.data;
                    },
                    set: function (t) {
                        this.config.data = t;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(i.prototype, "options", {
                    get: function () {
                        return this._options;
                    },
                    set: function (t) {
                        this.config.options = t;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(i.prototype, "registry", {
                    get: function () {
                        return b;
                    },
                    enumerable: false,
                    configurable: true
                });
                i.prototype._initialize = function () {
                    return (this.notifyPlugins("beforeInit"),
                        this.options.responsive
                            ? this.resize()
                            : Ce(this, this.options.devicePixelRatio),
                        this.bindEvents(),
                        this.notifyPlugins("afterInit"),
                        this);
                };
                i.prototype.clear = function () {
                    return Ie(this.canvas, this.ctx), this;
                };
                i.prototype.stop = function () {
                    return l.stop(this), this;
                };
                i.prototype.resize = function (t, e) {
                    l.running(this)
                        ? (this._resizeBeforeDraw = { width: t, height: e })
                        : this._resize(t, e);
                };
                i.prototype._resize = function (t, e) {
                    var i = this.options, s = this.canvas, a = i.maintainAspectRatio && this.aspectRatio, s = this.platform.getMaximumSize(s, t, e, a), t = i.devicePixelRatio || this.platform.getDevicePixelRatio(), e = this.width ? "resize" : "attach";
                    (this.width = s.width),
                        (this.height = s.height),
                        (this._aspectRatio = this.aspectRatio),
                        Ce(this, t, !0) &&
                            (this.notifyPlugins("resize", { size: s }),
                                d(i.onResize, [this, s], this),
                                this.attached && this._doResize(e) && this.render());
                };
                i.prototype.ensureScalesHaveIDs = function () {
                    k(this.options.scales || {}, function (t, e) {
                        t.id = e;
                    });
                };
                i.prototype.buildOrUpdateScales = function () {
                    var _this = this;
                    var o = this.options, s = o.scales, r = this.scales, l = Object.keys(r).reduce(function (t, e) { return ((t[e] = !1), t); }, {});
                    var t = [];
                    k((t = s
                        ? t.concat(Object.keys(s).map(function (t) {
                            var e = s[t], t = Ns(t, e), i = "r" === t, t = "x" === t;
                            return {
                                options: e,
                                dposition: i ? "chartArea" : t ? "bottom" : "left",
                                dtype: i ? "radialLinear" : t ? "category" : "linear",
                            };
                        }))
                        : t), function (t) {
                        var e = t.options, i = e.id, s = Ns(i, e), a = T(e.type, t.dtype);
                        (void 0 !== e.position &&
                            Qs(e.position, s) === Qs(t.dposition)) ||
                            (e.position = t.dposition),
                            (l[i] = !0);
                        var n = null;
                        i in r && r[i].type === a
                            ? (n = r[i])
                            : ((n = new (b.getScale(a))({
                                id: i,
                                type: a,
                                ctx: _this.ctx,
                                chart: _this,
                            })),
                                (r[n.id] = n)),
                            n.init(e, o);
                    }),
                        k(l, function (t, e) {
                            t || delete r[e];
                        }),
                        k(r, function (t) {
                            a.configure(_this, t, t.options), a.addBox(_this, t);
                        });
                };
                i.prototype._updateMetasets = function () {
                    var t = this._metasets, e = this.data.datasets.length, i = t.length;
                    if ((t.sort(function (t, e) { return t.index - e.index; }), e < i)) {
                        for (var t_71 = e; t_71 < i; ++t_71)
                            this._destroyDatasetMeta(t_71);
                        t.splice(e, i - e);
                    }
                    this._sortedMetasets = t.slice(0).sort(ta("order", "index"));
                };
                i.prototype._removeUnreferencedMetasets = function () {
                    var _this = this;
                    var _b = this, t = _b._metasets, i = _b.data.datasets;
                    t.length > i.length && delete this._stacks,
                        t.forEach(function (e, t) {
                            0 === i.filter(function (t) { return t === e._dataset; }).length &&
                                _this._destroyDatasetMeta(t);
                        });
                };
                i.prototype.buildOrUpdateControllers = function () {
                    var e = [], i = this.data.datasets;
                    var s, a;
                    for (this._removeUnreferencedMetasets(), s = 0, a = i.length; s < a; s++) {
                        var a_27 = i[s];
                        var t_72 = this.getDatasetMeta(s);
                        var n = a_27.type || this.config.type;
                        if ((t_72.type &&
                            t_72.type !== n &&
                            (this._destroyDatasetMeta(s), (t_72 = this.getDatasetMeta(s))),
                            (t_72.type = n),
                            (t_72.indexAxis = a_27.indexAxis || Bs(n, this.options)),
                            (t_72.order = a_27.order || 0),
                            (t_72.index = s),
                            (t_72.label = "" + a_27.label),
                            (t_72.visible = this.isDatasetVisible(s)),
                            t_72.controller))
                            t_72.controller.updateIndex(s), t_72.controller.linkScales();
                        else {
                            var i_37 = b.getController(n), _b = R.datasets[n], a_28 = _b.datasetElementType, o_20 = _b.dataElementType;
                            Object.assign(i_37, {
                                dataElementType: b.getElement(o_20),
                                datasetElementType: a_28 && b.getElement(a_28),
                            }),
                                (t_72.controller = new i_37(this, s)),
                                e.push(t_72.controller);
                        }
                    }
                    return this._updateMetasets(), e;
                };
                i.prototype._resetElements = function () {
                    var _this = this;
                    k(this.data.datasets, function (t, e) {
                        _this.getDatasetMeta(e).controller.reset();
                    }, this);
                };
                i.prototype.reset = function () {
                    this._resetElements(), this.notifyPlugins("reset");
                };
                i.prototype.update = function (t) {
                    var s = this.config, a = (s.update(),
                        (this._options = s.createResolver(s.chartOptionScopes(), this.getContext()))), n = (this._animationsDisabled = !a.animation);
                    if ((this._updateScales(),
                        this._checkEventBindings(),
                        this._updateHiddenIndices(),
                        this._plugins.invalidate(),
                        !1 !==
                            this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))) {
                        var o_21 = this.buildOrUpdateControllers();
                        this.notifyPlugins("beforeElementsUpdate");
                        var i_38 = 0;
                        for (var t_73 = 0, e_45 = this.data.datasets.length; t_73 < e_45; t_73++) {
                            var s_36 = this.getDatasetMeta(t_73)["controller"], a_29 = !n && -1 === o_21.indexOf(s_36);
                            s_36.buildOrUpdateElements(a_29),
                                (i_38 = Math.max(+s_36.getMaxOverflow(), i_38));
                        }
                        (i_38 = this._minPadding = a.layout.autoPadding ? i_38 : 0),
                            this._updateLayout(i_38),
                            n ||
                                k(o_21, function (t) {
                                    t.reset();
                                }),
                            this._updateDatasets(t),
                            this.notifyPlugins("afterUpdate", { mode: t }),
                            this._layers.sort(ta("z", "_idx"));
                        var _b = this, t = _b._active, e = _b._lastEvent;
                        e
                            ? this._eventHandler(e, !0)
                            : t.length && this._updateHoverStyles(t, t, !0),
                            this.render();
                    }
                };
                i.prototype._updateScales = function () {
                    var _this = this;
                    k(this.scales, function (t) {
                        a.removeBox(_this, t);
                    }),
                        this.ensureScalesHaveIDs(),
                        this.buildOrUpdateScales();
                };
                i.prototype._checkEventBindings = function () {
                    var t = this.options, e = new Set(Object.keys(this._listeners)), i = new Set(t.events);
                    (Z(e, i) && !!this._responsiveListeners === t.responsive) ||
                        (this.unbindEvents(), this.bindEvents());
                };
                i.prototype._updateHiddenIndices = function () {
                    var _b;
                    var t, e, i, s, a = this["_hiddenIndices"];
                    for (var _c = 0, _d = this._getUniformDataChanges() || []; _c < _d.length; _c++) {
                        _b = _d[_c], t = _b.method, e = _b.start, i = _b.count;
                        n = void 0;
                        o = void 0;
                        r = void 0;
                        s = void 0;
                        var n = a;
                        var o = e;
                        var r = "_removeElements" === t ? -i : i;
                        var l_10 = Object.keys(n);
                        for (var _f = 0, l_9 = l_10; _f < l_9.length; _f++) {
                            var h_8 = l_9[_f];
                            var l_11 = +h_8;
                            l_11 >= o &&
                                ((s = n[h_8]), delete n[h_8], (0 < r || l_11 > o) && (n[l_11 + r] = s));
                        }
                    }
                };
                i.prototype._getUniformDataChanges = function () {
                    var t = this._dataChanges;
                    if (t && t.length) {
                        this._dataChanges = [];
                        var e = this.data.datasets.length, i = function (e) {
                            return new Set(t
                                .filter(function (t) { return t[0] === e; })
                                .map(function (t, e) { return e + "," + t.splice(1).join(","); }));
                        }, s = i(0);
                        for (var t_74 = 1; t_74 < e; t_74++)
                            if (!Z(s, i(t_74)))
                                return;
                        return Array.from(s)
                            .map(function (t) { return t.split(","); })
                            .map(function (t) { return ({ method: t[1], start: +t[2], count: +t[3] }); });
                    }
                };
                i.prototype._updateLayout = function (t) {
                    var _this = this;
                    if (!1 !== this.notifyPlugins("beforeLayout", { cancelable: !0 })) {
                        a.update(this, this.width, this.height, t);
                        var e_46 = this.chartArea, i_39 = e_46.width <= 0 || e_46.height <= 0;
                        (this._layers = []),
                            k(this.boxes, function (t) {
                                var _b;
                                (i_39 && "chartArea" === t.position) ||
                                    (t.configure && t.configure(), (_b = _this._layers).push.apply(_b, t._layers()));
                            }, this),
                            this._layers.forEach(function (t, e) {
                                t._idx = e;
                            }),
                            this.notifyPlugins("afterLayout");
                    }
                };
                i.prototype._updateDatasets = function (i) {
                    if (!1 !==
                        this.notifyPlugins("beforeDatasetsUpdate", {
                            mode: i,
                            cancelable: !0,
                        })) {
                        for (var t_75 = 0, e_47 = this.data.datasets.length; t_75 < e_47; ++t_75)
                            this.getDatasetMeta(t_75).controller.configure();
                        for (var t_76 = 0, e_48 = this.data.datasets.length; t_76 < e_48; ++t_76)
                            this._updateDataset(t_76, u(i) ? i({ datasetIndex: t_76 }) : i);
                        this.notifyPlugins("afterDatasetsUpdate", { mode: i });
                    }
                };
                i.prototype._updateDataset = function (t, e) {
                    var i = this.getDatasetMeta(t), s = { meta: i, index: t, mode: e, cancelable: !0 };
                    !1 !== this.notifyPlugins("beforeDatasetUpdate", s) &&
                        (i.controller._update(e),
                            (s.cancelable = !1),
                            this.notifyPlugins("afterDatasetUpdate", s));
                };
                i.prototype.render = function () {
                    !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
                        (l.has(this)
                            ? this.attached && !l.running(this) && l.start(this)
                            : (this.draw(), ea({ chart: this })));
                };
                i.prototype.draw = function () {
                    var t;
                    if (this._resizeBeforeDraw) {
                        var _b = this._resizeBeforeDraw, t_77 = _b.width, e_49 = _b.height;
                        this._resize(t_77, e_49), (this._resizeBeforeDraw = null);
                    }
                    if ((this.clear(),
                        !(this.width <= 0 || this.height <= 0) &&
                            !1 !== this.notifyPlugins("beforeDraw", { cancelable: !0 }))) {
                        var e_50 = this._layers;
                        for (t = 0; t < e_50.length && e_50[t].z <= 0; ++t)
                            e_50[t].draw(this.chartArea);
                        for (this._drawDatasets(); t < e_50.length; ++t)
                            e_50[t].draw(this.chartArea);
                        this.notifyPlugins("afterDraw");
                    }
                };
                i.prototype._getSortedDatasetMetas = function (t) {
                    var e = this._sortedMetasets, i = [];
                    var s, a;
                    for (s = 0, a = e.length; s < a; ++s) {
                        var a_30 = e[s];
                        (t && !a_30.visible) || i.push(a_30);
                    }
                    return i;
                };
                i.prototype.getSortedVisibleDatasetMetas = function () {
                    return this._getSortedDatasetMetas(!0);
                };
                i.prototype._drawDatasets = function () {
                    if (!1 !== this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })) {
                        var e = this.getSortedVisibleDatasetMetas();
                        for (var t_78 = e.length - 1; 0 <= t_78; --t_78)
                            this._drawDataset(e[t_78]);
                        this.notifyPlugins("afterDatasetsDraw");
                    }
                };
                i.prototype._drawDataset = function (s) {
                    var t = this.ctx, e = s._clip, i = !e.disabled, a = (function (t) {
                        var e = s.xScale, i = s.yScale;
                        return e && i
                            ? {
                                left: oa(e, t, "left"),
                                right: oa(e, t, "right"),
                                top: oa(i, t, "top"),
                                bottom: oa(i, t, "bottom"),
                            }
                            : t;
                    })(this.chartArea), n = { meta: s, index: s.index, cancelable: !0 };
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
                };
                i.prototype.isPointInArea = function (t) {
                    return M(t, this.chartArea, this._minPadding);
                };
                i.prototype.getElementsAtEventForMode = function (t, e, i, s) {
                    var a = Hi.modes[e];
                    return "function" == typeof a ? a(this, t, i, s) : [];
                };
                i.prototype.getDatasetMeta = function (t) {
                    var e = this.data.datasets[t], i = this._metasets;
                    var s = i.filter(function (t) { return t && t._dataset === e; }).pop();
                    return (s ||
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
                        s);
                };
                i.prototype.getContext = function () {
                    return (this.$context ||
                        (this.$context = Pi(null, { chart: this, type: "chart" })));
                };
                i.prototype.getVisibleDatasetCount = function () {
                    return this.getSortedVisibleDatasetMetas().length;
                };
                i.prototype.isDatasetVisible = function (t) {
                    var e = this.data.datasets[t];
                    if (!e)
                        return !1;
                    t = this.getDatasetMeta(t);
                    return "boolean" == typeof t.hidden ? !t.hidden : !e.hidden;
                };
                i.prototype.setDatasetVisibility = function (t, e) {
                    this.getDatasetMeta(t).hidden = !e;
                };
                i.prototype.toggleDataVisibility = function (t) {
                    this._hiddenIndices[t] = !this._hiddenIndices[t];
                };
                i.prototype.getDataVisibility = function (t) {
                    return !this._hiddenIndices[t];
                };
                i.prototype._updateVisibility = function (e, t, i) {
                    var s = i ? "show" : "hide", a = this.getDatasetMeta(e), n = a.controller._resolveAnimations(void 0, s);
                    G(t)
                        ? ((a.data[t].hidden = !i), this.update())
                        : (this.setDatasetVisibility(e, i),
                            n.update(a, { visible: i }),
                            this.update(function (t) { return (t.datasetIndex === e ? s : void 0); }));
                };
                i.prototype.hide = function (t, e) {
                    this._updateVisibility(t, e, !1);
                };
                i.prototype.show = function (t, e) {
                    this._updateVisibility(t, e, !0);
                };
                i.prototype._destroyDatasetMeta = function (t) {
                    var e = this._metasets[t];
                    e && e.controller && e.controller._destroy(),
                        delete this._metasets[t];
                };
                i.prototype._stop = function () {
                    var t, e;
                    for (this.stop(), l.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
                        this._destroyDatasetMeta(t);
                };
                i.prototype.destroy = function () {
                    this.notifyPlugins("beforeDestroy");
                    var _b = this, t = _b.canvas, e = _b.ctx;
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
                };
                i.prototype.toBase64Image = function () {
                    var _b;
                    var t = [];
                    for (var _c = 0; _c < arguments.length; _c++) {
                        t[_c] = arguments[_c];
                    }
                    return (_b = this.canvas).toDataURL.apply(_b, t);
                };
                i.prototype.bindEvents = function () {
                    this.bindUserEvents(),
                        this.options.responsive
                            ? this.bindResponsiveEvents()
                            : (this.attached = !0);
                };
                i.prototype.bindUserEvents = function () {
                    var _this = this;
                    var i = this._listeners, s = this.platform, e = function (t, e) {
                        s.addEventListener(_this, t, e), (i[t] = e);
                    }, a = function (t, e, i) {
                        (t.offsetX = e), (t.offsetY = i), _this._eventHandler(t);
                    };
                    k(this.options.events, function (t) { return e(t, a); });
                };
                i.prototype.bindResponsiveEvents = function () {
                    var _this = this;
                    this._responsiveListeners || (this._responsiveListeners = {});
                    var i = this._responsiveListeners, s = this.platform, t = function (t, e) {
                        s.addEventListener(_this, t, e), (i[t] = e);
                    }, e = function (t, e) {
                        i[t] && (s.removeEventListener(_this, t, e), delete i[t]);
                    }, a = function (t, e) {
                        _this.canvas && _this.resize(t, e);
                    };
                    var n;
                    var o = function () {
                        e("attach", o),
                            (_this.attached = !0),
                            _this.resize(),
                            t("resize", a),
                            t("detach", n);
                    };
                    (n = function () {
                        (_this.attached = !1),
                            e("resize", a),
                            _this._stop(),
                            _this._resize(0, 0),
                            t("attach", o);
                    }),
                        (s.isAttached(this.canvas) ? o : n)();
                };
                i.prototype.unbindEvents = function () {
                    var _this = this;
                    k(this._listeners, function (t, e) {
                        _this.platform.removeEventListener(_this, e, t);
                    }),
                        (this._listeners = {}),
                        k(this._responsiveListeners, function (t, e) {
                            _this.platform.removeEventListener(_this, e, t);
                        }),
                        (this._responsiveListeners = void 0);
                };
                i.prototype.updateHoverStyle = function (t, e, i) {
                    var s = i ? "set" : "remove";
                    var a, n, o, r;
                    for ("dataset" === e &&
                        (a = this.getDatasetMeta(t[0].datasetIndex)).controller["_" + s + "DatasetHoverStyle"](),
                        o = 0,
                        r = t.length; o < r; ++o) {
                        var e_51 = (n = t[o]) && this.getDatasetMeta(n.datasetIndex).controller;
                        e_51 && e_51[s + "HoverStyle"](n.element, n.datasetIndex, n.index);
                    }
                };
                i.prototype.getActiveElements = function () {
                    return this._active || [];
                };
                i.prototype.setActiveElements = function (t) {
                    var _this = this;
                    var e = this._active || [], t = t.map(function (_b) {
                        var t = _b.datasetIndex, e = _b.index;
                        var i = _this.getDatasetMeta(t);
                        if (i)
                            return { datasetIndex: t, element: i.data[e], index: e };
                        throw new Error("No dataset found at index " + t);
                    });
                    W(t, e) ||
                        ((this._active = t),
                            (this._lastEvent = null),
                            this._updateHoverStyles(t, e));
                };
                i.prototype.notifyPlugins = function (t, e, i) {
                    return this._plugins.notify(this, t, e, i);
                };
                i.prototype.isPluginEnabled = function (e) {
                    return (1 === this._plugins._cache.filter(function (t) { return t.plugin.id === e; }).length);
                };
                i.prototype._updateHoverStyles = function (t, e, i) {
                    var s = this.options.hover, a = function (t, i) {
                        return t.filter(function (e) {
                            return !i.some(function (t) {
                                return e.datasetIndex === t.datasetIndex && e.index === t.index;
                            });
                        });
                    }, n = a(e, t), i = i ? t : a(t, e);
                    n.length && this.updateHoverStyle(n, s.mode, !1),
                        i.length && s.mode && this.updateHoverStyle(i, s.mode, !0);
                };
                i.prototype._eventHandler = function (e, t) {
                    var _this = this;
                    var i = {
                        event: e,
                        replay: t,
                        cancelable: !0,
                        inChartArea: this.isPointInArea(e),
                    }, s = function (t) {
                        return (t.options.events || _this.options.events).includes(e.native.type);
                    };
                    if (!1 !== this.notifyPlugins("beforeEvent", i, s))
                        return ((t = this._handleEvent(e, t, i.inChartArea)),
                            (i.cancelable = !1),
                            this.notifyPlugins("afterEvent", i, s),
                            (t || i.changed) && this.render(),
                            this);
                };
                i.prototype._handleEvent = function (t, e, i) {
                    var _b = this, _c = _b._active, s = _c === void 0 ? [] : _c, a = _b.options, n = e, o = this._getActiveElements(t, s, i, n), r = J(t), l = ((h = t),
                        (c = this._lastEvent),
                        i && "mouseout" !== h.type ? (r ? c : h) : null);
                    i &&
                        ((this._lastEvent = null),
                            d(a.onHover, [t, o, this], this),
                            r && d(a.onClick, [t, o, this], this));
                    var h, c = !W(o, s);
                    return ((c || e) && ((this._active = o), this._updateHoverStyles(o, s, e)),
                        (this._lastEvent = l),
                        c);
                };
                i.prototype._getActiveElements = function (t, e, i, s) {
                    if ("mouseout" === t.type)
                        return [];
                    if (!i)
                        return e;
                    i = this.options.hover;
                    return this.getElementsAtEventForMode(t, i.mode, i, s);
                };
                i.defaults = R;
                i.instances = aa;
                i.overrides = fe;
                i.registry = b;
                i.version = "4.4.0";
                i.getChart = na;
                return i;
            }());
            function ra() {
                k(i.instances, function (t) { return t._plugins.invalidate(); });
            }
            function la() {
                throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
            }
            var ha = {
                _date: /** @class */ (function () {
                    function Xn(t) {
                        this.options = t || {};
                    }
                    Xn.override = function (t) {
                        Object.assign(Xn.prototype, t);
                    };
                    Xn.prototype.init = function () { };
                    Xn.prototype.formats = function () {
                        return la();
                    };
                    Xn.prototype.parse = function () {
                        return la();
                    };
                    Xn.prototype.format = function () {
                        return la();
                    };
                    Xn.prototype.add = function () {
                        return la();
                    };
                    Xn.prototype.diff = function () {
                        return la();
                    };
                    Xn.prototype.startOf = function () {
                        return la();
                    };
                    Xn.prototype.endOf = function () {
                        return la();
                    };
                    return Xn;
                }()),
            };
            function ca(i, s, a, n) {
                if (O(i)) {
                    var o = i, r = s, l = a, h = n, c = l.parse(o[0], h), o = l.parse(o[1], h), h = Math.min(c, o), d = Math.max(c, o);
                    var t_79 = h, e_52 = d;
                    Math.abs(h) > Math.abs(d) && ((t_79 = d), (e_52 = h)),
                        (r[l.axis] = e_52),
                        (r._custom = {
                            barStart: t_79,
                            barEnd: e_52,
                            start: c,
                            end: o,
                            min: h,
                            max: d,
                        });
                }
                else
                    s[a.axis] = a.parse(i, n);
                return s;
            }
            function da(t, e, i, s) {
                var a = t.iScale, n = t.vScale, o = a.getLabels(), r = a === n, l = [];
                var h, c, d, u;
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
            var pa = /** @class */ (function (_super) {
                __extends(pa, _super);
                function pa(t, e) {
                    var _this = this;
                    _this = _super.call(this, t, e) || this,
                        (_this.enableOptionSharing = !0),
                        (_this.innerRadius = void 0),
                        (_this.outerRadius = void 0),
                        (_this.offsetX = void 0),
                        (_this.offsetY = void 0);
                    return _this;
                }
                pa.prototype.linkScales = function () { };
                pa.prototype.parse = function (s, a) {
                    var n = this.getDataset().data, o = this._cachedMeta;
                    if (!1 === this._parsing)
                        o._parsed = n;
                    else {
                        var t_80, e_53, i_40 = function (t) { return +n[t]; };
                        if (A(n[s])) {
                            var _b = this._parsing.key, s_37 = _b === void 0 ? "value" : _b;
                            i_40 = function (t) { return +m(n[t], s_37); };
                        }
                        for (e_53 = (t_80 = s) + a; t_80 < e_53; ++t_80)
                            o._parsed[t_80] = i_40(t_80);
                    }
                };
                pa.prototype._getRotation = function () {
                    return L(this.options.rotation - 90);
                };
                pa.prototype._getCircumference = function () {
                    return L(this.options.circumference);
                };
                pa.prototype._getRotationExtents = function () {
                    var e = _, i = -_;
                    for (var t_81 = 0; t_81 < this.chart.data.datasets.length; ++t_81)
                        if (this.chart.isDatasetVisible(t_81) &&
                            this.chart.getDatasetMeta(t_81).type === this._type) {
                            var s_38 = this.chart.getDatasetMeta(t_81).controller, a_31 = s_38._getRotation(), n_20 = s_38._getCircumference();
                            (e = Math.min(e, a_31)), (i = Math.max(i, a_31 + n_20));
                        }
                    return { rotation: e, circumference: i - e };
                };
                pa.prototype.update = function (t) {
                    var e = this.chart, i = e["chartArea"], s = this._cachedMeta, a = s.data, n = this.getMaxBorderWidth() +
                        this.getMaxOffset(a) +
                        this.options.spacing, o = Math.max((Math.min(i.width, i.height) - n) / 2, 0), r = Math.min(V(this.options.cutout, o), 1), l = this._getRingWeight(this.index), _b = this._getRotationExtents(), h = _b.circumference, c = _b.rotation, _c = (function (t, e, s) {
                        var i = 1, a = 1, n = 0, o = 0;
                        if (e < _) {
                            var r_9 = t, l_12 = r_9 + e, h_9 = Math.cos(r_9), c_8 = Math.sin(r_9), d_9 = Math.cos(l_12), u_5 = Math.sin(l_12), g_5 = function (t, e, i) {
                                return pt(t, r_9, l_12, !0) ? 1 : Math.max(e, e * s, i, i * s);
                            }, f_5 = function (t, e, i) {
                                return pt(t, r_9, l_12, !0) ? -1 : Math.min(e, e * s, i, i * s);
                            }, p_4 = g_5(0, h_9, d_9), m_3 = g_5(D, c_8, u_5), b_2 = f_5(S, h_9, d_9), x_3 = f_5(S + D, c_8, u_5);
                            (i = (p_4 - b_2) / 2),
                                (a = (m_3 - x_3) / 2),
                                (n = -(p_4 + b_2) / 2),
                                (o = -(m_3 + x_3) / 2);
                        }
                        return { ratioX: i, ratioY: a, offsetX: n, offsetY: o };
                    })(c, h, r), d = _c.ratioX, u = _c.ratioY, g = _c.offsetX, f = _c.offsetY, p = (i.width - n) / d, m = (i.height - n) / u, b = Math.max(Math.min(p, m) / 2, 0), x = B(this.options.radius, b), v = (x - Math.max(x * r, 0)) / this._getVisibleDatasetWeightTotal();
                    (this.offsetX = g * x),
                        (this.offsetY = f * x),
                        (s.total = this.calculateTotal()),
                        (this.outerRadius = x - v * this._getRingWeightOffset(this.index)),
                        (this.innerRadius = Math.max(this.outerRadius - v * l, 0)),
                        this.updateElements(a, 0, a.length, t);
                };
                pa.prototype._circumference = function (t, e) {
                    var i = this.options, s = this._cachedMeta, a = this._getCircumference();
                    return (e && i.animation.animateRotate) ||
                        !this.chart.getDataVisibility(t) ||
                        null === s._parsed[t] ||
                        s.data[t].hidden
                        ? 0
                        : this.calculateCircumference((s._parsed[t] * a) / _);
                };
                pa.prototype.updateElements = function (t, e, i, s) {
                    var a = "reset" === s, n = this.chart, o = n.chartArea, r = n.options.animation, l = (o.left + o.right) / 2, h = (o.top + o.bottom) / 2, c = a && r.animateScale, d = c ? 0 : this.innerRadius, u = c ? 0 : this.outerRadius, _b = this._getSharedOptions(e, s), g = _b.sharedOptions, f = _b.includeOptions;
                    var p, m = this._getRotation();
                    for (p = 0; p < e; ++p)
                        m += this._circumference(p, a);
                    for (p = e; p < e + i; ++p) {
                        var e_54 = this._circumference(p, a), i_41 = t[p], n_21 = {
                            x: l + this.offsetX,
                            y: h + this.offsetY,
                            startAngle: m,
                            endAngle: m + e_54,
                            circumference: e_54,
                            outerRadius: u,
                            innerRadius: d,
                        };
                        f &&
                            (n_21.options =
                                g ||
                                    this.resolveDataElementOptions(p, i_41.active ? "active" : s)),
                            (m += e_54),
                            this.updateElement(i_41, p, n_21, s);
                    }
                };
                pa.prototype.calculateTotal = function () {
                    var t = this._cachedMeta, e = t.data;
                    var i, s = 0;
                    for (i = 0; i < e.length; i++) {
                        var a = t._parsed[i];
                        null === a ||
                            isNaN(a) ||
                            !this.chart.getDataVisibility(i) ||
                            e[i].hidden ||
                            (s += Math.abs(a));
                    }
                    return s;
                };
                pa.prototype.calculateCircumference = function (t) {
                    var e = this._cachedMeta.total;
                    return 0 < e && !isNaN(t) ? _ * (Math.abs(t) / e) : 0;
                };
                pa.prototype.getLabelAndValue = function (t) {
                    var e = this._cachedMeta, i = this.chart, s = i.data.labels || [], e = de(e._parsed[t], i.options.locale);
                    return { label: s[t] || "", value: e };
                };
                pa.prototype.getMaxBorderWidth = function (t) {
                    var e = 0;
                    var i = this.chart;
                    var s, a, n, o, r;
                    if (!t)
                        for (s = 0, a = i.data.datasets.length; s < a; ++s)
                            if (i.isDatasetVisible(s)) {
                                (t = (n = i.getDatasetMeta(s)).data), (o = n.controller);
                                break;
                            }
                    if (!t)
                        return 0;
                    for (s = 0, a = t.length; s < a; ++s)
                        "inner" !== (r = o.resolveDataElementOptions(s)).borderAlign &&
                            (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0));
                    return e;
                };
                pa.prototype.getMaxOffset = function (i) {
                    var s = 0;
                    for (var t_82 = 0, e_55 = i.length; t_82 < e_55; ++t_82) {
                        var i_42 = this.resolveDataElementOptions(t_82);
                        s = Math.max(s, i_42.offset || 0, i_42.hoverOffset || 0);
                    }
                    return s;
                };
                pa.prototype._getRingWeightOffset = function (e) {
                    var i = 0;
                    for (var t_83 = 0; t_83 < e; ++t_83)
                        this.chart.isDatasetVisible(t_83) && (i += this._getRingWeight(t_83));
                    return i;
                };
                pa.prototype._getRingWeight = function (t) {
                    return Math.max(T(this.chart.data.datasets[t].weight, 1), 0);
                };
                pa.prototype._getVisibleDatasetWeightTotal = function () {
                    return (this._getRingWeightOffset(this.chart.data.datasets.length) || 1);
                };
                pa.id = "doughnut";
                pa.defaults = {
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
                pa.descriptors = {
                    _scriptable: function (t) { return "spacing" !== t; },
                    _indexable: function (t) {
                        return "spacing" !== t &&
                            !t.startsWith("borderDash") &&
                            !t.startsWith("hoverBorderDash");
                    },
                };
                pa.overrides = {
                    aspectRatio: 1,
                    plugins: {
                        legend: {
                            labels: {
                                generateLabels: function (s) {
                                    var t = s.data;
                                    if (t.labels.length && t.datasets.length) {
                                        var _b = s.legend.options["labels"], a_32 = _b.pointStyle, n_22 = _b.color;
                                        return t.labels.map(function (t, e) {
                                            var i = s.getDatasetMeta(0).controller.getStyle(e);
                                            return {
                                                text: t,
                                                fillStyle: i.backgroundColor,
                                                strokeStyle: i.borderColor,
                                                fontColor: n_22,
                                                lineWidth: i.borderWidth,
                                                pointStyle: a_32,
                                                hidden: !s.getDataVisibility(e),
                                                index: e,
                                            };
                                        });
                                    }
                                    return [];
                                },
                            },
                            onClick: function (t, e, i) {
                                i.chart.toggleDataVisibility(e.index), i.chart.update();
                            },
                        },
                    },
                };
                return pa;
            }(Os));
            var ma = /** @class */ (function (_super) {
                __extends(ma, _super);
                function ma(t, e) {
                    var _this = this;
                    _this = _super.call(this, t, e) || this, (_this.innerRadius = void 0), (_this.outerRadius = void 0);
                    return _this;
                }
                ma.prototype.getLabelAndValue = function (t) {
                    var e = this._cachedMeta, i = this.chart, s = i.data.labels || [], e = de(e._parsed[t].r, i.options.locale);
                    return { label: s[t] || "", value: e };
                };
                ma.prototype.parseObjectData = function (t, e, i, s) {
                    return ii.bind(this)(t, e, i, s);
                };
                ma.prototype.update = function (t) {
                    var e = this._cachedMeta.data;
                    this._updateRadius(), this.updateElements(e, 0, e.length, t);
                };
                ma.prototype.getMinMax = function () {
                    var _this = this;
                    var t = this._cachedMeta, s = {
                        min: Number.POSITIVE_INFINITY,
                        max: Number.NEGATIVE_INFINITY,
                    };
                    return (t.data.forEach(function (t, e) {
                        var i = _this.getParsed(e).r;
                        !isNaN(i) &&
                            _this.chart.getDataVisibility(e) &&
                            (i < s.min && (s.min = i), i > s.max && (s.max = i));
                    }),
                        s);
                };
                ma.prototype._updateRadius = function () {
                    var t = this.chart, e = t.chartArea, i = t.options, s = Math.min(e.right - e.left, e.bottom - e.top), a = Math.max(s / 2, 0), n = (a -
                        Math.max(i.cutoutPercentage ? (a / 100) * i.cutoutPercentage : 1, 0)) /
                        t.getVisibleDatasetCount();
                    (this.outerRadius = a - n * this.index),
                        (this.innerRadius = this.outerRadius - n);
                };
                ma.prototype.updateElements = function (s, a, t, n) {
                    var o = "reset" === n, r = this.chart, l = r.options.animation, h = this._cachedMeta.rScale, c = h.xCenter, d = h.yCenter, u = h.getIndexAngle(0) - 0.5 * S;
                    var g, f = u;
                    var p = 360 / this.countVisibleElements();
                    for (g = 0; g < a; ++g)
                        f += this._computeAngle(g, n, p);
                    for (g = a; g < a + t; g++) {
                        var a_33 = s[g];
                        var t_84 = f, e_56 = f + this._computeAngle(g, n, p), i_43 = r.getDataVisibility(g)
                            ? h.getDistanceFromCenterForValue(this.getParsed(g).r)
                            : 0;
                        (f = e_56),
                            o && (l.animateScale && (i_43 = 0), l.animateRotate && (t_84 = e_56 = u));
                        var m = {
                            x: c,
                            y: d,
                            innerRadius: 0,
                            outerRadius: i_43,
                            startAngle: t_84,
                            endAngle: e_56,
                            options: this.resolveDataElementOptions(g, a_33.active ? "active" : n),
                        };
                        this.updateElement(a_33, g, m, n);
                    }
                };
                ma.prototype.countVisibleElements = function () {
                    var _this = this;
                    var t = this._cachedMeta;
                    var i = 0;
                    return (t.data.forEach(function (t, e) {
                        !isNaN(_this.getParsed(e).r) &&
                            _this.chart.getDataVisibility(e) &&
                            i++;
                    }),
                        i);
                };
                ma.prototype._computeAngle = function (t, e, i) {
                    return this.chart.getDataVisibility(t)
                        ? L(this.resolveDataElementOptions(t, e).angle || i)
                        : 0;
                };
                ma.id = "polarArea";
                ma.defaults = {
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
                ma.overrides = {
                    aspectRatio: 1,
                    plugins: {
                        legend: {
                            labels: {
                                generateLabels: function (s) {
                                    var t = s.data;
                                    if (t.labels.length && t.datasets.length) {
                                        var _b = s.legend.options["labels"], a_34 = _b.pointStyle, n_23 = _b.color;
                                        return t.labels.map(function (t, e) {
                                            var i = s.getDatasetMeta(0).controller.getStyle(e);
                                            return {
                                                text: t,
                                                fillStyle: i.backgroundColor,
                                                strokeStyle: i.borderColor,
                                                fontColor: n_23,
                                                lineWidth: i.borderWidth,
                                                pointStyle: a_34,
                                                hidden: !s.getDataVisibility(e),
                                                index: e,
                                            };
                                        });
                                    }
                                    return [];
                                },
                            },
                            onClick: function (t, e, i) {
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
                return ma;
            }(Os));
            var ba = Object.freeze({
                __proto__: null,
                BarController: (_b = /** @class */ (function (_super) {
                        __extends(class_4, _super);
                        function class_4() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        class_4.prototype.parsePrimitiveData = function (t, e, i, s) {
                            return da(t, e, i, s);
                        };
                        class_4.prototype.parseArrayData = function (t, e, i, s) {
                            return da(t, e, i, s);
                        };
                        class_4.prototype.parseObjectData = function (t, e, i, s) {
                            var a = t.iScale, n = t.vScale, _b = this._parsing, _c = _b.xAxisKey, o = _c === void 0 ? "x" : _c, _d = _b.yAxisKey, r = _d === void 0 ? "y" : _d, l = "x" === a.axis ? o : r, h = "x" === n.axis ? o : r, c = [];
                            var d, u, g, f;
                            for (u = (d = i) + s; d < u; ++d)
                                (f = e[d]),
                                    ((g = {})[a.axis] = a.parse(m(f, l), d)),
                                    c.push(ca(m(f, h), g, n, d));
                            return c;
                        };
                        class_4.prototype.updateRangeFromParsed = function (t, e, i, s) {
                            _super.prototype.updateRangeFromParsed.call(this, t, e, i, s);
                            s = i._custom;
                            s &&
                                e === this._cachedMeta.vScale &&
                                ((t.min = Math.min(t.min, s.min)),
                                    (t.max = Math.max(t.max, s.max)));
                        };
                        class_4.prototype.getMaxOverflow = function () {
                            return 0;
                        };
                        class_4.prototype.getLabelAndValue = function (t) {
                            var e = this._cachedMeta, i = e.iScale, s = e.vScale, a = this.getParsed(t), n = a._custom, o = ua(n)
                                ? "[" + n.start + ", " + n.end + "]"
                                : "" + s.getLabelForValue(a[s.axis]);
                            return { label: "" + i.getLabelForValue(a[i.axis]), value: o };
                        };
                        class_4.prototype.initialize = function () {
                            (this.enableOptionSharing = !0),
                                _super.prototype.initialize.call(this),
                                (this._cachedMeta.stack = this.getDataset().stack);
                        };
                        class_4.prototype.update = function (t) {
                            var e = this._cachedMeta;
                            this.updateElements(e.data, 0, e.data.length, t);
                        };
                        class_4.prototype.updateElements = function (e, i, s, a) {
                            var _b;
                            var n = "reset" === a, _c = this, o = _c.index, r = _c._cachedMeta.vScale, l = r.getBasePixel(), h = r.isHorizontal(), c = this._getRuler(), _d = this._getSharedOptions(i, a), d = _d.sharedOptions, u = _d.includeOptions;
                            for (var t_85 = i; t_85 < i + s; t_85++) {
                                var i_44 = this.getParsed(t_85), s_39 = n || P(i_44[r.axis])
                                    ? { base: l, head: l }
                                    : this._calculateBarValuePixels(t_85), m_4 = this._calculateBarIndexPixels(t_85, c), b_3 = (i_44._stacks || {})[r.axis], x_4 = {
                                    horizontal: h,
                                    base: s_39.base,
                                    enableBorderRadius: !b_3 || ua(i_44._custom) || o === b_3._top || o === b_3._bottom,
                                    x: h ? s_39.head : m_4.center,
                                    y: h ? m_4.center : s_39.head,
                                    height: h ? m_4.size : Math.abs(s_39.size),
                                    width: h ? Math.abs(s_39.size) : m_4.size,
                                };
                                u &&
                                    (x_4.options =
                                        d ||
                                            this.resolveDataElementOptions(t_85, e[t_85].active ? "active" : a));
                                var g = x_4.options || e[t_85].options;
                                (function (n, t, e, i) {
                                    var s = t.borderSkipped;
                                    var a = {};
                                    if (!s)
                                        return (n.borderSkipped = a);
                                    if (!0 === s)
                                        return (n.borderSkipped = {
                                            top: !0,
                                            right: !0,
                                            bottom: !0,
                                            left: !0,
                                        });
                                    var _b = (function () {
                                        var t, e, i, s, a;
                                        return ((i = n.horizontal
                                            ? ((t = n.base > n.x), (e = "left"), "right")
                                            : ((t = n.base < n.y), (e = "bottom"), "top")),
                                            (a = t ? ((s = "end"), "start") : ((s = "start"), "end")),
                                            { start: e, end: i, reverse: t, top: s, bottom: a });
                                    })(), t = _b.start, o = _b.end, r = _b.reverse, l = _b.top, h = _b.bottom;
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
                                })(x_4, g, b_3, o),
                                    (_b = [x_4, g["inflateAmount"], c.ratio], g = _b[0], f = _b[1], p = _b[2]),
                                    (g.inflateAmount = "auto" === f ? (1 === p ? 0.33 : 0) : f),
                                    this.updateElement(e[t_85], t_85, x_4, a);
                            }
                            var f, p;
                        };
                        class_4.prototype._getStacks = function (t, i) {
                            var e = this._cachedMeta["iScale"], s = e
                                .getMatchingVisibleMetas(this._type)
                                .filter(function (t) { return t.controller.options.grouped; }), a = e.options.stacked, n = [];
                            for (var _b = 0, s_40 = s; _b < s_40.length; _b++) {
                                var e_57 = s_40[_b];
                                if ((void 0 === i ||
                                    !(function (t) {
                                        var e = t.controller.getParsed(i), e = e && e[t.vScale.axis];
                                        if (P(e) || isNaN(e))
                                            return !0;
                                    })(e_57)) &&
                                    ((!1 === a ||
                                        -1 === n.indexOf(e_57.stack) ||
                                        (void 0 === a && void 0 === e_57.stack)) &&
                                        n.push(e_57.stack),
                                        e_57.index === t))
                                    break;
                            }
                            return n.length || n.push(void 0), n;
                        };
                        class_4.prototype._getStackCount = function (t) {
                            return this._getStacks(void 0, t).length;
                        };
                        class_4.prototype._getStackIndex = function (t, e, i) {
                            var s = this._getStacks(t, i), a = void 0 !== e ? s.indexOf(e) : -1;
                            return -1 === a ? s.length - 1 : a;
                        };
                        class_4.prototype._getRuler = function () {
                            var t = this.options, e = this._cachedMeta, i = e.iScale, s = [];
                            var a, n;
                            for (a = 0, n = e.data.length; a < n; ++a)
                                s.push(i.getPixelForValue(this.getParsed(a)[i.axis], a));
                            var o = t.barThickness;
                            return {
                                min: o ||
                                    (function (t) {
                                        var e = t.iScale, i = (function (s, t) {
                                            if (!s._cache.$bar) {
                                                var a_35 = s.getMatchingVisibleMetas(t);
                                                var i_45 = [];
                                                for (var t_86 = 0, e_58 = a_35.length; t_86 < e_58; t_86++)
                                                    i_45 = i_45.concat(a_35[t_86].controller.getAllParsedValues(s));
                                                s._cache.$bar = wt(i_45.sort(function (t, e) { return t - e; }));
                                            }
                                            return s._cache.$bar;
                                        })(e, t.type);
                                        var s, a, n, o, r = e._length;
                                        var l = function () {
                                            32767 !== n &&
                                                -32768 !== n &&
                                                (G(o) && (r = Math.min(r, Math.abs(n - o) || r)),
                                                    (o = n));
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
                        };
                        class_4.prototype._calculateBarValuePixels = function (t) {
                            var _b = this, _c = _b._cachedMeta, e = _c.vScale, i = _c._stacked, s = _c.index, _d = _b.options, a = _d.base, n = _d.minBarLength, o = a || 0, r = this.getParsed(t), l = r._custom, h = ua(l);
                            var c, d, u = r[e.axis], g = 0, f = i ? this.applyStack(e, r, i) : u;
                            f !== u && ((g = f - u), (f = u)),
                                h &&
                                    ((u = l.barStart),
                                        (f = l.barEnd - l.barStart),
                                        0 !== u && y(u) !== y(l.barEnd) && (g = 0),
                                        (g += u));
                            var p, m, b = P(a) || h ? g : a;
                            var x = e.getPixelForValue(b);
                            if (((c = this.chart.getDataVisibility(t)
                                ? e.getPixelForValue(g + f)
                                : x),
                                (d = c - x),
                                Math.abs(d) < n)) {
                                (d =
                                    ((b = d),
                                        (p = e),
                                        (m = o),
                                        (0 !== b
                                            ? y(b)
                                            : (p.isHorizontal() ? 1 : -1) * (p.min >= m ? 1 : -1)) * n)),
                                    u === o && (x -= d / 2);
                                var t_87 = e.getPixelForDecimal(0), P_1 = e.getPixelForDecimal(1), a_36 = Math.min(t_87, P_1), l_13 = Math.max(t_87, P_1);
                                (x = Math.max(Math.min(x, l_13), a_36)),
                                    (c = x + d),
                                    i &&
                                        !h &&
                                        (r._stacks[e.axis]._visualValues[s] =
                                            e.getValueForPixel(c) - e.getValueForPixel(x));
                            }
                            if (x === e.getPixelForValue(o)) {
                                var t_88 = (y(d) * e.getLineWidthForValue(o)) / 2;
                                (x += t_88), (d -= t_88);
                            }
                            return { size: d, base: x, head: c, center: c + d / 2 };
                        };
                        class_4.prototype._calculateBarIndexPixels = function (t, e) {
                            var i = e.scale, s = this.options, a = s.skipNull, n = T(s.maxBarThickness, 1 / 0);
                            var o, r;
                            if (e.grouped) {
                                var i_46 = a ? this._getStackCount(t) : e.stackCount, T_2 = ("flex" === s.barThickness
                                    ? function (t, e, i, s) {
                                        var a = e.pixels, n = a[t];
                                        var o = 0 < t ? a[t - 1] : null, r = t < a.length - 1 ? a[t + 1] : null;
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
                                        var n, o;
                                        return ((o = P(a)
                                            ? ((n = e.min * i.categoryPercentage),
                                                i.barPercentage)
                                            : ((n = a * s), 1)),
                                            { chunk: n / s, ratio: o, start: e.pixels[t] - n / 2 });
                                    })(t, e, s, i_46), l_14 = this._getStackIndex(this.index, this._cachedMeta.stack, a ? t : void 0);
                                (o = T_2.start + T_2.chunk * l_14 + T_2.chunk / 2),
                                    (r = Math.min(n, T_2.chunk * T_2.ratio));
                            }
                            else
                                (o = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
                                    (r = Math.min(n, e.min * e.ratio));
                            return { base: o - r / 2, head: o + r / 2, center: o, size: r };
                        };
                        class_4.prototype.draw = function () {
                            var t = this._cachedMeta, e = t.vScale, i = t.data, s = i.length;
                            var a = 0;
                            for (; a < s; ++a)
                                null !== this.getParsed(a)[e.axis] && i[a].draw(this._ctx);
                        };
                        return class_4;
                    }(Os)),
                    __setFunctionName(_b, "BarController"),
                    _b.id = "bar",
                    _b.defaults = {
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
                    },
                    _b.overrides = {
                        scales: {
                            _index_: { type: "category", offset: !0, grid: { offset: !0 } },
                            _value_: { type: "linear", beginAtZero: !0 },
                        },
                    },
                    _b),
                BubbleController: (_c = /** @class */ (function (_super) {
                        __extends(class_5, _super);
                        function class_5() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        class_5.prototype.initialize = function () {
                            (this.enableOptionSharing = !0), _super.prototype.initialize.call(this);
                        };
                        class_5.prototype.parsePrimitiveData = function (t, e, i, s) {
                            var a = _super.prototype.parsePrimitiveData.call(this, t, e, i, s);
                            for (var t_89 = 0; t_89 < a.length; t_89++)
                                a[t_89]._custom = this.resolveDataElementOptions(t_89 + i).radius;
                            return a;
                        };
                        class_5.prototype.parseArrayData = function (t, e, i, s) {
                            var a = _super.prototype.parseArrayData.call(this, t, e, i, s);
                            for (var t_90 = 0; t_90 < a.length; t_90++) {
                                var s_41 = e[i + t_90];
                                a[t_90]._custom = T(s_41[2], this.resolveDataElementOptions(t_90 + i).radius);
                            }
                            return a;
                        };
                        class_5.prototype.parseObjectData = function (t, e, i, s) {
                            var a = _super.prototype.parseObjectData.call(this, t, e, i, s);
                            for (var t_91 = 0; t_91 < a.length; t_91++) {
                                var s_42 = e[i + t_91];
                                a[t_91]._custom = T(s_42 && s_42.r && +s_42.r, this.resolveDataElementOptions(t_91 + i).radius);
                            }
                            return a;
                        };
                        class_5.prototype.getMaxOverflow = function () {
                            var e = this._cachedMeta.data;
                            var i = 0;
                            for (var t_92 = e.length - 1; 0 <= t_92; --t_92)
                                i = Math.max(i, e[t_92].size(this.resolveDataElementOptions(t_92)) / 2);
                            return 0 < i && i;
                        };
                        class_5.prototype.getLabelAndValue = function (t) {
                            var e = this._cachedMeta, i = this.chart.data.labels || [], s = e.xScale, a = e.yScale, n = this.getParsed(t), o = s.getLabelForValue(n.x), r = a.getLabelForValue(n.y), l = n._custom;
                            return {
                                label: i[t] || "",
                                value: "(" + o + ", " + r + (l ? ", " + l : "") + ")",
                            };
                        };
                        class_5.prototype.update = function (t) {
                            var e = this._cachedMeta.data;
                            this.updateElements(e, 0, e.length, t);
                        };
                        class_5.prototype.updateElements = function (e, i, s, a) {
                            var n = "reset" === a, _b = this._cachedMeta, o = _b.iScale, r = _b.vScale, _c = this._getSharedOptions(i, a), l = _c.sharedOptions, h = _c.includeOptions, c = o.axis, d = r.axis;
                            for (var t_93 = i; t_93 < i + s; t_93++) {
                                var i_47 = e[t_93], s_43 = !n && this.getParsed(t_93), u_6 = {}, g_6 = (u_6[c] = n
                                    ? o.getPixelForDecimal(0.5)
                                    : o.getPixelForValue(s_43[c])), f_6 = (u_6[d] = n ? r.getBasePixel() : r.getPixelForValue(s_43[d]));
                                (u_6.skip = isNaN(g_6) || isNaN(f_6)),
                                    h &&
                                        ((u_6.options =
                                            l ||
                                                this.resolveDataElementOptions(t_93, i_47.active ? "active" : a)),
                                            n && (u_6.options.radius = 0)),
                                    this.updateElement(i_47, t_93, u_6, a);
                            }
                        };
                        class_5.prototype.resolveDataElementOptions = function (t, e) {
                            var i = this.getParsed(t);
                            var s = _super.prototype.resolveDataElementOptions.call(this, t, e);
                            t = (s = s.$shared ? Object.assign({}, s, { $shared: !1 }) : s)
                                .radius;
                            return ("active" !== e && (s.radius = 0),
                                (s.radius += T(i && i._custom, t)),
                                s);
                        };
                        return class_5;
                    }(Os)),
                    __setFunctionName(_c, "BubbleController"),
                    _c.id = "bubble",
                    _c.defaults = {
                        datasetElementType: !1,
                        dataElementType: "point",
                        animations: {
                            numbers: {
                                type: "number",
                                properties: ["x", "y", "borderWidth", "radius"],
                            },
                        },
                    },
                    _c.overrides = {
                        scales: { x: { type: "linear" }, y: { type: "linear" } },
                    },
                    _c),
                DoughnutController: pa,
                LineController: (_d = /** @class */ (function (_super) {
                        __extends(class_6, _super);
                        function class_6() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        class_6.prototype.initialize = function () {
                            (this.enableOptionSharing = !0),
                                (this.supportsDecimation = !0),
                                _super.prototype.initialize.call(this);
                        };
                        class_6.prototype.update = function (t) {
                            var e = this._cachedMeta, i = e.dataset, _b = e.data, s = _b === void 0 ? [] : _b, a = e._dataset, n = this.chart._animationsDisabled;
                            var _c = Ot(e, s, n), o = _c.start, r = _c.count;
                            (this._drawStart = o),
                                (this._drawCount = r),
                                At(e) && ((o = 0), (r = s.length)),
                                (i._chart = this.chart),
                                (i._datasetIndex = this.index),
                                (i._decimated = !!a._decimated),
                                (i.points = s);
                            var l = this.resolveDatasetElementOptions(t);
                            this.options.showLine || (l.borderWidth = 0),
                                (l.segment = this.options.segment),
                                this.updateElement(i, void 0, { animated: !n, options: l }, t),
                                this.updateElements(s, o, r, t);
                        };
                        class_6.prototype.updateElements = function (e, i, t, s) {
                            var a = "reset" === s, _b = this._cachedMeta, n = _b.iScale, o = _b.vScale, r = _b._stacked, l = _b._dataset, _c = this._getSharedOptions(i, s), h = _c.sharedOptions, c = _c.includeOptions, d = n.axis, u = o.axis, _d = this.options, g = _d.spanGaps, f = _d.segment, p = rt(g) ? g : Number.POSITIVE_INFINITY, m = this.chart._animationsDisabled || a || "none" === s, b = i + t, x = e.length;
                            var v = 0 < i && this.getParsed(i - 1);
                            for (var t_94 = 0; t_94 < x; ++t_94) {
                                var g_7 = e[t_94], x_5 = m ? g_7 : {};
                                var _, y, M, w;
                                t_94 < i || t_94 >= b
                                    ? (x_5.skip = !0)
                                    : ((y = P((_ = this.getParsed(t_94))[u])),
                                        (M = x_5[d] = n.getPixelForValue(_[d], t_94)),
                                        (w = x_5[u] =
                                            a || y
                                                ? o.getBasePixel()
                                                : o.getPixelForValue(r ? this.applyStack(o, _, r) : _[u], t_94)),
                                        (x_5.skip = isNaN(M) || isNaN(w) || y),
                                        (x_5.stop = 0 < t_94 && Math.abs(_[d] - v[d]) > p),
                                        f && ((x_5.parsed = _), (x_5.raw = l.data[t_94])),
                                        c &&
                                            (x_5.options =
                                                h ||
                                                    this.resolveDataElementOptions(t_94, g_7.active ? "active" : s)),
                                        m || this.updateElement(g_7, t_94, x_5, s),
                                        (v = _));
                            }
                        };
                        class_6.prototype.getMaxOverflow = function () {
                            var t = this._cachedMeta, e = t.dataset, i = (e.options && e.options.borderWidth) || 0, s = t.data || [];
                            if (!s.length)
                                return i;
                            var a = s[0].size(this.resolveDataElementOptions(0)), n = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
                            return Math.max(i, a, n) / 2;
                        };
                        class_6.prototype.draw = function () {
                            var t = this._cachedMeta;
                            t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
                                _super.prototype.draw.call(this);
                        };
                        return class_6;
                    }(Os)),
                    __setFunctionName(_d, "LineController"),
                    _d.id = "line",
                    _d.defaults = {
                        datasetElementType: "line",
                        dataElementType: "point",
                        showLine: !0,
                        spanGaps: !1,
                    },
                    _d.overrides = {
                        scales: {
                            _index_: { type: "category" },
                            _value_: { type: "linear" },
                        },
                    },
                    _d),
                PieController: (_f = /** @class */ (function (_super) {
                        __extends(class_7, _super);
                        function class_7() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        return class_7;
                    }(pa)),
                    __setFunctionName(_f, "PieController"),
                    _f.id = "pie",
                    _f.defaults = {
                        cutout: 0,
                        rotation: 0,
                        circumference: 360,
                        radius: "100%",
                    },
                    _f),
                PolarAreaController: ma,
                RadarController: (_g = /** @class */ (function (_super) {
                        __extends(class_8, _super);
                        function class_8() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        class_8.prototype.getLabelAndValue = function (t) {
                            var e = this._cachedMeta.vScale, i = this.getParsed(t);
                            return {
                                label: e.getLabels()[t],
                                value: "" + e.getLabelForValue(i[e.axis]),
                            };
                        };
                        class_8.prototype.parseObjectData = function (t, e, i, s) {
                            return ii.bind(this)(t, e, i, s);
                        };
                        class_8.prototype.update = function (t) {
                            var e = this._cachedMeta, i = e.dataset, s = e.data || [], a = e.iScale.getLabels();
                            if (((i.points = s), "resize" !== t)) {
                                var e_59 = this.resolveDatasetElementOptions(t);
                                this.options.showLine || (e_59.borderWidth = 0);
                                var n = {
                                    _loop: !0,
                                    _fullLoop: a.length === s.length,
                                    options: e_59,
                                };
                                this.updateElement(i, void 0, n, t);
                            }
                            this.updateElements(s, 0, s.length, t);
                        };
                        class_8.prototype.updateElements = function (e, i, s, a) {
                            var n = this._cachedMeta.rScale, o = "reset" === a;
                            for (var t_95 = i; t_95 < i + s; t_95++) {
                                var i_48 = e[t_95], s_44 = this.resolveDataElementOptions(t_95, i_48.active ? "active" : a), r_10 = n.getPointPositionForValue(t_95, this.getParsed(t_95).r), l_15 = o ? n.xCenter : r_10.x, h_10 = o ? n.yCenter : r_10.y, c_9 = {
                                    x: l_15,
                                    y: h_10,
                                    angle: r_10.angle,
                                    skip: isNaN(l_15) || isNaN(h_10),
                                    options: s_44,
                                };
                                this.updateElement(i_48, t_95, c_9, a);
                            }
                        };
                        return class_8;
                    }(Os)),
                    __setFunctionName(_g, "RadarController"),
                    _g.id = "radar",
                    _g.defaults = {
                        datasetElementType: "line",
                        dataElementType: "point",
                        indexAxis: "r",
                        showLine: !0,
                        elements: { line: { fill: "start" } },
                    },
                    _g.overrides = {
                        aspectRatio: 1,
                        scales: { r: { type: "radialLinear" } },
                    },
                    _g),
                ScatterController: (_h = /** @class */ (function (_super) {
                        __extends(class_9, _super);
                        function class_9() {
                            return _super !== null && _super.apply(this, arguments) || this;
                        }
                        class_9.prototype.getLabelAndValue = function (t) {
                            var e = this._cachedMeta, i = this.chart.data.labels || [], s = e.xScale, a = e.yScale, n = this.getParsed(t), o = s.getLabelForValue(n.x), r = a.getLabelForValue(n.y);
                            return { label: i[t] || "", value: "(" + o + ", " + r + ")" };
                        };
                        class_9.prototype.update = function (t) {
                            var e = this._cachedMeta, _b = e.data, i = _b === void 0 ? [] : _b, s = this.chart._animationsDisabled;
                            var _c = Ot(e, i, s), a = _c.start, n = _c.count;
                            if (((this._drawStart = a),
                                (this._drawCount = n),
                                At(e) && ((a = 0), (n = i.length)),
                                this.options.showLine)) {
                                this.datasetElementType || this.addElements();
                                var a_37 = e.dataset, n_24 = e._dataset, o_22 = ((a_37._chart = this.chart),
                                    (a_37._datasetIndex = this.index),
                                    (a_37._decimated = !!n_24._decimated),
                                    (a_37.points = i),
                                    this.resolveDatasetElementOptions(t));
                                (o_22.segment = this.options.segment),
                                    this.updateElement(a_37, void 0, { animated: !s, options: o_22 }, t);
                            }
                            else
                                this.datasetElementType &&
                                    (delete e.dataset, (this.datasetElementType = !1));
                            this.updateElements(i, a, n, t);
                        };
                        class_9.prototype.addElements = function () {
                            var t = this.options["showLine"];
                            !this.datasetElementType &&
                                t &&
                                (this.datasetElementType =
                                    this.chart.registry.getElement("line")),
                                _super.prototype.addElements.call(this);
                        };
                        class_9.prototype.updateElements = function (e, i, s, a) {
                            var n = "reset" === a, _b = this._cachedMeta, o = _b.iScale, r = _b.vScale, l = _b._stacked, h = _b._dataset, t = this.resolveDataElementOptions(i, a), c = this.getSharedOptions(t), d = this.includeOptions(a, c), u = o.axis, g = r.axis, _c = this.options, f = _c.spanGaps, p = _c.segment, m = rt(f) ? f : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || n || "none" === a;
                            var x = 0 < i && this.getParsed(i - 1);
                            for (var t_96 = i; t_96 < i + s; ++t_96) {
                                var i_49 = e[t_96], s_45 = this.getParsed(t_96), f_7 = b ? i_49 : {}, v_2 = P(s_45[g]), _1 = (f_7[u] = o.getPixelForValue(s_45[u], t_96)), y_1 = (f_7[g] =
                                    n || v_2
                                        ? r.getBasePixel()
                                        : r.getPixelForValue(l ? this.applyStack(r, s_45, l) : s_45[g], t_96));
                                (f_7.skip = isNaN(_1) || isNaN(y_1) || v_2),
                                    (f_7.stop = 0 < t_96 && Math.abs(s_45[u] - x[u]) > m),
                                    p && ((f_7.parsed = s_45), (f_7.raw = h.data[t_96])),
                                    d &&
                                        (f_7.options =
                                            c ||
                                                this.resolveDataElementOptions(t_96, i_49.active ? "active" : a)),
                                    b || this.updateElement(i_49, t_96, f_7, a),
                                    (x = s_45);
                            }
                            this.updateSharedOptions(c, a, t);
                        };
                        class_9.prototype.getMaxOverflow = function () {
                            var t = this._cachedMeta, i = t.data || [];
                            if (!this.options.showLine) {
                                var e_60 = 0;
                                for (var t_97 = i.length - 1; 0 <= t_97; --t_97)
                                    e_60 = Math.max(e_60, i[t_97].size(this.resolveDataElementOptions(t_97)) / 2);
                                return 0 < e_60 && e_60;
                            }
                            var e = t.dataset, e = (e.options && e.options.borderWidth) || 0;
                            if (!i.length)
                                return e;
                            var s = i[0].size(this.resolveDataElementOptions(0)), a = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
                            return Math.max(e, s, a) / 2;
                        };
                        return class_9;
                    }(Os)),
                    __setFunctionName(_h, "ScatterController"),
                    _h.id = "scatter",
                    _h.defaults = {
                        datasetElementType: !1,
                        dataElementType: "point",
                        showLine: !1,
                        fill: !1,
                    },
                    _h.overrides = {
                        interaction: { mode: "point" },
                        scales: { x: { type: "linear" }, y: { type: "linear" } },
                    },
                    _h),
            });
            function xa(t, e, i, s) {
                return { x: i + t * Math.cos(e), y: s + t * Math.sin(e) };
            }
            function va(t, e, i, s, a, n) {
                var o = e.x, r = e.y, l = e.startAngle, h = e.pixelMargin, c = e.innerRadius, d = Math.max(e.outerRadius + s + i - h, 0), h = 0 < c ? c + s + i + h : 0;
                var u = 0;
                var g = a - l;
                if (s) {
                    var t_98 = ((0 < c ? c - s : 0) + (0 < d ? d - s : 0)) / 2;
                    u = (g - (0 != t_98 ? (g * t_98) / (t_98 + s) : g)) / 2;
                }
                var c = (g - Math.max(0.001, g * d - i / S) / d) / 2, g = l + c + u, l = a - c - u, _b = (function (t, e, i, s) {
                    t = yi(t.options.borderRadius, [
                        "outerStart",
                        "outerEnd",
                        "innerStart",
                        "innerEnd",
                    ]);
                    var a = (i - e) / 2, n = Math.min(a, (s * e) / 2), o = function (t) {
                        var e = ((i - Math.min(a, t)) * s) / 2;
                        return C(t, 0, Math.min(a, e));
                    };
                    return {
                        outerStart: o(t.outerStart),
                        outerEnd: o(t.outerEnd),
                        innerStart: C(t.innerStart, 0, n),
                        innerEnd: C(t.innerEnd, 0, n),
                    };
                })(e, h, d, l - g), c = _b.outerStart, f = _b.outerEnd, p = _b.innerStart, m = _b.innerEnd, b = d - c, x = d - f, v = g + c / b, _ = l - f / x, y = h + p, M = h + m, w = g + p / y, k = l - m / M;
                if ((t.beginPath(), n)) {
                    var e_61 = (v + _) / 2;
                    if ((t.arc(o, r, d, v, e_61), t.arc(o, r, d, e_61, _), 0 < f)) {
                        var e_62 = xa(x, _, o, r);
                        t.arc(e_62.x, e_62.y, f, _, l + D);
                    }
                    var i_50 = xa(M, l, o, r);
                    if ((t.lineTo(i_50.x, i_50.y), 0 < m)) {
                        var e_63 = xa(M, k, o, r);
                        t.arc(e_63.x, e_63.y, m, l + D, k + Math.PI);
                    }
                    var s_46 = (l - m / h + (g + p / h)) / 2;
                    if ((t.arc(o, r, h, l - m / h, s_46, !0),
                        t.arc(o, r, h, s_46, g + p / h, !0),
                        0 < p)) {
                        var e_64 = xa(y, w, o, r);
                        t.arc(e_64.x, e_64.y, p, w + Math.PI, g - D);
                    }
                    var a_38 = xa(b, g, o, r);
                    if ((t.lineTo(a_38.x, a_38.y), 0 < c)) {
                        var e_65 = xa(b, v, o, r);
                        t.arc(e_65.x, e_65.y, c, g - D, v);
                    }
                }
                else {
                    t.moveTo(o, r);
                    var e_66 = Math.cos(v) * d + o, i_51 = Math.sin(v) * d + r, s_47 = (t.lineTo(e_66, i_51), Math.cos(_) * d + o), a_39 = Math.sin(_) * d + r;
                    t.lineTo(s_47, a_39);
                }
                t.closePath();
            }
            function _a(t, e, i) {
                if (i === void 0) { i = e; }
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
            function Ma(t, e, i) {
                if (i === void 0) { i = {}; }
                var t = t.length, _b = i, _c = _b.start, i = _c === void 0 ? 0 : _c, _d = _b.end, s = _d === void 0 ? t - 1 : _d, a = e.start, n = e.end, o = Math.max(i, a), r = Math.min(s, n);
                return {
                    count: t,
                    start: o,
                    loop: e.loop,
                    ilen: r < o && !((i < a && s < a) || (n < i && n < s))
                        ? t + r - o
                        : r - o,
                };
            }
            function wa(t, e, i, s) {
                var a = e.points, n = e.options, _b = Ma(a, i, s), o = _b.count, r = _b.start, l = _b.loop, h = _b.ilen, c = n.stepped
                    ? We
                    : n.tension || "monotone" === n.cubicInterpolationMode
                        ? Ne
                        : ya;
                var d, u, g, _c = s || {}, _d = _c.move, f = _d === void 0 ? !0 : _d, p = _c.reverse;
                for (d = 0; d <= h; ++d)
                    (u = a[(r + (p ? h - d : d)) % o]).skip ||
                        (f ? (t.moveTo(u.x, u.y), (f = !1)) : c(t, g, u, p, n.stepped),
                            (g = u));
                return (l && ((u = a[(r + (p ? h : 0)) % o]), c(t, g, u, p, n.stepped)), !!l);
            }
            function ka(t, e, i, s) {
                var a = e.points, _b = Ma(a, i, s), n = _b.count, o = _b.start, r = _b.ilen, _c = s || {}, _d = _c.move, l = _d === void 0 ? !0 : _d, h = _c.reverse;
                var c, d, u, g, f, p, m = 0, b = 0;
                var x = function (t) { return (o + (h ? r - t : t)) % n; }, v = function () {
                    g !== f && (t.lineTo(m, f), t.lineTo(m, g), t.lineTo(m, p));
                };
                for (l && ((d = a[x(0)]), t.moveTo(d.x, d.y)), c = 0; c <= r; ++c)
                    if (!(d = a[x(c)]).skip) {
                        var e_67 = d.x, i_52 = d.y, s_48 = 0 | e_67;
                        s_48 === u
                            ? (i_52 < g ? (g = i_52) : i_52 > f && (f = i_52), (m = (b * m + e_67) / ++b))
                            : (v(), t.lineTo(e_67, i_52), (u = s_48), (b = 0), (g = f = i_52)),
                            (p = i_52);
                    }
                v();
            }
            function Sa(t) {
                var e = t.options, i = e.borderDash && e.borderDash.length;
                return t._decimated ||
                    t._loop ||
                    e.tension ||
                    "monotone" === e.cubicInterpolationMode ||
                    e.stepped ||
                    i
                    ? wa
                    : ka;
            }
            var Pa = "function" == typeof Path2D;
            var Da = /** @class */ (function (_super) {
                __extends(Da, _super);
                function Da(t) {
                    var _this = this;
                    _this = _super.call(this) || this,
                        (_this.animated = !0),
                        (_this.options = void 0),
                        (_this._chart = void 0),
                        (_this._loop = void 0),
                        (_this._fullLoop = void 0),
                        (_this._path = void 0),
                        (_this._points = void 0),
                        (_this._segments = void 0),
                        (_this._decimated = !1),
                        (_this._pointsUpdated = !1),
                        (_this._datasetIndex = void 0),
                        t && Object.assign(_this, t);
                    return _this;
                }
                Da.prototype.updateControlPoints = function (t, e) {
                    var i, s = this.options;
                    (!s.tension && "monotone" !== s.cubicInterpolationMode) ||
                        s.stepped ||
                        this._pointsUpdated ||
                        ((i = s.spanGaps ? this._loop : this._fullLoop),
                            hi(this._points, s, t, i, e),
                            (this._pointsUpdated = !0));
                };
                Object.defineProperty(Da.prototype, "points", {
                    get: function () {
                        return this._points;
                    },
                    set: function (t) {
                        (this._points = t),
                            delete this._segments,
                            delete this._path,
                            (this._pointsUpdated = !1);
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Da.prototype, "segments", {
                    get: function () {
                        return (this._segments || (this._segments = Ri(this, this.options.segment)));
                    },
                    enumerable: false,
                    configurable: true
                });
                Da.prototype.first = function () {
                    var t = this.segments, e = this.points;
                    return t.length && e[t[0].start];
                };
                Da.prototype.last = function () {
                    var t = this.segments, e = this.points, i = t.length;
                    return i && e[t[i - 1].end];
                };
                Da.prototype.interpolate = function (i, s) {
                    var a = this.options, n = i[s], o = this.points, r = Ei(this, { property: s, start: n, end: n });
                    if (r.length) {
                        var l_16 = [], h_11 = a.stepped
                            ? pi
                            : a.tension || "monotone" === a.cubicInterpolationMode
                                ? mi
                                : fi;
                        var e_68, t_99;
                        for (e_68 = 0, t_99 = r.length; e_68 < t_99; ++e_68) {
                            var _b = r[e_68], t_100 = _b.start, c_10 = _b.end, d_10 = o[t_100], u_7 = o[c_10];
                            if (d_10 === u_7)
                                l_16.push(d_10);
                            else {
                                var g_8 = h_11(d_10, u_7, Math.abs((n - d_10[s]) / (u_7[s] - d_10[s])), a.stepped);
                                (g_8[s] = i[s]), l_16.push(g_8);
                            }
                        }
                        return 1 === l_16.length ? l_16[0] : l_16;
                    }
                };
                Da.prototype.pathSegment = function (t, e, i) {
                    return Sa(this)(t, this, e, i);
                };
                Da.prototype.path = function (t, e, i) {
                    var s = this.segments, a = Sa(this);
                    var n = this._loop;
                    (e = e || 0), (i = i || this.points.length - e);
                    for (var _b = 0, s_49 = s; _b < s_49.length; _b++) {
                        var o_23 = s_49[_b];
                        n &= a(t, this, o_23, { start: e, end: e + i - 1 });
                    }
                    return !!n;
                };
                Da.prototype.draw = function (t, e, i, s) {
                    var a, n = this.options || {};
                    (this.points || []).length &&
                        n.borderWidth &&
                        (t.save(),
                            (n = t),
                            (a = this),
                            (i = i),
                            (s = s),
                            (Pa && !a.options.segment
                                ? function (t, e, i, s) {
                                    var a = e._path;
                                    a ||
                                        ((a = e._path = new Path2D()),
                                            e.path(a, i, s) && a.closePath()),
                                        _a(t, e.options),
                                        t.stroke(a);
                                }
                                : function (t, e, i, s) {
                                    var a = e.segments, n = e.options, o = Sa(e);
                                    for (var _b = 0, a_40 = a; _b < a_40.length; _b++) {
                                        var r_11 = a_40[_b];
                                        _a(t, n, r_11.style),
                                            t.beginPath(),
                                            o(t, e, r_11, { start: i, end: i + s - 1 }) && t.closePath(),
                                            t.stroke();
                                    }
                                })(n, a, i, s),
                            t.restore()),
                        this.animated &&
                            ((this._pointsUpdated = !1), (this._path = void 0));
                };
                Da.id = "line";
                Da.defaults = {
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
                Da.defaultRoutes = {
                    backgroundColor: "backgroundColor",
                    borderColor: "borderColor",
                };
                Da.descriptors = {
                    _scriptable: !0,
                    _indexable: function (t) { return "borderDash" !== t && "fill" !== t; },
                };
                return Da;
            }(e));
            function Ca(t, e, i, s) {
                var a = t.options, _b = t.getProps([i], s), _c = i, t = _b[_c];
                return Math.abs(e - t) < a.radius + a.hitRadius;
            }
            function Oa(t, e) {
                var _b = t.getProps(["x", "y", "base", "width", "height"], e), e = _b.x, i = _b.y, s = _b.base, a = _b.width, n = _b.height;
                var o, r, l, h, c;
                return ((h = t.horizontal
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
                    { left: o, top: l, right: r, bottom: h });
            }
            function Aa(t, e, i, s) {
                return t ? 0 : C(e, i, s);
            }
            function Ta(t, e, i, s) {
                var a = null === e, n = null === i, t = t && !(a && n) && Oa(t, s);
                return (t && (a || c(e, t.left, t.right)) && (n || c(i, t.top, t.bottom)));
            }
            function La(t, e) {
                t.rect(e.x, e.y, e.w, e.h);
            }
            function Ea(t, e, i) {
                if (i === void 0) { i = {}; }
                var s = t.x !== i.x ? -e : 0, a = t.y !== i.y ? -e : 0, n = (t.x + t.w !== i.x + i.w ? e : 0) - s, i = (t.y + t.h !== i.y + i.h ? e : 0) - a;
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
                ArcElement: (_j = /** @class */ (function (_super) {
                        __extends(class_10, _super);
                        function class_10(t) {
                            var _this = this;
                            _this = _super.call(this) || this,
                                (_this.options = void 0),
                                (_this.circumference = void 0),
                                (_this.startAngle = void 0),
                                (_this.endAngle = void 0),
                                (_this.innerRadius = void 0),
                                (_this.outerRadius = void 0),
                                (_this.pixelMargin = 0),
                                (_this.fullCircles = 0),
                                t && Object.assign(_this, t);
                            return _this;
                        }
                        class_10.prototype.inRange = function (t, e, i) {
                            var _b = ut(this.getProps(["x", "y"], i), {
                                x: t,
                                y: e,
                            }), t = _b.angle, e = _b.distance, _c = this.getProps([
                                "startAngle",
                                "endAngle",
                                "innerRadius",
                                "outerRadius",
                                "circumference",
                            ], i), i = _c.startAngle, s = _c.endAngle, a = _c.innerRadius, n = _c.outerRadius, o = _c.circumference, r = (this.options.spacing + this.options.borderWidth) / 2, o = T(o, s - i) >= _ || pt(t, i, s), t = c(e, a + r, n + r);
                            return o && t;
                        };
                        class_10.prototype.getCenterPoint = function (t) {
                            var _b = this.getProps([
                                "x",
                                "y",
                                "startAngle",
                                "endAngle",
                                "innerRadius",
                                "outerRadius",
                            ], t), t = _b.x, e = _b.y, i = _b.startAngle, s = _b.endAngle, a = _b.innerRadius, n = _b.outerRadius, _c = this.options, o = _c.offset, r = _c.spacing, i = (i + s) / 2, s = (a + n + r + o) / 2;
                            return { x: t + Math.cos(i) * s, y: e + Math.sin(i) * s };
                        };
                        class_10.prototype.tooltipPosition = function (t) {
                            return this.getCenterPoint(t);
                        };
                        class_10.prototype.draw = function (e) {
                            var _b = this, i = _b.options, s = _b.circumference, a = (i.offset || 0) / 4, n = (i.spacing || 0) / 2, o = i.circular;
                            if (((this.pixelMargin = "inner" === i.borderAlign ? 0.33 : 0),
                                (this.fullCircles = s > _ ? Math.floor(s / _) : 0),
                                !(0 === s || this.innerRadius < 0 || this.outerRadius < 0))) {
                                e.save();
                                var r = (this.startAngle + this.endAngle) / 2, r = (e.translate(Math.cos(r) * a, Math.sin(r) * a),
                                    a * (1 - Math.sin(Math.min(S, s || 0))));
                                (e.fillStyle = i.backgroundColor),
                                    (e.strokeStyle = i.borderColor);
                                {
                                    var l = e;
                                    a = this;
                                    s = r;
                                    i = n;
                                    var h = o;
                                    var c = a.fullCircles, d = a.startAngle, u = a.circumference;
                                    var t_101 = a.endAngle;
                                    if (c) {
                                        va(l, a, s, i, t_101, h);
                                        for (var t_102 = 0; t_102 < c; ++t_102)
                                            l.fill();
                                        isNaN(u) || (t_101 = d + (u % _ || _));
                                    }
                                    va(l, a, s, i, t_101, h), l.fill();
                                }
                                var g = e, d = this, u = r, a = n, s = o, f = d.fullCircles, i = d.startAngle, h = d.circumference, r = d.options, n = r.borderWidth, o = r.borderJoinStyle, p = r.borderDash, m = r.borderDashOffset, r = "inner" === r.borderAlign;
                                if (n) {
                                    g.setLineDash(p || []),
                                        (g.lineDashOffset = m),
                                        r
                                            ? ((g.lineWidth = 2 * n), (g.lineJoin = o || "round"))
                                            : ((g.lineWidth = n), (g.lineJoin = o || "bevel"));
                                    var t_103 = d.endAngle;
                                    if (f) {
                                        va(g, d, u, a, t_103, s);
                                        for (var t_104 = 0; t_104 < f; ++t_104)
                                            g.stroke();
                                        isNaN(h) || (t_103 = i + (h % _ || _));
                                    }
                                    if (r) {
                                        p = g;
                                        m = d;
                                        n = t_103;
                                        var _c = m, m = _c.startAngle, o = _c.pixelMargin, i = _c.x, h = _c.y, r = _c.outerRadius, b = _c.innerRadius, x = o / r;
                                        p.beginPath(),
                                            p.arc(i, h, r, m - x, n + x),
                                            o < b
                                                ? p.arc(i, h, b, n + (x = o / b), m - x, !0)
                                                : p.arc(i, h, o, n + D, m - D),
                                            p.closePath(),
                                            p.clip();
                                    }
                                    f || (va(g, d, u, a, t_103, s), g.stroke());
                                }
                                e.restore();
                            }
                        };
                        return class_10;
                    }(e)),
                    __setFunctionName(_j, "ArcElement"),
                    _j.id = "arc",
                    _j.defaults = {
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
                    },
                    _j.defaultRoutes = { backgroundColor: "backgroundColor" },
                    _j.descriptors = {
                        _scriptable: !0,
                        _indexable: function (t) { return "borderDash" !== t; },
                    },
                    _j),
                BarElement: (_k = /** @class */ (function (_super) {
                        __extends(class_11, _super);
                        function class_11(t) {
                            var _this = this;
                            _this = _super.call(this) || this,
                                (_this.options = void 0),
                                (_this.horizontal = void 0),
                                (_this.base = void 0),
                                (_this.width = void 0),
                                (_this.height = void 0),
                                (_this.inflateAmount = void 0),
                                t && Object.assign(_this, t);
                            return _this;
                        }
                        class_11.prototype.draw = function (t) {
                            var _b = this, e = _b.inflateAmount, _c = _b.options, i = _c.borderColor, s = _c.backgroundColor, _d = ((u = Oa((r = this))),
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
                                (r = (c = r).getProps([
                                    "enableBorderRadius",
                                ]).enableBorderRadius),
                                (m = c.options.borderRadius),
                                (l = wi(m)),
                                (h = Math.min(h, d)),
                                (d = c.borderSkipped),
                                (r = {
                                    topLeft: Aa(!(c = r || A(m)) || d.top || d.left, l.topLeft, 0, h),
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
                                            bottomRight: Math.max(0, r.bottomRight - Math.max(p.b, p.r)),
                                        },
                                    },
                                }), a = _d.inner, n = _d.outer, o = (m = n.radius).topLeft ||
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
                        };
                        class_11.prototype.inRange = function (t, e, i) {
                            return Ta(this, t, e, i);
                        };
                        class_11.prototype.inXRange = function (t, e) {
                            return Ta(this, t, null, e);
                        };
                        class_11.prototype.inYRange = function (t, e) {
                            return Ta(this, null, t, e);
                        };
                        class_11.prototype.getCenterPoint = function (t) {
                            var _b = this.getProps(["x", "y", "base", "horizontal"], t), t = _b.x, e = _b.y, i = _b.base, s = _b.horizontal;
                            return { x: s ? (t + i) / 2 : t, y: s ? e : (e + i) / 2 };
                        };
                        class_11.prototype.getRange = function (t) {
                            return "x" === t ? this.width / 2 : this.height / 2;
                        };
                        return class_11;
                    }(e)),
                    __setFunctionName(_k, "BarElement"),
                    _k.id = "bar",
                    _k.defaults = {
                        borderSkipped: "start",
                        borderWidth: 0,
                        borderRadius: 0,
                        inflateAmount: "auto",
                        pointStyle: void 0,
                    },
                    _k.defaultRoutes = {
                        backgroundColor: "backgroundColor",
                        borderColor: "borderColor",
                    },
                    _k),
                LineElement: Da,
                PointElement: (_l = /** @class */ (function (_super) {
                        __extends(class_12, _super);
                        function class_12(t) {
                            var _this = this;
                            _this = _super.call(this) || this,
                                (_this.options = void 0),
                                (_this.parsed = void 0),
                                (_this.skip = void 0),
                                (_this.stop = void 0),
                                t && Object.assign(_this, t);
                            return _this;
                        }
                        class_12.prototype.inRange = function (t, e, i) {
                            var s = this.options, _b = this.getProps(["x", "y"], i), i = _b.x, a = _b.y;
                            return (Math.pow(t - i, 2) + Math.pow(e - a, 2) <
                                Math.pow(s.hitRadius + s.radius, 2));
                        };
                        class_12.prototype.inXRange = function (t, e) {
                            return Ca(this, t, "x", e);
                        };
                        class_12.prototype.inYRange = function (t, e) {
                            return Ca(this, t, "y", e);
                        };
                        class_12.prototype.getCenterPoint = function (t) {
                            var _b = this.getProps(["x", "y"], t), t = _b.x, e = _b.y;
                            return { x: t, y: e };
                        };
                        class_12.prototype.size = function (t) {
                            var e = (t = t || this.options || {}).radius || 0;
                            return (2 *
                                ((e = Math.max(e, (e && t.hoverRadius) || 0)) +
                                    ((e && t.borderWidth) || 0)));
                        };
                        class_12.prototype.draw = function (t, e) {
                            var i = this.options;
                            this.skip ||
                                i.radius < 0.1 ||
                                !M(this, e, this.size(i) / 2) ||
                                ((t.strokeStyle = i.borderColor),
                                    (t.lineWidth = i.borderWidth),
                                    (t.fillStyle = i.backgroundColor),
                                    ze(t, i, this.x, this.y));
                        };
                        class_12.prototype.getRange = function () {
                            var t = this.options || {};
                            return t.radius + t.hitRadius;
                        };
                        return class_12;
                    }(e)),
                    __setFunctionName(_l, "PointElement"),
                    _l.id = "point",
                    _l.defaults = {
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverBorderWidth: 1,
                        hoverRadius: 4,
                        pointStyle: "circle",
                        radius: 3,
                        rotation: 0,
                    },
                    _l.defaultRoutes = {
                        backgroundColor: "backgroundColor",
                        borderColor: "borderColor",
                    },
                    _l),
            });
            function Ia(t) {
                var e = this.getLabels();
                return 0 <= t && t < e.length ? e[t] : t;
            }
            function za(t, e, _b) {
                var i = _b.horizontal, s = _b.minRotation;
                (s = L(s)), (i = (i ? Math.sin(s) : Math.cos(s)) || 0.001);
                return Math.min(e / i, 0.75 * e * ("" + t).length);
            }
            var Fa = /** @class */ (function (_super) {
                __extends(Fa, _super);
                function Fa(t) {
                    var _this = this;
                    _this = _super.call(this, t) || this,
                        (_this.start = void 0),
                        (_this.end = void 0),
                        (_this._startValue = void 0),
                        (_this._endValue = void 0),
                        (_this._valueRange = 0);
                    return _this;
                }
                Fa.prototype.parse = function (t, e) {
                    return P(t) ||
                        (("number" == typeof t || t instanceof Number) && !isFinite(+t))
                        ? null
                        : +t;
                };
                Fa.prototype.handleTickRangeOptions = function () {
                    var t = this.options["beginAtZero"], _b = this.getUserBounds(), e = _b.minDefined, i = _b.maxDefined;
                    var _c = this, s = _c.min, a = _c.max;
                    var n, o = function (t) { return (s = e ? s : t); }, r = function (t) { return (a = i ? a : t); };
                    if (t) {
                        var t_105 = y(s), e_69 = y(a);
                        t_105 < 0 && e_69 < 0 ? r(0) : 0 < t_105 && 0 < e_69 && o(0);
                    }
                    s === a &&
                        ((n = 0 === a ? 1 : Math.abs(0.05 * a)), r(a + n), t || o(s - n)),
                        (this.min = s),
                        (this.max = a);
                };
                Fa.prototype.getTickLimit = function () {
                    var t, _b = this.options.ticks, e = _b.maxTicksLimit, i = _b.stepSize;
                    return (i
                        ? 1e3 <
                            (t =
                                Math.ceil(this.max / i) - Math.floor(this.min / i) + 1) &&
                            (console.warn("scales.".concat(this.id, ".ticks.stepSize: ").concat(i, " would result generating up to ").concat(t, " ticks. Limiting to 1000.")),
                                (t = 1e3))
                        : ((t = this.computeTickLimit()), (e = e || 11)),
                        (t = e ? Math.min(e, t) : t));
                };
                Fa.prototype.computeTickLimit = function () {
                    return Number.POSITIVE_INFINITY;
                };
                Fa.prototype.buildTicks = function () {
                    var t = this.options, e = t.ticks, i = this.getTickLimit();
                    var s = (function (t, e) {
                        var i = [], s = t.bounds, a = t.step, n = t.min, o = t.max, r = t.precision, l = t.count, h = t.maxTicks, c = t.maxDigits, d = t.includeBounds, u = a || 1, g = h - 1, f = e.min, p = e.max, m = !P(n), b = !P(o), x = !P(l), v = (p - f) / (c + 1);
                        var _, y, M, w, k = nt((p - f) / g / u) * u;
                        if (k < 1e-14 && !m && !b)
                            return [{ value: f }, { value: p }];
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
                        var S = 0;
                        for (m &&
                            (d && y !== n
                                ? (i.push({ value: n }),
                                    y < n && S++,
                                    at(Math.round((y + S * k) * _) / _, n, za(n, v, t)) && S++)
                                : y < n && S++); S < w; ++S) {
                            var t_106 = Math.round((y + S * k) * _) / _;
                            if (b && t_106 > o)
                                break;
                            i.push({ value: t_106 });
                        }
                        return (b && d && M !== o
                            ? i.length && at(i[i.length - 1].value, o, za(o, v, t))
                                ? (i[i.length - 1].value = o)
                                : i.push({ value: o })
                            : (b && M !== o) || i.push({ value: M }),
                            i);
                    })({
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
                    }, this._range || this);
                    return ("ticks" === t.bounds && ht(s, this, "value"),
                        t.reverse
                            ? (s.reverse(), (this.start = this.max), (this.end = this.min))
                            : ((this.start = this.min), (this.end = this.max)),
                        s);
                };
                Fa.prototype.configure = function () {
                    var t = this.ticks;
                    var e = this.min, i = this.max;
                    _super.prototype.configure.call(this),
                        this.options.offset &&
                            t.length &&
                            ((t = (i - e) / Math.max(t.length - 1, 1) / 2),
                                (e -= t),
                                (i += t)),
                        (this._startValue = e),
                        (this._endValue = i),
                        (this._valueRange = i - e);
                };
                Fa.prototype.getLabelForValue = function (t) {
                    return de(t, this.chart.options.locale, this.options.ticks.format);
                };
                return Fa;
            }(zs));
            var Va = /** @class */ (function (_super) {
                __extends(Va, _super);
                function Va() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Va.prototype.determineDataLimits = function () {
                    var _b = this.getMinMax(!0), t = _b.min, e = _b.max;
                    (this.min = p(t) ? t : 0),
                        (this.max = p(e) ? e : 1),
                        this.handleTickRangeOptions();
                };
                Va.prototype.computeTickLimit = function () {
                    var t = this.isHorizontal(), e = t ? this.width : this.height, i = L(this.options.ticks.minRotation), t = (t ? Math.sin(i) : Math.cos(i)) || 0.001, i = this._resolveTickFontOptions(0);
                    return Math.ceil(e / Math.min(40, i.lineHeight / t));
                };
                Va.prototype.getPixelForValue = function (t) {
                    return null === t
                        ? NaN
                        : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
                };
                Va.prototype.getValueForPixel = function (t) {
                    return (this._startValue + this.getDecimalForPixel(t) * this._valueRange);
                };
                Va.id = "linear";
                Va.defaults = { ticks: { callback: ge.formatters.numeric } };
                return Va;
            }(Fa));
            var Ba = function (t) { return Math.floor(r(t)); }, Wa = function (t, e) { return Math.pow(10, Ba(t) + e); };
            function Na(t) {
                return 1 == t / Math.pow(10, Ba(t));
            }
            function Ha(t, e, i) {
                (i = Math.pow(10, i)), (t = Math.floor(t / i));
                return Math.ceil(e / i) - t;
            }
            var ja = /** @class */ (function (_super) {
                __extends(ja, _super);
                function ja(t) {
                    var _this = this;
                    _this = _super.call(this, t) || this,
                        (_this.start = void 0),
                        (_this.end = void 0),
                        (_this._startValue = void 0),
                        (_this._valueRange = 0);
                    return _this;
                }
                ja.prototype.parse = function (t, e) {
                    t = Fa.prototype.parse.apply(this, [t, e]);
                    if (0 !== t)
                        return p(t) && 0 < t ? t : null;
                    this._zero = !0;
                };
                ja.prototype.determineDataLimits = function () {
                    var _b = this.getMinMax(!0), t = _b.min, e = _b.max;
                    (this.min = p(t) ? Math.max(0, t) : null),
                        (this.max = p(e) ? Math.max(0, e) : null),
                        this.options.beginAtZero && (this._zero = !0),
                        this._zero &&
                            this.min !== this._suggestedMin &&
                            !p(this._userMin) &&
                            (this.min =
                                t === Wa(this.min, 0) ? Wa(this.min, -1) : Wa(this.min, 0)),
                        this.handleTickRangeOptions();
                };
                ja.prototype.handleTickRangeOptions = function () {
                    var _b = this.getUserBounds(), e = _b.minDefined, i = _b.maxDefined;
                    var s = this.min, a = this.max;
                    var t = function (t) { return (s = e ? s : t); }, n = function (t) { return (a = i ? a : t); };
                    s === a && (s <= 0 ? (t(1), n(10)) : (t(Wa(s, -1)), n(Wa(a, 1)))),
                        s <= 0 && t(Wa(a, -1)),
                        a <= 0 && n(Wa(s, 1)),
                        (this.min = s),
                        (this.max = a);
                };
                ja.prototype.buildTicks = function () {
                    var t = this.options, e = (function (t, _b) {
                        var e = _b.min, i = _b.max;
                        e = g(t.min, e);
                        var s = [], a = Ba(e);
                        var n = (function (t, e) {
                            var i = Ba(e - t);
                            for (; 10 < Ha(t, e, i);)
                                i++;
                            for (; Ha(t, e, i) < 10;)
                                i--;
                            return Math.min(i, Ba(t));
                        })(e, i), o = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
                        var r = Math.pow(10, n), l = a > n ? Math.pow(10, a) : 0, h = Math.round((e - l) * o) / o, c = Math.floor((e - l) / r / 10) * r * 10;
                        var d = Math.floor((h - c) / Math.pow(10, n)), u = g(t.min, Math.round((l + c + d * Math.pow(10, n)) * o) / o);
                        for (; u < i;)
                            s.push({ value: u, major: Na(u), significand: d }),
                                10 <= d ? (d = d < 15 ? 15 : 20) : d++,
                                20 <= d && (n++, (d = 2), (o = 0 <= n ? 1 : o)),
                                (u = Math.round((l + c + d * Math.pow(10, n)) * o) / o);
                        return ((e = g(t.max, u)),
                            s.push({ value: e, major: Na(e), significand: d }),
                            s);
                    })({ min: this._userMin, max: this._userMax }, this);
                    return ("ticks" === t.bounds && ht(e, this, "value"),
                        t.reverse
                            ? (e.reverse(), (this.start = this.max), (this.end = this.min))
                            : ((this.start = this.min), (this.end = this.max)),
                        e);
                };
                ja.prototype.getLabelForValue = function (t) {
                    return void 0 === t
                        ? "0"
                        : de(t, this.chart.options.locale, this.options.ticks.format);
                };
                ja.prototype.configure = function () {
                    var t = this.min;
                    _super.prototype.configure.call(this),
                        (this._startValue = r(t)),
                        (this._valueRange = r(this.max) - r(t));
                };
                ja.prototype.getPixelForValue = function (t) {
                    return null === (t = void 0 !== t && 0 !== t ? t : this.min) ||
                        isNaN(t)
                        ? NaN
                        : this.getPixelForDecimal(t === this.min
                            ? 0
                            : (r(t) - this._startValue) / this._valueRange);
                };
                ja.prototype.getValueForPixel = function (t) {
                    t = this.getDecimalForPixel(t);
                    return Math.pow(10, this._startValue + t * this._valueRange);
                };
                ja.id = "logarithmic";
                ja.defaults = {
                    ticks: {
                        callback: ge.formatters.logarithmic,
                        major: { enabled: !0 },
                    },
                };
                return ja;
            }(zs));
            function Ya(t) {
                var e = t.ticks;
                if (e.display && t.display) {
                    var t_107 = I(e.backdropPadding);
                    return T(e.font && e.font.size, R.font.size) + t_107.height;
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
                var i = {
                    l: e.left + e._padding.left,
                    r: e.right - e._padding.right,
                    t: e.top + e._padding.top,
                    b: e.bottom - e._padding.bottom,
                }, s = Object.assign({}, i), a = [], n = [], o = e._pointLabels.length, r = e.options.pointLabels, l = r.centerPointLabels ? S / o : 0;
                for (var t_108 = 0; t_108 < o; t_108++) {
                    var o_24 = r.setContext(e.getPointLabelContext(t_108));
                    n[t_108] = o_24.padding;
                    var h = e.getPointPosition(t_108, e.drawingArea + n[t_108], l), c = z(o_24.font), d = ((d = e.ctx),
                        (c = c),
                        (u = O((u = e._pointLabels[t_108])) ? u : [u]),
                        { w: Ee(d, c.string, u), h: u.length * c.lineHeight }), u = ((a[t_108] = d), v(e.getIndexAngle(t_108) + l)), c = Math.round(ct(u));
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
                        var x = Math.abs(Math.sin(p)), p = Math.abs(Math.cos(p));
                        var t_109 = 0, e_70 = 0;
                        m.start < f.l
                            ? ((t_109 = (f.l - m.start) / x), (g.l = Math.min(g.l, f.l - t_109)))
                            : m.end > f.r &&
                                ((t_109 = (m.end - f.r) / x), (g.r = Math.max(g.r, f.r + t_109))),
                            b.start < f.t
                                ? ((e_70 = (f.t - b.start) / p), (g.t = Math.min(g.t, f.t - e_70)))
                                : b.end > f.b &&
                                    ((e_70 = (b.end - f.b) / p), (g.b = Math.max(g.b, f.b + e_70)));
                    }
                }
                var d, u;
                e.setCenterPoint(i.l - s.l, s.r - i.r, i.t - s.t, s.b - i.b),
                    (e._pointLabelItems = (function (e, i, s) {
                        var a = [], n = e._pointLabels.length, t = e.options, _b = t.pointLabels, o = _b.centerPointLabels, r = _b.display, l = { extra: Ya(t) / 2, additionalAngle: o ? S / n : 0 };
                        var h;
                        for (var t_110 = 0; t_110 < n; t_110++) {
                            (l.padding = s[t_110]), (l.size = i[t_110]);
                            var n_25 = (function (t, e, i) {
                                var s = t.drawingArea, a = i.extra, n = i.additionalAngle, o = i.padding, r = i.size, l = t.getPointPosition(e, s + a + o, n), h = Math.round(ct(v(l.angle + D))), c = (function (t, e) {
                                    return (90 === h || 270 === h
                                        ? (t -= e / 2)
                                        : (270 < h || h < 90) && (t -= e),
                                        t);
                                })(l.y, r.h), d = (function (t) {
                                    return 0 === t || 180 === t
                                        ? "center"
                                        : t < 180
                                            ? "left"
                                            : "right";
                                })(h), u = (function (t, e) {
                                    return ("right" === d ? (t -= e) : "center" === d && (t -= e / 2),
                                        t);
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
                            })(e, t_110, l);
                            a.push(n_25),
                                "auto" === r &&
                                    ((n_25.visible = (function (t, e) {
                                        if (!e)
                                            return !0;
                                        var _b = t, t = _b.left, i = _b.top, s = _b.right, a = _b.bottom;
                                        return !(M({ x: t, y: i }, e) ||
                                            M({ x: t, y: a }, e) ||
                                            M({ x: s, y: i }, e) ||
                                            M({ x: s, y: a }, e));
                                    })(n_25, h)),
                                        n_25.visible && (h = n_25));
                        }
                        return a;
                    })(e, a, n));
            }
            function Xa(e, i, t, s) {
                var a = e["ctx"];
                if (t)
                    a.arc(e.xCenter, e.yCenter, i, 0, _);
                else {
                    var n = e.getPointPosition(0, i);
                    a.moveTo(n.x, n.y);
                    for (var t_111 = 1; t_111 < s; t_111++)
                        (n = e.getPointPosition(t_111, i)), a.lineTo(n.x, n.y);
                }
            }
            var qa = /** @class */ (function (_super) {
                __extends(qa, _super);
                function qa(t) {
                    var _this = this;
                    _this = _super.call(this, t) || this,
                        (_this.xCenter = void 0),
                        (_this.yCenter = void 0),
                        (_this.drawingArea = void 0),
                        (_this._pointLabels = []),
                        (_this._pointLabelItems = []);
                    return _this;
                }
                qa.prototype.setDimensions = function () {
                    var t = (this._padding = I(Ya(this.options) / 2)), e = (this.width = this.maxWidth - t.width), i = (this.height = this.maxHeight - t.height);
                    (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
                        (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
                        (this.drawingArea = Math.floor(Math.min(e, i) / 2));
                };
                qa.prototype.determineDataLimits = function () {
                    var _b = this.getMinMax(!1), t = _b.min, e = _b.max;
                    (this.min = p(t) && !isNaN(t) ? t : 0),
                        (this.max = p(e) && !isNaN(e) ? e : 0),
                        this.handleTickRangeOptions();
                };
                qa.prototype.computeTickLimit = function () {
                    return Math.ceil(this.drawingArea / Ya(this.options));
                };
                qa.prototype.generateTickLabels = function (t) {
                    var _this = this;
                    Fa.prototype.generateTickLabels.call(this, t),
                        (this._pointLabels = this.getLabels()
                            .map(function (t, e) {
                            t = d(_this.options.pointLabels.callback, [t, e], _this);
                            return t || 0 === t ? t : "";
                        })
                            .filter(function (t, e) { return _this.chart.getDataVisibility(e); }));
                };
                qa.prototype.fit = function () {
                    var t = this.options;
                    t.display && t.pointLabels.display
                        ? Ua(this)
                        : this.setCenterPoint(0, 0, 0, 0);
                };
                qa.prototype.setCenterPoint = function (t, e, i, s) {
                    (this.xCenter += Math.floor((t - e) / 2)),
                        (this.yCenter += Math.floor((i - s) / 2)),
                        (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s)));
                };
                qa.prototype.getIndexAngle = function (t) {
                    return v(t * (_ / (this._pointLabels.length || 1)) +
                        L(this.options.startAngle || 0));
                };
                qa.prototype.getDistanceFromCenterForValue = function (t) {
                    if (P(t))
                        return NaN;
                    var e = this.drawingArea / (this.max - this.min);
                    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
                };
                qa.prototype.getValueForDistanceFromCenter = function (t) {
                    if (P(t))
                        return NaN;
                    t /= this.drawingArea / (this.max - this.min);
                    return this.options.reverse ? this.max - t : this.min + t;
                };
                qa.prototype.getPointLabelContext = function (t) {
                    var e = this._pointLabels || [];
                    if (0 <= t && t < e.length)
                        return ((e = e[t]),
                            Pi(this.getContext(), { label: e, index: t, type: "pointLabel" }));
                };
                qa.prototype.getPointPosition = function (t, e, i) {
                    if (i === void 0) { i = 0; }
                    t = this.getIndexAngle(t) - D + i;
                    return {
                        x: Math.cos(t) * e + this.xCenter,
                        y: Math.sin(t) * e + this.yCenter,
                        angle: t,
                    };
                };
                qa.prototype.getPointPositionForValue = function (t, e) {
                    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
                };
                qa.prototype.getBasePosition = function (t) {
                    return this.getPointPositionForValue(t || 0, this.getBaseValue());
                };
                qa.prototype.getPointLabelPosition = function (t) {
                    var _b = this._pointLabelItems[t], t = _b.left, e = _b.top, i = _b.right, s = _b.bottom;
                    return { left: t, top: e, right: i, bottom: s };
                };
                qa.prototype.drawBackground = function () {
                    var _b = this.options, t = _b.backgroundColor, e = _b.grid.circular;
                    if (t) {
                        var i_53 = this.ctx;
                        i_53.save(),
                            i_53.beginPath(),
                            Xa(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length),
                            i_53.closePath(),
                            (i_53.fillStyle = t),
                            i_53.fill(),
                            i_53.restore();
                    }
                };
                qa.prototype.drawGrid = function () {
                    var _this = this;
                    var t = this.ctx, e = this.options, i = e.angleLines, h = e.grid, c = e.border, d = this._pointLabels.length;
                    var s, u, a;
                    if (e.pointLabels.display) {
                        var n = this, o = d;
                        var _2 = n.ctx, y_2 = n.options.pointLabels;
                        for (var t_112 = o - 1; 0 <= t_112; t_112--) {
                            var o_25 = n._pointLabelItems[t_112];
                            if (o_25.visible) {
                                var r, l = y_2.setContext(n.getPointLabelContext(t_112)), g = ((m = x = r = f = r = v = x = b = m = p = f = g = void 0),
                                    _2), f = l, p = o_25, m = p.left, b = p.top, x = p.right, v = p.bottom;
                                if (!P((r = f["backdropColor"]))) {
                                    var p_5 = wi(f.borderRadius), P_2 = I(f.backdropPadding);
                                    g.fillStyle = r;
                                    (f = m - P_2.left),
                                        (r = b - P_2.top),
                                        (x = x - m + P_2.width),
                                        (m = v - b + P_2.height);
                                    Object.values(p_5).some(function (t) { return 0 !== t; })
                                        ? (g.beginPath(),
                                            je(g, { x: f, y: r, w: x, h: m, radius: p_5 }),
                                            g.fill())
                                        : g.fillRect(f, r, x, m);
                                }
                                var p = z(l.font), v = o_25.x, b = o_25.y, g = o_25.textAlign;
                                He(_2, n._pointLabels[t_112], v, b + p.lineHeight / 2, p, {
                                    color: l.color,
                                    textAlign: g,
                                    textBaseline: "middle",
                                });
                            }
                        }
                    }
                    if ((h.display &&
                        this.ticks.forEach(function (t, e) {
                            if (0 !== e) {
                                u = _this.getDistanceFromCenterForValue(t.value);
                                (t = _this.getContext(e)),
                                    (e = h.setContext(t)),
                                    (t = c.setContext(t));
                                {
                                    var i = _this, s = u, a = d;
                                    var n_26 = i.ctx, o_26 = e.circular, r_12 = e.color, l_17 = e.lineWidth;
                                    (!o_26 && !a) ||
                                        !r_12 ||
                                        !l_17 ||
                                        s < 0 ||
                                        (n_26.save(),
                                            (n_26.strokeStyle = r_12),
                                            (n_26.lineWidth = l_17),
                                            n_26.setLineDash(t.dash),
                                            (n_26.lineDashOffset = t.dashOffset),
                                            n_26.beginPath(),
                                            Xa(i, s, o_26, a),
                                            n_26.closePath(),
                                            n_26.stroke(),
                                            n_26.restore());
                                }
                            }
                        }),
                        i.display)) {
                        for (t.save(), s = d - 1; 0 <= s; s--) {
                            var h_12 = i.setContext(this.getPointLabelContext(s)), c_11 = h_12.color, d_11 = h_12.lineWidth;
                            d_11 &&
                                c_11 &&
                                ((t.lineWidth = d_11),
                                    (t.strokeStyle = c_11),
                                    t.setLineDash(h_12.borderDash),
                                    (t.lineDashOffset = h_12.borderDashOffset),
                                    (u = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max)),
                                    (a = this.getPointPosition(s, u)),
                                    t.beginPath(),
                                    t.moveTo(this.xCenter, this.yCenter),
                                    t.lineTo(a.x, a.y),
                                    t.stroke());
                        }
                        t.restore();
                    }
                };
                qa.prototype.drawBorder = function () { };
                qa.prototype.drawLabels = function () {
                    var _this = this;
                    var o = this.ctx, r = this.options, l = r.ticks;
                    if (l.display) {
                        var t = this.getIndexAngle(0);
                        var a_41, n_27;
                        o.save(),
                            o.translate(this.xCenter, this.yCenter),
                            o.rotate(t),
                            (o.textAlign = "center"),
                            (o.textBaseline = "middle"),
                            this.ticks.forEach(function (t, e) {
                                if (0 !== e || r.reverse) {
                                    var i = l.setContext(_this.getContext(e)), s = z(i.font);
                                    if (((a_41 = _this.getDistanceFromCenterForValue(_this.ticks[e].value)),
                                        i.showLabelBackdrop)) {
                                        (o.font = s.string),
                                            (n_27 = o.measureText(t.label).width),
                                            (o.fillStyle = i.backdropColor);
                                        var r_13 = I(i.backdropPadding);
                                        o.fillRect(-n_27 / 2 - r_13.left, -a_41 - s.size / 2 - r_13.top, n_27 + r_13.width, s.size + r_13.height);
                                    }
                                    He(o, t.label, 0, -a_41, s, {
                                        color: i.color,
                                        strokeColor: i.textStrokeColor,
                                        strokeWidth: i.textStrokeWidth,
                                    });
                                }
                            }),
                            o.restore();
                    }
                };
                qa.prototype.drawTitle = function () { };
                qa.id = "radialLinear";
                qa.defaults = {
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
                        callback: function (t) { return t; },
                        padding: 5,
                        centerPointLabels: !1,
                    },
                };
                qa.defaultRoutes = {
                    "angleLines.color": "borderColor",
                    "pointLabels.color": "color",
                    "ticks.color": "color",
                };
                qa.descriptors = { angleLines: { _fallback: "grid" } };
                return qa;
            }(Fa));
            var Ka = {
                millisecond: { common: !0, size: 1, steps: 1e3 },
                second: { common: !0, size: 1e3, steps: 60 },
                minute: { common: !0, size: 6e4, steps: 60 },
                hour: { common: !0, size: 36e5, steps: 24 },
                day: { common: !0, size: 864e5, steps: 30 },
                week: { common: !1, size: 6048e5, steps: 4 },
                month: { common: !0, size: 2628e6, steps: 12 },
                quarter: { common: !1, size: 7884e6, steps: 4 },
                year: { common: !0, size: 3154e7 },
            }, h = Object.keys(Ka);
            function Ga(t, e) {
                return t - e;
            }
            function Za(t, e) {
                if (P(e))
                    return null;
                var i = t._adapter, _b = t._parseOpts, s = _b.parser, a = _b.round, n = _b.isoWeekday;
                var o = e;
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
                var n = h.length;
                for (var t_113 = h.indexOf(e); t_113 < n - 1; ++t_113) {
                    var e_71 = Ka[h[t_113]], n_28 = e_71.steps || Number.MAX_SAFE_INTEGER;
                    if (e_71.common && Math.ceil((s - i) / (n_28 * e_71.size)) <= a)
                        return h[t_113];
                }
                return h[n - 1];
            }
            function Qa(t, e, i) {
                var _b;
                var s, a;
                i
                    ? i.length &&
                        ((_b = bt(i, e), s = _b.lo, a = _b.hi), (t[i[s] >= e ? i[s] : i[a]] = !0))
                    : (t[e] = !0);
            }
            function tn(i, t, s) {
                var a = [], n = {}, e = t.length;
                var o, r;
                for (o = 0; o < e; ++o)
                    (r = t[o]), (n[r] = o), a.push({ value: r, major: !1 });
                if (0 !== e && s) {
                    var l = a, h = n, c = s;
                    var d_12 = i._adapter, u_8 = +d_12.startOf(l[0].value, c), g_9 = l[l.length - 1].value;
                    var t_114, e_72;
                    for (t_114 = u_8; t_114 <= g_9; t_114 = +d_12.add(t_114, 1, c))
                        0 <= (e_72 = h[t_114]) && (l[e_72].major = !0);
                    return l;
                }
                return a;
            }
            var en = /** @class */ (function (_super) {
                __extends(en, _super);
                function en(t) {
                    var _this = this;
                    _this = _super.call(this, t) || this,
                        (_this._cache = { data: [], labels: [], all: [] }),
                        (_this._unit = "day"),
                        (_this._majorUnit = void 0),
                        (_this._offsets = {}),
                        (_this._normalized = !1),
                        (_this._parseOpts = void 0);
                    return _this;
                }
                en.prototype.init = function (t, e) {
                    if (e === void 0) { e = {}; }
                    var i = t.time || (t.time = {}), s = (this._adapter = new ha._date(t.adapters.date));
                    s.init(e),
                        $(i.displayFormats, s.formats()),
                        (this._parseOpts = {
                            parser: i.parser,
                            round: i.round,
                            isoWeekday: i.isoWeekday,
                        }),
                        _super.prototype.init.call(this, t),
                        (this._normalized = e.normalized);
                };
                en.prototype.parse = function (t, e) {
                    return void 0 === t ? null : Za(this, t);
                };
                en.prototype.beforeLayout = function () {
                    _super.prototype.beforeLayout.call(this),
                        (this._cache = { data: [], labels: [], all: [] });
                };
                en.prototype.determineDataLimits = function () {
                    var t = this.options, e = this._adapter, i = t.time.unit || "day";
                    var _b = this.getUserBounds(), s = _b.min, a = _b.max, n = _b.minDefined, o = _b.maxDefined;
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
                };
                en.prototype._getLabelBounds = function () {
                    var t = this.getLabelTimestamps();
                    var e = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
                    return (t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i });
                };
                en.prototype.buildTicks = function () {
                    var t = this.options, e = t.time, i = t.ticks, s = "labels" === i.source
                        ? this.getLabelTimestamps()
                        : this._generate();
                    "ticks" === t.bounds &&
                        s.length &&
                        ((this.min = this._userMin || s[0]),
                            (this.max = this._userMax || s[s.length - 1]));
                    var a = this.min, n = vt(s, a, this.max);
                    return ((this._unit =
                        e.unit ||
                            (i.autoSkip
                                ? Ja(e.minUnit, this.min, this.max, this._getLabelCapacity(a))
                                : (function (e, i, s, a, n) {
                                    for (var t_115 = h.length - 1; t_115 >= h.indexOf(s); t_115--) {
                                        var s_50 = h[t_115];
                                        if (Ka[s_50].common && e._adapter.diff(n, a, s_50) >= i - 1)
                                            return s_50;
                                    }
                                    return h[s ? h.indexOf(s) : 0];
                                })(this, n.length, e.minUnit, this.min, this.max))),
                        (this._majorUnit =
                            i.major.enabled && "year" !== this._unit
                                ? (function (i) {
                                    for (var t_116 = h.indexOf(i) + 1, e_73 = h.length; t_116 < e_73; ++t_116)
                                        if (Ka[h[t_116]].common)
                                            return h[t_116];
                                })(this._unit)
                                : void 0),
                        this.initOffsets(s),
                        t.reverse && n.reverse(),
                        tn(this, n, this._majorUnit));
                };
                en.prototype.afterAutoSkip = function () {
                    this.options.offsetAfterAutoskip &&
                        this.initOffsets(this.ticks.map(function (t) { return +t.value; }));
                };
                en.prototype.initOffsets = function (t) {
                    if (t === void 0) { t = []; }
                    var e, i, s = 0, a = 0;
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
                };
                en.prototype._generate = function () {
                    var t = this._adapter, e = this.min, i = this.max, s = this.options, a = s.time, n = a.unit || Ja(a.minUnit, e, i, this._getLabelCapacity(e)), o = T(s.ticks.stepSize, 1), r = "week" === n && a.isoWeekday, l = rt(r) || !0 === r, h = {};
                    var c, d, u = e;
                    if ((l && (u = +t.startOf(u, "isoWeek", r)),
                        (u = +t.startOf(u, l ? "day" : n)),
                        t.diff(i, e, n) > 1e5 * o))
                        throw new Error(e +
                            " and " +
                            i +
                            " are too far apart with stepSize of " +
                            o +
                            " " +
                            n);
                    var g = "data" === s.ticks.source && this.getDataTimestamps();
                    for (c = u, d = 0; c < i; c = +t.add(c, o, n), d++)
                        Qa(h, c, g);
                    return ((c !== i && "ticks" !== s.bounds && 1 !== d) || Qa(h, c, g),
                        Object.keys(h)
                            .sort(Ga)
                            .map(function (t) { return +t; }));
                };
                en.prototype.getLabelForValue = function (t) {
                    var e = this._adapter, i = this.options.time;
                    return i.tooltipFormat
                        ? e.format(t, i.tooltipFormat)
                        : e.format(t, i.displayFormats.datetime);
                };
                en.prototype.format = function (t, e) {
                    var i = this.options.time.displayFormats, s = this._unit, e = e || i[s];
                    return this._adapter.format(t, e);
                };
                en.prototype._tickFormatFunction = function (t, e, i, s) {
                    var a = this.options, n = a.ticks.callback;
                    if (n)
                        return d(n, [t, e, i], this);
                    var n = a.time.displayFormats, a = this._unit, o = this._majorUnit, a = a && n[a], n = o && n[o], i = i[e], e = o && n && i && i.major;
                    return this._adapter.format(t, s || (e ? n : a));
                };
                en.prototype.generateTickLabels = function (t) {
                    var e, i, s;
                    for (e = 0, i = t.length; e < i; ++e)
                        (s = t[e]).label = this._tickFormatFunction(s.value, e, t);
                };
                en.prototype.getDecimalForValue = function (t) {
                    return null === t ? NaN : (t - this.min) / (this.max - this.min);
                };
                en.prototype.getPixelForValue = function (t) {
                    var e = this._offsets, t = this.getDecimalForValue(t);
                    return this.getPixelForDecimal((e.start + t) * e.factor);
                };
                en.prototype.getValueForPixel = function (t) {
                    var e = this._offsets, t = this.getDecimalForPixel(t) / e.factor - e.end;
                    return this.min + t * (this.max - this.min);
                };
                en.prototype._getLabelSize = function (t) {
                    var e = this.options.ticks, t = this.ctx.measureText(t).width, e = L(this.isHorizontal() ? e.maxRotation : e.minRotation), i = Math.cos(e), e = Math.sin(e), s = this._resolveTickFontOptions(0).size;
                    return { w: t * i + s * e, h: t * e + s * i };
                };
                en.prototype._getLabelCapacity = function (t) {
                    var e = this.options.time, i = e.displayFormats, e = i[e.unit] || i.millisecond, i = this._tickFormatFunction(t, 0, tn(this, [t], this._majorUnit), e), t = this._getLabelSize(i), e = Math.floor(this.isHorizontal() ? this.width / t.w : this.height / t.h) - 1;
                    return 0 < e ? e : 1;
                };
                en.prototype.getDataTimestamps = function () {
                    var t, e, i = this._cache.data || [];
                    if (i.length)
                        return i;
                    var s = this.getMatchingVisibleMetas();
                    if (this._normalized && s.length)
                        return (this._cache.data =
                            s[0].controller.getAllParsedValues(this));
                    for (t = 0, e = s.length; t < e; ++t)
                        i = i.concat(s[t].controller.getAllParsedValues(this));
                    return (this._cache.data = this.normalize(i));
                };
                en.prototype.getLabelTimestamps = function () {
                    var t = this._cache.labels || [];
                    var e, i;
                    if (t.length)
                        return t;
                    var s = this.getLabels();
                    for (e = 0, i = s.length; e < i; ++e)
                        t.push(Za(this, s[e]));
                    return (this._cache.labels = this._normalized
                        ? t
                        : this.normalize(t));
                };
                en.prototype.normalize = function (t) {
                    return wt(t.sort(Ga));
                };
                en.id = "time";
                en.defaults = {
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
                return en;
            }(zs));
            function sn(t, e, i) {
                var _b, _c, _d, _f, _g, _h;
                var s, a, n, o, r = 0, l = t.length - 1;
                i
                    ? (e >= t[r].pos &&
                        e <= t[l].pos &&
                        (_b = f(t, "pos", e), r = _b.lo, l = _b.hi, _b),
                        (_c = t[r], s = _c.pos, n = _c.time),
                        (_d = t[l], a = _d.pos, o = _d.time, _d))
                    : (e >= t[r].time &&
                        e <= t[l].time &&
                        (_f = f(t, "time", e), r = _f.lo, l = _f.hi, _f),
                        (_g = t[r], s = _g.time, n = _g.pos),
                        (_h = t[l], a = _h.time, o = _h.pos, _h));
                i = a - s;
                return i ? n + ((o - n) * (e - s)) / i : n;
            }
            var an = Object.freeze({
                __proto__: null,
                CategoryScale: (_m = /** @class */ (function (_super) {
                        __extends(class_13, _super);
                        function class_13(t) {
                            var _this = this;
                            _this = _super.call(this, t) || this,
                                (_this._startValue = void 0),
                                (_this._valueRange = 0),
                                (_this._addedLabels = []);
                            return _this;
                        }
                        class_13.prototype.init = function (t) {
                            var e = this._addedLabels;
                            if (e.length) {
                                var t_117 = this.getLabels();
                                for (var _b = 0, e_74 = e; _b < e_74.length; _b++) {
                                    var _c = e_74[_b], i = _c.index, s = _c.label;
                                    t_117[i] === s && t_117.splice(i, 1);
                                }
                                this._addedLabels = [];
                            }
                            _super.prototype.init.call(this, t);
                        };
                        class_13.prototype.parse = function (t, e) {
                            if (P(t))
                                return null;
                            var i, s, a, n, o, r, l = this.getLabels();
                            return ((a = e =
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
                                null === a ? null : C(Math.round(a), 0, n));
                        };
                        class_13.prototype.determineDataLimits = function () {
                            var _b = this.getUserBounds(), t = _b.minDefined, e = _b.maxDefined;
                            var _c = this.getMinMax(!0), i = _c.min, s = _c.max;
                            "ticks" === this.options.bounds &&
                                (t || (i = 0), e || (s = this.getLabels().length - 1)),
                                (this.min = i),
                                (this.max = s);
                        };
                        class_13.prototype.buildTicks = function () {
                            var e = this.min, i = this.max, t = this.options.offset, s = [];
                            var a = this.getLabels();
                            (a = 0 === e && i === a.length - 1 ? a : a.slice(e, i + 1)),
                                (this._valueRange = Math.max(a.length - (t ? 0 : 1), 1)),
                                (this._startValue = this.min - (t ? 0.5 : 0));
                            for (var t_118 = e; t_118 <= i; t_118++)
                                s.push({ value: t_118 });
                            return s;
                        };
                        class_13.prototype.getLabelForValue = function (t) {
                            return Ia.call(this, t);
                        };
                        class_13.prototype.configure = function () {
                            _super.prototype.configure.call(this),
                                this.isHorizontal() ||
                                    (this._reversePixels = !this._reversePixels);
                        };
                        class_13.prototype.getPixelForValue = function (t) {
                            return null === (t = "number" != typeof t ? this.parse(t) : t)
                                ? NaN
                                : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
                        };
                        class_13.prototype.getPixelForTick = function (t) {
                            var e = this.ticks;
                            return t < 0 || t > e.length - 1
                                ? null
                                : this.getPixelForValue(e[t].value);
                        };
                        class_13.prototype.getValueForPixel = function (t) {
                            return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
                        };
                        class_13.prototype.getBasePixel = function () {
                            return this.bottom;
                        };
                        return class_13;
                    }(zs)),
                    __setFunctionName(_m, "CategoryScale"),
                    _m.id = "category",
                    _m.defaults = { ticks: { callback: Ia } },
                    _m),
                LinearScale: Va,
                LogarithmicScale: ja,
                RadialLinearScale: qa,
                TimeScale: en,
                TimeSeriesScale: (_o = /** @class */ (function (_super) {
                        __extends(class_14, _super);
                        function class_14(t) {
                            var _this = this;
                            _this = _super.call(this, t) || this,
                                (_this._table = []),
                                (_this._minPos = void 0),
                                (_this._tableRange = void 0);
                            return _this;
                        }
                        class_14.prototype.initOffsets = function () {
                            var t = this._getTimestampsForTable(), e = (this._table = this.buildLookupTable(t));
                            (this._minPos = sn(e, this.min)),
                                (this._tableRange = sn(e, this.max) - this._minPos),
                                _super.prototype.initOffsets.call(this, t);
                        };
                        class_14.prototype.buildLookupTable = function (t) {
                            var _b = this, e = _b.min, i = _b.max, s = [], a = [];
                            var n, o, r, l, h;
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
                        };
                        class_14.prototype._generate = function () {
                            var t = this.min, e = this.max;
                            var i = _super.prototype.getDataTimestamps.call(this);
                            return ((i.includes(t) && i.length) || i.splice(0, 0, t),
                                (i.includes(e) && 1 !== i.length) || i.push(e),
                                i.sort(function (t, e) { return t - e; }));
                        };
                        class_14.prototype._getTimestampsForTable = function () {
                            var t = this._cache.all || [];
                            if (t.length)
                                return t;
                            var e = this.getDataTimestamps(), i = this.getLabelTimestamps();
                            return ((t =
                                e.length && i.length
                                    ? this.normalize(e.concat(i))
                                    : e.length
                                        ? e
                                        : i),
                                (t = this._cache.all = t));
                        };
                        class_14.prototype.getDecimalForValue = function (t) {
                            return (sn(this._table, t) - this._minPos) / this._tableRange;
                        };
                        class_14.prototype.getValueForPixel = function (t) {
                            var e = this._offsets, t = this.getDecimalForPixel(t) / e.factor - e.end;
                            return sn(this._table, t * this._tableRange + this._minPos, !0);
                        };
                        return class_14;
                    }(en)),
                    __setFunctionName(_o, "TimeSeriesScale"),
                    _o.id = "timeseries",
                    _o.defaults = en.defaults,
                    _o),
            });
            var nn = [
                "rgb(54, 162, 235)",
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
            ], on = nn.map(function (t) { return t.replace("rgb(", "rgba(").replace(")", ", 0.5)"); });
            function rn(t) {
                return nn[t % nn.length];
            }
            function ln(t) {
                return on[t % on.length];
            }
            function hn(n) {
                var o = 0;
                return function (t, e) {
                    var i, s, a, e = n.getDatasetMeta(e).controller;
                    e instanceof pa
                        ? (o =
                            ((s = t),
                                (a = o),
                                (s.backgroundColor = s.data.map(function () { return rn(a++); })),
                                a))
                        : e instanceof ma
                            ? (o =
                                ((s = t),
                                    (i = o),
                                    (s.backgroundColor = s.data.map(function () { return ln(i++); })),
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
                var e;
                for (e in t)
                    if (t[e].borderColor || t[e].backgroundColor)
                        return 1;
            }
            var dn = {
                id: "colors",
                defaults: { enabled: !0, forceOverride: !1 },
                beforeLayout: function (t, e, i) {
                    if (i.enabled) {
                        var _b = t.config, s_51 = _b.data.datasets, a_42 = _b.options, n_29 = a_42["elements"];
                        (!i.forceOverride &&
                            (cn(s_51) ||
                                (a_42 && (a_42.borderColor || a_42.backgroundColor)) ||
                                (n_29 && cn(n_29)))) ||
                            ((i = hn(t)), s_51.forEach(i));
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
                t.data.datasets.forEach(function (t) {
                    un(t);
                });
            }
            var fn = {
                id: "decimation",
                defaults: { algorithm: "min-max", enabled: !1 },
                beforeElementsUpdate: function (r, t, M) {
                    if (M.enabled) {
                        var l_18 = r.width;
                        r.data.datasets.forEach(function (e, t) {
                            var i = e._data, s = e.indexAxis, h = r.getDatasetMeta(t), a = i || e.data;
                            if ("y" !== ki([s, r.options.indexAxis]) &&
                                h.controller.supportsDecimation) {
                                t = r.scales[h.xAxisID];
                                if (("linear" === t.type || "time" === t.type) &&
                                    !r.options.parsing) {
                                    var _b = (function (t) {
                                        var e = t.length;
                                        var i, s = 0;
                                        var a = h["iScale"], _b = a.getUserBounds(), n = _b.min, o = _b.max, r = _b.minDefined, l = _b.maxDefined;
                                        return (r && (s = C(f(t, a.axis, n).lo, 0, e - 1)),
                                            (i = l ? C(f(t, a.axis, o).hi + 1, s, e) - s : e - s),
                                            { start: s, count: i });
                                    })(a), n = _b.start, o = _b.count;
                                    if (o <= (M.threshold || 4 * l_18))
                                        un(e);
                                    else {
                                        var t_119;
                                        switch ((P(i) &&
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
                                            M.algorithm)) {
                                            case "lttb":
                                                t_119 = (function (s, a, n, t) {
                                                    var e = M.samples || t;
                                                    if (n <= e)
                                                        return s.slice(a, a + n);
                                                    var o = [], r = (n - 2) / (e - 2);
                                                    var l = 0;
                                                    var h = a + n - 1;
                                                    var c, d, u, g, f, p = a;
                                                    for (o[l++] = s[p], c = 0; c < e - 2; c++) {
                                                        var t_120 = void 0, e_75 = 0, i_54 = 0;
                                                        var h_13 = Math.floor((c + 1) * r) + 1 + a, _3 = Math.min(Math.floor((c + 2) * r) + 1, n) + a, y_3 = _3 - h_13;
                                                        for (t_120 = h_13; t_120 < _3; t_120++)
                                                            (e_75 += s[t_120].x), (i_54 += s[t_120].y);
                                                        (e_75 /= y_3), (i_54 /= y_3);
                                                        var m = Math.floor(c * r) + 1 + a, b = Math.min(Math.floor((c + 1) * r) + 1, n) + a, _b = s[p], x = _b.x, v = _b.y;
                                                        for (u = -1, t_120 = m; t_120 < b; t_120++)
                                                            (g =
                                                                0.5 *
                                                                    Math.abs((x - e_75) * (s[t_120].y - v) -
                                                                        (x - s[t_120].x) * (i_54 - v))) > u && ((u = g), (d = s[t_120]), (f = t_120));
                                                        (o[l++] = d), (p = f);
                                                    }
                                                    return (o[l++] = s[h]), o;
                                                })(a, n, o, l_18);
                                                break;
                                            case "min-max":
                                                t_119 = (function (t, e, i, s) {
                                                    var a, n, o, r, l, h, c, d, u, g, f = 0, p = 0;
                                                    var m = [], b = e + i - 1, x = t[e].x, v = t[b].x - x;
                                                    for (a = e; a < e + i; ++a) {
                                                        (o = (((n = t[a]).x - x) / v) * s), (r = n.y);
                                                        var e_76 = 0 | o;
                                                        if (e_76 === l)
                                                            r < u
                                                                ? ((u = r), (h = a))
                                                                : r > g && ((g = r), (c = a)),
                                                                (f = (p * f + n.x) / ++p);
                                                        else {
                                                            var i_55 = a - 1;
                                                            if (!P(h) && !P(c)) {
                                                                var e_77 = Math.min(h, c), P_3 = Math.max(h, c);
                                                                e_77 !== d && e_77 !== i_55 && m.push(__assign(__assign({}, t[e_77]), { x: f })),
                                                                    P_3 !== d &&
                                                                        P_3 !== i_55 &&
                                                                        m.push(__assign(__assign({}, t[P_3]), { x: f }));
                                                            }
                                                            0 < a && i_55 !== d && m.push(t[i_55]),
                                                                m.push(n),
                                                                (l = e_76),
                                                                (p = 0),
                                                                (u = g = r),
                                                                (h = c = d = a);
                                                        }
                                                    }
                                                    return m;
                                                })(a, n, o, l_18);
                                                break;
                                            default:
                                                throw new Error("Unsupported decimation algorithm '".concat(M.algorithm, "'"));
                                        }
                                        e._decimated = t_119;
                                    }
                                }
                            }
                        });
                    }
                    else
                        gn(r);
                },
                destroy: function (t) {
                    gn(t);
                },
            };
            function pn(i, s, a, t) {
                if (!t) {
                    var t_121 = s[i], e_78 = a[i];
                    return ("angle" === i && ((t_121 = v(t_121)), (e_78 = v(e_78))),
                        { property: i, start: t_121, end: e_78 });
                }
            }
            function mn(t, e, i) {
                for (; t < e; e--) {
                    var t_122 = i[e];
                    if (!isNaN(t_122.x) && !isNaN(t_122.y))
                        break;
                }
                return e;
            }
            function bn(t, e, i, s) {
                return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
            }
            function xn(e, t) {
                var i = [], s = !1;
                return (i = O(e)
                    ? ((s = !0), e)
                    : (function (t) {
                        var _b = e || {}, _c = _b.x, i = _c === void 0 ? null : _c, _d = _b.y, s = _d === void 0 ? null : _d, a = t.points, n = [];
                        return (t.segments.forEach(function (_b) {
                            var t = _b.start, e = _b.end;
                            e = mn(t, e, a);
                            (t = a[t]), (e = a[e]);
                            null !== s
                                ? (n.push({ x: t.x, y: s }), n.push({ x: e.x, y: s }))
                                : null !== i &&
                                    (n.push({ x: i, y: t.y }), n.push({ x: i, y: e.y }));
                        }),
                            n);
                    })(t)).length
                    ? new Da({
                        points: i,
                        options: { tension: 0 },
                        _loop: s,
                        _fullLoop: s,
                    })
                    : null;
            }
            function vn(t) {
                return t && !1 !== t.fill;
            }
            function _n(e, i, s) {
                var a = [];
                for (var t_123 = 0; t_123 < s.length; t_123++) {
                    var _b = (function (t, e, i) {
                        var s = t.interpolate(e, i);
                        if (!s)
                            return {};
                        var a = s[i], n = t.segments, o = t.points;
                        var r = !1, l = !1;
                        for (var t_124 = 0; t_124 < n.length; t_124++) {
                            var e_79 = n[t_124], s_52 = o[e_79.start][i], h_14 = o[e_79.end][i];
                            if (c(a, s_52, h_14)) {
                                (r = a === s_52), (l = a === h_14);
                                break;
                            }
                        }
                        return { first: r, last: l, point: s };
                    })(s[t_123], i, "x"), n = _b.first, o = _b.last, r = _b.point;
                    if (!(!r || (n && o)))
                        if (n)
                            a.unshift(r);
                        else if ((e.push(r), !o))
                            break;
                }
                e.push.apply(e, a);
            }
            var yn = /** @class */ (function () {
                function yn(t) {
                    (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
                }
                yn.prototype.pathSegment = function (t, e, i) {
                    var _b = this, s = _b.x, a = _b.y, n = _b.radius;
                    return ((e = e || { start: 0, end: _ }),
                        t.arc(s, a, n, e.end, e.start, !0),
                        !i.bounds);
                };
                yn.prototype.interpolate = function (t) {
                    var _b = this, e = _b.x, i = _b.y, s = _b.radius, t = t.angle;
                    return { x: e + Math.cos(t) * s, y: i + Math.sin(t) * s, angle: t };
                };
                return yn;
            }());
            function Mn(t) {
                var e, i, s = t.chart, a = t.fill, n = t.line;
                if (p(a))
                    return ((e = a),
                        (i = (s = s).getDatasetMeta(e)) && s.isDatasetVisible(e)
                            ? i.dataset
                            : null);
                if ("stack" === a) {
                    var o_27 = t.scale, r_14 = t.index, l_19 = t.line, h_15 = [], c_12 = l_19.segments, d_13 = l_19.points, u_9 = (function (t, e) {
                        var i = [], s = t.getMatchingVisibleMetas("line");
                        for (var t_125 = 0; t_125 < s.length; t_125++) {
                            var a = s[t_125];
                            if (a.index === e)
                                break;
                            a.hidden || i.unshift(a.dataset);
                        }
                        return i;
                    })(o_27, r_14);
                    u_9.push(xn({ x: null, y: o_27.bottom }, l_19));
                    for (var t_126 = 0; t_126 < c_12.length; t_126++) {
                        var o_28 = c_12[t_126];
                        for (var t_127 = o_28.start; t_127 <= o_28.end; t_127++)
                            _n(h_15, d_13[t_127], u_9);
                    }
                    return new Da({ points: h_15, options: {} });
                }
                if ("shape" === a)
                    return !0;
                s = (function (t) {
                    var e = t.scale || {};
                    if (e.getPointPositionForValue) {
                        var i = t;
                        var a_43 = i.scale, n_30 = i.fill, o_29 = a_43.options, r_15 = a_43.getLabels().length, l_20 = o_29.reverse ? a_43.max : a_43.min, h_16 = ((i = n_30),
                            (e = a_43),
                            "start" === i
                                ? l_20
                                : "end" === i
                                    ? e.options.reverse
                                        ? e.min
                                        : e.max
                                    : A(i)
                                        ? i.value
                                        : e.getBaseValue()), c_13 = [];
                        if (o_29.grid.circular) {
                            var i_56 = a_43.getPointPositionForValue(0, l_20);
                            return new yn({
                                x: i_56.x,
                                y: i_56.y,
                                radius: a_43.getDistanceFromCenterForValue(h_16),
                            });
                        }
                        for (var t_128 = 0; t_128 < r_15; ++t_128)
                            c_13.push(a_43.getPointPositionForValue(t_128, h_16));
                        return c_13;
                    }
                    {
                        var s = t;
                        var _b = s.scale, d_14 = _b === void 0 ? {} : _b, u_10 = s.fill, g_10 = (function (t, e) {
                            var i = null;
                            return ("start" === t
                                ? (i = e.bottom)
                                : "end" === t
                                    ? (i = e.top)
                                    : A(t)
                                        ? (i = e.getPixelForValue(t.value))
                                        : e.getBasePixel && (i = e.getBasePixel()),
                                i);
                        })(u_10, d_14);
                        if (p(g_10)) {
                            var s_53 = d_14.isHorizontal();
                            return { x: s_53 ? g_10 : null, y: s_53 ? null : g_10 };
                        }
                        return null;
                    }
                })(t);
                return s instanceof yn ? s : xn(s, n);
            }
            function wn(t, e, i) {
                var _b;
                var s, a = Mn(e), _c = e, e = _c.line, n = _c.scale, o = _c.axis, r = e.options, l = r.fill, r = r.backgroundColor, _d = l || {}, _f = _d.above, l = _f === void 0 ? r : _f, _g = _d.below, r = _g === void 0 ? r : _g;
                a &&
                    e.points.length &&
                    (Ve(t, i),
                        (s = t),
                        (_b = e =
                            {
                                line: e,
                                target: a,
                                above: l,
                                below: r,
                                area: i,
                                scale: n,
                                axis: o,
                            }, a = _b.line, l = _b.target, r = _b.above, i = _b.below, n = _b.area, o = _b.scale),
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
                var s = e.segments, a = e.points;
                var n = !0, o = !1;
                t.beginPath();
                for (var _b = 0, s_54 = s; _b < s_54.length; _b++) {
                    var r_16 = s_54[_b];
                    var s_55 = r_16.start, l_21 = r_16.end, h_17 = a[s_55], c_14 = a[mn(s_55, l_21, a)];
                    n
                        ? (t.moveTo(h_17.x, h_17.y), (n = !1))
                        : (t.lineTo(h_17.x, i), t.lineTo(h_17.x, h_17.y)),
                        (o = !!e.pathSegment(t, r_16, { move: o }))
                            ? t.closePath()
                            : t.lineTo(c_14.x, i);
                }
                t.lineTo(e.first().x, i), t.closePath(), t.clip();
            }
            function Sn(e, i) {
                var s = i.line, a = i.target, n = i.property, o = i.color, r = i.scale, l = (function (t, e, i) {
                    var _b, _c;
                    var s = t.segments, a = t.points, n = e.points, o = [];
                    for (var _d = 0, s_56 = s; _d < s_56.length; _d++) {
                        var t_129 = s_56[_d];
                        var r = t_129.start, l = t_129.end, l = mn(r, l, a), h = pn(i, a[r], a[l], t_129.loop);
                        if (e.segments) {
                            var c = Ei(e, h);
                            for (var _f = 0, c_15 = c; _f < c_15.length; _f++) {
                                var e_80 = c_15[_f];
                                var s_57 = pn(i, n[e_80.start], n[e_80.end], e_80.loop), d_16 = Li(t_129, a, s_57);
                                for (var _g = 0, d_15 = d_16; _g < d_15.length; _g++) {
                                    var t_130 = d_15[_g];
                                    o.push({
                                        source: t_130,
                                        target: e_80,
                                        start: (_b = {}, _b[i] = bn(h, s_57, "start", Math.max), _b),
                                        end: (_c = {}, _c[i] = bn(h, s_57, "end", Math.min), _c),
                                    });
                                }
                            }
                        }
                        else
                            o.push({ source: t_129, target: h, start: a[r], end: a[l] });
                    }
                    return o;
                })(s, a, n);
                for (var _b = 0, l_22 = l; _b < l_22.length; _b++) {
                    var _c = l_22[_b], i_57 = _c.source, p_6 = _c.target, m_5 = _c.start, b_4 = _c.end;
                    var _d = i_57.style, _f = _d === void 0 ? {} : _d, _g = _f.backgroundColor, l_23 = _g === void 0 ? o : _g, x_6 = !0 !== a;
                    e.save(), (e.fillStyle = l_23), (f = g = d = u = c = d = c = h = void 0);
                    var h = e, c = r, d = x_6 && pn(n, m_5, b_4), _h = c.chart.chartArea, c = _h.top, u = _h.bottom, _j = d || {}, d = _j.property, g = _j.start, f = _j.end, d = ("x" === d &&
                        (h.beginPath(), h.rect(g, c, f - g, u - c), h.clip()),
                        e.beginPath(),
                        !!s.pathSegment(e, i_57));
                    var t_131 = void 0;
                    if (x_6) {
                        d ? e.closePath() : Pn(e, a, b_4, n);
                        var i_58 = !!a.pathSegment(e, p_6, { move: d, reverse: !0 });
                        (t_131 = d && i_58) || Pn(e, a, m_5, n);
                    }
                    e.closePath(), e.fill(t_131 ? "evenodd" : "nonzero"), e.restore();
                }
            }
            function Pn(t, e, i, s) {
                e = e.interpolate(i, s);
                e && t.lineTo(e.x, e.y);
            }
            var Dn = {
                id: "filler",
                afterDatasetsUpdate: function (t, e, i) {
                    var s = (t.data.datasets || []).length, a = [];
                    var n, o, r, l;
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
                                            var t = s.options, e = t.fill;
                                            var i = T(e && e.target, e);
                                            return (!1 !== (i = void 0 === i ? !!t.backgroundColor : i) &&
                                                null !== i &&
                                                (!0 === i ? "origin" : i));
                                        })();
                                        if (A(i))
                                            return !isNaN(i.value) && i;
                                        var a, n = parseFloat(i);
                                        return p(n) && Math.floor(n) === n
                                            ? ((a = i[0]),
                                                (n = n),
                                                !((n = "-" !== a && "+" !== a ? n : t + n) === t ||
                                                    n < 0 ||
                                                    e <= n) && n)
                                            : 0 <=
                                                ["origin", "start", "end", "stack", "shape"].indexOf(i) && i;
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
                                var s = t[e].fill;
                                var a = [e];
                                var n;
                                if (!i)
                                    return s;
                                for (; !1 !== s && -1 === a.indexOf(s);) {
                                    if (!p(s))
                                        return s;
                                    if (!(n = t[s]))
                                        return !1;
                                    if (n.visible)
                                        return s;
                                    a.push(s), (s = n.fill);
                                }
                                return !1;
                            })(a, o, i.propagate));
                },
                beforeDraw: function (e, t, i) {
                    var s = "beforeDraw" === i.drawTime, a = e.getSortedVisibleDatasetMetas(), n = e.chartArea;
                    for (var t_132 = a.length - 1; 0 <= t_132; --t_132) {
                        var i_59 = a[t_132].$filler;
                        i_59 &&
                            (i_59.line.updateControlPoints(n, i_59.axis),
                                s && i_59.fill && wn(e.ctx, i_59, n));
                    }
                },
                beforeDatasetsDraw: function (e, t, i) {
                    if ("beforeDatasetsDraw" === i.drawTime) {
                        var s = e.getSortedVisibleDatasetMetas();
                        for (var t_133 = s.length - 1; 0 <= t_133; --t_133) {
                            var i_60 = s[t_133].$filler;
                            vn(i_60) && wn(e.ctx, i_60, e.chartArea);
                        }
                    }
                },
                beforeDatasetDraw: function (t, e, i) {
                    e = e.meta.$filler;
                    vn(e) &&
                        "beforeDatasetDraw" === i.drawTime &&
                        wn(t.ctx, e, t.chartArea);
                },
                defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
            };
            var Cn = function (t, e) {
                var _b = t.boxHeight, i = _b === void 0 ? e : _b, _c = t.boxWidth, s = _c === void 0 ? e : _c;
                return (t.usePointStyle &&
                    ((i = Math.min(i, e)), (s = t.pointStyleWidth || Math.min(s, e))),
                    { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) });
            };
            var On = /** @class */ (function (_super) {
                __extends(On, _super);
                function On(t) {
                    var _this = this;
                    _this = _super.call(this) || this,
                        (_this._added = !1),
                        (_this.legendHitBoxes = []),
                        (_this._hoveredItem = null),
                        (_this.doughnutMode = !1),
                        (_this.chart = t.chart),
                        (_this.options = t.options),
                        (_this.ctx = t.ctx),
                        (_this.legendItems = void 0),
                        (_this.columnSizes = void 0),
                        (_this.lineWidths = void 0),
                        (_this.maxHeight = void 0),
                        (_this.maxWidth = void 0),
                        (_this.top = void 0),
                        (_this.bottom = void 0),
                        (_this.left = void 0),
                        (_this.right = void 0),
                        (_this.height = void 0),
                        (_this.width = void 0),
                        (_this._margins = void 0),
                        (_this.position = void 0),
                        (_this.weight = void 0),
                        (_this.fullSize = void 0);
                    return _this;
                }
                On.prototype.update = function (t, e, i) {
                    (this.maxWidth = t),
                        (this.maxHeight = e),
                        (this._margins = i),
                        this.setDimensions(),
                        this.buildLabels(),
                        this.fit();
                };
                On.prototype.setDimensions = function () {
                    this.isHorizontal()
                        ? ((this.width = this.maxWidth),
                            (this.left = this._margins.left),
                            (this.right = this.width))
                        : ((this.height = this.maxHeight),
                            (this.top = this._margins.top),
                            (this.bottom = this.height));
                };
                On.prototype.buildLabels = function () {
                    var _this = this;
                    var i = this.options.labels || {};
                    var t = d(i.generateLabels, [this.chart], this) || [];
                    i.filter && (t = t.filter(function (t) { return i.filter(t, _this.chart.data); })),
                        i.sort && (t = t.sort(function (t, e) { return i.sort(t, e, _this.chart.data); })),
                        this.options.reverse && t.reverse(),
                        (this.legendItems = t);
                };
                On.prototype.fit = function () {
                    var _b = this, i = _b.options, s = _b.ctx;
                    if (i.display) {
                        var a = i.labels, n = z(a.font), o = n.size, r = this._computeTitleHeight(), _c = Cn(a, o), a = _c.boxWidth, l = _c.itemHeight;
                        var t_134, e_81;
                        (s.font = n.string),
                            this.isHorizontal()
                                ? ((t_134 = this.maxWidth), (e_81 = this._fitRows(r, o, a, l) + 10))
                                : ((e_81 = this.maxHeight), (t_134 = this._fitCols(r, n, a, l) + 10)),
                            (this.width = Math.min(t_134, i.maxWidth || this.maxWidth)),
                            (this.height = Math.min(e_81, i.maxHeight || this.maxHeight));
                    }
                    else
                        this.width = this.height = 0;
                };
                On.prototype._fitRows = function (t, i, s, a) {
                    var _b = this, n = _b.ctx, o = _b.maxWidth, r = _b.options.labels.padding, l = (this.legendHitBoxes = []), h = (this.lineWidths = [0]), c = a + r;
                    var d = t, u = ((n.textAlign = "left"), (n.textBaseline = "middle"), -1), g = -c;
                    return (this.legendItems.forEach(function (t, e) {
                        t = s + i / 2 + n.measureText(t.text).width;
                        (0 === e || h[h.length - 1] + t + 2 * r > o) &&
                            ((d += c), (h[h.length - (0 < e ? 0 : 1)] = 0), (g += c), u++),
                            (l[e] = { left: 0, top: g, row: u, width: t, height: a }),
                            (h[h.length - 1] += t + r);
                    }),
                        d);
                };
                On.prototype._fitCols = function (t, r, l, h) {
                    var _b = this, c = _b.ctx, e = _b.maxHeight, d = _b.options.labels.padding, u = (this.legendHitBoxes = []), g = (this.columnSizes = []), f = e - t;
                    var p = d, m = 0, b = 0, x = 0, v = 0;
                    return (this.legendItems.forEach(function (t, e) {
                        (o = l), (i = r), (s = c), (a = t), (n = h);
                        var i, s, a, n, _b = {
                            itemWidth: (function (t, e, i) {
                                var s = a.text;
                                return (s &&
                                    "string" != typeof s &&
                                    (s = s.reduce(function (t, e) { return (t.length > e.length ? t : e); })),
                                    t + e.size / 2 + i.measureText(s).width);
                            })(o, i, s),
                            itemHeight: (function (t) {
                                var e = n;
                                return (e = "string" != typeof a.text ? An(a, t) : e);
                            })(i.lineHeight),
                        }, t = _b.itemWidth, o = _b.itemHeight;
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
                        p);
                };
                On.prototype.adjustHitBoxes = function () {
                    if (this.options.display) {
                        var i_61 = this._computeTitleHeight(), _b = this, s_60 = _b.legendHitBoxes, _c = _b.options, a_44 = _c.align, n_31 = _c.labels.padding, t_135 = _c.rtl, o_30 = Di(t_135, this.left, this.width);
                        if (this.isHorizontal()) {
                            var t_136 = 0, e_82 = E(a_44, this.left + n_31, this.right - this.lineWidths[t_136]);
                            for (var _d = 0, s_58 = s_60; _d < s_58.length; _d++) {
                                var r_17 = s_58[_d];
                                t_136 !== r_17.row &&
                                    ((t_136 = r_17.row),
                                        (e_82 = E(a_44, this.left + n_31, this.right - this.lineWidths[t_136]))),
                                    (r_17.top += this.top + i_61 + n_31),
                                    (r_17.left = o_30.leftForLtr(o_30.x(e_82), r_17.width)),
                                    (e_82 += r_17.width + n_31);
                            }
                        }
                        else {
                            var t_137 = 0, e_83 = E(a_44, this.top + i_61 + n_31, this.bottom - this.columnSizes[t_137].height);
                            for (var _f = 0, s_59 = s_60; _f < s_59.length; _f++) {
                                var l_24 = s_59[_f];
                                l_24.col !== t_137 &&
                                    ((t_137 = l_24.col),
                                        (e_83 = E(a_44, this.top + i_61 + n_31, this.bottom - this.columnSizes[t_137].height))),
                                    (l_24.top = e_83),
                                    (l_24.left += this.left + n_31),
                                    (l_24.left = o_30.leftForLtr(o_30.x(l_24.left), l_24.width)),
                                    (e_83 += l_24.height + n_31);
                            }
                        }
                    }
                };
                On.prototype.isHorizontal = function () {
                    return ("top" === this.options.position ||
                        "bottom" === this.options.position);
                };
                On.prototype.draw = function () {
                    var t;
                    this.options.display &&
                        (Ve((t = this.ctx), this), this._draw(), Be(t));
                };
                On.prototype._draw = function () {
                    var _this = this;
                    var _b = this, h = _b.options, c = _b.columnSizes, d = _b.lineWidths, u = _b.ctx, g = h.align, f = h.labels, p = R.color, m = Di(h.rtl, this.left, this.width), b = z(f.font), x = f["padding"], v = b.size, _ = v / 2;
                    var y;
                    this.drawTitle(),
                        (u.textAlign = m.textAlign("left")),
                        (u.textBaseline = "middle"),
                        (u.lineWidth = 0.5),
                        (u.font = b.string);
                    var _c = Cn(f, v), M = _c.boxWidth, w = _c.boxHeight, k = _c.itemHeight, S = this.isHorizontal(), P = this._computeTitleHeight(), D = ((y = S
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
                    this.legendItems.forEach(function (t, e) {
                        (u.strokeStyle = t.fontColor), (u.fillStyle = t.fontColor);
                        var i = u.measureText(t.text).width, s = m.textAlign(t.textAlign || (t.textAlign = f.textAlign)), i = M + _ + i;
                        var a = y.x, n = y.y;
                        m.setWidth(_this.width),
                            S
                                ? 0 < e &&
                                    a + i + x > _this.right &&
                                    ((n = y.y += D),
                                        y.line++,
                                        (a = y.x = E(g, _this.left + x, _this.right - d[y.line])))
                                : 0 < e &&
                                    n + D > _this.bottom &&
                                    ((a = y.x = a + c[y.line].width + x),
                                        y.line++,
                                        (n = y.y =
                                            E(g, _this.top + P + x, _this.bottom - c[y.line].height)));
                        var e = m.x(a), o = n, r = t;
                        if (!(isNaN(M) || M <= 0 || isNaN(w) || w < 0)) {
                            u.save();
                            var l = T(r.lineWidth, 1);
                            if (((u.fillStyle = T(r.fillStyle, p)),
                                (u.lineCap = T(r.lineCap, "butt")),
                                (u.lineDashOffset = T(r.lineDashOffset, 0)),
                                (u.lineJoin = T(r.lineJoin, "miter")),
                                (u.lineWidth = l),
                                (u.strokeStyle = T(r.strokeStyle, p)),
                                u.setLineDash(T(r.lineDash, [])),
                                f.usePointStyle)) {
                                var p_7 = {
                                    radius: (w * Math.SQRT2) / 2,
                                    pointStyle: r.pointStyle,
                                    rotation: r.rotation,
                                    borderWidth: l,
                                }, T_3 = m.xPlus(e, M / 2);
                                Fe(u, p_7, T_3, o + _, f.pointStyleWidth && M);
                            }
                            else {
                                var f_8 = o + Math.max((v - w) / 2, 0), p_8 = m.leftForLtr(e, M), T_4 = wi(r.borderRadius);
                                u.beginPath(),
                                    Object.values(T_4).some(function (t) { return 0 !== t; })
                                        ? je(u, { x: p_8, y: f_8, w: M, h: w, radius: T_4 })
                                        : u.rect(p_8, f_8, M, w),
                                    u.fill(),
                                    0 !== l && u.stroke();
                            }
                            u.restore();
                        }
                        if (((a = Ct(s, a + M + _, S ? a + i : _this.right, h.rtl)),
                            (o = m.x(a)),
                            (e = n),
                            (r = t),
                            He(u, r.text, o, e + k / 2, b, {
                                strikethrough: r.hidden,
                                textAlign: m.textAlign(r.textAlign),
                            }),
                            S))
                            y.x += i + x;
                        else if ("string" != typeof t.text) {
                            var h_18 = b.lineHeight;
                            y.y += An(t, h_18) + x;
                        }
                        else
                            y.y += D;
                    }),
                        Oi(this.ctx, h.textDirection);
                };
                On.prototype.drawTitle = function () {
                    var s = this.options, a = s.title, n = z(a.font), o = I(a.padding);
                    if (a.display) {
                        var l_25 = Di(s.rtl, this.left, this.width), h_19 = this.ctx, c_16 = a.position, d_17 = n.size / 2, u_11 = o.top + d_17;
                        var t_138, e_84 = this.left, i_62 = this.width;
                        if (this.isHorizontal())
                            (i_62 = Math.max.apply(Math, this.lineWidths)),
                                (t_138 = this.top + u_11),
                                (e_84 = E(s.align, e_84, this.right - i_62));
                        else {
                            var a_45 = this.columnSizes.reduce(function (t, e) { return Math.max(t, e.height); }, 0);
                            t_138 =
                                u_11 +
                                    E(s.align, this.top, this.bottom -
                                        a_45 -
                                        s.labels.padding -
                                        this._computeTitleHeight());
                        }
                        var r = E(c_16, e_84, e_84 + i_62);
                        (h_19.textAlign = l_25.textAlign(Dt(c_16))),
                            (h_19.textBaseline = "middle"),
                            (h_19.strokeStyle = a.color),
                            (h_19.fillStyle = a.color),
                            (h_19.font = n.string),
                            He(h_19, a.text, r, t_138, n);
                    }
                };
                On.prototype._computeTitleHeight = function () {
                    var t = this.options.title, e = z(t.font), i = I(t.padding);
                    return t.display ? e.lineHeight + i.height : 0;
                };
                On.prototype._getLegendItemAt = function (t, e) {
                    var i, s, a;
                    if (c(t, this.left, this.right) && c(e, this.top, this.bottom))
                        for (a = this.legendHitBoxes, i = 0; i < a.length; ++i)
                            if (c(t, (s = a[i]).left, s.left + s.width) &&
                                c(e, s.top, s.top + s.height))
                                return this.legendItems[i];
                    return null;
                };
                On.prototype.handleEvent = function (t) {
                    var e, i, s, a = this.options;
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
                                    (this._hoveredItem = e) &&
                                        !s &&
                                        d(a.onHover, [t, e, this], this))
                                : e && d(a.onClick, [t, e, this], this));
                };
                return On;
            }(e));
            function An(t, e) {
                return e * (t.text ? t.text.length : 0);
            }
            var Tn = {
                id: "legend",
                _element: On,
                start: function (t, e, i) {
                    var s = (t.legend = new On({ ctx: t.ctx, options: i, chart: t }));
                    a.configure(t, s, i), a.addBox(t, s);
                },
                stop: function (t) {
                    a.removeBox(t, t.legend), delete t.legend;
                },
                beforeUpdate: function (t, e, i) {
                    var s = t.legend;
                    a.configure(t, s, i), (s.options = i);
                },
                afterUpdate: function (t) {
                    var e = t.legend;
                    e.buildLabels(), e.adjustHitBoxes();
                },
                afterEvent: function (t, e) {
                    e.replay || t.legend.handleEvent(e.event);
                },
                defaults: {
                    display: !0,
                    position: "top",
                    align: "center",
                    fullSize: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function (t, e, i) {
                        var s = e.datasetIndex, a = i.chart;
                        a.isDatasetVisible(s)
                            ? (a.hide(s), (e.hidden = !0))
                            : (a.show(s), (e.hidden = !1));
                    },
                    onHover: null,
                    onLeave: null,
                    labels: {
                        color: function (t) { return t.chart.options.color; },
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function (t) {
                            var s = t.data.datasets, _b = t.legend.options["labels"], a = _b.usePointStyle, n = _b.pointStyle, o = _b.textAlign, r = _b.color, l = _b.useBorderRadius, h = _b.borderRadius;
                            return t._getSortedDatasetMetas().map(function (t) {
                                var e = t.controller.getStyle(a ? 0 : void 0), i = I(e.borderWidth);
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
                        color: function (t) { return t.chart.options.color; },
                        display: !1,
                        position: "center",
                        text: "",
                    },
                },
                descriptors: {
                    _scriptable: function (t) { return !t.startsWith("on"); },
                    labels: {
                        _scriptable: function (t) {
                            return !["generateLabels", "filter", "sort"].includes(t);
                        },
                    },
                },
            };
            var Ln = /** @class */ (function (_super) {
                __extends(Ln, _super);
                function Ln(t) {
                    var _this = this;
                    _this = _super.call(this) || this,
                        (_this.chart = t.chart),
                        (_this.options = t.options),
                        (_this.ctx = t.ctx),
                        (_this._padding = void 0),
                        (_this.top = void 0),
                        (_this.bottom = void 0),
                        (_this.left = void 0),
                        (_this.right = void 0),
                        (_this.width = void 0),
                        (_this.height = void 0),
                        (_this.position = void 0),
                        (_this.weight = void 0),
                        (_this.fullSize = void 0);
                    return _this;
                }
                Ln.prototype.update = function (t, e) {
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
                };
                Ln.prototype.isHorizontal = function () {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t;
                };
                Ln.prototype._drawArgs = function (t) {
                    var _b = this, e = _b.top, i = _b.left, s = _b.bottom, a = _b.right, n = _b.options, o = n.align;
                    var r, l, h, c = 0;
                    return ((r = this.isHorizontal()
                        ? ((l = E(o, i, a)), (h = e + t), a - i)
                        : ((c =
                            "left" === n.position
                                ? ((l = i + t), (h = E(o, s, e)), -0.5 * S)
                                : ((l = a - t), (h = E(o, e, s)), 0.5 * S)),
                            s - e)),
                        { titleX: l, titleY: h, maxWidth: r, rotation: c });
                };
                Ln.prototype.draw = function () {
                    var _b;
                    var t, e, i, s, a, n = this.ctx, o = this.options;
                    o.display &&
                        ((e = (t = z(o.font)).lineHeight / 2 + this._padding.top),
                            (_b = this._drawArgs(e), e = _b.titleX, i = _b.titleY, s = _b.maxWidth, a = _b.rotation),
                            He(n, o.text, 0, 0, t, {
                                color: o.color,
                                maxWidth: s,
                                rotation: a,
                                textAlign: Dt(o.align),
                                textBaseline: "middle",
                                translation: [e, i],
                            }));
                };
                return Ln;
            }(e));
            var En = {
                id: "title",
                _element: Ln,
                start: function (t, e, i) {
                    var s;
                    (t = t),
                        (i = i),
                        (s = new Ln({ ctx: t.ctx, options: i, chart: t })),
                        a.configure(t, s, i),
                        a.addBox(t, s),
                        (t.titleBlock = s);
                },
                stop: function (t) {
                    var e = t.titleBlock;
                    a.removeBox(t, e), delete t.titleBlock;
                },
                beforeUpdate: function (t, e, i) {
                    var s = t.titleBlock;
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
            var Rn = new WeakMap();
            var In = {
                id: "subtitle",
                start: function (t, e, i) {
                    var s = new Ln({ ctx: t.ctx, options: i, chart: t });
                    a.configure(t, s, i), a.addBox(t, s), Rn.set(t, s);
                },
                stop: function (t) {
                    a.removeBox(t, Rn.get(t)), Rn.delete(t);
                },
                beforeUpdate: function (t, e, i) {
                    var s = Rn.get(t);
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
            var zn = {
                average: function (t) {
                    if (!t.length)
                        return !1;
                    var e, i, s = 0, a = 0, n = 0;
                    for (e = 0, i = t.length; e < i; ++e) {
                        var i_63 = t[e].element;
                        if (i_63 && i_63.hasValue()) {
                            var t_139 = i_63.tooltipPosition();
                            (s += t_139.x), (a += t_139.y), ++n;
                        }
                    }
                    return { x: s / n, y: a / n };
                },
                nearest: function (t, e) {
                    if (!t.length)
                        return !1;
                    var i, s, a, n = e.x, o = e.y, r = Number.POSITIVE_INFINITY;
                    for (i = 0, s = t.length; i < s; ++i) {
                        var s_61 = t[i].element;
                        if (s_61 && s_61.hasValue()) {
                            var t_140 = gt(e, s_61.getCenterPoint());
                            t_140 < r && ((r = t_140), (a = s_61));
                        }
                    }
                    if (a) {
                        var t_141 = a.tooltipPosition();
                        (n = t_141.x), (o = t_141.y);
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
                var i = t.chart.ctx, s = t.body, a = t.footer, n = t.title, o = e.boxWidth, r = e.boxHeight, l = z(e.bodyFont), h = z(e.titleFont), c = z(e.footerFont), d = n.length, u = a.length, g = s.length, f = I(e.padding);
                var p = f.height, m = 0, b = s.reduce(function (t, e) { return t + e.before.length + e.lines.length + e.after.length; }, 0), x = ((b += t.beforeBody.length + t.afterBody.length),
                    d &&
                        (p +=
                            d * h.lineHeight +
                                (d - 1) * e.titleSpacing +
                                e.titleMarginBottom),
                    b &&
                        (p +=
                            g *
                                (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) +
                                (b - g) * l.lineHeight +
                                (b - 1) * e.bodySpacing),
                    u &&
                        (p +=
                            e.footerMarginTop +
                                u * c.lineHeight +
                                (u - 1) * e.footerSpacing),
                    0);
                function v(t) {
                    m = Math.max(m, i.measureText(t).width + x);
                }
                return (i.save(),
                    (i.font = h.string),
                    k(t.title, v),
                    (i.font = l.string),
                    k(t.beforeBody.concat(t.afterBody), v),
                    (x = e.displayColors ? o + 2 + e.boxPadding : 0),
                    k(s, function (t) {
                        k(t.before, v), k(t.lines, v), k(t.after, v);
                    }),
                    (x = 0),
                    (i.font = c.string),
                    k(t.footer, v),
                    i.restore(),
                    { width: (m += f.width), height: p });
            }
            function Bn(i, t, s) {
                var e = s.yAlign ||
                    t.yAlign ||
                    (function () {
                        var t = s.y, e = s.height;
                        return t < e / 2
                            ? "top"
                            : t > i.height - e / 2
                                ? "bottom"
                                : "center";
                    })();
                return {
                    xAlign: s.xAlign ||
                        t.xAlign ||
                        (function (a, n, o, t) {
                            var e = o.x, i = o.width, s = a.width, _b = a.chartArea, r = _b.left, l = _b.right;
                            var h = "center";
                            return ("center" === t
                                ? (h = e <= (r + l) / 2 ? "left" : "right")
                                : e <= i / 2
                                    ? (h = "left")
                                    : s - i / 2 <= e && (h = "right"),
                                (h = (function (t) {
                                    var e = o.x, i = o.width, s = n.caretSize + n.caretPadding;
                                    return (("left" === t && e + i + s > a.width) ||
                                        ("right" === t && e - i - s < 0));
                                })(h)
                                    ? "center"
                                    : h));
                        })(i, t, s, e),
                    yAlign: e,
                };
            }
            function Wn(t, i, e, s) {
                var _b = t, t = _b.caretSize, a = _b.caretPadding, n = _b.cornerRadius, o = e.xAlign, r = e.yAlign, l = t + a, _c = wi(n), e = _c.topLeft, a = _c.topRight, n = _c.bottomLeft, h = _c.bottomRight;
                var c = (function () {
                    var t = i.x, e = i.width;
                    return "right" === o ? (t -= e) : "center" === o && (t -= e / 2), t;
                })();
                var d = (function () {
                    var t = i.y, e = i.height;
                    return ("top" === r ? (t += l) : (t -= "bottom" === r ? e + l : e / 2), t);
                })();
                return ("center" === r
                    ? "left" === o
                        ? (c += l)
                        : "right" === o && (c -= l)
                    : "left" === o
                        ? (c -= Math.max(e, n) + t)
                        : "right" === o && (c += Math.max(a, h) + t),
                    { x: C(c, 0, s.width - i.width), y: C(d, 0, s.height - i.height) });
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
            var Yn = {
                beforeTitle: t,
                title: function (t) {
                    if (0 < t.length) {
                        var t = t[0], e = t.chart.data.labels, i = e ? e.length : 0;
                        if (this && this.options && "dataset" === this.options.mode)
                            return t.dataset.label || "";
                        if (t.label)
                            return t.label;
                        if (0 < i && t.dataIndex < i)
                            return e[t.dataIndex];
                    }
                    return "";
                },
                afterTitle: t,
                beforeBody: t,
                beforeLabel: t,
                label: function (t) {
                    if (this && this.options && "dataset" === this.options.mode)
                        return t.label + ": " + t.formattedValue || t.formattedValue;
                    var e = t.dataset.label || "";
                    e && (e += ": ");
                    t = t.formattedValue;
                    return P(t) || (e += t), e;
                },
                labelColor: function (t) {
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
                labelTextColor: function () {
                    return this.options.bodyColor;
                },
                labelPointStyle: function (t) {
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
            var $n = /** @class */ (function (_super) {
                __extends($n, _super);
                function $n(t) {
                    var _this = this;
                    _this = _super.call(this) || this,
                        (_this.opacity = 0),
                        (_this._active = []),
                        (_this._eventPosition = void 0),
                        (_this._size = void 0),
                        (_this._cachedAnimations = void 0),
                        (_this._tooltipItems = []),
                        (_this.$animations = void 0),
                        (_this.$context = void 0),
                        (_this.chart = t.chart),
                        (_this.options = t.options),
                        (_this.dataPoints = void 0),
                        (_this.title = void 0),
                        (_this.beforeBody = void 0),
                        (_this.body = void 0),
                        (_this.afterBody = void 0),
                        (_this.footer = void 0),
                        (_this.xAlign = void 0),
                        (_this.yAlign = void 0),
                        (_this.x = void 0),
                        (_this.y = void 0),
                        (_this.height = void 0),
                        (_this.width = void 0),
                        (_this.caretX = void 0),
                        (_this.caretY = void 0),
                        (_this.labelColors = void 0),
                        (_this.labelPointStyles = void 0),
                        (_this.labelTextColors = void 0);
                    return _this;
                }
                $n.prototype.initialize = function (t) {
                    (this.options = t),
                        (this._cachedAnimations = void 0),
                        (this.$context = void 0);
                };
                $n.prototype._resolveAnimations = function () {
                    var t = this._cachedAnimations;
                    if (t)
                        return t;
                    var t = this.chart, e = this.options.setContext(this.getContext()), t = e.enabled && t.options.animation && e.animations, e = new xs(this.chart, t);
                    return t._cacheable && (this._cachedAnimations = Object.freeze(e)), e;
                };
                $n.prototype.getContext = function () {
                    return (this.$context ||
                        (this.$context =
                            ((t = this.chart.getContext()),
                                Pi(t, {
                                    tooltip: this,
                                    tooltipItems: this._tooltipItems,
                                    type: "tooltip",
                                }))));
                    var t;
                };
                $n.prototype.getTitle = function (t, e) {
                    var e = e["callbacks"], i = w(e, "beforeTitle", this, t), s = w(e, "title", this, t), e = w(e, "afterTitle", this, t), t = x([], Fn(i));
                    return (t = x(t, Fn(s))), x(t, Fn(e));
                };
                $n.prototype.getBeforeBody = function (t, e) {
                    return Hn(w(e.callbacks, "beforeBody", this, t));
                };
                $n.prototype.getBody = function (t, e) {
                    var _this = this;
                    var s = e["callbacks"], a = [];
                    return (k(t, function (t) {
                        var e = { before: [], lines: [], after: [] }, i = jn(s, t);
                        x(e.before, Fn(w(i, "beforeLabel", _this, t))),
                            x(e.lines, w(i, "label", _this, t)),
                            x(e.after, Fn(w(i, "afterLabel", _this, t))),
                            a.push(e);
                    }),
                        a);
                };
                $n.prototype.getAfterBody = function (t, e) {
                    return Hn(w(e.callbacks, "afterBody", this, t));
                };
                $n.prototype.getFooter = function (t, e) {
                    var e = e["callbacks"], i = w(e, "beforeFooter", this, t), s = w(e, "footer", this, t), e = w(e, "afterFooter", this, t), t = x([], Fn(i));
                    return (t = x(t, Fn(s))), x(t, Fn(e));
                };
                $n.prototype._createItems = function (s) {
                    var _this = this;
                    var t = this._active, a = this.chart.data, i = [], n = [], o = [];
                    var e, r, l = [];
                    for (e = 0, r = t.length; e < r; ++e)
                        l.push((function (t, e) {
                            var i = e.element, s = e.datasetIndex, a = e.index, n = t.getDatasetMeta(s).controller, _b = n.getLabelAndValue(a), o = _b.label, r = _b.value;
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
                        })(this.chart, t[e]));
                    return (s.filter && (l = l.filter(function (t, e, i) { return s.filter(t, e, i, a); })),
                        k((l = s.itemSort ? l.sort(function (t, e) { return s.itemSort(t, e, a); }) : l), function (t) {
                            var e = jn(s.callbacks, t);
                            i.push(w(e, "labelColor", _this, t)),
                                n.push(w(e, "labelPointStyle", _this, t)),
                                o.push(w(e, "labelTextColor", _this, t));
                        }),
                        (this.labelColors = i),
                        (this.labelPointStyles = n),
                        (this.labelTextColors = o),
                        (this.dataPoints = l));
                };
                $n.prototype.update = function (t, e) {
                    var i = this.options.setContext(this.getContext()), s = this._active;
                    var a, n = [];
                    if (s.length) {
                        var t_142 = zn[i.position].call(this, s, this._eventPosition), e_85 = ((n = this._createItems(i)),
                            (this.title = this.getTitle(n, i)),
                            (this.beforeBody = this.getBeforeBody(n, i)),
                            (this.body = this.getBody(n, i)),
                            (this.afterBody = this.getAfterBody(n, i)),
                            (this.footer = this.getFooter(n, i)),
                            (this._size = Vn(this, i))), o_31 = Object.assign({}, t_142, e_85), r_18 = Bn(this.chart, i, o_31), l_26 = Wn(i, o_31, r_18, this.chart);
                        (this.xAlign = r_18.xAlign),
                            (this.yAlign = r_18.yAlign),
                            (a = {
                                opacity: 1,
                                x: l_26.x,
                                y: l_26.y,
                                width: e_85.width,
                                height: e_85.height,
                                caretX: t_142.x,
                                caretY: t_142.y,
                            });
                    }
                    else
                        0 !== this.opacity && (a = { opacity: 0 });
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
                };
                $n.prototype.drawCaret = function (t, e, i, s) {
                    t = this.getCaretPosition(t, i, s);
                    e.lineTo(t.x1, t.y1), e.lineTo(t.x2, t.y2), e.lineTo(t.x3, t.y3);
                };
                $n.prototype.getCaretPosition = function (t, e, i) {
                    var _b = this, s = _b.xAlign, a = _b.yAlign, _c = i, i = _c.caretSize, n = _c.cornerRadius, _d = wi(n), n = _d.topLeft, o = _d.topRight, r = _d.bottomLeft, l = _d.bottomRight, _f = t, t = _f.x, h = _f.y, _g = e, e = _g.width, c = _g.height;
                    var d, u, g, f, p, m;
                    return ("center" === a
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
                        { x1: d, x2: u, x3: g, y1: f, y2: p, y3: m });
                };
                $n.prototype.drawTitle = function (t, e, i) {
                    var s = this.title, a = s.length;
                    var n, o, r;
                    if (a) {
                        var l_27 = Di(i.rtl, this.x, this.width);
                        for (t.x = Nn(this, i.titleAlign, i),
                            e.textAlign = l_27.textAlign(i.titleAlign),
                            e.textBaseline = "middle",
                            n = z(i.titleFont),
                            o = i.titleSpacing,
                            e.fillStyle = i.titleColor,
                            e.font = n.string,
                            r = 0; r < a; ++r)
                            e.fillText(s[r], l_27.x(t.x), t.y + n.lineHeight / 2),
                                (t.y += n.lineHeight + o),
                                r + 1 === a && (t.y += i.titleMarginBottom - o);
                    }
                };
                $n.prototype._drawColorBox = function (t, e, i, s, a) {
                    var n = this.labelColors[i], o = this.labelPointStyles[i], r = a.boxHeight, l = a.boxWidth, h = z(a.bodyFont), c = Nn(this, "left", a), d = s.x(c), u = r < h.lineHeight ? (h.lineHeight - r) / 2 : 0, g = e.y + u;
                    if (a.usePointStyle) {
                        var e_86 = {
                            radius: Math.min(l, r) / 2,
                            pointStyle: o.pointStyle,
                            rotation: o.rotation,
                            borderWidth: 1,
                        }, i_64 = s.leftForLtr(d, l) + l / 2, A_4 = g + r / 2;
                        (t.strokeStyle = a.multiKeyBackground),
                            (t.fillStyle = a.multiKeyBackground),
                            ze(t, e_86, i_64, A_4),
                            (t.strokeStyle = n.borderColor),
                            (t.fillStyle = n.backgroundColor),
                            ze(t, e_86, i_64, A_4);
                    }
                    else {
                        (t.lineWidth = A(n.borderWidth)
                            ? Math.max.apply(Math, Object.values(n.borderWidth)) : n.borderWidth || 1),
                            (t.strokeStyle = n.borderColor),
                            t.setLineDash(n.borderDash || []),
                            (t.lineDashOffset = n.borderDashOffset || 0);
                        var e_87 = s.leftForLtr(d, l), i_65 = s.leftForLtr(s.xPlus(d, 1), l - 2), o_32 = wi(n.borderRadius);
                        Object.values(o_32).some(function (t) { return 0 !== t; })
                            ? (t.beginPath(),
                                (t.fillStyle = a.multiKeyBackground),
                                je(t, { x: e_87, y: g, w: l, h: r, radius: o_32 }),
                                t.fill(),
                                t.stroke(),
                                (t.fillStyle = n.backgroundColor),
                                t.beginPath(),
                                je(t, { x: i_65, y: g + 1, w: l - 2, h: r - 2, radius: o_32 }),
                                t.fill())
                            : ((t.fillStyle = a.multiKeyBackground),
                                t.fillRect(e_87, g, l, r),
                                t.strokeRect(e_87, g, l, r),
                                (t.fillStyle = n.backgroundColor),
                                t.fillRect(i_65, g + 1, l - 2, r - 2));
                    }
                    t.fillStyle = this.labelTextColors[i];
                };
                $n.prototype.drawBody = function (e, i, t) {
                    var s = this["body"], a = t.bodySpacing, n = t.bodyAlign, o = t.displayColors, r = t.boxHeight, l = t.boxWidth, h = t.boxPadding, c = z(t.bodyFont);
                    var d = c.lineHeight, u = 0;
                    function g(t) {
                        i.fillText(t, f.x(e.x + u), e.y + d / 2), (e.y += d + a);
                    }
                    var f = Di(t.rtl, this.x, this.width), p = f.textAlign(n);
                    var m, b, x, v, _, y, M;
                    for (i.textAlign = n,
                        i.textBaseline = "middle",
                        i.font = c.string,
                        e.x = Nn(this, p, t),
                        i.fillStyle = t.bodyColor,
                        k(this.beforeBody, g),
                        u =
                            o && "right" !== p
                                ? "center" === n
                                    ? l / 2 + h
                                    : l + 2 + h
                                : 0,
                        v = 0,
                        y = s.length; v < y; ++v) {
                        for (m = s[v],
                            b = this.labelTextColors[v],
                            i.fillStyle = b,
                            k(m.before, g),
                            x = m.lines,
                            o &&
                                x.length &&
                                (this._drawColorBox(i, e, v, f, t),
                                    (d = Math.max(c.lineHeight, r))),
                            _ = 0,
                            M = x.length; _ < M; ++_)
                            g(x[_]), (d = c.lineHeight);
                        k(m.after, g);
                    }
                    (u = 0), (d = c.lineHeight), k(this.afterBody, g), (e.y -= a);
                };
                $n.prototype.drawFooter = function (t, e, i) {
                    var s = this.footer, a = s.length;
                    var n, o;
                    if (a) {
                        var r_19 = Di(i.rtl, this.x, this.width);
                        for (t.x = Nn(this, i.footerAlign, i),
                            t.y += i.footerMarginTop,
                            e.textAlign = r_19.textAlign(i.footerAlign),
                            e.textBaseline = "middle",
                            n = z(i.footerFont),
                            e.fillStyle = i.footerColor,
                            e.font = n.string,
                            o = 0; o < a; ++o)
                            e.fillText(s[o], r_19.x(t.x), t.y + n.lineHeight / 2),
                                (t.y += n.lineHeight + i.footerSpacing);
                    }
                };
                $n.prototype.drawBackground = function (t, e, i, s) {
                    var _b = this, a = _b.xAlign, n = _b.yAlign, o = t.x, r = t.y, l = i.width, h = i.height, _c = wi(s.cornerRadius), c = _c.topLeft, d = _c.topRight, u = _c.bottomLeft, g = _c.bottomRight;
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
                };
                $n.prototype._updateAnimationTarget = function (t) {
                    var e = this.chart, i = this.$animations, s = i && i.x, a = i && i.y;
                    if (s || a) {
                        var i_66 = zn[t.position].call(this, this._active, this._eventPosition);
                        var n, o;
                        i_66 &&
                            ((n = this._size = Vn(this, t)),
                                (o = Wn(t, (o = Object.assign({}, i_66, this._size)), (t = Bn(e, t, o)), e)),
                                (s._to === o.x && a._to === o.y) ||
                                    ((this.xAlign = t.xAlign),
                                        (this.yAlign = t.yAlign),
                                        (this.width = n.width),
                                        (this.height = n.height),
                                        (this.caretX = i_66.x),
                                        (this.caretY = i_66.y),
                                        this._resolveAnimations().update(this, o)));
                    }
                };
                $n.prototype._willRender = function () {
                    return !!this.opacity;
                };
                $n.prototype.draw = function (t) {
                    var e = this.options.setContext(this.getContext());
                    var i = this.opacity;
                    if (i) {
                        this._updateAnimationTarget(e);
                        var n_32 = { width: this.width, height: this.height }, o_33 = { x: this.x, y: this.y };
                        i = Math.abs(i) < 0.001 ? 0 : i;
                        var s = I(e.padding), a = this.title.length ||
                            this.beforeBody.length ||
                            this.body.length ||
                            this.afterBody.length ||
                            this.footer.length;
                        e.enabled &&
                            a &&
                            (t.save(),
                                (t.globalAlpha = i),
                                this.drawBackground(o_33, t, n_32, e),
                                Ci(t, e.textDirection),
                                (o_33.y += s.top),
                                this.drawTitle(o_33, t, e),
                                this.drawBody(o_33, t, e),
                                this.drawFooter(o_33, t, e),
                                Oi(t, e.textDirection),
                                t.restore());
                    }
                };
                $n.prototype.getActiveElements = function () {
                    return this._active || [];
                };
                $n.prototype.setActiveElements = function (t, e) {
                    var _this = this;
                    var i = this._active, t = t.map(function (_b) {
                        var t = _b.datasetIndex, e = _b.index;
                        var i = _this.chart.getDatasetMeta(t);
                        if (i)
                            return { datasetIndex: t, element: i.data[e], index: e };
                        throw new Error("Cannot find a dataset at index " + t);
                    }), i = !W(i, t), s = this._positionChanged(t, e);
                    (i || s) &&
                        ((this._active = t),
                            (this._eventPosition = e),
                            (this._ignoreReplayEvents = !0),
                            this.update(!0));
                };
                $n.prototype.handleEvent = function (t, e, i) {
                    if (i === void 0) { i = !0; }
                    if (e && this._ignoreReplayEvents)
                        return !1;
                    this._ignoreReplayEvents = !1;
                    var s = this.options, a = this._active || [], i = this._getActiveElements(t, a, e, i), n = this._positionChanged(i, t), a = e || !W(i, a) || n;
                    return (a &&
                        ((this._active = i),
                            (s.enabled || s.external) &&
                                ((this._eventPosition = { x: t.x, y: t.y }),
                                    this.update(!0, e))),
                        a);
                };
                $n.prototype._getActiveElements = function (t, e, i, s) {
                    var a = this.options;
                    if ("mouseout" === t.type)
                        return [];
                    if (!s)
                        return e;
                    var n = this.chart.getElementsAtEventForMode(t, a.mode, a, i);
                    return a.reverse && n.reverse(), n;
                };
                $n.prototype._positionChanged = function (t, e) {
                    var _b = this, i = _b.caretX, s = _b.caretY, a = _b.options, a = zn[a.position].call(this, t, e);
                    return !1 !== a && (i !== a.x || s !== a.y);
                };
                $n.positioners = zn;
                return $n;
            }(e));
            var Un = {
                id: "tooltip",
                _element: $n,
                positioners: zn,
                afterInit: function (t, e, i) {
                    i && (t.tooltip = new $n({ chart: t, options: i }));
                },
                beforeUpdate: function (t, e, i) {
                    t.tooltip && t.tooltip.initialize(i);
                },
                reset: function (t, e, i) {
                    t.tooltip && t.tooltip.initialize(i);
                },
                afterDraw: function (t) {
                    var e = t.tooltip;
                    var i;
                    e &&
                        e._willRender() &&
                        !(i = { tooltip: e }) !==
                            t.notifyPlugins("beforeTooltipDraw", __assign(__assign({}, i), { cancelable: !0 })) &&
                        (e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i));
                },
                afterEvent: function (t, e) {
                    var i;
                    t.tooltip &&
                        ((i = e.replay),
                            t.tooltip.handleEvent(e.event, i, e.inChartArea) &&
                                (e.changed = !0));
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
                    boxHeight: function (t, e) { return e.bodyFont.size; },
                    boxWidth: function (t, e) { return e.bodyFont.size; },
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
                    _scriptable: function (t) {
                        return "filter" !== t && "itemSort" !== t && "external" !== t;
                    },
                    _indexable: !1,
                    callbacks: { _scriptable: !1, _indexable: !1 },
                    animation: { _fallback: !1 },
                    animations: { _fallback: "animation" },
                },
                additionalOptionScopes: ["interaction"],
            };
            return (i.register(ba, an, Ra, s),
                (i.helpers = __assign({}, Fi)),
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
                i);
        });
    };
};
exports.chartJs = chartJs;
