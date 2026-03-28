(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c);
  new MutationObserver((c) => {
    for (const l of c)
      if (l.type === "childList")
        for (const f of l.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(c) {
    const l = {};
    return (
      c.integrity && (l.integrity = c.integrity),
      c.referrerPolicy && (l.referrerPolicy = c.referrerPolicy),
      c.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : c.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
      l
    );
  }
  function o(c) {
    if (c.ep) return;
    c.ep = !0;
    const l = r(c);
    fetch(c.href, l);
  }
})();
var wp =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
      ? window
      : typeof global < "u"
        ? global
        : typeof self < "u"
          ? self
          : {};
function E1(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default")
    ? a.default
    : a;
}
var tc = { exports: {} },
  Cs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jp;
function C1() {
  if (jp) return Cs;
  jp = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function r(o, c, l) {
    var f = null;
    if (
      (l !== void 0 && (f = "" + l),
      c.key !== void 0 && (f = "" + c.key),
      "key" in c)
    ) {
      l = {};
      for (var m in c) m !== "key" && (l[m] = c[m]);
    } else l = c;
    return (
      (c = l.ref),
      { $$typeof: a, type: o, key: f, ref: c !== void 0 ? c : null, props: l }
    );
  }
  return ((Cs.Fragment = i), (Cs.jsx = r), (Cs.jsxs = r), Cs);
}
var Dp;
function w1() {
  return (Dp || ((Dp = 1), (tc.exports = C1())), tc.exports);
}
var A = w1(),
  ec = { exports: {} },
  mt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Np;
function j1() {
  if (Np) return mt;
  Np = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    r = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    c = Symbol.for("react.profiler"),
    l = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    v = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    x = Symbol.for("react.activity"),
    y = Symbol.iterator;
  function d(G) {
    return G === null || typeof G != "object"
      ? null
      : ((G = (y && G[y]) || G["@@iterator"]),
        typeof G == "function" ? G : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    b = Object.assign,
    M = {};
  function C(G, Z, at) {
    ((this.props = G),
      (this.context = Z),
      (this.refs = M),
      (this.updater = at || S));
  }
  ((C.prototype.isReactComponent = {}),
    (C.prototype.setState = function (G, Z) {
      if (typeof G != "object" && typeof G != "function" && G != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, G, Z, "setState");
    }),
    (C.prototype.forceUpdate = function (G) {
      this.updater.enqueueForceUpdate(this, G, "forceUpdate");
    }));
  function O() {}
  O.prototype = C.prototype;
  function N(G, Z, at) {
    ((this.props = G),
      (this.context = Z),
      (this.refs = M),
      (this.updater = at || S));
  }
  var V = (N.prototype = new O());
  ((V.constructor = N), b(V, C.prototype), (V.isPureReactComponent = !0));
  var E = Array.isArray;
  function D() {}
  var R = { H: null, A: null, T: null, S: null },
    j = Object.prototype.hasOwnProperty;
  function B(G, Z, at) {
    var st = at.ref;
    return {
      $$typeof: a,
      type: G,
      key: Z,
      ref: st !== void 0 ? st : null,
      props: at,
    };
  }
  function z(G, Z) {
    return B(G.type, Z, G.props);
  }
  function U(G) {
    return typeof G == "object" && G !== null && G.$$typeof === a;
  }
  function H(G) {
    var Z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      G.replace(/[=:]/g, function (at) {
        return Z[at];
      })
    );
  }
  var q = /\/+/g;
  function I(G, Z) {
    return typeof G == "object" && G !== null && G.key != null
      ? H("" + G.key)
      : Z.toString(36);
  }
  function tt(G) {
    switch (G.status) {
      case "fulfilled":
        return G.value;
      case "rejected":
        throw G.reason;
      default:
        switch (
          (typeof G.status == "string"
            ? G.then(D, D)
            : ((G.status = "pending"),
              G.then(
                function (Z) {
                  G.status === "pending" &&
                    ((G.status = "fulfilled"), (G.value = Z));
                },
                function (Z) {
                  G.status === "pending" &&
                    ((G.status = "rejected"), (G.reason = Z));
                },
              )),
          G.status)
        ) {
          case "fulfilled":
            return G.value;
          case "rejected":
            throw G.reason;
        }
    }
    throw G;
  }
  function k(G, Z, at, st, ht) {
    var lt = typeof G;
    (lt === "undefined" || lt === "boolean") && (G = null);
    var pt = !1;
    if (G === null) pt = !0;
    else
      switch (lt) {
        case "bigint":
        case "string":
        case "number":
          pt = !0;
          break;
        case "object":
          switch (G.$$typeof) {
            case a:
            case i:
              pt = !0;
              break;
            case g:
              return ((pt = G._init), k(pt(G._payload), Z, at, st, ht));
          }
      }
    if (pt)
      return (
        (ht = ht(G)),
        (pt = st === "" ? "." + I(G, 0) : st),
        E(ht)
          ? ((at = ""),
            pt != null && (at = pt.replace(q, "$&/") + "/"),
            k(ht, Z, at, "", function (ue) {
              return ue;
            }))
          : ht != null &&
            (U(ht) &&
              (ht = z(
                ht,
                at +
                  (ht.key == null || (G && G.key === ht.key)
                    ? ""
                    : ("" + ht.key).replace(q, "$&/") + "/") +
                  pt,
              )),
            Z.push(ht)),
        1
      );
    pt = 0;
    var Mt = st === "" ? "." : st + ":";
    if (E(G))
      for (var Bt = 0; Bt < G.length; Bt++)
        ((st = G[Bt]), (lt = Mt + I(st, Bt)), (pt += k(st, Z, at, lt, ht)));
    else if (((Bt = d(G)), typeof Bt == "function"))
      for (G = Bt.call(G), Bt = 0; !(st = G.next()).done; )
        ((st = st.value),
          (lt = Mt + I(st, Bt++)),
          (pt += k(st, Z, at, lt, ht)));
    else if (lt === "object") {
      if (typeof G.then == "function") return k(tt(G), Z, at, st, ht);
      throw (
        (Z = String(G)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Z === "[object Object]"
              ? "object with keys {" + Object.keys(G).join(", ") + "}"
              : Z) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return pt;
  }
  function P(G, Z, at) {
    if (G == null) return G;
    var st = [],
      ht = 0;
    return (
      k(G, st, "", "", function (lt) {
        return Z.call(at, lt, ht++);
      }),
      st
    );
  }
  function et(G) {
    if (G._status === -1) {
      var Z = G._result;
      ((Z = Z()),
        Z.then(
          function (at) {
            (G._status === 0 || G._status === -1) &&
              ((G._status = 1), (G._result = at));
          },
          function (at) {
            (G._status === 0 || G._status === -1) &&
              ((G._status = 2), (G._result = at));
          },
        ),
        G._status === -1 && ((G._status = 0), (G._result = Z)));
    }
    if (G._status === 1) return G._result.default;
    throw G._result;
  }
  var it =
      typeof reportError == "function"
        ? reportError
        : function (G) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var Z = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof G == "object" &&
                  G !== null &&
                  typeof G.message == "string"
                    ? String(G.message)
                    : String(G),
                error: G,
              });
              if (!window.dispatchEvent(Z)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", G);
              return;
            }
            console.error(G);
          },
    ct = {
      map: P,
      forEach: function (G, Z, at) {
        P(
          G,
          function () {
            Z.apply(this, arguments);
          },
          at,
        );
      },
      count: function (G) {
        var Z = 0;
        return (
          P(G, function () {
            Z++;
          }),
          Z
        );
      },
      toArray: function (G) {
        return (
          P(G, function (Z) {
            return Z;
          }) || []
        );
      },
      only: function (G) {
        if (!U(G))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return G;
      },
    };
  return (
    (mt.Activity = x),
    (mt.Children = ct),
    (mt.Component = C),
    (mt.Fragment = r),
    (mt.Profiler = c),
    (mt.PureComponent = N),
    (mt.StrictMode = o),
    (mt.Suspense = p),
    (mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R),
    (mt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (G) {
        return R.H.useMemoCache(G);
      },
    }),
    (mt.cache = function (G) {
      return function () {
        return G.apply(null, arguments);
      };
    }),
    (mt.cacheSignal = function () {
      return null;
    }),
    (mt.cloneElement = function (G, Z, at) {
      if (G == null)
        throw Error(
          "The argument must be a React element, but you passed " + G + ".",
        );
      var st = b({}, G.props),
        ht = G.key;
      if (Z != null)
        for (lt in (Z.key !== void 0 && (ht = "" + Z.key), Z))
          !j.call(Z, lt) ||
            lt === "key" ||
            lt === "__self" ||
            lt === "__source" ||
            (lt === "ref" && Z.ref === void 0) ||
            (st[lt] = Z[lt]);
      var lt = arguments.length - 2;
      if (lt === 1) st.children = at;
      else if (1 < lt) {
        for (var pt = Array(lt), Mt = 0; Mt < lt; Mt++)
          pt[Mt] = arguments[Mt + 2];
        st.children = pt;
      }
      return B(G.type, ht, st);
    }),
    (mt.createContext = function (G) {
      return (
        (G = {
          $$typeof: f,
          _currentValue: G,
          _currentValue2: G,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (G.Provider = G),
        (G.Consumer = { $$typeof: l, _context: G }),
        G
      );
    }),
    (mt.createElement = function (G, Z, at) {
      var st,
        ht = {},
        lt = null;
      if (Z != null)
        for (st in (Z.key !== void 0 && (lt = "" + Z.key), Z))
          j.call(Z, st) &&
            st !== "key" &&
            st !== "__self" &&
            st !== "__source" &&
            (ht[st] = Z[st]);
      var pt = arguments.length - 2;
      if (pt === 1) ht.children = at;
      else if (1 < pt) {
        for (var Mt = Array(pt), Bt = 0; Bt < pt; Bt++)
          Mt[Bt] = arguments[Bt + 2];
        ht.children = Mt;
      }
      if (G && G.defaultProps)
        for (st in ((pt = G.defaultProps), pt))
          ht[st] === void 0 && (ht[st] = pt[st]);
      return B(G, lt, ht);
    }),
    (mt.createRef = function () {
      return { current: null };
    }),
    (mt.forwardRef = function (G) {
      return { $$typeof: m, render: G };
    }),
    (mt.isValidElement = U),
    (mt.lazy = function (G) {
      return { $$typeof: g, _payload: { _status: -1, _result: G }, _init: et };
    }),
    (mt.memo = function (G, Z) {
      return { $$typeof: v, type: G, compare: Z === void 0 ? null : Z };
    }),
    (mt.startTransition = function (G) {
      var Z = R.T,
        at = {};
      R.T = at;
      try {
        var st = G(),
          ht = R.S;
        (ht !== null && ht(at, st),
          typeof st == "object" &&
            st !== null &&
            typeof st.then == "function" &&
            st.then(D, it));
      } catch (lt) {
        it(lt);
      } finally {
        (Z !== null && at.types !== null && (Z.types = at.types), (R.T = Z));
      }
    }),
    (mt.unstable_useCacheRefresh = function () {
      return R.H.useCacheRefresh();
    }),
    (mt.use = function (G) {
      return R.H.use(G);
    }),
    (mt.useActionState = function (G, Z, at) {
      return R.H.useActionState(G, Z, at);
    }),
    (mt.useCallback = function (G, Z) {
      return R.H.useCallback(G, Z);
    }),
    (mt.useContext = function (G) {
      return R.H.useContext(G);
    }),
    (mt.useDebugValue = function () {}),
    (mt.useDeferredValue = function (G, Z) {
      return R.H.useDeferredValue(G, Z);
    }),
    (mt.useEffect = function (G, Z) {
      return R.H.useEffect(G, Z);
    }),
    (mt.useEffectEvent = function (G) {
      return R.H.useEffectEvent(G);
    }),
    (mt.useId = function () {
      return R.H.useId();
    }),
    (mt.useImperativeHandle = function (G, Z, at) {
      return R.H.useImperativeHandle(G, Z, at);
    }),
    (mt.useInsertionEffect = function (G, Z) {
      return R.H.useInsertionEffect(G, Z);
    }),
    (mt.useLayoutEffect = function (G, Z) {
      return R.H.useLayoutEffect(G, Z);
    }),
    (mt.useMemo = function (G, Z) {
      return R.H.useMemo(G, Z);
    }),
    (mt.useOptimistic = function (G, Z) {
      return R.H.useOptimistic(G, Z);
    }),
    (mt.useReducer = function (G, Z, at) {
      return R.H.useReducer(G, Z, at);
    }),
    (mt.useRef = function (G) {
      return R.H.useRef(G);
    }),
    (mt.useState = function (G) {
      return R.H.useState(G);
    }),
    (mt.useSyncExternalStore = function (G, Z, at) {
      return R.H.useSyncExternalStore(G, Z, at);
    }),
    (mt.useTransition = function () {
      return R.H.useTransition();
    }),
    (mt.version = "19.2.4"),
    mt
  );
}
var Rp;
function Ic() {
  return (Rp || ((Rp = 1), (ec.exports = j1())), ec.exports);
}
var nt = Ic(),
  nc = { exports: {} },
  ws = {},
  ac = { exports: {} },
  ic = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Op;
function D1() {
  return (
    Op ||
      ((Op = 1),
      (function (a) {
        function i(k, P) {
          var et = k.length;
          k.push(P);
          t: for (; 0 < et; ) {
            var it = (et - 1) >>> 1,
              ct = k[it];
            if (0 < c(ct, P)) ((k[it] = P), (k[et] = ct), (et = it));
            else break t;
          }
        }
        function r(k) {
          return k.length === 0 ? null : k[0];
        }
        function o(k) {
          if (k.length === 0) return null;
          var P = k[0],
            et = k.pop();
          if (et !== P) {
            k[0] = et;
            t: for (var it = 0, ct = k.length, G = ct >>> 1; it < G; ) {
              var Z = 2 * (it + 1) - 1,
                at = k[Z],
                st = Z + 1,
                ht = k[st];
              if (0 > c(at, et))
                st < ct && 0 > c(ht, at)
                  ? ((k[it] = ht), (k[st] = et), (it = st))
                  : ((k[it] = at), (k[Z] = et), (it = Z));
              else if (st < ct && 0 > c(ht, et))
                ((k[it] = ht), (k[st] = et), (it = st));
              else break t;
            }
          }
          return P;
        }
        function c(k, P) {
          var et = k.sortIndex - P.sortIndex;
          return et !== 0 ? et : k.id - P.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var l = performance;
          a.unstable_now = function () {
            return l.now();
          };
        } else {
          var f = Date,
            m = f.now();
          a.unstable_now = function () {
            return f.now() - m;
          };
        }
        var p = [],
          v = [],
          g = 1,
          x = null,
          y = 3,
          d = !1,
          S = !1,
          b = !1,
          M = !1,
          C = typeof setTimeout == "function" ? setTimeout : null,
          O = typeof clearTimeout == "function" ? clearTimeout : null,
          N = typeof setImmediate < "u" ? setImmediate : null;
        function V(k) {
          for (var P = r(v); P !== null; ) {
            if (P.callback === null) o(v);
            else if (P.startTime <= k)
              (o(v), (P.sortIndex = P.expirationTime), i(p, P));
            else break;
            P = r(v);
          }
        }
        function E(k) {
          if (((b = !1), V(k), !S))
            if (r(p) !== null) ((S = !0), D || ((D = !0), H()));
            else {
              var P = r(v);
              P !== null && tt(E, P.startTime - k);
            }
        }
        var D = !1,
          R = -1,
          j = 5,
          B = -1;
        function z() {
          return M ? !0 : !(a.unstable_now() - B < j);
        }
        function U() {
          if (((M = !1), D)) {
            var k = a.unstable_now();
            B = k;
            var P = !0;
            try {
              t: {
                ((S = !1), b && ((b = !1), O(R), (R = -1)), (d = !0));
                var et = y;
                try {
                  e: {
                    for (
                      V(k), x = r(p);
                      x !== null && !(x.expirationTime > k && z());
                    ) {
                      var it = x.callback;
                      if (typeof it == "function") {
                        ((x.callback = null), (y = x.priorityLevel));
                        var ct = it(x.expirationTime <= k);
                        if (((k = a.unstable_now()), typeof ct == "function")) {
                          ((x.callback = ct), V(k), (P = !0));
                          break e;
                        }
                        (x === r(p) && o(p), V(k));
                      } else o(p);
                      x = r(p);
                    }
                    if (x !== null) P = !0;
                    else {
                      var G = r(v);
                      (G !== null && tt(E, G.startTime - k), (P = !1));
                    }
                  }
                  break t;
                } finally {
                  ((x = null), (y = et), (d = !1));
                }
                P = void 0;
              }
            } finally {
              P ? H() : (D = !1);
            }
          }
        }
        var H;
        if (typeof N == "function")
          H = function () {
            N(U);
          };
        else if (typeof MessageChannel < "u") {
          var q = new MessageChannel(),
            I = q.port2;
          ((q.port1.onmessage = U),
            (H = function () {
              I.postMessage(null);
            }));
        } else
          H = function () {
            C(U, 0);
          };
        function tt(k, P) {
          R = C(function () {
            k(a.unstable_now());
          }, P);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (a.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (j = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return y;
          }),
          (a.unstable_next = function (k) {
            switch (y) {
              case 1:
              case 2:
              case 3:
                var P = 3;
                break;
              default:
                P = y;
            }
            var et = y;
            y = P;
            try {
              return k();
            } finally {
              y = et;
            }
          }),
          (a.unstable_requestPaint = function () {
            M = !0;
          }),
          (a.unstable_runWithPriority = function (k, P) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var et = y;
            y = k;
            try {
              return P();
            } finally {
              y = et;
            }
          }),
          (a.unstable_scheduleCallback = function (k, P, et) {
            var it = a.unstable_now();
            switch (
              (typeof et == "object" && et !== null
                ? ((et = et.delay),
                  (et = typeof et == "number" && 0 < et ? it + et : it))
                : (et = it),
              k)
            ) {
              case 1:
                var ct = -1;
                break;
              case 2:
                ct = 250;
                break;
              case 5:
                ct = 1073741823;
                break;
              case 4:
                ct = 1e4;
                break;
              default:
                ct = 5e3;
            }
            return (
              (ct = et + ct),
              (k = {
                id: g++,
                callback: P,
                priorityLevel: k,
                startTime: et,
                expirationTime: ct,
                sortIndex: -1,
              }),
              et > it
                ? ((k.sortIndex = et),
                  i(v, k),
                  r(p) === null &&
                    k === r(v) &&
                    (b ? (O(R), (R = -1)) : (b = !0), tt(E, et - it)))
                : ((k.sortIndex = ct),
                  i(p, k),
                  S || d || ((S = !0), D || ((D = !0), H()))),
              k
            );
          }),
          (a.unstable_shouldYield = z),
          (a.unstable_wrapCallback = function (k) {
            var P = y;
            return function () {
              var et = y;
              y = P;
              try {
                return k.apply(this, arguments);
              } finally {
                y = et;
              }
            };
          }));
      })(ic)),
    ic
  );
}
var zp;
function N1() {
  return (zp || ((zp = 1), (ac.exports = D1())), ac.exports);
}
var sc = { exports: {} },
  fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bp;
function R1() {
  if (Bp) return fe;
  Bp = 1;
  var a = Ic();
  function i(p) {
    var v = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        v += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      v +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r() {}
  var o = {
      d: {
        f: r,
        r: function () {
          throw Error(i(522));
        },
        D: r,
        C: r,
        L: r,
        m: r,
        X: r,
        S: r,
        M: r,
      },
      p: 0,
      findDOMNode: null,
    },
    c = Symbol.for("react.portal");
  function l(p, v, g) {
    var x =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: x == null ? null : "" + x,
      children: p,
      containerInfo: v,
      implementation: g,
    };
  }
  var f = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(p, v) {
    if (p === "font") return "";
    if (typeof v == "string") return v === "use-credentials" ? v : "";
  }
  return (
    (fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (fe.createPortal = function (p, v) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11))
        throw Error(i(299));
      return l(p, v, null, g);
    }),
    (fe.flushSync = function (p) {
      var v = f.T,
        g = o.p;
      try {
        if (((f.T = null), (o.p = 2), p)) return p();
      } finally {
        ((f.T = v), (o.p = g), o.d.f());
      }
    }),
    (fe.preconnect = function (p, v) {
      typeof p == "string" &&
        (v
          ? ((v = v.crossOrigin),
            (v =
              typeof v == "string"
                ? v === "use-credentials"
                  ? v
                  : ""
                : void 0))
          : (v = null),
        o.d.C(p, v));
    }),
    (fe.prefetchDNS = function (p) {
      typeof p == "string" && o.d.D(p);
    }),
    (fe.preinit = function (p, v) {
      if (typeof p == "string" && v && typeof v.as == "string") {
        var g = v.as,
          x = m(g, v.crossOrigin),
          y = typeof v.integrity == "string" ? v.integrity : void 0,
          d = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
        g === "style"
          ? o.d.S(p, typeof v.precedence == "string" ? v.precedence : void 0, {
              crossOrigin: x,
              integrity: y,
              fetchPriority: d,
            })
          : g === "script" &&
            o.d.X(p, {
              crossOrigin: x,
              integrity: y,
              fetchPriority: d,
              nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            });
      }
    }),
    (fe.preinitModule = function (p, v) {
      if (typeof p == "string")
        if (typeof v == "object" && v !== null) {
          if (v.as == null || v.as === "script") {
            var g = m(v.as, v.crossOrigin);
            o.d.M(p, {
              crossOrigin: g,
              integrity: typeof v.integrity == "string" ? v.integrity : void 0,
              nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            });
          }
        } else v == null && o.d.M(p);
    }),
    (fe.preload = function (p, v) {
      if (
        typeof p == "string" &&
        typeof v == "object" &&
        v !== null &&
        typeof v.as == "string"
      ) {
        var g = v.as,
          x = m(g, v.crossOrigin);
        o.d.L(p, g, {
          crossOrigin: x,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          type: typeof v.type == "string" ? v.type : void 0,
          fetchPriority:
            typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
          referrerPolicy:
            typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
          imageSrcSet:
            typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
          media: typeof v.media == "string" ? v.media : void 0,
        });
      }
    }),
    (fe.preloadModule = function (p, v) {
      if (typeof p == "string")
        if (v) {
          var g = m(v.as, v.crossOrigin);
          o.d.m(p, {
            as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
            crossOrigin: g,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          });
        } else o.d.m(p);
    }),
    (fe.requestFormReset = function (p) {
      o.d.r(p);
    }),
    (fe.unstable_batchedUpdates = function (p, v) {
      return p(v);
    }),
    (fe.useFormState = function (p, v, g) {
      return f.H.useFormState(p, v, g);
    }),
    (fe.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (fe.version = "19.2.4"),
    fe
  );
}
var Vp;
function hg() {
  if (Vp) return sc.exports;
  Vp = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (sc.exports = R1()), sc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lp;
function O1() {
  if (Lp) return ws;
  Lp = 1;
  var a = N1(),
    i = Ic(),
    r = hg();
  function o(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function l(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function f(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (l(t) !== t) throw Error(o(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = l(t)), e === null)) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, s = e; ; ) {
      var u = n.return;
      if (u === null) break;
      var h = u.alternate;
      if (h === null) {
        if (((s = u.return), s !== null)) {
          n = s;
          continue;
        }
        break;
      }
      if (u.child === h.child) {
        for (h = u.child; h; ) {
          if (h === n) return (p(u), t);
          if (h === s) return (p(u), e);
          h = h.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== s.return) ((n = u), (s = h));
      else {
        for (var T = !1, w = u.child; w; ) {
          if (w === n) {
            ((T = !0), (n = u), (s = h));
            break;
          }
          if (w === s) {
            ((T = !0), (s = u), (n = h));
            break;
          }
          w = w.sibling;
        }
        if (!T) {
          for (w = h.child; w; ) {
            if (w === n) {
              ((T = !0), (n = h), (s = u));
              break;
            }
            if (w === s) {
              ((T = !0), (s = h), (n = u));
              break;
            }
            w = w.sibling;
          }
          if (!T) throw Error(o(189));
        }
      }
      if (n.alternate !== s) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function g(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = g(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var x = Object.assign,
    y = Symbol.for("react.element"),
    d = Symbol.for("react.transitional.element"),
    S = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    M = Symbol.for("react.strict_mode"),
    C = Symbol.for("react.profiler"),
    O = Symbol.for("react.consumer"),
    N = Symbol.for("react.context"),
    V = Symbol.for("react.forward_ref"),
    E = Symbol.for("react.suspense"),
    D = Symbol.for("react.suspense_list"),
    R = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    B = Symbol.for("react.activity"),
    z = Symbol.for("react.memo_cache_sentinel"),
    U = Symbol.iterator;
  function H(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (U && t[U]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var q = Symbol.for("react.client.reference");
  function I(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === q ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case b:
        return "Fragment";
      case C:
        return "Profiler";
      case M:
        return "StrictMode";
      case E:
        return "Suspense";
      case D:
        return "SuspenseList";
      case B:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case S:
          return "Portal";
        case N:
          return t.displayName || "Context";
        case O:
          return (t._context.displayName || "Context") + ".Consumer";
        case V:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case R:
          return (
            (e = t.displayName || null),
            e !== null ? e : I(t.type) || "Memo"
          );
        case j:
          ((e = t._payload), (t = t._init));
          try {
            return I(t(e));
          } catch {}
      }
    return null;
  }
  var tt = Array.isArray,
    k = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    et = { pending: !1, data: null, method: null, action: null },
    it = [],
    ct = -1;
  function G(t) {
    return { current: t };
  }
  function Z(t) {
    0 > ct || ((t.current = it[ct]), (it[ct] = null), ct--);
  }
  function at(t, e) {
    (ct++, (it[ct] = t.current), (t.current = e));
  }
  var st = G(null),
    ht = G(null),
    lt = G(null),
    pt = G(null);
  function Mt(t, e) {
    switch ((at(lt, e), at(ht, t), at(st, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Jm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Jm(e)), (t = Wm(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (Z(st), at(st, t));
  }
  function Bt() {
    (Z(st), Z(ht), Z(lt));
  }
  function ue(t) {
    t.memoizedState !== null && at(pt, t);
    var e = st.current,
      n = Wm(e, t.type);
    e !== n && (at(ht, t), at(st, n));
  }
  function de(t) {
    (ht.current === t && (Z(st), Z(ht)),
      pt.current === t && (Z(pt), (Ts._currentValue = et)));
  }
  var te, Ps;
  function un(t) {
    if (te === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((te = (e && e[1]) || ""),
          (Ps =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      te +
      t +
      Ps
    );
  }
  var zi = !1;
  function Ra(t, e) {
    if (!t || zi) return "";
    zi = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var $ = function () {
                throw Error();
              };
              if (
                (Object.defineProperty($.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct($, []);
                } catch (Q) {
                  var K = Q;
                }
                Reflect.construct(t, [], $);
              } else {
                try {
                  $.call();
                } catch (Q) {
                  K = Q;
                }
                t.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                K = Q;
              }
              ($ = t()) &&
                typeof $.catch == "function" &&
                $.catch(function () {});
            }
          } catch (Q) {
            if (Q && K && typeof Q.stack == "string") return [Q.stack, K.stack];
          }
          return [null, null];
        },
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var h = s.DetermineComponentFrameRoot(),
        T = h[0],
        w = h[1];
      if (T && w) {
        var L = T.split(`
`),
          F = w.split(`
`);
        for (
          u = s = 0;
          s < L.length && !L[s].includes("DetermineComponentFrameRoot");
        )
          s++;
        for (; u < F.length && !F[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (s === L.length || u === F.length)
          for (
            s = L.length - 1, u = F.length - 1;
            1 <= s && 0 <= u && L[s] !== F[u];
          )
            u--;
        for (; 1 <= s && 0 <= u; s--, u--)
          if (L[s] !== F[u]) {
            if (s !== 1 || u !== 1)
              do
                if ((s--, u--, 0 > u || L[s] !== F[u])) {
                  var J =
                    `
` + L[s].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      J.includes("<anonymous>") &&
                      (J = J.replace("<anonymous>", t.displayName)),
                    J
                  );
                }
              while (1 <= s && 0 <= u);
            break;
          }
      }
    } finally {
      ((zi = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? un(n) : "";
  }
  function _s(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return un(t.type);
      case 16:
        return un("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? un("Suspense Fallback")
          : un("Suspense");
      case 19:
        return un("SuspenseList");
      case 0:
      case 15:
        return Ra(t.type, !1);
      case 11:
        return Ra(t.type.render, !1);
      case 1:
        return Ra(t.type, !0);
      case 31:
        return un("Activity");
      default:
        return "";
    }
  }
  function Oa(t) {
    try {
      var e = "",
        n = null;
      do ((e += _s(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (s) {
      return (
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
      );
    }
  }
  var Ee = Object.prototype.hasOwnProperty,
    za = a.unstable_scheduleCallback,
    sa = a.unstable_cancelCallback,
    Fs = a.unstable_shouldYield,
    Ks = a.unstable_requestPaint,
    ce = a.unstable_now,
    Qs = a.unstable_getCurrentPriorityLevel,
    la = a.unstable_ImmediatePriority,
    Zs = a.unstable_UserBlockingPriority,
    Ba = a.unstable_NormalPriority,
    Va = a.unstable_LowPriority,
    ra = a.unstable_IdlePriority,
    ry = a.log,
    oy = a.unstable_setDisableYieldValue,
    Bi = null,
    Ce = null;
  function Dn(t) {
    if (
      (typeof ry == "function" && oy(t),
      Ce && typeof Ce.setStrictMode == "function")
    )
      try {
        Ce.setStrictMode(Bi, t);
      } catch {}
  }
  var we = Math.clz32 ? Math.clz32 : fy,
    uy = Math.log,
    cy = Math.LN2;
  function fy(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((uy(t) / cy) | 0)) | 0);
  }
  var Js = 256,
    Ws = 262144,
    Is = 4194304;
  function oa(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function $s(t, e, n) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var u = 0,
      h = t.suspendedLanes,
      T = t.pingedLanes;
    t = t.warmLanes;
    var w = s & 134217727;
    return (
      w !== 0
        ? ((s = w & ~h),
          s !== 0
            ? (u = oa(s))
            : ((T &= w),
              T !== 0
                ? (u = oa(T))
                : n || ((n = w & ~t), n !== 0 && (u = oa(n)))))
        : ((w = s & ~h),
          w !== 0
            ? (u = oa(w))
            : T !== 0
              ? (u = oa(T))
              : n || ((n = s & ~t), n !== 0 && (u = oa(n)))),
      u === 0
        ? 0
        : e !== 0 &&
            e !== u &&
            (e & h) === 0 &&
            ((h = u & -u),
            (n = e & -e),
            h >= n || (h === 32 && (n & 4194048) !== 0))
          ? e
          : u
    );
  }
  function Vi(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function hy(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Rf() {
    var t = Is;
    return ((Is <<= 1), (Is & 62914560) === 0 && (Is = 4194304), t);
  }
  function kr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Li(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function dy(t, e, n, s, u, h) {
    var T = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var w = t.entanglements,
      L = t.expirationTimes,
      F = t.hiddenUpdates;
    for (n = T & ~n; 0 < n; ) {
      var J = 31 - we(n),
        $ = 1 << J;
      ((w[J] = 0), (L[J] = -1));
      var K = F[J];
      if (K !== null)
        for (F[J] = null, J = 0; J < K.length; J++) {
          var Q = K[J];
          Q !== null && (Q.lane &= -536870913);
        }
      n &= ~$;
    }
    (s !== 0 && Of(t, s, 0),
      h !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= h & ~(T & ~e)));
  }
  function Of(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var s = 31 - we(e);
    ((t.entangledLanes |= e),
      (t.entanglements[s] = t.entanglements[s] | 1073741824 | (n & 261930)));
  }
  function zf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var s = 31 - we(n),
        u = 1 << s;
      ((u & e) | (t[s] & e) && (t[s] |= e), (n &= ~u));
    }
  }
  function Bf(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : Xr(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function Xr(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function qr(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Vf() {
    var t = P.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Sp(t.type));
  }
  function Lf(t, e) {
    var n = P.p;
    try {
      return ((P.p = t), e());
    } finally {
      P.p = n;
    }
  }
  var Nn = Math.random().toString(36).slice(2),
    ie = "__reactFiber$" + Nn,
    ve = "__reactProps$" + Nn,
    La = "__reactContainer$" + Nn,
    Pr = "__reactEvents$" + Nn,
    my = "__reactListeners$" + Nn,
    py = "__reactHandles$" + Nn,
    Uf = "__reactResources$" + Nn,
    Ui = "__reactMarker$" + Nn;
  function _r(t) {
    (delete t[ie], delete t[ve], delete t[Pr], delete t[my], delete t[py]);
  }
  function Ua(t) {
    var e = t[ie];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[La] || n[ie])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = ip(t); t !== null; ) {
            if ((n = t[ie])) return n;
            t = ip(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Ha(t) {
    if ((t = t[ie] || t[La])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Hi(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Ga(t) {
    var e = t[Uf];
    return (
      e ||
        (e = t[Uf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function ee(t) {
    t[Ui] = !0;
  }
  var Hf = new Set(),
    Gf = {};
  function ua(t, e) {
    (Ya(t, e), Ya(t + "Capture", e));
  }
  function Ya(t, e) {
    for (Gf[t] = e, t = 0; t < e.length; t++) Hf.add(e[t]);
  }
  var gy = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Yf = {},
    kf = {};
  function vy(t) {
    return Ee.call(kf, t)
      ? !0
      : Ee.call(Yf, t)
        ? !1
        : gy.test(t)
          ? (kf[t] = !0)
          : ((Yf[t] = !0), !1);
  }
  function tl(t, e, n) {
    if (vy(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var s = e.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function el(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function cn(t, e, n, s) {
    if (s === null) t.removeAttribute(n);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + s);
    }
  }
  function Ve(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Xf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function yy(t, e, n) {
    var s = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var u = s.get,
        h = s.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (T) {
            ((n = "" + T), h.call(this, T));
          },
        }),
        Object.defineProperty(t, e, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (T) {
            n = "" + T;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Fr(t) {
    if (!t._valueTracker) {
      var e = Xf(t) ? "checked" : "value";
      t._valueTracker = yy(t, e, "" + t[e]);
    }
  }
  function qf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      s = "";
    return (
      t && (s = Xf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = s),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function nl(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var xy = /[\n"\\]/g;
  function Le(t) {
    return t.replace(xy, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Kr(t, e, n, s, u, h, T, w) {
    ((t.name = ""),
      T != null &&
      typeof T != "function" &&
      typeof T != "symbol" &&
      typeof T != "boolean"
        ? (t.type = T)
        : t.removeAttribute("type"),
      e != null
        ? T === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Ve(e))
          : t.value !== "" + Ve(e) && (t.value = "" + Ve(e))
        : (T !== "submit" && T !== "reset") || t.removeAttribute("value"),
      e != null
        ? Qr(t, T, Ve(e))
        : n != null
          ? Qr(t, T, Ve(n))
          : s != null && t.removeAttribute("value"),
      u == null && h != null && (t.defaultChecked = !!h),
      u != null &&
        (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      w != null &&
      typeof w != "function" &&
      typeof w != "symbol" &&
      typeof w != "boolean"
        ? (t.name = "" + Ve(w))
        : t.removeAttribute("name"));
  }
  function Pf(t, e, n, s, u, h, T, w) {
    if (
      (h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (t.type = h),
      e != null || n != null)
    ) {
      if (!((h !== "submit" && h !== "reset") || e != null)) {
        Fr(t);
        return;
      }
      ((n = n != null ? "" + Ve(n) : ""),
        (e = e != null ? "" + Ve(e) : n),
        w || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((s = s ?? u),
      (s = typeof s != "function" && typeof s != "symbol" && !!s),
      (t.checked = w ? t.checked : !!s),
      (t.defaultChecked = !!s),
      T != null &&
        typeof T != "function" &&
        typeof T != "symbol" &&
        typeof T != "boolean" &&
        (t.name = T),
      Fr(t));
  }
  function Qr(t, e, n) {
    (e === "number" && nl(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function ka(t, e, n, s) {
    if (((t = t.options), e)) {
      e = {};
      for (var u = 0; u < n.length; u++) e["$" + n[u]] = !0;
      for (n = 0; n < t.length; n++)
        ((u = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== u && (t[n].selected = u),
          u && s && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + Ve(n), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === n) {
          ((t[u].selected = !0), s && (t[u].defaultSelected = !0));
          return;
        }
        e !== null || t[u].disabled || (e = t[u]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function _f(t, e, n) {
    if (
      e != null &&
      ((e = "" + Ve(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Ve(n) : "";
  }
  function Ff(t, e, n, s) {
    if (e == null) {
      if (s != null) {
        if (n != null) throw Error(o(92));
        if (tt(s)) {
          if (1 < s.length) throw Error(o(93));
          s = s[0];
        }
        n = s;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = Ve(e)),
      (t.defaultValue = n),
      (s = t.textContent),
      s === n && s !== "" && s !== null && (t.value = s),
      Fr(t));
  }
  function Xa(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Sy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Kf(t, e, n) {
    var s = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? s
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : s
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || Sy.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Qf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(o(62));
    if (((t = t.style), n != null)) {
      for (var s in n)
        !n.hasOwnProperty(s) ||
          (e != null && e.hasOwnProperty(s)) ||
          (s.indexOf("--") === 0
            ? t.setProperty(s, "")
            : s === "float"
              ? (t.cssFloat = "")
              : (t[s] = ""));
      for (var u in e)
        ((s = e[u]), e.hasOwnProperty(u) && n[u] !== s && Kf(t, u, s));
    } else for (var h in e) e.hasOwnProperty(h) && Kf(t, h, e[h]);
  }
  function Zr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var by = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Ty =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function al(t) {
    return Ty.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function fn() {}
  var Jr = null;
  function Wr(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var qa = null,
    Pa = null;
  function Zf(t) {
    var e = Ha(t);
    if (e && (t = e.stateNode)) {
      var n = t[ve] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Kr(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Le("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var s = n[e];
              if (s !== t && s.form === t.form) {
                var u = s[ve] || null;
                if (!u) throw Error(o(90));
                Kr(
                  s,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((s = n[e]), s.form === t.form && qf(s));
          }
          break t;
        case "textarea":
          _f(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && ka(t, !!n.multiple, e, !1));
      }
    }
  }
  var Ir = !1;
  function Jf(t, e, n) {
    if (Ir) return t(e, n);
    Ir = !0;
    try {
      var s = t(e);
      return s;
    } finally {
      if (
        ((Ir = !1),
        (qa !== null || Pa !== null) &&
          (Pl(), qa && ((e = qa), (t = Pa), (Pa = qa = null), Zf(e), t)))
      )
        for (e = 0; e < t.length; e++) Zf(t[e]);
    }
  }
  function Gi(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var s = n[ve] || null;
    if (s === null) return null;
    n = s[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((s = !s.disabled) ||
          ((t = t.type),
          (s = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !s));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(o(231, e, typeof n));
    return n;
  }
  var hn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    $r = !1;
  if (hn)
    try {
      var Yi = {};
      (Object.defineProperty(Yi, "passive", {
        get: function () {
          $r = !0;
        },
      }),
        window.addEventListener("test", Yi, Yi),
        window.removeEventListener("test", Yi, Yi));
    } catch {
      $r = !1;
    }
  var Rn = null,
    to = null,
    il = null;
  function Wf() {
    if (il) return il;
    var t,
      e = to,
      n = e.length,
      s,
      u = "value" in Rn ? Rn.value : Rn.textContent,
      h = u.length;
    for (t = 0; t < n && e[t] === u[t]; t++);
    var T = n - t;
    for (s = 1; s <= T && e[n - s] === u[h - s]; s++);
    return (il = u.slice(t, 1 < s ? 1 - s : void 0));
  }
  function sl(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function ll() {
    return !0;
  }
  function If() {
    return !1;
  }
  function ye(t) {
    function e(n, s, u, h, T) {
      ((this._reactName = n),
        (this._targetInst = u),
        (this.type = s),
        (this.nativeEvent = h),
        (this.target = T),
        (this.currentTarget = null));
      for (var w in t)
        t.hasOwnProperty(w) && ((n = t[w]), (this[w] = n ? n(h) : h[w]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? ll
          : If),
        (this.isPropagationStopped = If),
        this
      );
    }
    return (
      x(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = ll));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ll));
        },
        persist: function () {},
        isPersistent: ll,
      }),
      e
    );
  }
  var ca = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    rl = ye(ca),
    ki = x({}, ca, { view: 0, detail: 0 }),
    Ay = ye(ki),
    eo,
    no,
    Xi,
    ol = x({}, ki, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: io,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Xi &&
              (Xi && t.type === "mousemove"
                ? ((eo = t.screenX - Xi.screenX), (no = t.screenY - Xi.screenY))
                : (no = eo = 0),
              (Xi = t)),
            eo);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : no;
      },
    }),
    $f = ye(ol),
    My = x({}, ol, { dataTransfer: 0 }),
    Ey = ye(My),
    Cy = x({}, ki, { relatedTarget: 0 }),
    ao = ye(Cy),
    wy = x({}, ca, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jy = ye(wy),
    Dy = x({}, ca, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Ny = ye(Dy),
    Ry = x({}, ca, { data: 0 }),
    th = ye(Ry),
    Oy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    zy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    By = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Vy(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = By[t])
        ? !!e[t]
        : !1;
  }
  function io() {
    return Vy;
  }
  var Ly = x({}, ki, {
      key: function (t) {
        if (t.key) {
          var e = Oy[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = sl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? zy[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: io,
      charCode: function (t) {
        return t.type === "keypress" ? sl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? sl(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    Uy = ye(Ly),
    Hy = x({}, ol, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    eh = ye(Hy),
    Gy = x({}, ki, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: io,
    }),
    Yy = ye(Gy),
    ky = x({}, ca, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xy = ye(ky),
    qy = x({}, ol, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Py = ye(qy),
    _y = x({}, ca, { newState: 0, oldState: 0 }),
    Fy = ye(_y),
    Ky = [9, 13, 27, 32],
    so = hn && "CompositionEvent" in window,
    qi = null;
  hn && "documentMode" in document && (qi = document.documentMode);
  var Qy = hn && "TextEvent" in window && !qi,
    nh = hn && (!so || (qi && 8 < qi && 11 >= qi)),
    ah = " ",
    ih = !1;
  function sh(t, e) {
    switch (t) {
      case "keyup":
        return Ky.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function lh(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var _a = !1;
  function Zy(t, e) {
    switch (t) {
      case "compositionend":
        return lh(e);
      case "keypress":
        return e.which !== 32 ? null : ((ih = !0), ah);
      case "textInput":
        return ((t = e.data), t === ah && ih ? null : t);
      default:
        return null;
    }
  }
  function Jy(t, e) {
    if (_a)
      return t === "compositionend" || (!so && sh(t, e))
        ? ((t = Wf()), (il = to = Rn = null), (_a = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return nh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Wy = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function rh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Wy[t.type] : e === "textarea";
  }
  function oh(t, e, n, s) {
    (qa ? (Pa ? Pa.push(s) : (Pa = [s])) : (qa = s),
      (e = Wl(e, "onChange")),
      0 < e.length &&
        ((n = new rl("onChange", "change", null, n, s)),
        t.push({ event: n, listeners: e })));
  }
  var Pi = null,
    _i = null;
  function Iy(t) {
    Pm(t, 0);
  }
  function ul(t) {
    var e = Hi(t);
    if (qf(e)) return t;
  }
  function uh(t, e) {
    if (t === "change") return e;
  }
  var ch = !1;
  if (hn) {
    var lo;
    if (hn) {
      var ro = "oninput" in document;
      if (!ro) {
        var fh = document.createElement("div");
        (fh.setAttribute("oninput", "return;"),
          (ro = typeof fh.oninput == "function"));
      }
      lo = ro;
    } else lo = !1;
    ch = lo && (!document.documentMode || 9 < document.documentMode);
  }
  function hh() {
    Pi && (Pi.detachEvent("onpropertychange", dh), (_i = Pi = null));
  }
  function dh(t) {
    if (t.propertyName === "value" && ul(_i)) {
      var e = [];
      (oh(e, _i, t, Wr(t)), Jf(Iy, e));
    }
  }
  function $y(t, e, n) {
    t === "focusin"
      ? (hh(), (Pi = e), (_i = n), Pi.attachEvent("onpropertychange", dh))
      : t === "focusout" && hh();
  }
  function tx(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return ul(_i);
  }
  function ex(t, e) {
    if (t === "click") return ul(e);
  }
  function nx(t, e) {
    if (t === "input" || t === "change") return ul(e);
  }
  function ax(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var je = typeof Object.is == "function" ? Object.is : ax;
  function Fi(t, e) {
    if (je(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      s = Object.keys(e);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var u = n[s];
      if (!Ee.call(e, u) || !je(t[u], e[u])) return !1;
    }
    return !0;
  }
  function mh(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function ph(t, e) {
    var n = mh(t);
    t = 0;
    for (var s; n; ) {
      if (n.nodeType === 3) {
        if (((s = t + n.textContent.length), t <= e && s >= e))
          return { node: n, offset: e - t };
        t = s;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = mh(n);
    }
  }
  function gh(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? gh(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function vh(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = nl(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = nl(t.document);
    }
    return e;
  }
  function oo(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var ix = hn && "documentMode" in document && 11 >= document.documentMode,
    Fa = null,
    uo = null,
    Ki = null,
    co = !1;
  function yh(t, e, n) {
    var s =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    co ||
      Fa == null ||
      Fa !== nl(s) ||
      ((s = Fa),
      "selectionStart" in s && oo(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (Ki && Fi(Ki, s)) ||
        ((Ki = s),
        (s = Wl(uo, "onSelect")),
        0 < s.length &&
          ((e = new rl("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: s }),
          (e.target = Fa))));
  }
  function fa(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ka = {
      animationend: fa("Animation", "AnimationEnd"),
      animationiteration: fa("Animation", "AnimationIteration"),
      animationstart: fa("Animation", "AnimationStart"),
      transitionrun: fa("Transition", "TransitionRun"),
      transitionstart: fa("Transition", "TransitionStart"),
      transitioncancel: fa("Transition", "TransitionCancel"),
      transitionend: fa("Transition", "TransitionEnd"),
    },
    fo = {},
    xh = {};
  hn &&
    ((xh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ka.animationend.animation,
      delete Ka.animationiteration.animation,
      delete Ka.animationstart.animation),
    "TransitionEvent" in window || delete Ka.transitionend.transition);
  function ha(t) {
    if (fo[t]) return fo[t];
    if (!Ka[t]) return t;
    var e = Ka[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in xh) return (fo[t] = e[n]);
    return t;
  }
  var Sh = ha("animationend"),
    bh = ha("animationiteration"),
    Th = ha("animationstart"),
    sx = ha("transitionrun"),
    lx = ha("transitionstart"),
    rx = ha("transitioncancel"),
    Ah = ha("transitionend"),
    Mh = new Map(),
    ho =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  ho.push("scrollEnd");
  function Ke(t, e) {
    (Mh.set(t, e), ua(e, [t]));
  }
  var cl =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Ue = [],
    Qa = 0,
    mo = 0;
  function fl() {
    for (var t = Qa, e = (mo = Qa = 0); e < t; ) {
      var n = Ue[e];
      Ue[e++] = null;
      var s = Ue[e];
      Ue[e++] = null;
      var u = Ue[e];
      Ue[e++] = null;
      var h = Ue[e];
      if (((Ue[e++] = null), s !== null && u !== null)) {
        var T = s.pending;
        (T === null ? (u.next = u) : ((u.next = T.next), (T.next = u)),
          (s.pending = u));
      }
      h !== 0 && Eh(n, u, h);
    }
  }
  function hl(t, e, n, s) {
    ((Ue[Qa++] = t),
      (Ue[Qa++] = e),
      (Ue[Qa++] = n),
      (Ue[Qa++] = s),
      (mo |= s),
      (t.lanes |= s),
      (t = t.alternate),
      t !== null && (t.lanes |= s));
  }
  function po(t, e, n, s) {
    return (hl(t, e, n, s), dl(t));
  }
  function da(t, e) {
    return (hl(t, null, null, e), dl(t));
  }
  function Eh(t, e, n) {
    t.lanes |= n;
    var s = t.alternate;
    s !== null && (s.lanes |= n);
    for (var u = !1, h = t.return; h !== null; )
      ((h.childLanes |= n),
        (s = h.alternate),
        s !== null && (s.childLanes |= n),
        h.tag === 22 &&
          ((t = h.stateNode), t === null || t._visibility & 1 || (u = !0)),
        (t = h),
        (h = h.return));
    return t.tag === 3
      ? ((h = t.stateNode),
        u &&
          e !== null &&
          ((u = 31 - we(n)),
          (t = h.hiddenUpdates),
          (s = t[u]),
          s === null ? (t[u] = [e]) : s.push(e),
          (e.lane = n | 536870912)),
        h)
      : null;
  }
  function dl(t) {
    if (50 < ps) throw ((ps = 0), (Mu = null), Error(o(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Za = {};
  function ox(t, e, n, s) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function De(t, e, n, s) {
    return new ox(t, e, n, s);
  }
  function go(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function dn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = De(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Ch(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function ml(t, e, n, s, u, h) {
    var T = 0;
    if (((s = t), typeof t == "function")) go(t) && (T = 1);
    else if (typeof t == "string")
      T = d1(t, n, st.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case B:
          return ((t = De(31, n, e, u)), (t.elementType = B), (t.lanes = h), t);
        case b:
          return ma(n.children, u, h, e);
        case M:
          ((T = 8), (u |= 24));
          break;
        case C:
          return (
            (t = De(12, n, e, u | 2)),
            (t.elementType = C),
            (t.lanes = h),
            t
          );
        case E:
          return ((t = De(13, n, e, u)), (t.elementType = E), (t.lanes = h), t);
        case D:
          return ((t = De(19, n, e, u)), (t.elementType = D), (t.lanes = h), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case N:
                T = 10;
                break t;
              case O:
                T = 9;
                break t;
              case V:
                T = 11;
                break t;
              case R:
                T = 14;
                break t;
              case j:
                ((T = 16), (s = null));
                break t;
            }
          ((T = 29),
            (n = Error(o(130, t === null ? "null" : typeof t, ""))),
            (s = null));
      }
    return (
      (e = De(T, n, e, u)),
      (e.elementType = t),
      (e.type = s),
      (e.lanes = h),
      e
    );
  }
  function ma(t, e, n, s) {
    return ((t = De(7, t, s, e)), (t.lanes = n), t);
  }
  function vo(t, e, n) {
    return ((t = De(6, t, null, e)), (t.lanes = n), t);
  }
  function wh(t) {
    var e = De(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function yo(t, e, n) {
    return (
      (e = De(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var jh = new WeakMap();
  function He(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = jh.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Oa(e) }), jh.set(t, e), e);
    }
    return { value: t, source: e, stack: Oa(e) };
  }
  var Ja = [],
    Wa = 0,
    pl = null,
    Qi = 0,
    Ge = [],
    Ye = 0,
    On = null,
    nn = 1,
    an = "";
  function mn(t, e) {
    ((Ja[Wa++] = Qi), (Ja[Wa++] = pl), (pl = t), (Qi = e));
  }
  function Dh(t, e, n) {
    ((Ge[Ye++] = nn), (Ge[Ye++] = an), (Ge[Ye++] = On), (On = t));
    var s = nn;
    t = an;
    var u = 32 - we(s) - 1;
    ((s &= ~(1 << u)), (n += 1));
    var h = 32 - we(e) + u;
    if (30 < h) {
      var T = u - (u % 5);
      ((h = (s & ((1 << T) - 1)).toString(32)),
        (s >>= T),
        (u -= T),
        (nn = (1 << (32 - we(e) + u)) | (n << u) | s),
        (an = h + t));
    } else ((nn = (1 << h) | (n << u) | s), (an = t));
  }
  function xo(t) {
    t.return !== null && (mn(t, 1), Dh(t, 1, 0));
  }
  function So(t) {
    for (; t === pl; )
      ((pl = Ja[--Wa]), (Ja[Wa] = null), (Qi = Ja[--Wa]), (Ja[Wa] = null));
    for (; t === On; )
      ((On = Ge[--Ye]),
        (Ge[Ye] = null),
        (an = Ge[--Ye]),
        (Ge[Ye] = null),
        (nn = Ge[--Ye]),
        (Ge[Ye] = null));
  }
  function Nh(t, e) {
    ((Ge[Ye++] = nn),
      (Ge[Ye++] = an),
      (Ge[Ye++] = On),
      (nn = e.id),
      (an = e.overflow),
      (On = t));
  }
  var se = null,
    Lt = null,
    At = !1,
    zn = null,
    ke = !1,
    bo = Error(o(519));
  function Bn(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Zi(He(e, t)), bo);
  }
  function Rh(t) {
    var e = t.stateNode,
      n = t.type,
      s = t.memoizedProps;
    switch (((e[ie] = t), (e[ve] = s), n)) {
      case "dialog":
        (xt("cancel", e), xt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        xt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < vs.length; n++) xt(vs[n], e);
        break;
      case "source":
        xt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (xt("error", e), xt("load", e));
        break;
      case "details":
        xt("toggle", e);
        break;
      case "input":
        (xt("invalid", e),
          Pf(
            e,
            s.value,
            s.defaultValue,
            s.checked,
            s.defaultChecked,
            s.type,
            s.name,
            !0,
          ));
        break;
      case "select":
        xt("invalid", e);
        break;
      case "textarea":
        (xt("invalid", e), Ff(e, s.value, s.defaultValue, s.children));
    }
    ((n = s.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      s.suppressHydrationWarning === !0 ||
      Qm(e.textContent, n)
        ? (s.popover != null && (xt("beforetoggle", e), xt("toggle", e)),
          s.onScroll != null && xt("scroll", e),
          s.onScrollEnd != null && xt("scrollend", e),
          s.onClick != null && (e.onclick = fn),
          (e = !0))
        : (e = !1),
      e || Bn(t, !0));
  }
  function Oh(t) {
    for (se = t.return; se; )
      switch (se.tag) {
        case 5:
        case 31:
        case 13:
          ke = !1;
          return;
        case 27:
        case 3:
          ke = !0;
          return;
        default:
          se = se.return;
      }
  }
  function Ia(t) {
    if (t !== se) return !1;
    if (!At) return (Oh(t), (At = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Gu(t.type, t.memoizedProps))),
        (n = !n)),
      n && Lt && Bn(t),
      Oh(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Lt = ap(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(o(317));
      Lt = ap(t);
    } else
      e === 27
        ? ((e = Lt), Qn(t.type) ? ((t = Pu), (Pu = null), (Lt = t)) : (Lt = e))
        : (Lt = se ? qe(t.stateNode.nextSibling) : null);
    return !0;
  }
  function pa() {
    ((Lt = se = null), (At = !1));
  }
  function To() {
    var t = zn;
    return (
      t !== null &&
        (Te === null ? (Te = t) : Te.push.apply(Te, t), (zn = null)),
      t
    );
  }
  function Zi(t) {
    zn === null ? (zn = [t]) : zn.push(t);
  }
  var Ao = G(null),
    ga = null,
    pn = null;
  function Vn(t, e, n) {
    (at(Ao, e._currentValue), (e._currentValue = n));
  }
  function gn(t) {
    ((t._currentValue = Ao.current), Z(Ao));
  }
  function Mo(t, e, n) {
    for (; t !== null; ) {
      var s = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), s !== null && (s.childLanes |= e))
          : s !== null && (s.childLanes & e) !== e && (s.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Eo(t, e, n, s) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null; ) {
      var h = u.dependencies;
      if (h !== null) {
        var T = u.child;
        h = h.firstContext;
        t: for (; h !== null; ) {
          var w = h;
          h = u;
          for (var L = 0; L < e.length; L++)
            if (w.context === e[L]) {
              ((h.lanes |= n),
                (w = h.alternate),
                w !== null && (w.lanes |= n),
                Mo(h.return, n, t),
                s || (T = null));
              break t;
            }
          h = w.next;
        }
      } else if (u.tag === 18) {
        if (((T = u.return), T === null)) throw Error(o(341));
        ((T.lanes |= n),
          (h = T.alternate),
          h !== null && (h.lanes |= n),
          Mo(T, n, t),
          (T = null));
      } else T = u.child;
      if (T !== null) T.return = u;
      else
        for (T = u; T !== null; ) {
          if (T === t) {
            T = null;
            break;
          }
          if (((u = T.sibling), u !== null)) {
            ((u.return = T.return), (T = u));
            break;
          }
          T = T.return;
        }
      u = T;
    }
  }
  function $a(t, e, n, s) {
    t = null;
    for (var u = e, h = !1; u !== null; ) {
      if (!h) {
        if ((u.flags & 524288) !== 0) h = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var T = u.alternate;
        if (T === null) throw Error(o(387));
        if (((T = T.memoizedProps), T !== null)) {
          var w = u.type;
          je(u.pendingProps.value, T.value) ||
            (t !== null ? t.push(w) : (t = [w]));
        }
      } else if (u === pt.current) {
        if (((T = u.alternate), T === null)) throw Error(o(387));
        T.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (t !== null ? t.push(Ts) : (t = [Ts]));
      }
      u = u.return;
    }
    (t !== null && Eo(e, t, n, s), (e.flags |= 262144));
  }
  function gl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!je(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function va(t) {
    ((ga = t),
      (pn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function le(t) {
    return zh(ga, t);
  }
  function vl(t, e) {
    return (ga === null && va(t), zh(t, e));
  }
  function zh(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), pn === null)) {
      if (t === null) throw Error(o(308));
      ((pn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else pn = pn.next = e;
    return n;
  }
  var ux =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, s) {
                  t.push(s);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    cx = a.unstable_scheduleCallback,
    fx = a.unstable_NormalPriority,
    Kt = {
      $$typeof: N,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Co() {
    return { controller: new ux(), data: new Map(), refCount: 0 };
  }
  function Ji(t) {
    (t.refCount--,
      t.refCount === 0 &&
        cx(fx, function () {
          t.controller.abort();
        }));
  }
  var Wi = null,
    wo = 0,
    ti = 0,
    ei = null;
  function hx(t, e) {
    if (Wi === null) {
      var n = (Wi = []);
      ((wo = 0),
        (ti = Nu()),
        (ei = {
          status: "pending",
          value: void 0,
          then: function (s) {
            n.push(s);
          },
        }));
    }
    return (wo++, e.then(Bh, Bh), e);
  }
  function Bh() {
    if (--wo === 0 && Wi !== null) {
      ei !== null && (ei.status = "fulfilled");
      var t = Wi;
      ((Wi = null), (ti = 0), (ei = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function dx(t, e) {
    var n = [],
      s = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          n.push(u);
        },
      };
    return (
      t.then(
        function () {
          ((s.status = "fulfilled"), (s.value = e));
          for (var u = 0; u < n.length; u++) (0, n[u])(e);
        },
        function (u) {
          for (s.status = "rejected", s.reason = u, u = 0; u < n.length; u++)
            (0, n[u])(void 0);
        },
      ),
      s
    );
  }
  var Vh = k.S;
  k.S = function (t, e) {
    ((ym = ce()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        hx(t, e),
      Vh !== null && Vh(t, e));
  };
  var ya = G(null);
  function jo() {
    var t = ya.current;
    return t !== null ? t : Vt.pooledCache;
  }
  function yl(t, e) {
    e === null ? at(ya, ya.current) : at(ya, e.pool);
  }
  function Lh() {
    var t = jo();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var ni = Error(o(460)),
    Do = Error(o(474)),
    xl = Error(o(542)),
    Sl = { then: function () {} };
  function Uh(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Hh(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(fn, fn), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Yh(t), t);
      default:
        if (typeof e.status == "string") e.then(fn, fn);
        else {
          if (((t = Vt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(o(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (s) {
                if (e.status === "pending") {
                  var u = e;
                  ((u.status = "fulfilled"), (u.value = s));
                }
              },
              function (s) {
                if (e.status === "pending") {
                  var u = e;
                  ((u.status = "rejected"), (u.reason = s));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Yh(t), t);
        }
        throw ((Sa = e), ni);
    }
  }
  function xa(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((Sa = n), ni)
        : n;
    }
  }
  var Sa = null;
  function Gh() {
    if (Sa === null) throw Error(o(459));
    var t = Sa;
    return ((Sa = null), t);
  }
  function Yh(t) {
    if (t === ni || t === xl) throw Error(o(483));
  }
  var ai = null,
    Ii = 0;
  function bl(t) {
    var e = Ii;
    return ((Ii += 1), ai === null && (ai = []), Hh(ai, t, e));
  }
  function $i(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Tl(t, e) {
    throw e.$$typeof === y
      ? Error(o(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          o(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function kh(t) {
    function e(X, Y) {
      if (t) {
        var _ = X.deletions;
        _ === null ? ((X.deletions = [Y]), (X.flags |= 16)) : _.push(Y);
      }
    }
    function n(X, Y) {
      if (!t) return null;
      for (; Y !== null; ) (e(X, Y), (Y = Y.sibling));
      return null;
    }
    function s(X) {
      for (var Y = new Map(); X !== null; )
        (X.key !== null ? Y.set(X.key, X) : Y.set(X.index, X), (X = X.sibling));
      return Y;
    }
    function u(X, Y) {
      return ((X = dn(X, Y)), (X.index = 0), (X.sibling = null), X);
    }
    function h(X, Y, _) {
      return (
        (X.index = _),
        t
          ? ((_ = X.alternate),
            _ !== null
              ? ((_ = _.index), _ < Y ? ((X.flags |= 67108866), Y) : _)
              : ((X.flags |= 67108866), Y))
          : ((X.flags |= 1048576), Y)
      );
    }
    function T(X) {
      return (t && X.alternate === null && (X.flags |= 67108866), X);
    }
    function w(X, Y, _, W) {
      return Y === null || Y.tag !== 6
        ? ((Y = vo(_, X.mode, W)), (Y.return = X), Y)
        : ((Y = u(Y, _)), (Y.return = X), Y);
    }
    function L(X, Y, _, W) {
      var ft = _.type;
      return ft === b
        ? J(X, Y, _.props.children, W, _.key)
        : Y !== null &&
            (Y.elementType === ft ||
              (typeof ft == "object" &&
                ft !== null &&
                ft.$$typeof === j &&
                xa(ft) === Y.type))
          ? ((Y = u(Y, _.props)), $i(Y, _), (Y.return = X), Y)
          : ((Y = ml(_.type, _.key, _.props, null, X.mode, W)),
            $i(Y, _),
            (Y.return = X),
            Y);
    }
    function F(X, Y, _, W) {
      return Y === null ||
        Y.tag !== 4 ||
        Y.stateNode.containerInfo !== _.containerInfo ||
        Y.stateNode.implementation !== _.implementation
        ? ((Y = yo(_, X.mode, W)), (Y.return = X), Y)
        : ((Y = u(Y, _.children || [])), (Y.return = X), Y);
    }
    function J(X, Y, _, W, ft) {
      return Y === null || Y.tag !== 7
        ? ((Y = ma(_, X.mode, W, ft)), (Y.return = X), Y)
        : ((Y = u(Y, _)), (Y.return = X), Y);
    }
    function $(X, Y, _) {
      if (
        (typeof Y == "string" && Y !== "") ||
        typeof Y == "number" ||
        typeof Y == "bigint"
      )
        return ((Y = vo("" + Y, X.mode, _)), (Y.return = X), Y);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case d:
            return (
              (_ = ml(Y.type, Y.key, Y.props, null, X.mode, _)),
              $i(_, Y),
              (_.return = X),
              _
            );
          case S:
            return ((Y = yo(Y, X.mode, _)), (Y.return = X), Y);
          case j:
            return ((Y = xa(Y)), $(X, Y, _));
        }
        if (tt(Y) || H(Y))
          return ((Y = ma(Y, X.mode, _, null)), (Y.return = X), Y);
        if (typeof Y.then == "function") return $(X, bl(Y), _);
        if (Y.$$typeof === N) return $(X, vl(X, Y), _);
        Tl(X, Y);
      }
      return null;
    }
    function K(X, Y, _, W) {
      var ft = Y !== null ? Y.key : null;
      if (
        (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
      )
        return ft !== null ? null : w(X, Y, "" + _, W);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case d:
            return _.key === ft ? L(X, Y, _, W) : null;
          case S:
            return _.key === ft ? F(X, Y, _, W) : null;
          case j:
            return ((_ = xa(_)), K(X, Y, _, W));
        }
        if (tt(_) || H(_)) return ft !== null ? null : J(X, Y, _, W, null);
        if (typeof _.then == "function") return K(X, Y, bl(_), W);
        if (_.$$typeof === N) return K(X, Y, vl(X, _), W);
        Tl(X, _);
      }
      return null;
    }
    function Q(X, Y, _, W, ft) {
      if (
        (typeof W == "string" && W !== "") ||
        typeof W == "number" ||
        typeof W == "bigint"
      )
        return ((X = X.get(_) || null), w(Y, X, "" + W, ft));
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case d:
            return (
              (X = X.get(W.key === null ? _ : W.key) || null),
              L(Y, X, W, ft)
            );
          case S:
            return (
              (X = X.get(W.key === null ? _ : W.key) || null),
              F(Y, X, W, ft)
            );
          case j:
            return ((W = xa(W)), Q(X, Y, _, W, ft));
        }
        if (tt(W) || H(W))
          return ((X = X.get(_) || null), J(Y, X, W, ft, null));
        if (typeof W.then == "function") return Q(X, Y, _, bl(W), ft);
        if (W.$$typeof === N) return Q(X, Y, _, vl(Y, W), ft);
        Tl(Y, W);
      }
      return null;
    }
    function rt(X, Y, _, W) {
      for (
        var ft = null, Et = null, ut = Y, vt = (Y = 0), Tt = null;
        ut !== null && vt < _.length;
        vt++
      ) {
        ut.index > vt ? ((Tt = ut), (ut = null)) : (Tt = ut.sibling);
        var Ct = K(X, ut, _[vt], W);
        if (Ct === null) {
          ut === null && (ut = Tt);
          break;
        }
        (t && ut && Ct.alternate === null && e(X, ut),
          (Y = h(Ct, Y, vt)),
          Et === null ? (ft = Ct) : (Et.sibling = Ct),
          (Et = Ct),
          (ut = Tt));
      }
      if (vt === _.length) return (n(X, ut), At && mn(X, vt), ft);
      if (ut === null) {
        for (; vt < _.length; vt++)
          ((ut = $(X, _[vt], W)),
            ut !== null &&
              ((Y = h(ut, Y, vt)),
              Et === null ? (ft = ut) : (Et.sibling = ut),
              (Et = ut)));
        return (At && mn(X, vt), ft);
      }
      for (ut = s(ut); vt < _.length; vt++)
        ((Tt = Q(ut, X, vt, _[vt], W)),
          Tt !== null &&
            (t &&
              Tt.alternate !== null &&
              ut.delete(Tt.key === null ? vt : Tt.key),
            (Y = h(Tt, Y, vt)),
            Et === null ? (ft = Tt) : (Et.sibling = Tt),
            (Et = Tt)));
      return (
        t &&
          ut.forEach(function ($n) {
            return e(X, $n);
          }),
        At && mn(X, vt),
        ft
      );
    }
    function dt(X, Y, _, W) {
      if (_ == null) throw Error(o(151));
      for (
        var ft = null,
          Et = null,
          ut = Y,
          vt = (Y = 0),
          Tt = null,
          Ct = _.next();
        ut !== null && !Ct.done;
        vt++, Ct = _.next()
      ) {
        ut.index > vt ? ((Tt = ut), (ut = null)) : (Tt = ut.sibling);
        var $n = K(X, ut, Ct.value, W);
        if ($n === null) {
          ut === null && (ut = Tt);
          break;
        }
        (t && ut && $n.alternate === null && e(X, ut),
          (Y = h($n, Y, vt)),
          Et === null ? (ft = $n) : (Et.sibling = $n),
          (Et = $n),
          (ut = Tt));
      }
      if (Ct.done) return (n(X, ut), At && mn(X, vt), ft);
      if (ut === null) {
        for (; !Ct.done; vt++, Ct = _.next())
          ((Ct = $(X, Ct.value, W)),
            Ct !== null &&
              ((Y = h(Ct, Y, vt)),
              Et === null ? (ft = Ct) : (Et.sibling = Ct),
              (Et = Ct)));
        return (At && mn(X, vt), ft);
      }
      for (ut = s(ut); !Ct.done; vt++, Ct = _.next())
        ((Ct = Q(ut, X, vt, Ct.value, W)),
          Ct !== null &&
            (t &&
              Ct.alternate !== null &&
              ut.delete(Ct.key === null ? vt : Ct.key),
            (Y = h(Ct, Y, vt)),
            Et === null ? (ft = Ct) : (Et.sibling = Ct),
            (Et = Ct)));
      return (
        t &&
          ut.forEach(function (M1) {
            return e(X, M1);
          }),
        At && mn(X, vt),
        ft
      );
    }
    function zt(X, Y, _, W) {
      if (
        (typeof _ == "object" &&
          _ !== null &&
          _.type === b &&
          _.key === null &&
          (_ = _.props.children),
        typeof _ == "object" && _ !== null)
      ) {
        switch (_.$$typeof) {
          case d:
            t: {
              for (var ft = _.key; Y !== null; ) {
                if (Y.key === ft) {
                  if (((ft = _.type), ft === b)) {
                    if (Y.tag === 7) {
                      (n(X, Y.sibling),
                        (W = u(Y, _.props.children)),
                        (W.return = X),
                        (X = W));
                      break t;
                    }
                  } else if (
                    Y.elementType === ft ||
                    (typeof ft == "object" &&
                      ft !== null &&
                      ft.$$typeof === j &&
                      xa(ft) === Y.type)
                  ) {
                    (n(X, Y.sibling),
                      (W = u(Y, _.props)),
                      $i(W, _),
                      (W.return = X),
                      (X = W));
                    break t;
                  }
                  n(X, Y);
                  break;
                } else e(X, Y);
                Y = Y.sibling;
              }
              _.type === b
                ? ((W = ma(_.props.children, X.mode, W, _.key)),
                  (W.return = X),
                  (X = W))
                : ((W = ml(_.type, _.key, _.props, null, X.mode, W)),
                  $i(W, _),
                  (W.return = X),
                  (X = W));
            }
            return T(X);
          case S:
            t: {
              for (ft = _.key; Y !== null; ) {
                if (Y.key === ft)
                  if (
                    Y.tag === 4 &&
                    Y.stateNode.containerInfo === _.containerInfo &&
                    Y.stateNode.implementation === _.implementation
                  ) {
                    (n(X, Y.sibling),
                      (W = u(Y, _.children || [])),
                      (W.return = X),
                      (X = W));
                    break t;
                  } else {
                    n(X, Y);
                    break;
                  }
                else e(X, Y);
                Y = Y.sibling;
              }
              ((W = yo(_, X.mode, W)), (W.return = X), (X = W));
            }
            return T(X);
          case j:
            return ((_ = xa(_)), zt(X, Y, _, W));
        }
        if (tt(_)) return rt(X, Y, _, W);
        if (H(_)) {
          if (((ft = H(_)), typeof ft != "function")) throw Error(o(150));
          return ((_ = ft.call(_)), dt(X, Y, _, W));
        }
        if (typeof _.then == "function") return zt(X, Y, bl(_), W);
        if (_.$$typeof === N) return zt(X, Y, vl(X, _), W);
        Tl(X, _);
      }
      return (typeof _ == "string" && _ !== "") ||
        typeof _ == "number" ||
        typeof _ == "bigint"
        ? ((_ = "" + _),
          Y !== null && Y.tag === 6
            ? (n(X, Y.sibling), (W = u(Y, _)), (W.return = X), (X = W))
            : (n(X, Y), (W = vo(_, X.mode, W)), (W.return = X), (X = W)),
          T(X))
        : n(X, Y);
    }
    return function (X, Y, _, W) {
      try {
        Ii = 0;
        var ft = zt(X, Y, _, W);
        return ((ai = null), ft);
      } catch (ut) {
        if (ut === ni || ut === xl) throw ut;
        var Et = De(29, ut, null, X.mode);
        return ((Et.lanes = W), (Et.return = X), Et);
      } finally {
      }
    };
  }
  var ba = kh(!0),
    Xh = kh(!1),
    Ln = !1;
  function No(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ro(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Un(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Hn(t, e, n) {
    var s = t.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (jt & 2) !== 0)) {
      var u = s.pending;
      return (
        u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)),
        (s.pending = e),
        (e = dl(t)),
        Eh(t, null, n),
        e
      );
    }
    return (hl(t, s, e, n), dl(t));
  }
  function ts(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var s = e.lanes;
      ((s &= t.pendingLanes), (n |= s), (e.lanes = n), zf(t, n));
    }
  }
  function Oo(t, e) {
    var n = t.updateQueue,
      s = t.alternate;
    if (s !== null && ((s = s.updateQueue), n === s)) {
      var u = null,
        h = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var T = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (h === null ? (u = h = T) : (h = h.next = T), (n = n.next));
        } while (n !== null);
        h === null ? (u = h = e) : (h = h.next = e);
      } else u = h = e;
      ((n = {
        baseState: s.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: h,
        shared: s.shared,
        callbacks: s.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var zo = !1;
  function es() {
    if (zo) {
      var t = ei;
      if (t !== null) throw t;
    }
  }
  function ns(t, e, n, s) {
    zo = !1;
    var u = t.updateQueue;
    Ln = !1;
    var h = u.firstBaseUpdate,
      T = u.lastBaseUpdate,
      w = u.shared.pending;
    if (w !== null) {
      u.shared.pending = null;
      var L = w,
        F = L.next;
      ((L.next = null), T === null ? (h = F) : (T.next = F), (T = L));
      var J = t.alternate;
      J !== null &&
        ((J = J.updateQueue),
        (w = J.lastBaseUpdate),
        w !== T &&
          (w === null ? (J.firstBaseUpdate = F) : (w.next = F),
          (J.lastBaseUpdate = L)));
    }
    if (h !== null) {
      var $ = u.baseState;
      ((T = 0), (J = F = L = null), (w = h));
      do {
        var K = w.lane & -536870913,
          Q = K !== w.lane;
        if (Q ? (bt & K) === K : (s & K) === K) {
          (K !== 0 && K === ti && (zo = !0),
            J !== null &&
              (J = J.next =
                {
                  lane: 0,
                  tag: w.tag,
                  payload: w.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var rt = t,
              dt = w;
            K = e;
            var zt = n;
            switch (dt.tag) {
              case 1:
                if (((rt = dt.payload), typeof rt == "function")) {
                  $ = rt.call(zt, $, K);
                  break t;
                }
                $ = rt;
                break t;
              case 3:
                rt.flags = (rt.flags & -65537) | 128;
              case 0:
                if (
                  ((rt = dt.payload),
                  (K = typeof rt == "function" ? rt.call(zt, $, K) : rt),
                  K == null)
                )
                  break t;
                $ = x({}, $, K);
                break t;
              case 2:
                Ln = !0;
            }
          }
          ((K = w.callback),
            K !== null &&
              ((t.flags |= 64),
              Q && (t.flags |= 8192),
              (Q = u.callbacks),
              Q === null ? (u.callbacks = [K]) : Q.push(K)));
        } else
          ((Q = {
            lane: K,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null,
          }),
            J === null ? ((F = J = Q), (L = $)) : (J = J.next = Q),
            (T |= K));
        if (((w = w.next), w === null)) {
          if (((w = u.shared.pending), w === null)) break;
          ((Q = w),
            (w = Q.next),
            (Q.next = null),
            (u.lastBaseUpdate = Q),
            (u.shared.pending = null));
        }
      } while (!0);
      (J === null && (L = $),
        (u.baseState = L),
        (u.firstBaseUpdate = F),
        (u.lastBaseUpdate = J),
        h === null && (u.shared.lanes = 0),
        (qn |= T),
        (t.lanes = T),
        (t.memoizedState = $));
    }
  }
  function qh(t, e) {
    if (typeof t != "function") throw Error(o(191, t));
    t.call(e);
  }
  function Ph(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) qh(n[t], e);
  }
  var ii = G(null),
    Al = G(0);
  function _h(t, e) {
    ((t = En), at(Al, t), at(ii, e), (En = t | e.baseLanes));
  }
  function Bo() {
    (at(Al, En), at(ii, ii.current));
  }
  function Vo() {
    ((En = Al.current), Z(ii), Z(Al));
  }
  var Ne = G(null),
    Xe = null;
  function Gn(t) {
    var e = t.alternate;
    (at(Pt, Pt.current & 1),
      at(Ne, t),
      Xe === null &&
        (e === null || ii.current !== null || e.memoizedState !== null) &&
        (Xe = t));
  }
  function Lo(t) {
    (at(Pt, Pt.current), at(Ne, t), Xe === null && (Xe = t));
  }
  function Fh(t) {
    t.tag === 22
      ? (at(Pt, Pt.current), at(Ne, t), Xe === null && (Xe = t))
      : Yn();
  }
  function Yn() {
    (at(Pt, Pt.current), at(Ne, Ne.current));
  }
  function Re(t) {
    (Z(Ne), Xe === t && (Xe = null), Z(Pt));
  }
  var Pt = G(0);
  function Ml(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Xu(n) || qu(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var vn = 0,
    gt = null,
    Rt = null,
    Qt = null,
    El = !1,
    si = !1,
    Ta = !1,
    Cl = 0,
    as = 0,
    li = null,
    mx = 0;
  function kt() {
    throw Error(o(321));
  }
  function Uo(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!je(t[n], e[n])) return !1;
    return !0;
  }
  function Ho(t, e, n, s, u, h) {
    return (
      (vn = h),
      (gt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (k.H = t === null || t.memoizedState === null ? Dd : $o),
      (Ta = !1),
      (h = n(s, u)),
      (Ta = !1),
      si && (h = Qh(e, n, s, u)),
      Kh(t),
      h
    );
  }
  function Kh(t) {
    k.H = ls;
    var e = Rt !== null && Rt.next !== null;
    if (((vn = 0), (Qt = Rt = gt = null), (El = !1), (as = 0), (li = null), e))
      throw Error(o(300));
    t === null ||
      Zt ||
      ((t = t.dependencies), t !== null && gl(t) && (Zt = !0));
  }
  function Qh(t, e, n, s) {
    gt = t;
    var u = 0;
    do {
      if ((si && (li = null), (as = 0), (si = !1), 25 <= u))
        throw Error(o(301));
      if (((u += 1), (Qt = Rt = null), t.updateQueue != null)) {
        var h = t.updateQueue;
        ((h.lastEffect = null),
          (h.events = null),
          (h.stores = null),
          h.memoCache != null && (h.memoCache.index = 0));
      }
      ((k.H = Nd), (h = e(n, s)));
    } while (si);
    return h;
  }
  function px() {
    var t = k.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? is(e) : e),
      (t = t.useState()[0]),
      (Rt !== null ? Rt.memoizedState : null) !== t && (gt.flags |= 1024),
      e
    );
  }
  function Go() {
    var t = Cl !== 0;
    return ((Cl = 0), t);
  }
  function Yo(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function ko(t) {
    if (El) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      El = !1;
    }
    ((vn = 0), (Qt = Rt = gt = null), (si = !1), (as = Cl = 0), (li = null));
  }
  function me() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Qt === null ? (gt.memoizedState = Qt = t) : (Qt = Qt.next = t), Qt);
  }
  function _t() {
    if (Rt === null) {
      var t = gt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Rt.next;
    var e = Qt === null ? gt.memoizedState : Qt.next;
    if (e !== null) ((Qt = e), (Rt = t));
    else {
      if (t === null)
        throw gt.alternate === null ? Error(o(467)) : Error(o(310));
      ((Rt = t),
        (t = {
          memoizedState: Rt.memoizedState,
          baseState: Rt.baseState,
          baseQueue: Rt.baseQueue,
          queue: Rt.queue,
          next: null,
        }),
        Qt === null ? (gt.memoizedState = Qt = t) : (Qt = Qt.next = t));
    }
    return Qt;
  }
  function wl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function is(t) {
    var e = as;
    return (
      (as += 1),
      li === null && (li = []),
      (t = Hh(li, t, e)),
      (e = gt),
      (Qt === null ? e.memoizedState : Qt.next) === null &&
        ((e = e.alternate),
        (k.H = e === null || e.memoizedState === null ? Dd : $o)),
      t
    );
  }
  function jl(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return is(t);
      if (t.$$typeof === N) return le(t);
    }
    throw Error(o(438, String(t)));
  }
  function Xo(t) {
    var e = null,
      n = gt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var s = gt.alternate;
      s !== null &&
        ((s = s.updateQueue),
        s !== null &&
          ((s = s.memoCache),
          s != null &&
            (e = {
              data: s.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = wl()), (gt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), s = 0; s < t; s++) n[s] = z;
    return (e.index++, n);
  }
  function yn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Dl(t) {
    var e = _t();
    return qo(e, Rt, t);
  }
  function qo(t, e, n) {
    var s = t.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = n;
    var u = t.baseQueue,
      h = s.pending;
    if (h !== null) {
      if (u !== null) {
        var T = u.next;
        ((u.next = h.next), (h.next = T));
      }
      ((e.baseQueue = u = h), (s.pending = null));
    }
    if (((h = t.baseState), u === null)) t.memoizedState = h;
    else {
      e = u.next;
      var w = (T = null),
        L = null,
        F = e,
        J = !1;
      do {
        var $ = F.lane & -536870913;
        if ($ !== F.lane ? (bt & $) === $ : (vn & $) === $) {
          var K = F.revertLane;
          if (K === 0)
            (L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: F.action,
                  hasEagerState: F.hasEagerState,
                  eagerState: F.eagerState,
                  next: null,
                }),
              $ === ti && (J = !0));
          else if ((vn & K) === K) {
            ((F = F.next), K === ti && (J = !0));
            continue;
          } else
            (($ = {
              lane: 0,
              revertLane: F.revertLane,
              gesture: null,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null,
            }),
              L === null ? ((w = L = $), (T = h)) : (L = L.next = $),
              (gt.lanes |= K),
              (qn |= K));
          (($ = F.action),
            Ta && n(h, $),
            (h = F.hasEagerState ? F.eagerState : n(h, $)));
        } else
          ((K = {
            lane: $,
            revertLane: F.revertLane,
            gesture: F.gesture,
            action: F.action,
            hasEagerState: F.hasEagerState,
            eagerState: F.eagerState,
            next: null,
          }),
            L === null ? ((w = L = K), (T = h)) : (L = L.next = K),
            (gt.lanes |= $),
            (qn |= $));
        F = F.next;
      } while (F !== null && F !== e);
      if (
        (L === null ? (T = h) : (L.next = w),
        !je(h, t.memoizedState) && ((Zt = !0), J && ((n = ei), n !== null)))
      )
        throw n;
      ((t.memoizedState = h),
        (t.baseState = T),
        (t.baseQueue = L),
        (s.lastRenderedState = h));
    }
    return (u === null && (s.lanes = 0), [t.memoizedState, s.dispatch]);
  }
  function Po(t) {
    var e = _t(),
      n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var s = n.dispatch,
      u = n.pending,
      h = e.memoizedState;
    if (u !== null) {
      n.pending = null;
      var T = (u = u.next);
      do ((h = t(h, T.action)), (T = T.next));
      while (T !== u);
      (je(h, e.memoizedState) || (Zt = !0),
        (e.memoizedState = h),
        e.baseQueue === null && (e.baseState = h),
        (n.lastRenderedState = h));
    }
    return [h, s];
  }
  function Zh(t, e, n) {
    var s = gt,
      u = _t(),
      h = At;
    if (h) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var T = !je((Rt || u).memoizedState, n);
    if (
      (T && ((u.memoizedState = n), (Zt = !0)),
      (u = u.queue),
      Ko(Ih.bind(null, s, u, t), [t]),
      u.getSnapshot !== e || T || (Qt !== null && Qt.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        ri(9, { destroy: void 0 }, Wh.bind(null, s, u, n, e), null),
        Vt === null)
      )
        throw Error(o(349));
      h || (vn & 127) !== 0 || Jh(s, e, n);
    }
    return n;
  }
  function Jh(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = gt.updateQueue),
      e === null
        ? ((e = wl()), (gt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Wh(t, e, n, s) {
    ((e.value = n), (e.getSnapshot = s), $h(e) && td(t));
  }
  function Ih(t, e, n) {
    return n(function () {
      $h(e) && td(t);
    });
  }
  function $h(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !je(t, n);
    } catch {
      return !0;
    }
  }
  function td(t) {
    var e = da(t, 2);
    e !== null && Ae(e, t, 2);
  }
  function _o(t) {
    var e = me();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), Ta)) {
        Dn(!0);
        try {
          n();
        } finally {
          Dn(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function ed(t, e, n, s) {
    return ((t.baseState = n), qo(t, Rt, typeof s == "function" ? s : yn));
  }
  function gx(t, e, n, s, u) {
    if (Ol(t)) throw Error(o(485));
    if (((t = e.action), t !== null)) {
      var h = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (T) {
          h.listeners.push(T);
        },
      };
      (k.T !== null ? n(!0) : (h.isTransition = !1),
        s(h),
        (n = e.pending),
        n === null
          ? ((h.next = e.pending = h), nd(e, h))
          : ((h.next = n.next), (e.pending = n.next = h)));
    }
  }
  function nd(t, e) {
    var n = e.action,
      s = e.payload,
      u = t.state;
    if (e.isTransition) {
      var h = k.T,
        T = {};
      k.T = T;
      try {
        var w = n(u, s),
          L = k.S;
        (L !== null && L(T, w), ad(t, e, w));
      } catch (F) {
        Fo(t, e, F);
      } finally {
        (h !== null && T.types !== null && (h.types = T.types), (k.T = h));
      }
    } else
      try {
        ((h = n(u, s)), ad(t, e, h));
      } catch (F) {
        Fo(t, e, F);
      }
  }
  function ad(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (s) {
            id(t, e, s);
          },
          function (s) {
            return Fo(t, e, s);
          },
        )
      : id(t, e, n);
  }
  function id(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      sd(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), nd(t, n))));
  }
  function Fo(t, e, n) {
    var s = t.pending;
    if (((t.pending = null), s !== null)) {
      s = s.next;
      do ((e.status = "rejected"), (e.reason = n), sd(e), (e = e.next));
      while (e !== s);
    }
    t.action = null;
  }
  function sd(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ld(t, e) {
    return e;
  }
  function rd(t, e) {
    if (At) {
      var n = Vt.formState;
      if (n !== null) {
        t: {
          var s = gt;
          if (At) {
            if (Lt) {
              e: {
                for (var u = Lt, h = ke; u.nodeType !== 8; ) {
                  if (!h) {
                    u = null;
                    break e;
                  }
                  if (((u = qe(u.nextSibling)), u === null)) {
                    u = null;
                    break e;
                  }
                }
                ((h = u.data), (u = h === "F!" || h === "F" ? u : null));
              }
              if (u) {
                ((Lt = qe(u.nextSibling)), (s = u.data === "F!"));
                break t;
              }
            }
            Bn(s);
          }
          s = !1;
        }
        s && (e = n[0]);
      }
    }
    return (
      (n = me()),
      (n.memoizedState = n.baseState = e),
      (s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ld,
        lastRenderedState: e,
      }),
      (n.queue = s),
      (n = Cd.bind(null, gt, s)),
      (s.dispatch = n),
      (s = _o(!1)),
      (h = Io.bind(null, gt, !1, s.queue)),
      (s = me()),
      (u = { state: e, dispatch: null, action: t, pending: null }),
      (s.queue = u),
      (n = gx.bind(null, gt, u, h, n)),
      (u.dispatch = n),
      (s.memoizedState = t),
      [e, n, !1]
    );
  }
  function od(t) {
    var e = _t();
    return ud(e, Rt, t);
  }
  function ud(t, e, n) {
    if (
      ((e = qo(t, e, ld)[0]),
      (t = Dl(yn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var s = is(e);
      } catch (T) {
        throw T === ni ? xl : T;
      }
    else s = e;
    e = _t();
    var u = e.queue,
      h = u.dispatch;
    return (
      n !== e.memoizedState &&
        ((gt.flags |= 2048),
        ri(9, { destroy: void 0 }, vx.bind(null, u, n), null)),
      [s, h, t]
    );
  }
  function vx(t, e) {
    t.action = e;
  }
  function cd(t) {
    var e = _t(),
      n = Rt;
    if (n !== null) return ud(e, n, t);
    (_t(), (e = e.memoizedState), (n = _t()));
    var s = n.queue.dispatch;
    return ((n.memoizedState = t), [e, s, !1]);
  }
  function ri(t, e, n, s) {
    return (
      (t = { tag: t, create: n, deps: s, inst: e, next: null }),
      (e = gt.updateQueue),
      e === null && ((e = wl()), (gt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((s = n.next), (n.next = t), (t.next = s), (e.lastEffect = t)),
      t
    );
  }
  function fd() {
    return _t().memoizedState;
  }
  function Nl(t, e, n, s) {
    var u = me();
    ((gt.flags |= t),
      (u.memoizedState = ri(
        1 | e,
        { destroy: void 0 },
        n,
        s === void 0 ? null : s,
      )));
  }
  function Rl(t, e, n, s) {
    var u = _t();
    s = s === void 0 ? null : s;
    var h = u.memoizedState.inst;
    Rt !== null && s !== null && Uo(s, Rt.memoizedState.deps)
      ? (u.memoizedState = ri(e, h, n, s))
      : ((gt.flags |= t), (u.memoizedState = ri(1 | e, h, n, s)));
  }
  function hd(t, e) {
    Nl(8390656, 8, t, e);
  }
  function Ko(t, e) {
    Rl(2048, 8, t, e);
  }
  function yx(t) {
    gt.flags |= 4;
    var e = gt.updateQueue;
    if (e === null) ((e = wl()), (gt.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function dd(t) {
    var e = _t().memoizedState;
    return (
      yx({ ref: e, nextImpl: t }),
      function () {
        if ((jt & 2) !== 0) throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function md(t, e) {
    return Rl(4, 2, t, e);
  }
  function pd(t, e) {
    return Rl(4, 4, t, e);
  }
  function gd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function vd(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), Rl(4, 4, gd.bind(null, e, t), n));
  }
  function Qo() {}
  function yd(t, e) {
    var n = _t();
    e = e === void 0 ? null : e;
    var s = n.memoizedState;
    return e !== null && Uo(e, s[1]) ? s[0] : ((n.memoizedState = [t, e]), t);
  }
  function xd(t, e) {
    var n = _t();
    e = e === void 0 ? null : e;
    var s = n.memoizedState;
    if (e !== null && Uo(e, s[1])) return s[0];
    if (((s = t()), Ta)) {
      Dn(!0);
      try {
        t();
      } finally {
        Dn(!1);
      }
    }
    return ((n.memoizedState = [s, e]), s);
  }
  function Zo(t, e, n) {
    return n === void 0 || ((vn & 1073741824) !== 0 && (bt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Sm()), (gt.lanes |= t), (qn |= t), n);
  }
  function Sd(t, e, n, s) {
    return je(n, e)
      ? n
      : ii.current !== null
        ? ((t = Zo(t, n, s)), je(t, e) || (Zt = !0), t)
        : (vn & 42) === 0 || ((vn & 1073741824) !== 0 && (bt & 261930) === 0)
          ? ((Zt = !0), (t.memoizedState = n))
          : ((t = Sm()), (gt.lanes |= t), (qn |= t), e);
  }
  function bd(t, e, n, s, u) {
    var h = P.p;
    P.p = h !== 0 && 8 > h ? h : 8;
    var T = k.T,
      w = {};
    ((k.T = w), Io(t, !1, e, n));
    try {
      var L = u(),
        F = k.S;
      if (
        (F !== null && F(w, L),
        L !== null && typeof L == "object" && typeof L.then == "function")
      ) {
        var J = dx(L, s);
        ss(t, e, J, Be(t));
      } else ss(t, e, s, Be(t));
    } catch ($) {
      ss(t, e, { then: function () {}, status: "rejected", reason: $ }, Be());
    } finally {
      ((P.p = h),
        T !== null && w.types !== null && (T.types = w.types),
        (k.T = T));
    }
  }
  function xx() {}
  function Jo(t, e, n, s) {
    if (t.tag !== 5) throw Error(o(476));
    var u = Td(t).queue;
    bd(
      t,
      u,
      e,
      et,
      n === null
        ? xx
        : function () {
            return (Ad(t), n(s));
          },
    );
  }
  function Td(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: et,
      baseState: et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yn,
        lastRenderedState: et,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: yn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Ad(t) {
    var e = Td(t);
    (e.next === null && (e = t.alternate.memoizedState),
      ss(t, e.next.queue, {}, Be()));
  }
  function Wo() {
    return le(Ts);
  }
  function Md() {
    return _t().memoizedState;
  }
  function Ed() {
    return _t().memoizedState;
  }
  function Sx(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Be();
          t = Un(n);
          var s = Hn(e, t, n);
          (s !== null && (Ae(s, e, n), ts(s, e, n)),
            (e = { cache: Co() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function bx(t, e, n) {
    var s = Be();
    ((n = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ol(t)
        ? wd(e, n)
        : ((n = po(t, e, n, s)), n !== null && (Ae(n, t, s), jd(n, e, s))));
  }
  function Cd(t, e, n) {
    var s = Be();
    ss(t, e, n, s);
  }
  function ss(t, e, n, s) {
    var u = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ol(t)) wd(e, u);
    else {
      var h = t.alternate;
      if (
        t.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = e.lastRenderedReducer), h !== null)
      )
        try {
          var T = e.lastRenderedState,
            w = h(T, n);
          if (((u.hasEagerState = !0), (u.eagerState = w), je(w, T)))
            return (hl(t, e, u, 0), Vt === null && fl(), !1);
        } catch {
        } finally {
        }
      if (((n = po(t, e, u, s)), n !== null))
        return (Ae(n, t, s), jd(n, e, s), !0);
    }
    return !1;
  }
  function Io(t, e, n, s) {
    if (
      ((s = {
        lane: 2,
        revertLane: Nu(),
        gesture: null,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ol(t))
    ) {
      if (e) throw Error(o(479));
    } else ((e = po(t, n, s, 2)), e !== null && Ae(e, t, 2));
  }
  function Ol(t) {
    var e = t.alternate;
    return t === gt || (e !== null && e === gt);
  }
  function wd(t, e) {
    si = El = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function jd(t, e, n) {
    if ((n & 4194048) !== 0) {
      var s = e.lanes;
      ((s &= t.pendingLanes), (n |= s), (e.lanes = n), zf(t, n));
    }
  }
  var ls = {
    readContext: le,
    use: jl,
    useCallback: kt,
    useContext: kt,
    useEffect: kt,
    useImperativeHandle: kt,
    useLayoutEffect: kt,
    useInsertionEffect: kt,
    useMemo: kt,
    useReducer: kt,
    useRef: kt,
    useState: kt,
    useDebugValue: kt,
    useDeferredValue: kt,
    useTransition: kt,
    useSyncExternalStore: kt,
    useId: kt,
    useHostTransitionStatus: kt,
    useFormState: kt,
    useActionState: kt,
    useOptimistic: kt,
    useMemoCache: kt,
    useCacheRefresh: kt,
  };
  ls.useEffectEvent = kt;
  var Dd = {
      readContext: le,
      use: jl,
      useCallback: function (t, e) {
        return ((me().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: le,
      useEffect: hd,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          Nl(4194308, 4, gd.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return Nl(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Nl(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = me();
        e = e === void 0 ? null : e;
        var s = t();
        if (Ta) {
          Dn(!0);
          try {
            t();
          } finally {
            Dn(!1);
          }
        }
        return ((n.memoizedState = [s, e]), s);
      },
      useReducer: function (t, e, n) {
        var s = me();
        if (n !== void 0) {
          var u = n(e);
          if (Ta) {
            Dn(!0);
            try {
              n(e);
            } finally {
              Dn(!1);
            }
          }
        } else u = e;
        return (
          (s.memoizedState = s.baseState = u),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u,
          }),
          (s.queue = t),
          (t = t.dispatch = bx.bind(null, gt, t)),
          [s.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = me();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = _o(t);
        var e = t.queue,
          n = Cd.bind(null, gt, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: Qo,
      useDeferredValue: function (t, e) {
        var n = me();
        return Zo(n, t, e);
      },
      useTransition: function () {
        var t = _o(!1);
        return (
          (t = bd.bind(null, gt, t.queue, !0, !1)),
          (me().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var s = gt,
          u = me();
        if (At) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = e()), Vt === null)) throw Error(o(349));
          (bt & 127) !== 0 || Jh(s, e, n);
        }
        u.memoizedState = n;
        var h = { value: n, getSnapshot: e };
        return (
          (u.queue = h),
          hd(Ih.bind(null, s, h, t), [t]),
          (s.flags |= 2048),
          ri(9, { destroy: void 0 }, Wh.bind(null, s, h, n, e), null),
          n
        );
      },
      useId: function () {
        var t = me(),
          e = Vt.identifierPrefix;
        if (At) {
          var n = an,
            s = nn;
          ((n = (s & ~(1 << (32 - we(s) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = Cl++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = mx++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Wo,
      useFormState: rd,
      useActionState: rd,
      useOptimistic: function (t) {
        var e = me();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Io.bind(null, gt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Xo,
      useCacheRefresh: function () {
        return (me().memoizedState = Sx.bind(null, gt));
      },
      useEffectEvent: function (t) {
        var e = me(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((jt & 2) !== 0) throw Error(o(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    $o = {
      readContext: le,
      use: jl,
      useCallback: yd,
      useContext: le,
      useEffect: Ko,
      useImperativeHandle: vd,
      useInsertionEffect: md,
      useLayoutEffect: pd,
      useMemo: xd,
      useReducer: Dl,
      useRef: fd,
      useState: function () {
        return Dl(yn);
      },
      useDebugValue: Qo,
      useDeferredValue: function (t, e) {
        var n = _t();
        return Sd(n, Rt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Dl(yn)[0],
          e = _t().memoizedState;
        return [typeof t == "boolean" ? t : is(t), e];
      },
      useSyncExternalStore: Zh,
      useId: Md,
      useHostTransitionStatus: Wo,
      useFormState: od,
      useActionState: od,
      useOptimistic: function (t, e) {
        var n = _t();
        return ed(n, Rt, t, e);
      },
      useMemoCache: Xo,
      useCacheRefresh: Ed,
    };
  $o.useEffectEvent = dd;
  var Nd = {
    readContext: le,
    use: jl,
    useCallback: yd,
    useContext: le,
    useEffect: Ko,
    useImperativeHandle: vd,
    useInsertionEffect: md,
    useLayoutEffect: pd,
    useMemo: xd,
    useReducer: Po,
    useRef: fd,
    useState: function () {
      return Po(yn);
    },
    useDebugValue: Qo,
    useDeferredValue: function (t, e) {
      var n = _t();
      return Rt === null ? Zo(n, t, e) : Sd(n, Rt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Po(yn)[0],
        e = _t().memoizedState;
      return [typeof t == "boolean" ? t : is(t), e];
    },
    useSyncExternalStore: Zh,
    useId: Md,
    useHostTransitionStatus: Wo,
    useFormState: cd,
    useActionState: cd,
    useOptimistic: function (t, e) {
      var n = _t();
      return Rt !== null
        ? ed(n, Rt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: Xo,
    useCacheRefresh: Ed,
  };
  Nd.useEffectEvent = dd;
  function tu(t, e, n, s) {
    ((e = t.memoizedState),
      (n = n(s, e)),
      (n = n == null ? e : x({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var eu = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var s = Be(),
        u = Un(s);
      ((u.payload = e),
        n != null && (u.callback = n),
        (e = Hn(t, u, s)),
        e !== null && (Ae(e, t, s), ts(e, t, s)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var s = Be(),
        u = Un(s);
      ((u.tag = 1),
        (u.payload = e),
        n != null && (u.callback = n),
        (e = Hn(t, u, s)),
        e !== null && (Ae(e, t, s), ts(e, t, s)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Be(),
        s = Un(n);
      ((s.tag = 2),
        e != null && (s.callback = e),
        (e = Hn(t, s, n)),
        e !== null && (Ae(e, t, n), ts(e, t, n)));
    },
  };
  function Rd(t, e, n, s, u, h, T) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(s, h, T)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Fi(n, s) || !Fi(u, h)
          : !0
    );
  }
  function Od(t, e, n, s) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, s),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, s),
      e.state !== t && eu.enqueueReplaceState(e, e.state, null));
  }
  function Aa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var s in e) s !== "ref" && (n[s] = e[s]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = x({}, n));
      for (var u in t) n[u] === void 0 && (n[u] = t[u]);
    }
    return n;
  }
  function zd(t) {
    cl(t);
  }
  function Bd(t) {
    console.error(t);
  }
  function Vd(t) {
    cl(t);
  }
  function zl(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Ld(t, e, n) {
    try {
      var s = t.onCaughtError;
      s(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function nu(t, e, n) {
    return (
      (n = Un(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        zl(t, e);
      }),
      n
    );
  }
  function Ud(t) {
    return ((t = Un(t)), (t.tag = 3), t);
  }
  function Hd(t, e, n, s) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var h = s.value;
      ((t.payload = function () {
        return u(h);
      }),
        (t.callback = function () {
          Ld(e, n, s);
        }));
    }
    var T = n.stateNode;
    T !== null &&
      typeof T.componentDidCatch == "function" &&
      (t.callback = function () {
        (Ld(e, n, s),
          typeof u != "function" &&
            (Pn === null ? (Pn = new Set([this])) : Pn.add(this)));
        var w = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: w !== null ? w : "",
        });
      });
  }
  function Tx(t, e, n, s, u) {
    if (
      ((n.flags |= 32768),
      s !== null && typeof s == "object" && typeof s.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && $a(e, n, u, !0),
        (n = Ne.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Xe === null ? _l() : n.alternate === null && Xt === 0 && (Xt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = u),
              s === Sl
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([s])) : e.add(s),
                  wu(t, s, u)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              s === Sl
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([s])) : n.add(s)),
                  wu(t, s, u)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return (wu(t, s, u), _l(), !1);
    }
    if (At)
      return (
        (e = Ne.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = u),
            s !== bo && ((t = Error(o(422), { cause: s })), Zi(He(t, n))))
          : (s !== bo && ((e = Error(o(423), { cause: s })), Zi(He(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (u &= -u),
            (t.lanes |= u),
            (s = He(s, n)),
            (u = nu(t.stateNode, s, u)),
            Oo(t, u),
            Xt !== 4 && (Xt = 2)),
        !1
      );
    var h = Error(o(520), { cause: s });
    if (
      ((h = He(h, n)),
      ms === null ? (ms = [h]) : ms.push(h),
      Xt !== 4 && (Xt = 2),
      e === null)
    )
      return !0;
    ((s = He(s, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = u & -u),
            (n.lanes |= t),
            (t = nu(n.stateNode, s, t)),
            Oo(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (h = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (h !== null &&
                  typeof h.componentDidCatch == "function" &&
                  (Pn === null || !Pn.has(h)))))
          )
            return (
              (n.flags |= 65536),
              (u &= -u),
              (n.lanes |= u),
              (u = Ud(u)),
              Hd(u, t, n, s),
              Oo(n, u),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var au = Error(o(461)),
    Zt = !1;
  function re(t, e, n, s) {
    e.child = t === null ? Xh(e, null, n, s) : ba(e, t.child, n, s);
  }
  function Gd(t, e, n, s, u) {
    n = n.render;
    var h = e.ref;
    if ("ref" in s) {
      var T = {};
      for (var w in s) w !== "ref" && (T[w] = s[w]);
    } else T = s;
    return (
      va(e),
      (s = Ho(t, e, n, T, h, u)),
      (w = Go()),
      t !== null && !Zt
        ? (Yo(t, e, u), xn(t, e, u))
        : (At && w && xo(e), (e.flags |= 1), re(t, e, s, u), e.child)
    );
  }
  function Yd(t, e, n, s, u) {
    if (t === null) {
      var h = n.type;
      return typeof h == "function" &&
        !go(h) &&
        h.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = h), kd(t, e, h, s, u))
        : ((t = ml(n.type, null, s, e, e.mode, u)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((h = t.child), !fu(t, u))) {
      var T = h.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Fi), n(T, s) && t.ref === e.ref)
      )
        return xn(t, e, u);
    }
    return (
      (e.flags |= 1),
      (t = dn(h, s)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function kd(t, e, n, s, u) {
    if (t !== null) {
      var h = t.memoizedProps;
      if (Fi(h, s) && t.ref === e.ref)
        if (((Zt = !1), (e.pendingProps = s = h), fu(t, u)))
          (t.flags & 131072) !== 0 && (Zt = !0);
        else return ((e.lanes = t.lanes), xn(t, e, u));
    }
    return iu(t, e, n, s, u);
  }
  function Xd(t, e, n, s) {
    var u = s.children,
      h = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      s.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((h = h !== null ? h.baseLanes | n : n), t !== null)) {
          for (s = e.child = t.child, u = 0; s !== null; )
            ((u = u | s.lanes | s.childLanes), (s = s.sibling));
          s = u & ~h;
        } else ((s = 0), (e.child = null));
        return qd(t, e, h, n, s);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && yl(e, h !== null ? h.cachePool : null),
          h !== null ? _h(e, h) : Bo(),
          Fh(e));
      else
        return (
          (s = e.lanes = 536870912),
          qd(t, e, h !== null ? h.baseLanes | n : n, n, s)
        );
    } else
      h !== null
        ? (yl(e, h.cachePool), _h(e, h), Yn(), (e.memoizedState = null))
        : (t !== null && yl(e, null), Bo(), Yn());
    return (re(t, e, u, n), e.child);
  }
  function rs(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function qd(t, e, n, s, u) {
    var h = jo();
    return (
      (h = h === null ? null : { parent: Kt._currentValue, pool: h }),
      (e.memoizedState = { baseLanes: n, cachePool: h }),
      t !== null && yl(e, null),
      Bo(),
      Fh(e),
      t !== null && $a(t, e, s, !0),
      (e.childLanes = u),
      null
    );
  }
  function Bl(t, e) {
    return (
      (e = Ll({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Pd(t, e, n) {
    return (
      ba(e, t.child, null, n),
      (t = Bl(e, e.pendingProps)),
      (t.flags |= 2),
      Re(e),
      (e.memoizedState = null),
      t
    );
  }
  function Ax(t, e, n) {
    var s = e.pendingProps,
      u = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (At) {
        if (s.mode === "hidden")
          return ((t = Bl(e, s)), (e.lanes = 536870912), rs(null, t));
        if (
          (Lo(e),
          (t = Lt)
            ? ((t = np(t, ke)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: On !== null ? { id: nn, overflow: an } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = wh(t)),
                (n.return = e),
                (e.child = n),
                (se = e),
                (Lt = null)))
            : (t = null),
          t === null)
        )
          throw Bn(e);
        return ((e.lanes = 536870912), null);
      }
      return Bl(e, s);
    }
    var h = t.memoizedState;
    if (h !== null) {
      var T = h.dehydrated;
      if ((Lo(e), u))
        if (e.flags & 256) ((e.flags &= -257), (e = Pd(t, e, n)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(o(558));
      else if (
        (Zt || $a(t, e, n, !1), (u = (n & t.childLanes) !== 0), Zt || u)
      ) {
        if (
          ((s = Vt),
          s !== null && ((T = Bf(s, n)), T !== 0 && T !== h.retryLane))
        )
          throw ((h.retryLane = T), da(t, T), Ae(s, t, T), au);
        (_l(), (e = Pd(t, e, n)));
      } else
        ((t = h.treeContext),
          (Lt = qe(T.nextSibling)),
          (se = e),
          (At = !0),
          (zn = null),
          (ke = !1),
          t !== null && Nh(e, t),
          (e = Bl(e, s)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = dn(t.child, { mode: s.mode, children: s.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Vl(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function iu(t, e, n, s, u) {
    return (
      va(e),
      (n = Ho(t, e, n, s, void 0, u)),
      (s = Go()),
      t !== null && !Zt
        ? (Yo(t, e, u), xn(t, e, u))
        : (At && s && xo(e), (e.flags |= 1), re(t, e, n, u), e.child)
    );
  }
  function _d(t, e, n, s, u, h) {
    return (
      va(e),
      (e.updateQueue = null),
      (n = Qh(e, s, n, u)),
      Kh(t),
      (s = Go()),
      t !== null && !Zt
        ? (Yo(t, e, h), xn(t, e, h))
        : (At && s && xo(e), (e.flags |= 1), re(t, e, n, h), e.child)
    );
  }
  function Fd(t, e, n, s, u) {
    if ((va(e), e.stateNode === null)) {
      var h = Za,
        T = n.contextType;
      (typeof T == "object" && T !== null && (h = le(T)),
        (h = new n(s, h)),
        (e.memoizedState =
          h.state !== null && h.state !== void 0 ? h.state : null),
        (h.updater = eu),
        (e.stateNode = h),
        (h._reactInternals = e),
        (h = e.stateNode),
        (h.props = s),
        (h.state = e.memoizedState),
        (h.refs = {}),
        No(e),
        (T = n.contextType),
        (h.context = typeof T == "object" && T !== null ? le(T) : Za),
        (h.state = e.memoizedState),
        (T = n.getDerivedStateFromProps),
        typeof T == "function" && (tu(e, n, T, s), (h.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function" ||
          (typeof h.UNSAFE_componentWillMount != "function" &&
            typeof h.componentWillMount != "function") ||
          ((T = h.state),
          typeof h.componentWillMount == "function" && h.componentWillMount(),
          typeof h.UNSAFE_componentWillMount == "function" &&
            h.UNSAFE_componentWillMount(),
          T !== h.state && eu.enqueueReplaceState(h, h.state, null),
          ns(e, s, h, u),
          es(),
          (h.state = e.memoizedState)),
        typeof h.componentDidMount == "function" && (e.flags |= 4194308),
        (s = !0));
    } else if (t === null) {
      h = e.stateNode;
      var w = e.memoizedProps,
        L = Aa(n, w);
      h.props = L;
      var F = h.context,
        J = n.contextType;
      ((T = Za), typeof J == "object" && J !== null && (T = le(J)));
      var $ = n.getDerivedStateFromProps;
      ((J =
        typeof $ == "function" ||
        typeof h.getSnapshotBeforeUpdate == "function"),
        (w = e.pendingProps !== w),
        J ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((w || F !== T) && Od(e, h, s, T)),
        (Ln = !1));
      var K = e.memoizedState;
      ((h.state = K),
        ns(e, s, h, u),
        es(),
        (F = e.memoizedState),
        w || K !== F || Ln
          ? (typeof $ == "function" && (tu(e, n, $, s), (F = e.memoizedState)),
            (L = Ln || Rd(e, n, L, s, K, F, T))
              ? (J ||
                  (typeof h.UNSAFE_componentWillMount != "function" &&
                    typeof h.componentWillMount != "function") ||
                  (typeof h.componentWillMount == "function" &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == "function" &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof h.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = s),
                (e.memoizedState = F)),
            (h.props = s),
            (h.state = F),
            (h.context = T),
            (s = L))
          : (typeof h.componentDidMount == "function" && (e.flags |= 4194308),
            (s = !1)));
    } else {
      ((h = e.stateNode),
        Ro(t, e),
        (T = e.memoizedProps),
        (J = Aa(n, T)),
        (h.props = J),
        ($ = e.pendingProps),
        (K = h.context),
        (F = n.contextType),
        (L = Za),
        typeof F == "object" && F !== null && (L = le(F)),
        (w = n.getDerivedStateFromProps),
        (F =
          typeof w == "function" ||
          typeof h.getSnapshotBeforeUpdate == "function") ||
          (typeof h.UNSAFE_componentWillReceiveProps != "function" &&
            typeof h.componentWillReceiveProps != "function") ||
          ((T !== $ || K !== L) && Od(e, h, s, L)),
        (Ln = !1),
        (K = e.memoizedState),
        (h.state = K),
        ns(e, s, h, u),
        es());
      var Q = e.memoizedState;
      T !== $ ||
      K !== Q ||
      Ln ||
      (t !== null && t.dependencies !== null && gl(t.dependencies))
        ? (typeof w == "function" && (tu(e, n, w, s), (Q = e.memoizedState)),
          (J =
            Ln ||
            Rd(e, n, J, s, K, Q, L) ||
            (t !== null && t.dependencies !== null && gl(t.dependencies)))
            ? (F ||
                (typeof h.UNSAFE_componentWillUpdate != "function" &&
                  typeof h.componentWillUpdate != "function") ||
                (typeof h.componentWillUpdate == "function" &&
                  h.componentWillUpdate(s, Q, L),
                typeof h.UNSAFE_componentWillUpdate == "function" &&
                  h.UNSAFE_componentWillUpdate(s, Q, L)),
              typeof h.componentDidUpdate == "function" && (e.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof h.componentDidUpdate != "function" ||
                (T === t.memoizedProps && K === t.memoizedState) ||
                (e.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != "function" ||
                (T === t.memoizedProps && K === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = s),
              (e.memoizedState = Q)),
          (h.props = s),
          (h.state = Q),
          (h.context = L),
          (s = J))
        : (typeof h.componentDidUpdate != "function" ||
            (T === t.memoizedProps && K === t.memoizedState) ||
            (e.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != "function" ||
            (T === t.memoizedProps && K === t.memoizedState) ||
            (e.flags |= 1024),
          (s = !1));
    }
    return (
      (h = s),
      Vl(t, e),
      (s = (e.flags & 128) !== 0),
      h || s
        ? ((h = e.stateNode),
          (n =
            s && typeof n.getDerivedStateFromError != "function"
              ? null
              : h.render()),
          (e.flags |= 1),
          t !== null && s
            ? ((e.child = ba(e, t.child, null, u)),
              (e.child = ba(e, null, n, u)))
            : re(t, e, n, u),
          (e.memoizedState = h.state),
          (t = e.child))
        : (t = xn(t, e, u)),
      t
    );
  }
  function Kd(t, e, n, s) {
    return (pa(), (e.flags |= 256), re(t, e, n, s), e.child);
  }
  var su = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function lu(t) {
    return { baseLanes: t, cachePool: Lh() };
  }
  function ru(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= ze), t);
  }
  function Qd(t, e, n) {
    var s = e.pendingProps,
      u = !1,
      h = (e.flags & 128) !== 0,
      T;
    if (
      ((T = h) ||
        (T =
          t !== null && t.memoizedState === null ? !1 : (Pt.current & 2) !== 0),
      T && ((u = !0), (e.flags &= -129)),
      (T = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (At) {
        if (
          (u ? Gn(e) : Yn(),
          (t = Lt)
            ? ((t = np(t, ke)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: On !== null ? { id: nn, overflow: an } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = wh(t)),
                (n.return = e),
                (e.child = n),
                (se = e),
                (Lt = null)))
            : (t = null),
          t === null)
        )
          throw Bn(e);
        return (qu(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var w = s.children;
      return (
        (s = s.fallback),
        u
          ? (Yn(),
            (u = e.mode),
            (w = Ll({ mode: "hidden", children: w }, u)),
            (s = ma(s, u, n, null)),
            (w.return = e),
            (s.return = e),
            (w.sibling = s),
            (e.child = w),
            (s = e.child),
            (s.memoizedState = lu(n)),
            (s.childLanes = ru(t, T, n)),
            (e.memoizedState = su),
            rs(null, s))
          : (Gn(e), ou(e, w))
      );
    }
    var L = t.memoizedState;
    if (L !== null && ((w = L.dehydrated), w !== null)) {
      if (h)
        e.flags & 256
          ? (Gn(e), (e.flags &= -257), (e = uu(t, e, n)))
          : e.memoizedState !== null
            ? (Yn(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Yn(),
              (w = s.fallback),
              (u = e.mode),
              (s = Ll({ mode: "visible", children: s.children }, u)),
              (w = ma(w, u, n, null)),
              (w.flags |= 2),
              (s.return = e),
              (w.return = e),
              (s.sibling = w),
              (e.child = s),
              ba(e, t.child, null, n),
              (s = e.child),
              (s.memoizedState = lu(n)),
              (s.childLanes = ru(t, T, n)),
              (e.memoizedState = su),
              (e = rs(null, s)));
      else if ((Gn(e), qu(w))) {
        if (((T = w.nextSibling && w.nextSibling.dataset), T)) var F = T.dgst;
        ((T = F),
          (s = Error(o(419))),
          (s.stack = ""),
          (s.digest = T),
          Zi({ value: s, source: null, stack: null }),
          (e = uu(t, e, n)));
      } else if (
        (Zt || $a(t, e, n, !1), (T = (n & t.childLanes) !== 0), Zt || T)
      ) {
        if (
          ((T = Vt),
          T !== null && ((s = Bf(T, n)), s !== 0 && s !== L.retryLane))
        )
          throw ((L.retryLane = s), da(t, s), Ae(T, t, s), au);
        (Xu(w) || _l(), (e = uu(t, e, n)));
      } else
        Xu(w)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = L.treeContext),
            (Lt = qe(w.nextSibling)),
            (se = e),
            (At = !0),
            (zn = null),
            (ke = !1),
            t !== null && Nh(e, t),
            (e = ou(e, s.children)),
            (e.flags |= 4096));
      return e;
    }
    return u
      ? (Yn(),
        (w = s.fallback),
        (u = e.mode),
        (L = t.child),
        (F = L.sibling),
        (s = dn(L, { mode: "hidden", children: s.children })),
        (s.subtreeFlags = L.subtreeFlags & 65011712),
        F !== null ? (w = dn(F, w)) : ((w = ma(w, u, n, null)), (w.flags |= 2)),
        (w.return = e),
        (s.return = e),
        (s.sibling = w),
        (e.child = s),
        rs(null, s),
        (s = e.child),
        (w = t.child.memoizedState),
        w === null
          ? (w = lu(n))
          : ((u = w.cachePool),
            u !== null
              ? ((L = Kt._currentValue),
                (u = u.parent !== L ? { parent: L, pool: L } : u))
              : (u = Lh()),
            (w = { baseLanes: w.baseLanes | n, cachePool: u })),
        (s.memoizedState = w),
        (s.childLanes = ru(t, T, n)),
        (e.memoizedState = su),
        rs(t.child, s))
      : (Gn(e),
        (n = t.child),
        (t = n.sibling),
        (n = dn(n, { mode: "visible", children: s.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((T = e.deletions),
          T === null ? ((e.deletions = [t]), (e.flags |= 16)) : T.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function ou(t, e) {
    return (
      (e = Ll({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ll(t, e) {
    return ((t = De(22, t, null, e)), (t.lanes = 0), t);
  }
  function uu(t, e, n) {
    return (
      ba(e, t.child, null, n),
      (t = ou(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Zd(t, e, n) {
    t.lanes |= e;
    var s = t.alternate;
    (s !== null && (s.lanes |= e), Mo(t.return, e, n));
  }
  function cu(t, e, n, s, u, h) {
    var T = t.memoizedState;
    T === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: n,
          tailMode: u,
          treeForkCount: h,
        })
      : ((T.isBackwards = e),
        (T.rendering = null),
        (T.renderingStartTime = 0),
        (T.last = s),
        (T.tail = n),
        (T.tailMode = u),
        (T.treeForkCount = h));
  }
  function Jd(t, e, n) {
    var s = e.pendingProps,
      u = s.revealOrder,
      h = s.tail;
    s = s.children;
    var T = Pt.current,
      w = (T & 2) !== 0;
    if (
      (w ? ((T = (T & 1) | 2), (e.flags |= 128)) : (T &= 1),
      at(Pt, T),
      re(t, e, s, n),
      (s = At ? Qi : 0),
      !w && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Zd(t, n, e);
        else if (t.tag === 19) Zd(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (u) {
      case "forwards":
        for (n = e.child, u = null; n !== null; )
          ((t = n.alternate),
            t !== null && Ml(t) === null && (u = n),
            (n = n.sibling));
        ((n = u),
          n === null
            ? ((u = e.child), (e.child = null))
            : ((u = n.sibling), (n.sibling = null)),
          cu(e, !1, u, n, h, s));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && Ml(t) === null)) {
            e.child = u;
            break;
          }
          ((t = u.sibling), (u.sibling = n), (n = u), (u = t));
        }
        cu(e, !0, n, null, h, s);
        break;
      case "together":
        cu(e, !1, null, null, void 0, s);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function xn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (qn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if (($a(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(o(153));
    if (e.child !== null) {
      for (
        t = e.child, n = dn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (n = n.sibling = dn(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function fu(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && gl(t)));
  }
  function Mx(t, e, n) {
    switch (e.tag) {
      case 3:
        (Mt(e, e.stateNode.containerInfo),
          Vn(e, Kt, t.memoizedState.cache),
          pa());
        break;
      case 27:
      case 5:
        ue(e);
        break;
      case 4:
        Mt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Vn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Lo(e), null);
        break;
      case 13:
        var s = e.memoizedState;
        if (s !== null)
          return s.dehydrated !== null
            ? (Gn(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Qd(t, e, n)
              : (Gn(e), (t = xn(t, e, n)), t !== null ? t.sibling : null);
        Gn(e);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (
          ((s = (n & e.childLanes) !== 0),
          s || ($a(t, e, n, !1), (s = (n & e.childLanes) !== 0)),
          u)
        ) {
          if (s) return Jd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((u = e.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          at(Pt, Pt.current),
          s)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Xd(t, e, n, e.pendingProps));
      case 24:
        Vn(e, Kt, t.memoizedState.cache);
    }
    return xn(t, e, n);
  }
  function Wd(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Zt = !0;
      else {
        if (!fu(t, n) && (e.flags & 128) === 0) return ((Zt = !1), Mx(t, e, n));
        Zt = (t.flags & 131072) !== 0;
      }
    else ((Zt = !1), At && (e.flags & 1048576) !== 0 && Dh(e, Qi, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var s = e.pendingProps;
          if (((t = xa(e.elementType)), (e.type = t), typeof t == "function"))
            go(t)
              ? ((s = Aa(t, s)), (e.tag = 1), (e = Fd(null, e, t, s, n)))
              : ((e.tag = 0), (e = iu(null, e, t, s, n)));
          else {
            if (t != null) {
              var u = t.$$typeof;
              if (u === V) {
                ((e.tag = 11), (e = Gd(null, e, t, s, n)));
                break t;
              } else if (u === R) {
                ((e.tag = 14), (e = Yd(null, e, t, s, n)));
                break t;
              }
            }
            throw ((e = I(t) || t), Error(o(306, e, "")));
          }
        }
        return e;
      case 0:
        return iu(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((s = e.type), (u = Aa(s, e.pendingProps)), Fd(t, e, s, u, n));
      case 3:
        t: {
          if ((Mt(e, e.stateNode.containerInfo), t === null))
            throw Error(o(387));
          s = e.pendingProps;
          var h = e.memoizedState;
          ((u = h.element), Ro(t, e), ns(e, s, null, n));
          var T = e.memoizedState;
          if (
            ((s = T.cache),
            Vn(e, Kt, s),
            s !== h.cache && Eo(e, [Kt], n, !0),
            es(),
            (s = T.element),
            h.isDehydrated)
          )
            if (
              ((h = { element: s, isDehydrated: !1, cache: T.cache }),
              (e.updateQueue.baseState = h),
              (e.memoizedState = h),
              e.flags & 256)
            ) {
              e = Kd(t, e, s, n);
              break t;
            } else if (s !== u) {
              ((u = He(Error(o(424)), e)), Zi(u), (e = Kd(t, e, s, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Lt = qe(t.firstChild),
                  se = e,
                  At = !0,
                  zn = null,
                  ke = !0,
                  n = Xh(e, null, s, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((pa(), s === u)) {
              e = xn(t, e, n);
              break t;
            }
            re(t, e, s, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Vl(t, e),
          t === null
            ? (n = op(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : At ||
                ((n = e.type),
                (t = e.pendingProps),
                (s = Il(lt.current).createElement(n)),
                (s[ie] = e),
                (s[ve] = t),
                oe(s, n, t),
                ee(s),
                (e.stateNode = s))
            : (e.memoizedState = op(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ue(e),
          t === null &&
            At &&
            ((s = e.stateNode = sp(e.type, e.pendingProps, lt.current)),
            (se = e),
            (ke = !0),
            (u = Lt),
            Qn(e.type) ? ((Pu = u), (Lt = qe(s.firstChild))) : (Lt = u)),
          re(t, e, e.pendingProps.children, n),
          Vl(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            At &&
            ((u = s = Lt) &&
              ((s = t1(s, e.type, e.pendingProps, ke)),
              s !== null
                ? ((e.stateNode = s),
                  (se = e),
                  (Lt = qe(s.firstChild)),
                  (ke = !1),
                  (u = !0))
                : (u = !1)),
            u || Bn(e)),
          ue(e),
          (u = e.type),
          (h = e.pendingProps),
          (T = t !== null ? t.memoizedProps : null),
          (s = h.children),
          Gu(u, h) ? (s = null) : T !== null && Gu(u, T) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((u = Ho(t, e, px, null, null, n)), (Ts._currentValue = u)),
          Vl(t, e),
          re(t, e, s, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            At &&
            ((t = n = Lt) &&
              ((n = e1(n, e.pendingProps, ke)),
              n !== null
                ? ((e.stateNode = n), (se = e), (Lt = null), (t = !0))
                : (t = !1)),
            t || Bn(e)),
          null
        );
      case 13:
        return Qd(t, e, n);
      case 4:
        return (
          Mt(e, e.stateNode.containerInfo),
          (s = e.pendingProps),
          t === null ? (e.child = ba(e, null, s, n)) : re(t, e, s, n),
          e.child
        );
      case 11:
        return Gd(t, e, e.type, e.pendingProps, n);
      case 7:
        return (re(t, e, e.pendingProps, n), e.child);
      case 8:
        return (re(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (re(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return (
          (s = e.pendingProps),
          Vn(e, e.type, s.value),
          re(t, e, s.children, n),
          e.child
        );
      case 9:
        return (
          (u = e.type._context),
          (s = e.pendingProps.children),
          va(e),
          (u = le(u)),
          (s = s(u)),
          (e.flags |= 1),
          re(t, e, s, n),
          e.child
        );
      case 14:
        return Yd(t, e, e.type, e.pendingProps, n);
      case 15:
        return kd(t, e, e.type, e.pendingProps, n);
      case 19:
        return Jd(t, e, n);
      case 31:
        return Ax(t, e, n);
      case 22:
        return Xd(t, e, n, e.pendingProps);
      case 24:
        return (
          va(e),
          (s = le(Kt)),
          t === null
            ? ((u = jo()),
              u === null &&
                ((u = Vt),
                (h = Co()),
                (u.pooledCache = h),
                h.refCount++,
                h !== null && (u.pooledCacheLanes |= n),
                (u = h)),
              (e.memoizedState = { parent: s, cache: u }),
              No(e),
              Vn(e, Kt, u))
            : ((t.lanes & n) !== 0 && (Ro(t, e), ns(e, null, null, n), es()),
              (u = t.memoizedState),
              (h = e.memoizedState),
              u.parent !== s
                ? ((u = { parent: s, cache: s }),
                  (e.memoizedState = u),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = u),
                  Vn(e, Kt, s))
                : ((s = h.cache),
                  Vn(e, Kt, s),
                  s !== u.cache && Eo(e, [Kt], n, !0))),
          re(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function Sn(t) {
    t.flags |= 4;
  }
  function hu(t, e, n, s, u) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (u & 335544128) === u))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Mm()) t.flags |= 8192;
        else throw ((Sa = Sl), Do);
    } else t.flags &= -16777217;
  }
  function Id(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !dp(e)))
      if (Mm()) t.flags |= 8192;
      else throw ((Sa = Sl), Do);
  }
  function Ul(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Rf() : 536870912), (t.lanes |= e), (fi |= e)));
  }
  function os(t, e) {
    if (!At)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var s = null; n !== null; )
            (n.alternate !== null && (s = n), (n = n.sibling));
          s === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function Ut(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      s = 0;
    if (e)
      for (var u = t.child; u !== null; )
        ((n |= u.lanes | u.childLanes),
          (s |= u.subtreeFlags & 65011712),
          (s |= u.flags & 65011712),
          (u.return = t),
          (u = u.sibling));
    else
      for (u = t.child; u !== null; )
        ((n |= u.lanes | u.childLanes),
          (s |= u.subtreeFlags),
          (s |= u.flags),
          (u.return = t),
          (u = u.sibling));
    return ((t.subtreeFlags |= s), (t.childLanes = n), e);
  }
  function Ex(t, e, n) {
    var s = e.pendingProps;
    switch ((So(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ut(e), null);
      case 1:
        return (Ut(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          e.memoizedState.cache !== s && (e.flags |= 2048),
          gn(Kt),
          Bt(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ia(e)
              ? Sn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), To())),
          Ut(e),
          null
        );
      case 26:
        var u = e.type,
          h = e.memoizedState;
        return (
          t === null
            ? (Sn(e),
              h !== null ? (Ut(e), Id(e, h)) : (Ut(e), hu(e, u, null, s, n)))
            : h
              ? h !== t.memoizedState
                ? (Sn(e), Ut(e), Id(e, h))
                : (Ut(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== s && Sn(e),
                Ut(e),
                hu(e, u, t, s, n)),
          null
        );
      case 27:
        if (
          (de(e),
          (n = lt.current),
          (u = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== s && Sn(e);
        else {
          if (!s) {
            if (e.stateNode === null) throw Error(o(166));
            return (Ut(e), null);
          }
          ((t = st.current),
            Ia(e) ? Rh(e) : ((t = sp(u, s, n)), (e.stateNode = t), Sn(e)));
        }
        return (Ut(e), null);
      case 5:
        if ((de(e), (u = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== s && Sn(e);
        else {
          if (!s) {
            if (e.stateNode === null) throw Error(o(166));
            return (Ut(e), null);
          }
          if (((h = st.current), Ia(e))) Rh(e);
          else {
            var T = Il(lt.current);
            switch (h) {
              case 1:
                h = T.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                h = T.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    h = T.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    h = T.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((h = T.createElement("div")),
                      (h.innerHTML = "<script><\/script>"),
                      (h = h.removeChild(h.firstChild)));
                    break;
                  case "select":
                    ((h =
                      typeof s.is == "string"
                        ? T.createElement("select", { is: s.is })
                        : T.createElement("select")),
                      s.multiple
                        ? (h.multiple = !0)
                        : s.size && (h.size = s.size));
                    break;
                  default:
                    h =
                      typeof s.is == "string"
                        ? T.createElement(u, { is: s.is })
                        : T.createElement(u);
                }
            }
            ((h[ie] = e), (h[ve] = s));
            t: for (T = e.child; T !== null; ) {
              if (T.tag === 5 || T.tag === 6) h.appendChild(T.stateNode);
              else if (T.tag !== 4 && T.tag !== 27 && T.child !== null) {
                ((T.child.return = T), (T = T.child));
                continue;
              }
              if (T === e) break t;
              for (; T.sibling === null; ) {
                if (T.return === null || T.return === e) break t;
                T = T.return;
              }
              ((T.sibling.return = T.return), (T = T.sibling));
            }
            e.stateNode = h;
            t: switch ((oe(h, u, s), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break t;
              case "img":
                s = !0;
                break t;
              default:
                s = !1;
            }
            s && Sn(e);
          }
        }
        return (
          Ut(e),
          hu(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== s && Sn(e);
        else {
          if (typeof s != "string" && e.stateNode === null) throw Error(o(166));
          if (((t = lt.current), Ia(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (s = null),
              (u = se),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  s = u.memoizedProps;
              }
            ((t[ie] = e),
              (t = !!(
                t.nodeValue === n ||
                (s !== null && s.suppressHydrationWarning === !0) ||
                Qm(t.nodeValue, n)
              )),
              t || Bn(e, !0));
          } else
            ((t = Il(t).createTextNode(s)), (t[ie] = e), (e.stateNode = t));
        }
        return (Ut(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((s = Ia(e)), n !== null)) {
            if (t === null) {
              if (!s) throw Error(o(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(o(557));
              t[ie] = e;
            } else
              (pa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Ut(e), (t = !1));
          } else
            ((n = To()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Re(e), e) : (Re(e), null);
          if ((e.flags & 128) !== 0) throw Error(o(558));
        }
        return (Ut(e), null);
      case 13:
        if (
          ((s = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((u = Ia(e)), s !== null && s.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(o(318));
              if (
                ((u = e.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(o(317));
              u[ie] = e;
            } else
              (pa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Ut(e), (u = !1));
          } else
            ((u = To()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return e.flags & 256 ? (Re(e), e) : (Re(e), null);
        }
        return (
          Re(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = s !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((s = e.child),
                (u = null),
                s.alternate !== null &&
                  s.alternate.memoizedState !== null &&
                  s.alternate.memoizedState.cachePool !== null &&
                  (u = s.alternate.memoizedState.cachePool.pool),
                (h = null),
                s.memoizedState !== null &&
                  s.memoizedState.cachePool !== null &&
                  (h = s.memoizedState.cachePool.pool),
                h !== u && (s.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              Ul(e, e.updateQueue),
              Ut(e),
              null)
        );
      case 4:
        return (Bt(), t === null && Bu(e.stateNode.containerInfo), Ut(e), null);
      case 10:
        return (gn(e.type), Ut(e), null);
      case 19:
        if ((Z(Pt), (s = e.memoizedState), s === null)) return (Ut(e), null);
        if (((u = (e.flags & 128) !== 0), (h = s.rendering), h === null))
          if (u) os(s, !1);
          else {
            if (Xt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((h = Ml(t)), h !== null)) {
                  for (
                    e.flags |= 128,
                      os(s, !1),
                      t = h.updateQueue,
                      e.updateQueue = t,
                      Ul(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (Ch(n, t), (n = n.sibling));
                  return (
                    at(Pt, (Pt.current & 1) | 2),
                    At && mn(e, s.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            s.tail !== null &&
              ce() > Xl &&
              ((e.flags |= 128), (u = !0), os(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!u)
            if (((t = Ml(h)), t !== null)) {
              if (
                ((e.flags |= 128),
                (u = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Ul(e, t),
                os(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !h.alternate &&
                  !At)
              )
                return (Ut(e), null);
            } else
              2 * ce() - s.renderingStartTime > Xl &&
                n !== 536870912 &&
                ((e.flags |= 128), (u = !0), os(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((h.sibling = e.child), (e.child = h))
            : ((t = s.last),
              t !== null ? (t.sibling = h) : (e.child = h),
              (s.last = h));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = ce()),
            (t.sibling = null),
            (n = Pt.current),
            at(Pt, u ? (n & 1) | 2 : n & 1),
            At && mn(e, s.treeForkCount),
            t)
          : (Ut(e), null);
      case 22:
      case 23:
        return (
          Re(e),
          Vo(),
          (s = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== s && (e.flags |= 8192)
            : s && (e.flags |= 8192),
          s
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Ut(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Ut(e),
          (n = e.updateQueue),
          n !== null && Ul(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (s = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (s = e.memoizedState.cachePool.pool),
          s !== n && (e.flags |= 2048),
          t !== null && Z(ya),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          gn(Kt),
          Ut(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, e.tag));
  }
  function Cx(t, e) {
    switch ((So(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          gn(Kt),
          Bt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (de(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Re(e), e.alternate === null)) throw Error(o(340));
          pa();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Re(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(o(340));
          pa();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (Z(Pt), null);
      case 4:
        return (Bt(), null);
      case 10:
        return (gn(e.type), null);
      case 22:
      case 23:
        return (
          Re(e),
          Vo(),
          t !== null && Z(ya),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (gn(Kt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function $d(t, e) {
    switch ((So(e), e.tag)) {
      case 3:
        (gn(Kt), Bt());
        break;
      case 26:
      case 27:
      case 5:
        de(e);
        break;
      case 4:
        Bt();
        break;
      case 31:
        e.memoizedState !== null && Re(e);
        break;
      case 13:
        Re(e);
        break;
      case 19:
        Z(Pt);
        break;
      case 10:
        gn(e.type);
        break;
      case 22:
      case 23:
        (Re(e), Vo(), t !== null && Z(ya));
        break;
      case 24:
        gn(Kt);
    }
  }
  function us(t, e) {
    try {
      var n = e.updateQueue,
        s = n !== null ? n.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        n = u;
        do {
          if ((n.tag & t) === t) {
            s = void 0;
            var h = n.create,
              T = n.inst;
            ((s = h()), (T.destroy = s));
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (w) {
      Nt(e, e.return, w);
    }
  }
  function kn(t, e, n) {
    try {
      var s = e.updateQueue,
        u = s !== null ? s.lastEffect : null;
      if (u !== null) {
        var h = u.next;
        s = h;
        do {
          if ((s.tag & t) === t) {
            var T = s.inst,
              w = T.destroy;
            if (w !== void 0) {
              ((T.destroy = void 0), (u = e));
              var L = n,
                F = w;
              try {
                F();
              } catch (J) {
                Nt(u, L, J);
              }
            }
          }
          s = s.next;
        } while (s !== h);
      }
    } catch (J) {
      Nt(e, e.return, J);
    }
  }
  function tm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Ph(e, n);
      } catch (s) {
        Nt(t, t.return, s);
      }
    }
  }
  function em(t, e, n) {
    ((n.props = Aa(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (s) {
      Nt(t, e, s);
    }
  }
  function cs(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var s = t.stateNode;
            break;
          case 30:
            s = t.stateNode;
            break;
          default:
            s = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(s)) : (n.current = s);
      }
    } catch (u) {
      Nt(t, e, u);
    }
  }
  function sn(t, e) {
    var n = t.ref,
      s = t.refCleanup;
    if (n !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (u) {
          Nt(t, e, u);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          Nt(t, e, u);
        }
      else n.current = null;
  }
  function nm(t) {
    var e = t.type,
      n = t.memoizedProps,
      s = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && s.focus();
          break t;
        case "img":
          n.src ? (s.src = n.src) : n.srcSet && (s.srcset = n.srcSet);
      }
    } catch (u) {
      Nt(t, t.return, u);
    }
  }
  function du(t, e, n) {
    try {
      var s = t.stateNode;
      (Qx(s, t.type, n, e), (s[ve] = e));
    } catch (u) {
      Nt(t, t.return, u);
    }
  }
  function am(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Qn(t.type)) ||
      t.tag === 4
    );
  }
  function mu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || am(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Qn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function pu(t, e, n) {
    var s = t.tag;
    if (s === 5 || s === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = fn)));
    else if (
      s !== 4 &&
      (s === 27 && Qn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (pu(t, e, n), t = t.sibling; t !== null; )
        (pu(t, e, n), (t = t.sibling));
  }
  function Hl(t, e, n) {
    var s = t.tag;
    if (s === 5 || s === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      s !== 4 &&
      (s === 27 && Qn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (Hl(t, e, n), t = t.sibling; t !== null; )
        (Hl(t, e, n), (t = t.sibling));
  }
  function im(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var s = t.type, u = e.attributes; u.length; )
        e.removeAttributeNode(u[0]);
      (oe(e, s, n), (e[ie] = t), (e[ve] = n));
    } catch (h) {
      Nt(t, t.return, h);
    }
  }
  var bn = !1,
    Jt = !1,
    gu = !1,
    sm = typeof WeakSet == "function" ? WeakSet : Set,
    ne = null;
  function wx(t, e) {
    if (((t = t.containerInfo), (Uu = sr), (t = vh(t)), oo(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var s = n.getSelection && n.getSelection();
          if (s && s.rangeCount !== 0) {
            n = s.anchorNode;
            var u = s.anchorOffset,
              h = s.focusNode;
            s = s.focusOffset;
            try {
              (n.nodeType, h.nodeType);
            } catch {
              n = null;
              break t;
            }
            var T = 0,
              w = -1,
              L = -1,
              F = 0,
              J = 0,
              $ = t,
              K = null;
            e: for (;;) {
              for (
                var Q;
                $ !== n || (u !== 0 && $.nodeType !== 3) || (w = T + u),
                  $ !== h || (s !== 0 && $.nodeType !== 3) || (L = T + s),
                  $.nodeType === 3 && (T += $.nodeValue.length),
                  (Q = $.firstChild) !== null;
              )
                ((K = $), ($ = Q));
              for (;;) {
                if ($ === t) break e;
                if (
                  (K === n && ++F === u && (w = T),
                  K === h && ++J === s && (L = T),
                  (Q = $.nextSibling) !== null)
                )
                  break;
                (($ = K), (K = $.parentNode));
              }
              $ = Q;
            }
            n = w === -1 || L === -1 ? null : { start: w, end: L };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Hu = { focusedElem: t, selectionRange: n }, sr = !1, ne = e;
      ne !== null;
    )
      if (
        ((e = ne), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (ne = t));
      else
        for (; ne !== null; ) {
          switch (((e = ne), (h = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  ((u = t[n]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && h !== null) {
                ((t = void 0),
                  (n = e),
                  (u = h.memoizedProps),
                  (h = h.memoizedState),
                  (s = n.stateNode));
                try {
                  var rt = Aa(n.type, u);
                  ((t = s.getSnapshotBeforeUpdate(rt, h)),
                    (s.__reactInternalSnapshotBeforeUpdate = t));
                } catch (dt) {
                  Nt(n, n.return, dt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  ku(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ku(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(o(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (ne = t));
            break;
          }
          ne = e.return;
        }
  }
  function lm(t, e, n) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (An(t, n), s & 4 && us(5, n));
        break;
      case 1:
        if ((An(t, n), s & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (T) {
              Nt(n, n.return, T);
            }
          else {
            var u = Aa(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (T) {
              Nt(n, n.return, T);
            }
          }
        (s & 64 && tm(n), s & 512 && cs(n, n.return));
        break;
      case 3:
        if ((An(t, n), s & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Ph(t, e);
          } catch (T) {
            Nt(n, n.return, T);
          }
        }
        break;
      case 27:
        e === null && s & 4 && im(n);
      case 26:
      case 5:
        (An(t, n), e === null && s & 4 && nm(n), s & 512 && cs(n, n.return));
        break;
      case 12:
        An(t, n);
        break;
      case 31:
        (An(t, n), s & 4 && um(t, n));
        break;
      case 13:
        (An(t, n),
          s & 4 && cm(t, n),
          s & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = Lx.bind(null, n)), n1(t, n)))));
        break;
      case 22:
        if (((s = n.memoizedState !== null || bn), !s)) {
          ((e = (e !== null && e.memoizedState !== null) || Jt), (u = bn));
          var h = Jt;
          ((bn = s),
            (Jt = e) && !h ? Mn(t, n, (n.subtreeFlags & 8772) !== 0) : An(t, n),
            (bn = u),
            (Jt = h));
        }
        break;
      case 30:
        break;
      default:
        An(t, n);
    }
  }
  function rm(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), rm(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && _r(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Ht = null,
    xe = !1;
  function Tn(t, e, n) {
    for (n = n.child; n !== null; ) (om(t, e, n), (n = n.sibling));
  }
  function om(t, e, n) {
    if (Ce && typeof Ce.onCommitFiberUnmount == "function")
      try {
        Ce.onCommitFiberUnmount(Bi, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Jt || sn(n, e),
          Tn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Jt || sn(n, e);
        var s = Ht,
          u = xe;
        (Qn(n.type) && ((Ht = n.stateNode), (xe = !1)),
          Tn(t, e, n),
          xs(n.stateNode),
          (Ht = s),
          (xe = u));
        break;
      case 5:
        Jt || sn(n, e);
      case 6:
        if (
          ((s = Ht),
          (u = xe),
          (Ht = null),
          Tn(t, e, n),
          (Ht = s),
          (xe = u),
          Ht !== null)
        )
          if (xe)
            try {
              (Ht.nodeType === 9
                ? Ht.body
                : Ht.nodeName === "HTML"
                  ? Ht.ownerDocument.body
                  : Ht
              ).removeChild(n.stateNode);
            } catch (h) {
              Nt(n, e, h);
            }
          else
            try {
              Ht.removeChild(n.stateNode);
            } catch (h) {
              Nt(n, e, h);
            }
        break;
      case 18:
        Ht !== null &&
          (xe
            ? ((t = Ht),
              tp(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              xi(t))
            : tp(Ht, n.stateNode));
        break;
      case 4:
        ((s = Ht),
          (u = xe),
          (Ht = n.stateNode.containerInfo),
          (xe = !0),
          Tn(t, e, n),
          (Ht = s),
          (xe = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (kn(2, n, e), Jt || kn(4, n, e), Tn(t, e, n));
        break;
      case 1:
        (Jt ||
          (sn(n, e),
          (s = n.stateNode),
          typeof s.componentWillUnmount == "function" && em(n, e, s)),
          Tn(t, e, n));
        break;
      case 21:
        Tn(t, e, n);
        break;
      case 22:
        ((Jt = (s = Jt) || n.memoizedState !== null), Tn(t, e, n), (Jt = s));
        break;
      default:
        Tn(t, e, n);
    }
  }
  function um(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        xi(t);
      } catch (n) {
        Nt(e, e.return, n);
      }
    }
  }
  function cm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        xi(t);
      } catch (n) {
        Nt(e, e.return, n);
      }
  }
  function jx(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new sm()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new sm()),
          e
        );
      default:
        throw Error(o(435, t.tag));
    }
  }
  function Gl(t, e) {
    var n = jx(t);
    e.forEach(function (s) {
      if (!n.has(s)) {
        n.add(s);
        var u = Ux.bind(null, t, s);
        s.then(u, u);
      }
    });
  }
  function Se(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var s = 0; s < n.length; s++) {
        var u = n[s],
          h = t,
          T = e,
          w = T;
        t: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
              if (Qn(w.type)) {
                ((Ht = w.stateNode), (xe = !1));
                break t;
              }
              break;
            case 5:
              ((Ht = w.stateNode), (xe = !1));
              break t;
            case 3:
            case 4:
              ((Ht = w.stateNode.containerInfo), (xe = !0));
              break t;
          }
          w = w.return;
        }
        if (Ht === null) throw Error(o(160));
        (om(h, T, u),
          (Ht = null),
          (xe = !1),
          (h = u.alternate),
          h !== null && (h.return = null),
          (u.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (fm(e, t), (e = e.sibling));
  }
  var Qe = null;
  function fm(t, e) {
    var n = t.alternate,
      s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Se(e, t),
          be(t),
          s & 4 && (kn(3, t, t.return), us(3, t), kn(5, t, t.return)));
        break;
      case 1:
        (Se(e, t),
          be(t),
          s & 512 && (Jt || n === null || sn(n, n.return)),
          s & 64 &&
            bn &&
            ((t = t.updateQueue),
            t !== null &&
              ((s = t.callbacks),
              s !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? s : n.concat(s))))));
        break;
      case 26:
        var u = Qe;
        if (
          (Se(e, t),
          be(t),
          s & 512 && (Jt || n === null || sn(n, n.return)),
          s & 4)
        ) {
          var h = n !== null ? n.memoizedState : null;
          if (((s = t.memoizedState), n === null))
            if (s === null)
              if (t.stateNode === null) {
                t: {
                  ((s = t.type),
                    (n = t.memoizedProps),
                    (u = u.ownerDocument || u));
                  e: switch (s) {
                    case "title":
                      ((h = u.getElementsByTagName("title")[0]),
                        (!h ||
                          h[Ui] ||
                          h[ie] ||
                          h.namespaceURI === "http://www.w3.org/2000/svg" ||
                          h.hasAttribute("itemprop")) &&
                          ((h = u.createElement(s)),
                          u.head.insertBefore(
                            h,
                            u.querySelector("head > title"),
                          )),
                        oe(h, s, n),
                        (h[ie] = t),
                        ee(h),
                        (s = h));
                      break t;
                    case "link":
                      var T = fp("link", "href", u).get(s + (n.href || ""));
                      if (T) {
                        for (var w = 0; w < T.length; w++)
                          if (
                            ((h = T[w]),
                            h.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              h.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              h.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              h.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            T.splice(w, 1);
                            break e;
                          }
                      }
                      ((h = u.createElement(s)),
                        oe(h, s, n),
                        u.head.appendChild(h));
                      break;
                    case "meta":
                      if (
                        (T = fp("meta", "content", u).get(
                          s + (n.content || ""),
                        ))
                      ) {
                        for (w = 0; w < T.length; w++)
                          if (
                            ((h = T[w]),
                            h.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              h.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              h.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              h.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              h.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            T.splice(w, 1);
                            break e;
                          }
                      }
                      ((h = u.createElement(s)),
                        oe(h, s, n),
                        u.head.appendChild(h));
                      break;
                    default:
                      throw Error(o(468, s));
                  }
                  ((h[ie] = t), ee(h), (s = h));
                }
                t.stateNode = s;
              } else hp(u, t.type, t.stateNode);
            else t.stateNode = cp(u, s, t.memoizedProps);
          else
            h !== s
              ? (h === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : h.count--,
                s === null
                  ? hp(u, t.type, t.stateNode)
                  : cp(u, s, t.memoizedProps))
              : s === null &&
                t.stateNode !== null &&
                du(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Se(e, t),
          be(t),
          s & 512 && (Jt || n === null || sn(n, n.return)),
          n !== null && s & 4 && du(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (Se(e, t),
          be(t),
          s & 512 && (Jt || n === null || sn(n, n.return)),
          t.flags & 32)
        ) {
          u = t.stateNode;
          try {
            Xa(u, "");
          } catch (rt) {
            Nt(t, t.return, rt);
          }
        }
        (s & 4 &&
          t.stateNode != null &&
          ((u = t.memoizedProps), du(t, u, n !== null ? n.memoizedProps : u)),
          s & 1024 && (gu = !0));
        break;
      case 6:
        if ((Se(e, t), be(t), s & 4)) {
          if (t.stateNode === null) throw Error(o(162));
          ((s = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = s;
          } catch (rt) {
            Nt(t, t.return, rt);
          }
        }
        break;
      case 3:
        if (
          ((er = null),
          (u = Qe),
          (Qe = $l(e.containerInfo)),
          Se(e, t),
          (Qe = u),
          be(t),
          s & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            xi(e.containerInfo);
          } catch (rt) {
            Nt(t, t.return, rt);
          }
        gu && ((gu = !1), hm(t));
        break;
      case 4:
        ((s = Qe),
          (Qe = $l(t.stateNode.containerInfo)),
          Se(e, t),
          be(t),
          (Qe = s));
        break;
      case 12:
        (Se(e, t), be(t));
        break;
      case 31:
        (Se(e, t),
          be(t),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), Gl(t, s))));
        break;
      case 13:
        (Se(e, t),
          be(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (kl = ce()),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), Gl(t, s))));
        break;
      case 22:
        u = t.memoizedState !== null;
        var L = n !== null && n.memoizedState !== null,
          F = bn,
          J = Jt;
        if (
          ((bn = F || u),
          (Jt = J || L),
          Se(e, t),
          (Jt = J),
          (bn = F),
          be(t),
          s & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = u ? e._visibility & -2 : e._visibility | 1,
              u && (n === null || L || bn || Jt || Ma(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                L = n = e;
                try {
                  if (((h = L.stateNode), u))
                    ((T = h.style),
                      typeof T.setProperty == "function"
                        ? T.setProperty("display", "none", "important")
                        : (T.display = "none"));
                  else {
                    w = L.stateNode;
                    var $ = L.memoizedProps.style,
                      K =
                        $ != null && $.hasOwnProperty("display")
                          ? $.display
                          : null;
                    w.style.display =
                      K == null || typeof K == "boolean" ? "" : ("" + K).trim();
                  }
                } catch (rt) {
                  Nt(L, L.return, rt);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                L = e;
                try {
                  L.stateNode.nodeValue = u ? "" : L.memoizedProps;
                } catch (rt) {
                  Nt(L, L.return, rt);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                L = e;
                try {
                  var Q = L.stateNode;
                  u ? ep(Q, !0) : ep(L.stateNode, !1);
                } catch (rt) {
                  Nt(L, L.return, rt);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        s & 4 &&
          ((s = t.updateQueue),
          s !== null &&
            ((n = s.retryQueue),
            n !== null && ((s.retryQueue = null), Gl(t, n))));
        break;
      case 19:
        (Se(e, t),
          be(t),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), Gl(t, s))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Se(e, t), be(t));
    }
  }
  function be(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, s = t.return; s !== null; ) {
          if (am(s)) {
            n = s;
            break;
          }
          s = s.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode,
              h = mu(t);
            Hl(t, h, u);
            break;
          case 5:
            var T = n.stateNode;
            n.flags & 32 && (Xa(T, ""), (n.flags &= -33));
            var w = mu(t);
            Hl(t, w, T);
            break;
          case 3:
          case 4:
            var L = n.stateNode.containerInfo,
              F = mu(t);
            pu(t, F, L);
            break;
          default:
            throw Error(o(161));
        }
      } catch (J) {
        Nt(t, t.return, J);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function hm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (hm(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function An(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (lm(t, e.alternate, e), (e = e.sibling));
  }
  function Ma(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (kn(4, e, e.return), Ma(e));
          break;
        case 1:
          sn(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && em(e, e.return, n),
            Ma(e));
          break;
        case 27:
          xs(e.stateNode);
        case 26:
        case 5:
          (sn(e, e.return), Ma(e));
          break;
        case 22:
          e.memoizedState === null && Ma(e);
          break;
        case 30:
          Ma(e);
          break;
        default:
          Ma(e);
      }
      t = t.sibling;
    }
  }
  function Mn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var s = e.alternate,
        u = t,
        h = e,
        T = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          (Mn(u, h, n), us(4, h));
          break;
        case 1:
          if (
            (Mn(u, h, n),
            (s = h),
            (u = s.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (F) {
              Nt(s, s.return, F);
            }
          if (((s = h), (u = s.updateQueue), u !== null)) {
            var w = s.stateNode;
            try {
              var L = u.shared.hiddenCallbacks;
              if (L !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < L.length; u++)
                  qh(L[u], w);
            } catch (F) {
              Nt(s, s.return, F);
            }
          }
          (n && T & 64 && tm(h), cs(h, h.return));
          break;
        case 27:
          im(h);
        case 26:
        case 5:
          (Mn(u, h, n), n && s === null && T & 4 && nm(h), cs(h, h.return));
          break;
        case 12:
          Mn(u, h, n);
          break;
        case 31:
          (Mn(u, h, n), n && T & 4 && um(u, h));
          break;
        case 13:
          (Mn(u, h, n), n && T & 4 && cm(u, h));
          break;
        case 22:
          (h.memoizedState === null && Mn(u, h, n), cs(h, h.return));
          break;
        case 30:
          break;
        default:
          Mn(u, h, n);
      }
      e = e.sibling;
    }
  }
  function vu(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && Ji(n)));
  }
  function yu(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && Ji(t)));
  }
  function Ze(t, e, n, s) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (dm(t, e, n, s), (e = e.sibling));
  }
  function dm(t, e, n, s) {
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ze(t, e, n, s), u & 2048 && us(9, e));
        break;
      case 1:
        Ze(t, e, n, s);
        break;
      case 3:
        (Ze(t, e, n, s),
          u & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && Ji(t))));
        break;
      case 12:
        if (u & 2048) {
          (Ze(t, e, n, s), (t = e.stateNode));
          try {
            var h = e.memoizedProps,
              T = h.id,
              w = h.onPostCommit;
            typeof w == "function" &&
              w(
                T,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (L) {
            Nt(e, e.return, L);
          }
        } else Ze(t, e, n, s);
        break;
      case 31:
        Ze(t, e, n, s);
        break;
      case 13:
        Ze(t, e, n, s);
        break;
      case 23:
        break;
      case 22:
        ((h = e.stateNode),
          (T = e.alternate),
          e.memoizedState !== null
            ? h._visibility & 2
              ? Ze(t, e, n, s)
              : fs(t, e)
            : h._visibility & 2
              ? Ze(t, e, n, s)
              : ((h._visibility |= 2),
                oi(t, e, n, s, (e.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && vu(T, e));
        break;
      case 24:
        (Ze(t, e, n, s), u & 2048 && yu(e.alternate, e));
        break;
      default:
        Ze(t, e, n, s);
    }
  }
  function oi(t, e, n, s, u) {
    for (
      u = u && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var h = t,
        T = e,
        w = n,
        L = s,
        F = T.flags;
      switch (T.tag) {
        case 0:
        case 11:
        case 15:
          (oi(h, T, w, L, u), us(8, T));
          break;
        case 23:
          break;
        case 22:
          var J = T.stateNode;
          (T.memoizedState !== null
            ? J._visibility & 2
              ? oi(h, T, w, L, u)
              : fs(h, T)
            : ((J._visibility |= 2), oi(h, T, w, L, u)),
            u && F & 2048 && vu(T.alternate, T));
          break;
        case 24:
          (oi(h, T, w, L, u), u && F & 2048 && yu(T.alternate, T));
          break;
        default:
          oi(h, T, w, L, u);
      }
      e = e.sibling;
    }
  }
  function fs(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          s = e,
          u = s.flags;
        switch (s.tag) {
          case 22:
            (fs(n, s), u & 2048 && vu(s.alternate, s));
            break;
          case 24:
            (fs(n, s), u & 2048 && yu(s.alternate, s));
            break;
          default:
            fs(n, s);
        }
        e = e.sibling;
      }
  }
  var hs = 8192;
  function ui(t, e, n) {
    if (t.subtreeFlags & hs)
      for (t = t.child; t !== null; ) (mm(t, e, n), (t = t.sibling));
  }
  function mm(t, e, n) {
    switch (t.tag) {
      case 26:
        (ui(t, e, n),
          t.flags & hs &&
            t.memoizedState !== null &&
            m1(n, Qe, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        ui(t, e, n);
        break;
      case 3:
      case 4:
        var s = Qe;
        ((Qe = $l(t.stateNode.containerInfo)), ui(t, e, n), (Qe = s));
        break;
      case 22:
        t.memoizedState === null &&
          ((s = t.alternate),
          s !== null && s.memoizedState !== null
            ? ((s = hs), (hs = 16777216), ui(t, e, n), (hs = s))
            : ui(t, e, n));
        break;
      default:
        ui(t, e, n);
    }
  }
  function pm(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function ds(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          ((ne = s), vm(s, t));
        }
      pm(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (gm(t), (t = t.sibling));
  }
  function gm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ds(t), t.flags & 2048 && kn(9, t, t.return));
        break;
      case 3:
        ds(t);
        break;
      case 12:
        ds(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Yl(t))
          : ds(t);
        break;
      default:
        ds(t);
    }
  }
  function Yl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          ((ne = s), vm(s, t));
        }
      pm(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (kn(8, e, e.return), Yl(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Yl(e)));
          break;
        default:
          Yl(e);
      }
      t = t.sibling;
    }
  }
  function vm(t, e) {
    for (; ne !== null; ) {
      var n = ne;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          kn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var s = n.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          Ji(n.memoizedState.cache);
      }
      if (((s = n.child), s !== null)) ((s.return = n), (ne = s));
      else
        t: for (n = t; ne !== null; ) {
          s = ne;
          var u = s.sibling,
            h = s.return;
          if ((rm(s), s === n)) {
            ne = null;
            break t;
          }
          if (u !== null) {
            ((u.return = h), (ne = u));
            break t;
          }
          ne = h;
        }
    }
  }
  var Dx = {
      getCacheForType: function (t) {
        var e = le(Kt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return le(Kt).controller.signal;
      },
    },
    Nx = typeof WeakMap == "function" ? WeakMap : Map,
    jt = 0,
    Vt = null,
    yt = null,
    bt = 0,
    Dt = 0,
    Oe = null,
    Xn = !1,
    ci = !1,
    xu = !1,
    En = 0,
    Xt = 0,
    qn = 0,
    Ea = 0,
    Su = 0,
    ze = 0,
    fi = 0,
    ms = null,
    Te = null,
    bu = !1,
    kl = 0,
    ym = 0,
    Xl = 1 / 0,
    ql = null,
    Pn = null,
    It = 0,
    _n = null,
    hi = null,
    Cn = 0,
    Tu = 0,
    Au = null,
    xm = null,
    ps = 0,
    Mu = null;
  function Be() {
    return (jt & 2) !== 0 && bt !== 0 ? bt & -bt : k.T !== null ? Nu() : Vf();
  }
  function Sm() {
    if (ze === 0)
      if ((bt & 536870912) === 0 || At) {
        var t = Ws;
        ((Ws <<= 1), (Ws & 3932160) === 0 && (Ws = 262144), (ze = t));
      } else ze = 536870912;
    return ((t = Ne.current), t !== null && (t.flags |= 32), ze);
  }
  function Ae(t, e, n) {
    (((t === Vt && (Dt === 2 || Dt === 9)) || t.cancelPendingCommit !== null) &&
      (di(t, 0), Fn(t, bt, ze, !1)),
      Li(t, n),
      ((jt & 2) === 0 || t !== Vt) &&
        (t === Vt &&
          ((jt & 2) === 0 && (Ea |= n), Xt === 4 && Fn(t, bt, ze, !1)),
        ln(t)));
  }
  function bm(t, e, n) {
    if ((jt & 6) !== 0) throw Error(o(327));
    var s = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Vi(t, e),
      u = s ? zx(t, e) : Cu(t, e, !0),
      h = s;
    do {
      if (u === 0) {
        ci && !s && Fn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), h && !Rx(n))) {
          ((u = Cu(t, e, !1)), (h = !1));
          continue;
        }
        if (u === 2) {
          if (((h = e), t.errorRecoveryDisabledLanes & h)) var T = 0;
          else
            ((T = t.pendingLanes & -536870913),
              (T = T !== 0 ? T : T & 536870912 ? 536870912 : 0));
          if (T !== 0) {
            e = T;
            t: {
              var w = t;
              u = ms;
              var L = w.current.memoizedState.isDehydrated;
              if ((L && (di(w, T).flags |= 256), (T = Cu(w, T, !1)), T !== 2)) {
                if (xu && !L) {
                  ((w.errorRecoveryDisabledLanes |= h), (Ea |= h), (u = 4));
                  break t;
                }
                ((h = Te),
                  (Te = u),
                  h !== null &&
                    (Te === null ? (Te = h) : Te.push.apply(Te, h)));
              }
              u = T;
            }
            if (((h = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (di(t, 0), Fn(t, e, 0, !0));
          break;
        }
        t: {
          switch (((s = t), (h = u), h)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Fn(s, e, ze, !Xn);
              break t;
            case 2:
              Te = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && ((u = kl + 300 - ce()), 10 < u)) {
            if ((Fn(s, e, ze, !Xn), $s(s, 0, !0) !== 0)) break t;
            ((Cn = e),
              (s.timeoutHandle = Im(
                Tm.bind(
                  null,
                  s,
                  n,
                  Te,
                  ql,
                  bu,
                  e,
                  ze,
                  Ea,
                  fi,
                  Xn,
                  h,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break t;
          }
          Tm(s, n, Te, ql, bu, e, ze, Ea, fi, Xn, h, null, -0, 0);
        }
      }
      break;
    } while (!0);
    ln(t);
  }
  function Tm(t, e, n, s, u, h, T, w, L, F, J, $, K, Q) {
    if (
      ((t.timeoutHandle = -1),
      ($ = e.subtreeFlags),
      $ & 8192 || ($ & 16785408) === 16785408)
    ) {
      (($ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: fn,
      }),
        mm(e, h, $));
      var rt =
        (h & 62914560) === h ? kl - ce() : (h & 4194048) === h ? ym - ce() : 0;
      if (((rt = p1($, rt)), rt !== null)) {
        ((Cn = h),
          (t.cancelPendingCommit = rt(
            Nm.bind(null, t, e, h, n, s, u, T, w, L, J, $, null, K, Q),
          )),
          Fn(t, h, T, !F));
        return;
      }
    }
    Nm(t, e, h, n, s, u, T, w, L);
  }
  function Rx(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var s = 0; s < n.length; s++) {
          var u = n[s],
            h = u.getSnapshot;
          u = u.value;
          try {
            if (!je(h(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function Fn(t, e, n, s) {
    ((e &= ~Su),
      (e &= ~Ea),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      s && (t.warmLanes |= e),
      (s = t.expirationTimes));
    for (var u = e; 0 < u; ) {
      var h = 31 - we(u),
        T = 1 << h;
      ((s[h] = -1), (u &= ~T));
    }
    n !== 0 && Of(t, n, e);
  }
  function Pl() {
    return (jt & 6) === 0 ? (gs(0), !1) : !0;
  }
  function Eu() {
    if (yt !== null) {
      if (Dt === 0) var t = yt.return;
      else ((t = yt), (pn = ga = null), ko(t), (ai = null), (Ii = 0), (t = yt));
      for (; t !== null; ) ($d(t.alternate, t), (t = t.return));
      yt = null;
    }
  }
  function di(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Wx(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (Cn = 0),
      Eu(),
      (Vt = t),
      (yt = n = dn(t.current, null)),
      (bt = e),
      (Dt = 0),
      (Oe = null),
      (Xn = !1),
      (ci = Vi(t, e)),
      (xu = !1),
      (fi = ze = Su = Ea = qn = Xt = 0),
      (Te = ms = null),
      (bu = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var s = t.entangledLanes;
    if (s !== 0)
      for (t = t.entanglements, s &= e; 0 < s; ) {
        var u = 31 - we(s),
          h = 1 << u;
        ((e |= t[u]), (s &= ~h));
      }
    return ((En = e), fl(), n);
  }
  function Am(t, e) {
    ((gt = null),
      (k.H = ls),
      e === ni || e === xl
        ? ((e = Gh()), (Dt = 3))
        : e === Do
          ? ((e = Gh()), (Dt = 4))
          : (Dt =
              e === au
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Oe = e),
      yt === null && ((Xt = 1), zl(t, He(e, t.current))));
  }
  function Mm() {
    var t = Ne.current;
    return t === null
      ? !0
      : (bt & 4194048) === bt
        ? Xe === null
        : (bt & 62914560) === bt || (bt & 536870912) !== 0
          ? t === Xe
          : !1;
  }
  function Em() {
    var t = k.H;
    return ((k.H = ls), t === null ? ls : t);
  }
  function Cm() {
    var t = k.A;
    return ((k.A = Dx), t);
  }
  function _l() {
    ((Xt = 4),
      Xn || ((bt & 4194048) !== bt && Ne.current !== null) || (ci = !0),
      ((qn & 134217727) === 0 && (Ea & 134217727) === 0) ||
        Vt === null ||
        Fn(Vt, bt, ze, !1));
  }
  function Cu(t, e, n) {
    var s = jt;
    jt |= 2;
    var u = Em(),
      h = Cm();
    ((Vt !== t || bt !== e) && ((ql = null), di(t, e)), (e = !1));
    var T = Xt;
    t: do
      try {
        if (Dt !== 0 && yt !== null) {
          var w = yt,
            L = Oe;
          switch (Dt) {
            case 8:
              (Eu(), (T = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ne.current === null && (e = !0);
              var F = Dt;
              if (((Dt = 0), (Oe = null), mi(t, w, L, F), n && ci)) {
                T = 0;
                break t;
              }
              break;
            default:
              ((F = Dt), (Dt = 0), (Oe = null), mi(t, w, L, F));
          }
        }
        (Ox(), (T = Xt));
        break;
      } catch (J) {
        Am(t, J);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (pn = ga = null),
      (jt = s),
      (k.H = u),
      (k.A = h),
      yt === null && ((Vt = null), (bt = 0), fl()),
      T
    );
  }
  function Ox() {
    for (; yt !== null; ) wm(yt);
  }
  function zx(t, e) {
    var n = jt;
    jt |= 2;
    var s = Em(),
      u = Cm();
    Vt !== t || bt !== e
      ? ((ql = null), (Xl = ce() + 500), di(t, e))
      : (ci = Vi(t, e));
    t: do
      try {
        if (Dt !== 0 && yt !== null) {
          e = yt;
          var h = Oe;
          e: switch (Dt) {
            case 1:
              ((Dt = 0), (Oe = null), mi(t, e, h, 1));
              break;
            case 2:
            case 9:
              if (Uh(h)) {
                ((Dt = 0), (Oe = null), jm(e));
                break;
              }
              ((e = function () {
                ((Dt !== 2 && Dt !== 9) || Vt !== t || (Dt = 7), ln(t));
              }),
                h.then(e, e));
              break t;
            case 3:
              Dt = 7;
              break t;
            case 4:
              Dt = 5;
              break t;
            case 7:
              Uh(h)
                ? ((Dt = 0), (Oe = null), jm(e))
                : ((Dt = 0), (Oe = null), mi(t, e, h, 7));
              break;
            case 5:
              var T = null;
              switch (yt.tag) {
                case 26:
                  T = yt.memoizedState;
                case 5:
                case 27:
                  var w = yt;
                  if (T ? dp(T) : w.stateNode.complete) {
                    ((Dt = 0), (Oe = null));
                    var L = w.sibling;
                    if (L !== null) yt = L;
                    else {
                      var F = w.return;
                      F !== null ? ((yt = F), Fl(F)) : (yt = null);
                    }
                    break e;
                  }
              }
              ((Dt = 0), (Oe = null), mi(t, e, h, 5));
              break;
            case 6:
              ((Dt = 0), (Oe = null), mi(t, e, h, 6));
              break;
            case 8:
              (Eu(), (Xt = 6));
              break t;
            default:
              throw Error(o(462));
          }
        }
        Bx();
        break;
      } catch (J) {
        Am(t, J);
      }
    while (!0);
    return (
      (pn = ga = null),
      (k.H = s),
      (k.A = u),
      (jt = n),
      yt !== null ? 0 : ((Vt = null), (bt = 0), fl(), Xt)
    );
  }
  function Bx() {
    for (; yt !== null && !Fs(); ) wm(yt);
  }
  function wm(t) {
    var e = Wd(t.alternate, t, En);
    ((t.memoizedProps = t.pendingProps), e === null ? Fl(t) : (yt = e));
  }
  function jm(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = _d(n, e, e.pendingProps, e.type, void 0, bt);
        break;
      case 11:
        e = _d(n, e, e.pendingProps, e.type.render, e.ref, bt);
        break;
      case 5:
        ko(e);
      default:
        ($d(n, e), (e = yt = Ch(e, En)), (e = Wd(n, e, En)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Fl(t) : (yt = e));
  }
  function mi(t, e, n, s) {
    ((pn = ga = null), ko(e), (ai = null), (Ii = 0));
    var u = e.return;
    try {
      if (Tx(t, u, e, n, bt)) {
        ((Xt = 1), zl(t, He(n, t.current)), (yt = null));
        return;
      }
    } catch (h) {
      if (u !== null) throw ((yt = u), h);
      ((Xt = 1), zl(t, He(n, t.current)), (yt = null));
      return;
    }
    e.flags & 32768
      ? (At || s === 1
          ? (t = !0)
          : ci || (bt & 536870912) !== 0
            ? (t = !1)
            : ((Xn = t = !0),
              (s === 2 || s === 9 || s === 3 || s === 6) &&
                ((s = Ne.current),
                s !== null && s.tag === 13 && (s.flags |= 16384))),
        Dm(e, t))
      : Fl(e);
  }
  function Fl(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Dm(e, Xn);
        return;
      }
      t = e.return;
      var n = Ex(e.alternate, e, En);
      if (n !== null) {
        yt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        yt = e;
        return;
      }
      yt = e = t;
    } while (e !== null);
    Xt === 0 && (Xt = 5);
  }
  function Dm(t, e) {
    do {
      var n = Cx(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (yt = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        yt = t;
        return;
      }
      yt = t = n;
    } while (t !== null);
    ((Xt = 6), (yt = null));
  }
  function Nm(t, e, n, s, u, h, T, w, L) {
    t.cancelPendingCommit = null;
    do Kl();
    while (It !== 0);
    if ((jt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      if (
        ((h = e.lanes | e.childLanes),
        (h |= mo),
        dy(t, n, h, T, w, L),
        t === Vt && ((yt = Vt = null), (bt = 0)),
        (hi = e),
        (_n = t),
        (Cn = n),
        (Tu = h),
        (Au = u),
        (xm = s),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Hx(Ba, function () {
              return (Vm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (s = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || s)
      ) {
        ((s = k.T), (k.T = null), (u = P.p), (P.p = 2), (T = jt), (jt |= 4));
        try {
          wx(t, e, n);
        } finally {
          ((jt = T), (P.p = u), (k.T = s));
        }
      }
      ((It = 1), Rm(), Om(), zm());
    }
  }
  function Rm() {
    if (It === 1) {
      It = 0;
      var t = _n,
        e = hi,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = k.T), (k.T = null));
        var s = P.p;
        P.p = 2;
        var u = jt;
        jt |= 4;
        try {
          fm(e, t);
          var h = Hu,
            T = vh(t.containerInfo),
            w = h.focusedElem,
            L = h.selectionRange;
          if (
            T !== w &&
            w &&
            w.ownerDocument &&
            gh(w.ownerDocument.documentElement, w)
          ) {
            if (L !== null && oo(w)) {
              var F = L.start,
                J = L.end;
              if ((J === void 0 && (J = F), "selectionStart" in w))
                ((w.selectionStart = F),
                  (w.selectionEnd = Math.min(J, w.value.length)));
              else {
                var $ = w.ownerDocument || document,
                  K = ($ && $.defaultView) || window;
                if (K.getSelection) {
                  var Q = K.getSelection(),
                    rt = w.textContent.length,
                    dt = Math.min(L.start, rt),
                    zt = L.end === void 0 ? dt : Math.min(L.end, rt);
                  !Q.extend && dt > zt && ((T = zt), (zt = dt), (dt = T));
                  var X = ph(w, dt),
                    Y = ph(w, zt);
                  if (
                    X &&
                    Y &&
                    (Q.rangeCount !== 1 ||
                      Q.anchorNode !== X.node ||
                      Q.anchorOffset !== X.offset ||
                      Q.focusNode !== Y.node ||
                      Q.focusOffset !== Y.offset)
                  ) {
                    var _ = $.createRange();
                    (_.setStart(X.node, X.offset),
                      Q.removeAllRanges(),
                      dt > zt
                        ? (Q.addRange(_), Q.extend(Y.node, Y.offset))
                        : (_.setEnd(Y.node, Y.offset), Q.addRange(_)));
                  }
                }
              }
            }
            for ($ = [], Q = w; (Q = Q.parentNode); )
              Q.nodeType === 1 &&
                $.push({ element: Q, left: Q.scrollLeft, top: Q.scrollTop });
            for (
              typeof w.focus == "function" && w.focus(), w = 0;
              w < $.length;
              w++
            ) {
              var W = $[w];
              ((W.element.scrollLeft = W.left), (W.element.scrollTop = W.top));
            }
          }
          ((sr = !!Uu), (Hu = Uu = null));
        } finally {
          ((jt = u), (P.p = s), (k.T = n));
        }
      }
      ((t.current = e), (It = 2));
    }
  }
  function Om() {
    if (It === 2) {
      It = 0;
      var t = _n,
        e = hi,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = k.T), (k.T = null));
        var s = P.p;
        P.p = 2;
        var u = jt;
        jt |= 4;
        try {
          lm(t, e.alternate, e);
        } finally {
          ((jt = u), (P.p = s), (k.T = n));
        }
      }
      It = 3;
    }
  }
  function zm() {
    if (It === 4 || It === 3) {
      ((It = 0), Ks());
      var t = _n,
        e = hi,
        n = Cn,
        s = xm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (It = 5)
        : ((It = 0), (hi = _n = null), Bm(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (
        (u === 0 && (Pn = null),
        qr(n),
        (e = e.stateNode),
        Ce && typeof Ce.onCommitFiberRoot == "function")
      )
        try {
          Ce.onCommitFiberRoot(Bi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (s !== null) {
        ((e = k.T), (u = P.p), (P.p = 2), (k.T = null));
        try {
          for (var h = t.onRecoverableError, T = 0; T < s.length; T++) {
            var w = s[T];
            h(w.value, { componentStack: w.stack });
          }
        } finally {
          ((k.T = e), (P.p = u));
        }
      }
      ((Cn & 3) !== 0 && Kl(),
        ln(t),
        (u = t.pendingLanes),
        (n & 261930) !== 0 && (u & 42) !== 0
          ? t === Mu
            ? ps++
            : ((ps = 0), (Mu = t))
          : (ps = 0),
        gs(0));
    }
  }
  function Bm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), Ji(e)));
  }
  function Kl() {
    return (Rm(), Om(), zm(), Vm());
  }
  function Vm() {
    if (It !== 5) return !1;
    var t = _n,
      e = Tu;
    Tu = 0;
    var n = qr(Cn),
      s = k.T,
      u = P.p;
    try {
      ((P.p = 32 > n ? 32 : n), (k.T = null), (n = Au), (Au = null));
      var h = _n,
        T = Cn;
      if (((It = 0), (hi = _n = null), (Cn = 0), (jt & 6) !== 0))
        throw Error(o(331));
      var w = jt;
      if (
        ((jt |= 4),
        gm(h.current),
        dm(h, h.current, T, n),
        (jt = w),
        gs(0, !1),
        Ce && typeof Ce.onPostCommitFiberRoot == "function")
      )
        try {
          Ce.onPostCommitFiberRoot(Bi, h);
        } catch {}
      return !0;
    } finally {
      ((P.p = u), (k.T = s), Bm(t, e));
    }
  }
  function Lm(t, e, n) {
    ((e = He(n, e)),
      (e = nu(t.stateNode, e, 2)),
      (t = Hn(t, e, 2)),
      t !== null && (Li(t, 2), ln(t)));
  }
  function Nt(t, e, n) {
    if (t.tag === 3) Lm(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Lm(e, t, n);
          break;
        } else if (e.tag === 1) {
          var s = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (Pn === null || !Pn.has(s)))
          ) {
            ((t = He(n, t)),
              (n = Ud(2)),
              (s = Hn(e, n, 2)),
              s !== null && (Hd(n, s, e, t), Li(s, 2), ln(s)));
            break;
          }
        }
        e = e.return;
      }
  }
  function wu(t, e, n) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new Nx();
      var u = new Set();
      s.set(e, u);
    } else ((u = s.get(e)), u === void 0 && ((u = new Set()), s.set(e, u)));
    u.has(n) ||
      ((xu = !0), u.add(n), (t = Vx.bind(null, t, e, n)), e.then(t, t));
  }
  function Vx(t, e, n) {
    var s = t.pingCache;
    (s !== null && s.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Vt === t &&
        (bt & n) === n &&
        (Xt === 4 || (Xt === 3 && (bt & 62914560) === bt && 300 > ce() - kl)
          ? (jt & 2) === 0 && di(t, 0)
          : (Su |= n),
        fi === bt && (fi = 0)),
      ln(t));
  }
  function Um(t, e) {
    (e === 0 && (e = Rf()), (t = da(t, e)), t !== null && (Li(t, e), ln(t)));
  }
  function Lx(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Um(t, n));
  }
  function Ux(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var s = t.stateNode,
          u = t.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        s = t.stateNode;
        break;
      case 22:
        s = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (s !== null && s.delete(e), Um(t, n));
  }
  function Hx(t, e) {
    return za(t, e);
  }
  var Ql = null,
    pi = null,
    ju = !1,
    Zl = !1,
    Du = !1,
    Kn = 0;
  function ln(t) {
    (t !== pi &&
      t.next === null &&
      (pi === null ? (Ql = pi = t) : (pi = pi.next = t)),
      (Zl = !0),
      ju || ((ju = !0), Yx()));
  }
  function gs(t, e) {
    if (!Du && Zl) {
      Du = !0;
      do
        for (var n = !1, s = Ql; s !== null; ) {
          if (t !== 0) {
            var u = s.pendingLanes;
            if (u === 0) var h = 0;
            else {
              var T = s.suspendedLanes,
                w = s.pingedLanes;
              ((h = (1 << (31 - we(42 | t) + 1)) - 1),
                (h &= u & ~(T & ~w)),
                (h = h & 201326741 ? (h & 201326741) | 1 : h ? h | 2 : 0));
            }
            h !== 0 && ((n = !0), km(s, h));
          } else
            ((h = bt),
              (h = $s(
                s,
                s === Vt ? h : 0,
                s.cancelPendingCommit !== null || s.timeoutHandle !== -1,
              )),
              (h & 3) === 0 || Vi(s, h) || ((n = !0), km(s, h)));
          s = s.next;
        }
      while (n);
      Du = !1;
    }
  }
  function Gx() {
    Hm();
  }
  function Hm() {
    Zl = ju = !1;
    var t = 0;
    Kn !== 0 && Jx() && (t = Kn);
    for (var e = ce(), n = null, s = Ql; s !== null; ) {
      var u = s.next,
        h = Gm(s, e);
      (h === 0
        ? ((s.next = null),
          n === null ? (Ql = u) : (n.next = u),
          u === null && (pi = n))
        : ((n = s), (t !== 0 || (h & 3) !== 0) && (Zl = !0)),
        (s = u));
    }
    ((It !== 0 && It !== 5) || gs(t), Kn !== 0 && (Kn = 0));
  }
  function Gm(t, e) {
    for (
      var n = t.suspendedLanes,
        s = t.pingedLanes,
        u = t.expirationTimes,
        h = t.pendingLanes & -62914561;
      0 < h;
    ) {
      var T = 31 - we(h),
        w = 1 << T,
        L = u[T];
      (L === -1
        ? ((w & n) === 0 || (w & s) !== 0) && (u[T] = hy(w, e))
        : L <= e && (t.expiredLanes |= w),
        (h &= ~w));
    }
    if (
      ((e = Vt),
      (n = bt),
      (n = $s(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (s = t.callbackNode),
      n === 0 ||
        (t === e && (Dt === 2 || Dt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        s !== null && s !== null && sa(s),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Vi(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((s !== null && sa(s), qr(n))) {
        case 2:
        case 8:
          n = Zs;
          break;
        case 32:
          n = Ba;
          break;
        case 268435456:
          n = ra;
          break;
        default:
          n = Ba;
      }
      return (
        (s = Ym.bind(null, t)),
        (n = za(n, s)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      s !== null && s !== null && sa(s),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Ym(t, e) {
    if (It !== 0 && It !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Kl() && t.callbackNode !== n) return null;
    var s = bt;
    return (
      (s = $s(
        t,
        t === Vt ? s : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      s === 0
        ? null
        : (bm(t, s, e),
          Gm(t, ce()),
          t.callbackNode != null && t.callbackNode === n
            ? Ym.bind(null, t)
            : null)
    );
  }
  function km(t, e) {
    if (Kl()) return null;
    bm(t, e, !0);
  }
  function Yx() {
    Ix(function () {
      (jt & 6) !== 0 ? za(la, Gx) : Hm();
    });
  }
  function Nu() {
    if (Kn === 0) {
      var t = ti;
      (t === 0 && ((t = Js), (Js <<= 1), (Js & 261888) === 0 && (Js = 256)),
        (Kn = t));
    }
    return Kn;
  }
  function Xm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : al("" + t);
  }
  function qm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function kx(t, e, n, s, u) {
    if (e === "submit" && n && n.stateNode === u) {
      var h = Xm((u[ve] || null).action),
        T = s.submitter;
      T &&
        ((e = (e = T[ve] || null)
          ? Xm(e.formAction)
          : T.getAttribute("formAction")),
        e !== null && ((h = e), (T = null)));
      var w = new rl("action", "action", null, s, u);
      t.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (s.defaultPrevented) {
                if (Kn !== 0) {
                  var L = T ? qm(u, T) : new FormData(u);
                  Jo(
                    n,
                    { pending: !0, data: L, method: u.method, action: h },
                    null,
                    L,
                  );
                }
              } else
                typeof h == "function" &&
                  (w.preventDefault(),
                  (L = T ? qm(u, T) : new FormData(u)),
                  Jo(
                    n,
                    { pending: !0, data: L, method: u.method, action: h },
                    h,
                    L,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Ru = 0; Ru < ho.length; Ru++) {
    var Ou = ho[Ru],
      Xx = Ou.toLowerCase(),
      qx = Ou[0].toUpperCase() + Ou.slice(1);
    Ke(Xx, "on" + qx);
  }
  (Ke(Sh, "onAnimationEnd"),
    Ke(bh, "onAnimationIteration"),
    Ke(Th, "onAnimationStart"),
    Ke("dblclick", "onDoubleClick"),
    Ke("focusin", "onFocus"),
    Ke("focusout", "onBlur"),
    Ke(sx, "onTransitionRun"),
    Ke(lx, "onTransitionStart"),
    Ke(rx, "onTransitionCancel"),
    Ke(Ah, "onTransitionEnd"),
    Ya("onMouseEnter", ["mouseout", "mouseover"]),
    Ya("onMouseLeave", ["mouseout", "mouseover"]),
    Ya("onPointerEnter", ["pointerout", "pointerover"]),
    Ya("onPointerLeave", ["pointerout", "pointerover"]),
    ua(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    ua(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ua("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ua(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    ua(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ua(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var vs =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Px = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(vs),
    );
  function Pm(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var s = t[n],
        u = s.event;
      s = s.listeners;
      t: {
        var h = void 0;
        if (e)
          for (var T = s.length - 1; 0 <= T; T--) {
            var w = s[T],
              L = w.instance,
              F = w.currentTarget;
            if (((w = w.listener), L !== h && u.isPropagationStopped()))
              break t;
            ((h = w), (u.currentTarget = F));
            try {
              h(u);
            } catch (J) {
              cl(J);
            }
            ((u.currentTarget = null), (h = L));
          }
        else
          for (T = 0; T < s.length; T++) {
            if (
              ((w = s[T]),
              (L = w.instance),
              (F = w.currentTarget),
              (w = w.listener),
              L !== h && u.isPropagationStopped())
            )
              break t;
            ((h = w), (u.currentTarget = F));
            try {
              h(u);
            } catch (J) {
              cl(J);
            }
            ((u.currentTarget = null), (h = L));
          }
      }
    }
  }
  function xt(t, e) {
    var n = e[Pr];
    n === void 0 && (n = e[Pr] = new Set());
    var s = t + "__bubble";
    n.has(s) || (_m(e, t, 2, !1), n.add(s));
  }
  function zu(t, e, n) {
    var s = 0;
    (e && (s |= 4), _m(n, t, s, e));
  }
  var Jl = "_reactListening" + Math.random().toString(36).slice(2);
  function Bu(t) {
    if (!t[Jl]) {
      ((t[Jl] = !0),
        Hf.forEach(function (n) {
          n !== "selectionchange" && (Px.has(n) || zu(n, !1, t), zu(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Jl] || ((e[Jl] = !0), zu("selectionchange", !1, e));
    }
  }
  function _m(t, e, n, s) {
    switch (Sp(e)) {
      case 2:
        var u = y1;
        break;
      case 8:
        u = x1;
        break;
      default:
        u = Zu;
    }
    ((n = u.bind(null, e, n, t)),
      (u = void 0),
      !$r ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (u = !0),
      s
        ? u !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: u })
          : t.addEventListener(e, n, !0)
        : u !== void 0
          ? t.addEventListener(e, n, { passive: u })
          : t.addEventListener(e, n, !1));
  }
  function Vu(t, e, n, s, u) {
    var h = s;
    if ((e & 1) === 0 && (e & 2) === 0 && s !== null)
      t: for (;;) {
        if (s === null) return;
        var T = s.tag;
        if (T === 3 || T === 4) {
          var w = s.stateNode.containerInfo;
          if (w === u) break;
          if (T === 4)
            for (T = s.return; T !== null; ) {
              var L = T.tag;
              if ((L === 3 || L === 4) && T.stateNode.containerInfo === u)
                return;
              T = T.return;
            }
          for (; w !== null; ) {
            if (((T = Ua(w)), T === null)) return;
            if (((L = T.tag), L === 5 || L === 6 || L === 26 || L === 27)) {
              s = h = T;
              continue t;
            }
            w = w.parentNode;
          }
        }
        s = s.return;
      }
    Jf(function () {
      var F = h,
        J = Wr(n),
        $ = [];
      t: {
        var K = Mh.get(t);
        if (K !== void 0) {
          var Q = rl,
            rt = t;
          switch (t) {
            case "keypress":
              if (sl(n) === 0) break t;
            case "keydown":
            case "keyup":
              Q = Uy;
              break;
            case "focusin":
              ((rt = "focus"), (Q = ao));
              break;
            case "focusout":
              ((rt = "blur"), (Q = ao));
              break;
            case "beforeblur":
            case "afterblur":
              Q = ao;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = $f;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Ey;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = Yy;
              break;
            case Sh:
            case bh:
            case Th:
              Q = jy;
              break;
            case Ah:
              Q = Xy;
              break;
            case "scroll":
            case "scrollend":
              Q = Ay;
              break;
            case "wheel":
              Q = Py;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Ny;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = eh;
              break;
            case "toggle":
            case "beforetoggle":
              Q = Fy;
          }
          var dt = (e & 4) !== 0,
            zt = !dt && (t === "scroll" || t === "scrollend"),
            X = dt ? (K !== null ? K + "Capture" : null) : K;
          dt = [];
          for (var Y = F, _; Y !== null; ) {
            var W = Y;
            if (
              ((_ = W.stateNode),
              (W = W.tag),
              (W !== 5 && W !== 26 && W !== 27) ||
                _ === null ||
                X === null ||
                ((W = Gi(Y, X)), W != null && dt.push(ys(Y, W, _))),
              zt)
            )
              break;
            Y = Y.return;
          }
          0 < dt.length &&
            ((K = new Q(K, rt, null, n, J)),
            $.push({ event: K, listeners: dt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((K = t === "mouseover" || t === "pointerover"),
            (Q = t === "mouseout" || t === "pointerout"),
            K &&
              n !== Jr &&
              (rt = n.relatedTarget || n.fromElement) &&
              (Ua(rt) || rt[La]))
          )
            break t;
          if (
            (Q || K) &&
            ((K =
              J.window === J
                ? J
                : (K = J.ownerDocument)
                  ? K.defaultView || K.parentWindow
                  : window),
            Q
              ? ((rt = n.relatedTarget || n.toElement),
                (Q = F),
                (rt = rt ? Ua(rt) : null),
                rt !== null &&
                  ((zt = l(rt)),
                  (dt = rt.tag),
                  rt !== zt || (dt !== 5 && dt !== 27 && dt !== 6)) &&
                  (rt = null))
              : ((Q = null), (rt = F)),
            Q !== rt)
          ) {
            if (
              ((dt = $f),
              (W = "onMouseLeave"),
              (X = "onMouseEnter"),
              (Y = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((dt = eh),
                (W = "onPointerLeave"),
                (X = "onPointerEnter"),
                (Y = "pointer")),
              (zt = Q == null ? K : Hi(Q)),
              (_ = rt == null ? K : Hi(rt)),
              (K = new dt(W, Y + "leave", Q, n, J)),
              (K.target = zt),
              (K.relatedTarget = _),
              (W = null),
              Ua(J) === F &&
                ((dt = new dt(X, Y + "enter", rt, n, J)),
                (dt.target = _),
                (dt.relatedTarget = zt),
                (W = dt)),
              (zt = W),
              Q && rt)
            )
              e: {
                for (dt = _x, X = Q, Y = rt, _ = 0, W = X; W; W = dt(W)) _++;
                W = 0;
                for (var ft = Y; ft; ft = dt(ft)) W++;
                for (; 0 < _ - W; ) ((X = dt(X)), _--);
                for (; 0 < W - _; ) ((Y = dt(Y)), W--);
                for (; _--; ) {
                  if (X === Y || (Y !== null && X === Y.alternate)) {
                    dt = X;
                    break e;
                  }
                  ((X = dt(X)), (Y = dt(Y)));
                }
                dt = null;
              }
            else dt = null;
            (Q !== null && Fm($, K, Q, dt, !1),
              rt !== null && zt !== null && Fm($, zt, rt, dt, !0));
          }
        }
        t: {
          if (
            ((K = F ? Hi(F) : window),
            (Q = K.nodeName && K.nodeName.toLowerCase()),
            Q === "select" || (Q === "input" && K.type === "file"))
          )
            var Et = uh;
          else if (rh(K))
            if (ch) Et = nx;
            else {
              Et = tx;
              var ut = $y;
            }
          else
            ((Q = K.nodeName),
              !Q ||
              Q.toLowerCase() !== "input" ||
              (K.type !== "checkbox" && K.type !== "radio")
                ? F && Zr(F.elementType) && (Et = uh)
                : (Et = ex));
          if (Et && (Et = Et(t, F))) {
            oh($, Et, n, J);
            break t;
          }
          (ut && ut(t, K, F),
            t === "focusout" &&
              F &&
              K.type === "number" &&
              F.memoizedProps.value != null &&
              Qr(K, "number", K.value));
        }
        switch (((ut = F ? Hi(F) : window), t)) {
          case "focusin":
            (rh(ut) || ut.contentEditable === "true") &&
              ((Fa = ut), (uo = F), (Ki = null));
            break;
          case "focusout":
            Ki = uo = Fa = null;
            break;
          case "mousedown":
            co = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((co = !1), yh($, n, J));
            break;
          case "selectionchange":
            if (ix) break;
          case "keydown":
          case "keyup":
            yh($, n, J);
        }
        var vt;
        if (so)
          t: {
            switch (t) {
              case "compositionstart":
                var Tt = "onCompositionStart";
                break t;
              case "compositionend":
                Tt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Tt = "onCompositionUpdate";
                break t;
            }
            Tt = void 0;
          }
        else
          _a
            ? sh(t, n) && (Tt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (Tt = "onCompositionStart");
        (Tt &&
          (nh &&
            n.locale !== "ko" &&
            (_a || Tt !== "onCompositionStart"
              ? Tt === "onCompositionEnd" && _a && (vt = Wf())
              : ((Rn = J),
                (to = "value" in Rn ? Rn.value : Rn.textContent),
                (_a = !0))),
          (ut = Wl(F, Tt)),
          0 < ut.length &&
            ((Tt = new th(Tt, t, null, n, J)),
            $.push({ event: Tt, listeners: ut }),
            vt
              ? (Tt.data = vt)
              : ((vt = lh(n)), vt !== null && (Tt.data = vt)))),
          (vt = Qy ? Zy(t, n) : Jy(t, n)) &&
            ((Tt = Wl(F, "onBeforeInput")),
            0 < Tt.length &&
              ((ut = new th("onBeforeInput", "beforeinput", null, n, J)),
              $.push({ event: ut, listeners: Tt }),
              (ut.data = vt))),
          kx($, t, F, n, J));
      }
      Pm($, e);
    });
  }
  function ys(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Wl(t, e) {
    for (var n = e + "Capture", s = []; t !== null; ) {
      var u = t,
        h = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          h === null ||
          ((u = Gi(t, n)),
          u != null && s.unshift(ys(t, u, h)),
          (u = Gi(t, e)),
          u != null && s.push(ys(t, u, h))),
        t.tag === 3)
      )
        return s;
      t = t.return;
    }
    return [];
  }
  function _x(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Fm(t, e, n, s, u) {
    for (var h = e._reactName, T = []; n !== null && n !== s; ) {
      var w = n,
        L = w.alternate,
        F = w.stateNode;
      if (((w = w.tag), L !== null && L === s)) break;
      ((w !== 5 && w !== 26 && w !== 27) ||
        F === null ||
        ((L = F),
        u
          ? ((F = Gi(n, h)), F != null && T.unshift(ys(n, F, L)))
          : u || ((F = Gi(n, h)), F != null && T.push(ys(n, F, L)))),
        (n = n.return));
    }
    T.length !== 0 && t.push({ event: e, listeners: T });
  }
  var Fx = /\r\n?/g,
    Kx = /\u0000|\uFFFD/g;
  function Km(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Fx,
        `
`,
      )
      .replace(Kx, "");
  }
  function Qm(t, e) {
    return ((e = Km(e)), Km(t) === e);
  }
  function Ot(t, e, n, s, u, h) {
    switch (n) {
      case "children":
        typeof s == "string"
          ? e === "body" || (e === "textarea" && s === "") || Xa(t, s)
          : (typeof s == "number" || typeof s == "bigint") &&
            e !== "body" &&
            Xa(t, "" + s);
        break;
      case "className":
        el(t, "class", s);
        break;
      case "tabIndex":
        el(t, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        el(t, n, s);
        break;
      case "style":
        Qf(t, s, h);
        break;
      case "data":
        if (e !== "object") {
          el(t, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "symbol" ||
          typeof s == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((s = al("" + s)), t.setAttribute(n, s));
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof h == "function" &&
            (n === "formAction"
              ? (e !== "input" && Ot(t, e, "name", u.name, u, null),
                Ot(t, e, "formEncType", u.formEncType, u, null),
                Ot(t, e, "formMethod", u.formMethod, u, null),
                Ot(t, e, "formTarget", u.formTarget, u, null))
              : (Ot(t, e, "encType", u.encType, u, null),
                Ot(t, e, "method", u.method, u, null),
                Ot(t, e, "target", u.target, u, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((s = al("" + s)), t.setAttribute(n, s));
        break;
      case "onClick":
        s != null && (t.onclick = fn);
        break;
      case "onScroll":
        s != null && xt("scroll", t);
        break;
      case "onScrollEnd":
        s != null && xt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(o(61));
          if (((n = s.__html), n != null)) {
            if (u.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        t.muted = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "boolean" ||
          typeof s == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = al("" + s)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        s != null && typeof s != "function" && typeof s != "symbol"
          ? t.setAttribute(n, "" + s)
          : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        s && typeof s != "function" && typeof s != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        s === !0
          ? t.setAttribute(n, "")
          : s !== !1 &&
              s != null &&
              typeof s != "function" &&
              typeof s != "symbol"
            ? t.setAttribute(n, s)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        !isNaN(s) &&
        1 <= s
          ? t.setAttribute(n, s)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s)
          ? t.removeAttribute(n)
          : t.setAttribute(n, s);
        break;
      case "popover":
        (xt("beforetoggle", t), xt("toggle", t), tl(t, "popover", s));
        break;
      case "xlinkActuate":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
        break;
      case "xlinkArcrole":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
        break;
      case "xlinkRole":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:role", s);
        break;
      case "xlinkShow":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:show", s);
        break;
      case "xlinkTitle":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:title", s);
        break;
      case "xlinkType":
        cn(t, "http://www.w3.org/1999/xlink", "xlink:type", s);
        break;
      case "xmlBase":
        cn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
        break;
      case "xmlLang":
        cn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
        break;
      case "xmlSpace":
        cn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
        break;
      case "is":
        tl(t, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = by.get(n) || n), tl(t, n, s));
    }
  }
  function Lu(t, e, n, s, u, h) {
    switch (n) {
      case "style":
        Qf(t, s, h);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(o(61));
          if (((n = s.__html), n != null)) {
            if (u.children != null) throw Error(o(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof s == "string"
          ? Xa(t, s)
          : (typeof s == "number" || typeof s == "bigint") && Xa(t, "" + s);
        break;
      case "onScroll":
        s != null && xt("scroll", t);
        break;
      case "onScrollEnd":
        s != null && xt("scrollend", t);
        break;
      case "onClick":
        s != null && (t.onclick = fn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Gf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((u = n.endsWith("Capture")),
              (e = n.slice(2, u ? n.length - 7 : void 0)),
              (h = t[ve] || null),
              (h = h != null ? h[n] : null),
              typeof h == "function" && t.removeEventListener(e, h, u),
              typeof s == "function")
            ) {
              (typeof h != "function" &&
                h !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, s, u));
              break t;
            }
            n in t
              ? (t[n] = s)
              : s === !0
                ? t.setAttribute(n, "")
                : tl(t, n, s);
          }
    }
  }
  function oe(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (xt("error", t), xt("load", t));
        var s = !1,
          u = !1,
          h;
        for (h in n)
          if (n.hasOwnProperty(h)) {
            var T = n[h];
            if (T != null)
              switch (h) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Ot(t, e, h, T, n, null);
              }
          }
        (u && Ot(t, e, "srcSet", n.srcSet, n, null),
          s && Ot(t, e, "src", n.src, n, null));
        return;
      case "input":
        xt("invalid", t);
        var w = (h = T = u = null),
          L = null,
          F = null;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var J = n[s];
            if (J != null)
              switch (s) {
                case "name":
                  u = J;
                  break;
                case "type":
                  T = J;
                  break;
                case "checked":
                  L = J;
                  break;
                case "defaultChecked":
                  F = J;
                  break;
                case "value":
                  h = J;
                  break;
                case "defaultValue":
                  w = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null) throw Error(o(137, e));
                  break;
                default:
                  Ot(t, e, s, J, n, null);
              }
          }
        Pf(t, h, w, L, F, T, u, !1);
        return;
      case "select":
        (xt("invalid", t), (s = T = h = null));
        for (u in n)
          if (n.hasOwnProperty(u) && ((w = n[u]), w != null))
            switch (u) {
              case "value":
                h = w;
                break;
              case "defaultValue":
                T = w;
                break;
              case "multiple":
                s = w;
              default:
                Ot(t, e, u, w, n, null);
            }
        ((e = h),
          (n = T),
          (t.multiple = !!s),
          e != null ? ka(t, !!s, e, !1) : n != null && ka(t, !!s, n, !0));
        return;
      case "textarea":
        (xt("invalid", t), (h = u = s = null));
        for (T in n)
          if (n.hasOwnProperty(T) && ((w = n[T]), w != null))
            switch (T) {
              case "value":
                s = w;
                break;
              case "defaultValue":
                u = w;
                break;
              case "children":
                h = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(o(91));
                break;
              default:
                Ot(t, e, T, w, n, null);
            }
        Ff(t, s, u, h);
        return;
      case "option":
        for (L in n)
          if (n.hasOwnProperty(L) && ((s = n[L]), s != null))
            switch (L) {
              case "selected":
                t.selected =
                  s && typeof s != "function" && typeof s != "symbol";
                break;
              default:
                Ot(t, e, L, s, n, null);
            }
        return;
      case "dialog":
        (xt("beforetoggle", t),
          xt("toggle", t),
          xt("cancel", t),
          xt("close", t));
        break;
      case "iframe":
      case "object":
        xt("load", t);
        break;
      case "video":
      case "audio":
        for (s = 0; s < vs.length; s++) xt(vs[s], t);
        break;
      case "image":
        (xt("error", t), xt("load", t));
        break;
      case "details":
        xt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (xt("error", t), xt("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (F in n)
          if (n.hasOwnProperty(F) && ((s = n[F]), s != null))
            switch (F) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Ot(t, e, F, s, n, null);
            }
        return;
      default:
        if (Zr(e)) {
          for (J in n)
            n.hasOwnProperty(J) &&
              ((s = n[J]), s !== void 0 && Lu(t, e, J, s, n, void 0));
          return;
        }
    }
    for (w in n)
      n.hasOwnProperty(w) && ((s = n[w]), s != null && Ot(t, e, w, s, n, null));
  }
  function Qx(t, e, n, s) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null,
          h = null,
          T = null,
          w = null,
          L = null,
          F = null,
          J = null;
        for (Q in n) {
          var $ = n[Q];
          if (n.hasOwnProperty(Q) && $ != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                L = $;
              default:
                s.hasOwnProperty(Q) || Ot(t, e, Q, null, s, $);
            }
        }
        for (var K in s) {
          var Q = s[K];
          if ((($ = n[K]), s.hasOwnProperty(K) && (Q != null || $ != null)))
            switch (K) {
              case "type":
                h = Q;
                break;
              case "name":
                u = Q;
                break;
              case "checked":
                F = Q;
                break;
              case "defaultChecked":
                J = Q;
                break;
              case "value":
                T = Q;
                break;
              case "defaultValue":
                w = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null) throw Error(o(137, e));
                break;
              default:
                Q !== $ && Ot(t, e, K, Q, s, $);
            }
        }
        Kr(t, T, w, L, F, J, h, u);
        return;
      case "select":
        Q = T = w = K = null;
        for (h in n)
          if (((L = n[h]), n.hasOwnProperty(h) && L != null))
            switch (h) {
              case "value":
                break;
              case "multiple":
                Q = L;
              default:
                s.hasOwnProperty(h) || Ot(t, e, h, null, s, L);
            }
        for (u in s)
          if (
            ((h = s[u]),
            (L = n[u]),
            s.hasOwnProperty(u) && (h != null || L != null))
          )
            switch (u) {
              case "value":
                K = h;
                break;
              case "defaultValue":
                w = h;
                break;
              case "multiple":
                T = h;
              default:
                h !== L && Ot(t, e, u, h, s, L);
            }
        ((e = w),
          (n = T),
          (s = Q),
          K != null
            ? ka(t, !!n, K, !1)
            : !!s != !!n &&
              (e != null ? ka(t, !!n, e, !0) : ka(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        Q = K = null;
        for (w in n)
          if (
            ((u = n[w]),
            n.hasOwnProperty(w) && u != null && !s.hasOwnProperty(w))
          )
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ot(t, e, w, null, s, u);
            }
        for (T in s)
          if (
            ((u = s[T]),
            (h = n[T]),
            s.hasOwnProperty(T) && (u != null || h != null))
          )
            switch (T) {
              case "value":
                K = u;
                break;
              case "defaultValue":
                Q = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== h && Ot(t, e, T, u, s, h);
            }
        _f(t, K, Q);
        return;
      case "option":
        for (var rt in n)
          if (
            ((K = n[rt]),
            n.hasOwnProperty(rt) && K != null && !s.hasOwnProperty(rt))
          )
            switch (rt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ot(t, e, rt, null, s, K);
            }
        for (L in s)
          if (
            ((K = s[L]),
            (Q = n[L]),
            s.hasOwnProperty(L) && K !== Q && (K != null || Q != null))
          )
            switch (L) {
              case "selected":
                t.selected =
                  K && typeof K != "function" && typeof K != "symbol";
                break;
              default:
                Ot(t, e, L, K, s, Q);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var dt in n)
          ((K = n[dt]),
            n.hasOwnProperty(dt) &&
              K != null &&
              !s.hasOwnProperty(dt) &&
              Ot(t, e, dt, null, s, K));
        for (F in s)
          if (
            ((K = s[F]),
            (Q = n[F]),
            s.hasOwnProperty(F) && K !== Q && (K != null || Q != null))
          )
            switch (F) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (K != null) throw Error(o(137, e));
                break;
              default:
                Ot(t, e, F, K, s, Q);
            }
        return;
      default:
        if (Zr(e)) {
          for (var zt in n)
            ((K = n[zt]),
              n.hasOwnProperty(zt) &&
                K !== void 0 &&
                !s.hasOwnProperty(zt) &&
                Lu(t, e, zt, void 0, s, K));
          for (J in s)
            ((K = s[J]),
              (Q = n[J]),
              !s.hasOwnProperty(J) ||
                K === Q ||
                (K === void 0 && Q === void 0) ||
                Lu(t, e, J, K, s, Q));
          return;
        }
    }
    for (var X in n)
      ((K = n[X]),
        n.hasOwnProperty(X) &&
          K != null &&
          !s.hasOwnProperty(X) &&
          Ot(t, e, X, null, s, K));
    for ($ in s)
      ((K = s[$]),
        (Q = n[$]),
        !s.hasOwnProperty($) ||
          K === Q ||
          (K == null && Q == null) ||
          Ot(t, e, $, K, s, Q));
  }
  function Zm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Zx() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), s = 0;
        s < n.length;
        s++
      ) {
        var u = n[s],
          h = u.transferSize,
          T = u.initiatorType,
          w = u.duration;
        if (h && w && Zm(T)) {
          for (T = 0, w = u.responseEnd, s += 1; s < n.length; s++) {
            var L = n[s],
              F = L.startTime;
            if (F > w) break;
            var J = L.transferSize,
              $ = L.initiatorType;
            J &&
              Zm($) &&
              ((L = L.responseEnd), (T += J * (L < w ? 1 : (w - F) / (L - F))));
          }
          if ((--s, (e += (8 * (h + T)) / (u.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Uu = null,
    Hu = null;
  function Il(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Jm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Gu(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Yu = null;
  function Jx() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Yu
        ? !1
        : ((Yu = t), !0)
      : ((Yu = null), !1);
  }
  var Im = typeof setTimeout == "function" ? setTimeout : void 0,
    Wx = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $m = typeof Promise == "function" ? Promise : void 0,
    Ix =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof $m < "u"
          ? function (t) {
              return $m.resolve(null).then(t).catch($x);
            }
          : Im;
  function $x(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Qn(t) {
    return t === "head";
  }
  function tp(t, e) {
    var n = e,
      s = 0;
    do {
      var u = n.nextSibling;
      if ((t.removeChild(n), u && u.nodeType === 8))
        if (((n = u.data), n === "/$" || n === "/&")) {
          if (s === 0) {
            (t.removeChild(u), xi(e));
            return;
          }
          s--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          s++;
        else if (n === "html") xs(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), xs(n));
          for (var h = n.firstChild; h; ) {
            var T = h.nextSibling,
              w = h.nodeName;
            (h[Ui] ||
              w === "SCRIPT" ||
              w === "STYLE" ||
              (w === "LINK" && h.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(h),
              (h = T));
          }
        } else n === "body" && xs(t.ownerDocument.body);
      n = u;
    } while (n);
    xi(e);
  }
  function ep(t, e) {
    var n = t;
    t = 0;
    do {
      var s = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        s && s.nodeType === 8)
      )
        if (((n = s.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = s;
    } while (n);
  }
  function ku(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (ku(n), _r(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function t1(t, e, n, s) {
    for (; t.nodeType === 1; ) {
      var u = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (s) {
        if (!t[Ui])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((h = t.getAttribute("rel")),
                h === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                h !== u.rel ||
                t.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                t.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((h = t.getAttribute("src")),
                (h !== (u.src == null ? null : u.src) ||
                  t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  t.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  h &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var h = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === h) return t;
      } else return t;
      if (((t = qe(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function e1(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = qe(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function np(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = qe(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Xu(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function qu(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function n1(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var s = function () {
        (e(), n.removeEventListener("DOMContentLoaded", s));
      };
      (n.addEventListener("DOMContentLoaded", s), (t._reactRetry = s));
    }
  }
  function qe(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Pu = null;
  function ap(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return qe(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function ip(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function sp(t, e, n) {
    switch (((e = Il(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(o(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(o(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function xs(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    _r(t);
  }
  var Pe = new Map(),
    lp = new Set();
  function $l(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var wn = P.d;
  P.d = { f: a1, r: i1, D: s1, C: l1, L: r1, m: o1, X: c1, S: u1, M: f1 };
  function a1() {
    var t = wn.f(),
      e = Pl();
    return t || e;
  }
  function i1(t) {
    var e = Ha(t);
    e !== null && e.tag === 5 && e.type === "form" ? Ad(e) : wn.r(t);
  }
  var gi = typeof document > "u" ? null : document;
  function rp(t, e, n) {
    var s = gi;
    if (s && typeof e == "string" && e) {
      var u = Le(e);
      ((u = 'link[rel="' + t + '"][href="' + u + '"]'),
        typeof n == "string" && (u += '[crossorigin="' + n + '"]'),
        lp.has(u) ||
          (lp.add(u),
          (t = { rel: t, crossOrigin: n, href: e }),
          s.querySelector(u) === null &&
            ((e = s.createElement("link")),
            oe(e, "link", t),
            ee(e),
            s.head.appendChild(e))));
    }
  }
  function s1(t) {
    (wn.D(t), rp("dns-prefetch", t, null));
  }
  function l1(t, e) {
    (wn.C(t, e), rp("preconnect", t, e));
  }
  function r1(t, e, n) {
    wn.L(t, e, n);
    var s = gi;
    if (s && t && e) {
      var u = 'link[rel="preload"][as="' + Le(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((u += '[imagesrcset="' + Le(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (u += '[imagesizes="' + Le(n.imageSizes) + '"]'))
        : (u += '[href="' + Le(t) + '"]');
      var h = u;
      switch (e) {
        case "style":
          h = vi(t);
          break;
        case "script":
          h = yi(t);
      }
      Pe.has(h) ||
        ((t = x(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        Pe.set(h, t),
        s.querySelector(u) !== null ||
          (e === "style" && s.querySelector(Ss(h))) ||
          (e === "script" && s.querySelector(bs(h))) ||
          ((e = s.createElement("link")),
          oe(e, "link", t),
          ee(e),
          s.head.appendChild(e)));
    }
  }
  function o1(t, e) {
    wn.m(t, e);
    var n = gi;
    if (n && t) {
      var s = e && typeof e.as == "string" ? e.as : "script",
        u =
          'link[rel="modulepreload"][as="' + Le(s) + '"][href="' + Le(t) + '"]',
        h = u;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          h = yi(t);
      }
      if (
        !Pe.has(h) &&
        ((t = x({ rel: "modulepreload", href: t }, e)),
        Pe.set(h, t),
        n.querySelector(u) === null)
      ) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(bs(h))) return;
        }
        ((s = n.createElement("link")),
          oe(s, "link", t),
          ee(s),
          n.head.appendChild(s));
      }
    }
  }
  function u1(t, e, n) {
    wn.S(t, e, n);
    var s = gi;
    if (s && t) {
      var u = Ga(s).hoistableStyles,
        h = vi(t);
      e = e || "default";
      var T = u.get(h);
      if (!T) {
        var w = { loading: 0, preload: null };
        if ((T = s.querySelector(Ss(h)))) w.loading = 5;
        else {
          ((t = x({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Pe.get(h)) && _u(t, n));
          var L = (T = s.createElement("link"));
          (ee(L),
            oe(L, "link", t),
            (L._p = new Promise(function (F, J) {
              ((L.onload = F), (L.onerror = J));
            })),
            L.addEventListener("load", function () {
              w.loading |= 1;
            }),
            L.addEventListener("error", function () {
              w.loading |= 2;
            }),
            (w.loading |= 4),
            tr(T, e, s));
        }
        ((T = { type: "stylesheet", instance: T, count: 1, state: w }),
          u.set(h, T));
      }
    }
  }
  function c1(t, e) {
    wn.X(t, e);
    var n = gi;
    if (n && t) {
      var s = Ga(n).hoistableScripts,
        u = yi(t),
        h = s.get(u);
      h ||
        ((h = n.querySelector(bs(u))),
        h ||
          ((t = x({ src: t, async: !0 }, e)),
          (e = Pe.get(u)) && Fu(t, e),
          (h = n.createElement("script")),
          ee(h),
          oe(h, "link", t),
          n.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        s.set(u, h));
    }
  }
  function f1(t, e) {
    wn.M(t, e);
    var n = gi;
    if (n && t) {
      var s = Ga(n).hoistableScripts,
        u = yi(t),
        h = s.get(u);
      h ||
        ((h = n.querySelector(bs(u))),
        h ||
          ((t = x({ src: t, async: !0, type: "module" }, e)),
          (e = Pe.get(u)) && Fu(t, e),
          (h = n.createElement("script")),
          ee(h),
          oe(h, "link", t),
          n.head.appendChild(h)),
        (h = { type: "script", instance: h, count: 1, state: null }),
        s.set(u, h));
    }
  }
  function op(t, e, n, s) {
    var u = (u = lt.current) ? $l(u) : null;
    if (!u) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = vi(n.href)),
            (n = Ga(u).hoistableStyles),
            (s = n.get(e)),
            s ||
              ((s = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, s)),
            s)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = vi(n.href);
          var h = Ga(u).hoistableStyles,
            T = h.get(t);
          if (
            (T ||
              ((u = u.ownerDocument || u),
              (T = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              h.set(t, T),
              (h = u.querySelector(Ss(t))) &&
                !h._p &&
                ((T.instance = h), (T.state.loading = 5)),
              Pe.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Pe.set(t, n),
                h || h1(u, t, n, T.state))),
            e && s === null)
          )
            throw Error(o(528, ""));
          return T;
        }
        if (e && s !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = yi(n)),
              (n = Ga(u).hoistableScripts),
              (s = n.get(e)),
              s ||
                ((s = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, s)),
              s)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, t));
    }
  }
  function vi(t) {
    return 'href="' + Le(t) + '"';
  }
  function Ss(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function up(t) {
    return x({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function h1(t, e, n, s) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (s.loading = 1)
      : ((e = t.createElement("link")),
        (s.preload = e),
        e.addEventListener("load", function () {
          return (s.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (s.loading |= 2);
        }),
        oe(e, "link", n),
        ee(e),
        t.head.appendChild(e));
  }
  function yi(t) {
    return '[src="' + Le(t) + '"]';
  }
  function bs(t) {
    return "script[async]" + t;
  }
  function cp(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var s = t.querySelector('style[data-href~="' + Le(n.href) + '"]');
          if (s) return ((e.instance = s), ee(s), s);
          var u = x({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (s = (t.ownerDocument || t).createElement("style")),
            ee(s),
            oe(s, "style", u),
            tr(s, n.precedence, t),
            (e.instance = s)
          );
        case "stylesheet":
          u = vi(n.href);
          var h = t.querySelector(Ss(u));
          if (h) return ((e.state.loading |= 4), (e.instance = h), ee(h), h);
          ((s = up(n)),
            (u = Pe.get(u)) && _u(s, u),
            (h = (t.ownerDocument || t).createElement("link")),
            ee(h));
          var T = h;
          return (
            (T._p = new Promise(function (w, L) {
              ((T.onload = w), (T.onerror = L));
            })),
            oe(h, "link", s),
            (e.state.loading |= 4),
            tr(h, n.precedence, t),
            (e.instance = h)
          );
        case "script":
          return (
            (h = yi(n.src)),
            (u = t.querySelector(bs(h)))
              ? ((e.instance = u), ee(u), u)
              : ((s = n),
                (u = Pe.get(h)) && ((s = x({}, n)), Fu(s, u)),
                (t = t.ownerDocument || t),
                (u = t.createElement("script")),
                ee(u),
                oe(u, "link", s),
                t.head.appendChild(u),
                (e.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((s = e.instance), (e.state.loading |= 4), tr(s, n.precedence, t));
    return e.instance;
  }
  function tr(t, e, n) {
    for (
      var s = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = s.length ? s[s.length - 1] : null,
        h = u,
        T = 0;
      T < s.length;
      T++
    ) {
      var w = s[T];
      if (w.dataset.precedence === e) h = w;
      else if (h !== u) break;
    }
    h
      ? h.parentNode.insertBefore(t, h.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function _u(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Fu(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var er = null;
  function fp(t, e, n) {
    if (er === null) {
      var s = new Map(),
        u = (er = new Map());
      u.set(n, s);
    } else ((u = er), (s = u.get(n)), s || ((s = new Map()), u.set(n, s)));
    if (s.has(t)) return s;
    for (
      s.set(t, null), n = n.getElementsByTagName(t), u = 0;
      u < n.length;
      u++
    ) {
      var h = n[u];
      if (
        !(
          h[Ui] ||
          h[ie] ||
          (t === "link" && h.getAttribute("rel") === "stylesheet")
        ) &&
        h.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var T = h.getAttribute(e) || "";
        T = t + T;
        var w = s.get(T);
        w ? w.push(h) : s.set(T, [h]);
      }
    }
    return s;
  }
  function hp(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function d1(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function dp(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function m1(t, e, n, s) {
    if (
      n.type === "stylesheet" &&
      (typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var u = vi(s.href),
          h = e.querySelector(Ss(u));
        if (h) {
          ((e = h._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = nr.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = h),
            ee(h));
          return;
        }
        ((h = e.ownerDocument || e),
          (s = up(s)),
          (u = Pe.get(u)) && _u(s, u),
          (h = h.createElement("link")),
          ee(h));
        var T = h;
        ((T._p = new Promise(function (w, L) {
          ((T.onload = w), (T.onerror = L));
        })),
          oe(h, "link", s),
          (n.instance = h));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = nr.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var Ku = 0;
  function p1(t, e) {
    return (
      t.stylesheets && t.count === 0 && ir(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var s = setTimeout(function () {
              if ((t.stylesheets && ir(t, t.stylesheets), t.unsuspend)) {
                var h = t.unsuspend;
                ((t.unsuspend = null), h());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Ku === 0 && (Ku = 62500 * Zx());
            var u = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && ir(t, t.stylesheets), t.unsuspend))
                ) {
                  var h = t.unsuspend;
                  ((t.unsuspend = null), h());
                }
              },
              (t.imgBytes > Ku ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(s), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function nr() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ir(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var ar = null;
  function ir(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (ar = new Map()),
        e.forEach(g1, t),
        (ar = null),
        nr.call(t)));
  }
  function g1(t, e) {
    if (!(e.state.loading & 4)) {
      var n = ar.get(t);
      if (n) var s = n.get(null);
      else {
        ((n = new Map()), ar.set(t, n));
        for (
          var u = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            h = 0;
          h < u.length;
          h++
        ) {
          var T = u[h];
          (T.nodeName === "LINK" || T.getAttribute("media") !== "not all") &&
            (n.set(T.dataset.precedence, T), (s = T));
        }
        s && n.set(null, s);
      }
      ((u = e.instance),
        (T = u.getAttribute("data-precedence")),
        (h = n.get(T) || s),
        h === s && n.set(null, u),
        n.set(T, u),
        this.count++,
        (s = nr.bind(this)),
        u.addEventListener("load", s),
        u.addEventListener("error", s),
        h
          ? h.parentNode.insertBefore(u, h.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(u, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Ts = {
    $$typeof: N,
    Provider: null,
    Consumer: null,
    _currentValue: et,
    _currentValue2: et,
    _threadCount: 0,
  };
  function v1(t, e, n, s, u, h, T, w, L) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = kr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = kr(0)),
      (this.hiddenUpdates = kr(null)),
      (this.identifierPrefix = s),
      (this.onUncaughtError = u),
      (this.onCaughtError = h),
      (this.onRecoverableError = T),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = L),
      (this.incompleteTransitions = new Map()));
  }
  function mp(t, e, n, s, u, h, T, w, L, F, J, $) {
    return (
      (t = new v1(t, e, n, T, L, F, J, $, w)),
      (e = 1),
      h === !0 && (e |= 24),
      (h = De(3, null, null, e)),
      (t.current = h),
      (h.stateNode = t),
      (e = Co()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (h.memoizedState = { element: s, isDehydrated: n, cache: e }),
      No(h),
      t
    );
  }
  function pp(t) {
    return t ? ((t = Za), t) : Za;
  }
  function gp(t, e, n, s, u, h) {
    ((u = pp(u)),
      s.context === null ? (s.context = u) : (s.pendingContext = u),
      (s = Un(e)),
      (s.payload = { element: n }),
      (h = h === void 0 ? null : h),
      h !== null && (s.callback = h),
      (n = Hn(t, s, e)),
      n !== null && (Ae(n, t, e), ts(n, t, e)));
  }
  function vp(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Qu(t, e) {
    (vp(t, e), (t = t.alternate) && vp(t, e));
  }
  function yp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = da(t, 67108864);
      (e !== null && Ae(e, t, 67108864), Qu(t, 67108864));
    }
  }
  function xp(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Be();
      e = Xr(e);
      var n = da(t, e);
      (n !== null && Ae(n, t, e), Qu(t, e));
    }
  }
  var sr = !0;
  function y1(t, e, n, s) {
    var u = k.T;
    k.T = null;
    var h = P.p;
    try {
      ((P.p = 2), Zu(t, e, n, s));
    } finally {
      ((P.p = h), (k.T = u));
    }
  }
  function x1(t, e, n, s) {
    var u = k.T;
    k.T = null;
    var h = P.p;
    try {
      ((P.p = 8), Zu(t, e, n, s));
    } finally {
      ((P.p = h), (k.T = u));
    }
  }
  function Zu(t, e, n, s) {
    if (sr) {
      var u = Ju(s);
      if (u === null) (Vu(t, e, s, lr, n), bp(t, s));
      else if (b1(u, t, e, n, s)) s.stopPropagation();
      else if ((bp(t, s), e & 4 && -1 < S1.indexOf(t))) {
        for (; u !== null; ) {
          var h = Ha(u);
          if (h !== null)
            switch (h.tag) {
              case 3:
                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                  var T = oa(h.pendingLanes);
                  if (T !== 0) {
                    var w = h;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; T; ) {
                      var L = 1 << (31 - we(T));
                      ((w.entanglements[1] |= L), (T &= ~L));
                    }
                    (ln(h), (jt & 6) === 0 && ((Xl = ce() + 500), gs(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((w = da(h, 2)), w !== null && Ae(w, h, 2), Pl(), Qu(h, 2));
            }
          if (((h = Ju(s)), h === null && Vu(t, e, s, lr, n), h === u)) break;
          u = h;
        }
        u !== null && s.stopPropagation();
      } else Vu(t, e, s, null, n);
    }
  }
  function Ju(t) {
    return ((t = Wr(t)), Wu(t));
  }
  var lr = null;
  function Wu(t) {
    if (((lr = null), (t = Ua(t)), t !== null)) {
      var e = l(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = f(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = m(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((lr = t), null);
  }
  function Sp(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Qs()) {
          case la:
            return 2;
          case Zs:
            return 8;
          case Ba:
          case Va:
            return 32;
          case ra:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Iu = !1,
    Zn = null,
    Jn = null,
    Wn = null,
    As = new Map(),
    Ms = new Map(),
    In = [],
    S1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function bp(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Jn = null;
        break;
      case "mouseover":
      case "mouseout":
        Wn = null;
        break;
      case "pointerover":
      case "pointerout":
        As.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ms.delete(e.pointerId);
    }
  }
  function Es(t, e, n, s, u, h) {
    return t === null || t.nativeEvent !== h
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: s,
          nativeEvent: h,
          targetContainers: [u],
        }),
        e !== null && ((e = Ha(e)), e !== null && yp(e)),
        t)
      : ((t.eventSystemFlags |= s),
        (e = t.targetContainers),
        u !== null && e.indexOf(u) === -1 && e.push(u),
        t);
  }
  function b1(t, e, n, s, u) {
    switch (e) {
      case "focusin":
        return ((Zn = Es(Zn, t, e, n, s, u)), !0);
      case "dragenter":
        return ((Jn = Es(Jn, t, e, n, s, u)), !0);
      case "mouseover":
        return ((Wn = Es(Wn, t, e, n, s, u)), !0);
      case "pointerover":
        var h = u.pointerId;
        return (As.set(h, Es(As.get(h) || null, t, e, n, s, u)), !0);
      case "gotpointercapture":
        return (
          (h = u.pointerId),
          Ms.set(h, Es(Ms.get(h) || null, t, e, n, s, u)),
          !0
        );
    }
    return !1;
  }
  function Tp(t) {
    var e = Ua(t.target);
    if (e !== null) {
      var n = l(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = f(n)), e !== null)) {
            ((t.blockedOn = e),
              Lf(t.priority, function () {
                xp(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = m(n)), e !== null)) {
            ((t.blockedOn = e),
              Lf(t.priority, function () {
                xp(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function rr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Ju(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var s = new n.constructor(n.type, n);
        ((Jr = s), n.target.dispatchEvent(s), (Jr = null));
      } else return ((e = Ha(n)), e !== null && yp(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function Ap(t, e, n) {
    rr(t) && n.delete(e);
  }
  function T1() {
    ((Iu = !1),
      Zn !== null && rr(Zn) && (Zn = null),
      Jn !== null && rr(Jn) && (Jn = null),
      Wn !== null && rr(Wn) && (Wn = null),
      As.forEach(Ap),
      Ms.forEach(Ap));
  }
  function or(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Iu ||
        ((Iu = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, T1)));
  }
  var ur = null;
  function Mp(t) {
    ur !== t &&
      ((ur = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        ur === t && (ur = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            s = t[e + 1],
            u = t[e + 2];
          if (typeof s != "function") {
            if (Wu(s || n) === null) continue;
            break;
          }
          var h = Ha(n);
          h !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Jo(h, { pending: !0, data: u, method: n.method, action: s }, s, u));
        }
      }));
  }
  function xi(t) {
    function e(L) {
      return or(L, t);
    }
    (Zn !== null && or(Zn, t),
      Jn !== null && or(Jn, t),
      Wn !== null && or(Wn, t),
      As.forEach(e),
      Ms.forEach(e));
    for (var n = 0; n < In.length; n++) {
      var s = In[n];
      s.blockedOn === t && (s.blockedOn = null);
    }
    for (; 0 < In.length && ((n = In[0]), n.blockedOn === null); )
      (Tp(n), n.blockedOn === null && In.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (s = 0; s < n.length; s += 3) {
        var u = n[s],
          h = n[s + 1],
          T = u[ve] || null;
        if (typeof h == "function") T || Mp(n);
        else if (T) {
          var w = null;
          if (h && h.hasAttribute("formAction")) {
            if (((u = h), (T = h[ve] || null))) w = T.formAction;
            else if (Wu(u) !== null) continue;
          } else w = T.action;
          (typeof w == "function" ? (n[s + 1] = w) : (n.splice(s, 3), (s -= 3)),
            Mp(n));
        }
      }
  }
  function Ep() {
    function t(h) {
      h.canIntercept &&
        h.info === "react-transition" &&
        h.intercept({
          handler: function () {
            return new Promise(function (T) {
              return (u = T);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (u !== null && (u(), (u = null)), s || setTimeout(n, 20));
    }
    function n() {
      if (!s && !navigation.transition) {
        var h = navigation.currentEntry;
        h &&
          h.url != null &&
          navigation.navigate(h.url, {
            state: h.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var s = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((s = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function $u(t) {
    this._internalRoot = t;
  }
  ((cr.prototype.render = $u.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(o(409));
      var n = e.current,
        s = Be();
      gp(n, s, t, e, null, null);
    }),
    (cr.prototype.unmount = $u.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (gp(t.current, 2, null, t, null, null), Pl(), (e[La] = null));
        }
      }));
  function cr(t) {
    this._internalRoot = t;
  }
  cr.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Vf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < In.length && e !== 0 && e < In[n].priority; n++);
      (In.splice(n, 0, t), n === 0 && Tp(t));
    }
  };
  var Cp = i.version;
  if (Cp !== "19.2.4") throw Error(o(527, Cp, "19.2.4"));
  P.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(o(188))
        : ((t = Object.keys(t).join(",")), Error(o(268, t)));
    return (
      (t = v(e)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var A1 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!fr.isDisabled && fr.supportsFiber)
      try {
        ((Bi = fr.inject(A1)), (Ce = fr));
      } catch {}
  }
  return (
    (ws.createRoot = function (t, e) {
      if (!c(t)) throw Error(o(299));
      var n = !1,
        s = "",
        u = zd,
        h = Bd,
        T = Vd;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (s = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (u = e.onUncaughtError),
          e.onCaughtError !== void 0 && (h = e.onCaughtError),
          e.onRecoverableError !== void 0 && (T = e.onRecoverableError)),
        (e = mp(t, 1, !1, null, null, n, s, null, u, h, T, Ep)),
        (t[La] = e.current),
        Bu(t),
        new $u(e)
      );
    }),
    (ws.hydrateRoot = function (t, e, n) {
      if (!c(t)) throw Error(o(299));
      var s = !1,
        u = "",
        h = zd,
        T = Bd,
        w = Vd,
        L = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (h = n.onUncaughtError),
          n.onCaughtError !== void 0 && (T = n.onCaughtError),
          n.onRecoverableError !== void 0 && (w = n.onRecoverableError),
          n.formState !== void 0 && (L = n.formState)),
        (e = mp(t, 1, !0, e, n ?? null, s, u, L, h, T, w, Ep)),
        (e.context = pp(null)),
        (n = e.current),
        (s = Be()),
        (s = Xr(s)),
        (u = Un(s)),
        (u.callback = null),
        Hn(n, u, s),
        (n = s),
        (e.current.lanes = n),
        Li(e, n),
        ln(e),
        (t[La] = e.current),
        Bu(t),
        new cr(e)
      );
    }),
    (ws.version = "19.2.4"),
    ws
  );
}
var Up;
function z1() {
  if (Up) return nc.exports;
  Up = 1;
  function a() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (nc.exports = O1()), nc.exports);
}
var B1 = z1(),
  V1 = hg();
const $c = nt.createContext({});
function aa(a) {
  const i = nt.useRef(null);
  return (i.current === null && (i.current = a()), i.current);
}
const dg = typeof window < "u",
  Vr = dg ? nt.useLayoutEffect : nt.useEffect,
  Lr = nt.createContext(null);
function tf(a, i) {
  a.indexOf(i) === -1 && a.push(i);
}
function Cr(a, i) {
  const r = a.indexOf(i);
  r > -1 && a.splice(r, 1);
}
const en = (a, i, r) => (r > i ? i : r < a ? a : r);
let Vs = () => {};
const jn = {},
  mg = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a);
function pg(a) {
  return typeof a == "object" && a !== null;
}
const gg = (a) => /^0[^.\s]+$/u.test(a);
function vg(a) {
  let i;
  return () => (i === void 0 && (i = a()), i);
}
const Me = (a) => a,
  L1 = (a, i) => (r) => i(a(r)),
  Ys = (...a) => a.reduce(L1),
  ji = (a, i, r) => {
    const o = i - a;
    return o === 0 ? 1 : (r - a) / o;
  };
class ef {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (tf(this.subscriptions, i), () => Cr(this.subscriptions, i));
  }
  notify(i, r, o) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1) this.subscriptions[0](i, r, o);
      else
        for (let l = 0; l < c; l++) {
          const f = this.subscriptions[l];
          f && f(i, r, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const $e = (a) => a * 1e3,
  _e = (a) => a / 1e3;
function nf(a, i) {
  return i ? a * (1e3 / i) : 0;
}
const yg = (a, i, r) =>
    (((1 - 3 * r + 3 * i) * a + (3 * r - 6 * i)) * a + 3 * i) * a,
  U1 = 1e-7,
  H1 = 12;
function G1(a, i, r, o, c) {
  let l,
    f,
    m = 0;
  do ((f = i + (r - i) / 2), (l = yg(f, o, c) - a), l > 0 ? (r = f) : (i = f));
  while (Math.abs(l) > U1 && ++m < H1);
  return f;
}
function ks(a, i, r, o) {
  if (a === i && r === o) return Me;
  const c = (l) => G1(l, 0, 1, a, r);
  return (l) => (l === 0 || l === 1 ? l : yg(c(l), i, o));
}
const xg = (a) => (i) => (i <= 0.5 ? a(2 * i) / 2 : (2 - a(2 * (1 - i))) / 2),
  Sg = (a) => (i) => 1 - a(1 - i),
  bg = ks(0.33, 1.53, 0.69, 0.99),
  af = Sg(bg),
  Tg = xg(af),
  Ag = (a) =>
    (a *= 2) < 1 ? 0.5 * af(a) : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  sf = (a) => 1 - Math.sin(Math.acos(a)),
  Mg = Sg(sf),
  Eg = xg(sf),
  Y1 = ks(0.42, 0, 1, 1),
  k1 = ks(0, 0, 0.58, 1),
  Cg = ks(0.42, 0, 0.58, 1),
  X1 = (a) => Array.isArray(a) && typeof a[0] != "number",
  wg = (a) => Array.isArray(a) && typeof a[0] == "number",
  q1 = {
    linear: Me,
    easeIn: Y1,
    easeInOut: Cg,
    easeOut: k1,
    circIn: sf,
    circInOut: Eg,
    circOut: Mg,
    backIn: af,
    backInOut: Tg,
    backOut: bg,
    anticipate: Ag,
  },
  P1 = (a) => typeof a == "string",
  Hp = (a) => {
    if (wg(a)) {
      Vs(a.length === 4);
      const [i, r, o, c] = a;
      return ks(i, r, o, c);
    } else if (P1(a)) return q1[a];
    return a;
  },
  hr = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function _1(a, i) {
  let r = new Set(),
    o = new Set(),
    c = !1,
    l = !1;
  const f = new WeakSet();
  let m = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(g) {
    (f.has(g) && (v.schedule(g), a()), g(m));
  }
  const v = {
    schedule: (g, x = !1, y = !1) => {
      const S = y && c ? r : o;
      return (x && f.add(g), S.has(g) || S.add(g), g);
    },
    cancel: (g) => {
      (o.delete(g), f.delete(g));
    },
    process: (g) => {
      if (((m = g), c)) {
        l = !0;
        return;
      }
      ((c = !0),
        ([r, o] = [o, r]),
        r.forEach(p),
        r.clear(),
        (c = !1),
        l && ((l = !1), v.process(g)));
    },
  };
  return v;
}
const F1 = 40;
function jg(a, i) {
  let r = !1,
    o = !0;
  const c = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = () => (r = !0),
    f = hr.reduce((N, V) => ((N[V] = _1(l)), N), {}),
    {
      setup: m,
      read: p,
      resolveKeyframes: v,
      preUpdate: g,
      update: x,
      preRender: y,
      render: d,
      postRender: S,
    } = f,
    b = () => {
      const N = jn.useManualTiming ? c.timestamp : performance.now();
      ((r = !1),
        jn.useManualTiming ||
          (c.delta = o ? 1e3 / 60 : Math.max(Math.min(N - c.timestamp, F1), 1)),
        (c.timestamp = N),
        (c.isProcessing = !0),
        m.process(c),
        p.process(c),
        v.process(c),
        g.process(c),
        x.process(c),
        y.process(c),
        d.process(c),
        S.process(c),
        (c.isProcessing = !1),
        r && i && ((o = !1), a(b)));
    },
    M = () => {
      ((r = !0), (o = !0), c.isProcessing || a(b));
    };
  return {
    schedule: hr.reduce((N, V) => {
      const E = f[V];
      return (
        (N[V] = (D, R = !1, j = !1) => (r || M(), E.schedule(D, R, j))),
        N
      );
    }, {}),
    cancel: (N) => {
      for (let V = 0; V < hr.length; V++) f[hr[V]].cancel(N);
    },
    state: c,
    steps: f,
  };
}
const {
  schedule: wt,
  cancel: Fe,
  state: ae,
  steps: lc,
} = jg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Me, !0);
let yr;
function K1() {
  yr = void 0;
}
const pe = {
    now: () => (
      yr === void 0 &&
        pe.set(
          ae.isProcessing || jn.useManualTiming
            ? ae.timestamp
            : performance.now(),
        ),
      yr
    ),
    set: (a) => {
      ((yr = a), queueMicrotask(K1));
    },
  },
  Dg = (a) => (i) => typeof i == "string" && i.startsWith(a),
  Ng = Dg("--"),
  Q1 = Dg("var(--"),
  lf = (a) => (Q1(a) ? Z1.test(a.split("/*")[0].trim()) : !1),
  Z1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Gp(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const Di = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  Ls = { ...Di, transform: (a) => en(0, 1, a) },
  dr = { ...Di, default: 1 },
  Ns = (a) => Math.round(a * 1e5) / 1e5,
  rf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function J1(a) {
  return a == null;
}
const W1 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  of = (a, i) => (r) =>
    !!(
      (typeof r == "string" && W1.test(r) && r.startsWith(a)) ||
      (i && !J1(r) && Object.prototype.hasOwnProperty.call(r, i))
    ),
  Rg = (a, i, r) => (o) => {
    if (typeof o != "string") return o;
    const [c, l, f, m] = o.match(rf);
    return {
      [a]: parseFloat(c),
      [i]: parseFloat(l),
      [r]: parseFloat(f),
      alpha: m !== void 0 ? parseFloat(m) : 1,
    };
  },
  I1 = (a) => en(0, 255, a),
  rc = { ...Di, transform: (a) => Math.round(I1(a)) },
  ja = {
    test: of("rgb", "red"),
    parse: Rg("red", "green", "blue"),
    transform: ({ red: a, green: i, blue: r, alpha: o = 1 }) =>
      "rgba(" +
      rc.transform(a) +
      ", " +
      rc.transform(i) +
      ", " +
      rc.transform(r) +
      ", " +
      Ns(Ls.transform(o)) +
      ")",
  };
function $1(a) {
  let i = "",
    r = "",
    o = "",
    c = "";
  return (
    a.length > 5
      ? ((i = a.substring(1, 3)),
        (r = a.substring(3, 5)),
        (o = a.substring(5, 7)),
        (c = a.substring(7, 9)))
      : ((i = a.substring(1, 2)),
        (r = a.substring(2, 3)),
        (o = a.substring(3, 4)),
        (c = a.substring(4, 5)),
        (i += i),
        (r += r),
        (o += o),
        (c += c)),
    {
      red: parseInt(i, 16),
      green: parseInt(r, 16),
      blue: parseInt(o, 16),
      alpha: c ? parseInt(c, 16) / 255 : 1,
    }
  );
}
const Cc = { test: of("#"), parse: $1, transform: ja.transform },
  Xs = (a) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(a) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${a}`,
  }),
  ta = Xs("deg"),
  on = Xs("%"),
  ot = Xs("px"),
  t2 = Xs("vh"),
  e2 = Xs("vw"),
  Yp = {
    ...on,
    parse: (a) => on.parse(a) / 100,
    transform: (a) => on.transform(a * 100),
  },
  Ti = {
    test: of("hsl", "hue"),
    parse: Rg("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: i, lightness: r, alpha: o = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      on.transform(Ns(i)) +
      ", " +
      on.transform(Ns(r)) +
      ", " +
      Ns(Ls.transform(o)) +
      ")",
  },
  Wt = {
    test: (a) => ja.test(a) || Cc.test(a) || Ti.test(a),
    parse: (a) =>
      ja.test(a) ? ja.parse(a) : Ti.test(a) ? Ti.parse(a) : Cc.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
          ? ja.transform(a)
          : Ti.transform(a),
    getAnimatableNone: (a) => {
      const i = Wt.parse(a);
      return ((i.alpha = 0), Wt.transform(i));
    },
  },
  n2 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function a2(a) {
  var i, r;
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (((i = a.match(rf)) == null ? void 0 : i.length) || 0) +
      (((r = a.match(n2)) == null ? void 0 : r.length) || 0) >
      0
  );
}
const Og = "number",
  zg = "color",
  i2 = "var",
  s2 = "var(",
  kp = "${}",
  l2 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Us(a) {
  const i = a.toString(),
    r = [],
    o = { color: [], number: [], var: [] },
    c = [];
  let l = 0;
  const m = i
    .replace(
      l2,
      (p) => (
        Wt.test(p)
          ? (o.color.push(l), c.push(zg), r.push(Wt.parse(p)))
          : p.startsWith(s2)
            ? (o.var.push(l), c.push(i2), r.push(p))
            : (o.number.push(l), c.push(Og), r.push(parseFloat(p))),
        ++l,
        kp
      ),
    )
    .split(kp);
  return { values: r, split: m, indexes: o, types: c };
}
function Bg(a) {
  return Us(a).values;
}
function Vg(a) {
  const { split: i, types: r } = Us(a),
    o = i.length;
  return (c) => {
    let l = "";
    for (let f = 0; f < o; f++)
      if (((l += i[f]), c[f] !== void 0)) {
        const m = r[f];
        m === Og
          ? (l += Ns(c[f]))
          : m === zg
            ? (l += Wt.transform(c[f]))
            : (l += c[f]);
      }
    return l;
  };
}
const r2 = (a) =>
  typeof a == "number" ? 0 : Wt.test(a) ? Wt.getAnimatableNone(a) : a;
function o2(a) {
  const i = Bg(a);
  return Vg(a)(i.map(r2));
}
const tn = {
  test: a2,
  parse: Bg,
  createTransformer: Vg,
  getAnimatableNone: o2,
};
function oc(a, i, r) {
  return (
    r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6
      ? a + (i - a) * 6 * r
      : r < 1 / 2
        ? i
        : r < 2 / 3
          ? a + (i - a) * (2 / 3 - r) * 6
          : a
  );
}
function u2({ hue: a, saturation: i, lightness: r, alpha: o }) {
  ((a /= 360), (i /= 100), (r /= 100));
  let c = 0,
    l = 0,
    f = 0;
  if (!i) c = l = f = r;
  else {
    const m = r < 0.5 ? r * (1 + i) : r + i - r * i,
      p = 2 * r - m;
    ((c = oc(p, m, a + 1 / 3)), (l = oc(p, m, a)), (f = oc(p, m, a - 1 / 3)));
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(l * 255),
    blue: Math.round(f * 255),
    alpha: o,
  };
}
function wr(a, i) {
  return (r) => (r > 0 ? i : a);
}
const Yt = (a, i, r) => a + (i - a) * r,
  uc = (a, i, r) => {
    const o = a * a,
      c = r * (i * i - o) + o;
    return c < 0 ? 0 : Math.sqrt(c);
  },
  c2 = [Cc, ja, Ti],
  f2 = (a) => c2.find((i) => i.test(a));
function Xp(a) {
  const i = f2(a);
  if (!i) return !1;
  let r = i.parse(a);
  return (i === Ti && (r = u2(r)), r);
}
const qp = (a, i) => {
    const r = Xp(a),
      o = Xp(i);
    if (!r || !o) return wr(a, i);
    const c = { ...r };
    return (l) => (
      (c.red = uc(r.red, o.red, l)),
      (c.green = uc(r.green, o.green, l)),
      (c.blue = uc(r.blue, o.blue, l)),
      (c.alpha = Yt(r.alpha, o.alpha, l)),
      ja.transform(c)
    );
  },
  wc = new Set(["none", "hidden"]);
function h2(a, i) {
  return wc.has(a) ? (r) => (r <= 0 ? a : i) : (r) => (r >= 1 ? i : a);
}
function d2(a, i) {
  return (r) => Yt(a, i, r);
}
function uf(a) {
  return typeof a == "number"
    ? d2
    : typeof a == "string"
      ? lf(a)
        ? wr
        : Wt.test(a)
          ? qp
          : g2
      : Array.isArray(a)
        ? Lg
        : typeof a == "object"
          ? Wt.test(a)
            ? qp
            : m2
          : wr;
}
function Lg(a, i) {
  const r = [...a],
    o = r.length,
    c = a.map((l, f) => uf(l)(l, i[f]));
  return (l) => {
    for (let f = 0; f < o; f++) r[f] = c[f](l);
    return r;
  };
}
function m2(a, i) {
  const r = { ...a, ...i },
    o = {};
  for (const c in r)
    a[c] !== void 0 && i[c] !== void 0 && (o[c] = uf(a[c])(a[c], i[c]));
  return (c) => {
    for (const l in o) r[l] = o[l](c);
    return r;
  };
}
function p2(a, i) {
  const r = [],
    o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < i.values.length; c++) {
    const l = i.types[c],
      f = a.indexes[l][o[l]],
      m = a.values[f] ?? 0;
    ((r[c] = m), o[l]++);
  }
  return r;
}
const g2 = (a, i) => {
  const r = tn.createTransformer(i),
    o = Us(a),
    c = Us(i);
  return o.indexes.var.length === c.indexes.var.length &&
    o.indexes.color.length === c.indexes.color.length &&
    o.indexes.number.length >= c.indexes.number.length
    ? (wc.has(a) && !c.values.length) || (wc.has(i) && !o.values.length)
      ? h2(a, i)
      : Ys(Lg(p2(o, c), c.values), r)
    : wr(a, i);
};
function Ug(a, i, r) {
  return typeof a == "number" && typeof i == "number" && typeof r == "number"
    ? Yt(a, i, r)
    : uf(a)(a, i);
}
const v2 = (a) => {
    const i = ({ timestamp: r }) => a(r);
    return {
      start: (r = !0) => wt.update(i, r),
      stop: () => Fe(i),
      now: () => (ae.isProcessing ? ae.timestamp : pe.now()),
    };
  },
  Hg = (a, i, r = 10) => {
    let o = "";
    const c = Math.max(Math.round(i / r), 2);
    for (let l = 0; l < c; l++)
      o += Math.round(a(l / (c - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`;
  },
  jr = 2e4;
function cf(a) {
  let i = 0;
  const r = 50;
  let o = a.next(i);
  for (; !o.done && i < jr; ) ((i += r), (o = a.next(i)));
  return i >= jr ? 1 / 0 : i;
}
function y2(a, i = 100, r) {
  const o = r({ ...a, keyframes: [0, i] }),
    c = Math.min(cf(o), jr);
  return {
    type: "keyframes",
    ease: (l) => o.next(c * l).value / i,
    duration: _e(c),
  };
}
const x2 = 5;
function Gg(a, i, r) {
  const o = Math.max(i - x2, 0);
  return nf(r - a(o), i - o);
}
const qt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  cc = 0.001;
function S2({
  duration: a = qt.duration,
  bounce: i = qt.bounce,
  velocity: r = qt.velocity,
  mass: o = qt.mass,
}) {
  let c,
    l,
    f = 1 - i;
  ((f = en(qt.minDamping, qt.maxDamping, f)),
    (a = en(qt.minDuration, qt.maxDuration, _e(a))),
    f < 1
      ? ((c = (v) => {
          const g = v * f,
            x = g * a,
            y = g - r,
            d = jc(v, f),
            S = Math.exp(-x);
          return cc - (y / d) * S;
        }),
        (l = (v) => {
          const x = v * f * a,
            y = x * r + r,
            d = Math.pow(f, 2) * Math.pow(v, 2) * a,
            S = Math.exp(-x),
            b = jc(Math.pow(v, 2), f);
          return ((-c(v) + cc > 0 ? -1 : 1) * ((y - d) * S)) / b;
        }))
      : ((c = (v) => {
          const g = Math.exp(-v * a),
            x = (v - r) * a + 1;
          return -cc + g * x;
        }),
        (l = (v) => {
          const g = Math.exp(-v * a),
            x = (r - v) * (a * a);
          return g * x;
        })));
  const m = 5 / a,
    p = T2(c, l, m);
  if (((a = $e(a)), isNaN(p)))
    return { stiffness: qt.stiffness, damping: qt.damping, duration: a };
  {
    const v = Math.pow(p, 2) * o;
    return { stiffness: v, damping: f * 2 * Math.sqrt(o * v), duration: a };
  }
}
const b2 = 12;
function T2(a, i, r) {
  let o = r;
  for (let c = 1; c < b2; c++) o = o - a(o) / i(o);
  return o;
}
function jc(a, i) {
  return a * Math.sqrt(1 - i * i);
}
const A2 = ["duration", "bounce"],
  M2 = ["stiffness", "damping", "mass"];
function Pp(a, i) {
  return i.some((r) => a[r] !== void 0);
}
function E2(a) {
  let i = {
    velocity: qt.velocity,
    stiffness: qt.stiffness,
    damping: qt.damping,
    mass: qt.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!Pp(a, M2) && Pp(a, A2))
    if (((i.velocity = 0), a.visualDuration)) {
      const r = a.visualDuration,
        o = (2 * Math.PI) / (r * 1.2),
        c = o * o,
        l = 2 * en(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(c);
      i = { ...i, mass: qt.mass, stiffness: c, damping: l };
    } else {
      const r = S2({ ...a, velocity: 0 });
      ((i = { ...i, ...r, mass: qt.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function Dr(a = qt.visualDuration, i = qt.bounce) {
  const r =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: i }
      : a;
  let { restSpeed: o, restDelta: c } = r;
  const l = r.keyframes[0],
    f = r.keyframes[r.keyframes.length - 1],
    m = { done: !1, value: l },
    {
      stiffness: p,
      damping: v,
      mass: g,
      duration: x,
      velocity: y,
      isResolvedFromDuration: d,
    } = E2({ ...r, velocity: -_e(r.velocity || 0) }),
    S = y || 0,
    b = v / (2 * Math.sqrt(p * g)),
    M = f - l,
    C = _e(Math.sqrt(p / g)),
    O = Math.abs(M) < 5;
  (o || (o = O ? qt.restSpeed.granular : qt.restSpeed.default),
    c || (c = O ? qt.restDelta.granular : qt.restDelta.default));
  let N;
  if (b < 1) {
    const E = jc(C, b);
    N = (D) => {
      const R = Math.exp(-b * C * D);
      return (
        f - R * (((S + b * C * M) / E) * Math.sin(E * D) + M * Math.cos(E * D))
      );
    };
  } else if (b === 1) N = (E) => f - Math.exp(-C * E) * (M + (S + C * M) * E);
  else {
    const E = C * Math.sqrt(b * b - 1);
    N = (D) => {
      const R = Math.exp(-b * C * D),
        j = Math.min(E * D, 300);
      return (
        f - (R * ((S + b * C * M) * Math.sinh(j) + E * M * Math.cosh(j))) / E
      );
    };
  }
  const V = {
    calculatedDuration: (d && x) || null,
    next: (E) => {
      const D = N(E);
      if (d) m.done = E >= x;
      else {
        let R = E === 0 ? S : 0;
        b < 1 && (R = E === 0 ? $e(S) : Gg(N, E, D));
        const j = Math.abs(R) <= o,
          B = Math.abs(f - D) <= c;
        m.done = j && B;
      }
      return ((m.value = m.done ? f : D), m);
    },
    toString: () => {
      const E = Math.min(cf(V), jr),
        D = Hg((R) => V.next(E * R).value, E, 30);
      return E + "ms " + D;
    },
    toTransition: () => {},
  };
  return V;
}
Dr.applyToOptions = (a) => {
  const i = y2(a, 100, Dr);
  return (
    (a.ease = i.ease),
    (a.duration = $e(i.duration)),
    (a.type = "keyframes"),
    a
  );
};
function Dc({
  keyframes: a,
  velocity: i = 0,
  power: r = 0.8,
  timeConstant: o = 325,
  bounceDamping: c = 10,
  bounceStiffness: l = 500,
  modifyTarget: f,
  min: m,
  max: p,
  restDelta: v = 0.5,
  restSpeed: g,
}) {
  const x = a[0],
    y = { done: !1, value: x },
    d = (j) => (m !== void 0 && j < m) || (p !== void 0 && j > p),
    S = (j) =>
      m === void 0
        ? p
        : p === void 0 || Math.abs(m - j) < Math.abs(p - j)
          ? m
          : p;
  let b = r * i;
  const M = x + b,
    C = f === void 0 ? M : f(M);
  C !== M && (b = C - x);
  const O = (j) => -b * Math.exp(-j / o),
    N = (j) => C + O(j),
    V = (j) => {
      const B = O(j),
        z = N(j);
      ((y.done = Math.abs(B) <= v), (y.value = y.done ? C : z));
    };
  let E, D;
  const R = (j) => {
    d(y.value) &&
      ((E = j),
      (D = Dr({
        keyframes: [y.value, S(y.value)],
        velocity: Gg(N, j, y.value),
        damping: c,
        stiffness: l,
        restDelta: v,
        restSpeed: g,
      })));
  };
  return (
    R(0),
    {
      calculatedDuration: null,
      next: (j) => {
        let B = !1;
        return (
          !D && E === void 0 && ((B = !0), V(j), R(j)),
          E !== void 0 && j >= E ? D.next(j - E) : (!B && V(j), y)
        );
      },
    }
  );
}
function C2(a, i, r) {
  const o = [],
    c = r || jn.mix || Ug,
    l = a.length - 1;
  for (let f = 0; f < l; f++) {
    let m = c(a[f], a[f + 1]);
    if (i) {
      const p = Array.isArray(i) ? i[f] || Me : i;
      m = Ys(p, m);
    }
    o.push(m);
  }
  return o;
}
function ff(a, i, { clamp: r = !0, ease: o, mixer: c } = {}) {
  const l = a.length;
  if ((Vs(l === i.length), l === 1)) return () => i[0];
  if (l === 2 && i[0] === i[1]) return () => i[1];
  const f = a[0] === a[1];
  a[0] > a[l - 1] && ((a = [...a].reverse()), (i = [...i].reverse()));
  const m = C2(i, o, c),
    p = m.length,
    v = (g) => {
      if (f && g < a[0]) return i[0];
      let x = 0;
      if (p > 1) for (; x < a.length - 2 && !(g < a[x + 1]); x++);
      const y = ji(a[x], a[x + 1], g);
      return m[x](y);
    };
  return r ? (g) => v(en(a[0], a[l - 1], g)) : v;
}
function w2(a, i) {
  const r = a[a.length - 1];
  for (let o = 1; o <= i; o++) {
    const c = ji(0, i, o);
    a.push(Yt(r, 1, c));
  }
}
function Yg(a) {
  const i = [0];
  return (w2(i, a.length - 1), i);
}
function j2(a, i) {
  return a.map((r) => r * i);
}
function D2(a, i) {
  return a.map(() => i || Cg).splice(0, a.length - 1);
}
function Rs({
  duration: a = 300,
  keyframes: i,
  times: r,
  ease: o = "easeInOut",
}) {
  const c = X1(o) ? o.map(Hp) : Hp(o),
    l = { done: !1, value: i[0] },
    f = j2(r && r.length === i.length ? r : Yg(i), a),
    m = ff(f, i, { ease: Array.isArray(c) ? c : D2(i, c) });
  return {
    calculatedDuration: a,
    next: (p) => ((l.value = m(p)), (l.done = p >= a), l),
  };
}
const N2 = (a) => a !== null;
function hf(a, { repeat: i, repeatType: r = "loop" }, o, c = 1) {
  const l = a.filter(N2),
    m = c < 0 || (i && r !== "loop" && i % 2 === 1) ? 0 : l.length - 1;
  return !m || o === void 0 ? l[m] : o;
}
const R2 = { decay: Dc, inertia: Dc, tween: Rs, keyframes: Rs, spring: Dr };
function kg(a) {
  typeof a.type == "string" && (a.type = R2[a.type]);
}
class df {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, r) {
    return this.finished.then(i, r);
  }
}
const O2 = (a) => a / 100;
class mf extends df {
  constructor(i) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var o, c;
        const { motionValue: r } = this.options;
        (r && r.updatedAt !== pe.now() && this.tick(pe.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (c = (o = this.options).onStop) == null || c.call(o)));
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: i } = this;
    kg(i);
    const {
      type: r = Rs,
      repeat: o = 0,
      repeatDelay: c = 0,
      repeatType: l,
      velocity: f = 0,
    } = i;
    let { keyframes: m } = i;
    const p = r || Rs;
    p !== Rs &&
      typeof m[0] != "number" &&
      ((this.mixKeyframes = Ys(O2, Ug(m[0], m[1]))), (m = [0, 100]));
    const v = p({ ...i, keyframes: m });
    (l === "mirror" &&
      (this.mirroredGenerator = p({
        ...i,
        keyframes: [...m].reverse(),
        velocity: -f,
      })),
      v.calculatedDuration === null && (v.calculatedDuration = cf(v)));
    const { calculatedDuration: g } = v;
    ((this.calculatedDuration = g),
      (this.resolvedDuration = g + c),
      (this.totalDuration = this.resolvedDuration * (o + 1) - c),
      (this.generator = v));
  }
  updateTime(i) {
    const r = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = r);
  }
  tick(i, r = !1) {
    const {
      generator: o,
      totalDuration: c,
      mixKeyframes: l,
      mirroredGenerator: f,
      resolvedDuration: m,
      calculatedDuration: p,
    } = this;
    if (this.startTime === null) return o.next(0);
    const {
      delay: v = 0,
      keyframes: g,
      repeat: x,
      repeatType: y,
      repeatDelay: d,
      type: S,
      onUpdate: b,
      finalKeyframe: M,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - c / this.speed, this.startTime)),
      r ? (this.currentTime = i) : this.updateTime(i));
    const C = this.currentTime - v * (this.playbackSpeed >= 0 ? 1 : -1),
      O = this.playbackSpeed >= 0 ? C < 0 : C > c;
    ((this.currentTime = Math.max(C, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c));
    let N = this.currentTime,
      V = o;
    if (x) {
      const j = Math.min(this.currentTime, c) / m;
      let B = Math.floor(j),
        z = j % 1;
      (!z && j >= 1 && (z = 1),
        z === 1 && B--,
        (B = Math.min(B, x + 1)),
        !!(B % 2) &&
          (y === "reverse"
            ? ((z = 1 - z), d && (z -= d / m))
            : y === "mirror" && (V = f)),
        (N = en(0, 1, z) * m));
    }
    const E = O ? { done: !1, value: g[0] } : V.next(N);
    l && (E.value = l(E.value));
    let { done: D } = E;
    !O &&
      p !== null &&
      (D =
        this.playbackSpeed >= 0
          ? this.currentTime >= c
          : this.currentTime <= 0);
    const R =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && D));
    return (
      R && S !== Dc && (E.value = hf(g, this.options, M, this.speed)),
      b && b(E.value),
      R && this.finish(),
      E
    );
  }
  then(i, r) {
    return this.finished.then(i, r);
  }
  get duration() {
    return _e(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + _e(i);
  }
  get time() {
    return _e(this.currentTime);
  }
  set time(i) {
    var r;
    ((i = $e(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      (r = this.driver) == null || r.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(pe.now());
    const r = this.playbackSpeed !== i;
    ((this.playbackSpeed = i), r && (this.time = _e(this.currentTime)));
  }
  play() {
    var c, l;
    if (this.isStopped) return;
    const { driver: i = v2, startTime: r } = this.options;
    (this.driver || (this.driver = i((f) => this.tick(f))),
      (l = (c = this.options).onPlay) == null || l.call(c));
    const o = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = o))
      : this.holdTime !== null
        ? (this.startTime = o - this.holdTime)
        : this.startTime || (this.startTime = r ?? o),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(pe.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    var i, r;
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (r = (i = this.options).onComplete) == null || r.call(i));
  }
  cancel() {
    var i, r;
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (r = (i = this.options).onCancel) == null || r.call(i));
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return ((this.startTime = 0), this.tick(i, !0));
  }
  attachTimeline(i) {
    var r;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (r = this.driver) == null || r.stop(),
      i.observe(this)
    );
  }
}
function z2(a) {
  for (let i = 1; i < a.length; i++) a[i] ?? (a[i] = a[i - 1]);
}
const Da = (a) => (a * 180) / Math.PI,
  Nc = (a) => {
    const i = Da(Math.atan2(a[1], a[0]));
    return Rc(i);
  },
  B2 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: Nc,
    rotateZ: Nc,
    skewX: (a) => Da(Math.atan(a[1])),
    skewY: (a) => Da(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  Rc = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  _p = Nc,
  Fp = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  Kp = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  V2 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Fp,
    scaleY: Kp,
    scale: (a) => (Fp(a) + Kp(a)) / 2,
    rotateX: (a) => Rc(Da(Math.atan2(a[6], a[5]))),
    rotateY: (a) => Rc(Da(Math.atan2(-a[2], a[0]))),
    rotateZ: _p,
    rotate: _p,
    skewX: (a) => Da(Math.atan(a[4])),
    skewY: (a) => Da(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function Oc(a) {
  return a.includes("scale") ? 1 : 0;
}
function zc(a, i) {
  if (!a || a === "none") return Oc(i);
  const r = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (r) ((o = V2), (c = r));
  else {
    const m = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((o = B2), (c = m));
  }
  if (!c) return Oc(i);
  const l = o[i],
    f = c[1].split(",").map(U2);
  return typeof l == "function" ? l(f) : f[l];
}
const L2 = (a, i) => {
  const { transform: r = "none" } = getComputedStyle(a);
  return zc(r, i);
};
function U2(a) {
  return parseFloat(a.trim());
}
const Ni = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Ri = new Set(Ni),
  Qp = (a) => a === Di || a === ot,
  H2 = new Set(["x", "y", "z"]),
  G2 = Ni.filter((a) => !H2.has(a));
function Y2(a) {
  const i = [];
  return (
    G2.forEach((r) => {
      const o = a.getValue(r);
      o !== void 0 &&
        (i.push([r, o.get()]), o.set(r.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const na = {
  width: ({ x: a }, { paddingLeft: i = "0", paddingRight: r = "0" }) =>
    a.max - a.min - parseFloat(i) - parseFloat(r),
  height: ({ y: a }, { paddingTop: i = "0", paddingBottom: r = "0" }) =>
    a.max - a.min - parseFloat(i) - parseFloat(r),
  top: (a, { top: i }) => parseFloat(i),
  left: (a, { left: i }) => parseFloat(i),
  bottom: ({ y: a }, { top: i }) => parseFloat(i) + (a.max - a.min),
  right: ({ x: a }, { left: i }) => parseFloat(i) + (a.max - a.min),
  x: (a, { transform: i }) => zc(i, "x"),
  y: (a, { transform: i }) => zc(i, "y"),
};
na.translateX = na.x;
na.translateY = na.y;
const Na = new Set();
let Bc = !1,
  Vc = !1,
  Lc = !1;
function Xg() {
  if (Vc) {
    const a = Array.from(Na).filter((o) => o.needsMeasurement),
      i = new Set(a.map((o) => o.element)),
      r = new Map();
    (i.forEach((o) => {
      const c = Y2(o);
      c.length && (r.set(o, c), o.render());
    }),
      a.forEach((o) => o.measureInitialState()),
      i.forEach((o) => {
        o.render();
        const c = r.get(o);
        c &&
          c.forEach(([l, f]) => {
            var m;
            (m = o.getValue(l)) == null || m.set(f);
          });
      }),
      a.forEach((o) => o.measureEndState()),
      a.forEach((o) => {
        o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
      }));
  }
  ((Vc = !1), (Bc = !1), Na.forEach((a) => a.complete(Lc)), Na.clear());
}
function qg() {
  Na.forEach((a) => {
    (a.readKeyframes(), a.needsMeasurement && (Vc = !0));
  });
}
function k2() {
  ((Lc = !0), qg(), Xg(), (Lc = !1));
}
class pf {
  constructor(i, r, o, c, l, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = r),
      (this.name = o),
      (this.motionValue = c),
      (this.element = l),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Na.add(this),
          Bc || ((Bc = !0), wt.read(qg), wt.resolveKeyframes(Xg)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: r,
      element: o,
      motionValue: c,
    } = this;
    if (i[0] === null) {
      const l = c == null ? void 0 : c.get(),
        f = i[i.length - 1];
      if (l !== void 0) i[0] = l;
      else if (o && r) {
        const m = o.readValue(r, f);
        m != null && (i[0] = m);
      }
      (i[0] === void 0 && (i[0] = f), c && l === void 0 && c.set(i[0]));
    }
    z2(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      Na.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Na.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const X2 = (a) => a.startsWith("--");
function q2(a, i, r) {
  X2(i) ? a.style.setProperty(i, r) : (a.style[i] = r);
}
const P2 = {};
function Pg(a, i) {
  const r = vg(a);
  return () => P2[i] ?? r();
}
const _g = Pg(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Fg = Pg(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Ds = ([a, i, r, o]) => `cubic-bezier(${a}, ${i}, ${r}, ${o})`,
  Zp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ds([0, 0.65, 0.55, 1]),
    circOut: Ds([0.55, 0, 1, 0.45]),
    backIn: Ds([0.31, 0.01, 0.66, -0.59]),
    backOut: Ds([0.33, 1.53, 0.69, 0.99]),
  };
function Kg(a, i) {
  if (a)
    return typeof a == "function"
      ? Fg()
        ? Hg(a, i)
        : "ease-out"
      : wg(a)
        ? Ds(a)
        : Array.isArray(a)
          ? a.map((r) => Kg(r, i) || Zp.easeOut)
          : Zp[a];
}
function _2(
  a,
  i,
  r,
  {
    delay: o = 0,
    duration: c = 300,
    repeat: l = 0,
    repeatType: f = "loop",
    ease: m = "easeOut",
    times: p,
  } = {},
  v = void 0,
) {
  const g = { [i]: r };
  p && (g.offset = p);
  const x = Kg(m, c);
  Array.isArray(x) && (g.easing = x);
  const y = {
    delay: o,
    duration: c,
    easing: Array.isArray(x) ? "linear" : x,
    fill: "both",
    iterations: l + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (v && (y.pseudoElement = v), a.animate(g, y));
}
function Qg(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function F2({ type: a, ...i }) {
  return Qg(a) && Fg()
    ? a.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class Zg extends df {
  constructor(i) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !i)
    )
      return;
    const {
      element: r,
      name: o,
      keyframes: c,
      pseudoElement: l,
      allowFlatten: f = !1,
      finalKeyframe: m,
      onComplete: p,
    } = i;
    ((this.isPseudoElement = !!l),
      (this.allowFlatten = f),
      (this.options = i),
      Vs(typeof i.type != "string"));
    const v = F2(i);
    ((this.animation = _2(r, o, c, v, l)),
      v.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !l)) {
          const g = hf(c, this.options, m, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(g) : q2(r, o, g),
            this.animation.cancel());
        }
        (p == null || p(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var i, r;
    (r = (i = this.animation).finish) == null || r.call(i);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var r, o, c;
    const i = (r = this.options) == null ? void 0 : r.element;
    !this.isPseudoElement &&
      i != null &&
      i.isConnected &&
      ((c = (o = this.animation).commitStyles) == null || c.call(o));
  }
  get duration() {
    var r, o;
    const i =
      ((o =
        (r = this.animation.effect) == null ? void 0 : r.getComputedTiming) ==
      null
        ? void 0
        : o.call(r).duration) || 0;
    return _e(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + _e(i);
  }
  get time() {
    return _e(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = $e(i)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    (i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(i) {
    this.manualStartTime = this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, observe: r }) {
    var o;
    return (
      this.allowFlatten &&
        ((o = this.animation.effect) == null ||
          o.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      i && _g() ? ((this.animation.timeline = i), Me) : r(this)
    );
  }
}
const Jg = { anticipate: Ag, backInOut: Tg, circInOut: Eg };
function K2(a) {
  return a in Jg;
}
function Q2(a) {
  typeof a.ease == "string" && K2(a.ease) && (a.ease = Jg[a.ease]);
}
const fc = 10;
class Z2 extends Zg {
  constructor(i) {
    (Q2(i),
      kg(i),
      super(i),
      i.startTime !== void 0 && (this.startTime = i.startTime),
      (this.options = i));
  }
  updateMotionValue(i) {
    const {
      motionValue: r,
      onUpdate: o,
      onComplete: c,
      element: l,
      ...f
    } = this.options;
    if (!r) return;
    if (i !== void 0) {
      r.set(i);
      return;
    }
    const m = new mf({ ...f, autoplay: !1 }),
      p = Math.max(fc, pe.now() - this.startTime),
      v = en(0, fc, p - fc);
    (r.setWithVelocity(
      m.sample(Math.max(0, p - v)).value,
      m.sample(p).value,
      v,
    ),
      m.stop());
  }
}
const Jp = (a, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          (tn.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function J2(a) {
  const i = a[0];
  if (a.length === 1) return !0;
  for (let r = 0; r < a.length; r++) if (a[r] !== i) return !0;
}
function W2(a, i, r, o) {
  const c = a[0];
  if (c === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const l = a[a.length - 1],
    f = Jp(c, i),
    m = Jp(l, i);
  return !f || !m ? !1 : J2(a) || ((r === "spring" || Qg(r)) && o);
}
function Uc(a) {
  ((a.duration = 0), (a.type = "keyframes"));
}
const I2 = new Set(["opacity", "clipPath", "filter", "transform"]),
  $2 = vg(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function tS(a) {
  var g;
  const {
    motionValue: i,
    name: r,
    repeatDelay: o,
    repeatType: c,
    damping: l,
    type: f,
  } = a;
  if (
    !(
      ((g = i == null ? void 0 : i.owner) == null
        ? void 0
        : g.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: p, transformTemplate: v } = i.owner.getProps();
  return (
    $2() &&
    r &&
    I2.has(r) &&
    (r !== "transform" || !v) &&
    !p &&
    !o &&
    c !== "mirror" &&
    l !== 0 &&
    f !== "inertia"
  );
}
const eS = 40;
class nS extends df {
  constructor({
    autoplay: i = !0,
    delay: r = 0,
    type: o = "keyframes",
    repeat: c = 0,
    repeatDelay: l = 0,
    repeatType: f = "loop",
    keyframes: m,
    name: p,
    motionValue: v,
    element: g,
    ...x
  }) {
    var S;
    (super(),
      (this.stop = () => {
        var b, M;
        (this._animation &&
          (this._animation.stop(),
          (b = this.stopTimeline) == null || b.call(this)),
          (M = this.keyframeResolver) == null || M.cancel());
      }),
      (this.createdAt = pe.now()));
    const y = {
        autoplay: i,
        delay: r,
        type: o,
        repeat: c,
        repeatDelay: l,
        repeatType: f,
        name: p,
        motionValue: v,
        element: g,
        ...x,
      },
      d = (g == null ? void 0 : g.KeyframeResolver) || pf;
    ((this.keyframeResolver = new d(
      m,
      (b, M, C) => this.onKeyframesResolved(b, M, y, !C),
      p,
      v,
      g,
    )),
      (S = this.keyframeResolver) == null || S.scheduleResolve());
  }
  onKeyframesResolved(i, r, o, c) {
    var M, C;
    this.keyframeResolver = void 0;
    const {
      name: l,
      type: f,
      velocity: m,
      delay: p,
      isHandoff: v,
      onUpdate: g,
    } = o;
    ((this.resolvedAt = pe.now()),
      W2(i, l, f, m) ||
        ((jn.instantAnimations || !p) && (g == null || g(hf(i, o, r))),
        (i[0] = i[i.length - 1]),
        Uc(o),
        (o.repeat = 0)));
    const y = {
        startTime: c
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > eS
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: r,
        ...o,
        keyframes: i,
      },
      d = !v && tS(y),
      S =
        (C = (M = y.motionValue) == null ? void 0 : M.owner) == null
          ? void 0
          : C.current,
      b = d ? new Z2({ ...y, element: S }) : new mf(y);
    (b.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Me),
      this.pendingTimeline &&
        ((this.stopTimeline = b.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = b));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, r) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    var i;
    return (
      this._animation ||
        ((i = this.keyframeResolver) == null || i.resume(), k2()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var i;
    (this._animation && this.animation.cancel(),
      (i = this.keyframeResolver) == null || i.cancel());
  }
}
function Wg(a, i, r, o = 0, c = 1) {
  const l = Array.from(a)
      .sort((v, g) => v.sortNodePosition(g))
      .indexOf(i),
    f = a.size,
    m = (f - 1) * o;
  return typeof r == "function" ? r(l, f) : c === 1 ? l * o : m - l * o;
}
const aS = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function iS(a) {
  const i = aS.exec(a);
  if (!i) return [,];
  const [, r, o, c] = i;
  return [`--${r ?? o}`, c];
}
function Ig(a, i, r = 1) {
  const [o, c] = iS(a);
  if (!o) return;
  const l = window.getComputedStyle(i).getPropertyValue(o);
  if (l) {
    const f = l.trim();
    return mg(f) ? parseFloat(f) : f;
  }
  return lf(c) ? Ig(c, i, r + 1) : c;
}
const sS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  lS = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  rS = { type: "keyframes", duration: 0.8 },
  oS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  uS = (a, { keyframes: i }) =>
    i.length > 2
      ? rS
      : Ri.has(a)
        ? a.startsWith("scale")
          ? lS(i[1])
          : sS
        : oS,
  cS = (a) => a !== null;
function fS(a, { repeat: i, repeatType: r = "loop" }, o) {
  const c = a.filter(cS),
    l = i && r !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return c[l];
}
function $g(a, i) {
  if (a != null && a.inherit && i) {
    const { inherit: r, ...o } = a;
    return { ...i, ...o };
  }
  return a;
}
function gf(a, i) {
  const r =
    (a == null ? void 0 : a[i]) ?? (a == null ? void 0 : a.default) ?? a;
  return r !== a ? $g(r, a) : r;
}
function hS({
  when: a,
  delay: i,
  delayChildren: r,
  staggerChildren: o,
  staggerDirection: c,
  repeat: l,
  repeatType: f,
  repeatDelay: m,
  from: p,
  elapsed: v,
  ...g
}) {
  return !!Object.keys(g).length;
}
const vf =
  (a, i, r, o = {}, c, l) =>
  (f) => {
    const m = gf(o, a) || {},
      p = m.delay || o.delay || 0;
    let { elapsed: v = 0 } = o;
    v = v - $e(p);
    const g = {
      keyframes: Array.isArray(r) ? r : [null, r],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...m,
      delay: -v,
      onUpdate: (y) => {
        (i.set(y), m.onUpdate && m.onUpdate(y));
      },
      onComplete: () => {
        (f(), m.onComplete && m.onComplete());
      },
      name: a,
      motionValue: i,
      element: l ? void 0 : c,
    };
    (hS(m) || Object.assign(g, uS(a, g)),
      g.duration && (g.duration = $e(g.duration)),
      g.repeatDelay && (g.repeatDelay = $e(g.repeatDelay)),
      g.from !== void 0 && (g.keyframes[0] = g.from));
    let x = !1;
    if (
      ((g.type === !1 || (g.duration === 0 && !g.repeatDelay)) &&
        (Uc(g), g.delay === 0 && (x = !0)),
      (jn.instantAnimations ||
        jn.skipAnimations ||
        (c != null && c.shouldSkipAnimations)) &&
        ((x = !0), Uc(g), (g.delay = 0)),
      (g.allowFlatten = !m.type && !m.ease),
      x && !l && i.get() !== void 0)
    ) {
      const y = fS(g.keyframes, m);
      if (y !== void 0) {
        wt.update(() => {
          (g.onUpdate(y), g.onComplete());
        });
        return;
      }
    }
    return m.isSync ? new mf(g) : new nS(g);
  };
function Wp(a) {
  const i = [{}, {}];
  return (
    a == null ||
      a.values.forEach((r, o) => {
        ((i[0][o] = r.get()), (i[1][o] = r.getVelocity()));
      }),
    i
  );
}
function yf(a, i, r, o) {
  if (typeof i == "function") {
    const [c, l] = Wp(o);
    i = i(r !== void 0 ? r : a.custom, c, l);
  }
  if (
    (typeof i == "string" && (i = a.variants && a.variants[i]),
    typeof i == "function")
  ) {
    const [c, l] = Wp(o);
    i = i(r !== void 0 ? r : a.custom, c, l);
  }
  return i;
}
function wi(a, i, r) {
  const o = a.getProps();
  return yf(o, i, r !== void 0 ? r : o.custom, a);
}
const tv = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Ni,
  ]),
  Ip = 30,
  dS = (a) => !isNaN(parseFloat(a)),
  Os = { current: void 0 };
class mS {
  constructor(i, r = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (o) => {
        var l;
        const c = pe.now();
        if (
          (this.updatedAt !== c && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(o),
          this.current !== this.prev &&
            ((l = this.events.change) == null || l.notify(this.current),
            this.dependents))
        )
          for (const f of this.dependents) f.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = r.owner));
  }
  setCurrent(i) {
    ((this.current = i),
      (this.updatedAt = pe.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = dS(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, r) {
    this.events[i] || (this.events[i] = new ef());
    const o = this.events[i].add(r);
    return i === "change"
      ? () => {
          (o(),
            wt.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : o;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, r) {
    ((this.passiveEffect = i), (this.stopPassiveEffect = r));
  }
  set(i) {
    this.passiveEffect
      ? this.passiveEffect(i, this.updateAndNotify)
      : this.updateAndNotify(i);
  }
  setWithVelocity(i, r, o) {
    (this.set(r),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - o));
  }
  jump(i, r = !0) {
    (this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      r && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    var i;
    (i = this.events.change) == null || i.notify(this.current);
  }
  addDependent(i) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(i));
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return (Os.current && Os.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = pe.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > Ip
    )
      return 0;
    const r = Math.min(this.updatedAt - this.prevUpdatedAt, Ip);
    return nf(parseFloat(this.current) - parseFloat(this.prevFrameValue), r);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((r) => {
        ((this.hasAnimated = !0),
          (this.animation = i(r)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var i, r;
    ((i = this.dependents) == null || i.clear(),
      (r = this.events.destroy) == null || r.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Ie(a, i) {
  return new mS(a, i);
}
const Hc = (a) => Array.isArray(a);
function pS(a, i, r) {
  a.hasValue(i) ? a.getValue(i).set(r) : a.addValue(i, Ie(r));
}
function gS(a) {
  return Hc(a) ? a[a.length - 1] || 0 : a;
}
function vS(a, i) {
  const r = wi(a, i);
  let { transitionEnd: o = {}, transition: c = {}, ...l } = r || {};
  l = { ...l, ...o };
  for (const f in l) {
    const m = gS(l[f]);
    pS(a, f, m);
  }
}
const he = (a) => !!(a && a.getVelocity);
function yS(a) {
  return !!(he(a) && a.add);
}
function Gc(a, i) {
  const r = a.getValue("willChange");
  if (yS(r)) return r.add(i);
  if (!r && jn.WillChange) {
    const o = new jn.WillChange("auto");
    (a.addValue("willChange", o), o.add(i));
  }
}
function xf(a) {
  return a.replace(/([A-Z])/g, (i) => `-${i.toLowerCase()}`);
}
const xS = "framerAppearId",
  ev = "data-" + xf(xS);
function nv(a) {
  return a.props[ev];
}
function SS({ protectedKeys: a, needsAnimating: i }, r) {
  const o = a.hasOwnProperty(r) && i[r] !== !0;
  return ((i[r] = !1), o);
}
function av(a, i, { delay: r = 0, transitionOverride: o, type: c } = {}) {
  let { transition: l, transitionEnd: f, ...m } = i;
  const p = a.getDefaultTransition();
  l = l ? $g(l, p) : p;
  const v = l == null ? void 0 : l.reduceMotion;
  o && (l = o);
  const g = [],
    x = c && a.animationState && a.animationState.getState()[c];
  for (const y in m) {
    const d = a.getValue(y, a.latestValues[y] ?? null),
      S = m[y];
    if (S === void 0 || (x && SS(x, y))) continue;
    const b = { delay: r, ...gf(l || {}, y) },
      M = d.get();
    if (
      M !== void 0 &&
      !d.isAnimating &&
      !Array.isArray(S) &&
      S === M &&
      !b.velocity
    )
      continue;
    let C = !1;
    if (window.MotionHandoffAnimation) {
      const V = nv(a);
      if (V) {
        const E = window.MotionHandoffAnimation(V, y, wt);
        E !== null && ((b.startTime = E), (C = !0));
      }
    }
    Gc(a, y);
    const O = v ?? a.shouldReduceMotion;
    d.start(vf(y, d, S, O && tv.has(y) ? { type: !1 } : b, a, C));
    const N = d.animation;
    N && g.push(N);
  }
  if (f) {
    const y = () =>
      wt.update(() => {
        f && vS(a, f);
      });
    g.length ? Promise.all(g).then(y) : y();
  }
  return g;
}
function Yc(a, i, r = {}) {
  var p;
  const o = wi(
    a,
    i,
    r.type === "exit"
      ? (p = a.presenceContext) == null
        ? void 0
        : p.custom
      : void 0,
  );
  let { transition: c = a.getDefaultTransition() || {} } = o || {};
  r.transitionOverride && (c = r.transitionOverride);
  const l = o ? () => Promise.all(av(a, o, r)) : () => Promise.resolve(),
    f =
      a.variantChildren && a.variantChildren.size
        ? (v = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: x,
              staggerDirection: y,
            } = c;
            return bS(a, i, v, g, x, y, r);
          }
        : () => Promise.resolve(),
    { when: m } = c;
  if (m) {
    const [v, g] = m === "beforeChildren" ? [l, f] : [f, l];
    return v().then(() => g());
  } else return Promise.all([l(), f(r.delay)]);
}
function bS(a, i, r = 0, o = 0, c = 0, l = 1, f) {
  const m = [];
  for (const p of a.variantChildren)
    (p.notify("AnimationStart", i),
      m.push(
        Yc(p, i, {
          ...f,
          delay:
            r +
            (typeof o == "function" ? 0 : o) +
            Wg(a.variantChildren, p, o, c, l),
        }).then(() => p.notify("AnimationComplete", i)),
      ));
  return Promise.all(m);
}
function TS(a, i, r = {}) {
  a.notify("AnimationStart", i);
  let o;
  if (Array.isArray(i)) {
    const c = i.map((l) => Yc(a, l, r));
    o = Promise.all(c);
  } else if (typeof i == "string") o = Yc(a, i, r);
  else {
    const c = typeof i == "function" ? wi(a, i, r.custom) : i;
    o = Promise.all(av(a, c, r));
  }
  return o.then(() => {
    a.notify("AnimationComplete", i);
  });
}
const AS = { test: (a) => a === "auto", parse: (a) => a },
  iv = (a) => (i) => i.test(a),
  sv = [Di, ot, on, ta, e2, t2, AS],
  $p = (a) => sv.find(iv(a));
function MS(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
      ? a === "none" || a === "0" || gg(a)
      : !0;
}
const ES = new Set(["brightness", "contrast", "saturate", "opacity"]);
function CS(a) {
  const [i, r] = a.slice(0, -1).split("(");
  if (i === "drop-shadow") return a;
  const [o] = r.match(rf) || [];
  if (!o) return a;
  const c = r.replace(o, "");
  let l = ES.has(i) ? 1 : 0;
  return (o !== r && (l *= 100), i + "(" + l + c + ")");
}
const wS = /\b([a-z-]*)\(.*?\)/gu,
  kc = {
    ...tn,
    getAnimatableNone: (a) => {
      const i = a.match(wS);
      return i ? i.map(CS).join(" ") : a;
    },
  },
  Xc = {
    ...tn,
    getAnimatableNone: (a) => {
      const i = tn.parse(a);
      return tn.createTransformer(a)(
        i.map((o) =>
          typeof o == "number"
            ? 0
            : typeof o == "object"
              ? { ...o, alpha: 1 }
              : o,
        ),
      );
    },
  },
  t0 = { ...Di, transform: Math.round },
  jS = {
    rotate: ta,
    rotateX: ta,
    rotateY: ta,
    rotateZ: ta,
    scale: dr,
    scaleX: dr,
    scaleY: dr,
    scaleZ: dr,
    skew: ta,
    skewX: ta,
    skewY: ta,
    distance: ot,
    translateX: ot,
    translateY: ot,
    translateZ: ot,
    x: ot,
    y: ot,
    z: ot,
    perspective: ot,
    transformPerspective: ot,
    opacity: Ls,
    originX: Yp,
    originY: Yp,
    originZ: ot,
  },
  Sf = {
    borderWidth: ot,
    borderTopWidth: ot,
    borderRightWidth: ot,
    borderBottomWidth: ot,
    borderLeftWidth: ot,
    borderRadius: ot,
    borderTopLeftRadius: ot,
    borderTopRightRadius: ot,
    borderBottomRightRadius: ot,
    borderBottomLeftRadius: ot,
    width: ot,
    maxWidth: ot,
    height: ot,
    maxHeight: ot,
    top: ot,
    right: ot,
    bottom: ot,
    left: ot,
    inset: ot,
    insetBlock: ot,
    insetBlockStart: ot,
    insetBlockEnd: ot,
    insetInline: ot,
    insetInlineStart: ot,
    insetInlineEnd: ot,
    padding: ot,
    paddingTop: ot,
    paddingRight: ot,
    paddingBottom: ot,
    paddingLeft: ot,
    paddingBlock: ot,
    paddingBlockStart: ot,
    paddingBlockEnd: ot,
    paddingInline: ot,
    paddingInlineStart: ot,
    paddingInlineEnd: ot,
    margin: ot,
    marginTop: ot,
    marginRight: ot,
    marginBottom: ot,
    marginLeft: ot,
    marginBlock: ot,
    marginBlockStart: ot,
    marginBlockEnd: ot,
    marginInline: ot,
    marginInlineStart: ot,
    marginInlineEnd: ot,
    fontSize: ot,
    backgroundPositionX: ot,
    backgroundPositionY: ot,
    ...jS,
    zIndex: t0,
    fillOpacity: Ls,
    strokeOpacity: Ls,
    numOctaves: t0,
  },
  DS = {
    ...Sf,
    color: Wt,
    backgroundColor: Wt,
    outlineColor: Wt,
    fill: Wt,
    stroke: Wt,
    borderColor: Wt,
    borderTopColor: Wt,
    borderRightColor: Wt,
    borderBottomColor: Wt,
    borderLeftColor: Wt,
    filter: kc,
    WebkitFilter: kc,
    mask: Xc,
    WebkitMask: Xc,
  },
  lv = (a) => DS[a],
  NS = new Set([kc, Xc]);
function rv(a, i) {
  let r = lv(a);
  return (
    NS.has(r) || (r = tn),
    r.getAnimatableNone ? r.getAnimatableNone(i) : void 0
  );
}
const RS = new Set(["auto", "none", "0"]);
function OS(a, i, r) {
  let o = 0,
    c;
  for (; o < a.length && !c; ) {
    const l = a[o];
    (typeof l == "string" && !RS.has(l) && Us(l).values.length && (c = a[o]),
      o++);
  }
  if (c && r) for (const l of i) a[l] = rv(r, c);
}
class zS extends pf {
  constructor(i, r, o, c, l) {
    super(i, r, o, c, l, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: r, name: o } = this;
    if (!r || !r.current) return;
    super.readKeyframes();
    for (let g = 0; g < i.length; g++) {
      let x = i[g];
      if (typeof x == "string" && ((x = x.trim()), lf(x))) {
        const y = Ig(x, r.current);
        (y !== void 0 && (i[g] = y),
          g === i.length - 1 && (this.finalKeyframe = x));
      }
    }
    if ((this.resolveNoneKeyframes(), !tv.has(o) || i.length !== 2)) return;
    const [c, l] = i,
      f = $p(c),
      m = $p(l),
      p = Gp(c),
      v = Gp(l);
    if (p !== v && na[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== m)
      if (Qp(f) && Qp(m))
        for (let g = 0; g < i.length; g++) {
          const x = i[g];
          typeof x == "string" && (i[g] = parseFloat(x));
        }
      else na[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: r } = this,
      o = [];
    for (let c = 0; c < i.length; c++) (i[c] === null || MS(i[c])) && o.push(c);
    o.length && OS(i, o, r);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: r, name: o } = this;
    if (!i || !i.current) return;
    (o === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = na[o](
        i.measureViewportBox(),
        window.getComputedStyle(i.current),
      )),
      (r[0] = this.measuredOrigin));
    const c = r[r.length - 1];
    c !== void 0 && i.getValue(o, c).jump(c, !1);
  }
  measureEndState() {
    var m;
    const { element: i, name: r, unresolvedKeyframes: o } = this;
    if (!i || !i.current) return;
    const c = i.getValue(r);
    c && c.jump(this.measuredOrigin, !1);
    const l = o.length - 1,
      f = o[l];
    ((o[l] = na[r](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      (m = this.removedTransforms) != null &&
        m.length &&
        this.removedTransforms.forEach(([p, v]) => {
          i.getValue(p).set(v);
        }),
      this.resolveNoneKeyframes());
  }
}
const BS = new Set(["opacity", "clipPath", "filter", "transform"]);
function bf(a, i, r) {
  if (a == null) return [];
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    const c = document.querySelectorAll(a);
    return c ? Array.from(c) : [];
  }
  return Array.from(a).filter((o) => o != null);
}
const ov = (a, i) => (i && typeof a == "number" ? i.transform(a) : a);
function Nr(a) {
  return pg(a) && "offsetHeight" in a;
}
const { schedule: Tf } = jg(queueMicrotask, !1),
  We = { x: !1, y: !1 };
function uv() {
  return We.x || We.y;
}
function VS(a) {
  return a === "x" || a === "y"
    ? We[a]
      ? null
      : ((We[a] = !0),
        () => {
          We[a] = !1;
        })
    : We.x || We.y
      ? null
      : ((We.x = We.y = !0),
        () => {
          We.x = We.y = !1;
        });
}
function cv(a, i) {
  const r = bf(a),
    o = new AbortController(),
    c = { passive: !0, ...i, signal: o.signal };
  return [r, c, () => o.abort()];
}
function LS(a) {
  return !(a.pointerType === "touch" || uv());
}
function US(a, i, r = {}) {
  const [o, c, l] = cv(a, r);
  return (
    o.forEach((f) => {
      let m = !1,
        p = !1,
        v;
      const g = () => {
          f.removeEventListener("pointerleave", S);
        },
        x = (M) => {
          (v && (v(M), (v = void 0)), g());
        },
        y = (M) => {
          ((m = !1),
            window.removeEventListener("pointerup", y),
            window.removeEventListener("pointercancel", y),
            p && ((p = !1), x(M)));
        },
        d = () => {
          ((m = !0),
            window.addEventListener("pointerup", y, c),
            window.addEventListener("pointercancel", y, c));
        },
        S = (M) => {
          if (M.pointerType !== "touch") {
            if (m) {
              p = !0;
              return;
            }
            x(M);
          }
        },
        b = (M) => {
          if (!LS(M)) return;
          p = !1;
          const C = i(f, M);
          typeof C == "function" &&
            ((v = C), f.addEventListener("pointerleave", S, c));
        };
      (f.addEventListener("pointerenter", b, c),
        f.addEventListener("pointerdown", d, c));
    }),
    l
  );
}
const fv = (a, i) => (i ? (a === i ? !0 : fv(a, i.parentElement)) : !1),
  Af = (a) =>
    a.pointerType === "mouse"
      ? typeof a.button != "number" || a.button <= 0
      : a.isPrimary !== !1,
  HS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function GS(a) {
  return HS.has(a.tagName) || a.isContentEditable === !0;
}
const YS = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function kS(a) {
  return YS.has(a.tagName) || a.isContentEditable === !0;
}
const xr = new WeakSet();
function e0(a) {
  return (i) => {
    i.key === "Enter" && a(i);
  };
}
function hc(a, i) {
  a.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }),
  );
}
const XS = (a, i) => {
  const r = a.currentTarget;
  if (!r) return;
  const o = e0(() => {
    if (xr.has(r)) return;
    hc(r, "down");
    const c = e0(() => {
        hc(r, "up");
      }),
      l = () => hc(r, "cancel");
    (r.addEventListener("keyup", c, i), r.addEventListener("blur", l, i));
  });
  (r.addEventListener("keydown", o, i),
    r.addEventListener("blur", () => r.removeEventListener("keydown", o), i));
};
function n0(a) {
  return Af(a) && !uv();
}
const a0 = new WeakSet();
function qS(a, i, r = {}) {
  const [o, c, l] = cv(a, r),
    f = (m) => {
      const p = m.currentTarget;
      if (!n0(m) || a0.has(m)) return;
      (xr.add(p), r.stopPropagation && a0.add(m));
      const v = i(p, m),
        g = (d, S) => {
          (window.removeEventListener("pointerup", x),
            window.removeEventListener("pointercancel", y),
            xr.has(p) && xr.delete(p),
            n0(d) && typeof v == "function" && v(d, { success: S }));
        },
        x = (d) => {
          g(
            d,
            p === window ||
              p === document ||
              r.useGlobalTarget ||
              fv(p, d.target),
          );
        },
        y = (d) => {
          g(d, !1);
        };
      (window.addEventListener("pointerup", x, c),
        window.addEventListener("pointercancel", y, c));
    };
  return (
    o.forEach((m) => {
      ((r.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c),
        Nr(m) &&
          (m.addEventListener("focus", (v) => XS(v, c)),
          !GS(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0)));
    }),
    l
  );
}
function Mf(a) {
  return pg(a) && "ownerSVGElement" in a;
}
const Sr = new WeakMap();
let ea;
const hv = (a, i, r) => (o, c) =>
    c && c[0]
      ? c[0][a + "Size"]
      : Mf(o) && "getBBox" in o
        ? o.getBBox()[i]
        : o[r],
  PS = hv("inline", "width", "offsetWidth"),
  _S = hv("block", "height", "offsetHeight");
function FS({ target: a, borderBoxSize: i }) {
  var r;
  (r = Sr.get(a)) == null ||
    r.forEach((o) => {
      o(a, {
        get width() {
          return PS(a, i);
        },
        get height() {
          return _S(a, i);
        },
      });
    });
}
function KS(a) {
  a.forEach(FS);
}
function QS() {
  typeof ResizeObserver > "u" || (ea = new ResizeObserver(KS));
}
function ZS(a, i) {
  ea || QS();
  const r = bf(a);
  return (
    r.forEach((o) => {
      let c = Sr.get(o);
      (c || ((c = new Set()), Sr.set(o, c)),
        c.add(i),
        ea == null || ea.observe(o));
    }),
    () => {
      r.forEach((o) => {
        const c = Sr.get(o);
        (c == null || c.delete(i),
          (c != null && c.size) || ea == null || ea.unobserve(o));
      });
    }
  );
}
const br = new Set();
let Ai;
function JS() {
  ((Ai = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    br.forEach((i) => i(a));
  }),
    window.addEventListener("resize", Ai));
}
function WS(a) {
  return (
    br.add(a),
    Ai || JS(),
    () => {
      (br.delete(a),
        !br.size &&
          typeof Ai == "function" &&
          (window.removeEventListener("resize", Ai), (Ai = void 0)));
    }
  );
}
function qc(a, i) {
  return typeof a == "function" ? WS(a) : ZS(a, i);
}
function dv(a, i) {
  let r;
  const o = () => {
    const { currentTime: c } = i,
      f = (c === null ? 0 : c.value) / 100;
    (r !== f && a(f), (r = f));
  };
  return (wt.preUpdate(o, !0), () => Fe(o));
}
function IS(a) {
  return Mf(a) && a.tagName === "svg";
}
function $S(...a) {
  const i = !Array.isArray(a[0]),
    r = i ? 0 : -1,
    o = a[0 + r],
    c = a[1 + r],
    l = a[2 + r],
    f = a[3 + r],
    m = ff(c, l, f);
  return i ? m(o) : m;
}
const tb = [...sv, Wt, tn],
  eb = (a) => tb.find(iv(a)),
  i0 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Mi = () => ({ x: i0(), y: i0() }),
  s0 = () => ({ min: 0, max: 0 }),
  $t = () => ({ x: s0(), y: s0() }),
  nb = new WeakMap();
function Ur(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function Hs(a) {
  return typeof a == "string" || Array.isArray(a);
}
const Ef = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Cf = ["initial", ...Ef];
function Hr(a) {
  return Ur(a.animate) || Cf.some((i) => Hs(a[i]));
}
function mv(a) {
  return !!(Hr(a) || a.variants);
}
function ab(a, i, r) {
  for (const o in i) {
    const c = i[o],
      l = r[o];
    if (he(c)) a.addValue(o, c);
    else if (he(l)) a.addValue(o, Ie(c, { owner: a }));
    else if (l !== c)
      if (a.hasValue(o)) {
        const f = a.getValue(o);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = a.getStaticValue(o);
        a.addValue(o, Ie(f !== void 0 ? f : c, { owner: a }));
      }
  }
  for (const o in r) i[o] === void 0 && a.removeValue(o);
  return i;
}
const Pc = { current: null },
  pv = { current: !1 },
  ib = typeof window < "u";
function sb() {
  if (((pv.current = !0), !!ib))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Pc.current = a.matches);
      (a.addEventListener("change", i), i());
    } else Pc.current = !1;
}
const l0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let Rr = {};
function gv(a) {
  Rr = a;
}
function lb() {
  return Rr;
}
class rb {
  scrapeMotionValuesFromProps(i, r, o) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: r,
      presenceContext: o,
      reducedMotionConfig: c,
      skipAnimations: l,
      blockInitialAnimation: f,
      visualState: m,
    },
    p = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = pf),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const d = pe.now();
        this.renderScheduledAt < d &&
          ((this.renderScheduledAt = d), wt.render(this.render, !1, !0));
      }));
    const { latestValues: v, renderState: g } = m;
    ((this.latestValues = v),
      (this.baseTarget = { ...v }),
      (this.initialValues = r.initial ? { ...v } : {}),
      (this.renderState = g),
      (this.parent = i),
      (this.props = r),
      (this.presenceContext = o),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = c),
      (this.skipAnimationsConfig = l),
      (this.options = p),
      (this.blockInitialAnimation = !!f),
      (this.isControllingVariants = Hr(r)),
      (this.isVariantNode = mv(r)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: x, ...y } = this.scrapeMotionValuesFromProps(
      r,
      {},
      this,
    );
    for (const d in y) {
      const S = y[d];
      v[d] !== void 0 && he(S) && S.set(v[d]);
    }
  }
  mount(i) {
    var r, o;
    if (this.hasBeenMounted)
      for (const c in this.initialValues)
        ((r = this.values.get(c)) == null || r.jump(this.initialValues[c]),
          (this.latestValues[c] = this.initialValues[c]));
    ((this.current = i),
      nb.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((c, l) => this.bindToMotionValue(l, c)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (pv.current || sb(), (this.shouldReduceMotion = Pc.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      (o = this.parent) == null || o.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    var i;
    (this.projection && this.projection.unmount(),
      Fe(this.notifyUpdate),
      Fe(this.render),
      this.valueSubscriptions.forEach((r) => r()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (i = this.parent) == null || i.removeChild(this));
    for (const r in this.events) this.events[r].clear();
    for (const r in this.features) {
      const o = this.features[r];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  addChild(i) {
    (this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(i));
  }
  removeChild(i) {
    (this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i));
  }
  bindToMotionValue(i, r) {
    if (
      (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(),
      r.accelerate && BS.has(i) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: f,
          keyframes: m,
          times: p,
          ease: v,
          duration: g,
        } = r.accelerate,
        x = new Zg({
          element: this.current,
          name: i,
          keyframes: m,
          times: p,
          ease: v,
          duration: $e(g),
        }),
        y = f(x);
      this.valueSubscriptions.set(i, () => {
        (y(), x.cancel());
      });
      return;
    }
    const o = Ri.has(i);
    o && this.onBindTransform && this.onBindTransform();
    const c = r.on("change", (f) => {
      ((this.latestValues[i] = f),
        this.props.onUpdate && wt.preRender(this.notifyUpdate),
        o && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let l;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (l = window.MotionCheckAppearSync(this, i, r)),
      this.valueSubscriptions.set(i, () => {
        (c(), l && l(), r.owner && r.stop());
      }));
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in Rr) {
      const r = Rr[i];
      if (!r) continue;
      const { isEnabled: o, Feature: c } = r;
      if (
        (!this.features[i] &&
          c &&
          o(this.props) &&
          (this.features[i] = new c(this)),
        this.features[i])
      ) {
        const l = this.features[i];
        l.isMounted ? l.update() : (l.mount(), (l.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : $t();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, r) {
    this.latestValues[i] = r;
  }
  update(i, r) {
    ((i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = r));
    for (let o = 0; o < l0.length; o++) {
      const c = l0[o];
      this.propEventSubscriptions[c] &&
        (this.propEventSubscriptions[c](),
        delete this.propEventSubscriptions[c]);
      const l = "on" + c,
        f = i[l];
      f && (this.propEventSubscriptions[c] = this.on(c, f));
    }
    ((this.prevMotionValues = ab(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(i) {
    const r = this.getClosestVariantNode();
    if (r)
      return (
        r.variantChildren && r.variantChildren.add(i),
        () => r.variantChildren.delete(i)
      );
  }
  addValue(i, r) {
    const o = this.values.get(i);
    r !== o &&
      (o && this.removeValue(i),
      this.bindToMotionValue(i, r),
      this.values.set(i, r),
      (this.latestValues[i] = r.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const r = this.valueSubscriptions.get(i);
    (r && (r(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState));
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, r) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let o = this.values.get(i);
    return (
      o === void 0 &&
        r !== void 0 &&
        ((o = Ie(r === null ? void 0 : r, { owner: this })),
        this.addValue(i, o)),
      o
    );
  }
  readValue(i, r) {
    let o =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options));
    return (
      o != null &&
        (typeof o == "string" && (mg(o) || gg(o))
          ? (o = parseFloat(o))
          : !eb(o) && tn.test(r) && (o = rv(i, r)),
        this.setBaseTarget(i, he(o) ? o.get() : o)),
      he(o) ? o.get() : o
    );
  }
  setBaseTarget(i, r) {
    this.baseTarget[i] = r;
  }
  getBaseTarget(i) {
    var l;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const f = yf(
        this.props,
        r,
        (l = this.presenceContext) == null ? void 0 : l.custom,
      );
      f && (o = f[i]);
    }
    if (r && o !== void 0) return o;
    const c = this.getBaseTargetFromProps(this.props, i);
    return c !== void 0 && !he(c)
      ? c
      : this.initialValues[i] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, r) {
    return (
      this.events[i] || (this.events[i] = new ef()),
      this.events[i].add(r)
    );
  }
  notify(i, ...r) {
    this.events[i] && this.events[i].notify(...r);
  }
  scheduleRenderMicrotask() {
    Tf.render(this.render);
  }
}
class vv extends rb {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = zS));
  }
  sortInstanceNodePosition(i, r) {
    return i.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, r) {
    const o = i.style;
    return o ? o[r] : void 0;
  }
  removeValueFromRenderState(i, { vars: r, style: o }) {
    (delete r[i], delete o[i]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    he(i) &&
      (this.childSubscription = i.on("change", (r) => {
        this.current && (this.current.textContent = `${r}`);
      }));
  }
}
class ia {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
function yv({ top: a, left: i, right: r, bottom: o }) {
  return { x: { min: i, max: r }, y: { min: a, max: o } };
}
function ob({ x: a, y: i }) {
  return { top: i.min, right: a.max, bottom: i.max, left: a.min };
}
function ub(a, i) {
  if (!i) return a;
  const r = i({ x: a.left, y: a.top }),
    o = i({ x: a.right, y: a.bottom });
  return { top: r.y, left: r.x, bottom: o.y, right: o.x };
}
function dc(a) {
  return a === void 0 || a === 1;
}
function _c({ scale: a, scaleX: i, scaleY: r }) {
  return !dc(a) || !dc(i) || !dc(r);
}
function wa(a) {
  return (
    _c(a) ||
    xv(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function xv(a) {
  return r0(a.x) || r0(a.y);
}
function r0(a) {
  return a && a !== "0%";
}
function Or(a, i, r) {
  const o = a - r,
    c = i * o;
  return r + c;
}
function o0(a, i, r, o, c) {
  return (c !== void 0 && (a = Or(a, c, o)), Or(a, r, o) + i);
}
function Fc(a, i = 0, r = 1, o, c) {
  ((a.min = o0(a.min, i, r, o, c)), (a.max = o0(a.max, i, r, o, c)));
}
function Sv(a, { x: i, y: r }) {
  (Fc(a.x, i.translate, i.scale, i.originPoint),
    Fc(a.y, r.translate, r.scale, r.originPoint));
}
const u0 = 0.999999999999,
  c0 = 1.0000000000001;
function cb(a, i, r, o = !1) {
  const c = r.length;
  if (!c) return;
  i.x = i.y = 1;
  let l, f;
  for (let m = 0; m < c; m++) {
    ((l = r[m]), (f = l.projectionDelta));
    const { visualElement: p } = l.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (o &&
        l.options.layoutScroll &&
        l.scroll &&
        l !== l.root &&
        Ci(a, { x: -l.scroll.offset.x, y: -l.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Sv(a, f)),
      o && wa(l.latestValues) && Ci(a, l.latestValues));
  }
  (i.x < c0 && i.x > u0 && (i.x = 1), i.y < c0 && i.y > u0 && (i.y = 1));
}
function Ei(a, i) {
  ((a.min = a.min + i), (a.max = a.max + i));
}
function f0(a, i, r, o, c = 0.5) {
  const l = Yt(a.min, a.max, c);
  Fc(a, i, r, l, o);
}
function Ci(a, i) {
  (f0(a.x, i.x, i.scaleX, i.scale, i.originX),
    f0(a.y, i.y, i.scaleY, i.scale, i.originY));
}
function bv(a, i) {
  return yv(ub(a.getBoundingClientRect(), i));
}
function fb(a, i, r) {
  const o = bv(a, r),
    { scroll: c } = i;
  return (c && (Ei(o.x, c.offset.x), Ei(o.y, c.offset.y)), o);
}
const hb = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  db = Ni.length;
function mb(a, i, r) {
  let o = "",
    c = !0;
  for (let l = 0; l < db; l++) {
    const f = Ni[l],
      m = a[f];
    if (m === void 0) continue;
    let p = !0;
    if (typeof m == "number") p = m === (f.startsWith("scale") ? 1 : 0);
    else {
      const v = parseFloat(m);
      p = f.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!p || r) {
      const v = ov(m, Sf[f]);
      if (!p) {
        c = !1;
        const g = hb[f] || f;
        o += `${g}(${v}) `;
      }
      r && (i[f] = v);
    }
  }
  return ((o = o.trim()), r ? (o = r(i, c ? "" : o)) : c && (o = "none"), o);
}
function wf(a, i, r) {
  const { style: o, vars: c, transformOrigin: l } = a;
  let f = !1,
    m = !1;
  for (const p in i) {
    const v = i[p];
    if (Ri.has(p)) {
      f = !0;
      continue;
    } else if (Ng(p)) {
      c[p] = v;
      continue;
    } else {
      const g = ov(v, Sf[p]);
      p.startsWith("origin") ? ((m = !0), (l[p] = g)) : (o[p] = g);
    }
  }
  if (
    (i.transform ||
      (f || r
        ? (o.transform = mb(i, a.transform, r))
        : o.transform && (o.transform = "none")),
    m)
  ) {
    const { originX: p = "50%", originY: v = "50%", originZ: g = 0 } = l;
    o.transformOrigin = `${p} ${v} ${g}`;
  }
}
function Tv(a, { style: i, vars: r }, o, c) {
  const l = a.style;
  let f;
  for (f in i) l[f] = i[f];
  c == null || c.applyProjectionStyles(l, o);
  for (f in r) l.setProperty(f, r[f]);
}
function h0(a, i) {
  return i.max === i.min ? 0 : (a / (i.max - i.min)) * 100;
}
const js = {
    correct: (a, i) => {
      if (!i.target) return a;
      if (typeof a == "string")
        if (ot.test(a)) a = parseFloat(a);
        else return a;
      const r = h0(a, i.target.x),
        o = h0(a, i.target.y);
      return `${r}% ${o}%`;
    },
  },
  pb = {
    correct: (a, { treeScale: i, projectionDelta: r }) => {
      const o = a,
        c = tn.parse(a);
      if (c.length > 5) return o;
      const l = tn.createTransformer(a),
        f = typeof c[0] != "number" ? 1 : 0,
        m = r.x.scale * i.x,
        p = r.y.scale * i.y;
      ((c[0 + f] /= m), (c[1 + f] /= p));
      const v = Yt(m, p, 0.5);
      return (
        typeof c[2 + f] == "number" && (c[2 + f] /= v),
        typeof c[3 + f] == "number" && (c[3 + f] /= v),
        l(c)
      );
    },
  },
  Kc = {
    borderRadius: {
      ...js,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: js,
    borderTopRightRadius: js,
    borderBottomLeftRadius: js,
    borderBottomRightRadius: js,
    boxShadow: pb,
  };
function Av(a, { layout: i, layoutId: r }) {
  return (
    Ri.has(a) ||
    a.startsWith("origin") ||
    ((i || r !== void 0) && (!!Kc[a] || a === "opacity"))
  );
}
function jf(a, i, r) {
  var f;
  const o = a.style,
    c = i == null ? void 0 : i.style,
    l = {};
  if (!o) return l;
  for (const m in o)
    (he(o[m]) ||
      (c && he(c[m])) ||
      Av(m, a) ||
      ((f = r == null ? void 0 : r.getValue(m)) == null
        ? void 0
        : f.liveStyle) !== void 0) &&
      (l[m] = o[m]);
  return l;
}
function gb(a) {
  return window.getComputedStyle(a);
}
class vb extends vv {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Tv));
  }
  readValueFromInstance(i, r) {
    var o;
    if (Ri.has(r))
      return (o = this.projection) != null && o.isProjecting ? Oc(r) : L2(i, r);
    {
      const c = gb(i),
        l = (Ng(r) ? c.getPropertyValue(r) : c[r]) || 0;
      return typeof l == "string" ? l.trim() : l;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: r }) {
    return bv(i, r);
  }
  build(i, r, o) {
    wf(i, r, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, r, o) {
    return jf(i, r, o);
  }
}
const yb = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  xb = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Sb(a, i, r = 1, o = 0, c = !0) {
  a.pathLength = 1;
  const l = c ? yb : xb;
  ((a[l.offset] = `${-o}`), (a[l.array] = `${i} ${r}`));
}
const bb = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function Mv(
  a,
  {
    attrX: i,
    attrY: r,
    attrScale: o,
    pathLength: c,
    pathSpacing: l = 1,
    pathOffset: f = 0,
    ...m
  },
  p,
  v,
  g,
) {
  if ((wf(a, m, v), p)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  ((a.attrs = a.style), (a.style = {}));
  const { attrs: x, style: y } = a;
  (x.transform && ((y.transform = x.transform), delete x.transform),
    (y.transform || x.transformOrigin) &&
      ((y.transformOrigin = x.transformOrigin ?? "50% 50%"),
      delete x.transformOrigin),
    y.transform &&
      ((y.transformBox = (g == null ? void 0 : g.transformBox) ?? "fill-box"),
      delete x.transformBox));
  for (const d of bb) x[d] !== void 0 && ((y[d] = x[d]), delete x[d]);
  (i !== void 0 && (x.x = i),
    r !== void 0 && (x.y = r),
    o !== void 0 && (x.scale = o),
    c !== void 0 && Sb(x, c, l, f, !1));
}
const Ev = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  Cv = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function Tb(a, i, r, o) {
  Tv(a, i, void 0, o);
  for (const c in i.attrs) a.setAttribute(Ev.has(c) ? c : xf(c), i.attrs[c]);
}
function wv(a, i, r) {
  const o = jf(a, i, r);
  for (const c in a)
    if (he(a[c]) || he(i[c])) {
      const l =
        Ni.indexOf(c) !== -1
          ? "attr" + c.charAt(0).toUpperCase() + c.substring(1)
          : c;
      o[l] = a[c];
    }
  return o;
}
class Ab extends vv {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = $t));
  }
  getBaseTargetFromProps(i, r) {
    return i[r];
  }
  readValueFromInstance(i, r) {
    if (Ri.has(r)) {
      const o = lv(r);
      return (o && o.default) || 0;
    }
    return ((r = Ev.has(r) ? r : xf(r)), i.getAttribute(r));
  }
  scrapeMotionValuesFromProps(i, r, o) {
    return wv(i, r, o);
  }
  build(i, r, o) {
    Mv(i, r, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(i, r, o, c) {
    Tb(i, r, o, c);
  }
  mount(i) {
    ((this.isSVGTag = Cv(i.tagName)), super.mount(i));
  }
}
const Mb = Cf.length;
function jv(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const r = a.parent ? jv(a.parent) || {} : {};
    return (a.props.initial !== void 0 && (r.initial = a.props.initial), r);
  }
  const i = {};
  for (let r = 0; r < Mb; r++) {
    const o = Cf[r],
      c = a.props[o];
    (Hs(c) || c === !1) && (i[o] = c);
  }
  return i;
}
function Dv(a, i) {
  if (!Array.isArray(i)) return !1;
  const r = i.length;
  if (r !== a.length) return !1;
  for (let o = 0; o < r; o++) if (i[o] !== a[o]) return !1;
  return !0;
}
const Eb = [...Ef].reverse(),
  Cb = Ef.length;
function wb(a) {
  return (i) =>
    Promise.all(i.map(({ animation: r, options: o }) => TS(a, r, o)));
}
function jb(a) {
  let i = wb(a),
    r = d0(),
    o = !0;
  const c = (p) => (v, g) => {
    var y;
    const x = wi(
      a,
      g,
      p === "exit"
        ? (y = a.presenceContext) == null
          ? void 0
          : y.custom
        : void 0,
    );
    if (x) {
      const { transition: d, transitionEnd: S, ...b } = x;
      v = { ...v, ...b, ...S };
    }
    return v;
  };
  function l(p) {
    i = p(a);
  }
  function f(p) {
    const { props: v } = a,
      g = jv(a.parent) || {},
      x = [],
      y = new Set();
    let d = {},
      S = 1 / 0;
    for (let M = 0; M < Cb; M++) {
      const C = Eb[M],
        O = r[C],
        N = v[C] !== void 0 ? v[C] : g[C],
        V = Hs(N),
        E = C === p ? O.isActive : null;
      E === !1 && (S = M);
      let D = N === g[C] && N !== v[C] && V;
      if (
        (D && o && a.manuallyAnimateOnMount && (D = !1),
        (O.protectedKeys = { ...d }),
        (!O.isActive && E === null) ||
          (!N && !O.prevProp) ||
          Ur(N) ||
          typeof N == "boolean")
      )
        continue;
      if (C === "exit" && O.isActive && E !== !0) {
        O.prevResolvedValues && (d = { ...d, ...O.prevResolvedValues });
        continue;
      }
      const R = Db(O.prevProp, N);
      let j = R || (C === p && O.isActive && !D && V) || (M > S && V),
        B = !1;
      const z = Array.isArray(N) ? N : [N];
      let U = z.reduce(c(C), {});
      E === !1 && (U = {});
      const { prevResolvedValues: H = {} } = O,
        q = { ...H, ...U },
        I = (P) => {
          ((j = !0),
            y.has(P) && ((B = !0), y.delete(P)),
            (O.needsAnimating[P] = !0));
          const et = a.getValue(P);
          et && (et.liveStyle = !1);
        };
      for (const P in q) {
        const et = U[P],
          it = H[P];
        if (d.hasOwnProperty(P)) continue;
        let ct = !1;
        (Hc(et) && Hc(it) ? (ct = !Dv(et, it)) : (ct = et !== it),
          ct
            ? et != null
              ? I(P)
              : y.add(P)
            : et !== void 0 && y.has(P)
              ? I(P)
              : (O.protectedKeys[P] = !0));
      }
      ((O.prevProp = N),
        (O.prevResolvedValues = U),
        O.isActive && (d = { ...d, ...U }),
        o && a.blockInitialAnimation && (j = !1));
      const tt = D && R;
      j &&
        (!tt || B) &&
        x.push(
          ...z.map((P) => {
            const et = { type: C };
            if (
              typeof P == "string" &&
              o &&
              !tt &&
              a.manuallyAnimateOnMount &&
              a.parent
            ) {
              const { parent: it } = a,
                ct = wi(it, P);
              if (it.enteringChildren && ct) {
                const { delayChildren: G } = ct.transition || {};
                et.delay = Wg(it.enteringChildren, a, G);
              }
            }
            return { animation: P, options: et };
          }),
        );
    }
    if (y.size) {
      const M = {};
      if (typeof v.initial != "boolean") {
        const C = wi(a, Array.isArray(v.initial) ? v.initial[0] : v.initial);
        C && C.transition && (M.transition = C.transition);
      }
      (y.forEach((C) => {
        const O = a.getBaseTarget(C),
          N = a.getValue(C);
        (N && (N.liveStyle = !0), (M[C] = O ?? null));
      }),
        x.push({ animation: M }));
    }
    let b = !!x.length;
    return (
      o &&
        (v.initial === !1 || v.initial === v.animate) &&
        !a.manuallyAnimateOnMount &&
        (b = !1),
      (o = !1),
      b ? i(x) : Promise.resolve()
    );
  }
  function m(p, v) {
    var x;
    if (r[p].isActive === v) return Promise.resolve();
    ((x = a.variantChildren) == null ||
      x.forEach((y) => {
        var d;
        return (d = y.animationState) == null ? void 0 : d.setActive(p, v);
      }),
      (r[p].isActive = v));
    const g = f(p);
    for (const y in r) r[y].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: f,
    setActive: m,
    setAnimateFunction: l,
    getState: () => r,
    reset: () => {
      r = d0();
    },
  };
}
function Db(a, i) {
  return typeof i == "string" ? i !== a : Array.isArray(i) ? !Dv(i, a) : !1;
}
function Ca(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function d0() {
  return {
    animate: Ca(!0),
    whileInView: Ca(),
    whileHover: Ca(),
    whileTap: Ca(),
    whileDrag: Ca(),
    whileFocus: Ca(),
    exit: Ca(),
  };
}
function m0(a, i) {
  ((a.min = i.min), (a.max = i.max));
}
function Je(a, i) {
  (m0(a.x, i.x), m0(a.y, i.y));
}
function p0(a, i) {
  ((a.translate = i.translate),
    (a.scale = i.scale),
    (a.originPoint = i.originPoint),
    (a.origin = i.origin));
}
const Nv = 1e-4,
  Nb = 1 - Nv,
  Rb = 1 + Nv,
  Rv = 0.01,
  Ob = 0 - Rv,
  zb = 0 + Rv;
function ge(a) {
  return a.max - a.min;
}
function Bb(a, i, r) {
  return Math.abs(a - i) <= r;
}
function g0(a, i, r, o = 0.5) {
  ((a.origin = o),
    (a.originPoint = Yt(i.min, i.max, a.origin)),
    (a.scale = ge(r) / ge(i)),
    (a.translate = Yt(r.min, r.max, a.origin) - a.originPoint),
    ((a.scale >= Nb && a.scale <= Rb) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= Ob && a.translate <= zb) || isNaN(a.translate)) &&
      (a.translate = 0));
}
function zs(a, i, r, o) {
  (g0(a.x, i.x, r.x, o ? o.originX : void 0),
    g0(a.y, i.y, r.y, o ? o.originY : void 0));
}
function v0(a, i, r) {
  ((a.min = r.min + i.min), (a.max = a.min + ge(i)));
}
function Vb(a, i, r) {
  (v0(a.x, i.x, r.x), v0(a.y, i.y, r.y));
}
function y0(a, i, r) {
  ((a.min = i.min - r.min), (a.max = a.min + ge(i)));
}
function zr(a, i, r) {
  (y0(a.x, i.x, r.x), y0(a.y, i.y, r.y));
}
function x0(a, i, r, o, c) {
  return (
    (a -= i),
    (a = Or(a, 1 / r, o)),
    c !== void 0 && (a = Or(a, 1 / c, o)),
    a
  );
}
function Lb(a, i = 0, r = 1, o = 0.5, c, l = a, f = a) {
  if (
    (on.test(i) &&
      ((i = parseFloat(i)), (i = Yt(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let m = Yt(l.min, l.max, o);
  (a === l && (m -= i),
    (a.min = x0(a.min, i, r, m, c)),
    (a.max = x0(a.max, i, r, m, c)));
}
function S0(a, i, [r, o, c], l, f) {
  Lb(a, i[r], i[o], i[c], i.scale, l, f);
}
const Ub = ["x", "scaleX", "originX"],
  Hb = ["y", "scaleY", "originY"];
function b0(a, i, r, o) {
  (S0(a.x, i, Ub, r ? r.x : void 0, o ? o.x : void 0),
    S0(a.y, i, Hb, r ? r.y : void 0, o ? o.y : void 0));
}
function T0(a) {
  return a.translate === 0 && a.scale === 1;
}
function Ov(a) {
  return T0(a.x) && T0(a.y);
}
function A0(a, i) {
  return a.min === i.min && a.max === i.max;
}
function Gb(a, i) {
  return A0(a.x, i.x) && A0(a.y, i.y);
}
function M0(a, i) {
  return (
    Math.round(a.min) === Math.round(i.min) &&
    Math.round(a.max) === Math.round(i.max)
  );
}
function zv(a, i) {
  return M0(a.x, i.x) && M0(a.y, i.y);
}
function E0(a) {
  return ge(a.x) / ge(a.y);
}
function C0(a, i) {
  return (
    a.translate === i.translate &&
    a.scale === i.scale &&
    a.originPoint === i.originPoint
  );
}
function rn(a) {
  return [a("x"), a("y")];
}
function Yb(a, i, r) {
  let o = "";
  const c = a.x.translate / i.x,
    l = a.y.translate / i.y,
    f = (r == null ? void 0 : r.z) || 0;
  if (
    ((c || l || f) && (o = `translate3d(${c}px, ${l}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (o += `scale(${1 / i.x}, ${1 / i.y}) `),
    r)
  ) {
    const {
      transformPerspective: v,
      rotate: g,
      rotateX: x,
      rotateY: y,
      skewX: d,
      skewY: S,
    } = r;
    (v && (o = `perspective(${v}px) ${o}`),
      g && (o += `rotate(${g}deg) `),
      x && (o += `rotateX(${x}deg) `),
      y && (o += `rotateY(${y}deg) `),
      d && (o += `skewX(${d}deg) `),
      S && (o += `skewY(${S}deg) `));
  }
  const m = a.x.scale * i.x,
    p = a.y.scale * i.y;
  return ((m !== 1 || p !== 1) && (o += `scale(${m}, ${p})`), o || "none");
}
const Bv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  kb = Bv.length,
  w0 = (a) => (typeof a == "string" ? parseFloat(a) : a),
  j0 = (a) => typeof a == "number" || ot.test(a);
function Xb(a, i, r, o, c, l) {
  c
    ? ((a.opacity = Yt(0, r.opacity ?? 1, qb(o))),
      (a.opacityExit = Yt(i.opacity ?? 1, 0, Pb(o))))
    : l && (a.opacity = Yt(i.opacity ?? 1, r.opacity ?? 1, o));
  for (let f = 0; f < kb; f++) {
    const m = `border${Bv[f]}Radius`;
    let p = D0(i, m),
      v = D0(r, m);
    if (p === void 0 && v === void 0) continue;
    (p || (p = 0),
      v || (v = 0),
      p === 0 || v === 0 || j0(p) === j0(v)
        ? ((a[m] = Math.max(Yt(w0(p), w0(v), o), 0)),
          (on.test(v) || on.test(p)) && (a[m] += "%"))
        : (a[m] = v));
  }
  (i.rotate || r.rotate) && (a.rotate = Yt(i.rotate || 0, r.rotate || 0, o));
}
function D0(a, i) {
  return a[i] !== void 0 ? a[i] : a.borderRadius;
}
const qb = Vv(0, 0.5, Mg),
  Pb = Vv(0.5, 0.95, Me);
function Vv(a, i, r) {
  return (o) => (o < a ? 0 : o > i ? 1 : r(ji(a, i, o)));
}
function _b(a, i, r) {
  const o = he(a) ? a : Ie(a);
  return (o.start(vf("", o, i, r)), o.animation);
}
function Gs(a, i, r, o = { passive: !0 }) {
  return (a.addEventListener(i, r, o), () => a.removeEventListener(i, r));
}
const Fb = (a, i) => a.depth - i.depth;
class Kb {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (tf(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (Cr(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(Fb),
      (this.isDirty = !1),
      this.children.forEach(i));
  }
}
function Qb(a, i) {
  const r = pe.now(),
    o = ({ timestamp: c }) => {
      const l = c - r;
      l >= i && (Fe(o), a(l - i));
    };
  return (wt.setup(o, !0), () => Fe(o));
}
function Tr(a) {
  return he(a) ? a.get() : a;
}
class Zb {
  constructor() {
    this.members = [];
  }
  add(i) {
    tf(this.members, i);
    for (let r = this.members.length - 1; r >= 0; r--) {
      const o = this.members[r];
      if (o === i || o === this.lead || o === this.prevLead) continue;
      const c = o.instance;
      c &&
        c.isConnected === !1 &&
        o.isPresent !== !1 &&
        !o.snapshot &&
        Cr(this.members, o);
    }
    i.scheduleRender();
  }
  remove(i) {
    if (
      (Cr(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(i) {
    const r = this.members.findIndex((c) => i === c);
    if (r === 0) return !1;
    let o;
    for (let c = r; c >= 0; c--) {
      const l = this.members[c],
        f = l.instance;
      if (l.isPresent !== !1 && (!f || f.isConnected !== !1)) {
        o = l;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(i, r) {
    const o = this.lead;
    if (i !== o && ((this.prevLead = o), (this.lead = i), i.show(), o)) {
      (o.instance && o.scheduleRender(), i.scheduleRender());
      const c = o.options.layoutDependency,
        l = i.options.layoutDependency;
      if (!(c !== void 0 && l !== void 0 && c === l)) {
        const p = o.instance;
        (p && p.isConnected === !1 && !o.snapshot) ||
          ((i.resumeFrom = o),
          r && (i.resumeFrom.preserveOpacity = !0),
          o.snapshot &&
            ((i.snapshot = o.snapshot),
            (i.snapshot.latestValues = o.animationValues || o.latestValues)),
          i.root && i.root.isUpdating && (i.isLayoutDirty = !0));
      }
      const { crossfade: m } = i.options;
      m === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: r, resumingFrom: o } = i;
      (r.onExitComplete && r.onExitComplete(),
        o && o.options.onExitComplete && o.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
const Ar = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  mc = ["", "X", "Y", "Z"],
  Jb = 1e3;
let Wb = 0;
function pc(a, i, r, o) {
  const { latestValues: c } = i;
  c[a] && ((r[a] = c[a]), i.setStaticValue(a, 0), o && (o[a] = 0));
}
function Lv(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: i } = a.options;
  if (!i) return;
  const r = nv(i);
  if (window.MotionHasOptimisedAnimation(r, "transform")) {
    const { layout: c, layoutId: l } = a.options;
    window.MotionCancelOptimisedAnimation(r, "transform", wt, !(c || l));
  }
  const { parent: o } = a;
  o && !o.hasCheckedOptimisedAppear && Lv(o);
}
function Uv({
  attachResizeListener: a,
  defaultParent: i,
  measureScroll: r,
  checkIsScrollRoot: o,
  resetTransform: c,
}) {
  return class {
    constructor(f = {}, m = i == null ? void 0 : i()) {
      ((this.id = Wb++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(tT),
            this.nodes.forEach(iT),
            this.nodes.forEach(sT),
            this.nodes.forEach(eT));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = m ? m.root || m : this),
        (this.path = m ? [...m.path, m] : []),
        (this.parent = m),
        (this.depth = m ? m.depth + 1 : 0));
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Kb());
    }
    addEventListener(f, m) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new ef()),
        this.eventHandlers.get(f).add(m)
      );
    }
    notifyListeners(f, ...m) {
      const p = this.eventHandlers.get(f);
      p && p.notify(...m);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = Mf(f) && !IS(f)), (this.instance = f));
      const { layoutId: m, layout: p, visualElement: v } = this.options;
      if (
        (v && !v.current && v.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (p || m) && (this.isLayoutDirty = !0),
        a)
      ) {
        let g,
          x = 0;
        const y = () => (this.root.updateBlockedByResize = !1);
        (wt.read(() => {
          x = window.innerWidth;
        }),
          a(f, () => {
            const d = window.innerWidth;
            d !== x &&
              ((x = d),
              (this.root.updateBlockedByResize = !0),
              g && g(),
              (g = Qb(y, 250)),
              Ar.hasAnimatedSinceResize &&
                ((Ar.hasAnimatedSinceResize = !1), this.nodes.forEach(O0)));
          }));
      }
      (m && this.root.registerSharedNode(m, this),
        this.options.animate !== !1 &&
          v &&
          (m || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: g,
              hasLayoutChanged: x,
              hasRelativeLayoutChanged: y,
              layout: d,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const S =
                  this.options.transition || v.getDefaultTransition() || cT,
                { onLayoutAnimationStart: b, onLayoutAnimationComplete: M } =
                  v.getProps(),
                C = !this.targetLayout || !zv(this.targetLayout, d),
                O = !x && y;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                O ||
                (x && (C || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const N = { ...gf(S, "layout"), onPlay: b, onComplete: M };
                ((v.shouldReduceMotion || this.options.layoutRoot) &&
                  ((N.delay = 0), (N.type = !1)),
                  this.startAnimation(N),
                  this.setAnimationOrigin(g, O));
              } else
                (x || O0(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = d;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Fe(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(lT),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Lv(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let g = 0; g < this.path.length; g++) {
        const x = this.path[g];
        ((x.shouldResetTransform = !0),
          x.updateScroll("snapshot"),
          x.options.layoutRoot && x.willUpdate(!1));
      }
      const { layoutId: m, layout: p } = this.options;
      if (m === void 0 && !p) return;
      const v = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = v
        ? v(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(N0));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(R0);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(aT),
            this.nodes.forEach(Ib),
            this.nodes.forEach($b))
          : this.nodes.forEach(R0),
        this.clearAllSnapshots());
      const m = pe.now();
      ((ae.delta = en(0, 1e3 / 60, m - ae.timestamp)),
        (ae.timestamp = m),
        (ae.isProcessing = !0),
        lc.update.process(ae),
        lc.preRender.process(ae),
        lc.render.process(ae),
        (ae.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Tf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(nT), this.sharedNodes.forEach(rT));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        wt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      wt.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !ge(this.snapshot.measuredBox.x) &&
          !ge(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const f = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = $t()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: m } = this.options;
      m &&
        m.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0,
        );
    }
    updateScroll(f = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (m = !1),
        m && this.instance)
      ) {
        const p = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: r(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!c) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        m = this.projectionDelta && !Ov(this.projectionDelta),
        p = this.getTransformTemplate(),
        v = p ? p(this.latestValues, "") : void 0,
        g = v !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (m || wa(this.latestValues) || g) &&
        (c(this.instance, v),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let p = this.removeElementScroll(m);
      return (
        f && (p = this.removeTransform(p)),
        fT(p),
        {
          animationId: this.root.animationId,
          measuredBox: m,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var v;
      const { visualElement: f } = this.options;
      if (!f) return $t();
      const m = f.measureViewportBox();
      if (
        !(
          ((v = this.scroll) == null ? void 0 : v.wasRoot) || this.path.some(hT)
        )
      ) {
        const { scroll: g } = this.root;
        g && (Ei(m.x, g.offset.x), Ei(m.y, g.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      var p;
      const m = $t();
      if ((Je(m, f), (p = this.scroll) != null && p.wasRoot)) return m;
      for (let v = 0; v < this.path.length; v++) {
        const g = this.path[v],
          { scroll: x, options: y } = g;
        g !== this.root &&
          x &&
          y.layoutScroll &&
          (x.wasRoot && Je(m, f), Ei(m.x, x.offset.x), Ei(m.y, x.offset.y));
      }
      return m;
    }
    applyTransform(f, m = !1) {
      const p = $t();
      Je(p, f);
      for (let v = 0; v < this.path.length; v++) {
        const g = this.path[v];
        (!m &&
          g.options.layoutScroll &&
          g.scroll &&
          g !== g.root &&
          Ci(p, { x: -g.scroll.offset.x, y: -g.scroll.offset.y }),
          wa(g.latestValues) && Ci(p, g.latestValues));
      }
      return (wa(this.latestValues) && Ci(p, this.latestValues), p);
    }
    removeTransform(f) {
      const m = $t();
      Je(m, f);
      for (let p = 0; p < this.path.length; p++) {
        const v = this.path[p];
        if (!v.instance || !wa(v.latestValues)) continue;
        _c(v.latestValues) && v.updateSnapshot();
        const g = $t(),
          x = v.measurePageBox();
        (Je(g, x),
          b0(m, v.latestValues, v.snapshot ? v.snapshot.layoutBox : void 0, g));
      }
      return (wa(this.latestValues) && b0(m, this.latestValues), m);
    }
    setTargetDelta(f) {
      ((this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ae.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      var d;
      const m = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = m.isSharedProjectionDirty));
      const p = !!this.resumingFrom || this !== m;
      if (
        !(
          f ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((d = this.parent) != null && d.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: g, layoutId: x } = this.options;
      if (!this.layout || !(g || x)) return;
      this.resolvedRelativeTargetAt = ae.timestamp;
      const y = this.getClosestProjectingParent();
      (y &&
        this.linkedParentVersion !== y.layoutVersion &&
        !y.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (y && y.layout
            ? this.createRelativeTarget(
                y,
                this.layout.layoutBox,
                y.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = $t()), (this.targetWithTransforms = $t())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Vb(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Je(this.target, this.layout.layoutBox),
                Sv(this.target, this.targetDelta))
              : Je(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            y &&
            !!y.resumingFrom == !!this.resumingFrom &&
            !y.options.layoutScroll &&
            y.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(y, this.target, y.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          _c(this.parent.latestValues) ||
          xv(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, m, p) {
      ((this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = $t()),
        (this.relativeTargetOrigin = $t()),
        zr(this.relativeTargetOrigin, m, p),
        Je(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      var S;
      const f = this.getLead(),
        m = !!this.resumingFrom || this !== f;
      let p = !0;
      if (
        ((this.isProjectionDirty ||
          ((S = this.parent) != null && S.isProjectionDirty)) &&
          (p = !1),
        m &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === ae.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: v, layoutId: g } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(v || g))
      )
        return;
      Je(this.layoutCorrected, this.layout.layoutBox);
      const x = this.treeScale.x,
        y = this.treeScale.y;
      (cb(this.layoutCorrected, this.treeScale, this.path, m),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = $t())));
      const { target: d } = f;
      if (!d) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (p0(this.prevProjectionDelta.x, this.projectionDelta.x),
          p0(this.prevProjectionDelta.y, this.projectionDelta.y)),
        zs(this.projectionDelta, this.layoutCorrected, d, this.latestValues),
        (this.treeScale.x !== x ||
          this.treeScale.y !== y ||
          !C0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !C0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", d)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      var m;
      if (((m = this.options.visualElement) == null || m.scheduleRender(), f)) {
        const p = this.getStack();
        p && p.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = Mi()),
        (this.projectionDelta = Mi()),
        (this.projectionDeltaWithTransform = Mi()));
    }
    setAnimationOrigin(f, m = !1) {
      const p = this.snapshot,
        v = p ? p.latestValues : {},
        g = { ...this.latestValues },
        x = Mi();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !m));
      const y = $t(),
        d = p ? p.source : void 0,
        S = this.layout ? this.layout.source : void 0,
        b = d !== S,
        M = this.getStack(),
        C = !M || M.members.length <= 1,
        O = !!(b && !C && this.options.crossfade === !0 && !this.path.some(uT));
      this.animationProgress = 0;
      let N;
      ((this.mixTargetDelta = (V) => {
        const E = V / 1e3;
        (z0(x.x, f.x, E),
          z0(x.y, f.y, E),
          this.setTargetDelta(x),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (zr(y, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            oT(this.relativeTarget, this.relativeTargetOrigin, y, E),
            N && Gb(this.relativeTarget, N) && (this.isProjectionDirty = !1),
            N || (N = $t()),
            Je(N, this.relativeTarget)),
          b &&
            ((this.animationValues = g), Xb(g, v, this.latestValues, E, O, C)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      var m, p, v;
      (this.notifyListeners("animationStart"),
        (m = this.currentAnimation) == null || m.stop(),
        (v = (p = this.resumingFrom) == null ? void 0 : p.currentAnimation) ==
          null || v.stop(),
        this.pendingAnimation &&
          (Fe(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = wt.update(() => {
          ((Ar.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Ie(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = _b(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (g) => {
                (this.mixTargetDelta(g), f.onUpdate && f.onUpdate(g));
              },
              onStop: () => {},
              onComplete: () => {
                (f.onComplete && f.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      (f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Jb),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: m,
        target: p,
        layout: v,
        latestValues: g,
      } = f;
      if (!(!m || !p || !v)) {
        if (
          this !== f &&
          this.layout &&
          v &&
          Hv(this.options.animationType, this.layout.layoutBox, v.layoutBox)
        ) {
          p = this.target || $t();
          const x = ge(this.layout.layoutBox.x);
          ((p.x.min = f.target.x.min), (p.x.max = p.x.min + x));
          const y = ge(this.layout.layoutBox.y);
          ((p.y.min = f.target.y.min), (p.y.max = p.y.min + y));
        }
        (Je(m, p),
          Ci(m, g),
          zs(this.projectionDeltaWithTransform, this.layoutCorrected, m, g));
      }
    }
    registerSharedNode(f, m) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new Zb()),
        this.sharedNodes.get(f).add(m));
      const v = m.options.initialPromotionConfig;
      m.promote({
        transition: v ? v.transition : void 0,
        preserveFollowOpacity:
          v && v.shouldPreserveFollowOpacity
            ? v.shouldPreserveFollowOpacity(m)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      var m;
      const { layoutId: f } = this.options;
      return f
        ? ((m = this.getStack()) == null ? void 0 : m.lead) || this
        : this;
    }
    getPrevLead() {
      var m;
      const { layoutId: f } = this.options;
      return f ? ((m = this.getStack()) == null ? void 0 : m.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: m, preserveFollowOpacity: p } = {}) {
      const v = this.getStack();
      (v && v.promote(this, p),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        m && this.setOptions({ transition: m }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let m = !1;
      const { latestValues: p } = f;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (m = !0),
        !m)
      )
        return;
      const v = {};
      p.z && pc("z", f, v, this.animationValues);
      for (let g = 0; g < mc.length; g++)
        (pc(`rotate${mc[g]}`, f, v, this.animationValues),
          pc(`skew${mc[g]}`, f, v, this.animationValues));
      f.render();
      for (const g in v)
        (f.setStaticValue(g, v[g]),
          this.animationValues && (this.animationValues[g] = v[g]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, m) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = Tr(m == null ? void 0 : m.pointerEvents) || ""),
          (f.transform = p ? p(this.latestValues, "") : "none"));
        return;
      }
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        (this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = Tr(m == null ? void 0 : m.pointerEvents) || "")),
          this.hasProjected &&
            !wa(this.latestValues) &&
            ((f.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const g = v.animationValues || v.latestValues;
      this.applyTransformsToTarget();
      let x = Yb(this.projectionDeltaWithTransform, this.treeScale, g);
      (p && (x = p(g, x)), (f.transform = x));
      const { x: y, y: d } = this.projectionDelta;
      ((f.transformOrigin = `${y.origin * 100}% ${d.origin * 100}% 0`),
        v.animationValues
          ? (f.opacity =
              v === this
                ? (g.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : g.opacityExit)
          : (f.opacity =
              v === this
                ? g.opacity !== void 0
                  ? g.opacity
                  : ""
                : g.opacityExit !== void 0
                  ? g.opacityExit
                  : 0));
      for (const S in Kc) {
        if (g[S] === void 0) continue;
        const { correct: b, applyTo: M, isCSSVariable: C } = Kc[S],
          O = x === "none" ? g[S] : b(g[S], v);
        if (M) {
          const N = M.length;
          for (let V = 0; V < N; V++) f[M[V]] = O;
        } else
          C ? (this.options.visualElement.renderState.vars[S] = O) : (f[S] = O);
      }
      this.options.layoutId &&
        (f.pointerEvents =
          v === this ? Tr(m == null ? void 0 : m.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => {
        var m;
        return (m = f.currentAnimation) == null ? void 0 : m.stop();
      }),
        this.root.nodes.forEach(N0),
        this.root.sharedNodes.clear());
    }
  };
}
function Ib(a) {
  a.updateLayout();
}
function $b(a) {
  var r;
  const i = ((r = a.resumeFrom) == null ? void 0 : r.snapshot) || a.snapshot;
  if (a.isLead() && a.layout && i && a.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: c } = a.layout,
      { animationType: l } = a.options,
      f = i.source !== a.layout.source;
    l === "size"
      ? rn((x) => {
          const y = f ? i.measuredBox[x] : i.layoutBox[x],
            d = ge(y);
          ((y.min = o[x].min), (y.max = y.min + d));
        })
      : Hv(l, i.layoutBox, o) &&
        rn((x) => {
          const y = f ? i.measuredBox[x] : i.layoutBox[x],
            d = ge(o[x]);
          ((y.max = y.min + d),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[x].max = a.relativeTarget[x].min + d)));
        });
    const m = Mi();
    zs(m, o, i.layoutBox);
    const p = Mi();
    f ? zs(p, a.applyTransform(c, !0), i.measuredBox) : zs(p, o, i.layoutBox);
    const v = !Ov(m);
    let g = !1;
    if (!a.resumeFrom) {
      const x = a.getClosestProjectingParent();
      if (x && !x.resumeFrom) {
        const { snapshot: y, layout: d } = x;
        if (y && d) {
          const S = $t();
          zr(S, i.layoutBox, y.layoutBox);
          const b = $t();
          (zr(b, o, d.layoutBox),
            zv(S, b) || (g = !0),
            x.options.layoutRoot &&
              ((a.relativeTarget = b),
              (a.relativeTargetOrigin = S),
              (a.relativeParent = x)));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: o,
      snapshot: i,
      delta: p,
      layoutDelta: m,
      hasLayoutChanged: v,
      hasRelativeLayoutChanged: g,
    });
  } else if (a.isLead()) {
    const { onExitComplete: o } = a.options;
    o && o();
  }
  a.options.transition = void 0;
}
function tT(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function eT(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function nT(a) {
  a.clearSnapshot();
}
function N0(a) {
  a.clearMeasurements();
}
function R0(a) {
  a.isLayoutDirty = !1;
}
function aT(a) {
  const { visualElement: i } = a.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    a.resetTransform());
}
function O0(a) {
  (a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0));
}
function iT(a) {
  a.resolveTargetDelta();
}
function sT(a) {
  a.calcProjection();
}
function lT(a) {
  a.resetSkewAndRotation();
}
function rT(a) {
  a.removeLeadSnapshot();
}
function z0(a, i, r) {
  ((a.translate = Yt(i.translate, 0, r)),
    (a.scale = Yt(i.scale, 1, r)),
    (a.origin = i.origin),
    (a.originPoint = i.originPoint));
}
function B0(a, i, r, o) {
  ((a.min = Yt(i.min, r.min, o)), (a.max = Yt(i.max, r.max, o)));
}
function oT(a, i, r, o) {
  (B0(a.x, i.x, r.x, o), B0(a.y, i.y, r.y, o));
}
function uT(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const cT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  V0 = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  L0 = V0("applewebkit/") && !V0("chrome/") ? Math.round : Me;
function U0(a) {
  ((a.min = L0(a.min)), (a.max = L0(a.max)));
}
function fT(a) {
  (U0(a.x), U0(a.y));
}
function Hv(a, i, r) {
  return (
    a === "position" || (a === "preserve-aspect" && !Bb(E0(i), E0(r), 0.2))
  );
}
function hT(a) {
  var i;
  return a !== a.root && ((i = a.scroll) == null ? void 0 : i.wasRoot);
}
const dT = Uv({
    attachResizeListener: (a, i) => Gs(a, "resize", i),
    measureScroll: () => {
      var a, i;
      return {
        x:
          document.documentElement.scrollLeft ||
          ((a = document.body) == null ? void 0 : a.scrollLeft) ||
          0,
        y:
          document.documentElement.scrollTop ||
          ((i = document.body) == null ? void 0 : i.scrollTop) ||
          0,
      };
    },
    checkIsScrollRoot: () => !0,
  }),
  gc = { current: void 0 },
  Gv = Uv({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!gc.current) {
        const a = new dT({});
        (a.mount(window), a.setOptions({ layoutScroll: !0 }), (gc.current = a));
      }
      return gc.current;
    },
    resetTransform: (a, i) => {
      a.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  Gr = nt.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
function H0(a, i) {
  if (typeof a == "function") return a(i);
  a != null && (a.current = i);
}
function mT(...a) {
  return (i) => {
    let r = !1;
    const o = a.map((c) => {
      const l = H0(c, i);
      return (!r && typeof l == "function" && (r = !0), l);
    });
    if (r)
      return () => {
        for (let c = 0; c < o.length; c++) {
          const l = o[c];
          typeof l == "function" ? l() : H0(a[c], null);
        }
      };
  };
}
function pT(...a) {
  return nt.useCallback(mT(...a), a);
}
class gT extends nt.Component {
  getSnapshotBeforeUpdate(i) {
    const r = this.props.childRef.current;
    if (r && i.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const o = r.offsetParent,
        c = (Nr(o) && o.offsetWidth) || 0,
        l = (Nr(o) && o.offsetHeight) || 0,
        f = this.props.sizeRef.current;
      ((f.height = r.offsetHeight || 0),
        (f.width = r.offsetWidth || 0),
        (f.top = r.offsetTop),
        (f.left = r.offsetLeft),
        (f.right = c - f.width - f.left),
        (f.bottom = l - f.height - f.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function vT({
  children: a,
  isPresent: i,
  anchorX: r,
  anchorY: o,
  root: c,
  pop: l,
}) {
  var y;
  const f = nt.useId(),
    m = nt.useRef(null),
    p = nt.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }),
    { nonce: v } = nt.useContext(Gr),
    g =
      ((y = a.props) == null ? void 0 : y.ref) ?? (a == null ? void 0 : a.ref),
    x = pT(m, g);
  return (
    nt.useInsertionEffect(() => {
      const {
        width: d,
        height: S,
        top: b,
        left: M,
        right: C,
        bottom: O,
      } = p.current;
      if (i || l === !1 || !m.current || !d || !S) return;
      const N = r === "left" ? `left: ${M}` : `right: ${C}`,
        V = o === "bottom" ? `bottom: ${O}` : `top: ${b}`;
      m.current.dataset.motionPopId = f;
      const E = document.createElement("style");
      v && (E.nonce = v);
      const D = c ?? document.head;
      return (
        D.appendChild(E),
        E.sheet &&
          E.sheet.insertRule(`
          [data-motion-pop-id="${f}"] {
            position: absolute !important;
            width: ${d}px !important;
            height: ${S}px !important;
            ${N}px !important;
            ${V}px !important;
          }
        `),
        () => {
          D.contains(E) && D.removeChild(E);
        }
      );
    }, [i]),
    A.jsx(gT, {
      isPresent: i,
      childRef: m,
      sizeRef: p,
      pop: l,
      children: l === !1 ? a : nt.cloneElement(a, { ref: x }),
    })
  );
}
const yT = ({
  children: a,
  initial: i,
  isPresent: r,
  onExitComplete: o,
  custom: c,
  presenceAffectsLayout: l,
  mode: f,
  anchorX: m,
  anchorY: p,
  root: v,
}) => {
  const g = aa(xT),
    x = nt.useId();
  let y = !0,
    d = nt.useMemo(
      () => (
        (y = !1),
        {
          id: x,
          initial: i,
          isPresent: r,
          custom: c,
          onExitComplete: (S) => {
            g.set(S, !0);
            for (const b of g.values()) if (!b) return;
            o && o();
          },
          register: (S) => (g.set(S, !1), () => g.delete(S)),
        }
      ),
      [r, g, o],
    );
  return (
    l && y && (d = { ...d }),
    nt.useMemo(() => {
      g.forEach((S, b) => g.set(b, !1));
    }, [r]),
    nt.useEffect(() => {
      !r && !g.size && o && o();
    }, [r]),
    (a = A.jsx(vT, {
      pop: f === "popLayout",
      isPresent: r,
      anchorX: m,
      anchorY: p,
      root: v,
      children: a,
    })),
    A.jsx(Lr.Provider, { value: d, children: a })
  );
};
function xT() {
  return new Map();
}
function Yv(a = !0) {
  const i = nt.useContext(Lr);
  if (i === null) return [!0, null];
  const { isPresent: r, onExitComplete: o, register: c } = i,
    l = nt.useId();
  nt.useEffect(() => {
    if (a) return c(l);
  }, [a]);
  const f = nt.useCallback(() => a && o && o(l), [l, o, a]);
  return !r && o ? [!1, f] : [!0];
}
const mr = (a) => a.key || "";
function G0(a) {
  const i = [];
  return (
    nt.Children.forEach(a, (r) => {
      nt.isValidElement(r) && i.push(r);
    }),
    i
  );
}
const Qc = ({
    children: a,
    custom: i,
    initial: r = !0,
    onExitComplete: o,
    presenceAffectsLayout: c = !0,
    mode: l = "sync",
    propagate: f = !1,
    anchorX: m = "left",
    anchorY: p = "top",
    root: v,
  }) => {
    const [g, x] = Yv(f),
      y = nt.useMemo(() => G0(a), [a]),
      d = f && !g ? [] : y.map(mr),
      S = nt.useRef(!0),
      b = nt.useRef(y),
      M = aa(() => new Map()),
      C = nt.useRef(new Set()),
      [O, N] = nt.useState(y),
      [V, E] = nt.useState(y);
    Vr(() => {
      ((S.current = !1), (b.current = y));
      for (let j = 0; j < V.length; j++) {
        const B = mr(V[j]);
        d.includes(B)
          ? (M.delete(B), C.current.delete(B))
          : M.get(B) !== !0 && M.set(B, !1);
      }
    }, [V, d.length, d.join("-")]);
    const D = [];
    if (y !== O) {
      let j = [...y];
      for (let B = 0; B < V.length; B++) {
        const z = V[B],
          U = mr(z);
        d.includes(U) || (j.splice(B, 0, z), D.push(z));
      }
      return (l === "wait" && D.length && (j = D), E(G0(j)), N(y), null);
    }
    const { forceRender: R } = nt.useContext($c);
    return A.jsx(A.Fragment, {
      children: V.map((j) => {
        const B = mr(j),
          z = f && !g ? !1 : y === V || d.includes(B),
          U = () => {
            if (C.current.has(B)) return;
            if ((C.current.add(B), M.has(B))) M.set(B, !0);
            else return;
            let H = !0;
            (M.forEach((q) => {
              q || (H = !1);
            }),
              H &&
                (R == null || R(),
                E(b.current),
                f && (x == null || x()),
                o && o()));
          };
        return A.jsx(
          yT,
          {
            isPresent: z,
            initial: !S.current || r ? void 0 : !1,
            custom: i,
            presenceAffectsLayout: c,
            mode: l,
            root: v,
            onExitComplete: z ? void 0 : U,
            anchorX: m,
            anchorY: p,
            children: j,
          },
          B,
        );
      }),
    });
  },
  kv = nt.createContext({ strict: !1 }),
  Y0 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let k0 = !1;
function ST() {
  if (k0) return;
  const a = {};
  for (const i in Y0) a[i] = { isEnabled: (r) => Y0[i].some((o) => !!r[o]) };
  (gv(a), (k0 = !0));
}
function Xv() {
  return (ST(), lb());
}
function bT(a) {
  const i = Xv();
  for (const r in a) i[r] = { ...i[r], ...a[r] };
  gv(i);
}
const TT = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function Br(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    TT.has(a)
  );
}
let qv = (a) => !Br(a);
function AT(a) {
  typeof a == "function" && (qv = (i) => (i.startsWith("on") ? !Br(i) : a(i)));
}
try {
  AT(require("@emotion/is-prop-valid").default);
} catch {}
function MT(a, i, r) {
  const o = {};
  for (const c in a)
    (c === "values" && typeof a.values == "object") ||
      ((qv(c) ||
        (r === !0 && Br(c)) ||
        (!i && !Br(c)) ||
        (a.draggable && c.startsWith("onDrag"))) &&
        (o[c] = a[c]));
  return o;
}
const Yr = nt.createContext({});
function ET(a, i) {
  if (Hr(a)) {
    const { initial: r, animate: o } = a;
    return {
      initial: r === !1 || Hs(r) ? r : void 0,
      animate: Hs(o) ? o : void 0,
    };
  }
  return a.inherit !== !1 ? i : {};
}
function CT(a) {
  const { initial: i, animate: r } = ET(a, nt.useContext(Yr));
  return nt.useMemo(() => ({ initial: i, animate: r }), [X0(i), X0(r)]);
}
function X0(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const Df = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Pv(a, i, r) {
  for (const o in i) !he(i[o]) && !Av(o, r) && (a[o] = i[o]);
}
function wT({ transformTemplate: a }, i) {
  return nt.useMemo(() => {
    const r = Df();
    return (wf(r, i, a), Object.assign({}, r.vars, r.style));
  }, [i]);
}
function jT(a, i) {
  const r = a.style || {},
    o = {};
  return (Pv(o, r, a), Object.assign(o, wT(a, i)), o);
}
function DT(a, i) {
  const r = {},
    o = jT(a, i);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((r.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (r.tabIndex = 0),
    (r.style = o),
    r
  );
}
const _v = () => ({ ...Df(), attrs: {} });
function NT(a, i, r, o) {
  const c = nt.useMemo(() => {
    const l = _v();
    return (
      Mv(l, i, Cv(o), a.transformTemplate, a.style),
      { ...l.attrs, style: { ...l.style } }
    );
  }, [i]);
  if (a.style) {
    const l = {};
    (Pv(l, a.style, a), (c.style = { ...l, ...c.style }));
  }
  return c;
}
const RT = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Nf(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(RT.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
function OT(a, i, r, { latestValues: o }, c, l = !1, f) {
  const p = ((f ?? Nf(a)) ? NT : DT)(i, o, c, a),
    v = MT(i, typeof a == "string", l),
    g = a !== nt.Fragment ? { ...v, ...p, ref: r } : {},
    { children: x } = i,
    y = nt.useMemo(() => (he(x) ? x.get() : x), [x]);
  return nt.createElement(a, { ...g, children: y });
}
function zT({ scrapeMotionValuesFromProps: a, createRenderState: i }, r, o, c) {
  return { latestValues: BT(r, o, c, a), renderState: i() };
}
function BT(a, i, r, o) {
  const c = {},
    l = o(a, {});
  for (const y in l) c[y] = Tr(l[y]);
  let { initial: f, animate: m } = a;
  const p = Hr(a),
    v = mv(a);
  i &&
    v &&
    !p &&
    a.inherit !== !1 &&
    (f === void 0 && (f = i.initial), m === void 0 && (m = i.animate));
  let g = r ? r.initial === !1 : !1;
  g = g || f === !1;
  const x = g ? m : f;
  if (x && typeof x != "boolean" && !Ur(x)) {
    const y = Array.isArray(x) ? x : [x];
    for (let d = 0; d < y.length; d++) {
      const S = yf(a, y[d]);
      if (S) {
        const { transitionEnd: b, transition: M, ...C } = S;
        for (const O in C) {
          let N = C[O];
          if (Array.isArray(N)) {
            const V = g ? N.length - 1 : 0;
            N = N[V];
          }
          N !== null && (c[O] = N);
        }
        for (const O in b) c[O] = b[O];
      }
    }
  }
  return c;
}
const Fv = (a) => (i, r) => {
    const o = nt.useContext(Yr),
      c = nt.useContext(Lr),
      l = () => zT(a, i, o, c);
    return r ? l() : aa(l);
  },
  VT = Fv({ scrapeMotionValuesFromProps: jf, createRenderState: Df }),
  LT = Fv({ scrapeMotionValuesFromProps: wv, createRenderState: _v }),
  UT = Symbol.for("motionComponentSymbol");
function HT(a, i, r) {
  const o = nt.useRef(r);
  nt.useInsertionEffect(() => {
    o.current = r;
  });
  const c = nt.useRef(null);
  return nt.useCallback(
    (l) => {
      var m;
      (l && ((m = a.onMount) == null || m.call(a, l)),
        i && (l ? i.mount(l) : i.unmount()));
      const f = o.current;
      if (typeof f == "function")
        if (l) {
          const p = f(l);
          typeof p == "function" && (c.current = p);
        } else c.current ? (c.current(), (c.current = null)) : f(l);
      else f && (f.current = l);
    },
    [i],
  );
}
const Kv = nt.createContext({});
function bi(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function GT(a, i, r, o, c, l) {
  var N, V;
  const { visualElement: f } = nt.useContext(Yr),
    m = nt.useContext(kv),
    p = nt.useContext(Lr),
    v = nt.useContext(Gr),
    g = v.reducedMotion,
    x = v.skipAnimations,
    y = nt.useRef(null),
    d = nt.useRef(!1);
  ((o = o || m.renderer),
    !y.current &&
      o &&
      ((y.current = o(a, {
        visualState: i,
        parent: f,
        props: r,
        presenceContext: p,
        blockInitialAnimation: p ? p.initial === !1 : !1,
        reducedMotionConfig: g,
        skipAnimations: x,
        isSVG: l,
      })),
      d.current && y.current && (y.current.manuallyAnimateOnMount = !0)));
  const S = y.current,
    b = nt.useContext(Kv);
  S &&
    !S.projection &&
    c &&
    (S.type === "html" || S.type === "svg") &&
    YT(y.current, r, c, b);
  const M = nt.useRef(!1);
  nt.useInsertionEffect(() => {
    S && M.current && S.update(r, p);
  });
  const C = r[ev],
    O = nt.useRef(
      !!C &&
        !((N = window.MotionHandoffIsComplete) != null && N.call(window, C)) &&
        ((V = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : V.call(window, C)),
    );
  return (
    Vr(() => {
      ((d.current = !0),
        S &&
          ((M.current = !0),
          (window.MotionIsMounted = !0),
          S.updateFeatures(),
          S.scheduleRenderMicrotask(),
          O.current && S.animationState && S.animationState.animateChanges()));
    }),
    nt.useEffect(() => {
      S &&
        (!O.current && S.animationState && S.animationState.animateChanges(),
        O.current &&
          (queueMicrotask(() => {
            var E;
            (E = window.MotionHandoffMarkAsComplete) == null ||
              E.call(window, C);
          }),
          (O.current = !1)),
        (S.enteringChildren = void 0));
    }),
    S
  );
}
function YT(a, i, r, o) {
  const {
    layoutId: c,
    layout: l,
    drag: f,
    dragConstraints: m,
    layoutScroll: p,
    layoutRoot: v,
    layoutCrossfade: g,
  } = i;
  ((a.projection = new r(
    a.latestValues,
    i["data-framer-portal-id"] ? void 0 : Qv(a.parent),
  )),
    a.projection.setOptions({
      layoutId: c,
      layout: l,
      alwaysMeasureLayout: !!f || (m && bi(m)),
      visualElement: a,
      animationType: typeof l == "string" ? l : "both",
      initialPromotionConfig: o,
      crossfade: g,
      layoutScroll: p,
      layoutRoot: v,
    }));
}
function Qv(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : Qv(a.parent);
}
function vc(a, { forwardMotionProps: i = !1, type: r } = {}, o, c) {
  o && bT(o);
  const l = r ? r === "svg" : Nf(a),
    f = l ? LT : VT;
  function m(v, g) {
    let x;
    const y = { ...nt.useContext(Gr), ...v, layoutId: kT(v) },
      { isStatic: d } = y,
      S = CT(v),
      b = f(v, d);
    if (!d && dg) {
      XT();
      const M = qT(y);
      ((x = M.MeasureLayout),
        (S.visualElement = GT(a, b, y, c, M.ProjectionNode, l)));
    }
    return A.jsxs(Yr.Provider, {
      value: S,
      children: [
        x && S.visualElement
          ? A.jsx(x, { visualElement: S.visualElement, ...y })
          : null,
        OT(a, v, HT(b, S.visualElement, g), b, d, i, l),
      ],
    });
  }
  m.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const p = nt.forwardRef(m);
  return ((p[UT] = a), p);
}
function kT({ layoutId: a }) {
  const i = nt.useContext($c).id;
  return i && a !== void 0 ? i + "-" + a : a;
}
function XT(a, i) {
  nt.useContext(kv).strict;
}
function qT(a) {
  const i = Xv(),
    { drag: r, layout: o } = i;
  if (!r && !o) return {};
  const c = { ...r, ...o };
  return {
    MeasureLayout:
      (r != null && r.isEnabled(a)) || (o != null && o.isEnabled(a))
        ? c.MeasureLayout
        : void 0,
    ProjectionNode: c.ProjectionNode,
  };
}
function PT(a, i) {
  if (typeof Proxy > "u") return vc;
  const r = new Map(),
    o = (l, f) => vc(l, f, a, i),
    c = (l, f) => o(l, f);
  return new Proxy(c, {
    get: (l, f) =>
      f === "create"
        ? o
        : (r.has(f) || r.set(f, vc(f, void 0, a, i)), r.get(f)),
  });
}
const _T = (a, i) =>
  (i.isSVG ?? Nf(a))
    ? new Ab(i)
    : new vb(i, { allowProjection: a !== nt.Fragment });
class FT extends ia {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = jb(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Ur(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: r } = this.node.prevProps || {};
    i !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var i;
    (this.node.animationState.reset(),
      (i = this.unmountControls) == null || i.call(this));
  }
}
let KT = 0;
class QT extends ia {
  constructor() {
    (super(...arguments), (this.id = KT++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: r } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === o) return;
    const c = this.node.animationState.setActive("exit", !i);
    r &&
      !i &&
      c.then(() => {
        r(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: r } = this.node.presenceContext || {};
    (r && r(this.id), i && (this.unmount = i(this.id)));
  }
  unmount() {}
}
const ZT = { animation: { Feature: FT }, exit: { Feature: QT } };
function qs(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const JT = (a) => (i) => Af(i) && a(i, qs(i));
function Bs(a, i, r, o) {
  return Gs(a, i, JT(r), o);
}
const Zv = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  q0 = (a, i) => Math.abs(a - i);
function WT(a, i) {
  const r = q0(a.x, i.x),
    o = q0(a.y, i.y);
  return Math.sqrt(r ** 2 + o ** 2);
}
const P0 = new Set(["auto", "scroll"]);
class Jv {
  constructor(
    i,
    r,
    {
      transformPagePoint: o,
      contextWindow: c = window,
      dragSnapToOrigin: l = !1,
      distanceThreshold: f = 3,
      element: m,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (d) => {
        this.handleScroll(d.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = xc(this.lastMoveEventInfo, this.history),
          S = this.startEvent !== null,
          b = WT(d.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!S && !b) return;
        const { point: M } = d,
          { timestamp: C } = ae;
        this.history.push({ ...M, timestamp: C });
        const { onStart: O, onMove: N } = this.handlers;
        (S ||
          (O && O(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          N && N(this.lastMoveEvent, d));
      }),
      (this.handlePointerMove = (d, S) => {
        ((this.lastMoveEvent = d),
          (this.lastMoveEventInfo = yc(S, this.transformPagePoint)),
          wt.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (d, S) => {
        this.end();
        const { onEnd: b, onSessionEnd: M, resumeAnimation: C } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && C && C(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const O = xc(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : yc(S, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && b && b(d, O), M && M(d, O));
      }),
      !Af(i))
    )
      return;
    ((this.dragSnapToOrigin = l),
      (this.handlers = r),
      (this.transformPagePoint = o),
      (this.distanceThreshold = f),
      (this.contextWindow = c || window));
    const p = qs(i),
      v = yc(p, this.transformPagePoint),
      { point: g } = v,
      { timestamp: x } = ae;
    this.history = [{ ...g, timestamp: x }];
    const { onSessionStart: y } = r;
    (y && y(i, xc(v, this.history)),
      (this.removeListeners = Ys(
        Bs(this.contextWindow, "pointermove", this.handlePointerMove),
        Bs(this.contextWindow, "pointerup", this.handlePointerUp),
        Bs(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      m && this.startScrollTracking(m));
  }
  startScrollTracking(i) {
    let r = i.parentElement;
    for (; r; ) {
      const o = getComputedStyle(r);
      ((P0.has(o.overflowX) || P0.has(o.overflowY)) &&
        this.scrollPositions.set(r, { x: r.scrollLeft, y: r.scrollTop }),
        (r = r.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(i) {
    const r = this.scrollPositions.get(i);
    if (!r) return;
    const o = i === window,
      c = o
        ? { x: window.scrollX, y: window.scrollY }
        : { x: i.scrollLeft, y: i.scrollTop },
      l = { x: c.x - r.x, y: c.y - r.y };
    (l.x === 0 && l.y === 0) ||
      (o
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += l.x),
          (this.lastMoveEventInfo.point.y += l.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= l.x), (this.history[0].y -= l.y)),
      this.scrollPositions.set(i, c),
      wt.update(this.updatePoint, !0));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      Fe(this.updatePoint));
  }
}
function yc(a, i) {
  return i ? { point: i(a.point) } : a;
}
function _0(a, i) {
  return { x: a.x - i.x, y: a.y - i.y };
}
function xc({ point: a }, i) {
  return {
    point: a,
    delta: _0(a, Wv(i)),
    offset: _0(a, IT(i)),
    velocity: $T(i, 0.1),
  };
}
function IT(a) {
  return a[0];
}
function Wv(a) {
  return a[a.length - 1];
}
function $T(a, i) {
  if (a.length < 2) return { x: 0, y: 0 };
  let r = a.length - 1,
    o = null;
  const c = Wv(a);
  for (; r >= 0 && ((o = a[r]), !(c.timestamp - o.timestamp > $e(i))); ) r--;
  if (!o) return { x: 0, y: 0 };
  o === a[0] &&
    a.length > 2 &&
    c.timestamp - o.timestamp > $e(i) * 2 &&
    (o = a[1]);
  const l = _e(c.timestamp - o.timestamp);
  if (l === 0) return { x: 0, y: 0 };
  const f = { x: (c.x - o.x) / l, y: (c.y - o.y) / l };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function tA(a, { min: i, max: r }, o) {
  return (
    i !== void 0 && a < i
      ? (a = o ? Yt(i, a, o.min) : Math.max(a, i))
      : r !== void 0 && a > r && (a = o ? Yt(r, a, o.max) : Math.min(a, r)),
    a
  );
}
function F0(a, i, r) {
  return {
    min: i !== void 0 ? a.min + i : void 0,
    max: r !== void 0 ? a.max + r - (a.max - a.min) : void 0,
  };
}
function eA(a, { top: i, left: r, bottom: o, right: c }) {
  return { x: F0(a.x, r, c), y: F0(a.y, i, o) };
}
function K0(a, i) {
  let r = i.min - a.min,
    o = i.max - a.max;
  return (
    i.max - i.min < a.max - a.min && ([r, o] = [o, r]),
    { min: r, max: o }
  );
}
function nA(a, i) {
  return { x: K0(a.x, i.x), y: K0(a.y, i.y) };
}
function aA(a, i) {
  let r = 0.5;
  const o = ge(a),
    c = ge(i);
  return (
    c > o
      ? (r = ji(i.min, i.max - o, a.min))
      : o > c && (r = ji(a.min, a.max - c, i.min)),
    en(0, 1, r)
  );
}
function iA(a, i) {
  const r = {};
  return (
    i.min !== void 0 && (r.min = i.min - a.min),
    i.max !== void 0 && (r.max = i.max - a.min),
    r
  );
}
const Zc = 0.35;
function sA(a = Zc) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = Zc),
    { x: Q0(a, "left", "right"), y: Q0(a, "top", "bottom") }
  );
}
function Q0(a, i, r) {
  return { min: Z0(a, i), max: Z0(a, r) };
}
function Z0(a, i) {
  return typeof a == "number" ? a : a[i] || 0;
}
const lA = new WeakMap();
class rA {
  constructor(i) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = $t()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i));
  }
  start(i, { snapToCursor: r = !1, distanceThreshold: o } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1) return;
    const l = (x) => {
        (r && this.snapToCursor(qs(x).point), this.stopAnimation());
      },
      f = (x, y) => {
        const { drag: d, dragPropagation: S, onDragStart: b } = this.getProps();
        if (
          d &&
          !S &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = VS(d)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = x),
          (this.latestPanInfo = y),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          rn((C) => {
            let O = this.getAxisMotionValue(C).get() || 0;
            if (on.test(O)) {
              const { projection: N } = this.visualElement;
              if (N && N.layout) {
                const V = N.layout.layoutBox[C];
                V && (O = ge(V) * (parseFloat(O) / 100));
              }
            }
            this.originPoint[C] = O;
          }),
          b && wt.update(() => b(x, y), !1, !0),
          Gc(this.visualElement, "transform"));
        const { animationState: M } = this.visualElement;
        M && M.setActive("whileDrag", !0);
      },
      m = (x, y) => {
        ((this.latestPointerEvent = x), (this.latestPanInfo = y));
        const {
          dragPropagation: d,
          dragDirectionLock: S,
          onDirectionLock: b,
          onDrag: M,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: C } = y;
        if (S && this.currentDirection === null) {
          ((this.currentDirection = uA(C)),
            this.currentDirection !== null && b && b(this.currentDirection));
          return;
        }
        (this.updateAxis("x", y.point, C),
          this.updateAxis("y", y.point, C),
          this.visualElement.render(),
          M && wt.update(() => M(x, y), !1, !0));
      },
      p = (x, y) => {
        ((this.latestPointerEvent = x),
          (this.latestPanInfo = y),
          this.stop(x, y),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      v = () => {
        const { dragSnapToOrigin: x } = this.getProps();
        (x || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: g } = this.getProps();
    this.panSession = new Jv(
      i,
      {
        onSessionStart: l,
        onStart: f,
        onMove: m,
        onSessionEnd: p,
        resumeAnimation: v,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: g,
        distanceThreshold: o,
        contextWindow: Zv(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(i, r) {
    const o = i || this.latestPointerEvent,
      c = r || this.latestPanInfo,
      l = this.isDragging;
    if ((this.cancel(), !l || !c || !o)) return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: m } = this.getProps();
    m && wt.postRender(() => m(o, c));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: r } = this.visualElement;
    (i && (i.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: o } = this.getProps();
    (!o &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      r && r.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(i, r, o) {
    const { drag: c } = this.getProps();
    if (!o || !pr(i, c, this.currentDirection)) return;
    const l = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + o[i];
    (this.constraints &&
      this.constraints[i] &&
      (f = tA(f, this.constraints[i], this.elastic[i])),
      l.set(f));
  }
  resolveConstraints() {
    var l;
    const { dragConstraints: i, dragElastic: r } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (l = this.visualElement.projection) == null
            ? void 0
            : l.layout,
      c = this.constraints;
    (i && bi(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && o
        ? (this.constraints = eA(o.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = sA(r)),
      c !== this.constraints &&
        !bi(i) &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        rn((f) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(f) &&
            (this.constraints[f] = iA(o.layoutBox[f], this.constraints[f]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: r } = this.getProps();
    if (!i || !bi(i)) return !1;
    const o = i.current,
      { projection: c } = this.visualElement;
    if (!c || !c.layout) return !1;
    const l = fb(o, c.root, this.visualElement.getTransformPagePoint());
    let f = nA(c.layout.layoutBox, l);
    if (r) {
      const m = r(ob(f));
      ((this.hasMutatedConstraints = !!m), m && (f = yv(m)));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: r,
        dragMomentum: o,
        dragElastic: c,
        dragTransition: l,
        dragSnapToOrigin: f,
        onDragTransitionEnd: m,
      } = this.getProps(),
      p = this.constraints || {},
      v = rn((g) => {
        if (!pr(g, r, this.currentDirection)) return;
        let x = (p && p[g]) || {};
        f && (x = { min: 0, max: 0 });
        const y = c ? 200 : 1e6,
          d = c ? 40 : 1e7,
          S = {
            type: "inertia",
            velocity: o ? i[g] : 0,
            bounceStiffness: y,
            bounceDamping: d,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...l,
            ...x,
          };
        return this.startAxisValueAnimation(g, S);
      });
    return Promise.all(v).then(m);
  }
  startAxisValueAnimation(i, r) {
    const o = this.getAxisMotionValue(i);
    return (
      Gc(this.visualElement, i),
      o.start(vf(i, o, 0, r, this.visualElement, !1))
    );
  }
  stopAnimation() {
    rn((i) => this.getAxisMotionValue(i).stop());
  }
  getAxisMotionValue(i) {
    const r = `_drag${i.toUpperCase()}`,
      o = this.visualElement.getProps(),
      c = o[r];
    return (
      c ||
      this.visualElement.getValue(i, (o.initial ? o.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    rn((r) => {
      const { drag: o } = this.getProps();
      if (!pr(r, o, this.currentDirection)) return;
      const { projection: c } = this.visualElement,
        l = this.getAxisMotionValue(r);
      if (c && c.layout) {
        const { min: f, max: m } = c.layout.layoutBox[r],
          p = l.get() || 0;
        l.set(i[r] - Yt(f, m, 0.5) + p);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: r } = this.getProps(),
      { projection: o } = this.visualElement;
    if (!bi(r) || !o || !this.constraints) return;
    this.stopAnimation();
    const c = { x: 0, y: 0 };
    rn((f) => {
      const m = this.getAxisMotionValue(f);
      if (m && this.constraints !== !1) {
        const p = m.get();
        c[f] = aA({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: l } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = l ? l({}, "") : "none"),
      o.root && o.root.updateScroll(),
      o.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      rn((f) => {
        if (!pr(f, i, null)) return;
        const m = this.getAxisMotionValue(f),
          { min: p, max: v } = this.constraints[f];
        m.set(Yt(p, v, c[f]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    lA.set(this.visualElement, this);
    const i = this.visualElement.current,
      r = Bs(i, "pointerdown", (v) => {
        const { drag: g, dragListener: x = !0 } = this.getProps(),
          y = v.target,
          d = y !== i && kS(y);
        g && x && !d && this.start(v);
      });
    let o;
    const c = () => {
        const { dragConstraints: v } = this.getProps();
        bi(v) &&
          v.current &&
          ((this.constraints = this.resolveRefConstraints()),
          o ||
            (o = oA(i, v.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: l } = this.visualElement,
      f = l.addEventListener("measure", c);
    (l && !l.layout && (l.root && l.root.updateScroll(), l.updateLayout()),
      wt.read(c));
    const m = Gs(window, "resize", () => this.scalePositionWithinConstraints()),
      p = l.addEventListener(
        "didUpdate",
        ({ delta: v, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (rn((x) => {
              const y = this.getAxisMotionValue(x);
              y &&
                ((this.originPoint[x] += v[x].translate),
                y.set(y.get() + v[x].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (m(), r(), f(), p && p(), o && o());
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: r = !1,
        dragDirectionLock: o = !1,
        dragPropagation: c = !1,
        dragConstraints: l = !1,
        dragElastic: f = Zc,
        dragMomentum: m = !0,
      } = i;
    return {
      ...i,
      drag: r,
      dragDirectionLock: o,
      dragPropagation: c,
      dragConstraints: l,
      dragElastic: f,
      dragMomentum: m,
    };
  }
}
function J0(a) {
  let i = !0;
  return () => {
    if (i) {
      i = !1;
      return;
    }
    a();
  };
}
function oA(a, i, r) {
  const o = qc(a, J0(r)),
    c = qc(i, J0(r));
  return () => {
    (o(), c());
  };
}
function pr(a, i, r) {
  return (i === !0 || i === a) && (r === null || r === a);
}
function uA(a, i = 10) {
  let r = null;
  return (Math.abs(a.y) > i ? (r = "y") : Math.abs(a.x) > i && (r = "x"), r);
}
class cA extends ia {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = Me),
      (this.removeListeners = Me),
      (this.controls = new rA(i)));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    (i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Me));
  }
  update() {
    const { dragControls: i } = this.node.getProps(),
      { dragControls: r } = this.node.prevProps || {};
    i !== r &&
      (this.removeGroupControls(),
      i && (this.removeGroupControls = i.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const Sc = (a) => (i, r) => {
  a && wt.update(() => a(i, r), !1, !0);
};
class fA extends ia {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Me));
  }
  onPointerDown(i) {
    this.session = new Jv(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Zv(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: r,
      onPan: o,
      onPanEnd: c,
    } = this.node.getProps();
    return {
      onSessionStart: Sc(i),
      onStart: Sc(r),
      onMove: Sc(o),
      onEnd: (l, f) => {
        (delete this.session, c && wt.postRender(() => c(l, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Bs(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let bc = !1;
class hA extends nt.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: r,
        switchLayoutGroup: o,
        layoutId: c,
      } = this.props,
      { projection: l } = i;
    (l &&
      (r.group && r.group.add(l),
      o && o.register && c && o.register(l),
      bc && l.root.didUpdate(),
      l.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      l.setOptions({
        ...l.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Ar.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: r,
        visualElement: o,
        drag: c,
        isPresent: l,
      } = this.props,
      { projection: f } = o;
    return (
      f &&
        ((f.isPresent = l),
        i.layoutDependency !== r &&
          f.setOptions({ ...f.options, layoutDependency: r }),
        (bc = !0),
        c || i.layoutDependency !== r || r === void 0 || i.isPresent !== l
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== l &&
          (l
            ? f.promote()
            : f.relegate() ||
              wt.postRender(() => {
                const m = f.getStack();
                (!m || !m.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      Tf.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: r,
        switchLayoutGroup: o,
      } = this.props,
      { projection: c } = i;
    ((bc = !0),
      c &&
        (c.scheduleCheckAfterUnmount(),
        r && r.group && r.group.remove(c),
        o && o.deregister && o.deregister(c)));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function Iv(a) {
  const [i, r] = Yv(),
    o = nt.useContext($c);
  return A.jsx(hA, {
    ...a,
    layoutGroup: o,
    switchLayoutGroup: nt.useContext(Kv),
    isPresent: i,
    safeToRemove: r,
  });
}
const dA = {
  pan: { Feature: fA },
  drag: { Feature: cA, ProjectionNode: Gv, MeasureLayout: Iv },
};
function W0(a, i, r) {
  const { props: o } = a;
  a.animationState &&
    o.whileHover &&
    a.animationState.setActive("whileHover", r === "Start");
  const c = "onHover" + r,
    l = o[c];
  l && wt.postRender(() => l(i, qs(i)));
}
class mA extends ia {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = US(
        i,
        (r, o) => (W0(this.node, o, "Start"), (c) => W0(this.node, c, "End")),
      ));
  }
  unmount() {}
}
class pA extends ia {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Ys(
      Gs(this.node.current, "focus", () => this.onFocus()),
      Gs(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function I0(a, i, r) {
  const { props: o } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    o.whileTap &&
    a.animationState.setActive("whileTap", r === "Start");
  const c = "onTap" + (r === "End" ? "" : r),
    l = o[c];
  l && wt.postRender(() => l(i, qs(i)));
}
class gA extends ia {
  mount() {
    const { current: i } = this.node;
    if (!i) return;
    const { globalTapTarget: r, propagate: o } = this.node.props;
    this.unmount = qS(
      i,
      (c, l) => (
        I0(this.node, l, "Start"),
        (f, { success: m }) => I0(this.node, f, m ? "End" : "Cancel")
      ),
      {
        useGlobalTarget: r,
        stopPropagation: (o == null ? void 0 : o.tap) === !1,
      },
    );
  }
  unmount() {}
}
const Jc = new WeakMap(),
  Tc = new WeakMap(),
  vA = (a) => {
    const i = Jc.get(a.target);
    i && i(a);
  },
  yA = (a) => {
    a.forEach(vA);
  };
function xA({ root: a, ...i }) {
  const r = a || document;
  Tc.has(r) || Tc.set(r, {});
  const o = Tc.get(r),
    c = JSON.stringify(i);
  return (
    o[c] || (o[c] = new IntersectionObserver(yA, { root: a, ...i })),
    o[c]
  );
}
function SA(a, i, r) {
  const o = xA(i);
  return (
    Jc.set(a, r),
    o.observe(a),
    () => {
      (Jc.delete(a), o.unobserve(a));
    }
  );
}
const bA = { some: 0, all: 1 };
class TA extends ia {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: r, margin: o, amount: c = "some", once: l } = i,
      f = {
        root: r ? r.current : void 0,
        rootMargin: o,
        threshold: typeof c == "number" ? c : bA[c],
      },
      m = (p) => {
        const { isIntersecting: v } = p;
        if (
          this.isInView === v ||
          ((this.isInView = v), l && !v && this.hasEnteredView)
        )
          return;
        (v && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", v));
        const { onViewportEnter: g, onViewportLeave: x } = this.node.getProps(),
          y = v ? g : x;
        y && y(p);
      };
    return SA(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(AA(i, r)) && this.startObserver();
  }
  unmount() {}
}
function AA({ viewport: a = {} }, { viewport: i = {} } = {}) {
  return (r) => a[r] !== i[r];
}
const MA = {
    inView: { Feature: TA },
    tap: { Feature: gA },
    focus: { Feature: pA },
    hover: { Feature: mA },
  },
  EA = { layout: { ProjectionNode: Gv, MeasureLayout: Iv } },
  CA = { ...ZT, ...MA, ...dA, ...EA },
  Gt = PT(CA, _T),
  wA = 50,
  $0 = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  jA = () => ({ time: 0, x: $0(), y: $0() }),
  DA = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function tg(a, i, r, o) {
  const c = r[i],
    { length: l, position: f } = DA[i],
    m = c.current,
    p = r.time;
  ((c.current = a[`scroll${f}`]),
    (c.scrollLength = a[`scroll${l}`] - a[`client${l}`]),
    (c.offset.length = 0),
    (c.offset[0] = 0),
    (c.offset[1] = c.scrollLength),
    (c.progress = ji(0, c.scrollLength, c.current)));
  const v = o - p;
  c.velocity = v > wA ? 0 : nf(c.current - m, v);
}
function NA(a, i, r) {
  (tg(a, "x", i, r), tg(a, "y", i, r), (i.time = r));
}
function RA(a, i) {
  const r = { x: 0, y: 0 };
  let o = a;
  for (; o && o !== i; )
    if (Nr(o))
      ((r.x += o.offsetLeft), (r.y += o.offsetTop), (o = o.offsetParent));
    else if (o.tagName === "svg") {
      const c = o.getBoundingClientRect();
      o = o.parentElement;
      const l = o.getBoundingClientRect();
      ((r.x += c.left - l.left), (r.y += c.top - l.top));
    } else if (o instanceof SVGGraphicsElement) {
      const { x: c, y: l } = o.getBBox();
      ((r.x += c), (r.y += l));
      let f = null,
        m = o.parentNode;
      for (; !f; ) (m.tagName === "svg" && (f = m), (m = o.parentNode));
      o = f;
    } else break;
  return r;
}
const Wc = { start: 0, center: 0.5, end: 1 };
function eg(a, i, r = 0) {
  let o = 0;
  if ((a in Wc && (a = Wc[a]), typeof a == "string")) {
    const c = parseFloat(a);
    a.endsWith("px")
      ? (o = c)
      : a.endsWith("%")
        ? (a = c / 100)
        : a.endsWith("vw")
          ? (o = (c / 100) * document.documentElement.clientWidth)
          : a.endsWith("vh")
            ? (o = (c / 100) * document.documentElement.clientHeight)
            : (a = c);
  }
  return (typeof a == "number" && (o = i * a), r + o);
}
const OA = [0, 0];
function zA(a, i, r, o) {
  let c = Array.isArray(a) ? a : OA,
    l = 0,
    f = 0;
  return (
    typeof a == "number"
      ? (c = [a, a])
      : typeof a == "string" &&
        ((a = a.trim()),
        a.includes(" ") ? (c = a.split(" ")) : (c = [a, Wc[a] ? a : "0"])),
    (l = eg(c[0], r, o)),
    (f = eg(c[1], i)),
    l - f
  );
}
const BA = {
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  VA = { x: 0, y: 0 };
function LA(a) {
  return "getBBox" in a && a.tagName !== "svg"
    ? a.getBBox()
    : { width: a.clientWidth, height: a.clientHeight };
}
function UA(a, i, r) {
  const { offset: o = BA.All } = r,
    { target: c = a, axis: l = "y" } = r,
    f = l === "y" ? "height" : "width",
    m = c !== a ? RA(c, a) : VA,
    p = c === a ? { width: a.scrollWidth, height: a.scrollHeight } : LA(c),
    v = { width: a.clientWidth, height: a.clientHeight };
  i[l].offset.length = 0;
  let g = !i[l].interpolate;
  const x = o.length;
  for (let y = 0; y < x; y++) {
    const d = zA(o[y], v[f], p[f], m[l]);
    (!g && d !== i[l].interpolatorOffsets[y] && (g = !0), (i[l].offset[y] = d));
  }
  (g &&
    ((i[l].interpolate = ff(i[l].offset, Yg(o), { clamp: !1 })),
    (i[l].interpolatorOffsets = [...i[l].offset])),
    (i[l].progress = en(0, 1, i[l].interpolate(i[l].current))));
}
function HA(a, i = a, r) {
  if (((r.x.targetOffset = 0), (r.y.targetOffset = 0), i !== a)) {
    let o = i;
    for (; o && o !== a; )
      ((r.x.targetOffset += o.offsetLeft),
        (r.y.targetOffset += o.offsetTop),
        (o = o.offsetParent));
  }
  ((r.x.targetLength = i === a ? i.scrollWidth : i.clientWidth),
    (r.y.targetLength = i === a ? i.scrollHeight : i.clientHeight),
    (r.x.containerLength = a.clientWidth),
    (r.y.containerLength = a.clientHeight));
}
function GA(a, i, r, o = {}) {
  return {
    measure: (c) => {
      (HA(a, o.target, r), NA(a, r, c), (o.offset || o.target) && UA(a, r, o));
    },
    notify: () => i(r),
  };
}
const Si = new WeakMap(),
  ng = new WeakMap(),
  Ac = new WeakMap(),
  ag = new WeakMap(),
  gr = new WeakMap(),
  ig = (a) => (a === document.scrollingElement ? window : a);
function $v(
  a,
  {
    container: i = document.scrollingElement,
    trackContentSize: r = !1,
    ...o
  } = {},
) {
  if (!i) return Me;
  let c = Ac.get(i);
  c || ((c = new Set()), Ac.set(i, c));
  const l = jA(),
    f = GA(i, a, l, o);
  if ((c.add(f), !Si.has(i))) {
    const p = () => {
        for (const y of c) y.measure(ae.timestamp);
        wt.preUpdate(v);
      },
      v = () => {
        for (const y of c) y.notify();
      },
      g = () => wt.read(p);
    Si.set(i, g);
    const x = ig(i);
    (window.addEventListener("resize", g),
      i !== document.documentElement && ng.set(i, qc(i, g)),
      x.addEventListener("scroll", g),
      g());
  }
  if (r && !gr.has(i)) {
    const p = Si.get(i),
      v = { width: i.scrollWidth, height: i.scrollHeight };
    ag.set(i, v);
    const g = () => {
        const y = i.scrollWidth,
          d = i.scrollHeight;
        (v.width !== y || v.height !== d) &&
          (p(), (v.width = y), (v.height = d));
      },
      x = wt.read(g, !0);
    gr.set(i, x);
  }
  const m = Si.get(i);
  return (
    wt.read(m, !1, !0),
    () => {
      var x;
      Fe(m);
      const p = Ac.get(i);
      if (!p || (p.delete(f), p.size)) return;
      const v = Si.get(i);
      (Si.delete(i),
        v &&
          (ig(i).removeEventListener("scroll", v),
          (x = ng.get(i)) == null || x(),
          window.removeEventListener("resize", v)));
      const g = gr.get(i);
      (g && (Fe(g), gr.delete(i)), ag.delete(i));
    }
  );
}
function ty(a) {
  return typeof window < "u" && !a && _g();
}
const sg = new Map();
function YA(a) {
  const i = { value: 0 },
    r = $v((o) => {
      i.value = o[a.axis].progress * 100;
    }, a);
  return { currentTime: i, cancel: r };
}
function ey({ source: a, container: i, ...r }) {
  const { axis: o } = r;
  a && (i = a);
  const c = sg.get(i) ?? new Map();
  sg.set(i, c);
  const l = r.target ?? "self",
    f = c.get(l) ?? {},
    m = o + (r.offset ?? []).join(",");
  return (
    f[m] ||
      (f[m] = ty(r.target)
        ? new ScrollTimeline({ source: i, axis: o })
        : YA({ container: i, ...r })),
    f[m]
  );
}
function kA(a, i) {
  const r = ey(i);
  return a.attachTimeline({
    timeline: i.target ? void 0 : r,
    observe: (o) => (
      o.pause(),
      dv((c) => {
        o.time = o.iterationDuration * c;
      }, r)
    ),
  });
}
function XA(a) {
  return a.length === 2;
}
function qA(a, i) {
  return XA(a)
    ? $v((r) => {
        a(r[i.axis].progress, r);
      }, i)
    : dv(a, ey(i));
}
function ny(
  a,
  { axis: i = "y", container: r = document.scrollingElement, ...o } = {},
) {
  if (!r) return Me;
  const c = { axis: i, container: r, ...o };
  return typeof a == "function" ? qA(a, c) : kA(a, c);
}
const PA = () => ({
    scrollX: Ie(0),
    scrollY: Ie(0),
    scrollXProgress: Ie(0),
    scrollYProgress: Ie(0),
  }),
  vr = (a) => (a ? !a.current : !1);
function lg(a, i, r) {
  return {
    factory: (o) => ny(o, { ...i, axis: a, container: r }),
    times: [0, 1],
    keyframes: [0, 1],
    ease: (o) => o,
    duration: 1,
  };
}
function _A({ container: a, target: i, ...r } = {}) {
  const o = aa(PA);
  if (!i && ty()) {
    const m = (a == null ? void 0 : a.current) || void 0;
    ((o.scrollXProgress.accelerate = lg("x", r, m)),
      (o.scrollYProgress.accelerate = lg("y", r, m)));
  }
  const c = nt.useRef(null),
    l = nt.useRef(!1),
    f = nt.useCallback(
      () => (
        (c.current = ny(
          (m, { x: p, y: v }) => {
            (o.scrollX.set(p.current),
              o.scrollXProgress.set(p.progress),
              o.scrollY.set(v.current),
              o.scrollYProgress.set(v.progress));
          },
          {
            ...r,
            container: (a == null ? void 0 : a.current) || void 0,
            target: (i == null ? void 0 : i.current) || void 0,
          },
        )),
        () => {
          var m;
          (m = c.current) == null || m.call(c);
        }
      ),
      [a, i, JSON.stringify(r.offset)],
    );
  return (
    Vr(() => {
      if (((l.current = !1), vr(a) || vr(i))) {
        l.current = !0;
        return;
      } else return f();
    }, [f]),
    nt.useEffect(() => {
      if (l.current) return (Vs(!vr(a)), Vs(!vr(i)), f());
    }, [f]),
    o
  );
}
function FA(a) {
  const i = aa(() => Ie(a)),
    { isStatic: r } = nt.useContext(Gr);
  if (r) {
    const [, o] = nt.useState(a);
    nt.useEffect(() => i.on("change", o), []);
  }
  return i;
}
function ay(a, i) {
  const r = FA(i()),
    o = () => r.set(i());
  return (
    o(),
    Vr(() => {
      const c = () => wt.preRender(o, !1, !0),
        l = a.map((f) => f.on("change", c));
      return () => {
        (l.forEach((f) => f()), Fe(o));
      };
    }),
    r
  );
}
function KA(a) {
  ((Os.current = []), a());
  const i = ay(Os.current, a);
  return ((Os.current = void 0), i);
}
function Mr(a, i, r, o) {
  if (typeof a == "function") return KA(a);
  if (r !== void 0 && !Array.isArray(r) && typeof i != "function")
    return QA(a, i, r, o);
  const f = typeof i == "function" ? i : $S(i, r, o),
    m = Array.isArray(a) ? rg(a, f) : rg([a], ([v]) => f(v)),
    p = Array.isArray(a) ? void 0 : a.accelerate;
  return (
    p &&
      !p.isTransformed &&
      typeof i != "function" &&
      Array.isArray(r) &&
      (o == null ? void 0 : o.clamp) !== !1 &&
      (m.accelerate = { ...p, times: i, keyframes: r, isTransformed: !0 }),
    m
  );
}
function rg(a, i) {
  const r = aa(() => []);
  return ay(a, () => {
    r.length = 0;
    const o = a.length;
    for (let c = 0; c < o; c++) r[c] = a[c].get();
    return i(r);
  });
}
function QA(a, i, r, o) {
  const c = aa(() => Object.keys(r)),
    l = aa(() => ({}));
  for (const f of c) l[f] = Mr(a, i, r[f], o);
  return l;
}
const ZA = { some: 0, all: 1 };
function JA(a, i, { root: r, margin: o, amount: c = "some" } = {}) {
  const l = bf(a),
    f = new WeakMap(),
    m = (v) => {
      v.forEach((g) => {
        const x = f.get(g.target);
        if (g.isIntersecting !== !!x)
          if (g.isIntersecting) {
            const y = i(g.target, g);
            typeof y == "function" ? f.set(g.target, y) : p.unobserve(g.target);
          } else typeof x == "function" && (x(g), f.delete(g.target));
      });
    },
    p = new IntersectionObserver(m, {
      root: r,
      rootMargin: o,
      threshold: typeof c == "number" ? c : ZA[c],
    });
  return (l.forEach((v) => p.observe(v)), () => p.disconnect());
}
function iy(
  a,
  { root: i, margin: r, amount: o, once: c = !1, initial: l = !1 } = {},
) {
  const [f, m] = nt.useState(l);
  return (
    nt.useEffect(() => {
      if (!a.current || (c && f)) return;
      const p = () => (m(!0), c ? void 0 : () => m(!1)),
        v = { root: (i && i.current) || void 0, margin: r, amount: o };
      return JA(a.current, p, v);
    }, [i, a, r, c, o]),
    f
  );
}
function sy({ size: a = 56, className: i = "" }) {
  const r = nt.useId(),
    o = 100,
    c = 100,
    l = [
      [93, "#FF3300", 8],
      [83, "#FF7700", 10],
      [72, "#FFD700", 9],
      [62, "#22A020", 9],
      [52, "#00BFBF", 7],
      [44, "#1A7FD4", 8],
      [36, "#7B2FBE", 8],
    ],
    f = 28,
    m = Math.PI / 180,
    p = [90, 210, 330].map((S) => [
      o + f * Math.cos((S - 90) * m),
      c + f * Math.sin((S - 90) * m),
    ]),
    v = [270, 30, 150].map((S) => [
      o + f * Math.cos((S - 90) * m),
      c + f * Math.sin((S - 90) * m),
    ]),
    g = (S) =>
      `${S[0][0].toFixed(2)},${S[0][1].toFixed(2)} ${S[1][0].toFixed(2)},${S[1][1].toFixed(2)} ${S[2][0].toFixed(2)},${S[2][1].toFixed(2)}`,
    x = 7,
    y = 15,
    d = Array.from({ length: 12 }, (S, b) => {
      const M = (b * 30 - 90) * m;
      return {
        x1: o + x * Math.cos(M),
        y1: c + x * Math.sin(M),
        x2: o + y * Math.cos(M),
        y2: c + y * Math.sin(M),
      };
    });
  return A.jsxs("svg", {
    width: a,
    height: a,
    viewBox: "0 0 200 200",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: i,
    "aria-label": "Manujothi Ashram — Prapancha Jyothi emblem",
    children: [
      A.jsxs("defs", {
        children: [
          A.jsxs("radialGradient", {
            id: `embSunCore-${r}`,
            cx: "50%",
            cy: "50%",
            r: "50%",
            children: [
              A.jsx("stop", {
                offset: "0%",
                stopColor: "#FFFFFF",
                stopOpacity: "1",
              }),
              A.jsx("stop", {
                offset: "20%",
                stopColor: "#FFF176",
                stopOpacity: "1",
              }),
              A.jsx("stop", {
                offset: "55%",
                stopColor: "#FFAA00",
                stopOpacity: "1",
              }),
              A.jsx("stop", {
                offset: "85%",
                stopColor: "#FF6600",
                stopOpacity: "0.8",
              }),
              A.jsx("stop", {
                offset: "100%",
                stopColor: "#FF3300",
                stopOpacity: "0",
              }),
            ],
          }),
          A.jsxs("radialGradient", {
            id: `embSunHalo-${r}`,
            cx: "50%",
            cy: "50%",
            r: "50%",
            children: [
              A.jsx("stop", {
                offset: "0%",
                stopColor: "#FFE87C",
                stopOpacity: "0.45",
              }),
              A.jsx("stop", {
                offset: "100%",
                stopColor: "#FF8800",
                stopOpacity: "0",
              }),
            ],
          }),
          A.jsxs("linearGradient", {
            id: `embStarGrad-${r}`,
            x1: "0%",
            y1: "0%",
            x2: "100%",
            y2: "100%",
            children: [
              A.jsx("stop", { offset: "0%", stopColor: "#5BC8FF" }),
              A.jsx("stop", { offset: "40%", stopColor: "#2A8FE8" }),
              A.jsx("stop", { offset: "100%", stopColor: "#1060C0" }),
            ],
          }),
          A.jsx("clipPath", {
            id: `embClip-${r}`,
            children: A.jsx("circle", { cx: o, cy: c, r: "96" }),
          }),
          A.jsxs("filter", {
            id: `embGlow-${r}`,
            x: "-30%",
            y: "-30%",
            width: "160%",
            height: "160%",
            children: [
              A.jsx("feGaussianBlur", { stdDeviation: "1.5", result: "blur" }),
              A.jsxs("feMerge", {
                children: [
                  A.jsx("feMergeNode", { in: "blur" }),
                  A.jsx("feMergeNode", { in: "SourceGraphic" }),
                ],
              }),
            ],
          }),
          A.jsxs("filter", {
            id: `embBloom-${r}`,
            x: "-60%",
            y: "-60%",
            width: "220%",
            height: "220%",
            children: [
              A.jsx("feGaussianBlur", { stdDeviation: "3.5", result: "blur" }),
              A.jsxs("feMerge", {
                children: [
                  A.jsx("feMergeNode", { in: "blur" }),
                  A.jsx("feMergeNode", { in: "SourceGraphic" }),
                ],
              }),
            ],
          }),
        ],
      }),
      l.map(([S, b, M], C) =>
        A.jsx(
          "circle",
          { cx: o, cy: c, r: S, stroke: b, strokeWidth: M, fill: "none" },
          C,
        ),
      ),
      A.jsx("circle", { cx: o, cy: c, r: 30, fill: "#0D0E12" }),
      A.jsx("polygon", {
        points: g(p),
        fill: `url(#embStarGrad-${r})`,
        fillOpacity: "0.22",
        stroke: `url(#embStarGrad-${r})`,
        strokeWidth: "2",
        strokeLinejoin: "round",
        filter: `url(#embGlow-${r})`,
      }),
      A.jsx("polygon", {
        points: g(v),
        fill: `url(#embStarGrad-${r})`,
        fillOpacity: "0.22",
        stroke: `url(#embStarGrad-${r})`,
        strokeWidth: "2",
        strokeLinejoin: "round",
        filter: `url(#embGlow-${r})`,
      }),
      A.jsx("circle", { cx: o, cy: c, r: 18, fill: `url(#embSunHalo-${r})` }),
      d.map((S, b) =>
        A.jsx(
          "line",
          {
            x1: S.x1,
            y1: S.y1,
            x2: S.x2,
            y2: S.y2,
            stroke: "#FFD060",
            strokeWidth: "1.2",
            strokeLinecap: "round",
            opacity: "0.85",
            filter: `url(#embGlow-${r})`,
          },
          b,
        ),
      ),
      A.jsx("circle", {
        cx: o,
        cy: c,
        r: 7,
        fill: `url(#embSunCore-${r})`,
        filter: `url(#embBloom-${r})`,
      }),
      A.jsx("circle", {
        cx: o,
        cy: c,
        r: 2.5,
        fill: "#FFFFFF",
        opacity: "0.98",
      }),
    ],
  });
}
function WA({ onMenuToggle: a }) {
  const [i, r] = nt.useState(!1),
    [o, c] = nt.useState(!1),
    l = nt.useRef(null);
  (nt.useEffect(() => {
    i && l.current && (l.current.scrollTop = 0);
  }, [i]),
    nt.useEffect(() => {
      const p = () => {
        const v = window.scrollY > 60;
        c((g) => (g === v ? g : v));
      };
      return (
        window.addEventListener("scroll", p, { passive: !0 }),
        () => window.removeEventListener("scroll", p)
      );
    }, []),
    nt.useEffect(
      () => (
        (document.body.style.overflow = i ? "hidden" : ""),
        a == null || a(i),
        () => {
          document.body.style.overflow = "";
        }
      ),
      [i, a],
    ));
  const f = [
      { name: "About Us", href: "#about" },
      { name: "Core Teachings", href: "#teachings" },
      { name: "Publications", href: "#publications" },
      { name: "Visit", href: "#visit" },
      { name: "Events", href: "#events" },
      { name: "Contact", href: "#contact" },
    ],
    m = nt.useCallback((p) => {
      (r(!1),
        setTimeout(() => {
          const v = p.replace("#", ""),
            g = document.getElementById(v);
          g && g.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100));
    }, []);
  return A.jsxs(A.Fragment, {
    children: [
      A.jsx("div", {
        className: "fixed top-0 left-0 w-full h-[2px] bg-brass z-[60]",
      }),
      A.jsx("nav", {
        className: `fixed top-[2px] w-full z-50 transition-all duration-500 ${o ? "bg-charcoal/30 backdrop-blur-xl shadow-lg border-b border-brass/20 py-0" : "bg-transparent py-0"}`,
        children: A.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-10",
          children: A.jsxs("div", {
            className: `flex justify-between items-center transition-all duration-500 ${o ? "h-16" : "h-20"}`,
            children: [
              A.jsxs("a", {
                href: "#",
                className: "flex items-center gap-3 leading-none group",
                "aria-label": "Manujothi Ashram Home",
                children: [
                  A.jsx(sy, {
                    size: o ? 36 : 44,
                    className:
                      "transition-all duration-500 flex-shrink-0 hidden sm:block",
                  }),
                  A.jsxs("span", {
                    className: "flex flex-col",
                    children: [
                      A.jsx("span", {
                        className: `font-serif tracking-wide transition-all duration-500 ${o ? "text-parchment text-base sm:text-xl" : "text-parchment text-lg sm:text-2xl"}`,
                        children: "Manujothi Ashram",
                      }),
                      A.jsx("span", {
                        className:
                          "font-sans text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.25em] transition-all duration-500 text-brass/80",
                        children: "Tirunelveli · Est. 1963",
                      }),
                    ],
                  }),
                ],
              }),
              A.jsxs("div", {
                className: "hidden md:flex items-center gap-8",
                children: [
                  f.map((p) =>
                    A.jsx(
                      "a",
                      {
                        href: p.href,
                        className:
                          "animated-link text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300 text-parchment/80 hover:text-parchment",
                        children: p.name,
                      },
                      p.name,
                    ),
                  ),
                  A.jsx("a", {
                    href: "#support",
                    className:
                      "ml-2 border border-brass text-brass px-5 py-2 text-xs font-semibold uppercase tracking-widest hover:bg-brass hover:text-charcoal transition-all duration-300 rounded-full",
                    children: "Support the Mission",
                  }),
                ],
              }),
              A.jsx("button", {
                onClick: () => r(!i),
                className:
                  "hamburger-btn md:hidden w-12 h-12 flex items-center justify-center rounded-full border border-brass/30 shadow-[0_0_12px_rgba(184,151,104,0.08)] backdrop-blur-sm transition-all duration-300 hover:border-brass/60 hover:shadow-[0_0_18px_rgba(184,151,104,0.15)] active:scale-95 relative z-[55]",
                "aria-label": "Toggle menu",
                "aria-expanded": i,
                children: A.jsxs("span", {
                  className: "hamburger-icon",
                  "data-open": i,
                  children: [
                    A.jsx("span", { className: "hamburger-bar bar-top" }),
                    A.jsx("span", { className: "hamburger-bar bar-mid" }),
                    A.jsx("span", { className: "hamburger-bar bar-bot" }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      V1.createPortal(
        A.jsx(Qc, {
          children:
            i &&
            A.jsxs(Gt.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              className: "mobile-menu-overlay",
              ref: l,
              onClick: () => r(!1),
              children: [
                A.jsxs("div", {
                  className: "mobile-menu-content",
                  onClick: (p) => p.stopPropagation(),
                  children: [
                    f.map((p, v) =>
                      A.jsx(
                        Gt.a,
                        {
                          href: p.href,
                          onClick: (g) => {
                            (g.preventDefault(), m(p.href));
                          },
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          transition: {
                            delay: 0.1 + v * 0.06,
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          className: "mobile-menu-link",
                          children: A.jsx("span", {
                            className: "mobile-menu-link-text",
                            children: p.name,
                          }),
                        },
                        p.name,
                      ),
                    ),
                    A.jsx(Gt.a, {
                      href: "#support",
                      onClick: (p) => {
                        (p.preventDefault(), m("#support"));
                      },
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: {
                        delay: 0.1 + f.length * 0.06,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      className: "mobile-menu-cta",
                      children: "Support the Mission",
                    }),
                  ],
                }),
                A.jsx(Gt.div, {
                  initial: { scaleX: 0 },
                  animate: { scaleX: 1 },
                  transition: {
                    delay: 0.5,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  className: "mobile-menu-decoration",
                }),
              ],
            }),
        }),
        document.body,
      ),
    ],
  });
}
function IA() {
  const a = [
      "OUR LORD GOD ALONE IS HOLY! HOLY! HOLY!",
      "HE LIVETH FOREVER",
      "HE HAS REDEEMED US BY THE LOVE OF HIS SUPREME SACRIFICE",
      "PRAISE HIM, FOR HE IS GOOD AND HIS MERCY ENDURETH FOREVER",
      "BLESSED IS HE THAT COMETH IN THE NAME OF THE LORD",
      "AS THE LIGHTNING COMETH OUT OF THE EAST, AND SHINETH EVEN UNTO THE WEST; SO SHALL ALSO THE COMING OF THE SON OF MAN BE — MATTHEW 24:27",
    ],
    i = A.jsx("span", { className: "ticker-separator", children: "✦" }),
    r = () =>
      a.map((o, c) =>
        A.jsxs(
          "span",
          {
            className: "ticker-phrase",
            children: [
              i,
              A.jsx("span", { className: "ticker-text", children: o }),
            ],
          },
          c,
        ),
      );
  return A.jsxs("div", {
    className: "ticker-wrapper",
    role: "marquee",
    "aria-label": "Ashram proclamation",
    children: [
      A.jsx("div", { className: "ticker-fade-left" }),
      A.jsx("div", { className: "ticker-fade-right" }),
      A.jsx("div", { className: "ticker-shimmer" }),
      A.jsx("div", {
        className: "ticker-track",
        children: [0, 1, 2].map((o) =>
          A.jsx("div", { className: "ticker-set", children: r() }, o),
        ),
      }),
    ],
  });
}
const $A = {
  "fade-up": { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  "fade-left": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  reveal: {
    hidden: { opacity: 0, y: 50, clipPath: "inset(100% 0% 0% 0%)" },
    visible: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1 },
  },
};
function St({
  children: a,
  delay: i = 0,
  className: r = "",
  variant: o = "fade-up",
  duration: c = 1,
}) {
  const l = $A[o];
  return A.jsx(Gt.div, {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: !0, amount: 0 },
    variants: l,
    transition: { duration: c, delay: i, ease: [0.22, 1, 0.36, 1] },
    className: r,
    children: a,
  });
}
const t3 = {
    hidden: {},
    visible: (a) => ({ transition: { staggerChildren: a } }),
  },
  e3 = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  },
  n3 = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };
function Oi({
  text: a,
  as: i = "h2",
  className: r = "",
  delay: o = 0,
  mode: c = "word",
  stagger: l = 0.04,
}) {
  if (c === "line")
    return A.jsx("div", {
      className: "overflow-hidden",
      children: A.jsx(Gt.div, {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: !0, amount: 0 },
        variants: n3,
        transition: { delay: o },
        children: A.jsx(i, { className: r, children: a }),
      }),
    });
  const f = a.split(" "),
    m = r.includes("text-center")
      ? "center"
      : r.includes("text-right")
        ? "flex-end"
        : "flex-start";
  return A.jsx(i, {
    className: r,
    "aria-label": a,
    children: A.jsx(Gt.span, {
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: !0, amount: 0 },
      custom: l,
      variants: t3,
      style: { display: "flex", flexWrap: "wrap", justifyContent: m },
      transition: { delayChildren: o },
      children: f.map((p, v) =>
        A.jsx(
          "span",
          {
            style: {
              overflow: "hidden",
              display: "inline-block",
              paddingBottom: "0.08em",
            },
            children: A.jsxs(Gt.span, {
              variants: e3,
              style: { display: "inline-block", whiteSpace: "pre" },
              children: [p, v < f.length - 1 ? " " : ""],
            }),
          },
          v,
        ),
      ),
    }),
  });
}
const a3 = "/assets/ashram_hero_dawn-BJFBu3Sy.png",
  i3 = "/assets/tamirabarani_river-COXFEqPU.png";
function s3() {
  const a = nt.useRef(null),
    { scrollYProgress: i } = _A({
      target: a,
      offset: ["start start", "end start"],
    }),
    r = Mr(i, [0, 1], ["0%", "18%"]),
    o = Mr(i, [0, 1], ["0%", "10%"]),
    c = Mr(i, [0, 0.7], [1, 0]);
  return A.jsxs("section", {
    ref: a,
    className:
      "relative h-screen min-h-[540px] sm:min-h-[680px] flex items-center justify-center overflow-hidden bg-charcoal",
    children: [
      A.jsx(Gt.div, {
        style: { y: o },
        className: "absolute inset-0 z-0",
        children: A.jsx(Gt.img, {
          src: a3,
          alt: "",
          "aria-hidden": "true",
          width: 1920,
          height: 1080,
          className:
            "w-full h-full object-cover opacity-30 mix-blend-luminosity",
          whileInView: { scale: [1.1, 1.18, 1.1] },
          viewport: { once: !1 },
          transition: { duration: 20, repeat: 1 / 0, ease: "easeInOut" },
        }),
      }),
      A.jsx(Gt.div, {
        style: { y: r },
        className: "absolute inset-0 z-[1]",
        children: A.jsx(Gt.img, {
          src: i3,
          alt: "Manujothi Ashram — Tamirabarani River at golden hour",
          width: 1920,
          height: 1080,
          fetchPriority: "high",
          className: "w-full h-full object-cover opacity-80",
          style: { objectPosition: "center 80%" },
          whileInView: { scale: [1.1, 1.15, 1.1], x: ["0%", "1%", "0%"] },
          viewport: { once: !1 },
          transition: { duration: 25, repeat: 1 / 0, ease: "easeInOut" },
        }),
      }),
      A.jsx(Gt.div, {
        className: "absolute inset-0 z-[2]",
        whileInView: { opacity: [0.8, 1, 0.8] },
        viewport: { once: !1 },
        transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
        style: {
          background:
            "radial-gradient(ellipse 70% 60% at 50% 65%, rgba(180,120,30,0.28) 0%, transparent 70%)",
        },
      }),
      A.jsx("div", {
        className: "absolute inset-0 z-[3]",
        style: {
          background:
            "linear-gradient(to bottom, rgba(20,15,8,0.72) 0%, rgba(20,15,8,0.15) 35%, rgba(20,15,8,0.10) 55%, rgba(20,15,8,0.78) 100%)",
        },
      }),
      A.jsx("div", { className: "hero-shimmer absolute inset-0 z-[4]" }),
      A.jsx("div", {
        className: "absolute inset-0 z-[4] opacity-[0.05] mix-blend-overlay",
        style: {
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        },
      }),
      A.jsxs(Gt.div, {
        style: { opacity: c },
        className:
          "relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto mt-8 sm:mt-16",
        whileInView: { y: [0, -6, 0] },
        viewport: { once: !1 },
        transition: { duration: 6, repeat: 1 / 0, ease: "easeInOut" },
        children: [
          A.jsx(St, {
            variant: "reveal",
            children: A.jsxs("div", {
              className: "flex items-center justify-center gap-4 mb-8",
              children: [
                A.jsx("div", { className: "h-px w-12 bg-brass/60" }),
                A.jsx("span", {
                  className:
                    "font-sans text-[10px] uppercase tracking-[0.35em] text-brass/90",
                  children: "Tirunelveli, Tamil Nadu · Since 1963",
                }),
                A.jsx("div", { className: "h-px w-12 bg-brass/60" }),
              ],
            }),
          }),
          A.jsx(Oi, {
            text: "Manujothi Ashram",
            as: "h1",
            className:
              "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-parchment mb-4 leading-[1.05] text-center",
            delay: 0.15,
            stagger: 0.08,
          }),
          A.jsx(St, {
            delay: 0.4,
            variant: "reveal",
            children: A.jsx("p", {
              className:
                "font-sans text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-parchment/50 mb-6 sm:mb-8",
              children:
                "One God. One Nation. — The eternal call of Manujothi Ashram.",
            }),
          }),
          A.jsxs(St, {
            delay: 0.55,
            variant: "fade-up",
            children: [
              A.jsx("p", {
                className:
                  "font-quote italic text-base sm:text-lg md:text-xl text-parchment/75 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed sm:leading-loose",
                children:
                  '"As the lightning cometh out of the East, and shineth even unto the West; so shall also the coming of the Son of Man be."',
              }),
              A.jsx("p", {
                className:
                  "font-sans text-[10px] uppercase tracking-[0.25em] text-brass mb-8 sm:mb-12",
                children: "— Matthew 24:27",
              }),
            ],
          }),
          A.jsx(St, {
            delay: 0.7,
            variant: "scale",
            children: A.jsxs("div", {
              className:
                "flex flex-col sm:flex-row items-center justify-center gap-4",
              children: [
                A.jsxs("a", {
                  href: "#teachings",
                  className:
                    "btn-arrow inline-flex items-center gap-2 sm:gap-3 bg-brass text-charcoal px-5 py-3 sm:px-8 sm:py-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-parchment transition-colors duration-300 rounded-full",
                  children: [
                    "Explore the Teachings ",
                    A.jsx("span", {
                      className: "arrow text-base",
                      children: "→",
                    }),
                  ],
                }),
                A.jsxs("a", {
                  href: "#visit",
                  className:
                    "btn-arrow inline-flex items-center gap-2 sm:gap-3 border border-parchment/30 text-parchment px-5 py-3 sm:px-8 sm:py-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:bg-parchment/10 transition-colors duration-300 rounded-full",
                  children: [
                    "Plan Your Visit ",
                    A.jsx("span", {
                      className: "arrow text-base",
                      children: "→",
                    }),
                  ],
                }),
              ],
            }),
          }),
          A.jsx(St, {
            delay: 1.2,
            children: A.jsxs("div", {
              className:
                "mt-8 sm:mt-16 flex flex-col items-center gap-2 opacity-40",
              children: [
                A.jsx("div", {
                  className: "w-px h-10 bg-parchment animate-pulse",
                }),
                A.jsx("span", {
                  className:
                    "font-sans text-[9px] uppercase tracking-[0.3em] text-parchment",
                  children: "Scroll",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function l3() {
  const [a, i] = nt.useState(!1);
  return A.jsx("section", {
    id: "about",
    className: "py-16 sm:py-28 md:py-40 px-4 sm:px-6 bg-parchment",
    children: A.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        A.jsx(St, {
          variant: "reveal",
          children: A.jsx("div", {
            className: "text-center mb-12",
            children: A.jsx("span", {
              className:
                "font-sans text-[10px] uppercase tracking-[0.3em] text-brass",
              children: "Our Foundation",
            }),
          }),
        }),
        A.jsx(St, {
          delay: 0.1,
          variant: "scale",
          children: A.jsx("div", {
            className: "ornament mb-10",
            children: "✦",
          }),
        }),
        A.jsx(St, {
          delay: 0.2,
          variant: "reveal",
          duration: 1.2,
          children: A.jsx("p", {
            className:
              "drop-cap font-serif text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed md:leading-relaxed text-charcoal text-center",
            children:
              "We do not teach the traditions of men. Through a living comparative study of the Holy Bible, Bhagavad Gita, Holy Quran, and the Vedas, the Manujothi Ashram seeks to illuminate the one supreme truth that underlies all divine revelation — and to unite all humanity beneath the banner of One God, One Nation.",
          }),
        }),
        A.jsx(St, {
          delay: 0.15,
          variant: "scale",
          children: A.jsx("div", {
            className: "ornament mt-10",
            children: "✦",
          }),
        }),
        A.jsx(St, {
          delay: 0.1,
          variant: "fade-right",
          children: A.jsxs("div", {
            className: `group relative z-0 mt-12 border border-brass/30 bg-stone/20 p-5 sm:p-8 md:p-10 text-center max-w-2xl mx-auto rounded-2xl transition-all duration-500 cursor-pointer ${a ? "scale-[1.03] z-10 shadow-2xl bg-stone/30" : "hover:scale-[1.03] hover:z-10 hover:shadow-2xl hover:bg-stone/30"}`,
            onClick: () => i((r) => !r),
            children: [
              A.jsx("span", {
                className:
                  "font-sans text-[9px] uppercase tracking-[0.3em] text-brass font-bold mb-2 block",
                children: "Est. at the Ashram",
              }),
              A.jsx(Oi, {
                text: "College of Vedas & Other Scriptures",
                as: "h2",
                className: "font-serif text-2xl text-charcoal mb-4 text-center",
                delay: 0.1,
                stagger: 0.05,
              }),
              A.jsxs("div", {
                className: `relative mt-4 overflow-hidden w-full text-center transition-all duration-500 ${a ? "min-h-[140px]" : "group-hover:min-h-[140px]"}`,
                children: [
                  A.jsx("div", {
                    className: `absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10 ${a ? "opacity-0 pointer-events-none" : "group-hover:opacity-0"}`,
                    children: A.jsxs("span", {
                      className:
                        "font-sans text-[10px] uppercase tracking-[0.2em] text-brass/70 border border-brass/30 px-4 py-1.5 rounded-full",
                      children: [
                        A.jsx("span", {
                          className: "hidden sm:inline",
                          children: "Hover to Read About the College",
                        }),
                        A.jsx("span", {
                          className: "sm:hidden",
                          children: "Tap to Read About the College",
                        }),
                      ],
                    }),
                  }),
                  A.jsxs("div", {
                    className: `overflow-y-auto max-h-[140px] pr-2 custom-scrollbar text-left text-center flex flex-col gap-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${a ? "translate-x-0 opacity-100" : "translate-x-[110%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`,
                    children: [
                      A.jsxs("p", {
                        className:
                          "font-sans text-sm text-charcoal/75 leading-relaxed",
                        children: [
                          A.jsx("strong", {
                            className: "text-brass",
                            children:
                              "A Research Centre for obtaining Eternal Life.",
                          }),
                          " It trains people of various religious organizations to come to the realization of ",
                          A.jsx("strong", {
                            className: "font-medium text-charcoal px-1",
                            children: "One God — One Nation,",
                          }),
                          " leaving caste, creed, and religion behind, by following the Vedic principle.",
                        ],
                      }),
                      A.jsxs("p", {
                        className:
                          "font-sans text-sm text-charcoal/75 leading-relaxed",
                        children: [
                          "Comparative studies across the ",
                          A.jsx("span", {
                            className: "italic",
                            children:
                              "Bible, Bhagavad Gita, Quran, Bhagavatham, Geethanjali, Ahilathirattu, Arulnool, Paradise Lost and Paradise Gained",
                          }),
                          " — free and open to all genuine seekers.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function ly({
  end: a,
  duration: i = 2e3,
  prefix: r = "",
  suffix: o = "",
  decimals: c = 0,
  className: l = "",
}) {
  const f = nt.useRef(null),
    m = iy(f, { once: !0, amount: 0 }),
    [p, v] = nt.useState("0");
  return (
    nt.useEffect(() => {
      if (!m) return;
      const g = performance.now();
      function x(y) {
        const d = y - g,
          S = Math.min(d / i, 1),
          M = (1 - Math.pow(1 - S, 3)) * a;
        (v(M.toFixed(c)), S < 1 ? requestAnimationFrame(x) : v(a.toFixed(c)));
      }
      requestAnimationFrame(x);
    }, [m, a, i, c]),
    A.jsxs("span", { ref: f, className: l, children: [r, p, o] })
  );
}
const r3 = "/assets/founder_real-omJ2K7P8.jpg",
  o3 = [
    { num: 63, suffix: "", unit: "Acres", label: "Ashram grounds" },
    { num: 110, suffix: "+", unit: "Residents", label: "Living & serving" },
    { num: 1963, suffix: "", unit: "", label: "Year established" },
    { num: 60, suffix: "+", unit: "Years", label: "Of ministry" },
  ];
function u3() {
  return A.jsx("section", {
    className: "py-16 sm:py-24 md:py-32 bg-stone/25",
    children: A.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-10",
      children: [
        A.jsxs("div", {
          className:
            "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start",
          children: [
            A.jsx(St, {
              variant: "fade-left",
              className: "order-1",
              children: A.jsxs("div", {
                className: "relative max-w-md mx-auto lg:max-w-none",
                children: [
                  A.jsx("div", {
                    className:
                      "absolute -inset-3 border border-brass/25 pointer-events-none z-10 rounded-3xl",
                  }),
                  A.jsx("div", {
                    className:
                      "absolute -right-4 -bottom-4 w-32 h-32 bg-brass/10 z-0 rounded-2xl",
                  }),
                  A.jsx("img", {
                    src: r3,
                    alt: "R. Paulaseer Lawrie Muthukrishna — Founder of Manujothi Ashram, speaking at a meeting",
                    loading: "lazy",
                    className:
                      "relative z-[2] w-full object-cover object-top rounded-2xl",
                    style: { aspectRatio: "3/4" },
                  }),
                  A.jsxs("div", {
                    className:
                      "bg-charcoal text-parchment px-6 py-4 relative z-[2] rounded-b-2xl",
                    children: [
                      A.jsx("p", {
                        className: "font-serif text-lg",
                        children: "R. Paulaseer Lawrie",
                      }),
                      A.jsx("p", {
                        className:
                          "font-sans text-[10px] uppercase tracking-[0.2em] text-brass mt-1",
                        children: "Gurudev Shree Lahari Krishna · 1921 – 1989",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            A.jsx(St, {
              delay: 0.15,
              variant: "fade-right",
              className: "order-2",
              children: A.jsxs("div", {
                className: "pt-0 lg:pt-8",
                children: [
                  A.jsx(St, {
                    variant: "reveal",
                    children: A.jsx("span", {
                      className:
                        "font-sans text-[10px] uppercase tracking-[0.3em] text-brass",
                      children: "The Founder & The Ashram",
                    }),
                  }),
                  A.jsx(Oi, {
                    text: "A Legacy of Spiritual Research",
                    as: "h2",
                    className:
                      "font-serif text-4xl md:text-5xl text-charcoal mt-4 mb-6",
                    delay: 0.1,
                    stagger: 0.06,
                  }),
                  A.jsxs("div", {
                    className:
                      "space-y-5 text-charcoal/75 text-base sm:text-lg leading-relaxed font-light",
                    children: [
                      A.jsxs("p", {
                        children: [
                          "Born on February 24, 1921, at the Lakshmi Tea Estate in Munnar, Kerala, to Deva Rasiah and Nesammal, ",
                          A.jsx("strong", {
                            className: "font-medium text-charcoal",
                            children: "R. Paulaseer Lawrie Muthukrishna",
                          }),
                          " — known to his followers as ",
                          A.jsx("em", {
                            children: "Gurudev Shree Lahari Krishna",
                          }),
                          " — dedicated his life to a single conviction: that one God calls to all of humanity through all scripture. Educated at St. John's College, Wesley College, and Madras Christian College, he also served at the Vellore Medical College Hospital before devoting himself entirely to his spiritual mission.",
                        ],
                      }),
                      A.jsxs("p", {
                        children: [
                          "In 1963, he established the ",
                          A.jsx("strong", {
                            className: "font-medium text-charcoal",
                            children: "63-acre Manujothi Ashram",
                          }),
                          ' near the sacred banks of the Tamirabarani river in Tirunelveli, Tamil Nadu. "Manujothi" means ',
                          A.jsx("em", { children: "Light to the Mankind" }),
                          ". It was to be the Zion of earth for those seeking the underlying unity of all divine revelation.",
                        ],
                      }),
                      A.jsxs("p", {
                        children: [
                          "Paulaseer Lawrie rests at the Ashram where he lived and taught. His ministry lives on through the movement's world headquarters, the College of Vedas, and the annual ",
                          A.jsx("strong", {
                            className: "font-medium text-charcoal",
                            children: "Glorification Day",
                          }),
                          " celebrated every February 18–25.",
                        ],
                      }),
                    ],
                  }),
                  A.jsx("div", {
                    className: "mt-10 border-l border-brass/30 pl-6 space-y-6",
                    children: [
                      { year: "1921", note: "Born in Munnar, Kerala" },
                      {
                        year: "1954",
                        note: "Participated in William Branham's healing revivals across India",
                      },
                      {
                        year: "1963",
                        note: "Founded Manujothi Ashram, Tirunelveli",
                      },
                      {
                        year: "1969",
                        note: "Displayed Vishwaroopam in Chicago, July 20–21 — the same day as the Apollo 11 moon landing",
                      },
                    ].map((a, i) =>
                      A.jsxs(
                        Gt.div,
                        {
                          className: "relative",
                          initial: { opacity: 0, x: -30, y: 20 },
                          whileInView: { opacity: 1, x: 0, y: 0 },
                          viewport: { once: !0, amount: 0 },
                          transition: {
                            duration: 0.7,
                            delay: i * 0.2,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          children: [
                            A.jsx(Gt.div, {
                              className:
                                "absolute -left-[1.9rem] top-1 w-2 h-2 rounded-full bg-brass",
                              initial: { scale: 0 },
                              whileInView: { scale: 1 },
                              viewport: { once: !0 },
                              transition: {
                                duration: 0.4,
                                delay: i * 0.2 + 0.3,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            }),
                            A.jsx("span", {
                              className:
                                "font-serif text-sm text-brass font-semibold",
                              children: a.year,
                            }),
                            A.jsx("p", {
                              className:
                                "font-sans text-sm text-charcoal/65 mt-0.5",
                              children: a.note,
                            }),
                          ],
                        },
                        a.year,
                      ),
                    ),
                  }),
                  A.jsx("div", {
                    className: "mt-10",
                    children: A.jsxs("a", {
                      href: "#about",
                      className:
                        "btn-arrow inline-flex items-center gap-3 border border-charcoal text-charcoal px-7 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-charcoal hover:text-parchment transition-colors duration-300 rounded-full",
                      children: [
                        "Read Full History ",
                        A.jsx("span", { className: "arrow", children: "→" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
        A.jsx(St, {
          delay: 0.2,
          variant: "fade-up",
          children: A.jsx("div", {
            className:
              "grid grid-cols-2 md:grid-cols-4 gap-0 mt-12 sm:mt-20 border border-stone divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-stone rounded-2xl overflow-hidden",
            children: o3.map((a) =>
              A.jsxs(
                "div",
                {
                  className:
                    "py-5 px-4 sm:py-8 sm:px-6 text-center bg-parchment hover:bg-stone/20 transition-colors duration-300",
                  children: [
                    A.jsxs("div", {
                      className: "stat-number",
                      children: [
                        A.jsx(ly, {
                          end: a.num,
                          suffix: a.suffix,
                          duration: 2200,
                        }),
                        A.jsx("span", {
                          className: "text-brass text-xl ml-0.5",
                          children: a.unit,
                        }),
                      ],
                    }),
                    A.jsx("p", {
                      className:
                        "font-sans text-[10px] uppercase tracking-[0.2em] text-charcoal/50 mt-2",
                      children: a.label,
                    }),
                  ],
                },
                a.label,
              ),
            ),
          }),
        }),
      ],
    }),
  });
}
const c3 = "/assets/teaching_scripture-CjeaZRiM.png",
  f3 = "/assets/teaching_prophecy-GVsYAEdt.png",
  h3 = "/assets/teaching_meditation-XwSnWQRy.png",
  d3 = "/assets/book_amrutha_manjari-BtUZNnWU.png",
  m3 = "/assets/book_ankuram-CqOdz2OK.png",
  p3 = "/assets/book_secret_liberation-DC0xZx7s.png",
  g3 = "/assets/book_loving_hands-BeyXMTGd.png",
  v3 = "/assets/book_krishna_lahari-Lf7-AydO.png",
  y3 = "/assets/book_sermons-DugJW-qX.png",
  x3 = [
    {
      category: "Comparative Scripture",
      scriptureRef: "John 1:1",
      title: "The Comparative Study",
      description:
        "A living inquiry into the parallels between the Holy Bible, Bhagavad Gita, Holy Quran, and the Vedas — revealing the single divine voice behind all scripture.",
      volume: "Volume I",
      image: c3,
    },
    {
      category: "Eschatology",
      scriptureRef: "Matthew 24:27",
      title: "Prophecies of the Son of Man",
      description:
        "Understanding the signs of the age through the lens of ancient prophets — Ahilathirattu, Arulnool, Bhagavatham, Paradise Lost and Paradise Gained — alongside the writings of Paulaseer Lawrie.",
      volume: "Volume II",
      image: f3,
    },
    {
      category: "Spiritual Discipline",
      scriptureRef: "John 12:34",
      title: "The Immortal Yoga",
      description:
        "Practical spiritual disciplines for aligning the soul with the eternal. Drawn from the Vedas, the Sermon on the Mount, and the lived experience of the Ashram community.",
      volume: "Volume III",
      image: h3,
    },
  ],
  S3 = [
    {
      spine: "AM",
      vol: "Vol. I · 2024",
      title: "Amrutha Manjari — Gnana Makarantham",
      subtitle: '"The Nectar of Wisdom"',
      author: "Manujothi Ashram",
      lang: "Telugu · English",
      link: "mailto:ashram@manjothi.com?subject=Request%20Book%20-%20Amrutha%20Manjari%20Gnana%20Makarantham",
      linkLabel: "✉ Request Free Copy",
      cover: d3,
    },
    {
      spine: "AN",
      vol: "Vol. II · 2025",
      title: "Amrutha Manjari — Ankuram 2",
      subtitle: '"The Sprouting Seed"',
      author: "Manujothi Ashram",
      lang: "Telugu · English",
      link: "mailto:ashram@manjothi.com?subject=Request%20Book%20-%20Amrutha%20Manjari%20Ankuram%202",
      linkLabel: "✉ Request Free Copy",
      cover: m3,
    },
    {
      spine: "SL",
      vol: "2019 · Partridge Publishing",
      title: "The Secret of Liberation",
      subtitle: '"Purification of the self — the secret of immortality"',
      author: "Devaaseer Lankadieu",
      lang: "English",
      link: "https://www.amazon.in/Secret-Liberation-Devaaseer-Lankadieu/dp/1543751245",
      linkLabel: "📖 Buy on Amazon",
      external: !0,
      cover: p3,
    },
    {
      spine: "SH",
      vol: "2024 · Partridge Publishing",
      title: "The Skill of His Loving Hands",
      subtitle: '"A journey of spiritual healing and wellness"',
      author: "Devaaseer Lankadieu",
      lang: "English",
      link: "https://www.amazon.in/Skill-His-Loving-Hands/dp/1543774431",
      linkLabel: "📖 Buy on Amazon",
      external: !0,
      cover: g3,
    },
    {
      spine: "KL",
      vol: "Special",
      title: "Krishna Lahari",
      subtitle: "Devotional hymns & collected songs",
      author: "Manujothi Ashram",
      lang: "Tamil · Telugu",
      link: "mailto:ashram@manjothi.com?subject=Request%20Book%20-%20Krishna%20Lahari",
      linkLabel: "✉ Request Free Copy",
      cover: v3,
    },
    {
      spine: "MS",
      vol: "Archive",
      title: "Shree Lahari Krishna — Messages & Sermons",
      subtitle: "Compiled teachings 1969–1989",
      author: "Manujothi Ashram",
      lang: "Multi-language",
      link: "mailto:ashram@manjothi.com?subject=Request%20Book%20-%20Messages%20and%20Sermons",
      linkLabel: "✉ Request Free Copy",
      cover: y3,
    },
  ];
function b3() {
  const a = nt.useRef(null);
  return A.jsx("section", {
    id: "teachings",
    className: "py-16 sm:py-32 px-4 sm:px-6 bg-parchment",
    children: A.jsxs("div", {
      className: "max-w-7xl mx-auto",
      children: [
        A.jsx(St, {
          variant: "reveal",
          children: A.jsx("div", {
            className: "text-center mb-6",
            children: A.jsx("span", {
              className:
                "font-sans text-[10px] uppercase tracking-[0.3em] text-brass",
              children: "Core Teachings",
            }),
          }),
        }),
        A.jsx(Oi, {
          text: "Publications & Sermons",
          as: "h2",
          className:
            "font-serif text-4xl md:text-5xl text-charcoal text-center mb-4",
          delay: 0.05,
          stagger: 0.06,
        }),
        A.jsx(St, {
          delay: 0.1,
          variant: "fade-up",
          children: A.jsxs("p", {
            className:
              "text-center font-sans text-sm text-charcoal/50 max-w-xl mx-auto mb-6 leading-relaxed",
            children: [
              "The Ashram's ",
              A.jsx("em", { children: "Amrutha Manjari" }),
              " magazine series and collected messages of Lord Shri Lahari Krishna — broadcast on All India Radio, Tirunelveli (Akashvani) — freely distributed across India.",
            ],
          }),
        }),
        A.jsx(St, {
          delay: 0.1,
          variant: "scale",
          children: A.jsx("div", {
            className: "ornament mb-16",
            children: "✦",
          }),
        }),
        A.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-4",
          children: x3.map((i, r) =>
            A.jsx(
              St,
              {
                delay: r * 0.12,
                variant: "scale",
                children: A.jsxs(Gt.div, {
                  whileHover: {
                    y: -24,
                    scale: 1.08,
                    boxShadow:
                      "0 35px 60px -15px rgba(0, 0, 0, 0.45), 0 20px 35px -10px rgba(184, 151, 104, 0.25)",
                    zIndex: 10,
                  },
                  whileTap: { scale: 1.02 },
                  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  className:
                    "group relative h-full flex flex-col overflow-hidden cursor-pointer rounded-2xl",
                  style: { zIndex: 1 },
                  children: [
                    A.jsx("div", {
                      className: "absolute inset-0 z-0",
                      children: A.jsx("img", {
                        src: i.image,
                        alt: "",
                        "aria-hidden": "true",
                        className:
                          "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                      }),
                    }),
                    A.jsx("div", {
                      className:
                        "absolute inset-0 z-[1] bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/50 group-hover:from-charcoal group-hover:via-charcoal/90 group-hover:to-charcoal/60 transition-all duration-500",
                    }),
                    A.jsxs("div", {
                      className:
                        "relative z-[2] p-6 sm:p-10 flex flex-col h-full",
                      children: [
                        A.jsxs("div", {
                          className: "flex items-center justify-between mb-6",
                          children: [
                            A.jsx("span", {
                              className:
                                "text-[9px] font-bold uppercase tracking-[0.25em] text-brass",
                              children: i.category,
                            }),
                            A.jsx("span", {
                              className:
                                "font-quote italic text-xs text-parchment/40",
                              children: i.scriptureRef,
                            }),
                          ],
                        }),
                        A.jsx("div", {
                          className:
                            "text-[9px] font-sans uppercase tracking-[0.2em] text-parchment/30 mb-3",
                          children: i.volume,
                        }),
                        A.jsx("h3", {
                          className:
                            "font-serif text-2xl text-parchment mb-4 group-hover:text-brass transition-colors duration-300",
                          children: i.title,
                        }),
                        A.jsx("p", {
                          className:
                            "font-sans text-sm text-parchment/65 leading-relaxed flex-grow",
                          children: i.description,
                        }),
                        A.jsx("div", {
                          className:
                            "mt-8 pt-6 border-t border-parchment/15 group-hover:border-brass/30 transition-colors duration-300",
                          children: A.jsxs("span", {
                            className:
                              "btn-arrow inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-parchment/70 group-hover:text-brass transition-colors duration-300",
                            children: [
                              "Read Document ",
                              A.jsx("span", {
                                className: "arrow",
                                children: "→",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              },
              i.title,
            ),
          ),
        }),
        A.jsx(St, {
          delay: 0.1,
          variant: "fade-up",
          children: A.jsxs("div", {
            id: "publications",
            className: "mt-20",
            children: [
              A.jsxs("div", {
                className: "flex items-center gap-6 mb-10",
                children: [
                  A.jsx("div", { className: "h-px flex-1 bg-stone" }),
                  A.jsxs("div", {
                    className: "text-center",
                    children: [
                      A.jsx("span", {
                        className:
                          "font-sans text-[10px] uppercase tracking-[0.3em] text-brass",
                        children: "Get the Publications",
                      }),
                      A.jsx("h3", {
                        className: "font-serif text-2xl text-charcoal mt-1",
                        children: "Books & Publications",
                      }),
                    ],
                  }),
                  A.jsx("div", { className: "h-px flex-1 bg-stone" }),
                ],
              }),
              A.jsxs("p", {
                className:
                  "text-center font-sans text-xs text-charcoal/45 max-w-lg mx-auto mb-10 leading-relaxed",
                children: [
                  "Published by ",
                  A.jsx("strong", {
                    className: "text-charcoal/60",
                    children: "Arjuna Publications",
                  }),
                  " via Soundarya Lahari Creations & ",
                  A.jsx("strong", {
                    className: "text-charcoal/60",
                    children: "Partridge Publishing India",
                  }),
                  ". Ashram literature is distributed ",
                  A.jsx("em", { children: "free of charge" }),
                  " to genuine seekers.",
                ],
              }),
              A.jsxs("div", {
                className: "relative",
                children: [
                  A.jsx("button", {
                    onClick: () => {
                      const i = a.current;
                      i && i.scrollBy({ left: -324, behavior: "smooth" });
                    },
                    className:
                      "absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-charcoal/70 backdrop-blur-sm text-parchment flex items-center justify-center hover:bg-brass hover:text-charcoal transition-all duration-300 shadow-lg",
                    "aria-label": "Scroll left",
                    children: "←",
                  }),
                  A.jsx("button", {
                    onClick: () => {
                      const i = a.current;
                      i && i.scrollBy({ left: 324, behavior: "smooth" });
                    },
                    className:
                      "absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-charcoal/70 backdrop-blur-sm text-parchment flex items-center justify-center hover:bg-brass hover:text-charcoal transition-all duration-300 shadow-lg",
                    "aria-label": "Scroll right",
                    children: "→",
                  }),
                  A.jsx("div", {
                    ref: a,
                    className: "w-full overflow-hidden rounded-2xl",
                    role: "region",
                    "aria-label": "Books carousel",
                    children: A.jsx("div", {
                      className: "book-scroll-track flex",
                      children: [0, 1].map((i) =>
                        S3.map((r) =>
                          A.jsxs(
                            "div",
                            {
                              className:
                                "group relative flex-shrink-0 w-[220px] h-[310px] sm:w-[300px] sm:h-[400px] rounded-2xl overflow-hidden mx-2 sm:mx-3",
                              children: [
                                A.jsx("img", {
                                  src: r.cover,
                                  alt: `${r.title} — Book Cover`,
                                  className:
                                    "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",
                                }),
                                A.jsx("div", {
                                  className:
                                    "absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                }),
                                A.jsxs("div", {
                                  className:
                                    "absolute bottom-0 left-0 right-0 p-5 flex flex-col z-[2] opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out",
                                  children: [
                                    A.jsxs("span", {
                                      className:
                                        "font-sans text-[9px] uppercase tracking-[0.2em] text-brass/80 mb-1",
                                      children: [r.vol, " · ", r.lang],
                                    }),
                                    A.jsx("h4", {
                                      className:
                                        "font-serif text-lg text-parchment leading-snug mb-1",
                                      children: r.title,
                                    }),
                                    A.jsx("p", {
                                      className:
                                        "font-quote italic text-xs text-parchment/50 mb-1 line-clamp-1",
                                      children: r.subtitle,
                                    }),
                                    A.jsxs("p", {
                                      className:
                                        "font-sans text-[10px] text-brass font-medium mb-3",
                                      children: ["by ", r.author],
                                    }),
                                    A.jsxs("a", {
                                      href: r.link,
                                      ...(r.external
                                        ? {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                          }
                                        : {}),
                                      className:
                                        "btn-arrow inline-flex items-center gap-2 bg-brass text-charcoal px-4 py-2.5 text-[9px] font-bold uppercase tracking-widest hover:bg-parchment transition-colors duration-300 w-fit rounded-full",
                                      children: [
                                        r.linkLabel,
                                        " ",
                                        A.jsx("span", {
                                          className: "arrow",
                                          children: "→",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            `${i}-${r.title}`,
                          ),
                        ),
                      ),
                    }),
                  }),
                ],
              }),
              A.jsxs("div", {
                className:
                  "mt-4 bg-charcoal text-parchment flex flex-col items-center justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5 rounded-2xl sm:flex-row",
                children: [
                  A.jsx("p", {
                    className: "font-sans text-xs text-parchment/50",
                    children:
                      "All Ashram publications are distributed free of charge to genuine seekers.",
                  }),
                  A.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row flex-wrap gap-3 flex-shrink-0 w-full sm:w-auto",
                    children: [
                      A.jsxs("a", {
                        href: "mailto:ashram@manjothi.com?subject=Request%20Free%20Publications",
                        className:
                          "btn-arrow inline-flex items-center gap-2 bg-brass text-charcoal px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest hover:bg-parchment transition-colors duration-300 rounded-full w-full sm:w-auto",
                        children: [
                          "Request Free Copies ",
                          A.jsx("span", { className: "arrow", children: "→" }),
                        ],
                      }),
                      A.jsxs("a", {
                        href: "https://www.youtube.com/@SoundaryaLahariCreations",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "btn-arrow inline-flex items-center gap-2 border border-parchment/20 text-parchment/65 px-5 py-2.5 text-[9px] font-semibold uppercase tracking-widest hover:border-brass hover:text-brass transition-colors duration-300 rounded-full",
                        children: [
                          "Watch on YouTube ",
                          A.jsx("span", { className: "arrow", children: "→" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function T3() {
  return A.jsxs("section", {
    className:
      "relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-charcoal text-parchment text-center overflow-hidden grain-overlay",
    children: [
      A.jsx("div", {
        "aria-hidden": "true",
        className:
          "absolute inset-0 flex items-center justify-center pointer-events-none select-none",
        children: A.jsx("span", {
          className:
            "font-serif text-parchment/[0.04] leading-none select-none",
          style: { fontSize: "clamp(12rem, 28vw, 22rem)", lineHeight: 0.8 },
          children: '"',
        }),
      }),
      A.jsxs("div", {
        className: "relative z-10 max-w-4xl mx-auto",
        children: [
          A.jsx(St, {
            variant: "reveal",
            children: A.jsxs("div", {
              className: "flex items-center justify-center gap-4 mb-6",
              children: [
                A.jsx("div", { className: "h-px w-10 bg-brass/40" }),
                A.jsx("span", {
                  className:
                    "font-sans text-[9px] uppercase tracking-[0.35em] text-brass/70",
                  children: "The Word of the Lord",
                }),
                A.jsx("div", { className: "h-px w-10 bg-brass/40" }),
              ],
            }),
          }),
          A.jsx(St, {
            delay: 0.15,
            variant: "reveal",
            duration: 1.3,
            children: A.jsxs("blockquote", {
              className:
                "font-quote italic text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-snug md:leading-snug mb-6 sm:mb-8 text-parchment/92",
              children: [
                '"As the lightning cometh out of the East,',
                A.jsx("br", { className: "hidden lg:block" }),
                " and shineth even unto the West;",
                A.jsx("br", { className: "hidden lg:block" }),
                " so shall also the coming of",
                " ",
                A.jsx("span", {
                  className: "text-brass not-italic uppercase tracking-wide",
                  children: "The Son of Man",
                }),
                " ",
                'be."',
              ],
            }),
          }),
          A.jsx(St, {
            delay: 0.3,
            variant: "fade-up",
            children: A.jsxs("div", {
              className: "flex flex-col items-center gap-2",
              children: [
                A.jsx(Gt.div, {
                  initial: { scaleX: 0 },
                  whileInView: { scaleX: 1 },
                  viewport: { once: !0 },
                  transition: {
                    duration: 1,
                    delay: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  style: { originX: 0.5 },
                  className: "w-12 h-px bg-brass",
                }),
                A.jsx("cite", {
                  className:
                    "font-sans text-xs uppercase tracking-[0.3em] text-brass not-italic",
                  children: "Matthew 24:27",
                }),
              ],
            }),
          }),
          A.jsx(St, {
            delay: 0.15,
            variant: "reveal",
            duration: 1.2,
            children: A.jsxs("div", {
              className: "mt-10 pt-8 border-t border-parchment/10",
              children: [
                A.jsx("blockquote", {
                  className:
                    "font-quote italic text-sm sm:text-lg md:text-xl text-parchment/60 mb-4",
                  children:
                    '"We have heard out of the law that Christ abideth for ever: and how sayest thou, The Son of Man must be lifted up? Who is this Son of Man?"',
                }),
                A.jsx("cite", {
                  className:
                    "font-sans text-[10px] uppercase tracking-[0.3em] text-brass/60 not-italic",
                  children: "John 12:34",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const A3 = "/assets/map_india-Dj_NaC6Z.png",
  M3 = "/assets/map_south_india-CHFzgmoV.png",
  E3 = "/assets/map_tamilnadu-34TAJ-CW.png",
  C3 = "/assets/map_tirunelveli-Cw48jgbT.png",
  w3 = "/assets/map_ashram-BJCftp0e.png",
  Mc = [
    { img: A3, label: "India", sub: "Satellite View" },
    { img: M3, label: "South India", sub: "Southern Peninsula" },
    { img: E3, label: "Tamil Nadu", sub: "Land of Temples" },
    { img: C3, label: "Tirunelveli", sub: "Along the Tamirabarani" },
    { img: w3, label: "Manujothi Ashram", sub: "Sathianagaram · Tirunelveli" },
  ];
function j3() {
  const [a, i] = nt.useState(0),
    [r, o] = nt.useState(!1),
    c = nt.useRef(null);
  (nt.useEffect(() => {
    const f = new IntersectionObserver(
      ([m]) => {
        m.isIntersecting && !r && o(!0);
      },
      { threshold: 0.4 },
    );
    return (c.current && f.observe(c.current), () => f.disconnect());
  }, [r]),
    nt.useEffect(() => {
      if (!r) return;
      const f = setTimeout(() => {
        i((m) => (m + 1) % Mc.length);
      }, 2800);
      return () => clearTimeout(f);
    }, [r, a]));
  const l = Mc[a];
  return A.jsx("section", {
    id: "events",
    className: "py-16 sm:py-24 md:py-32 bg-stone/20",
    children: A.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-10",
      children: [
        A.jsx(St, {
          variant: "reveal",
          children: A.jsx("div", {
            className: "text-center mb-4",
            children: A.jsx("span", {
              className:
                "font-sans text-[10px] uppercase tracking-[0.3em] text-brass",
              children: "Events & Visitation",
            }),
          }),
        }),
        A.jsx(Oi, {
          text: "Gather in Fellowship",
          as: "h2",
          className:
            "font-serif text-4xl md:text-5xl text-charcoal text-center mb-16",
          delay: 0.05,
          stagger: 0.07,
        }),
        A.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start",
          children: [
            A.jsx(St, {
              variant: "fade-left",
              children: A.jsxs("div", {
                className: "space-y-10",
                children: [
                  A.jsxs("div", {
                    className: "border-l-2 border-brass pl-6",
                    children: [
                      A.jsx("div", {
                        className: "flex items-center gap-3 mb-2",
                        children: A.jsx("span", {
                          className:
                            "bg-brass text-charcoal text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full",
                          children: "Annual · Feb 18–25",
                        }),
                      }),
                      A.jsx("h3", {
                        className: "font-serif text-2xl text-charcoal mb-3",
                        children: "Glorification Day",
                      }),
                      A.jsxs("p", {
                        className:
                          "font-sans text-sm text-charcoal/65 leading-relaxed",
                        children: [
                          "Held every year from ",
                          A.jsx("strong", {
                            className: "text-charcoal font-medium",
                            children: "February 18th to 25th",
                          }),
                          " at Manujothi Ashram, Sathia Nagaram. This multi-day celebration draws seekers from across India and the globe for deep spiritual reflection, congregational singing, communal vegetarian meals, and extended comparative scripture teachings.",
                        ],
                      }),
                    ],
                  }),
                  A.jsxs("div", {
                    className: "border-l-2 border-brass pl-6",
                    children: [
                      A.jsx("div", {
                        className: "flex items-center gap-3 mb-2",
                        children: A.jsx("span", {
                          className:
                            "bg-brass text-charcoal text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full",
                          children: "Annual · July 21",
                        }),
                      }),
                      A.jsx("h3", {
                        className: "font-serif text-2xl text-charcoal mb-3",
                        children: "Kalki Jayanti",
                      }),
                      A.jsxs("p", {
                        className:
                          "font-sans text-sm text-charcoal/65 leading-relaxed",
                        children: [
                          "Observed every year on ",
                          A.jsx("strong", {
                            className: "text-charcoal font-medium",
                            children: "July 21st",
                          }),
                          ", commemorating the day the Vishwaroopam was displayed in Chicago in 1969 — the same day as the Apollo 11 moon landing. Devotees gather for praise, meditation, and scripture study.",
                        ],
                      }),
                    ],
                  }),
                  A.jsxs("div", {
                    className: "border-l-2 border-stone pl-6",
                    children: [
                      A.jsx("h3", {
                        className: "font-serif text-2xl text-charcoal mb-3",
                        children:
                          "Shree Lahari Krishna Praise & Meditation Centres",
                      }),
                      A.jsxs("p", {
                        className:
                          "font-sans text-sm text-charcoal/65 leading-relaxed",
                        children: [
                          "Affiliated praise and meditation centres are active across India and internationally. Messages of Lord Shri Lahari Krishna have been broadcast on ",
                          A.jsx("strong", {
                            className: "text-charcoal font-medium",
                            children:
                              "All India Radio (Akashvani), Tirunelveli",
                          }),
                          ". Contact the Ashram to locate a centre near you.",
                        ],
                      }),
                    ],
                  }),
                  A.jsxs("div", {
                    className: "border-l-2 border-stone pl-6",
                    children: [
                      A.jsx("h3", {
                        className: "font-serif text-2xl text-charcoal mb-3",
                        children: "Daily Meditation",
                      }),
                      A.jsx("p", {
                        className:
                          "font-sans text-sm text-charcoal/65 leading-relaxed",
                        children:
                          "The Ashram's 63-acre grounds — with ancient banyan groves and quiet pathways along the Tamirabarani riverbank — are open for meditation, study, and personal retreat. Visitors are welcome to participate in the rhythms of Ashram life: prayer, study, simple work, and communal meals.",
                      }),
                    ],
                  }),
                  A.jsx("div", {
                    id: "visit",
                    className: "pt-2",
                    children: A.jsxs("a", {
                      href: "mailto:ashram@manjothi.com",
                      className:
                        "btn-arrow inline-flex items-center gap-3 bg-charcoal text-parchment px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-brass hover:text-charcoal transition-colors duration-300 rounded-full",
                      children: [
                        "Plan Your Visit ",
                        A.jsx("span", { className: "arrow", children: "→" }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            A.jsxs("div", {
              className: "space-y-6",
              children: [
                A.jsxs("div", {
                  ref: c,
                  className:
                    "relative rounded-3xl bg-charcoal overflow-hidden h-[300px] sm:h-[420px] md:h-[500px]",
                  children: [
                    A.jsx("div", {
                      className: "absolute inset-0 pointer-events-none z-[5]",
                      style: {
                        background:
                          "radial-gradient(ellipse 75% 65% at 50% 50%, transparent 25%, rgba(26,28,32,0.6) 100%)",
                      },
                    }),
                    A.jsx(Qc, {
                      mode: "wait",
                      children: A.jsxs(
                        Gt.div,
                        {
                          className: "absolute inset-0",
                          initial: { opacity: 0, scale: 0.75 },
                          animate: { opacity: 1, scale: 1.05 },
                          exit: { opacity: 0, scale: 1.6 },
                          transition: {
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          },
                          children: [
                            A.jsx("img", {
                              src: l.img,
                              alt: l.label,
                              className:
                                "absolute inset-0 w-full h-full object-cover",
                              draggable: !1,
                            }),
                            A.jsx("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/70",
                            }),
                          ],
                        },
                        a,
                      ),
                    }),
                    A.jsxs("div", {
                      className:
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[6] pointer-events-none",
                      children: [
                        A.jsx("div", {
                          className:
                            "w-20 h-20 border border-brass/30 rounded-full",
                        }),
                        A.jsx("div", {
                          className:
                            "absolute top-1/2 left-0 w-5 h-px bg-brass/35 -translate-y-1/2",
                        }),
                        A.jsx("div", {
                          className:
                            "absolute top-1/2 right-0 w-5 h-px bg-brass/35 -translate-y-1/2",
                        }),
                        A.jsx("div", {
                          className:
                            "absolute left-1/2 top-0 w-px h-5 bg-brass/35 -translate-x-1/2",
                        }),
                        A.jsx("div", {
                          className:
                            "absolute left-1/2 bottom-0 w-px h-5 bg-brass/35 -translate-x-1/2",
                        }),
                        A.jsx("div", {
                          className:
                            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-brass/70",
                          children: A.jsx("div", {
                            className:
                              "absolute inset-0 rounded-full bg-brass/50 animate-ping",
                          }),
                        }),
                      ],
                    }),
                    A.jsx(Qc, {
                      mode: "wait",
                      children: A.jsxs(
                        Gt.div,
                        {
                          className:
                            "absolute bottom-16 left-0 right-0 z-[7] text-center",
                          initial: { opacity: 0, y: 20 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -15 },
                          transition: { duration: 0.6, delay: 0.3 },
                          children: [
                            A.jsx("span", {
                              className:
                                "font-serif text-xl sm:text-3xl md:text-4xl text-parchment tracking-wide drop-shadow-lg block",
                              children: l.label,
                            }),
                            A.jsx("span", {
                              className:
                                "mt-2 font-sans text-[10px] uppercase tracking-[0.3em] text-brass/80 drop-shadow block",
                              children: l.sub,
                            }),
                          ],
                        },
                        `label-${a}`,
                      ),
                    }),
                    A.jsx("div", {
                      className:
                        "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-[8]",
                      children: Mc.map((f, m) =>
                        A.jsxs(
                          "button",
                          {
                            onClick: () => {
                              i(m);
                            },
                            className:
                              "flex flex-col items-center gap-1 cursor-pointer group",
                            children: [
                              A.jsx("div", {
                                className: `rounded-full transition-all duration-300 ${m === a ? "w-2.5 h-2.5 bg-brass shadow-[0_0_8px_rgba(184,151,104,0.5)]" : m < a ? "w-1.5 h-1.5 bg-brass/60" : "w-1.5 h-1.5 bg-brass/25"}`,
                              }),
                              A.jsx("span", {
                                className: `font-sans text-[6px] uppercase tracking-widest whitespace-nowrap transition-colors ${m === a ? "text-brass/80" : "text-brass/30"}`,
                                children:
                                  m < 4
                                    ? ["India", "South", "TN", "TVL"][m]
                                    : "Ashram",
                              }),
                            ],
                          },
                          f.label,
                        ),
                      ),
                    }),
                    r &&
                      A.jsx(Gt.div, {
                        className:
                          "absolute top-4 left-1/2 -translate-x-1/2 z-[8]",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        children: A.jsx("span", {
                          className:
                            "font-sans text-[8px] uppercase tracking-[0.4em] text-brass/50 animate-pulse",
                          children: "⟐ Zooming in ⟐",
                        }),
                      }),
                  ],
                }),
                A.jsx(St, {
                  variant: "fade-up",
                  children: A.jsxs("div", {
                    className:
                      "bg-charcoal rounded-2xl p-8 text-center relative overflow-hidden",
                    children: [
                      A.jsx("div", {
                        className: "absolute inset-0 opacity-5",
                        style: {
                          backgroundImage:
                            "radial-gradient(circle at 25% 25%, #B89768 1px, transparent 1px)",
                          backgroundSize: "20px 20px",
                        },
                      }),
                      A.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          A.jsx("div", {
                            className: "flex justify-center mb-4",
                            children: A.jsxs("svg", {
                              width: "32",
                              height: "40",
                              viewBox: "0 0 24 30",
                              fill: "none",
                              children: [
                                A.jsx("path", {
                                  d: "M12 0C5.37 0 0 5.37 0 12c0 9 12 18 12 18s12-9 12-18C24 5.37 18.63 0 12 0z",
                                  fill: "#B89768",
                                }),
                                A.jsx("circle", {
                                  cx: "12",
                                  cy: "11",
                                  r: "4",
                                  fill: "#1A1C20",
                                }),
                              ],
                            }),
                          }),
                          A.jsx("span", {
                            className:
                              "font-sans text-[9px] uppercase tracking-[0.35em] text-brass/60 block mb-2",
                            children: "✦ Find Us Here ✦",
                          }),
                          A.jsx("h3", {
                            className:
                              "font-serif text-2xl text-parchment mb-4",
                            children: "Manujothi Ashram",
                          }),
                          A.jsxs("address", {
                            className:
                              "not-italic font-sans text-sm text-parchment/50 leading-7",
                            children: [
                              "Sathianagaram, Odaimarichan Post",
                              A.jsx("br", {}),
                              "(Via) Pappagudi, Near Mukkudal",
                              A.jsx("br", {}),
                              "Tirunelveli, Tamil Nadu",
                              A.jsx("br", {}),
                              A.jsx("span", {
                                className: "text-brass font-semibold text-base",
                                children: "India — 627 602",
                              }),
                            ],
                          }),
                          A.jsx("div", {
                            className: "mt-5",
                            children: A.jsxs("a", {
                              href: "https://maps.google.com/?q=Manujothi+Ashram+Tirunelveli",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "inline-flex items-center gap-2 bg-brass/15 border border-brass/30 text-brass px-5 py-2.5 text-[9px] font-bold uppercase tracking-widest hover:bg-brass hover:text-charcoal transition-all duration-300 rounded-full",
                              children: [
                                A.jsxs("svg", {
                                  width: "14",
                                  height: "14",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  children: [
                                    A.jsx("path", {
                                      d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z",
                                    }),
                                    A.jsx("circle", {
                                      cx: "12",
                                      cy: "10",
                                      r: "3",
                                    }),
                                  ],
                                }),
                                "View on Google Maps",
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                A.jsx(St, {
                  delay: 0.1,
                  variant: "fade-up",
                  children: A.jsxs("div", {
                    className:
                      "bg-stone/30 border border-stone p-6 space-y-2 rounded-2xl",
                    children: [
                      A.jsx("h4", {
                        className:
                          "font-sans text-[10px] uppercase tracking-[0.25em] text-brass font-bold mb-3",
                        children: "Visitor Information",
                      }),
                      A.jsxs("p", {
                        className:
                          "font-sans text-xs text-charcoal/55 leading-relaxed",
                        children: [
                          "• Only ",
                          A.jsx("strong", {
                            className: "text-charcoal/80",
                            children: "vegetarian diet",
                          }),
                          " is served at the Ashram",
                        ],
                      }),
                      A.jsxs("p", {
                        className:
                          "font-sans text-xs text-charcoal/55 leading-relaxed",
                        children: [
                          "• Minimum stay: ",
                          A.jsx("strong", {
                            className: "text-charcoal/80",
                            children: "3 days",
                          }),
                          " — food and accommodation are free",
                        ],
                      }),
                      A.jsx("p", {
                        className:
                          "font-sans text-xs text-charcoal/55 leading-relaxed",
                        children:
                          "• Overseas visitors welcome with valid visa and shared faith",
                      }),
                      A.jsxs("p", {
                        className:
                          "font-sans text-xs text-charcoal/55 leading-relaxed",
                        children: [
                          "• ",
                          A.jsx("strong", {
                            className: "text-charcoal/80",
                            children: "8 TNSTC bus services",
                          }),
                          " daily to the Ashram from Tirunelveli",
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const og = [
  {
    text: "Free",
    num: null,
    suffix: "",
    label: "Literature distributed globally",
  },
  { text: null, num: 110, suffix: "+", label: "Residents fed daily" },
  { text: null, num: 60, suffix: "+", label: "Years of unbroken mission" },
];
function D3() {
  return A.jsx("section", {
    id: "support",
    className: "py-12 sm:py-16 px-4 sm:px-6 bg-charcoal text-parchment",
    children: A.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        A.jsx(St, {
          variant: "reveal",
          children: A.jsx("div", {
            className: "text-center mb-3",
            children: A.jsx("span", {
              className:
                "font-sans text-[10px] uppercase tracking-[0.3em] text-brass",
              children: "Support the Mission",
            }),
          }),
        }),
        A.jsx(Oi, {
          text: "Sustain the Light",
          as: "h2",
          className:
            "font-serif text-3xl md:text-4xl text-parchment text-center mb-4",
          delay: 0.05,
          stagger: 0.07,
        }),
        A.jsx(St, {
          delay: 0.1,
          variant: "fade-up",
          children: A.jsx("p", {
            className:
              "font-sans text-sm text-parchment/60 leading-relaxed max-w-xl mx-auto text-center mb-8",
            children:
              "Your contributions sustain our 110+ residents, free literature distribution, and continuous spiritual guidance for truth-seekers worldwide.",
          }),
        }),
        A.jsx(St, {
          delay: 0.1,
          variant: "scale",
          children: A.jsx("div", {
            className:
              "grid grid-cols-3 gap-0 border border-parchment/10 mb-8 rounded-2xl overflow-hidden",
            children: og.map((a, i) =>
              A.jsxs(
                "div",
                {
                  className: `py-5 px-3 text-center ${i < og.length - 1 ? "border-r border-parchment/10" : ""}`,
                  children: [
                    A.jsx("div", {
                      className: "font-serif text-2xl text-brass mb-1",
                      children:
                        a.num !== null
                          ? A.jsx(ly, {
                              end: a.num,
                              suffix: a.suffix,
                              duration: 2200,
                            })
                          : a.text,
                    }),
                    A.jsx("p", {
                      className:
                        "font-sans text-[9px] uppercase tracking-[0.15em] text-parchment/40",
                      children: a.label,
                    }),
                  ],
                },
                a.label,
              ),
            ),
          }),
        }),
        A.jsx(St, {
          delay: 0.15,
          variant: "fade-up",
          children: A.jsxs("div", {
            className:
              "border border-parchment/10 p-6 sm:p-8 text-center grain-overlay rounded-2xl",
            children: [
              A.jsx("p", {
                className: "font-quote italic text-base text-parchment/70 mb-6",
                children:
                  '"The light of Manujothi is kept alive by those who believe the truth is worth seeking."',
              }),
              A.jsxs("a", {
                href: "mailto:ashram@manjothi.com",
                className:
                  "btn-arrow inline-flex items-center gap-3 bg-brass text-charcoal px-8 py-3 text-xs font-semibold uppercase tracking-widest hover:bg-parchment transition-colors duration-300 rounded-full",
                children: [
                  "Make a Contribution ",
                  A.jsx("span", { className: "arrow", children: "→" }),
                ],
              }),
              A.jsx("p", {
                className:
                  "font-sans text-[10px] text-parchment/30 mt-4 uppercase tracking-wider",
                children:
                  "All contributions support the Ashram's charitable work",
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
var Er = { exports: {} };
/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 *
 * The MIT License (MIT)
 *
 * Copyright (c) Liam Brummitt and contributors.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var N3 = Er.exports,
  ug;
function R3() {
  return (
    ug ||
      ((ug = 1),
      (function (a, i) {
        (function (o, c) {
          a.exports = c();
        })(N3, function () {
          return (function (r) {
            var o = {};
            function c(l) {
              if (o[l]) return o[l].exports;
              var f = (o[l] = { i: l, l: !1, exports: {} });
              return (
                r[l].call(f.exports, f, f.exports, c),
                (f.l = !0),
                f.exports
              );
            }
            return (
              (c.m = r),
              (c.c = o),
              (c.d = function (l, f, m) {
                c.o(l, f) ||
                  Object.defineProperty(l, f, { enumerable: !0, get: m });
              }),
              (c.r = function (l) {
                (typeof Symbol < "u" &&
                  Symbol.toStringTag &&
                  Object.defineProperty(l, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(l, "__esModule", { value: !0 }));
              }),
              (c.t = function (l, f) {
                if (
                  (f & 1 && (l = c(l)),
                  f & 8 || (f & 4 && typeof l == "object" && l && l.__esModule))
                )
                  return l;
                var m = Object.create(null);
                if (
                  (c.r(m),
                  Object.defineProperty(m, "default", {
                    enumerable: !0,
                    value: l,
                  }),
                  f & 2 && typeof l != "string")
                )
                  for (var p in l)
                    c.d(
                      m,
                      p,
                      function (v) {
                        return l[v];
                      }.bind(null, p),
                    );
                return m;
              }),
              (c.n = function (l) {
                var f =
                  l && l.__esModule
                    ? function () {
                        return l.default;
                      }
                    : function () {
                        return l;
                      };
                return (c.d(f, "a", f), f);
              }),
              (c.o = function (l, f) {
                return Object.prototype.hasOwnProperty.call(l, f);
              }),
              (c.p = ""),
              c((c.s = 20))
            );
          })([
            function (r, o) {
              var c = {};
              ((r.exports = c),
                (function () {
                  ((c._baseDelta = 1e3 / 60),
                    (c._nextId = 0),
                    (c._seed = 0),
                    (c._nowStartTime = +new Date()),
                    (c._warnedOnce = {}),
                    (c._decomp = null),
                    (c.extend = function (f, m) {
                      var p, v;
                      typeof m == "boolean"
                        ? ((p = 2), (v = m))
                        : ((p = 1), (v = !0));
                      for (var g = p; g < arguments.length; g++) {
                        var x = arguments[g];
                        if (x)
                          for (var y in x)
                            v &&
                            x[y] &&
                            x[y].constructor === Object &&
                            (!f[y] || f[y].constructor === Object)
                              ? ((f[y] = f[y] || {}), c.extend(f[y], v, x[y]))
                              : (f[y] = x[y]);
                      }
                      return f;
                    }),
                    (c.clone = function (f, m) {
                      return c.extend({}, m, f);
                    }),
                    (c.keys = function (f) {
                      if (Object.keys) return Object.keys(f);
                      var m = [];
                      for (var p in f) m.push(p);
                      return m;
                    }),
                    (c.values = function (f) {
                      var m = [];
                      if (Object.keys) {
                        for (var p = Object.keys(f), v = 0; v < p.length; v++)
                          m.push(f[p[v]]);
                        return m;
                      }
                      for (var g in f) m.push(f[g]);
                      return m;
                    }),
                    (c.get = function (f, m, p, v) {
                      m = m.split(".").slice(p, v);
                      for (var g = 0; g < m.length; g += 1) f = f[m[g]];
                      return f;
                    }),
                    (c.set = function (f, m, p, v, g) {
                      var x = m.split(".").slice(v, g);
                      return ((c.get(f, m, 0, -1)[x[x.length - 1]] = p), p);
                    }),
                    (c.shuffle = function (f) {
                      for (var m = f.length - 1; m > 0; m--) {
                        var p = Math.floor(c.random() * (m + 1)),
                          v = f[m];
                        ((f[m] = f[p]), (f[p] = v));
                      }
                      return f;
                    }),
                    (c.choose = function (f) {
                      return f[Math.floor(c.random() * f.length)];
                    }),
                    (c.isElement = function (f) {
                      return typeof HTMLElement < "u"
                        ? f instanceof HTMLElement
                        : !!(f && f.nodeType && f.nodeName);
                    }),
                    (c.isArray = function (f) {
                      return (
                        Object.prototype.toString.call(f) === "[object Array]"
                      );
                    }),
                    (c.isFunction = function (f) {
                      return typeof f == "function";
                    }),
                    (c.isPlainObject = function (f) {
                      return typeof f == "object" && f.constructor === Object;
                    }),
                    (c.isString = function (f) {
                      return toString.call(f) === "[object String]";
                    }),
                    (c.clamp = function (f, m, p) {
                      return f < m ? m : f > p ? p : f;
                    }),
                    (c.sign = function (f) {
                      return f < 0 ? -1 : 1;
                    }),
                    (c.now = function () {
                      if (typeof window < "u" && window.performance) {
                        if (window.performance.now)
                          return window.performance.now();
                        if (window.performance.webkitNow)
                          return window.performance.webkitNow();
                      }
                      return Date.now
                        ? Date.now()
                        : new Date() - c._nowStartTime;
                    }),
                    (c.random = function (f, m) {
                      return (
                        (f = typeof f < "u" ? f : 0),
                        (m = typeof m < "u" ? m : 1),
                        f + l() * (m - f)
                      );
                    }));
                  var l = function () {
                    return (
                      (c._seed = (c._seed * 9301 + 49297) % 233280),
                      c._seed / 233280
                    );
                  };
                  ((c.colorToNumber = function (f) {
                    return (
                      (f = f.replace("#", "")),
                      f.length == 3 &&
                        (f =
                          f.charAt(0) +
                          f.charAt(0) +
                          f.charAt(1) +
                          f.charAt(1) +
                          f.charAt(2) +
                          f.charAt(2)),
                      parseInt(f, 16)
                    );
                  }),
                    (c.logLevel = 1),
                    (c.log = function () {
                      console &&
                        c.logLevel > 0 &&
                        c.logLevel <= 3 &&
                        console.log.apply(
                          console,
                          ["matter-js:"].concat(
                            Array.prototype.slice.call(arguments),
                          ),
                        );
                    }),
                    (c.info = function () {
                      console &&
                        c.logLevel > 0 &&
                        c.logLevel <= 2 &&
                        console.info.apply(
                          console,
                          ["matter-js:"].concat(
                            Array.prototype.slice.call(arguments),
                          ),
                        );
                    }),
                    (c.warn = function () {
                      console &&
                        c.logLevel > 0 &&
                        c.logLevel <= 3 &&
                        console.warn.apply(
                          console,
                          ["matter-js:"].concat(
                            Array.prototype.slice.call(arguments),
                          ),
                        );
                    }),
                    (c.warnOnce = function () {
                      var f = Array.prototype.slice.call(arguments).join(" ");
                      c._warnedOnce[f] || (c.warn(f), (c._warnedOnce[f] = !0));
                    }),
                    (c.deprecated = function (f, m, p) {
                      f[m] = c.chain(function () {
                        c.warnOnce("🔅 deprecated 🔅", p);
                      }, f[m]);
                    }),
                    (c.nextId = function () {
                      return c._nextId++;
                    }),
                    (c.indexOf = function (f, m) {
                      if (f.indexOf) return f.indexOf(m);
                      for (var p = 0; p < f.length; p++)
                        if (f[p] === m) return p;
                      return -1;
                    }),
                    (c.map = function (f, m) {
                      if (f.map) return f.map(m);
                      for (var p = [], v = 0; v < f.length; v += 1)
                        p.push(m(f[v]));
                      return p;
                    }),
                    (c.topologicalSort = function (f) {
                      var m = [],
                        p = [],
                        v = [];
                      for (var g in f)
                        !p[g] && !v[g] && c._topologicalSort(g, p, v, f, m);
                      return m;
                    }),
                    (c._topologicalSort = function (f, m, p, v, g) {
                      var x = v[f] || [];
                      p[f] = !0;
                      for (var y = 0; y < x.length; y += 1) {
                        var d = x[y];
                        p[d] || m[d] || c._topologicalSort(d, m, p, v, g);
                      }
                      ((p[f] = !1), (m[f] = !0), g.push(f));
                    }),
                    (c.chain = function () {
                      for (var f = [], m = 0; m < arguments.length; m += 1) {
                        var p = arguments[m];
                        p._chained ? f.push.apply(f, p._chained) : f.push(p);
                      }
                      var v = function () {
                        for (
                          var g,
                            x = new Array(arguments.length),
                            y = 0,
                            d = arguments.length;
                          y < d;
                          y++
                        )
                          x[y] = arguments[y];
                        for (y = 0; y < f.length; y += 1) {
                          var S = f[y].apply(g, x);
                          typeof S < "u" && (g = S);
                        }
                        return g;
                      };
                      return ((v._chained = f), v);
                    }),
                    (c.chainPathBefore = function (f, m, p) {
                      return c.set(f, m, c.chain(p, c.get(f, m)));
                    }),
                    (c.chainPathAfter = function (f, m, p) {
                      return c.set(f, m, c.chain(c.get(f, m), p));
                    }),
                    (c.setDecomp = function (f) {
                      c._decomp = f;
                    }),
                    (c.getDecomp = function () {
                      var f = c._decomp;
                      try {
                        (!f && typeof window < "u" && (f = window.decomp),
                          !f && typeof wp < "u" && (f = wp.decomp));
                      } catch {
                        f = null;
                      }
                      return f;
                    }));
                })());
            },
            function (r, o) {
              var c = {};
              ((r.exports = c),
                (function () {
                  ((c.create = function (l) {
                    var f = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
                    return (l && c.update(f, l), f);
                  }),
                    (c.update = function (l, f, m) {
                      ((l.min.x = 1 / 0),
                        (l.max.x = -1 / 0),
                        (l.min.y = 1 / 0),
                        (l.max.y = -1 / 0));
                      for (var p = 0; p < f.length; p++) {
                        var v = f[p];
                        (v.x > l.max.x && (l.max.x = v.x),
                          v.x < l.min.x && (l.min.x = v.x),
                          v.y > l.max.y && (l.max.y = v.y),
                          v.y < l.min.y && (l.min.y = v.y));
                      }
                      m &&
                        (m.x > 0 ? (l.max.x += m.x) : (l.min.x += m.x),
                        m.y > 0 ? (l.max.y += m.y) : (l.min.y += m.y));
                    }),
                    (c.contains = function (l, f) {
                      return (
                        f.x >= l.min.x &&
                        f.x <= l.max.x &&
                        f.y >= l.min.y &&
                        f.y <= l.max.y
                      );
                    }),
                    (c.overlaps = function (l, f) {
                      return (
                        l.min.x <= f.max.x &&
                        l.max.x >= f.min.x &&
                        l.max.y >= f.min.y &&
                        l.min.y <= f.max.y
                      );
                    }),
                    (c.translate = function (l, f) {
                      ((l.min.x += f.x),
                        (l.max.x += f.x),
                        (l.min.y += f.y),
                        (l.max.y += f.y));
                    }),
                    (c.shift = function (l, f) {
                      var m = l.max.x - l.min.x,
                        p = l.max.y - l.min.y;
                      ((l.min.x = f.x),
                        (l.max.x = f.x + m),
                        (l.min.y = f.y),
                        (l.max.y = f.y + p));
                    }));
                })());
            },
            function (r, o) {
              var c = {};
              ((r.exports = c),
                (function () {
                  ((c.create = function (l, f) {
                    return { x: l || 0, y: f || 0 };
                  }),
                    (c.clone = function (l) {
                      return { x: l.x, y: l.y };
                    }),
                    (c.magnitude = function (l) {
                      return Math.sqrt(l.x * l.x + l.y * l.y);
                    }),
                    (c.magnitudeSquared = function (l) {
                      return l.x * l.x + l.y * l.y;
                    }),
                    (c.rotate = function (l, f, m) {
                      var p = Math.cos(f),
                        v = Math.sin(f);
                      m || (m = {});
                      var g = l.x * p - l.y * v;
                      return ((m.y = l.x * v + l.y * p), (m.x = g), m);
                    }),
                    (c.rotateAbout = function (l, f, m, p) {
                      var v = Math.cos(f),
                        g = Math.sin(f);
                      p || (p = {});
                      var x = m.x + ((l.x - m.x) * v - (l.y - m.y) * g);
                      return (
                        (p.y = m.y + ((l.x - m.x) * g + (l.y - m.y) * v)),
                        (p.x = x),
                        p
                      );
                    }),
                    (c.normalise = function (l) {
                      var f = c.magnitude(l);
                      return f === 0
                        ? { x: 0, y: 0 }
                        : { x: l.x / f, y: l.y / f };
                    }),
                    (c.dot = function (l, f) {
                      return l.x * f.x + l.y * f.y;
                    }),
                    (c.cross = function (l, f) {
                      return l.x * f.y - l.y * f.x;
                    }),
                    (c.cross3 = function (l, f, m) {
                      return (
                        (f.x - l.x) * (m.y - l.y) - (f.y - l.y) * (m.x - l.x)
                      );
                    }),
                    (c.add = function (l, f, m) {
                      return (
                        m || (m = {}),
                        (m.x = l.x + f.x),
                        (m.y = l.y + f.y),
                        m
                      );
                    }),
                    (c.sub = function (l, f, m) {
                      return (
                        m || (m = {}),
                        (m.x = l.x - f.x),
                        (m.y = l.y - f.y),
                        m
                      );
                    }),
                    (c.mult = function (l, f) {
                      return { x: l.x * f, y: l.y * f };
                    }),
                    (c.div = function (l, f) {
                      return { x: l.x / f, y: l.y / f };
                    }),
                    (c.perp = function (l, f) {
                      return (
                        (f = f === !0 ? -1 : 1),
                        { x: f * -l.y, y: f * l.x }
                      );
                    }),
                    (c.neg = function (l) {
                      return { x: -l.x, y: -l.y };
                    }),
                    (c.angle = function (l, f) {
                      return Math.atan2(f.y - l.y, f.x - l.x);
                    }),
                    (c._temp = [
                      c.create(),
                      c.create(),
                      c.create(),
                      c.create(),
                      c.create(),
                      c.create(),
                    ]));
                })());
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(2),
                m = c(0);
              (function () {
                ((l.create = function (p, v) {
                  for (var g = [], x = 0; x < p.length; x++) {
                    var y = p[x],
                      d = { x: y.x, y: y.y, index: x, body: v, isInternal: !1 };
                    g.push(d);
                  }
                  return g;
                }),
                  (l.fromPath = function (p, v) {
                    var g = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                      x = [];
                    return (
                      p.replace(g, function (y, d, S) {
                        x.push({ x: parseFloat(d), y: parseFloat(S) });
                      }),
                      l.create(x, v)
                    );
                  }),
                  (l.centre = function (p) {
                    for (
                      var v = l.area(p, !0), g = { x: 0, y: 0 }, x, y, d, S = 0;
                      S < p.length;
                      S++
                    )
                      ((d = (S + 1) % p.length),
                        (x = f.cross(p[S], p[d])),
                        (y = f.mult(f.add(p[S], p[d]), x)),
                        (g = f.add(g, y)));
                    return f.div(g, 6 * v);
                  }),
                  (l.mean = function (p) {
                    for (var v = { x: 0, y: 0 }, g = 0; g < p.length; g++)
                      ((v.x += p[g].x), (v.y += p[g].y));
                    return f.div(v, p.length);
                  }),
                  (l.area = function (p, v) {
                    for (var g = 0, x = p.length - 1, y = 0; y < p.length; y++)
                      ((g += (p[x].x - p[y].x) * (p[x].y + p[y].y)), (x = y));
                    return v ? g / 2 : Math.abs(g) / 2;
                  }),
                  (l.inertia = function (p, v) {
                    for (
                      var g = 0, x = 0, y = p, d, S, b = 0;
                      b < y.length;
                      b++
                    )
                      ((S = (b + 1) % y.length),
                        (d = Math.abs(f.cross(y[S], y[b]))),
                        (g +=
                          d *
                          (f.dot(y[S], y[S]) +
                            f.dot(y[S], y[b]) +
                            f.dot(y[b], y[b]))),
                        (x += d));
                    return (v / 6) * (g / x);
                  }),
                  (l.translate = function (p, v, g) {
                    g = typeof g < "u" ? g : 1;
                    var x = p.length,
                      y = v.x * g,
                      d = v.y * g,
                      S;
                    for (S = 0; S < x; S++) ((p[S].x += y), (p[S].y += d));
                    return p;
                  }),
                  (l.rotate = function (p, v, g) {
                    if (v !== 0) {
                      var x = Math.cos(v),
                        y = Math.sin(v),
                        d = g.x,
                        S = g.y,
                        b = p.length,
                        M,
                        C,
                        O,
                        N;
                      for (N = 0; N < b; N++)
                        ((M = p[N]),
                          (C = M.x - d),
                          (O = M.y - S),
                          (M.x = d + (C * x - O * y)),
                          (M.y = S + (C * y + O * x)));
                      return p;
                    }
                  }),
                  (l.contains = function (p, v) {
                    for (
                      var g = v.x,
                        x = v.y,
                        y = p.length,
                        d = p[y - 1],
                        S,
                        b = 0;
                      b < y;
                      b++
                    ) {
                      if (
                        ((S = p[b]),
                        (g - d.x) * (S.y - d.y) + (x - d.y) * (d.x - S.x) > 0)
                      )
                        return !1;
                      d = S;
                    }
                    return !0;
                  }),
                  (l.scale = function (p, v, g, x) {
                    if (v === 1 && g === 1) return p;
                    x = x || l.centre(p);
                    for (var y, d, S = 0; S < p.length; S++)
                      ((y = p[S]),
                        (d = f.sub(y, x)),
                        (p[S].x = x.x + d.x * v),
                        (p[S].y = x.y + d.y * g));
                    return p;
                  }),
                  (l.chamfer = function (p, v, g, x, y) {
                    (typeof v == "number" ? (v = [v]) : (v = v || [8]),
                      (g = typeof g < "u" ? g : -1),
                      (x = x || 2),
                      (y = y || 14));
                    for (var d = [], S = 0; S < p.length; S++) {
                      var b = p[S - 1 >= 0 ? S - 1 : p.length - 1],
                        M = p[S],
                        C = p[(S + 1) % p.length],
                        O = v[S < v.length ? S : v.length - 1];
                      if (O === 0) {
                        d.push(M);
                        continue;
                      }
                      var N = f.normalise({ x: M.y - b.y, y: b.x - M.x }),
                        V = f.normalise({ x: C.y - M.y, y: M.x - C.x }),
                        E = Math.sqrt(2 * Math.pow(O, 2)),
                        D = f.mult(m.clone(N), O),
                        R = f.normalise(f.mult(f.add(N, V), 0.5)),
                        j = f.sub(M, f.mult(R, E)),
                        B = g;
                      (g === -1 && (B = Math.pow(O, 0.32) * 1.75),
                        (B = m.clamp(B, x, y)),
                        B % 2 === 1 && (B += 1));
                      for (
                        var z = Math.acos(f.dot(N, V)), U = z / B, H = 0;
                        H < B;
                        H++
                      )
                        d.push(f.add(f.rotate(D, U * H), j));
                    }
                    return d;
                  }),
                  (l.clockwiseSort = function (p) {
                    var v = l.mean(p);
                    return (
                      p.sort(function (g, x) {
                        return f.angle(v, g) - f.angle(v, x);
                      }),
                      p
                    );
                  }),
                  (l.isConvex = function (p) {
                    var v = 0,
                      g = p.length,
                      x,
                      y,
                      d,
                      S;
                    if (g < 3) return null;
                    for (x = 0; x < g; x++)
                      if (
                        ((y = (x + 1) % g),
                        (d = (x + 2) % g),
                        (S = (p[y].x - p[x].x) * (p[d].y - p[y].y)),
                        (S -= (p[y].y - p[x].y) * (p[d].x - p[y].x)),
                        S < 0 ? (v |= 1) : S > 0 && (v |= 2),
                        v === 3)
                      )
                        return !1;
                    return v !== 0 ? !0 : null;
                  }),
                  (l.hull = function (p) {
                    var v = [],
                      g = [],
                      x,
                      y;
                    for (
                      p = p.slice(0),
                        p.sort(function (d, S) {
                          var b = d.x - S.x;
                          return b !== 0 ? b : d.y - S.y;
                        }),
                        y = 0;
                      y < p.length;
                      y += 1
                    ) {
                      for (
                        x = p[y];
                        g.length >= 2 &&
                        f.cross3(g[g.length - 2], g[g.length - 1], x) <= 0;
                      )
                        g.pop();
                      g.push(x);
                    }
                    for (y = p.length - 1; y >= 0; y -= 1) {
                      for (
                        x = p[y];
                        v.length >= 2 &&
                        f.cross3(v[v.length - 2], v[v.length - 1], x) <= 0;
                      )
                        v.pop();
                      v.push(x);
                    }
                    return (v.pop(), g.pop(), v.concat(g));
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(3),
                m = c(2),
                p = c(7),
                v = c(0),
                g = c(1),
                x = c(11);
              (function () {
                ((l._timeCorrection = !0),
                  (l._inertiaScale = 4),
                  (l._nextCollidingGroupId = 1),
                  (l._nextNonCollidingGroupId = -1),
                  (l._nextCategory = 1),
                  (l._baseDelta = 1e3 / 60),
                  (l.create = function (d) {
                    var S = {
                        id: v.nextId(),
                        type: "body",
                        label: "Body",
                        parts: [],
                        plugin: {},
                        angle: 0,
                        vertices: f.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                        position: { x: 0, y: 0 },
                        force: { x: 0, y: 0 },
                        torque: 0,
                        positionImpulse: { x: 0, y: 0 },
                        constraintImpulse: { x: 0, y: 0, angle: 0 },
                        totalContacts: 0,
                        speed: 0,
                        angularSpeed: 0,
                        velocity: { x: 0, y: 0 },
                        angularVelocity: 0,
                        isSensor: !1,
                        isStatic: !1,
                        isSleeping: !1,
                        motion: 0,
                        sleepThreshold: 60,
                        density: 0.001,
                        restitution: 0,
                        friction: 0.1,
                        frictionStatic: 0.5,
                        frictionAir: 0.01,
                        collisionFilter: {
                          category: 1,
                          mask: 4294967295,
                          group: 0,
                        },
                        slop: 0.05,
                        timeScale: 1,
                        render: {
                          visible: !0,
                          opacity: 1,
                          strokeStyle: null,
                          fillStyle: null,
                          lineWidth: null,
                          sprite: {
                            xScale: 1,
                            yScale: 1,
                            xOffset: 0,
                            yOffset: 0,
                          },
                        },
                        events: null,
                        bounds: null,
                        chamfer: null,
                        circleRadius: 0,
                        positionPrev: null,
                        anglePrev: 0,
                        parent: null,
                        axes: null,
                        area: 0,
                        mass: 0,
                        inertia: 0,
                        deltaTime: 16.666666666666668,
                        _original: null,
                      },
                      b = v.extend(S, d);
                    return (y(b, d), b);
                  }),
                  (l.nextGroup = function (d) {
                    return d
                      ? l._nextNonCollidingGroupId--
                      : l._nextCollidingGroupId++;
                  }),
                  (l.nextCategory = function () {
                    return (
                      (l._nextCategory = l._nextCategory << 1),
                      l._nextCategory
                    );
                  }));
                var y = function (d, S) {
                  ((S = S || {}),
                    l.set(d, {
                      bounds: d.bounds || g.create(d.vertices),
                      positionPrev: d.positionPrev || m.clone(d.position),
                      anglePrev: d.anglePrev || d.angle,
                      vertices: d.vertices,
                      parts: d.parts || [d],
                      isStatic: d.isStatic,
                      isSleeping: d.isSleeping,
                      parent: d.parent || d,
                    }),
                    f.rotate(d.vertices, d.angle, d.position),
                    x.rotate(d.axes, d.angle),
                    g.update(d.bounds, d.vertices, d.velocity),
                    l.set(d, {
                      axes: S.axes || d.axes,
                      area: S.area || d.area,
                      mass: S.mass || d.mass,
                      inertia: S.inertia || d.inertia,
                    }));
                  var b = d.isStatic
                      ? "#14151f"
                      : v.choose([
                          "#f19648",
                          "#f5d259",
                          "#f55a3c",
                          "#063e7b",
                          "#ececd1",
                        ]),
                    M = d.isStatic ? "#555" : "#ccc",
                    C = d.isStatic && d.render.fillStyle === null ? 1 : 0;
                  ((d.render.fillStyle = d.render.fillStyle || b),
                    (d.render.strokeStyle = d.render.strokeStyle || M),
                    (d.render.lineWidth = d.render.lineWidth || C),
                    (d.render.sprite.xOffset +=
                      -(d.bounds.min.x - d.position.x) /
                      (d.bounds.max.x - d.bounds.min.x)),
                    (d.render.sprite.yOffset +=
                      -(d.bounds.min.y - d.position.y) /
                      (d.bounds.max.y - d.bounds.min.y)));
                };
                ((l.set = function (d, S, b) {
                  var M;
                  typeof S == "string" && ((M = S), (S = {}), (S[M] = b));
                  for (M in S)
                    if (Object.prototype.hasOwnProperty.call(S, M))
                      switch (((b = S[M]), M)) {
                        case "isStatic":
                          l.setStatic(d, b);
                          break;
                        case "isSleeping":
                          p.set(d, b);
                          break;
                        case "mass":
                          l.setMass(d, b);
                          break;
                        case "density":
                          l.setDensity(d, b);
                          break;
                        case "inertia":
                          l.setInertia(d, b);
                          break;
                        case "vertices":
                          l.setVertices(d, b);
                          break;
                        case "position":
                          l.setPosition(d, b);
                          break;
                        case "angle":
                          l.setAngle(d, b);
                          break;
                        case "velocity":
                          l.setVelocity(d, b);
                          break;
                        case "angularVelocity":
                          l.setAngularVelocity(d, b);
                          break;
                        case "speed":
                          l.setSpeed(d, b);
                          break;
                        case "angularSpeed":
                          l.setAngularSpeed(d, b);
                          break;
                        case "parts":
                          l.setParts(d, b);
                          break;
                        case "centre":
                          l.setCentre(d, b);
                          break;
                        default:
                          d[M] = b;
                      }
                }),
                  (l.setStatic = function (d, S) {
                    for (var b = 0; b < d.parts.length; b++) {
                      var M = d.parts[b];
                      (S
                        ? (M.isStatic ||
                            (M._original = {
                              restitution: M.restitution,
                              friction: M.friction,
                              mass: M.mass,
                              inertia: M.inertia,
                              density: M.density,
                              inverseMass: M.inverseMass,
                              inverseInertia: M.inverseInertia,
                            }),
                          (M.restitution = 0),
                          (M.friction = 1),
                          (M.mass = M.inertia = M.density = 1 / 0),
                          (M.inverseMass = M.inverseInertia = 0),
                          (M.positionPrev.x = M.position.x),
                          (M.positionPrev.y = M.position.y),
                          (M.anglePrev = M.angle),
                          (M.angularVelocity = 0),
                          (M.speed = 0),
                          (M.angularSpeed = 0),
                          (M.motion = 0))
                        : M._original &&
                          ((M.restitution = M._original.restitution),
                          (M.friction = M._original.friction),
                          (M.mass = M._original.mass),
                          (M.inertia = M._original.inertia),
                          (M.density = M._original.density),
                          (M.inverseMass = M._original.inverseMass),
                          (M.inverseInertia = M._original.inverseInertia),
                          (M._original = null)),
                        (M.isStatic = S));
                    }
                  }),
                  (l.setMass = function (d, S) {
                    var b = d.inertia / (d.mass / 6);
                    ((d.inertia = b * (S / 6)),
                      (d.inverseInertia = 1 / d.inertia),
                      (d.mass = S),
                      (d.inverseMass = 1 / d.mass),
                      (d.density = d.mass / d.area));
                  }),
                  (l.setDensity = function (d, S) {
                    (l.setMass(d, S * d.area), (d.density = S));
                  }),
                  (l.setInertia = function (d, S) {
                    ((d.inertia = S), (d.inverseInertia = 1 / d.inertia));
                  }),
                  (l.setVertices = function (d, S) {
                    (S[0].body === d
                      ? (d.vertices = S)
                      : (d.vertices = f.create(S, d)),
                      (d.axes = x.fromVertices(d.vertices)),
                      (d.area = f.area(d.vertices)),
                      l.setMass(d, d.density * d.area));
                    var b = f.centre(d.vertices);
                    (f.translate(d.vertices, b, -1),
                      l.setInertia(
                        d,
                        l._inertiaScale * f.inertia(d.vertices, d.mass),
                      ),
                      f.translate(d.vertices, d.position),
                      g.update(d.bounds, d.vertices, d.velocity));
                  }),
                  (l.setParts = function (d, S, b) {
                    var M;
                    for (
                      S = S.slice(0),
                        d.parts.length = 0,
                        d.parts.push(d),
                        d.parent = d,
                        M = 0;
                      M < S.length;
                      M++
                    ) {
                      var C = S[M];
                      C !== d && ((C.parent = d), d.parts.push(C));
                    }
                    if (d.parts.length !== 1) {
                      if (((b = typeof b < "u" ? b : !0), b)) {
                        var O = [];
                        for (M = 0; M < S.length; M++)
                          O = O.concat(S[M].vertices);
                        f.clockwiseSort(O);
                        var N = f.hull(O),
                          V = f.centre(N);
                        (l.setVertices(d, N), f.translate(d.vertices, V));
                      }
                      var E = l._totalProperties(d);
                      ((d.area = E.area),
                        (d.parent = d),
                        (d.position.x = E.centre.x),
                        (d.position.y = E.centre.y),
                        (d.positionPrev.x = E.centre.x),
                        (d.positionPrev.y = E.centre.y),
                        l.setMass(d, E.mass),
                        l.setInertia(d, E.inertia),
                        l.setPosition(d, E.centre));
                    }
                  }),
                  (l.setCentre = function (d, S, b) {
                    b
                      ? ((d.positionPrev.x += S.x),
                        (d.positionPrev.y += S.y),
                        (d.position.x += S.x),
                        (d.position.y += S.y))
                      : ((d.positionPrev.x =
                          S.x - (d.position.x - d.positionPrev.x)),
                        (d.positionPrev.y =
                          S.y - (d.position.y - d.positionPrev.y)),
                        (d.position.x = S.x),
                        (d.position.y = S.y));
                  }),
                  (l.setPosition = function (d, S, b) {
                    var M = m.sub(S, d.position);
                    b
                      ? ((d.positionPrev.x = d.position.x),
                        (d.positionPrev.y = d.position.y),
                        (d.velocity.x = M.x),
                        (d.velocity.y = M.y),
                        (d.speed = m.magnitude(M)))
                      : ((d.positionPrev.x += M.x), (d.positionPrev.y += M.y));
                    for (var C = 0; C < d.parts.length; C++) {
                      var O = d.parts[C];
                      ((O.position.x += M.x),
                        (O.position.y += M.y),
                        f.translate(O.vertices, M),
                        g.update(O.bounds, O.vertices, d.velocity));
                    }
                  }),
                  (l.setAngle = function (d, S, b) {
                    var M = S - d.angle;
                    b
                      ? ((d.anglePrev = d.angle),
                        (d.angularVelocity = M),
                        (d.angularSpeed = Math.abs(M)))
                      : (d.anglePrev += M);
                    for (var C = 0; C < d.parts.length; C++) {
                      var O = d.parts[C];
                      ((O.angle += M),
                        f.rotate(O.vertices, M, d.position),
                        x.rotate(O.axes, M),
                        g.update(O.bounds, O.vertices, d.velocity),
                        C > 0 &&
                          m.rotateAbout(O.position, M, d.position, O.position));
                    }
                  }),
                  (l.setVelocity = function (d, S) {
                    var b = d.deltaTime / l._baseDelta;
                    ((d.positionPrev.x = d.position.x - S.x * b),
                      (d.positionPrev.y = d.position.y - S.y * b),
                      (d.velocity.x = (d.position.x - d.positionPrev.x) / b),
                      (d.velocity.y = (d.position.y - d.positionPrev.y) / b),
                      (d.speed = m.magnitude(d.velocity)));
                  }),
                  (l.getVelocity = function (d) {
                    var S = l._baseDelta / d.deltaTime;
                    return {
                      x: (d.position.x - d.positionPrev.x) * S,
                      y: (d.position.y - d.positionPrev.y) * S,
                    };
                  }),
                  (l.getSpeed = function (d) {
                    return m.magnitude(l.getVelocity(d));
                  }),
                  (l.setSpeed = function (d, S) {
                    l.setVelocity(d, m.mult(m.normalise(l.getVelocity(d)), S));
                  }),
                  (l.setAngularVelocity = function (d, S) {
                    var b = d.deltaTime / l._baseDelta;
                    ((d.anglePrev = d.angle - S * b),
                      (d.angularVelocity = (d.angle - d.anglePrev) / b),
                      (d.angularSpeed = Math.abs(d.angularVelocity)));
                  }),
                  (l.getAngularVelocity = function (d) {
                    return (
                      ((d.angle - d.anglePrev) * l._baseDelta) / d.deltaTime
                    );
                  }),
                  (l.getAngularSpeed = function (d) {
                    return Math.abs(l.getAngularVelocity(d));
                  }),
                  (l.setAngularSpeed = function (d, S) {
                    l.setAngularVelocity(
                      d,
                      v.sign(l.getAngularVelocity(d)) * S,
                    );
                  }),
                  (l.translate = function (d, S, b) {
                    l.setPosition(d, m.add(d.position, S), b);
                  }),
                  (l.rotate = function (d, S, b, M) {
                    if (!b) l.setAngle(d, d.angle + S, M);
                    else {
                      var C = Math.cos(S),
                        O = Math.sin(S),
                        N = d.position.x - b.x,
                        V = d.position.y - b.y;
                      (l.setPosition(
                        d,
                        { x: b.x + (N * C - V * O), y: b.y + (N * O + V * C) },
                        M,
                      ),
                        l.setAngle(d, d.angle + S, M));
                    }
                  }),
                  (l.scale = function (d, S, b, M) {
                    var C = 0,
                      O = 0;
                    M = M || d.position;
                    for (var N = 0; N < d.parts.length; N++) {
                      var V = d.parts[N];
                      (f.scale(V.vertices, S, b, M),
                        (V.axes = x.fromVertices(V.vertices)),
                        (V.area = f.area(V.vertices)),
                        l.setMass(V, d.density * V.area),
                        f.translate(V.vertices, {
                          x: -V.position.x,
                          y: -V.position.y,
                        }),
                        l.setInertia(
                          V,
                          l._inertiaScale * f.inertia(V.vertices, V.mass),
                        ),
                        f.translate(V.vertices, {
                          x: V.position.x,
                          y: V.position.y,
                        }),
                        N > 0 && ((C += V.area), (O += V.inertia)),
                        (V.position.x = M.x + (V.position.x - M.x) * S),
                        (V.position.y = M.y + (V.position.y - M.y) * b),
                        g.update(V.bounds, V.vertices, d.velocity));
                    }
                    (d.parts.length > 1 &&
                      ((d.area = C),
                      d.isStatic ||
                        (l.setMass(d, d.density * C), l.setInertia(d, O))),
                      d.circleRadius &&
                        (S === b
                          ? (d.circleRadius *= S)
                          : (d.circleRadius = null)));
                  }),
                  (l.update = function (d, S) {
                    S = (typeof S < "u" ? S : 1e3 / 60) * d.timeScale;
                    var b = S * S,
                      M = l._timeCorrection ? S / (d.deltaTime || S) : 1,
                      C = 1 - d.frictionAir * (S / v._baseDelta),
                      O = (d.position.x - d.positionPrev.x) * M,
                      N = (d.position.y - d.positionPrev.y) * M;
                    ((d.velocity.x = O * C + (d.force.x / d.mass) * b),
                      (d.velocity.y = N * C + (d.force.y / d.mass) * b),
                      (d.positionPrev.x = d.position.x),
                      (d.positionPrev.y = d.position.y),
                      (d.position.x += d.velocity.x),
                      (d.position.y += d.velocity.y),
                      (d.deltaTime = S),
                      (d.angularVelocity =
                        (d.angle - d.anglePrev) * C * M +
                        (d.torque / d.inertia) * b),
                      (d.anglePrev = d.angle),
                      (d.angle += d.angularVelocity));
                    for (var V = 0; V < d.parts.length; V++) {
                      var E = d.parts[V];
                      (f.translate(E.vertices, d.velocity),
                        V > 0 &&
                          ((E.position.x += d.velocity.x),
                          (E.position.y += d.velocity.y)),
                        d.angularVelocity !== 0 &&
                          (f.rotate(E.vertices, d.angularVelocity, d.position),
                          x.rotate(E.axes, d.angularVelocity),
                          V > 0 &&
                            m.rotateAbout(
                              E.position,
                              d.angularVelocity,
                              d.position,
                              E.position,
                            )),
                        g.update(E.bounds, E.vertices, d.velocity));
                    }
                  }),
                  (l.updateVelocities = function (d) {
                    var S = l._baseDelta / d.deltaTime,
                      b = d.velocity;
                    ((b.x = (d.position.x - d.positionPrev.x) * S),
                      (b.y = (d.position.y - d.positionPrev.y) * S),
                      (d.speed = Math.sqrt(b.x * b.x + b.y * b.y)),
                      (d.angularVelocity = (d.angle - d.anglePrev) * S),
                      (d.angularSpeed = Math.abs(d.angularVelocity)));
                  }),
                  (l.applyForce = function (d, S, b) {
                    var M = { x: S.x - d.position.x, y: S.y - d.position.y };
                    ((d.force.x += b.x),
                      (d.force.y += b.y),
                      (d.torque += M.x * b.y - M.y * b.x));
                  }),
                  (l._totalProperties = function (d) {
                    for (
                      var S = {
                          mass: 0,
                          area: 0,
                          inertia: 0,
                          centre: { x: 0, y: 0 },
                        },
                        b = d.parts.length === 1 ? 0 : 1;
                      b < d.parts.length;
                      b++
                    ) {
                      var M = d.parts[b],
                        C = M.mass !== 1 / 0 ? M.mass : 1;
                      ((S.mass += C),
                        (S.area += M.area),
                        (S.inertia += M.inertia),
                        (S.centre = m.add(S.centre, m.mult(M.position, C))));
                    }
                    return ((S.centre = m.div(S.centre, S.mass)), S);
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(0);
              (function () {
                ((l.on = function (m, p, v) {
                  for (var g = p.split(" "), x, y = 0; y < g.length; y++)
                    ((x = g[y]),
                      (m.events = m.events || {}),
                      (m.events[x] = m.events[x] || []),
                      m.events[x].push(v));
                  return v;
                }),
                  (l.off = function (m, p, v) {
                    if (!p) {
                      m.events = {};
                      return;
                    }
                    typeof p == "function" &&
                      ((v = p), (p = f.keys(m.events).join(" ")));
                    for (var g = p.split(" "), x = 0; x < g.length; x++) {
                      var y = m.events[g[x]],
                        d = [];
                      if (v && y)
                        for (var S = 0; S < y.length; S++)
                          y[S] !== v && d.push(y[S]);
                      m.events[g[x]] = d;
                    }
                  }),
                  (l.trigger = function (m, p, v) {
                    var g,
                      x,
                      y,
                      d,
                      S = m.events;
                    if (S && f.keys(S).length > 0) {
                      (v || (v = {}), (g = p.split(" ")));
                      for (var b = 0; b < g.length; b++)
                        if (((x = g[b]), (y = S[x]), y)) {
                          ((d = f.clone(v, !1)), (d.name = x), (d.source = m));
                          for (var M = 0; M < y.length; M++) y[M].apply(m, [d]);
                        }
                    }
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(5),
                m = c(0),
                p = c(1),
                v = c(4);
              (function () {
                ((l.create = function (g) {
                  return m.extend(
                    {
                      id: m.nextId(),
                      type: "composite",
                      parent: null,
                      isModified: !1,
                      bodies: [],
                      constraints: [],
                      composites: [],
                      label: "Composite",
                      plugin: {},
                      cache: {
                        allBodies: null,
                        allConstraints: null,
                        allComposites: null,
                      },
                    },
                    g,
                  );
                }),
                  (l.setModified = function (g, x, y, d) {
                    if (
                      ((g.isModified = x),
                      x &&
                        g.cache &&
                        ((g.cache.allBodies = null),
                        (g.cache.allConstraints = null),
                        (g.cache.allComposites = null)),
                      y && g.parent && l.setModified(g.parent, x, y, d),
                      d)
                    )
                      for (var S = 0; S < g.composites.length; S++) {
                        var b = g.composites[S];
                        l.setModified(b, x, y, d);
                      }
                  }),
                  (l.add = function (g, x) {
                    var y = [].concat(x);
                    f.trigger(g, "beforeAdd", { object: x });
                    for (var d = 0; d < y.length; d++) {
                      var S = y[d];
                      switch (S.type) {
                        case "body":
                          if (S.parent !== S) {
                            m.warn(
                              "Composite.add: skipped adding a compound body part (you must add its parent instead)",
                            );
                            break;
                          }
                          l.addBody(g, S);
                          break;
                        case "constraint":
                          l.addConstraint(g, S);
                          break;
                        case "composite":
                          l.addComposite(g, S);
                          break;
                        case "mouseConstraint":
                          l.addConstraint(g, S.constraint);
                          break;
                      }
                    }
                    return (f.trigger(g, "afterAdd", { object: x }), g);
                  }),
                  (l.remove = function (g, x, y) {
                    var d = [].concat(x);
                    f.trigger(g, "beforeRemove", { object: x });
                    for (var S = 0; S < d.length; S++) {
                      var b = d[S];
                      switch (b.type) {
                        case "body":
                          l.removeBody(g, b, y);
                          break;
                        case "constraint":
                          l.removeConstraint(g, b, y);
                          break;
                        case "composite":
                          l.removeComposite(g, b, y);
                          break;
                        case "mouseConstraint":
                          l.removeConstraint(g, b.constraint);
                          break;
                      }
                    }
                    return (f.trigger(g, "afterRemove", { object: x }), g);
                  }),
                  (l.addComposite = function (g, x) {
                    return (
                      g.composites.push(x),
                      (x.parent = g),
                      l.setModified(g, !0, !0, !1),
                      g
                    );
                  }),
                  (l.removeComposite = function (g, x, y) {
                    var d = m.indexOf(g.composites, x);
                    if (d !== -1) {
                      var S = l.allBodies(x);
                      l.removeCompositeAt(g, d);
                      for (var b = 0; b < S.length; b++) S[b].sleepCounter = 0;
                    }
                    if (y)
                      for (var b = 0; b < g.composites.length; b++)
                        l.removeComposite(g.composites[b], x, !0);
                    return g;
                  }),
                  (l.removeCompositeAt = function (g, x) {
                    return (
                      g.composites.splice(x, 1),
                      l.setModified(g, !0, !0, !1),
                      g
                    );
                  }),
                  (l.addBody = function (g, x) {
                    return (g.bodies.push(x), l.setModified(g, !0, !0, !1), g);
                  }),
                  (l.removeBody = function (g, x, y) {
                    var d = m.indexOf(g.bodies, x);
                    if (
                      (d !== -1 && (l.removeBodyAt(g, d), (x.sleepCounter = 0)),
                      y)
                    )
                      for (var S = 0; S < g.composites.length; S++)
                        l.removeBody(g.composites[S], x, !0);
                    return g;
                  }),
                  (l.removeBodyAt = function (g, x) {
                    return (
                      g.bodies.splice(x, 1),
                      l.setModified(g, !0, !0, !1),
                      g
                    );
                  }),
                  (l.addConstraint = function (g, x) {
                    return (
                      g.constraints.push(x),
                      l.setModified(g, !0, !0, !1),
                      g
                    );
                  }),
                  (l.removeConstraint = function (g, x, y) {
                    var d = m.indexOf(g.constraints, x);
                    if ((d !== -1 && l.removeConstraintAt(g, d), y))
                      for (var S = 0; S < g.composites.length; S++)
                        l.removeConstraint(g.composites[S], x, !0);
                    return g;
                  }),
                  (l.removeConstraintAt = function (g, x) {
                    return (
                      g.constraints.splice(x, 1),
                      l.setModified(g, !0, !0, !1),
                      g
                    );
                  }),
                  (l.clear = function (g, x, y) {
                    if (y)
                      for (var d = 0; d < g.composites.length; d++)
                        l.clear(g.composites[d], x, !0);
                    return (
                      x
                        ? (g.bodies = g.bodies.filter(function (S) {
                            return S.isStatic;
                          }))
                        : (g.bodies.length = 0),
                      (g.constraints.length = 0),
                      (g.composites.length = 0),
                      l.setModified(g, !0, !0, !1),
                      g
                    );
                  }),
                  (l.allBodies = function (g) {
                    if (g.cache && g.cache.allBodies) return g.cache.allBodies;
                    for (
                      var x = [].concat(g.bodies), y = 0;
                      y < g.composites.length;
                      y++
                    )
                      x = x.concat(l.allBodies(g.composites[y]));
                    return (g.cache && (g.cache.allBodies = x), x);
                  }),
                  (l.allConstraints = function (g) {
                    if (g.cache && g.cache.allConstraints)
                      return g.cache.allConstraints;
                    for (
                      var x = [].concat(g.constraints), y = 0;
                      y < g.composites.length;
                      y++
                    )
                      x = x.concat(l.allConstraints(g.composites[y]));
                    return (g.cache && (g.cache.allConstraints = x), x);
                  }),
                  (l.allComposites = function (g) {
                    if (g.cache && g.cache.allComposites)
                      return g.cache.allComposites;
                    for (
                      var x = [].concat(g.composites), y = 0;
                      y < g.composites.length;
                      y++
                    )
                      x = x.concat(l.allComposites(g.composites[y]));
                    return (g.cache && (g.cache.allComposites = x), x);
                  }),
                  (l.get = function (g, x, y) {
                    var d, S;
                    switch (y) {
                      case "body":
                        d = l.allBodies(g);
                        break;
                      case "constraint":
                        d = l.allConstraints(g);
                        break;
                      case "composite":
                        d = l.allComposites(g).concat(g);
                        break;
                    }
                    return d
                      ? ((S = d.filter(function (b) {
                          return b.id.toString() === x.toString();
                        })),
                        S.length === 0 ? null : S[0])
                      : null;
                  }),
                  (l.move = function (g, x, y) {
                    return (l.remove(g, x), l.add(y, x), g);
                  }),
                  (l.rebase = function (g) {
                    for (
                      var x = l
                          .allBodies(g)
                          .concat(l.allConstraints(g))
                          .concat(l.allComposites(g)),
                        y = 0;
                      y < x.length;
                      y++
                    )
                      x[y].id = m.nextId();
                    return g;
                  }),
                  (l.translate = function (g, x, y) {
                    for (
                      var d = y ? l.allBodies(g) : g.bodies, S = 0;
                      S < d.length;
                      S++
                    )
                      v.translate(d[S], x);
                    return g;
                  }),
                  (l.rotate = function (g, x, y, d) {
                    for (
                      var S = Math.cos(x),
                        b = Math.sin(x),
                        M = d ? l.allBodies(g) : g.bodies,
                        C = 0;
                      C < M.length;
                      C++
                    ) {
                      var O = M[C],
                        N = O.position.x - y.x,
                        V = O.position.y - y.y;
                      (v.setPosition(O, {
                        x: y.x + (N * S - V * b),
                        y: y.y + (N * b + V * S),
                      }),
                        v.rotate(O, x));
                    }
                    return g;
                  }),
                  (l.scale = function (g, x, y, d, S) {
                    for (
                      var b = S ? l.allBodies(g) : g.bodies, M = 0;
                      M < b.length;
                      M++
                    ) {
                      var C = b[M],
                        O = C.position.x - d.x,
                        N = C.position.y - d.y;
                      (v.setPosition(C, { x: d.x + O * x, y: d.y + N * y }),
                        v.scale(C, x, y));
                    }
                    return g;
                  }),
                  (l.bounds = function (g) {
                    for (
                      var x = l.allBodies(g), y = [], d = 0;
                      d < x.length;
                      d += 1
                    ) {
                      var S = x[d];
                      y.push(S.bounds.min, S.bounds.max);
                    }
                    return p.create(y);
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(4),
                m = c(5),
                p = c(0);
              (function () {
                ((l._motionWakeThreshold = 0.18),
                  (l._motionSleepThreshold = 0.08),
                  (l._minBias = 0.9),
                  (l.update = function (v, g) {
                    for (
                      var x = g / p._baseDelta,
                        y = l._motionSleepThreshold,
                        d = 0;
                      d < v.length;
                      d++
                    ) {
                      var S = v[d],
                        b = f.getSpeed(S),
                        M = f.getAngularSpeed(S),
                        C = b * b + M * M;
                      if (S.force.x !== 0 || S.force.y !== 0) {
                        l.set(S, !1);
                        continue;
                      }
                      var O = Math.min(S.motion, C),
                        N = Math.max(S.motion, C);
                      ((S.motion = l._minBias * O + (1 - l._minBias) * N),
                        S.sleepThreshold > 0 && S.motion < y
                          ? ((S.sleepCounter += 1),
                            S.sleepCounter >= S.sleepThreshold / x &&
                              l.set(S, !0))
                          : S.sleepCounter > 0 && (S.sleepCounter -= 1));
                    }
                  }),
                  (l.afterCollisions = function (v) {
                    for (
                      var g = l._motionSleepThreshold, x = 0;
                      x < v.length;
                      x++
                    ) {
                      var y = v[x];
                      if (y.isActive) {
                        var d = y.collision,
                          S = d.bodyA.parent,
                          b = d.bodyB.parent;
                        if (
                          !(
                            (S.isSleeping && b.isSleeping) ||
                            S.isStatic ||
                            b.isStatic
                          ) &&
                          (S.isSleeping || b.isSleeping)
                        ) {
                          var M = S.isSleeping && !S.isStatic ? S : b,
                            C = M === S ? b : S;
                          !M.isStatic && C.motion > g && l.set(M, !1);
                        }
                      }
                    }
                  }),
                  (l.set = function (v, g) {
                    var x = v.isSleeping;
                    g
                      ? ((v.isSleeping = !0),
                        (v.sleepCounter = v.sleepThreshold),
                        (v.positionImpulse.x = 0),
                        (v.positionImpulse.y = 0),
                        (v.positionPrev.x = v.position.x),
                        (v.positionPrev.y = v.position.y),
                        (v.anglePrev = v.angle),
                        (v.speed = 0),
                        (v.angularSpeed = 0),
                        (v.motion = 0),
                        x || m.trigger(v, "sleepStart"))
                      : ((v.isSleeping = !1),
                        (v.sleepCounter = 0),
                        x && m.trigger(v, "sleepEnd"));
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(3),
                m = c(9);
              (function () {
                var p = [],
                  v = { overlap: 0, axis: null },
                  g = { overlap: 0, axis: null };
                ((l.create = function (x, y) {
                  return {
                    pair: null,
                    collided: !1,
                    bodyA: x,
                    bodyB: y,
                    parentA: x.parent,
                    parentB: y.parent,
                    depth: 0,
                    normal: { x: 0, y: 0 },
                    tangent: { x: 0, y: 0 },
                    penetration: { x: 0, y: 0 },
                    supports: [null, null],
                    supportCount: 0,
                  };
                }),
                  (l.collides = function (x, y, d) {
                    if (
                      (l._overlapAxes(v, x.vertices, y.vertices, x.axes),
                      v.overlap <= 0 ||
                        (l._overlapAxes(g, y.vertices, x.vertices, y.axes),
                        g.overlap <= 0))
                    )
                      return null;
                    var S = d && d.table[m.id(x, y)],
                      b;
                    (S
                      ? (b = S.collision)
                      : ((b = l.create(x, y)),
                        (b.collided = !0),
                        (b.bodyA = x.id < y.id ? x : y),
                        (b.bodyB = x.id < y.id ? y : x),
                        (b.parentA = b.bodyA.parent),
                        (b.parentB = b.bodyB.parent)),
                      (x = b.bodyA),
                      (y = b.bodyB));
                    var M;
                    v.overlap < g.overlap ? (M = v) : (M = g);
                    var C = b.normal,
                      O = b.tangent,
                      N = b.penetration,
                      V = b.supports,
                      E = M.overlap,
                      D = M.axis,
                      R = D.x,
                      j = D.y,
                      B = y.position.x - x.position.x,
                      z = y.position.y - x.position.y;
                    (R * B + j * z >= 0 && ((R = -R), (j = -j)),
                      (C.x = R),
                      (C.y = j),
                      (O.x = -j),
                      (O.y = R),
                      (N.x = R * E),
                      (N.y = j * E),
                      (b.depth = E));
                    var U = l._findSupports(x, y, C, 1),
                      H = 0;
                    if (
                      (f.contains(x.vertices, U[0]) && (V[H++] = U[0]),
                      f.contains(x.vertices, U[1]) && (V[H++] = U[1]),
                      H < 2)
                    ) {
                      var q = l._findSupports(y, x, C, -1);
                      (f.contains(y.vertices, q[0]) && (V[H++] = q[0]),
                        H < 2 &&
                          f.contains(y.vertices, q[1]) &&
                          (V[H++] = q[1]));
                    }
                    return (
                      H === 0 && (V[H++] = U[0]),
                      (b.supportCount = H),
                      b
                    );
                  }),
                  (l._overlapAxes = function (x, y, d, S) {
                    var b = y.length,
                      M = d.length,
                      C = y[0].x,
                      O = y[0].y,
                      N = d[0].x,
                      V = d[0].y,
                      E = S.length,
                      D = Number.MAX_VALUE,
                      R = 0,
                      j,
                      B,
                      z,
                      U,
                      H,
                      q;
                    for (H = 0; H < E; H++) {
                      var I = S[H],
                        tt = I.x,
                        k = I.y,
                        P = C * tt + O * k,
                        et = N * tt + V * k,
                        it = P,
                        ct = et;
                      for (q = 1; q < b; q += 1)
                        ((U = y[q].x * tt + y[q].y * k),
                          U > it ? (it = U) : U < P && (P = U));
                      for (q = 1; q < M; q += 1)
                        ((U = d[q].x * tt + d[q].y * k),
                          U > ct ? (ct = U) : U < et && (et = U));
                      if (
                        ((B = it - et),
                        (z = ct - P),
                        (j = B < z ? B : z),
                        j < D && ((D = j), (R = H), j <= 0))
                      )
                        break;
                    }
                    ((x.axis = S[R]), (x.overlap = D));
                  }),
                  (l._findSupports = function (x, y, d, S) {
                    var b = y.vertices,
                      M = b.length,
                      C = x.position.x,
                      O = x.position.y,
                      N = d.x * S,
                      V = d.y * S,
                      E = b[0],
                      D = E,
                      R = N * (C - D.x) + V * (O - D.y),
                      j,
                      B,
                      z;
                    for (z = 1; z < M; z += 1)
                      ((D = b[z]),
                        (B = N * (C - D.x) + V * (O - D.y)),
                        B < R && ((R = B), (E = D)));
                    return (
                      (j = b[(M + E.index - 1) % M]),
                      (R = N * (C - j.x) + V * (O - j.y)),
                      (D = b[(E.index + 1) % M]),
                      N * (C - D.x) + V * (O - D.y) < R
                        ? ((p[0] = E), (p[1] = D), p)
                        : ((p[0] = E), (p[1] = j), p)
                    );
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(16);
              (function () {
                ((l.create = function (m, p) {
                  var v = m.bodyA,
                    g = m.bodyB,
                    x = {
                      id: l.id(v, g),
                      bodyA: v,
                      bodyB: g,
                      collision: m,
                      contacts: [f.create(), f.create()],
                      contactCount: 0,
                      separation: 0,
                      isActive: !0,
                      isSensor: v.isSensor || g.isSensor,
                      timeCreated: p,
                      timeUpdated: p,
                      inverseMass: 0,
                      friction: 0,
                      frictionStatic: 0,
                      restitution: 0,
                      slop: 0,
                    };
                  return (l.update(x, m, p), x);
                }),
                  (l.update = function (m, p, v) {
                    var g = p.supports,
                      x = p.supportCount,
                      y = m.contacts,
                      d = p.parentA,
                      S = p.parentB;
                    ((m.isActive = !0),
                      (m.timeUpdated = v),
                      (m.collision = p),
                      (m.separation = p.depth),
                      (m.inverseMass = d.inverseMass + S.inverseMass),
                      (m.friction =
                        d.friction < S.friction ? d.friction : S.friction),
                      (m.frictionStatic =
                        d.frictionStatic > S.frictionStatic
                          ? d.frictionStatic
                          : S.frictionStatic),
                      (m.restitution =
                        d.restitution > S.restitution
                          ? d.restitution
                          : S.restitution),
                      (m.slop = d.slop > S.slop ? d.slop : S.slop),
                      (m.contactCount = x),
                      (p.pair = m));
                    var b = g[0],
                      M = y[0],
                      C = g[1],
                      O = y[1];
                    ((O.vertex === b || M.vertex === C) &&
                      ((y[1] = M), (y[0] = M = O), (O = y[1])),
                      (M.vertex = b),
                      (O.vertex = C));
                  }),
                  (l.setActive = function (m, p, v) {
                    p
                      ? ((m.isActive = !0), (m.timeUpdated = v))
                      : ((m.isActive = !1), (m.contactCount = 0));
                  }),
                  (l.id = function (m, p) {
                    return m.id < p.id
                      ? m.id.toString(36) + ":" + p.id.toString(36)
                      : p.id.toString(36) + ":" + m.id.toString(36);
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(3),
                m = c(2),
                p = c(7),
                v = c(1),
                g = c(11),
                x = c(0);
              (function () {
                ((l._warming = 0.4),
                  (l._torqueDampen = 1),
                  (l._minLength = 1e-6),
                  (l.create = function (y) {
                    var d = y;
                    (d.bodyA && !d.pointA && (d.pointA = { x: 0, y: 0 }),
                      d.bodyB && !d.pointB && (d.pointB = { x: 0, y: 0 }));
                    var S = d.bodyA
                        ? m.add(d.bodyA.position, d.pointA)
                        : d.pointA,
                      b = d.bodyB
                        ? m.add(d.bodyB.position, d.pointB)
                        : d.pointB,
                      M = m.magnitude(m.sub(S, b));
                    ((d.length = typeof d.length < "u" ? d.length : M),
                      (d.id = d.id || x.nextId()),
                      (d.label = d.label || "Constraint"),
                      (d.type = "constraint"),
                      (d.stiffness = d.stiffness || (d.length > 0 ? 1 : 0.7)),
                      (d.damping = d.damping || 0),
                      (d.angularStiffness = d.angularStiffness || 0),
                      (d.angleA = d.bodyA ? d.bodyA.angle : d.angleA),
                      (d.angleB = d.bodyB ? d.bodyB.angle : d.angleB),
                      (d.plugin = {}));
                    var C = {
                      visible: !0,
                      lineWidth: 2,
                      strokeStyle: "#ffffff",
                      type: "line",
                      anchors: !0,
                    };
                    return (
                      d.length === 0 && d.stiffness > 0.1
                        ? ((C.type = "pin"), (C.anchors = !1))
                        : d.stiffness < 0.9 && (C.type = "spring"),
                      (d.render = x.extend(C, d.render)),
                      d
                    );
                  }),
                  (l.preSolveAll = function (y) {
                    for (var d = 0; d < y.length; d += 1) {
                      var S = y[d],
                        b = S.constraintImpulse;
                      S.isStatic ||
                        (b.x === 0 && b.y === 0 && b.angle === 0) ||
                        ((S.position.x += b.x),
                        (S.position.y += b.y),
                        (S.angle += b.angle));
                    }
                  }),
                  (l.solveAll = function (y, d) {
                    for (
                      var S = x.clamp(d / x._baseDelta, 0, 1), b = 0;
                      b < y.length;
                      b += 1
                    ) {
                      var M = y[b],
                        C = !M.bodyA || (M.bodyA && M.bodyA.isStatic),
                        O = !M.bodyB || (M.bodyB && M.bodyB.isStatic);
                      (C || O) && l.solve(y[b], S);
                    }
                    for (b = 0; b < y.length; b += 1)
                      ((M = y[b]),
                        (C = !M.bodyA || (M.bodyA && M.bodyA.isStatic)),
                        (O = !M.bodyB || (M.bodyB && M.bodyB.isStatic)),
                        !C && !O && l.solve(y[b], S));
                  }),
                  (l.solve = function (y, d) {
                    var S = y.bodyA,
                      b = y.bodyB,
                      M = y.pointA,
                      C = y.pointB;
                    if (!(!S && !b)) {
                      (S &&
                        !S.isStatic &&
                        (m.rotate(M, S.angle - y.angleA, M),
                        (y.angleA = S.angle)),
                        b &&
                          !b.isStatic &&
                          (m.rotate(C, b.angle - y.angleB, C),
                          (y.angleB = b.angle)));
                      var O = M,
                        N = C;
                      if (
                        (S && (O = m.add(S.position, M)),
                        b && (N = m.add(b.position, C)),
                        !(!O || !N))
                      ) {
                        var V = m.sub(O, N),
                          E = m.magnitude(V);
                        E < l._minLength && (E = l._minLength);
                        var D = (E - y.length) / E,
                          R = y.stiffness >= 1 || y.length === 0,
                          j = R ? y.stiffness * d : y.stiffness * d * d,
                          B = y.damping * d,
                          z = m.mult(V, D * j),
                          U = (S ? S.inverseMass : 0) + (b ? b.inverseMass : 0),
                          H =
                            (S ? S.inverseInertia : 0) +
                            (b ? b.inverseInertia : 0),
                          q = U + H,
                          I,
                          tt,
                          k,
                          P,
                          et;
                        if (B > 0) {
                          var it = m.create();
                          ((k = m.div(V, E)),
                            (et = m.sub(
                              (b && m.sub(b.position, b.positionPrev)) || it,
                              (S && m.sub(S.position, S.positionPrev)) || it,
                            )),
                            (P = m.dot(k, et)));
                        }
                        (S &&
                          !S.isStatic &&
                          ((tt = S.inverseMass / U),
                          (S.constraintImpulse.x -= z.x * tt),
                          (S.constraintImpulse.y -= z.y * tt),
                          (S.position.x -= z.x * tt),
                          (S.position.y -= z.y * tt),
                          B > 0 &&
                            ((S.positionPrev.x -= B * k.x * P * tt),
                            (S.positionPrev.y -= B * k.y * P * tt)),
                          (I =
                            (m.cross(M, z) / q) *
                            l._torqueDampen *
                            S.inverseInertia *
                            (1 - y.angularStiffness)),
                          (S.constraintImpulse.angle -= I),
                          (S.angle -= I)),
                          b &&
                            !b.isStatic &&
                            ((tt = b.inverseMass / U),
                            (b.constraintImpulse.x += z.x * tt),
                            (b.constraintImpulse.y += z.y * tt),
                            (b.position.x += z.x * tt),
                            (b.position.y += z.y * tt),
                            B > 0 &&
                              ((b.positionPrev.x += B * k.x * P * tt),
                              (b.positionPrev.y += B * k.y * P * tt)),
                            (I =
                              (m.cross(C, z) / q) *
                              l._torqueDampen *
                              b.inverseInertia *
                              (1 - y.angularStiffness)),
                            (b.constraintImpulse.angle += I),
                            (b.angle += I)));
                      }
                    }
                  }),
                  (l.postSolveAll = function (y) {
                    for (var d = 0; d < y.length; d++) {
                      var S = y[d],
                        b = S.constraintImpulse;
                      if (
                        !(
                          S.isStatic ||
                          (b.x === 0 && b.y === 0 && b.angle === 0)
                        )
                      ) {
                        p.set(S, !1);
                        for (var M = 0; M < S.parts.length; M++) {
                          var C = S.parts[M];
                          (f.translate(C.vertices, b),
                            M > 0 &&
                              ((C.position.x += b.x), (C.position.y += b.y)),
                            b.angle !== 0 &&
                              (f.rotate(C.vertices, b.angle, S.position),
                              g.rotate(C.axes, b.angle),
                              M > 0 &&
                                m.rotateAbout(
                                  C.position,
                                  b.angle,
                                  S.position,
                                  C.position,
                                )),
                            v.update(C.bounds, C.vertices, S.velocity));
                        }
                        ((b.angle *= l._warming),
                          (b.x *= l._warming),
                          (b.y *= l._warming));
                      }
                    }
                  }),
                  (l.pointAWorld = function (y) {
                    return {
                      x:
                        (y.bodyA ? y.bodyA.position.x : 0) +
                        (y.pointA ? y.pointA.x : 0),
                      y:
                        (y.bodyA ? y.bodyA.position.y : 0) +
                        (y.pointA ? y.pointA.y : 0),
                    };
                  }),
                  (l.pointBWorld = function (y) {
                    return {
                      x:
                        (y.bodyB ? y.bodyB.position.x : 0) +
                        (y.pointB ? y.pointB.x : 0),
                      y:
                        (y.bodyB ? y.bodyB.position.y : 0) +
                        (y.pointB ? y.pointB.y : 0),
                    };
                  }),
                  (l.currentLength = function (y) {
                    var d =
                        (y.bodyA ? y.bodyA.position.x : 0) +
                        (y.pointA ? y.pointA.x : 0),
                      S =
                        (y.bodyA ? y.bodyA.position.y : 0) +
                        (y.pointA ? y.pointA.y : 0),
                      b =
                        (y.bodyB ? y.bodyB.position.x : 0) +
                        (y.pointB ? y.pointB.x : 0),
                      M =
                        (y.bodyB ? y.bodyB.position.y : 0) +
                        (y.pointB ? y.pointB.y : 0),
                      C = d - b,
                      O = S - M;
                    return Math.sqrt(C * C + O * O);
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(2),
                m = c(0);
              (function () {
                ((l.fromVertices = function (p) {
                  for (var v = {}, g = 0; g < p.length; g++) {
                    var x = (g + 1) % p.length,
                      y = f.normalise({
                        x: p[x].y - p[g].y,
                        y: p[g].x - p[x].x,
                      }),
                      d = y.y === 0 ? 1 / 0 : y.x / y.y;
                    ((d = d.toFixed(3).toString()), (v[d] = y));
                  }
                  return m.values(v);
                }),
                  (l.rotate = function (p, v) {
                    if (v !== 0)
                      for (
                        var g = Math.cos(v), x = Math.sin(v), y = 0;
                        y < p.length;
                        y++
                      ) {
                        var d = p[y],
                          S;
                        ((S = d.x * g - d.y * x),
                          (d.y = d.x * x + d.y * g),
                          (d.x = S));
                      }
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(3),
                m = c(0),
                p = c(4),
                v = c(1),
                g = c(2);
              (function () {
                ((l.rectangle = function (x, y, d, S, b) {
                  b = b || {};
                  var M = {
                    label: "Rectangle Body",
                    position: { x, y },
                    vertices: f.fromPath(
                      "L 0 0 L " + d + " 0 L " + d + " " + S + " L 0 " + S,
                    ),
                  };
                  if (b.chamfer) {
                    var C = b.chamfer;
                    ((M.vertices = f.chamfer(
                      M.vertices,
                      C.radius,
                      C.quality,
                      C.qualityMin,
                      C.qualityMax,
                    )),
                      delete b.chamfer);
                  }
                  return p.create(m.extend({}, M, b));
                }),
                  (l.trapezoid = function (x, y, d, S, b, M) {
                    ((M = M || {}),
                      b >= 1 &&
                        m.warn(
                          "Bodies.trapezoid: slope parameter must be < 1.",
                        ),
                      (b *= 0.5));
                    var C = (1 - b * 2) * d,
                      O = d * b,
                      N = O + C,
                      V = N + O,
                      E;
                    b < 0.5
                      ? (E =
                          "L 0 0 L " +
                          O +
                          " " +
                          -S +
                          " L " +
                          N +
                          " " +
                          -S +
                          " L " +
                          V +
                          " 0")
                      : (E = "L 0 0 L " + N + " " + -S + " L " + V + " 0");
                    var D = {
                      label: "Trapezoid Body",
                      position: { x, y },
                      vertices: f.fromPath(E),
                    };
                    if (M.chamfer) {
                      var R = M.chamfer;
                      ((D.vertices = f.chamfer(
                        D.vertices,
                        R.radius,
                        R.quality,
                        R.qualityMin,
                        R.qualityMax,
                      )),
                        delete M.chamfer);
                    }
                    return p.create(m.extend({}, D, M));
                  }),
                  (l.circle = function (x, y, d, S, b) {
                    S = S || {};
                    var M = { label: "Circle Body", circleRadius: d };
                    b = b || 25;
                    var C = Math.ceil(Math.max(10, Math.min(b, d)));
                    return (
                      C % 2 === 1 && (C += 1),
                      l.polygon(x, y, C, d, m.extend({}, M, S))
                    );
                  }),
                  (l.polygon = function (x, y, d, S, b) {
                    if (((b = b || {}), d < 3)) return l.circle(x, y, S, b);
                    for (
                      var M = (2 * Math.PI) / d, C = "", O = M * 0.5, N = 0;
                      N < d;
                      N += 1
                    ) {
                      var V = O + N * M,
                        E = Math.cos(V) * S,
                        D = Math.sin(V) * S;
                      C += "L " + E.toFixed(3) + " " + D.toFixed(3) + " ";
                    }
                    var R = {
                      label: "Polygon Body",
                      position: { x, y },
                      vertices: f.fromPath(C),
                    };
                    if (b.chamfer) {
                      var j = b.chamfer;
                      ((R.vertices = f.chamfer(
                        R.vertices,
                        j.radius,
                        j.quality,
                        j.qualityMin,
                        j.qualityMax,
                      )),
                        delete b.chamfer);
                    }
                    return p.create(m.extend({}, R, b));
                  }),
                  (l.fromVertices = function (x, y, d, S, b, M, C, O) {
                    var N = m.getDecomp(),
                      V,
                      E,
                      D,
                      R,
                      j,
                      B,
                      z,
                      U,
                      H,
                      q,
                      I;
                    for (
                      V = !!(N && N.quickDecomp),
                        S = S || {},
                        D = [],
                        b = typeof b < "u" ? b : !1,
                        M = typeof M < "u" ? M : 0.01,
                        C = typeof C < "u" ? C : 10,
                        O = typeof O < "u" ? O : 0.01,
                        m.isArray(d[0]) || (d = [d]),
                        q = 0;
                      q < d.length;
                      q += 1
                    )
                      if (
                        ((B = d[q]),
                        (R = f.isConvex(B)),
                        (j = !R),
                        j &&
                          !V &&
                          m.warnOnce(
                            "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices.",
                          ),
                        R || !V)
                      )
                        (R ? (B = f.clockwiseSort(B)) : (B = f.hull(B)),
                          D.push({ position: { x, y }, vertices: B }));
                      else {
                        var tt = B.map(function (lt) {
                          return [lt.x, lt.y];
                        });
                        (N.makeCCW(tt),
                          M !== !1 && N.removeCollinearPoints(tt, M),
                          O !== !1 &&
                            N.removeDuplicatePoints &&
                            N.removeDuplicatePoints(tt, O));
                        var k = N.quickDecomp(tt);
                        for (z = 0; z < k.length; z++) {
                          var P = k[z],
                            et = P.map(function (lt) {
                              return { x: lt[0], y: lt[1] };
                            });
                          (C > 0 && f.area(et) < C) ||
                            D.push({ position: f.centre(et), vertices: et });
                        }
                      }
                    for (z = 0; z < D.length; z++)
                      D[z] = p.create(m.extend(D[z], S));
                    if (b) {
                      var it = 5;
                      for (z = 0; z < D.length; z++) {
                        var ct = D[z];
                        for (U = z + 1; U < D.length; U++) {
                          var G = D[U];
                          if (v.overlaps(ct.bounds, G.bounds)) {
                            var Z = ct.vertices,
                              at = G.vertices;
                            for (H = 0; H < ct.vertices.length; H++)
                              for (I = 0; I < G.vertices.length; I++) {
                                var st = g.magnitudeSquared(
                                    g.sub(Z[(H + 1) % Z.length], at[I]),
                                  ),
                                  ht = g.magnitudeSquared(
                                    g.sub(Z[H], at[(I + 1) % at.length]),
                                  );
                                st < it &&
                                  ht < it &&
                                  ((Z[H].isInternal = !0),
                                  (at[I].isInternal = !0));
                              }
                          }
                        }
                      }
                    }
                    return D.length > 1
                      ? ((E = p.create(m.extend({ parts: D.slice(0) }, S))),
                        p.setPosition(E, { x, y }),
                        E)
                      : D[0];
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(0),
                m = c(8);
              (function () {
                ((l.create = function (p) {
                  var v = { bodies: [], collisions: [], pairs: null };
                  return f.extend(v, p);
                }),
                  (l.setBodies = function (p, v) {
                    p.bodies = v.slice(0);
                  }),
                  (l.clear = function (p) {
                    ((p.bodies = []), (p.collisions = []));
                  }),
                  (l.collisions = function (p) {
                    var v = p.pairs,
                      g = p.bodies,
                      x = g.length,
                      y = l.canCollide,
                      d = m.collides,
                      S = p.collisions,
                      b = 0,
                      M,
                      C;
                    for (g.sort(l._compareBoundsX), M = 0; M < x; M++) {
                      var O = g[M],
                        N = O.bounds,
                        V = O.bounds.max.x,
                        E = O.bounds.max.y,
                        D = O.bounds.min.y,
                        R = O.isStatic || O.isSleeping,
                        j = O.parts.length,
                        B = j === 1;
                      for (C = M + 1; C < x; C++) {
                        var z = g[C],
                          U = z.bounds;
                        if (U.min.x > V) break;
                        if (
                          !(E < U.min.y || D > U.max.y) &&
                          !(R && (z.isStatic || z.isSleeping)) &&
                          y(O.collisionFilter, z.collisionFilter)
                        ) {
                          var H = z.parts.length;
                          if (B && H === 1) {
                            var q = d(O, z, v);
                            q && (S[b++] = q);
                          } else
                            for (
                              var I = j > 1 ? 1 : 0, tt = H > 1 ? 1 : 0, k = I;
                              k < j;
                              k++
                            )
                              for (
                                var P = O.parts[k], N = P.bounds, et = tt;
                                et < H;
                                et++
                              ) {
                                var it = z.parts[et],
                                  U = it.bounds;
                                if (
                                  !(
                                    N.min.x > U.max.x ||
                                    N.max.x < U.min.x ||
                                    N.max.y < U.min.y ||
                                    N.min.y > U.max.y
                                  )
                                ) {
                                  var q = d(P, it, v);
                                  q && (S[b++] = q);
                                }
                              }
                        }
                      }
                    }
                    return (S.length !== b && (S.length = b), S);
                  }),
                  (l.canCollide = function (p, v) {
                    return p.group === v.group && p.group !== 0
                      ? p.group > 0
                      : (p.mask & v.category) !== 0 &&
                          (v.mask & p.category) !== 0;
                  }),
                  (l._compareBoundsX = function (p, v) {
                    return p.bounds.min.x - v.bounds.min.x;
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(0);
              (function () {
                ((l.create = function (m) {
                  var p = {};
                  return (
                    m ||
                      f.log(
                        "Mouse.create: element was undefined, defaulting to document.body",
                        "warn",
                      ),
                    (p.element = m || document.body),
                    (p.absolute = { x: 0, y: 0 }),
                    (p.position = { x: 0, y: 0 }),
                    (p.mousedownPosition = { x: 0, y: 0 }),
                    (p.mouseupPosition = { x: 0, y: 0 }),
                    (p.offset = { x: 0, y: 0 }),
                    (p.scale = { x: 1, y: 1 }),
                    (p.wheelDelta = 0),
                    (p.button = -1),
                    (p.pixelRatio =
                      parseInt(
                        p.element.getAttribute("data-pixel-ratio"),
                        10,
                      ) || 1),
                    (p.sourceEvents = {
                      mousemove: null,
                      mousedown: null,
                      mouseup: null,
                      mousewheel: null,
                    }),
                    (p.mousemove = function (v) {
                      var g = l._getRelativeMousePosition(
                          v,
                          p.element,
                          p.pixelRatio,
                        ),
                        x = v.changedTouches;
                      (x && ((p.button = 0), v.preventDefault()),
                        (p.absolute.x = g.x),
                        (p.absolute.y = g.y),
                        (p.position.x = p.absolute.x * p.scale.x + p.offset.x),
                        (p.position.y = p.absolute.y * p.scale.y + p.offset.y),
                        (p.sourceEvents.mousemove = v));
                    }),
                    (p.mousedown = function (v) {
                      var g = l._getRelativeMousePosition(
                          v,
                          p.element,
                          p.pixelRatio,
                        ),
                        x = v.changedTouches;
                      (x
                        ? ((p.button = 0), v.preventDefault())
                        : (p.button = v.button),
                        (p.absolute.x = g.x),
                        (p.absolute.y = g.y),
                        (p.position.x = p.absolute.x * p.scale.x + p.offset.x),
                        (p.position.y = p.absolute.y * p.scale.y + p.offset.y),
                        (p.mousedownPosition.x = p.position.x),
                        (p.mousedownPosition.y = p.position.y),
                        (p.sourceEvents.mousedown = v));
                    }),
                    (p.mouseup = function (v) {
                      var g = l._getRelativeMousePosition(
                          v,
                          p.element,
                          p.pixelRatio,
                        ),
                        x = v.changedTouches;
                      (x && v.preventDefault(),
                        (p.button = -1),
                        (p.absolute.x = g.x),
                        (p.absolute.y = g.y),
                        (p.position.x = p.absolute.x * p.scale.x + p.offset.x),
                        (p.position.y = p.absolute.y * p.scale.y + p.offset.y),
                        (p.mouseupPosition.x = p.position.x),
                        (p.mouseupPosition.y = p.position.y),
                        (p.sourceEvents.mouseup = v));
                    }),
                    (p.mousewheel = function (v) {
                      ((p.wheelDelta = Math.max(
                        -1,
                        Math.min(1, v.wheelDelta || -v.detail),
                      )),
                        v.preventDefault(),
                        (p.sourceEvents.mousewheel = v));
                    }),
                    l.setElement(p, p.element),
                    p
                  );
                }),
                  (l.setElement = function (m, p) {
                    ((m.element = p),
                      p.addEventListener("mousemove", m.mousemove, {
                        passive: !0,
                      }),
                      p.addEventListener("mousedown", m.mousedown, {
                        passive: !0,
                      }),
                      p.addEventListener("mouseup", m.mouseup, { passive: !0 }),
                      p.addEventListener("wheel", m.mousewheel, {
                        passive: !1,
                      }),
                      p.addEventListener("touchmove", m.mousemove, {
                        passive: !1,
                      }),
                      p.addEventListener("touchstart", m.mousedown, {
                        passive: !1,
                      }),
                      p.addEventListener("touchend", m.mouseup, {
                        passive: !1,
                      }));
                  }),
                  (l.clearSourceEvents = function (m) {
                    ((m.sourceEvents.mousemove = null),
                      (m.sourceEvents.mousedown = null),
                      (m.sourceEvents.mouseup = null),
                      (m.sourceEvents.mousewheel = null),
                      (m.wheelDelta = 0));
                  }),
                  (l.setOffset = function (m, p) {
                    ((m.offset.x = p.x),
                      (m.offset.y = p.y),
                      (m.position.x = m.absolute.x * m.scale.x + m.offset.x),
                      (m.position.y = m.absolute.y * m.scale.y + m.offset.y));
                  }),
                  (l.setScale = function (m, p) {
                    ((m.scale.x = p.x),
                      (m.scale.y = p.y),
                      (m.position.x = m.absolute.x * m.scale.x + m.offset.x),
                      (m.position.y = m.absolute.y * m.scale.y + m.offset.y));
                  }),
                  (l._getRelativeMousePosition = function (m, p, v) {
                    var g = p.getBoundingClientRect(),
                      x =
                        document.documentElement ||
                        document.body.parentNode ||
                        document.body,
                      y =
                        window.pageXOffset !== void 0
                          ? window.pageXOffset
                          : x.scrollLeft,
                      d =
                        window.pageYOffset !== void 0
                          ? window.pageYOffset
                          : x.scrollTop,
                      S = m.changedTouches,
                      b,
                      M;
                    return (
                      S
                        ? ((b = S[0].pageX - g.left - y),
                          (M = S[0].pageY - g.top - d))
                        : ((b = m.pageX - g.left - y),
                          (M = m.pageY - g.top - d)),
                      {
                        x:
                          b /
                          ((p.clientWidth / (p.width || p.clientWidth)) * v),
                        y:
                          M /
                          ((p.clientHeight / (p.height || p.clientHeight)) * v),
                      }
                    );
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(0);
              (function () {
                ((l._registry = {}),
                  (l.register = function (m) {
                    if (
                      (l.isPlugin(m) ||
                        f.warn(
                          "Plugin.register:",
                          l.toString(m),
                          "does not implement all required fields.",
                        ),
                      m.name in l._registry)
                    ) {
                      var p = l._registry[m.name],
                        v = l.versionParse(m.version).number,
                        g = l.versionParse(p.version).number;
                      v > g
                        ? (f.warn(
                            "Plugin.register:",
                            l.toString(p),
                            "was upgraded to",
                            l.toString(m),
                          ),
                          (l._registry[m.name] = m))
                        : v < g
                          ? f.warn(
                              "Plugin.register:",
                              l.toString(p),
                              "can not be downgraded to",
                              l.toString(m),
                            )
                          : m !== p &&
                            f.warn(
                              "Plugin.register:",
                              l.toString(m),
                              "is already registered to different plugin object",
                            );
                    } else l._registry[m.name] = m;
                    return m;
                  }),
                  (l.resolve = function (m) {
                    return l._registry[l.dependencyParse(m).name];
                  }),
                  (l.toString = function (m) {
                    return typeof m == "string"
                      ? m
                      : (m.name || "anonymous") +
                          "@" +
                          (m.version || m.range || "0.0.0");
                  }),
                  (l.isPlugin = function (m) {
                    return m && m.name && m.version && m.install;
                  }),
                  (l.isUsed = function (m, p) {
                    return m.used.indexOf(p) > -1;
                  }),
                  (l.isFor = function (m, p) {
                    var v = m.for && l.dependencyParse(m.for);
                    return (
                      !m.for ||
                      (p.name === v.name &&
                        l.versionSatisfies(p.version, v.range))
                    );
                  }),
                  (l.use = function (m, p) {
                    if (
                      ((m.uses = (m.uses || []).concat(p || [])),
                      m.uses.length === 0)
                    ) {
                      f.warn(
                        "Plugin.use:",
                        l.toString(m),
                        "does not specify any dependencies to install.",
                      );
                      return;
                    }
                    for (
                      var v = l.dependencies(m),
                        g = f.topologicalSort(v),
                        x = [],
                        y = 0;
                      y < g.length;
                      y += 1
                    )
                      if (g[y] !== m.name) {
                        var d = l.resolve(g[y]);
                        if (!d) {
                          x.push("❌ " + g[y]);
                          continue;
                        }
                        l.isUsed(m, d.name) ||
                          (l.isFor(d, m) ||
                            (f.warn(
                              "Plugin.use:",
                              l.toString(d),
                              "is for",
                              d.for,
                              "but installed on",
                              l.toString(m) + ".",
                            ),
                            (d._warned = !0)),
                          d.install
                            ? d.install(m)
                            : (f.warn(
                                "Plugin.use:",
                                l.toString(d),
                                "does not specify an install function.",
                              ),
                              (d._warned = !0)),
                          d._warned
                            ? (x.push("🔶 " + l.toString(d)), delete d._warned)
                            : x.push("✅ " + l.toString(d)),
                          m.used.push(d.name));
                      }
                    x.length > 0 && f.info(x.join("  "));
                  }),
                  (l.dependencies = function (m, p) {
                    var v = l.dependencyParse(m),
                      g = v.name;
                    if (((p = p || {}), !(g in p))) {
                      ((m = l.resolve(m) || m),
                        (p[g] = f.map(m.uses || [], function (y) {
                          l.isPlugin(y) && l.register(y);
                          var d = l.dependencyParse(y),
                            S = l.resolve(y);
                          return (
                            S && !l.versionSatisfies(S.version, d.range)
                              ? (f.warn(
                                  "Plugin.dependencies:",
                                  l.toString(S),
                                  "does not satisfy",
                                  l.toString(d),
                                  "used by",
                                  l.toString(v) + ".",
                                ),
                                (S._warned = !0),
                                (m._warned = !0))
                              : S ||
                                (f.warn(
                                  "Plugin.dependencies:",
                                  l.toString(y),
                                  "used by",
                                  l.toString(v),
                                  "could not be resolved.",
                                ),
                                (m._warned = !0)),
                            d.name
                          );
                        })));
                      for (var x = 0; x < p[g].length; x += 1)
                        l.dependencies(p[g][x], p);
                      return p;
                    }
                  }),
                  (l.dependencyParse = function (m) {
                    if (f.isString(m)) {
                      var p =
                        /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;
                      return (
                        p.test(m) ||
                          f.warn(
                            "Plugin.dependencyParse:",
                            m,
                            "is not a valid dependency string.",
                          ),
                        { name: m.split("@")[0], range: m.split("@")[1] || "*" }
                      );
                    }
                    return { name: m.name, range: m.range || m.version };
                  }),
                  (l.versionParse = function (m) {
                    var p =
                      /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
                    p.test(m) ||
                      f.warn(
                        "Plugin.versionParse:",
                        m,
                        "is not a valid version or range.",
                      );
                    var v = p.exec(m),
                      g = Number(v[4]),
                      x = Number(v[5]),
                      y = Number(v[6]);
                    return {
                      isRange: !!(v[1] || v[2]),
                      version: v[3],
                      range: m,
                      operator: v[1] || v[2] || "",
                      major: g,
                      minor: x,
                      patch: y,
                      parts: [g, x, y],
                      prerelease: v[7],
                      number: g * 1e8 + x * 1e4 + y,
                    };
                  }),
                  (l.versionSatisfies = function (m, p) {
                    p = p || "*";
                    var v = l.versionParse(p),
                      g = l.versionParse(m);
                    if (v.isRange) {
                      if (v.operator === "*" || m === "*") return !0;
                      if (v.operator === ">") return g.number > v.number;
                      if (v.operator === ">=") return g.number >= v.number;
                      if (v.operator === "~")
                        return (
                          g.major === v.major &&
                          g.minor === v.minor &&
                          g.patch >= v.patch
                        );
                      if (v.operator === "^")
                        return v.major > 0
                          ? g.major === v.major && g.number >= v.number
                          : v.minor > 0
                            ? g.minor === v.minor && g.patch >= v.patch
                            : g.patch === v.patch;
                    }
                    return m === p || m === "*";
                  }));
              })();
            },
            function (r, o) {
              var c = {};
              ((r.exports = c),
                (function () {
                  c.create = function (l) {
                    return { vertex: l, normalImpulse: 0, tangentImpulse: 0 };
                  };
                })());
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(7),
                m = c(18),
                p = c(13),
                v = c(19),
                g = c(5),
                x = c(6),
                y = c(10),
                d = c(0),
                S = c(4);
              (function () {
                ((l._deltaMax = 1e3 / 60),
                  (l.create = function (b) {
                    b = b || {};
                    var M = {
                        positionIterations: 6,
                        velocityIterations: 4,
                        constraintIterations: 2,
                        enableSleeping: !1,
                        events: [],
                        plugin: {},
                        gravity: { x: 0, y: 1, scale: 0.001 },
                        timing: {
                          timestamp: 0,
                          timeScale: 1,
                          lastDelta: 0,
                          lastElapsed: 0,
                          lastUpdatesPerFrame: 0,
                        },
                      },
                      C = d.extend(M, b);
                    return (
                      (C.world = b.world || x.create({ label: "World" })),
                      (C.pairs = b.pairs || v.create()),
                      (C.detector = b.detector || p.create()),
                      (C.detector.pairs = C.pairs),
                      (C.grid = { buckets: [] }),
                      (C.world.gravity = C.gravity),
                      (C.broadphase = C.grid),
                      (C.metrics = {}),
                      C
                    );
                  }),
                  (l.update = function (b, M) {
                    var C = d.now(),
                      O = b.world,
                      N = b.detector,
                      V = b.pairs,
                      E = b.timing,
                      D = E.timestamp,
                      R;
                    (M > l._deltaMax &&
                      d.warnOnce(
                        "Matter.Engine.update: delta argument is recommended to be less than or equal to",
                        l._deltaMax.toFixed(3),
                        "ms.",
                      ),
                      (M = typeof M < "u" ? M : d._baseDelta),
                      (M *= E.timeScale),
                      (E.timestamp += M),
                      (E.lastDelta = M));
                    var j = { timestamp: E.timestamp, delta: M };
                    g.trigger(b, "beforeUpdate", j);
                    var B = x.allBodies(O),
                      z = x.allConstraints(O);
                    for (
                      O.isModified &&
                        (p.setBodies(N, B), x.setModified(O, !1, !1, !0)),
                        b.enableSleeping && f.update(B, M),
                        l._bodiesApplyGravity(B, b.gravity),
                        M > 0 && l._bodiesUpdate(B, M),
                        g.trigger(b, "beforeSolve", j),
                        y.preSolveAll(B),
                        R = 0;
                      R < b.constraintIterations;
                      R++
                    )
                      y.solveAll(z, M);
                    y.postSolveAll(B);
                    var U = p.collisions(N);
                    (v.update(V, U, D),
                      b.enableSleeping && f.afterCollisions(V.list),
                      V.collisionStart.length > 0 &&
                        g.trigger(b, "collisionStart", {
                          pairs: V.collisionStart,
                          timestamp: E.timestamp,
                          delta: M,
                        }));
                    var H = d.clamp(20 / b.positionIterations, 0, 1);
                    for (
                      m.preSolvePosition(V.list), R = 0;
                      R < b.positionIterations;
                      R++
                    )
                      m.solvePosition(V.list, M, H);
                    for (
                      m.postSolvePosition(B), y.preSolveAll(B), R = 0;
                      R < b.constraintIterations;
                      R++
                    )
                      y.solveAll(z, M);
                    for (
                      y.postSolveAll(B), m.preSolveVelocity(V.list), R = 0;
                      R < b.velocityIterations;
                      R++
                    )
                      m.solveVelocity(V.list, M);
                    return (
                      l._bodiesUpdateVelocities(B),
                      V.collisionActive.length > 0 &&
                        g.trigger(b, "collisionActive", {
                          pairs: V.collisionActive,
                          timestamp: E.timestamp,
                          delta: M,
                        }),
                      V.collisionEnd.length > 0 &&
                        g.trigger(b, "collisionEnd", {
                          pairs: V.collisionEnd,
                          timestamp: E.timestamp,
                          delta: M,
                        }),
                      l._bodiesClearForces(B),
                      g.trigger(b, "afterUpdate", j),
                      (b.timing.lastElapsed = d.now() - C),
                      b
                    );
                  }),
                  (l.merge = function (b, M) {
                    if ((d.extend(b, M), M.world)) {
                      ((b.world = M.world), l.clear(b));
                      for (
                        var C = x.allBodies(b.world), O = 0;
                        O < C.length;
                        O++
                      ) {
                        var N = C[O];
                        (f.set(N, !1), (N.id = d.nextId()));
                      }
                    }
                  }),
                  (l.clear = function (b) {
                    (v.clear(b.pairs), p.clear(b.detector));
                  }),
                  (l._bodiesClearForces = function (b) {
                    for (var M = b.length, C = 0; C < M; C++) {
                      var O = b[C];
                      ((O.force.x = 0), (O.force.y = 0), (O.torque = 0));
                    }
                  }),
                  (l._bodiesApplyGravity = function (b, M) {
                    var C = typeof M.scale < "u" ? M.scale : 0.001,
                      O = b.length;
                    if (!((M.x === 0 && M.y === 0) || C === 0))
                      for (var N = 0; N < O; N++) {
                        var V = b[N];
                        V.isStatic ||
                          V.isSleeping ||
                          ((V.force.y += V.mass * M.y * C),
                          (V.force.x += V.mass * M.x * C));
                      }
                  }),
                  (l._bodiesUpdate = function (b, M) {
                    for (var C = b.length, O = 0; O < C; O++) {
                      var N = b[O];
                      N.isStatic || N.isSleeping || S.update(N, M);
                    }
                  }),
                  (l._bodiesUpdateVelocities = function (b) {
                    for (var M = b.length, C = 0; C < M; C++)
                      S.updateVelocities(b[C]);
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(3),
                m = c(0),
                p = c(1);
              (function () {
                ((l._restingThresh = 2),
                  (l._restingThreshTangent = Math.sqrt(6)),
                  (l._positionDampen = 0.9),
                  (l._positionWarming = 0.8),
                  (l._frictionNormalMultiplier = 5),
                  (l._frictionMaxStatic = Number.MAX_VALUE),
                  (l.preSolvePosition = function (v) {
                    var g,
                      x,
                      y,
                      d = v.length;
                    for (g = 0; g < d; g++)
                      ((x = v[g]),
                        x.isActive &&
                          ((y = x.contactCount),
                          (x.collision.parentA.totalContacts += y),
                          (x.collision.parentB.totalContacts += y)));
                  }),
                  (l.solvePosition = function (v, g, x) {
                    var y,
                      d,
                      S,
                      b,
                      M,
                      C,
                      O,
                      N,
                      V = l._positionDampen * (x || 1),
                      E = m.clamp(g / m._baseDelta, 0, 1),
                      D = v.length;
                    for (y = 0; y < D; y++)
                      ((d = v[y]),
                        !(!d.isActive || d.isSensor) &&
                          ((S = d.collision),
                          (b = S.parentA),
                          (M = S.parentB),
                          (C = S.normal),
                          (d.separation =
                            S.depth +
                            C.x * (M.positionImpulse.x - b.positionImpulse.x) +
                            C.y *
                              (M.positionImpulse.y - b.positionImpulse.y))));
                    for (y = 0; y < D; y++)
                      ((d = v[y]),
                        !(!d.isActive || d.isSensor) &&
                          ((S = d.collision),
                          (b = S.parentA),
                          (M = S.parentB),
                          (C = S.normal),
                          (N = d.separation - d.slop * E),
                          (b.isStatic || M.isStatic) && (N *= 2),
                          b.isStatic ||
                            b.isSleeping ||
                            ((O = V / b.totalContacts),
                            (b.positionImpulse.x += C.x * N * O),
                            (b.positionImpulse.y += C.y * N * O)),
                          M.isStatic ||
                            M.isSleeping ||
                            ((O = V / M.totalContacts),
                            (M.positionImpulse.x -= C.x * N * O),
                            (M.positionImpulse.y -= C.y * N * O))));
                  }),
                  (l.postSolvePosition = function (v) {
                    for (
                      var g = l._positionWarming,
                        x = v.length,
                        y = f.translate,
                        d = p.update,
                        S = 0;
                      S < x;
                      S++
                    ) {
                      var b = v[S],
                        M = b.positionImpulse,
                        C = M.x,
                        O = M.y,
                        N = b.velocity;
                      if (((b.totalContacts = 0), C !== 0 || O !== 0)) {
                        for (var V = 0; V < b.parts.length; V++) {
                          var E = b.parts[V];
                          (y(E.vertices, M),
                            d(E.bounds, E.vertices, N),
                            (E.position.x += C),
                            (E.position.y += O));
                        }
                        ((b.positionPrev.x += C),
                          (b.positionPrev.y += O),
                          C * N.x + O * N.y < 0
                            ? ((M.x = 0), (M.y = 0))
                            : ((M.x *= g), (M.y *= g)));
                      }
                    }
                  }),
                  (l.preSolveVelocity = function (v) {
                    var g = v.length,
                      x,
                      y;
                    for (x = 0; x < g; x++) {
                      var d = v[x];
                      if (!(!d.isActive || d.isSensor)) {
                        var S = d.contacts,
                          b = d.contactCount,
                          M = d.collision,
                          C = M.parentA,
                          O = M.parentB,
                          N = M.normal,
                          V = M.tangent;
                        for (y = 0; y < b; y++) {
                          var E = S[y],
                            D = E.vertex,
                            R = E.normalImpulse,
                            j = E.tangentImpulse;
                          if (R !== 0 || j !== 0) {
                            var B = N.x * R + V.x * j,
                              z = N.y * R + V.y * j;
                            (C.isStatic ||
                              C.isSleeping ||
                              ((C.positionPrev.x += B * C.inverseMass),
                              (C.positionPrev.y += z * C.inverseMass),
                              (C.anglePrev +=
                                C.inverseInertia *
                                ((D.x - C.position.x) * z -
                                  (D.y - C.position.y) * B))),
                              O.isStatic ||
                                O.isSleeping ||
                                ((O.positionPrev.x -= B * O.inverseMass),
                                (O.positionPrev.y -= z * O.inverseMass),
                                (O.anglePrev -=
                                  O.inverseInertia *
                                  ((D.x - O.position.x) * z -
                                    (D.y - O.position.y) * B))));
                          }
                        }
                      }
                    }
                  }),
                  (l.solveVelocity = function (v, g) {
                    var x = g / m._baseDelta,
                      y = x * x,
                      d = y * x,
                      S = -l._restingThresh * x,
                      b = l._restingThreshTangent,
                      M = l._frictionNormalMultiplier * x,
                      C = l._frictionMaxStatic,
                      O = v.length,
                      N,
                      V,
                      E,
                      D;
                    for (E = 0; E < O; E++) {
                      var R = v[E];
                      if (!(!R.isActive || R.isSensor)) {
                        var j = R.collision,
                          B = j.parentA,
                          z = j.parentB,
                          U = j.normal.x,
                          H = j.normal.y,
                          q = j.tangent.x,
                          I = j.tangent.y,
                          tt = R.inverseMass,
                          k = R.friction * R.frictionStatic * M,
                          P = R.contacts,
                          et = R.contactCount,
                          it = 1 / et,
                          ct = B.position.x - B.positionPrev.x,
                          G = B.position.y - B.positionPrev.y,
                          Z = B.angle - B.anglePrev,
                          at = z.position.x - z.positionPrev.x,
                          st = z.position.y - z.positionPrev.y,
                          ht = z.angle - z.anglePrev;
                        for (D = 0; D < et; D++) {
                          var lt = P[D],
                            pt = lt.vertex,
                            Mt = pt.x - B.position.x,
                            Bt = pt.y - B.position.y,
                            ue = pt.x - z.position.x,
                            de = pt.y - z.position.y,
                            te = ct - Bt * Z,
                            Ps = G + Mt * Z,
                            un = at - de * ht,
                            zi = st + ue * ht,
                            Ra = te - un,
                            _s = Ps - zi,
                            Oa = U * Ra + H * _s,
                            Ee = q * Ra + I * _s,
                            za = R.separation + Oa,
                            sa = Math.min(za, 1);
                          sa = za < 0 ? 0 : sa;
                          var Fs = sa * k;
                          Ee < -Fs || Ee > Fs
                            ? ((V = Ee > 0 ? Ee : -Ee),
                              (N = R.friction * (Ee > 0 ? 1 : -1) * d),
                              N < -V ? (N = -V) : N > V && (N = V))
                            : ((N = Ee), (V = C));
                          var Ks = Mt * H - Bt * U,
                            ce = ue * H - de * U,
                            Qs =
                              it /
                              (tt +
                                B.inverseInertia * Ks * Ks +
                                z.inverseInertia * ce * ce),
                            la = (1 + R.restitution) * Oa * Qs;
                          if (((N *= Qs), Oa < S)) lt.normalImpulse = 0;
                          else {
                            var Zs = lt.normalImpulse;
                            ((lt.normalImpulse += la),
                              lt.normalImpulse > 0 && (lt.normalImpulse = 0),
                              (la = lt.normalImpulse - Zs));
                          }
                          if (Ee < -b || Ee > b) lt.tangentImpulse = 0;
                          else {
                            var Ba = lt.tangentImpulse;
                            ((lt.tangentImpulse += N),
                              lt.tangentImpulse < -V &&
                                (lt.tangentImpulse = -V),
                              lt.tangentImpulse > V && (lt.tangentImpulse = V),
                              (N = lt.tangentImpulse - Ba));
                          }
                          var Va = U * la + q * N,
                            ra = H * la + I * N;
                          (B.isStatic ||
                            B.isSleeping ||
                            ((B.positionPrev.x += Va * B.inverseMass),
                            (B.positionPrev.y += ra * B.inverseMass),
                            (B.anglePrev +=
                              (Mt * ra - Bt * Va) * B.inverseInertia)),
                            z.isStatic ||
                              z.isSleeping ||
                              ((z.positionPrev.x -= Va * z.inverseMass),
                              (z.positionPrev.y -= ra * z.inverseMass),
                              (z.anglePrev -=
                                (ue * ra - de * Va) * z.inverseInertia)));
                        }
                      }
                    }
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(9),
                m = c(0);
              (function () {
                ((l.create = function (p) {
                  return m.extend(
                    {
                      table: {},
                      list: [],
                      collisionStart: [],
                      collisionActive: [],
                      collisionEnd: [],
                    },
                    p,
                  );
                }),
                  (l.update = function (p, v, g) {
                    var x = f.update,
                      y = f.create,
                      d = f.setActive,
                      S = p.table,
                      b = p.list,
                      M = b.length,
                      C = M,
                      O = p.collisionStart,
                      N = p.collisionEnd,
                      V = p.collisionActive,
                      E = v.length,
                      D = 0,
                      R = 0,
                      j = 0,
                      B,
                      z,
                      U;
                    for (U = 0; U < E; U++)
                      ((B = v[U]),
                        (z = B.pair),
                        z
                          ? (z.isActive && (V[j++] = z), x(z, B, g))
                          : ((z = y(B, g)),
                            (S[z.id] = z),
                            (O[D++] = z),
                            (b[C++] = z)));
                    for (C = 0, M = b.length, U = 0; U < M; U++)
                      ((z = b[U]),
                        z.timeUpdated >= g
                          ? (b[C++] = z)
                          : (d(z, !1, g),
                            z.collision.bodyA.sleepCounter > 0 &&
                            z.collision.bodyB.sleepCounter > 0
                              ? (b[C++] = z)
                              : ((N[R++] = z), delete S[z.id])));
                    (b.length !== C && (b.length = C),
                      O.length !== D && (O.length = D),
                      N.length !== R && (N.length = R),
                      V.length !== j && (V.length = j));
                  }),
                  (l.clear = function (p) {
                    return (
                      (p.table = {}),
                      (p.list.length = 0),
                      (p.collisionStart.length = 0),
                      (p.collisionActive.length = 0),
                      (p.collisionEnd.length = 0),
                      p
                    );
                  }));
              })();
            },
            function (r, o, c) {
              var l = (r.exports = c(21));
              ((l.Axes = c(11)),
                (l.Bodies = c(12)),
                (l.Body = c(4)),
                (l.Bounds = c(1)),
                (l.Collision = c(8)),
                (l.Common = c(0)),
                (l.Composite = c(6)),
                (l.Composites = c(22)),
                (l.Constraint = c(10)),
                (l.Contact = c(16)),
                (l.Detector = c(13)),
                (l.Engine = c(17)),
                (l.Events = c(5)),
                (l.Grid = c(23)),
                (l.Mouse = c(14)),
                (l.MouseConstraint = c(24)),
                (l.Pair = c(9)),
                (l.Pairs = c(19)),
                (l.Plugin = c(15)),
                (l.Query = c(25)),
                (l.Render = c(26)),
                (l.Resolver = c(18)),
                (l.Runner = c(27)),
                (l.SAT = c(28)),
                (l.Sleeping = c(7)),
                (l.Svg = c(29)),
                (l.Vector = c(2)),
                (l.Vertices = c(3)),
                (l.World = c(30)),
                (l.Engine.run = l.Runner.run),
                l.Common.deprecated(
                  l.Engine,
                  "run",
                  "Engine.run ➤ use Matter.Runner.run(engine) instead",
                ));
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(15),
                m = c(0);
              (function () {
                ((l.name = "matter-js"),
                  (l.version = "0.20.0"),
                  (l.uses = []),
                  (l.used = []),
                  (l.use = function () {
                    f.use(l, Array.prototype.slice.call(arguments));
                  }),
                  (l.before = function (p, v) {
                    return (
                      (p = p.replace(/^Matter./, "")),
                      m.chainPathBefore(l, p, v)
                    );
                  }),
                  (l.after = function (p, v) {
                    return (
                      (p = p.replace(/^Matter./, "")),
                      m.chainPathAfter(l, p, v)
                    );
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(6),
                m = c(10),
                p = c(0),
                v = c(4),
                g = c(12),
                x = p.deprecated;
              (function () {
                ((l.stack = function (y, d, S, b, M, C, O) {
                  for (
                    var N = f.create({ label: "Stack" }),
                      V = y,
                      E = d,
                      D,
                      R = 0,
                      j = 0;
                    j < b;
                    j++
                  ) {
                    for (var B = 0, z = 0; z < S; z++) {
                      var U = O(V, E, z, j, D, R);
                      if (U) {
                        var H = U.bounds.max.y - U.bounds.min.y,
                          q = U.bounds.max.x - U.bounds.min.x;
                        (H > B && (B = H),
                          v.translate(U, { x: q * 0.5, y: H * 0.5 }),
                          (V = U.bounds.max.x + M),
                          f.addBody(N, U),
                          (D = U),
                          (R += 1));
                      } else V += M;
                    }
                    ((E += B + C), (V = y));
                  }
                  return N;
                }),
                  (l.chain = function (y, d, S, b, M, C) {
                    for (var O = y.bodies, N = 1; N < O.length; N++) {
                      var V = O[N - 1],
                        E = O[N],
                        D = V.bounds.max.y - V.bounds.min.y,
                        R = V.bounds.max.x - V.bounds.min.x,
                        j = E.bounds.max.y - E.bounds.min.y,
                        B = E.bounds.max.x - E.bounds.min.x,
                        z = {
                          bodyA: V,
                          pointA: { x: R * d, y: D * S },
                          bodyB: E,
                          pointB: { x: B * b, y: j * M },
                        },
                        U = p.extend(z, C);
                      f.addConstraint(y, m.create(U));
                    }
                    return ((y.label += " Chain"), y);
                  }),
                  (l.mesh = function (y, d, S, b, M) {
                    var C = y.bodies,
                      O,
                      N,
                      V,
                      E,
                      D;
                    for (O = 0; O < S; O++) {
                      for (N = 1; N < d; N++)
                        ((V = C[N - 1 + O * d]),
                          (E = C[N + O * d]),
                          f.addConstraint(
                            y,
                            m.create(p.extend({ bodyA: V, bodyB: E }, M)),
                          ));
                      if (O > 0)
                        for (N = 0; N < d; N++)
                          ((V = C[N + (O - 1) * d]),
                            (E = C[N + O * d]),
                            f.addConstraint(
                              y,
                              m.create(p.extend({ bodyA: V, bodyB: E }, M)),
                            ),
                            b &&
                              N > 0 &&
                              ((D = C[N - 1 + (O - 1) * d]),
                              f.addConstraint(
                                y,
                                m.create(p.extend({ bodyA: D, bodyB: E }, M)),
                              )),
                            b &&
                              N < d - 1 &&
                              ((D = C[N + 1 + (O - 1) * d]),
                              f.addConstraint(
                                y,
                                m.create(p.extend({ bodyA: D, bodyB: E }, M)),
                              )));
                    }
                    return ((y.label += " Mesh"), y);
                  }),
                  (l.pyramid = function (y, d, S, b, M, C, O) {
                    return l.stack(
                      y,
                      d,
                      S,
                      b,
                      M,
                      C,
                      function (N, V, E, D, R, j) {
                        var B = Math.min(b, Math.ceil(S / 2)),
                          z = R ? R.bounds.max.x - R.bounds.min.x : 0;
                        if (!(D > B)) {
                          D = B - D;
                          var U = D,
                            H = S - 1 - D;
                          if (!(E < U || E > H)) {
                            j === 1 &&
                              v.translate(R, {
                                x: (E + (S % 2 === 1 ? 1 : -1)) * z,
                                y: 0,
                              });
                            var q = R ? E * z : 0;
                            return O(y + q + E * M, V, E, D, R, j);
                          }
                        }
                      },
                    );
                  }),
                  (l.newtonsCradle = function (y, d, S, b, M) {
                    for (
                      var C = f.create({ label: "Newtons Cradle" }), O = 0;
                      O < S;
                      O++
                    ) {
                      var N = 1.9,
                        V = g.circle(y + O * (b * N), d + M, b, {
                          inertia: 1 / 0,
                          restitution: 1,
                          friction: 0,
                          frictionAir: 1e-4,
                          slop: 1,
                        }),
                        E = m.create({
                          pointA: { x: y + O * (b * N), y: d },
                          bodyB: V,
                        });
                      (f.addBody(C, V), f.addConstraint(C, E));
                    }
                    return C;
                  }),
                  x(
                    l,
                    "newtonsCradle",
                    "Composites.newtonsCradle ➤ moved to newtonsCradle example",
                  ),
                  (l.car = function (y, d, S, b, M) {
                    var C = v.nextGroup(!0),
                      O = 20,
                      N = -S * 0.5 + O,
                      V = S * 0.5 - O,
                      E = 0,
                      D = f.create({ label: "Car" }),
                      R = g.rectangle(y, d, S, b, {
                        collisionFilter: { group: C },
                        chamfer: { radius: b * 0.5 },
                        density: 2e-4,
                      }),
                      j = g.circle(y + N, d + E, M, {
                        collisionFilter: { group: C },
                        friction: 0.8,
                      }),
                      B = g.circle(y + V, d + E, M, {
                        collisionFilter: { group: C },
                        friction: 0.8,
                      }),
                      z = m.create({
                        bodyB: R,
                        pointB: { x: N, y: E },
                        bodyA: j,
                        stiffness: 1,
                        length: 0,
                      }),
                      U = m.create({
                        bodyB: R,
                        pointB: { x: V, y: E },
                        bodyA: B,
                        stiffness: 1,
                        length: 0,
                      });
                    return (
                      f.addBody(D, R),
                      f.addBody(D, j),
                      f.addBody(D, B),
                      f.addConstraint(D, z),
                      f.addConstraint(D, U),
                      D
                    );
                  }),
                  x(l, "car", "Composites.car ➤ moved to car example"),
                  (l.softBody = function (y, d, S, b, M, C, O, N, V, E) {
                    ((V = p.extend({ inertia: 1 / 0 }, V)),
                      (E = p.extend(
                        {
                          stiffness: 0.2,
                          render: { type: "line", anchors: !1 },
                        },
                        E,
                      )));
                    var D = l.stack(y, d, S, b, M, C, function (R, j) {
                      return g.circle(R, j, N, V);
                    });
                    return (l.mesh(D, S, b, O, E), (D.label = "Soft Body"), D);
                  }),
                  x(
                    l,
                    "softBody",
                    "Composites.softBody ➤ moved to softBody and cloth examples",
                  ));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(9),
                m = c(0),
                p = m.deprecated;
              (function () {
                ((l.create = function (v) {
                  var g = {
                    buckets: {},
                    pairs: {},
                    pairsList: [],
                    bucketWidth: 48,
                    bucketHeight: 48,
                  };
                  return m.extend(g, v);
                }),
                  (l.update = function (v, g, x, y) {
                    var d,
                      S,
                      b,
                      M = x.world,
                      C = v.buckets,
                      O,
                      N,
                      V = !1;
                    for (d = 0; d < g.length; d++) {
                      var E = g[d];
                      if (
                        !(E.isSleeping && !y) &&
                        !(
                          M.bounds &&
                          (E.bounds.max.x < M.bounds.min.x ||
                            E.bounds.min.x > M.bounds.max.x ||
                            E.bounds.max.y < M.bounds.min.y ||
                            E.bounds.min.y > M.bounds.max.y)
                        )
                      ) {
                        var D = l._getRegion(v, E);
                        if (!E.region || D.id !== E.region.id || y) {
                          (!E.region || y) && (E.region = D);
                          var R = l._regionUnion(D, E.region);
                          for (S = R.startCol; S <= R.endCol; S++)
                            for (b = R.startRow; b <= R.endRow; b++) {
                              ((N = l._getBucketId(S, b)), (O = C[N]));
                              var j =
                                  S >= D.startCol &&
                                  S <= D.endCol &&
                                  b >= D.startRow &&
                                  b <= D.endRow,
                                B =
                                  S >= E.region.startCol &&
                                  S <= E.region.endCol &&
                                  b >= E.region.startRow &&
                                  b <= E.region.endRow;
                              (!j &&
                                B &&
                                B &&
                                O &&
                                l._bucketRemoveBody(v, O, E),
                                (E.region === D || (j && !B) || y) &&
                                  (O || (O = l._createBucket(C, N)),
                                  l._bucketAddBody(v, O, E)));
                            }
                          ((E.region = D), (V = !0));
                        }
                      }
                    }
                    V && (v.pairsList = l._createActivePairsList(v));
                  }),
                  p(l, "update", "Grid.update ➤ replaced by Matter.Detector"),
                  (l.clear = function (v) {
                    ((v.buckets = {}), (v.pairs = {}), (v.pairsList = []));
                  }),
                  p(l, "clear", "Grid.clear ➤ replaced by Matter.Detector"),
                  (l._regionUnion = function (v, g) {
                    var x = Math.min(v.startCol, g.startCol),
                      y = Math.max(v.endCol, g.endCol),
                      d = Math.min(v.startRow, g.startRow),
                      S = Math.max(v.endRow, g.endRow);
                    return l._createRegion(x, y, d, S);
                  }),
                  (l._getRegion = function (v, g) {
                    var x = g.bounds,
                      y = Math.floor(x.min.x / v.bucketWidth),
                      d = Math.floor(x.max.x / v.bucketWidth),
                      S = Math.floor(x.min.y / v.bucketHeight),
                      b = Math.floor(x.max.y / v.bucketHeight);
                    return l._createRegion(y, d, S, b);
                  }),
                  (l._createRegion = function (v, g, x, y) {
                    return {
                      id: v + "," + g + "," + x + "," + y,
                      startCol: v,
                      endCol: g,
                      startRow: x,
                      endRow: y,
                    };
                  }),
                  (l._getBucketId = function (v, g) {
                    return "C" + v + "R" + g;
                  }),
                  (l._createBucket = function (v, g) {
                    var x = (v[g] = []);
                    return x;
                  }),
                  (l._bucketAddBody = function (v, g, x) {
                    var y = v.pairs,
                      d = f.id,
                      S = g.length,
                      b;
                    for (b = 0; b < S; b++) {
                      var M = g[b];
                      if (!(x.id === M.id || (x.isStatic && M.isStatic))) {
                        var C = d(x, M),
                          O = y[C];
                        O ? (O[2] += 1) : (y[C] = [x, M, 1]);
                      }
                    }
                    g.push(x);
                  }),
                  (l._bucketRemoveBody = function (v, g, x) {
                    var y = v.pairs,
                      d = f.id,
                      S;
                    g.splice(m.indexOf(g, x), 1);
                    var b = g.length;
                    for (S = 0; S < b; S++) {
                      var M = y[d(x, g[S])];
                      M && (M[2] -= 1);
                    }
                  }),
                  (l._createActivePairsList = function (v) {
                    var g,
                      x = v.pairs,
                      y = m.keys(x),
                      d = y.length,
                      S = [],
                      b;
                    for (b = 0; b < d; b++)
                      ((g = x[y[b]]), g[2] > 0 ? S.push(g) : delete x[y[b]]);
                    return S;
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(3),
                m = c(7),
                p = c(14),
                v = c(5),
                g = c(13),
                x = c(10),
                y = c(6),
                d = c(0),
                S = c(1);
              (function () {
                ((l.create = function (b, M) {
                  var C = (b ? b.mouse : null) || (M ? M.mouse : null);
                  C ||
                    (b && b.render && b.render.canvas
                      ? (C = p.create(b.render.canvas))
                      : M && M.element
                        ? (C = p.create(M.element))
                        : ((C = p.create()),
                          d.warn(
                            "MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected",
                          )));
                  var O = x.create({
                      label: "Mouse Constraint",
                      pointA: C.position,
                      pointB: { x: 0, y: 0 },
                      length: 0.01,
                      stiffness: 0.1,
                      angularStiffness: 1,
                      render: { strokeStyle: "#90EE90", lineWidth: 3 },
                    }),
                    N = {
                      type: "mouseConstraint",
                      mouse: C,
                      element: null,
                      body: null,
                      constraint: O,
                      collisionFilter: {
                        category: 1,
                        mask: 4294967295,
                        group: 0,
                      },
                    },
                    V = d.extend(N, M);
                  return (
                    v.on(b, "beforeUpdate", function () {
                      var E = y.allBodies(b.world);
                      (l.update(V, E), l._triggerEvents(V));
                    }),
                    V
                  );
                }),
                  (l.update = function (b, M) {
                    var C = b.mouse,
                      O = b.constraint,
                      N = b.body;
                    if (C.button === 0) {
                      if (O.bodyB)
                        (m.set(O.bodyB, !1), (O.pointA = C.position));
                      else
                        for (var V = 0; V < M.length; V++)
                          if (
                            ((N = M[V]),
                            S.contains(N.bounds, C.position) &&
                              g.canCollide(
                                N.collisionFilter,
                                b.collisionFilter,
                              ))
                          )
                            for (
                              var E = N.parts.length > 1 ? 1 : 0;
                              E < N.parts.length;
                              E++
                            ) {
                              var D = N.parts[E];
                              if (f.contains(D.vertices, C.position)) {
                                ((O.pointA = C.position),
                                  (O.bodyB = b.body = N),
                                  (O.pointB = {
                                    x: C.position.x - N.position.x,
                                    y: C.position.y - N.position.y,
                                  }),
                                  (O.angleB = N.angle),
                                  m.set(N, !1),
                                  v.trigger(b, "startdrag", {
                                    mouse: C,
                                    body: N,
                                  }));
                                break;
                              }
                            }
                    } else
                      ((O.bodyB = b.body = null),
                        (O.pointB = null),
                        N && v.trigger(b, "enddrag", { mouse: C, body: N }));
                  }),
                  (l._triggerEvents = function (b) {
                    var M = b.mouse,
                      C = M.sourceEvents;
                    (C.mousemove && v.trigger(b, "mousemove", { mouse: M }),
                      C.mousedown && v.trigger(b, "mousedown", { mouse: M }),
                      C.mouseup && v.trigger(b, "mouseup", { mouse: M }),
                      p.clearSourceEvents(M));
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(2),
                m = c(8),
                p = c(1),
                v = c(12),
                g = c(3);
              (function () {
                ((l.collides = function (x, y) {
                  for (
                    var d = [],
                      S = y.length,
                      b = x.bounds,
                      M = m.collides,
                      C = p.overlaps,
                      O = 0;
                    O < S;
                    O++
                  ) {
                    var N = y[O],
                      V = N.parts.length,
                      E = V === 1 ? 0 : 1;
                    if (C(N.bounds, b))
                      for (var D = E; D < V; D++) {
                        var R = N.parts[D];
                        if (C(R.bounds, b)) {
                          var j = M(R, x);
                          if (j) {
                            d.push(j);
                            break;
                          }
                        }
                      }
                  }
                  return d;
                }),
                  (l.ray = function (x, y, d, S) {
                    S = S || 1e-100;
                    for (
                      var b = f.angle(y, d),
                        M = f.magnitude(f.sub(y, d)),
                        C = (d.x + y.x) * 0.5,
                        O = (d.y + y.y) * 0.5,
                        N = v.rectangle(C, O, M, S, { angle: b }),
                        V = l.collides(N, x),
                        E = 0;
                      E < V.length;
                      E += 1
                    ) {
                      var D = V[E];
                      D.body = D.bodyB = D.bodyA;
                    }
                    return V;
                  }),
                  (l.region = function (x, y, d) {
                    for (var S = [], b = 0; b < x.length; b++) {
                      var M = x[b],
                        C = p.overlaps(M.bounds, y);
                      ((C && !d) || (!C && d)) && S.push(M);
                    }
                    return S;
                  }),
                  (l.point = function (x, y) {
                    for (var d = [], S = 0; S < x.length; S++) {
                      var b = x[S];
                      if (p.contains(b.bounds, y))
                        for (
                          var M = b.parts.length === 1 ? 0 : 1;
                          M < b.parts.length;
                          M++
                        ) {
                          var C = b.parts[M];
                          if (
                            p.contains(C.bounds, y) &&
                            g.contains(C.vertices, y)
                          ) {
                            d.push(b);
                            break;
                          }
                        }
                    }
                    return d;
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(4),
                m = c(0),
                p = c(6),
                v = c(1),
                g = c(5),
                x = c(2),
                y = c(14);
              (function () {
                var d, S;
                (typeof window < "u" &&
                  ((d =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (E) {
                      window.setTimeout(function () {
                        E(m.now());
                      }, 1e3 / 60);
                    }),
                  (S =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.msCancelAnimationFrame)),
                  (l._goodFps = 30),
                  (l._goodDelta = 1e3 / 60),
                  (l.create = function (E) {
                    var D = {
                        engine: null,
                        element: null,
                        canvas: null,
                        mouse: null,
                        frameRequestId: null,
                        timing: {
                          historySize: 60,
                          delta: 0,
                          deltaHistory: [],
                          lastTime: 0,
                          lastTimestamp: 0,
                          lastElapsed: 0,
                          timestampElapsed: 0,
                          timestampElapsedHistory: [],
                          engineDeltaHistory: [],
                          engineElapsedHistory: [],
                          engineUpdatesHistory: [],
                          elapsedHistory: [],
                        },
                        options: {
                          width: 800,
                          height: 600,
                          pixelRatio: 1,
                          background: "#14151f",
                          wireframeBackground: "#14151f",
                          wireframeStrokeStyle: "#bbb",
                          hasBounds: !!E.bounds,
                          enabled: !0,
                          wireframes: !0,
                          showSleeping: !0,
                          showDebug: !1,
                          showStats: !1,
                          showPerformance: !1,
                          showBounds: !1,
                          showVelocity: !1,
                          showCollisions: !1,
                          showSeparations: !1,
                          showAxes: !1,
                          showPositions: !1,
                          showAngleIndicator: !1,
                          showIds: !1,
                          showVertexNumbers: !1,
                          showConvexHulls: !1,
                          showInternalEdges: !1,
                          showMousePosition: !1,
                        },
                      },
                      R = m.extend(D, E);
                    return (
                      R.canvas &&
                        ((R.canvas.width = R.options.width || R.canvas.width),
                        (R.canvas.height =
                          R.options.height || R.canvas.height)),
                      (R.mouse = E.mouse),
                      (R.engine = E.engine),
                      (R.canvas =
                        R.canvas || C(R.options.width, R.options.height)),
                      (R.context = R.canvas.getContext("2d")),
                      (R.textures = {}),
                      (R.bounds = R.bounds || {
                        min: { x: 0, y: 0 },
                        max: { x: R.canvas.width, y: R.canvas.height },
                      }),
                      (R.controller = l),
                      (R.options.showBroadphase = !1),
                      R.options.pixelRatio !== 1 &&
                        l.setPixelRatio(R, R.options.pixelRatio),
                      m.isElement(R.element) && R.element.appendChild(R.canvas),
                      R
                    );
                  }),
                  (l.run = function (E) {
                    (function D(R) {
                      ((E.frameRequestId = d(D)),
                        b(E, R),
                        l.world(E, R),
                        E.context.setTransform(
                          E.options.pixelRatio,
                          0,
                          0,
                          E.options.pixelRatio,
                          0,
                          0,
                        ),
                        (E.options.showStats || E.options.showDebug) &&
                          l.stats(E, E.context, R),
                        (E.options.showPerformance || E.options.showDebug) &&
                          l.performance(E, E.context, R),
                        E.context.setTransform(1, 0, 0, 1, 0, 0));
                    })();
                  }),
                  (l.stop = function (E) {
                    S(E.frameRequestId);
                  }),
                  (l.setPixelRatio = function (E, D) {
                    var R = E.options,
                      j = E.canvas;
                    (D === "auto" && (D = O(j)),
                      (R.pixelRatio = D),
                      j.setAttribute("data-pixel-ratio", D),
                      (j.width = R.width * D),
                      (j.height = R.height * D),
                      (j.style.width = R.width + "px"),
                      (j.style.height = R.height + "px"));
                  }),
                  (l.setSize = function (E, D, R) {
                    ((E.options.width = D),
                      (E.options.height = R),
                      (E.bounds.max.x = E.bounds.min.x + D),
                      (E.bounds.max.y = E.bounds.min.y + R),
                      E.options.pixelRatio !== 1
                        ? l.setPixelRatio(E, E.options.pixelRatio)
                        : ((E.canvas.width = D), (E.canvas.height = R)));
                  }),
                  (l.lookAt = function (E, D, R, j) {
                    ((j = typeof j < "u" ? j : !0),
                      (D = m.isArray(D) ? D : [D]),
                      (R = R || { x: 0, y: 0 }));
                    for (
                      var B = {
                          min: { x: 1 / 0, y: 1 / 0 },
                          max: { x: -1 / 0, y: -1 / 0 },
                        },
                        z = 0;
                      z < D.length;
                      z += 1
                    ) {
                      var U = D[z],
                        H = U.bounds ? U.bounds.min : U.min || U.position || U,
                        q = U.bounds ? U.bounds.max : U.max || U.position || U;
                      H &&
                        q &&
                        (H.x < B.min.x && (B.min.x = H.x),
                        q.x > B.max.x && (B.max.x = q.x),
                        H.y < B.min.y && (B.min.y = H.y),
                        q.y > B.max.y && (B.max.y = q.y));
                    }
                    var I = B.max.x - B.min.x + 2 * R.x,
                      tt = B.max.y - B.min.y + 2 * R.y,
                      k = E.canvas.height,
                      P = E.canvas.width,
                      et = P / k,
                      it = I / tt,
                      ct = 1,
                      G = 1;
                    (it > et ? (G = it / et) : (ct = et / it),
                      (E.options.hasBounds = !0),
                      (E.bounds.min.x = B.min.x),
                      (E.bounds.max.x = B.min.x + I * ct),
                      (E.bounds.min.y = B.min.y),
                      (E.bounds.max.y = B.min.y + tt * G),
                      j &&
                        ((E.bounds.min.x += I * 0.5 - I * ct * 0.5),
                        (E.bounds.max.x += I * 0.5 - I * ct * 0.5),
                        (E.bounds.min.y += tt * 0.5 - tt * G * 0.5),
                        (E.bounds.max.y += tt * 0.5 - tt * G * 0.5)),
                      (E.bounds.min.x -= R.x),
                      (E.bounds.max.x -= R.x),
                      (E.bounds.min.y -= R.y),
                      (E.bounds.max.y -= R.y),
                      E.mouse &&
                        (y.setScale(E.mouse, {
                          x: (E.bounds.max.x - E.bounds.min.x) / E.canvas.width,
                          y:
                            (E.bounds.max.y - E.bounds.min.y) / E.canvas.height,
                        }),
                        y.setOffset(E.mouse, E.bounds.min)));
                  }),
                  (l.startViewTransform = function (E) {
                    var D = E.bounds.max.x - E.bounds.min.x,
                      R = E.bounds.max.y - E.bounds.min.y,
                      j = D / E.options.width,
                      B = R / E.options.height;
                    (E.context.setTransform(
                      E.options.pixelRatio / j,
                      0,
                      0,
                      E.options.pixelRatio / B,
                      0,
                      0,
                    ),
                      E.context.translate(-E.bounds.min.x, -E.bounds.min.y));
                  }),
                  (l.endViewTransform = function (E) {
                    E.context.setTransform(
                      E.options.pixelRatio,
                      0,
                      0,
                      E.options.pixelRatio,
                      0,
                      0,
                    );
                  }),
                  (l.world = function (E, D) {
                    var R = m.now(),
                      j = E.engine,
                      B = j.world,
                      z = E.canvas,
                      U = E.context,
                      H = E.options,
                      q = E.timing,
                      I = p.allBodies(B),
                      tt = p.allConstraints(B),
                      k = H.wireframes ? H.wireframeBackground : H.background,
                      P = [],
                      et = [],
                      it,
                      ct = { timestamp: j.timing.timestamp };
                    if (
                      (g.trigger(E, "beforeRender", ct),
                      E.currentBackground !== k && V(E, k),
                      (U.globalCompositeOperation = "source-in"),
                      (U.fillStyle = "transparent"),
                      U.fillRect(0, 0, z.width, z.height),
                      (U.globalCompositeOperation = "source-over"),
                      H.hasBounds)
                    ) {
                      for (it = 0; it < I.length; it++) {
                        var G = I[it];
                        v.overlaps(G.bounds, E.bounds) && P.push(G);
                      }
                      for (it = 0; it < tt.length; it++) {
                        var Z = tt[it],
                          at = Z.bodyA,
                          st = Z.bodyB,
                          ht = Z.pointA,
                          lt = Z.pointB;
                        (at && (ht = x.add(at.position, Z.pointA)),
                          st && (lt = x.add(st.position, Z.pointB)),
                          !(!ht || !lt) &&
                            (v.contains(E.bounds, ht) ||
                              v.contains(E.bounds, lt)) &&
                            et.push(Z));
                      }
                      (l.startViewTransform(E),
                        E.mouse &&
                          (y.setScale(E.mouse, {
                            x:
                              (E.bounds.max.x - E.bounds.min.x) /
                              E.options.width,
                            y:
                              (E.bounds.max.y - E.bounds.min.y) /
                              E.options.height,
                          }),
                          y.setOffset(E.mouse, E.bounds.min)));
                    } else
                      ((et = tt),
                        (P = I),
                        E.options.pixelRatio !== 1 &&
                          E.context.setTransform(
                            E.options.pixelRatio,
                            0,
                            0,
                            E.options.pixelRatio,
                            0,
                            0,
                          ));
                    (!H.wireframes || (j.enableSleeping && H.showSleeping)
                      ? l.bodies(E, P, U)
                      : (H.showConvexHulls && l.bodyConvexHulls(E, P, U),
                        l.bodyWireframes(E, P, U)),
                      H.showBounds && l.bodyBounds(E, P, U),
                      (H.showAxes || H.showAngleIndicator) &&
                        l.bodyAxes(E, P, U),
                      H.showPositions && l.bodyPositions(E, P, U),
                      H.showVelocity && l.bodyVelocity(E, P, U),
                      H.showIds && l.bodyIds(E, P, U),
                      H.showSeparations && l.separations(E, j.pairs.list, U),
                      H.showCollisions && l.collisions(E, j.pairs.list, U),
                      H.showVertexNumbers && l.vertexNumbers(E, P, U),
                      H.showMousePosition && l.mousePosition(E, E.mouse, U),
                      l.constraints(et, U),
                      H.hasBounds && l.endViewTransform(E),
                      g.trigger(E, "afterRender", ct),
                      (q.lastElapsed = m.now() - R));
                  }),
                  (l.stats = function (E, D, R) {
                    for (
                      var j = E.engine,
                        B = j.world,
                        z = p.allBodies(B),
                        U = 0,
                        H = 55,
                        q = 44,
                        I = 0,
                        tt = 0,
                        k = 0;
                      k < z.length;
                      k += 1
                    )
                      U += z[k].parts.length;
                    var P = {
                      Part: U,
                      Body: z.length,
                      Cons: p.allConstraints(B).length,
                      Comp: p.allComposites(B).length,
                      Pair: j.pairs.list.length,
                    };
                    ((D.fillStyle = "#0e0f19"),
                      D.fillRect(I, tt, H * 5.5, q),
                      (D.font = "12px Arial"),
                      (D.textBaseline = "top"),
                      (D.textAlign = "right"));
                    for (var et in P) {
                      var it = P[et];
                      ((D.fillStyle = "#aaa"),
                        D.fillText(et, I + H, tt + 8),
                        (D.fillStyle = "#eee"),
                        D.fillText(it, I + H, tt + 26),
                        (I += H));
                    }
                  }),
                  (l.performance = function (E, D) {
                    var R = E.engine,
                      j = E.timing,
                      B = j.deltaHistory,
                      z = j.elapsedHistory,
                      U = j.timestampElapsedHistory,
                      H = j.engineDeltaHistory,
                      q = j.engineUpdatesHistory,
                      I = j.engineElapsedHistory,
                      tt = R.timing.lastUpdatesPerFrame,
                      k = R.timing.lastDelta,
                      P = M(B),
                      et = M(z),
                      it = M(H),
                      ct = M(q),
                      G = M(I),
                      Z = M(U),
                      at = Z / P || 0,
                      st = Math.round(P / k),
                      ht = 1e3 / P || 0,
                      lt = 4,
                      pt = 12,
                      Mt = 60,
                      Bt = 34,
                      ue = 10,
                      de = 69;
                    ((D.fillStyle = "#0e0f19"),
                      D.fillRect(0, 50, pt * 5 + Mt * 6 + 22, Bt),
                      l.status(
                        D,
                        ue,
                        de,
                        Mt,
                        lt,
                        B.length,
                        Math.round(ht) + " fps",
                        ht / l._goodFps,
                        function (te) {
                          return B[te] / P - 1;
                        },
                      ),
                      l.status(
                        D,
                        ue + pt + Mt,
                        de,
                        Mt,
                        lt,
                        H.length,
                        k.toFixed(2) + " dt",
                        l._goodDelta / k,
                        function (te) {
                          return H[te] / it - 1;
                        },
                      ),
                      l.status(
                        D,
                        ue + (pt + Mt) * 2,
                        de,
                        Mt,
                        lt,
                        q.length,
                        tt + " upf",
                        Math.pow(m.clamp(ct / st || 1, 0, 1), 4),
                        function (te) {
                          return q[te] / ct - 1;
                        },
                      ),
                      l.status(
                        D,
                        ue + (pt + Mt) * 3,
                        de,
                        Mt,
                        lt,
                        I.length,
                        G.toFixed(2) + " ut",
                        1 - (tt * G) / l._goodFps,
                        function (te) {
                          return I[te] / G - 1;
                        },
                      ),
                      l.status(
                        D,
                        ue + (pt + Mt) * 4,
                        de,
                        Mt,
                        lt,
                        z.length,
                        et.toFixed(2) + " rt",
                        1 - et / l._goodFps,
                        function (te) {
                          return z[te] / et - 1;
                        },
                      ),
                      l.status(
                        D,
                        ue + (pt + Mt) * 5,
                        de,
                        Mt,
                        lt,
                        U.length,
                        at.toFixed(2) + " x",
                        at * at * at,
                        function (te) {
                          return (U[te] / B[te] / at || 0) - 1;
                        },
                      ));
                  }),
                  (l.status = function (E, D, R, j, B, z, U, H, q) {
                    ((E.strokeStyle = "#888"),
                      (E.fillStyle = "#444"),
                      (E.lineWidth = 1),
                      E.fillRect(D, R + 7, j, 1),
                      E.beginPath(),
                      E.moveTo(D, R + 7 - B * m.clamp(0.4 * q(0), -2, 2)));
                    for (var I = 0; I < j; I += 1)
                      E.lineTo(
                        D + I,
                        R + 7 - (I < z ? B * m.clamp(0.4 * q(I), -2, 2) : 0),
                      );
                    (E.stroke(),
                      (E.fillStyle =
                        "hsl(" + m.clamp(25 + 95 * H, 0, 120) + ",100%,60%)"),
                      E.fillRect(D, R - 7, 4, 4),
                      (E.font = "12px Arial"),
                      (E.textBaseline = "middle"),
                      (E.textAlign = "right"),
                      (E.fillStyle = "#eee"),
                      E.fillText(U, D + j, R - 5));
                  }),
                  (l.constraints = function (E, D) {
                    for (var R = D, j = 0; j < E.length; j++) {
                      var B = E[j];
                      if (!(!B.render.visible || !B.pointA || !B.pointB)) {
                        var z = B.bodyA,
                          U = B.bodyB,
                          H,
                          q;
                        if (
                          (z
                            ? (H = x.add(z.position, B.pointA))
                            : (H = B.pointA),
                          B.render.type === "pin")
                        )
                          (R.beginPath(),
                            R.arc(H.x, H.y, 3, 0, 2 * Math.PI),
                            R.closePath());
                        else {
                          if (
                            (U
                              ? (q = x.add(U.position, B.pointB))
                              : (q = B.pointB),
                            R.beginPath(),
                            R.moveTo(H.x, H.y),
                            B.render.type === "spring")
                          )
                            for (
                              var I = x.sub(q, H),
                                tt = x.perp(x.normalise(I)),
                                k = Math.ceil(m.clamp(B.length / 5, 12, 20)),
                                P,
                                et = 1;
                              et < k;
                              et += 1
                            )
                              ((P = et % 2 === 0 ? 1 : -1),
                                R.lineTo(
                                  H.x + I.x * (et / k) + tt.x * P * 4,
                                  H.y + I.y * (et / k) + tt.y * P * 4,
                                ));
                          R.lineTo(q.x, q.y);
                        }
                        (B.render.lineWidth &&
                          ((R.lineWidth = B.render.lineWidth),
                          (R.strokeStyle = B.render.strokeStyle),
                          R.stroke()),
                          B.render.anchors &&
                            ((R.fillStyle = B.render.strokeStyle),
                            R.beginPath(),
                            R.arc(H.x, H.y, 3, 0, 2 * Math.PI),
                            R.arc(q.x, q.y, 3, 0, 2 * Math.PI),
                            R.closePath(),
                            R.fill()));
                      }
                    }
                  }),
                  (l.bodies = function (E, D, R) {
                    var j = R;
                    E.engine;
                    var B = E.options,
                      z = B.showInternalEdges || !B.wireframes,
                      U,
                      H,
                      q,
                      I;
                    for (q = 0; q < D.length; q++)
                      if (((U = D[q]), !!U.render.visible)) {
                        for (
                          I = U.parts.length > 1 ? 1 : 0;
                          I < U.parts.length;
                          I++
                        )
                          if (((H = U.parts[I]), !!H.render.visible)) {
                            if (
                              (B.showSleeping && U.isSleeping
                                ? (j.globalAlpha = 0.5 * H.render.opacity)
                                : H.render.opacity !== 1 &&
                                  (j.globalAlpha = H.render.opacity),
                              H.render.sprite &&
                                H.render.sprite.texture &&
                                !B.wireframes)
                            ) {
                              var tt = H.render.sprite,
                                k = N(E, tt.texture);
                              (j.translate(H.position.x, H.position.y),
                                j.rotate(H.angle),
                                j.drawImage(
                                  k,
                                  k.width * -tt.xOffset * tt.xScale,
                                  k.height * -tt.yOffset * tt.yScale,
                                  k.width * tt.xScale,
                                  k.height * tt.yScale,
                                ),
                                j.rotate(-H.angle),
                                j.translate(-H.position.x, -H.position.y));
                            } else {
                              if (H.circleRadius)
                                (j.beginPath(),
                                  j.arc(
                                    H.position.x,
                                    H.position.y,
                                    H.circleRadius,
                                    0,
                                    2 * Math.PI,
                                  ));
                              else {
                                (j.beginPath(),
                                  j.moveTo(H.vertices[0].x, H.vertices[0].y));
                                for (var P = 1; P < H.vertices.length; P++)
                                  (!H.vertices[P - 1].isInternal || z
                                    ? j.lineTo(H.vertices[P].x, H.vertices[P].y)
                                    : j.moveTo(
                                        H.vertices[P].x,
                                        H.vertices[P].y,
                                      ),
                                    H.vertices[P].isInternal &&
                                      !z &&
                                      j.moveTo(
                                        H.vertices[(P + 1) % H.vertices.length]
                                          .x,
                                        H.vertices[(P + 1) % H.vertices.length]
                                          .y,
                                      ));
                                (j.lineTo(H.vertices[0].x, H.vertices[0].y),
                                  j.closePath());
                              }
                              B.wireframes
                                ? ((j.lineWidth = 1),
                                  (j.strokeStyle =
                                    E.options.wireframeStrokeStyle),
                                  j.stroke())
                                : ((j.fillStyle = H.render.fillStyle),
                                  H.render.lineWidth &&
                                    ((j.lineWidth = H.render.lineWidth),
                                    (j.strokeStyle = H.render.strokeStyle),
                                    j.stroke()),
                                  j.fill());
                            }
                            j.globalAlpha = 1;
                          }
                      }
                  }),
                  (l.bodyWireframes = function (E, D, R) {
                    var j = R,
                      B = E.options.showInternalEdges,
                      z,
                      U,
                      H,
                      q,
                      I;
                    for (j.beginPath(), H = 0; H < D.length; H++)
                      if (((z = D[H]), !!z.render.visible))
                        for (
                          I = z.parts.length > 1 ? 1 : 0;
                          I < z.parts.length;
                          I++
                        ) {
                          for (
                            U = z.parts[I],
                              j.moveTo(U.vertices[0].x, U.vertices[0].y),
                              q = 1;
                            q < U.vertices.length;
                            q++
                          )
                            (!U.vertices[q - 1].isInternal || B
                              ? j.lineTo(U.vertices[q].x, U.vertices[q].y)
                              : j.moveTo(U.vertices[q].x, U.vertices[q].y),
                              U.vertices[q].isInternal &&
                                !B &&
                                j.moveTo(
                                  U.vertices[(q + 1) % U.vertices.length].x,
                                  U.vertices[(q + 1) % U.vertices.length].y,
                                ));
                          j.lineTo(U.vertices[0].x, U.vertices[0].y);
                        }
                    ((j.lineWidth = 1),
                      (j.strokeStyle = E.options.wireframeStrokeStyle),
                      j.stroke());
                  }),
                  (l.bodyConvexHulls = function (E, D, R) {
                    var j = R,
                      B,
                      z,
                      U;
                    for (j.beginPath(), z = 0; z < D.length; z++)
                      if (
                        ((B = D[z]),
                        !(!B.render.visible || B.parts.length === 1))
                      ) {
                        for (
                          j.moveTo(B.vertices[0].x, B.vertices[0].y), U = 1;
                          U < B.vertices.length;
                          U++
                        )
                          j.lineTo(B.vertices[U].x, B.vertices[U].y);
                        j.lineTo(B.vertices[0].x, B.vertices[0].y);
                      }
                    ((j.lineWidth = 1),
                      (j.strokeStyle = "rgba(255,255,255,0.2)"),
                      j.stroke());
                  }),
                  (l.vertexNumbers = function (E, D, R) {
                    var j = R,
                      B,
                      z,
                      U;
                    for (B = 0; B < D.length; B++) {
                      var H = D[B].parts;
                      for (U = H.length > 1 ? 1 : 0; U < H.length; U++) {
                        var q = H[U];
                        for (z = 0; z < q.vertices.length; z++)
                          ((j.fillStyle = "rgba(255,255,255,0.2)"),
                            j.fillText(
                              B + "_" + z,
                              q.position.x +
                                (q.vertices[z].x - q.position.x) * 0.8,
                              q.position.y +
                                (q.vertices[z].y - q.position.y) * 0.8,
                            ));
                      }
                    }
                  }),
                  (l.mousePosition = function (E, D, R) {
                    var j = R;
                    ((j.fillStyle = "rgba(255,255,255,0.8)"),
                      j.fillText(
                        D.position.x + "  " + D.position.y,
                        D.position.x + 5,
                        D.position.y - 5,
                      ));
                  }),
                  (l.bodyBounds = function (E, D, R) {
                    var j = R;
                    E.engine;
                    var B = E.options;
                    j.beginPath();
                    for (var z = 0; z < D.length; z++) {
                      var U = D[z];
                      if (U.render.visible)
                        for (
                          var H = D[z].parts, q = H.length > 1 ? 1 : 0;
                          q < H.length;
                          q++
                        ) {
                          var I = H[q];
                          j.rect(
                            I.bounds.min.x,
                            I.bounds.min.y,
                            I.bounds.max.x - I.bounds.min.x,
                            I.bounds.max.y - I.bounds.min.y,
                          );
                        }
                    }
                    (B.wireframes
                      ? (j.strokeStyle = "rgba(255,255,255,0.08)")
                      : (j.strokeStyle = "rgba(0,0,0,0.1)"),
                      (j.lineWidth = 1),
                      j.stroke());
                  }),
                  (l.bodyAxes = function (E, D, R) {
                    var j = R;
                    E.engine;
                    var B = E.options,
                      z,
                      U,
                      H,
                      q;
                    for (j.beginPath(), U = 0; U < D.length; U++) {
                      var I = D[U],
                        tt = I.parts;
                      if (I.render.visible)
                        if (B.showAxes)
                          for (H = tt.length > 1 ? 1 : 0; H < tt.length; H++)
                            for (z = tt[H], q = 0; q < z.axes.length; q++) {
                              var k = z.axes[q];
                              (j.moveTo(z.position.x, z.position.y),
                                j.lineTo(
                                  z.position.x + k.x * 20,
                                  z.position.y + k.y * 20,
                                ));
                            }
                        else
                          for (H = tt.length > 1 ? 1 : 0; H < tt.length; H++)
                            for (z = tt[H], q = 0; q < z.axes.length; q++)
                              (j.moveTo(z.position.x, z.position.y),
                                j.lineTo(
                                  (z.vertices[0].x +
                                    z.vertices[z.vertices.length - 1].x) /
                                    2,
                                  (z.vertices[0].y +
                                    z.vertices[z.vertices.length - 1].y) /
                                    2,
                                ));
                    }
                    (B.wireframes
                      ? ((j.strokeStyle = "indianred"), (j.lineWidth = 1))
                      : ((j.strokeStyle = "rgba(255, 255, 255, 0.4)"),
                        (j.globalCompositeOperation = "overlay"),
                        (j.lineWidth = 2)),
                      j.stroke(),
                      (j.globalCompositeOperation = "source-over"));
                  }),
                  (l.bodyPositions = function (E, D, R) {
                    var j = R;
                    E.engine;
                    var B = E.options,
                      z,
                      U,
                      H,
                      q;
                    for (j.beginPath(), H = 0; H < D.length; H++)
                      if (((z = D[H]), !!z.render.visible))
                        for (q = 0; q < z.parts.length; q++)
                          ((U = z.parts[q]),
                            j.arc(
                              U.position.x,
                              U.position.y,
                              3,
                              0,
                              2 * Math.PI,
                              !1,
                            ),
                            j.closePath());
                    for (
                      B.wireframes
                        ? (j.fillStyle = "indianred")
                        : (j.fillStyle = "rgba(0,0,0,0.5)"),
                        j.fill(),
                        j.beginPath(),
                        H = 0;
                      H < D.length;
                      H++
                    )
                      ((z = D[H]),
                        z.render.visible &&
                          (j.arc(
                            z.positionPrev.x,
                            z.positionPrev.y,
                            2,
                            0,
                            2 * Math.PI,
                            !1,
                          ),
                          j.closePath()));
                    ((j.fillStyle = "rgba(255,165,0,0.8)"), j.fill());
                  }),
                  (l.bodyVelocity = function (E, D, R) {
                    var j = R;
                    j.beginPath();
                    for (var B = 0; B < D.length; B++) {
                      var z = D[B];
                      if (z.render.visible) {
                        var U = f.getVelocity(z);
                        (j.moveTo(z.position.x, z.position.y),
                          j.lineTo(z.position.x + U.x, z.position.y + U.y));
                      }
                    }
                    ((j.lineWidth = 3),
                      (j.strokeStyle = "cornflowerblue"),
                      j.stroke());
                  }),
                  (l.bodyIds = function (E, D, R) {
                    var j = R,
                      B,
                      z;
                    for (B = 0; B < D.length; B++)
                      if (D[B].render.visible) {
                        var U = D[B].parts;
                        for (z = U.length > 1 ? 1 : 0; z < U.length; z++) {
                          var H = U[z];
                          ((j.font = "12px Arial"),
                            (j.fillStyle = "rgba(255,255,255,0.5)"),
                            j.fillText(
                              H.id,
                              H.position.x + 10,
                              H.position.y - 10,
                            ));
                        }
                      }
                  }),
                  (l.collisions = function (E, D, R) {
                    var j = R,
                      B = E.options,
                      z,
                      U,
                      H,
                      q;
                    for (j.beginPath(), H = 0; H < D.length; H++)
                      if (((z = D[H]), !!z.isActive))
                        for (U = z.collision, q = 0; q < z.contactCount; q++) {
                          var I = z.contacts[q],
                            tt = I.vertex;
                          j.rect(tt.x - 1.5, tt.y - 1.5, 3.5, 3.5);
                        }
                    for (
                      B.wireframes
                        ? (j.fillStyle = "rgba(255,255,255,0.7)")
                        : (j.fillStyle = "orange"),
                        j.fill(),
                        j.beginPath(),
                        H = 0;
                      H < D.length;
                      H++
                    )
                      if (
                        ((z = D[H]),
                        !!z.isActive && ((U = z.collision), z.contactCount > 0))
                      ) {
                        var k = z.contacts[0].vertex.x,
                          P = z.contacts[0].vertex.y;
                        (z.contactCount === 2 &&
                          ((k =
                            (z.contacts[0].vertex.x + z.contacts[1].vertex.x) /
                            2),
                          (P =
                            (z.contacts[0].vertex.y + z.contacts[1].vertex.y) /
                            2)),
                          U.bodyB === U.supports[0].body ||
                          U.bodyA.isStatic === !0
                            ? j.moveTo(k - U.normal.x * 8, P - U.normal.y * 8)
                            : j.moveTo(k + U.normal.x * 8, P + U.normal.y * 8),
                          j.lineTo(k, P));
                      }
                    (B.wireframes
                      ? (j.strokeStyle = "rgba(255,165,0,0.7)")
                      : (j.strokeStyle = "orange"),
                      (j.lineWidth = 1),
                      j.stroke());
                  }),
                  (l.separations = function (E, D, R) {
                    var j = R,
                      B = E.options,
                      z,
                      U,
                      H,
                      q,
                      I;
                    for (j.beginPath(), I = 0; I < D.length; I++)
                      if (((z = D[I]), !!z.isActive)) {
                        ((U = z.collision), (H = U.bodyA), (q = U.bodyB));
                        var tt = 1;
                        (!q.isStatic && !H.isStatic && (tt = 0.5),
                          q.isStatic && (tt = 0),
                          j.moveTo(q.position.x, q.position.y),
                          j.lineTo(
                            q.position.x - U.penetration.x * tt,
                            q.position.y - U.penetration.y * tt,
                          ),
                          (tt = 1),
                          !q.isStatic && !H.isStatic && (tt = 0.5),
                          H.isStatic && (tt = 0),
                          j.moveTo(H.position.x, H.position.y),
                          j.lineTo(
                            H.position.x + U.penetration.x * tt,
                            H.position.y + U.penetration.y * tt,
                          ));
                      }
                    (B.wireframes
                      ? (j.strokeStyle = "rgba(255,165,0,0.5)")
                      : (j.strokeStyle = "orange"),
                      j.stroke());
                  }),
                  (l.inspector = function (E, D) {
                    E.engine;
                    var R = E.selected,
                      j = E.render,
                      B = j.options,
                      z;
                    if (B.hasBounds) {
                      var U = j.bounds.max.x - j.bounds.min.x,
                        H = j.bounds.max.y - j.bounds.min.y,
                        q = U / j.options.width,
                        I = H / j.options.height;
                      (D.scale(1 / q, 1 / I),
                        D.translate(-j.bounds.min.x, -j.bounds.min.y));
                    }
                    for (var tt = 0; tt < R.length; tt++) {
                      var k = R[tt].data;
                      switch (
                        (D.translate(0.5, 0.5),
                        (D.lineWidth = 1),
                        (D.strokeStyle = "rgba(255,165,0,0.9)"),
                        D.setLineDash([1, 2]),
                        k.type)
                      ) {
                        case "body":
                          ((z = k.bounds),
                            D.beginPath(),
                            D.rect(
                              Math.floor(z.min.x - 3),
                              Math.floor(z.min.y - 3),
                              Math.floor(z.max.x - z.min.x + 6),
                              Math.floor(z.max.y - z.min.y + 6),
                            ),
                            D.closePath(),
                            D.stroke());
                          break;
                        case "constraint":
                          var P = k.pointA;
                          (k.bodyA && (P = k.pointB),
                            D.beginPath(),
                            D.arc(P.x, P.y, 10, 0, 2 * Math.PI),
                            D.closePath(),
                            D.stroke());
                          break;
                      }
                      (D.setLineDash([]), D.translate(-0.5, -0.5));
                    }
                    (E.selectStart !== null &&
                      (D.translate(0.5, 0.5),
                      (D.lineWidth = 1),
                      (D.strokeStyle = "rgba(255,165,0,0.6)"),
                      (D.fillStyle = "rgba(255,165,0,0.1)"),
                      (z = E.selectBounds),
                      D.beginPath(),
                      D.rect(
                        Math.floor(z.min.x),
                        Math.floor(z.min.y),
                        Math.floor(z.max.x - z.min.x),
                        Math.floor(z.max.y - z.min.y),
                      ),
                      D.closePath(),
                      D.stroke(),
                      D.fill(),
                      D.translate(-0.5, -0.5)),
                      B.hasBounds && D.setTransform(1, 0, 0, 1, 0, 0));
                  }));
                var b = function (E, D) {
                    var R = E.engine,
                      j = E.timing,
                      B = j.historySize,
                      z = R.timing.timestamp;
                    ((j.delta = D - j.lastTime || l._goodDelta),
                      (j.lastTime = D),
                      (j.timestampElapsed = z - j.lastTimestamp || 0),
                      (j.lastTimestamp = z),
                      j.deltaHistory.unshift(j.delta),
                      (j.deltaHistory.length = Math.min(
                        j.deltaHistory.length,
                        B,
                      )),
                      j.engineDeltaHistory.unshift(R.timing.lastDelta),
                      (j.engineDeltaHistory.length = Math.min(
                        j.engineDeltaHistory.length,
                        B,
                      )),
                      j.timestampElapsedHistory.unshift(j.timestampElapsed),
                      (j.timestampElapsedHistory.length = Math.min(
                        j.timestampElapsedHistory.length,
                        B,
                      )),
                      j.engineUpdatesHistory.unshift(
                        R.timing.lastUpdatesPerFrame,
                      ),
                      (j.engineUpdatesHistory.length = Math.min(
                        j.engineUpdatesHistory.length,
                        B,
                      )),
                      j.engineElapsedHistory.unshift(R.timing.lastElapsed),
                      (j.engineElapsedHistory.length = Math.min(
                        j.engineElapsedHistory.length,
                        B,
                      )),
                      j.elapsedHistory.unshift(j.lastElapsed),
                      (j.elapsedHistory.length = Math.min(
                        j.elapsedHistory.length,
                        B,
                      )));
                  },
                  M = function (E) {
                    for (var D = 0, R = 0; R < E.length; R += 1) D += E[R];
                    return D / E.length || 0;
                  },
                  C = function (E, D) {
                    var R = document.createElement("canvas");
                    return (
                      (R.width = E),
                      (R.height = D),
                      (R.oncontextmenu = function () {
                        return !1;
                      }),
                      (R.onselectstart = function () {
                        return !1;
                      }),
                      R
                    );
                  },
                  O = function (E) {
                    var D = E.getContext("2d"),
                      R = window.devicePixelRatio || 1,
                      j =
                        D.webkitBackingStorePixelRatio ||
                        D.mozBackingStorePixelRatio ||
                        D.msBackingStorePixelRatio ||
                        D.oBackingStorePixelRatio ||
                        D.backingStorePixelRatio ||
                        1;
                    return R / j;
                  },
                  N = function (E, D) {
                    var R = E.textures[D];
                    return (
                      R || ((R = E.textures[D] = new Image()), (R.src = D), R)
                    );
                  },
                  V = function (E, D) {
                    var R = D;
                    (/(jpg|gif|png)$/.test(D) && (R = "url(" + D + ")"),
                      (E.canvas.style.background = R),
                      (E.canvas.style.backgroundSize = "contain"),
                      (E.currentBackground = D));
                  };
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(5),
                m = c(17),
                p = c(0);
              (function () {
                ((l._maxFrameDelta = 1e3 / 15),
                  (l._frameDeltaFallback = 1e3 / 60),
                  (l._timeBufferMargin = 1.5),
                  (l._elapsedNextEstimate = 1),
                  (l._smoothingLowerBound = 0.1),
                  (l._smoothingUpperBound = 0.9),
                  (l.create = function (g) {
                    var x = {
                        delta: 16.666666666666668,
                        frameDelta: null,
                        frameDeltaSmoothing: !0,
                        frameDeltaSnapping: !0,
                        frameDeltaHistory: [],
                        frameDeltaHistorySize: 100,
                        frameRequestId: null,
                        timeBuffer: 0,
                        timeLastTick: null,
                        maxUpdates: null,
                        maxFrameTime: 33.333333333333336,
                        lastUpdatesDeferred: 0,
                        enabled: !0,
                      },
                      y = p.extend(x, g);
                    return ((y.fps = 0), y);
                  }),
                  (l.run = function (g, x) {
                    return (
                      (g.timeBuffer = l._frameDeltaFallback),
                      (function y(d) {
                        ((g.frameRequestId = l._onNextFrame(g, y)),
                          d && g.enabled && l.tick(g, x, d));
                      })(),
                      g
                    );
                  }),
                  (l.tick = function (g, x, y) {
                    var d = p.now(),
                      S = g.delta,
                      b = 0,
                      M = y - g.timeLastTick;
                    if (
                      ((!M ||
                        !g.timeLastTick ||
                        M > Math.max(l._maxFrameDelta, g.maxFrameTime)) &&
                        (M = g.frameDelta || l._frameDeltaFallback),
                      g.frameDeltaSmoothing)
                    ) {
                      (g.frameDeltaHistory.push(M),
                        (g.frameDeltaHistory = g.frameDeltaHistory.slice(
                          -g.frameDeltaHistorySize,
                        )));
                      var C = g.frameDeltaHistory.slice(0).sort(),
                        O = g.frameDeltaHistory.slice(
                          C.length * l._smoothingLowerBound,
                          C.length * l._smoothingUpperBound,
                        ),
                        N = v(O);
                      M = N || M;
                    }
                    (g.frameDeltaSnapping && (M = 1e3 / Math.round(1e3 / M)),
                      (g.frameDelta = M),
                      (g.timeLastTick = y),
                      (g.timeBuffer += g.frameDelta),
                      (g.timeBuffer = p.clamp(
                        g.timeBuffer,
                        0,
                        g.frameDelta + S * l._timeBufferMargin,
                      )),
                      (g.lastUpdatesDeferred = 0));
                    var V = g.maxUpdates || Math.ceil(g.maxFrameTime / S),
                      E = { timestamp: x.timing.timestamp };
                    (f.trigger(g, "beforeTick", E), f.trigger(g, "tick", E));
                    for (
                      var D = p.now();
                      S > 0 && g.timeBuffer >= S * l._timeBufferMargin;
                    ) {
                      (f.trigger(g, "beforeUpdate", E),
                        m.update(x, S),
                        f.trigger(g, "afterUpdate", E),
                        (g.timeBuffer -= S),
                        (b += 1));
                      var R = p.now() - d,
                        j = p.now() - D,
                        B = R + (l._elapsedNextEstimate * j) / b;
                      if (b >= V || B > g.maxFrameTime) {
                        g.lastUpdatesDeferred = Math.round(
                          Math.max(0, g.timeBuffer / S - l._timeBufferMargin),
                        );
                        break;
                      }
                    }
                    ((x.timing.lastUpdatesPerFrame = b),
                      f.trigger(g, "afterTick", E),
                      g.frameDeltaHistory.length >= 100 &&
                        (g.lastUpdatesDeferred &&
                        Math.round(g.frameDelta / S) > V
                          ? p.warnOnce(
                              "Matter.Runner: runner reached runner.maxUpdates, see docs.",
                            )
                          : g.lastUpdatesDeferred &&
                            p.warnOnce(
                              "Matter.Runner: runner reached runner.maxFrameTime, see docs.",
                            ),
                        typeof g.isFixed < "u" &&
                          p.warnOnce(
                            "Matter.Runner: runner.isFixed is now redundant, see docs.",
                          ),
                        (g.deltaMin || g.deltaMax) &&
                          p.warnOnce(
                            "Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.",
                          ),
                        g.fps !== 0 &&
                          p.warnOnce(
                            "Matter.Runner: runner.fps was replaced by runner.delta, see docs.",
                          )));
                  }),
                  (l.stop = function (g) {
                    l._cancelNextFrame(g);
                  }),
                  (l._onNextFrame = function (g, x) {
                    if (typeof window < "u" && window.requestAnimationFrame)
                      g.frameRequestId = window.requestAnimationFrame(x);
                    else
                      throw new Error(
                        "Matter.Runner: missing required global window.requestAnimationFrame.",
                      );
                    return g.frameRequestId;
                  }),
                  (l._cancelNextFrame = function (g) {
                    if (typeof window < "u" && window.cancelAnimationFrame)
                      window.cancelAnimationFrame(g.frameRequestId);
                    else
                      throw new Error(
                        "Matter.Runner: missing required global window.cancelAnimationFrame.",
                      );
                  }));
                var v = function (g) {
                  for (var x = 0, y = g.length, d = 0; d < y; d += 1) x += g[d];
                  return x / y || 0;
                };
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(8),
                m = c(0),
                p = m.deprecated;
              (function () {
                ((l.collides = function (v, g) {
                  return f.collides(v, g);
                }),
                  p(
                    l,
                    "collides",
                    "SAT.collides ➤ replaced by Collision.collides",
                  ));
              })();
            },
            function (r, o, c) {
              var l = {};
              ((r.exports = l), c(1));
              var f = c(0);
              (function () {
                ((l.pathToVertices = function (m, p) {
                  typeof window < "u" &&
                    !("SVGPathSeg" in window) &&
                    f.warn(
                      "Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.",
                    );
                  var v,
                    g,
                    x,
                    y,
                    d,
                    S,
                    b,
                    M,
                    C,
                    O,
                    N = [],
                    V,
                    E,
                    D = 0,
                    R = 0,
                    j = 0;
                  p = p || 15;
                  var B = function (U, H, q) {
                      var I = q % 2 === 1 && q > 1;
                      if (!C || U != C.x || H != C.y) {
                        C && I ? ((V = C.x), (E = C.y)) : ((V = 0), (E = 0));
                        var tt = { x: V + U, y: E + H };
                        ((I || !C) && (C = tt),
                          N.push(tt),
                          (R = V + U),
                          (j = E + H));
                      }
                    },
                    z = function (U) {
                      var H = U.pathSegTypeAsLetter.toUpperCase();
                      if (H !== "Z") {
                        switch (H) {
                          case "M":
                          case "L":
                          case "T":
                          case "C":
                          case "S":
                          case "Q":
                            ((R = U.x), (j = U.y));
                            break;
                          case "H":
                            R = U.x;
                            break;
                          case "V":
                            j = U.y;
                            break;
                        }
                        B(R, j, U.pathSegType);
                      }
                    };
                  for (
                    l._svgPathToAbsolute(m),
                      x = m.getTotalLength(),
                      S = [],
                      v = 0;
                    v < m.pathSegList.numberOfItems;
                    v += 1
                  )
                    S.push(m.pathSegList.getItem(v));
                  for (b = S.concat(); D < x; ) {
                    if (((O = m.getPathSegAtLength(D)), (d = S[O]), d != M)) {
                      for (; b.length && b[0] != d; ) z(b.shift());
                      M = d;
                    }
                    switch (d.pathSegTypeAsLetter.toUpperCase()) {
                      case "C":
                      case "T":
                      case "S":
                      case "Q":
                      case "A":
                        ((y = m.getPointAtLength(D)), B(y.x, y.y, 0));
                        break;
                    }
                    D += p;
                  }
                  for (v = 0, g = b.length; v < g; ++v) z(b[v]);
                  return N;
                }),
                  (l._svgPathToAbsolute = function (m) {
                    for (
                      var p,
                        v,
                        g,
                        x,
                        y,
                        d,
                        S = m.pathSegList,
                        b = 0,
                        M = 0,
                        C = S.numberOfItems,
                        O = 0;
                      O < C;
                      ++O
                    ) {
                      var N = S.getItem(O),
                        V = N.pathSegTypeAsLetter;
                      if (/[MLHVCSQTA]/.test(V))
                        ("x" in N && (b = N.x), "y" in N && (M = N.y));
                      else
                        switch (
                          ("x1" in N && (g = b + N.x1),
                          "x2" in N && (y = b + N.x2),
                          "y1" in N && (x = M + N.y1),
                          "y2" in N && (d = M + N.y2),
                          "x" in N && (b += N.x),
                          "y" in N && (M += N.y),
                          V)
                        ) {
                          case "m":
                            S.replaceItem(m.createSVGPathSegMovetoAbs(b, M), O);
                            break;
                          case "l":
                            S.replaceItem(m.createSVGPathSegLinetoAbs(b, M), O);
                            break;
                          case "h":
                            S.replaceItem(
                              m.createSVGPathSegLinetoHorizontalAbs(b),
                              O,
                            );
                            break;
                          case "v":
                            S.replaceItem(
                              m.createSVGPathSegLinetoVerticalAbs(M),
                              O,
                            );
                            break;
                          case "c":
                            S.replaceItem(
                              m.createSVGPathSegCurvetoCubicAbs(
                                b,
                                M,
                                g,
                                x,
                                y,
                                d,
                              ),
                              O,
                            );
                            break;
                          case "s":
                            S.replaceItem(
                              m.createSVGPathSegCurvetoCubicSmoothAbs(
                                b,
                                M,
                                y,
                                d,
                              ),
                              O,
                            );
                            break;
                          case "q":
                            S.replaceItem(
                              m.createSVGPathSegCurvetoQuadraticAbs(b, M, g, x),
                              O,
                            );
                            break;
                          case "t":
                            S.replaceItem(
                              m.createSVGPathSegCurvetoQuadraticSmoothAbs(b, M),
                              O,
                            );
                            break;
                          case "a":
                            S.replaceItem(
                              m.createSVGPathSegArcAbs(
                                b,
                                M,
                                N.r1,
                                N.r2,
                                N.angle,
                                N.largeArcFlag,
                                N.sweepFlag,
                              ),
                              O,
                            );
                            break;
                          case "z":
                          case "Z":
                            ((b = p), (M = v));
                            break;
                        }
                      (V == "M" || V == "m") && ((p = b), (v = M));
                    }
                  }));
              })();
            },
            function (r, o, c) {
              var l = {};
              r.exports = l;
              var f = c(6);
              (c(0),
                (function () {
                  ((l.create = f.create),
                    (l.add = f.add),
                    (l.remove = f.remove),
                    (l.clear = f.clear),
                    (l.addComposite = f.addComposite),
                    (l.addBody = f.addBody),
                    (l.addConstraint = f.addConstraint));
                })());
            },
          ]);
        });
      })(Er)),
    Er.exports
  );
}
var O3 = R3();
const Ft = E1(O3),
  cg = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UC7yXvYXVzDx-FwfgZpX07Rg",
      color: "#FF0000",
      bg: "linear-gradient(135deg, #FF0000, #CC0000)",
      icon: '<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M23.5 6.2c-.3-1-1-1.8-2-2.1C19.7 3.6 12 3.6 12 3.6s-7.7 0-9.5.5c-1 .3-1.8 1-2.1 2-.5 1.8-.5 5.7-.5 5.7s0 3.9.5 5.7c.3 1 1 1.8 2 2.1 1.8.5 9.5.5 9.5.5s7.7 0 9.5-.5c1-.3 1.8-1 2-2.1.5-1.8.5-5.7.5-5.7s0-3.9-.5-5.6zM9.8 15.5V8.4l6.3 3.5-6.3 3.6z"/></svg>',
    },
    {
      name: "Facebook",
      href: "https://facebook.com",
      color: "#1877F2",
      bg: "linear-gradient(135deg, #1877F2, #1565D8)",
      icon: '<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M24 12c0-6.6-5.4-12-12-12S0 5.4 0 12c0 6 4.4 11 10.1 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-1.9.9-1.9 1.8V12h3.3l-.5 3.5h-2.8v8.4C19.6 23 24 18 24 12z"/></svg>',
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/soundarya_lahari_creations?igsh=ajVveG5ldXBmczg=",
      color: "#E4405F",
      bg: "linear-gradient(135deg, #F58529, #DD2A7B, #8134AF)",
      icon: '<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1.1.4 2.2.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1.1.4-2.2.4-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1.1-.4-2.2-.1-1.3-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1.1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 5.8.1 4.9.3 4.1.6c-.8.3-1.5.7-2.2 1.4C1.3 2.6.9 3.3.6 4.1.3 4.9.1 5.8.1 7.1 0 8.3 0 8.7 0 12s0 3.7.1 4.9c.1 1.3.2 2.2.5 2.9.3.8.7 1.5 1.4 2.2.7.7 1.4 1.1 2.2 1.4.8.3 1.6.5 2.9.5C8.3 24 8.7 24 12 24s3.7 0 4.9-.1c1.3-.1 2.2-.2 2.9-.5.8-.3 1.5-.7 2.2-1.4.7-.7 1.1-1.4 1.4-2.2.3-.8.5-1.6.5-2.9.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.1-1.3-.2-2.2-.5-2.9-.3-.8-.7-1.5-1.4-2.2-.7-.7-1.4-1.1-2.2-1.4-.7-.3-1.6-.5-2.9-.5C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-10.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z"/></svg>',
    },
    {
      name: "Email",
      href: "mailto:ashram@manjothi.com",
      color: "#B89768",
      bg: "linear-gradient(135deg, #B89768, #9A7B50)",
      icon: '<svg viewBox="0 0 24 24" fill="white" width="28" height="28"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    },
  ],
  z3 = 110,
  B3 = 110;
function V3() {
  const a = nt.useRef(null),
    i = nt.useRef(null),
    r = iy(a, { once: !0, margin: "0px" }),
    [o, c] = nt.useState(!1);
  return (
    nt.useEffect(() => {
      if (!r || o) return;
      const l = i.current;
      l &&
        requestAnimationFrame(() => {
          const f = l.clientWidth,
            m = l.clientHeight;
          if (f < 50 || m < 50) return;
          c(!0);
          const v = f < 600 ? 0.7 : 0.85,
            g = z3 * v,
            x = B3 * v,
            y = Ft.Engine.create({ gravity: { x: 0, y: 1.2, scale: 0.001 } }),
            d = 50,
            S = Ft.Bodies.rectangle(f / 2, m + d / 2, f * 2, d, {
              isStatic: !0,
              restitution: 0.3,
              friction: 0.8,
            }),
            b = Ft.Bodies.rectangle(-d / 2, m / 2, d, m * 2, {
              isStatic: !0,
              restitution: 0.3,
            }),
            M = Ft.Bodies.rectangle(f + d / 2, m / 2, d, m * 2, {
              isStatic: !0,
              restitution: 0.3,
            });
          Ft.Composite.add(y.world, [S, b, M]);
          const C = [],
            O = [];
          cg.forEach((q, I) => {
            const k = (f / (cg.length + 1)) * (I + 1),
              P = -x - I * 40,
              et = Ft.Bodies.rectangle(k, P, g, x, {
                restitution: 0.35,
                friction: 0.3,
                frictionAir: 0.02,
                density: 0.002,
                angle: (Math.random() - 0.5) * 0.3,
                chamfer: { radius: 12 },
              });
            (Ft.Composite.add(y.world, et), C.push(et));
            const it = document.createElement("a");
            ((it.href = q.href),
              q.href.startsWith("mailto:") ||
                ((it.target = "_blank"), (it.rel = "noopener noreferrer")),
              (it.className = "physics-card"),
              (it.style.width = g + "px"),
              (it.style.height = x + "px"),
              it.style.setProperty("--card-color", q.color),
              (it.style.background = q.bg),
              (it.style.borderRadius = "1rem"),
              (it.style.padding = "0"),
              (it.draggable = !1),
              (it.innerHTML = `
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;gap:8px;">
            <div style="opacity:0.95;">${q.icon}</div>
            <span style="font-family:var(--font-sans);font-size:0.6rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:white;opacity:0.9;">${q.name}</span>
          </div>
        `),
              l.appendChild(it),
              O.push(it));
          });
          let N = null,
            V = !1;
          const E = (q) => {
              const I = l.getBoundingClientRect();
              return { x: q.clientX - I.left, y: q.clientY - I.top };
            },
            D = (q, I) => {
              for (let tt = C.length - 1; tt >= 0; tt--) {
                const k = C[tt];
                if (Ft.Bounds.contains(k.bounds, { x: q, y: I })) return k;
              }
              return null;
            },
            R = (q) => {
              const I = E(q),
                tt = D(I.x, I.y);
              tt && ((N = tt), (V = !0), q.preventDefault());
            },
            j = (q) => {
              if (!N) return;
              const I = E(q);
              (Ft.Body.setPosition(N, I),
                Ft.Body.setVelocity(N, { x: 0, y: 0 }));
            },
            B = () => {
              (N &&
                Ft.Body.setVelocity(N, { x: (Math.random() - 0.5) * 6, y: -3 }),
                (N = null),
                setTimeout(() => {
                  V = !1;
                }, 80));
            };
          (l.addEventListener("mousedown", R),
            window.addEventListener("mousemove", j),
            window.addEventListener("mouseup", B),
            l.addEventListener(
              "click",
              (q) => {
                V && (q.preventDefault(), q.stopPropagation());
              },
              !0,
            ),
            l.addEventListener(
              "touchstart",
              (q) => {
                const I = E(q.touches[0]),
                  tt = D(I.x, I.y);
                tt && ((N = tt), (V = !0));
              },
              { passive: !0 },
            ),
            l.addEventListener(
              "touchmove",
              (q) => {
                if (!N) return;
                q.preventDefault();
                const I = E(q.touches[0]);
                (Ft.Body.setPosition(N, I),
                  Ft.Body.setVelocity(N, { x: 0, y: 0 }));
              },
              { passive: !1 },
            ),
            l.addEventListener(
              "touchend",
              () => {
                (N &&
                  Ft.Body.setVelocity(N, {
                    x: (Math.random() - 0.5) * 5,
                    y: -3,
                  }),
                  (N = null),
                  setTimeout(() => {
                    V = !1;
                  }, 100));
              },
              { passive: !0 },
            ),
            Ft.Events.on(y, "beforeUpdate", () => {
              C.forEach((q) => {
                q.position.y > m * 0.72 &&
                  Ft.Body.applyForce(q, q.position, {
                    x: 0,
                    y: -5e-4 * q.mass,
                  });
              });
            }));
          const z = Ft.Runner.create();
          Ft.Runner.run(z, y);
          let U = 0;
          const H = () => {
            for (let q = 0; q < C.length; q++) {
              const I = C[q],
                tt = O[q],
                k = I.position.x - g / 2,
                P = I.position.y - x / 2,
                et = I.angle * (180 / Math.PI);
              tt.style.transform = `translate3d(${k}px, ${P}px, 0) rotate(${et}deg)`;
            }
            U = requestAnimationFrame(H);
          };
          return (
            (U = requestAnimationFrame(H)),
            () => {
              (cancelAnimationFrame(U),
                Ft.Runner.stop(z),
                Ft.Composite.clear(y.world, !1),
                Ft.Engine.clear(y),
                l.removeEventListener("mousedown", R),
                window.removeEventListener("mousemove", j),
                window.removeEventListener("mouseup", B),
                O.forEach((q) => q.remove()));
            }
          );
        });
    }, [r, o]),
    A.jsxs("div", {
      ref: a,
      className: "physics-section-wrapper",
      style: { position: "relative", width: "100%", height: "300px" },
      children: [
        A.jsxs("div", {
          style: {
            position: "absolute",
            top: "0.75rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 5,
            textAlign: "center",
            pointerEvents: "none",
            maxWidth: "380px",
            width: "100%",
            padding: "0 1rem",
          },
          children: [
            A.jsx(Gt.span, {
              initial: { opacity: 0, y: 20 },
              animate: r ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.5, delay: 0 },
              className:
                "font-sans text-[10px] uppercase tracking-[0.3em] text-brass",
              style: { display: "block" },
              children: "Connect with Us",
            }),
            A.jsx(Gt.h2, {
              initial: { opacity: 0, y: 30 },
              animate: r ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6, delay: 0.1 },
              className:
                "font-serif text-3xl sm:text-4xl md:text-5xl text-parchment",
              style: { marginTop: "0.5rem" },
              children: "Contact Us",
            }),
          ],
        }),
        A.jsx("div", {
          ref: i,
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
            zIndex: 1,
          },
        }),
      ],
    })
  );
}
const Ec = () =>
    A.jsxs("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        A.jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }),
        A.jsx("path", { d: "M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" }),
      ],
    }),
  L3 = () =>
    A.jsxs("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        A.jsx("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" }),
        A.jsx("circle", { cx: "12", cy: "10", r: "3" }),
      ],
    }),
  fg = () =>
    A.jsx("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: A.jsx("path", {
        d: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
      }),
    }),
  U3 = () =>
    A.jsx("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: A.jsx("path", {
        d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
      }),
    }),
  H3 = () =>
    A.jsxs("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        A.jsx("circle", { cx: "12", cy: "12", r: "10" }),
        A.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }),
        A.jsx("path", {
          d: "M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z",
        }),
      ],
    }),
  G3 = () =>
    A.jsx("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: A.jsx("path", {
        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
      }),
    }),
  Y3 = () =>
    A.jsx("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: A.jsx("path", {
        d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
      }),
    }),
  k3 = () =>
    A.jsxs("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        A.jsx("line", { x1: "12", y1: "19", x2: "12", y2: "5" }),
        A.jsx("polyline", { points: "5 12 12 5 19 12" }),
      ],
    });
function X3() {
  const a = new Date().getFullYear(),
    i = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  return A.jsxs(A.Fragment, {
    children: [
      A.jsx("div", { className: "h-px bg-brass/20" }),
      A.jsxs("footer", {
        id: "contact",
        className: "bg-charcoal text-parchment/60 grain-overlay relative",
        children: [
          A.jsx("div", {
            className: "border-b border-parchment/8",
            children: A.jsx("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16",
              children: A.jsx(V3, {}),
            }),
          }),
          A.jsx("div", {
            className: "border-b border-parchment/8",
            children: A.jsx("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14",
              children: A.jsx(St, {
                variant: "fade-up",
                children: A.jsxs("div", {
                  className:
                    "grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto",
                  children: [
                    A.jsxs("div", {
                      className:
                        "flex items-start gap-3 p-5 rounded-2xl border border-parchment/8 bg-parchment/[0.02]",
                      children: [
                        A.jsx("span", {
                          className: "text-brass/50 mt-0.5 flex-shrink-0",
                          children: A.jsx(L3, {}),
                        }),
                        A.jsxs("address", {
                          className:
                            "not-italic font-sans text-xs text-parchment/45 leading-6",
                          children: [
                            "Sathianagaram, Odaimarichan Post",
                            A.jsx("br", {}),
                            "Tirunelveli, Tamil Nadu",
                            A.jsx("br", {}),
                            "India — 627 602",
                          ],
                        }),
                      ],
                    }),
                    A.jsxs("a", {
                      href: "mailto:ashram@manjothi.com",
                      className:
                        "flex items-center gap-3 p-5 rounded-2xl border border-parchment/8 bg-parchment/[0.02] hover:border-brass/20 transition-colors group",
                      children: [
                        A.jsx("span", {
                          className:
                            "text-brass/50 group-hover:text-brass transition-colors flex-shrink-0",
                          children: A.jsx(Ec, {}),
                        }),
                        A.jsxs("div", {
                          children: [
                            A.jsx("p", {
                              className:
                                "font-sans text-[9px] uppercase tracking-[0.15em] text-parchment/30 mb-0.5",
                              children: "Email",
                            }),
                            A.jsx("p", {
                              className:
                                "font-sans text-xs text-parchment/50 group-hover:text-parchment transition-colors",
                              children: "ashram@manjothi.com",
                            }),
                          ],
                        }),
                      ],
                    }),
                    A.jsxs("a", {
                      href: "https://youtu.be/Z99LdE1f6_w",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "flex items-center gap-3 p-5 rounded-2xl border border-parchment/8 bg-parchment/[0.02] hover:border-[#FF0000]/20 transition-colors group",
                      children: [
                        A.jsx("span", {
                          className:
                            "text-[#FF0000]/40 group-hover:text-[#FF0000] transition-colors flex-shrink-0",
                          children: A.jsx(fg, {}),
                        }),
                        A.jsxs("div", {
                          children: [
                            A.jsx("p", {
                              className:
                                "font-sans text-[9px] uppercase tracking-[0.15em] text-parchment/30 mb-0.5",
                              children: "Watch",
                            }),
                            A.jsx("p", {
                              className:
                                "font-sans text-xs text-parchment/50 group-hover:text-parchment transition-colors",
                              children: "Ashram Documentary",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
          A.jsx("div", {
            className: "border-b border-parchment/8",
            children: A.jsx("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14",
              children: A.jsx(St, {
                variant: "fade-up",
                children: A.jsxs("div", {
                  className:
                    "flex flex-col md:flex-row items-center justify-between gap-8",
                  children: [
                    A.jsxs("div", {
                      children: [
                        A.jsx("h3", {
                          className: "font-serif text-2xl text-parchment mb-2",
                          children: "Stay Connected with the Ashram",
                        }),
                        A.jsx("p", {
                          className: "font-sans text-xs text-parchment/40",
                          children:
                            "Receive updates on events, teachings, and Ashram news",
                        }),
                      ],
                    }),
                    A.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row items-stretch sm:items-center gap-0 w-full md:w-auto",
                      children: [
                        A.jsxs("div", {
                          className: "relative flex-1 md:flex-none",
                          children: [
                            A.jsx("div", {
                              className:
                                "absolute left-4 top-1/2 -translate-y-1/2 text-parchment/30",
                              children: A.jsx(Ec, {}),
                            }),
                            A.jsx("input", {
                              type: "email",
                              placeholder: "Your email address",
                              className:
                                "w-full md:w-72 bg-parchment/5 border border-parchment/15 text-parchment font-sans text-sm pl-12 pr-4 py-4 placeholder:text-parchment/25 focus:outline-none focus:border-brass/50 transition-colors rounded-full sm:rounded-l-full sm:rounded-r-none",
                            }),
                          ],
                        }),
                        A.jsx("button", {
                          onClick: () =>
                            alert(
                              "Newsletter subscription coming soon! Please email ashram@manjothi.com to stay connected.",
                            ),
                          className:
                            "bg-brass text-charcoal px-6 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-parchment transition-colors duration-300 flex-shrink-0 rounded-full sm:rounded-l-none sm:rounded-r-full",
                          children: "Subscribe",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          }),
          A.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-12",
            children: [
              A.jsxs("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16",
                children: [
                  A.jsx(St, {
                    variant: "fade-up",
                    delay: 0,
                    children: A.jsxs("div", {
                      children: [
                        A.jsx("div", {
                          className: "mb-5",
                          children: A.jsx(sy, { size: 56 }),
                        }),
                        A.jsx("h4", {
                          className: "font-serif text-xl text-parchment mb-1",
                          children: "Manujothi Ashram",
                        }),
                        A.jsx("p", {
                          className:
                            "font-sans text-[10px] uppercase tracking-[0.2em] text-brass mb-6",
                          children: "Light to the Mankind · Est. 1963",
                        }),
                        A.jsx("p", {
                          className:
                            "font-sans text-xs text-parchment/40 leading-relaxed max-w-xs",
                          children:
                            "A spiritual centre dedicated to the comparative study of all scriptures, revealing the single divine voice behind all sacred texts.",
                        }),
                      ],
                    }),
                  }),
                  A.jsx(St, {
                    variant: "fade-up",
                    delay: 0.08,
                    children: A.jsxs("div", {
                      children: [
                        A.jsx("h4", {
                          className:
                            "font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brass mb-6",
                          children: "Quick Links",
                        }),
                        A.jsx("ul", {
                          className: "space-y-3",
                          children: [
                            { label: "About the Founder", href: "#about" },
                            { label: "Core Teachings", href: "#teachings" },
                            { label: "Publications", href: "#publications" },
                            { label: "Visit the Ashram", href: "#visit" },
                            { label: "Upcoming Events", href: "#events" },
                            { label: "Support the Mission", href: "#support" },
                          ].map((r) =>
                            A.jsx(
                              "li",
                              {
                                children: A.jsxs("a", {
                                  href: r.href,
                                  className:
                                    "animated-link font-sans text-xs text-parchment/50 hover:text-parchment transition-colors duration-300 flex items-center gap-2",
                                  children: [
                                    A.jsx("span", {
                                      className: "text-brass/40 text-[8px]",
                                      children: "▸",
                                    }),
                                    r.label,
                                  ],
                                }),
                              },
                              r.label,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                  A.jsx(St, {
                    variant: "fade-up",
                    delay: 0.16,
                    children: A.jsxs("div", {
                      children: [
                        A.jsx("h4", {
                          className:
                            "font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-brass mb-6",
                          children: "Associated Sites",
                        }),
                        A.jsx("ul", {
                          className: "space-y-3",
                          children: [
                            {
                              label: "daysofsonofman.org",
                              href: "https://daysofsonofman.org",
                            },
                            {
                              label: "daysofthesonofman.com",
                              href: "https://daysofthesonofman.com",
                            },
                            {
                              label: "manujothi.org",
                              href: "https://manujothi.org",
                            },
                          ].map((r) =>
                            A.jsx(
                              "li",
                              {
                                children: A.jsxs("a", {
                                  href: r.href,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "flex items-center gap-2 font-sans text-xs text-parchment/50 hover:text-parchment transition-colors duration-300",
                                  children: [
                                    A.jsx("span", {
                                      className: "text-brass/40",
                                      children: A.jsx(H3, {}),
                                    }),
                                    r.label,
                                    A.jsx("span", {
                                      className: "text-parchment/20 text-[9px]",
                                      children: "↗",
                                    }),
                                  ],
                                }),
                              },
                              r.label,
                            ),
                          ),
                        }),
                        A.jsx("div", {
                          className:
                            "flex items-center gap-3 mt-8 pt-6 border-t border-parchment/8",
                          children: [
                            {
                              href: "https://www.youtube.com/channel/UC7yXvYXVzDx-FwfgZpX07Rg",
                              icon: A.jsx(fg, {}),
                              color: "#FF0000",
                              label: "YouTube",
                            },
                            {
                              href: "https://facebook.com",
                              icon: A.jsx(U3, {}),
                              color: "#1877F2",
                              label: "Facebook",
                            },
                            {
                              href: "https://www.instagram.com/soundarya_lahari_creations?igsh=ajVveG5ldXBmczg=",
                              icon: A.jsx(G3, {}),
                              color: "#E4405F",
                              label: "Instagram",
                            },
                            {
                              href: "mailto:ashram@manjothi.com",
                              icon: A.jsx(Ec, {}),
                              color: "#B89768",
                              label: "Email",
                            },
                          ].map((r) =>
                            A.jsx(
                              "a",
                              {
                                href: r.href,
                                target: r.href.startsWith("mailto:")
                                  ? void 0
                                  : "_blank",
                                rel: r.href.startsWith("mailto:")
                                  ? void 0
                                  : "noopener noreferrer",
                                className:
                                  "w-9 h-9 rounded-full border border-parchment/15 flex items-center justify-center text-parchment/30 transition-all duration-300",
                                style: { "--hover-color": r.color },
                                "aria-label": r.label,
                                onMouseEnter: (o) => {
                                  ((o.currentTarget.style.color = r.color),
                                    (o.currentTarget.style.borderColor =
                                      r.color + "4D"));
                                },
                                onMouseLeave: (o) => {
                                  ((o.currentTarget.style.color = ""),
                                    (o.currentTarget.style.borderColor = ""));
                                },
                                children: r.icon,
                              },
                              r.label,
                            ),
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              A.jsx(St, {
                variant: "fade-up",
                delay: 0.3,
                children: A.jsx("div", {
                  className: "border-t border-parchment/8 pt-8 pb-4",
                  children: A.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row justify-between items-center gap-6",
                    children: [
                      A.jsxs("div", {
                        className:
                          "flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[11px] text-parchment/25",
                        children: [
                          A.jsxs("p", {
                            children: [
                              "© ",
                              a,
                              " Manujothi Ashram. All rights reserved.",
                            ],
                          }),
                          A.jsxs("div", {
                            className: "flex gap-4",
                            children: [
                              A.jsx("span", {
                                className:
                                  "hover:text-parchment/40 cursor-default transition-colors",
                                children: "Privacy Policy",
                              }),
                              A.jsx("span", {
                                className: "text-parchment/10",
                                children: "|",
                              }),
                              A.jsx("span", {
                                className:
                                  "hover:text-parchment/40 cursor-default transition-colors",
                                children: "Terms of Use",
                              }),
                            ],
                          }),
                        ],
                      }),
                      A.jsxs("div", {
                        className: "flex items-center gap-6",
                        children: [
                          A.jsxs("p", {
                            className:
                              "flex items-center gap-1.5 text-[11px] text-parchment/20",
                            children: [
                              "Made with ",
                              A.jsx("span", {
                                className: "text-brass/50",
                                children: A.jsx(Y3, {}),
                              }),
                              " for the Light",
                            ],
                          }),
                          A.jsx("button", {
                            onClick: i,
                            className:
                              "w-10 h-10 rounded-full border border-parchment/15 flex items-center justify-center text-parchment/30 hover:text-brass hover:border-brass/30 transition-all duration-300",
                            "aria-label": "Back to top",
                            children: A.jsx(k3, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function q3() {
  const a = nt.useRef(null),
    [i, r] = nt.useState(!1),
    o = nt.useCallback((c) => {
      r(c);
    }, []);
  return (
    nt.useEffect(() => {
      let c = !1;
      const l = () => {
        if (c) return;
        const f = window.scrollY,
          m = document.documentElement.scrollHeight,
          p = window.innerHeight;
        f + p >= m - 5 &&
          ((c = !0),
          setTimeout(() => {
            (window.scrollTo({ top: 0, behavior: "smooth" }),
              setTimeout(() => {
                c = !1;
              }, 1500));
          }, 600));
      };
      return (
        window.addEventListener("scroll", l, { passive: !0 }),
        () => window.removeEventListener("scroll", l)
      );
    }, []),
    A.jsxs("div", {
      className:
        "min-h-screen bg-parchment text-charcoal font-sans selection:bg-brass/30 selection:text-charcoal",
      children: [
        A.jsx(WA, { onMenuToggle: o }),
        A.jsxs("div", {
          style: {
            filter: i ? "blur(8px)" : "none",
            transition: "filter 0.4s ease",
            pointerEvents: i ? "none" : "auto",
          },
          children: [
            A.jsxs("main", {
              "aria-label": "Main content",
              children: [
                A.jsx(s3, {}),
                A.jsx(IA, {}),
                A.jsx(l3, {}),
                A.jsx(u3, {}),
                A.jsx(b3, {}),
                A.jsx(T3, {}),
                A.jsx(j3, {}),
                A.jsx(D3, {}),
              ],
            }),
            A.jsx(X3, {}),
          ],
        }),
        A.jsx("div", { ref: a, className: "h-1" }),
      ],
    })
  );
}
B1.createRoot(document.getElementById("root")).render(
  A.jsx(nt.StrictMode, { children: A.jsx(q3, {}) }),
);
