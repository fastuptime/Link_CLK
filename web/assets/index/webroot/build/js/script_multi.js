if (function(t, e) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
			if (!t.document) throw new Error("jQuery requires a window with a document");
			return e(t)
		} : e(t)
	}("undefined" != typeof window ? window : this, (function(t, e) {
		var n = [],
			i = t.document,
			o = n.slice,
			r = n.concat,
			s = n.push,
			a = n.indexOf,
			l = {},
			c = l.toString,
			h = l.hasOwnProperty,
			u = {},
			p = "2.2.4",
			d = function(t, e) {
				return new d.fn.init(t, e)
			},
			f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			g = /^-ms-/,
			m = /-([\da-z])/gi,
			v = function(t, e) {
				return e.toUpperCase()
			};

		function y(t) {
			var e = !!t && "length" in t && t.length,
				n = d.type(t);
			return "function" !== n && !d.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
		}
		d.fn = d.prototype = {
			jquery: p,
			constructor: d,
			selector: "",
			length: 0,
			toArray: function() {
				return o.call(this)
			},
			get: function(t) {
				return null != t ? 0 > t ? this[t + this.length] : this[t] : o.call(this)
			},
			pushStack: function(t) {
				var e = d.merge(this.constructor(), t);
				return e.prevObject = this, e.context = this.context, e
			},
			each: function(t) {
				return d.each(this, t)
			},
			map: function(t) {
				return this.pushStack(d.map(this, (function(e, n) {
					return t.call(e, n, e)
				})))
			},
			slice: function() {
				return this.pushStack(o.apply(this, arguments))
			},
			first: function() {
				return this.eq(0)
			},
			last: function() {
				return this.eq(-1)
			},
			eq: function(t) {
				var e = this.length,
					n = +t + (0 > t ? e : 0);
				return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
			},
			end: function() {
				return this.prevObject || this.constructor()
			},
			push: s,
			sort: n.sort,
			splice: n.splice
		}, d.extend = d.fn.extend = function() {
			var t, e, n, i, o, r, s = arguments[0] || {},
				a = 1,
				l = arguments.length,
				c = !1;
			for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || d.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
				if (null != (t = arguments[a]))
					for (e in t) n = s[e], s !== (i = t[e]) && (c && i && (d.isPlainObject(i) || (o = d.isArray(i))) ? (o ? (o = !1, r = n && d.isArray(n) ? n : []) : r = n && d.isPlainObject(n) ? n : {}, s[e] = d.extend(c, r, i)) : void 0 !== i && (s[e] = i));
			return s
		}, d.extend({
			expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(t) {
				throw new Error(t)
			},
			noop: function() {},
			isFunction: function(t) {
				return "function" === d.type(t)
			},
			isArray: Array.isArray,
			isWindow: function(t) {
				return null != t && t === t.window
			},
			isNumeric: function(t) {
				var e = t && t.toString();
				return !d.isArray(t) && e - parseFloat(e) + 1 >= 0
			},
			isPlainObject: function(t) {
				var e;
				if ("object" !== d.type(t) || t.nodeType || d.isWindow(t)) return !1;
				if (t.constructor && !h.call(t, "constructor") && !h.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
				for (e in t);
				return void 0 === e || h.call(t, e)
			},
			isEmptyObject: function(t) {
				var e;
				for (e in t) return !1;
				return !0
			},
			type: function(t) {
				return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? l[c.call(t)] || "object" : typeof t
			},
			globalEval: function(t) {
				var e, n = eval;
				(t = d.trim(t)) && (1 === t.indexOf("use strict") ? ((e = i.createElement("script")).text = t, i.head.appendChild(e).parentNode.removeChild(e)) : n(t))
			},
			camelCase: function(t) {
				return t.replace(g, "ms-").replace(m, v)
			},
			nodeName: function(t, e) {
				return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
			},
			each: function(t, e) {
				var n, i = 0;
				if (y(t))
					for (n = t.length; n > i && !1 !== e.call(t[i], i, t[i]); i++);
				else
					for (i in t)
						if (!1 === e.call(t[i], i, t[i])) break;
				return t
			},
			trim: function(t) {
				return null == t ? "" : (t + "").replace(f, "")
			},
			makeArray: function(t, e) {
				var n = e || [];
				return null != t && (y(Object(t)) ? d.merge(n, "string" == typeof t ? [t] : t) : s.call(n, t)), n
			},
			inArray: function(t, e, n) {
				return null == e ? -1 : a.call(e, t, n)
			},
			merge: function(t, e) {
				for (var n = +e.length, i = 0, o = t.length; n > i; i++) t[o++] = e[i];
				return t.length = o, t
			},
			grep: function(t, e, n) {
				for (var i = [], o = 0, r = t.length, s = !n; r > o; o++) !e(t[o], o) !== s && i.push(t[o]);
				return i
			},
			map: function(t, e, n) {
				var i, o, s = 0,
					a = [];
				if (y(t))
					for (i = t.length; i > s; s++) null != (o = e(t[s], s, n)) && a.push(o);
				else
					for (s in t) null != (o = e(t[s], s, n)) && a.push(o);
				return r.apply([], a)
			},
			guid: 1,
			proxy: function(t, e) {
				var n, i, r;
				return "string" == typeof e && (n = t[e], e = t, t = n), d.isFunction(t) ? (i = o.call(arguments, 2), r = function() {
					return t.apply(e || this, i.concat(o.call(arguments)))
				}, r.guid = t.guid = t.guid || d.guid++, r) : void 0
			},
			now: Date.now,
			support: u
		}), "function" == typeof Symbol && (d.fn[Symbol.iterator] = n[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
			l["[object " + e + "]"] = e.toLowerCase()
		}));
		var b = function(t) {
			var e, n, i, o, r, s, a, l, c, h, u, p, d, f, g, m, v, y, b, w = "sizzle" + 1 * new Date,
				x = t.document,
				_ = 0,
				C = 0,
				T = rt(),
				k = rt(),
				$ = rt(),
				S = function(t, e) {
					return t === e && (u = !0), 0
				},
				E = 1 << 31,
				A = {}.hasOwnProperty,
				D = [],
				N = D.pop,
				j = D.push,
				O = D.push,
				L = D.slice,
				P = function(t, e) {
					for (var n = 0, i = t.length; i > n; n++)
						if (t[n] === e) return n;
					return -1
				},
				I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				H = "[\\x20\\t\\r\\n\\f]",
				z = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				R = "\\[" + H + "*(" + z + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + H + "*\\]",
				F = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
				M = new RegExp(H + "+", "g"),
				q = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
				W = new RegExp("^" + H + "*," + H + "*"),
				B = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
				U = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
				V = new RegExp(F),
				Q = new RegExp("^" + z + "$"),
				X = {
					ID: new RegExp("^#(" + z + ")"),
					CLASS: new RegExp("^\\.(" + z + ")"),
					TAG: new RegExp("^(" + z + "|[*])"),
					ATTR: new RegExp("^" + R),
					PSEUDO: new RegExp("^" + F),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + I + ")$", "i"),
					needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
				},
				G = /^(?:input|select|textarea|button)$/i,
				Y = /^h\d$/i,
				Z = /^[^{]+\{\s*\[native \w/,
				J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				K = /[+~]/,
				tt = /'|\\/g,
				et = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
				nt = function(t, e, n) {
					var i = "0x" + e - 65536;
					return i != i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
				},
				it = function() {
					p()
				};
			try {
				O.apply(D = L.call(x.childNodes), x.childNodes), D[x.childNodes.length].nodeType
			} catch (t) {
				O = {
					apply: D.length ? function(t, e) {
						j.apply(t, L.call(e))
					} : function(t, e) {
						for (var n = t.length, i = 0; t[n++] = e[i++];);
						t.length = n - 1
					}
				}
			}

			function ot(t, e, i, o) {
				var r, a, c, h, u, f, v, y, _ = e && e.ownerDocument,
					C = e ? e.nodeType : 9;
				if (i = i || [], "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C) return i;
				if (!o && ((e ? e.ownerDocument || e : x) !== d && p(e), e = e || d, g)) {
					if (11 !== C && (f = J.exec(t)))
						if (r = f[1]) {
							if (9 === C) {
								if (!(c = e.getElementById(r))) return i;
								if (c.id === r) return i.push(c), i
							} else if (_ && (c = _.getElementById(r)) && b(e, c) && c.id === r) return i.push(c), i
						} else {
							if (f[2]) return O.apply(i, e.getElementsByTagName(t)), i;
							if ((r = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return O.apply(i, e.getElementsByClassName(r)), i
						} if (n.qsa && !$[t + " "] && (!m || !m.test(t))) {
						if (1 !== C) _ = e, y = t;
						else if ("object" !== e.nodeName.toLowerCase()) {
							for ((h = e.getAttribute("id")) ? h = h.replace(tt, "\\$&") : e.setAttribute("id", h = w), a = (v = s(t)).length, u = Q.test(h) ? "#" + h : "[id='" + h + "']"; a--;) v[a] = u + " " + gt(v[a]);
							y = v.join(","), _ = K.test(t) && dt(e.parentNode) || e
						}
						if (y) try {
							return O.apply(i, _.querySelectorAll(y)), i
						} catch (t) {} finally {
							h === w && e.removeAttribute("id")
						}
					}
				}
				return l(t.replace(q, "$1"), e, i, o)
			}

			function rt() {
				var t = [];
				return function e(n, o) {
					return t.push(n + " ") > i.cacheLength && delete e[t.shift()], e[n + " "] = o
				}
			}

			function st(t) {
				return t[w] = !0, t
			}

			function at(t) {
				var e = d.createElement("div");
				try {
					return !!t(e)
				} catch (t) {
					return !1
				} finally {
					e.parentNode && e.parentNode.removeChild(e), e = null
				}
			}

			function lt(t, e) {
				for (var n = t.split("|"), o = n.length; o--;) i.attrHandle[n[o]] = e
			}

			function ct(t, e) {
				var n = e && t,
					i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || E) - (~t.sourceIndex || E);
				if (i) return i;
				if (n)
					for (; n = n.nextSibling;)
						if (n === e) return -1;
				return t ? 1 : -1
			}

			function ht(t) {
				return function(e) {
					return "input" === e.nodeName.toLowerCase() && e.type === t
				}
			}

			function ut(t) {
				return function(e) {
					var n = e.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && e.type === t
				}
			}

			function pt(t) {
				return st((function(e) {
					return e = +e, st((function(n, i) {
						for (var o, r = t([], n.length, e), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
					}))
				}))
			}

			function dt(t) {
				return t && void 0 !== t.getElementsByTagName && t
			}
			for (e in n = ot.support = {}, r = ot.isXML = function(t) {
					var e = t && (t.ownerDocument || t).documentElement;
					return !!e && "HTML" !== e.nodeName
				}, p = ot.setDocument = function(t) {
					var e, o, s = t ? t.ownerDocument || t : x;
					return s !== d && 9 === s.nodeType && s.documentElement ? (f = (d = s).documentElement, g = !r(d), (o = d.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", it, !1) : o.attachEvent && o.attachEvent("onunload", it)), n.attributes = at((function(t) {
						return t.className = "i", !t.getAttribute("className")
					})), n.getElementsByTagName = at((function(t) {
						return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
					})), n.getElementsByClassName = Z.test(d.getElementsByClassName), n.getById = at((function(t) {
						return f.appendChild(t).id = w, !d.getElementsByName || !d.getElementsByName(w).length
					})), n.getById ? (i.find.ID = function(t, e) {
						if (void 0 !== e.getElementById && g) {
							var n = e.getElementById(t);
							return n ? [n] : []
						}
					}, i.filter.ID = function(t) {
						var e = t.replace(et, nt);
						return function(t) {
							return t.getAttribute("id") === e
						}
					}) : (delete i.find.ID, i.filter.ID = function(t) {
						var e = t.replace(et, nt);
						return function(t) {
							var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
							return n && n.value === e
						}
					}), i.find.TAG = n.getElementsByTagName ? function(t, e) {
						return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
					} : function(t, e) {
						var n, i = [],
							o = 0,
							r = e.getElementsByTagName(t);
						if ("*" === t) {
							for (; n = r[o++];) 1 === n.nodeType && i.push(n);
							return i
						}
						return r
					}, i.find.CLASS = n.getElementsByClassName && function(t, e) {
						return void 0 !== e.getElementsByClassName && g ? e.getElementsByClassName(t) : void 0
					}, v = [], m = [], (n.qsa = Z.test(d.querySelectorAll)) && (at((function(t) {
						f.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + I + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
					})), at((function(t) {
						var e = d.createElement("input");
						e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
					}))), (n.matchesSelector = Z.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at((function(t) {
						n.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), v.push("!=", F)
					})), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Z.test(f.compareDocumentPosition), b = e || Z.test(f.contains) ? function(t, e) {
						var n = 9 === t.nodeType ? t.documentElement : t,
							i = e && e.parentNode;
						return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
					} : function(t, e) {
						if (e)
							for (; e = e.parentNode;)
								if (e === t) return !0;
						return !1
					}, S = e ? function(t, e) {
						if (t === e) return u = !0, 0;
						var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
						return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === d || t.ownerDocument === x && b(x, t) ? -1 : e === d || e.ownerDocument === x && b(x, e) ? 1 : h ? P(h, t) - P(h, e) : 0 : 4 & i ? -1 : 1)
					} : function(t, e) {
						if (t === e) return u = !0, 0;
						var n, i = 0,
							o = t.parentNode,
							r = e.parentNode,
							s = [t],
							a = [e];
						if (!o || !r) return t === d ? -1 : e === d ? 1 : o ? -1 : r ? 1 : h ? P(h, t) - P(h, e) : 0;
						if (o === r) return ct(t, e);
						for (n = t; n = n.parentNode;) s.unshift(n);
						for (n = e; n = n.parentNode;) a.unshift(n);
						for (; s[i] === a[i];) i++;
						return i ? ct(s[i], a[i]) : s[i] === x ? -1 : a[i] === x ? 1 : 0
					}, d) : d
				}, ot.matches = function(t, e) {
					return ot(t, null, null, e)
				}, ot.matchesSelector = function(t, e) {
					if ((t.ownerDocument || t) !== d && p(t), e = e.replace(U, "='$1']"), n.matchesSelector && g && !$[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
						var i = y.call(t, e);
						if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
					} catch (t) {}
					return ot(e, d, null, [t]).length > 0
				}, ot.contains = function(t, e) {
					return (t.ownerDocument || t) !== d && p(t), b(t, e)
				}, ot.attr = function(t, e) {
					(t.ownerDocument || t) !== d && p(t);
					var o = i.attrHandle[e.toLowerCase()],
						r = o && A.call(i.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
					return void 0 !== r ? r : n.attributes || !g ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
				}, ot.error = function(t) {
					throw new Error("Syntax error, unrecognized expression: " + t)
				}, ot.uniqueSort = function(t) {
					var e, i = [],
						o = 0,
						r = 0;
					if (u = !n.detectDuplicates, h = !n.sortStable && t.slice(0), t.sort(S), u) {
						for (; e = t[r++];) e === t[r] && (o = i.push(r));
						for (; o--;) t.splice(i[o], 1)
					}
					return h = null, t
				}, o = ot.getText = function(t) {
					var e, n = "",
						i = 0,
						r = t.nodeType;
					if (r) {
						if (1 === r || 9 === r || 11 === r) {
							if ("string" == typeof t.textContent) return t.textContent;
							for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
						} else if (3 === r || 4 === r) return t.nodeValue
					} else
						for (; e = t[i++];) n += o(e);
					return n
				}, i = ot.selectors = {
					cacheLength: 50,
					createPseudo: st,
					match: X,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(t) {
							return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
						},
						CHILD: function(t) {
							return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
						},
						PSEUDO: function(t) {
							var e, n = !t[6] && t[2];
							return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
						}
					},
					filter: {
						TAG: function(t) {
							var e = t.replace(et, nt).toLowerCase();
							return "*" === t ? function() {
								return !0
							} : function(t) {
								return t.nodeName && t.nodeName.toLowerCase() === e
							}
						},
						CLASS: function(t) {
							var e = T[t + " "];
							return e || (e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) && T(t, (function(t) {
								return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
							}))
						},
						ATTR: function(t, e, n) {
							return function(i) {
								var o = ot.attr(i, t);
								return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o.replace(M, " ") + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
							}
						},
						CHILD: function(t, e, n, i, o) {
							var r = "nth" !== t.slice(0, 3),
								s = "last" !== t.slice(-4),
								a = "of-type" === e;
							return 1 === i && 0 === o ? function(t) {
								return !!t.parentNode
							} : function(e, n, l) {
								var c, h, u, p, d, f, g = r !== s ? "nextSibling" : "previousSibling",
									m = e.parentNode,
									v = a && e.nodeName.toLowerCase(),
									y = !l && !a,
									b = !1;
								if (m) {
									if (r) {
										for (; g;) {
											for (p = e; p = p[g];)
												if (a ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
											f = g = "only" === t && !f && "nextSibling"
										}
										return !0
									}
									if (f = [s ? m.firstChild : m.lastChild], s && y) {
										for (b = (d = (c = (h = (u = (p = m)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] || [])[0] === _ && c[1]) && c[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (b = d = 0) || f.pop();)
											if (1 === p.nodeType && ++b && p === e) {
												h[t] = [_, d, b];
												break
											}
									} else if (y && (b = d = (c = (h = (u = (p = e)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] || [])[0] === _ && c[1]), !1 === b)
										for (;
											(p = ++d && p && p[g] || (b = d = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && ((h = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] = [_, b]), p !== e)););
									return (b -= o) === i || b % i == 0 && b / i >= 0
								}
							}
						},
						PSEUDO: function(t, e) {
							var n, o = i.pseudos[t] || i.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
							return o[w] ? o(e) : o.length > 1 ? (n = [t, t, "", e], i.setFilters.hasOwnProperty(t.toLowerCase()) ? st((function(t, n) {
								for (var i, r = o(t, e), s = r.length; s--;) t[i = P(t, r[s])] = !(n[i] = r[s])
							})) : function(t) {
								return o(t, 0, n)
							}) : o
						}
					},
					pseudos: {
						not: st((function(t) {
							var e = [],
								n = [],
								i = a(t.replace(q, "$1"));
							return i[w] ? st((function(t, e, n, o) {
								for (var r, s = i(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
							})) : function(t, o, r) {
								return e[0] = t, i(e, null, r, n), e[0] = null, !n.pop()
							}
						})),
						has: st((function(t) {
							return function(e) {
								return ot(t, e).length > 0
							}
						})),
						contains: st((function(t) {
							return t = t.replace(et, nt),
								function(e) {
									return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
								}
						})),
						lang: st((function(t) {
							return Q.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
								function(e) {
									var n;
									do {
										if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
									} while ((e = e.parentNode) && 1 === e.nodeType);
									return !1
								}
						})),
						target: function(e) {
							var n = t.location && t.location.hash;
							return n && n.slice(1) === e.id
						},
						root: function(t) {
							return t === f
						},
						focus: function(t) {
							return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
						},
						enabled: function(t) {
							return !1 === t.disabled
						},
						disabled: function(t) {
							return !0 === t.disabled
						},
						checked: function(t) {
							var e = t.nodeName.toLowerCase();
							return "input" === e && !!t.checked || "option" === e && !!t.selected
						},
						selected: function(t) {
							return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
						},
						empty: function(t) {
							for (t = t.firstChild; t; t = t.nextSibling)
								if (t.nodeType < 6) return !1;
							return !0
						},
						parent: function(t) {
							return !i.pseudos.empty(t)
						},
						header: function(t) {
							return Y.test(t.nodeName)
						},
						input: function(t) {
							return G.test(t.nodeName)
						},
						button: function(t) {
							var e = t.nodeName.toLowerCase();
							return "input" === e && "button" === t.type || "button" === e
						},
						text: function(t) {
							var e;
							return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
						},
						first: pt((function() {
							return [0]
						})),
						last: pt((function(t, e) {
							return [e - 1]
						})),
						eq: pt((function(t, e, n) {
							return [0 > n ? n + e : n]
						})),
						even: pt((function(t, e) {
							for (var n = 0; e > n; n += 2) t.push(n);
							return t
						})),
						odd: pt((function(t, e) {
							for (var n = 1; e > n; n += 2) t.push(n);
							return t
						})),
						lt: pt((function(t, e, n) {
							for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
							return t
						})),
						gt: pt((function(t, e, n) {
							for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
							return t
						}))
					}
				}, i.pseudos.nth = i.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) i.pseudos[e] = ht(e);
			for (e in {
					submit: !0,
					reset: !0
				}) i.pseudos[e] = ut(e);

			function ft() {}

			function gt(t) {
				for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
				return i
			}

			function mt(t, e, n) {
				var i = e.dir,
					o = n && "parentNode" === i,
					r = C++;
				return e.first ? function(e, n, r) {
					for (; e = e[i];)
						if (1 === e.nodeType || o) return t(e, n, r)
				} : function(e, n, s) {
					var a, l, c, h = [_, r];
					if (s) {
						for (; e = e[i];)
							if ((1 === e.nodeType || o) && t(e, n, s)) return !0
					} else
						for (; e = e[i];)
							if (1 === e.nodeType || o) {
								if ((a = (l = (c = e[w] || (e[w] = {}))[e.uniqueID] || (c[e.uniqueID] = {}))[i]) && a[0] === _ && a[1] === r) return h[2] = a[2];
								if (l[i] = h, h[2] = t(e, n, s)) return !0
							}
				}
			}

			function vt(t) {
				return t.length > 1 ? function(e, n, i) {
					for (var o = t.length; o--;)
						if (!t[o](e, n, i)) return !1;
					return !0
				} : t[0]
			}

			function yt(t, e, n, i, o) {
				for (var r, s = [], a = 0, l = t.length, c = null != e; l > a; a++)(r = t[a]) && (n && !n(r, i, o) || (s.push(r), c && e.push(a)));
				return s
			}

			function bt(t, e, n, i, o, r) {
				return i && !i[w] && (i = bt(i)), o && !o[w] && (o = bt(o, r)), st((function(r, s, a, l) {
					var c, h, u, p = [],
						d = [],
						f = s.length,
						g = r || function(t, e, n) {
							for (var i = 0, o = e.length; o > i; i++) ot(t, e[i], n);
							return n
						}(e || "*", a.nodeType ? [a] : a, []),
						m = !t || !r && e ? g : yt(g, p, t, a, l),
						v = n ? o || (r ? t : f || i) ? [] : s : m;
					if (n && n(m, v, a, l), i)
						for (c = yt(v, d), i(c, [], a, l), h = c.length; h--;)(u = c[h]) && (v[d[h]] = !(m[d[h]] = u));
					if (r) {
						if (o || t) {
							if (o) {
								for (c = [], h = v.length; h--;)(u = v[h]) && c.push(m[h] = u);
								o(null, v = [], c, l)
							}
							for (h = v.length; h--;)(u = v[h]) && (c = o ? P(r, u) : p[h]) > -1 && (r[c] = !(s[c] = u))
						}
					} else v = yt(v === s ? v.splice(f, v.length) : v), o ? o(null, s, v, l) : O.apply(s, v)
				}))
			}

			function wt(t) {
				for (var e, n, o, r = t.length, s = i.relative[t[0].type], a = s || i.relative[" "], l = s ? 1 : 0, h = mt((function(t) {
						return t === e
					}), a, !0), u = mt((function(t) {
						return P(e, t) > -1
					}), a, !0), p = [function(t, n, i) {
						var o = !s && (i || n !== c) || ((e = n).nodeType ? h(t, n, i) : u(t, n, i));
						return e = null, o
					}]; r > l; l++)
					if (n = i.relative[t[l].type]) p = [mt(vt(p), n)];
					else {
						if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
							for (o = ++l; r > o && !i.relative[t[o].type]; o++);
							return bt(l > 1 && vt(p), l > 1 && gt(t.slice(0, l - 1).concat({
								value: " " === t[l - 2].type ? "*" : ""
							})).replace(q, "$1"), n, o > l && wt(t.slice(l, o)), r > o && wt(t = t.slice(o)), r > o && gt(t))
						}
						p.push(n)
					} return vt(p)
			}

			function xt(t, e) {
				var n = e.length > 0,
					o = t.length > 0,
					r = function(r, s, a, l, h) {
						var u, f, m, v = 0,
							y = "0",
							b = r && [],
							w = [],
							x = c,
							C = r || o && i.find.TAG("*", h),
							T = _ += null == x ? 1 : Math.random() || .1,
							k = C.length;
						for (h && (c = s === d || s || h); y !== k && null != (u = C[y]); y++) {
							if (o && u) {
								for (f = 0, s || u.ownerDocument === d || (p(u), a = !g); m = t[f++];)
									if (m(u, s || d, a)) {
										l.push(u);
										break
									} h && (_ = T)
							}
							n && ((u = !m && u) && v--, r && b.push(u))
						}
						if (v += y, n && y !== v) {
							for (f = 0; m = e[f++];) m(b, w, s, a);
							if (r) {
								if (v > 0)
									for (; y--;) b[y] || w[y] || (w[y] = N.call(l));
								w = yt(w)
							}
							O.apply(l, w), h && !r && w.length > 0 && v + e.length > 1 && ot.uniqueSort(l)
						}
						return h && (_ = T, c = x), b
					};
				return n ? st(r) : r
			}
			return ft.prototype = i.filters = i.pseudos, i.setFilters = new ft, s = ot.tokenize = function(t, e) {
				var n, o, r, s, a, l, c, h = k[t + " "];
				if (h) return e ? 0 : h.slice(0);
				for (a = t, l = [], c = i.preFilter; a;) {
					for (s in n && !(o = W.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = B.exec(a)) && (n = o.shift(), r.push({
							value: n,
							type: o[0].replace(q, " ")
						}), a = a.slice(n.length)), i.filter) !(o = X[s].exec(a)) || c[s] && !(o = c[s](o)) || (n = o.shift(), r.push({
						value: n,
						type: s,
						matches: o
					}), a = a.slice(n.length));
					if (!n) break
				}
				return e ? a.length : a ? ot.error(t) : k(t, l).slice(0)
			}, a = ot.compile = function(t, e) {
				var n, i = [],
					o = [],
					r = $[t + " "];
				if (!r) {
					for (e || (e = s(t)), n = e.length; n--;)(r = wt(e[n]))[w] ? i.push(r) : o.push(r);
					(r = $(t, xt(o, i))).selector = t
				}
				return r
			}, l = ot.select = function(t, e, o, r) {
				var l, c, h, u, p, d = "function" == typeof t && t,
					f = !r && s(t = d.selector || t);
				if (o = o || [], 1 === f.length) {
					if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (h = c[0]).type && n.getById && 9 === e.nodeType && g && i.relative[c[1].type]) {
						if (!(e = (i.find.ID(h.matches[0].replace(et, nt), e) || [])[0])) return o;
						d && (e = e.parentNode), t = t.slice(c.shift().value.length)
					}
					for (l = X.needsContext.test(t) ? 0 : c.length; l-- && (h = c[l], !i.relative[u = h.type]);)
						if ((p = i.find[u]) && (r = p(h.matches[0].replace(et, nt), K.test(c[0].type) && dt(e.parentNode) || e))) {
							if (c.splice(l, 1), !(t = r.length && gt(c))) return O.apply(o, r), o;
							break
						}
				}
				return (d || a(t, f))(r, e, !g, o, !e || K.test(t) && dt(e.parentNode) || e), o
			}, n.sortStable = w.split("").sort(S).join("") === w, n.detectDuplicates = !!u, p(), n.sortDetached = at((function(t) {
				return 1 & t.compareDocumentPosition(d.createElement("div"))
			})), at((function(t) {
				return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
			})) || lt("type|href|height|width", (function(t, e, n) {
				return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
			})), n.attributes && at((function(t) {
				return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
			})) || lt("value", (function(t, e, n) {
				return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
			})), at((function(t) {
				return null == t.getAttribute("disabled")
			})) || lt(I, (function(t, e, n) {
				var i;
				return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			})), ot
		}(t);
		d.find = b, d.expr = b.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = b.uniqueSort, d.text = b.getText, d.isXMLDoc = b.isXML, d.contains = b.contains;
		var w = function(t, e, n) {
				for (var i = [], o = void 0 !== n;
					(t = t[e]) && 9 !== t.nodeType;)
					if (1 === t.nodeType) {
						if (o && d(t).is(n)) break;
						i.push(t)
					} return i
			},
			x = function(t, e) {
				for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
				return n
			},
			_ = d.expr.match.needsContext,
			C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
			T = /^.[^:#\[\.,]*$/;

		function k(t, e, n) {
			if (d.isFunction(e)) return d.grep(t, (function(t, i) {
				return !!e.call(t, i, t) !== n
			}));
			if (e.nodeType) return d.grep(t, (function(t) {
				return t === e !== n
			}));
			if ("string" == typeof e) {
				if (T.test(e)) return d.filter(e, t, n);
				e = d.filter(e, t)
			}
			return d.grep(t, (function(t) {
				return a.call(e, t) > -1 !== n
			}))
		}
		d.filter = function(t, e, n) {
			var i = e[0];
			return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? d.find.matchesSelector(i, t) ? [i] : [] : d.find.matches(t, d.grep(e, (function(t) {
				return 1 === t.nodeType
			})))
		}, d.fn.extend({
			find: function(t) {
				var e, n = this.length,
					i = [],
					o = this;
				if ("string" != typeof t) return this.pushStack(d(t).filter((function() {
					for (e = 0; n > e; e++)
						if (d.contains(o[e], this)) return !0
				})));
				for (e = 0; n > e; e++) d.find(t, o[e], i);
				return (i = this.pushStack(n > 1 ? d.unique(i) : i)).selector = this.selector ? this.selector + " " + t : t, i
			},
			filter: function(t) {
				return this.pushStack(k(this, t || [], !1))
			},
			not: function(t) {
				return this.pushStack(k(this, t || [], !0))
			},
			is: function(t) {
				return !!k(this, "string" == typeof t && _.test(t) ? d(t) : t || [], !1).length
			}
		});
		var $, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			E = d.fn.init = function(t, e, n) {
				var o, r;
				if (!t) return this;
				if (n = n || $, "string" == typeof t) {
					if (!(o = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : S.exec(t)) || !o[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
					if (o[1]) {
						if (e = e instanceof d ? e[0] : e, d.merge(this, d.parseHTML(o[1], e && e.nodeType ? e.ownerDocument || e : i, !0)), C.test(o[1]) && d.isPlainObject(e))
							for (o in e) d.isFunction(this[o]) ? this[o](e[o]) : this.attr(o, e[o]);
						return this
					}
					return (r = i.getElementById(o[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = i, this.selector = t, this
				}
				return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : d.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(d) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), d.makeArray(t, this))
			};
		E.prototype = d.fn, $ = d(i);
		var A = /^(?:parents|prev(?:Until|All))/,
			D = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};

		function N(t, e) {
			for (;
				(t = t[e]) && 1 !== t.nodeType;);
			return t
		}
		d.fn.extend({
			has: function(t) {
				var e = d(t, this),
					n = e.length;
				return this.filter((function() {
					for (var t = 0; n > t; t++)
						if (d.contains(this, e[t])) return !0
				}))
			},
			closest: function(t, e) {
				for (var n, i = 0, o = this.length, r = [], s = _.test(t) || "string" != typeof t ? d(t, e || this.context) : 0; o > i; i++)
					for (n = this[i]; n && n !== e; n = n.parentNode)
						if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, t))) {
							r.push(n);
							break
						} return this.pushStack(r.length > 1 ? d.uniqueSort(r) : r)
			},
			index: function(t) {
				return t ? "string" == typeof t ? a.call(d(t), this[0]) : a.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function(t, e) {
				return this.pushStack(d.uniqueSort(d.merge(this.get(), d(t, e))))
			},
			addBack: function(t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}
		}), d.each({
			parent: function(t) {
				var e = t.parentNode;
				return e && 11 !== e.nodeType ? e : null
			},
			parents: function(t) {
				return w(t, "parentNode")
			},
			parentsUntil: function(t, e, n) {
				return w(t, "parentNode", n)
			},
			next: function(t) {
				return N(t, "nextSibling")
			},
			prev: function(t) {
				return N(t, "previousSibling")
			},
			nextAll: function(t) {
				return w(t, "nextSibling")
			},
			prevAll: function(t) {
				return w(t, "previousSibling")
			},
			nextUntil: function(t, e, n) {
				return w(t, "nextSibling", n)
			},
			prevUntil: function(t, e, n) {
				return w(t, "previousSibling", n)
			},
			siblings: function(t) {
				return x((t.parentNode || {}).firstChild, t)
			},
			children: function(t) {
				return x(t.firstChild)
			},
			contents: function(t) {
				return t.contentDocument || d.merge([], t.childNodes)
			}
		}, (function(t, e) {
			d.fn[t] = function(n, i) {
				var o = d.map(this, e, n);
				return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = d.filter(i, o)), this.length > 1 && (D[t] || d.uniqueSort(o), A.test(t) && o.reverse()), this.pushStack(o)
			}
		}));
		var j, O = /\S+/g;

		function L() {
			i.removeEventListener("DOMContentLoaded", L), t.removeEventListener("load", L), d.ready()
		}
		d.Callbacks = function(t) {
			t = "string" == typeof t ? function(t) {
				var e = {};
				return d.each(t.match(O) || [], (function(t, n) {
					e[n] = !0
				})), e
			}(t) : d.extend({}, t);
			var e, n, i, o, r = [],
				s = [],
				a = -1,
				l = function() {
					for (o = t.once, i = e = !0; s.length; a = -1)
						for (n = s.shift(); ++a < r.length;) !1 === r[a].apply(n[0], n[1]) && t.stopOnFalse && (a = r.length, n = !1);
					t.memory || (n = !1), e = !1, o && (r = n ? [] : "")
				},
				c = {
					add: function() {
						return r && (n && !e && (a = r.length - 1, s.push(n)), function e(n) {
							d.each(n, (function(n, i) {
								d.isFunction(i) ? t.unique && c.has(i) || r.push(i) : i && i.length && "string" !== d.type(i) && e(i)
							}))
						}(arguments), n && !e && l()), this
					},
					remove: function() {
						return d.each(arguments, (function(t, e) {
							for (var n;
								(n = d.inArray(e, r, n)) > -1;) r.splice(n, 1), a >= n && a--
						})), this
					},
					has: function(t) {
						return t ? d.inArray(t, r) > -1 : r.length > 0
					},
					empty: function() {
						return r && (r = []), this
					},
					disable: function() {
						return o = s = [], r = n = "", this
					},
					disabled: function() {
						return !r
					},
					lock: function() {
						return o = s = [], n || (r = n = ""), this
					},
					locked: function() {
						return !!o
					},
					fireWith: function(t, n) {
						return o || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || l()), this
					},
					fire: function() {
						return c.fireWith(this, arguments), this
					},
					fired: function() {
						return !!i
					}
				};
			return c
		}, d.extend({
			Deferred: function(t) {
				var e = [
						["resolve", "done", d.Callbacks("once memory"), "resolved"],
						["reject", "fail", d.Callbacks("once memory"), "rejected"],
						["notify", "progress", d.Callbacks("memory")]
					],
					n = "pending",
					i = {
						state: function() {
							return n
						},
						always: function() {
							return o.done(arguments).fail(arguments), this
						},
						then: function() {
							var t = arguments;
							return d.Deferred((function(n) {
								d.each(e, (function(e, r) {
									var s = d.isFunction(t[e]) && t[e];
									o[r[1]]((function() {
										var t = s && s.apply(this, arguments);
										t && d.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
									}))
								})), t = null
							})).promise()
						},
						promise: function(t) {
							return null != t ? d.extend(t, i) : i
						}
					},
					o = {};
				return i.pipe = i.then, d.each(e, (function(t, r) {
					var s = r[2],
						a = r[3];
					i[r[1]] = s.add, a && s.add((function() {
						n = a
					}), e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
						return o[r[0] + "With"](this === o ? i : this, arguments), this
					}, o[r[0] + "With"] = s.fireWith
				})), i.promise(o), t && t.call(o, o), o
			},
			when: function(t) {
				var e, n, i, r = 0,
					s = o.call(arguments),
					a = s.length,
					l = 1 !== a || t && d.isFunction(t.promise) ? a : 0,
					c = 1 === l ? t : d.Deferred(),
					h = function(t, n, i) {
						return function(r) {
							n[t] = this, i[t] = arguments.length > 1 ? o.call(arguments) : r, i === e ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
						}
					};
				if (a > 1)
					for (e = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) s[r] && d.isFunction(s[r].promise) ? s[r].promise().progress(h(r, n, e)).done(h(r, i, s)).fail(c.reject) : --l;
				return l || c.resolveWith(i, s), c.promise()
			}
		}), d.fn.ready = function(t) {
			return d.ready.promise().done(t), this
		}, d.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(t) {
				t ? d.readyWait++ : d.ready(!0)
			},
			ready: function(t) {
				(!0 === t ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== t && --d.readyWait > 0 || (j.resolveWith(i, [d]), d.fn.triggerHandler && (d(i).triggerHandler("ready"), d(i).off("ready"))))
			}
		}), d.ready.promise = function(e) {
			return j || (j = d.Deferred(), "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(d.ready) : (i.addEventListener("DOMContentLoaded", L), t.addEventListener("load", L))), j.promise(e)
		}, d.ready.promise();
		var P = function(t, e, n, i, o, r, s) {
				var a = 0,
					l = t.length,
					c = null == n;
				if ("object" === d.type(n))
					for (a in o = !0, n) P(t, e, a, n[a], !0, r, s);
				else if (void 0 !== i && (o = !0, d.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
						return c.call(d(t), n)
					})), e))
					for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
				return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
			},
			I = function(t) {
				return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
			};

		function H() {
			this.expando = d.expando + H.uid++
		}
		H.uid = 1, H.prototype = {
			register: function(t, e) {
				var n = e || {};
				return t.nodeType ? t[this.expando] = n : Object.defineProperty(t, this.expando, {
					value: n,
					writable: !0,
					configurable: !0
				}), t[this.expando]
			},
			cache: function(t) {
				if (!I(t)) return {};
				var e = t[this.expando];
				return e || (e = {}, I(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
					value: e,
					configurable: !0
				}))), e
			},
			set: function(t, e, n) {
				var i, o = this.cache(t);
				if ("string" == typeof e) o[e] = n;
				else
					for (i in e) o[i] = e[i];
				return o
			},
			get: function(t, e) {
				return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
			},
			access: function(t, e, n) {
				var i;
				return void 0 === e || e && "string" == typeof e && void 0 === n ? void 0 !== (i = this.get(t, e)) ? i : this.get(t, d.camelCase(e)) : (this.set(t, e, n), void 0 !== n ? n : e)
			},
			remove: function(t, e) {
				var n, i, o, r = t[this.expando];
				if (void 0 !== r) {
					if (void 0 === e) this.register(t);
					else {
						d.isArray(e) ? i = e.concat(e.map(d.camelCase)) : (o = d.camelCase(e), e in r ? i = [e, o] : i = (i = o) in r ? [i] : i.match(O) || []), n = i.length;
						for (; n--;) delete r[i[n]]
					}(void 0 === e || d.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
				}
			},
			hasData: function(t) {
				var e = t[this.expando];
				return void 0 !== e && !d.isEmptyObject(e)
			}
		};
		var z = new H,
			R = new H,
			F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			M = /[A-Z]/g;

		function q(t, e, n) {
			var i;
			if (void 0 === n && 1 === t.nodeType)
				if (i = "data-" + e.replace(M, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
					try {
						n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : F.test(n) ? d.parseJSON(n) : n)
					} catch (t) {}
					R.set(t, e, n)
				} else n = void 0;
			return n
		}
		d.extend({
			hasData: function(t) {
				return R.hasData(t) || z.hasData(t)
			},
			data: function(t, e, n) {
				return R.access(t, e, n)
			},
			removeData: function(t, e) {
				R.remove(t, e)
			},
			_data: function(t, e, n) {
				return z.access(t, e, n)
			},
			_removeData: function(t, e) {
				z.remove(t, e)
			}
		}), d.fn.extend({
			data: function(t, e) {
				var n, i, o, r = this[0],
					s = r && r.attributes;
				if (void 0 === t) {
					if (this.length && (o = R.get(r), 1 === r.nodeType && !z.get(r, "hasDataAttrs"))) {
						for (n = s.length; n--;) s[n] && (0 === (i = s[n].name).indexOf("data-") && (i = d.camelCase(i.slice(5)), q(r, i, o[i])));
						z.set(r, "hasDataAttrs", !0)
					}
					return o
				}
				return "object" == typeof t ? this.each((function() {
					R.set(this, t)
				})) : P(this, (function(e) {
					var n, i;
					if (r && void 0 === e) {
						if (void 0 !== (n = R.get(r, t) || R.get(r, t.replace(M, "-$&").toLowerCase()))) return n;
						if (i = d.camelCase(t), void 0 !== (n = R.get(r, i))) return n;
						if (void 0 !== (n = q(r, i, void 0))) return n
					} else i = d.camelCase(t), this.each((function() {
						var n = R.get(this, i);
						R.set(this, i, e), t.indexOf("-") > -1 && void 0 !== n && R.set(this, t, e)
					}))
				}), null, e, arguments.length > 1, null, !0)
			},
			removeData: function(t) {
				return this.each((function() {
					R.remove(this, t)
				}))
			}
		}), d.extend({
			queue: function(t, e, n) {
				var i;
				return t ? (e = (e || "fx") + "queue", i = z.get(t, e), n && (!i || d.isArray(n) ? i = z.access(t, e, d.makeArray(n)) : i.push(n)), i || []) : void 0
			},
			dequeue: function(t, e) {
				e = e || "fx";
				var n = d.queue(t, e),
					i = n.length,
					o = n.shift(),
					r = d._queueHooks(t, e);
				"inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, (function() {
					d.dequeue(t, e)
				}), r)), !i && r && r.empty.fire()
			},
			_queueHooks: function(t, e) {
				var n = e + "queueHooks";
				return z.get(t, n) || z.access(t, n, {
					empty: d.Callbacks("once memory").add((function() {
						z.remove(t, [e + "queue", n])
					}))
				})
			}
		}), d.fn.extend({
			queue: function(t, e) {
				var n = 2;
				return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? d.queue(this[0], t) : void 0 === e ? this : this.each((function() {
					var n = d.queue(this, t, e);
					d._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && d.dequeue(this, t)
				}))
			},
			dequeue: function(t) {
				return this.each((function() {
					d.dequeue(this, t)
				}))
			},
			clearQueue: function(t) {
				return this.queue(t || "fx", [])
			},
			promise: function(t, e) {
				var n, i = 1,
					o = d.Deferred(),
					r = this,
					s = this.length,
					a = function() {
						--i || o.resolveWith(r, [r])
					};
				for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = z.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
				return a(), o.promise(e)
			}
		});
		var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			B = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
			U = ["Top", "Right", "Bottom", "Left"],
			V = function(t, e) {
				return t = e || t, "none" === d.css(t, "display") || !d.contains(t.ownerDocument, t)
			};

		function Q(t, e, n, i) {
			var o, r = 1,
				s = 20,
				a = i ? function() {
					return i.cur()
				} : function() {
					return d.css(t, e, "")
				},
				l = a(),
				c = n && n[3] || (d.cssNumber[e] ? "" : "px"),
				h = (d.cssNumber[e] || "px" !== c && +l) && B.exec(d.css(t, e));
			if (h && h[3] !== c) {
				c = c || h[3], n = n || [], h = +l || 1;
				do {
					h /= r = r || ".5", d.style(t, e, h + c)
				} while (r !== (r = a() / l) && 1 !== r && --s)
			}
			return n && (h = +h || +l || 0, o = n[1] ? h + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = h, i.end = o)), o
		}
		var X = /^(?:checkbox|radio)$/i,
			G = /<([\w:-]+)/,
			Y = /^$|\/(?:java|ecma)script/i,
			Z = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				thead: [1, "<table>", "</table>"],
				col: [2, "<table><colgroup>", "</colgroup></table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: [0, "", ""]
			};

		function J(t, e) {
			var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
			return void 0 === e || e && d.nodeName(t, e) ? d.merge([t], n) : n
		}

		function K(t, e) {
			for (var n = 0, i = t.length; i > n; n++) z.set(t[n], "globalEval", !e || z.get(e[n], "globalEval"))
		}
		Z.optgroup = Z.option, Z.tbody = Z.tfoot = Z.colgroup = Z.caption = Z.thead, Z.th = Z.td;
		var tt = /<|&#?\w+;/;

		function et(t, e, n, i, o) {
			for (var r, s, a, l, c, h, u = e.createDocumentFragment(), p = [], f = 0, g = t.length; g > f; f++)
				if ((r = t[f]) || 0 === r)
					if ("object" === d.type(r)) d.merge(p, r.nodeType ? [r] : r);
					else if (tt.test(r)) {
				for (s = s || u.appendChild(e.createElement("div")), a = (G.exec(r) || ["", ""])[1].toLowerCase(), l = Z[a] || Z._default, s.innerHTML = l[1] + d.htmlPrefilter(r) + l[2], h = l[0]; h--;) s = s.lastChild;
				d.merge(p, s.childNodes), (s = u.firstChild).textContent = ""
			} else p.push(e.createTextNode(r));
			for (u.textContent = "", f = 0; r = p[f++];)
				if (i && d.inArray(r, i) > -1) o && o.push(r);
				else if (c = d.contains(r.ownerDocument, r), s = J(u.appendChild(r), "script"), c && K(s), n)
				for (h = 0; r = s[h++];) Y.test(r.type || "") && n.push(r);
			return u
		}! function() {
			var t = i.createDocumentFragment().appendChild(i.createElement("div")),
				e = i.createElement("input");
			e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), u.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", u.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
		}();
		var nt = /^key/,
			it = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
			ot = /^([^.]*)(?:\.(.+)|)/;

		function rt() {
			return !0
		}

		function st() {
			return !1
		}

		function at() {
			try {
				return i.activeElement
			} catch (t) {}
		}

		function lt(t, e, n, i, o, r) {
			var s, a;
			if ("object" == typeof e) {
				for (a in "string" != typeof n && (i = i || n, n = void 0), e) lt(t, a, n, i, e[a], r);
				return t
			}
			if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = st;
			else if (!o) return t;
			return 1 === r && (s = o, o = function(t) {
				return d().off(t), s.apply(this, arguments)
			}, o.guid = s.guid || (s.guid = d.guid++)), t.each((function() {
				d.event.add(this, e, o, i, n)
			}))
		}
		d.event = {
			global: {},
			add: function(t, e, n, i, o) {
				var r, s, a, l, c, h, u, p, f, g, m, v = z.get(t);
				if (v)
					for (n.handler && (n = (r = n).handler, o = r.selector), n.guid || (n.guid = d.guid++), (l = v.events) || (l = v.events = {}), (s = v.handle) || (s = v.handle = function(e) {
							return void 0 !== d && d.event.triggered !== e.type ? d.event.dispatch.apply(t, arguments) : void 0
						}), c = (e = (e || "").match(O) || [""]).length; c--;) f = m = (a = ot.exec(e[c]) || [])[1], g = (a[2] || "").split(".").sort(), f && (u = d.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = d.event.special[f] || {}, h = d.extend({
						type: f,
						origType: m,
						data: i,
						handler: n,
						guid: n.guid,
						selector: o,
						needsContext: o && d.expr.match.needsContext.test(o),
						namespace: g.join(".")
					}, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, g, s) || t.addEventListener && t.addEventListener(f, s)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, h) : p.push(h), d.event.global[f] = !0)
			},
			remove: function(t, e, n, i, o) {
				var r, s, a, l, c, h, u, p, f, g, m, v = z.hasData(t) && z.get(t);
				if (v && (l = v.events)) {
					for (c = (e = (e || "").match(O) || [""]).length; c--;)
						if (f = m = (a = ot.exec(e[c]) || [])[1], g = (a[2] || "").split(".").sort(), f) {
							for (u = d.event.special[f] || {}, p = l[f = (i ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) h = p[r], !o && m !== h.origType || n && n.guid !== h.guid || a && !a.test(h.namespace) || i && i !== h.selector && ("**" !== i || !h.selector) || (p.splice(r, 1), h.selector && p.delegateCount--, u.remove && u.remove.call(t, h));
							s && !p.length && (u.teardown && !1 !== u.teardown.call(t, g, v.handle) || d.removeEvent(t, f, v.handle), delete l[f])
						} else
							for (f in l) d.event.remove(t, f + e[c], n, i, !0);
					d.isEmptyObject(l) && z.remove(t, "handle events")
				}
			},
			dispatch: function(t) {
				t = d.event.fix(t);
				var e, n, i, r, s, a = [],
					l = o.call(arguments),
					c = (z.get(this, "events") || {})[t.type] || [],
					h = d.event.special[t.type] || {};
				if (l[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
					for (a = d.event.handlers.call(this, t, c), e = 0;
						(r = a[e++]) && !t.isPropagationStopped();)
						for (t.currentTarget = r.elem, n = 0;
							(s = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, void 0 !== (i = ((d.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
					return h.postDispatch && h.postDispatch.call(this, t), t.result
				}
			},
			handlers: function(t, e) {
				var n, i, o, r, s = [],
					a = e.delegateCount,
					l = t.target;
				if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
					for (; l !== this; l = l.parentNode || this)
						if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
							for (i = [], n = 0; a > n; n++) void 0 === i[o = (r = e[n]).selector + " "] && (i[o] = r.needsContext ? d(o, this).index(l) > -1 : d.find(o, this, null, [l]).length), i[o] && i.push(r);
							i.length && s.push({
								elem: l,
								handlers: i
							})
						} return a < e.length && s.push({
					elem: this,
					handlers: e.slice(a)
				}), s
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function(t, e) {
					return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function(t, e) {
					var n, o, r, s = e.button;
					return null == t.pageX && null != e.clientX && (o = (n = t.target.ownerDocument || i).documentElement, r = n.body, t.pageX = e.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
				}
			},
			fix: function(t) {
				if (t[d.expando]) return t;
				var e, n, o, r = t.type,
					s = t,
					a = this.fixHooks[r];
				for (a || (this.fixHooks[r] = a = it.test(r) ? this.mouseHooks : nt.test(r) ? this.keyHooks : {}), o = a.props ? this.props.concat(a.props) : this.props, t = new d.Event(s), e = o.length; e--;) t[n = o[e]] = s[n];
				return t.target || (t.target = i), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, s) : t
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function() {
						return this !== at() && this.focus ? (this.focus(), !1) : void 0
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function() {
						return this === at() && this.blur ? (this.blur(), !1) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function() {
						return "checkbox" === this.type && this.click && d.nodeName(this, "input") ? (this.click(), !1) : void 0
					},
					_default: function(t) {
						return d.nodeName(t.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function(t) {
						void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
					}
				}
			}
		}, d.removeEvent = function(t, e, n) {
			t.removeEventListener && t.removeEventListener(e, n)
		}, d.Event = function(t, e) {
			return this instanceof d.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? rt : st) : this.type = t, e && d.extend(this, e), this.timeStamp = t && t.timeStamp || d.now(), void(this[d.expando] = !0)) : new d.Event(t, e)
		}, d.Event.prototype = {
			constructor: d.Event,
			isDefaultPrevented: st,
			isPropagationStopped: st,
			isImmediatePropagationStopped: st,
			isSimulated: !1,
			preventDefault: function() {
				var t = this.originalEvent;
				this.isDefaultPrevented = rt, t && !this.isSimulated && t.preventDefault()
			},
			stopPropagation: function() {
				var t = this.originalEvent;
				this.isPropagationStopped = rt, t && !this.isSimulated && t.stopPropagation()
			},
			stopImmediatePropagation: function() {
				var t = this.originalEvent;
				this.isImmediatePropagationStopped = rt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
			}
		}, d.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, (function(t, e) {
			d.event.special[t] = {
				delegateType: e,
				bindType: e,
				handle: function(t) {
					var n, i = this,
						o = t.relatedTarget,
						r = t.handleObj;
					return o && (o === i || d.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
				}
			}
		})), d.fn.extend({
			on: function(t, e, n, i) {
				return lt(this, t, e, n, i)
			},
			one: function(t, e, n, i) {
				return lt(this, t, e, n, i, 1)
			},
			off: function(t, e, n) {
				var i, o;
				if (t && t.preventDefault && t.handleObj) return i = t.handleObj, d(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
				if ("object" == typeof t) {
					for (o in t) this.off(o, e, t[o]);
					return this
				}
				return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = st), this.each((function() {
					d.event.remove(this, t, n, e)
				}))
			}
		});
		var ct = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
			ht = /<script|<style|<link/i,
			ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
			pt = /^true\/(.*)/,
			dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

		function ft(t, e) {
			return d.nodeName(t, "table") && d.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
		}

		function gt(t) {
			return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
		}

		function mt(t) {
			var e = pt.exec(t.type);
			return e ? t.type = e[1] : t.removeAttribute("type"), t
		}

		function vt(t, e) {
			var n, i, o, r, s, a, l, c;
			if (1 === e.nodeType) {
				if (z.hasData(t) && (r = z.access(t), s = z.set(e, r), c = r.events))
					for (o in delete s.handle, s.events = {}, c)
						for (n = 0, i = c[o].length; i > n; n++) d.event.add(e, o, c[o][n]);
				R.hasData(t) && (a = R.access(t), l = d.extend({}, a), R.set(e, l))
			}
		}

		function yt(t, e) {
			var n = e.nodeName.toLowerCase();
			"input" === n && X.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
		}

		function bt(t, e, n, i) {
			e = r.apply([], e);
			var o, s, a, l, c, h, p = 0,
				f = t.length,
				g = f - 1,
				m = e[0],
				v = d.isFunction(m);
			if (v || f > 1 && "string" == typeof m && !u.checkClone && ut.test(m)) return t.each((function(o) {
				var r = t.eq(o);
				v && (e[0] = m.call(this, o, r.html())), bt(r, e, n, i)
			}));
			if (f && (s = (o = et(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
				for (l = (a = d.map(J(o, "script"), gt)).length; f > p; p++) c = o, p !== g && (c = d.clone(c, !0, !0), l && d.merge(a, J(c, "script"))), n.call(t[p], c, p);
				if (l)
					for (h = a[a.length - 1].ownerDocument, d.map(a, mt), p = 0; l > p; p++) c = a[p], Y.test(c.type || "") && !z.access(c, "globalEval") && d.contains(h, c) && (c.src ? d._evalUrl && d._evalUrl(c.src) : d.globalEval(c.textContent.replace(dt, "")))
			}
			return t
		}

		function wt(t, e, n) {
			for (var i, o = e ? d.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || d.cleanData(J(i)), i.parentNode && (n && d.contains(i.ownerDocument, i) && K(J(i, "script")), i.parentNode.removeChild(i));
			return t
		}
		d.extend({
			htmlPrefilter: function(t) {
				return t.replace(ct, "<$1></$2>")
			},
			clone: function(t, e, n) {
				var i, o, r, s, a = t.cloneNode(!0),
					l = d.contains(t.ownerDocument, t);
				if (!(u.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || d.isXMLDoc(t)))
					for (s = J(a), i = 0, o = (r = J(t)).length; o > i; i++) yt(r[i], s[i]);
				if (e)
					if (n)
						for (r = r || J(t), s = s || J(a), i = 0, o = r.length; o > i; i++) vt(r[i], s[i]);
					else vt(t, a);
				return (s = J(a, "script")).length > 0 && K(s, !l && J(t, "script")), a
			},
			cleanData: function(t) {
				for (var e, n, i, o = d.event.special, r = 0; void 0 !== (n = t[r]); r++)
					if (I(n)) {
						if (e = n[z.expando]) {
							if (e.events)
								for (i in e.events) o[i] ? d.event.remove(n, i) : d.removeEvent(n, i, e.handle);
							n[z.expando] = void 0
						}
						n[R.expando] && (n[R.expando] = void 0)
					}
			}
		}), d.fn.extend({
			domManip: bt,
			detach: function(t) {
				return wt(this, t, !0)
			},
			remove: function(t) {
				return wt(this, t)
			},
			text: function(t) {
				return P(this, (function(t) {
					return void 0 === t ? d.text(this) : this.empty().each((function() {
						1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
					}))
				}), null, t, arguments.length)
			},
			append: function() {
				return bt(this, arguments, (function(t) {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ft(this, t).appendChild(t)
				}))
			},
			prepend: function() {
				return bt(this, arguments, (function(t) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var e = ft(this, t);
						e.insertBefore(t, e.firstChild)
					}
				}))
			},
			before: function() {
				return bt(this, arguments, (function(t) {
					this.parentNode && this.parentNode.insertBefore(t, this)
				}))
			},
			after: function() {
				return bt(this, arguments, (function(t) {
					this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
				}))
			},
			empty: function() {
				for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (d.cleanData(J(t, !1)), t.textContent = "");
				return this
			},
			clone: function(t, e) {
				return t = null != t && t, e = null == e ? t : e, this.map((function() {
					return d.clone(this, t, e)
				}))
			},
			html: function(t) {
				return P(this, (function(t) {
					var e = this[0] || {},
						n = 0,
						i = this.length;
					if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
					if ("string" == typeof t && !ht.test(t) && !Z[(G.exec(t) || ["", ""])[1].toLowerCase()]) {
						t = d.htmlPrefilter(t);
						try {
							for (; i > n; n++) 1 === (e = this[n] || {}).nodeType && (d.cleanData(J(e, !1)), e.innerHTML = t);
							e = 0
						} catch (t) {}
					}
					e && this.empty().append(t)
				}), null, t, arguments.length)
			},
			replaceWith: function() {
				var t = [];
				return bt(this, arguments, (function(e) {
					var n = this.parentNode;
					d.inArray(this, t) < 0 && (d.cleanData(J(this)), n && n.replaceChild(e, this))
				}), t)
			}
		}), d.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, (function(t, e) {
			d.fn[t] = function(t) {
				for (var n, i = [], o = d(t), r = o.length - 1, a = 0; r >= a; a++) n = a === r ? this : this.clone(!0), d(o[a])[e](n), s.apply(i, n.get());
				return this.pushStack(i)
			}
		}));
		var xt, _t = {
			HTML: "block",
			BODY: "block"
		};

		function Ct(t, e) {
			var n = d(e.createElement(t)).appendTo(e.body),
				i = d.css(n[0], "display");
			return n.detach(), i
		}

		function Tt(t) {
			var e = i,
				n = _t[t];
			return n || ("none" !== (n = Ct(t, e)) && n || ((e = (xt = (xt || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), n = Ct(t, e), xt.detach()), _t[t] = n), n
		}
		var kt = /^margin/,
			$t = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
			St = function(e) {
				var n = e.ownerDocument.defaultView;
				return n && n.opener || (n = t), n.getComputedStyle(e)
			},
			Et = function(t, e, n, i) {
				var o, r, s = {};
				for (r in e) s[r] = t.style[r], t.style[r] = e[r];
				for (r in o = n.apply(t, i || []), e) t.style[r] = s[r];
				return o
			},
			At = i.documentElement;

		function Dt(t, e, n) {
			var i, o, r, s, a = t.style;
			return "" !== (s = (n = n || St(t)) ? n.getPropertyValue(e) || n[e] : void 0) && void 0 !== s || d.contains(t.ownerDocument, t) || (s = d.style(t, e)), n && !u.pixelMarginRight() && $t.test(s) && kt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r), void 0 !== s ? s + "" : s
		}

		function Nt(t, e) {
			return {
				get: function() {
					return t() ? void delete this.get : (this.get = e).apply(this, arguments)
				}
			}
		}! function() {
			var e, n, o, r, s = i.createElement("div"),
				a = i.createElement("div");
			if (a.style) {
				function l() {
					a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", At.appendChild(s);
					var i = t.getComputedStyle(a);
					e = "1%" !== i.top, r = "2px" === i.marginLeft, n = "4px" === i.width, a.style.marginRight = "50%", o = "4px" === i.marginRight, At.removeChild(s)
				}
				a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), d.extend(u, {
					pixelPosition: function() {
						return l(), e
					},
					boxSizingReliable: function() {
						return null == n && l(), n
					},
					pixelMarginRight: function() {
						return null == n && l(), o
					},
					reliableMarginLeft: function() {
						return null == n && l(), r
					},
					reliableMarginRight: function() {
						var e, n = a.appendChild(i.createElement("div"));
						return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", At.appendChild(s), e = !parseFloat(t.getComputedStyle(n).marginRight), At.removeChild(s), a.removeChild(n), e
					}
				})
			}
		}();
		var jt = /^(none|table(?!-c[ea]).+)/,
			Ot = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			Lt = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			Pt = ["Webkit", "O", "Moz", "ms"],
			It = i.createElement("div").style;

		function Ht(t) {
			if (t in It) return t;
			for (var e = t[0].toUpperCase() + t.slice(1), n = Pt.length; n--;)
				if ((t = Pt[n] + e) in It) return t
		}

		function zt(t, e, n) {
			var i = B.exec(e);
			return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
		}

		function Rt(t, e, n, i, o) {
			for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === n && (s += d.css(t, n + U[r], !0, o)), i ? ("content" === n && (s -= d.css(t, "padding" + U[r], !0, o)), "margin" !== n && (s -= d.css(t, "border" + U[r] + "Width", !0, o))) : (s += d.css(t, "padding" + U[r], !0, o), "padding" !== n && (s += d.css(t, "border" + U[r] + "Width", !0, o)));
			return s
		}

		function Ft(t, e, n) {
			var i = !0,
				o = "width" === e ? t.offsetWidth : t.offsetHeight,
				r = St(t),
				s = "border-box" === d.css(t, "boxSizing", !1, r);
			if (0 >= o || null == o) {
				if ((0 > (o = Dt(t, e, r)) || null == o) && (o = t.style[e]), $t.test(o)) return o;
				i = s && (u.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
			}
			return o + Rt(t, e, n || (s ? "border" : "content"), i, r) + "px"
		}

		function Mt(t, e) {
			for (var n, i, o, r = [], s = 0, a = t.length; a > s; s++)(i = t[s]).style && (r[s] = z.get(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && V(i) && (r[s] = z.access(i, "olddisplay", Tt(i.nodeName)))) : (o = V(i), "none" === n && o || z.set(i, "olddisplay", o ? n : d.css(i, "display"))));
			for (s = 0; a > s; s++)(i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
			return t
		}

		function qt(t, e, n, i, o) {
			return new qt.prototype.init(t, e, n, i, o)
		}
		d.extend({
			cssHooks: {
				opacity: {
					get: function(t, e) {
						if (e) {
							var n = Dt(t, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				float: "cssFloat"
			},
			style: function(t, e, n, i) {
				if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
					var o, r, s, a = d.camelCase(e),
						l = t.style;
					return e = d.cssProps[a] || (d.cssProps[a] = Ht(a) || a), s = d.cssHooks[e] || d.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e] : ("string" === (r = typeof n) && (o = B.exec(n)) && o[1] && (n = Q(t, e, o), r = "number"), void(null != n && n == n && ("number" === r && (n += o && o[3] || (d.cssNumber[a] ? "" : "px")), u.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
				}
			},
			css: function(t, e, n, i) {
				var o, r, s, a = d.camelCase(e);
				return e = d.cssProps[a] || (d.cssProps[a] = Ht(a) || a), (s = d.cssHooks[e] || d.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Dt(t, e, i)), "normal" === o && e in Lt && (o = Lt[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
			}
		}), d.each(["height", "width"], (function(t, e) {
			d.cssHooks[e] = {
				get: function(t, n, i) {
					return n ? jt.test(d.css(t, "display")) && 0 === t.offsetWidth ? Et(t, Ot, (function() {
						return Ft(t, e, i)
					})) : Ft(t, e, i) : void 0
				},
				set: function(t, n, i) {
					var o, r = i && St(t),
						s = i && Rt(t, e, i, "border-box" === d.css(t, "boxSizing", !1, r), r);
					return s && (o = B.exec(n)) && "px" !== (o[3] || "px") && (t.style[e] = n, n = d.css(t, e)), zt(0, n, s)
				}
			}
		})), d.cssHooks.marginLeft = Nt(u.reliableMarginLeft, (function(t, e) {
			return e ? (parseFloat(Dt(t, "marginLeft")) || t.getBoundingClientRect().left - Et(t, {
				marginLeft: 0
			}, (function() {
				return t.getBoundingClientRect().left
			}))) + "px" : void 0
		})), d.cssHooks.marginRight = Nt(u.reliableMarginRight, (function(t, e) {
			return e ? Et(t, {
				display: "inline-block"
			}, Dt, [t, "marginRight"]) : void 0
		})), d.each({
			margin: "",
			padding: "",
			border: "Width"
		}, (function(t, e) {
			d.cssHooks[t + e] = {
				expand: function(n) {
					for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + U[i] + e] = r[i] || r[i - 2] || r[0];
					return o
				}
			}, kt.test(t) || (d.cssHooks[t + e].set = zt)
		})), d.fn.extend({
			css: function(t, e) {
				return P(this, (function(t, e, n) {
					var i, o, r = {},
						s = 0;
					if (d.isArray(e)) {
						for (i = St(t), o = e.length; o > s; s++) r[e[s]] = d.css(t, e[s], !1, i);
						return r
					}
					return void 0 !== n ? d.style(t, e, n) : d.css(t, e)
				}), t, e, arguments.length > 1)
			},
			show: function() {
				return Mt(this, !0)
			},
			hide: function() {
				return Mt(this)
			},
			toggle: function(t) {
				return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
					V(this) ? d(this).show() : d(this).hide()
				}))
			}
		}), d.Tween = qt, qt.prototype = {
			constructor: qt,
			init: function(t, e, n, i, o, r) {
				this.elem = t, this.prop = n, this.easing = o || d.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (d.cssNumber[n] ? "" : "px")
			},
			cur: function() {
				var t = qt.propHooks[this.prop];
				return t && t.get ? t.get(this) : qt.propHooks._default.get(this)
			},
			run: function(t) {
				var e, n = qt.propHooks[this.prop];
				return this.options.duration ? this.pos = e = d.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : qt.propHooks._default.set(this), this
			}
		}, qt.prototype.init.prototype = qt.prototype, qt.propHooks = {
			_default: {
				get: function(t) {
					var e;
					return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = d.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
				},
				set: function(t) {
					d.fx.step[t.prop] ? d.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[d.cssProps[t.prop]] && !d.cssHooks[t.prop] ? t.elem[t.prop] = t.now : d.style(t.elem, t.prop, t.now + t.unit)
				}
			}
		}, qt.propHooks.scrollTop = qt.propHooks.scrollLeft = {
			set: function(t) {
				t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
			}
		}, d.easing = {
			linear: function(t) {
				return t
			},
			swing: function(t) {
				return .5 - Math.cos(t * Math.PI) / 2
			},
			_default: "swing"
		}, d.fx = qt.prototype.init, d.fx.step = {};
		var Wt, Bt, Ut = /^(?:toggle|show|hide)$/,
			Vt = /queueHooks$/;

		function Qt() {
			return t.setTimeout((function() {
				Wt = void 0
			})), Wt = d.now()
		}

		function Xt(t, e) {
			var n, i = 0,
				o = {
					height: t
				};
			for (e = e ? 1 : 0; 4 > i; i += 2 - e) o["margin" + (n = U[i])] = o["padding" + n] = t;
			return e && (o.opacity = o.width = t), o
		}

		function Gt(t, e, n) {
			for (var i, o = (Yt.tweeners[e] || []).concat(Yt.tweeners["*"]), r = 0, s = o.length; s > r; r++)
				if (i = o[r].call(n, e, t)) return i
		}

		function Yt(t, e, n) {
			var i, o, r = 0,
				s = Yt.prefilters.length,
				a = d.Deferred().always((function() {
					delete l.elem
				})),
				l = function() {
					if (o) return !1;
					for (var e = Wt || Qt(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), r = 0, s = c.tweens.length; s > r; r++) c.tweens[r].run(i);
					return a.notifyWith(t, [c, i, n]), 1 > i && s ? n : (a.resolveWith(t, [c]), !1)
				},
				c = a.promise({
					elem: t,
					props: d.extend({}, e),
					opts: d.extend(!0, {
						specialEasing: {},
						easing: d.easing._default
					}, n),
					originalProperties: e,
					originalOptions: n,
					startTime: Wt || Qt(),
					duration: n.duration,
					tweens: [],
					createTween: function(e, n) {
						var i = d.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
						return c.tweens.push(i), i
					},
					stop: function(e) {
						var n = 0,
							i = e ? c.tweens.length : 0;
						if (o) return this;
						for (o = !0; i > n; n++) c.tweens[n].run(1);
						return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
					}
				}),
				h = c.props;
			for (function(t, e) {
					var n, i, o, r, s;
					for (n in t)
						if (o = e[i = d.camelCase(n)], r = t[n], d.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = d.cssHooks[i]) && "expand" in s)
							for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
						else e[i] = o
				}(h, c.opts.specialEasing); s > r; r++)
				if (i = Yt.prefilters[r].call(c, t, h, c.opts)) return d.isFunction(i.stop) && (d._queueHooks(c.elem, c.opts.queue).stop = d.proxy(i.stop, i)), i;
			return d.map(h, Gt, c), d.isFunction(c.opts.start) && c.opts.start.call(t, c), d.fx.timer(d.extend(l, {
				elem: t,
				anim: c,
				queue: c.opts.queue
			})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
		}
		d.Animation = d.extend(Yt, {
				tweeners: {
					"*": [function(t, e) {
						var n = this.createTween(t, e);
						return Q(n.elem, t, B.exec(e), n), n
					}]
				},
				tweener: function(t, e) {
					d.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(O);
					for (var n, i = 0, o = t.length; o > i; i++) n = t[i], Yt.tweeners[n] = Yt.tweeners[n] || [], Yt.tweeners[n].unshift(e)
				},
				prefilters: [function(t, e, n) {
					var i, o, r, s, a, l, c, h = this,
						u = {},
						p = t.style,
						f = t.nodeType && V(t),
						g = z.get(t, "fxshow");
					for (i in n.queue || (null == (a = d._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
							a.unqueued || l()
						}), a.unqueued++, h.always((function() {
							h.always((function() {
								a.unqueued--, d.queue(t, "fx").length || a.empty.fire()
							}))
						}))), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (c = d.css(t, "display")) ? z.get(t, "olddisplay") || Tt(t.nodeName) : c) && "none" === d.css(t, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always((function() {
							p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
						}))), e)
						if (o = e[i], Ut.exec(o)) {
							if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
								if ("show" !== o || !g || void 0 === g[i]) continue;
								f = !0
							}
							u[i] = g && g[i] || d.style(t, i)
						} else c = void 0;
					if (d.isEmptyObject(u)) "inline" === ("none" === c ? Tt(t.nodeName) : c) && (p.display = c);
					else
						for (i in g ? "hidden" in g && (f = g.hidden) : g = z.access(t, "fxshow", {}), r && (g.hidden = !f), f ? d(t).show() : h.done((function() {
								d(t).hide()
							})), h.done((function() {
								var e;
								for (e in z.remove(t, "fxshow"), u) d.style(t, e, u[e])
							})), u) s = Gt(f ? g[i] : 0, i, h), i in g || (g[i] = s.start, f && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
				}],
				prefilter: function(t, e) {
					e ? Yt.prefilters.unshift(t) : Yt.prefilters.push(t)
				}
			}), d.speed = function(t, e, n) {
				var i = t && "object" == typeof t ? d.extend({}, t) : {
					complete: n || !n && e || d.isFunction(t) && t,
					duration: t,
					easing: n && e || e && !d.isFunction(e) && e
				};
				return i.duration = d.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in d.fx.speeds ? d.fx.speeds[i.duration] : d.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
					d.isFunction(i.old) && i.old.call(this), i.queue && d.dequeue(this, i.queue)
				}, i
			}, d.fn.extend({
				fadeTo: function(t, e, n, i) {
					return this.filter(V).css("opacity", 0).show().end().animate({
						opacity: e
					}, t, n, i)
				},
				animate: function(t, e, n, i) {
					var o = d.isEmptyObject(t),
						r = d.speed(e, n, i),
						s = function() {
							var e = Yt(this, d.extend({}, t), r);
							(o || z.get(this, "finish")) && e.stop(!0)
						};
					return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
				},
				stop: function(t, e, n) {
					var i = function(t) {
						var e = t.stop;
						delete t.stop, e(n)
					};
					return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each((function() {
						var e = !0,
							o = null != t && t + "queueHooks",
							r = d.timers,
							s = z.get(this);
						if (o) s[o] && s[o].stop && i(s[o]);
						else
							for (o in s) s[o] && s[o].stop && Vt.test(o) && i(s[o]);
						for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
						!e && n || d.dequeue(this, t)
					}))
				},
				finish: function(t) {
					return !1 !== t && (t = t || "fx"), this.each((function() {
						var e, n = z.get(this),
							i = n[t + "queue"],
							o = n[t + "queueHooks"],
							r = d.timers,
							s = i ? i.length : 0;
						for (n.finish = !0, d.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
						for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
						delete n.finish
					}))
				}
			}), d.each(["toggle", "show", "hide"], (function(t, e) {
				var n = d.fn[e];
				d.fn[e] = function(t, i, o) {
					return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(Xt(e, !0), t, i, o)
				}
			})), d.each({
				slideDown: Xt("show"),
				slideUp: Xt("hide"),
				slideToggle: Xt("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, (function(t, e) {
				d.fn[t] = function(t, n, i) {
					return this.animate(e, t, n, i)
				}
			})), d.timers = [], d.fx.tick = function() {
				var t, e = 0,
					n = d.timers;
				for (Wt = d.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
				n.length || d.fx.stop(), Wt = void 0
			}, d.fx.timer = function(t) {
				d.timers.push(t), t() ? d.fx.start() : d.timers.pop()
			}, d.fx.interval = 13, d.fx.start = function() {
				Bt || (Bt = t.setInterval(d.fx.tick, d.fx.interval))
			}, d.fx.stop = function() {
				t.clearInterval(Bt), Bt = null
			}, d.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, d.fn.delay = function(e, n) {
				return e = d.fx && d.fx.speeds[e] || e, n = n || "fx", this.queue(n, (function(n, i) {
					var o = t.setTimeout(n, e);
					i.stop = function() {
						t.clearTimeout(o)
					}
				}))
			},
			function() {
				var t = i.createElement("input"),
					e = i.createElement("select"),
					n = e.appendChild(i.createElement("option"));
				t.type = "checkbox", u.checkOn = "" !== t.value, u.optSelected = n.selected, e.disabled = !0, u.optDisabled = !n.disabled, (t = i.createElement("input")).value = "t", t.type = "radio", u.radioValue = "t" === t.value
			}();
		var Zt, Jt = d.expr.attrHandle;
		d.fn.extend({
			attr: function(t, e) {
				return P(this, d.attr, t, e, arguments.length > 1)
			},
			removeAttr: function(t) {
				return this.each((function() {
					d.removeAttr(this, t)
				}))
			}
		}), d.extend({
			attr: function(t, e, n) {
				var i, o, r = t.nodeType;
				if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? d.prop(t, e, n) : (1 === r && d.isXMLDoc(t) || (e = e.toLowerCase(), o = d.attrHooks[e] || (d.expr.match.bool.test(e) ? Zt : void 0)), void 0 !== n ? null === n ? void d.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = d.find.attr(t, e)) ? void 0 : i)
			},
			attrHooks: {
				type: {
					set: function(t, e) {
						if (!u.radioValue && "radio" === e && d.nodeName(t, "input")) {
							var n = t.value;
							return t.setAttribute("type", e), n && (t.value = n), e
						}
					}
				}
			},
			removeAttr: function(t, e) {
				var n, i, o = 0,
					r = e && e.match(O);
				if (r && 1 === t.nodeType)
					for (; n = r[o++];) i = d.propFix[n] || n, d.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
			}
		}), Zt = {
			set: function(t, e, n) {
				return !1 === e ? d.removeAttr(t, n) : t.setAttribute(n, n), n
			}
		}, d.each(d.expr.match.bool.source.match(/\w+/g), (function(t, e) {
			var n = Jt[e] || d.find.attr;
			Jt[e] = function(t, e, i) {
				var o, r;
				return i || (r = Jt[e], Jt[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, Jt[e] = r), o
			}
		}));
		var Kt = /^(?:input|select|textarea|button)$/i,
			te = /^(?:a|area)$/i;
		d.fn.extend({
			prop: function(t, e) {
				return P(this, d.prop, t, e, arguments.length > 1)
			},
			removeProp: function(t) {
				return this.each((function() {
					delete this[d.propFix[t] || t]
				}))
			}
		}), d.extend({
			prop: function(t, e, n) {
				var i, o, r = t.nodeType;
				if (3 !== r && 8 !== r && 2 !== r) return 1 === r && d.isXMLDoc(t) || (e = d.propFix[e] || e, o = d.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
			},
			propHooks: {
				tabIndex: {
					get: function(t) {
						var e = d.find.attr(t, "tabindex");
						return e ? parseInt(e, 10) : Kt.test(t.nodeName) || te.test(t.nodeName) && t.href ? 0 : -1
					}
				}
			},
			propFix: {
				for: "htmlFor",
				class: "className"
			}
		}), u.optSelected || (d.propHooks.selected = {
			get: function(t) {
				var e = t.parentNode;
				return e && e.parentNode && e.parentNode.selectedIndex, null
			},
			set: function(t) {
				var e = t.parentNode;
				e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
			}
		}), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
			d.propFix[this.toLowerCase()] = this
		}));
		var ee = /[\t\r\n\f]/g;

		function ne(t) {
			return t.getAttribute && t.getAttribute("class") || ""
		}
		d.fn.extend({
			addClass: function(t) {
				var e, n, i, o, r, s, a, l = 0;
				if (d.isFunction(t)) return this.each((function(e) {
					d(this).addClass(t.call(this, e, ne(this)))
				}));
				if ("string" == typeof t && t)
					for (e = t.match(O) || []; n = this[l++];)
						if (o = ne(n), i = 1 === n.nodeType && (" " + o + " ").replace(ee, " ")) {
							for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
							o !== (a = d.trim(i)) && n.setAttribute("class", a)
						} return this
			},
			removeClass: function(t) {
				var e, n, i, o, r, s, a, l = 0;
				if (d.isFunction(t)) return this.each((function(e) {
					d(this).removeClass(t.call(this, e, ne(this)))
				}));
				if (!arguments.length) return this.attr("class", "");
				if ("string" == typeof t && t)
					for (e = t.match(O) || []; n = this[l++];)
						if (o = ne(n), i = 1 === n.nodeType && (" " + o + " ").replace(ee, " ")) {
							for (s = 0; r = e[s++];)
								for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
							o !== (a = d.trim(i)) && n.setAttribute("class", a)
						} return this
			},
			toggleClass: function(t, e) {
				var n = typeof t;
				return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : d.isFunction(t) ? this.each((function(n) {
					d(this).toggleClass(t.call(this, n, ne(this), e), e)
				})) : this.each((function() {
					var e, i, o, r;
					if ("string" === n)
						for (i = 0, o = d(this), r = t.match(O) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
					else void 0 !== t && "boolean" !== n || ((e = ne(this)) && z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : z.get(this, "__className__") || ""))
				}))
			},
			hasClass: function(t) {
				var e, n, i = 0;
				for (e = " " + t + " "; n = this[i++];)
					if (1 === n.nodeType && (" " + ne(n) + " ").replace(ee, " ").indexOf(e) > -1) return !0;
				return !1
			}
		});
		var ie = /\r/g,
			oe = /[\x20\t\r\n\f]+/g;
		d.fn.extend({
			val: function(t) {
				var e, n, i, o = this[0];
				return arguments.length ? (i = d.isFunction(t), this.each((function(n) {
					var o;
					1 === this.nodeType && (null == (o = i ? t.call(this, n, d(this).val()) : t) ? o = "" : "number" == typeof o ? o += "" : d.isArray(o) && (o = d.map(o, (function(t) {
						return null == t ? "" : t + ""
					}))), (e = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
				}))) : o ? (e = d.valHooks[o.type] || d.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : "string" == typeof(n = o.value) ? n.replace(ie, "") : null == n ? "" : n : void 0
			}
		}), d.extend({
			valHooks: {
				option: {
					get: function(t) {
						var e = d.find.attr(t, "value");
						return null != e ? e : d.trim(d.text(t)).replace(oe, " ")
					}
				},
				select: {
					get: function(t) {
						for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
							if (((n = i[l]).selected || l === o) && (u.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
								if (e = d(n).val(), r) return e;
								s.push(e)
							} return s
					},
					set: function(t, e) {
						for (var n, i, o = t.options, r = d.makeArray(e), s = o.length; s--;)((i = o[s]).selected = d.inArray(d.valHooks.option.get(i), r) > -1) && (n = !0);
						return n || (t.selectedIndex = -1), r
					}
				}
			}
		}), d.each(["radio", "checkbox"], (function() {
			d.valHooks[this] = {
				set: function(t, e) {
					return d.isArray(e) ? t.checked = d.inArray(d(t).val(), e) > -1 : void 0
				}
			}, u.checkOn || (d.valHooks[this].get = function(t) {
				return null === t.getAttribute("value") ? "on" : t.value
			})
		}));
		var re = /^(?:focusinfocus|focusoutblur)$/;
		d.extend(d.event, {
			trigger: function(e, n, o, r) {
				var s, a, l, c, u, p, f, g = [o || i],
					m = h.call(e, "type") ? e.type : e,
					v = h.call(e, "namespace") ? e.namespace.split(".") : [];
				if (a = l = o = o || i, 3 !== o.nodeType && 8 !== o.nodeType && !re.test(m + d.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), u = m.indexOf(":") < 0 && "on" + m, (e = e[d.expando] ? e : new d.Event(m, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = o), n = null == n ? [e] : d.makeArray(n, [e]), f = d.event.special[m] || {}, r || !f.trigger || !1 !== f.trigger.apply(o, n))) {
					if (!r && !f.noBubble && !d.isWindow(o)) {
						for (c = f.delegateType || m, re.test(c + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
						l === (o.ownerDocument || i) && g.push(l.defaultView || l.parentWindow || t)
					}
					for (s = 0;
						(a = g[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? c : f.bindType || m, (p = (z.get(a, "events") || {})[e.type] && z.get(a, "handle")) && p.apply(a, n), (p = u && a[u]) && p.apply && I(a) && (e.result = p.apply(a, n), !1 === e.result && e.preventDefault());
					return e.type = m, r || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(g.pop(), n) || !I(o) || u && d.isFunction(o[m]) && !d.isWindow(o) && ((l = o[u]) && (o[u] = null), d.event.triggered = m, o[m](), d.event.triggered = void 0, l && (o[u] = l)), e.result
				}
			},
			simulate: function(t, e, n) {
				var i = d.extend(new d.Event, n, {
					type: t,
					isSimulated: !0
				});
				d.event.trigger(i, null, e)
			}
		}), d.fn.extend({
			trigger: function(t, e) {
				return this.each((function() {
					d.event.trigger(t, e, this)
				}))
			},
			triggerHandler: function(t, e) {
				var n = this[0];
				return n ? d.event.trigger(t, e, n, !0) : void 0
			}
		}), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(t, e) {
			d.fn[e] = function(t, n) {
				return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
			}
		})), d.fn.extend({
			hover: function(t, e) {
				return this.mouseenter(t).mouseleave(e || t)
			}
		}), u.focusin = "onfocusin" in t, u.focusin || d.each({
			focus: "focusin",
			blur: "focusout"
		}, (function(t, e) {
			var n = function(t) {
				d.event.simulate(e, t.target, d.event.fix(t))
			};
			d.event.special[e] = {
				setup: function() {
					var i = this.ownerDocument || this,
						o = z.access(i, e);
					o || i.addEventListener(t, n, !0), z.access(i, e, (o || 0) + 1)
				},
				teardown: function() {
					var i = this.ownerDocument || this,
						o = z.access(i, e) - 1;
					o ? z.access(i, e, o) : (i.removeEventListener(t, n, !0), z.remove(i, e))
				}
			}
		}));
		var se = t.location,
			ae = d.now(),
			le = /\?/;
		d.parseJSON = function(t) {
			return JSON.parse(t + "")
		}, d.parseXML = function(e) {
			var n;
			if (!e || "string" != typeof e) return null;
			try {
				n = (new t.DOMParser).parseFromString(e, "text/xml")
			} catch (t) {
				n = void 0
			}
			return n && !n.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + e), n
		};
		var ce = /#.*$/,
			he = /([?&])_=[^&]*/,
			ue = /^(.*?):[ \t]*([^\r\n]*)$/gm,
			pe = /^(?:GET|HEAD)$/,
			de = /^\/\//,
			fe = {},
			ge = {},
			me = "*/".concat("*"),
			ve = i.createElement("a");

		function ye(t) {
			return function(e, n) {
				"string" != typeof e && (n = e, e = "*");
				var i, o = 0,
					r = e.toLowerCase().match(O) || [];
				if (d.isFunction(n))
					for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
			}
		}

		function be(t, e, n, i) {
			var o = {},
				r = t === ge;

			function s(a) {
				var l;
				return o[a] = !0, d.each(t[a] || [], (function(t, a) {
					var c = a(e, n, i);
					return "string" != typeof c || r || o[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
				})), l
			}
			return s(e.dataTypes[0]) || !o["*"] && s("*")
		}

		function we(t, e) {
			var n, i, o = d.ajaxSettings.flatOptions || {};
			for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);
			return i && d.extend(!0, t, i), t
		}
		ve.href = se.href, d.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: se.href,
				type: "GET",
				isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(se.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": me,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /\bxml\b/,
					html: /\bhtml/,
					json: /\bjson\b/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": d.parseJSON,
					"text xml": d.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(t, e) {
				return e ? we(we(t, d.ajaxSettings), e) : we(d.ajaxSettings, t)
			},
			ajaxPrefilter: ye(fe),
			ajaxTransport: ye(ge),
			ajax: function(e, n) {
				"object" == typeof e && (n = e, e = void 0), n = n || {};
				var o, r, s, a, l, c, h, u, p = d.ajaxSetup({}, n),
					f = p.context || p,
					g = p.context && (f.nodeType || f.jquery) ? d(f) : d.event,
					m = d.Deferred(),
					v = d.Callbacks("once memory"),
					y = p.statusCode || {},
					b = {},
					w = {},
					x = 0,
					_ = "canceled",
					C = {
						readyState: 0,
						getResponseHeader: function(t) {
							var e;
							if (2 === x) {
								if (!a)
									for (a = {}; e = ue.exec(s);) a[e[1].toLowerCase()] = e[2];
								e = a[t.toLowerCase()]
							}
							return null == e ? null : e
						},
						getAllResponseHeaders: function() {
							return 2 === x ? s : null
						},
						setRequestHeader: function(t, e) {
							var n = t.toLowerCase();
							return x || (t = w[n] = w[n] || t, b[t] = e), this
						},
						overrideMimeType: function(t) {
							return x || (p.mimeType = t), this
						},
						statusCode: function(t) {
							var e;
							if (t)
								if (2 > x)
									for (e in t) y[e] = [y[e], t[e]];
								else C.always(t[C.status]);
							return this
						},
						abort: function(t) {
							var e = t || _;
							return o && o.abort(e), T(0, e), this
						}
					};
				if (m.promise(C).complete = v.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || se.href) + "").replace(ce, "").replace(de, se.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = d.trim(p.dataType || "*").toLowerCase().match(O) || [""], null == p.crossDomain) {
					c = i.createElement("a");
					try {
						c.href = p.url, c.href = c.href, p.crossDomain = ve.protocol + "//" + ve.host != c.protocol + "//" + c.host
					} catch (t) {
						p.crossDomain = !0
					}
				}
				if (p.data && p.processData && "string" != typeof p.data && (p.data = d.param(p.data, p.traditional)), be(fe, p, n, C), 2 === x) return C;
				for (u in (h = d.event && p.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !pe.test(p.type), r = p.url, p.hasContent || (p.data && (r = p.url += (le.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = he.test(r) ? r.replace(he, "$1_=" + ae++) : r + (le.test(r) ? "&" : "?") + "_=" + ae++)), p.ifModified && (d.lastModified[r] && C.setRequestHeader("If-Modified-Since", d.lastModified[r]), d.etag[r] && C.setRequestHeader("If-None-Match", d.etag[r])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + me + "; q=0.01" : "") : p.accepts["*"]), p.headers) C.setRequestHeader(u, p.headers[u]);
				if (p.beforeSend && (!1 === p.beforeSend.call(f, C, p) || 2 === x)) return C.abort();
				for (u in _ = "abort", {
						success: 1,
						error: 1,
						complete: 1
					}) C[u](p[u]);
				if (o = be(ge, p, n, C)) {
					if (C.readyState = 1, h && g.trigger("ajaxSend", [C, p]), 2 === x) return C;
					p.async && p.timeout > 0 && (l = t.setTimeout((function() {
						C.abort("timeout")
					}), p.timeout));
					try {
						x = 1, o.send(b, T)
					} catch (t) {
						if (!(2 > x)) throw t;
						T(-1, t)
					}
				} else T(-1, "No Transport");

				function T(e, n, i, a) {
					var c, u, b, w, _, T = n;
					2 !== x && (x = 2, l && t.clearTimeout(l), o = void 0, s = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, i && (w = function(t, e, n) {
						for (var i, o, r, s, a = t.contents, l = t.dataTypes;
							"*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
						if (i)
							for (o in a)
								if (a[o] && a[o].test(i)) {
									l.unshift(o);
									break
								} if (l[0] in n) r = l[0];
						else {
							for (o in n) {
								if (!l[0] || t.converters[o + " " + l[0]]) {
									r = o;
									break
								}
								s || (s = o)
							}
							r = r || s
						}
						return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
					}(p, C, i)), w = function(t, e, n, i) {
						var o, r, s, a, l, c = {},
							h = t.dataTypes.slice();
						if (h[1])
							for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
						for (r = h.shift(); r;)
							if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = h.shift())
								if ("*" === r) r = l;
								else if ("*" !== l && l !== r) {
							if (!(s = c[l + " " + r] || c["* " + r]))
								for (o in c)
									if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
										!0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], h.unshift(a[1]));
										break
									} if (!0 !== s)
								if (s && t.throws) e = s(e);
								else try {
									e = s(e)
								} catch (t) {
									return {
										state: "parsererror",
										error: s ? t : "No conversion from " + l + " to " + r
									}
								}
						}
						return {
							state: "success",
							data: e
						}
					}(p, w, C, c), c ? (p.ifModified && ((_ = C.getResponseHeader("Last-Modified")) && (d.lastModified[r] = _), (_ = C.getResponseHeader("etag")) && (d.etag[r] = _)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, u = w.data, c = !(b = w.error))) : (b = T, !e && T || (T = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || T) + "", c ? m.resolveWith(f, [u, T, C]) : m.rejectWith(f, [C, T, b]), C.statusCode(y), y = void 0, h && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? u : b]), v.fireWith(f, [C, T]), h && (g.trigger("ajaxComplete", [C, p]), --d.active || d.event.trigger("ajaxStop")))
				}
				return C
			},
			getJSON: function(t, e, n) {
				return d.get(t, e, n, "json")
			},
			getScript: function(t, e) {
				return d.get(t, void 0, e, "script")
			}
		}), d.each(["get", "post"], (function(t, e) {
			d[e] = function(t, n, i, o) {
				return d.isFunction(n) && (o = o || i, i = n, n = void 0), d.ajax(d.extend({
					url: t,
					type: e,
					dataType: o,
					data: n,
					success: i
				}, d.isPlainObject(t) && t))
			}
		})), d._evalUrl = function(t) {
			return d.ajax({
				url: t,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				throws: !0
			})
		}, d.fn.extend({
			wrapAll: function(t) {
				var e;
				return d.isFunction(t) ? this.each((function(e) {
					d(this).wrapAll(t.call(this, e))
				})) : (this[0] && (e = d(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
					for (var t = this; t.firstElementChild;) t = t.firstElementChild;
					return t
				})).append(this)), this)
			},
			wrapInner: function(t) {
				return d.isFunction(t) ? this.each((function(e) {
					d(this).wrapInner(t.call(this, e))
				})) : this.each((function() {
					var e = d(this),
						n = e.contents();
					n.length ? n.wrapAll(t) : e.append(t)
				}))
			},
			wrap: function(t) {
				var e = d.isFunction(t);
				return this.each((function(n) {
					d(this).wrapAll(e ? t.call(this, n) : t)
				}))
			},
			unwrap: function() {
				return this.parent().each((function() {
					d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
				})).end()
			}
		}), d.expr.filters.hidden = function(t) {
			return !d.expr.filters.visible(t)
		}, d.expr.filters.visible = function(t) {
			return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
		};
		var xe = /%20/g,
			_e = /\[\]$/,
			Ce = /\r?\n/g,
			Te = /^(?:submit|button|image|reset|file)$/i,
			ke = /^(?:input|select|textarea|keygen)/i;

		function $e(t, e, n, i) {
			var o;
			if (d.isArray(e)) d.each(e, (function(e, o) {
				n || _e.test(t) ? i(t, o) : $e(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, n, i)
			}));
			else if (n || "object" !== d.type(e)) i(t, e);
			else
				for (o in e) $e(t + "[" + o + "]", e[o], n, i)
		}
		d.param = function(t, e) {
			var n, i = [],
				o = function(t, e) {
					e = d.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
				};
			if (void 0 === e && (e = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(t) || t.jquery && !d.isPlainObject(t)) d.each(t, (function() {
				o(this.name, this.value)
			}));
			else
				for (n in t) $e(n, t[n], e, o);
			return i.join("&").replace(xe, "+")
		}, d.fn.extend({
			serialize: function() {
				return d.param(this.serializeArray())
			},
			serializeArray: function() {
				return this.map((function() {
					var t = d.prop(this, "elements");
					return t ? d.makeArray(t) : this
				})).filter((function() {
					var t = this.type;
					return this.name && !d(this).is(":disabled") && ke.test(this.nodeName) && !Te.test(t) && (this.checked || !X.test(t))
				})).map((function(t, e) {
					var n = d(this).val();
					return null == n ? null : d.isArray(n) ? d.map(n, (function(t) {
						return {
							name: e.name,
							value: t.replace(Ce, "\r\n")
						}
					})) : {
						name: e.name,
						value: n.replace(Ce, "\r\n")
					}
				})).get()
			}
		}), d.ajaxSettings.xhr = function() {
			try {
				return new t.XMLHttpRequest
			} catch (t) {}
		};
		var Se = {
				0: 200,
				1223: 204
			},
			Ee = d.ajaxSettings.xhr();
		u.cors = !!Ee && "withCredentials" in Ee, u.ajax = Ee = !!Ee, d.ajaxTransport((function(e) {
			var n, i;
			return u.cors || Ee && !e.crossDomain ? {
				send: function(o, r) {
					var s, a = e.xhr();
					if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
						for (s in e.xhrFields) a[s] = e.xhrFields[s];
					for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o) a.setRequestHeader(s, o[s]);
					n = function(t) {
						return function() {
							n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? r(0, "error") : r(a.status, a.statusText) : r(Se[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
								binary: a.response
							} : {
								text: a.responseText
							}, a.getAllResponseHeaders()))
						}
					}, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
						4 === a.readyState && t.setTimeout((function() {
							n && i()
						}))
					}, n = n("abort");
					try {
						a.send(e.hasContent && e.data || null)
					} catch (t) {
						if (n) throw t
					}
				},
				abort: function() {
					n && n()
				}
			} : void 0
		})), d.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /\b(?:java|ecma)script\b/
			},
			converters: {
				"text script": function(t) {
					return d.globalEval(t), t
				}
			}
		}), d.ajaxPrefilter("script", (function(t) {
			void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
		})), d.ajaxTransport("script", (function(t) {
			var e, n;
			if (t.crossDomain) return {
				send: function(o, r) {
					e = d("<script>").prop({
						charset: t.scriptCharset,
						src: t.url
					}).on("load error", n = function(t) {
						e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
					}), i.head.appendChild(e[0])
				},
				abort: function() {
					n && n()
				}
			}
		}));
		var Ae = [],
			De = /(=)\?(?=&|$)|\?\?/;
		d.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var t = Ae.pop() || d.expando + "_" + ae++;
				return this[t] = !0, t
			}
		}), d.ajaxPrefilter("json jsonp", (function(e, n, i) {
			var o, r, s, a = !1 !== e.jsonp && (De.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && De.test(e.data) && "data");
			return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = d.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(De, "$1" + o) : !1 !== e.jsonp && (e.url += (le.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
				return s || d.error(o + " was not called"), s[0]
			}, e.dataTypes[0] = "json", r = t[o], t[o] = function() {
				s = arguments
			}, i.always((function() {
				void 0 === r ? d(t).removeProp(o) : t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Ae.push(o)), s && d.isFunction(r) && r(s[0]), s = r = void 0
			})), "script") : void 0
		})), d.parseHTML = function(t, e, n) {
			if (!t || "string" != typeof t) return null;
			"boolean" == typeof e && (n = e, e = !1), e = e || i;
			var o = C.exec(t),
				r = !n && [];
			return o ? [e.createElement(o[1])] : (o = et([t], e, r), r && r.length && d(r).remove(), d.merge([], o.childNodes))
		};
		var Ne = d.fn.load;

		function je(t) {
			return d.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
		}
		d.fn.load = function(t, e, n) {
			if ("string" != typeof t && Ne) return Ne.apply(this, arguments);
			var i, o, r, s = this,
				a = t.indexOf(" ");
			return a > -1 && (i = d.trim(t.slice(a)), t = t.slice(0, a)), d.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), s.length > 0 && d.ajax({
				url: t,
				type: o || "GET",
				dataType: "html",
				data: e
			}).done((function(t) {
				r = arguments, s.html(i ? d("<div>").append(d.parseHTML(t)).find(i) : t)
			})).always(n && function(t, e) {
				s.each((function() {
					n.apply(this, r || [t.responseText, e, t])
				}))
			}), this
		}, d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
			d.fn[e] = function(t) {
				return this.on(e, t)
			}
		})), d.expr.filters.animated = function(t) {
			return d.grep(d.timers, (function(e) {
				return t === e.elem
			})).length
		}, d.offset = {
			setOffset: function(t, e, n) {
				var i, o, r, s, a, l, c = d.css(t, "position"),
					h = d(t),
					u = {};
				"static" === c && (t.style.position = "relative"), a = h.offset(), r = d.css(t, "top"), l = d.css(t, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (s = (i = h.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), d.isFunction(e) && (e = e.call(t, n, d.extend({}, a))), null != e.top && (u.top = e.top - a.top + s), null != e.left && (u.left = e.left - a.left + o), "using" in e ? e.using.call(t, u) : h.css(u)
			}
		}, d.fn.extend({
			offset: function(t) {
				if (arguments.length) return void 0 === t ? this : this.each((function(e) {
					d.offset.setOffset(this, t, e)
				}));
				var e, n, i = this[0],
					o = {
						top: 0,
						left: 0
					},
					r = i && i.ownerDocument;
				return r ? (e = r.documentElement, d.contains(e, i) ? (o = i.getBoundingClientRect(), n = je(r), {
					top: o.top + n.pageYOffset - e.clientTop,
					left: o.left + n.pageXOffset - e.clientLeft
				}) : o) : void 0
			},
			position: function() {
				if (this[0]) {
					var t, e, n = this[0],
						i = {
							top: 0,
							left: 0
						};
					return "fixed" === d.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), d.nodeName(t[0], "html") || (i = t.offset()), i.top += d.css(t[0], "borderTopWidth", !0), i.left += d.css(t[0], "borderLeftWidth", !0)), {
						top: e.top - i.top - d.css(n, "marginTop", !0),
						left: e.left - i.left - d.css(n, "marginLeft", !0)
					}
				}
			},
			offsetParent: function() {
				return this.map((function() {
					for (var t = this.offsetParent; t && "static" === d.css(t, "position");) t = t.offsetParent;
					return t || At
				}))
			}
		}), d.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, (function(t, e) {
			var n = "pageYOffset" === e;
			d.fn[t] = function(i) {
				return P(this, (function(t, i, o) {
					var r = je(t);
					return void 0 === o ? r ? r[e] : t[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : t[i] = o)
				}), t, i, arguments.length)
			}
		})), d.each(["top", "left"], (function(t, e) {
			d.cssHooks[e] = Nt(u.pixelPosition, (function(t, n) {
				return n ? (n = Dt(t, e), $t.test(n) ? d(t).position()[e] + "px" : n) : void 0
			}))
		})), d.each({
			Height: "height",
			Width: "width"
		}, (function(t, e) {
			d.each({
				padding: "inner" + t,
				content: e,
				"": "outer" + t
			}, (function(n, i) {
				d.fn[i] = function(i, o) {
					var r = arguments.length && (n || "boolean" != typeof i),
						s = n || (!0 === i || !0 === o ? "margin" : "border");
					return P(this, (function(e, n, i) {
						var o;
						return d.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? d.css(e, n, s) : d.style(e, n, i, s)
					}), e, r ? i : void 0, r, null)
				}
			}))
		})), d.fn.extend({
			bind: function(t, e, n) {
				return this.on(t, null, e, n)
			},
			unbind: function(t, e) {
				return this.off(t, null, e)
			},
			delegate: function(t, e, n, i) {
				return this.on(e, t, n, i)
			},
			undelegate: function(t, e, n) {
				return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
			},
			size: function() {
				return this.length
			}
		}), d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], (function() {
			return d
		}));
		var Oe = t.jQuery,
			Le = t.$;
		return d.noConflict = function(e) {
			return t.$ === d && (t.$ = Le), e && t.jQuery === d && (t.jQuery = Oe), d
		}, e || (t.jQuery = t.$ = d), d
	})), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
if (function(t) {
		"use strict";
		var e = jQuery.fn.jquery.split(" ")[0].split(".");
		if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
	}(), function(t) {
		"use strict";
		t.fn.emulateTransitionEnd = function(e) {
			var n = !1,
				i = this;
			return t(this).one("bsTransitionEnd", (function() {
				n = !0
			})), setTimeout((function() {
				n || t(i).trigger(t.support.transition.end)
			}), e), this
		}, t((function() {
			t.support.transition = function() {
				var t = document.createElement("bootstrap"),
					e = {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd otransitionend",
						transition: "transitionend"
					};
				for (var n in e)
					if (void 0 !== t.style[n]) return {
						end: e[n]
					};
				return !1
			}(), t.support.transition && (t.event.special.bsTransitionEnd = {
				bindType: t.support.transition.end,
				delegateType: t.support.transition.end,
				handle: function(e) {
					if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
				}
			})
		}))
	}(jQuery), function(t) {
		"use strict";
		var e = '[data-dismiss="alert"]',
			n = function(n) {
				t(n).on("click", e, this.close)
			};
		n.VERSION = "3.4.1", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
			var i = t(this),
				o = i.attr("data-target");
			o || (o = (o = i.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, "")), o = "#" === o ? [] : o;
			var r = t(document).find(o);

			function s() {
				r.detach().trigger("closed.bs.alert").remove()
			}
			e && e.preventDefault(), r.length || (r = i.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s())
		};
		var i = t.fn.alert;
		t.fn.alert = function(e) {
			return this.each((function() {
				var i = t(this),
					o = i.data("bs.alert");
				o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
			}))
		}, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
			return t.fn.alert = i, this
		}, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
	}(jQuery), function(t) {
		"use strict";
		var e = function(n, i) {
			this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.isLoading = !1
		};

		function n(n) {
			return this.each((function() {
				var i = t(this),
					o = i.data("bs.button"),
					r = "object" == typeof n && n;
				o || i.data("bs.button", o = new e(this, r)), "toggle" == n ? o.toggle() : n && o.setState(n)
			}))
		}
		e.VERSION = "3.4.1", e.DEFAULTS = {
			loadingText: "loading..."
		}, e.prototype.setState = function(e) {
			var n = "disabled",
				i = this.$element,
				o = i.is("input") ? "val" : "html",
				r = i.data();
			e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy((function() {
				i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
			}), this), 0)
		}, e.prototype.toggle = function() {
			var t = !0,
				e = this.$element.closest('[data-toggle="buttons"]');
			if (e.length) {
				var n = this.$element.find("input");
				"radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
			} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
		};
		var i = t.fn.button;
		t.fn.button = n, t.fn.button.Constructor = e, t.fn.button.noConflict = function() {
			return t.fn.button = i, this
		}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
			var i = t(e.target).closest(".btn");
			n.call(i, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
		})).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', (function(e) {
			t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
		}))
	}(jQuery), function(t) {
		"use strict";
		var e = function(e, n) {
			this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
		};

		function n(n) {
			return this.each((function() {
				var i = t(this),
					o = i.data("bs.carousel"),
					r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
					s = "string" == typeof n ? n : r.slide;
				o || i.data("bs.carousel", o = new e(this, r)), "number" == typeof n ? o.to(n) : s ? o[s]() : r.interval && o.pause().cycle()
			}))
		}
		e.VERSION = "3.4.1", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
			interval: 5e3,
			pause: "hover",
			wrap: !0,
			keyboard: !0
		}, e.prototype.keydown = function(t) {
			if (!/input|textarea/i.test(t.target.tagName)) {
				switch (t.which) {
					case 37:
						this.prev();
						break;
					case 39:
						this.next();
						break;
					default:
						return
				}
				t.preventDefault()
			}
		}, e.prototype.cycle = function(e) {
			return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
		}, e.prototype.getItemIndex = function(t) {
			return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
		}, e.prototype.getItemForDirection = function(t, e) {
			var n = this.getItemIndex(e);
			if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
			var i = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
			return this.$items.eq(i)
		}, e.prototype.to = function(t) {
			var e = this,
				n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
			if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", (function() {
				e.to(t)
			})) : n == t ? this.pause().cycle() : this.slide(n < t ? "next" : "prev", this.$items.eq(t))
		}, e.prototype.pause = function(e) {
			return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
		}, e.prototype.next = function() {
			if (!this.sliding) return this.slide("next")
		}, e.prototype.prev = function() {
			if (!this.sliding) return this.slide("prev")
		}, e.prototype.slide = function(n, i) {
			var o = this.$element.find(".item.active"),
				r = i || this.getItemForDirection(n, o),
				s = this.interval,
				a = "next" == n ? "left" : "right",
				l = this;
			if (r.hasClass("active")) return this.sliding = !1;
			var c = r[0],
				h = t.Event("slide.bs.carousel", {
					relatedTarget: c,
					direction: a
				});
			if (this.$element.trigger(h), !h.isDefaultPrevented()) {
				if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
					this.$indicators.find(".active").removeClass("active");
					var u = t(this.$indicators.children()[this.getItemIndex(r)]);
					u && u.addClass("active")
				}
				var p = t.Event("slid.bs.carousel", {
					relatedTarget: c,
					direction: a
				});
				return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(n), "object" == typeof r && r.length && r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", (function() {
					r.removeClass([n, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout((function() {
						l.$element.trigger(p)
					}), 0)
				})).emulateTransitionEnd(e.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
			}
		};
		var i = t.fn.carousel;
		t.fn.carousel = n, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function() {
			return t.fn.carousel = i, this
		};
		var o = function(e) {
			var i = t(this),
				o = i.attr("href");
			o && (o = o.replace(/.*(?=#[^\s]+$)/, ""));
			var r = i.attr("data-target") || o,
				s = t(document).find(r);
			if (s.hasClass("carousel")) {
				var a = t.extend({}, s.data(), i.data()),
					l = i.attr("data-slide-to");
				l && (a.interval = !1), n.call(s, a), l && s.data("bs.carousel").to(l), e.preventDefault()
			}
		};
		t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", (function() {
			t('[data-ride="carousel"]').each((function() {
				var e = t(this);
				n.call(e, e.data())
			}))
		}))
	}(jQuery), function(t) {
		"use strict";
		var e = function(n, i) {
			this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
		};

		function n(e) {
			var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
			return t(document).find(i)
		}

		function i(n) {
			return this.each((function() {
				var i = t(this),
					o = i.data("bs.collapse"),
					r = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
				!o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || i.data("bs.collapse", o = new e(this, r)), "string" == typeof n && o[n]()
			}))
		}
		e.VERSION = "3.4.1", e.TRANSITION_DURATION = 350, e.DEFAULTS = {
			toggle: !0
		}, e.prototype.dimension = function() {
			return this.$element.hasClass("width") ? "width" : "height"
		}, e.prototype.show = function() {
			if (!this.transitioning && !this.$element.hasClass("in")) {
				var n, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
				if (!(o && o.length && (n = o.data("bs.collapse")) && n.transitioning)) {
					var r = t.Event("show.bs.collapse");
					if (this.$element.trigger(r), !r.isDefaultPrevented()) {
						o && o.length && (i.call(o, "hide"), n || o.data("bs.collapse", null));
						var s = this.dimension();
						this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
						var a = function() {
							this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
						};
						if (!t.support.transition) return a.call(this);
						var l = t.camelCase(["scroll", s].join("-"));
						this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[s](this.$element[0][l])
					}
				}
			}
		}, e.prototype.hide = function() {
			if (!this.transitioning && this.$element.hasClass("in")) {
				var n = t.Event("hide.bs.collapse");
				if (this.$element.trigger(n), !n.isDefaultPrevented()) {
					var i = this.dimension();
					this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
					var o = function() {
						this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
					};
					if (!t.support.transition) return o.call(this);
					this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
				}
			}
		}, e.prototype.toggle = function() {
			this[this.$element.hasClass("in") ? "hide" : "show"]()
		}, e.prototype.getParent = function() {
			return t(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy((function(e, i) {
				var o = t(i);
				this.addAriaAndCollapsedClass(n(o), o)
			}), this)).end()
		}, e.prototype.addAriaAndCollapsedClass = function(t, e) {
			var n = t.hasClass("in");
			t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
		};
		var o = t.fn.collapse;
		t.fn.collapse = i, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function() {
			return t.fn.collapse = o, this
		}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', (function(e) {
			var o = t(this);
			o.attr("data-target") || e.preventDefault();
			var r = n(o),
				s = r.data("bs.collapse") ? "toggle" : o.data();
			i.call(r, s)
		}))
	}(jQuery), function(t) {
		"use strict";
		var e = '[data-toggle="dropdown"]',
			n = function(e) {
				t(e).on("click.bs.dropdown", this.toggle)
			};

		function i(e) {
			var n = e.attr("data-target");
			n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
			var i = "#" !== n ? t(document).find(n) : null;
			return i && i.length ? i : e.parent()
		}

		function o(n) {
			n && 3 === n.which || (t(".dropdown-backdrop").remove(), t(e).each((function() {
				var e = t(this),
					o = i(e),
					r = {
						relatedTarget: this
					};
				o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (e.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
			})))
		}
		n.VERSION = "3.4.1", n.prototype.toggle = function(e) {
			var n = t(this);
			if (!n.is(".disabled, :disabled")) {
				var r = i(n),
					s = r.hasClass("open");
				if (o(), !s) {
					"ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", o);
					var a = {
						relatedTarget: this
					};
					if (r.trigger(e = t.Event("show.bs.dropdown", a)), e.isDefaultPrevented()) return;
					n.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
				}
				return !1
			}
		}, n.prototype.keydown = function(n) {
			if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
				var o = t(this);
				if (n.preventDefault(), n.stopPropagation(), !o.is(".disabled, :disabled")) {
					var r = i(o),
						s = r.hasClass("open");
					if (!s && 27 != n.which || s && 27 == n.which) return 27 == n.which && r.find(e).trigger("focus"), o.trigger("click");
					var a = r.find(".dropdown-menu li:not(.disabled):visible a");
					if (a.length) {
						var l = a.index(n.target);
						38 == n.which && 0 < l && l--, 40 == n.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus")
					}
				}
			}
		};
		var r = t.fn.dropdown;
		t.fn.dropdown = function(e) {
			return this.each((function() {
				var i = t(this),
					o = i.data("bs.dropdown");
				o || i.data("bs.dropdown", o = new n(this)), "string" == typeof e && o[e].call(i)
			}))
		}, t.fn.dropdown.Constructor = n, t.fn.dropdown.noConflict = function() {
			return t.fn.dropdown = r, this
		}, t(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", (function(t) {
			t.stopPropagation()
		})).on("click.bs.dropdown.data-api", e, n.prototype.toggle).on("keydown.bs.dropdown.data-api", e, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
	}(jQuery), function(t) {
		"use strict";
		var e = function(e, n) {
			this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy((function() {
				this.$element.trigger("loaded.bs.modal")
			}), this))
		};

		function n(n, i) {
			return this.each((function() {
				var o = t(this),
					r = o.data("bs.modal"),
					s = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof n && n);
				r || o.data("bs.modal", r = new e(this, s)), "string" == typeof n ? r[n](i) : s.show && r.show(i)
			}))
		}
		e.VERSION = "3.4.1", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
			backdrop: !0,
			keyboard: !0,
			show: !0
		}, e.prototype.toggle = function(t) {
			return this.isShown ? this.hide() : this.show(t)
		}, e.prototype.show = function(n) {
			var i = this,
				o = t.Event("show.bs.modal", {
					relatedTarget: n
				});
			this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", (function() {
				i.$element.one("mouseup.dismiss.bs.modal", (function(e) {
					t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
				}))
			})), this.backdrop((function() {
				var o = t.support.transition && i.$element.hasClass("fade");
				i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
				var r = t.Event("shown.bs.modal", {
					relatedTarget: n
				});
				o ? i.$dialog.one("bsTransitionEnd", (function() {
					i.$element.trigger("focus").trigger(r)
				})).emulateTransitionEnd(e.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
			})))
		}, e.prototype.hide = function(n) {
			n && n.preventDefault(), n = t.Event("hide.bs.modal"), this.$element.trigger(n), this.isShown && !n.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
		}, e.prototype.enforceFocus = function() {
			t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy((function(t) {
				document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
			}), this))
		}, e.prototype.escape = function() {
			this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy((function(t) {
				27 == t.which && this.hide()
			}), this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
		}, e.prototype.resize = function() {
			this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
		}, e.prototype.hideModal = function() {
			var t = this;
			this.$element.hide(), this.backdrop((function() {
				t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
			}))
		}, e.prototype.removeBackdrop = function() {
			this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
		}, e.prototype.backdrop = function(n) {
			var i = this,
				o = this.$element.hasClass("fade") ? "fade" : "";
			if (this.isShown && this.options.backdrop) {
				var r = t.support.transition && o;
				if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy((function(t) {
						this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
					}), this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !n) return;
				r ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : n()
			} else if (!this.isShown && this.$backdrop) {
				this.$backdrop.removeClass("in");
				var s = function() {
					i.removeBackdrop(), n && n()
				};
				t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : s()
			} else n && n()
		}, e.prototype.handleUpdate = function() {
			this.adjustDialog()
		}, e.prototype.adjustDialog = function() {
			var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
			this.$element.css({
				paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
				paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
			})
		}, e.prototype.resetAdjustments = function() {
			this.$element.css({
				paddingLeft: "",
				paddingRight: ""
			})
		}, e.prototype.checkScrollbar = function() {
			var t = window.innerWidth;
			if (!t) {
				var e = document.documentElement.getBoundingClientRect();
				t = e.right - Math.abs(e.left)
			}
			this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
		}, e.prototype.setScrollbar = function() {
			var e = parseInt(this.$body.css("padding-right") || 0, 10);
			this.originalBodyPad = document.body.style.paddingRight || "";
			var n = this.scrollbarWidth;
			this.bodyIsOverflowing && (this.$body.css("padding-right", e + n), t(this.fixedContent).each((function(e, i) {
				var o = i.style.paddingRight,
					r = t(i).css("padding-right");
				t(i).data("padding-right", o).css("padding-right", parseFloat(r) + n + "px")
			})))
		}, e.prototype.resetScrollbar = function() {
			this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each((function(e, n) {
				var i = t(n).data("padding-right");
				t(n).removeData("padding-right"), n.style.paddingRight = i || ""
			}))
		}, e.prototype.measureScrollbar = function() {
			var t = document.createElement("div");
			t.className = "modal-scrollbar-measure", this.$body.append(t);
			var e = t.offsetWidth - t.clientWidth;
			return this.$body[0].removeChild(t), e
		};
		var i = t.fn.modal;
		t.fn.modal = n, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function() {
			return t.fn.modal = i, this
		}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', (function(e) {
			var i = t(this),
				o = i.attr("href"),
				r = i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, ""),
				s = t(document).find(r),
				a = s.data("bs.modal") ? "toggle" : t.extend({
					remote: !/#/.test(o) && o
				}, s.data(), i.data());
			i.is("a") && e.preventDefault(), s.one("show.bs.modal", (function(t) {
				t.isDefaultPrevented() || s.one("hidden.bs.modal", (function() {
					i.is(":visible") && i.trigger("focus")
				}))
			})), n.call(s, a, this)
		}))
	}(jQuery), function(t) {
		"use strict";
		var e = ["sanitize", "whiteList", "sanitizeFn"],
			n = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
			i = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
			o = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

		function r(e, r) {
			var s = e.nodeName.toLowerCase();
			if (-1 !== t.inArray(s, r)) return -1 === t.inArray(s, n) || Boolean(e.nodeValue.match(i) || e.nodeValue.match(o));
			for (var a = t(r).filter((function(t, e) {
					return e instanceof RegExp
				})), l = 0, c = a.length; l < c; l++)
				if (s.match(a[l])) return !0;
			return !1
		}

		function s(e, n, i) {
			if (0 === e.length) return e;
			if (i && "function" == typeof i) return i(e);
			if (!document.implementation || !document.implementation.createHTMLDocument) return e;
			var o = document.implementation.createHTMLDocument("sanitization");
			o.body.innerHTML = e;
			for (var s = t.map(n, (function(t, e) {
					return e
				})), a = t(o.body).find("*"), l = 0, c = a.length; l < c; l++) {
				var h = a[l],
					u = h.nodeName.toLowerCase();
				if (-1 !== t.inArray(u, s))
					for (var p = t.map(h.attributes, (function(t) {
							return t
						})), d = [].concat(n["*"] || [], n[u] || []), f = 0, g = p.length; f < g; f++) r(p[f], d) || h.removeAttribute(p[f].nodeName);
				else h.parentNode.removeChild(h)
			}
			return o.body.innerHTML
		}
		var a = function(t, e) {
			this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
		};
		a.VERSION = "3.4.1", a.TRANSITION_DURATION = 150, a.DEFAULTS = {
			animation: !0,
			placement: "top",
			selector: !1,
			template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
			trigger: "hover focus",
			title: "",
			delay: 0,
			html: !1,
			container: !1,
			viewport: {
				selector: "body",
				padding: 0
			},
			sanitize: !0,
			sanitizeFn: null,
			whiteList: {
				"*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
				a: ["target", "href", "title", "rel"],
				area: [],
				b: [],
				br: [],
				col: [],
				code: [],
				div: [],
				em: [],
				hr: [],
				h1: [],
				h2: [],
				h3: [],
				h4: [],
				h5: [],
				h6: [],
				i: [],
				img: ["src", "alt", "title", "width", "height"],
				li: [],
				ol: [],
				p: [],
				pre: [],
				s: [],
				small: [],
				span: [],
				sub: [],
				sup: [],
				strong: [],
				u: [],
				ul: []
			}
		}, a.prototype.init = function(e, n, i) {
			if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(document).find(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
					click: !1,
					hover: !1,
					focus: !1
				}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
			for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
				var s = o[r];
				if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
				else if ("manual" != s) {
					var a = "hover" == s ? "mouseenter" : "focusin",
						l = "hover" == s ? "mouseleave" : "focusout";
					this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
				}
			}
			this.options.selector ? this._options = t.extend({}, this.options, {
				trigger: "manual",
				selector: ""
			}) : this.fixTitle()
		}, a.prototype.getDefaults = function() {
			return a.DEFAULTS
		}, a.prototype.getOptions = function(n) {
			var i = this.$element.data();
			for (var o in i) i.hasOwnProperty(o) && -1 !== t.inArray(o, e) && delete i[o];
			return (n = t.extend({}, this.getDefaults(), i, n)).delay && "number" == typeof n.delay && (n.delay = {
				show: n.delay,
				hide: n.delay
			}), n.sanitize && (n.template = s(n.template, n.whiteList, n.sanitizeFn)), n
		}, a.prototype.getDelegateOptions = function() {
			var e = {},
				n = this.getDefaults();
			return this._options && t.each(this._options, (function(t, i) {
				n[t] != i && (e[t] = i)
			})), e
		}, a.prototype.enter = function(e) {
			var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
			if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in";
			else {
				if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
				n.timeout = setTimeout((function() {
					"in" == n.hoverState && n.show()
				}), n.options.delay.show)
			}
		}, a.prototype.isInStateTrue = function() {
			for (var t in this.inState)
				if (this.inState[t]) return !0;
			return !1
		}, a.prototype.leave = function(e) {
			var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
			if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
				if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
				n.timeout = setTimeout((function() {
					"out" == n.hoverState && n.hide()
				}), n.options.delay.hide)
			}
		}, a.prototype.show = function() {
			var e = t.Event("show.bs." + this.type);
			if (this.hasContent() && this.enabled) {
				this.$element.trigger(e);
				var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
				if (e.isDefaultPrevented() || !n) return;
				var i = this,
					o = this.tip(),
					r = this.getUID(this.type);
				this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
				var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
					l = /\s?auto?\s?/i,
					c = l.test(s);
				c && (s = s.replace(l, "") || "top"), o.detach().css({
					top: 0,
					left: 0,
					display: "block"
				}).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(t(document).find(this.options.container)) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
				var h = this.getPosition(),
					u = o[0].offsetWidth,
					p = o[0].offsetHeight;
				if (c) {
					var d = s,
						f = this.getPosition(this.$viewport);
					s = "bottom" == s && h.bottom + p > f.bottom ? "top" : "top" == s && h.top - p < f.top ? "bottom" : "right" == s && h.right + u > f.width ? "left" : "left" == s && h.left - u < f.left ? "right" : s, o.removeClass(d).addClass(s)
				}
				var g = this.getCalculatedOffset(s, h, u, p);
				this.applyPlacement(g, s);
				var m = function() {
					var t = i.hoverState;
					i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
				};
				t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(a.TRANSITION_DURATION) : m()
			}
		}, a.prototype.applyPlacement = function(e, n) {
			var i = this.tip(),
				o = i[0].offsetWidth,
				r = i[0].offsetHeight,
				s = parseInt(i.css("margin-top"), 10),
				a = parseInt(i.css("margin-left"), 10);
			isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(i[0], t.extend({
				using: function(t) {
					i.css({
						top: Math.round(t.top),
						left: Math.round(t.left)
					})
				}
			}, e), 0), i.addClass("in");
			var l = i[0].offsetWidth,
				c = i[0].offsetHeight;
			"top" == n && c != r && (e.top = e.top + r - c);
			var h = this.getViewportAdjustedDelta(n, e, l, c);
			h.left ? e.left += h.left : e.top += h.top;
			var u = /top|bottom/.test(n),
				p = u ? 2 * h.left - o + l : 2 * h.top - r + c,
				d = u ? "offsetWidth" : "offsetHeight";
			i.offset(e), this.replaceArrow(p, i[0][d], u)
		}, a.prototype.replaceArrow = function(t, e, n) {
			this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
		}, a.prototype.setContent = function() {
			var t = this.tip(),
				e = this.getTitle();
			this.options.html ? (this.options.sanitize && (e = s(e, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(e)) : t.find(".tooltip-inner").text(e), t.removeClass("fade in top bottom left right")
		}, a.prototype.hide = function(e) {
			var n = this,
				i = t(this.$tip),
				o = t.Event("hide.bs." + this.type);

			function r() {
				"in" != n.hoverState && i.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e()
			}
			if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", r).emulateTransitionEnd(a.TRANSITION_DURATION) : r(), this.hoverState = null, this
		}, a.prototype.fixTitle = function() {
			var t = this.$element;
			(t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
		}, a.prototype.hasContent = function() {
			return this.getTitle()
		}, a.prototype.getPosition = function(e) {
			var n = (e = e || this.$element)[0],
				i = "BODY" == n.tagName,
				o = n.getBoundingClientRect();
			null == o.width && (o = t.extend({}, o, {
				width: o.right - o.left,
				height: o.bottom - o.top
			}));
			var r = window.SVGElement && n instanceof window.SVGElement,
				s = i ? {
					top: 0,
					left: 0
				} : r ? null : e.offset(),
				a = {
					scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
				},
				l = i ? {
					width: t(window).width(),
					height: t(window).height()
				} : null;
			return t.extend({}, o, a, l, s)
		}, a.prototype.getCalculatedOffset = function(t, e, n, i) {
			return "bottom" == t ? {
				top: e.top + e.height,
				left: e.left + e.width / 2 - n / 2
			} : "top" == t ? {
				top: e.top - i,
				left: e.left + e.width / 2 - n / 2
			} : "left" == t ? {
				top: e.top + e.height / 2 - i / 2,
				left: e.left - n
			} : {
				top: e.top + e.height / 2 - i / 2,
				left: e.left + e.width
			}
		}, a.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
			var o = {
				top: 0,
				left: 0
			};
			if (!this.$viewport) return o;
			var r = this.options.viewport && this.options.viewport.padding || 0,
				s = this.getPosition(this.$viewport);
			if (/right|left/.test(t)) {
				var a = e.top - r - s.scroll,
					l = e.top + r - s.scroll + i;
				a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
			} else {
				var c = e.left - r,
					h = e.left + r + n;
				c < s.left ? o.left = s.left - c : h > s.right && (o.left = s.left + s.width - h)
			}
			return o
		}, a.prototype.getTitle = function() {
			var t = this.$element,
				e = this.options;
			return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
		}, a.prototype.getUID = function(t) {
			for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
			return t
		}, a.prototype.tip = function() {
			if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
			return this.$tip
		}, a.prototype.arrow = function() {
			return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
		}, a.prototype.enable = function() {
			this.enabled = !0
		}, a.prototype.disable = function() {
			this.enabled = !1
		}, a.prototype.toggleEnabled = function() {
			this.enabled = !this.enabled
		}, a.prototype.toggle = function(e) {
			var n = this;
			e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
		}, a.prototype.destroy = function() {
			var t = this;
			clearTimeout(this.timeout), this.hide((function() {
				t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
			}))
		}, a.prototype.sanitizeHtml = function(t) {
			return s(t, this.options.whiteList, this.options.sanitizeFn)
		};
		var l = t.fn.tooltip;
		t.fn.tooltip = function(e) {
			return this.each((function() {
				var n = t(this),
					i = n.data("bs.tooltip"),
					o = "object" == typeof e && e;
				!i && /destroy|hide/.test(e) || (i || n.data("bs.tooltip", i = new a(this, o)), "string" == typeof e && i[e]())
			}))
		}, t.fn.tooltip.Constructor = a, t.fn.tooltip.noConflict = function() {
			return t.fn.tooltip = l, this
		}
	}(jQuery), function(t) {
		"use strict";
		var e = function(t, e) {
			this.init("popover", t, e)
		};
		if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
		e.VERSION = "3.4.1", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
			placement: "right",
			trigger: "click",
			content: "",
			template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
		}), ((e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)).constructor = e).prototype.getDefaults = function() {
			return e.DEFAULTS
		}, e.prototype.setContent = function() {
			var t = this.tip(),
				e = this.getTitle(),
				n = this.getContent();
			if (this.options.html) {
				var i = typeof n;
				this.options.sanitize && (e = this.sanitizeHtml(e), "string" === i && (n = this.sanitizeHtml(n))), t.find(".popover-title").html(e), t.find(".popover-content").children().detach().end()["string" === i ? "html" : "append"](n)
			} else t.find(".popover-title").text(e), t.find(".popover-content").children().detach().end().text(n);
			t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
		}, e.prototype.hasContent = function() {
			return this.getTitle() || this.getContent()
		}, e.prototype.getContent = function() {
			var t = this.$element,
				e = this.options;
			return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
		}, e.prototype.arrow = function() {
			return this.$arrow = this.$arrow || this.tip().find(".arrow")
		};
		var n = t.fn.popover;
		t.fn.popover = function(n) {
			return this.each((function() {
				var i = t(this),
					o = i.data("bs.popover"),
					r = "object" == typeof n && n;
				!o && /destroy|hide/.test(n) || (o || i.data("bs.popover", o = new e(this, r)), "string" == typeof n && o[n]())
			}))
		}, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
			return t.fn.popover = n, this
		}
	}(jQuery), function(t) {
		"use strict";

		function e(n, i) {
			this.$body = t(document.body), this.$scrollElement = t(n).is(document.body) ? t(window) : t(n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
		}

		function n(n) {
			return this.each((function() {
				var i = t(this),
					o = i.data("bs.scrollspy"),
					r = "object" == typeof n && n;
				o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
			}))
		}
		e.VERSION = "3.4.1", e.DEFAULTS = {
			offset: 10
		}, e.prototype.getScrollHeight = function() {
			return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
		}, e.prototype.refresh = function() {
			var e = this,
				n = "offset",
				i = 0;
			this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map((function() {
				var e = t(this),
					o = e.data("target") || e.attr("href"),
					r = /^#./.test(o) && t(o);
				return r && r.length && r.is(":visible") && [
					[r[n]().top + i, o]
				] || null
			})).sort((function(t, e) {
				return t[0] - e[0]
			})).each((function() {
				e.offsets.push(this[0]), e.targets.push(this[1])
			}))
		}, e.prototype.process = function() {
			var t, e = this.$scrollElement.scrollTop() + this.options.offset,
				n = this.getScrollHeight(),
				i = this.options.offset + n - this.$scrollElement.height(),
				o = this.offsets,
				r = this.targets,
				s = this.activeTarget;
			if (this.scrollHeight != n && this.refresh(), i <= e) return s != (t = r[r.length - 1]) && this.activate(t);
			if (s && e < o[0]) return this.activeTarget = null, this.clear();
			for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
		}, e.prototype.activate = function(e) {
			this.activeTarget = e, this.clear();
			var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
				i = t(n).parents("li").addClass("active");
			i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
		}, e.prototype.clear = function() {
			t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
		};
		var i = t.fn.scrollspy;
		t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
			return t.fn.scrollspy = i, this
		}, t(window).on("load.bs.scrollspy.data-api", (function() {
			t('[data-spy="scroll"]').each((function() {
				var e = t(this);
				n.call(e, e.data())
			}))
		}))
	}(jQuery), function(t) {
		"use strict";
		var e = function(e) {
			this.element = t(e)
		};

		function n(n) {
			return this.each((function() {
				var i = t(this),
					o = i.data("bs.tab");
				o || i.data("bs.tab", o = new e(this)), "string" == typeof n && o[n]()
			}))
		}
		e.VERSION = "3.4.1", e.TRANSITION_DURATION = 150, e.prototype.show = function() {
			var e = this.element,
				n = e.closest("ul:not(.dropdown-menu)"),
				i = e.data("target");
			if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
				var o = n.find(".active:last a"),
					r = t.Event("hide.bs.tab", {
						relatedTarget: e[0]
					}),
					s = t.Event("show.bs.tab", {
						relatedTarget: o[0]
					});
				if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
					var a = t(document).find(i);
					this.activate(e.closest("li"), n), this.activate(a, a.parent(), (function() {
						o.trigger({
							type: "hidden.bs.tab",
							relatedTarget: e[0]
						}), e.trigger({
							type: "shown.bs.tab",
							relatedTarget: o[0]
						})
					}))
				}
			}
		}, e.prototype.activate = function(n, i, o) {
			var r = i.find("> .active"),
				s = o && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);

			function a() {
				r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (n[0].offsetWidth, n.addClass("in")) : n.removeClass("fade"), n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
			}
			r.length && s ? r.one("bsTransitionEnd", a).emulateTransitionEnd(e.TRANSITION_DURATION) : a(), r.removeClass("in")
		};
		var i = t.fn.tab;
		t.fn.tab = n, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function() {
			return t.fn.tab = i, this
		};
		var o = function(e) {
			e.preventDefault(), n.call(t(this), "show")
		};
		t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
	}(jQuery), function(t) {
		"use strict";
		var e = function(n, i) {
			this.options = t.extend({}, e.DEFAULTS, i);
			var o = this.options.target === e.DEFAULTS.target ? t(this.options.target) : t(document).find(this.options.target);
			this.$target = o.on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
		};

		function n(n) {
			return this.each((function() {
				var i = t(this),
					o = i.data("bs.affix"),
					r = "object" == typeof n && n;
				o || i.data("bs.affix", o = new e(this, r)), "string" == typeof n && o[n]()
			}))
		}
		e.VERSION = "3.4.1", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
			offset: 0,
			target: window
		}, e.prototype.getState = function(t, e, n, i) {
			var o = this.$target.scrollTop(),
				r = this.$element.offset(),
				s = this.$target.height();
			if (null != n && "top" == this.affixed) return o < n && "top";
			if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + s <= t - i) && "bottom";
			var a = null == this.affixed,
				l = a ? o : r.top;
			return null != n && o <= n ? "top" : null != i && t - i <= l + (a ? s : e) && "bottom"
		}, e.prototype.getPinnedOffset = function() {
			if (this.pinnedOffset) return this.pinnedOffset;
			this.$element.removeClass(e.RESET).addClass("affix");
			var t = this.$target.scrollTop(),
				n = this.$element.offset();
			return this.pinnedOffset = n.top - t
		}, e.prototype.checkPositionWithEventLoop = function() {
			setTimeout(t.proxy(this.checkPosition, this), 1)
		}, e.prototype.checkPosition = function() {
			if (this.$element.is(":visible")) {
				var n = this.$element.height(),
					i = this.options.offset,
					o = i.top,
					r = i.bottom,
					s = Math.max(t(document).height(), t(document.body).height());
				"object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
				var a = this.getState(s, n, o, r);
				if (this.affixed != a) {
					null != this.unpin && this.$element.css("top", "");
					var l = "affix" + (a ? "-" + a : ""),
						c = t.Event(l + ".bs.affix");
					if (this.$element.trigger(c), c.isDefaultPrevented()) return;
					this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
				}
				"bottom" == a && this.$element.offset({
					top: s - n - r
				})
			}
		};
		var i = t.fn.affix;
		t.fn.affix = n, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function() {
			return t.fn.affix = i, this
		}, t(window).on("load", (function() {
			t('[data-spy="affix"]').each((function() {
				var e = t(this),
					i = e.data();
				i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), n.call(e, i)
			}))
		}))
	}(jQuery), function(t, e, n, i) {
		function o(e, n) {
			this.settings = null, this.options = t.extend({}, o.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
				time: null,
				target: null,
				pointer: null,
				stage: {
					start: null,
					current: null
				},
				direction: null
			}, this._states = {
				current: {},
				tags: {
					initializing: ["busy"],
					animating: ["busy"],
					dragging: ["interacting"]
				}
			}, t.each(["onResize", "onThrottledResize"], t.proxy((function(e, n) {
				this._handlers[n] = t.proxy(this[n], this)
			}), this)), t.each(o.Plugins, t.proxy((function(t, e) {
				this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
			}), this)), t.each(o.Workers, t.proxy((function(e, n) {
				this._pipe.push({
					filter: n.filter,
					run: t.proxy(n.run, this)
				})
			}), this)), this.setup(), this.initialize()
		}
		o.Defaults = {
			items: 3,
			loop: !1,
			center: !1,
			rewind: !1,
			checkVisibility: !0,
			mouseDrag: !0,
			touchDrag: !0,
			pullDrag: !0,
			freeDrag: !1,
			margin: 0,
			stagePadding: 0,
			merge: !1,
			mergeFit: !0,
			autoWidth: !1,
			startPosition: 0,
			rtl: !1,
			smartSpeed: 250,
			fluidSpeed: !1,
			dragEndSpeed: !1,
			responsive: {},
			responsiveRefreshRate: 200,
			responsiveBaseElement: e,
			fallbackEasing: "swing",
			slideTransition: "",
			info: !1,
			nestedItemSelector: !1,
			itemElement: "div",
			stageElement: "div",
			refreshClass: "owl-refresh",
			loadedClass: "owl-loaded",
			loadingClass: "owl-loading",
			rtlClass: "owl-rtl",
			responsiveClass: "owl-responsive",
			dragClass: "owl-drag",
			itemClass: "owl-item",
			stageClass: "owl-stage",
			stageOuterClass: "owl-stage-outer",
			grabClass: "owl-grab"
		}, o.Width = {
			Default: "default",
			Inner: "inner",
			Outer: "outer"
		}, o.Type = {
			Event: "event",
			State: "state"
		}, o.Plugins = {}, o.Workers = [{
			filter: ["width", "settings"],
			run: function() {
				this._width = this.$element.width()
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				t.current = this._items && this._items[this.relative(this._current)]
			}
		}, {
			filter: ["items", "settings"],
			run: function() {
				this.$stage.children(".cloned").remove()
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				var e = this.settings.margin || "",
					n = !this.settings.autoWidth,
					i = this.settings.rtl,
					o = {
						width: "auto",
						"margin-left": i ? e : "",
						"margin-right": i ? "" : e
					};
				!n && this.$stage.children().css(o), t.css = o
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
					n = null,
					i = this._items.length,
					o = !this.settings.autoWidth,
					r = [];
				for (t.items = {
						merge: !1,
						width: e
					}; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = n > 1 || t.items.merge, r[i] = o ? e * n : this._items[i].width();
				this._widths = r
			}
		}, {
			filter: ["items", "settings"],
			run: function() {
				var e = [],
					n = this._items,
					i = this.settings,
					o = Math.max(2 * i.items, 4),
					r = 2 * Math.ceil(n.length / 2),
					s = i.loop && n.length ? i.rewind ? o : Math.max(o, r) : 0,
					a = "",
					l = "";
				for (s /= 2; s > 0;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l, s -= 1;
				this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function() {
				for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, o = 0, r = []; ++n < e;) i = r[n - 1] || 0, o = this._widths[this.relative(n)] + this.settings.margin, r.push(i + o * t);
				this._coordinates = r
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function() {
				var t = this.settings.stagePadding,
					e = this._coordinates,
					n = {
						width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
						"padding-left": t || "",
						"padding-right": t || ""
					};
				this.$stage.css(n)
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				var e = this._coordinates.length,
					n = !this.settings.autoWidth,
					i = this.$stage.children();
				if (n && t.items.merge)
					for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
				else n && (t.css.width = t.items.width, i.css(t.css))
			}
		}, {
			filter: ["items"],
			run: function() {
				this._coordinates.length < 1 && this.$stage.removeAttr("style")
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
			}
		}, {
			filter: ["position"],
			run: function() {
				this.animate(this.coordinates(this._current))
			}
		}, {
			filter: ["width", "position", "items", "settings"],
			run: function() {
				var t, e, n, i, o = this.settings.rtl ? 1 : -1,
					r = 2 * this.settings.stagePadding,
					s = this.coordinates(this.current()) + r,
					a = s + this.width() * o,
					l = [];
				for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + r * o, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(n);
				this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
			}
		}], o.prototype.initializeStage = function() {
			this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
				class: this.settings.stageClass
			}).wrap(t("<div/>", {
				class: this.settings.stageOuterClass
			})), this.$element.append(this.$stage.parent()))
		}, o.prototype.initializeItems = function() {
			var e = this.$element.find(".owl-item");
			if (e.length) return this._items = e.get().map((function(e) {
				return t(e)
			})), this._mergers = this._items.map((function() {
				return 1
			})), void this.refresh();
			this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
		}, o.prototype.initialize = function() {
			var t, e, n;
			(this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i, n = this.$element.children(e).width(), t.length && n <= 0 && this.preloadAutoWidthImages(t));
			this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
		}, o.prototype.isVisible = function() {
			return !this.settings.checkVisibility || this.$element.is(":visible")
		}, o.prototype.setup = function() {
			var e = this.viewport(),
				n = this.options.responsive,
				i = -1,
				o = null;
			n ? (t.each(n, (function(t) {
				t <= e && t > i && (i = Number(t))
			})), "function" == typeof(o = t.extend({}, this.options, n[i])).stagePadding && (o.stagePadding = o.stagePadding()), delete o.responsive, o.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : o = t.extend({}, this.options), this.trigger("change", {
				property: {
					name: "settings",
					value: o
				}
			}), this._breakpoint = i, this.settings = o, this.invalidate("settings"), this.trigger("changed", {
				property: {
					name: "settings",
					value: this.settings
				}
			})
		}, o.prototype.optionsLogic = function() {
			this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
		}, o.prototype.prepare = function(e) {
			var n = this.trigger("prepare", {
				content: e
			});
			return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
				content: n.data
			}), n.data
		}, o.prototype.update = function() {
			for (var e = 0, n = this._pipe.length, i = t.proxy((function(t) {
					return this[t]
				}), this._invalidated), o = {}; e < n;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(o), e++;
			this._invalidated = {}, !this.is("valid") && this.enter("valid")
		}, o.prototype.width = function(t) {
			switch (t = t || o.Width.Default) {
				case o.Width.Inner:
				case o.Width.Outer:
					return this._width;
				default:
					return this._width - 2 * this.settings.stagePadding + this.settings.margin
			}
		}, o.prototype.refresh = function() {
			this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
		}, o.prototype.onThrottledResize = function() {
			e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
		}, o.prototype.onResize = function() {
			return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
		}, o.prototype.registerEventHandlers = function() {
			t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", (function() {
				return !1
			}))), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
		}, o.prototype.onDragStart = function(e) {
			var i = null;
			3 !== e.which && (t.support.transform ? i = {
				x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
				y: i[16 === i.length ? 13 : 5]
			} : (i = this.$stage.position(), i = {
				x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
				y: i.top
			}), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy((function(e) {
				var i = this.difference(this._drag.pointer, this.pointer(e));
				t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
			}), this)))
		}, o.prototype.onDragMove = function(t) {
			var e = null,
				n = null,
				i = null,
				o = this.difference(this._drag.pointer, this.pointer(t)),
				r = this.difference(this._drag.stage.start, o);
			this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + i), n + i)), this._drag.stage.current = r, this.animate(r.x))
		}, o.prototype.onDragEnd = function(e) {
			var i = this.difference(this._drag.pointer, this.pointer(e)),
				o = this._drag.stage.current,
				r = i.x > 0 ^ this.settings.rtl ? "left" : "right";
			t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(o.x, 0 !== i.x ? r : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = r, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", (function() {
				return !1
			}))), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
		}, o.prototype.closest = function(e, n) {
			var o = -1,
				r = this.width(),
				s = this.coordinates();
			return this.settings.freeDrag || t.each(s, t.proxy((function(t, a) {
				return "left" === n && e > a - 30 && e < a + 30 ? o = t : "right" === n && e > a - r - 30 && e < a - r + 30 ? o = t + 1 : this.op(e, "<", a) && this.op(e, ">", s[t + 1] !== i ? s[t + 1] : a - r) && (o = "left" === n ? t + 1 : t), -1 === o
			}), this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? o = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (o = e = this.maximum())), o
		}, o.prototype.animate = function(e) {
			var n = this.speed() > 0;
			this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
				transform: "translate3d(" + e + "px,0px,0px)",
				transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
			}) : n ? this.$stage.animate({
				left: e + "px"
			}, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
				left: e + "px"
			})
		}, o.prototype.is = function(t) {
			return this._states.current[t] && this._states.current[t] > 0
		}, o.prototype.current = function(t) {
			if (t === i) return this._current;
			if (0 === this._items.length) return i;
			if (t = this.normalize(t), this._current !== t) {
				var e = this.trigger("change", {
					property: {
						name: "position",
						value: t
					}
				});
				e.data !== i && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
					property: {
						name: "position",
						value: this._current
					}
				})
			}
			return this._current
		}, o.prototype.invalidate = function(e) {
			return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, (function(t, e) {
				return e
			}))
		}, o.prototype.reset = function(t) {
			(t = this.normalize(t)) !== i && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
		}, o.prototype.normalize = function(t, e) {
			var n = this._items.length,
				o = e ? 0 : this._clones.length;
			return !this.isNumeric(t) || n < 1 ? t = i : (t < 0 || t >= n + o) && (t = ((t - o / 2) % n + n) % n + o / 2), t
		}, o.prototype.relative = function(t) {
			return t -= this._clones.length / 2, this.normalize(t, !0)
		}, o.prototype.maximum = function(t) {
			var e, n, i, o = this.settings,
				r = this._coordinates.length;
			if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
			else if (o.autoWidth || o.merge) {
				if (e = this._items.length)
					for (n = this._items[--e].width(), i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i););
				r = e + 1
			} else r = o.center ? this._items.length - 1 : this._items.length - o.items;
			return t && (r -= this._clones.length / 2), Math.max(r, 0)
		}, o.prototype.minimum = function(t) {
			return t ? 0 : this._clones.length / 2
		}, o.prototype.items = function(t) {
			return t === i ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
		}, o.prototype.mergers = function(t) {
			return t === i ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
		}, o.prototype.clones = function(e) {
			var n = this._clones.length / 2,
				o = n + this._items.length,
				r = function(t) {
					return t % 2 == 0 ? o + t / 2 : n - (t + 1) / 2
				};
			return e === i ? t.map(this._clones, (function(t, e) {
				return r(e)
			})) : t.map(this._clones, (function(t, n) {
				return t === e ? r(n) : null
			}))
		}, o.prototype.speed = function(t) {
			return t !== i && (this._speed = t), this._speed
		}, o.prototype.coordinates = function(e) {
			var n, o = 1,
				r = e - 1;
			return e === i ? t.map(this._coordinates, t.proxy((function(t, e) {
				return this.coordinates(e)
			}), this)) : (this.settings.center ? (this.settings.rtl && (o = -1, r = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[r] || 0)) / 2 * o) : n = this._coordinates[r] || 0, n = Math.ceil(n))
		}, o.prototype.duration = function(t, e, n) {
			return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
		}, o.prototype.to = function(t, e) {
			var n = this.current(),
				i = null,
				o = t - this.relative(n),
				r = (o > 0) - (o < 0),
				s = this._items.length,
				a = this.minimum(),
				l = this.maximum();
			this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), (i = (((t = n + o) - a) % s + s) % s + a) !== t && i - o <= l && i - o > 0 && (n = i - o, t = i, this.reset(n))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.isVisible() && this.update()
		}, o.prototype.next = function(t) {
			t = t || !1, this.to(this.relative(this.current()) + 1, t)
		}, o.prototype.prev = function(t) {
			t = t || !1, this.to(this.relative(this.current()) - 1, t)
		}, o.prototype.onTransitionEnd = function(t) {
			if (t !== i && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
			this.leave("animating"), this.trigger("translated")
		}, o.prototype.viewport = function() {
			var i;
			return this.options.responsiveBaseElement !== e ? i = t(this.options.responsiveBaseElement).width() : e.innerWidth ? i = e.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), i
		}, o.prototype.replace = function(e) {
			this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter((function() {
				return 1 === this.nodeType
			})).each(t.proxy((function(t, e) {
				e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
			}), this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
		}, o.prototype.add = function(e, n) {
			var o = this.relative(this._current);
			n = n === i ? this._items.length : this.normalize(n, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
				content: e,
				position: n
			}), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[o] && this.reset(this._items[o].index()), this.invalidate("items"), this.trigger("added", {
				content: e,
				position: n
			})
		}, o.prototype.remove = function(t) {
			(t = this.normalize(t, !0)) !== i && (this.trigger("remove", {
				content: this._items[t],
				position: t
			}), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
				content: null,
				position: t
			}))
		}, o.prototype.preloadAutoWidthImages = function(e) {
			e.each(t.proxy((function(e, n) {
				this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy((function(t) {
					n.attr("src", t.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
				}), this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
			}), this))
		}, o.prototype.destroy = function() {
			for (var i in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[i].destroy();
			this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
		}, o.prototype.op = function(t, e, n) {
			var i = this.settings.rtl;
			switch (e) {
				case "<":
					return i ? t > n : t < n;
				case ">":
					return i ? t < n : t > n;
				case ">=":
					return i ? t <= n : t >= n;
				case "<=":
					return i ? t >= n : t <= n
			}
		}, o.prototype.on = function(t, e, n, i) {
			t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
		}, o.prototype.off = function(t, e, n, i) {
			t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
		}, o.prototype.trigger = function(e, n, i, r, s) {
			var a = {
					item: {
						count: this._items.length,
						index: this.current()
					}
				},
				l = t.camelCase(t.grep(["on", e, i], (function(t) {
					return t
				})).join("-").toLowerCase()),
				c = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
					relatedTarget: this
				}, a, n));
			return this._supress[e] || (t.each(this._plugins, (function(t, e) {
				e.onTrigger && e.onTrigger(c)
			})), this.register({
				type: o.Type.Event,
				name: e
			}), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
		}, o.prototype.enter = function(e) {
			t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) {
				this._states.current[e] === i && (this._states.current[e] = 0), this._states.current[e]++
			}), this))
		}, o.prototype.leave = function(e) {
			t.each([e].concat(this._states.tags[e] || []), t.proxy((function(t, e) {
				this._states.current[e]--
			}), this))
		}, o.prototype.register = function(e) {
			if (e.type === o.Type.Event) {
				if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
					var n = t.event.special[e.name]._default;
					t.event.special[e.name]._default = function(t) {
						return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
					}, t.event.special[e.name].owl = !0
				}
			} else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy((function(n, i) {
				return t.inArray(n, this._states.tags[e.name]) === i
			}), this)))
		}, o.prototype.suppress = function(e) {
			t.each(e, t.proxy((function(t, e) {
				this._supress[e] = !0
			}), this))
		}, o.prototype.release = function(e) {
			t.each(e, t.proxy((function(t, e) {
				delete this._supress[e]
			}), this))
		}, o.prototype.pointer = function(t) {
			var n = {
				x: null,
				y: null
			};
			return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (n.x = t.pageX, n.y = t.pageY) : (n.x = t.clientX, n.y = t.clientY), n
		}, o.prototype.isNumeric = function(t) {
			return !isNaN(parseFloat(t))
		}, o.prototype.difference = function(t, e) {
			return {
				x: t.x - e.x,
				y: t.y - e.y
			}
		}, t.fn.owlCarousel = function(e) {
			var n = Array.prototype.slice.call(arguments, 1);
			return this.each((function() {
				var i = t(this),
					r = i.data("owl.carousel");
				r || (r = new o(this, "object" == typeof e && e), i.data("owl.carousel", r), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], (function(e, n) {
					r.register({
						type: o.Type.Event,
						name: n
					}), r.$element.on(n + ".owl.carousel.core", t.proxy((function(t) {
						t.namespace && t.relatedTarget !== this && (this.suppress([n]), r[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
					}), r))
				}))), "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, n)
			}))
		}, t.fn.owlCarousel.Constructor = o
	}(window.Zepto || window.jQuery, window, document), function(t, e, n, i) {
		var o = function(e) {
			this._core = e, this._interval = null, this._visible = null, this._handlers = {
				"initialized.owl.carousel": t.proxy((function(t) {
					t.namespace && this._core.settings.autoRefresh && this.watch()
				}), this)
			}, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		o.Defaults = {
			autoRefresh: !0,
			autoRefreshInterval: 500
		}, o.prototype.watch = function() {
			this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
		}, o.prototype.refresh = function() {
			this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
		}, o.prototype.destroy = function() {
			var t, n;
			for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
		}, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
	}(window.Zepto || window.jQuery, window, document), function(t, e, n, i) {
		var o = function(e) {
			this._core = e, this._loaded = [], this._handlers = {
				"initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy((function(e) {
					if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
						var n = this._core.settings,
							i = n.center && Math.ceil(n.items / 2) || n.items,
							o = n.center && -1 * i || 0,
							r = (e.property && undefined !== e.property.value ? e.property.value : this._core.current()) + o,
							s = this._core.clones().length,
							a = t.proxy((function(t, e) {
								this.load(e)
							}), this);
						for (n.lazyLoadEager > 0 && (i += n.lazyLoadEager, n.loop && (r -= n.lazyLoadEager, i++)); o++ < i;) this.load(s / 2 + this._core.relative(r)), s && t.each(this._core.clones(this._core.relative(r)), a), r++
					}
				}), this)
			}, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		o.Defaults = {
			lazyLoad: !1,
			lazyLoadEager: 0
		}, o.prototype.load = function(n) {
			var i = this._core.$stage.children().eq(n),
				o = i && i.find(".owl-lazy");
			!o || t.inArray(i.get(0), this._loaded) > -1 || (o.each(t.proxy((function(n, i) {
				var o, r = t(i),
					s = e.devicePixelRatio > 1 && r.attr("data-src-retina") || r.attr("data-src") || r.attr("data-srcset");
				this._core.trigger("load", {
					element: r,
					url: s
				}, "lazy"), r.is("img") ? r.one("load.owl.lazy", t.proxy((function() {
					r.css("opacity", 1), this._core.trigger("loaded", {
						element: r,
						url: s
					}, "lazy")
				}), this)).attr("src", s) : r.is("source") ? r.one("load.owl.lazy", t.proxy((function() {
					this._core.trigger("loaded", {
						element: r,
						url: s
					}, "lazy")
				}), this)).attr("srcset", s) : ((o = new Image).onload = t.proxy((function() {
					r.css({
						"background-image": 'url("' + s + '")',
						opacity: "1"
					}), this._core.trigger("loaded", {
						element: r,
						url: s
					}, "lazy")
				}), this), o.src = s)
			}), this)), this._loaded.push(i.get(0)))
		}, o.prototype.destroy = function() {
			var t, e;
			for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, t.fn.owlCarousel.Constructor.Plugins.Lazy = o
	}(window.Zepto || window.jQuery, window, document), function(t, e, n, i) {
		var o = function(n) {
			this._core = n, this._previousHeight = null, this._handlers = {
				"initialized.owl.carousel refreshed.owl.carousel": t.proxy((function(t) {
					t.namespace && this._core.settings.autoHeight && this.update()
				}), this),
				"changed.owl.carousel": t.proxy((function(t) {
					t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
				}), this),
				"loaded.owl.lazy": t.proxy((function(t) {
					t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
				}), this)
			}, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
			var i = this;
			t(e).on("load", (function() {
				i._core.settings.autoHeight && i.update()
			})), t(e).resize((function() {
				i._core.settings.autoHeight && (null != i._intervalId && clearTimeout(i._intervalId), i._intervalId = setTimeout((function() {
					i.update()
				}), 250))
			}))
		};
		o.Defaults = {
			autoHeight: !1,
			autoHeightClass: "owl-height"
		}, o.prototype.update = function() {
			var e = this._core._current,
				n = e + this._core.settings.items,
				i = this._core.settings.lazyLoad,
				o = this._core.$stage.children().toArray().slice(e, n),
				r = [],
				s = 0;
			t.each(o, (function(e, n) {
				r.push(t(n).height())
			})), (s = Math.max.apply(null, r)) <= 1 && i && this._previousHeight && (s = this._previousHeight), this._previousHeight = s, this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
		}, o.prototype.destroy = function() {
			var t, e;
			for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o
	}(window.Zepto || window.jQuery, window, document), function(t, e, n, i) {
		var o = function(e) {
			this._core = e, this._videos = {}, this._playing = null, this._handlers = {
				"initialized.owl.carousel": t.proxy((function(t) {
					t.namespace && this._core.register({
						type: "state",
						name: "playing",
						tags: ["interacting"]
					})
				}), this),
				"resize.owl.carousel": t.proxy((function(t) {
					t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
				}), this),
				"refreshed.owl.carousel": t.proxy((function(t) {
					t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
				}), this),
				"changed.owl.carousel": t.proxy((function(t) {
					t.namespace && "position" === t.property.name && this._playing && this.stop()
				}), this),
				"prepared.owl.carousel": t.proxy((function(e) {
					if (e.namespace) {
						var n = t(e.content).find(".owl-video");
						n.length && (n.css("display", "none"), this.fetch(n, t(e.content)))
					}
				}), this)
			}, this._core.options = t.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy((function(t) {
				this.play(t)
			}), this))
		};
		o.Defaults = {
			video: !1,
			videoHeight: !1,
			videoWidth: !1
		}, o.prototype.fetch = function(t, e) {
			var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
				i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
				o = t.attr("data-width") || this._core.settings.videoWidth,
				r = t.attr("data-height") || this._core.settings.videoHeight,
				s = t.attr("href");
			if (!s) throw new Error("Missing video URL.");
			if ((i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) n = "youtube";
			else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
			else {
				if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
				n = "vzaar"
			}
			i = i[6], this._videos[s] = {
				type: n,
				id: i,
				width: o,
				height: r
			}, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
		}, o.prototype.thumbnail = function(e, n) {
			var i, o, r = n.width && n.height ? "width:" + n.width + "px;height:" + n.height + "px;" : "",
				s = e.find("img"),
				a = "src",
				l = "",
				c = this._core.settings,
				h = function(n) {
					'<div class="owl-video-play-icon"></div>',
					i = c.lazyLoad ? t("<div/>", {
						class: "owl-video-tn " + l,
						srcType: n
					}) : t("<div/>", {
						class: "owl-video-tn",
						style: "opacity:1;background-image:url(" + n + ")"
					}),
					e.after(i),
					e.after('<div class="owl-video-play-icon"></div>')
				};
			if (e.wrap(t("<div/>", {
					class: "owl-video-wrapper",
					style: r
				})), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return h(s.attr(a)), s.remove(), !1;
			"youtube" === n.type ? (o = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", h(o)) : "vimeo" === n.type ? t.ajax({
				type: "GET",
				url: "//vimeo.com/api/v2/video/" + n.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function(t) {
					o = t[0].thumbnail_large, h(o)
				}
			}) : "vzaar" === n.type && t.ajax({
				type: "GET",
				url: "//vzaar.com/api/videos/" + n.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function(t) {
					o = t.framegrab_url, h(o)
				}
			})
		}, o.prototype.stop = function() {
			this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
		}, o.prototype.play = function(e) {
			var n, i = t(e.target).closest("." + this._core.settings.itemClass),
				o = this._videos[i.attr("data-video")],
				r = o.width || "100%",
				s = o.height || this._core.$stage.height();
			this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (n = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", s), n.attr("width", r), "youtube" === o.type ? n.attr("src", "//www.youtube.com/embed/" + o.id + "?autoplay=1&rel=0&v=" + o.id) : "vimeo" === o.type ? n.attr("src", "//player.vimeo.com/video/" + o.id + "?autoplay=1") : "vzaar" === o.type && n.attr("src", "//view.vzaar.com/" + o.id + "/player?autoplay=true"), t(n).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
		}, o.prototype.isInFullScreen = function() {
			var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
			return e && t(e).parent().hasClass("owl-video-frame")
		}, o.prototype.destroy = function() {
			var t, e;
			for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, t.fn.owlCarousel.Constructor.Plugins.Video = o
	}(window.Zepto || window.jQuery, window, document), function(t, e, n, i) {
		var o = function(e) {
			this.core = e, this.core.options = t.extend({}, o.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
				"change.owl.carousel": t.proxy((function(t) {
					t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
				}), this),
				"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy((function(t) {
					t.namespace && (this.swapping = "translated" == t.type)
				}), this),
				"translate.owl.carousel": t.proxy((function(t) {
					t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
				}), this)
			}, this.core.$element.on(this.handlers)
		};
		o.Defaults = {
			animateOut: !1,
			animateIn: !1
		}, o.prototype.swap = function() {
			if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
				this.core.speed(0);
				var e, n = t.proxy(this.clear, this),
					i = this.core.$stage.children().eq(this.previous),
					o = this.core.$stage.children().eq(this.next),
					r = this.core.settings.animateIn,
					s = this.core.settings.animateOut;
				this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(t.support.animation.end, n).css({
					left: e + "px"
				}).addClass("animated owl-animated-out").addClass(s)), r && o.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(r))
			}
		}, o.prototype.clear = function(e) {
			t(e.target).css({
				left: ""
			}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
		}, o.prototype.destroy = function() {
			var t, e;
			for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, t.fn.owlCarousel.Constructor.Plugins.Animate = o
	}(window.Zepto || window.jQuery, window, document), function(t, e, n, i) {
		var o = function(e) {
			this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
				"changed.owl.carousel": t.proxy((function(t) {
					t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
				}), this),
				"initialized.owl.carousel": t.proxy((function(t) {
					t.namespace && this._core.settings.autoplay && this.play()
				}), this),
				"play.owl.autoplay": t.proxy((function(t, e, n) {
					t.namespace && this.play(e, n)
				}), this),
				"stop.owl.autoplay": t.proxy((function(t) {
					t.namespace && this.stop()
				}), this),
				"mouseover.owl.autoplay": t.proxy((function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}), this),
				"mouseleave.owl.autoplay": t.proxy((function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
				}), this),
				"touchstart.owl.core": t.proxy((function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}), this),
				"touchend.owl.core": t.proxy((function() {
					this._core.settings.autoplayHoverPause && this.play()
				}), this)
			}, this._core.$element.on(this._handlers), this._core.options = t.extend({}, o.Defaults, this._core.options)
		};
		o.Defaults = {
			autoplay: !1,
			autoplayTimeout: 5e3,
			autoplayHoverPause: !1,
			autoplaySpeed: !1
		}, o.prototype._next = function(i) {
			this._call = e.setTimeout(t.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed)
		}, o.prototype.read = function() {
			return (new Date).getTime() - this._time
		}, o.prototype.play = function(n, i) {
			var o;
			this._core.is("rotating") || this._core.enter("rotating"), n = n || this._core.settings.autoplayTimeout, o = Math.min(this._time % (this._timeout || n), n), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % n - o, this._timeout = n, this._call = e.setTimeout(t.proxy(this._next, this, i), n - o)
		}, o.prototype.stop = function() {
			this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
		}, o.prototype.pause = function() {
			this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
		}, o.prototype.destroy = function() {
			var t, e;
			for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, t.fn.owlCarousel.Constructor.Plugins.autoplay = o
	}(window.Zepto || window.jQuery, window, document), function(t, e, n, i) {
		"use strict";
		var o = function(e) {
			this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
				next: this._core.next,
				prev: this._core.prev,
				to: this._core.to
			}, this._handlers = {
				"prepared.owl.carousel": t.proxy((function(e) {
					e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
				}), this),
				"added.owl.carousel": t.proxy((function(t) {
					t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
				}), this),
				"remove.owl.carousel": t.proxy((function(t) {
					t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
				}), this),
				"changed.owl.carousel": t.proxy((function(t) {
					t.namespace && "position" == t.property.name && this.draw()
				}), this),
				"initialized.owl.carousel": t.proxy((function(t) {
					t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
				}), this),
				"refreshed.owl.carousel": t.proxy((function(t) {
					t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
				}), this)
			}, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers)
		};
		o.Defaults = {
			nav: !1,
			navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
			navSpeed: !1,
			navElement: 'button type="button" role="presentation"',
			navContainer: !1,
			navContainerClass: "owl-nav",
			navClass: ["owl-prev", "owl-next"],
			slideBy: 1,
			dotClass: "owl-dot",
			dotsClass: "owl-dots",
			dots: !0,
			dotsEach: !1,
			dotsData: !1,
			dotsSpeed: !1,
			dotsContainer: !1
		}, o.prototype.initialize = function() {
			var e, n = this._core.settings;
			for (e in this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy((function(t) {
					this.prev(n.navSpeed)
				}), this)), this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy((function(t) {
					this.next(n.navSpeed)
				}), this)), n.dotsData || (this._templates = [t('<button role="button">').addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy((function(e) {
					var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
					e.preventDefault(), this.to(i, n.dotsSpeed)
				}), this)), this._overrides) this._core[e] = t.proxy(this[e], this)
		}, o.prototype.destroy = function() {
			var t, e, n, i, o;
			for (t in o = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
			for (e in this._controls) "$relative" === e && o.navContainer ? this._controls[e].html("") : this._controls[e].remove();
			for (i in this.overides) this._core[i] = this._overrides[i];
			for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
		}, o.prototype.update = function() {
			var t, e, n = this._core.clones().length / 2,
				i = n + this._core.items().length,
				o = this._core.maximum(!0),
				r = this._core.settings,
				s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
			if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
				for (this._pages = [], t = n, e = 0, 0; t < i; t++) {
					if (e >= s || 0 === e) {
						if (this._pages.push({
								start: Math.min(o, t - n),
								end: t - n + s - 1
							}), Math.min(o, t - n) === o) break;
						e = 0
					}
					e += this._core.mergers(this._core.relative(t))
				}
		}, o.prototype.draw = function() {
			var e, n = this._core.settings,
				i = this._core.items().length <= n.items,
				o = this._core.relative(this._core.current()),
				r = n.loop || n.rewind;
			this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !r && o <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !r && o >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (e = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
		}, o.prototype.onTrigger = function(e) {
			var n = this._core.settings;
			e.page = {
				index: t.inArray(this.current(), this._pages),
				count: this._pages.length,
				size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
			}
		}, o.prototype.current = function() {
			var e = this._core.relative(this._core.current());
			return t.grep(this._pages, t.proxy((function(t, n) {
				return t.start <= e && t.end >= e
			}), this)).pop()
		}, o.prototype.getPosition = function(e) {
			var n, i, o = this._core.settings;
			return "page" == o.slideBy ? (n = t.inArray(this.current(), this._pages), i = this._pages.length, e ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, e ? n += o.slideBy : n -= o.slideBy), n
		}, o.prototype.next = function(e) {
			t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
		}, o.prototype.prev = function(e) {
			t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
		}, o.prototype.to = function(e, n, i) {
			var o;
			!i && this._pages.length ? (o = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % o + o) % o].start, n)) : t.proxy(this._overrides.to, this._core)(e, n)
		}, t.fn.owlCarousel.Constructor.Plugins.Navigation = o
	}(window.Zepto || window.jQuery, window, document), function(t, e, n, i) {
		"use strict";
		var o = function(n) {
			this._core = n, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
				"initialized.owl.carousel": t.proxy((function(n) {
					n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
				}), this),
				"prepared.owl.carousel": t.proxy((function(e) {
					if (e.namespace) {
						var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
						if (!n) return;
						this._hashes[n] = e.content
					}
				}), this),
				"changed.owl.carousel": t.proxy((function(n) {
					if (n.namespace && "position" === n.property.name) {
						var i = this._core.items(this._core.relative(this._core.current())),
							o = t.map(this._hashes, (function(t, e) {
								return t === i ? e : null
							})).join();
						if (!o || e.location.hash.slice(1) === o) return;
						e.location.hash = o
					}
				}), this)
			}, this._core.options = t.extend({}, o.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy((function(t) {
				var n = e.location.hash.substring(1),
					i = this._core.$stage.children(),
					o = this._hashes[n] && i.index(this._hashes[n]);
				undefined !== o && o !== this._core.current() && this._core.to(this._core.relative(o), !1, !0)
			}), this))
		};
		o.Defaults = {
			URLhashListener: !1
		}, o.prototype.destroy = function() {
			var n, i;
			for (n in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(n, this._handlers[n]);
			for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
		}, t.fn.owlCarousel.Constructor.Plugins.Hash = o
	}(window.Zepto || window.jQuery, window, document), function(t, e, n, i) {
		function o(e, n) {
			var i = !1,
				o = e.charAt(0).toUpperCase() + e.slice(1);
			return t.each((e + " " + a.join(o + " ") + o).split(" "), (function(t, e) {
				if (undefined !== s[e]) return i = !n || e, !1
			})), i
		}

		function r(t) {
			return o(t, !0)
		}
		var s = t("<support>").get(0).style,
			a = "Webkit Moz O ms".split(" "),
			l = {
				transition: {
					end: {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd",
						transition: "transitionend"
					}
				},
				animation: {
					end: {
						WebkitAnimation: "webkitAnimationEnd",
						MozAnimation: "animationend",
						OAnimation: "oAnimationEnd",
						animation: "animationend"
					}
				}
			},
			c = function() {
				return !!o("transform")
			},
			h = function() {
				return !!o("perspective")
			},
			u = function() {
				return !!o("animation")
			};
		(function() {
			return !!o("transition")
		})() && (t.support.transition = new String(r("transition")), t.support.transition.end = l.transition.end[t.support.transition]), u() && (t.support.animation = new String(r("animation")), t.support.animation.end = l.animation.end[t.support.animation]), c() && (t.support.transform = new String(r("transform")), t.support.transform3d = h())
	}(window.Zepto || window.jQuery, window, document), function() {
		var t, e, n, i, o, r = function(t, e) {
				return function() {
					return t.apply(e, arguments)
				}
			},
			s = [].indexOf || function(t) {
				for (var e = 0, n = this.length; n > e; e++)
					if (e in this && this[e] === t) return e;
				return -1
			};
		e = function() {
			function t() {}
			return t.prototype.extend = function(t, e) {
				var n, i;
				for (n in e) i = e[n], null == t[n] && (t[n] = i);
				return t
			}, t.prototype.isMobile = function(t) {
				return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
			}, t.prototype.createEvent = function(t, e, n, i) {
				var o;
				return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i) : null != document.createEventObject ? (o = document.createEventObject()).eventType = t : o.eventName = t, o
			}, t.prototype.emitEvent = function(t, e) {
				return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
			}, t.prototype.addEvent = function(t, e, n) {
				return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
			}, t.prototype.removeEvent = function(t, e, n) {
				return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
			}, t.prototype.innerHeight = function() {
				return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
			}, t
		}(), n = this.WeakMap || this.MozWeakMap || (n = function() {
			function t() {
				this.keys = [], this.values = []
			}
			return t.prototype.get = function(t) {
				var e, n, i, o;
				for (e = n = 0, i = (o = this.keys).length; i > n; e = ++n)
					if (o[e] === t) return this.values[e]
			}, t.prototype.set = function(t, e) {
				var n, i, o, r;
				for (n = i = 0, o = (r = this.keys).length; o > i; n = ++i)
					if (r[n] === t) return void(this.values[n] = e);
				return this.keys.push(t), this.values.push(e)
			}, t
		}()), t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
			function t() {
				"undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
			}
			return t.notSupported = !0, t.prototype.observe = function() {}, t
		}()), i = this.getComputedStyle || function(t) {
			return this.getPropertyValue = function(e) {
				var n;
				return "float" === e && (e = "styleFloat"), o.test(e) && e.replace(o, (function(t, e) {
					return e.toUpperCase()
				})), (null != (n = t.currentStyle) ? n[e] : void 0) || null
			}, this
		}, o = /(\-([a-z]){1})/g, this.WOW = function() {
			function o(t) {
				null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
			}
			return o.prototype.defaults = {
				boxClass: "wow",
				animateClass: "animated",
				offset: 0,
				mobile: !0,
				live: !0,
				callback: null
			}, o.prototype.init = function() {
				var t;
				return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
			}, o.prototype.start = function() {
				var e, n, i, o;
				if (this.stopped = !1, this.boxes = function() {
						var t, n, i, o;
						for (o = [], t = 0, n = (i = this.element.querySelectorAll("." + this.config.boxClass)).length; n > t; t++) e = i[t], o.push(e);
						return o
					}.call(this), this.all = function() {
						var t, n, i, o;
						for (o = [], t = 0, n = (i = this.boxes).length; n > t; t++) e = i[t], o.push(e);
						return o
					}.call(this), this.boxes.length)
					if (this.disabled()) this.resetStyle();
					else
						for (n = 0, i = (o = this.boxes).length; i > n; n++) e = o[n], this.applyStyle(e, !0);
				return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new t(function(t) {
					return function(e) {
						var n, i, o, r, s;
						for (s = [], n = 0, i = e.length; i > n; n++) r = e[n], s.push(function() {
							var t, e, n, i;
							for (i = [], t = 0, e = (n = r.addedNodes || []).length; e > t; t++) o = n[t], i.push(this.doSync(o));
							return i
						}.call(t));
						return s
					}
				}(this)).observe(document.body, {
					childList: !0,
					subtree: !0
				}) : void 0
			}, o.prototype.stop = function() {
				return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
			}, o.prototype.sync = function() {
				return t.notSupported ? this.doSync(this.element) : void 0
			}, o.prototype.doSync = function(t) {
				var e, n, i, o, r;
				if (null == t && (t = this.element), 1 === t.nodeType) {
					for (r = [], n = 0, i = (o = (t = t.parentNode || t).querySelectorAll("." + this.config.boxClass)).length; i > n; n++) e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
					return r
				}
			}, o.prototype.show = function(t) {
				return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
			}, o.prototype.applyStyle = function(t, e) {
				var n, i, o;
				return i = t.getAttribute("data-wow-duration"), n = t.getAttribute("data-wow-delay"), o = t.getAttribute("data-wow-iteration"), this.animate(function(r) {
					return function() {
						return r.customStyle(t, e, i, n, o)
					}
				}(this))
			}, o.prototype.animate = "requestAnimationFrame" in window ? function(t) {
				return window.requestAnimationFrame(t)
			} : function(t) {
				return t()
			}, o.prototype.resetStyle = function() {
				var t, e, n, i, o;
				for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
				return o
			}, o.prototype.resetAnimation = function(t) {
				var e;
				return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement).className = e.className.replace(this.config.animateClass, "").trim() : void 0
			}, o.prototype.customStyle = function(t, e, n, i, o) {
				return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {
					animationDuration: n
				}), i && this.vendorSet(t.style, {
					animationDelay: i
				}), o && this.vendorSet(t.style, {
					animationIterationCount: o
				}), this.vendorSet(t.style, {
					animationName: e ? "none" : this.cachedAnimationName(t)
				}), t
			}, o.prototype.vendors = ["moz", "webkit"], o.prototype.vendorSet = function(t, e) {
				var n, i, o, r;
				for (n in i = [], e) o = e[n], t["" + n] = o, i.push(function() {
					var e, i, s, a;
					for (a = [], e = 0, i = (s = this.vendors).length; i > e; e++) r = s[e], a.push(t["" + r + n.charAt(0).toUpperCase() + n.substr(1)] = o);
					return a
				}.call(this));
				return i
			}, o.prototype.vendorCSS = function(t, e) {
				var n, o, r, s, a, l;
				for (s = (a = i(t)).getPropertyCSSValue(e), n = 0, o = (r = this.vendors).length; o > n; n++) l = r[n], s = s || a.getPropertyCSSValue("-" + l + "-" + e);
				return s
			}, o.prototype.animationName = function(t) {
				var e;
				try {
					e = this.vendorCSS(t, "animation-name").cssText
				} catch (n) {
					e = i(t).getPropertyValue("animation-name")
				}
				return "none" === e ? "" : e
			}, o.prototype.cacheAnimationName = function(t) {
				return this.animationNameCache.set(t, this.animationName(t))
			}, o.prototype.cachedAnimationName = function(t) {
				return this.animationNameCache.get(t)
			}, o.prototype.scrollHandler = function() {
				return this.scrolled = !0
			}, o.prototype.scrollCallback = function() {
				var t;
				return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
					var e, n, i, o;
					for (o = [], e = 0, n = (i = this.boxes).length; n > e; e++)(t = i[e]) && (this.isVisible(t) ? this.show(t) : o.push(t));
					return o
				}.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
			}, o.prototype.offsetTop = function(t) {
				for (var e; void 0 === t.offsetTop;) t = t.parentNode;
				for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
				return e
			}, o.prototype.isVisible = function(t) {
				var e, n, i, o, r;
				return n = t.getAttribute("data-wow-offset") || this.config.offset, o = (r = window.pageYOffset) + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, e = (i = this.offsetTop(t)) + t.clientHeight, o >= i && e >= r
			}, o.prototype.util = function() {
				return null != this._util ? this._util : this._util = new e
			}, o.prototype.disabled = function() {
				return !this.config.mobile && this.util().isMobile(navigator.userAgent)
			}, o
		}()
	}.call(this), function(t, e) {
		"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
	}(this, (function() {
		return function(t) {
			var e = {};

			function n(i) {
				if (e[i]) return e[i].exports;
				var o = e[i] = {
					i: i,
					l: !1,
					exports: {}
				};
				return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
			}
			return n.m = t, n.c = e, n.d = function(t, e, i) {
				n.o(t, e) || Object.defineProperty(t, e, {
					enumerable: !0,
					get: i
				})
			}, n.r = function(t) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(t, "__esModule", {
					value: !0
				})
			}, n.t = function(t, e) {
				if (1 & e && (t = n(t)), 8 & e) return t;
				if (4 & e && "object" == typeof t && t && t.__esModule) return t;
				var i = Object.create(null);
				if (n.r(i), Object.defineProperty(i, "default", {
						enumerable: !0,
						value: t
					}), 2 & e && "string" != typeof t)
					for (var o in t) n.d(i, o, function(e) {
						return t[e]
					}.bind(null, o));
				return i
			}, n.n = function(t) {
				var e = t && t.__esModule ? function() {
					return t.default
				} : function() {
					return t
				};
				return n.d(e, "a", e), e
			}, n.o = function(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}, n.p = "", n(n.s = 0)
		}([function(t, e, n) {
			"use strict";
			var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				o = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var i = e[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
						}
					}
					return function(e, n, i) {
						return n && t(e.prototype, n), i && t(e, i), e
					}
				}(),
				r = l(n(1)),
				s = l(n(3)),
				a = l(n(4));

			function l(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			var c = function(t) {
				function e(t, n) {
					! function(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
					}(this, e);
					var i = function(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || "object" != typeof e && "function" != typeof e ? t : e
					}(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
					return i.resolveOptions(n), i.listenClick(t), i
				}
				return function(t, e) {
					if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
					t.prototype = Object.create(e && e.prototype, {
						constructor: {
							value: t,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
				}(e, s.default), o(e, [{
					key: "resolveOptions",
					value: function() {
						var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
						this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === i(t.container) ? t.container : document.body
					}
				}, {
					key: "listenClick",
					value: function(t) {
						var e = this;
						this.listener = (0, a.default)(t, "click", (function(t) {
							return e.onClick(t)
						}))
					}
				}, {
					key: "onClick",
					value: function(t) {
						var e = t.delegateTarget || t.currentTarget;
						this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new r.default({
							action: this.action(e),
							target: this.target(e),
							text: this.text(e),
							container: this.container,
							trigger: e,
							emitter: this
						})
					}
				}, {
					key: "defaultAction",
					value: function(t) {
						return h("action", t)
					}
				}, {
					key: "defaultTarget",
					value: function(t) {
						var e = h("target", t);
						if (e) return document.querySelector(e)
					}
				}, {
					key: "defaultText",
					value: function(t) {
						return h("text", t)
					}
				}, {
					key: "destroy",
					value: function() {
						this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
					}
				}], [{
					key: "isSupported",
					value: function() {
						var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
							e = "string" == typeof t ? [t] : t,
							n = !!document.queryCommandSupported;
						return e.forEach((function(t) {
							n = n && !!document.queryCommandSupported(t)
						})), n
					}
				}]), e
			}();

			function h(t, e) {
				var n = "data-clipboard-" + t;
				if (e.hasAttribute(n)) return e.getAttribute(n)
			}
			t.exports = c
		}, function(t, e, n) {
			"use strict";
			var i, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				},
				r = function() {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var i = e[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
						}
					}
					return function(e, n, i) {
						return n && t(e.prototype, n), i && t(e, i), e
					}
				}(),
				s = (i = n(2)) && i.__esModule ? i : {
					default: i
				},
				a = function() {
					function t(e) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, t), this.resolveOptions(e), this.initSelection()
					}
					return r(t, [{
						key: "resolveOptions",
						value: function() {
							var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
							this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
						}
					}, {
						key: "initSelection",
						value: function() {
							this.text ? this.selectFake() : this.target && this.selectTarget()
						}
					}, {
						key: "selectFake",
						value: function() {
							var t = this,
								e = "rtl" == document.documentElement.getAttribute("dir");
							this.removeFake(), this.fakeHandlerCallback = function() {
								return t.removeFake()
							}, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
							var n = window.pageYOffset || document.documentElement.scrollTop;
							this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, s.default)(this.fakeElem), this.copyText()
						}
					}, {
						key: "removeFake",
						value: function() {
							this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
						}
					}, {
						key: "selectTarget",
						value: function() {
							this.selectedText = (0, s.default)(this.target), this.copyText()
						}
					}, {
						key: "copyText",
						value: function() {
							var t = void 0;
							try {
								t = document.execCommand(this.action)
							} catch (e) {
								t = !1
							}
							this.handleResult(t)
						}
					}, {
						key: "handleResult",
						value: function(t) {
							this.emitter.emit(t ? "success" : "error", {
								action: this.action,
								text: this.selectedText,
								trigger: this.trigger,
								clearSelection: this.clearSelection.bind(this)
							})
						}
					}, {
						key: "clearSelection",
						value: function() {
							this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
						}
					}, {
						key: "destroy",
						value: function() {
							this.removeFake()
						}
					}, {
						key: "action",
						set: function() {
							var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
							if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
						},
						get: function() {
							return this._action
						}
					}, {
						key: "target",
						set: function(t) {
							if (void 0 !== t) {
								if (!t || "object" !== (void 0 === t ? "undefined" : o(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
								if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
								if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
								this._target = t
							}
						},
						get: function() {
							return this._target
						}
					}]), t
				}();
			t.exports = a
		}, function(t, e) {
			t.exports = function(t) {
				var e;
				if ("SELECT" === t.nodeName) t.focus(), e = t.value;
				else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
					var n = t.hasAttribute("readonly");
					n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
				} else {
					t.hasAttribute("contenteditable") && t.focus();
					var i = window.getSelection(),
						o = document.createRange();
					o.selectNodeContents(t), i.removeAllRanges(), i.addRange(o), e = i.toString()
				}
				return e
			}
		}, function(t, e) {
			function n() {}
			n.prototype = {
				on: function(t, e, n) {
					var i = this.e || (this.e = {});
					return (i[t] || (i[t] = [])).push({
						fn: e,
						ctx: n
					}), this
				},
				once: function(t, e, n) {
					var i = this;

					function o() {
						i.off(t, o), e.apply(n, arguments)
					}
					return o._ = e, this.on(t, o, n)
				},
				emit: function(t) {
					for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, o = n.length; i < o; i++) n[i].fn.apply(n[i].ctx, e);
					return this
				},
				off: function(t, e) {
					var n = this.e || (this.e = {}),
						i = n[t],
						o = [];
					if (i && e)
						for (var r = 0, s = i.length; r < s; r++) i[r].fn !== e && i[r].fn._ !== e && o.push(i[r]);
					return o.length ? n[t] = o : delete n[t], this
				}
			}, t.exports = n
		}, function(t, e, n) {
			var i = n(5),
				o = n(6);
			t.exports = function(t, e, n) {
				if (!t && !e && !n) throw new Error("Missing required arguments");
				if (!i.string(e)) throw new TypeError("Second argument must be a String");
				if (!i.fn(n)) throw new TypeError("Third argument must be a Function");
				if (i.node(t)) return p = e, d = n, (u = t).addEventListener(p, d), {
					destroy: function() {
						u.removeEventListener(p, d)
					}
				};
				if (i.nodeList(t)) return l = t, c = e, h = n, Array.prototype.forEach.call(l, (function(t) {
					t.addEventListener(c, h)
				})), {
					destroy: function() {
						Array.prototype.forEach.call(l, (function(t) {
							t.removeEventListener(c, h)
						}))
					}
				};
				if (i.string(t)) return r = t, s = e, a = n, o(document.body, r, s, a);
				throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
				var r, s, a, l, c, h, u, p, d
			}
		}, function(t, e) {
			e.node = function(t) {
				return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
			}, e.nodeList = function(t) {
				var n = Object.prototype.toString.call(t);
				return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
			}, e.string = function(t) {
				return "string" == typeof t || t instanceof String
			}, e.fn = function(t) {
				return "[object Function]" === Object.prototype.toString.call(t)
			}
		}, function(t, e, n) {
			var i = n(7);

			function o(t, e, n, o, r) {
				var s = function(t, e, n, o) {
					return function(n) {
						n.delegateTarget = i(n.target, e), n.delegateTarget && o.call(t, n)
					}
				}.apply(this, arguments);
				return t.addEventListener(n, s, r), {
					destroy: function() {
						t.removeEventListener(n, s, r)
					}
				}
			}
			t.exports = function(t, e, n, i, r) {
				return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, (function(t) {
					return o(t, e, n, i, r)
				})))
			}
		}, function(t, e) {
			if ("undefined" != typeof Element && !Element.prototype.matches) {
				var n = Element.prototype;
				n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector
			}
			t.exports = function(t, e) {
				for (; t && 9 !== t.nodeType;) {
					if ("function" == typeof t.matches && t.matches(e)) return t;
					t = t.parentNode
				}
			}
		}])
	})), "function" == typeof WOW) {
	var wow = new WOW({
		boxClass: "wow",
		animateClass: "animated",
		offset: 150,
		mobile: !1,
		live: !0
	});
	wow.init()
}

function fixHeight() {
	var t = $("#mainNav").outerHeight();
	$("#frame").attr("height", $(window).height() - 0 - t + "px")
}
var captchaShort, captchaContact, captchaSignin, captchaSignup, captchaForgotpassword, captchaShortlink, invisibleCaptchaShort, invisibleCaptchaContact, invisibleCaptchaSignin, invisibleCaptchaSignup, invisibleCaptchaForgotpassword, invisibleCaptchaShortlink;
$("#mainNav.navbar-fixed-top").affix({
	offset: {
		top: 100
	}
}), $(window).resize((function() {
	fixHeight()
})).resize(), $(document).ready((function() {
	$(".testimonials").owlCarousel({
		items: 1,
		margin: 10,
		loop: !0
	}), $(".advertising-rates > ul.nav-tabs li:first-child").addClass("active"), $(".payout-rates > ul.nav-tabs li:first-child").addClass("active"), $(".advertising-rates > div.tab-content div.tab-pane:first-child").addClass("active"), $(".payout-rates > div.tab-content div.tab-pane:first-child").addClass("active")
})), $("#contact-form").submit((function(t) {
	if (t.preventDefault(), "invisible-recaptcha" === app_vars.captcha_type && "yes" === app_vars.enable_captcha && "yes" === app_vars.captcha_contact && $("#captchaContact").length && !$(this).hasClass("captcha-done")) return !1;
	var e = $(this),
		n = ($(this).html(), e.find("button"));
	n.html();
	$.ajax({
		dataType: "json",
		type: "POST",
		url: e.attr("action"),
		data: e.serialize(),
		cache: !1,
		beforeSend: function(t) {
			n.attr("disabled", !0).html('<i class="fa fa-spinner fa-spin"></i>'), $('<div class="loader"></div>').insertAfter(e)
		},
		success: function(t, n, i) {
			if ("success" === t.status) {
				e.slideUp();
				var o = '<div class="alert alert-success" role="alert">' + t.message + "</div>";
				$("#contact .contact-result").html(o).slideDown()
			} else {
				e.slideUp();
				o = '<div class="alert alert-danger" role="alert"><b>Error!</b> ' + t.message + "</div>";
				$("#contact .contact-result").html(o).slideDown()
			}
		},
		error: function(t, e, n) {
			alert("An error occured: " + t.status + " " + t.statusText)
		},
		complete: function(t, e) {
			$("#contact .loader").remove()
		}
	})
})), $("a.popup").on("click", (function(t) {
	t.preventDefault();
	var e = ($(window).width() - 575) / 2,
		n = ($(window).height() - 400) / 2,
		i = this.href,
		o = "status=1,width=575,height=400,top=" + n + ",left=" + e;
	window.open(i, "share", o)
})), window.onload = function() {
	if ("yes" !== app_vars.enable_captcha) return !0;
	"securimage" === app_vars.captcha_type && (null === app_vars.user_id && "1" === app_vars.captcha_short_anonymous && $("#captchaShort").length && $.ajax({
		type: "GET",
		url: app_vars.current_url + "securimage/render/captchaShort",
		success: function(t, e) {
			$("#captchaShort").html(t)
		},
		error: function() {
			console.log("Securimage can not be loaded")
		}
	}), "yes" === app_vars.captcha_contact && $("#captchaContact").length && $.ajax({
		type: "GET",
		url: app_vars.current_url + "securimage/render/captchaContact",
		success: function(t, e) {
			$("#captchaContact").html(t)
		},
		error: function() {
			console.log("Securimage can not be loaded")
		}
	}), "yes" === app_vars.captcha_signin && $("#captchaSignin").length && $.ajax({
		type: "GET",
		url: app_vars.current_url + "securimage/render/captchaSignin",
		success: function(t, e) {
			$("#captchaSignin").html(t)
		},
		error: function() {
			console.log("Securimage can not be loaded")
		}
	}), "yes" === app_vars.captcha_signup && $("#captchaSignup").length && $.ajax({
		type: "GET",
		url: app_vars.current_url + "securimage/render/captchaSignup",
		success: function(t, e) {
			$("#captchaSignup").html(t)
		},
		error: function() {
			console.log("Securimage can not be loaded")
		}
	}), "yes" === app_vars.captcha_forgot_password && $("#captchaForgotpassword").length && $.ajax({
		type: "GET",
		url: app_vars.current_url + "securimage/render/captchaForgotpassword",
		success: function(t, e) {
			$("#captchaForgotpassword").html(t)
		},
		error: function() {
			console.log("Securimage can not be loaded")
		}
	}), "yes" === app_vars.captcha_shortlink && $("#captchaShortlink").length && $.ajax({
		type: "GET",
		url: app_vars.current_url + "securimage/render/captchaShortlink",
		success: function(t, e) {
			$("#captchaShortlink").html(t)
		},
		error: function() {
			console.log("Securimage can not be loaded")
		}
	})), "solvemedia" === app_vars.captcha_type && (null === app_vars.user_id && "1" === app_vars.captcha_short_anonymous && $("#captchaShort").length && (captchaShort = ACPuzzle.create(app_vars.solvemedia_challenge_key, "captchaShort", {
		multi: !0,
		id: "captchaShort"
	})), "yes" === app_vars.captcha_contact && $("#captchaContact").length && (captchaContact = ACPuzzle.create(app_vars.solvemedia_challenge_key, "captchaContact", {
		multi: !0,
		id: "captchaContact"
	})), "yes" === app_vars.captcha_signin && $("#captchaSignin").length && (captchaSignin = ACPuzzle.create(app_vars.solvemedia_challenge_key, "captchaSignin", {
		multi: !0,
		id: "captchaSignin"
	})), "yes" === app_vars.captcha_signup && $("#captchaSignup").length && (captchaSignup = ACPuzzle.create(app_vars.solvemedia_challenge_key, "captchaSignup", {
		multi: !0,
		id: "captchaSignup"
	})), "yes" === app_vars.captcha_forgot_password && $("#captchaForgotpassword").length && (captchaForgotpassword = ACPuzzle.create(app_vars.solvemedia_challenge_key, "captchaForgotpassword", {
		multi: !0,
		id: "captchaForgotpassword"
	})), "yes" === app_vars.captcha_shortlink && $("#captchaShortlink").length && (captchaShortlink = ACPuzzle.create(app_vars.solvemedia_challenge_key, "captchaShortlink", {
		multi: !0,
		id: "captchaShortlink"
	})))
};

if (-1 !== ["recaptcha", "invisible-recaptcha"].indexOf(app_vars.captcha_type)) {
	let t = document.createElement("script");
	t.src = "https://www.recaptcha.net/recaptcha/api.js?onload=onloadRecaptchaCallback&render=explicit", t.async = !0, t.defer = !0, document.body.appendChild(t)
}
if ("hcaptcha_checkbox" === app_vars.captcha_type) {
	let t = document.createElement("script");
	t.src = "https://hcaptcha.com/1/api.js?onload=onloadHCaptchaCallback&render=explicit", t.async = !0, t.defer = !0, document.body.appendChild(t)
}
if ("solvemedia" === app_vars.captcha_type) {
	let t = document.createElement("script");
	t.type = "text/javascript", "https:" === location.protocol ? t.src = "https://api-secure.solvemedia.com/papi/challenge.ajax" : t.src = "http://api.solvemedia.com/papi/challenge.ajax", document.body.appendChild(t)
}

function setCookie(t, e, n) {
	var i = new Date;
	i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
	var o = "expires=" + i.toUTCString();
	document.cookie = t + "=" + e + ";" + o + ";path=/"
}

function getCookie(t) {
	for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), i = 0; i < n.length; i++) {
		for (var o = n[i];
			" " === o.charAt(0);) o = o.substring(1);
		if (0 === o.indexOf(e)) return o.substring(e.length, o.length)
	}
	return ""
}
var go_popup = $("#go-popup");

function checkAdblockUser() {
	if ("1" !== getCookie("ab")) {
		document.cookie = "ab=2; path=/";
		var t = $("#ad-banner");
		if ((0 === t.filter(":visible").length || t.filter(":hidden").length > 0 || 0 === t.height()) && (document.cookie = "ab=1; path=/", "1" === app_vars.force_disable_adblock)) {
			var e = '<div class="alert alert-danger" style="display: inline-block;">' + app_vars.please_disable_adblock + "</div>";
			$("#link-view").replaceWith(e), $(".banner-page a.get-link").replaceWith(e), $(".interstitial-page div.skip-ad").replaceWith(e)
		}
	}
}

function checkAdsbypasserUser() {
	if ("1" !== getCookie("ab")) {
		var t = document.title.split(" ").splice(-1)[0];
		document.cookie = "ab=2; path=/", ["AdsBypasser", "SafeBrowse"].indexOf(t) >= 0 && (document.cookie = "ab=1; path=/")
	}
}

function checkPrivateMode() {
	"function" == typeof Promise && new Promise((function(t) {
		var e, n = function() {
				t(!0)
			},
			i = function() {
				t(!1)
			};
		window.webkitRequestFileSystem ? webkitRequestFileSystem(0, 0, i, n) : "MozAppearance" in document.documentElement.style ? ((e = indexedDB.open("test")).onerror = n, e.onsuccess = i) : /constructor/i.test(window.HTMLElement) ? function() {
			try {
				localStorage.length || (localStorage.x = 1, localStorage.removeItem("x")), i()
			} catch (t) {
				navigator.cookieEnabled ? n() : i()
			}
		}() : window.indexedDB || !window.PointerEvent && !window.MSPointerEvent ? i() : n()
	})).then((function(t) {
		"1" !== getCookie("ab") && (document.cookie = "ab=2; path=/", t && (document.cookie = "ab=1; path=/"))
	}))
}
go_popup.length && ($(document).one("click.adLinkFly.goPopupClick", (function(t) {
	go_popup.submit()
})), go_popup.one("submit.adLinkFly.goPopupSubmit", (function(t) {
	var e = screen.height - 150,
		n = screen.width - 150,
		i = Number(screen.width / 2 - n / 2),
		o = Number(screen.height / 2 - e / 2);
	window.open("about:blank", "Popup_Window", "toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=" + n + ",height=" + e + ",left = " + i + ",top = " + o);
	this.target = "Popup_Window"
}))), document.cookie = "ab=0; path=/";
var body = $("body"),
	ad_type = "";
body.hasClass("banner-page") ? ad_type = "banner" : body.hasClass("interstitial-page") && (ad_type = "interstitial");
var counter_start_object = document;
"load" === app_vars.counter_start && (counter_start_object = window), $(counter_start_object).on(app_vars.counter_start + ".adLinkFly.checkAdblockers", (function(t) {
	checkAdsbypasserUser(), window.setTimeout((function() {
		checkAdblockUser()
	}), 1e3)
})), $(counter_start_object).on(app_vars.counter_start + ".adLinkFly.counter", (function(t) {
	if ("banner" === ad_type) {
		var e = $("#timer");
		window.setTimeout((function() {
		    console.log("Geri sayım")
			var t, n = 1e3 * app_vars.counter_value;
			t = setInterval((function() {
				window.blurred || (n -= 1e3, e.text(n / 1e3), n <= 0 && (clearInterval(t), $("#go-link").addClass("go-link"), $("#go-link.go-link").submit()))
				if(n <= 0) {
					console.log('Geri Say覺m Bitti')
					let ads_type_page = document.getElementById('ads_type_pagexx').value;
					let pages = document.getElementById('ads_type_page').value;
					if(pages <= ads_type_page) {
						let go_push = document.getElementById('hcaptcha_onayla')
						go_push.innerHTML = 'GO!'
						go_push.classList.remove('disabled')
					} else {
						ads_type_page++;
						let pagess = document.getElementById('pages')
						pages.value = ads_type_page;
						pagess.innerHTML = ads_type_page + ' / ' + pages;
						let go_push = document.getElementById('hcaptcha_onayla')
						go_push.innerHTML = 'Next Page'
						go_push.classList.remove('disabled')
						let ads_type_pagexx = document.getElementById('ads_type_pagexx')
						ads_type_pagexx.value = ads_type_page;
					}
				} else {
					let go_push = document.getElementById('hcaptcha_onayla')
					let timesss = document.getElementById('timmmeee')
					timesss.value = `${n / 1e3}`;
					go_push.innerHTML =  `(${n / 1e3}) Please wait...`;
				}
			}), 1e3)
		}), 500), window.onblur = function() {
			window.blurred = !0
			console.log("a0")
		}, window.onfocus = function() {
			window.blurred = !1
			console.log("a1")
		}
	} else {
		    console.log("else")
	}
	if ("interstitial" === ad_type) {
		var n = $(".skip-ad"),
			i = $(".skip-ad .counter");
		window.setTimeout((function() {
			var t, e = 1e3 * app_vars.counter_value;
			
			console.log("setTimeout")
			t = setInterval((function() {
				e -= 1e3, i.text(e / 1e3 + " s"), e <= 0 && (n.html('<a href="" class="btn" onclick="javascript: return false;">' + app_vars.skip_ad + "</a>"), clearInterval(t), $("#go-link").addClass("go-link"), $("#go-link.go-link").submit())
			}), 1e3)
		}), 500)
	}
}));


function reload_page() {
	window.location.href = "/"
}


var clipboard = new ClipboardJS(".copy-it");

function setTooltip(t, e) {
	$(t).attr("data-original-title", e).tooltip("show")
}

function cookie_accept() {
	var t = '<div id="cookie-pop"><div class="container-fluid"><div class="col-xs-9"><div class="cookie-message">' + app_vars.cookie_message + '</div></div><div class="col-xs-3"><div class="cookie-confirm"><button id="got-cookie" class="btn btn-default" type="submit">' + app_vars.cookie_button + "</button></div></div></div></div>";
	$("body").append(t)
}
clipboard.on("success", (function(t) {
	setTooltip(t.trigger, app_vars.copied)
})), app_vars.cookie_notification_bar && "" === getCookie("cookieLaw") && (cookie_accept(), $("#cookie-pop").show(), $("#got-cookie").click((function() {
	setCookie("cookieLaw", "got_it", 365), $("#cookie-pop").remove()
})));