"use strict";

var _test = require("./test");
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _get2() { if (typeof Reflect !== "undefined" && Reflect.get) { _get2 = Reflect.get.bind(); } else { _get2 = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get2.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e101) { throw _e101; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e102) { didErr = true; err = _e102; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
console.log((0, _test.test)("Hello World!"));
(function () {
  !function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Chart = e();
  }(this, function () {
    "use strict";

    var _class10, _class11, _class12, _class13, _class14, _class15, _class17, _class18, _class19, _class24, _class25;
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
      }
    });
    function t() {}
    var F = function () {
      var t = 0;
      return function () {
        return t++;
      };
    }();
    function P(t) {
      return null == t;
    }
    function O(t) {
      if (Array.isArray && Array.isArray(t)) return !0;
      var e = Object.prototype.toString.call(t);
      return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
    }
    function A(t) {
      return null !== t && "[object Object]" === Object.prototype.toString.call(t);
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
    var V = function V(t, e) {
        return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 : +t / e;
      },
      B = function B(t, e) {
        return "string" == typeof t && t.endsWith("%") ? parseFloat(t) / 100 * e : +t;
      };
    function d(t, e, i) {
      if (t && "function" == typeof t.call) return t.apply(i, e);
    }
    function k(t, e, i, s) {
      var a, n, o;
      if (O(t)) {
        if (n = t.length, s) for (a = n - 1; 0 <= a; a--) e.call(i, t[a], a);else for (a = 0; a < n; a++) e.call(i, t[a], a);
      } else if (A(t)) for (o = Object.keys(t), n = o.length, a = 0; a < n; a++) e.call(i, t[o[a]], o[a]);
    }
    function W(t, e) {
      var i, s, a, n;
      if (!t || !e || t.length !== e.length) return !1;
      for (i = 0, s = t.length; i < s; ++i) if (a = t[i], n = e[i], a.datasetIndex !== n.datasetIndex || a.index !== n.index) return !1;
      return !0;
    }
    function N(e) {
      if (O(e)) return e.map(N);
      if (A(e)) {
        var _i2 = Object.create(null),
          _s2 = Object.keys(e),
          _a2 = _s2.length;
        var _t2 = 0;
        for (; _t2 < _a2; ++_t2) _i2[_s2[_t2]] = N(e[_s2[_t2]]);
        return _i2;
      }
      return e;
    }
    function H(t) {
      return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
    }
    function j(t, e, i, s) {
      var a;
      H(t) && (a = e[t], i = i[t], A(a) && A(i) ? Y(a, i, s) : e[t] = N(i));
    }
    function Y(i, t, s) {
      var a,
        e = O(t) ? t : [t],
        n = e.length;
      if (!A(i)) return i;
      var o = (s = s || {}).merger || j;
      for (var _t3 = 0; _t3 < n; ++_t3) if (A(a = e[_t3])) {
        var _O = Object.keys(a);
        for (var _t4 = 0, _e2 = _O.length; _t4 < _e2; ++_t4) o(_O[_t4], i, a, s);
      }
      return i;
    }
    function $(t, e) {
      return Y(t, e, {
        merger: U
      });
    }
    function U(t, e, i) {
      var s;
      H(t) && (s = e[t], i = i[t], A(s) && A(i) ? $(s, i) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = N(i)));
    }
    var X = {
      "": function _(t) {
        return t;
      },
      x: function x(t) {
        return t.x;
      },
      y: function y(t) {
        return t.y;
      }
    };
    function q(t) {
      var e = t.split("."),
        i = [];
      var s = "";
      var _iterator = _createForOfIteratorHelper(e),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _t5 = _step.value;
          s += _t5, s = s.endsWith("\\") ? s.slice(0, -1) + "." : (i.push(s), "");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return i;
    }
    function m(t, e) {
      var i = X[e] || (X[e] = function () {
        var i = q(e);
        return function (t) {
          var _iterator2 = _createForOfIteratorHelper(i),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _e3 = _step2.value;
              if ("" === _e3) break;
              t = t && t[_e3];
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return t;
        };
      }());
      return i(t);
    }
    function K(t) {
      return t.charAt(0).toUpperCase() + t.slice(1);
    }
    var G = function G(t) {
        return void 0 !== t;
      },
      u = function u(t) {
        return "function" == typeof t;
      },
      Z = function Z(t, e) {
        if (t.size !== e.size) return !1;
        var _iterator3 = _createForOfIteratorHelper(t),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _i3 = _step3.value;
            if (!e.has(_i3)) return !1;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return !0;
      };
    function J(t) {
      return "mouseup" === t.type || "click" === t.type || "contextmenu" === t.type;
    }
    var S = Math.PI,
      _ = 2 * S,
      Q = _ + S,
      tt = Number.POSITIVE_INFINITY,
      et = S / 180,
      D = S / 2,
      it = S / 4,
      st = 2 * S / 3,
      r = Math.log10,
      y = Math.sign;
    function at(t, e, i) {
      return Math.abs(t - e) < i;
    }
    function nt(t) {
      var e = Math.round(t),
        e = (t = at(t, e, t / 1e3) ? e : t, Math.pow(10, Math.floor(r(t)))),
        t = t / e;
      return (t <= 1 ? 1 : t <= 2 ? 2 : t <= 5 ? 5 : 10) * e;
    }
    function ot(t) {
      var e = [],
        i = Math.sqrt(t);
      var s;
      for (s = 1; s < i; s++) t % s == 0 && (e.push(s), e.push(t / s));
      return i === (0 | i) && e.push(i), e.sort(function (t, e) {
        return t - e;
      }).pop(), e;
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
      for (s = 0, a = t.length; s < a; s++) n = t[s][i], isNaN(n) || (e.min = Math.min(e.min, n), e.max = Math.max(e.max, n));
    }
    function L(t) {
      return t * (S / 180);
    }
    function ct(t) {
      return t * (180 / S);
    }
    function dt(i) {
      if (p(i)) {
        var _t6 = 1,
          _e4 = 0;
        for (; Math.round(i * _t6) / _t6 !== i;) _t6 *= 10, _e4++;
        return _e4;
      }
    }
    function ut(t, e) {
      var i = e.x - t.x,
        e = e.y - t.y,
        t = Math.sqrt(i * i + e * e);
      var s = Math.atan2(e, i);
      return s < -0.5 * S && (s += _), {
        angle: s,
        distance: t
      };
    }
    function gt(t, e) {
      return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    }
    function ft(t, e) {
      return (t - e + Q) % _ - S;
    }
    function v(t) {
      return (t % _ + _) % _;
    }
    function pt(t, e, i, s) {
      var t = v(t),
        e = v(e),
        i = v(i),
        a = v(e - t),
        n = v(i - t),
        o = v(t - e),
        r = v(t - i);
      return t === e || t === i || s && e === i || n < a && o < r;
    }
    function C(t, e, i) {
      return Math.max(e, Math.min(i, t));
    }
    function mt(t) {
      return C(t, -32768, 32767);
    }
    function c(t, e, i) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1e-6;
      return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
    }
    function bt(e, i, t) {
      t = t || function (t) {
        return e[t] < i;
      };
      var s,
        a = e.length - 1,
        n = 0;
      for (; 1 < a - n;) t(s = n + a >> 1) ? n = s : a = s;
      return {
        lo: n,
        hi: a
      };
    }
    var f = function f(i, s, a, t) {
        return bt(i, a, t ? function (t) {
          var e = i[t][s];
          return e < a || e === a && i[t + 1][s] === a;
        } : function (t) {
          return i[t][s] < a;
        });
      },
      xt = function xt(e, i, s) {
        return bt(e, s, function (t) {
          return e[t][i] >= s;
        });
      };
    function vt(t, e, i) {
      var s = 0,
        a = t.length;
      for (; s < a && t[s] < e;) s++;
      for (; a > s && t[a - 1] > i;) a--;
      return 0 < s || a < t.length ? t.slice(s, a) : t;
    }
    var _t = ["push", "pop", "shift", "splice", "unshift"];
    function yt(a, t) {
      a._chartjs ? a._chartjs.listeners.push(t) : (Object.defineProperty(a, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: {
          listeners: [t]
        }
      }), _t.forEach(function (t) {
        var i = "_onData" + K(t),
          s = a[t];
        Object.defineProperty(a, t, {
          configurable: !0,
          enumerable: !1,
          value: function value() {
            for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
              e[_key] = arguments[_key];
            }
            var t = s.apply(this, e);
            return a._chartjs.listeners.forEach(function (t) {
              "function" == typeof t[i] && t[i].apply(t, e);
            }), t;
          }
        });
      }));
    }
    function Mt(e, t) {
      var i = e._chartjs;
      if (i) {
        var _s3 = i.listeners,
          _a3 = _s3.indexOf(t);
        -1 !== _a3 && _s3.splice(_a3, 1), 0 < _s3.length || (_t.forEach(function (t) {
          delete e[t];
        }), delete e._chartjs);
      }
    }
    function wt(t) {
      var e = new Set(t);
      return e.size === t.length ? t : Array.from(e);
    }
    var kt = "undefined" == typeof window ? function (t) {
      return t();
    } : window.requestAnimationFrame;
    function St(e, i) {
      var s,
        a = !1;
      return function () {
        for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          t[_key2] = arguments[_key2];
        }
        s = t, a || (a = !0, kt.call(window, function () {
          a = !1, e.apply(i, s);
        }));
      };
    }
    function Pt(e, i) {
      var s;
      return function () {
        for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          t[_key3] = arguments[_key3];
        }
        return i ? (clearTimeout(s), s = setTimeout(e, i, t)) : e.apply(this, t), i;
      };
    }
    var Dt = function Dt(t) {
        return "start" === t ? "left" : "end" === t ? "right" : "center";
      },
      E = function E(t, e, i) {
        return "start" === t ? e : "end" === t ? i : (e + i) / 2;
      },
      Ct = function Ct(t, e, i, s) {
        return t === (s ? "left" : "right") ? i : "center" === t ? (e + i) / 2 : e;
      };
    function Ot(t, e, i) {
      var s = e.length;
      var a = 0,
        n = s;
      if (t._sorted) {
        var _o = t.iScale,
          _r = t._parsed,
          _l = _o.axis,
          _o$getUserBounds = _o.getUserBounds(),
          _h = _o$getUserBounds.min,
          _c = _o$getUserBounds.max,
          _d = _o$getUserBounds.minDefined,
          _u = _o$getUserBounds.maxDefined;
        _d && (a = C(Math.min(f(_r, _l, _h).lo, i ? s : f(e, _l, _o.getPixelForValue(_h)).lo), 0, s - 1)), n = _u ? C(Math.max(f(_r, _o.axis, _c, !0).hi + 1, i ? 0 : f(e, _l, _o.getPixelForValue(_c), !0).hi + 1), a, s) - a : s - a;
      }
      return {
        start: a,
        count: n
      };
    }
    function At(t) {
      var _t7 = t,
        e = _t7.xScale,
        i = _t7.yScale,
        s = _t7._scaleRanges,
        a = {
          xmin: e.min,
          xmax: e.max,
          ymin: i.min,
          ymax: i.max
        };
      if (!s) return t._scaleRanges = a, !0;
      t = s.xmin !== e.min || s.xmax !== e.max || s.ymin !== i.min || s.ymax !== i.max;
      return Object.assign(s, a), t;
    }
    var l = new ( /*#__PURE__*/function () {
      function _class() {
        _classCallCheck(this, _class);
        this._request = null, this._charts = new Map(), this._running = !1, this._lastDate = void 0;
      }
      _createClass(_class, [{
        key: "_notify",
        value: function _notify(e, i, s, t) {
          var a = i.listeners[t],
            n = i.duration;
          a.forEach(function (t) {
            return t({
              chart: e,
              initial: i.initial,
              numSteps: n,
              currentStep: Math.min(s - i.start, n)
            });
          });
        }
      }, {
        key: "_refresh",
        value: function _refresh() {
          var _this = this;
          this._request || (this._running = !0, this._request = kt.call(window, function () {
            _this._update(), _this._request = null, _this._running && _this._refresh();
          }));
        }
      }, {
        key: "_update",
        value: function _update() {
          var _this2 = this;
          var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
          var r = 0;
          this._charts.forEach(function (s, a) {
            if (s.running && s.items.length) {
              var _n2 = s.items;
              var _t8,
                _e5 = _n2.length - 1,
                _i4 = !1;
              for (; 0 <= _e5; --_e5) (_t8 = _n2[_e5])._active ? (_t8._total > s.duration && (s.duration = _t8._total), _t8.tick(o), _i4 = !0) : (_n2[_e5] = _n2[_n2.length - 1], _n2.pop());
              _i4 && (a.draw(), _this2._notify(a, s, o, "progress")), _n2.length || (s.running = !1, _this2._notify(a, s, o, "complete"), s.initial = !1), r += _n2.length;
            }
          }), this._lastDate = o, 0 === r && (this._running = !1);
        }
      }, {
        key: "_getAnims",
        value: function _getAnims(t) {
          var e = this._charts;
          var i = e.get(t);
          return i || (i = {
            running: !1,
            initial: !0,
            items: [],
            listeners: {
              complete: [],
              progress: []
            }
          }, e.set(t, i)), i;
        }
      }, {
        key: "listen",
        value: function listen(t, e, i) {
          this._getAnims(t).listeners[e].push(i);
        }
      }, {
        key: "add",
        value: function add(t, e) {
          var _this$_getAnims$items;
          e && e.length && (_this$_getAnims$items = this._getAnims(t).items).push.apply(_this$_getAnims$items, _toConsumableArray(e));
        }
      }, {
        key: "has",
        value: function has(t) {
          return 0 < this._getAnims(t).items.length;
        }
      }, {
        key: "start",
        value: function start(t) {
          var e = this._charts.get(t);
          e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce(function (t, e) {
            return Math.max(t, e._duration);
          }, 0), this._refresh());
        }
      }, {
        key: "running",
        value: function running(t) {
          if (!this._running) return !1;
          t = this._charts.get(t);
          return !!(t && t.running && t.items.length);
        }
      }, {
        key: "stop",
        value: function stop(e) {
          var i = this._charts.get(e);
          if (i && i.items.length) {
            var _s4 = i.items;
            var _t9 = _s4.length - 1;
            for (; 0 <= _t9; --_t9) _s4[_t9].cancel();
            i.items = [], this._notify(e, i, Date.now(), "complete");
          }
        }
      }, {
        key: "remove",
        value: function remove(t) {
          return this._charts["delete"](t);
        }
      }]);
      return _class;
    }())();
    function Tt(t) {
      return t + 0.5 | 0;
    }
    var Lt = function Lt(t, e, i) {
      return Math.max(Math.min(t, i), e);
    };
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
        f: 15
      },
      zt = _toConsumableArray("0123456789ABCDEF"),
      Ft = function Ft(t) {
        return zt[15 & t];
      },
      Vt = function Vt(t) {
        return zt[(240 & t) >> 4] + zt[15 & t];
      },
      Bt = function Bt(t) {
        return (240 & t) >> 4 == (15 & t);
      };
    var Wt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
    function Nt(i, t, s) {
      var a = t * Math.min(s, 1 - s),
        e = function e(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (t + i / 30) % 12;
          return s - a * Math.max(Math.min(e - 3, 9 - e, 1), -1);
        };
      return [e(0), e(8), e(4)];
    }
    function Ht(_i5, s, a) {
      _i5 = function i(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (t + _i5 / 60) % 6;
        return a - a * s * Math.max(Math.min(e, 4 - e, 1), 0);
      };
      return [_i5(5), _i5(3), _i5(1)];
    }
    function jt(t, e, i) {
      var s = Nt(t, 1, 0.5);
      var a;
      for (1 < e + i && (e *= a = 1 / (e + i), i *= a), a = 0; a < 3; a++) s[a] *= 1 - e - i, s[a] += e;
      return s;
    }
    function Yt(t) {
      var e = t.r / 255,
        i = t.g / 255,
        t = t.b / 255,
        s = Math.max(e, i, t),
        a = Math.min(e, i, t),
        n = (s + a) / 2;
      var o, r, l;
      return s !== a && (l = s - a, r = 0.5 < n ? l / (2 - s - a) : l / (s + a), o = 60 * (o = (a = i, i = t, (t = e) === s ? (a - i) / l + (a < i ? 6 : 0) : a === s ? (i - t) / l + 2 : (t - a) / l + 4)) + 0.5), [0 | o, r || 0, n];
    }
    function $t(t, e, i, s) {
      return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(Rt);
    }
    function Ut(t, e, i) {
      return $t(Nt, t, e, i);
    }
    function Xt(t) {
      return (t % 360 + 360) % 360;
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
        J: "wh"
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
        LwgYF: "9acd32"
      };
    var Gt;
    var Zt = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
      Jt = function Jt(t) {
        return t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055;
      },
      Qt = function Qt(t) {
        return t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
      };
    function te(e, i, s) {
      if (e) {
        var _t10 = Yt(e);
        _t10[i] = Math.max(0, Math.min(_t10[i] + _t10[i] * s, 0 === i ? 360 : 1)), _t10 = Ut(_t10), e.r = _t10[0], e.g = _t10[1], e.b = _t10[2];
      }
    }
    function ee(t, e) {
      return t && Object.assign(e || {}, t);
    }
    function ie(t) {
      var e = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
      };
      return Array.isArray(t) ? 3 <= t.length && (e = {
        r: t[0],
        g: t[1],
        b: t[2],
        a: 255
      }, 3 < t.length && (e.a = Rt(t[3]))) : (e = ee(t, {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      })).a = Rt(e.a), e;
    }
    function se(t) {
      return ("r" === t.charAt(0) ? function (t) {
        var e = Zt.exec(t);
        var i,
          s,
          a,
          n = 255;
        if (e) {
          if (e[7] !== i) {
            var _t11 = +e[7];
            n = e[8] ? Et(_t11) : Lt(255 * _t11, 0, 255);
          }
          return i = +e[1], s = +e[3], a = +e[5], i = 255 & (e[2] ? Et(i) : Lt(i, 0, 255)), s = 255 & (e[4] ? Et(s) : Lt(s, 0, 255)), a = 255 & (e[6] ? Et(a) : Lt(a, 0, 255)), {
            r: i,
            g: s,
            b: a,
            a: n
          };
        }
      } : function (t) {
        var e,
          i,
          s,
          t = Wt.exec(t);
        var a,
          n = 255;
        if (t) return void 0 !== t[5] && (n = (t[6] ? Et : Rt)(+t[5])), e = Xt(+t[2]), i = +t[3] / 100, s = +t[4] / 100, {
          r: (a = "hwb" === t[1] ? $t(jt, e, i, s) : "hsv" === t[1] ? $t(Ht, e, i, s) : Ut(e, i, s))[0],
          g: a[1],
          b: a[2],
          a: n
        };
      })(t);
    }
    var ae = /*#__PURE__*/function () {
      function ae(t) {
        _classCallCheck(this, ae);
        if (t instanceof ae) return t;
        var e,
          i,
          s = _typeof(t);
        var a;
        "object" == s ? a = ie(t) : "string" == s && (i = (s = t).length, "#" === s[0] && (4 === i || 5 === i ? e = {
          r: 255 & 17 * n[s[1]],
          g: 255 & 17 * n[s[2]],
          b: 255 & 17 * n[s[3]],
          a: 5 === i ? 17 * n[s[4]] : 255
        } : 7 !== i && 9 !== i || (e = {
          r: n[s[1]] << 4 | n[s[2]],
          g: n[s[3]] << 4 | n[s[4]],
          b: n[s[5]] << 4 | n[s[6]],
          a: 9 === i ? n[s[7]] << 4 | n[s[8]] : 255
        })), a = e || (i = t, Gt || ((Gt = function () {
          var t = {},
            e = Object.keys(Kt),
            i = Object.keys(qt);
          var s, a, n, o, r;
          for (s = 0; s < e.length; s++) {
            for (o = r = e[s], a = 0; a < i.length; a++) n = i[a], r = r.replace(n, qt[n]);
            n = parseInt(Kt[o], 16), t[r] = [n >> 16 & 255, n >> 8 & 255, 255 & n];
          }
          return t;
        }()).transparent = [0, 0, 0, 0]), (i = Gt[i.toLowerCase()]) && {
          r: i[0],
          g: i[1],
          b: i[2],
          a: 4 === i.length ? i[3] : 255
        }) || se(t)), this._rgb = a, this._valid = !!a;
      }
      _createClass(ae, [{
        key: "valid",
        get: function get() {
          return this._valid;
        }
      }, {
        key: "rgb",
        get: function get() {
          var t = ee(this._rgb);
          return t && (t.a = o(t.a)), t;
        },
        set: function set(t) {
          this._rgb = ie(t);
        }
      }, {
        key: "rgbString",
        value: function rgbString() {
          return this._valid ? (t = this._rgb) && (t.a < 255 ? "rgba(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ", ").concat(o(t.a), ")") : "rgb(".concat(t.r, ", ").concat(t.g, ", ").concat(t.b, ")")) : void 0;
          var t;
        }
      }, {
        key: "hexString",
        value: function hexString() {
          return this._valid ? (t = this._rgb, e = t, e = Bt(e.r) && Bt(e.g) && Bt(e.b) && Bt(e.a) ? Ft : Vt, t ? "#" + e(t.r) + e(t.g) + e(t.b) + ((t = t.a) < 255 ? e(t) : "") : void 0) : void 0;
          var t, e;
        }
      }, {
        key: "hslString",
        value: function hslString() {
          if (this._valid) {
            var t,
              e,
              i,
              s = this._rgb;
            if (s) return i = Yt(s), t = i[0], e = It(i[1]), i = It(i[2]), s.a < 255 ? "hsla(".concat(t, ", ").concat(e, "%, ").concat(i, "%, ").concat(o(s.a), ")") : "hsl(".concat(t, ", ").concat(e, "%, ").concat(i, "%)");
          }
        }
      }, {
        key: "mix",
        value: function mix(t, e) {
          if (t) {
            var _s5 = this.rgb,
              _a4 = t.rgb;
            var t = void 0 === e ? 0.5 : e,
              e = 2 * t - 1,
              i = _s5.a - _a4.a,
              e = (1 + (e * i == -1 ? e : (e + i) / (1 + e * i))) / 2,
              i = 1 - e;
            _s5.r = 255 & e * _s5.r + i * _a4.r + 0.5, _s5.g = 255 & e * _s5.g + i * _a4.g + 0.5, _s5.b = 255 & e * _s5.b + i * _a4.b + 0.5, _s5.a = t * _s5.a + (1 - t) * _a4.a, this.rgb = _s5;
          }
          return this;
        }
      }, {
        key: "interpolate",
        value: function interpolate(t, e) {
          return t && (this._rgb = (i = this._rgb, t = t._rgb, e = e, s = Qt(o(i.r)), a = Qt(o(i.g)), n = Qt(o(i.b)), {
            r: Rt(Jt(s + e * (Qt(o(t.r)) - s))),
            g: Rt(Jt(a + e * (Qt(o(t.g)) - a))),
            b: Rt(Jt(n + e * (Qt(o(t.b)) - n))),
            a: i.a + e * (t.a - i.a)
          })), this;
          var i, s, a, n;
        }
      }, {
        key: "clone",
        value: function clone() {
          return new ae(this.rgb);
        }
      }, {
        key: "alpha",
        value: function alpha(t) {
          return this._rgb.a = Rt(t), this;
        }
      }, {
        key: "clearer",
        value: function clearer(t) {
          return this._rgb.a *= 1 - t, this;
        }
      }, {
        key: "greyscale",
        value: function greyscale() {
          var t = this._rgb,
            e = Tt(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
          return t.r = t.g = t.b = e, this;
        }
      }, {
        key: "opaquer",
        value: function opaquer(t) {
          return this._rgb.a *= 1 + t, this;
        }
      }, {
        key: "negate",
        value: function negate() {
          var t = this._rgb;
          return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
        }
      }, {
        key: "lighten",
        value: function lighten(t) {
          return te(this._rgb, 2, t), this;
        }
      }, {
        key: "darken",
        value: function darken(t) {
          return te(this._rgb, 2, -t), this;
        }
      }, {
        key: "saturate",
        value: function saturate(t) {
          return te(this._rgb, 1, t), this;
        }
      }, {
        key: "desaturate",
        value: function desaturate(t) {
          return te(this._rgb, 1, -t), this;
        }
      }, {
        key: "rotate",
        value: function rotate(t) {
          return e = this._rgb, t = t, (i = Yt(e))[0] = Xt(i[0] + t), i = Ut(i), e.r = i[0], e.g = i[1], e.b = i[2], this;
          var e, i;
        }
      }]);
      return ae;
    }();
    function ne(t) {
      return !(!t || "object" != _typeof(t)) && ("[object CanvasPattern]" === (t = t.toString()) || "[object CanvasGradient]" === t);
    }
    function oe(t) {
      return ne(t) ? t : new ae(t);
    }
    function re(t) {
      return ne(t) ? t : new ae(t).saturate(0.5).darken(0.1).hexString();
    }
    var le = ["x", "y", "borderWidth", "radius", "tension"],
      he = ["color", "borderColor", "backgroundColor"],
      ce = new Map();
    function de(t, e, a) {
      return function (t, e) {
        e = a || {};
        var i = t + JSON.stringify(e);
        var s = ce.get(i);
        return s || (s = new Intl.NumberFormat(t, e), ce.set(i, s)), s;
      }(e).format(t);
    }
    var ue = {
      values: function values(t) {
        return O(t) ? t : "" + t;
      },
      numeric: function numeric(t, e, i) {
        if (0 === t) return "0";
        var s = this.chart.options.locale;
        var a,
          n = t;
        if (1 < i.length) {
          var _e6 = Math.max(Math.abs(i[0].value), Math.abs(i[i.length - 1].value));
          (_e6 < 1e-4 || 1e15 < _e6) && (a = "scientific"), n = function (t) {
            var e = 3 < i.length ? i[2].value - i[1].value : i[1].value - i[0].value;
            return e = 1 <= Math.abs(e) && t !== Math.floor(t) ? t - Math.floor(t) : e;
          }(t);
        }
        var o = r(Math.abs(n)),
          o = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0),
          o = {
            notation: a,
            minimumFractionDigits: o,
            maximumFractionDigits: o
          };
        return Object.assign(o, this.options.ticks.format), de(t, s, o);
      },
      logarithmic: function logarithmic(t, e, i) {
        if (0 === t) return "0";
        var s = i[e].significand || t / Math.pow(10, Math.floor(r(t)));
        return [1, 2, 3, 5, 10, 15].includes(s) || e > 0.8 * i.length ? ue.numeric.call(this, t, e, i) : "";
      }
    };
    var ge = {
      formatters: ue
    };
    var fe = Object.create(null),
      pe = Object.create(null);
    function me(i, t) {
      if (!t) return i;
      var s = t.split(".");
      for (var _t12 = 0, _e7 = s.length; _t12 < _e7; ++_t12) {
        var a = s[_t12];
        i = i[a] || (i[a] = Object.create(null));
      }
      return i;
    }
    function be(t, e, i) {
      return "string" == typeof e ? Y(me(t, e), i) : Y(me(t, ""), e);
    }
    var R = new ( /*#__PURE__*/function () {
      function _class2(t, e) {
        _classCallCheck(this, _class2);
        this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = function (t) {
          return t.chart.platform.getDevicePixelRatio();
        }, this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = {
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          size: 12,
          style: "normal",
          lineHeight: 1.2,
          weight: null
        }, this.hover = {}, this.hoverBackgroundColor = function (t, e) {
          return re(e.backgroundColor);
        }, this.hoverBorderColor = function (t, e) {
          return re(e.borderColor);
        }, this.hoverColor = function (t, e) {
          return re(e.color);
        }, this.indexAxis = "x", this.interaction = {
          mode: "nearest",
          intersect: !0,
          includeInvisible: !1
        }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
      }
      _createClass(_class2, [{
        key: "set",
        value: function set(t, e) {
          return be(this, t, e);
        }
      }, {
        key: "get",
        value: function get(t) {
          return me(this, t);
        }
      }, {
        key: "describe",
        value: function describe(t, e) {
          return be(pe, t, e);
        }
      }, {
        key: "override",
        value: function override(t, e) {
          return be(fe, t, e);
        }
      }, {
        key: "route",
        value: function route(t, e, i, s) {
          var a = me(this, t),
            n = me(this, i),
            o = "_" + e;
          Object.defineProperties(a, _defineProperty(_defineProperty({}, o, {
            value: a[e],
            writable: !0
          }), e, {
            enumerable: !0,
            get: function get() {
              var t = this[o],
                e = n[s];
              return A(t) ? Object.assign({}, e, t) : T(t, e);
            },
            set: function set(t) {
              this[o] = t;
            }
          }));
        }
      }, {
        key: "apply",
        value: function apply(t) {
          var _this3 = this;
          t.forEach(function (t) {
            return t(_this3);
          });
        }
      }]);
      return _class2;
    }())({
      _scriptable: function _scriptable(t) {
        return !t.startsWith("on");
      },
      _indexable: function _indexable(t) {
        return "events" !== t;
      },
      hover: {
        _fallback: "interaction"
      },
      interaction: {
        _scriptable: !1,
        _indexable: !1
      }
    }, [function (t) {
      t.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0
      }), t.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: function _scriptable(t) {
          return "onProgress" !== t && "onComplete" !== t && "fn" !== t;
        }
      }), t.set("animations", {
        colors: {
          type: "color",
          properties: he
        },
        numbers: {
          type: "number",
          properties: le
        }
      }), t.describe("animations", {
        _fallback: "animation"
      }), t.set("transitions", {
        active: {
          animation: {
            duration: 400
          }
        },
        resize: {
          animation: {
            duration: 0
          }
        },
        show: {
          animations: {
            colors: {
              from: "transparent"
            },
            visible: {
              type: "boolean",
              duration: 0
            }
          }
        },
        hide: {
          animations: {
            colors: {
              to: "transparent"
            },
            visible: {
              type: "boolean",
              easing: "linear",
              fn: function fn(t) {
                return 0 | t;
              }
            }
          }
        }
      });
    }, function (t) {
      t.set("layout", {
        autoPadding: !0,
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        }
      });
    }, function (t) {
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
          tickWidth: function tickWidth(t, e) {
            return e.lineWidth;
          },
          tickColor: function tickColor(t, e) {
            return e.color;
          },
          offset: !1
        },
        border: {
          display: !0,
          dash: [],
          dashOffset: 0,
          width: 1
        },
        title: {
          display: !1,
          text: "",
          padding: {
            top: 4,
            bottom: 4
          }
        },
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
          backdropPadding: 2
        }
      }), t.route("scale.ticks", "color", "", "color"), t.route("scale.grid", "color", "", "borderColor"), t.route("scale.border", "color", "", "borderColor"), t.route("scale.title", "color", "", "color"), t.describe("scale", {
        _fallback: !1,
        _scriptable: function _scriptable(t) {
          return !t.startsWith("before") && !t.startsWith("after") && "callback" !== t && "parser" !== t;
        },
        _indexable: function _indexable(t) {
          return "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t;
        }
      }), t.describe("scales", {
        _fallback: "scale"
      }), t.describe("scale.ticks", {
        _scriptable: function _scriptable(t) {
          return "backdropPadding" !== t && "callback" !== t;
        },
        _indexable: function _indexable(t) {
          return "backdropPadding" !== t;
        }
      });
    }]);
    function xe() {
      return "undefined" != typeof window && "undefined" != typeof document;
    }
    function ve(t) {
      var e = t.parentNode;
      return e = e && "[object ShadowRoot]" === e.toString() ? e.host : e;
    }
    function _e(t, e, i) {
      var s;
      return "string" == typeof t ? (s = parseInt(t, 10), -1 !== t.indexOf("%") && (s = s / 100 * e.parentNode[i])) : s = t, s;
    }
    var ye = function ye(t) {
      return t.ownerDocument.defaultView.getComputedStyle(t, null);
    };
    function Me(t, e) {
      return ye(t).getPropertyValue(e);
    }
    var we = ["top", "right", "bottom", "left"];
    function ke(e, i, s) {
      var a = {};
      s = s ? "-" + s : "";
      for (var _t13 = 0; _t13 < 4; _t13++) {
        var n = we[_t13];
        a[n] = parseFloat(e[i + "-" + n + s]) || 0;
      }
      return a.width = a.left + a.right, a.height = a.top + a.bottom, a;
    }
    function Se(t, e) {
      if ("native" in t) return t;
      var i = e.canvas,
        s = e.currentDevicePixelRatio,
        a = ye(i),
        n = "border-box" === a.boxSizing,
        o = ke(a, "padding"),
        a = ke(a, "border", "width"),
        _ref = function (t, e) {
          var i,
            s = t.touches,
            s = s && s.length ? s[0] : t,
            _s6 = s,
            a = _s6.offsetX,
            n = _s6.offsetY;
          var o,
            r,
            l = !1;
          if (i = n, t = t.target, !(0 < a || 0 < i) || t && t.shadowRoot) {
            var _t14 = e.getBoundingClientRect();
            o = s.clientX - _t14.left, r = s.clientY - _t14.top, l = !0;
          } else o = a, r = n;
          return {
            x: o,
            y: r,
            box: l
          };
        }(t, i),
        t = _ref.x,
        r = _ref.y,
        l = _ref.box,
        h = o.left + (l && a.left),
        l = o.top + (l && a.top);
      var c = e.width,
        d = e.height;
      return n && (c -= o.width + a.width, d -= o.height + a.height), {
        x: Math.round((t - h) / c * i.width / s),
        y: Math.round((r - l) / d * i.height / s)
      };
    }
    var Pe = function Pe(t) {
      return Math.round(10 * t) / 10;
    };
    function De(t, e, i, s) {
      var a = ye(t),
        n = ke(a, "margin"),
        o = _e(a.maxWidth, t, "clientWidth") || tt,
        r = _e(a.maxHeight, t, "clientHeight") || tt,
        t = function (t, e, i) {
          var s, a;
          if (void 0 === e || void 0 === i) {
            var _n3 = ve(t);
            if (_n3) {
              var _t15 = _n3.getBoundingClientRect(),
                _o2 = ye(_n3),
                _r2 = ke(_o2, "border", "width"),
                _l2 = ke(_o2, "padding");
              e = _t15.width - _l2.width - _r2.width, i = _t15.height - _l2.height - _r2.height, s = _e(_o2.maxWidth, _n3, "clientWidth"), a = _e(_o2.maxHeight, _n3, "clientHeight");
            } else e = t.clientWidth, i = t.clientHeight;
          }
          return {
            width: e,
            height: i,
            maxWidth: s || tt,
            maxHeight: a || tt
          };
        }(t, e, i);
      var _t16 = t,
        l = _t16.width,
        h = _t16.height;
      if ("content-box" === a.boxSizing) {
        var _t17 = ke(a, "border", "width"),
          _e8 = ke(a, "padding");
        l -= _e8.width + _t17.width, h -= _e8.height + _t17.height;
      }
      return l = Math.max(0, l - n.width), h = Math.max(0, s ? l / s : h - n.height), l = Pe(Math.min(l, o, t.maxWidth)), h = Pe(Math.min(h, r, t.maxHeight)), l && !h && (h = Pe(l / 2)), (void 0 !== e || void 0 !== i) && s && t.height && h > t.height && (h = t.height, l = Pe(Math.floor(h * s))), {
        width: l,
        height: h
      };
    }
    function Ce(t, e, i) {
      var e = e || 1,
        s = Math.floor(t.height * e),
        a = Math.floor(t.width * e);
      t.height = Math.floor(t.height), t.width = Math.floor(t.width);
      var n = t.canvas;
      return n.style && (i || !n.style.height && !n.style.width) && (n.style.height = t.height + "px", n.style.width = t.width + "px"), (t.currentDevicePixelRatio !== e || n.height !== s || n.width !== a) && (t.currentDevicePixelRatio = e, n.height = s, n.width = a, t.ctx.setTransform(e, 0, 0, e, 0, 0), !0);
    }
    var Oe = function () {
      var t = !1;
      try {
        var e = {
          get passive() {
            return !(t = !0);
          }
        };
        window.addEventListener("test", null, e), window.removeEventListener("test", null, e);
      } catch (t) {}
      return t;
    }();
    function Ae(t, e) {
      var i = Me(t, e),
        s = i && i.match(/^(\d+)(\.\d+)?px$/);
      return s ? +s[1] : void 0;
    }
    function Te(t) {
      return !t || P(t.size) || P(t.family) ? null : (t.style ? t.style + " " : "") + (t.weight ? t.weight + " " : "") + t.size + "px " + t.family;
    }
    function Le(t, e, i, s, a) {
      var n = e[a];
      return n || (n = e[a] = t.measureText(a).width, i.push(a)), s = n > s ? n : s;
    }
    function Ee(t, e, i, s) {
      var a = (s = s || {}).data = s.data || {},
        n = s.garbageCollect = s.garbageCollect || [],
        o = (s.font !== e && (a = s.data = {}, n = s.garbageCollect = [], s.font = e), t.save(), t.font = e, 0);
      var r = i.length;
      var l, h, c, d, u;
      for (l = 0; l < r; l++) if (null == (d = i[l]) || O(d)) {
        if (O(d)) for (h = 0, c = d.length; h < c; h++) null == (u = d[h]) || O(u) || (o = Le(t, a, n, o, u));
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
      t = t.currentDevicePixelRatio, i = 0 !== i ? Math.max(i / 2, 0.5) : 0;
      return Math.round((e - i) * t) / t + i;
    }
    function Ie(t, e) {
      (e = e || t.getContext("2d")).save(), e.resetTransform(), e.clearRect(0, 0, t.width, t.height), e.restore();
    }
    function ze(t, e, i, s) {
      Fe(t, e, i, s, null);
    }
    function Fe(t, e, i, s, a) {
      var n, o, r, l, h, c, d, u;
      var g = e.pointStyle,
        f = e.rotation,
        p = e.radius;
      var m = (f || 0) * et;
      if (g && "object" == _typeof(g) && ("[object HTMLImageElement]" === (n = g.toString()) || "[object HTMLCanvasElement]" === n)) return t.save(), t.translate(i, s), t.rotate(m), t.drawImage(g, -g.width / 2, -g.height / 2, g.width, g.height), void t.restore();
      if (!(isNaN(p) || p <= 0)) {
        switch (t.beginPath(), g) {
          default:
            a ? t.ellipse(i, s, a / 2, p, 0, 0, _) : t.arc(i, s, p, 0, _), t.closePath();
            break;
          case "triangle":
            c = a ? a / 2 : p, t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += st, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), m += st, t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p), t.closePath();
            break;
          case "rectRounded":
            h = 0.516 * p, l = p - h, o = Math.cos(m + it) * l, d = Math.cos(m + it) * (a ? a / 2 - h : l), r = Math.sin(m + it) * l, u = Math.sin(m + it) * (a ? a / 2 - h : l), t.arc(i - d, s - r, h, m - S, m - D), t.arc(i + u, s - o, h, m - D, m), t.arc(i + d, s + r, h, m, m + D), t.arc(i - u, s + o, h, m + D, m + S), t.closePath();
            break;
          case "rect":
            if (!f) {
              l = Math.SQRT1_2 * p, c = a ? a / 2 : l, t.rect(i - c, s - l, 2 * c, 2 * l);
              break;
            }
            m += it;
          case "rectRot":
            d = Math.cos(m) * (a ? a / 2 : p), o = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (a ? a / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + u, s - o), t.lineTo(i + d, s + r), t.lineTo(i - u, s + o), t.closePath();
            break;
          case "crossRot":
            m += it;
          case "cross":
            d = Math.cos(m) * (a ? a / 2 : p), o = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (a ? a / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - o), t.lineTo(i - u, s + o);
            break;
          case "star":
            d = Math.cos(m) * (a ? a / 2 : p), o = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (a ? a / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - o), t.lineTo(i - u, s + o), m += it, d = Math.cos(m) * (a ? a / 2 : p), o = Math.cos(m) * p, r = Math.sin(m) * p, u = Math.sin(m) * (a ? a / 2 : p), t.moveTo(i - d, s - r), t.lineTo(i + d, s + r), t.moveTo(i + u, s - o), t.lineTo(i - u, s + o);
            break;
          case "line":
            o = a ? a / 2 : Math.cos(m) * p, r = Math.sin(m) * p, t.moveTo(i - o, s - r), t.lineTo(i + o, s + r);
            break;
          case "dash":
            t.moveTo(i, s), t.lineTo(i + Math.cos(m) * (a ? a / 2 : p), s + Math.sin(m) * p);
            break;
          case !1:
            t.closePath();
        }
        t.fill(), 0 < e.borderWidth && t.stroke();
      }
    }
    function M(t, e, i) {
      return i = i || 0.5, !e || t && t.x > e.left - i && t.x < e.right + i && t.y > e.top - i && t.y < e.bottom + i;
    }
    function Ve(t, e) {
      t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
    }
    function Be(t) {
      t.restore();
    }
    function We(t, e, i, s, a) {
      if (!e) return t.lineTo(i.x, i.y);
      if ("middle" === a) {
        var _s7 = (e.x + i.x) / 2;
        t.lineTo(_s7, e.y), t.lineTo(_s7, i.y);
      } else "after" === a != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
      t.lineTo(i.x, i.y);
    }
    function Ne(t, e, i, s) {
      if (!e) return t.lineTo(i.x, i.y);
      t.bezierCurveTo(s ? e.cp1x : e.cp2x, s ? e.cp1y : e.cp2y, s ? i.cp2x : i.cp1x, s ? i.cp2y : i.cp1y, i.x, i.y);
    }
    function He(t, e, i, s, a) {
      var n = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
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
      var m, b;
      for (t.save(), t.font = a.string, e = t, (g = n).translation && e.translate(g.translation[0], g.translation[1]), P(g.rotation) || e.rotate(g.rotation), g.color && (e.fillStyle = g.color), g.textAlign && (e.textAlign = g.textAlign), g.textBaseline && (e.textBaseline = g.textBaseline), m = 0; m < f.length; ++m) b = f[m], n.backdrop && (c = t, d = n.backdrop, u = void 0, u = c.fillStyle, c.fillStyle = d.color, c.fillRect(d.left, d.top, d.width, d.height), c.fillStyle = u), p && (n.strokeColor && (t.strokeStyle = n.strokeColor), P(n.strokeWidth) || (t.lineWidth = n.strokeWidth), t.strokeText(b, i, s, n.maxWidth)), t.fillText(b, i, s, n.maxWidth), d = t, c = i, u = s, o = b, h = l = void 0, ((r = n).strikethrough || r.underline) && (l = c - (o = d.measureText(o)).actualBoundingBoxLeft, c = c + o.actualBoundingBoxRight, h = u - o.actualBoundingBoxAscent, u = u + o.actualBoundingBoxDescent, o = r.strikethrough ? (h + u) / 2 : u, d.strokeStyle = d.fillStyle, d.beginPath(), d.lineWidth = r.decorationWidth || 2, d.moveTo(l, o), d.lineTo(c, o), d.stroke()), s += Number(a.lineHeight);
      t.restore();
    }
    function je(t, e) {
      var _e9 = e,
        e = _e9.x,
        i = _e9.y,
        s = _e9.w,
        a = _e9.h,
        n = _e9.radius;
      t.arc(e + n.topLeft, i + n.topLeft, n.topLeft, 1.5 * S, S, !0), t.lineTo(e, i + a - n.bottomLeft), t.arc(e + n.bottomLeft, i + a - n.bottomLeft, n.bottomLeft, S, D, !0), t.lineTo(e + s - n.bottomRight, i + a), t.arc(e + s - n.bottomRight, i + a - n.bottomRight, n.bottomRight, D, 0, !0), t.lineTo(e + s, i + n.topRight), t.arc(e + s - n.topRight, i + n.topRight, n.topRight, 0, -D, !0), t.lineTo(e + n.topLeft, i);
    }
    function Ye(r) {
      var l = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [""];
      var t = arguments.length > 2 ? arguments[2] : undefined;
      var e = arguments.length > 3 ? arguments[3] : undefined;
      var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {
        return r[0];
      };
      var i = t || r;
      void 0 === e && (e = ti("_fallback", r));
      t = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, Symbol.toStringTag, "Object"), "_cacheable", !0), "_scopes", r), "_rootScopes", i), "_fallback", e), "_getTarget", a), "override", function override(t) {
        return Ye([t].concat(_toConsumableArray(r)), l, i, e);
      });
      return new Proxy(t, {
        deleteProperty: function deleteProperty(t, e) {
          return delete t[e], delete t._keys, delete r[0][e], !0;
        },
        get: function get(n, o) {
          return Ke(n, o, function () {
            var t,
              e = o,
              i = r,
              s = n;
            var _iterator4 = _createForOfIteratorHelper(l),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _a5 = _step4.value;
                if (t = ti(Xe(_a5, e), i), void 0 !== t) return qe(e, t) ? Je(i, s, e, t) : t;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          });
        },
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
          return Reflect.getOwnPropertyDescriptor(t._scopes[0], e);
        },
        getPrototypeOf: function getPrototypeOf() {
          return Reflect.getPrototypeOf(r[0]);
        },
        has: function has(t, e) {
          return ei(t).includes(e);
        },
        ownKeys: function ownKeys(t) {
          return ei(t);
        },
        set: function set(t, e, i) {
          var s = t._storage || (t._storage = a());
          return t[e] = s[e] = i, delete t._keys, !0;
        }
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
        setContext: function setContext(t) {
          return $e(s, t, i, a);
        },
        override: function override(t) {
          return $e(s.override(t), e, i, a);
        }
      };
      return new Proxy(t, {
        deleteProperty: function deleteProperty(t, e) {
          return delete t[e], delete s[e], !0;
        },
        get: function get(r, h, c) {
          return Ke(r, h, function () {
            {
              var l = r,
                e = h,
                i = c;
              var _s8 = l._proxy,
                _a6 = l._context,
                _n4 = l._subProxy,
                _o3 = l._descriptors;
              var _t19 = _s8[e];
              return O(_t19 = u(_t19) && _o3.isScriptable(e) ? function (t, e, i) {
                var s = l._proxy,
                  a = l._context,
                  n = l._subProxy,
                  o = l._stack;
                if (o.has(t)) throw new Error("Recursion detected: " + Array.from(o).join("->") + "->" + t);
                o.add(t);
                var r = e(a, n || i);
                return o["delete"](t), r = qe(t, r) ? Je(s._scopes, s, t, r) : r;
              }(e, _t19, i) : _t19) && _t19.length && (_t19 = function (t, e, i, s) {
                var a = i._proxy,
                  n = i._context,
                  o = i._subProxy,
                  r = i._descriptors;
                if (void 0 !== n.index && s(t)) return e[n.index % e.length];
                if (A(e[0])) {
                  var _i6 = e,
                    _s9 = a._scopes.filter(function (t) {
                      return t !== _i6;
                    });
                  e = [];
                  var _iterator5 = _createForOfIteratorHelper(_i6),
                    _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _A = _step5.value;
                      var _i7 = Je(_s9, a, t, _A);
                      e.push($e(_i7, n, o && o[t], r));
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                }
                return e;
              }(e, _t19, l, _o3.isIndexable)), _t19 = qe(e, _t19) ? $e(_t19, _a6, _n4 && _n4[e], _o3) : _t19;
            }
          });
        },
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(t, e) {
          return t._descriptors.allKeys ? Reflect.has(s, e) ? {
            enumerable: !0,
            configurable: !0
          } : void 0 : Reflect.getOwnPropertyDescriptor(s, e);
        },
        getPrototypeOf: function getPrototypeOf() {
          return Reflect.getPrototypeOf(s);
        },
        has: function has(t, e) {
          return Reflect.has(s, e);
        },
        ownKeys: function ownKeys() {
          return Reflect.ownKeys(s);
        },
        set: function set(t, e, i) {
          return s[e] = i, delete t[e], !0;
        }
      });
    }
    function Ue(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        scriptable: !0,
        indexable: !0
      };
      var _t$_scriptable = t._scriptable,
        i = _t$_scriptable === void 0 ? e.scriptable : _t$_scriptable,
        _t$_indexable = t._indexable,
        s = _t$_indexable === void 0 ? e.indexable : _t$_indexable,
        _t$_allKeys = t._allKeys,
        a = _t$_allKeys === void 0 ? e.allKeys : _t$_allKeys;
      return {
        allKeys: a,
        scriptable: i,
        indexable: s,
        isScriptable: u(i) ? i : function () {
          return i;
        },
        isIndexable: u(s) ? s : function () {
          return s;
        }
      };
    }
    var Xe = function Xe(t, e) {
        return t ? t + K(e) : e;
      },
      qe = function qe(t, e) {
        return A(e) && "adapters" !== t && (null === Object.getPrototypeOf(e) || e.constructor === Object);
      };
    function Ke(t, e, i) {
      if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
      i = i();
      return t[e] = i;
    }
    function Ge(t, e, i) {
      return u(t) ? t(e, i) : t;
    }
    function Ze(t, e, i, s, a) {
      var _iterator6 = _createForOfIteratorHelper(e),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _r3 = _step6.value;
          n = i, o = _r3;
          var _e10 = !0 === n ? o : "string" == typeof n ? m(o, n) : void 0;
          if (_e10) {
            t.add(_e10);
            o = Ge(_e10._fallback, i, a);
            if (void 0 !== o && o !== i && o !== s) return o;
          } else if (!1 === _e10 && void 0 !== s && i !== s) return null;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var n, o;
      return !1;
    }
    function Je(t, s, a, n) {
      var e = s._rootScopes,
        i = Ge(s._fallback, a, n),
        o = [].concat(_toConsumableArray(t), _toConsumableArray(e)),
        r = new Set();
      r.add(n);
      t = Qe(r, o, a, i || a, n);
      return null !== t && (void 0 === i || i === a || null !== Qe(r, o, i, t, n)) && Ye(Array.from(r), [""], e, i, function () {
        {
          var t = a,
            e = n;
          var _i8 = s._getTarget();
          return t in _i8 || (_i8[t] = {}), O(t = _i8[t]) && A(e) ? e : t || {};
        }
      });
    }
    function Qe(t, e, i, s, a) {
      for (; i;) i = Ze(t, e, i, s, a);
      return i;
    }
    function ti(t, e) {
      var _iterator7 = _createForOfIteratorHelper(e),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _i9 = _step7.value;
          if (_i9) {
            var _e11 = _i9[t];
            if (void 0 !== _e11) return _e11;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    }
    function ei(t) {
      var e = t._keys;
      return e = e || (t._keys = function (t) {
        var e = new Set();
        var _iterator8 = _createForOfIteratorHelper(t),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _i10 = _step8.value;
            var _iterator9 = _createForOfIteratorHelper(Object.keys(_i10).filter(function (t) {
                return !t.startsWith("_");
              })),
              _step9;
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var _t20 = _step9.value;
                e.add(_t20);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        return Array.from(e);
      }(t._scopes));
    }
    function ii(t, e, i, s) {
      var a = t["iScale"],
        _this$_parsing$key = this._parsing.key,
        n = _this$_parsing$key === void 0 ? "r" : _this$_parsing$key,
        o = new Array(s);
      var r, l, h, c;
      for (r = 0, l = s; r < l; ++r) c = e[h = r + i], o[r] = {
        r: a.parse(m(c, n), h)
      };
      return o;
    }
    var si = Number.EPSILON || 1e-14,
      ai = function ai(t, e) {
        return e < t.length && !t[e].skip && t[e];
      },
      ni = function ni(t) {
        return "x" === t ? "y" : "x";
      };
    function oi(t, e, i, s) {
      var t = t.skip ? e : t,
        a = e,
        e = i.skip ? e : i,
        i = gt(a, t),
        n = gt(e, a);
      var o = i / (i + n),
        r = n / (i + n);
      o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
      i = s * o, n = s * r;
      return {
        previous: {
          x: a.x - i * (e.x - t.x),
          y: a.y - i * (e.y - t.y)
        },
        next: {
          x: a.x + n * (e.x - t.x),
          y: a.y + n * (e.y - t.y)
        }
      };
    }
    function ri(t) {
      var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x";
      var e = ni(n),
        i = t.length,
        r = Array(i).fill(0),
        l = Array(i);
      var s,
        a,
        o,
        h = ai(t, 0);
      for (s = 0; s < i; ++s) if (a = o, o = h, h = ai(t, s + 1), o) {
        if (h) {
          var _t21 = h[n] - o[n];
          r[s] = 0 != _t21 ? (h[e] - o[e]) / _t21 : 0;
        }
        l[s] = a ? h ? y(r[s - 1]) !== y(r[s]) ? 0 : (r[s - 1] + r[s]) / 2 : r[s - 1] : r[s];
      }
      {
        var c = t,
          d = r,
          u = l,
          g = c.length;
        var _e12,
          _i11,
          _s10,
          _a7,
          _n5,
          _o4 = ai(c, 0);
        for (var _t22 = 0; _t22 < g - 1; ++_t22) _n5 = _o4, _o4 = ai(c, _t22 + 1), _n5 && _o4 && (at(d[_t22], 0, si) ? u[_t22] = u[_t22 + 1] = 0 : (_e12 = u[_t22] / d[_t22], _i11 = u[_t22 + 1] / d[_t22], (_a7 = Math.pow(_e12, 2) + Math.pow(_i11, 2)) <= 9 || (_s10 = 3 / Math.sqrt(_a7), u[_t22] = _e12 * _s10 * d[_t22], u[_t22 + 1] = _i11 * _s10 * d[_t22])));
      }
      {
        var f = t,
          p = l,
          _n6 = n,
          m = _n6 === void 0 ? "x" : _n6;
        var _b = ni(m),
          _x = f.length;
        var _e13,
          _i12,
          _s11,
          _a8 = ai(f, 0);
        for (var _t23 = 0; _t23 < _x; ++_t23) if (_i12 = _s11, _s11 = _a8, _a8 = ai(f, _t23 + 1), _s11) {
          var _x2 = _s11[m],
            _v = _s11[_b];
          _i12 && (_e13 = (_x2 - _i12[m]) / 3, _s11["cp1" + m] = _x2 - _e13, _s11["cp1" + _b] = _v - _e13 * p[_t23]), _a8 && (_e13 = (_a8[m] - _x2) / 3, _s11["cp2" + m] = _x2 + _e13, _s11["cp2" + _b] = _v + _e13 * p[_t23]);
        }
        return;
      }
    }
    function li(t, e, i) {
      return Math.max(Math.min(t, i), e);
    }
    function hi(o, e, r, i, t) {
      var s, a, n, l;
      if (e.spanGaps && (o = o.filter(function (t) {
        return !t.skip;
      })), "monotone" === e.cubicInterpolationMode) ri(o, t);else {
        var _t24 = i ? o[o.length - 1] : o[0];
        for (s = 0, a = o.length; s < a; ++s) n = o[s], l = oi(_t24, n, o[Math.min(s + 1, a - (i ? 0 : 1)) % a], e.tension), n.cp1x = l.previous.x, n.cp1y = l.previous.y, n.cp2x = l.next.x, n.cp2y = l.next.y, _t24 = n;
      }
      if (e.capBezierPoints) {
        var h = o,
          c = r;
        var _t25,
          _e14,
          _i13,
          _s12,
          _a9,
          _n7 = M(h[0], c);
        for (_t25 = 0, _e14 = h.length; _t25 < _e14; ++_t25) _a9 = _s12, _s12 = _n7, _n7 = _t25 < _e14 - 1 && M(h[_t25 + 1], c), _s12 && (_i13 = h[_t25], _a9 && (_i13.cp1x = li(_i13.cp1x, c.left, c.right), _i13.cp1y = li(_i13.cp1y, c.top, c.bottom)), _n7 && (_i13.cp2x = li(_i13.cp2x, c.left, c.right), _i13.cp2y = li(_i13.cp2y, c.top, c.bottom)));
      }
    }
    var ci = function ci(t) {
        return 0 === t || 1 === t;
      },
      di = function di(t, e, i) {
        return -Math.pow(2, 10 * --t) * Math.sin((t - e) * _ / i);
      },
      ui = function ui(t, e, i) {
        return Math.pow(2, -10 * t) * Math.sin((t - e) * _ / i) + 1;
      },
      gi = {
        linear: function linear(t) {
          return t;
        },
        easeInQuad: function easeInQuad(t) {
          return t * t;
        },
        easeOutQuad: function easeOutQuad(t) {
          return -t * (t - 2);
        },
        easeInOutQuad: function easeInOutQuad(t) {
          return (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
        },
        easeInCubic: function easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic: function easeOutCubic(t) {
          return --t * t * t + 1;
        },
        easeInOutCubic: function easeInOutCubic(t) {
          return (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart: function easeOutQuart(t) {
          return -(--t * t * t * t - 1);
        },
        easeInOutQuart: function easeInOutQuart(t) {
          return (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint: function easeOutQuint(t) {
          return --t * t * t * t * t + 1;
        },
        easeInOutQuint: function easeInOutQuint(t) {
          return (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function easeInSine(t) {
          return 1 - Math.cos(t * D);
        },
        easeOutSine: function easeOutSine(t) {
          return Math.sin(t * D);
        },
        easeInOutSine: function easeInOutSine(t) {
          return -0.5 * (Math.cos(S * t) - 1);
        },
        easeInExpo: function easeInExpo(t) {
          return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
        },
        easeOutExpo: function easeOutExpo(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        easeInOutExpo: function easeInOutExpo(t) {
          return ci(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (2 * t - 1)) : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1)));
        },
        easeInCirc: function easeInCirc(t) {
          return 1 <= t ? t : -(Math.sqrt(1 - t * t) - 1);
        },
        easeOutCirc: function easeOutCirc(t) {
          return Math.sqrt(1 - --t * t);
        },
        easeInOutCirc: function easeInOutCirc(t) {
          return (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function easeInElastic(t) {
          return ci(t) ? t : di(t, 0.075, 0.3);
        },
        easeOutElastic: function easeOutElastic(t) {
          return ci(t) ? t : ui(t, 0.075, 0.3);
        },
        easeInOutElastic: function easeInOutElastic(t) {
          return ci(t) ? t : t < 0.5 ? 0.5 * di(2 * t, 0.1125, 0.45) : 0.5 + 0.5 * ui(2 * t - 1, 0.1125, 0.45);
        },
        easeInBack: function easeInBack(t) {
          return t * t * (2.70158 * t - 1.70158);
        },
        easeOutBack: function easeOutBack(t) {
          return --t * t * (2.70158 * t + 1.70158) + 1;
        },
        easeInOutBack: function easeInOutBack(t) {
          var e = 1.70158;
          return (t /= 0.5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        },
        easeInBounce: function easeInBounce(t) {
          return 1 - gi.easeOutBounce(1 - t);
        },
        easeOutBounce: function easeOutBounce(t) {
          var e = 7.5625,
            i = 2.75;
          return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + 0.75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + 0.9375 : e * (t -= 2.625 / i) * t + 0.984375;
        },
        easeInOutBounce: function easeInOutBounce(t) {
          return t < 0.5 ? 0.5 * gi.easeInBounce(2 * t) : 0.5 * gi.easeOutBounce(2 * t - 1) + 0.5;
        }
      };
    function fi(t, e, i, s) {
      return {
        x: t.x + i * (e.x - t.x),
        y: t.y + i * (e.y - t.y)
      };
    }
    function pi(t, e, i, s) {
      return {
        x: t.x + i * (e.x - t.x),
        y: ("middle" === s ? i < 0.5 ? t : e : "after" === s ? i < 1 ? t : e : 0 < i ? e : t).y
      };
    }
    function mi(t, e, i, s) {
      var a = {
          x: t.cp2x,
          y: t.cp2y
        },
        n = {
          x: e.cp1x,
          y: e.cp1y
        },
        t = fi(t, a, i),
        a = fi(a, n, i),
        n = fi(n, e, i),
        e = fi(t, a, i),
        t = fi(a, n, i);
      return fi(e, t, i);
    }
    var bi = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
      xi = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
    function vi(t, e) {
      var i = ("" + t).match(bi);
      if (!i || "normal" === i[1]) return 1.2 * e;
      switch (t = +i[2], i[3]) {
        case "px":
          return t;
        case "%":
          t /= 100;
      }
      return e * t;
    }
    var _i = function _i(t) {
      return +t || 0;
    };
    function yi(e, i) {
      var t = {},
        s = A(i),
        a = s ? Object.keys(i) : i,
        n = A(e) ? s ? function (t) {
          return T(e[t], e[i[t]]);
        } : function (t) {
          return e[t];
        } : function () {
          return e;
        };
      var _iterator10 = _createForOfIteratorHelper(a),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var _e15 = _step10.value;
          t[_e15] = _i(n(_e15));
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return t;
    }
    function Mi(t) {
      return yi(t, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
      });
    }
    function wi(t) {
      return yi(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
    }
    function I(t) {
      var e = Mi(t);
      return e.width = e.left + e.right, e.height = e.top + e.bottom, e;
    }
    function z(t, e) {
      e = e || R.font;
      var i = T((t = t || {}).size, e.size),
        s = ("string" == typeof i && (i = parseInt(i, 10)), T(t.style, e.style));
      s && !("" + s).match(xi) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
      var a = {
        family: T(t.family, e.family),
        lineHeight: vi(T(t.lineHeight, e.lineHeight), i),
        size: i,
        style: s,
        weight: T(t.weight, e.weight),
        string: ""
      };
      return a.string = Te(a), a;
    }
    function ki(t, e, i, s) {
      var a,
        n,
        o,
        r = !0;
      for (a = 0, n = t.length; a < n; ++a) if (void 0 !== (o = t[a]) && (void 0 !== e && "function" == typeof o && (o = o(e), r = !1), void 0 !== i && O(o) && (o = o[i % o.length], r = !1), void 0 !== o)) return s && !r && (s.cacheable = !1), o;
    }
    function Si(t, e, i) {
      var _t26 = t,
        t = _t26.min,
        s = _t26.max,
        e = B(e, (s - t) / 2),
        a = function a(t, e) {
          return i && 0 === t ? 0 : t + e;
        };
      return {
        min: a(t, -Math.abs(e)),
        max: a(s, e)
      };
    }
    function Pi(t, e) {
      return Object.assign(Object.create(t), e);
    }
    function Di(t, e, i) {
      return t ? (s = e, a = i, {
        x: function x(t) {
          return s + s + a - t;
        },
        setWidth: function setWidth(t) {
          a = t;
        },
        textAlign: function textAlign(t) {
          return "center" === t ? t : "right" === t ? "left" : "right";
        },
        xPlus: function xPlus(t, e) {
          return t - e;
        },
        leftForLtr: function leftForLtr(t, e) {
          return t - e;
        }
      }) : {
        x: function x(t) {
          return t;
        },
        setWidth: function setWidth(t) {},
        textAlign: function textAlign(t) {
          return t;
        },
        xPlus: function xPlus(t, e) {
          return t + e;
        },
        leftForLtr: function leftForLtr(t, e) {
          return t;
        }
      };
      var s, a;
    }
    function Ci(t, e) {
      var i, s;
      "ltr" !== e && "rtl" !== e || (s = [(i = t.canvas.style).getPropertyValue("direction"), i.getPropertyPriority("direction")], i.setProperty("direction", e, "important"), t.prevTextDirection = s);
    }
    function Oi(t, e) {
      void 0 !== e && (delete t.prevTextDirection, t.canvas.style.setProperty("direction", e[0], e[1]));
    }
    function Ai(t) {
      return "angle" === t ? {
        between: pt,
        compare: ft,
        normalize: v
      } : {
        between: c,
        compare: function compare(t, e) {
          return t - e;
        },
        normalize: function normalize(t) {
          return t;
        }
      };
    }
    function Ti(_ref2) {
      var t = _ref2.start,
        e = _ref2.end,
        i = _ref2.count,
        s = _ref2.loop,
        a = _ref2.style;
      return {
        start: t % i,
        end: e % i,
        loop: s && (e - t + 1) % i == 0,
        style: a
      };
    }
    function Li(t, i, g) {
      if (!g) return [t];
      var s = g.property,
        a = g.start,
        n = g.end,
        o = i.length,
        _Ai = Ai(s),
        r = _Ai.compare,
        l = _Ai.between,
        h = _Ai.normalize,
        _ref3 = function (t, e) {
          var i = g.property,
            s = g.start,
            a = g.end,
            _Ai2 = Ai(i),
            n = _Ai2.between,
            o = _Ai2.normalize,
            r = e.length;
          var l,
            h,
            c = t.start,
            d = t.end,
            u = t.loop;
          if (u) {
            for (c += r, d += r, l = 0, h = r; l < h && n(o(e[c % r][i]), s, a); ++l) c--, d--;
            c %= r, d %= r;
          }
          return d < c && (d += r), {
            start: c,
            end: d,
            loop: u,
            style: t.style
          };
        }(t, i),
        c = _ref3.start,
        d = _ref3.end,
        u = _ref3.loop,
        f = _ref3.style,
        p = [];
      var m,
        b,
        x,
        v,
        _ = null;
      for (var _t27 = c, _e16 = c; _t27 <= d; ++_t27) (b = i[_t27 % o]).skip || (m = h(b[s])) !== x && (v = l(m, a, n), null === (_ = null === _ && (v || l(a, x, m) && 0 !== r(a, x)) ? 0 === r(m, a) ? _t27 : _e16 : _) || v && 0 !== r(n, m) && !l(n, x, m) || (p.push(Ti({
        start: _,
        end: _t27,
        loop: u,
        count: o,
        style: f
      })), _ = null), _e16 = _t27, x = m);
      return null !== _ && p.push(Ti({
        start: _,
        end: d,
        loop: u,
        count: o,
        style: f
      })), p;
    }
    function Ei(e, i) {
      var s = [],
        a = e.segments;
      for (var _t28 = 0; _t28 < a.length; _t28++) {
        var n = Li(a[_t28], e.points, i);
        n.length && s.push.apply(s, _toConsumableArray(n));
      }
      return s;
    }
    function Ri(t, e) {
      var i = t.points,
        n = t.options.spanGaps,
        s = i.length;
      if (!s) return [];
      var a = !!t._loop,
        _ref4 = function (t, e, i) {
          var s = 0,
            a = e - 1;
          if (i && !n) for (; s < e && !t[s].skip;) s++;
          for (; s < e && t[s].skip;) s++;
          for (s %= e, i && (a += s); a > s && t[a % e].skip;) a--;
          return a %= e, {
            start: s,
            end: a
          };
        }(i, s, a),
        o = _ref4.start,
        r = _ref4.end;
      return Ii(t, !0 === n ? [{
        start: o,
        end: r,
        loop: a
      }] : function (t, e, i, s) {
        var a = t.length,
          n = [];
        var o,
          r = e,
          l = t[e];
        for (o = e + 1; o <= i; ++o) {
          var _i14 = t[o % a];
          _i14.skip || _i14.stop ? l.skip || (s = !1, n.push({
            start: e % a,
            end: (o - 1) % a,
            loop: s
          }), e = r = _i14.stop ? o : null) : (r = o, l.skip && (e = o)), l = _i14;
        }
        return null !== r && n.push({
          start: e % a,
          end: r % a,
          loop: s
        }), n;
      }(i, o, r < o ? r + s : r, !!t._fullLoop && 0 === o && r === s - 1), i, e);
    }
    function Ii(t, e, s, a) {
      if (a && a.setContext && s) {
        var _c2 = function _c2(t, e, i, s) {
          var a = _f ? -1 : 1;
          if (t !== e) {
            for (t += _p; l[t % _p].skip;) t -= a;
            for (; l[e % _p].skip;) e += a;
            t % _p != e % _p && (_m.push({
              start: t % _p,
              end: e % _p,
              loop: i,
              style: s
            }), _n8 = s, _o5 = e % _p);
          }
        };
        var r = t,
          t = e,
          l = s,
          h = a;
        var _d2 = r._chart.getContext(),
          _u2 = zi(r.options),
          _g = r._datasetIndex,
          _f = r.options.spanGaps,
          _p = l.length,
          _m = [];
        var _n8 = _u2,
          _o5 = t[0].start,
          _i15 = _o5;
        var _iterator11 = _createForOfIteratorHelper(t),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _r4 = _step11.value;
            _o5 = _f ? _o5 : _r4.start;
            var _t29 = void 0,
              _e17 = l[_o5 % _p];
            for (_i15 = _o5 + 1; _i15 <= _r4.end; _i15++) {
              var _f2 = l[_i15 % _p];
              (function (t, e) {
                if (!e) return;
                function i(t, e) {
                  return ne(e) ? (s.includes(e) || s.push(e), s.indexOf(e)) : e;
                }
                var s = [];
                return JSON.stringify(t, i) !== JSON.stringify(e, i);
              })(_t29 = zi(h.setContext(Pi(_d2, {
                type: "segment",
                p0: _e17,
                p1: _f2,
                p0DataIndex: (_i15 - 1) % _p,
                p1DataIndex: _i15 % _p,
                datasetIndex: _g
              }))), _n8) && _c2(_o5, _i15 - 1, _r4.loop, _n8), _e17 = _f2, _n8 = _t29;
            }
            _o5 < _i15 - 1 && _c2(_o5, _i15 - 1, _r4.loop, _n8);
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        return _m;
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
        borderColor: t.borderColor
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
      _deprecated: function _deprecated(t, e, i, s) {
        void 0 !== e && console.warn(t + ': "' + i + '" is deprecated. Please use "' + s + '" instead');
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
      fontString: function fontString(t, e, i) {
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
      valueOrDefault: T
    });
    function Vi(t, i, s, a, n) {
      var o = t.getSortedVisibleDatasetMetas(),
        r = s[i];
      for (var _t30 = 0, _e18 = o.length; _t30 < _e18; ++_t30) {
        var _o$_t = o[_t30],
          _s13 = _o$_t.index,
          _l3 = _o$_t.data,
          _ref5 = function (t, e, i, s) {
            var a = t.controller,
              n = t.data,
              o = t._sorted,
              r = a._cachedMeta.iScale;
            if (r && e === r.axis && "r" !== e && o && n.length) {
              var _t31 = r._reversePixels ? xt : f;
              if (!s) return _t31(n, e, i);
              if (a._sharedOptions) {
                var _s14 = n[0],
                  _a10 = "function" == typeof _s14.getRange && _s14.getRange(e);
                if (_a10) {
                  var _s15 = _t31(n, e, i - _a10),
                    _o6 = _t31(n, e, i + _a10);
                  return {
                    lo: _s15.lo,
                    hi: _o6.hi
                  };
                }
              }
            }
            return {
              lo: 0,
              hi: n.length - 1
            };
          }(o[_t30], i, r, n),
          _h2 = _ref5.lo,
          _c3 = _ref5.hi;
        for (var _t32 = _h2; _t32 <= _c3; ++_t32) {
          var _i16 = _l3[_t32];
          _i16.skip || a(_i16, _s13, _t32);
        }
      }
    }
    function Bi(s, a, t, n, o) {
      var r = [];
      return (o || s.isPointInArea(a)) && Vi(s, t, a, function (t, e, i) {
        (o || M(t, s.chartArea, 0)) && t.inRange(a.x, a.y, n) && r.push({
          element: t,
          datasetIndex: e,
          index: i
        });
      }, !0), r;
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
            var _n9 = [];
            var _m2 = function (t) {
              var s = -1 !== t.indexOf("x"),
                a = -1 !== t.indexOf("y");
              return function (t, e) {
                var i = s ? Math.abs(t.x - e.x) : 0,
                  t = a ? Math.abs(t.y - e.y) : 0;
                return Math.sqrt(Math.pow(i, 2) + Math.pow(t, 2));
              };
            }(c);
            var _o7 = Number.POSITIVE_INFINITY;
            return Vi(l, c, h, function (t, e, i) {
              var s,
                a = t.inRange(h.x, h.y, u);
              d && !a || (s = t.getCenterPoint(u), (g || l.isPointInArea(s) || a) && ((a = _m2(h, s)) < _o7 ? (_n9 = [{
                element: t,
                datasetIndex: e,
                index: i
              }], _o7 = a) : a === _o7 && _n9.push({
                element: t,
                datasetIndex: e,
                index: i
              })));
            }), _n9;
          }
          {
            var f = e,
              p = a;
            var _o8 = [];
            return Vi(t, i, f, function (t, e, i) {
              var _t$getProps = t.getProps(["startAngle", "endAngle"], p),
                s = _t$getProps.startAngle,
                a = _t$getProps.endAngle,
                n = ut(t, {
                  x: f.x,
                  y: f.y
                })["angle"];
              pt(n, s, a) && _o8.push({
                element: t,
                datasetIndex: e,
                index: i
              });
            }), _o8;
          }
        }
        return [];
      }
    }
    function Ni(t, s, a, e, n) {
      var o = [],
        r = "x" === a ? "inXRange" : "inYRange";
      var l = !1;
      return Vi(t, a, s, function (t, e, i) {
        t[r](s[a], n) && (o.push({
          element: t,
          datasetIndex: e,
          index: i
        }), l = l || t.inRange(s.x, s.y, n));
      }), e && !l ? [] : o;
    }
    var Hi = {
      evaluateInteractionItems: Vi,
      modes: {
        index: function index(t, e, i, s) {
          var a = Se(e, t),
            n = i.axis || "x",
            o = i.includeInvisible || !1,
            r = i.intersect ? Bi(t, a, n, s, o) : Wi(t, a, n, !1, s, o),
            l = [];
          return r.length ? (t.getSortedVisibleDatasetMetas().forEach(function (t) {
            var e = r[0].index,
              i = t.data[e];
            i && !i.skip && l.push({
              element: i,
              datasetIndex: t.index,
              index: e
            });
          }), l) : [];
        },
        dataset: function dataset(t, e, i, s) {
          var e = Se(e, t),
            a = i.axis || "xy",
            n = i.includeInvisible || !1;
          var o = i.intersect ? Bi(t, e, a, s, n) : Wi(t, e, a, !1, s, n);
          if (0 < o.length) {
            var _e19 = o[0].datasetIndex,
              _i17 = t.getDatasetMeta(_e19).data;
            o = [];
            for (var _t33 = 0; _t33 < _i17.length; ++_t33) o.push({
              element: _i17[_t33],
              datasetIndex: _e19,
              index: _t33
            });
          }
          return o;
        },
        point: function point(t, e, i, s) {
          return Bi(t, Se(e, t), i.axis || "xy", s, i.includeInvisible || !1);
        },
        nearest: function nearest(t, e, i, s) {
          var e = Se(e, t),
            a = i.axis || "xy",
            n = i.includeInvisible || !1;
          return Wi(t, e, a, i.intersect, s, n);
        },
        x: function x(t, e, i, s) {
          return Ni(t, Se(e, t), "x", i.intersect, s);
        },
        y: function y(t, e, i, s) {
          return Ni(t, Se(e, t), "y", i.intersect, s);
        }
      }
    };
    var ji = ["left", "top", "right", "bottom"];
    function Yi(t, e) {
      return t.filter(function (t) {
        return t.pos === e;
      });
    }
    function $i(t, e) {
      return t.filter(function (t) {
        return -1 === ji.indexOf(t.pos) && t.box.axis === e;
      });
    }
    function Ui(t, s) {
      return t.sort(function (t, e) {
        var i = s ? e : t,
          t = s ? t : e;
        return i.weight === t.weight ? i.index - t.index : i.weight - t.weight;
      });
    }
    function Xi(t, e, i, s) {
      return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
    }
    function qi(t, e) {
      t.top = Math.max(t.top, e.top), t.left = Math.max(t.left, e.left), t.bottom = Math.max(t.bottom, e.bottom), t.right = Math.max(t.right, e.right);
    }
    function Ki(t, e, i, s) {
      var a = [];
      var n, o, r, l, h, c;
      for (n = 0, o = t.length, h = 0; n < o; ++n) {
        r = t[n], (l = r.box).update(r.width || e.w, r.height || e.h, function (t, e) {
          var i = e.maxPadding;
          {
            var _s16 = {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            };
            return (t = t ? ["left", "right"] : ["top", "bottom"]).forEach(function (t) {
              _s16[t] = Math.max(e[t], i[t]);
            }), _s16;
          }
        }(r.horizontal, e));
        var _ref6 = function (t, e, i, s) {
            var a = i.pos,
              n = i.box,
              o = t.maxPadding;
            if (!A(a)) {
              i.size && (t[a] -= i.size);
              var _e20 = s[i.stack] || {
                size: 0,
                count: 1
              };
              _e20.size = Math.max(_e20.size, i.horizontal ? n.height : n.width), i.size = _e20.size / _e20.count, t[a] += i.size;
            }
            n.getPadding && qi(o, n.getPadding());
            var s = Math.max(0, e.outerWidth - Xi(o, t, "left", "right")),
              e = Math.max(0, e.outerHeight - Xi(o, t, "top", "bottom")),
              r = s !== t.w,
              l = e !== t.h;
            return t.w = s, t.h = e, i.horizontal ? {
              same: r,
              other: l
            } : {
              same: l,
              other: r
            };
          }(e, i, r, s),
          _o9 = _ref6.same,
          _d3 = _ref6.other;
        h |= _o9 && a.length, c = c || _d3, l.fullSize || a.push(r);
      }
      return h && Ki(a, e, i, s) || c;
    }
    function Gi(t, e, i, s, a) {
      t.top = i, t.left = e, t.right = e + s, t.bottom = i + a, t.width = s, t.height = a;
    }
    function Zi(t, e, i, s) {
      var a = i.padding;
      var n = e.x,
        o = e.y;
      var _iterator12 = _createForOfIteratorHelper(t),
        _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
          var _r5 = _step12.value;
          var _t34 = _r5.box,
            _l4 = s[_r5.stack] || {
              count: 1,
              placed: 0,
              weight: 1
            },
            _h3 = _r5.stackWeight / _l4.weight || 1;
          if (_r5.horizontal) {
            var _s17 = e.w * _h3,
              _n10 = _l4.size || _t34.height;
            G(_l4.start) && (o = _l4.start), _t34.fullSize ? Gi(_t34, a.left, o, i.outerWidth - a.right - a.left, _n10) : Gi(_t34, e.left + _l4.placed, o, _s17, _n10), _l4.start = o, _l4.placed += _s17, o = _t34.bottom;
          } else {
            var _s18 = e.h * _h3,
              _o10 = _l4.size || _t34.width;
            G(_l4.start) && (n = _l4.start), _t34.fullSize ? Gi(_t34, n, a.top, _o10, i.outerHeight - a.bottom - a.top) : Gi(_t34, n, e.top + _l4.placed, _o10, _s18), _l4.start = n, _l4.placed += _s18, n = _t34.right;
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      e.x = n, e.y = o;
    }
    var a = {
      addBox: function addBox(t, e) {
        t.boxes || (t.boxes = []), e.fullSize = e.fullSize || !1, e.position = e.position || "top", e.weight = e.weight || 0, e._layers = e._layers || function () {
          return [{
            z: 0,
            draw: function draw(t) {
              e.draw(t);
            }
          }];
        }, t.boxes.push(e);
      },
      removeBox: function removeBox(t, e) {
        e = t.boxes ? t.boxes.indexOf(e) : -1;
        -1 !== e && t.boxes.splice(e, 1);
      },
      configure: function configure(t, e, i) {
        e.fullSize = i.fullSize, e.position = i.position, e.weight = i.weight;
      },
      update: function update(l, t, e, i) {
        if (l) {
          var _o11 = I(l.options.layout.padding),
            _r6 = Math.max(t - _o11.width, 0),
            _h4 = Math.max(e - _o11.height, 0),
            _c4 = function () {
              var t = function (t) {
                  var e = [];
                  var i, s, a, n, o, r;
                  for (i = 0, s = (t || []).length; i < s; ++i) {
                    var _a11, _a11$options, _a11$options$stackWei;
                    (_a11 = a = t[i], n = _a11.position, _a11$options = _a11.options, o = _a11$options.stack, _a11$options$stackWei = _a11$options.stackWeight, r = _a11$options$stackWei === void 0 ? 1 : _a11$options$stackWei), e.push({
                      index: i,
                      box: a,
                      pos: n,
                      horizontal: a.isHorizontal(),
                      weight: a.weight,
                      stack: o && n + o,
                      stackWeight: r
                    });
                  }
                  return e;
                }(l.boxes),
                e = Ui(t.filter(function (t) {
                  return t.box.fullSize;
                }), !0),
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
                horizontal: a.concat(n).concat(o)
              };
            }(),
            _d4 = _c4.vertical,
            _u3 = _c4.horizontal;
          k(l.boxes, function (t) {
            "function" == typeof t.beforeLayout && t.beforeLayout();
          });
          var s = _d4.reduce(function (t, e) {
              return e.box.options && !1 === e.box.options.display ? t : t + 1;
            }, 0) || 1,
            t = Object.freeze({
              outerWidth: t,
              outerHeight: e,
              padding: _o11,
              availableWidth: _r6,
              availableHeight: _h4,
              vBoxMaxWidth: _r6 / 2 / s,
              hBoxMaxHeight: _h4 / 2
            }),
            e = Object.assign({}, _o11);
          qi(e, I(i));
          var _g2 = Object.assign({
              maxPadding: e,
              w: _r6,
              h: _h4,
              x: _o11.left,
              y: _o11.top
            }, _o11),
            _f3 = function (t, e) {
              var i = function (t) {
                  var e = {};
                  var _iterator13 = _createForOfIteratorHelper(t),
                    _step13;
                  try {
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                      var _i18 = _step13.value;
                      var _t35 = _i18.stack,
                        _s19 = _i18.pos,
                        _a12 = _i18.stackWeight;
                      if (_t35 && ji.includes(_s19)) {
                        var _n11 = e[_t35] || (e[_t35] = {
                          count: 0,
                          placed: 0,
                          weight: 0,
                          size: 0
                        });
                        _n11.count++, _n11.weight += _a12;
                      }
                    }
                  } catch (err) {
                    _iterator13.e(err);
                  } finally {
                    _iterator13.f();
                  }
                  return e;
                }(t),
                s = e.vBoxMaxWidth,
                a = e.hBoxMaxHeight;
              var n, o, r;
              for (n = 0, o = t.length; n < o; ++n) {
                var _o12 = (r = t[n]).box["fullSize"],
                  _l5 = i[r.stack],
                  _h5 = _l5 && r.stackWeight / _l5.weight;
                r.horizontal ? (r.width = _h5 ? _h5 * s : _o12 && e.availableWidth, r.height = a) : (r.width = s, r.height = _h5 ? _h5 * a : _o12 && e.availableHeight);
              }
              return i;
            }(_d4.concat(_u3), t);
          Ki(_c4.fullSize, _g2, t, _f3), Ki(_d4, _g2, t, _f3), Ki(_u3, _g2, t, _f3) && Ki(_d4, _g2, t, _f3);
          {
            var _n12 = function _n12(t) {
              var e = Math.max(_p2[t] - a[t], 0);
              return a[t] += e, e;
            };
            var a = _g2;
            var _p2 = a.maxPadding;
            a.y += _n12("top"), a.x += _n12("left"), _n12("right"), _n12("bottom");
          }
          Zi(_c4.leftAndTop, _g2, t, _f3), _g2.x += _g2.w, _g2.y += _g2.h, Zi(_c4.rightAndBottom, _g2, t, _f3), l.chartArea = {
            left: _g2.left,
            top: _g2.top,
            right: _g2.left + _g2.w,
            bottom: _g2.top + _g2.h,
            height: _g2.h,
            width: _g2.w
          }, k(_c4.chartArea, function (t) {
            var e = t.box;
            Object.assign(e, l.chartArea), e.update(_g2.w, _g2.h, {
              left: 0,
              top: 0,
              right: 0,
              bottom: 0
            });
          });
        }
      }
    };
    var Ji = /*#__PURE__*/function () {
      function Ji() {
        _classCallCheck(this, Ji);
      }
      _createClass(Ji, [{
        key: "acquireContext",
        value: function acquireContext(t, e) {}
      }, {
        key: "releaseContext",
        value: function releaseContext(t) {
          return !1;
        }
      }, {
        key: "addEventListener",
        value: function addEventListener(t, e, i) {}
      }, {
        key: "removeEventListener",
        value: function removeEventListener(t, e, i) {}
      }, {
        key: "getDevicePixelRatio",
        value: function getDevicePixelRatio() {
          return 1;
        }
      }, {
        key: "getMaximumSize",
        value: function getMaximumSize(t, e, i, s) {
          return e = Math.max(0, e || t.width), i = i || t.height, {
            width: e,
            height: Math.max(0, s ? Math.floor(e / s) : i)
          };
        }
      }, {
        key: "isAttached",
        value: function isAttached(t) {
          return !0;
        }
      }, {
        key: "updateConfig",
        value: function updateConfig(t) {}
      }]);
      return Ji;
    }();
    var Qi = /*#__PURE__*/function (_Ji) {
      _inherits(Qi, _Ji);
      var _super = _createSuper(Qi);
      function Qi() {
        _classCallCheck(this, Qi);
        return _super.apply(this, arguments);
      }
      _createClass(Qi, [{
        key: "acquireContext",
        value: function acquireContext(t) {
          return t && t.getContext && t.getContext("2d") || null;
        }
      }, {
        key: "updateConfig",
        value: function updateConfig(t) {
          t.options.animation = !1;
        }
      }]);
      return Qi;
    }(Ji);
    var ts = "$chartjs",
      es = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
      },
      is = function is(t) {
        return null === t || "" === t;
      },
      ss = !!Oe && {
        passive: !0
      };
    function as(t, e) {
      var _iterator14 = _createForOfIteratorHelper(t),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var _i19 = _step14.value;
          if (_i19 === e || _i19.contains(e)) return !0;
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
    }
    function ns(t, e, i) {
      var s = t.canvas,
        a = new MutationObserver(function (t) {
          var e = !1;
          var _iterator15 = _createForOfIteratorHelper(t),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var _i20 = _step15.value;
              e = e || as(_i20.addedNodes, s), e = e && !as(_i20.removedNodes, s);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
          e && i();
        });
      return a.observe(document, {
        childList: !0,
        subtree: !0
      }), a;
    }
    function os(t, e, i) {
      var s = t.canvas,
        a = new MutationObserver(function (t) {
          var e = !1;
          var _iterator16 = _createForOfIteratorHelper(t),
            _step16;
          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var _i21 = _step16.value;
              e = e || as(_i21.removedNodes, s), e = e && !as(_i21.addedNodes, s);
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
          e && i();
        });
      return a.observe(document, {
        childList: !0,
        subtree: !0
      }), a;
    }
    var rs = new Map();
    var ls = 0;
    function hs() {
      var i = window.devicePixelRatio;
      i !== ls && (ls = i, rs.forEach(function (t, e) {
        e.currentDevicePixelRatio !== i && t();
      }));
    }
    function cs(t, e, s) {
      var i = t.canvas,
        a = i && ve(i);
      if (a) {
        var _o13 = St(function (t, e) {
            var i = a.clientWidth;
            s(t, e), i < a.clientWidth && s();
          }, window),
          _r7 = new ResizeObserver(function (t) {
            var t = t[0],
              e = t.contentRect.width,
              t = t.contentRect.height;
            0 === e && 0 === t || _o13(e, t);
          });
        return _r7.observe(a), t = t, n = _o13, rs.size || window.addEventListener("resize", hs), rs.set(t, n), _r7;
        var n;
      }
    }
    function ds(t, e, i) {
      i && i.disconnect(), "resize" === e && (i = t, rs["delete"](i), rs.size || window.removeEventListener("resize", hs));
    }
    function us(e, t, i) {
      var s = e.canvas,
        a = St(function (t) {
          null !== e.ctx && i(function (t, e) {
            var i = es[t.type] || t.type,
              _Se = Se(t, e),
              s = _Se.x,
              a = _Se.y;
            return {
              type: i,
              chart: e,
              "native": t,
              x: void 0 !== s ? s : null,
              y: void 0 !== a ? a : null
            };
          }(t, e));
        }, e);
      return s.addEventListener(t, a, ss), a;
    }
    var gs = /*#__PURE__*/function (_Ji2) {
      _inherits(gs, _Ji2);
      var _super2 = _createSuper(gs);
      function gs() {
        _classCallCheck(this, gs);
        return _super2.apply(this, arguments);
      }
      _createClass(gs, [{
        key: "acquireContext",
        value: function acquireContext(t, e) {
          var i = t && t.getContext && t.getContext("2d");
          {
            if (i && i.canvas === t) {
              {
                var s = e;
                var _a13 = t.style,
                  _n13 = t.getAttribute("height"),
                  _o14 = t.getAttribute("width");
                if (t[ts] = {
                  initial: {
                    height: _n13,
                    width: _o14,
                    style: {
                      display: _a13.display,
                      height: _a13.height,
                      width: _a13.width
                    }
                  }
                }, _a13.display = _a13.display || "block", _a13.boxSizing = _a13.boxSizing || "border-box", is(_o14)) {
                  var _s20 = Ae(t, "width");
                  void 0 !== _s20 && (t.width = _s20);
                }
                if (is(_n13)) if ("" === t.style.height) t.height = t.width / (s || 2);else {
                  var _s21 = Ae(t, "height");
                  void 0 !== _s21 && (t.height = _s21);
                }
              }
              return i;
            }
            return null;
          }
        }
      }, {
        key: "releaseContext",
        value: function releaseContext(t) {
          var i = t.canvas;
          if (!i[ts]) return !1;
          var s = i[ts].initial,
            e = (["height", "width"].forEach(function (t) {
              var e = s[t];
              P(e) ? i.removeAttribute(t) : i.setAttribute(t, e);
            }), s.style || {});
          return Object.keys(e).forEach(function (t) {
            i.style[t] = e[t];
          }), i.width = i.width, delete i[ts], !0;
        }
      }, {
        key: "addEventListener",
        value: function addEventListener(t, e, i) {
          this.removeEventListener(t, e);
          var s = t.$proxies || (t.$proxies = {}),
            a = {
              attach: ns,
              detach: os,
              resize: cs
            }[e] || us;
          s[e] = a(t, e, i);
        }
      }, {
        key: "removeEventListener",
        value: function removeEventListener(t, e) {
          var i = t.$proxies || (t.$proxies = {}),
            s = i[e];
          s && (({
            attach: ds,
            detach: ds,
            resize: ds
          }[e] || function (t, e, i) {
            t.canvas.removeEventListener(e, i, ss);
          })(t, e, s), i[e] = void 0);
        }
      }, {
        key: "getDevicePixelRatio",
        value: function getDevicePixelRatio() {
          return window.devicePixelRatio;
        }
      }, {
        key: "getMaximumSize",
        value: function getMaximumSize(t, e, i, s) {
          return De(t, e, i, s);
        }
      }, {
        key: "isAttached",
        value: function isAttached(t) {
          t = ve(t);
          return !(!t || !t.isConnected);
        }
      }]);
      return gs;
    }(Ji);
    function fs(t) {
      return !xe() || "undefined" != typeof OffscreenCanvas && t instanceof OffscreenCanvas ? Qi : gs;
    }
    Oe = Object.freeze({
      __proto__: null,
      BasePlatform: Ji,
      BasicPlatform: Qi,
      DomPlatform: gs,
      _detectPlatform: fs
    });
    var ps = "transparent",
      ms = {
        "boolean": function boolean(t, e, i) {
          return 0.5 < i ? e : t;
        },
        color: function color(t, e, i) {
          var s = oe(t || ps),
            a = s.valid && oe(e || ps);
          return a && a.valid ? a.mix(s, i).hexString() : e;
        },
        number: function number(t, e, i) {
          return t + (e - t) * i;
        }
      };
    var bs = /*#__PURE__*/function () {
      function bs(t, e, i, s) {
        _classCallCheck(this, bs);
        var a = e[i],
          a = (s = ki([t.to, s, a, t.from]), ki([t.from, a, s]));
        this._active = !0, this._fn = t.fn || ms[t.type || _typeof(a)], this._easing = gi[t.easing] || gi.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = a, this._to = s, this._promises = void 0;
      }
      _createClass(bs, [{
        key: "active",
        value: function active() {
          return this._active;
        }
      }, {
        key: "update",
        value: function update(t, e, i) {
          var s, a, n;
          this._active && (this._notify(!1), s = this._target[this._prop], a = i - this._start, n = this._duration - a, this._start = i, this._duration = Math.floor(Math.max(n, t.duration)), this._total += a, this._loop = !!t.loop, this._to = ki([t.to, e, s, t.from]), this._from = ki([t.from, s, e]));
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
        }
      }, {
        key: "tick",
        value: function tick(t) {
          var t = t - this._start,
            e = this._duration,
            i = this._prop,
            s = this._from,
            a = this._loop,
            n = this._to;
          var o;
          if (this._active = s !== n && (a || t < e), !this._active) return this._target[i] = n, void this._notify(!0);
          t < 0 ? this._target[i] = s : (o = t / e % 2, o = a && 1 < o ? 2 - o : o, o = this._easing(Math.min(1, Math.max(0, o))), this._target[i] = this._fn(s, n, o));
        }
      }, {
        key: "wait",
        value: function wait() {
          var i = this._promises || (this._promises = []);
          return new Promise(function (t, e) {
            i.push({
              res: t,
              rej: e
            });
          });
        }
      }, {
        key: "_notify",
        value: function _notify(t) {
          var e = t ? "res" : "rej",
            i = this._promises || [];
          for (var _t36 = 0; _t36 < i.length; _t36++) i[_t36][e]();
        }
      }]);
      return bs;
    }();
    var xs = /*#__PURE__*/function () {
      function xs(t, e) {
        _classCallCheck(this, xs);
        this._chart = t, this._properties = new Map(), this.configure(e);
      }
      _createClass(xs, [{
        key: "configure",
        value: function configure(s) {
          if (A(s)) {
            var _a14 = Object.keys(R.animation),
              _n14 = this._properties;
            Object.getOwnPropertyNames(s).forEach(function (e) {
              var t = s[e];
              if (A(t)) {
                var _i22 = {};
                for (var _i23 = 0, _a15 = _a14; _i23 < _a15.length; _i23++) {
                  var _s22 = _a15[_i23];
                  _i22[_s22] = t[_s22];
                }
                (O(t.properties) && t.properties || [e]).forEach(function (t) {
                  t !== e && _n14.has(t) || _n14.set(t, _i22);
                });
              }
            });
          }
        }
      }, {
        key: "_animateOptions",
        value: function _animateOptions(t, e) {
          var i = e.options,
            s = function (e, i) {
              if (i) {
                var _t37 = e.options;
                if (_t37) return _t37.$shared && (e.options = _t37 = Object.assign({}, _t37, {
                  $shared: !1,
                  $animations: {}
                })), _t37;
                e.options = i;
              }
            }(t, i);
          if (!s) return [];
          e = this._createAnimations(s, i);
          return i.$shared && function (e, t) {
            var i = [],
              s = Object.keys(t);
            for (var _t38 = 0; _t38 < s.length; _t38++) {
              var _a16 = e[s[_t38]];
              _a16 && _a16.active() && i.push(_a16.wait());
            }
            return Promise.all(i);
          }(t.options.$animations, i).then(function () {
            t.options = i;
          }, function () {}), e;
        }
      }, {
        key: "_createAnimations",
        value: function _createAnimations(e, i) {
          var s = this._properties,
            a = [],
            n = e.$animations || (e.$animations = {}),
            t = Object.keys(i),
            o = Date.now();
          var r;
          for (r = t.length - 1; 0 <= r; --r) {
            var _c5 = t[r];
            if ("$" !== _c5.charAt(0)) if ("options" === _c5) a.push.apply(a, _toConsumableArray(this._animateOptions(e, i)));else {
              var l = i[_c5];
              var _t39 = n[_c5];
              var h = s.get(_c5);
              if (_t39) {
                if (h && _t39.active()) {
                  _t39.update(h, l, o);
                  continue;
                }
                _t39.cancel();
              }
              h && h.duration ? (n[_c5] = _t39 = new bs(h, e, _c5, l), a.push(_t39)) : e[_c5] = l;
            }
          }
          return a;
        }
      }, {
        key: "update",
        value: function update(t, e) {
          {
            if (0 !== this._properties.size) return (t = this._createAnimations(t, e)).length ? (l.add(this._chart, t), !0) : void 0;
            Object.assign(t, e);
          }
        }
      }]);
      return xs;
    }();
    function vs(t, e) {
      var t = t && t.options || {},
        i = t.reverse,
        s = void 0 === t.min ? e : 0,
        t = void 0 === t.max ? e : 0;
      return {
        start: i ? t : s,
        end: i ? s : t
      };
    }
    function _s(t, e) {
      var i = [],
        s = t._getSortedDatasetMetas(e);
      var a, n;
      for (a = 0, n = s.length; a < n; ++a) i.push(s[a].index);
      return i;
    }
    function ys(t, e, i) {
      var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var a = t.keys,
        n = "single" === s.mode;
      var o, r, l, h;
      if (null !== e) {
        for (o = 0, r = a.length; o < r; ++o) {
          if ((l = +a[o]) === i) {
            if (s.all) continue;
            break;
          }
          p(h = t.values[l]) && (n || 0 === e || y(e) === y(h)) && (e += h);
        }
        return e;
      }
    }
    function Ms(t, e) {
      t = t && t.options.stacked;
      return t || void 0 === t && void 0 !== e.stack;
    }
    function ws(t, e, i, s) {
      var _iterator17 = _createForOfIteratorHelper(e.getMatchingVisibleMetas(s).reverse()),
        _step17;
      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var _a17 = _step17.value;
          var _e21 = t[_a17.index];
          if (i && 0 < _e21 || !i && _e21 < 0) return _a17.index;
        }
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
      return null;
    }
    function ks(t, e) {
      var i = t.chart,
        s = t._cachedMeta,
        a = i._stacks || (i._stacks = {}),
        n = s.iScale,
        o = s.vScale,
        r = s.index,
        l = n.axis,
        h = o.axis,
        c = "".concat(n.id, ".").concat(o.id, ".") + (s.stack || s.type),
        d = e.length;
      var u;
      for (var _t40 = 0; _t40 < d; ++_t40) {
        var _i24 = e[_t40],
          _n15 = _i24[l],
          _d5 = _i24[h];
        (u = (_i24._stacks || (_i24._stacks = {}))[h] = function (t, e, i) {
          var s = t[e] || (t[e] = {});
          return s[i] || (s[i] = {});
        }(a, c, _n15))[r] = _d5, u._top = ws(u, o, !0, s.type), u._bottom = ws(u, o, !1, s.type), (u._visualValues || (u._visualValues = {}))[r] = _d5;
      }
    }
    function Ss(t, e) {
      var i = t.scales;
      return Object.keys(i).filter(function (t) {
        return i[t].axis === e;
      }).shift();
    }
    function Ps(t, e) {
      var i = t.controller.index,
        s = t.vScale && t.vScale.axis;
      if (s) {
        e = e || t._parsed;
        var _iterator18 = _createForOfIteratorHelper(e),
          _step18;
        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var _t41 = _step18.value;
            var _e22 = _t41._stacks;
            if (!_e22 || void 0 === _e22[s] || void 0 === _e22[s][i]) return;
            delete _e22[s][i], void 0 !== _e22[s]._visualValues && void 0 !== _e22[s]._visualValues[i] && delete _e22[s]._visualValues[i];
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
      }
    }
    var Ds = function Ds(t) {
        return "reset" === t || "none" === t;
      },
      Cs = function Cs(t, e) {
        return e ? t : Object.assign({}, t);
      };
    var Os = /*#__PURE__*/function () {
      function Os(t, e) {
        _classCallCheck(this, Os);
        this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = (this instanceof Os ? this.constructor : void 0).datasetElementType, this.dataElementType = (this instanceof Os ? this.constructor : void 0).dataElementType, this.initialize();
      }
      _createClass(Os, [{
        key: "initialize",
        value: function initialize() {
          var t = this._cachedMeta;
          this.configure(), this.linkScales(), t._stacked = Ms(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
        }
      }, {
        key: "updateIndex",
        value: function updateIndex(t) {
          this.index !== t && Ps(this._cachedMeta), this.index = t;
        }
      }, {
        key: "linkScales",
        value: function linkScales() {
          var t = this.chart,
            e = this._cachedMeta,
            i = this.getDataset(),
            s = function s(t, e, i, _s23) {
              return "x" === t ? e : "r" === t ? _s23 : i;
            },
            a = e.xAxisID = T(i.xAxisID, Ss(t, "x")),
            n = e.yAxisID = T(i.yAxisID, Ss(t, "y")),
            o = e.rAxisID = T(i.rAxisID, Ss(t, "r")),
            r = e.indexAxis,
            l = e.iAxisID = s(r, a, n, o),
            h = e.vAxisID = s(r, n, a, o);
          e.xScale = this.getScaleForId(a), e.yScale = this.getScaleForId(n), e.rScale = this.getScaleForId(o), e.iScale = this.getScaleForId(l), e.vScale = this.getScaleForId(h);
        }
      }, {
        key: "getDataset",
        value: function getDataset() {
          return this.chart.data.datasets[this.index];
        }
      }, {
        key: "getMeta",
        value: function getMeta() {
          return this.chart.getDatasetMeta(this.index);
        }
      }, {
        key: "getScaleForId",
        value: function getScaleForId(t) {
          return this.chart.scales[t];
        }
      }, {
        key: "_getOtherScale",
        value: function _getOtherScale(t) {
          var e = this._cachedMeta;
          return t === e.iScale ? e.vScale : e.iScale;
        }
      }, {
        key: "reset",
        value: function reset() {
          this._update("reset");
        }
      }, {
        key: "_destroy",
        value: function _destroy() {
          var t = this._cachedMeta;
          this._data && Mt(this._data, this), t._stacked && Ps(t);
        }
      }, {
        key: "_dataCheck",
        value: function _dataCheck() {
          var t = this.getDataset(),
            e = t.data || (t.data = []),
            i = this._data;
          if (A(e)) this._data = function (t) {
            var e = Object.keys(t),
              i = new Array(e.length);
            var s, a, n;
            for (s = 0, a = e.length; s < a; ++s) n = e[s], i[s] = {
              x: n,
              y: t[n]
            };
            return i;
          }(e);else if (i !== e) {
            if (i) {
              Mt(i, this);
              var _t42 = this._cachedMeta;
              Ps(_t42), _t42._parsed = [];
            }
            e && Object.isExtensible(e) && yt(e, this), this._syncList = [], this._data = e;
          }
        }
      }, {
        key: "addElements",
        value: function addElements() {
          var t = this._cachedMeta;
          this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
        }
      }, {
        key: "buildOrUpdateElements",
        value: function buildOrUpdateElements(t) {
          var e = this._cachedMeta,
            i = this.getDataset();
          var s = !1;
          this._dataCheck();
          var a = e._stacked;
          e._stacked = Ms(e.vScale, e), e.stack !== i.stack && (s = !0, Ps(e), e.stack = i.stack), this._resyncElements(t), !s && a === e._stacked || ks(this, e._parsed);
        }
      }, {
        key: "configure",
        value: function configure() {
          var t = this.chart.config,
            e = t.datasetScopeKeys(this._type),
            i = t.getOptionScopes(this.getDataset(), e, !0);
          this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
        }
      }, {
        key: "parse",
        value: function parse(t, e) {
          var i = this._cachedMeta,
            s = this._data,
            a = i.iScale,
            n = i._stacked,
            o = a.axis;
          var r,
            l,
            h,
            c = 0 === t && e === s.length || i._sorted,
            d = 0 < t && i._parsed[t - 1];
          if (!1 === this._parsing) i._parsed = s, i._sorted = !0, h = s;else {
            h = O(s[t]) ? this.parseArrayData(i, s, t, e) : A(s[t]) ? this.parseObjectData(i, s, t, e) : this.parsePrimitiveData(i, s, t, e);
            var _a18 = function _a18() {
              return null === l[o] || d && l[o] < d[o];
            };
            for (r = 0; r < e; ++r) i._parsed[r + t] = l = h[r], c && (_a18() && (c = !1), d = l);
            i._sorted = c;
          }
          n && ks(this, h);
        }
      }, {
        key: "parsePrimitiveData",
        value: function parsePrimitiveData(t, e, i, s) {
          var a = t.iScale,
            n = t.vScale,
            o = a.axis,
            r = n.axis,
            l = a.getLabels(),
            h = a === n,
            c = new Array(s);
          var d, u, g;
          for (d = 0, u = s; d < u; ++d) g = d + i, c[d] = _defineProperty(_defineProperty({}, o, h || a.parse(l[g], g)), r, n.parse(e[g], g));
          return c;
        }
      }, {
        key: "parseArrayData",
        value: function parseArrayData(t, e, i, s) {
          var a = t.xScale,
            n = t.yScale,
            o = new Array(s);
          var r, l, h, c;
          for (r = 0, l = s; r < l; ++r) c = e[h = r + i], o[r] = {
            x: a.parse(c[0], h),
            y: n.parse(c[1], h)
          };
          return o;
        }
      }, {
        key: "parseObjectData",
        value: function parseObjectData(t, e, i, s) {
          var a = t.xScale,
            n = t.yScale,
            _this$_parsing = this._parsing,
            _this$_parsing$xAxisK = _this$_parsing.xAxisKey,
            o = _this$_parsing$xAxisK === void 0 ? "x" : _this$_parsing$xAxisK,
            _this$_parsing$yAxisK = _this$_parsing.yAxisKey,
            r = _this$_parsing$yAxisK === void 0 ? "y" : _this$_parsing$yAxisK,
            l = new Array(s);
          var h, c, d, u;
          for (h = 0, c = s; h < c; ++h) u = e[d = h + i], l[h] = {
            x: a.parse(m(u, o), d),
            y: n.parse(m(u, r), d)
          };
          return l;
        }
      }, {
        key: "getParsed",
        value: function getParsed(t) {
          return this._cachedMeta._parsed[t];
        }
      }, {
        key: "getDataElement",
        value: function getDataElement(t) {
          return this._cachedMeta.data[t];
        }
      }, {
        key: "applyStack",
        value: function applyStack(t, e, i) {
          var s = this.chart,
            a = this._cachedMeta,
            n = e[t.axis];
          return ys({
            keys: _s(s, !0),
            values: e._stacks[t.axis]._visualValues
          }, n, a.index, {
            mode: i
          });
        }
      }, {
        key: "updateRangeFromParsed",
        value: function updateRangeFromParsed(t, e, i, s) {
          var a = i[e.axis];
          var n = null === a ? NaN : a;
          i = s && i._stacks[e.axis];
          s && i && (s.values = i, n = ys(s, a, this._cachedMeta.index)), t.min = Math.min(t.min, n), t.max = Math.max(t.max, n);
        }
      }, {
        key: "getMinMax",
        value: function getMinMax(e, t) {
          var i = this._cachedMeta,
            s = i._parsed,
            a = i._sorted && e === i.iScale,
            n = s.length,
            o = this._getOtherScale(e),
            r = (d = this.chart, t && !i.hidden && i._stacked && {
              keys: _s(d, !0),
              values: null
            }),
            l = {
              min: Number.POSITIVE_INFINITY,
              max: Number.NEGATIVE_INFINITY
            },
            _ref7 = function () {
              var _o$getUserBounds2 = o.getUserBounds(),
                t = _o$getUserBounds2.min,
                e = _o$getUserBounds2.max,
                i = _o$getUserBounds2.minDefined,
                s = _o$getUserBounds2.maxDefined;
              return {
                min: i ? t : Number.NEGATIVE_INFINITY,
                max: s ? e : Number.POSITIVE_INFINITY
              };
            }(),
            h = _ref7.min,
            c = _ref7.max;
          var d;
          var u, g;
          function f() {
            var t = (g = s[u])[o.axis];
            return !p(g[e.axis]) || h > t || c < t;
          }
          for (u = 0; u < n && (f() || (this.updateRangeFromParsed(l, e, g, r), !a)); ++u);
          if (a) for (u = n - 1; 0 <= u; --u) if (!f()) {
            this.updateRangeFromParsed(l, e, g, r);
            break;
          }
          return l;
        }
      }, {
        key: "getAllParsedValues",
        value: function getAllParsedValues(t) {
          var e = this._cachedMeta._parsed,
            i = [];
          var s, a, n;
          for (s = 0, a = e.length; s < a; ++s) p(n = e[s][t.axis]) && i.push(n);
          return i;
        }
      }, {
        key: "getMaxOverflow",
        value: function getMaxOverflow() {
          return !1;
        }
      }, {
        key: "getLabelAndValue",
        value: function getLabelAndValue(t) {
          var e = this._cachedMeta,
            i = e.iScale,
            s = e.vScale,
            a = this.getParsed(t);
          return {
            label: i ? "" + i.getLabelForValue(a[i.axis]) : "",
            value: s ? "" + s.getLabelForValue(a[s.axis]) : ""
          };
        }
      }, {
        key: "_update",
        value: function _update(t) {
          var e = this._cachedMeta;
          this.update(t || "default"), e._clip = function (t) {
            var e, i, s, a;
            return A(t) ? (e = t.top, i = t.right, s = t.bottom, a = t.left) : e = i = s = a = t, {
              top: e,
              right: i,
              bottom: s,
              left: a,
              disabled: !1 === t
            };
          }(T(this.options.clip, function (t, e, i) {
            if (!1 === i) return !1;
            t = vs(t, i), e = vs(e, i);
            return {
              top: e.end,
              right: t.end,
              bottom: e.start,
              left: t.start
            };
          }(e.xScale, e.yScale, this.getMaxOverflow())));
        }
      }, {
        key: "update",
        value: function update(t) {}
      }, {
        key: "draw",
        value: function draw() {
          var t = this._ctx,
            e = this.chart,
            i = this._cachedMeta,
            s = i.data || [],
            a = e.chartArea,
            n = [],
            o = this._drawStart || 0,
            r = this._drawCount || s.length - o,
            l = this.options.drawActiveElementsOnTop;
          var h;
          for (i.dataset && i.dataset.draw(t, a, o, r), h = o; h < o + r; ++h) {
            var _e23 = s[h];
            _e23.hidden || (_e23.active && l ? n.push(_e23) : _e23.draw(t, a));
          }
          for (h = 0; h < n.length; ++h) n[h].draw(t, a);
        }
      }, {
        key: "getStyle",
        value: function getStyle(t, e) {
          e = e ? "active" : "default";
          return void 0 === t && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(e) : this.resolveDataElementOptions(t || 0, e);
        }
      }, {
        key: "getContext",
        value: function getContext(t, e, i) {
          var s,
            a = this.getDataset();
          var n;
          if (0 <= t && t < this._cachedMeta.data.length) {
            var _e24 = this._cachedMeta.data[t];
            (n = _e24.$context || (_e24.$context = Pi(this.getContext(), {
              active: !1,
              dataIndex: t,
              parsed: void 0,
              raw: void 0,
              element: _e24,
              index: t,
              mode: "default",
              type: "data"
            }))).parsed = this.getParsed(t), n.raw = a.data[t], n.index = n.dataIndex = t;
          } else (n = this.$context || (this.$context = (t = this.chart.getContext(), s = this.index, Pi(t, {
            active: !1,
            dataset: void 0,
            datasetIndex: s,
            index: s,
            mode: "default",
            type: "dataset"
          })))).dataset = a, n.index = n.datasetIndex = this.index;
          return n.active = !!e, n.mode = i, n;
        }
      }, {
        key: "resolveDatasetElementOptions",
        value: function resolveDatasetElementOptions(t) {
          return this._resolveElementOptions(this.datasetElementType.id, t);
        }
      }, {
        key: "resolveDataElementOptions",
        value: function resolveDataElementOptions(t, e) {
          return this._resolveElementOptions(this.dataElementType.id, e, t);
        }
      }, {
        key: "_resolveElementOptions",
        value: function _resolveElementOptions(t) {
          var _this4 = this;
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default";
          var i = arguments.length > 2 ? arguments[2] : undefined;
          var s = "active" === e,
            a = this._cachedDataOpts,
            n = t + "-" + e,
            o = a[n],
            r = this.enableOptionSharing && G(i);
          if (o) return Cs(o, r);
          var l = this.chart.config,
            h = l.datasetElementScopeKeys(this._type, t),
            c = s ? [t + "Hover", "hover", t, ""] : [t, ""],
            d = l.getOptionScopes(this.getDataset(), h),
            u = Object.keys(R.elements[t]),
            g = l.resolveNamedOptions(d, u, function () {
              return _this4.getContext(i, s, e);
            }, c);
          return g.$shared && (g.$shared = r, a[n] = Object.freeze(Cs(g, r))), g;
        }
      }, {
        key: "_resolveAnimations",
        value: function _resolveAnimations(t, e, i) {
          var s = this.chart,
            a = this._cachedDataOpts,
            n = "animation-" + e,
            o = a[n];
          if (o) return o;
          var r;
          if (!1 !== s.options.animation) {
            var _s24 = this.chart.config,
              _a19 = _s24.datasetAnimationScopeKeys(this._type, e),
              _n16 = _s24.getOptionScopes(this.getDataset(), _a19);
            r = _s24.createResolver(_n16, this.getContext(t, i, e));
          }
          t = new xs(s, r && r.animations);
          return r && r._cacheable && (a[n] = Object.freeze(t)), t;
        }
      }, {
        key: "getSharedOptions",
        value: function getSharedOptions(t) {
          if (t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
        }
      }, {
        key: "includeOptions",
        value: function includeOptions(t, e) {
          return !e || Ds(t) || this.chart._animationsDisabled;
        }
      }, {
        key: "_getSharedOptions",
        value: function _getSharedOptions(t, e) {
          var t = this.resolveDataElementOptions(t, e),
            i = this._sharedOptions,
            s = this.getSharedOptions(t),
            i = this.includeOptions(e, s) || s !== i;
          return this.updateSharedOptions(s, e, t), {
            sharedOptions: s,
            includeOptions: i
          };
        }
      }, {
        key: "updateElement",
        value: function updateElement(t, e, i, s) {
          Ds(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
        }
      }, {
        key: "updateSharedOptions",
        value: function updateSharedOptions(t, e, i) {
          t && !Ds(e) && this._resolveAnimations(void 0, e).update(t, i);
        }
      }, {
        key: "_setStyle",
        value: function _setStyle(t, e, i, s) {
          t.active = s;
          var a = this.getStyle(e, s);
          this._resolveAnimations(e, i, s).update(t, {
            options: !s && this.getSharedOptions(a) || a
          });
        }
      }, {
        key: "removeHoverStyle",
        value: function removeHoverStyle(t, e, i) {
          this._setStyle(t, i, "active", !1);
        }
      }, {
        key: "setHoverStyle",
        value: function setHoverStyle(t, e, i) {
          this._setStyle(t, i, "active", !0);
        }
      }, {
        key: "_removeDatasetHoverStyle",
        value: function _removeDatasetHoverStyle() {
          var t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, "active", !1);
        }
      }, {
        key: "_setDatasetHoverStyle",
        value: function _setDatasetHoverStyle() {
          var t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, "active", !0);
        }
      }, {
        key: "_resyncElements",
        value: function _resyncElements(t) {
          var e = this._data,
            i = this._cachedMeta.data;
          var _iterator19 = _createForOfIteratorHelper(this._syncList),
            _step19;
          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var _step19$value = _slicedToArray(_step19.value, 3),
                _t43 = _step19$value[0],
                _e25 = _step19$value[1],
                _i25 = _step19$value[2];
              this[_t43](_e25, _i25);
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }
          this._syncList = [];
          var s = i.length,
            a = e.length,
            n = Math.min(a, s);
          n && this.parse(0, n), s < a ? this._insertElements(s, a - s, t) : a < s && this._removeElements(a, s - a);
        }
      }, {
        key: "_insertElements",
        value: function _insertElements(t, e) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          var s = this._cachedMeta,
            a = s.data,
            n = t + e;
          var o;
          var r = function r(t) {
            for (t.length += e, o = t.length - 1; o >= n; o--) t[o] = t[o - e];
          };
          for (r(a), o = t; o < n; ++o) a[o] = new this.dataElementType();
          this._parsing && r(s._parsed), this.parse(t, e), i && this.updateElements(a, t, e, "reset");
        }
      }, {
        key: "updateElements",
        value: function updateElements(t, e, i, s) {}
      }, {
        key: "_removeElements",
        value: function _removeElements(t, e) {
          var i = this._cachedMeta;
          var s;
          this._parsing && (s = i._parsed.splice(t, e), i._stacked && Ps(i, s)), i.data.splice(t, e);
        }
      }, {
        key: "_sync",
        value: function _sync(t) {
          var _t44;
          var e, i, s;
          this._parsing ? this._syncList.push(t) : ((_t44 = _slicedToArray(t, 3), e = _t44[0], i = _t44[1], s = _t44[2]), this[e](i, s)), this.chart._dataChanges.push([this.index].concat(_toConsumableArray(t)));
        }
      }, {
        key: "_onDataPush",
        value: function _onDataPush() {
          var t = arguments.length;
          this._sync(["_insertElements", this.getDataset().data.length - t, t]);
        }
      }, {
        key: "_onDataPop",
        value: function _onDataPop() {
          this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
        }
      }, {
        key: "_onDataShift",
        value: function _onDataShift() {
          this._sync(["_removeElements", 0, 1]);
        }
      }, {
        key: "_onDataSplice",
        value: function _onDataSplice(t, e) {
          e && this._sync(["_removeElements", t, e]);
          e = arguments.length - 2;
          e && this._sync(["_insertElements", t, e]);
        }
      }, {
        key: "_onDataUnshift",
        value: function _onDataUnshift() {
          this._sync(["_insertElements", 0, arguments.length]);
        }
      }]);
      return Os;
    }();
    _defineProperty(Os, "defaults", {});
    _defineProperty(Os, "datasetElementType", null);
    _defineProperty(Os, "dataElementType", null);
    var e = /*#__PURE__*/function () {
      function e() {
        _classCallCheck(this, e);
        _defineProperty(this, "x", void 0);
        _defineProperty(this, "y", void 0);
        _defineProperty(this, "active", !1);
        _defineProperty(this, "options", void 0);
        _defineProperty(this, "$animations", void 0);
      }
      _createClass(e, [{
        key: "tooltipPosition",
        value: function tooltipPosition(t) {
          var _this$getProps = this.getProps(["x", "y"], t),
            t = _this$getProps.x,
            _e26 = _this$getProps.y;
          return {
            x: t,
            y: _e26
          };
        }
      }, {
        key: "hasValue",
        value: function hasValue() {
          return rt(this.x) && rt(this.y);
        }
      }, {
        key: "getProps",
        value: function getProps(t, _e27) {
          var _this5 = this;
          var i = this.$animations;
          if (!_e27 || !i) return this;
          var s = {};
          return t.forEach(function (t) {
            s[t] = i[t] && i[t].active() ? i[t]._to : _this5[t];
          }), s;
        }
      }]);
      return e;
    }();
    _defineProperty(e, "defaults", {});
    _defineProperty(e, "defaultRoutes", void 0);
    function As(t, e, i, s, a) {
      var n = T(s, 0),
        o = Math.min(T(a, t.length), t.length);
      var r,
        l,
        h,
        c = 0;
      for (i = Math.ceil(i), a && (i = (r = a - s) / Math.floor(r / i)), h = n; h < 0;) c++, h = Math.round(n + c * i);
      for (l = Math.max(n, 0); l < o; l++) l === h && (e.push(t[l]), c++, h = Math.round(n + c * i));
    }
    var Ts = function Ts(t, e, i) {
        return "top" === e || "left" === e ? t[e] + i : t[e] - i;
      },
      Ls = function Ls(t, e) {
        return Math.min(e || t, t);
      };
    function Es(t, e) {
      var i = [],
        s = t.length / e,
        a = t.length;
      var n = 0;
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
    var zs = /*#__PURE__*/function (_e28) {
      _inherits(zs, _e28);
      var _super3 = _createSuper(zs);
      function zs(t) {
        var _this6;
        _classCallCheck(this, zs);
        _this6 = _super3.call(this), _this6.id = t.id, _this6.type = t.type, _this6.options = void 0, _this6.ctx = t.ctx, _this6.chart = t.chart, _this6.top = void 0, _this6.bottom = void 0, _this6.left = void 0, _this6.right = void 0, _this6.width = void 0, _this6.height = void 0, _this6._margins = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, _this6.maxWidth = void 0, _this6.maxHeight = void 0, _this6.paddingTop = void 0, _this6.paddingBottom = void 0, _this6.paddingLeft = void 0, _this6.paddingRight = void 0, _this6.axis = void 0, _this6.labelRotation = void 0, _this6.min = void 0, _this6.max = void 0, _this6._range = void 0, _this6.ticks = [], _this6._gridLineItems = null, _this6._labelItems = null, _this6._labelSizes = null, _this6._length = 0, _this6._maxLength = 0, _this6._longestTextCache = {}, _this6._startPixel = void 0, _this6._endPixel = void 0, _this6._reversePixels = !1, _this6._userMax = void 0, _this6._userMin = void 0, _this6._suggestedMax = void 0, _this6._suggestedMin = void 0, _this6._ticksLength = 0, _this6._borderValue = 0, _this6._cache = {}, _this6._dataLimitsCached = !1, _this6.$context = void 0;
        return _this6;
      }
      _createClass(zs, [{
        key: "init",
        value: function init(t) {
          this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
        }
      }, {
        key: "parse",
        value: function parse(t, e) {
          return t;
        }
      }, {
        key: "getUserBounds",
        value: function getUserBounds() {
          var t = this._userMin,
            e = this._userMax,
            i = this._suggestedMin,
            s = this._suggestedMax,
            t = g(t, Number.POSITIVE_INFINITY),
            e = g(e, Number.NEGATIVE_INFINITY),
            i = g(i, Number.POSITIVE_INFINITY),
            s = g(s, Number.NEGATIVE_INFINITY);
          return {
            min: g(t, i),
            max: g(e, s),
            minDefined: p(t),
            maxDefined: p(e)
          };
        }
      }, {
        key: "getMinMax",
        value: function getMinMax(i) {
          var s,
            _this$getUserBounds = this.getUserBounds(),
            a = _this$getUserBounds.min,
            n = _this$getUserBounds.max,
            o = _this$getUserBounds.minDefined,
            r = _this$getUserBounds.maxDefined;
          if (o && r) return {
            min: a,
            max: n
          };
          var l = this.getMatchingVisibleMetas();
          for (var _t45 = 0, _e29 = l.length; _t45 < _e29; ++_t45) s = l[_t45].controller.getMinMax(this, i), o || (a = Math.min(a, s.min)), r || (n = Math.max(n, s.max));
          return a = r && a > n ? n : a, n = o && a > n ? a : n, {
            min: g(a, g(n, a)),
            max: g(n, g(a, n))
          };
        }
      }, {
        key: "getPadding",
        value: function getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
          };
        }
      }, {
        key: "getTicks",
        value: function getTicks() {
          return this.ticks;
        }
      }, {
        key: "getLabels",
        value: function getLabels() {
          var t = this.chart.data;
          return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
        }
      }, {
        key: "getLabelItems",
        value: function getLabelItems() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.chart.chartArea;
          return this._labelItems || (this._labelItems = this._computeLabelItems(t));
        }
      }, {
        key: "beforeLayout",
        value: function beforeLayout() {
          this._cache = {}, this._dataLimitsCached = !1;
        }
      }, {
        key: "beforeUpdate",
        value: function beforeUpdate() {
          d(this.options.beforeUpdate, [this]);
        }
      }, {
        key: "update",
        value: function update(t, e, i) {
          var _this$options = this.options,
            s = _this$options.beginAtZero,
            a = _this$options.grace,
            n = _this$options.ticks,
            o = n.sampleSize,
            t = (this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Si(this, a, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks(), o < this.ticks.length);
          this._convertTicksToLabels(t ? Es(this.ticks, o) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), n.display && (n.autoSkip || "auto" === n.source) && (this.ticks = function (t, s) {
            var e = t.options.ticks,
              i = (c = (t = t).options.offset, d = t._tickSize(), c = t._length / d + (c ? 0 : 1), t = t._maxLength / d, Math.floor(Math.min(c, t))),
              a = Math.min(e.maxTicksLimit || i, i),
              n = e.major.enabled ? function (t) {
                var e = [];
                var i, s;
                for (i = 0, s = t.length; i < s; i++) t[i].major && e.push(i);
                return e;
              }(s) : [],
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
                var _t46,
                  _e30 = 0,
                  _i26 = f[0];
                for (p = Math.ceil(p), _t46 = 0; _t46 < u.length; _t46++) _t46 === _i26 && (g.push(u[_t46]), _e30++, _i26 = f[_e30 * p]);
              }
              return h;
            }
            var m = function (t, i, e) {
              var t = function (t) {
                  var e = t.length;
                  var i, s;
                  if (e < 2) return !1;
                  for (s = t[0], i = 1; i < e; ++i) if (t[i] - t[i - 1] !== s) return !1;
                  return s;
                }(t),
                s = i.length / e;
              if (!t) return Math.max(s, 1);
              var a = ot(t);
              for (var _t47 = 0, _e31 = a.length - 1; _t47 < _e31; _t47++) {
                var _i27 = a[_t47];
                if (_i27 > s) return _i27;
              }
              return Math.max(s, 1);
            }(n, s, a);
            if (0 < o) {
              var _t48, _e32;
              var _i28 = 1 < o ? Math.round((l - r) / (o - 1)) : null;
              for (As(s, h, m, P(_i28) ? 0 : r - _i28, r), _t48 = 0, _e32 = o - 1; _t48 < _e32; _t48++) As(s, h, m, n[_t48], n[_t48 + 1]);
              return As(s, h, m, l, P(_i28) ? s.length : l + _i28), h;
            }
            return As(s, h, m), h;
          }(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), t && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
        }
      }, {
        key: "configure",
        value: function configure() {
          var t,
            e,
            i = this.options.reverse;
          this.isHorizontal() ? (t = this.left, e = this.right) : (t = this.top, e = this.bottom, i = !i), this._startPixel = t, this._endPixel = e, this._reversePixels = i, this._length = e - t, this._alignToPixels = this.options.alignToPixels;
        }
      }, {
        key: "afterUpdate",
        value: function afterUpdate() {
          d(this.options.afterUpdate, [this]);
        }
      }, {
        key: "beforeSetDimensions",
        value: function beforeSetDimensions() {
          d(this.options.beforeSetDimensions, [this]);
        }
      }, {
        key: "setDimensions",
        value: function setDimensions() {
          this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
        }
      }, {
        key: "afterSetDimensions",
        value: function afterSetDimensions() {
          d(this.options.afterSetDimensions, [this]);
        }
      }, {
        key: "_callHooks",
        value: function _callHooks(t) {
          this.chart.notifyPlugins(t, this.getContext()), d(this.options[t], [this]);
        }
      }, {
        key: "beforeDataLimits",
        value: function beforeDataLimits() {
          this._callHooks("beforeDataLimits");
        }
      }, {
        key: "determineDataLimits",
        value: function determineDataLimits() {}
      }, {
        key: "afterDataLimits",
        value: function afterDataLimits() {
          this._callHooks("afterDataLimits");
        }
      }, {
        key: "beforeBuildTicks",
        value: function beforeBuildTicks() {
          this._callHooks("beforeBuildTicks");
        }
      }, {
        key: "buildTicks",
        value: function buildTicks() {
          return [];
        }
      }, {
        key: "afterBuildTicks",
        value: function afterBuildTicks() {
          this._callHooks("afterBuildTicks");
        }
      }, {
        key: "beforeTickToLabelConversion",
        value: function beforeTickToLabelConversion() {
          d(this.options.beforeTickToLabelConversion, [this]);
        }
      }, {
        key: "generateTickLabels",
        value: function generateTickLabels(t) {
          var e = this.options.ticks;
          var i, s, a;
          for (i = 0, s = t.length; i < s; i++) (a = t[i]).label = d(e.callback, [a.value, i, t], this);
        }
      }, {
        key: "afterTickToLabelConversion",
        value: function afterTickToLabelConversion() {
          d(this.options.afterTickToLabelConversion, [this]);
        }
      }, {
        key: "beforeCalculateLabelRotation",
        value: function beforeCalculateLabelRotation() {
          d(this.options.beforeCalculateLabelRotation, [this]);
        }
      }, {
        key: "calculateLabelRotation",
        value: function calculateLabelRotation() {
          var t,
            e,
            i,
            s,
            a = this.options,
            n = a.ticks,
            o = Ls(this.ticks.length, a.ticks.maxTicksLimit),
            r = n.minRotation || 0,
            l = n.maxRotation;
          var h,
            c,
            d,
            u = r;
          !this._isVisible() || !n.display || l <= r || o <= 1 || !this.isHorizontal() ? this.labelRotation = r : (e = (t = this._getLabelSizes()).widest.width, i = t.highest.height, s = C(this.chart.width - e, 0, this.maxWidth), (a.offset ? this.maxWidth / o : s / (o - 1)) < e + 6 && (h = s / (o - (a.offset ? 0.5 : 1)), c = this.maxHeight - Rs(a.grid) - n.padding - Is(a.title, this.chart.options.font), d = Math.sqrt(e * e + i * i), u = ct(Math.min(Math.asin(C((t.highest.height + 6) / h, -1, 1)), Math.asin(C(c / d, -1, 1)) - Math.asin(C(i / d, -1, 1)))), u = Math.max(r, Math.min(l, u))), this.labelRotation = u);
        }
      }, {
        key: "afterCalculateLabelRotation",
        value: function afterCalculateLabelRotation() {
          d(this.options.afterCalculateLabelRotation, [this]);
        }
      }, {
        key: "afterAutoSkip",
        value: function afterAutoSkip() {}
      }, {
        key: "beforeFit",
        value: function beforeFit() {
          d(this.options.beforeFit, [this]);
        }
      }, {
        key: "fit",
        value: function fit() {
          var t = {
              width: 0,
              height: 0
            },
            e = this.chart,
            _this$options2 = this.options,
            i = _this$options2.ticks,
            s = _this$options2.title,
            a = _this$options2.grid,
            n = this._isVisible(),
            o = this.isHorizontal();
          if (n) {
            var _n17 = Is(s, e.options.font);
            if (o ? (t.width = this.maxWidth, t.height = Rs(a) + _n17) : (t.height = this.maxHeight, t.width = Rs(a) + _n17), i.display && this.ticks.length) {
              var _this$_getLabelSizes = this._getLabelSizes(),
                _e33 = _this$_getLabelSizes.first,
                _s25 = _this$_getLabelSizes.last,
                _a20 = _this$_getLabelSizes.widest,
                _n18 = _this$_getLabelSizes.highest,
                _r8 = 2 * i.padding,
                _l6 = L(this.labelRotation),
                _h6 = Math.cos(_l6),
                _c6 = Math.sin(_l6);
              if (o) {
                var _e34 = i.mirror ? 0 : _c6 * _a20.width + _h6 * _n18.height;
                t.height = Math.min(this.maxHeight, t.height + _e34 + _r8);
              } else {
                var _e35 = i.mirror ? 0 : _h6 * _a20.width + _c6 * _n18.height;
                t.width = Math.min(this.maxWidth, t.width + _e35 + _r8);
              }
              this._calculatePadding(_e33, _s25, _c6, _h6);
            }
          }
          this._handleMargins(), o ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
        }
      }, {
        key: "_calculatePadding",
        value: function _calculatePadding(i, s, a, n) {
          var _this$options3 = this.options,
            _this$options3$ticks = _this$options3.ticks,
            o = _this$options3$ticks.align,
            r = _this$options3$ticks.padding,
            l = _this$options3.position,
            h = 0 !== this.labelRotation,
            c = "top" !== l && "x" === this.axis;
          if (this.isHorizontal()) {
            var _l7 = this.getPixelForTick(0) - this.left,
              _d6 = this.right - this.getPixelForTick(this.ticks.length - 1);
            var _t49 = 0,
              _e36 = 0;
            h ? _e36 = c ? (_t49 = n * i.width, a * s.height) : (_t49 = a * i.height, n * s.width) : "start" === o ? _e36 = s.width : "end" === o ? _t49 = i.width : "inner" !== o && (_t49 = i.width / 2, _e36 = s.width / 2), this.paddingLeft = Math.max((_t49 - _l7 + r) * this.width / (this.width - _l7), 0), this.paddingRight = Math.max((_e36 - _d6 + r) * this.width / (this.width - _d6), 0);
          } else {
            var _t50 = s.height / 2,
              _e37 = i.height / 2;
            "start" === o ? (_t50 = 0, _e37 = i.height) : "end" === o && (_t50 = s.height, _e37 = 0), this.paddingTop = _t50 + r, this.paddingBottom = _e37 + r;
          }
        }
      }, {
        key: "_handleMargins",
        value: function _handleMargins() {
          this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
        }
      }, {
        key: "afterFit",
        value: function afterFit() {
          d(this.options.afterFit, [this]);
        }
      }, {
        key: "isHorizontal",
        value: function isHorizontal() {
          var _this$options4 = this.options,
            t = _this$options4.axis,
            e = _this$options4.position;
          return "top" === e || "bottom" === e || "x" === t;
        }
      }, {
        key: "isFullSize",
        value: function isFullSize() {
          return this.options.fullSize;
        }
      }, {
        key: "_convertTicksToLabels",
        value: function _convertTicksToLabels(t) {
          var e, i;
          for (this.beforeTickToLabelConversion(), this.generateTickLabels(t), e = 0, i = t.length; e < i; e++) P(t[e].label) && (t.splice(e, 1), i--, e--);
          this.afterTickToLabelConversion();
        }
      }, {
        key: "_getLabelSizes",
        value: function _getLabelSizes() {
          var e = this._labelSizes;
          if (!e) {
            var i = this.options.ticks.sampleSize;
            var _t51 = this.ticks;
            i < _t51.length && (_t51 = Es(_t51, i)), this._labelSizes = e = this._computeLabelSizes(_t51, _t51.length, this.options.ticks.maxTicksLimit);
          }
          return e;
        }
      }, {
        key: "_computeLabelSizes",
        value: function _computeLabelSizes(t, e, i) {
          var s = this.ctx,
            a = this._longestTextCache,
            n = [],
            o = [],
            r = Math.floor(e / Ls(e, i));
          var l,
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
            if (d = t[l].label, u = this._resolveTickFontOptions(l), s.font = g = u.string, f = a[g] = a[g] || {
              data: {},
              gc: []
            }, p = u.lineHeight, m = b = 0, P(d) || O(d)) {
              if (O(d)) for (h = 0, c = d.length; h < c; ++h) P(x = d[h]) || O(x) || (m = Le(s, f.data, f.gc, m, x), b += p);
            } else m = Le(s, f.data, f.gc, m, d), b = p;
            n.push(m), o.push(b), v = Math.max(m, v), _ = Math.max(b, _);
          }
          i = a, y = e, k(i, function (t) {
            var e = t.gc,
              i = e.length / 2;
            var s;
            if (y < i) {
              for (s = 0; s < i; ++s) delete t.data[e[s]];
              e.splice(0, i);
            }
          });
          var y,
            i = n.indexOf(v),
            M = o.indexOf(_),
            w = function w(t) {
              return {
                width: n[t] || 0,
                height: o[t] || 0
              };
            };
          return {
            first: w(0),
            last: w(e - 1),
            widest: w(i),
            highest: w(M),
            widths: n,
            heights: o
          };
        }
      }, {
        key: "getLabelForValue",
        value: function getLabelForValue(t) {
          return t;
        }
      }, {
        key: "getPixelForValue",
        value: function getPixelForValue(t, e) {
          return NaN;
        }
      }, {
        key: "getValueForPixel",
        value: function getValueForPixel(t) {}
      }, {
        key: "getPixelForTick",
        value: function getPixelForTick(t) {
          var e = this.ticks;
          return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
        }
      }, {
        key: "getPixelForDecimal",
        value: function getPixelForDecimal(t) {
          this._reversePixels && (t = 1 - t);
          t = this._startPixel + t * this._length;
          return mt(this._alignToPixels ? Re(this.chart, t, 0) : t);
        }
      }, {
        key: "getDecimalForPixel",
        value: function getDecimalForPixel(t) {
          t = (t - this._startPixel) / this._length;
          return this._reversePixels ? 1 - t : t;
        }
      }, {
        key: "getBasePixel",
        value: function getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }
      }, {
        key: "getBaseValue",
        value: function getBaseValue() {
          var t = this.min,
            e = this.max;
          return t < 0 && e < 0 ? e : 0 < t && 0 < e ? t : 0;
        }
      }, {
        key: "getContext",
        value: function getContext(t) {
          var e = this.ticks || [];
          if (0 <= t && t < e.length) {
            var _i29 = e[t];
            return _i29.$context || (_i29.$context = Pi(this.getContext(), {
              tick: _i29,
              index: t,
              type: "tick"
            }));
          }
          return this.$context || (this.$context = Pi(this.chart.getContext(), {
            scale: this,
            type: "scale"
          }));
        }
      }, {
        key: "_tickSize",
        value: function _tickSize() {
          var t = this.options.ticks,
            e = L(this.labelRotation),
            i = Math.abs(Math.cos(e)),
            e = Math.abs(Math.sin(e)),
            s = this._getLabelSizes(),
            t = t.autoSkipPadding || 0,
            a = s ? s.widest.width + t : 0,
            s = s ? s.highest.height + t : 0;
          return this.isHorizontal() ? a * e < s * i ? a / i : s / e : s * e < a * i ? s / i : a / e;
        }
      }, {
        key: "_isVisible",
        value: function _isVisible() {
          var t = this.options.display;
          return "auto" !== t ? !!t : 0 < this.getMatchingVisibleMetas().length;
        }
      }, {
        key: "_computeGridLineItems",
        value: function _computeGridLineItems(t) {
          function e(t) {
            return Re(s, t, f);
          }
          var i = this.axis,
            s = this.chart,
            a = this.options,
            n = a.grid,
            o = a.position,
            r = a.border,
            l = n.offset,
            h = this.isHorizontal(),
            c = this.ticks.length + (l ? 1 : 0),
            d = Rs(n),
            u = [],
            g = r.setContext(this.getContext()),
            f = g.display ? g.width : 0,
            p = f / 2;
          var m, b, x, v, _, y, M, w, k, S, P, D;
          if ("top" === o) m = e(this.bottom), y = this.bottom - d, w = m - p, S = e(t.top) + p, D = t.bottom;else if ("bottom" === o) m = e(this.top), S = t.top, D = e(t.bottom) - p, y = m + p, w = this.top + d;else if ("left" === o) m = e(this.right), _ = this.right - d, M = m - p, k = e(t.left) + p, P = t.right;else if ("right" === o) m = e(this.left), k = t.left, P = e(t.right) - p, _ = m + p, M = this.left + d;else if ("x" === i) {
            if ("center" === o) m = e((t.top + t.bottom) / 2 + 0.5);else if (A(o)) {
              var _t52 = Object.keys(o)[0],
                _i30 = o[_t52];
              m = e(this.chart.scales[_t52].getPixelForValue(_i30));
            }
            S = t.top, D = t.bottom, y = m + p, w = y + d;
          } else if ("y" === i) {
            if ("center" === o) m = e((t.left + t.right) / 2);else if (A(o)) {
              var _t53 = Object.keys(o)[0],
                _i31 = o[_t53];
              m = e(this.chart.scales[_t53].getPixelForValue(_i31));
            }
            _ = m - p, M = _ - d, k = t.left, P = t.right;
          }
          var t = T(a.ticks.maxTicksLimit, c),
            C = Math.max(1, Math.ceil(c / t));
          for (b = 0; b < c; b += C) {
            var _t54 = this.getContext(b),
              _i32 = n.setContext(_t54),
              _a21 = r.setContext(_t54),
              _A2 = _i32.lineWidth,
              _o15 = _i32.color,
              _T = _a21.dash || [],
              _c7 = _a21.dashOffset,
              _d7 = _i32.tickWidth,
              _g3 = _i32.tickColor,
              _f4 = _i32.tickBorderDash || [],
              _p3 = _i32.tickBorderDashOffset;
            void 0 !== (x = function (t, e, i) {
              var s = t.ticks.length,
                a = Math.min(e, s - 1),
                n = t._startPixel,
                o = t._endPixel;
              var r,
                l = t.getPixelForTick(a);
              if (!(i && (r = 1 === s ? Math.max(l - n, o - l) : 0 === e ? (t.getPixelForTick(1) - l) / 2 : (l - t.getPixelForTick(a - 1)) / 2, (l += a < e ? r : -r) < n - 1e-6 || l > o + 1e-6))) return l;
            }(this, b, l)) && (v = Re(s, x, _A2), h ? _ = M = k = P = v : y = w = S = D = v, u.push({
              tx1: _,
              ty1: y,
              tx2: M,
              ty2: w,
              x1: k,
              y1: S,
              x2: P,
              y2: D,
              width: _A2,
              color: _o15,
              borderDash: _T,
              borderDashOffset: _c7,
              tickWidth: _d7,
              tickColor: _g3,
              tickBorderDash: _f4,
              tickBorderDashOffset: _p3
            }));
          }
          return this._ticksLength = c, this._borderValue = m, u;
        }
      }, {
        key: "_computeLabelItems",
        value: function _computeLabelItems(s) {
          var a = this.axis,
            n = this.options,
            o = n.position,
            e = n.ticks,
            r = this.isHorizontal(),
            l = this.ticks,
            h = e.align,
            c = e.crossAlign,
            t = e.padding,
            d = e.mirror,
            i = Rs(n.grid),
            u = i + t,
            g = d ? -t : u,
            f = -L(this.labelRotation),
            p = [];
          var m,
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
          if ("top" === o) _ = this.bottom - g, y = this._getXAxisLabelAlignment();else if ("bottom" === o) _ = this.top + g, y = this._getXAxisLabelAlignment();else if ("left" === o) {
            var _s26 = this._getYAxisLabelAlignment(i);
            y = _s26.textAlign, v = _s26.x;
          } else if ("right" === o) {
            var _s27 = this._getYAxisLabelAlignment(i);
            y = _s27.textAlign, v = _s27.x;
          } else if ("x" === a) {
            if ("center" === o) _ = (s.top + s.bottom) / 2 + u;else if (A(o)) {
              var _s28 = Object.keys(o)[0],
                _a22 = o[_s28];
              _ = this.chart.scales[_s28].getPixelForValue(_a22) + u;
            }
            y = this._getXAxisLabelAlignment();
          } else if ("y" === a) {
            if ("center" === o) v = (s.left + s.right) / 2 - u;else if (A(o)) {
              var _s29 = Object.keys(o)[0],
                _a23 = o[_s29];
              v = this.chart.scales[_s29].getPixelForValue(_a23);
            }
            y = this._getYAxisLabelAlignment(i).textAlign;
          }
          "y" === a && ("start" === h ? D = "top" : "end" === h && (D = "bottom"));
          var C = this._getLabelSizes();
          for (m = 0, b = l.length; m < b; ++m) {
            x = l[m].label;
            var _s30 = e.setContext(this.getContext(m)),
              _a24 = (M = this.getPixelForTick(m) + e.labelOffset, k = (w = this._resolveTickFontOptions(m)).lineHeight, (S = O(x) ? x.length : 1) / 2),
              _n19 = _s30.color,
              _A3 = _s30.textStrokeColor,
              _h7 = _s30.textStrokeWidth;
            var _i33 = void 0,
              _t55 = y;
            if (r ? (v = M, "inner" === y && (_t55 = m === b - 1 ? this.options.reverse ? "left" : "right" : 0 === m ? this.options.reverse ? "right" : "left" : "center"), P = "top" === o ? "near" === c || 0 != f ? -S * k + k / 2 : "center" === c ? -C.highest.height / 2 - _a24 * k + k : -C.highest.height + k / 2 : "near" === c || 0 != f ? k / 2 : "center" === c ? C.highest.height / 2 - _a24 * k : C.highest.height - S * k, d && (P *= -1), 0 == f || _s30.showLabelBackdrop || (v += k / 2 * Math.sin(f))) : (_ = M, P = (1 - S) * k / 2), _s30.showLabelBackdrop) {
              var _a25 = I(_s30.backdropPadding),
                _n20 = C.heights[m],
                _o16 = C.widths[m];
              var _t56 = P - _a25.top,
                _e38 = 0 - _a25.left;
              switch (D) {
                case "middle":
                  _t56 -= _n20 / 2;
                  break;
                case "bottom":
                  _t56 -= _n20;
              }
              switch (y) {
                case "center":
                  _e38 -= _o16 / 2;
                  break;
                case "right":
                  _e38 -= _o16;
              }
              _i33 = {
                left: _e38,
                top: _t56,
                width: _o16 + _a25.width,
                height: _n20 + _a25.height,
                color: _s30.backdropColor
              };
            }
            p.push({
              label: x,
              font: w,
              textOffset: P,
              options: {
                rotation: f,
                color: _n19,
                strokeColor: _A3,
                strokeWidth: _h7,
                textAlign: _t55,
                textBaseline: D,
                translation: [v, _],
                backdrop: _i33
              }
            });
          }
          return p;
        }
      }, {
        key: "_getXAxisLabelAlignment",
        value: function _getXAxisLabelAlignment() {
          var _this$options5 = this.options,
            t = _this$options5.position,
            e = _this$options5.ticks;
          if (-L(this.labelRotation)) return "top" === t ? "left" : "right";
          var i = "center";
          return "start" === e.align ? i = "left" : "end" === e.align ? i = "right" : "inner" === e.align && (i = "inner"), i;
        }
      }, {
        key: "_getYAxisLabelAlignment",
        value: function _getYAxisLabelAlignment(t) {
          var _this$options6 = this.options,
            e = _this$options6.position,
            _this$options6$ticks = _this$options6.ticks,
            i = _this$options6$ticks.crossAlign,
            s = _this$options6$ticks.mirror,
            a = _this$options6$ticks.padding,
            t = t + a,
            n = this._getLabelSizes().widest.width;
          var o, r;
          return "left" === e ? s ? (r = this.right + a, "near" === i ? o = "left" : "center" === i ? (o = "center", r += n / 2) : (o = "right", r += n)) : (r = this.right - t, "near" === i ? o = "right" : "center" === i ? (o = "center", r -= n / 2) : (o = "left", r = this.left)) : "right" === e ? s ? (r = this.left + a, "near" === i ? o = "right" : "center" === i ? (o = "center", r -= n / 2) : (o = "left", r -= n)) : (r = this.left + t, "near" === i ? o = "left" : "center" === i ? (o = "center", r += n / 2) : (o = "right", r = this.right)) : o = "right", {
            textAlign: o,
            x: r
          };
        }
      }, {
        key: "_computeLabelArea",
        value: function _computeLabelArea() {
          var t, e;
          if (!this.options.ticks.mirror) return t = this.chart, e = this.options.position, "left" === e || "right" === e ? {
            top: 0,
            left: this.left,
            bottom: t.height,
            right: this.right
          } : "top" === e || "bottom" === e ? {
            top: this.top,
            left: 0,
            bottom: this.bottom,
            right: t.width
          } : void 0;
        }
      }, {
        key: "drawBackground",
        value: function drawBackground() {
          var t = this.ctx,
            e = this.options.backgroundColor,
            i = this.left,
            s = this.top,
            a = this.width,
            n = this.height;
          e && (t.save(), t.fillStyle = e, t.fillRect(i, s, a, n), t.restore());
        }
      }, {
        key: "getLineWidthForValue",
        value: function getLineWidthForValue(e) {
          var t = this.options.grid;
          if (!this._isVisible() || !t.display) return 0;
          var i = this.ticks.findIndex(function (t) {
            return t.value === e;
          });
          return 0 <= i ? t.setContext(this.getContext(i)).lineWidth : 0;
        }
      }, {
        key: "drawGrid",
        value: function drawGrid(t) {
          var e = this.options.grid,
            s = this.ctx,
            i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
          var a, n;
          var o = function o(t, e, i) {
            i.width && i.color && (s.save(), s.lineWidth = i.width, s.strokeStyle = i.color, s.setLineDash(i.borderDash || []), s.lineDashOffset = i.borderDashOffset, s.beginPath(), s.moveTo(t.x, t.y), s.lineTo(e.x, e.y), s.stroke(), s.restore());
          };
          if (e.display) for (a = 0, n = i.length; a < n; ++a) {
            var _t57 = i[a];
            e.drawOnChartArea && o({
              x: _t57.x1,
              y: _t57.y1
            }, {
              x: _t57.x2,
              y: _t57.y2
            }, _t57), e.drawTicks && o({
              x: _t57.tx1,
              y: _t57.ty1
            }, {
              x: _t57.tx2,
              y: _t57.ty2
            }, {
              color: _t57.tickColor,
              width: _t57.tickWidth,
              borderDash: _t57.tickBorderDash,
              borderDashOffset: _t57.tickBorderDashOffset
            });
          }
        }
      }, {
        key: "drawBorder",
        value: function drawBorder() {
          var a = this.chart,
            n = this.ctx,
            _this$options7 = this.options,
            t = _this$options7.border,
            o = _this$options7.grid,
            r = t.setContext(this.getContext()),
            l = t.display ? r.width : 0;
          if (l) {
            var h = o.setContext(this.getContext(0)).lineWidth,
              c = this._borderValue;
            var _t58, _e39, _i34, _s31;
            this.isHorizontal() ? (_t58 = Re(a, this.left, l) - l / 2, _e39 = Re(a, this.right, h) + h / 2, _i34 = _s31 = c) : (_i34 = Re(a, this.top, l) - l / 2, _s31 = Re(a, this.bottom, h) + h / 2, _t58 = _e39 = c), n.save(), n.lineWidth = r.width, n.strokeStyle = r.color, n.beginPath(), n.moveTo(_t58, _i34), n.lineTo(_e39, _s31), n.stroke(), n.restore();
          }
        }
      }, {
        key: "drawLabels",
        value: function drawLabels(t) {
          if (this.options.ticks.display) {
            var _e40 = this.ctx,
              _i35 = this._computeLabelArea(),
              _s32 = (_i35 && Ve(_e40, _i35), this.getLabelItems(t));
            var _iterator20 = _createForOfIteratorHelper(_s32),
              _step20;
            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var _t59 = _step20.value;
                var _i36 = _t59.options,
                  _s33 = _t59.font;
                He(_e40, _t59.label, 0, _t59.textOffset, _s33, _i36);
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
            _i35 && Be(_e40);
          }
        }
      }, {
        key: "drawTitle",
        value: function drawTitle() {
          var e = this.ctx,
            _this$options8 = this.options,
            i = _this$options8.position,
            s = _this$options8.title,
            a = _this$options8.reverse;
          if (s.display) {
            var n = z(s.font),
              o = I(s.padding),
              r = s.align;
            var _t60 = n.lineHeight / 2;
            "bottom" === i || "center" === i || A(i) ? (_t60 += o.bottom, O(s.text) && (_t60 += n.lineHeight * (s.text.length - 1))) : _t60 += o.top;
            var _ref8 = function (t, e, i, s) {
                var a = t.top,
                  n = t.left,
                  o = t.bottom,
                  r = t.right,
                  l = t.chart,
                  h = l.chartArea,
                  c = l.scales;
                var d,
                  u,
                  g,
                  f = 0;
                var p = o - a,
                  m = r - n;
                if (t.isHorizontal()) {
                  if (u = E(s, n, r), A(i)) {
                    var _t61 = Object.keys(i)[0],
                      _s34 = i[_t61];
                    g = c[_t61].getPixelForValue(_s34) + p - e;
                  } else g = "center" === i ? (h.bottom + h.top) / 2 + p - e : Ts(t, i, e);
                  d = r - n;
                } else {
                  if (A(i)) {
                    var _t62 = Object.keys(i)[0],
                      _s35 = i[_t62];
                    u = c[_t62].getPixelForValue(_s35) - m + e;
                  } else u = "center" === i ? (h.left + h.right) / 2 - m + e : Ts(t, i, e);
                  g = E(s, o, a), f = "left" === i ? -D : D;
                }
                return {
                  titleX: u,
                  titleY: g,
                  maxWidth: d,
                  rotation: f
                };
              }(this, _t60, i, r),
              o = _ref8.titleX,
              l = _ref8.titleY,
              h = _ref8.maxWidth,
              c = _ref8.rotation;
            He(e, s.text, 0, 0, n, {
              color: s.color,
              maxWidth: h,
              rotation: c,
              textAlign: function (t, e, i) {
                var s = Dt(t);
                return s = i && "right" !== e || !i && "right" === e ? "left" === (t = s) ? "right" : "right" === t ? "left" : t : s;
              }(r, i, a),
              textBaseline: "middle",
              translation: [o, l]
            });
          }
        }
      }, {
        key: "draw",
        value: function draw(t) {
          this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
        }
      }, {
        key: "_layers",
        value: function _layers() {
          var _this7 = this;
          var t = this.options,
            e = t.ticks && t.ticks.z || 0,
            i = T(t.grid && t.grid.z, -1),
            t = T(t.border && t.border.z, 0);
          return this._isVisible() && this.draw === zs.prototype.draw ? [{
            z: i,
            draw: function draw(t) {
              _this7.drawBackground(), _this7.drawGrid(t), _this7.drawTitle();
            }
          }, {
            z: t,
            draw: function draw() {
              _this7.drawBorder();
            }
          }, {
            z: e,
            draw: function draw(t) {
              _this7.drawLabels(t);
            }
          }] : [{
            z: e,
            draw: function draw(t) {
              _this7.draw(t);
            }
          }];
        }
      }, {
        key: "getMatchingVisibleMetas",
        value: function getMatchingVisibleMetas(t) {
          var e = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + "AxisID",
            s = [];
          var a, n;
          for (a = 0, n = e.length; a < n; ++a) {
            var _n21 = e[a];
            _n21[i] !== this.id || t && _n21.type !== t || s.push(_n21);
          }
          return s;
        }
      }, {
        key: "_resolveTickFontOptions",
        value: function _resolveTickFontOptions(t) {
          return z(this.options.ticks.setContext(this.getContext(t)).font);
        }
      }, {
        key: "_maxDigits",
        value: function _maxDigits() {
          var t = this._resolveTickFontOptions(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / t;
        }
      }]);
      return zs;
    }(e);
    var Fs = /*#__PURE__*/function () {
      function Fs(t, e, i) {
        _classCallCheck(this, Fs);
        this.type = t, this.scope = e, this.override = i, this.items = Object.create(null);
      }
      _createClass(Fs, [{
        key: "isForType",
        value: function isForType(t) {
          return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
        }
      }, {
        key: "register",
        value: function register(t) {
          var e,
            i,
            r,
            l,
            s = Object.getPrototypeOf(t);
          var a;
          "id" in (e = s) && "defaults" in e && (a = this.register(s));
          var n = this.items,
            o = t.id,
            h = this.scope + "." + o;
          if (o) return o in n || (n[o] = t, e = t, s = h, i = a, i = Y(Object.create(null), [i ? R.get(i) : {}, R.get(s), e.defaults]), R.set(s, i), e.defaultRoutes && (r = s, l = e.defaultRoutes, Object.keys(l).forEach(function (t) {
            var e = t.split("."),
              i = e.pop(),
              s = [r].concat(e).join("."),
              a = l[t].split("."),
              n = a.pop(),
              o = a.join(".");
            R.route(s, i, o, n);
          })), e.descriptors && R.describe(s, e.descriptors), this.override && R.override(t.id, t.overrides)), h;
          throw new Error("class does not have id: " + t);
        }
      }, {
        key: "get",
        value: function get(t) {
          return this.items[t];
        }
      }, {
        key: "unregister",
        value: function unregister(t) {
          var e = this.items,
            i = t.id,
            s = this.scope;
          i in e && delete e[i], s && i in R[s] && (delete R[s][i], this.override && delete fe[i]);
        }
      }]);
      return Fs;
    }();
    var b = new ( /*#__PURE__*/function () {
      function _class5() {
        _classCallCheck(this, _class5);
        this.controllers = new Fs(Os, "datasets", !0), this.elements = new Fs(e, "elements"), this.plugins = new Fs(Object, "plugins"), this.scales = new Fs(zs, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements];
      }
      _createClass(_class5, [{
        key: "add",
        value: function add() {
          for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            t[_key4] = arguments[_key4];
          }
          this._each("register", t);
        }
      }, {
        key: "remove",
        value: function remove() {
          for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            t[_key5] = arguments[_key5];
          }
          this._each("unregister", t);
        }
      }, {
        key: "addControllers",
        value: function addControllers() {
          for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            t[_key6] = arguments[_key6];
          }
          this._each("register", t, this.controllers);
        }
      }, {
        key: "addElements",
        value: function addElements() {
          for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            t[_key7] = arguments[_key7];
          }
          this._each("register", t, this.elements);
        }
      }, {
        key: "addPlugins",
        value: function addPlugins() {
          for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            t[_key8] = arguments[_key8];
          }
          this._each("register", t, this.plugins);
        }
      }, {
        key: "addScales",
        value: function addScales() {
          for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            t[_key9] = arguments[_key9];
          }
          this._each("register", t, this.scales);
        }
      }, {
        key: "getController",
        value: function getController(t) {
          return this._get(t, this.controllers, "controller");
        }
      }, {
        key: "getElement",
        value: function getElement(t) {
          return this._get(t, this.elements, "element");
        }
      }, {
        key: "getPlugin",
        value: function getPlugin(t) {
          return this._get(t, this.plugins, "plugin");
        }
      }, {
        key: "getScale",
        value: function getScale(t) {
          return this._get(t, this.scales, "scale");
        }
      }, {
        key: "removeControllers",
        value: function removeControllers() {
          for (var _len10 = arguments.length, t = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            t[_key10] = arguments[_key10];
          }
          this._each("unregister", t, this.controllers);
        }
      }, {
        key: "removeElements",
        value: function removeElements() {
          for (var _len11 = arguments.length, t = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            t[_key11] = arguments[_key11];
          }
          this._each("unregister", t, this.elements);
        }
      }, {
        key: "removePlugins",
        value: function removePlugins() {
          for (var _len12 = arguments.length, t = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
            t[_key12] = arguments[_key12];
          }
          this._each("unregister", t, this.plugins);
        }
      }, {
        key: "removeScales",
        value: function removeScales() {
          for (var _len13 = arguments.length, t = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
            t[_key13] = arguments[_key13];
          }
          this._each("unregister", t, this.scales);
        }
      }, {
        key: "_each",
        value: function _each(i, t, s) {
          var _this8 = this;
          _toConsumableArray(t).forEach(function (t) {
            var e = s || _this8._getRegistryForType(t);
            s || e.isForType(t) || e === _this8.plugins && t.id ? _this8._exec(i, e, t) : k(t, function (t) {
              var e = s || _this8._getRegistryForType(t);
              _this8._exec(i, e, t);
            });
          });
        }
      }, {
        key: "_exec",
        value: function _exec(t, e, i) {
          var s = K(t);
          d(i["before" + s], [], i), e[t](i), d(i["after" + s], [], i);
        }
      }, {
        key: "_getRegistryForType",
        value: function _getRegistryForType(e) {
          for (var _t63 = 0; _t63 < this._typedRegistries.length; _t63++) {
            var _i37 = this._typedRegistries[_t63];
            if (_i37.isForType(e)) return _i37;
          }
          return this.plugins;
        }
      }, {
        key: "_get",
        value: function _get(t, e, i) {
          e = e.get(t);
          if (void 0 === e) throw new Error('"' + t + '" is not a registered ' + i + ".");
          return e;
        }
      }]);
      return _class5;
    }())();
    var Vs = /*#__PURE__*/function () {
      function Vs() {
        _classCallCheck(this, Vs);
        this._init = [];
      }
      _createClass(Vs, [{
        key: "notify",
        value: function notify(t, e, i, s) {
          "beforeInit" === e && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
          s = s ? this._descriptors(t).filter(s) : this._descriptors(t), i = this._notify(s, t, e, i);
          return "afterDestroy" === e && (this._notify(s, t, "stop"), this._notify(this._init, t, "uninstall")), i;
        }
      }, {
        key: "_notify",
        value: function _notify(t, e, i, s) {
          s = s || {};
          var _iterator21 = _createForOfIteratorHelper(t),
            _step21;
          try {
            for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
              var _a26 = _step21.value;
              var _t64 = _a26.plugin;
              if (!1 === d(_t64[i], [e, s, _a26.options], _t64) && s.cancelable) return !1;
            }
          } catch (err) {
            _iterator21.e(err);
          } finally {
            _iterator21.f();
          }
          return !0;
        }
      }, {
        key: "invalidate",
        value: function invalidate() {
          P(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
        }
      }, {
        key: "_descriptors",
        value: function _descriptors(t) {
          if (this._cache) return this._cache;
          var e = this._cache = this._createDescriptors(t);
          return this._notifyStateChanges(t), e;
        }
      }, {
        key: "_createDescriptors",
        value: function _createDescriptors(t, e) {
          var i,
            s = t && t.config,
            a = T(s.options && s.options.plugins, {}),
            s = function (t) {
              var e = {},
                i = [],
                s = Object.keys(b.plugins.items);
              for (var _t65 = 0; _t65 < s.length; _t65++) i.push(b.getPlugin(s[_t65]));
              var a = t.plugins || [];
              for (var _t66 = 0; _t66 < a.length; _t66++) {
                var _s36 = a[_t66];
                -1 === i.indexOf(_s36) && (i.push(_s36), e[_s36.id] = !0);
              }
              return {
                plugins: i,
                localIds: e
              };
            }(s);
          if (!1 !== a || e) {
            var n = t,
              _s37 = s,
              o = _s37.plugins,
              r = _s37.localIds,
              l = a,
              h = e;
            var _c8 = [],
              _d8 = n.getContext();
            var _iterator22 = _createForOfIteratorHelper(o),
              _step22;
            try {
              for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                var _u4 = _step22.value;
                var _o17 = _u4.id,
                  _g4 = (i = l[_o17], h || !1 !== i ? !0 === i ? {} : i : null);
                null !== _g4 && _c8.push({
                  plugin: _u4,
                  options: function (t, _ref9, s, a) {
                    var e = _ref9.plugin,
                      i = _ref9.local;
                    var n = t.pluginScopeKeys(e),
                      o = t.getOptionScopes(s, n);
                    return i && e.defaults && o.push(e.defaults), t.createResolver(o, a, [""], {
                      scriptable: !1,
                      indexable: !1,
                      allKeys: !0
                    });
                  }(n.config, {
                    plugin: _u4,
                    local: r[_o17]
                  }, _g4, _d8)
                });
              }
            } catch (err) {
              _iterator22.e(err);
            } finally {
              _iterator22.f();
            }
            return _c8;
          }
          return [];
        }
      }, {
        key: "_notifyStateChanges",
        value: function _notifyStateChanges(t) {
          var e = this._oldCache || [],
            i = this._cache,
            s = function s(t, i) {
              return t.filter(function (e) {
                return !i.some(function (t) {
                  return e.plugin.id === t.plugin.id;
                });
              });
            };
          this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
        }
      }]);
      return Vs;
    }();
    function Bs(t, e) {
      var i = R.datasets[t] || {};
      return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || i.indexAxis || "x";
    }
    function Ws(t) {
      if ("x" === t || "y" === t || "r" === t) return t;
    }
    function Ns(t) {
      if (Ws(t)) return t;
      for (var _len14 = arguments.length, e = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
        e[_key14 - 1] = arguments[_key14];
      }
      for (var _i38 = 0, _e41 = e; _i38 < _e41.length; _i38++) {
        var _s38 = _e41[_i38];
        var _e42 = _s38.axis || ("top" === (i = _s38.position) || "bottom" === i ? "x" : "left" === i || "right" === i ? "y" : void 0) || 1 < t.length && Ws(t[0].toLowerCase());
        if (_e42) return _e42;
      }
      var i;
      throw new Error("Cannot determine type of '".concat(t, "' axis. Please provide 'axis' or 'position' option."));
    }
    function Hs(t, e, i) {
      if (i[e + "AxisID"] === t) return {
        axis: e
      };
    }
    function js(t) {
      var e = t.options || (t.options = {});
      e.plugins = T(e.plugins, {}), e.scales = function (o, e) {
        var n = fe[o.type] || {
            scales: {}
          },
          r = e.scales || {},
          l = Bs(o.type, e),
          h = Object.create(null);
        return Object.keys(r).forEach(function (t) {
          var e = r[t];
          if (!A(e)) return console.error("Invalid scale configuration for scale: " + t);
          if (e._proxy) return console.warn("Ignoring resolver passed as options for scale: " + t);
          var i = Ns(t, e, function (e, t) {
              if (t.data && t.data.datasets) {
                t = t.data.datasets.filter(function (t) {
                  return t.xAxisID === e || t.yAxisID === e;
                });
                if (t.length) return Hs(e, "x", t[0]) || Hs(e, "y", t[0]);
              }
              return {};
            }(t, o), R.scales[e.type]),
            s = i === l ? "_index_" : "_value_",
            a = n.scales || {};
          h[t] = $(Object.create(null), [{
            axis: i
          }, e, a[i], a[s]]);
        }), o.data.datasets.forEach(function (s) {
          var t = s.type || o.type,
            a = s.indexAxis || Bs(t, e),
            n = (fe[t] || {}).scales || {};
          Object.keys(n).forEach(function (t) {
            var e = function (t, e) {
                var i = t;
                return "_index_" === t ? i = e : "_value_" === t && (i = "x" === e ? "y" : "x"), i;
              }(t, a),
              i = s[e + "AxisID"] || e;
            h[i] = h[i] || Object.create(null), $(h[i], [{
              axis: e
            }, r[i], n[t]]);
          });
        }), Object.keys(h).forEach(function (t) {
          t = h[t];
          $(t, [R.scales[t.type], R.scale]);
        }), h;
      }(t, e);
    }
    function Ys(t) {
      return (t = t || {}).datasets = t.datasets || [], t.labels = t.labels || [], t;
    }
    var $s = new Map(),
      Us = new Set();
    function Xs(t, e) {
      var i = $s.get(t);
      return i || (i = e(), $s.set(t, i), Us.add(i)), i;
    }
    var qs = function qs(t, e, i) {
      e = m(e, i);
      void 0 !== e && t.add(e);
    };
    var Ks = /*#__PURE__*/function () {
      function Ks(t) {
        _classCallCheck(this, Ks);
        this._config = ((t = (t = t) || {}).data = Ys(t.data), js(t), t), this._scopeCache = new Map(), this._resolverCache = new Map();
      }
      _createClass(Ks, [{
        key: "platform",
        get: function get() {
          return this._config.platform;
        }
      }, {
        key: "type",
        get: function get() {
          return this._config.type;
        },
        set: function set(t) {
          this._config.type = t;
        }
      }, {
        key: "data",
        get: function get() {
          return this._config.data;
        },
        set: function set(t) {
          this._config.data = Ys(t);
        }
      }, {
        key: "options",
        get: function get() {
          return this._config.options;
        },
        set: function set(t) {
          this._config.options = t;
        }
      }, {
        key: "plugins",
        get: function get() {
          return this._config.plugins;
        }
      }, {
        key: "update",
        value: function update() {
          var t = this._config;
          this.clearCache(), js(t);
        }
      }, {
        key: "clearCache",
        value: function clearCache() {
          this._scopeCache.clear(), this._resolverCache.clear();
        }
      }, {
        key: "datasetScopeKeys",
        value: function datasetScopeKeys(t) {
          return Xs(t, function () {
            return [["datasets." + t, ""]];
          });
        }
      }, {
        key: "datasetAnimationScopeKeys",
        value: function datasetAnimationScopeKeys(t, e) {
          return Xs(t + ".transition." + e, function () {
            return [["datasets.".concat(t, ".transitions.") + e, "transitions." + e], ["datasets." + t, ""]];
          });
        }
      }, {
        key: "datasetElementScopeKeys",
        value: function datasetElementScopeKeys(t, e) {
          return Xs(t + "-" + e, function () {
            return [["datasets.".concat(t, ".elements.") + e, "datasets." + t, "elements." + e, ""]];
          });
        }
      }, {
        key: "pluginScopeKeys",
        value: function pluginScopeKeys(t) {
          var e = t.id;
          return Xs(this.type + "-plugin-" + e, function () {
            return [["plugins." + e].concat(_toConsumableArray(t.additionalOptionScopes || []))];
          });
        }
      }, {
        key: "_cachedScopes",
        value: function _cachedScopes(t, e) {
          var i = this._scopeCache;
          var s = i.get(t);
          return s && !e || (s = new Map(), i.set(t, s)), s;
        }
      }, {
        key: "getOptionScopes",
        value: function getOptionScopes(e, t, i) {
          var s = this.options,
            a = this.type,
            n = this._cachedScopes(e, i),
            o = n.get(t);
          if (o) return o;
          var r = new Set(),
            l = (t.forEach(function (t) {
              e && (r.add(e), t.forEach(function (t) {
                return qs(r, e, t);
              })), t.forEach(function (t) {
                return qs(r, s, t);
              }), t.forEach(function (t) {
                return qs(r, fe[a] || {}, t);
              }), t.forEach(function (t) {
                return qs(r, R, t);
              }), t.forEach(function (t) {
                return qs(r, pe, t);
              });
            }), Array.from(r));
          return 0 === l.length && l.push(Object.create(null)), Us.has(t) && n.set(t, l), l;
        }
      }, {
        key: "chartOptionScopes",
        value: function chartOptionScopes() {
          var t = this.options,
            e = this.type;
          return [t, fe[e] || {}, R.datasets[e] || {}, {
            type: e
          }, R, pe];
        }
      }, {
        key: "resolveNamedOptions",
        value: function resolveNamedOptions(t, e, i) {
          var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [""];
          var a = {
              $shared: !0
            },
            _Gs = Gs(this._resolverCache, t, s),
            n = _Gs.resolver,
            o = _Gs.subPrefixes;
          var r = n;
          !function (t, e) {
            var _Ue = Ue(t),
              i = _Ue.isScriptable,
              s = _Ue.isIndexable;
            var _iterator23 = _createForOfIteratorHelper(e),
              _step23;
            try {
              for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                var _a27 = _step23.value;
                var _e43 = i(_a27),
                  _n22 = s(_a27),
                  _o18 = (_n22 || _e43) && t[_a27];
                if (_e43 && (u(_o18) || Zs(_o18)) || _n22 && O(_o18)) return 1;
              }
            } catch (err) {
              _iterator23.e(err);
            } finally {
              _iterator23.f();
            }
          }(n, e) || (a.$shared = !1, r = $e(n, i = u(i) ? i() : i, this.createResolver(t, i, o)));
          var _iterator24 = _createForOfIteratorHelper(e),
            _step24;
          try {
            for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
              var _t67 = _step24.value;
              a[_t67] = r[_t67];
            }
          } catch (err) {
            _iterator24.e(err);
          } finally {
            _iterator24.f();
          }
          return a;
        }
      }, {
        key: "createResolver",
        value: function createResolver(t, e) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [""];
          var s = arguments.length > 3 ? arguments[3] : undefined;
          t = Gs(this._resolverCache, t, i).resolver;
          return A(e) ? $e(t, e, void 0, s) : t;
        }
      }]);
      return Ks;
    }();
    function Gs(t, e, i) {
      var s = t.get(e);
      s || (s = new Map(), t.set(e, s));
      t = i.join();
      var a = s.get(t);
      return a || (a = {
        resolver: Ye(e, i),
        subPrefixes: i.filter(function (t) {
          return !t.toLowerCase().includes("hover");
        })
      }, s.set(t, a)), a;
    }
    var Zs = function Zs(i) {
        return A(i) && Object.getOwnPropertyNames(i).reduce(function (t, e) {
          return t || u(i[e]);
        }, !1);
      },
      Js = ["top", "bottom", "left", "right", "chartArea"];
    function Qs(t, e) {
      return "top" === t || "bottom" === t || -1 === Js.indexOf(t) && "x" === e;
    }
    function ta(i, s) {
      return function (t, e) {
        return t[i] === e[i] ? t[s] - e[s] : t[i] - e[i];
      };
    }
    function ea(t) {
      var e = t.chart,
        i = e.options.animation;
      e.notifyPlugins("afterRender"), d(i && i.onComplete, [t], e);
    }
    function ia(t) {
      var e = t.chart,
        i = e.options.animation;
      d(i && i.onProgress, [t], e);
    }
    function sa(t) {
      return xe() && "string" == typeof t ? t = document.getElementById(t) : t && t.length && (t = t[0]), t = t && t.canvas ? t.canvas : t;
    }
    var aa = {},
      na = function na(t) {
        var e = sa(t);
        return Object.values(aa).filter(function (t) {
          return t.canvas === e;
        }).pop();
      };
    function oa(t, e, i) {
      return (t.options.clip ? t : e)[i];
    }
    var i = /*#__PURE__*/function () {
      function i(t, e) {
        var _this9 = this;
        _classCallCheck(this, i);
        var _i39 = this.config = new Ks(e),
          s = sa(t),
          a = na(s);
        if (a) throw new Error("Canvas is already in use. Chart with ID '" + a.id + "' must be destroyed before the canvas with ID '" + a.canvas.id + "' can be reused.");
        var e = _i39.createResolver(_i39.chartOptionScopes(), this.getContext()),
          t = (this.platform = new (_i39.platform || fs(s))(), this.platform.updateConfig(_i39), this.platform.acquireContext(s, e.aspectRatio)),
          n = t && t.canvas,
          o = n && n.height,
          r = n && n.width;
        this.id = F(), this.ctx = t, this.canvas = n, this.width = r, this.height = o, this._options = e, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Vs(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Pt(function (t) {
          return _this9.update(t);
        }, e.resizeDelay || 0), this._dataChanges = [], aa[this.id] = this, t && n ? (l.listen(this, "complete", ea), l.listen(this, "progress", ia), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item");
      }
      _createClass(i, [{
        key: "aspectRatio",
        get: function get() {
          var _this$options9 = this.options,
            t = _this$options9.aspectRatio,
            e = _this$options9.maintainAspectRatio,
            _i40 = this.width,
            s = this.height,
            a = this._aspectRatio;
          return P(t) ? e && a ? a : s ? _i40 / s : null : t;
        }
      }, {
        key: "data",
        get: function get() {
          return this.config.data;
        },
        set: function set(t) {
          this.config.data = t;
        }
      }, {
        key: "options",
        get: function get() {
          return this._options;
        },
        set: function set(t) {
          this.config.options = t;
        }
      }, {
        key: "registry",
        get: function get() {
          return b;
        }
      }, {
        key: "_initialize",
        value: function _initialize() {
          return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Ce(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
        }
      }, {
        key: "clear",
        value: function clear() {
          return Ie(this.canvas, this.ctx), this;
        }
      }, {
        key: "stop",
        value: function stop() {
          return l.stop(this), this;
        }
      }, {
        key: "resize",
        value: function resize(t, e) {
          l.running(this) ? this._resizeBeforeDraw = {
            width: t,
            height: e
          } : this._resize(t, e);
        }
      }, {
        key: "_resize",
        value: function _resize(t, e) {
          var _i41 = this.options,
            s = this.canvas,
            a = _i41.maintainAspectRatio && this.aspectRatio,
            s = this.platform.getMaximumSize(s, t, e, a),
            t = _i41.devicePixelRatio || this.platform.getDevicePixelRatio(),
            e = this.width ? "resize" : "attach";
          this.width = s.width, this.height = s.height, this._aspectRatio = this.aspectRatio, Ce(this, t, !0) && (this.notifyPlugins("resize", {
            size: s
          }), d(_i41.onResize, [this, s], this), this.attached && this._doResize(e) && this.render());
        }
      }, {
        key: "ensureScalesHaveIDs",
        value: function ensureScalesHaveIDs() {
          k(this.options.scales || {}, function (t, e) {
            t.id = e;
          });
        }
      }, {
        key: "buildOrUpdateScales",
        value: function buildOrUpdateScales() {
          var _this10 = this;
          var o = this.options,
            s = o.scales,
            r = this.scales,
            l = Object.keys(r).reduce(function (t, e) {
              return t[e] = !1, t;
            }, {});
          var t = [];
          k(t = s ? t.concat(Object.keys(s).map(function (t) {
            var e = s[t],
              t = Ns(t, e),
              _i42 = "r" === t,
              t = "x" === t;
            return {
              options: e,
              dposition: _i42 ? "chartArea" : t ? "bottom" : "left",
              dtype: _i42 ? "radialLinear" : t ? "category" : "linear"
            };
          })) : t, function (t) {
            var e = t.options,
              _i43 = e.id,
              s = Ns(_i43, e),
              a = T(e.type, t.dtype);
            void 0 !== e.position && Qs(e.position, s) === Qs(t.dposition) || (e.position = t.dposition), l[_i43] = !0;
            var n = null;
            _i43 in r && r[_i43].type === a ? n = r[_i43] : (n = new (b.getScale(a))({
              id: _i43,
              type: a,
              ctx: _this10.ctx,
              chart: _this10
            }), r[n.id] = n), n.init(e, o);
          }), k(l, function (t, e) {
            t || delete r[e];
          }), k(r, function (t) {
            a.configure(_this10, t, t.options), a.addBox(_this10, t);
          });
        }
      }, {
        key: "_updateMetasets",
        value: function _updateMetasets() {
          var t = this._metasets,
            e = this.data.datasets.length,
            _i44 = t.length;
          if (t.sort(function (t, e) {
            return t.index - e.index;
          }), e < _i44) {
            for (var _t68 = e; _t68 < _i44; ++_t68) this._destroyDatasetMeta(_t68);
            t.splice(e, _i44 - e);
          }
          this._sortedMetasets = t.slice(0).sort(ta("order", "index"));
        }
      }, {
        key: "_removeUnreferencedMetasets",
        value: function _removeUnreferencedMetasets() {
          var _this11 = this;
          var t = this._metasets,
            _i45 = this.data.datasets;
          t.length > _i45.length && delete this._stacks, t.forEach(function (e, t) {
            0 === _i45.filter(function (t) {
              return t === e._dataset;
            }).length && _this11._destroyDatasetMeta(t);
          });
        }
      }, {
        key: "buildOrUpdateControllers",
        value: function buildOrUpdateControllers() {
          var e = [],
            _i46 = this.data.datasets;
          var s, a;
          for (this._removeUnreferencedMetasets(), s = 0, a = _i46.length; s < a; s++) {
            var _a28 = _i46[s];
            var _t69 = this.getDatasetMeta(s);
            var n = _a28.type || this.config.type;
            if (_t69.type && _t69.type !== n && (this._destroyDatasetMeta(s), _t69 = this.getDatasetMeta(s)), _t69.type = n, _t69.indexAxis = _a28.indexAxis || Bs(n, this.options), _t69.order = _a28.order || 0, _t69.index = s, _t69.label = "" + _a28.label, _t69.visible = this.isDatasetVisible(s), _t69.controller) _t69.controller.updateIndex(s), _t69.controller.linkScales();else {
              var _i47 = b.getController(n),
                _R$datasets$n = R.datasets[n],
                _a29 = _R$datasets$n.datasetElementType,
                _o19 = _R$datasets$n.dataElementType;
              Object.assign(_i47, {
                dataElementType: b.getElement(_o19),
                datasetElementType: _a29 && b.getElement(_a29)
              }), _t69.controller = new _i47(this, s), e.push(_t69.controller);
            }
          }
          return this._updateMetasets(), e;
        }
      }, {
        key: "_resetElements",
        value: function _resetElements() {
          var _this12 = this;
          k(this.data.datasets, function (t, e) {
            _this12.getDatasetMeta(e).controller.reset();
          }, this);
        }
      }, {
        key: "reset",
        value: function reset() {
          this._resetElements(), this.notifyPlugins("reset");
        }
      }, {
        key: "update",
        value: function update(t) {
          var s = this.config,
            a = (s.update(), this._options = s.createResolver(s.chartOptionScopes(), this.getContext())),
            n = this._animationsDisabled = !a.animation;
          if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 !== this.notifyPlugins("beforeUpdate", {
            mode: t,
            cancelable: !0
          })) {
            var _o20 = this.buildOrUpdateControllers();
            this.notifyPlugins("beforeElementsUpdate");
            var _i48 = 0;
            for (var _t70 = 0, _e44 = this.data.datasets.length; _t70 < _e44; _t70++) {
              var _s39 = this.getDatasetMeta(_t70)["controller"],
                _a30 = !n && -1 === _o20.indexOf(_s39);
              _s39.buildOrUpdateElements(_a30), _i48 = Math.max(+_s39.getMaxOverflow(), _i48);
            }
            _i48 = this._minPadding = a.layout.autoPadding ? _i48 : 0, this._updateLayout(_i48), n || k(_o20, function (t) {
              t.reset();
            }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
              mode: t
            }), this._layers.sort(ta("z", "_idx"));
            var t = this._active,
              e = this._lastEvent;
            e ? this._eventHandler(e, !0) : t.length && this._updateHoverStyles(t, t, !0), this.render();
          }
        }
      }, {
        key: "_updateScales",
        value: function _updateScales() {
          var _this13 = this;
          k(this.scales, function (t) {
            a.removeBox(_this13, t);
          }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
        }
      }, {
        key: "_checkEventBindings",
        value: function _checkEventBindings() {
          var t = this.options,
            e = new Set(Object.keys(this._listeners)),
            _i49 = new Set(t.events);
          Z(e, _i49) && !!this._responsiveListeners === t.responsive || (this.unbindEvents(), this.bindEvents());
        }
      }, {
        key: "_updateHiddenIndices",
        value: function _updateHiddenIndices() {
          var t,
            e,
            _i50,
            s,
            a = this["_hiddenIndices"];
          var _iterator25 = _createForOfIteratorHelper(this._getUniformDataChanges() || []),
            _step25;
          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var _step25$value = _step25.value;
              t = _step25$value.method;
              e = _step25$value.start;
              i = _step25$value.count;
              n = void 0;
              o = void 0;
              r = void 0;
              s = void 0;
              var n = a;
              var o = e;
              var r = "_removeElements" === t ? -_i50 : _i50;
              var _l8 = Object.keys(n);
              for (var _i71 = 0, _l9 = _l8; _i71 < _l9.length; _i71++) {
                var _h8 = _l9[_i71];
                var _l10 = +_h8;
                _l10 >= o && (s = n[_h8], delete n[_h8], (0 < r || _l10 > o) && (n[_l10 + r] = s));
              }
            }
          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }
        }
      }, {
        key: "_getUniformDataChanges",
        value: function _getUniformDataChanges() {
          var t = this._dataChanges;
          if (t && t.length) {
            this._dataChanges = [];
            var e = this.data.datasets.length,
              _i51 = function _i51(e) {
                return new Set(t.filter(function (t) {
                  return t[0] === e;
                }).map(function (t, e) {
                  return e + "," + t.splice(1).join(",");
                }));
              },
              s = _i51(0);
            for (var _t71 = 1; _t71 < e; _t71++) if (!Z(s, _i51(_t71))) return;
            return Array.from(s).map(function (t) {
              return t.split(",");
            }).map(function (t) {
              return {
                method: t[1],
                start: +t[2],
                count: +t[3]
              };
            });
          }
        }
      }, {
        key: "_updateLayout",
        value: function _updateLayout(t) {
          var _this14 = this;
          if (!1 !== this.notifyPlugins("beforeLayout", {
            cancelable: !0
          })) {
            a.update(this, this.width, this.height, t);
            var _e45 = this.chartArea,
              _i52 = _e45.width <= 0 || _e45.height <= 0;
            this._layers = [], k(this.boxes, function (t) {
              var _this14$_layers;
              _i52 && "chartArea" === t.position || (t.configure && t.configure(), (_this14$_layers = _this14._layers).push.apply(_this14$_layers, _toConsumableArray(t._layers())));
            }, this), this._layers.forEach(function (t, e) {
              t._idx = e;
            }), this.notifyPlugins("afterLayout");
          }
        }
      }, {
        key: "_updateDatasets",
        value: function _updateDatasets(_i53) {
          if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", {
            mode: _i53,
            cancelable: !0
          })) {
            for (var _t72 = 0, _e46 = this.data.datasets.length; _t72 < _e46; ++_t72) this.getDatasetMeta(_t72).controller.configure();
            for (var _t73 = 0, _e47 = this.data.datasets.length; _t73 < _e47; ++_t73) this._updateDataset(_t73, u(_i53) ? _i53({
              datasetIndex: _t73
            }) : _i53);
            this.notifyPlugins("afterDatasetsUpdate", {
              mode: _i53
            });
          }
        }
      }, {
        key: "_updateDataset",
        value: function _updateDataset(t, e) {
          var _i54 = this.getDatasetMeta(t),
            s = {
              meta: _i54,
              index: t,
              mode: e,
              cancelable: !0
            };
          !1 !== this.notifyPlugins("beforeDatasetUpdate", s) && (_i54.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
        }
      }, {
        key: "render",
        value: function render() {
          !1 !== this.notifyPlugins("beforeRender", {
            cancelable: !0
          }) && (l.has(this) ? this.attached && !l.running(this) && l.start(this) : (this.draw(), ea({
            chart: this
          })));
        }
      }, {
        key: "draw",
        value: function draw() {
          var t;
          if (this._resizeBeforeDraw) {
            var _this$_resizeBeforeDr = this._resizeBeforeDraw,
              _t74 = _this$_resizeBeforeDr.width,
              _e48 = _this$_resizeBeforeDr.height;
            this._resize(_t74, _e48), this._resizeBeforeDraw = null;
          }
          if (this.clear(), !(this.width <= 0 || this.height <= 0) && !1 !== this.notifyPlugins("beforeDraw", {
            cancelable: !0
          })) {
            var _e49 = this._layers;
            for (t = 0; t < _e49.length && _e49[t].z <= 0; ++t) _e49[t].draw(this.chartArea);
            for (this._drawDatasets(); t < _e49.length; ++t) _e49[t].draw(this.chartArea);
            this.notifyPlugins("afterDraw");
          }
        }
      }, {
        key: "_getSortedDatasetMetas",
        value: function _getSortedDatasetMetas(t) {
          var e = this._sortedMetasets,
            _i55 = [];
          var s, a;
          for (s = 0, a = e.length; s < a; ++s) {
            var _a31 = e[s];
            t && !_a31.visible || _i55.push(_a31);
          }
          return _i55;
        }
      }, {
        key: "getSortedVisibleDatasetMetas",
        value: function getSortedVisibleDatasetMetas() {
          return this._getSortedDatasetMetas(!0);
        }
      }, {
        key: "_drawDatasets",
        value: function _drawDatasets() {
          if (!1 !== this.notifyPlugins("beforeDatasetsDraw", {
            cancelable: !0
          })) {
            var e = this.getSortedVisibleDatasetMetas();
            for (var _t75 = e.length - 1; 0 <= _t75; --_t75) this._drawDataset(e[_t75]);
            this.notifyPlugins("afterDatasetsDraw");
          }
        }
      }, {
        key: "_drawDataset",
        value: function _drawDataset(s) {
          var t = this.ctx,
            e = s._clip,
            _i56 = !e.disabled,
            a = function (t) {
              var e = s.xScale,
                i = s.yScale;
              return e && i ? {
                left: oa(e, t, "left"),
                right: oa(e, t, "right"),
                top: oa(i, t, "top"),
                bottom: oa(i, t, "bottom")
              } : t;
            }(this.chartArea),
            n = {
              meta: s,
              index: s.index,
              cancelable: !0
            };
          !1 !== this.notifyPlugins("beforeDatasetDraw", n) && (_i56 && Ve(t, {
            left: !1 === e.left ? 0 : a.left - e.left,
            right: !1 === e.right ? this.width : a.right + e.right,
            top: !1 === e.top ? 0 : a.top - e.top,
            bottom: !1 === e.bottom ? this.height : a.bottom + e.bottom
          }), s.controller.draw(), _i56 && Be(t), n.cancelable = !1, this.notifyPlugins("afterDatasetDraw", n));
        }
      }, {
        key: "isPointInArea",
        value: function isPointInArea(t) {
          return M(t, this.chartArea, this._minPadding);
        }
      }, {
        key: "getElementsAtEventForMode",
        value: function getElementsAtEventForMode(t, e, _i57, s) {
          var a = Hi.modes[e];
          return "function" == typeof a ? a(this, t, _i57, s) : [];
        }
      }, {
        key: "getDatasetMeta",
        value: function getDatasetMeta(t) {
          var e = this.data.datasets[t],
            _i58 = this._metasets;
          var s = _i58.filter(function (t) {
            return t && t._dataset === e;
          }).pop();
          return s || (s = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: e && e.order || 0,
            index: t,
            _dataset: e,
            _parsed: [],
            _sorted: !1
          }, _i58.push(s)), s;
        }
      }, {
        key: "getContext",
        value: function getContext() {
          return this.$context || (this.$context = Pi(null, {
            chart: this,
            type: "chart"
          }));
        }
      }, {
        key: "getVisibleDatasetCount",
        value: function getVisibleDatasetCount() {
          return this.getSortedVisibleDatasetMetas().length;
        }
      }, {
        key: "isDatasetVisible",
        value: function isDatasetVisible(t) {
          var e = this.data.datasets[t];
          if (!e) return !1;
          t = this.getDatasetMeta(t);
          return "boolean" == typeof t.hidden ? !t.hidden : !e.hidden;
        }
      }, {
        key: "setDatasetVisibility",
        value: function setDatasetVisibility(t, e) {
          this.getDatasetMeta(t).hidden = !e;
        }
      }, {
        key: "toggleDataVisibility",
        value: function toggleDataVisibility(t) {
          this._hiddenIndices[t] = !this._hiddenIndices[t];
        }
      }, {
        key: "getDataVisibility",
        value: function getDataVisibility(t) {
          return !this._hiddenIndices[t];
        }
      }, {
        key: "_updateVisibility",
        value: function _updateVisibility(e, t, _i59) {
          var s = _i59 ? "show" : "hide",
            a = this.getDatasetMeta(e),
            n = a.controller._resolveAnimations(void 0, s);
          G(t) ? (a.data[t].hidden = !_i59, this.update()) : (this.setDatasetVisibility(e, _i59), n.update(a, {
            visible: _i59
          }), this.update(function (t) {
            return t.datasetIndex === e ? s : void 0;
          }));
        }
      }, {
        key: "hide",
        value: function hide(t, e) {
          this._updateVisibility(t, e, !1);
        }
      }, {
        key: "show",
        value: function show(t, e) {
          this._updateVisibility(t, e, !0);
        }
      }, {
        key: "_destroyDatasetMeta",
        value: function _destroyDatasetMeta(t) {
          var e = this._metasets[t];
          e && e.controller && e.controller._destroy(), delete this._metasets[t];
        }
      }, {
        key: "_stop",
        value: function _stop() {
          var t, e;
          for (this.stop(), l.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t) this._destroyDatasetMeta(t);
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.notifyPlugins("beforeDestroy");
          var t = this.canvas,
            e = this.ctx;
          this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Ie(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete aa[this.id], this.notifyPlugins("afterDestroy");
        }
      }, {
        key: "toBase64Image",
        value: function toBase64Image() {
          var _this$canvas;
          return (_this$canvas = this.canvas).toDataURL.apply(_this$canvas, arguments);
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
        }
      }, {
        key: "bindUserEvents",
        value: function bindUserEvents() {
          var _this15 = this;
          var _i60 = this._listeners,
            s = this.platform,
            e = function e(t, _e50) {
              s.addEventListener(_this15, t, _e50), _i60[t] = _e50;
            },
            a = function a(t, e, _i61) {
              t.offsetX = e, t.offsetY = _i61, _this15._eventHandler(t);
            };
          k(this.options.events, function (t) {
            return e(t, a);
          });
        }
      }, {
        key: "bindResponsiveEvents",
        value: function bindResponsiveEvents() {
          var _this16 = this;
          this._responsiveListeners || (this._responsiveListeners = {});
          var _i62 = this._responsiveListeners,
            s = this.platform,
            t = function t(_t76, e) {
              s.addEventListener(_this16, _t76, e), _i62[_t76] = e;
            },
            e = function e(t, _e51) {
              _i62[t] && (s.removeEventListener(_this16, t, _e51), delete _i62[t]);
            },
            a = function a(t, e) {
              _this16.canvas && _this16.resize(t, e);
            };
          var n;
          var o = function o() {
            e("attach", o), _this16.attached = !0, _this16.resize(), t("resize", a), t("detach", n);
          };
          n = function n() {
            _this16.attached = !1, e("resize", a), _this16._stop(), _this16._resize(0, 0), t("attach", o);
          }, (s.isAttached(this.canvas) ? o : n)();
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          var _this17 = this;
          k(this._listeners, function (t, e) {
            _this17.platform.removeEventListener(_this17, e, t);
          }), this._listeners = {}, k(this._responsiveListeners, function (t, e) {
            _this17.platform.removeEventListener(_this17, e, t);
          }), this._responsiveListeners = void 0;
        }
      }, {
        key: "updateHoverStyle",
        value: function updateHoverStyle(t, e, _i63) {
          var s = _i63 ? "set" : "remove";
          var a, n, o, r;
          for ("dataset" === e && (a = this.getDatasetMeta(t[0].datasetIndex)).controller["_" + s + "DatasetHoverStyle"](), o = 0, r = t.length; o < r; ++o) {
            var _e52 = (n = t[o]) && this.getDatasetMeta(n.datasetIndex).controller;
            _e52 && _e52[s + "HoverStyle"](n.element, n.datasetIndex, n.index);
          }
        }
      }, {
        key: "getActiveElements",
        value: function getActiveElements() {
          return this._active || [];
        }
      }, {
        key: "setActiveElements",
        value: function setActiveElements(t) {
          var _this18 = this;
          var e = this._active || [],
            t = t.map(function (_ref10) {
              var t = _ref10.datasetIndex,
                e = _ref10.index;
              var _i64 = _this18.getDatasetMeta(t);
              if (_i64) return {
                datasetIndex: t,
                element: _i64.data[e],
                index: e
              };
              throw new Error("No dataset found at index " + t);
            });
          W(t, e) || (this._active = t, this._lastEvent = null, this._updateHoverStyles(t, e));
        }
      }, {
        key: "notifyPlugins",
        value: function notifyPlugins(t, e, _i65) {
          return this._plugins.notify(this, t, e, _i65);
        }
      }, {
        key: "isPluginEnabled",
        value: function isPluginEnabled(e) {
          return 1 === this._plugins._cache.filter(function (t) {
            return t.plugin.id === e;
          }).length;
        }
      }, {
        key: "_updateHoverStyles",
        value: function _updateHoverStyles(t, e, _i66) {
          var s = this.options.hover,
            a = function a(t, _i67) {
              return t.filter(function (e) {
                return !_i67.some(function (t) {
                  return e.datasetIndex === t.datasetIndex && e.index === t.index;
                });
              });
            },
            n = a(e, t),
            _i66 = _i66 ? t : a(t, e);
          n.length && this.updateHoverStyle(n, s.mode, !1), _i66.length && s.mode && this.updateHoverStyle(_i66, s.mode, !0);
        }
      }, {
        key: "_eventHandler",
        value: function _eventHandler(e, t) {
          var _this19 = this;
          var _i68 = {
              event: e,
              replay: t,
              cancelable: !0,
              inChartArea: this.isPointInArea(e)
            },
            s = function s(t) {
              return (t.options.events || _this19.options.events).includes(e["native"].type);
            };
          if (!1 !== this.notifyPlugins("beforeEvent", _i68, s)) return t = this._handleEvent(e, t, _i68.inChartArea), _i68.cancelable = !1, this.notifyPlugins("afterEvent", _i68, s), (t || _i68.changed) && this.render(), this;
        }
      }, {
        key: "_handleEvent",
        value: function _handleEvent(t, e, _i69) {
          var _this$_active = this._active,
            s = _this$_active === void 0 ? [] : _this$_active,
            a = this.options,
            n = e,
            o = this._getActiveElements(t, s, _i69, n),
            r = J(t),
            l = (h = t, c = this._lastEvent, _i69 && "mouseout" !== h.type ? r ? c : h : null);
          _i69 && (this._lastEvent = null, d(a.onHover, [t, o, this], this), r && d(a.onClick, [t, o, this], this));
          var h,
            c = !W(o, s);
          return (c || e) && (this._active = o, this._updateHoverStyles(o, s, e)), this._lastEvent = l, c;
        }
      }, {
        key: "_getActiveElements",
        value: function _getActiveElements(t, e, _i70, s) {
          if ("mouseout" === t.type) return [];
          if (!_i70) return e;
          _i70 = this.options.hover;
          return this.getElementsAtEventForMode(t, _i70.mode, _i70, s);
        }
      }], [{
        key: "register",
        value: function register() {
          var _b2;
          (_b2 = b).add.apply(_b2, arguments), ra();
        }
      }, {
        key: "unregister",
        value: function unregister() {
          var _b3;
          (_b3 = b).remove.apply(_b3, arguments), ra();
        }
      }]);
      return i;
    }();
    _defineProperty(i, "defaults", R);
    _defineProperty(i, "instances", aa);
    _defineProperty(i, "overrides", fe);
    _defineProperty(i, "registry", b);
    _defineProperty(i, "version", "4.4.0");
    _defineProperty(i, "getChart", na);
    function ra() {
      k(i.instances, function (t) {
        return t._plugins.invalidate();
      });
    }
    function la() {
      throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
    }
    var ha = {
      _date: /*#__PURE__*/function () {
        function Xn(t) {
          _classCallCheck(this, Xn);
          _defineProperty(this, "options", void 0);
          this.options = t || {};
        }
        _createClass(Xn, [{
          key: "init",
          value: function init() {}
        }, {
          key: "formats",
          value: function formats() {
            return la();
          }
        }, {
          key: "parse",
          value: function parse() {
            return la();
          }
        }, {
          key: "format",
          value: function format() {
            return la();
          }
        }, {
          key: "add",
          value: function add() {
            return la();
          }
        }, {
          key: "diff",
          value: function diff() {
            return la();
          }
        }, {
          key: "startOf",
          value: function startOf() {
            return la();
          }
        }, {
          key: "endOf",
          value: function endOf() {
            return la();
          }
        }], [{
          key: "override",
          value: function override(t) {
            Object.assign(Xn.prototype, t);
          }
        }]);
        return Xn;
      }()
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
        var _t77 = h,
          _e53 = d;
        Math.abs(h) > Math.abs(d) && (_t77 = d, _e53 = h), r[l.axis] = _e53, r._custom = {
          barStart: _t77,
          barEnd: _e53,
          start: c,
          end: o,
          min: h,
          max: d
        };
      } else s[a.axis] = a.parse(i, n);
      return s;
    }
    function da(t, e, i, s) {
      var a = t.iScale,
        n = t.vScale,
        o = a.getLabels(),
        r = a === n,
        l = [];
      var h, c, d, u;
      for (c = (h = i) + s; h < c; ++h) u = e[h], (d = {})[a.axis] = r || a.parse(o[h], h), l.push(ca(u, d, n, h));
      return l;
    }
    function ua(t) {
      return t && void 0 !== t.barStart && void 0 !== t.barEnd;
    }
    function ga(t, e, i, s) {
      return t = s ? fa(t = t === e ? i : t === i ? e : t, i, e) : fa(t, e, i);
    }
    function fa(t, e, i) {
      return "start" === t ? e : "end" === t ? i : t;
    }
    var pa = /*#__PURE__*/function (_Os) {
      _inherits(pa, _Os);
      var _super4 = _createSuper(pa);
      function pa(t, e) {
        var _this20;
        _classCallCheck(this, pa);
        _this20 = _super4.call(this, t, e), _this20.enableOptionSharing = !0, _this20.innerRadius = void 0, _this20.outerRadius = void 0, _this20.offsetX = void 0, _this20.offsetY = void 0;
        return _this20;
      }
      _createClass(pa, [{
        key: "linkScales",
        value: function linkScales() {}
      }, {
        key: "parse",
        value: function parse(s, a) {
          var n = this.getDataset().data,
            o = this._cachedMeta;
          if (!1 === this._parsing) o._parsed = n;else {
            var _t78,
              _e54,
              _i72 = function _i72(t) {
                return +n[t];
              };
            if (A(n[s])) {
              var _this$_parsing$key2 = this._parsing.key,
                _s40 = _this$_parsing$key2 === void 0 ? "value" : _this$_parsing$key2;
              _i72 = function _i72(t) {
                return +m(n[t], _s40);
              };
            }
            for (_e54 = (_t78 = s) + a; _t78 < _e54; ++_t78) o._parsed[_t78] = _i72(_t78);
          }
        }
      }, {
        key: "_getRotation",
        value: function _getRotation() {
          return L(this.options.rotation - 90);
        }
      }, {
        key: "_getCircumference",
        value: function _getCircumference() {
          return L(this.options.circumference);
        }
      }, {
        key: "_getRotationExtents",
        value: function _getRotationExtents() {
          var e = _,
            i = -_;
          for (var _t79 = 0; _t79 < this.chart.data.datasets.length; ++_t79) if (this.chart.isDatasetVisible(_t79) && this.chart.getDatasetMeta(_t79).type === this._type) {
            var _s41 = this.chart.getDatasetMeta(_t79).controller,
              _a32 = _s41._getRotation(),
              _n23 = _s41._getCircumference();
            e = Math.min(e, _a32), i = Math.max(i, _a32 + _n23);
          }
          return {
            rotation: e,
            circumference: i - e
          };
        }
      }, {
        key: "update",
        value: function update(t) {
          var e = this.chart,
            i = e["chartArea"],
            s = this._cachedMeta,
            a = s.data,
            n = this.getMaxBorderWidth() + this.getMaxOffset(a) + this.options.spacing,
            o = Math.max((Math.min(i.width, i.height) - n) / 2, 0),
            r = Math.min(V(this.options.cutout, o), 1),
            l = this._getRingWeight(this.index),
            _this$_getRotationExt = this._getRotationExtents(),
            h = _this$_getRotationExt.circumference,
            c = _this$_getRotationExt.rotation,
            _ref11 = function (t, e, s) {
              var i = 1,
                a = 1,
                n = 0,
                o = 0;
              if (e < _) {
                var _r9 = t,
                  _l11 = _r9 + e,
                  _h9 = Math.cos(_r9),
                  _c9 = Math.sin(_r9),
                  _d9 = Math.cos(_l11),
                  _u5 = Math.sin(_l11),
                  _g5 = function _g5(t, e, i) {
                    return pt(t, _r9, _l11, !0) ? 1 : Math.max(e, e * s, i, i * s);
                  },
                  _f5 = function _f5(t, e, i) {
                    return pt(t, _r9, _l11, !0) ? -1 : Math.min(e, e * s, i, i * s);
                  },
                  _p4 = _g5(0, _h9, _d9),
                  _m3 = _g5(D, _c9, _u5),
                  _b4 = _f5(S, _h9, _d9),
                  _x3 = _f5(S + D, _c9, _u5);
                i = (_p4 - _b4) / 2, a = (_m3 - _x3) / 2, n = -(_p4 + _b4) / 2, o = -(_m3 + _x3) / 2;
              }
              return {
                ratioX: i,
                ratioY: a,
                offsetX: n,
                offsetY: o
              };
            }(c, h, r),
            d = _ref11.ratioX,
            u = _ref11.ratioY,
            g = _ref11.offsetX,
            f = _ref11.offsetY,
            p = (i.width - n) / d,
            m = (i.height - n) / u,
            b = Math.max(Math.min(p, m) / 2, 0),
            x = B(this.options.radius, b),
            v = (x - Math.max(x * r, 0)) / this._getVisibleDatasetWeightTotal();
          this.offsetX = g * x, this.offsetY = f * x, s.total = this.calculateTotal(), this.outerRadius = x - v * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - v * l, 0), this.updateElements(a, 0, a.length, t);
        }
      }, {
        key: "_circumference",
        value: function _circumference(t, e) {
          var i = this.options,
            s = this._cachedMeta,
            a = this._getCircumference();
          return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || null === s._parsed[t] || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * a / _);
        }
      }, {
        key: "updateElements",
        value: function updateElements(t, e, i, s) {
          var a = "reset" === s,
            n = this.chart,
            o = n.chartArea,
            r = n.options.animation,
            l = (o.left + o.right) / 2,
            h = (o.top + o.bottom) / 2,
            c = a && r.animateScale,
            d = c ? 0 : this.innerRadius,
            u = c ? 0 : this.outerRadius,
            _this$_getSharedOptio = this._getSharedOptions(e, s),
            g = _this$_getSharedOptio.sharedOptions,
            f = _this$_getSharedOptio.includeOptions;
          var p,
            m = this._getRotation();
          for (p = 0; p < e; ++p) m += this._circumference(p, a);
          for (p = e; p < e + i; ++p) {
            var _e55 = this._circumference(p, a),
              _i73 = t[p],
              _n24 = {
                x: l + this.offsetX,
                y: h + this.offsetY,
                startAngle: m,
                endAngle: m + _e55,
                circumference: _e55,
                outerRadius: u,
                innerRadius: d
              };
            f && (_n24.options = g || this.resolveDataElementOptions(p, _i73.active ? "active" : s)), m += _e55, this.updateElement(_i73, p, _n24, s);
          }
        }
      }, {
        key: "calculateTotal",
        value: function calculateTotal() {
          var t = this._cachedMeta,
            e = t.data;
          var i,
            s = 0;
          for (i = 0; i < e.length; i++) {
            var a = t._parsed[i];
            null === a || isNaN(a) || !this.chart.getDataVisibility(i) || e[i].hidden || (s += Math.abs(a));
          }
          return s;
        }
      }, {
        key: "calculateCircumference",
        value: function calculateCircumference(t) {
          var e = this._cachedMeta.total;
          return 0 < e && !isNaN(t) ? _ * (Math.abs(t) / e) : 0;
        }
      }, {
        key: "getLabelAndValue",
        value: function getLabelAndValue(t) {
          var e = this._cachedMeta,
            i = this.chart,
            s = i.data.labels || [],
            e = de(e._parsed[t], i.options.locale);
          return {
            label: s[t] || "",
            value: e
          };
        }
      }, {
        key: "getMaxBorderWidth",
        value: function getMaxBorderWidth(t) {
          var e = 0;
          var i = this.chart;
          var s, a, n, o, r;
          if (!t) for (s = 0, a = i.data.datasets.length; s < a; ++s) if (i.isDatasetVisible(s)) {
            t = (n = i.getDatasetMeta(s)).data, o = n.controller;
            break;
          }
          if (!t) return 0;
          for (s = 0, a = t.length; s < a; ++s) "inner" !== (r = o.resolveDataElementOptions(s)).borderAlign && (e = Math.max(e, r.borderWidth || 0, r.hoverBorderWidth || 0));
          return e;
        }
      }, {
        key: "getMaxOffset",
        value: function getMaxOffset(i) {
          var s = 0;
          for (var _t80 = 0, _e56 = i.length; _t80 < _e56; ++_t80) {
            var _i74 = this.resolveDataElementOptions(_t80);
            s = Math.max(s, _i74.offset || 0, _i74.hoverOffset || 0);
          }
          return s;
        }
      }, {
        key: "_getRingWeightOffset",
        value: function _getRingWeightOffset(e) {
          var i = 0;
          for (var _t81 = 0; _t81 < e; ++_t81) this.chart.isDatasetVisible(_t81) && (i += this._getRingWeight(_t81));
          return i;
        }
      }, {
        key: "_getRingWeight",
        value: function _getRingWeight(t) {
          return Math.max(T(this.chart.data.datasets[t].weight, 1), 0);
        }
      }, {
        key: "_getVisibleDatasetWeightTotal",
        value: function _getVisibleDatasetWeightTotal() {
          return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
        }
      }]);
      return pa;
    }(Os);
    _defineProperty(pa, "id", "doughnut");
    _defineProperty(pa, "defaults", {
      datasetElementType: !1,
      dataElementType: "arc",
      animation: {
        animateRotate: !0,
        animateScale: !1
      },
      animations: {
        numbers: {
          type: "number",
          properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"]
        }
      },
      cutout: "50%",
      rotation: 0,
      circumference: 360,
      radius: "100%",
      spacing: 0,
      indexAxis: "r"
    });
    _defineProperty(pa, "descriptors", {
      _scriptable: function _scriptable(t) {
        return "spacing" !== t;
      },
      _indexable: function _indexable(t) {
        return "spacing" !== t && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash");
      }
    });
    _defineProperty(pa, "overrides", {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels: function generateLabels(s) {
              var t = s.data;
              if (t.labels.length && t.datasets.length) {
                var _s$legend$options$lab = s.legend.options["labels"],
                  _a45 = _s$legend$options$lab.pointStyle,
                  _n34 = _s$legend$options$lab.color;
                return t.labels.map(function (t, e) {
                  var i = s.getDatasetMeta(0).controller.getStyle(e);
                  return {
                    text: t,
                    fillStyle: i.backgroundColor,
                    strokeStyle: i.borderColor,
                    fontColor: _n34,
                    lineWidth: i.borderWidth,
                    pointStyle: _a45,
                    hidden: !s.getDataVisibility(e),
                    index: e
                  };
                });
              }
              return [];
            }
          },
          onClick: function onClick(t, e, i) {
            i.chart.toggleDataVisibility(e.index), i.chart.update();
          }
        }
      }
    });
    var ma = /*#__PURE__*/function (_Os2) {
      _inherits(ma, _Os2);
      var _super5 = _createSuper(ma);
      function ma(t, e) {
        var _this21;
        _classCallCheck(this, ma);
        _this21 = _super5.call(this, t, e), _this21.innerRadius = void 0, _this21.outerRadius = void 0;
        return _this21;
      }
      _createClass(ma, [{
        key: "getLabelAndValue",
        value: function getLabelAndValue(t) {
          var e = this._cachedMeta,
            i = this.chart,
            s = i.data.labels || [],
            e = de(e._parsed[t].r, i.options.locale);
          return {
            label: s[t] || "",
            value: e
          };
        }
      }, {
        key: "parseObjectData",
        value: function parseObjectData(t, e, i, s) {
          return ii.bind(this)(t, e, i, s);
        }
      }, {
        key: "update",
        value: function update(t) {
          var e = this._cachedMeta.data;
          this._updateRadius(), this.updateElements(e, 0, e.length, t);
        }
      }, {
        key: "getMinMax",
        value: function getMinMax() {
          var _this22 = this;
          var t = this._cachedMeta,
            s = {
              min: Number.POSITIVE_INFINITY,
              max: Number.NEGATIVE_INFINITY
            };
          return t.data.forEach(function (t, e) {
            var i = _this22.getParsed(e).r;
            !isNaN(i) && _this22.chart.getDataVisibility(e) && (i < s.min && (s.min = i), i > s.max && (s.max = i));
          }), s;
        }
      }, {
        key: "_updateRadius",
        value: function _updateRadius() {
          var t = this.chart,
            e = t.chartArea,
            i = t.options,
            s = Math.min(e.right - e.left, e.bottom - e.top),
            a = Math.max(s / 2, 0),
            n = (a - Math.max(i.cutoutPercentage ? a / 100 * i.cutoutPercentage : 1, 0)) / t.getVisibleDatasetCount();
          this.outerRadius = a - n * this.index, this.innerRadius = this.outerRadius - n;
        }
      }, {
        key: "updateElements",
        value: function updateElements(s, a, t, n) {
          var o = "reset" === n,
            r = this.chart,
            l = r.options.animation,
            h = this._cachedMeta.rScale,
            c = h.xCenter,
            d = h.yCenter,
            u = h.getIndexAngle(0) - 0.5 * S;
          var g,
            f = u;
          var p = 360 / this.countVisibleElements();
          for (g = 0; g < a; ++g) f += this._computeAngle(g, n, p);
          for (g = a; g < a + t; g++) {
            var _a33 = s[g];
            var _t82 = f,
              _e57 = f + this._computeAngle(g, n, p),
              _i75 = r.getDataVisibility(g) ? h.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
            f = _e57, o && (l.animateScale && (_i75 = 0), l.animateRotate && (_t82 = _e57 = u));
            var m = {
              x: c,
              y: d,
              innerRadius: 0,
              outerRadius: _i75,
              startAngle: _t82,
              endAngle: _e57,
              options: this.resolveDataElementOptions(g, _a33.active ? "active" : n)
            };
            this.updateElement(_a33, g, m, n);
          }
        }
      }, {
        key: "countVisibleElements",
        value: function countVisibleElements() {
          var _this23 = this;
          var t = this._cachedMeta;
          var i = 0;
          return t.data.forEach(function (t, e) {
            !isNaN(_this23.getParsed(e).r) && _this23.chart.getDataVisibility(e) && i++;
          }), i;
        }
      }, {
        key: "_computeAngle",
        value: function _computeAngle(t, e, i) {
          return this.chart.getDataVisibility(t) ? L(this.resolveDataElementOptions(t, e).angle || i) : 0;
        }
      }]);
      return ma;
    }(Os);
    _defineProperty(ma, "id", "polarArea");
    _defineProperty(ma, "defaults", {
      dataElementType: "arc",
      animation: {
        animateRotate: !0,
        animateScale: !0
      },
      animations: {
        numbers: {
          type: "number",
          properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"]
        }
      },
      indexAxis: "r",
      startAngle: 0
    });
    _defineProperty(ma, "overrides", {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels: function generateLabels(s) {
              var t = s.data;
              if (t.labels.length && t.datasets.length) {
                var _s$legend$options$lab2 = s.legend.options["labels"],
                  _a46 = _s$legend$options$lab2.pointStyle,
                  _n35 = _s$legend$options$lab2.color;
                return t.labels.map(function (t, e) {
                  var i = s.getDatasetMeta(0).controller.getStyle(e);
                  return {
                    text: t,
                    fillStyle: i.backgroundColor,
                    strokeStyle: i.borderColor,
                    fontColor: _n35,
                    lineWidth: i.borderWidth,
                    pointStyle: _a46,
                    hidden: !s.getDataVisibility(e),
                    index: e
                  };
                });
              }
              return [];
            }
          },
          onClick: function onClick(t, e, i) {
            i.chart.toggleDataVisibility(e.index), i.chart.update();
          }
        }
      },
      scales: {
        r: {
          type: "radialLinear",
          angleLines: {
            display: !1
          },
          beginAtZero: !0,
          grid: {
            circular: !0
          },
          pointLabels: {
            display: !1
          },
          startAngle: 0
        }
      }
    });
    var ba = Object.freeze({
      __proto__: null,
      BarController: (_class10 = /*#__PURE__*/function (_Os3) {
        _inherits(BarController, _Os3);
        var _super6 = _createSuper(BarController);
        function BarController() {
          _classCallCheck(this, BarController);
          return _super6.apply(this, arguments);
        }
        _createClass(BarController, [{
          key: "parsePrimitiveData",
          value: function parsePrimitiveData(t, e, i, s) {
            return da(t, e, i, s);
          }
        }, {
          key: "parseArrayData",
          value: function parseArrayData(t, e, i, s) {
            return da(t, e, i, s);
          }
        }, {
          key: "parseObjectData",
          value: function parseObjectData(t, e, i, s) {
            var a = t.iScale,
              n = t.vScale,
              _this$_parsing2 = this._parsing,
              _this$_parsing2$xAxis = _this$_parsing2.xAxisKey,
              o = _this$_parsing2$xAxis === void 0 ? "x" : _this$_parsing2$xAxis,
              _this$_parsing2$yAxis = _this$_parsing2.yAxisKey,
              r = _this$_parsing2$yAxis === void 0 ? "y" : _this$_parsing2$yAxis,
              l = "x" === a.axis ? o : r,
              h = "x" === n.axis ? o : r,
              c = [];
            var d, u, g, f;
            for (u = (d = i) + s; d < u; ++d) f = e[d], (g = {})[a.axis] = a.parse(m(f, l), d), c.push(ca(m(f, h), g, n, d));
            return c;
          }
        }, {
          key: "updateRangeFromParsed",
          value: function updateRangeFromParsed(t, e, i, s) {
            _get2(_getPrototypeOf(BarController.prototype), "updateRangeFromParsed", this).call(this, t, e, i, s);
            s = i._custom;
            s && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, s.min), t.max = Math.max(t.max, s.max));
          }
        }, {
          key: "getMaxOverflow",
          value: function getMaxOverflow() {
            return 0;
          }
        }, {
          key: "getLabelAndValue",
          value: function getLabelAndValue(t) {
            var e = this._cachedMeta,
              i = e.iScale,
              s = e.vScale,
              a = this.getParsed(t),
              n = a._custom,
              o = ua(n) ? "[" + n.start + ", " + n.end + "]" : "" + s.getLabelForValue(a[s.axis]);
            return {
              label: "" + i.getLabelForValue(a[i.axis]),
              value: o
            };
          }
        }, {
          key: "initialize",
          value: function initialize() {
            this.enableOptionSharing = !0, _get2(_getPrototypeOf(BarController.prototype), "initialize", this).call(this), this._cachedMeta.stack = this.getDataset().stack;
          }
        }, {
          key: "update",
          value: function update(t) {
            var e = this._cachedMeta;
            this.updateElements(e.data, 0, e.data.length, t);
          }
        }, {
          key: "updateElements",
          value: function updateElements(e, i, s, a) {
            var n = "reset" === a,
              o = this.index,
              r = this._cachedMeta.vScale,
              l = r.getBasePixel(),
              h = r.isHorizontal(),
              c = this._getRuler(),
              _this$_getSharedOptio2 = this._getSharedOptions(i, a),
              d = _this$_getSharedOptio2.sharedOptions,
              u = _this$_getSharedOptio2.includeOptions;
            for (var _t83 = i; _t83 < i + s; _t83++) {
              var _ref13;
              var _i76 = this.getParsed(_t83),
                _s42 = n || P(_i76[r.axis]) ? {
                  base: l,
                  head: l
                } : this._calculateBarValuePixels(_t83),
                _m4 = this._calculateBarIndexPixels(_t83, c),
                _b5 = (_i76._stacks || {})[r.axis],
                _x4 = {
                  horizontal: h,
                  base: _s42.base,
                  enableBorderRadius: !_b5 || ua(_i76._custom) || o === _b5._top || o === _b5._bottom,
                  x: h ? _s42.head : _m4.center,
                  y: h ? _m4.center : _s42.head,
                  height: h ? _m4.size : Math.abs(_s42.size),
                  width: h ? Math.abs(_s42.size) : _m4.size
                };
              u && (_x4.options = d || this.resolveDataElementOptions(_t83, e[_t83].active ? "active" : a));
              var g = _x4.options || e[_t83].options;
              (function (n, t, e, i) {
                var s = t.borderSkipped;
                var a = {};
                if (!s) return n.borderSkipped = a;
                if (!0 === s) return n.borderSkipped = {
                  top: !0,
                  right: !0,
                  bottom: !0,
                  left: !0
                };
                var _ref12 = function () {
                    var t, e, i, s, a;
                    return i = n.horizontal ? (t = n.base > n.x, e = "left", "right") : (t = n.base < n.y, e = "bottom", "top"), a = t ? (s = "end", "start") : (s = "start", "end"), {
                      start: e,
                      end: i,
                      reverse: t,
                      top: s,
                      bottom: a
                    };
                  }(),
                  t = _ref12.start,
                  o = _ref12.end,
                  r = _ref12.reverse,
                  l = _ref12.top,
                  h = _ref12.bottom;
                "middle" === s && e && (n.enableBorderRadius = !0, s = (e._top || 0) === i ? l : (e._bottom || 0) === i ? h : (a[ga(h, t, o, r)] = !0, l)), a[ga(s, t, o, r)] = !0, n.borderSkipped = a;
              })(_x4, g, _b5, o), (_ref13 = [_x4, g["inflateAmount"], c.ratio], g = _ref13[0], f = _ref13[1], p = _ref13[2]), g.inflateAmount = "auto" === f ? 1 === p ? 0.33 : 0 : f, this.updateElement(e[_t83], _t83, _x4, a);
            }
            var f, p;
          }
        }, {
          key: "_getStacks",
          value: function _getStacks(t, i) {
            var e = this._cachedMeta["iScale"],
              s = e.getMatchingVisibleMetas(this._type).filter(function (t) {
                return t.controller.options.grouped;
              }),
              a = e.options.stacked,
              n = [];
            var _iterator26 = _createForOfIteratorHelper(s),
              _step26;
            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var _e58 = _step26.value;
                if ((void 0 === i || !function (t) {
                  var e = t.controller.getParsed(i),
                    e = e && e[t.vScale.axis];
                  if (P(e) || isNaN(e)) return !0;
                }(_e58)) && ((!1 === a || -1 === n.indexOf(_e58.stack) || void 0 === a && void 0 === _e58.stack) && n.push(_e58.stack), _e58.index === t)) break;
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }
            return n.length || n.push(void 0), n;
          }
        }, {
          key: "_getStackCount",
          value: function _getStackCount(t) {
            return this._getStacks(void 0, t).length;
          }
        }, {
          key: "_getStackIndex",
          value: function _getStackIndex(t, e, i) {
            var s = this._getStacks(t, i),
              a = void 0 !== e ? s.indexOf(e) : -1;
            return -1 === a ? s.length - 1 : a;
          }
        }, {
          key: "_getRuler",
          value: function _getRuler() {
            var t = this.options,
              e = this._cachedMeta,
              i = e.iScale,
              s = [];
            var a, n;
            for (a = 0, n = e.data.length; a < n; ++a) s.push(i.getPixelForValue(this.getParsed(a)[i.axis], a));
            var o = t.barThickness;
            return {
              min: o || function (t) {
                var e = t.iScale,
                  i = function (s, t) {
                    if (!s._cache.$bar) {
                      var _a34 = s.getMatchingVisibleMetas(t);
                      var _i77 = [];
                      for (var _t84 = 0, _e59 = _a34.length; _t84 < _e59; _t84++) _i77 = _i77.concat(_a34[_t84].controller.getAllParsedValues(s));
                      s._cache.$bar = wt(_i77.sort(function (t, e) {
                        return t - e;
                      }));
                    }
                    return s._cache.$bar;
                  }(e, t.type);
                var s,
                  a,
                  n,
                  o,
                  r = e._length;
                var l = function l() {
                  32767 !== n && -32768 !== n && (G(o) && (r = Math.min(r, Math.abs(n - o) || r)), o = n);
                };
                for (s = 0, a = i.length; s < a; ++s) n = e.getPixelForValue(i[s]), l();
                for (o = void 0, s = 0, a = e.ticks.length; s < a; ++s) n = e.getPixelForTick(s), l();
                return r;
              }(e),
              pixels: s,
              start: i._startPixel,
              end: i._endPixel,
              stackCount: this._getStackCount(),
              scale: i,
              grouped: t.grouped,
              ratio: o ? 1 : t.categoryPercentage * t.barPercentage
            };
          }
        }, {
          key: "_calculateBarValuePixels",
          value: function _calculateBarValuePixels(t) {
            var _this$_cachedMeta = this._cachedMeta,
              e = _this$_cachedMeta.vScale,
              i = _this$_cachedMeta._stacked,
              s = _this$_cachedMeta.index,
              _this$options10 = this.options,
              a = _this$options10.base,
              n = _this$options10.minBarLength,
              o = a || 0,
              r = this.getParsed(t),
              l = r._custom,
              h = ua(l);
            var c,
              d,
              u = r[e.axis],
              g = 0,
              f = i ? this.applyStack(e, r, i) : u;
            f !== u && (g = f - u, f = u), h && (u = l.barStart, f = l.barEnd - l.barStart, 0 !== u && y(u) !== y(l.barEnd) && (g = 0), g += u);
            var p,
              m,
              b = P(a) || h ? g : a;
            var x = e.getPixelForValue(b);
            if (c = this.chart.getDataVisibility(t) ? e.getPixelForValue(g + f) : x, d = c - x, Math.abs(d) < n) {
              d = (b = d, p = e, m = o, (0 !== b ? y(b) : (p.isHorizontal() ? 1 : -1) * (p.min >= m ? 1 : -1)) * n), u === o && (x -= d / 2);
              var _t85 = e.getPixelForDecimal(0),
                _P = e.getPixelForDecimal(1),
                _a35 = Math.min(_t85, _P),
                _l12 = Math.max(_t85, _P);
              x = Math.max(Math.min(x, _l12), _a35), c = x + d, i && !h && (r._stacks[e.axis]._visualValues[s] = e.getValueForPixel(c) - e.getValueForPixel(x));
            }
            if (x === e.getPixelForValue(o)) {
              var _t86 = y(d) * e.getLineWidthForValue(o) / 2;
              x += _t86, d -= _t86;
            }
            return {
              size: d,
              base: x,
              head: c,
              center: c + d / 2
            };
          }
        }, {
          key: "_calculateBarIndexPixels",
          value: function _calculateBarIndexPixels(t, e) {
            var i = e.scale,
              s = this.options,
              a = s.skipNull,
              n = T(s.maxBarThickness, 1 / 0);
            var o, r;
            if (e.grouped) {
              var _i78 = a ? this._getStackCount(t) : e.stackCount,
                _T2 = ("flex" === s.barThickness ? function (t, e, i, s) {
                  var a = e.pixels,
                    n = a[t];
                  var o = 0 < t ? a[t - 1] : null,
                    r = t < a.length - 1 ? a[t + 1] : null;
                  a = i.categoryPercentage, null === o && (o = n - (null === r ? e.end - e.start : r - n)), null === r && (r = n + n - o), t = n - (n - Math.min(o, r)) / 2 * a;
                  return {
                    chunk: Math.abs(r - o) / 2 * a / s,
                    ratio: i.barPercentage,
                    start: t
                  };
                } : function (t, e, i, s) {
                  var a = i.barThickness;
                  var n, o;
                  return o = P(a) ? (n = e.min * i.categoryPercentage, i.barPercentage) : (n = a * s, 1), {
                    chunk: n / s,
                    ratio: o,
                    start: e.pixels[t] - n / 2
                  };
                })(t, e, s, _i78),
                _l13 = this._getStackIndex(this.index, this._cachedMeta.stack, a ? t : void 0);
              o = _T2.start + _T2.chunk * _l13 + _T2.chunk / 2, r = Math.min(n, _T2.chunk * _T2.ratio);
            } else o = i.getPixelForValue(this.getParsed(t)[i.axis], t), r = Math.min(n, e.min * e.ratio);
            return {
              base: o - r / 2,
              head: o + r / 2,
              center: o,
              size: r
            };
          }
        }, {
          key: "draw",
          value: function draw() {
            var t = this._cachedMeta,
              e = t.vScale,
              i = t.data,
              s = i.length;
            var a = 0;
            for (; a < s; ++a) null !== this.getParsed(a)[e.axis] && i[a].draw(this._ctx);
          }
        }]);
        return BarController;
      }(Os), _defineProperty(_class10, "id", "bar"), _defineProperty(_class10, "defaults", {
        datasetElementType: !1,
        dataElementType: "bar",
        categoryPercentage: 0.8,
        barPercentage: 0.9,
        grouped: !0,
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "base", "width", "height"]
          }
        }
      }), _defineProperty(_class10, "overrides", {
        scales: {
          _index_: {
            type: "category",
            offset: !0,
            grid: {
              offset: !0
            }
          },
          _value_: {
            type: "linear",
            beginAtZero: !0
          }
        }
      }), _class10),
      BubbleController: (_class11 = /*#__PURE__*/function (_Os4) {
        _inherits(BubbleController, _Os4);
        var _super7 = _createSuper(BubbleController);
        function BubbleController() {
          _classCallCheck(this, BubbleController);
          return _super7.apply(this, arguments);
        }
        _createClass(BubbleController, [{
          key: "initialize",
          value: function initialize() {
            this.enableOptionSharing = !0, _get2(_getPrototypeOf(BubbleController.prototype), "initialize", this).call(this);
          }
        }, {
          key: "parsePrimitiveData",
          value: function parsePrimitiveData(t, e, i, s) {
            var a = _get2(_getPrototypeOf(BubbleController.prototype), "parsePrimitiveData", this).call(this, t, e, i, s);
            for (var _t87 = 0; _t87 < a.length; _t87++) a[_t87]._custom = this.resolveDataElementOptions(_t87 + i).radius;
            return a;
          }
        }, {
          key: "parseArrayData",
          value: function parseArrayData(t, e, i, s) {
            var a = _get2(_getPrototypeOf(BubbleController.prototype), "parseArrayData", this).call(this, t, e, i, s);
            for (var _t88 = 0; _t88 < a.length; _t88++) {
              var _s43 = e[i + _t88];
              a[_t88]._custom = T(_s43[2], this.resolveDataElementOptions(_t88 + i).radius);
            }
            return a;
          }
        }, {
          key: "parseObjectData",
          value: function parseObjectData(t, e, i, s) {
            var a = _get2(_getPrototypeOf(BubbleController.prototype), "parseObjectData", this).call(this, t, e, i, s);
            for (var _t89 = 0; _t89 < a.length; _t89++) {
              var _s44 = e[i + _t89];
              a[_t89]._custom = T(_s44 && _s44.r && +_s44.r, this.resolveDataElementOptions(_t89 + i).radius);
            }
            return a;
          }
        }, {
          key: "getMaxOverflow",
          value: function getMaxOverflow() {
            var e = this._cachedMeta.data;
            var i = 0;
            for (var _t90 = e.length - 1; 0 <= _t90; --_t90) i = Math.max(i, e[_t90].size(this.resolveDataElementOptions(_t90)) / 2);
            return 0 < i && i;
          }
        }, {
          key: "getLabelAndValue",
          value: function getLabelAndValue(t) {
            var e = this._cachedMeta,
              i = this.chart.data.labels || [],
              s = e.xScale,
              a = e.yScale,
              n = this.getParsed(t),
              o = s.getLabelForValue(n.x),
              r = a.getLabelForValue(n.y),
              l = n._custom;
            return {
              label: i[t] || "",
              value: "(" + o + ", " + r + (l ? ", " + l : "") + ")"
            };
          }
        }, {
          key: "update",
          value: function update(t) {
            var e = this._cachedMeta.data;
            this.updateElements(e, 0, e.length, t);
          }
        }, {
          key: "updateElements",
          value: function updateElements(e, i, s, a) {
            var n = "reset" === a,
              _this$_cachedMeta2 = this._cachedMeta,
              o = _this$_cachedMeta2.iScale,
              r = _this$_cachedMeta2.vScale,
              _this$_getSharedOptio3 = this._getSharedOptions(i, a),
              l = _this$_getSharedOptio3.sharedOptions,
              h = _this$_getSharedOptio3.includeOptions,
              c = o.axis,
              d = r.axis;
            for (var _t91 = i; _t91 < i + s; _t91++) {
              var _i79 = e[_t91],
                _s45 = !n && this.getParsed(_t91),
                _u6 = {},
                _g6 = _u6[c] = n ? o.getPixelForDecimal(0.5) : o.getPixelForValue(_s45[c]),
                _f6 = _u6[d] = n ? r.getBasePixel() : r.getPixelForValue(_s45[d]);
              _u6.skip = isNaN(_g6) || isNaN(_f6), h && (_u6.options = l || this.resolveDataElementOptions(_t91, _i79.active ? "active" : a), n && (_u6.options.radius = 0)), this.updateElement(_i79, _t91, _u6, a);
            }
          }
        }, {
          key: "resolveDataElementOptions",
          value: function resolveDataElementOptions(t, e) {
            var i = this.getParsed(t);
            var s = _get2(_getPrototypeOf(BubbleController.prototype), "resolveDataElementOptions", this).call(this, t, e);
            t = (s = s.$shared ? Object.assign({}, s, {
              $shared: !1
            }) : s).radius;
            return "active" !== e && (s.radius = 0), s.radius += T(i && i._custom, t), s;
          }
        }]);
        return BubbleController;
      }(Os), _defineProperty(_class11, "id", "bubble"), _defineProperty(_class11, "defaults", {
        datasetElementType: !1,
        dataElementType: "point",
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "borderWidth", "radius"]
          }
        }
      }), _defineProperty(_class11, "overrides", {
        scales: {
          x: {
            type: "linear"
          },
          y: {
            type: "linear"
          }
        }
      }), _class11),
      DoughnutController: pa,
      LineController: (_class12 = /*#__PURE__*/function (_Os5) {
        _inherits(LineController, _Os5);
        var _super8 = _createSuper(LineController);
        function LineController() {
          _classCallCheck(this, LineController);
          return _super8.apply(this, arguments);
        }
        _createClass(LineController, [{
          key: "initialize",
          value: function initialize() {
            this.enableOptionSharing = !0, this.supportsDecimation = !0, _get2(_getPrototypeOf(LineController.prototype), "initialize", this).call(this);
          }
        }, {
          key: "update",
          value: function update(t) {
            var e = this._cachedMeta,
              i = e.dataset,
              _e$data = e.data,
              s = _e$data === void 0 ? [] : _e$data,
              a = e._dataset,
              n = this.chart._animationsDisabled;
            var _Ot = Ot(e, s, n),
              o = _Ot.start,
              r = _Ot.count;
            this._drawStart = o, this._drawCount = r, At(e) && (o = 0, r = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!a._decimated, i.points = s;
            var l = this.resolveDatasetElementOptions(t);
            this.options.showLine || (l.borderWidth = 0), l.segment = this.options.segment, this.updateElement(i, void 0, {
              animated: !n,
              options: l
            }, t), this.updateElements(s, o, r, t);
          }
        }, {
          key: "updateElements",
          value: function updateElements(e, i, t, s) {
            var a = "reset" === s,
              _this$_cachedMeta3 = this._cachedMeta,
              n = _this$_cachedMeta3.iScale,
              o = _this$_cachedMeta3.vScale,
              r = _this$_cachedMeta3._stacked,
              l = _this$_cachedMeta3._dataset,
              _this$_getSharedOptio4 = this._getSharedOptions(i, s),
              h = _this$_getSharedOptio4.sharedOptions,
              c = _this$_getSharedOptio4.includeOptions,
              d = n.axis,
              u = o.axis,
              _this$options11 = this.options,
              g = _this$options11.spanGaps,
              f = _this$options11.segment,
              p = rt(g) ? g : Number.POSITIVE_INFINITY,
              m = this.chart._animationsDisabled || a || "none" === s,
              b = i + t,
              x = e.length;
            var v = 0 < i && this.getParsed(i - 1);
            for (var _t92 = 0; _t92 < x; ++_t92) {
              var _g7 = e[_t92],
                _x5 = m ? _g7 : {};
              var _, y, M, w;
              _t92 < i || _t92 >= b ? _x5.skip = !0 : (y = P((_ = this.getParsed(_t92))[u]), M = _x5[d] = n.getPixelForValue(_[d], _t92), w = _x5[u] = a || y ? o.getBasePixel() : o.getPixelForValue(r ? this.applyStack(o, _, r) : _[u], _t92), _x5.skip = isNaN(M) || isNaN(w) || y, _x5.stop = 0 < _t92 && Math.abs(_[d] - v[d]) > p, f && (_x5.parsed = _, _x5.raw = l.data[_t92]), c && (_x5.options = h || this.resolveDataElementOptions(_t92, _g7.active ? "active" : s)), m || this.updateElement(_g7, _t92, _x5, s), v = _);
            }
          }
        }, {
          key: "getMaxOverflow",
          value: function getMaxOverflow() {
            var t = this._cachedMeta,
              e = t.dataset,
              i = e.options && e.options.borderWidth || 0,
              s = t.data || [];
            if (!s.length) return i;
            var a = s[0].size(this.resolveDataElementOptions(0)),
              n = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
            return Math.max(i, a, n) / 2;
          }
        }, {
          key: "draw",
          value: function draw() {
            var t = this._cachedMeta;
            t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), _get2(_getPrototypeOf(LineController.prototype), "draw", this).call(this);
          }
        }]);
        return LineController;
      }(Os), _defineProperty(_class12, "id", "line"), _defineProperty(_class12, "defaults", {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: !0,
        spanGaps: !1
      }), _defineProperty(_class12, "overrides", {
        scales: {
          _index_: {
            type: "category"
          },
          _value_: {
            type: "linear"
          }
        }
      }), _class12),
      PieController: (_class13 = /*#__PURE__*/function (_pa) {
        _inherits(PieController, _pa);
        var _super9 = _createSuper(PieController);
        function PieController() {
          _classCallCheck(this, PieController);
          return _super9.apply(this, arguments);
        }
        return _createClass(PieController);
      }(pa), _defineProperty(_class13, "id", "pie"), _defineProperty(_class13, "defaults", {
        cutout: 0,
        rotation: 0,
        circumference: 360,
        radius: "100%"
      }), _class13),
      PolarAreaController: ma,
      RadarController: (_class14 = /*#__PURE__*/function (_Os6) {
        _inherits(RadarController, _Os6);
        var _super10 = _createSuper(RadarController);
        function RadarController() {
          _classCallCheck(this, RadarController);
          return _super10.apply(this, arguments);
        }
        _createClass(RadarController, [{
          key: "getLabelAndValue",
          value: function getLabelAndValue(t) {
            var e = this._cachedMeta.vScale,
              i = this.getParsed(t);
            return {
              label: e.getLabels()[t],
              value: "" + e.getLabelForValue(i[e.axis])
            };
          }
        }, {
          key: "parseObjectData",
          value: function parseObjectData(t, e, i, s) {
            return ii.bind(this)(t, e, i, s);
          }
        }, {
          key: "update",
          value: function update(t) {
            var e = this._cachedMeta,
              i = e.dataset,
              s = e.data || [],
              a = e.iScale.getLabels();
            if (i.points = s, "resize" !== t) {
              var _e60 = this.resolveDatasetElementOptions(t);
              this.options.showLine || (_e60.borderWidth = 0);
              var n = {
                _loop: !0,
                _fullLoop: a.length === s.length,
                options: _e60
              };
              this.updateElement(i, void 0, n, t);
            }
            this.updateElements(s, 0, s.length, t);
          }
        }, {
          key: "updateElements",
          value: function updateElements(e, i, s, a) {
            var n = this._cachedMeta.rScale,
              o = "reset" === a;
            for (var _t93 = i; _t93 < i + s; _t93++) {
              var _i80 = e[_t93],
                _s46 = this.resolveDataElementOptions(_t93, _i80.active ? "active" : a),
                _r10 = n.getPointPositionForValue(_t93, this.getParsed(_t93).r),
                _l14 = o ? n.xCenter : _r10.x,
                _h10 = o ? n.yCenter : _r10.y,
                _c10 = {
                  x: _l14,
                  y: _h10,
                  angle: _r10.angle,
                  skip: isNaN(_l14) || isNaN(_h10),
                  options: _s46
                };
              this.updateElement(_i80, _t93, _c10, a);
            }
          }
        }]);
        return RadarController;
      }(Os), _defineProperty(_class14, "id", "radar"), _defineProperty(_class14, "defaults", {
        datasetElementType: "line",
        dataElementType: "point",
        indexAxis: "r",
        showLine: !0,
        elements: {
          line: {
            fill: "start"
          }
        }
      }), _defineProperty(_class14, "overrides", {
        aspectRatio: 1,
        scales: {
          r: {
            type: "radialLinear"
          }
        }
      }), _class14),
      ScatterController: (_class15 = /*#__PURE__*/function (_Os7) {
        _inherits(ScatterController, _Os7);
        var _super11 = _createSuper(ScatterController);
        function ScatterController() {
          _classCallCheck(this, ScatterController);
          return _super11.apply(this, arguments);
        }
        _createClass(ScatterController, [{
          key: "getLabelAndValue",
          value: function getLabelAndValue(t) {
            var e = this._cachedMeta,
              i = this.chart.data.labels || [],
              s = e.xScale,
              a = e.yScale,
              n = this.getParsed(t),
              o = s.getLabelForValue(n.x),
              r = a.getLabelForValue(n.y);
            return {
              label: i[t] || "",
              value: "(" + o + ", " + r + ")"
            };
          }
        }, {
          key: "update",
          value: function update(t) {
            var e = this._cachedMeta,
              _e$data2 = e.data,
              i = _e$data2 === void 0 ? [] : _e$data2,
              s = this.chart._animationsDisabled;
            var _Ot2 = Ot(e, i, s),
              a = _Ot2.start,
              n = _Ot2.count;
            if (this._drawStart = a, this._drawCount = n, At(e) && (a = 0, n = i.length), this.options.showLine) {
              this.datasetElementType || this.addElements();
              var _a36 = e.dataset,
                _n25 = e._dataset,
                _o21 = (_a36._chart = this.chart, _a36._datasetIndex = this.index, _a36._decimated = !!_n25._decimated, _a36.points = i, this.resolveDatasetElementOptions(t));
              _o21.segment = this.options.segment, this.updateElement(_a36, void 0, {
                animated: !s,
                options: _o21
              }, t);
            } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
            this.updateElements(i, a, n, t);
          }
        }, {
          key: "addElements",
          value: function addElements() {
            var t = this.options["showLine"];
            !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), _get2(_getPrototypeOf(ScatterController.prototype), "addElements", this).call(this);
          }
        }, {
          key: "updateElements",
          value: function updateElements(e, i, s, a) {
            var n = "reset" === a,
              _this$_cachedMeta4 = this._cachedMeta,
              o = _this$_cachedMeta4.iScale,
              r = _this$_cachedMeta4.vScale,
              l = _this$_cachedMeta4._stacked,
              h = _this$_cachedMeta4._dataset,
              t = this.resolveDataElementOptions(i, a),
              c = this.getSharedOptions(t),
              d = this.includeOptions(a, c),
              u = o.axis,
              g = r.axis,
              _this$options12 = this.options,
              f = _this$options12.spanGaps,
              p = _this$options12.segment,
              m = rt(f) ? f : Number.POSITIVE_INFINITY,
              b = this.chart._animationsDisabled || n || "none" === a;
            var x = 0 < i && this.getParsed(i - 1);
            for (var _t94 = i; _t94 < i + s; ++_t94) {
              var _i81 = e[_t94],
                _s47 = this.getParsed(_t94),
                _f7 = b ? _i81 : {},
                _v2 = P(_s47[g]),
                _2 = _f7[u] = o.getPixelForValue(_s47[u], _t94),
                _y = _f7[g] = n || _v2 ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, _s47, l) : _s47[g], _t94);
              _f7.skip = isNaN(_2) || isNaN(_y) || _v2, _f7.stop = 0 < _t94 && Math.abs(_s47[u] - x[u]) > m, p && (_f7.parsed = _s47, _f7.raw = h.data[_t94]), d && (_f7.options = c || this.resolveDataElementOptions(_t94, _i81.active ? "active" : a)), b || this.updateElement(_i81, _t94, _f7, a), x = _s47;
            }
            this.updateSharedOptions(c, a, t);
          }
        }, {
          key: "getMaxOverflow",
          value: function getMaxOverflow() {
            var t = this._cachedMeta,
              i = t.data || [];
            if (!this.options.showLine) {
              var _e61 = 0;
              for (var _t95 = i.length - 1; 0 <= _t95; --_t95) _e61 = Math.max(_e61, i[_t95].size(this.resolveDataElementOptions(_t95)) / 2);
              return 0 < _e61 && _e61;
            }
            var e = t.dataset,
              e = e.options && e.options.borderWidth || 0;
            if (!i.length) return e;
            var s = i[0].size(this.resolveDataElementOptions(0)),
              a = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
            return Math.max(e, s, a) / 2;
          }
        }]);
        return ScatterController;
      }(Os), _defineProperty(_class15, "id", "scatter"), _defineProperty(_class15, "defaults", {
        datasetElementType: !1,
        dataElementType: "point",
        showLine: !1,
        fill: !1
      }), _defineProperty(_class15, "overrides", {
        interaction: {
          mode: "point"
        },
        scales: {
          x: {
            type: "linear"
          },
          y: {
            type: "linear"
          }
        }
      }), _class15)
    });
    function xa(t, e, i, s) {
      return {
        x: i + t * Math.cos(e),
        y: s + t * Math.sin(e)
      };
    }
    function va(t, e, i, s, a, n) {
      var o = e.x,
        r = e.y,
        l = e.startAngle,
        h = e.pixelMargin,
        c = e.innerRadius,
        d = Math.max(e.outerRadius + s + i - h, 0),
        h = 0 < c ? c + s + i + h : 0;
      var u = 0;
      var g = a - l;
      if (s) {
        var _t96 = ((0 < c ? c - s : 0) + (0 < d ? d - s : 0)) / 2;
        u = (g - (0 != _t96 ? g * _t96 / (_t96 + s) : g)) / 2;
      }
      var c = (g - Math.max(0.001, g * d - i / S) / d) / 2,
        g = l + c + u,
        l = a - c - u,
        _ref14 = function (t, e, i, s) {
          t = yi(t.options.borderRadius, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
          var a = (i - e) / 2,
            n = Math.min(a, s * e / 2),
            o = function o(t) {
              var e = (i - Math.min(a, t)) * s / 2;
              return C(t, 0, Math.min(a, e));
            };
          return {
            outerStart: o(t.outerStart),
            outerEnd: o(t.outerEnd),
            innerStart: C(t.innerStart, 0, n),
            innerEnd: C(t.innerEnd, 0, n)
          };
        }(e, h, d, l - g),
        c = _ref14.outerStart,
        f = _ref14.outerEnd,
        p = _ref14.innerStart,
        m = _ref14.innerEnd,
        b = d - c,
        x = d - f,
        v = g + c / b,
        _ = l - f / x,
        y = h + p,
        M = h + m,
        w = g + p / y,
        k = l - m / M;
      if (t.beginPath(), n) {
        var _e62 = (v + _) / 2;
        if (t.arc(o, r, d, v, _e62), t.arc(o, r, d, _e62, _), 0 < f) {
          var _e63 = xa(x, _, o, r);
          t.arc(_e63.x, _e63.y, f, _, l + D);
        }
        var _i82 = xa(M, l, o, r);
        if (t.lineTo(_i82.x, _i82.y), 0 < m) {
          var _e64 = xa(M, k, o, r);
          t.arc(_e64.x, _e64.y, m, l + D, k + Math.PI);
        }
        var _s48 = (l - m / h + (g + p / h)) / 2;
        if (t.arc(o, r, h, l - m / h, _s48, !0), t.arc(o, r, h, _s48, g + p / h, !0), 0 < p) {
          var _e65 = xa(y, w, o, r);
          t.arc(_e65.x, _e65.y, p, w + Math.PI, g - D);
        }
        var _a37 = xa(b, g, o, r);
        if (t.lineTo(_a37.x, _a37.y), 0 < c) {
          var _e66 = xa(b, v, o, r);
          t.arc(_e66.x, _e66.y, c, g - D, v);
        }
      } else {
        t.moveTo(o, r);
        var _e67 = Math.cos(v) * d + o,
          _i83 = Math.sin(v) * d + r,
          _s49 = (t.lineTo(_e67, _i83), Math.cos(_) * d + o),
          _a38 = Math.sin(_) * d + r;
        t.lineTo(_s49, _a38);
      }
      t.closePath();
    }
    function _a(t, e) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : e;
      t.lineCap = T(i.borderCapStyle, e.borderCapStyle), t.setLineDash(T(i.borderDash, e.borderDash)), t.lineDashOffset = T(i.borderDashOffset, e.borderDashOffset), t.lineJoin = T(i.borderJoinStyle, e.borderJoinStyle), t.lineWidth = T(i.borderWidth, e.borderWidth), t.strokeStyle = T(i.borderColor, e.borderColor);
    }
    function ya(t, e, i) {
      t.lineTo(i.x, i.y);
    }
    function Ma(t, e) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return function (t, i) {
        var t = t.length,
          _i84 = i,
          _i84$start = _i84.start,
          i = _i84$start === void 0 ? 0 : _i84$start,
          _i84$end = _i84.end,
          s = _i84$end === void 0 ? t - 1 : _i84$end,
          a = e.start,
          n = e.end,
          o = Math.max(i, a),
          r = Math.min(s, n);
        return {
          count: t,
          start: o,
          loop: e.loop,
          ilen: r < o && !(i < a && s < a || n < i && n < s) ? t + r - o : r - o
        };
      }(t, i);
    }
    function wa(t, e, i, s) {
      var a = e.points,
        n = e.options,
        _Ma = Ma(a, i, s),
        o = _Ma.count,
        r = _Ma.start,
        l = _Ma.loop,
        h = _Ma.ilen,
        c = n.stepped ? We : n.tension || "monotone" === n.cubicInterpolationMode ? Ne : ya;
      var d,
        u,
        g,
        _ref15 = s || {},
        _ref15$move = _ref15.move,
        f = _ref15$move === void 0 ? !0 : _ref15$move,
        p = _ref15.reverse;
      for (d = 0; d <= h; ++d) (u = a[(r + (p ? h - d : d)) % o]).skip || (f ? (t.moveTo(u.x, u.y), f = !1) : c(t, g, u, p, n.stepped), g = u);
      return l && (u = a[(r + (p ? h : 0)) % o], c(t, g, u, p, n.stepped)), !!l;
    }
    function ka(t, e, i, s) {
      var a = e.points,
        _Ma2 = Ma(a, i, s),
        n = _Ma2.count,
        o = _Ma2.start,
        r = _Ma2.ilen,
        _ref16 = s || {},
        _ref16$move = _ref16.move,
        l = _ref16$move === void 0 ? !0 : _ref16$move,
        h = _ref16.reverse;
      var c,
        d,
        u,
        g,
        f,
        p,
        m = 0,
        b = 0;
      var x = function x(t) {
          return (o + (h ? r - t : t)) % n;
        },
        v = function v() {
          g !== f && (t.lineTo(m, f), t.lineTo(m, g), t.lineTo(m, p));
        };
      for (l && (d = a[x(0)], t.moveTo(d.x, d.y)), c = 0; c <= r; ++c) if (!(d = a[x(c)]).skip) {
        var _e68 = d.x,
          _i85 = d.y,
          _s50 = 0 | _e68;
        _s50 === u ? (_i85 < g ? g = _i85 : _i85 > f && (f = _i85), m = (b * m + _e68) / ++b) : (v(), t.lineTo(_e68, _i85), u = _s50, b = 0, g = f = _i85), p = _i85;
      }
      v();
    }
    function Sa(t) {
      var e = t.options,
        i = e.borderDash && e.borderDash.length;
      return t._decimated || t._loop || e.tension || "monotone" === e.cubicInterpolationMode || e.stepped || i ? wa : ka;
    }
    var Pa = "function" == typeof Path2D;
    var Da = /*#__PURE__*/function (_e69) {
      _inherits(Da, _e69);
      var _super12 = _createSuper(Da);
      function Da(t) {
        var _this24;
        _classCallCheck(this, Da);
        _this24 = _super12.call(this), _this24.animated = !0, _this24.options = void 0, _this24._chart = void 0, _this24._loop = void 0, _this24._fullLoop = void 0, _this24._path = void 0, _this24._points = void 0, _this24._segments = void 0, _this24._decimated = !1, _this24._pointsUpdated = !1, _this24._datasetIndex = void 0, t && Object.assign(_assertThisInitialized(_this24), t);
        return _this24;
      }
      _createClass(Da, [{
        key: "updateControlPoints",
        value: function updateControlPoints(t, e) {
          var i,
            s = this.options;
          !s.tension && "monotone" !== s.cubicInterpolationMode || s.stepped || this._pointsUpdated || (i = s.spanGaps ? this._loop : this._fullLoop, hi(this._points, s, t, i, e), this._pointsUpdated = !0);
        }
      }, {
        key: "points",
        get: function get() {
          return this._points;
        },
        set: function set(t) {
          this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
        }
      }, {
        key: "segments",
        get: function get() {
          return this._segments || (this._segments = Ri(this, this.options.segment));
        }
      }, {
        key: "first",
        value: function first() {
          var t = this.segments,
            e = this.points;
          return t.length && e[t[0].start];
        }
      }, {
        key: "last",
        value: function last() {
          var t = this.segments,
            e = this.points,
            i = t.length;
          return i && e[t[i - 1].end];
        }
      }, {
        key: "interpolate",
        value: function interpolate(i, s) {
          var a = this.options,
            n = i[s],
            o = this.points,
            r = Ei(this, {
              property: s,
              start: n,
              end: n
            });
          if (r.length) {
            var _l15 = [],
              _h11 = a.stepped ? pi : a.tension || "monotone" === a.cubicInterpolationMode ? mi : fi;
            var _e70, _t97;
            for (_e70 = 0, _t97 = r.length; _e70 < _t97; ++_e70) {
              var _r$_e = r[_e70],
                _t98 = _r$_e.start,
                _c11 = _r$_e.end,
                _d10 = o[_t98],
                _u7 = o[_c11];
              if (_d10 === _u7) _l15.push(_d10);else {
                var _g8 = _h11(_d10, _u7, Math.abs((n - _d10[s]) / (_u7[s] - _d10[s])), a.stepped);
                _g8[s] = i[s], _l15.push(_g8);
              }
            }
            return 1 === _l15.length ? _l15[0] : _l15;
          }
        }
      }, {
        key: "pathSegment",
        value: function pathSegment(t, e, i) {
          return Sa(this)(t, this, e, i);
        }
      }, {
        key: "path",
        value: function path(t, e, i) {
          var s = this.segments,
            a = Sa(this);
          var n = this._loop;
          e = e || 0, i = i || this.points.length - e;
          var _iterator27 = _createForOfIteratorHelper(s),
            _step27;
          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var _o22 = _step27.value;
              n &= a(t, this, _o22, {
                start: e,
                end: e + i - 1
              });
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }
          return !!n;
        }
      }, {
        key: "draw",
        value: function draw(t, e, i, s) {
          var a,
            n = this.options || {};
          (this.points || []).length && n.borderWidth && (t.save(), n = t, a = this, i = i, s = s, (Pa && !a.options.segment ? function (t, e, i, s) {
            var a = e._path;
            a || (a = e._path = new Path2D(), e.path(a, i, s) && a.closePath()), _a(t, e.options), t.stroke(a);
          } : function (t, e, i, s) {
            var a = e.segments,
              n = e.options,
              o = Sa(e);
            var _iterator28 = _createForOfIteratorHelper(a),
              _step28;
            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var _r11 = _step28.value;
                _a(t, n, _r11.style), t.beginPath(), o(t, e, _r11, {
                  start: i,
                  end: i + s - 1
                }) && t.closePath(), t.stroke();
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }
          })(n, a, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
        }
      }]);
      return Da;
    }(e);
    _defineProperty(Da, "id", "line");
    _defineProperty(Da, "defaults", {
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
      tension: 0
    });
    _defineProperty(Da, "defaultRoutes", {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    });
    _defineProperty(Da, "descriptors", {
      _scriptable: !0,
      _indexable: function _indexable(t) {
        return "borderDash" !== t && "fill" !== t;
      }
    });
    function Ca(t, e, i, s) {
      var a = t.options,
        _t$getProps2 = t.getProps([i], s),
        t = _t$getProps2[i];
      return Math.abs(e - t) < a.radius + a.hitRadius;
    }
    function Oa(t, e) {
      var _t$getProps3 = t.getProps(["x", "y", "base", "width", "height"], e),
        e = _t$getProps3.x,
        i = _t$getProps3.y,
        s = _t$getProps3.base,
        a = _t$getProps3.width,
        n = _t$getProps3.height;
      var o, r, l, h, c;
      return h = t.horizontal ? (c = n / 2, o = Math.min(e, s), r = Math.max(e, s), l = i - c, i + c) : (c = a / 2, o = e - c, r = e + c, l = Math.min(i, s), Math.max(i, s)), {
        left: o,
        top: l,
        right: r,
        bottom: h
      };
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
    function Ea(t, e) {
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return function (i) {
        var s = t.x !== i.x ? -e : 0,
          a = t.y !== i.y ? -e : 0,
          n = (t.x + t.w !== i.x + i.w ? e : 0) - s,
          i = (t.y + t.h !== i.y + i.h ? e : 0) - a;
        return {
          x: t.x + s,
          y: t.y + a,
          w: t.w + n,
          h: t.h + i,
          radius: t.radius
        };
      }(i);
    }
    var Ra = Object.freeze({
      __proto__: null,
      ArcElement: (_class17 = /*#__PURE__*/function (_e71) {
        _inherits(ArcElement, _e71);
        var _super13 = _createSuper(ArcElement);
        function ArcElement(t) {
          var _this25;
          _classCallCheck(this, ArcElement);
          (_this25 = _super13.call(this), _defineProperty(_assertThisInitialized(_this25), "circumference", void 0), _defineProperty(_assertThisInitialized(_this25), "endAngle", void 0), _defineProperty(_assertThisInitialized(_this25), "fullCircles", void 0), _defineProperty(_assertThisInitialized(_this25), "innerRadius", void 0), _defineProperty(_assertThisInitialized(_this25), "outerRadius", void 0), _defineProperty(_assertThisInitialized(_this25), "pixelMargin", void 0), _defineProperty(_assertThisInitialized(_this25), "startAngle", void 0)), _this25.options = void 0, _this25.circumference = void 0, _this25.startAngle = void 0, _this25.endAngle = void 0, _this25.innerRadius = void 0, _this25.outerRadius = void 0, _this25.pixelMargin = 0, _this25.fullCircles = 0, t && Object.assign(_assertThisInitialized(_this25), t);
          return _this25;
        }
        _createClass(ArcElement, [{
          key: "inRange",
          value: function inRange(t, e, i) {
            var _ut = ut(this.getProps(["x", "y"], i), {
                x: t,
                y: e
              }),
              t = _ut.angle,
              e = _ut.distance,
              _this$getProps2 = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], i),
              i = _this$getProps2.startAngle,
              s = _this$getProps2.endAngle,
              a = _this$getProps2.innerRadius,
              n = _this$getProps2.outerRadius,
              o = _this$getProps2.circumference,
              r = (this.options.spacing + this.options.borderWidth) / 2,
              o = T(o, s - i) >= _ || pt(t, i, s),
              t = c(e, a + r, n + r);
            return o && t;
          }
        }, {
          key: "getCenterPoint",
          value: function getCenterPoint(t) {
            var _this$getProps3 = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"], t),
              t = _this$getProps3.x,
              e = _this$getProps3.y,
              i = _this$getProps3.startAngle,
              s = _this$getProps3.endAngle,
              a = _this$getProps3.innerRadius,
              n = _this$getProps3.outerRadius,
              _this$options13 = this.options,
              o = _this$options13.offset,
              r = _this$options13.spacing,
              i = (i + s) / 2,
              s = (a + n + r + o) / 2;
            return {
              x: t + Math.cos(i) * s,
              y: e + Math.sin(i) * s
            };
          }
        }, {
          key: "tooltipPosition",
          value: function tooltipPosition(t) {
            return this.getCenterPoint(t);
          }
        }, {
          key: "draw",
          value: function draw(e) {
            var i = this.options,
              s = this.circumference,
              a = (i.offset || 0) / 4,
              n = (i.spacing || 0) / 2,
              o = i.circular;
            if (this.pixelMargin = "inner" === i.borderAlign ? 0.33 : 0, this.fullCircles = s > _ ? Math.floor(s / _) : 0, !(0 === s || this.innerRadius < 0 || this.outerRadius < 0)) {
              e.save();
              var r = (this.startAngle + this.endAngle) / 2,
                r = (e.translate(Math.cos(r) * a, Math.sin(r) * a), a * (1 - Math.sin(Math.min(S, s || 0))));
              e.fillStyle = i.backgroundColor, e.strokeStyle = i.borderColor;
              {
                var l = e;
                a = this;
                s = r;
                i = n;
                var h = o;
                var _a39 = a,
                  c = _a39.fullCircles,
                  d = _a39.startAngle,
                  u = _a39.circumference;
                var _t99 = a.endAngle;
                if (c) {
                  va(l, a, s, i, _t99, h);
                  for (var _t100 = 0; _t100 < c; ++_t100) l.fill();
                  isNaN(u) || (_t99 = d + (u % _ || _));
                }
                va(l, a, s, i, _t99, h), l.fill();
              }
              var g = e,
                d = this,
                u = r,
                a = n,
                s = o,
                _d11 = d,
                f = _d11.fullCircles,
                i = _d11.startAngle,
                h = _d11.circumference,
                r = _d11.options,
                _r12 = r,
                n = _r12.borderWidth,
                o = _r12.borderJoinStyle,
                p = _r12.borderDash,
                m = _r12.borderDashOffset,
                r = "inner" === r.borderAlign;
              if (n) {
                g.setLineDash(p || []), g.lineDashOffset = m, r ? (g.lineWidth = 2 * n, g.lineJoin = o || "round") : (g.lineWidth = n, g.lineJoin = o || "bevel");
                var _t101 = d.endAngle;
                if (f) {
                  va(g, d, u, a, _t101, s);
                  for (var _t102 = 0; _t102 < f; ++_t102) g.stroke();
                  isNaN(h) || (_t101 = i + (h % _ || _));
                }
                if (r) {
                  p = g;
                  m = d;
                  n = _t101;
                  var _m5 = m,
                    m = _m5.startAngle,
                    o = _m5.pixelMargin,
                    i = _m5.x,
                    h = _m5.y,
                    r = _m5.outerRadius,
                    b = _m5.innerRadius,
                    x = o / r;
                  p.beginPath(), p.arc(i, h, r, m - x, n + x), o < b ? p.arc(i, h, b, n + (x = o / b), m - x, !0) : p.arc(i, h, o, n + D, m - D), p.closePath(), p.clip();
                }
                f || (va(g, d, u, a, _t101, s), g.stroke());
              }
              e.restore();
            }
          }
        }]);
        return ArcElement;
      }(e), _defineProperty(_class17, "id", "arc"), _defineProperty(_class17, "defaults", {
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
        circular: !0
      }), _defineProperty(_class17, "defaultRoutes", {
        backgroundColor: "backgroundColor"
      }), _defineProperty(_class17, "descriptors", {
        _scriptable: !0,
        _indexable: function _indexable(t) {
          return "borderDash" !== t;
        }
      }), _class17),
      BarElement: (_class18 = /*#__PURE__*/function (_e72) {
        _inherits(BarElement, _e72);
        var _super14 = _createSuper(BarElement);
        function BarElement(t) {
          var _this26;
          _classCallCheck(this, BarElement);
          _this26 = _super14.call(this), _this26.options = void 0, _this26.horizontal = void 0, _this26.base = void 0, _this26.width = void 0, _this26.height = void 0, _this26.inflateAmount = void 0, t && Object.assign(_assertThisInitialized(_this26), t);
          return _this26;
        }
        _createClass(BarElement, [{
          key: "draw",
          value: function draw(t) {
            var e = this.inflateAmount,
              _this$options14 = this.options,
              i = _this$options14.borderColor,
              s = _this$options14.backgroundColor,
              _ref17 = (u = Oa(r = this), g = u.right - u.left, f = u.bottom - u.top, c = g / 2, p = f / 2, d = (h = r).options.borderWidth, h = h.borderSkipped, d = Mi(d), p = {
                t: Aa(h.top, d.top, 0, p),
                r: Aa(h.right, d.right, 0, c),
                b: Aa(h.bottom, d.bottom, 0, p),
                l: Aa(h.left, d.left, 0, c)
              }, h = g / 2, d = f / 2, r = (c = r).getProps(["enableBorderRadius"]).enableBorderRadius, m = c.options.borderRadius, l = wi(m), h = Math.min(h, d), d = c.borderSkipped, r = {
                topLeft: Aa(!(c = r || A(m)) || d.top || d.left, l.topLeft, 0, h),
                topRight: Aa(!c || d.top || d.right, l.topRight, 0, h),
                bottomLeft: Aa(!c || d.bottom || d.left, l.bottomLeft, 0, h),
                bottomRight: Aa(!c || d.bottom || d.right, l.bottomRight, 0, h)
              }, {
                outer: {
                  x: u.left,
                  y: u.top,
                  w: g,
                  h: f,
                  radius: r
                },
                inner: {
                  x: u.left + p.l,
                  y: u.top + p.t,
                  w: g - p.l - p.r,
                  h: f - p.t - p.b,
                  radius: {
                    topLeft: Math.max(0, r.topLeft - Math.max(p.t, p.l)),
                    topRight: Math.max(0, r.topRight - Math.max(p.t, p.r)),
                    bottomLeft: Math.max(0, r.bottomLeft - Math.max(p.b, p.l)),
                    bottomRight: Math.max(0, r.bottomRight - Math.max(p.b, p.r))
                  }
                }
              }),
              a = _ref17.inner,
              n = _ref17.outer,
              o = (m = n.radius).topLeft || m.topRight || m.bottomLeft || m.bottomRight ? je : La;
            var r, l, h, c, d, u, g, f, p, m;
            t.save(), n.w === a.w && n.h === a.h || (t.beginPath(), o(t, Ea(n, e, a)), t.clip(), o(t, Ea(a, -e, n)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), o(t, Ea(a, e)), t.fillStyle = s, t.fill(), t.restore();
          }
        }, {
          key: "inRange",
          value: function inRange(t, e, i) {
            return Ta(this, t, e, i);
          }
        }, {
          key: "inXRange",
          value: function inXRange(t, e) {
            return Ta(this, t, null, e);
          }
        }, {
          key: "inYRange",
          value: function inYRange(t, e) {
            return Ta(this, null, t, e);
          }
        }, {
          key: "getCenterPoint",
          value: function getCenterPoint(t) {
            var _this$getProps4 = this.getProps(["x", "y", "base", "horizontal"], t),
              t = _this$getProps4.x,
              e = _this$getProps4.y,
              i = _this$getProps4.base,
              s = _this$getProps4.horizontal;
            return {
              x: s ? (t + i) / 2 : t,
              y: s ? e : (e + i) / 2
            };
          }
        }, {
          key: "getRange",
          value: function getRange(t) {
            return "x" === t ? this.width / 2 : this.height / 2;
          }
        }]);
        return BarElement;
      }(e), _defineProperty(_class18, "id", "bar"), _defineProperty(_class18, "defaults", {
        borderSkipped: "start",
        borderWidth: 0,
        borderRadius: 0,
        inflateAmount: "auto",
        pointStyle: void 0
      }), _defineProperty(_class18, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
      }), _class18),
      LineElement: Da,
      PointElement: (_class19 = /*#__PURE__*/function (_e73) {
        _inherits(PointElement, _e73);
        var _super15 = _createSuper(PointElement);
        function PointElement(t) {
          var _this27;
          _classCallCheck(this, PointElement);
          (_this27 = _super15.call(this), _defineProperty(_assertThisInitialized(_this27), "parsed", void 0), _defineProperty(_assertThisInitialized(_this27), "skip", void 0), _defineProperty(_assertThisInitialized(_this27), "stop", void 0), _assertThisInitialized(_this27)), _this27.options = void 0, _this27.parsed = void 0, _this27.skip = void 0, _this27.stop = void 0, t && Object.assign(_assertThisInitialized(_this27), t);
          return _this27;
        }
        _createClass(PointElement, [{
          key: "inRange",
          value: function inRange(t, e, i) {
            var s = this.options,
              _this$getProps5 = this.getProps(["x", "y"], i),
              i = _this$getProps5.x,
              a = _this$getProps5.y;
            return Math.pow(t - i, 2) + Math.pow(e - a, 2) < Math.pow(s.hitRadius + s.radius, 2);
          }
        }, {
          key: "inXRange",
          value: function inXRange(t, e) {
            return Ca(this, t, "x", e);
          }
        }, {
          key: "inYRange",
          value: function inYRange(t, e) {
            return Ca(this, t, "y", e);
          }
        }, {
          key: "getCenterPoint",
          value: function getCenterPoint(t) {
            var _this$getProps6 = this.getProps(["x", "y"], t),
              t = _this$getProps6.x,
              e = _this$getProps6.y;
            return {
              x: t,
              y: e
            };
          }
        }, {
          key: "size",
          value: function size(t) {
            var e = (t = t || this.options || {}).radius || 0;
            return 2 * ((e = Math.max(e, e && t.hoverRadius || 0)) + (e && t.borderWidth || 0));
          }
        }, {
          key: "draw",
          value: function draw(t, e) {
            var i = this.options;
            this.skip || i.radius < 0.1 || !M(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, ze(t, i, this.x, this.y));
          }
        }, {
          key: "getRange",
          value: function getRange() {
            var t = this.options || {};
            return t.radius + t.hitRadius;
          }
        }]);
        return PointElement;
      }(e), _defineProperty(_class19, "id", "point"), _defineProperty(_class19, "defaults", {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
      }), _defineProperty(_class19, "defaultRoutes", {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
      }), _class19)
    });
    function Ia(t) {
      var e = this.getLabels();
      return 0 <= t && t < e.length ? e[t] : t;
    }
    function za(t, e, _ref18) {
      var i = _ref18.horizontal,
        s = _ref18.minRotation;
      s = L(s), i = (i ? Math.sin(s) : Math.cos(s)) || 0.001;
      return Math.min(e / i, 0.75 * e * ("" + t).length);
    }
    var Fa = /*#__PURE__*/function (_zs) {
      _inherits(Fa, _zs);
      var _super16 = _createSuper(Fa);
      function Fa(t) {
        var _this28;
        _classCallCheck(this, Fa);
        _this28 = _super16.call(this, t), _this28.start = void 0, _this28.end = void 0, _this28._startValue = void 0, _this28._endValue = void 0, _this28._valueRange = 0;
        return _this28;
      }
      _createClass(Fa, [{
        key: "parse",
        value: function parse(t, e) {
          return P(t) || ("number" == typeof t || t instanceof Number) && !isFinite(+t) ? null : +t;
        }
      }, {
        key: "handleTickRangeOptions",
        value: function handleTickRangeOptions() {
          var t = this.options["beginAtZero"],
            _this$getUserBounds2 = this.getUserBounds(),
            e = _this$getUserBounds2.minDefined,
            i = _this$getUserBounds2.maxDefined;
          var s = this.min,
            a = this.max;
          var n,
            o = function o(t) {
              return s = e ? s : t;
            },
            r = function r(t) {
              return a = i ? a : t;
            };
          if (t) {
            var _t103 = y(s),
              _e74 = y(a);
            _t103 < 0 && _e74 < 0 ? r(0) : 0 < _t103 && 0 < _e74 && o(0);
          }
          s === a && (n = 0 === a ? 1 : Math.abs(0.05 * a), r(a + n), t || o(s - n)), this.min = s, this.max = a;
        }
      }, {
        key: "getTickLimit",
        value: function getTickLimit() {
          var t,
            _this$options$ticks = this.options.ticks,
            e = _this$options$ticks.maxTicksLimit,
            i = _this$options$ticks.stepSize;
          return i ? 1e3 < (t = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1) && (console.warn("scales.".concat(this.id, ".ticks.stepSize: ").concat(i, " would result generating up to ").concat(t, " ticks. Limiting to 1000.")), t = 1e3) : (t = this.computeTickLimit(), e = e || 11), t = e ? Math.min(e, t) : t;
        }
      }, {
        key: "computeTickLimit",
        value: function computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }
      }, {
        key: "buildTicks",
        value: function buildTicks() {
          var t = this.options,
            e = t.ticks,
            i = this.getTickLimit();
          var s = function (t, e) {
            var i = [],
              s = t.bounds,
              a = t.step,
              n = t.min,
              o = t.max,
              r = t.precision,
              l = t.count,
              h = t.maxTicks,
              c = t.maxDigits,
              d = t.includeBounds,
              u = a || 1,
              g = h - 1,
              _e75 = e,
              f = _e75.min,
              p = _e75.max,
              m = !P(n),
              b = !P(o),
              x = !P(l),
              v = (p - f) / (c + 1);
            var _,
              y,
              M,
              w,
              k = nt((p - f) / g / u) * u;
            if (k < 1e-14 && !m && !b) return [{
              value: f
            }, {
              value: p
            }];
            (w = Math.ceil(p / k) - Math.floor(f / k)) > g && (k = nt(w * k / g / u) * u), P(r) || (_ = Math.pow(10, r), k = Math.ceil(k * _) / _), M = "ticks" === s ? (y = Math.floor(f / k) * k, Math.ceil(p / k) * k) : (y = f, p), m && b && a && lt((o - n) / a, k / 1e3) ? (w = Math.round(Math.min((o - n) / k, h)), k = (o - n) / w, y = n, M = o) : x ? (y = m ? n : y, M = b ? o : M, w = l - 1, k = (M - y) / w) : w = at(w = (M - y) / k, Math.round(w), k / 1e3) ? Math.round(w) : Math.ceil(w);
            e = Math.max(dt(k), dt(y));
            _ = Math.pow(10, P(r) ? e : r), y = Math.round(y * _) / _, M = Math.round(M * _) / _;
            var S = 0;
            for (m && (d && y !== n ? (i.push({
              value: n
            }), y < n && S++, at(Math.round((y + S * k) * _) / _, n, za(n, v, t)) && S++) : y < n && S++); S < w; ++S) {
              var _t104 = Math.round((y + S * k) * _) / _;
              if (b && _t104 > o) break;
              i.push({
                value: _t104
              });
            }
            return b && d && M !== o ? i.length && at(i[i.length - 1].value, o, za(o, v, t)) ? i[i.length - 1].value = o : i.push({
              value: o
            }) : b && M !== o || i.push({
              value: M
            }), i;
          }({
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
            includeBounds: !1 !== e.includeBounds
          }, this._range || this);
          return "ticks" === t.bounds && ht(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
        }
      }, {
        key: "configure",
        value: function configure() {
          var t = this.ticks;
          var e = this.min,
            i = this.max;
          _get2(_getPrototypeOf(Fa.prototype), "configure", this).call(this), this.options.offset && t.length && (t = (i - e) / Math.max(t.length - 1, 1) / 2, e -= t, i += t), this._startValue = e, this._endValue = i, this._valueRange = i - e;
        }
      }, {
        key: "getLabelForValue",
        value: function getLabelForValue(t) {
          return de(t, this.chart.options.locale, this.options.ticks.format);
        }
      }]);
      return Fa;
    }(zs);
    var Va = /*#__PURE__*/function (_Fa) {
      _inherits(Va, _Fa);
      var _super17 = _createSuper(Va);
      function Va() {
        _classCallCheck(this, Va);
        return _super17.apply(this, arguments);
      }
      _createClass(Va, [{
        key: "determineDataLimits",
        value: function determineDataLimits() {
          var _this$getMinMax = this.getMinMax(!0),
            t = _this$getMinMax.min,
            e = _this$getMinMax.max;
          this.min = p(t) ? t : 0, this.max = p(e) ? e : 1, this.handleTickRangeOptions();
        }
      }, {
        key: "computeTickLimit",
        value: function computeTickLimit() {
          var t = this.isHorizontal(),
            e = t ? this.width : this.height,
            i = L(this.options.ticks.minRotation),
            t = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
            i = this._resolveTickFontOptions(0);
          return Math.ceil(e / Math.min(40, i.lineHeight / t));
        }
      }, {
        key: "getPixelForValue",
        value: function getPixelForValue(t) {
          return null === t ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
        }
      }, {
        key: "getValueForPixel",
        value: function getValueForPixel(t) {
          return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
        }
      }]);
      return Va;
    }(Fa);
    _defineProperty(Va, "id", "linear");
    _defineProperty(Va, "defaults", {
      ticks: {
        callback: ge.formatters.numeric
      }
    });
    var Ba = function Ba(t) {
        return Math.floor(r(t));
      },
      Wa = function Wa(t, e) {
        return Math.pow(10, Ba(t) + e);
      };
    function Na(t) {
      return 1 == t / Math.pow(10, Ba(t));
    }
    function Ha(t, e, i) {
      i = Math.pow(10, i), t = Math.floor(t / i);
      return Math.ceil(e / i) - t;
    }
    var ja = /*#__PURE__*/function (_zs2) {
      _inherits(ja, _zs2);
      var _super18 = _createSuper(ja);
      function ja(t) {
        var _this29;
        _classCallCheck(this, ja);
        _this29 = _super18.call(this, t), _this29.start = void 0, _this29.end = void 0, _this29._startValue = void 0, _this29._valueRange = 0;
        return _this29;
      }
      _createClass(ja, [{
        key: "parse",
        value: function parse(t, e) {
          t = Fa.prototype.parse.apply(this, [t, e]);
          if (0 !== t) return p(t) && 0 < t ? t : null;
          this._zero = !0;
        }
      }, {
        key: "determineDataLimits",
        value: function determineDataLimits() {
          var _this$getMinMax2 = this.getMinMax(!0),
            t = _this$getMinMax2.min,
            e = _this$getMinMax2.max;
          this.min = p(t) ? Math.max(0, t) : null, this.max = p(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !p(this._userMin) && (this.min = t === Wa(this.min, 0) ? Wa(this.min, -1) : Wa(this.min, 0)), this.handleTickRangeOptions();
        }
      }, {
        key: "handleTickRangeOptions",
        value: function handleTickRangeOptions() {
          var _this$getUserBounds3 = this.getUserBounds(),
            e = _this$getUserBounds3.minDefined,
            i = _this$getUserBounds3.maxDefined;
          var s = this.min,
            a = this.max;
          var t = function t(_t105) {
              return s = e ? s : _t105;
            },
            n = function n(t) {
              return a = i ? a : t;
            };
          s === a && (s <= 0 ? (t(1), n(10)) : (t(Wa(s, -1)), n(Wa(a, 1)))), s <= 0 && t(Wa(a, -1)), a <= 0 && n(Wa(s, 1)), this.min = s, this.max = a;
        }
      }, {
        key: "buildTicks",
        value: function buildTicks() {
          var t = this.options,
            e = function (t, _ref19) {
              var e = _ref19.min,
                i = _ref19.max;
              e = g(t.min, e);
              var s = [],
                a = Ba(e);
              var n = function (t, e) {
                  var i = Ba(e - t);
                  for (; 10 < Ha(t, e, i);) i++;
                  for (; Ha(t, e, i) < 10;) i--;
                  return Math.min(i, Ba(t));
                }(e, i),
                o = n < 0 ? Math.pow(10, Math.abs(n)) : 1;
              var r = Math.pow(10, n),
                l = a > n ? Math.pow(10, a) : 0,
                h = Math.round((e - l) * o) / o,
                c = Math.floor((e - l) / r / 10) * r * 10;
              var d = Math.floor((h - c) / Math.pow(10, n)),
                u = g(t.min, Math.round((l + c + d * Math.pow(10, n)) * o) / o);
              for (; u < i;) s.push({
                value: u,
                major: Na(u),
                significand: d
              }), 10 <= d ? d = d < 15 ? 15 : 20 : d++, 20 <= d && (n++, d = 2, o = 0 <= n ? 1 : o), u = Math.round((l + c + d * Math.pow(10, n)) * o) / o;
              return e = g(t.max, u), s.push({
                value: e,
                major: Na(e),
                significand: d
              }), s;
            }({
              min: this._userMin,
              max: this._userMax
            }, this);
          return "ticks" === t.bounds && ht(e, this, "value"), t.reverse ? (e.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), e;
        }
      }, {
        key: "getLabelForValue",
        value: function getLabelForValue(t) {
          return void 0 === t ? "0" : de(t, this.chart.options.locale, this.options.ticks.format);
        }
      }, {
        key: "configure",
        value: function configure() {
          var t = this.min;
          _get2(_getPrototypeOf(ja.prototype), "configure", this).call(this), this._startValue = r(t), this._valueRange = r(this.max) - r(t);
        }
      }, {
        key: "getPixelForValue",
        value: function getPixelForValue(t) {
          return null === (t = void 0 !== t && 0 !== t ? t : this.min) || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (r(t) - this._startValue) / this._valueRange);
        }
      }, {
        key: "getValueForPixel",
        value: function getValueForPixel(t) {
          t = this.getDecimalForPixel(t);
          return Math.pow(10, this._startValue + t * this._valueRange);
        }
      }]);
      return ja;
    }(zs);
    _defineProperty(ja, "id", "logarithmic");
    _defineProperty(ja, "defaults", {
      ticks: {
        callback: ge.formatters.logarithmic,
        major: {
          enabled: !0
        }
      }
    });
    function Ya(t) {
      var e = t.ticks;
      if (e.display && t.display) {
        var _t106 = I(e.backdropPadding);
        return T(e.font && e.font.size, R.font.size) + _t106.height;
      }
      return 0;
    }
    function $a(t, e, i, s, a) {
      return t === s || t === a ? {
        start: e - i / 2,
        end: e + i / 2
      } : t < s || a < t ? {
        start: e - i,
        end: e
      } : {
        start: e,
        end: e + i
      };
    }
    function Ua(e) {
      var i = {
          l: e.left + e._padding.left,
          r: e.right - e._padding.right,
          t: e.top + e._padding.top,
          b: e.bottom - e._padding.bottom
        },
        s = Object.assign({}, i),
        a = [],
        n = [],
        o = e._pointLabels.length,
        r = e.options.pointLabels,
        l = r.centerPointLabels ? S / o : 0;
      for (var _t107 = 0; _t107 < o; _t107++) {
        var _o23 = r.setContext(e.getPointLabelContext(_t107));
        n[_t107] = _o23.padding;
        var h = e.getPointPosition(_t107, e.drawingArea + n[_t107], l),
          c = z(_o23.font),
          d = (d = e.ctx, c = c, u = O(u = e._pointLabels[_t107]) ? u : [u], {
            w: Ee(d, c.string, u),
            h: u.length * c.lineHeight
          }),
          u = (a[_t107] = d, v(e.getIndexAngle(_t107) + l)),
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
          var _t108 = 0,
            _e76 = 0;
          m.start < f.l ? (_t108 = (f.l - m.start) / x, g.l = Math.min(g.l, f.l - _t108)) : m.end > f.r && (_t108 = (m.end - f.r) / x, g.r = Math.max(g.r, f.r + _t108)), b.start < f.t ? (_e76 = (f.t - b.start) / p, g.t = Math.min(g.t, f.t - _e76)) : b.end > f.b && (_e76 = (b.end - f.b) / p, g.b = Math.max(g.b, f.b + _e76));
        }
      }
      var d, u;
      e.setCenterPoint(i.l - s.l, s.r - i.r, i.t - s.t, s.b - i.b), e._pointLabelItems = function (e, i, s) {
        var a = [],
          n = e._pointLabels.length,
          t = e.options,
          _t$pointLabels = t.pointLabels,
          o = _t$pointLabels.centerPointLabels,
          r = _t$pointLabels.display,
          l = {
            extra: Ya(t) / 2,
            additionalAngle: o ? S / n : 0
          };
        var h;
        for (var _t109 = 0; _t109 < n; _t109++) {
          l.padding = s[_t109], l.size = i[_t109];
          var _n26 = function (t, e, i) {
            var s = t.drawingArea,
              a = i.extra,
              n = i.additionalAngle,
              o = i.padding,
              r = i.size,
              l = t.getPointPosition(e, s + a + o, n),
              h = Math.round(ct(v(l.angle + D))),
              c = function (t, e) {
                return 90 === h || 270 === h ? t -= e / 2 : (270 < h || h < 90) && (t -= e), t;
              }(l.y, r.h),
              d = function (t) {
                return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
              }(h),
              u = function (t, e) {
                return "right" === d ? t -= e : "center" === d && (t -= e / 2), t;
              }(l.x, r.w);
            return {
              visible: !0,
              x: l.x,
              y: c,
              textAlign: d,
              left: u,
              top: c,
              right: u + r.w,
              bottom: c + r.h
            };
          }(e, _t109, l);
          a.push(_n26), "auto" === r && (_n26.visible = function (t, e) {
            if (!e) return !0;
            var _t110 = t,
              t = _t110.left,
              i = _t110.top,
              s = _t110.right,
              a = _t110.bottom;
            return !(M({
              x: t,
              y: i
            }, e) || M({
              x: t,
              y: a
            }, e) || M({
              x: s,
              y: i
            }, e) || M({
              x: s,
              y: a
            }, e));
          }(_n26, h), _n26.visible && (h = _n26));
        }
        return a;
      }(e, a, n);
    }
    function Xa(e, i, t, s) {
      var a = e["ctx"];
      if (t) a.arc(e.xCenter, e.yCenter, i, 0, _);else {
        var n = e.getPointPosition(0, i);
        a.moveTo(n.x, n.y);
        for (var _t111 = 1; _t111 < s; _t111++) n = e.getPointPosition(_t111, i), a.lineTo(n.x, n.y);
      }
    }
    var qa = /*#__PURE__*/function (_Fa2) {
      _inherits(qa, _Fa2);
      var _super19 = _createSuper(qa);
      function qa(t) {
        var _this30;
        _classCallCheck(this, qa);
        _this30 = _super19.call(this, t), _this30.xCenter = void 0, _this30.yCenter = void 0, _this30.drawingArea = void 0, _this30._pointLabels = [], _this30._pointLabelItems = [];
        return _this30;
      }
      _createClass(qa, [{
        key: "setDimensions",
        value: function setDimensions() {
          var t = this._padding = I(Ya(this.options) / 2),
            e = this.width = this.maxWidth - t.width,
            i = this.height = this.maxHeight - t.height;
          this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2);
        }
      }, {
        key: "determineDataLimits",
        value: function determineDataLimits() {
          var _this$getMinMax3 = this.getMinMax(!1),
            t = _this$getMinMax3.min,
            e = _this$getMinMax3.max;
          this.min = p(t) && !isNaN(t) ? t : 0, this.max = p(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
        }
      }, {
        key: "computeTickLimit",
        value: function computeTickLimit() {
          return Math.ceil(this.drawingArea / Ya(this.options));
        }
      }, {
        key: "generateTickLabels",
        value: function generateTickLabels(t) {
          var _this31 = this;
          Fa.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map(function (t, e) {
            t = d(_this31.options.pointLabels.callback, [t, e], _this31);
            return t || 0 === t ? t : "";
          }).filter(function (t, e) {
            return _this31.chart.getDataVisibility(e);
          });
        }
      }, {
        key: "fit",
        value: function fit() {
          var t = this.options;
          t.display && t.pointLabels.display ? Ua(this) : this.setCenterPoint(0, 0, 0, 0);
        }
      }, {
        key: "setCenterPoint",
        value: function setCenterPoint(t, e, i, s) {
          this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s));
        }
      }, {
        key: "getIndexAngle",
        value: function getIndexAngle(t) {
          return v(t * (_ / (this._pointLabels.length || 1)) + L(this.options.startAngle || 0));
        }
      }, {
        key: "getDistanceFromCenterForValue",
        value: function getDistanceFromCenterForValue(t) {
          if (P(t)) return NaN;
          var e = this.drawingArea / (this.max - this.min);
          return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
        }
      }, {
        key: "getValueForDistanceFromCenter",
        value: function getValueForDistanceFromCenter(t) {
          if (P(t)) return NaN;
          t /= this.drawingArea / (this.max - this.min);
          return this.options.reverse ? this.max - t : this.min + t;
        }
      }, {
        key: "getPointLabelContext",
        value: function getPointLabelContext(t) {
          var e = this._pointLabels || [];
          if (0 <= t && t < e.length) return e = e[t], Pi(this.getContext(), {
            label: e,
            index: t,
            type: "pointLabel"
          });
        }
      }, {
        key: "getPointPosition",
        value: function getPointPosition(t, e) {
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          t = this.getIndexAngle(t) - D + i;
          return {
            x: Math.cos(t) * e + this.xCenter,
            y: Math.sin(t) * e + this.yCenter,
            angle: t
          };
        }
      }, {
        key: "getPointPositionForValue",
        value: function getPointPositionForValue(t, e) {
          return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
        }
      }, {
        key: "getBasePosition",
        value: function getBasePosition(t) {
          return this.getPointPositionForValue(t || 0, this.getBaseValue());
        }
      }, {
        key: "getPointLabelPosition",
        value: function getPointLabelPosition(t) {
          var _this$_pointLabelItem = this._pointLabelItems[t],
            t = _this$_pointLabelItem.left,
            e = _this$_pointLabelItem.top,
            i = _this$_pointLabelItem.right,
            s = _this$_pointLabelItem.bottom;
          return {
            left: t,
            top: e,
            right: i,
            bottom: s
          };
        }
      }, {
        key: "drawBackground",
        value: function drawBackground() {
          var _this$options15 = this.options,
            t = _this$options15.backgroundColor,
            e = _this$options15.grid.circular;
          if (t) {
            var _i86 = this.ctx;
            _i86.save(), _i86.beginPath(), Xa(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), _i86.closePath(), _i86.fillStyle = t, _i86.fill(), _i86.restore();
          }
        }
      }, {
        key: "drawGrid",
        value: function drawGrid() {
          var _this32 = this;
          var t = this.ctx,
            e = this.options,
            i = e.angleLines,
            h = e.grid,
            c = e.border,
            d = this._pointLabels.length;
          var s, u, a;
          if (e.pointLabels.display) {
            var n = this,
              o = d;
            var _3 = n.ctx,
              _y2 = n.options.pointLabels;
            for (var _t112 = o - 1; 0 <= _t112; _t112--) {
              var _o24 = n._pointLabelItems[_t112];
              if (_o24.visible) {
                var r,
                  l = _y2.setContext(n.getPointLabelContext(_t112)),
                  g = (m = x = r = f = r = v = x = b = m = p = f = g = void 0, _3),
                  f = l,
                  p = _o24,
                  _p5 = p,
                  m = _p5.left,
                  b = _p5.top,
                  x = _p5.right,
                  v = _p5.bottom;
                if (!P(r = f["backdropColor"])) {
                  var _p6 = wi(f.borderRadius),
                    _P2 = I(f.backdropPadding);
                  g.fillStyle = r;
                  f = m - _P2.left, r = b - _P2.top, x = x - m + _P2.width, m = v - b + _P2.height;
                  Object.values(_p6).some(function (t) {
                    return 0 !== t;
                  }) ? (g.beginPath(), je(g, {
                    x: f,
                    y: r,
                    w: x,
                    h: m,
                    radius: _p6
                  }), g.fill()) : g.fillRect(f, r, x, m);
                }
                var p = z(l.font),
                  v = _o24.x,
                  b = _o24.y,
                  g = _o24.textAlign;
                He(_3, n._pointLabels[_t112], v, b + p.lineHeight / 2, p, {
                  color: l.color,
                  textAlign: g,
                  textBaseline: "middle"
                });
              }
            }
          }
          if (h.display && this.ticks.forEach(function (t, e) {
            if (0 !== e) {
              u = _this32.getDistanceFromCenterForValue(t.value);
              t = _this32.getContext(e), e = h.setContext(t), t = c.setContext(t);
              {
                var i = _this32,
                  s = u,
                  a = d;
                var _n27 = i.ctx,
                  _o25 = e.circular,
                  _e77 = e,
                  _r13 = _e77.color,
                  _l16 = _e77.lineWidth;
                !_o25 && !a || !_r13 || !_l16 || s < 0 || (_n27.save(), _n27.strokeStyle = _r13, _n27.lineWidth = _l16, _n27.setLineDash(t.dash), _n27.lineDashOffset = t.dashOffset, _n27.beginPath(), Xa(i, s, _o25, a), _n27.closePath(), _n27.stroke(), _n27.restore());
              }
            }
          }), i.display) {
            for (t.save(), s = d - 1; 0 <= s; s--) {
              var _h12 = i.setContext(this.getPointLabelContext(s)),
                _c12 = _h12.color,
                _d12 = _h12.lineWidth;
              _d12 && _c12 && (t.lineWidth = _d12, t.strokeStyle = _c12, t.setLineDash(_h12.borderDash), t.lineDashOffset = _h12.borderDashOffset, u = this.getDistanceFromCenterForValue(e.ticks.reverse ? this.min : this.max), a = this.getPointPosition(s, u), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(a.x, a.y), t.stroke());
            }
            t.restore();
          }
        }
      }, {
        key: "drawBorder",
        value: function drawBorder() {}
      }, {
        key: "drawLabels",
        value: function drawLabels() {
          var _this33 = this;
          var o = this.ctx,
            r = this.options,
            l = r.ticks;
          if (l.display) {
            var t = this.getIndexAngle(0);
            var _a40, _n28;
            o.save(), o.translate(this.xCenter, this.yCenter), o.rotate(t), o.textAlign = "center", o.textBaseline = "middle", this.ticks.forEach(function (t, e) {
              if (0 !== e || r.reverse) {
                var i = l.setContext(_this33.getContext(e)),
                  s = z(i.font);
                if (_a40 = _this33.getDistanceFromCenterForValue(_this33.ticks[e].value), i.showLabelBackdrop) {
                  o.font = s.string, _n28 = o.measureText(t.label).width, o.fillStyle = i.backdropColor;
                  var _r14 = I(i.backdropPadding);
                  o.fillRect(-_n28 / 2 - _r14.left, -_a40 - s.size / 2 - _r14.top, _n28 + _r14.width, s.size + _r14.height);
                }
                He(o, t.label, 0, -_a40, s, {
                  color: i.color,
                  strokeColor: i.textStrokeColor,
                  strokeWidth: i.textStrokeWidth
                });
              }
            }), o.restore();
          }
        }
      }, {
        key: "drawTitle",
        value: function drawTitle() {}
      }]);
      return qa;
    }(Fa);
    _defineProperty(qa, "id", "radialLinear");
    _defineProperty(qa, "defaults", {
      display: !0,
      animate: !0,
      position: "chartArea",
      angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0
      },
      grid: {
        circular: !1
      },
      startAngle: 0,
      ticks: {
        showLabelBackdrop: !0,
        callback: ge.formatters.numeric
      },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: {
          size: 10
        },
        callback: function callback(t) {
          return t;
        },
        padding: 5,
        centerPointLabels: !1
      }
    });
    _defineProperty(qa, "defaultRoutes", {
      "angleLines.color": "borderColor",
      "pointLabels.color": "color",
      "ticks.color": "color"
    });
    _defineProperty(qa, "descriptors", {
      angleLines: {
        _fallback: "grid"
      }
    });
    var Ka = {
        millisecond: {
          common: !0,
          size: 1,
          steps: 1e3
        },
        second: {
          common: !0,
          size: 1e3,
          steps: 60
        },
        minute: {
          common: !0,
          size: 6e4,
          steps: 60
        },
        hour: {
          common: !0,
          size: 36e5,
          steps: 24
        },
        day: {
          common: !0,
          size: 864e5,
          steps: 30
        },
        week: {
          common: !1,
          size: 6048e5,
          steps: 4
        },
        month: {
          common: !0,
          size: 2628e6,
          steps: 12
        },
        quarter: {
          common: !1,
          size: 7884e6,
          steps: 4
        },
        year: {
          common: !0,
          size: 3154e7
        }
      },
      h = Object.keys(Ka);
    function Ga(t, e) {
      return t - e;
    }
    function Za(t, e) {
      if (P(e)) return null;
      var i = t._adapter,
        _t$_parseOpts = t._parseOpts,
        s = _t$_parseOpts.parser,
        a = _t$_parseOpts.round,
        n = _t$_parseOpts.isoWeekday;
      var o = e;
      return null === (o = p(o = "function" == typeof s ? s(o) : o) ? o : "string" == typeof s ? i.parse(o, s) : i.parse(o)) ? null : +(o = a ? "week" !== a || !rt(n) && !0 !== n ? i.startOf(o, a) : i.startOf(o, "isoWeek", n) : o);
    }
    function Ja(e, i, s, a) {
      var n = h.length;
      for (var _t113 = h.indexOf(e); _t113 < n - 1; ++_t113) {
        var _e78 = Ka[h[_t113]],
          _n29 = _e78.steps || Number.MAX_SAFE_INTEGER;
        if (_e78.common && Math.ceil((s - i) / (_n29 * _e78.size)) <= a) return h[_t113];
      }
      return h[n - 1];
    }
    function Qa(t, e, i) {
      var _bt;
      var s, a;
      i ? i.length && ((_bt = bt(i, e), s = _bt.lo, a = _bt.hi), t[i[s] >= e ? i[s] : i[a]] = !0) : t[e] = !0;
    }
    function tn(i, t, s) {
      var a = [],
        n = {},
        e = t.length;
      var o, r;
      for (o = 0; o < e; ++o) r = t[o], n[r] = o, a.push({
        value: r,
        major: !1
      });
      if (0 !== e && s) {
        var l = a,
          h = n,
          c = s;
        var _d13 = i._adapter,
          _u8 = +_d13.startOf(l[0].value, c),
          _g9 = l[l.length - 1].value;
        var _t114, _e79;
        for (_t114 = _u8; _t114 <= _g9; _t114 = +_d13.add(_t114, 1, c)) 0 <= (_e79 = h[_t114]) && (l[_e79].major = !0);
        return l;
      }
      return a;
    }
    var en = /*#__PURE__*/function (_zs3) {
      _inherits(en, _zs3);
      var _super20 = _createSuper(en);
      function en(t) {
        var _this34;
        _classCallCheck(this, en);
        _this34 = _super20.call(this, t), _this34._cache = {
          data: [],
          labels: [],
          all: []
        }, _this34._unit = "day", _this34._majorUnit = void 0, _this34._offsets = {}, _this34._normalized = !1, _this34._parseOpts = void 0;
        return _this34;
      }
      _createClass(en, [{
        key: "init",
        value: function init(t) {
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var i = t.time || (t.time = {}),
            s = this._adapter = new ha._date(t.adapters.date);
          s.init(e), $(i.displayFormats, s.formats()), this._parseOpts = {
            parser: i.parser,
            round: i.round,
            isoWeekday: i.isoWeekday
          }, _get2(_getPrototypeOf(en.prototype), "init", this).call(this, t), this._normalized = e.normalized;
        }
      }, {
        key: "parse",
        value: function parse(t, e) {
          return void 0 === t ? null : Za(this, t);
        }
      }, {
        key: "beforeLayout",
        value: function beforeLayout() {
          _get2(_getPrototypeOf(en.prototype), "beforeLayout", this).call(this), this._cache = {
            data: [],
            labels: [],
            all: []
          };
        }
      }, {
        key: "determineDataLimits",
        value: function determineDataLimits() {
          var t = this.options,
            e = this._adapter,
            i = t.time.unit || "day";
          var _this$getUserBounds4 = this.getUserBounds(),
            s = _this$getUserBounds4.min,
            a = _this$getUserBounds4.max,
            n = _this$getUserBounds4.minDefined,
            o = _this$getUserBounds4.maxDefined;
          function r(t) {
            n || isNaN(t.min) || (s = Math.min(s, t.min)), o || isNaN(t.max) || (a = Math.max(a, t.max));
          }
          n && o || (r(this._getLabelBounds()), "ticks" === t.bounds && "labels" === t.ticks.source || r(this.getMinMax(!1))), s = p(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), a = p(a) && !isNaN(a) ? a : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, a - 1), this.max = Math.max(s + 1, a);
        }
      }, {
        key: "_getLabelBounds",
        value: function _getLabelBounds() {
          var t = this.getLabelTimestamps();
          var e = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
          return t.length && (e = t[0], i = t[t.length - 1]), {
            min: e,
            max: i
          };
        }
      }, {
        key: "buildTicks",
        value: function buildTicks() {
          var t = this.options,
            e = t.time,
            i = t.ticks,
            s = "labels" === i.source ? this.getLabelTimestamps() : this._generate();
          "ticks" === t.bounds && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
          var a = this.min,
            n = vt(s, a, this.max);
          return this._unit = e.unit || (i.autoSkip ? Ja(e.minUnit, this.min, this.max, this._getLabelCapacity(a)) : function (e, i, s, a, n) {
            for (var _t115 = h.length - 1; _t115 >= h.indexOf(s); _t115--) {
              var _s51 = h[_t115];
              if (Ka[_s51].common && e._adapter.diff(n, a, _s51) >= i - 1) return _s51;
            }
            return h[s ? h.indexOf(s) : 0];
          }(this, n.length, e.minUnit, this.min, this.max)), this._majorUnit = i.major.enabled && "year" !== this._unit ? function (i) {
            for (var _t116 = h.indexOf(i) + 1, _e80 = h.length; _t116 < _e80; ++_t116) if (Ka[h[_t116]].common) return h[_t116];
          }(this._unit) : void 0, this.initOffsets(s), t.reverse && n.reverse(), tn(this, n, this._majorUnit);
        }
      }, {
        key: "afterAutoSkip",
        value: function afterAutoSkip() {
          this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(function (t) {
            return +t.value;
          }));
        }
      }, {
        key: "initOffsets",
        value: function initOffsets() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var e,
            i,
            s = 0,
            a = 0;
          this.options.offset && t.length && (e = this.getDecimalForValue(t[0]), s = 1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2, i = this.getDecimalForValue(t[t.length - 1]), a = 1 === t.length ? i : (i - this.getDecimalForValue(t[t.length - 2])) / 2);
          t = t.length < 3 ? 0.5 : 0.25;
          s = C(s, 0, t), a = C(a, 0, t), this._offsets = {
            start: s,
            end: a,
            factor: 1 / (s + 1 + a)
          };
        }
      }, {
        key: "_generate",
        value: function _generate() {
          var t = this._adapter,
            e = this.min,
            i = this.max,
            s = this.options,
            a = s.time,
            n = a.unit || Ja(a.minUnit, e, i, this._getLabelCapacity(e)),
            o = T(s.ticks.stepSize, 1),
            r = "week" === n && a.isoWeekday,
            l = rt(r) || !0 === r,
            h = {};
          var c,
            d,
            u = e;
          if (l && (u = +t.startOf(u, "isoWeek", r)), u = +t.startOf(u, l ? "day" : n), t.diff(i, e, n) > 1e5 * o) throw new Error(e + " and " + i + " are too far apart with stepSize of " + o + " " + n);
          var g = "data" === s.ticks.source && this.getDataTimestamps();
          for (c = u, d = 0; c < i; c = +t.add(c, o, n), d++) Qa(h, c, g);
          return c !== i && "ticks" !== s.bounds && 1 !== d || Qa(h, c, g), Object.keys(h).sort(Ga).map(function (t) {
            return +t;
          });
        }
      }, {
        key: "getLabelForValue",
        value: function getLabelForValue(t) {
          var e = this._adapter,
            i = this.options.time;
          return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
        }
      }, {
        key: "format",
        value: function format(t, e) {
          var i = this.options.time.displayFormats,
            s = this._unit,
            e = e || i[s];
          return this._adapter.format(t, e);
        }
      }, {
        key: "_tickFormatFunction",
        value: function _tickFormatFunction(t, e, i, s) {
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
      }, {
        key: "generateTickLabels",
        value: function generateTickLabels(t) {
          var e, i, s;
          for (e = 0, i = t.length; e < i; ++e) (s = t[e]).label = this._tickFormatFunction(s.value, e, t);
        }
      }, {
        key: "getDecimalForValue",
        value: function getDecimalForValue(t) {
          return null === t ? NaN : (t - this.min) / (this.max - this.min);
        }
      }, {
        key: "getPixelForValue",
        value: function getPixelForValue(t) {
          var e = this._offsets,
            t = this.getDecimalForValue(t);
          return this.getPixelForDecimal((e.start + t) * e.factor);
        }
      }, {
        key: "getValueForPixel",
        value: function getValueForPixel(t) {
          var e = this._offsets,
            t = this.getDecimalForPixel(t) / e.factor - e.end;
          return this.min + t * (this.max - this.min);
        }
      }, {
        key: "_getLabelSize",
        value: function _getLabelSize(t) {
          var e = this.options.ticks,
            t = this.ctx.measureText(t).width,
            e = L(this.isHorizontal() ? e.maxRotation : e.minRotation),
            i = Math.cos(e),
            e = Math.sin(e),
            s = this._resolveTickFontOptions(0).size;
          return {
            w: t * i + s * e,
            h: t * e + s * i
          };
        }
      }, {
        key: "_getLabelCapacity",
        value: function _getLabelCapacity(t) {
          var e = this.options.time,
            i = e.displayFormats,
            e = i[e.unit] || i.millisecond,
            i = this._tickFormatFunction(t, 0, tn(this, [t], this._majorUnit), e),
            t = this._getLabelSize(i),
            e = Math.floor(this.isHorizontal() ? this.width / t.w : this.height / t.h) - 1;
          return 0 < e ? e : 1;
        }
      }, {
        key: "getDataTimestamps",
        value: function getDataTimestamps() {
          var t,
            e,
            i = this._cache.data || [];
          if (i.length) return i;
          var s = this.getMatchingVisibleMetas();
          if (this._normalized && s.length) return this._cache.data = s[0].controller.getAllParsedValues(this);
          for (t = 0, e = s.length; t < e; ++t) i = i.concat(s[t].controller.getAllParsedValues(this));
          return this._cache.data = this.normalize(i);
        }
      }, {
        key: "getLabelTimestamps",
        value: function getLabelTimestamps() {
          var t = this._cache.labels || [];
          var e, i;
          if (t.length) return t;
          var s = this.getLabels();
          for (e = 0, i = s.length; e < i; ++e) t.push(Za(this, s[e]));
          return this._cache.labels = this._normalized ? t : this.normalize(t);
        }
      }, {
        key: "normalize",
        value: function normalize(t) {
          return wt(t.sort(Ga));
        }
      }]);
      return en;
    }(zs);
    _defineProperty(en, "id", "time");
    _defineProperty(en, "defaults", {
      bounds: "data",
      adapters: {},
      time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {}
      },
      ticks: {
        source: "auto",
        callback: !1,
        major: {
          enabled: !1
        }
      }
    });
    function sn(t, e, i) {
      var _f8, _t$r, _t$l, _f9, _t$r2, _t$l2;
      var s,
        a,
        n,
        o,
        r = 0,
        l = t.length - 1;
      i ? (e >= t[r].pos && e <= t[l].pos && (_f8 = f(t, "pos", e), r = _f8.lo, l = _f8.hi, _f8), (_t$r = t[r], s = _t$r.pos, n = _t$r.time), (_t$l = t[l], a = _t$l.pos, o = _t$l.time)) : (e >= t[r].time && e <= t[l].time && (_f9 = f(t, "time", e), r = _f9.lo, l = _f9.hi, _f9), (_t$r2 = t[r], s = _t$r2.time, n = _t$r2.pos), (_t$l2 = t[l], a = _t$l2.time, o = _t$l2.pos));
      i = a - s;
      return i ? n + (o - n) * (e - s) / i : n;
    }
    var an = Object.freeze({
      __proto__: null,
      CategoryScale: (_class24 = /*#__PURE__*/function (_zs4) {
        _inherits(CategoryScale, _zs4);
        var _super21 = _createSuper(CategoryScale);
        function CategoryScale(t) {
          var _this35;
          _classCallCheck(this, CategoryScale);
          _this35 = _super21.call(this, t), _this35._startValue = void 0, _this35._valueRange = 0, _this35._addedLabels = [];
          return _this35;
        }
        _createClass(CategoryScale, [{
          key: "init",
          value: function init(t) {
            var e = this._addedLabels;
            if (e.length) {
              var _t117 = this.getLabels();
              var _iterator29 = _createForOfIteratorHelper(e),
                _step29;
              try {
                for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                  var _step29$value = _step29.value,
                    i = _step29$value.index,
                    s = _step29$value.label;
                  _t117[i] === s && _t117.splice(i, 1);
                }
              } catch (err) {
                _iterator29.e(err);
              } finally {
                _iterator29.f();
              }
              this._addedLabels = [];
            }
            _get2(_getPrototypeOf(CategoryScale.prototype), "init", this).call(this, t);
          }
        }, {
          key: "parse",
          value: function parse(t, e) {
            if (P(t)) return null;
            var i,
              s,
              a,
              n,
              o,
              r,
              l = this.getLabels();
            return a = e = isFinite(e) && l[e] === t ? e : (i = l, s = T(e, t = t), a = this._addedLabels, -1 === (r = i.indexOf(t)) ? (o = s, a = a, "string" == typeof (n = t) ? (o = i.push(n) - 1, a.unshift({
              index: o,
              label: n
            })) : isNaN(n) && (o = null), o) : r !== i.lastIndexOf(t) ? s : r), n = l.length - 1, null === a ? null : C(Math.round(a), 0, n);
          }
        }, {
          key: "determineDataLimits",
          value: function determineDataLimits() {
            var _this$getUserBounds5 = this.getUserBounds(),
              t = _this$getUserBounds5.minDefined,
              e = _this$getUserBounds5.maxDefined;
            var _this$getMinMax4 = this.getMinMax(!0),
              i = _this$getMinMax4.min,
              s = _this$getMinMax4.max;
            "ticks" === this.options.bounds && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s;
          }
        }, {
          key: "buildTicks",
          value: function buildTicks() {
            var e = this.min,
              i = this.max,
              t = this.options.offset,
              s = [];
            var a = this.getLabels();
            a = 0 === e && i === a.length - 1 ? a : a.slice(e, i + 1), this._valueRange = Math.max(a.length - (t ? 0 : 1), 1), this._startValue = this.min - (t ? 0.5 : 0);
            for (var _t118 = e; _t118 <= i; _t118++) s.push({
              value: _t118
            });
            return s;
          }
        }, {
          key: "getLabelForValue",
          value: function getLabelForValue(t) {
            return Ia.call(this, t);
          }
        }, {
          key: "configure",
          value: function configure() {
            _get2(_getPrototypeOf(CategoryScale.prototype), "configure", this).call(this), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
          }
        }, {
          key: "getPixelForValue",
          value: function getPixelForValue(t) {
            return null === (t = "number" != typeof t ? this.parse(t) : t) ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
          }
        }, {
          key: "getPixelForTick",
          value: function getPixelForTick(t) {
            var e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
          }
        }, {
          key: "getValueForPixel",
          value: function getValueForPixel(t) {
            return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
          }
        }, {
          key: "getBasePixel",
          value: function getBasePixel() {
            return this.bottom;
          }
        }]);
        return CategoryScale;
      }(zs), _defineProperty(_class24, "id", "category"), _defineProperty(_class24, "defaults", {
        ticks: {
          callback: Ia
        }
      }), _class24),
      LinearScale: Va,
      LogarithmicScale: ja,
      RadialLinearScale: qa,
      TimeScale: en,
      TimeSeriesScale: (_class25 = /*#__PURE__*/function (_en) {
        _inherits(TimeSeriesScale, _en);
        var _super22 = _createSuper(TimeSeriesScale);
        function TimeSeriesScale(t) {
          var _this36;
          _classCallCheck(this, TimeSeriesScale);
          _this36 = _super22.call(this, t), _this36._table = [], _this36._minPos = void 0, _this36._tableRange = void 0;
          return _this36;
        }
        _createClass(TimeSeriesScale, [{
          key: "initOffsets",
          value: function initOffsets() {
            var t = this._getTimestampsForTable(),
              e = this._table = this.buildLookupTable(t);
            this._minPos = sn(e, this.min), this._tableRange = sn(e, this.max) - this._minPos, _get2(_getPrototypeOf(TimeSeriesScale.prototype), "initOffsets", this).call(this, t);
          }
        }, {
          key: "buildLookupTable",
          value: function buildLookupTable(t) {
            var e = this.min,
              i = this.max,
              s = [],
              a = [];
            var n, o, r, l, h;
            for (n = 0, o = t.length; n < o; ++n) (l = t[n]) >= e && l <= i && s.push(l);
            if (s.length < 2) return [{
              time: e,
              pos: 0
            }, {
              time: i,
              pos: 1
            }];
            for (n = 0, o = s.length; n < o; ++n) h = s[n + 1], r = s[n - 1], l = s[n], Math.round((h + r) / 2) !== l && a.push({
              time: l,
              pos: n / (o - 1)
            });
            return a;
          }
        }, {
          key: "_generate",
          value: function _generate() {
            var t = this.min,
              e = this.max;
            var i = _get2(_getPrototypeOf(TimeSeriesScale.prototype), "getDataTimestamps", this).call(this);
            return i.includes(t) && i.length || i.splice(0, 0, t), i.includes(e) && 1 !== i.length || i.push(e), i.sort(function (t, e) {
              return t - e;
            });
          }
        }, {
          key: "_getTimestampsForTable",
          value: function _getTimestampsForTable() {
            var t = this._cache.all || [];
            if (t.length) return t;
            var e = this.getDataTimestamps(),
              i = this.getLabelTimestamps();
            return t = e.length && i.length ? this.normalize(e.concat(i)) : e.length ? e : i, t = this._cache.all = t;
          }
        }, {
          key: "getDecimalForValue",
          value: function getDecimalForValue(t) {
            return (sn(this._table, t) - this._minPos) / this._tableRange;
          }
        }, {
          key: "getValueForPixel",
          value: function getValueForPixel(t) {
            var e = this._offsets,
              t = this.getDecimalForPixel(t) / e.factor - e.end;
            return sn(this._table, t * this._tableRange + this._minPos, !0);
          }
        }]);
        return TimeSeriesScale;
      }(en), _defineProperty(_class25, "id", "timeseries"), _defineProperty(_class25, "defaults", en.defaults), _class25)
    });
    var nn = ["rgb(54, 162, 235)", "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
      on = nn.map(function (t) {
        return t.replace("rgb(", "rgba(").replace(")", ", 0.5)");
      });
    function rn(t) {
      return nn[t % nn.length];
    }
    function ln(t) {
      return on[t % on.length];
    }
    function hn(n) {
      var o = 0;
      return function (t, e) {
        var i,
          s,
          a,
          e = n.getDatasetMeta(e).controller;
        e instanceof pa ? o = (s = t, a = o, s.backgroundColor = s.data.map(function () {
          return rn(a++);
        }), a) : e instanceof ma ? o = (s = t, i = o, s.backgroundColor = s.data.map(function () {
          return ln(i++);
        }), i) : e && (o = (e = t, t = o, e.borderColor = rn(t), e.backgroundColor = ln(t), ++t));
      };
    }
    function cn(t) {
      var e;
      for (e in t) if (t[e].borderColor || t[e].backgroundColor) return 1;
    }
    var dn = {
      id: "colors",
      defaults: {
        enabled: !0,
        forceOverride: !1
      },
      beforeLayout: function beforeLayout(t, e, i) {
        if (i.enabled) {
          var _t$config = t.config,
            _s52 = _t$config.data.datasets,
            _a41 = _t$config.options,
            _n30 = _a41["elements"];
          !i.forceOverride && (cn(_s52) || _a41 && (_a41.borderColor || _a41.backgroundColor) || _n30 && cn(_n30)) || (i = hn(t), _s52.forEach(i));
        }
      }
    };
    function un(t) {
      var e;
      t._decimated && (e = t._data, delete t._decimated, delete t._data, Object.defineProperty(t, "data", {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: e
      }));
    }
    function gn(t) {
      t.data.datasets.forEach(function (t) {
        un(t);
      });
    }
    var fn = {
      id: "decimation",
      defaults: {
        algorithm: "min-max",
        enabled: !1
      },
      beforeElementsUpdate: function beforeElementsUpdate(r, t, M) {
        if (M.enabled) {
          var _l17 = r.width;
          r.data.datasets.forEach(function (e, t) {
            var i = e._data,
              s = e.indexAxis,
              h = r.getDatasetMeta(t),
              a = i || e.data;
            if ("y" !== ki([s, r.options.indexAxis]) && h.controller.supportsDecimation) {
              t = r.scales[h.xAxisID];
              if (("linear" === t.type || "time" === t.type) && !r.options.parsing) {
                var _ref20 = function (t) {
                    var e = t.length;
                    var i,
                      s = 0;
                    var a = h["iScale"],
                      _a$getUserBounds = a.getUserBounds(),
                      n = _a$getUserBounds.min,
                      o = _a$getUserBounds.max,
                      r = _a$getUserBounds.minDefined,
                      l = _a$getUserBounds.maxDefined;
                    return r && (s = C(f(t, a.axis, n).lo, 0, e - 1)), i = l ? C(f(t, a.axis, o).hi + 1, s, e) - s : e - s, {
                      start: s,
                      count: i
                    };
                  }(a),
                  n = _ref20.start,
                  o = _ref20.count;
                if (o <= (M.threshold || 4 * _l17)) un(e);else {
                  var _t119;
                  switch (P(i) && (e._data = a, delete e.data, Object.defineProperty(e, "data", {
                    configurable: !0,
                    enumerable: !0,
                    get: function get() {
                      return this._decimated;
                    },
                    set: function set(t) {
                      this._data = t;
                    }
                  })), M.algorithm) {
                    case "lttb":
                      _t119 = function (s, a, n, t) {
                        var e = M.samples || t;
                        if (n <= e) return s.slice(a, a + n);
                        var o = [],
                          r = (n - 2) / (e - 2);
                        var l = 0;
                        var h = a + n - 1;
                        var c,
                          d,
                          u,
                          g,
                          f,
                          p = a;
                        for (o[l++] = s[p], c = 0; c < e - 2; c++) {
                          var _t120 = void 0,
                            _e81 = 0,
                            _i87 = 0;
                          var _h13 = Math.floor((c + 1) * r) + 1 + a,
                            _4 = Math.min(Math.floor((c + 2) * r) + 1, n) + a,
                            _y3 = _4 - _h13;
                          for (_t120 = _h13; _t120 < _4; _t120++) _e81 += s[_t120].x, _i87 += s[_t120].y;
                          _e81 /= _y3, _i87 /= _y3;
                          var m = Math.floor(c * r) + 1 + a,
                            b = Math.min(Math.floor((c + 1) * r) + 1, n) + a,
                            _s$p = s[p],
                            x = _s$p.x,
                            v = _s$p.y;
                          for (u = -1, _t120 = m; _t120 < b; _t120++) (g = 0.5 * Math.abs((x - _e81) * (s[_t120].y - v) - (x - s[_t120].x) * (_i87 - v))) > u && (u = g, d = s[_t120], f = _t120);
                          o[l++] = d, p = f;
                        }
                        return o[l++] = s[h], o;
                      }(a, n, o, _l17);
                      break;
                    case "min-max":
                      _t119 = function (t, e, i, s) {
                        var a,
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
                        var m = [],
                          b = e + i - 1,
                          x = t[e].x,
                          v = t[b].x - x;
                        for (a = e; a < e + i; ++a) {
                          o = ((n = t[a]).x - x) / v * s, r = n.y;
                          var _e82 = 0 | o;
                          if (_e82 === l) r < u ? (u = r, h = a) : r > g && (g = r, c = a), f = (p * f + n.x) / ++p;else {
                            var _i88 = a - 1;
                            if (!P(h) && !P(c)) {
                              var _e83 = Math.min(h, c),
                                _P3 = Math.max(h, c);
                              _e83 !== d && _e83 !== _i88 && m.push(_objectSpread(_objectSpread({}, t[_e83]), {}, {
                                x: f
                              })), _P3 !== d && _P3 !== _i88 && m.push(_objectSpread(_objectSpread({}, t[_P3]), {}, {
                                x: f
                              }));
                            }
                            0 < a && _i88 !== d && m.push(t[_i88]), m.push(n), l = _e82, p = 0, u = g = r, h = c = d = a;
                          }
                        }
                        return m;
                      }(a, n, o, _l17);
                      break;
                    default:
                      throw new Error("Unsupported decimation algorithm '".concat(M.algorithm, "'"));
                  }
                  e._decimated = _t119;
                }
              }
            }
          });
        } else gn(r);
      },
      destroy: function destroy(t) {
        gn(t);
      }
    };
    function pn(i, s, a, t) {
      if (!t) {
        var _t121 = s[i],
          _e84 = a[i];
        return "angle" === i && (_t121 = v(_t121), _e84 = v(_e84)), {
          property: i,
          start: _t121,
          end: _e84
        };
      }
    }
    function mn(t, e, i) {
      for (; t < e; e--) {
        var _t122 = i[e];
        if (!isNaN(_t122.x) && !isNaN(_t122.y)) break;
      }
      return e;
    }
    function bn(t, e, i, s) {
      return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
    }
    function xn(e, t) {
      var i = [],
        s = !1;
      return (i = O(e) ? (s = !0, e) : function (t) {
        var _ref21 = e || {},
          _ref21$x = _ref21.x,
          i = _ref21$x === void 0 ? null : _ref21$x,
          _ref21$y = _ref21.y,
          s = _ref21$y === void 0 ? null : _ref21$y,
          a = t.points,
          n = [];
        return t.segments.forEach(function (_ref22) {
          var t = _ref22.start,
            e = _ref22.end;
          e = mn(t, e, a);
          t = a[t], e = a[e];
          null !== s ? (n.push({
            x: t.x,
            y: s
          }), n.push({
            x: e.x,
            y: s
          })) : null !== i && (n.push({
            x: i,
            y: t.y
          }), n.push({
            x: i,
            y: e.y
          }));
        }), n;
      }(t)).length ? new Da({
        points: i,
        options: {
          tension: 0
        },
        _loop: s,
        _fullLoop: s
      }) : null;
    }
    function vn(t) {
      return t && !1 !== t.fill;
    }
    function _n(e, i, s) {
      var a = [];
      for (var _t123 = 0; _t123 < s.length; _t123++) {
        var _ref23 = function (t, e, i) {
            var s = t.interpolate(e, i);
            if (!s) return {};
            var a = s[i],
              n = t.segments,
              o = t.points;
            var r = !1,
              l = !1;
            for (var _t124 = 0; _t124 < n.length; _t124++) {
              var _e85 = n[_t124],
                _s53 = o[_e85.start][i],
                _h14 = o[_e85.end][i];
              if (c(a, _s53, _h14)) {
                r = a === _s53, l = a === _h14;
                break;
              }
            }
            return {
              first: r,
              last: l,
              point: s
            };
          }(s[_t123], i, "x"),
          n = _ref23.first,
          o = _ref23.last,
          r = _ref23.point;
        if (!(!r || n && o)) if (n) a.unshift(r);else if (e.push(r), !o) break;
      }
      e.push.apply(e, a);
    }
    var yn = /*#__PURE__*/function () {
      function yn(t) {
        _classCallCheck(this, yn);
        this.x = t.x, this.y = t.y, this.radius = t.radius;
      }
      _createClass(yn, [{
        key: "pathSegment",
        value: function pathSegment(t, e, i) {
          var s = this.x,
            a = this.y,
            n = this.radius;
          return e = e || {
            start: 0,
            end: _
          }, t.arc(s, a, n, e.end, e.start, !0), !i.bounds;
        }
      }, {
        key: "interpolate",
        value: function interpolate(t) {
          var e = this.x,
            i = this.y,
            s = this.radius,
            t = t.angle;
          return {
            x: e + Math.cos(t) * s,
            y: i + Math.sin(t) * s,
            angle: t
          };
        }
      }]);
      return yn;
    }();
    function Mn(t) {
      var e,
        i,
        s = t.chart,
        a = t.fill,
        n = t.line;
      if (p(a)) return e = a, (i = (s = s).getDatasetMeta(e)) && s.isDatasetVisible(e) ? i.dataset : null;
      if ("stack" === a) {
        var _o26 = t.scale,
          _r15 = t.index,
          _l18 = t.line,
          _h15 = [],
          _c13 = _l18.segments,
          _d14 = _l18.points,
          _u9 = function (t, e) {
            var i = [],
              s = t.getMatchingVisibleMetas("line");
            for (var _t125 = 0; _t125 < s.length; _t125++) {
              var a = s[_t125];
              if (a.index === e) break;
              a.hidden || i.unshift(a.dataset);
            }
            return i;
          }(_o26, _r15);
        _u9.push(xn({
          x: null,
          y: _o26.bottom
        }, _l18));
        for (var _t126 = 0; _t126 < _c13.length; _t126++) {
          var _o27 = _c13[_t126];
          for (var _t127 = _o27.start; _t127 <= _o27.end; _t127++) _n(_h15, _d14[_t127], _u9);
        }
        return new Da({
          points: _h15,
          options: {}
        });
      }
      if ("shape" === a) return !0;
      s = function (t) {
        var e = t.scale || {};
        if (e.getPointPositionForValue) {
          var i = t;
          var _i89 = i,
            _a42 = _i89.scale,
            _n31 = _i89.fill,
            _o28 = _a42.options,
            _r16 = _a42.getLabels().length,
            _l19 = _o28.reverse ? _a42.max : _a42.min,
            _h16 = (i = _n31, e = _a42, "start" === i ? _l19 : "end" === i ? e.options.reverse ? e.min : e.max : A(i) ? i.value : e.getBaseValue()),
            _c14 = [];
          if (_o28.grid.circular) {
            var _i90 = _a42.getPointPositionForValue(0, _l19);
            return new yn({
              x: _i90.x,
              y: _i90.y,
              radius: _a42.getDistanceFromCenterForValue(_h16)
            });
          }
          for (var _t128 = 0; _t128 < _r16; ++_t128) _c14.push(_a42.getPointPositionForValue(_t128, _h16));
          return _c14;
        }
        {
          var s = t;
          var _s$scale = s.scale,
            _d15 = _s$scale === void 0 ? {} : _s$scale,
            _u10 = s.fill,
            _g10 = function (t, e) {
              var i = null;
              return "start" === t ? i = e.bottom : "end" === t ? i = e.top : A(t) ? i = e.getPixelForValue(t.value) : e.getBasePixel && (i = e.getBasePixel()), i;
            }(_u10, _d15);
          if (p(_g10)) {
            var _s54 = _d15.isHorizontal();
            return {
              x: _s54 ? _g10 : null,
              y: _s54 ? null : _g10
            };
          }
          return null;
        }
      }(t);
      return s instanceof yn ? s : xn(s, n);
    }
    function wn(t, e, i) {
      var _e87;
      var s,
        a = Mn(e),
        _e86 = e,
        e = _e86.line,
        n = _e86.scale,
        o = _e86.axis,
        r = e.options,
        l = r.fill,
        r = r.backgroundColor,
        _ref24 = l || {},
        _ref24$above = _ref24.above,
        l = _ref24$above === void 0 ? r : _ref24$above,
        _ref24$below = _ref24.below,
        r = _ref24$below === void 0 ? r : _ref24$below;
      a && e.points.length && (Ve(t, i), s = t, (_e87 = e = {
        line: e,
        target: a,
        above: l,
        below: r,
        area: i,
        scale: n,
        axis: o
      }, a = _e87.line, l = _e87.target, r = _e87.above, i = _e87.below, n = _e87.area, o = _e87.scale), e = a._loop ? "angle" : e.axis, s.save(), "x" === e && i !== r && (kn(s, l, n.top), Sn(s, {
        line: a,
        target: l,
        color: r,
        scale: o,
        property: e
      }), s.restore(), s.save(), kn(s, l, n.bottom)), Sn(s, {
        line: a,
        target: l,
        color: i,
        scale: o,
        property: e
      }), s.restore(), Be(t));
    }
    function kn(t, e, i) {
      var s = e.segments,
        a = e.points;
      var n = !0,
        o = !1;
      t.beginPath();
      var _iterator30 = _createForOfIteratorHelper(s),
        _step30;
      try {
        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
          var _r17 = _step30.value;
          var _s55 = _r17.start,
            _l20 = _r17.end,
            _h17 = a[_s55],
            _c15 = a[mn(_s55, _l20, a)];
          n ? (t.moveTo(_h17.x, _h17.y), n = !1) : (t.lineTo(_h17.x, i), t.lineTo(_h17.x, _h17.y)), (o = !!e.pathSegment(t, _r17, {
            move: o
          })) ? t.closePath() : t.lineTo(_c15.x, i);
        }
      } catch (err) {
        _iterator30.e(err);
      } finally {
        _iterator30.f();
      }
      t.lineTo(e.first().x, i), t.closePath(), t.clip();
    }
    function Sn(e, i) {
      var s = i.line,
        a = i.target,
        n = i.property,
        o = i.color,
        r = i.scale,
        l = function (t, e, i) {
          var s = t.segments,
            a = t.points,
            n = e.points,
            o = [];
          var _iterator31 = _createForOfIteratorHelper(s),
            _step31;
          try {
            for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
              var _t129 = _step31.value;
              var r = _t129.start,
                l = _t129.end,
                l = mn(r, l, a),
                h = pn(i, a[r], a[l], _t129.loop);
              if (e.segments) {
                var c = Ei(e, h);
                var _iterator32 = _createForOfIteratorHelper(c),
                  _step32;
                try {
                  for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                    var _e88 = _step32.value;
                    var _s56 = pn(i, n[_e88.start], n[_e88.end], _e88.loop),
                      _d16 = Li(_t129, a, _s56);
                    var _iterator33 = _createForOfIteratorHelper(_d16),
                      _step33;
                    try {
                      for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                        var _t130 = _step33.value;
                        o.push({
                          source: _t130,
                          target: _e88,
                          start: _defineProperty({}, i, bn(h, _s56, "start", Math.max)),
                          end: _defineProperty({}, i, bn(h, _s56, "end", Math.min))
                        });
                      }
                    } catch (err) {
                      _iterator33.e(err);
                    } finally {
                      _iterator33.f();
                    }
                  }
                } catch (err) {
                  _iterator32.e(err);
                } finally {
                  _iterator32.f();
                }
              } else o.push({
                source: _t129,
                target: h,
                start: a[r],
                end: a[l]
              });
            }
          } catch (err) {
            _iterator31.e(err);
          } finally {
            _iterator31.f();
          }
          return o;
        }(s, a, n);
      var _iterator34 = _createForOfIteratorHelper(l),
        _step34;
      try {
        for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
          var _step34$value = _step34.value,
            _i91 = _step34$value.source,
            _p7 = _step34$value.target,
            _m6 = _step34$value.start,
            _b6 = _step34$value.end;
          var _i91$style = _i91.style,
            _i91$style2 = _i91$style === void 0 ? {} : _i91$style,
            _i91$style2$backgroun = _i91$style2.backgroundColor,
            _l21 = _i91$style2$backgroun === void 0 ? o : _i91$style2$backgroun,
            _x6 = !0 !== a;
          e.save(), e.fillStyle = _l21, f = g = d = u = c = d = c = h = void 0;
          var h = e,
            c = r,
            d = _x6 && pn(n, _m6, _b6),
            _c$chart$chartArea = c.chart.chartArea,
            c = _c$chart$chartArea.top,
            u = _c$chart$chartArea.bottom,
            _ref25 = d || {},
            d = _ref25.property,
            g = _ref25.start,
            f = _ref25.end,
            d = ("x" === d && (h.beginPath(), h.rect(g, c, f - g, u - c), h.clip()), e.beginPath(), !!s.pathSegment(e, _i91));
          var _t131 = void 0;
          if (_x6) {
            d ? e.closePath() : Pn(e, a, _b6, n);
            var _i92 = !!a.pathSegment(e, _p7, {
              move: d,
              reverse: !0
            });
            (_t131 = d && _i92) || Pn(e, a, _m6, n);
          }
          e.closePath(), e.fill(_t131 ? "evenodd" : "nonzero"), e.restore();
        }
      } catch (err) {
        _iterator34.e(err);
      } finally {
        _iterator34.f();
      }
    }
    function Pn(t, e, i, s) {
      e = e.interpolate(i, s);
      e && t.lineTo(e.x, e.y);
    }
    var Dn = {
      id: "filler",
      afterDatasetsUpdate: function afterDatasetsUpdate(t, e, i) {
        var s = (t.data.datasets || []).length,
          a = [];
        var n, o, r, l;
        for (o = 0; o < s; ++o) r = (n = t.getDatasetMeta(o)).dataset, l = null, r && r.options && r instanceof Da && (l = {
          visible: t.isDatasetVisible(o),
          index: o,
          fill: function (s, t, e) {
            var i = function () {
              var t = s.options,
                e = t.fill;
              var i = T(e && e.target, e);
              return !1 !== (i = void 0 === i ? !!t.backgroundColor : i) && null !== i && (!0 === i ? "origin" : i);
            }();
            if (A(i)) return !isNaN(i.value) && i;
            var a,
              n = parseFloat(i);
            return p(n) && Math.floor(n) === n ? (a = i[0], n = n, !((n = "-" !== a && "+" !== a ? n : t + n) === t || n < 0 || e <= n) && n) : 0 <= ["origin", "start", "end", "stack", "shape"].indexOf(i) && i;
          }(r, o, s),
          chart: t,
          axis: n.controller.options.indexAxis,
          scale: n.vScale,
          line: r
        }), n.$filler = l, a.push(l);
        for (o = 0; o < s; ++o) (l = a[o]) && !1 !== l.fill && (l.fill = function (t, e, i) {
          var s = t[e].fill;
          var a = [e];
          var n;
          if (!i) return s;
          for (; !1 !== s && -1 === a.indexOf(s);) {
            if (!p(s)) return s;
            if (!(n = t[s])) return !1;
            if (n.visible) return s;
            a.push(s), s = n.fill;
          }
          return !1;
        }(a, o, i.propagate));
      },
      beforeDraw: function beforeDraw(e, t, i) {
        var s = "beforeDraw" === i.drawTime,
          a = e.getSortedVisibleDatasetMetas(),
          n = e.chartArea;
        for (var _t132 = a.length - 1; 0 <= _t132; --_t132) {
          var _i93 = a[_t132].$filler;
          _i93 && (_i93.line.updateControlPoints(n, _i93.axis), s && _i93.fill && wn(e.ctx, _i93, n));
        }
      },
      beforeDatasetsDraw: function beforeDatasetsDraw(e, t, i) {
        if ("beforeDatasetsDraw" === i.drawTime) {
          var s = e.getSortedVisibleDatasetMetas();
          for (var _t133 = s.length - 1; 0 <= _t133; --_t133) {
            var _i94 = s[_t133].$filler;
            vn(_i94) && wn(e.ctx, _i94, e.chartArea);
          }
        }
      },
      beforeDatasetDraw: function beforeDatasetDraw(t, e, i) {
        e = e.meta.$filler;
        vn(e) && "beforeDatasetDraw" === i.drawTime && wn(t.ctx, e, t.chartArea);
      },
      defaults: {
        propagate: !0,
        drawTime: "beforeDatasetDraw"
      }
    };
    var Cn = function Cn(t, e) {
      var _t$boxHeight = t.boxHeight,
        i = _t$boxHeight === void 0 ? e : _t$boxHeight,
        _t$boxWidth = t.boxWidth,
        s = _t$boxWidth === void 0 ? e : _t$boxWidth;
      return t.usePointStyle && (i = Math.min(i, e), s = t.pointStyleWidth || Math.min(s, e)), {
        boxWidth: s,
        boxHeight: i,
        itemHeight: Math.max(e, i)
      };
    };
    var On = /*#__PURE__*/function (_e89) {
      _inherits(On, _e89);
      var _super23 = _createSuper(On);
      function On(t) {
        var _this37;
        _classCallCheck(this, On);
        _this37 = _super23.call(this), _this37._added = !1, _this37.legendHitBoxes = [], _this37._hoveredItem = null, _this37.doughnutMode = !1, _this37.chart = t.chart, _this37.options = t.options, _this37.ctx = t.ctx, _this37.legendItems = void 0, _this37.columnSizes = void 0, _this37.lineWidths = void 0, _this37.maxHeight = void 0, _this37.maxWidth = void 0, _this37.top = void 0, _this37.bottom = void 0, _this37.left = void 0, _this37.right = void 0, _this37.height = void 0, _this37.width = void 0, _this37._margins = void 0, _this37.position = void 0, _this37.weight = void 0, _this37.fullSize = void 0;
        return _this37;
      }
      _createClass(On, [{
        key: "update",
        value: function update(t, e, i) {
          this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
        }
      }, {
        key: "setDimensions",
        value: function setDimensions() {
          this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
        }
      }, {
        key: "buildLabels",
        value: function buildLabels() {
          var _this38 = this;
          var i = this.options.labels || {};
          var t = d(i.generateLabels, [this.chart], this) || [];
          i.filter && (t = t.filter(function (t) {
            return i.filter(t, _this38.chart.data);
          })), i.sort && (t = t.sort(function (t, e) {
            return i.sort(t, e, _this38.chart.data);
          })), this.options.reverse && t.reverse(), this.legendItems = t;
        }
      }, {
        key: "fit",
        value: function fit() {
          var i = this.options,
            s = this.ctx;
          if (i.display) {
            var a = i.labels,
              n = z(a.font),
              o = n.size,
              r = this._computeTitleHeight(),
              _Cn = Cn(a, o),
              a = _Cn.boxWidth,
              l = _Cn.itemHeight;
            var _t134, _e90;
            s.font = n.string, this.isHorizontal() ? (_t134 = this.maxWidth, _e90 = this._fitRows(r, o, a, l) + 10) : (_e90 = this.maxHeight, _t134 = this._fitCols(r, n, a, l) + 10), this.width = Math.min(_t134, i.maxWidth || this.maxWidth), this.height = Math.min(_e90, i.maxHeight || this.maxHeight);
          } else this.width = this.height = 0;
        }
      }, {
        key: "_fitRows",
        value: function _fitRows(t, i, s, a) {
          var n = this.ctx,
            o = this.maxWidth,
            r = this.options.labels.padding,
            l = this.legendHitBoxes = [],
            h = this.lineWidths = [0],
            c = a + r;
          var d = t,
            u = (n.textAlign = "left", n.textBaseline = "middle", -1),
            g = -c;
          return this.legendItems.forEach(function (t, e) {
            t = s + i / 2 + n.measureText(t.text).width;
            (0 === e || h[h.length - 1] + t + 2 * r > o) && (d += c, h[h.length - (0 < e ? 0 : 1)] = 0, g += c, u++), l[e] = {
              left: 0,
              top: g,
              row: u,
              width: t,
              height: a
            }, h[h.length - 1] += t + r;
          }), d;
        }
      }, {
        key: "_fitCols",
        value: function _fitCols(t, r, l, h) {
          var c = this.ctx,
            e = this.maxHeight,
            d = this.options.labels.padding,
            u = this.legendHitBoxes = [],
            g = this.columnSizes = [],
            f = e - t;
          var p = d,
            m = 0,
            b = 0,
            x = 0,
            v = 0;
          return this.legendItems.forEach(function (t, e) {
            o = l, i = r, s = c, a = t, n = h;
            var i,
              s,
              a,
              n,
              _itemWidth$itemHeight = {
                itemWidth: function (t, e, i) {
                  var s = a.text;
                  return s && "string" != typeof s && (s = s.reduce(function (t, e) {
                    return t.length > e.length ? t : e;
                  })), t + e.size / 2 + i.measureText(s).width;
                }(o, i, s),
                itemHeight: function (t) {
                  var e = n;
                  return e = "string" != typeof a.text ? An(a, t) : e;
                }(i.lineHeight)
              },
              t = _itemWidth$itemHeight.itemWidth,
              o = _itemWidth$itemHeight.itemHeight;
            0 < e && b + o + 2 * d > f && (p += m + d, g.push({
              width: m,
              height: b
            }), x += m + d, v++, m = b = 0), u[e] = {
              left: x,
              top: b,
              col: v,
              width: t,
              height: o
            }, m = Math.max(m, t), b += o + d;
          }), p += m, g.push({
            width: m,
            height: b
          }), p;
        }
      }, {
        key: "adjustHitBoxes",
        value: function adjustHitBoxes() {
          if (this.options.display) {
            var _i95 = this._computeTitleHeight(),
              _s57 = this.legendHitBoxes,
              _this$options16 = this.options,
              _a43 = _this$options16.align,
              _n32 = _this$options16.labels.padding,
              _t135 = _this$options16.rtl,
              _o29 = Di(_t135, this.left, this.width);
            if (this.isHorizontal()) {
              var _t136 = 0,
                _e91 = E(_a43, this.left + _n32, this.right - this.lineWidths[_t136]);
              var _iterator35 = _createForOfIteratorHelper(_s57),
                _step35;
              try {
                for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                  var _r18 = _step35.value;
                  _t136 !== _r18.row && (_t136 = _r18.row, _e91 = E(_a43, this.left + _n32, this.right - this.lineWidths[_t136])), _r18.top += this.top + _i95 + _n32, _r18.left = _o29.leftForLtr(_o29.x(_e91), _r18.width), _e91 += _r18.width + _n32;
                }
              } catch (err) {
                _iterator35.e(err);
              } finally {
                _iterator35.f();
              }
            } else {
              var _t137 = 0,
                _e92 = E(_a43, this.top + _i95 + _n32, this.bottom - this.columnSizes[_t137].height);
              var _iterator36 = _createForOfIteratorHelper(_s57),
                _step36;
              try {
                for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                  var _l22 = _step36.value;
                  _l22.col !== _t137 && (_t137 = _l22.col, _e92 = E(_a43, this.top + _i95 + _n32, this.bottom - this.columnSizes[_t137].height)), _l22.top = _e92, _l22.left += this.left + _n32, _l22.left = _o29.leftForLtr(_o29.x(_l22.left), _l22.width), _e92 += _l22.height + _n32;
                }
              } catch (err) {
                _iterator36.e(err);
              } finally {
                _iterator36.f();
              }
            }
          }
        }
      }, {
        key: "isHorizontal",
        value: function isHorizontal() {
          return "top" === this.options.position || "bottom" === this.options.position;
        }
      }, {
        key: "draw",
        value: function draw() {
          var t;
          this.options.display && (Ve(t = this.ctx, this), this._draw(), Be(t));
        }
      }, {
        key: "_draw",
        value: function _draw() {
          var _this39 = this;
          var h = this.options,
            c = this.columnSizes,
            d = this.lineWidths,
            u = this.ctx,
            g = h.align,
            f = h.labels,
            p = R.color,
            m = Di(h.rtl, this.left, this.width),
            b = z(f.font),
            x = f["padding"],
            v = b.size,
            _ = v / 2;
          var y;
          this.drawTitle(), u.textAlign = m.textAlign("left"), u.textBaseline = "middle", u.lineWidth = 0.5, u.font = b.string;
          var _Cn2 = Cn(f, v),
            M = _Cn2.boxWidth,
            w = _Cn2.boxHeight,
            k = _Cn2.itemHeight,
            S = this.isHorizontal(),
            P = this._computeTitleHeight(),
            D = (y = S ? {
              x: E(g, this.left + x, this.right - d[0]),
              y: this.top + x + P,
              line: 0
            } : {
              x: this.left + x,
              y: E(g, this.top + P + x, this.bottom - c[0].height),
              line: 0
            }, Ci(this.ctx, h.textDirection), k + x);
          this.legendItems.forEach(function (t, e) {
            u.strokeStyle = t.fontColor, u.fillStyle = t.fontColor;
            var i = u.measureText(t.text).width,
              s = m.textAlign(t.textAlign || (t.textAlign = f.textAlign)),
              i = M + _ + i;
            var a = y.x,
              n = y.y;
            m.setWidth(_this39.width), S ? 0 < e && a + i + x > _this39.right && (n = y.y += D, y.line++, a = y.x = E(g, _this39.left + x, _this39.right - d[y.line])) : 0 < e && n + D > _this39.bottom && (a = y.x = a + c[y.line].width + x, y.line++, n = y.y = E(g, _this39.top + P + x, _this39.bottom - c[y.line].height));
            var e = m.x(a),
              o = n,
              r = t;
            if (!(isNaN(M) || M <= 0 || isNaN(w) || w < 0)) {
              u.save();
              var l = T(r.lineWidth, 1);
              if (u.fillStyle = T(r.fillStyle, p), u.lineCap = T(r.lineCap, "butt"), u.lineDashOffset = T(r.lineDashOffset, 0), u.lineJoin = T(r.lineJoin, "miter"), u.lineWidth = l, u.strokeStyle = T(r.strokeStyle, p), u.setLineDash(T(r.lineDash, [])), f.usePointStyle) {
                var _p8 = {
                    radius: w * Math.SQRT2 / 2,
                    pointStyle: r.pointStyle,
                    rotation: r.rotation,
                    borderWidth: l
                  },
                  _T3 = m.xPlus(e, M / 2);
                Fe(u, _p8, _T3, o + _, f.pointStyleWidth && M);
              } else {
                var _f10 = o + Math.max((v - w) / 2, 0),
                  _p9 = m.leftForLtr(e, M),
                  _T4 = wi(r.borderRadius);
                u.beginPath(), Object.values(_T4).some(function (t) {
                  return 0 !== t;
                }) ? je(u, {
                  x: _p9,
                  y: _f10,
                  w: M,
                  h: w,
                  radius: _T4
                }) : u.rect(_p9, _f10, M, w), u.fill(), 0 !== l && u.stroke();
              }
              u.restore();
            }
            if (a = Ct(s, a + M + _, S ? a + i : _this39.right, h.rtl), o = m.x(a), e = n, r = t, He(u, r.text, o, e + k / 2, b, {
              strikethrough: r.hidden,
              textAlign: m.textAlign(r.textAlign)
            }), S) y.x += i + x;else if ("string" != typeof t.text) {
              var _h18 = b.lineHeight;
              y.y += An(t, _h18) + x;
            } else y.y += D;
          }), Oi(this.ctx, h.textDirection);
        }
      }, {
        key: "drawTitle",
        value: function drawTitle() {
          var s = this.options,
            a = s.title,
            n = z(a.font),
            o = I(a.padding);
          if (a.display) {
            var _l23 = Di(s.rtl, this.left, this.width),
              _h19 = this.ctx,
              _c16 = a.position,
              _d17 = n.size / 2,
              _u11 = o.top + _d17;
            var _t138,
              _e93 = this.left,
              _i96 = this.width;
            if (this.isHorizontal()) _i96 = Math.max.apply(Math, _toConsumableArray(this.lineWidths)), _t138 = this.top + _u11, _e93 = E(s.align, _e93, this.right - _i96);else {
              var _a44 = this.columnSizes.reduce(function (t, e) {
                return Math.max(t, e.height);
              }, 0);
              _t138 = _u11 + E(s.align, this.top, this.bottom - _a44 - s.labels.padding - this._computeTitleHeight());
            }
            var r = E(_c16, _e93, _e93 + _i96);
            _h19.textAlign = _l23.textAlign(Dt(_c16)), _h19.textBaseline = "middle", _h19.strokeStyle = a.color, _h19.fillStyle = a.color, _h19.font = n.string, He(_h19, a.text, r, _t138, n);
          }
        }
      }, {
        key: "_computeTitleHeight",
        value: function _computeTitleHeight() {
          var t = this.options.title,
            e = z(t.font),
            i = I(t.padding);
          return t.display ? e.lineHeight + i.height : 0;
        }
      }, {
        key: "_getLegendItemAt",
        value: function _getLegendItemAt(t, e) {
          var i, s, a;
          if (c(t, this.left, this.right) && c(e, this.top, this.bottom)) for (a = this.legendHitBoxes, i = 0; i < a.length; ++i) if (c(t, (s = a[i]).left, s.left + s.width) && c(e, s.top, s.top + s.height)) return this.legendItems[i];
          return null;
        }
      }, {
        key: "handleEvent",
        value: function handleEvent(t) {
          var e,
            i,
            s,
            a = this.options;
          ("mousemove" !== (e = t.type) && "mouseout" !== e || !a.onHover && !a.onLeave) && (!a.onClick || "click" !== e && "mouseup" !== e) || (e = this._getLegendItemAt(t.x, t.y), "mousemove" === t.type || "mouseout" === t.type ? (s = null !== (i = this._hoveredItem) && null !== e && i.datasetIndex === e.datasetIndex && i.index === e.index, i && !s && d(a.onLeave, [t, i, this], this), (this._hoveredItem = e) && !s && d(a.onHover, [t, e, this], this)) : e && d(a.onClick, [t, e, this], this));
        }
      }]);
      return On;
    }(e);
    function An(t, e) {
      return e * (t.text ? t.text.length : 0);
    }
    var Tn = {
      id: "legend",
      _element: On,
      start: function start(t, e, i) {
        var s = t.legend = new On({
          ctx: t.ctx,
          options: i,
          chart: t
        });
        a.configure(t, s, i), a.addBox(t, s);
      },
      stop: function stop(t) {
        a.removeBox(t, t.legend), delete t.legend;
      },
      beforeUpdate: function beforeUpdate(t, e, i) {
        var s = t.legend;
        a.configure(t, s, i), s.options = i;
      },
      afterUpdate: function afterUpdate(t) {
        var e = t.legend;
        e.buildLabels(), e.adjustHitBoxes();
      },
      afterEvent: function afterEvent(t, e) {
        e.replay || t.legend.handleEvent(e.event);
      },
      defaults: {
        display: !0,
        position: "top",
        align: "center",
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick: function onClick(t, e, i) {
          var s = e.datasetIndex,
            a = i.chart;
          a.isDatasetVisible(s) ? (a.hide(s), e.hidden = !0) : (a.show(s), e.hidden = !1);
        },
        onHover: null,
        onLeave: null,
        labels: {
          color: function color(t) {
            return t.chart.options.color;
          },
          boxWidth: 40,
          padding: 10,
          generateLabels: function generateLabels(t) {
            var s = t.data.datasets,
              _t$legend$options$lab = t.legend.options["labels"],
              a = _t$legend$options$lab.usePointStyle,
              n = _t$legend$options$lab.pointStyle,
              o = _t$legend$options$lab.textAlign,
              r = _t$legend$options$lab.color,
              l = _t$legend$options$lab.useBorderRadius,
              h = _t$legend$options$lab.borderRadius;
            return t._getSortedDatasetMetas().map(function (t) {
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
                datasetIndex: t.index
              };
            }, this);
          }
        },
        title: {
          color: function color(t) {
            return t.chart.options.color;
          },
          display: !1,
          position: "center",
          text: ""
        }
      },
      descriptors: {
        _scriptable: function _scriptable(t) {
          return !t.startsWith("on");
        },
        labels: {
          _scriptable: function _scriptable(t) {
            return !["generateLabels", "filter", "sort"].includes(t);
          }
        }
      }
    };
    var Ln = /*#__PURE__*/function (_e94) {
      _inherits(Ln, _e94);
      var _super24 = _createSuper(Ln);
      function Ln(t) {
        var _this40;
        _classCallCheck(this, Ln);
        _this40 = _super24.call(this), _this40.chart = t.chart, _this40.options = t.options, _this40.ctx = t.ctx, _this40._padding = void 0, _this40.top = void 0, _this40.bottom = void 0, _this40.left = void 0, _this40.right = void 0, _this40.width = void 0, _this40.height = void 0, _this40.position = void 0, _this40.weight = void 0, _this40.fullSize = void 0;
        return _this40;
      }
      _createClass(Ln, [{
        key: "update",
        value: function update(t, e) {
          var i = this.options;
          this.left = 0, this.top = 0, i.display ? (this.width = this.right = t, this.height = this.bottom = e, t = O(i.text) ? i.text.length : 1, this._padding = I(i.padding), e = t * z(i.font).lineHeight + this._padding.height, this.isHorizontal() ? this.height = e : this.width = e) : this.width = this.height = this.right = this.bottom = 0;
        }
      }, {
        key: "isHorizontal",
        value: function isHorizontal() {
          var t = this.options.position;
          return "top" === t || "bottom" === t;
        }
      }, {
        key: "_drawArgs",
        value: function _drawArgs(t) {
          var e = this.top,
            i = this.left,
            s = this.bottom,
            a = this.right,
            n = this.options,
            o = n.align;
          var r,
            l,
            h,
            c = 0;
          return r = this.isHorizontal() ? (l = E(o, i, a), h = e + t, a - i) : (c = "left" === n.position ? (l = i + t, h = E(o, s, e), -0.5 * S) : (l = a - t, h = E(o, e, s), 0.5 * S), s - e), {
            titleX: l,
            titleY: h,
            maxWidth: r,
            rotation: c
          };
        }
      }, {
        key: "draw",
        value: function draw() {
          var _this$_drawArgs;
          var t,
            e,
            i,
            s,
            a,
            n = this.ctx,
            o = this.options;
          o.display && (e = (t = z(o.font)).lineHeight / 2 + this._padding.top, (_this$_drawArgs = this._drawArgs(e), e = _this$_drawArgs.titleX, i = _this$_drawArgs.titleY, s = _this$_drawArgs.maxWidth, a = _this$_drawArgs.rotation), He(n, o.text, 0, 0, t, {
            color: o.color,
            maxWidth: s,
            rotation: a,
            textAlign: Dt(o.align),
            textBaseline: "middle",
            translation: [e, i]
          }));
        }
      }]);
      return Ln;
    }(e);
    var En = {
      id: "title",
      _element: Ln,
      start: function start(t, e, i) {
        var s;
        t = t, i = i, s = new Ln({
          ctx: t.ctx,
          options: i,
          chart: t
        }), a.configure(t, s, i), a.addBox(t, s), t.titleBlock = s;
      },
      stop: function stop(t) {
        var e = t.titleBlock;
        a.removeBox(t, e), delete t.titleBlock;
      },
      beforeUpdate: function beforeUpdate(t, e, i) {
        var s = t.titleBlock;
        a.configure(t, s, i), s.options = i;
      },
      defaults: {
        align: "center",
        display: !1,
        font: {
          weight: "bold"
        },
        fullSize: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2e3
      },
      defaultRoutes: {
        color: "color"
      },
      descriptors: {
        _scriptable: !0,
        _indexable: !1
      }
    };
    var Rn = new WeakMap();
    var In = {
      id: "subtitle",
      start: function start(t, e, i) {
        var s = new Ln({
          ctx: t.ctx,
          options: i,
          chart: t
        });
        a.configure(t, s, i), a.addBox(t, s), Rn.set(t, s);
      },
      stop: function stop(t) {
        a.removeBox(t, Rn.get(t)), Rn["delete"](t);
      },
      beforeUpdate: function beforeUpdate(t, e, i) {
        var s = Rn.get(t);
        a.configure(t, s, i), s.options = i;
      },
      defaults: {
        align: "center",
        display: !1,
        font: {
          weight: "normal"
        },
        fullSize: !0,
        padding: 0,
        position: "top",
        text: "",
        weight: 1500
      },
      defaultRoutes: {
        color: "color"
      },
      descriptors: {
        _scriptable: !0,
        _indexable: !1
      }
    };
    var zn = {
      average: function average(t) {
        if (!t.length) return !1;
        var e,
          i,
          s = 0,
          a = 0,
          n = 0;
        for (e = 0, i = t.length; e < i; ++e) {
          var _i97 = t[e].element;
          if (_i97 && _i97.hasValue()) {
            var _t139 = _i97.tooltipPosition();
            s += _t139.x, a += _t139.y, ++n;
          }
        }
        return {
          x: s / n,
          y: a / n
        };
      },
      nearest: function nearest(t, e) {
        if (!t.length) return !1;
        var i,
          s,
          a,
          n = e.x,
          o = e.y,
          r = Number.POSITIVE_INFINITY;
        for (i = 0, s = t.length; i < s; ++i) {
          var _s58 = t[i].element;
          if (_s58 && _s58.hasValue()) {
            var _t140 = gt(e, _s58.getCenterPoint());
            _t140 < r && (r = _t140, a = _s58);
          }
        }
        if (a) {
          var _t141 = a.tooltipPosition();
          n = _t141.x, o = _t141.y;
        }
        return {
          x: n,
          y: o
        };
      }
    };
    function x(t, e) {
      return e && (O(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
    }
    function Fn(t) {
      return ("string" == typeof t || t instanceof String) && -1 < t.indexOf("\n") ? t.split("\n") : t;
    }
    function Vn(t, e) {
      var i = t.chart.ctx,
        s = t.body,
        a = t.footer,
        n = t.title,
        o = e.boxWidth,
        r = e.boxHeight,
        l = z(e.bodyFont),
        h = z(e.titleFont),
        c = z(e.footerFont),
        d = n.length,
        u = a.length,
        g = s.length,
        f = I(e.padding);
      var p = f.height,
        m = 0,
        b = s.reduce(function (t, e) {
          return t + e.before.length + e.lines.length + e.after.length;
        }, 0),
        x = (b += t.beforeBody.length + t.afterBody.length, d && (p += d * h.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom), b && (p += g * (e.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight) + (b - g) * l.lineHeight + (b - 1) * e.bodySpacing), u && (p += e.footerMarginTop + u * c.lineHeight + (u - 1) * e.footerSpacing), 0);
      function v(t) {
        m = Math.max(m, i.measureText(t).width + x);
      }
      return i.save(), i.font = h.string, k(t.title, v), i.font = l.string, k(t.beforeBody.concat(t.afterBody), v), x = e.displayColors ? o + 2 + e.boxPadding : 0, k(s, function (t) {
        k(t.before, v), k(t.lines, v), k(t.after, v);
      }), x = 0, i.font = c.string, k(t.footer, v), i.restore(), {
        width: m += f.width,
        height: p
      };
    }
    function Bn(i, t, s) {
      var e = s.yAlign || t.yAlign || function () {
        var t = s.y,
          e = s.height;
        return t < e / 2 ? "top" : t > i.height - e / 2 ? "bottom" : "center";
      }();
      return {
        xAlign: s.xAlign || t.xAlign || function (a, n, o, t) {
          var e = o.x,
            i = o.width,
            s = a.width,
            _a$chartArea = a.chartArea,
            r = _a$chartArea.left,
            l = _a$chartArea.right;
          var h = "center";
          return "center" === t ? h = e <= (r + l) / 2 ? "left" : "right" : e <= i / 2 ? h = "left" : s - i / 2 <= e && (h = "right"), h = function (t) {
            var e = o.x,
              i = o.width,
              s = n.caretSize + n.caretPadding;
            return "left" === t && e + i + s > a.width || "right" === t && e - i - s < 0;
          }(h) ? "center" : h;
        }(i, t, s, e),
        yAlign: e
      };
    }
    function Wn(t, i, e, s) {
      var _t142 = t,
        t = _t142.caretSize,
        a = _t142.caretPadding,
        n = _t142.cornerRadius,
        _e95 = e,
        o = _e95.xAlign,
        r = _e95.yAlign,
        l = t + a,
        _wi = wi(n),
        e = _wi.topLeft,
        a = _wi.topRight,
        n = _wi.bottomLeft,
        h = _wi.bottomRight;
      var c = function () {
        var t = i.x,
          e = i.width;
        return "right" === o ? t -= e : "center" === o && (t -= e / 2), t;
      }();
      var d = function () {
        var t = i.y,
          e = i.height;
        return "top" === r ? t += l : t -= "bottom" === r ? e + l : e / 2, t;
      }();
      return "center" === r ? "left" === o ? c += l : "right" === o && (c -= l) : "left" === o ? c -= Math.max(e, n) + t : "right" === o && (c += Math.max(a, h) + t), {
        x: C(c, 0, s.width - i.width),
        y: C(d, 0, s.height - i.height)
      };
    }
    function Nn(t, e, i) {
      i = I(i.padding);
      return "center" === e ? t.x + t.width / 2 : "right" === e ? t.x + t.width - i.right : t.x + i.left;
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
      title: function title(t) {
        if (0 < t.length) {
          var t = t[0],
            e = t.chart.data.labels,
            i = e ? e.length : 0;
          if (this && this.options && "dataset" === this.options.mode) return t.dataset.label || "";
          if (t.label) return t.label;
          if (0 < i && t.dataIndex < i) return e[t.dataIndex];
        }
        return "";
      },
      afterTitle: t,
      beforeBody: t,
      beforeLabel: t,
      label: function label(t) {
        if (this && this.options && "dataset" === this.options.mode) return t.label + ": " + t.formattedValue || t.formattedValue;
        var e = t.dataset.label || "";
        e && (e += ": ");
        t = t.formattedValue;
        return P(t) || (e += t), e;
      },
      labelColor: function labelColor(t) {
        t = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
        return {
          borderColor: t.borderColor,
          backgroundColor: t.backgroundColor,
          borderWidth: t.borderWidth,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderRadius: 0
        };
      },
      labelTextColor: function labelTextColor() {
        return this.options.bodyColor;
      },
      labelPointStyle: function labelPointStyle(t) {
        t = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex);
        return {
          pointStyle: t.pointStyle,
          rotation: t.rotation
        };
      },
      afterLabel: t,
      afterBody: t,
      beforeFooter: t,
      footer: t,
      afterFooter: t
    };
    function w(t, e, i, s) {
      t = t[e].call(i, s);
      return void 0 === t ? Yn[e].call(i, s) : t;
    }
    var $n = /*#__PURE__*/function (_e96) {
      _inherits($n, _e96);
      var _super25 = _createSuper($n);
      function $n(t) {
        var _this41;
        _classCallCheck(this, $n);
        _this41 = _super25.call(this), _this41.opacity = 0, _this41._active = [], _this41._eventPosition = void 0, _this41._size = void 0, _this41._cachedAnimations = void 0, _this41._tooltipItems = [], _this41.$animations = void 0, _this41.$context = void 0, _this41.chart = t.chart, _this41.options = t.options, _this41.dataPoints = void 0, _this41.title = void 0, _this41.beforeBody = void 0, _this41.body = void 0, _this41.afterBody = void 0, _this41.footer = void 0, _this41.xAlign = void 0, _this41.yAlign = void 0, _this41.x = void 0, _this41.y = void 0, _this41.height = void 0, _this41.width = void 0, _this41.caretX = void 0, _this41.caretY = void 0, _this41.labelColors = void 0, _this41.labelPointStyles = void 0, _this41.labelTextColors = void 0;
        return _this41;
      }
      _createClass($n, [{
        key: "initialize",
        value: function initialize(t) {
          this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
        }
      }, {
        key: "_resolveAnimations",
        value: function _resolveAnimations() {
          var t = this._cachedAnimations;
          if (t) return t;
          var t = this.chart,
            e = this.options.setContext(this.getContext()),
            t = e.enabled && t.options.animation && e.animations,
            e = new xs(this.chart, t);
          return t._cacheable && (this._cachedAnimations = Object.freeze(e)), e;
        }
      }, {
        key: "getContext",
        value: function getContext() {
          return this.$context || (this.$context = (t = this.chart.getContext(), Pi(t, {
            tooltip: this,
            tooltipItems: this._tooltipItems,
            type: "tooltip"
          })));
          var t;
        }
      }, {
        key: "getTitle",
        value: function getTitle(t, e) {
          var e = e["callbacks"],
            i = w(e, "beforeTitle", this, t),
            s = w(e, "title", this, t),
            e = w(e, "afterTitle", this, t),
            t = x([], Fn(i));
          return t = x(t, Fn(s)), x(t, Fn(e));
        }
      }, {
        key: "getBeforeBody",
        value: function getBeforeBody(t, e) {
          return Hn(w(e.callbacks, "beforeBody", this, t));
        }
      }, {
        key: "getBody",
        value: function getBody(t, e) {
          var _this42 = this;
          var s = e["callbacks"],
            a = [];
          return k(t, function (t) {
            var e = {
                before: [],
                lines: [],
                after: []
              },
              i = jn(s, t);
            x(e.before, Fn(w(i, "beforeLabel", _this42, t))), x(e.lines, w(i, "label", _this42, t)), x(e.after, Fn(w(i, "afterLabel", _this42, t))), a.push(e);
          }), a;
        }
      }, {
        key: "getAfterBody",
        value: function getAfterBody(t, e) {
          return Hn(w(e.callbacks, "afterBody", this, t));
        }
      }, {
        key: "getFooter",
        value: function getFooter(t, e) {
          var e = e["callbacks"],
            i = w(e, "beforeFooter", this, t),
            s = w(e, "footer", this, t),
            e = w(e, "afterFooter", this, t),
            t = x([], Fn(i));
          return t = x(t, Fn(s)), x(t, Fn(e));
        }
      }, {
        key: "_createItems",
        value: function _createItems(s) {
          var _this43 = this;
          var t = this._active,
            a = this.chart.data,
            i = [],
            n = [],
            o = [];
          var e,
            r,
            l = [];
          for (e = 0, r = t.length; e < r; ++e) l.push(function (t, e) {
            var i = e.element,
              s = e.datasetIndex,
              a = e.index,
              n = t.getDatasetMeta(s).controller,
              _n$getLabelAndValue = n.getLabelAndValue(a),
              o = _n$getLabelAndValue.label,
              r = _n$getLabelAndValue.value;
            return {
              chart: t,
              label: o,
              parsed: n.getParsed(a),
              raw: t.data.datasets[s].data[a],
              formattedValue: r,
              dataset: n.getDataset(),
              dataIndex: a,
              datasetIndex: s,
              element: i
            };
          }(this.chart, t[e]));
          return s.filter && (l = l.filter(function (t, e, i) {
            return s.filter(t, e, i, a);
          })), k(l = s.itemSort ? l.sort(function (t, e) {
            return s.itemSort(t, e, a);
          }) : l, function (t) {
            var e = jn(s.callbacks, t);
            i.push(w(e, "labelColor", _this43, t)), n.push(w(e, "labelPointStyle", _this43, t)), o.push(w(e, "labelTextColor", _this43, t));
          }), this.labelColors = i, this.labelPointStyles = n, this.labelTextColors = o, this.dataPoints = l;
        }
      }, {
        key: "update",
        value: function update(t, e) {
          var i = this.options.setContext(this.getContext()),
            s = this._active;
          var a,
            n = [];
          if (s.length) {
            var _t143 = zn[i.position].call(this, s, this._eventPosition),
              _e97 = (n = this._createItems(i), this.title = this.getTitle(n, i), this.beforeBody = this.getBeforeBody(n, i), this.body = this.getBody(n, i), this.afterBody = this.getAfterBody(n, i), this.footer = this.getFooter(n, i), this._size = Vn(this, i)),
              _o30 = Object.assign({}, _t143, _e97),
              _r19 = Bn(this.chart, i, _o30),
              _l24 = Wn(i, _o30, _r19, this.chart);
            this.xAlign = _r19.xAlign, this.yAlign = _r19.yAlign, a = {
              opacity: 1,
              x: _l24.x,
              y: _l24.y,
              width: _e97.width,
              height: _e97.height,
              caretX: _t143.x,
              caretY: _t143.y
            };
          } else 0 !== this.opacity && (a = {
            opacity: 0
          });
          this._tooltipItems = n, this.$context = void 0, a && this._resolveAnimations().update(this, a), t && i.external && i.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: e
          });
        }
      }, {
        key: "drawCaret",
        value: function drawCaret(t, e, i, s) {
          t = this.getCaretPosition(t, i, s);
          e.lineTo(t.x1, t.y1), e.lineTo(t.x2, t.y2), e.lineTo(t.x3, t.y3);
        }
      }, {
        key: "getCaretPosition",
        value: function getCaretPosition(t, e, i) {
          var s = this.xAlign,
            a = this.yAlign,
            _i98 = i,
            i = _i98.caretSize,
            n = _i98.cornerRadius,
            _wi2 = wi(n),
            n = _wi2.topLeft,
            o = _wi2.topRight,
            r = _wi2.bottomLeft,
            l = _wi2.bottomRight,
            _t144 = t,
            t = _t144.x,
            h = _t144.y,
            _e98 = e,
            e = _e98.width,
            c = _e98.height;
          var d, u, g, f, p, m;
          return "center" === a ? (p = h + c / 2, m = "left" === s ? (d = t, u = d - i, f = p + i, p - i) : (d = t + e, u = d + i, f = p - i, p + i), g = d) : (u = "left" === s ? t + Math.max(n, r) + i : "right" === s ? t + e - Math.max(o, l) - i : this.caretX, g = "top" === a ? (f = h, p = f - i, d = u - i, u + i) : (f = h + c, p = f + i, d = u + i, u - i), m = f), {
            x1: d,
            x2: u,
            x3: g,
            y1: f,
            y2: p,
            y3: m
          };
        }
      }, {
        key: "drawTitle",
        value: function drawTitle(t, e, i) {
          var s = this.title,
            a = s.length;
          var n, o, r;
          if (a) {
            var _l25 = Di(i.rtl, this.x, this.width);
            for (t.x = Nn(this, i.titleAlign, i), e.textAlign = _l25.textAlign(i.titleAlign), e.textBaseline = "middle", n = z(i.titleFont), o = i.titleSpacing, e.fillStyle = i.titleColor, e.font = n.string, r = 0; r < a; ++r) e.fillText(s[r], _l25.x(t.x), t.y + n.lineHeight / 2), t.y += n.lineHeight + o, r + 1 === a && (t.y += i.titleMarginBottom - o);
          }
        }
      }, {
        key: "_drawColorBox",
        value: function _drawColorBox(t, e, i, s, a) {
          var n = this.labelColors[i],
            o = this.labelPointStyles[i],
            r = a.boxHeight,
            l = a.boxWidth,
            h = z(a.bodyFont),
            c = Nn(this, "left", a),
            d = s.x(c),
            u = r < h.lineHeight ? (h.lineHeight - r) / 2 : 0,
            g = e.y + u;
          if (a.usePointStyle) {
            var _e99 = {
                radius: Math.min(l, r) / 2,
                pointStyle: o.pointStyle,
                rotation: o.rotation,
                borderWidth: 1
              },
              _i99 = s.leftForLtr(d, l) + l / 2,
              _A4 = g + r / 2;
            t.strokeStyle = a.multiKeyBackground, t.fillStyle = a.multiKeyBackground, ze(t, _e99, _i99, _A4), t.strokeStyle = n.borderColor, t.fillStyle = n.backgroundColor, ze(t, _e99, _i99, _A4);
          } else {
            t.lineWidth = A(n.borderWidth) ? Math.max.apply(Math, _toConsumableArray(Object.values(n.borderWidth))) : n.borderWidth || 1, t.strokeStyle = n.borderColor, t.setLineDash(n.borderDash || []), t.lineDashOffset = n.borderDashOffset || 0;
            var _e100 = s.leftForLtr(d, l),
              _i100 = s.leftForLtr(s.xPlus(d, 1), l - 2),
              _o31 = wi(n.borderRadius);
            Object.values(_o31).some(function (t) {
              return 0 !== t;
            }) ? (t.beginPath(), t.fillStyle = a.multiKeyBackground, je(t, {
              x: _e100,
              y: g,
              w: l,
              h: r,
              radius: _o31
            }), t.fill(), t.stroke(), t.fillStyle = n.backgroundColor, t.beginPath(), je(t, {
              x: _i100,
              y: g + 1,
              w: l - 2,
              h: r - 2,
              radius: _o31
            }), t.fill()) : (t.fillStyle = a.multiKeyBackground, t.fillRect(_e100, g, l, r), t.strokeRect(_e100, g, l, r), t.fillStyle = n.backgroundColor, t.fillRect(_i100, g + 1, l - 2, r - 2));
          }
          t.fillStyle = this.labelTextColors[i];
        }
      }, {
        key: "drawBody",
        value: function drawBody(e, i, t) {
          var s = this["body"],
            a = t.bodySpacing,
            n = t.bodyAlign,
            o = t.displayColors,
            r = t.boxHeight,
            l = t.boxWidth,
            h = t.boxPadding,
            c = z(t.bodyFont);
          var d = c.lineHeight,
            u = 0;
          function g(t) {
            i.fillText(t, f.x(e.x + u), e.y + d / 2), e.y += d + a;
          }
          var f = Di(t.rtl, this.x, this.width),
            p = f.textAlign(n);
          var m, b, x, v, _, y, M;
          for (i.textAlign = n, i.textBaseline = "middle", i.font = c.string, e.x = Nn(this, p, t), i.fillStyle = t.bodyColor, k(this.beforeBody, g), u = o && "right" !== p ? "center" === n ? l / 2 + h : l + 2 + h : 0, v = 0, y = s.length; v < y; ++v) {
            for (m = s[v], b = this.labelTextColors[v], i.fillStyle = b, k(m.before, g), x = m.lines, o && x.length && (this._drawColorBox(i, e, v, f, t), d = Math.max(c.lineHeight, r)), _ = 0, M = x.length; _ < M; ++_) g(x[_]), d = c.lineHeight;
            k(m.after, g);
          }
          u = 0, d = c.lineHeight, k(this.afterBody, g), e.y -= a;
        }
      }, {
        key: "drawFooter",
        value: function drawFooter(t, e, i) {
          var s = this.footer,
            a = s.length;
          var n, o;
          if (a) {
            var _r20 = Di(i.rtl, this.x, this.width);
            for (t.x = Nn(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = _r20.textAlign(i.footerAlign), e.textBaseline = "middle", n = z(i.footerFont), e.fillStyle = i.footerColor, e.font = n.string, o = 0; o < a; ++o) e.fillText(s[o], _r20.x(t.x), t.y + n.lineHeight / 2), t.y += n.lineHeight + i.footerSpacing;
          }
        }
      }, {
        key: "drawBackground",
        value: function drawBackground(t, e, i, s) {
          var a = this.xAlign,
            n = this.yAlign,
            o = t.x,
            r = t.y,
            l = i.width,
            h = i.height,
            _wi3 = wi(s.cornerRadius),
            c = _wi3.topLeft,
            d = _wi3.topRight,
            u = _wi3.bottomLeft,
            g = _wi3.bottomRight;
          e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(o + c, r), "top" === n && this.drawCaret(t, e, i, s), e.lineTo(o + l - d, r), e.quadraticCurveTo(o + l, r, o + l, r + d), "center" === n && "right" === a && this.drawCaret(t, e, i, s), e.lineTo(o + l, r + h - g), e.quadraticCurveTo(o + l, r + h, o + l - g, r + h), "bottom" === n && this.drawCaret(t, e, i, s), e.lineTo(o + u, r + h), e.quadraticCurveTo(o, r + h, o, r + h - u), "center" === n && "left" === a && this.drawCaret(t, e, i, s), e.lineTo(o, r + c), e.quadraticCurveTo(o, r, o + c, r), e.closePath(), e.fill(), 0 < s.borderWidth && e.stroke();
        }
      }, {
        key: "_updateAnimationTarget",
        value: function _updateAnimationTarget(t) {
          var e = this.chart,
            i = this.$animations,
            s = i && i.x,
            a = i && i.y;
          if (s || a) {
            var _i101 = zn[t.position].call(this, this._active, this._eventPosition);
            var n, o;
            _i101 && (n = this._size = Vn(this, t), o = Wn(t, o = Object.assign({}, _i101, this._size), t = Bn(e, t, o), e), s._to === o.x && a._to === o.y || (this.xAlign = t.xAlign, this.yAlign = t.yAlign, this.width = n.width, this.height = n.height, this.caretX = _i101.x, this.caretY = _i101.y, this._resolveAnimations().update(this, o)));
          }
        }
      }, {
        key: "_willRender",
        value: function _willRender() {
          return !!this.opacity;
        }
      }, {
        key: "draw",
        value: function draw(t) {
          var e = this.options.setContext(this.getContext());
          var i = this.opacity;
          if (i) {
            this._updateAnimationTarget(e);
            var _n33 = {
                width: this.width,
                height: this.height
              },
              _o32 = {
                x: this.x,
                y: this.y
              };
            i = Math.abs(i) < 0.001 ? 0 : i;
            var s = I(e.padding),
              a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
            e.enabled && a && (t.save(), t.globalAlpha = i, this.drawBackground(_o32, t, _n33, e), Ci(t, e.textDirection), _o32.y += s.top, this.drawTitle(_o32, t, e), this.drawBody(_o32, t, e), this.drawFooter(_o32, t, e), Oi(t, e.textDirection), t.restore());
          }
        }
      }, {
        key: "getActiveElements",
        value: function getActiveElements() {
          return this._active || [];
        }
      }, {
        key: "setActiveElements",
        value: function setActiveElements(t, e) {
          var _this44 = this;
          var i = this._active,
            t = t.map(function (_ref26) {
              var t = _ref26.datasetIndex,
                e = _ref26.index;
              var i = _this44.chart.getDatasetMeta(t);
              if (i) return {
                datasetIndex: t,
                element: i.data[e],
                index: e
              };
              throw new Error("Cannot find a dataset at index " + t);
            }),
            i = !W(i, t),
            s = this._positionChanged(t, e);
          (i || s) && (this._active = t, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
        }
      }, {
        key: "handleEvent",
        value: function handleEvent(t, e) {
          var _this45 = this;
          var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
          return function (i) {
            if (e && _this45._ignoreReplayEvents) return !1;
            _this45._ignoreReplayEvents = !1;
            var s = _this45.options,
              a = _this45._active || [],
              i = _this45._getActiveElements(t, a, e, i),
              n = _this45._positionChanged(i, t),
              a = e || !W(i, a) || n;
            return a && (_this45._active = i, (s.enabled || s.external) && (_this45._eventPosition = {
              x: t.x,
              y: t.y
            }, _this45.update(!0, e))), a;
          }(i);
        }
      }, {
        key: "_getActiveElements",
        value: function _getActiveElements(t, e, i, s) {
          var a = this.options;
          if ("mouseout" === t.type) return [];
          if (!s) return e;
          var n = this.chart.getElementsAtEventForMode(t, a.mode, a, i);
          return a.reverse && n.reverse(), n;
        }
      }, {
        key: "_positionChanged",
        value: function _positionChanged(t, e) {
          var i = this.caretX,
            s = this.caretY,
            a = this.options,
            a = zn[a.position].call(this, t, e);
          return !1 !== a && (i !== a.x || s !== a.y);
        }
      }]);
      return $n;
    }(e);
    _defineProperty($n, "positioners", zn);
    var Un = {
      id: "tooltip",
      _element: $n,
      positioners: zn,
      afterInit: function afterInit(t, e, i) {
        i && (t.tooltip = new $n({
          chart: t,
          options: i
        }));
      },
      beforeUpdate: function beforeUpdate(t, e, i) {
        t.tooltip && t.tooltip.initialize(i);
      },
      reset: function reset(t, e, i) {
        t.tooltip && t.tooltip.initialize(i);
      },
      afterDraw: function afterDraw(t) {
        var e = t.tooltip;
        var i;
        e && e._willRender() && !(i = {
          tooltip: e
        }) !== t.notifyPlugins("beforeTooltipDraw", _objectSpread(_objectSpread({}, i), {}, {
          cancelable: !0
        })) && (e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i));
      },
      afterEvent: function afterEvent(t, e) {
        var i;
        t.tooltip && (i = e.replay, t.tooltip.handleEvent(e.event, i, e.inChartArea) && (e.changed = !0));
      },
      defaults: {
        enabled: !0,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: {
          weight: "bold"
        },
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
        footerFont: {
          weight: "bold"
        },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: function boxHeight(t, e) {
          return e.bodyFont.size;
        },
        boxWidth: function boxWidth(t, e) {
          return e.bodyFont.size;
        },
        multiKeyBackground: "#fff",
        displayColors: !0,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: {
          duration: 400,
          easing: "easeOutQuart"
        },
        animations: {
          numbers: {
            type: "number",
            properties: ["x", "y", "width", "height", "caretX", "caretY"]
          },
          opacity: {
            easing: "linear",
            duration: 200
          }
        },
        callbacks: Yn
      },
      defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font"
      },
      descriptors: {
        _scriptable: function _scriptable(t) {
          return "filter" !== t && "itemSort" !== t && "external" !== t;
        },
        _indexable: !1,
        callbacks: {
          _scriptable: !1,
          _indexable: !1
        },
        animation: {
          _fallback: !1
        },
        animations: {
          _fallback: "animation"
        }
      },
      additionalOptionScopes: ["interaction"]
    };
    return i.register(ba, an, Ra, s), i.helpers = _objectSpread({}, Fi), i._adapters = ha, i.Animation = bs, i.Animations = xs, i.animator = l, i.controllers = b.controllers.items, i.DatasetController = Os, i.Element = e, i.elements = Ra, i.Interaction = Hi, i.layouts = a, i.platforms = Oe, i.Scale = zs, i.Ticks = ge, Object.assign(i, ba, an, Ra, s, Oe), i.Chart = i, "undefined" != typeof window && (window.Chart = i), i;
  });
  var tmpl = document.createElement("template");
  tmpl.innerHTML = "\n    <style>\n      .widget__wrapper {\n        padding: 0 1rem 1rem 1rem;\n        margin: 1rem;\n        border-radius: 1rem;\n        background: #fff;\n      }\n\n      .widget__title {\n        font-size: 1.5rem;\n        margin-left: 1rem;\n      }\n\n      .widget__header {\n        display: flex;\n        align-items: center;\n        height: 4rem;\n      }\n\n      .widget__filters {\n        display: flex;\n        align-items: center;\n        margin-left: 2rem;\n      }\n\n      .widget__filter-btn {\n        border: 2px solid #2c2c2c;\n        border-radius: 0.4rem;\n        padding: 0.5rem;\n        margin: 0 0.5rem;\n      }\n\n      .chart__wrapper {\n        display: block !important;\n        height: 370px !important;\n      }\n    </style>\n\n    <div class=\"widget__wrapper\">\n      <div class=\"widget__header\">\n        <h2 class=\"widget__title\">Average Rebate Rate</h2>\n      </div>\n      <div class=\"chart__wrapper\">\n        <canvas id=\"average-rebate-rate-chart\"></canvas>\n      </div>\n    </div>\n  ";

  // grid opacity 0.5 for blending
  // background opacity 1 for filtering
  // chart opacity 0.8 for blending
  var PerformanceHelp = /*#__PURE__*/function (_HTMLElement) {
    _inherits(PerformanceHelp, _HTMLElement);
    var _super26 = _createSuper(PerformanceHelp);
    function PerformanceHelp() {
      var _this46;
      _classCallCheck(this, PerformanceHelp);
      _this46 = _super26.call(this);
      _defineProperty(_assertThisInitialized(_this46), "template", undefined);
      _defineProperty(_assertThisInitialized(_this46), "chart", undefined);
      _defineProperty(_assertThisInitialized(_this46), "currentColor", undefined);
      _defineProperty(_assertThisInitialized(_this46), "colors", {
        lightMode: {
          background: "rgba(230, 230, 230, 1)",
          text: "rgba(70, 70, 70, 1)",
          grid: "rgba(130, 130, 130, 0.5)",
          chart: {
            primary: "rgba(70, 49, 238, 0.8)",
            secondary: "rgba(255, 70, 118, 0.8)"
          }
        },
        darkMode: {
          background: "rgba(70, 70, 70, 1)",
          text: "rgba(220, 220, 220, 1)",
          grid: "rgba(210, 210, 210, 0.5)",
          chart: {
            primary: "rgba(210, 210, 210, 0.8)",
            secondary: "rgba(255, 70, 118, 0.8)"
          }
        }
      });
      _this46.init();
      return _this46;
    }
    _createClass(PerformanceHelp, [{
      key: "init",
      value: function init() {
        var shadowRoot = this.attachShadow({
          mode: "open"
        });
        shadowRoot.appendChild(tmpl.content.cloneNode(true));
        this.template = shadowRoot;
      }
    }, {
      key: "onCustomWidgetBeforeUpdate",
      value: function onCustomWidgetBeforeUpdate(changedProperties) {
        if (changedProperties) {
          if (changedProperties.lightModeChartColor) this.colors.lightMode.chart.primary = changedProperties.lightModeChartColor;
          if (changedProperties.darkModeChartColor) this.colors.darkMode.chart.primary = changedProperties.darkModeChartColor;
          if (changedProperties.chartTitle) this.template.querySelector(".widget__title").innerText = changedProperties.chartTitle;
        }
        var element = document.querySelector(".sap-user-defined-dark-mode-theme");
        this.currentColor = element ? this.colors.darkMode : this.colors.lightMode;
        this.adjustStyles();
      }
    }, {
      key: "onCustomWidgetAfterUpdate",
      value: function onCustomWidgetAfterUpdate(changedProperties) {
        if (!this.dataSet || !this.dataSet.data) return;
        if (this.chart) {
          this.updateChartData();
          return;
        }
        this.renderChart();
      }
    }, {
      key: "updateChartData",
      value: function updateChartData() {
        var data = this.getData();
        this.chart.data.datasets[0].data = data.values;
        this.chart.data.labels = data.labels;
        this.chart.update();
      }
    }, {
      key: "getData",
      value: function getData() {
        var dataSet = this.dataSet.data.sort(function (a, b) {
          return b.measures_0.raw - a.measures_0.raw;
        }).slice(0, 10);
        var labels = dataSet.map(function (el) {
          return el.dimensions_0.label.split("_").join(" ");
        });
        var values = dataSet.map(function (el) {
          return el.measures_0.raw;
        });
        return {
          labels: labels,
          values: values
        };
      }
    }, {
      key: "renderChart",
      value: function renderChart() {
        var data = this.getData();
        var chartElement = this.template.querySelector("canvas").getContext("2d");
        this.chart = new Chart(chartElement, {
          type: "bar",
          data: {
            labels: data.labels,
            datasets: [{
              label: "Value",
              data: data.values,
              backgroundColor: this.currentColor.chart.primary,
              borderWidth: 0,
              borderColor: this.currentColor.chart.primary,
              borderRadius: 5,
              borderSkipped: false
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "x",
            scales: {
              x: {
                grid: {
                  color: this.currentColor.grid
                },
                ticks: {
                  color: this.currentColor.text
                }
              },
              y: {
                grid: {
                  color: this.currentColor.grid
                },
                ticks: {
                  color: this.currentColor.text
                }
              }
            },
            plugins: {
              title: {
                display: false
              },
              legend: {
                display: false
              }
            }
          }
        });
      }
    }, {
      key: "adjustStyles",
      value: function adjustStyles() {
        this.template.querySelector(".widget__wrapper").style.background = this.currentColor.background;
        this.template.querySelector(".widget__title").style.color = this.currentColor.text;
      }
    }]);
    return PerformanceHelp;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  customElements.define("top-ten-products", PerformanceHelp);
})();