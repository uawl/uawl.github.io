var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node_modules/preact/dist/preact.module.js
function w(n2, l2) {
  for (var t2 in l2)
    n2[t2] = l2[t2];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l2, t2, u2) {
  var i2, r2, o2, e2 = {};
  for (o2 in t2)
    o2 == "key" ? i2 = t2[o2] : o2 == "ref" ? r2 = t2[o2] : e2[o2] = t2[o2];
  if (arguments.length > 2 && (e2.children = arguments.length > 3 ? n.call(arguments, 2) : u2), typeof l2 == "function" && l2.defaultProps != null)
    for (o2 in l2.defaultProps)
      e2[o2] === undefined && (e2[o2] = l2.defaultProps[o2]);
  return m(l2, e2, i2, r2, null);
}
function m(n2, u2, i2, r2, o2) {
  var e2 = { type: n2, props: u2, key: i2, ref: r2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: undefined, __v: o2 == null ? ++t : o2, __i: -1, __u: 0 };
  return o2 == null && l.vnode != null && l.vnode(e2), e2;
}
function k(n2) {
  return n2.children;
}
function x(n2, l2) {
  this.props = n2, this.context = l2;
}
function S(n2, l2) {
  if (l2 == null)
    return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var t2;l2 < n2.__k.length; l2++)
    if ((t2 = n2.__k[l2]) != null && t2.__e != null)
      return t2.__e;
  return typeof n2.type == "function" ? S(n2) : null;
}
function C(n2) {
  var l2, t2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0;l2 < n2.__k.length; l2++)
      if ((t2 = n2.__k[l2]) != null && t2.__e != null) {
        n2.__e = n2.__c.base = t2.__e;
        break;
      }
    return C(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n2, t2, u2, r2, o2, f2, c2, s2 = 1;i.length; )
    i.length > s2 && i.sort(e), n2 = i.shift(), s2 = i.length, n2.__d && (u2 = undefined, o2 = (r2 = (t2 = n2).__v).__e, f2 = [], c2 = [], t2.__P && ((u2 = w({}, r2)).__v = r2.__v + 1, l.vnode && l.vnode(u2), O(t2.__P, u2, r2, t2.__n, t2.__P.namespaceURI, 32 & r2.__u ? [o2] : null, f2, o2 == null ? S(r2) : o2, !!(32 & r2.__u), c2), u2.__v = r2.__v, u2.__.__k[u2.__i] = u2, z(f2, u2, c2), u2.__e != o2 && C(u2)));
  $.__r = 0;
}
function I(n2, l2, t2, u2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, y2, d2, w2, g2, _2 = u2 && u2.__k || v, m2 = l2.length;
  for (f2 = P(t2, l2, _2, f2, m2), a2 = 0;a2 < m2; a2++)
    (y2 = t2.__k[a2]) != null && (h2 = y2.__i === -1 ? p : _2[y2.__i] || p, y2.__i = a2, g2 = O(n2, y2, h2, i2, r2, o2, e2, f2, c2, s2), d2 = y2.__e, y2.ref && h2.ref != y2.ref && (h2.ref && q(h2.ref, null, y2), s2.push(y2.ref, y2.__c || d2, y2)), w2 == null && d2 != null && (w2 = d2), 4 & y2.__u || h2.__k === y2.__k ? f2 = A(y2, f2, n2) : typeof y2.type == "function" && g2 !== undefined ? f2 = g2 : d2 && (f2 = d2.nextSibling), y2.__u &= -7);
  return t2.__e = w2, f2;
}
function P(n2, l2, t2, u2, i2) {
  var r2, o2, e2, f2, c2, s2 = t2.length, a2 = s2, h2 = 0;
  for (n2.__k = new Array(i2), r2 = 0;r2 < i2; r2++)
    (o2 = l2[r2]) != null && typeof o2 != "boolean" && typeof o2 != "function" ? (f2 = r2 + h2, (o2 = n2.__k[r2] = typeof o2 == "string" || typeof o2 == "number" || typeof o2 == "bigint" || o2.constructor == String ? m(null, o2, null, null, null) : d(o2) ? m(k, { children: o2 }, null, null, null) : o2.constructor === undefined && o2.__b > 0 ? m(o2.type, o2.props, o2.key, o2.ref ? o2.ref : null, o2.__v) : o2).__ = n2, o2.__b = n2.__b + 1, e2 = null, (c2 = o2.__i = L(o2, t2, f2, a2)) !== -1 && (a2--, (e2 = t2[c2]) && (e2.__u |= 2)), e2 == null || e2.__v === null ? (c2 == -1 && (i2 > s2 ? h2-- : i2 < s2 && h2++), typeof o2.type != "function" && (o2.__u |= 4)) : c2 != f2 && (c2 == f2 - 1 ? h2-- : c2 == f2 + 1 ? h2++ : (c2 > f2 ? h2-- : h2++, o2.__u |= 4))) : n2.__k[r2] = null;
  if (a2)
    for (r2 = 0;r2 < s2; r2++)
      (e2 = t2[r2]) != null && (2 & e2.__u) == 0 && (e2.__e == u2 && (u2 = S(e2)), B(e2, e2));
  return u2;
}
function A(n2, l2, t2) {
  var u2, i2;
  if (typeof n2.type == "function") {
    for (u2 = n2.__k, i2 = 0;u2 && i2 < u2.length; i2++)
      u2[i2] && (u2[i2].__ = n2, l2 = A(u2[i2], l2, t2));
    return l2;
  }
  n2.__e != l2 && (l2 && n2.type && !t2.contains(l2) && (l2 = S(n2)), t2.insertBefore(n2.__e, l2 || null), l2 = n2.__e);
  do {
    l2 = l2 && l2.nextSibling;
  } while (l2 != null && l2.nodeType == 8);
  return l2;
}
function L(n2, l2, t2, u2) {
  var i2, r2, o2 = n2.key, e2 = n2.type, f2 = l2[t2];
  if (f2 === null && n2.key == null || f2 && o2 == f2.key && e2 === f2.type && (2 & f2.__u) == 0)
    return t2;
  if (u2 > (f2 != null && (2 & f2.__u) == 0 ? 1 : 0))
    for (i2 = t2 - 1, r2 = t2 + 1;i2 >= 0 || r2 < l2.length; ) {
      if (i2 >= 0) {
        if ((f2 = l2[i2]) && (2 & f2.__u) == 0 && o2 == f2.key && e2 === f2.type)
          return i2;
        i2--;
      }
      if (r2 < l2.length) {
        if ((f2 = l2[r2]) && (2 & f2.__u) == 0 && o2 == f2.key && e2 === f2.type)
          return r2;
        r2++;
      }
    }
  return -1;
}
function T(n2, l2, t2) {
  l2[0] == "-" ? n2.setProperty(l2, t2 == null ? "" : t2) : n2[l2] = t2 == null ? "" : typeof t2 != "number" || y.test(l2) ? t2 : t2 + "px";
}
function j(n2, l2, t2, u2, i2) {
  var r2;
  n:
    if (l2 == "style")
      if (typeof t2 == "string")
        n2.style.cssText = t2;
      else {
        if (typeof u2 == "string" && (n2.style.cssText = u2 = ""), u2)
          for (l2 in u2)
            t2 && l2 in t2 || T(n2.style, l2, "");
        if (t2)
          for (l2 in t2)
            u2 && t2[l2] === u2[l2] || T(n2.style, l2, t2[l2]);
      }
    else if (l2[0] == "o" && l2[1] == "n")
      r2 = l2 != (l2 = l2.replace(f, "$1")), l2 = l2.toLowerCase() in n2 || l2 == "onFocusOut" || l2 == "onFocusIn" ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = t2, t2 ? u2 ? t2.t = u2.t : (t2.t = c, n2.addEventListener(l2, r2 ? a : s, r2)) : n2.removeEventListener(l2, r2 ? a : s, r2);
    else {
      if (i2 == "http://www.w3.org/2000/svg")
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (l2 != "width" && l2 != "height" && l2 != "href" && l2 != "list" && l2 != "form" && l2 != "tabIndex" && l2 != "download" && l2 != "rowSpan" && l2 != "colSpan" && l2 != "role" && l2 != "popover" && l2 in n2)
        try {
          n2[l2] = t2 == null ? "" : t2;
          break n;
        } catch (n3) {}
      typeof t2 == "function" || (t2 == null || t2 === false && l2[4] != "-" ? n2.removeAttribute(l2) : n2.setAttribute(l2, l2 == "popover" && t2 == 1 ? "" : t2));
    }
}
function F(n2) {
  return function(t2) {
    if (this.l) {
      var u2 = this.l[t2.type + n2];
      if (t2.u == null)
        t2.u = c++;
      else if (t2.u < u2.t)
        return;
      return u2(l.event ? l.event(t2) : t2);
    }
  };
}
function O(n2, t2, u2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, p2, v2, y2, _2, m2, b, S2, C2, M2, $2, P2, A2, H, L2, T2, j2 = t2.type;
  if (t2.constructor !== undefined)
    return null;
  128 & u2.__u && (c2 = !!(32 & u2.__u), o2 = [f2 = t2.__e = u2.__e]), (a2 = l.__b) && a2(t2);
  n:
    if (typeof j2 == "function")
      try {
        if (b = t2.props, S2 = "prototype" in j2 && j2.prototype.render, C2 = (a2 = j2.contextType) && i2[a2.__c], M2 = a2 ? C2 ? C2.props.value : a2.__ : i2, u2.__c ? m2 = (h2 = t2.__c = u2.__c).__ = h2.__E : (S2 ? t2.__c = h2 = new j2(b, M2) : (t2.__c = h2 = new x(b, M2), h2.constructor = j2, h2.render = D), C2 && C2.sub(h2), h2.props = b, h2.state || (h2.state = {}), h2.context = M2, h2.__n = i2, p2 = h2.__d = true, h2.__h = [], h2._sb = []), S2 && h2.__s == null && (h2.__s = h2.state), S2 && j2.getDerivedStateFromProps != null && (h2.__s == h2.state && (h2.__s = w({}, h2.__s)), w(h2.__s, j2.getDerivedStateFromProps(b, h2.__s))), v2 = h2.props, y2 = h2.state, h2.__v = t2, p2)
          S2 && j2.getDerivedStateFromProps == null && h2.componentWillMount != null && h2.componentWillMount(), S2 && h2.componentDidMount != null && h2.__h.push(h2.componentDidMount);
        else {
          if (S2 && j2.getDerivedStateFromProps == null && b !== v2 && h2.componentWillReceiveProps != null && h2.componentWillReceiveProps(b, M2), !h2.__e && (h2.shouldComponentUpdate != null && h2.shouldComponentUpdate(b, h2.__s, M2) === false || t2.__v == u2.__v)) {
            for (t2.__v != u2.__v && (h2.props = b, h2.state = h2.__s, h2.__d = false), t2.__e = u2.__e, t2.__k = u2.__k, t2.__k.some(function(n3) {
              n3 && (n3.__ = t2);
            }), $2 = 0;$2 < h2._sb.length; $2++)
              h2.__h.push(h2._sb[$2]);
            h2._sb = [], h2.__h.length && e2.push(h2);
            break n;
          }
          h2.componentWillUpdate != null && h2.componentWillUpdate(b, h2.__s, M2), S2 && h2.componentDidUpdate != null && h2.__h.push(function() {
            h2.componentDidUpdate(v2, y2, _2);
          });
        }
        if (h2.context = M2, h2.props = b, h2.__P = n2, h2.__e = false, P2 = l.__r, A2 = 0, S2) {
          for (h2.state = h2.__s, h2.__d = false, P2 && P2(t2), a2 = h2.render(h2.props, h2.state, h2.context), H = 0;H < h2._sb.length; H++)
            h2.__h.push(h2._sb[H]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, P2 && P2(t2), a2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++A2 < 25);
        h2.state = h2.__s, h2.getChildContext != null && (i2 = w(w({}, i2), h2.getChildContext())), S2 && !p2 && h2.getSnapshotBeforeUpdate != null && (_2 = h2.getSnapshotBeforeUpdate(v2, y2)), L2 = a2, a2 != null && a2.type === k && a2.key == null && (L2 = N(a2.props.children)), f2 = I(n2, d(L2) ? L2 : [L2], t2, u2, i2, r2, o2, e2, f2, c2, s2), h2.base = t2.__e, t2.__u &= -161, h2.__h.length && e2.push(h2), m2 && (h2.__E = h2.__ = null);
      } catch (n3) {
        if (t2.__v = null, c2 || o2 != null)
          if (n3.then) {
            for (t2.__u |= c2 ? 160 : 128;f2 && f2.nodeType == 8 && f2.nextSibling; )
              f2 = f2.nextSibling;
            o2[o2.indexOf(f2)] = null, t2.__e = f2;
          } else
            for (T2 = o2.length;T2--; )
              g(o2[T2]);
        else
          t2.__e = u2.__e, t2.__k = u2.__k;
        l.__e(n3, t2, u2);
      }
    else
      o2 == null && t2.__v == u2.__v ? (t2.__k = u2.__k, t2.__e = u2.__e) : f2 = t2.__e = V(u2.__e, t2, u2, i2, r2, o2, e2, c2, s2);
  return (a2 = l.diffed) && a2(t2), 128 & t2.__u ? undefined : f2;
}
function z(n2, t2, u2) {
  for (var i2 = 0;i2 < u2.length; i2++)
    q(u2[i2], u2[++i2], u2[++i2]);
  l.__c && l.__c(t2, n2), n2.some(function(t3) {
    try {
      n2 = t3.__h, t3.__h = [], n2.some(function(n3) {
        n3.call(t3);
      });
    } catch (n3) {
      l.__e(n3, t3.__v);
    }
  });
}
function N(n2) {
  return typeof n2 != "object" || n2 == null ? n2 : d(n2) ? n2.map(N) : w({}, n2);
}
function V(t2, u2, i2, r2, o2, e2, f2, c2, s2) {
  var a2, h2, v2, y2, w2, _2, m2, b = i2.props, k2 = u2.props, x2 = u2.type;
  if (x2 == "svg" ? o2 = "http://www.w3.org/2000/svg" : x2 == "math" ? o2 = "http://www.w3.org/1998/Math/MathML" : o2 || (o2 = "http://www.w3.org/1999/xhtml"), e2 != null) {
    for (a2 = 0;a2 < e2.length; a2++)
      if ((w2 = e2[a2]) && "setAttribute" in w2 == !!x2 && (x2 ? w2.localName == x2 : w2.nodeType == 3)) {
        t2 = w2, e2[a2] = null;
        break;
      }
  }
  if (t2 == null) {
    if (x2 == null)
      return document.createTextNode(k2);
    t2 = document.createElementNS(o2, x2, k2.is && k2), c2 && (l.__m && l.__m(u2, e2), c2 = false), e2 = null;
  }
  if (x2 === null)
    b === k2 || c2 && t2.data === k2 || (t2.data = k2);
  else {
    if (e2 = e2 && n.call(t2.childNodes), b = i2.props || p, !c2 && e2 != null)
      for (b = {}, a2 = 0;a2 < t2.attributes.length; a2++)
        b[(w2 = t2.attributes[a2]).name] = w2.value;
    for (a2 in b)
      if (w2 = b[a2], a2 == "children")
        ;
      else if (a2 == "dangerouslySetInnerHTML")
        v2 = w2;
      else if (!(a2 in k2)) {
        if (a2 == "value" && "defaultValue" in k2 || a2 == "checked" && "defaultChecked" in k2)
          continue;
        j(t2, a2, null, w2, o2);
      }
    for (a2 in k2)
      w2 = k2[a2], a2 == "children" ? y2 = w2 : a2 == "dangerouslySetInnerHTML" ? h2 = w2 : a2 == "value" ? _2 = w2 : a2 == "checked" ? m2 = w2 : c2 && typeof w2 != "function" || b[a2] === w2 || j(t2, a2, w2, b[a2], o2);
    if (h2)
      c2 || v2 && (h2.__html === v2.__html || h2.__html === t2.innerHTML) || (t2.innerHTML = h2.__html), u2.__k = [];
    else if (v2 && (t2.innerHTML = ""), I(u2.type === "template" ? t2.content : t2, d(y2) ? y2 : [y2], u2, i2, r2, x2 == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o2, e2, f2, e2 ? e2[0] : i2.__k && S(i2, 0), c2, s2), e2 != null)
      for (a2 = e2.length;a2--; )
        g(e2[a2]);
    c2 || (a2 = "value", x2 == "progress" && _2 == null ? t2.removeAttribute("value") : _2 !== undefined && (_2 !== t2[a2] || x2 == "progress" && !_2 || x2 == "option" && _2 !== b[a2]) && j(t2, a2, _2, b[a2], o2), a2 = "checked", m2 !== undefined && m2 !== t2[a2] && j(t2, a2, m2, b[a2], o2));
  }
  return t2;
}
function q(n2, t2, u2) {
  try {
    if (typeof n2 == "function") {
      var i2 = typeof n2.__u == "function";
      i2 && n2.__u(), i2 && t2 == null || (n2.__u = n2(t2));
    } else
      n2.current = t2;
  } catch (n3) {
    l.__e(n3, u2);
  }
}
function B(n2, t2, u2) {
  var i2, r2;
  if (l.unmount && l.unmount(n2), (i2 = n2.ref) && (i2.current && i2.current !== n2.__e || q(i2, null, t2)), (i2 = n2.__c) != null) {
    if (i2.componentWillUnmount)
      try {
        i2.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, t2);
      }
    i2.base = i2.__P = null;
  }
  if (i2 = n2.__k)
    for (r2 = 0;r2 < i2.length; r2++)
      i2[r2] && B(i2[r2], t2, u2 || typeof n2.type != "function");
  u2 || g(n2.__e), n2.__c = n2.__ = n2.__e = undefined;
}
function D(n2, l2, t2) {
  return this.constructor(n2, t2);
}
function E(t2, u2, i2) {
  var r2, o2, e2, f2;
  u2 == document && (u2 = document.documentElement), l.__ && l.__(t2, u2), o2 = (r2 = typeof i2 == "function") ? null : i2 && i2.__k || u2.__k, e2 = [], f2 = [], O(u2, t2 = (!r2 && i2 || u2).__k = _(k, null, [t2]), o2 || p, p, u2.namespaceURI, !r2 && i2 ? [i2] : o2 ? null : u2.firstChild ? n.call(u2.childNodes) : null, e2, !r2 && i2 ? i2 : o2 ? o2.__e : u2.firstChild, r2, f2), z(e2, t2, f2);
}
function G(n2, l2) {
  E(n2, l2, G);
}
var n, l, t, u, i, r, o, e, f, c, s, a, h, p, v, y, d;
var init_preact_module = __esm(() => {
  p = {};
  v = [];
  y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  d = Array.isArray;
  n = v.slice, l = { __e: function(n2, l2, t2, u2) {
    for (var i2, r2, o2;l2 = l2.__; )
      if ((i2 = l2.__c) && !i2.__)
        try {
          if ((r2 = i2.constructor) && r2.getDerivedStateFromError != null && (i2.setState(r2.getDerivedStateFromError(n2)), o2 = i2.__d), i2.componentDidCatch != null && (i2.componentDidCatch(n2, u2 || {}), o2 = i2.__d), o2)
            return i2.__E = i2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, t = 0, u = function(n2) {
    return n2 != null && n2.constructor == null;
  }, x.prototype.setState = function(n2, l2) {
    var t2;
    t2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), typeof n2 == "function" && (n2 = n2(w({}, t2), this.props)), n2 && w(t2, n2), n2 != null && this.__v && (l2 && this._sb.push(l2), M(this));
  }, x.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
  }, x.prototype.render = k, i = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;
});

// node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
function u2(e2, t2, n2, o2, i3, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2)
    for (c2 in p2 = {}, t2)
      c2 == "ref" ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: undefined, __v: --f2, __i: -1, __u: 0, __source: i3, __self: u3 };
  if (typeof e2 == "function" && (a2 = e2.defaultProps))
    for (c2 in a2)
      p2[c2] === undefined && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}
var f2 = 0, i2;
var init_jsxRuntime_module = __esm(() => {
  init_preact_module();
  init_preact_module();
  i2 = Array.isArray;
});

// node_modules/preact/hooks/dist/hooks.module.js
function p2(n2, t3) {
  c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
  var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
}
function A2(n2) {
  return o2 = 5, T2(function() {
    return { current: n2 };
  }, []);
}
function T2(n2, r3) {
  var u4 = p2(t2++, 7);
  return C2(u4.__H, r3) && (u4.__ = n2(), u4.__H = r3, u4.__h = n2), u4.__;
}
function j2() {
  for (var n2;n2 = f3.shift(); )
    if (n2.__P && n2.__H)
      try {
        n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
      } catch (t3) {
        n2.__H.__h = [], c2.__e(t3, n2.__v);
      }
}
function w2(n2) {
  var t3, r3 = function() {
    clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u4 = setTimeout(r3, 100);
  k2 && (t3 = requestAnimationFrame(r3));
}
function z2(n2) {
  var t3 = r2, u4 = n2.__c;
  typeof u4 == "function" && (n2.__c = undefined, u4()), r2 = t3;
}
function B2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function C2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
var t2, r2, u3, i3, o2 = 0, f3, c2, e2, a2, v2, l2, m2, s2, k2;
var init_hooks_module = __esm(() => {
  init_preact_module();
  f3 = [];
  c2 = l;
  e2 = c2.__b;
  a2 = c2.__r;
  v2 = c2.diffed;
  l2 = c2.__c;
  m2 = c2.unmount;
  s2 = c2.__;
  c2.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, c2.__ = function(n2, t3) {
    n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
  }, c2.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i4 = (r2 = n2.__c).__H;
    i4 && (u3 === r2 ? (i4.__h = [], r2.__h = [], i4.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = undefined;
    })) : (i4.__h.forEach(z2), i4.__h.forEach(B2), i4.__h = [], t2 = 0)), u3 = r2;
  }, c2.diffed = function(n2) {
    v2 && v2(n2);
    var t3 = n2.__c;
    t3 && t3.__H && (t3.__H.__h.length && (f3.push(t3) !== 1 && i3 === c2.requestAnimationFrame || ((i3 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
      n3.u && (n3.__H = n3.u), n3.u = undefined;
    })), u3 = r2 = null;
  }, c2.__c = function(n2, t3) {
    t3.some(function(n3) {
      try {
        n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
          return !n4.__ || B2(n4);
        });
      } catch (r3) {
        t3.some(function(n4) {
          n4.__h && (n4.__h = []);
        }), t3 = [], c2.__e(r3, n3.__v);
      }
    }), l2 && l2(n2, t3);
  }, c2.unmount = function(n2) {
    m2 && m2(n2);
    var t3, r3 = n2.__c;
    r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
      try {
        z2(n3);
      } catch (n4) {
        t3 = n4;
      }
    }), r3.__H = undefined, t3 && c2.__e(t3, r3.__v));
  };
  k2 = typeof requestAnimationFrame == "function";
});

// node_modules/@preact/signals-core/dist/signals-core.module.js
function t3() {
  if (!(s3 > 1)) {
    var i5, t4 = false;
    while (h2 !== undefined) {
      var r3 = h2;
      h2 = undefined;
      f4++;
      while (r3 !== undefined) {
        var o3 = r3.o;
        r3.o = undefined;
        r3.f &= -3;
        if (!(8 & r3.f) && c3(r3))
          try {
            r3.c();
          } catch (r4) {
            if (!t4) {
              i5 = r4;
              t4 = true;
            }
          }
        r3 = o3;
      }
    }
    f4 = 0;
    s3--;
    if (t4)
      throw i5;
  } else
    s3--;
}
function r3(i5) {
  if (s3 > 0)
    return i5();
  s3++;
  try {
    return i5();
  } finally {
    t3();
  }
}
function e3(i5) {
  if (o3 !== undefined) {
    var t4 = i5.n;
    if (t4 === undefined || t4.t !== o3) {
      t4 = { i: 0, S: i5, p: o3.s, n: undefined, t: o3, e: undefined, x: undefined, r: t4 };
      if (o3.s !== undefined)
        o3.s.n = t4;
      o3.s = t4;
      i5.n = t4;
      if (32 & o3.f)
        i5.S(t4);
      return t4;
    } else if (t4.i === -1) {
      t4.i = 0;
      if (t4.n !== undefined) {
        t4.n.p = t4.p;
        if (t4.p !== undefined)
          t4.p.n = t4.n;
        t4.p = o3.s;
        t4.n = undefined;
        o3.s.n = t4;
        o3.s = t4;
      }
      return t4;
    }
  }
}
function u4(i5) {
  this.v = i5;
  this.i = 0;
  this.n = undefined;
  this.t = undefined;
}
function d2(i5) {
  return new u4(i5);
}
function c3(i5) {
  for (var t4 = i5.s;t4 !== undefined; t4 = t4.n)
    if (t4.S.i !== t4.i || !t4.S.h() || t4.S.i !== t4.i)
      return true;
  return false;
}
function a3(i5) {
  for (var t4 = i5.s;t4 !== undefined; t4 = t4.n) {
    var r4 = t4.S.n;
    if (r4 !== undefined)
      t4.r = r4;
    t4.S.n = t4;
    t4.i = -1;
    if (t4.n === undefined) {
      i5.s = t4;
      break;
    }
  }
}
function l3(i5) {
  var t4 = i5.s, r4 = undefined;
  while (t4 !== undefined) {
    var o4 = t4.p;
    if (t4.i === -1) {
      t4.S.U(t4);
      if (o4 !== undefined)
        o4.n = t4.n;
      if (t4.n !== undefined)
        t4.n.p = o4;
    } else
      r4 = t4;
    t4.S.n = t4.r;
    if (t4.r !== undefined)
      t4.r = undefined;
    t4 = o4;
  }
  i5.s = r4;
}
function y2(i5) {
  u4.call(this, undefined);
  this.x = i5;
  this.s = undefined;
  this.g = v3 - 1;
  this.f = 4;
}
function w3(i5) {
  return new y2(i5);
}
function _2(i5) {
  var r4 = i5.u;
  i5.u = undefined;
  if (typeof r4 == "function") {
    s3++;
    var n2 = o3;
    o3 = undefined;
    try {
      r4();
    } catch (t4) {
      i5.f &= -2;
      i5.f |= 8;
      g2(i5);
      throw t4;
    } finally {
      o3 = n2;
      t3();
    }
  }
}
function g2(i5) {
  for (var t4 = i5.s;t4 !== undefined; t4 = t4.n)
    t4.S.U(t4);
  i5.x = undefined;
  i5.s = undefined;
  _2(i5);
}
function p3(i5) {
  if (o3 !== this)
    throw new Error("Out-of-order effect");
  l3(this);
  o3 = i5;
  this.f &= -2;
  if (8 & this.f)
    g2(this);
  t3();
}
function b(i5) {
  this.x = i5;
  this.u = undefined;
  this.s = undefined;
  this.o = undefined;
  this.f = 32;
}
function E2(i5) {
  var t4 = new b(i5);
  try {
    t4.c();
  } catch (i6) {
    t4.d();
    throw i6;
  }
  return t4.d.bind(t4);
}
var i4, o3 = undefined, h2 = undefined, s3 = 0, f4 = 0, v3 = 0;
var init_signals_core_module = __esm(() => {
  i4 = Symbol.for("preact-signals");
  u4.prototype.brand = i4;
  u4.prototype.h = function() {
    return true;
  };
  u4.prototype.S = function(i5) {
    if (this.t !== i5 && i5.e === undefined) {
      i5.x = this.t;
      if (this.t !== undefined)
        this.t.e = i5;
      this.t = i5;
    }
  };
  u4.prototype.U = function(i5) {
    if (this.t !== undefined) {
      var { e: t4, x: r4 } = i5;
      if (t4 !== undefined) {
        t4.x = r4;
        i5.e = undefined;
      }
      if (r4 !== undefined) {
        r4.e = t4;
        i5.x = undefined;
      }
      if (i5 === this.t)
        this.t = r4;
    }
  };
  u4.prototype.subscribe = function(i5) {
    var t4 = this;
    return E2(function() {
      var r4 = t4.value, n2 = o3;
      o3 = undefined;
      try {
        i5(r4);
      } finally {
        o3 = n2;
      }
    });
  };
  u4.prototype.valueOf = function() {
    return this.value;
  };
  u4.prototype.toString = function() {
    return this.value + "";
  };
  u4.prototype.toJSON = function() {
    return this.value;
  };
  u4.prototype.peek = function() {
    var i5 = o3;
    o3 = undefined;
    try {
      return this.value;
    } finally {
      o3 = i5;
    }
  };
  Object.defineProperty(u4.prototype, "value", { get: function() {
    var i5 = e3(this);
    if (i5 !== undefined)
      i5.i = this.i;
    return this.v;
  }, set: function(i5) {
    if (i5 !== this.v) {
      if (f4 > 100)
        throw new Error("Cycle detected");
      this.v = i5;
      this.i++;
      v3++;
      s3++;
      try {
        for (var r4 = this.t;r4 !== undefined; r4 = r4.x)
          r4.t.N();
      } finally {
        t3();
      }
    }
  } });
  (y2.prototype = new u4).h = function() {
    this.f &= -3;
    if (1 & this.f)
      return false;
    if ((36 & this.f) == 32)
      return true;
    this.f &= -5;
    if (this.g === v3)
      return true;
    this.g = v3;
    this.f |= 1;
    if (this.i > 0 && !c3(this)) {
      this.f &= -2;
      return true;
    }
    var i5 = o3;
    try {
      a3(this);
      o3 = this;
      var t4 = this.x();
      if (16 & this.f || this.v !== t4 || this.i === 0) {
        this.v = t4;
        this.f &= -17;
        this.i++;
      }
    } catch (i6) {
      this.v = i6;
      this.f |= 16;
      this.i++;
    }
    o3 = i5;
    l3(this);
    this.f &= -2;
    return true;
  };
  y2.prototype.S = function(i5) {
    if (this.t === undefined) {
      this.f |= 36;
      for (var t4 = this.s;t4 !== undefined; t4 = t4.n)
        t4.S.S(t4);
    }
    u4.prototype.S.call(this, i5);
  };
  y2.prototype.U = function(i5) {
    if (this.t !== undefined) {
      u4.prototype.U.call(this, i5);
      if (this.t === undefined) {
        this.f &= -33;
        for (var t4 = this.s;t4 !== undefined; t4 = t4.n)
          t4.S.U(t4);
      }
    }
  };
  y2.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 6;
      for (var i5 = this.t;i5 !== undefined; i5 = i5.x)
        i5.t.N();
    }
  };
  Object.defineProperty(y2.prototype, "value", { get: function() {
    if (1 & this.f)
      throw new Error("Cycle detected");
    var i5 = e3(this);
    this.h();
    if (i5 !== undefined)
      i5.i = this.i;
    if (16 & this.f)
      throw this.v;
    return this.v;
  } });
  b.prototype.c = function() {
    var i5 = this.S();
    try {
      if (8 & this.f)
        return;
      if (this.x === undefined)
        return;
      var t4 = this.x();
      if (typeof t4 == "function")
        this.u = t4;
    } finally {
      i5();
    }
  };
  b.prototype.S = function() {
    if (1 & this.f)
      throw new Error("Cycle detected");
    this.f |= 1;
    this.f &= -9;
    _2(this);
    a3(this);
    s3++;
    var i5 = o3;
    o3 = this;
    return p3.bind(this, i5);
  };
  b.prototype.N = function() {
    if (!(2 & this.f)) {
      this.f |= 2;
      this.o = h2;
      h2 = this;
    }
  };
  b.prototype.d = function() {
    this.f |= 8;
    if (!(1 & this.f))
      g2(this);
  };
});

// node_modules/@preact/signals/dist/signals.module.js
function m3(i5, t4) {
  l[i5] = t4.bind(null, l[i5] || function() {});
}
function _3(i5) {
  if (l4)
    l4();
  l4 = i5 && i5.S();
}
function g3(i5) {
  var n2 = this, f5 = i5.data, o4 = useSignal(f5);
  o4.value = f5;
  var u5 = T2(function() {
    var i6 = n2, r4 = n2.__v;
    while (r4 = r4.__)
      if (r4.__c) {
        r4.__c.__$f |= 4;
        break;
      }
    var f6 = w3(function() {
      var i7 = o4.value.value;
      return i7 === 0 ? 0 : i7 === true ? "" : i7 || "";
    }), u6 = w3(function() {
      return !u(f6.value);
    }), c5 = E2(function() {
      this.N = F2;
      if (u6.value) {
        var n3 = f6.value;
        if (i6.__v && i6.__v.__e && i6.__v.__e.nodeType === 3)
          i6.__v.__e.data = n3;
      }
    }), v5 = n2.__$u.d;
    n2.__$u.d = function() {
      c5();
      v5.call(this);
    };
    return [u6, f6];
  }, []), c4 = u5[0], v4 = u5[1];
  return c4.value ? v4.peek() : v4.value;
}
function b2(i5, n2, t4, r4) {
  var f5 = n2 in i5 && i5.ownerSVGElement === undefined, o4 = d2(t4);
  return { o: function(i6, n3) {
    o4.value = i6;
    r4 = n3;
  }, d: E2(function() {
    this.N = F2;
    var t5 = o4.value.value;
    if (r4[n2] !== t5) {
      r4[n2] = t5;
      if (f5)
        i5[n2] = t5;
      else if (t5)
        i5.setAttribute(n2, t5);
      else
        i5.removeAttribute(n2);
    }
  }) };
}
function useSignal(i5) {
  return T2(function() {
    return d2(i5);
  }, []);
}
function useComputed(i5) {
  var n2 = A2(i5);
  n2.current = i5;
  h3.__$f |= 4;
  return T2(function() {
    return w3(function() {
      return n2.current();
    });
  }, []);
}
function A3() {
  r3(function() {
    var i5;
    while (i5 = p4.shift())
      s4.call(i5);
  });
}
function F2() {
  if (p4.push(this) === 1)
    (l.requestAnimationFrame || k3)(A3);
}
var s4, h3, l4, p4, k3 = function(i5) {
  queueMicrotask(function() {
    queueMicrotask(i5);
  });
};
var init_signals_module = __esm(() => {
  init_preact_module();
  init_hooks_module();
  init_signals_core_module();
  p4 = [];
  E2(function() {
    s4 = this.N;
  })();
  g3.displayName = "_st";
  Object.defineProperties(u4.prototype, { constructor: { configurable: true, value: undefined }, type: { configurable: true, value: g3 }, props: { configurable: true, get: function() {
    return { data: this };
  } }, __b: { configurable: true, value: 1 } });
  m3("__b", function(i5, n2) {
    if (typeof n2.type == "string") {
      var t4, r4 = n2.props;
      for (var f5 in r4)
        if (f5 !== "children") {
          var o4 = r4[f5];
          if (o4 instanceof u4) {
            if (!t4)
              n2.__np = t4 = {};
            t4[f5] = o4;
            r4[f5] = o4.peek();
          }
        }
    }
    i5(n2);
  });
  m3("__r", function(i5, n2) {
    _3();
    var t4, r4 = n2.__c;
    if (r4) {
      r4.__$f &= -2;
      if ((t4 = r4.__$u) === undefined)
        r4.__$u = t4 = function(i6) {
          var n3;
          E2(function() {
            n3 = this;
          });
          n3.c = function() {
            r4.__$f |= 1;
            r4.setState({});
          };
          return n3;
        }();
    }
    h3 = r4;
    _3(t4);
    i5(n2);
  });
  m3("__e", function(i5, n2, t4, r4) {
    _3();
    h3 = undefined;
    i5(n2, t4, r4);
  });
  m3("diffed", function(i5, n2) {
    _3();
    h3 = undefined;
    var t4;
    if (typeof n2.type == "string" && (t4 = n2.__e)) {
      var { __np: r4, props: f5 } = n2;
      if (r4) {
        var o4 = t4.U;
        if (o4)
          for (var e4 in o4) {
            var u5 = o4[e4];
            if (u5 !== undefined && !(e4 in r4)) {
              u5.d();
              o4[e4] = undefined;
            }
          }
        else {
          o4 = {};
          t4.U = o4;
        }
        for (var a4 in r4) {
          var c4 = o4[a4], v4 = r4[a4];
          if (c4 === undefined) {
            c4 = b2(t4, a4, v4, f5);
            o4[a4] = c4;
          } else
            c4.o(v4, f5);
        }
      }
    }
    i5(n2);
  });
  m3("unmount", function(i5, n2) {
    if (typeof n2.type == "string") {
      var t4 = n2.__e;
      if (t4) {
        var r4 = t4.U;
        if (r4) {
          t4.U = undefined;
          for (var f5 in r4) {
            var o4 = r4[f5];
            if (o4)
              o4.d();
          }
        }
      }
    } else {
      var e4 = n2.__c;
      if (e4) {
        var u5 = e4.__$u;
        if (u5) {
          e4.__$u = undefined;
          u5.d();
        }
      }
    }
    i5(n2);
  });
  m3("__h", function(i5, n2, t4, r4) {
    if (r4 < 3 || r4 === 9)
      n2.__$f |= 2;
    i5(n2, t4, r4);
  });
  x.prototype.shouldComponentUpdate = function(i5, n2) {
    var t4 = this.__$u, r4 = t4 && t4.s !== undefined;
    for (var f5 in n2)
      return true;
    if (this.__f || typeof this.u == "boolean" && this.u === true) {
      var o4 = 2 & this.__$f;
      if (!(r4 || o4 || 4 & this.__$f))
        return true;
      if (1 & this.__$f)
        return true;
    } else {
      if (!(r4 || 4 & this.__$f))
        return true;
      if (3 & this.__$f)
        return true;
    }
    for (var e4 in i5)
      if (e4 !== "__source" && i5[e4] !== this.props[e4])
        return true;
    for (var u5 in this.props)
      if (!(u5 in i5))
        return true;
    return false;
  };
});

// pages/index.tsx
var exports_pages = {};
__export(exports_pages, {
  default: () => pages_default
});
var pages_default = () => {
  const count = useSignal(0);
  const doubleCount = useComputed(() => 2 * count.value);
  return /* @__PURE__ */ u2("div", {
    children: [
      /* @__PURE__ */ u2("h1", {
        children: "Index!"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ u2("button", {
        onClick: () => {
          ++count.value;
        },
        children: "Up"
      }, undefined, false, undefined, this),
      /* @__PURE__ */ u2("p", {
        children: [
          count,
          " ",
          doubleCount
        ]
      }, undefined, true, undefined, this)
    ]
  }, undefined, true, undefined, this);
};
var init_pages = __esm(() => {
  init_signals_module();
  init_jsxRuntime_module();
});

// scripts/hydrate-entry.tsx
init_preact_module();
init_jsxRuntime_module();
var Page = (await Promise.resolve().then(() => (init_pages(), exports_pages))).default;
G(/* @__PURE__ */ u2(Page, {}, undefined, false, undefined, this), document.getElementById("app"));
