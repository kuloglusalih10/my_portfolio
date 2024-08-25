(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[405], {
    5728: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return t(854)
        }
        ])
    },
    1498: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return o
            }
        });
        var r = t(5893)
          , a = (t(7738),
        t(82))
          , i = t.n(a);
        function o(e) {
            var n = e.preTitle
              , t = e.title
              , a = e.subTitle;
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsxs)("div", {
                    className: "".concat(i().title),
                    children: [(0,
                    r.jsx)("h4", {
                        children: n
                    }), (0,
                    r.jsx)("h2", {
                        children: t
                    }), (0,
                    r.jsx)("p", {
                        className: "subtitle",
                        children: a
                    })]
                })
            })
        }
    },
    7984: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return k
            }
        });
        var r = t(5893)
          , a = t(5675)
          , i = t.n(a)
          , o = t(7294)
          , s = t(2233)
          , c = t(8984)
          , l = t(7650)
          , d = t(3341)
          , u = t(8285)
          , h = t(9783)
          , p = t.n(h)
          , m = JSON.parse('[{"project":"My Supply Co.","url":"https://mysupplyco.com","repo":"Private","descriptionTitle":"D2C & B2B ecommerce site and blog","description":"with elegant solutions for a complex codebase and customer journey.","imageOptions":[],"images":[{"key":"mock-stack","hover":"right","h":"1200","w":"556","url":"/img/msc-mock_stack/03.png"},{"key":"mock-stack","hover":"right","h":"1200","w":"556","url":"/img/msc-mock_stack/02.png"},{"key":"mock-stack","hover":"left","h":"1200","w":"556","url":"/img/msc-mock_stack/01.png"}],"stack":[{"key":"php","name":"PHP","type":"devicon"},{"key":"mysql","name":"mySQL","type":"devicon"},{"key":"javascript","name":"JavaScript","type":"devicon"},{"key":"jquery","name":"jQuery","type":"devicon"},{"key":"woocommerce","name":"WooCommerce","type":"devicon"},{"key":"wordpress","name":"Wordpress","type":"devicon"},{"key":"html5","name":"HTML5","type":"devicon"},{"key":"css3","name":"CSS3","type":"devicon"},{"key":"sass","name":"SCSS","type":"devicon"},{"key":"git","name":"Git(Hub)","type":"devicon"},{"key":"google","name":"GA4/GTM/EEC","type":"devicon"}]},{"project":"andrewnelson.net","url":"https://github.com/atlamors/portfolio","repo":"Public","descriptionTitle":"An open source portfolio","description":"built on Next.js and React. A fast and agile MERN stack single page application.","imageOptions":[{"key":"size","value":"large"}],"images":[{"key":"portfolio","hover":"left","h":"797","w":"556","url":"/img/portfolio-mock_single.png"}],"stack":[{"key":"nextjs","name":"Next.js","type":"devicon"},{"key":"react","name":"React","type":"devicon"},{"key":"nodejs","name":"Node.js","type":"devicon"},{"key":"mongodb","name":"MongoDB","type":"devicon"},{"key":"javascript","name":"JavaScript","type":"devicon"},{"key":"html5","name":"HTML5","type":"devicon"},{"key":"css3","name":"CSS3","type":"devicon"},{"key":"sass","name":"SCSS","type":"devicon"},{"key":"git","name":"Git(Hub)","type":"devicon"}]}]');
        function y(e, n) {
            var t = e.content
              , a = t.project
              , h = (t.url,
            t.repo)
              , m = t.descriptionTitle
              , y = t.description
              , b = t.stack
              , _ = (t.imageOptions,
            t.images)
              , j = (0,
            s._)()
              , k = (0,
            l.YD)({
                threshold: .25,
                triggerOnce: !1
            })
              , w = k.ref
              , C = k.inView;
            return (0,
            o.useEffect)((function() {
                C && j.start("visible"),
                C || j.start("hidden")
            }
            ), [j, C]),
            (0,
            r.jsxs)(c.m.section, {
                className: p().project,
                ref: w,
                variants: f,
                initial: ["rest", "hidden"],
                whileHover: "hover",
                animate: j,
                children: [(0,
                r.jsx)("div", {
                    className: p().details,
                    children: (0,
                    r.jsxs)("div", {
                        className: p().projectHeader,
                        children: [(0,
                        r.jsxs)("div", {
                            className: p().header,
                            children: [(0,
                            r.jsx)("h3", {
                                className: "highlight",
                                children: a
                            }), (0,
                            r.jsxs)("span", {
                                className: p().privateOr,
                                children: [(0,
                                r.jsx)("i", {
                                    className: "devicon-github-plain"
                                }), h]
                            })]
                        }), (0,
                        r.jsx)("div", {
                            className: p().description,
                            children: (0,
                            r.jsxs)("p", {
                                children: [(0,
                                r.jsx)("strong", {
                                    children: m
                                }), " ", y]
                            })
                        }), (0,
                        r.jsx)("div", {
                            className: p().stackContainer,
                            children: (0,
                            r.jsx)(d.Z, {
                                list: b,
                                block: "stack",
                                fullContainer: !1,
                                color: !1
                            })
                        }), (0,
                        r.jsx)(c.m.div, {
                            variants: "",
                            className: p().viewProject,
                            children: (0,
                            r.jsx)(u.Z, {
                                icon: ["fad", "arrow-right-to-bracket"]
                            })
                        })]
                    })
                }), (0,
                r.jsx)("div", {
                    className: p().imageContainer,
                    children: (0,
                    r.jsx)("span", {
                        className: "".concat(p().imageAnimationContainer),
                        children: _.map((function(e, n) {
                            var t = e.key
                              , a = e.url
                              , o = e.hover
                              , s = e.h
                              , l = e.w;
                            return o = "left" === o ? g : x,
                            (0,
                            r.jsx)(c.m.div, {
                                variants: v,
                                children: (0,
                                r.jsx)(c.m.div, {
                                    variants: o,
                                    children: (0,
                                    r.jsx)(i(), {
                                        src: a,
                                        alt: "x",
                                        height: s,
                                        width: l
                                    })
                                })
                            }, "".concat(n, "-").concat(t))
                        }
                        ))
                    })
                })]
            }, n)
        }
        var f = {
            hidden: {
                transition: {
                    delayChildren: .125,
                    staggerChildren: .0625
                }
            },
            visible: {
                transition: {
                    delayChildren: .125,
                    staggerChildren: .25
                }
            },
            rest: {
                transition: {
                    delayChildren: 0,
                    staggerChildren: 0
                }
            },
            hover: {
                transition: {
                    delayChildren: 0,
                    staggerChildren: 0
                }
            }
        }
          , v = {
            hidden: {
                y: 75,
                opacity: 0,
                transition: {
                    type: "tween",
                    ease: "easeIn",
                    duration: .35
                }
            },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    type: "tween",
                    ease: "easeOut",
                    duration: .5
                }
            }
        }
          , g = {
            rest: {
                x: 0
            },
            hover: {
                x: -20
            }
        }
          , x = {
            rest: {
                x: 0
            },
            hover: {
                x: 20
            }
        }
          , b = t(5322)
          , _ = t(7738)
          , j = t(1498);
        function k() {
            return (0,
            r.jsxs)(b.Z, {
                classProp: p().hasBg,
                children: [(0,
                r.jsxs)(_.Z, {
                    spacing: "verticalXXXXLrg",
                    children: [(0,
                    r.jsx)(j.Z, {
                        title: "Featured Projects",
                        preTitle: "UX and Full Stack",
                        subTitle: "Focused on the experience, driven by the engineering."
                    }), "     ", m.map((function(e, n) {
                        return (0,
                        r.jsx)(y, {
                            content: e,
                            index: n
                        }, n)
                    }
                    ))]
                }), (0,
                r.jsxs)("div", {
                    className: p().bgContainer,
                    children: [(0,
                    r.jsxs)("span", {
                        className: p().orbitalBg,
                        children: [(0,
                        r.jsx)("span", {
                            class: "".concat(p().bgSection),
                            children: (0,
                            r.jsx)("span", {
                                className: "".concat(p().bgInner, " ").concat(p().heroLeft, " ").concat(p().heroOrbital)
                            })
                        }), (0,
                        r.jsx)("span", {
                            class: "".concat(p().bgSection),
                            children: (0,
                            r.jsx)("span", {
                                className: "".concat(p().bgInner, " ").concat(p().heroCenter)
                            })
                        }), (0,
                        r.jsx)("span", {
                            class: "".concat(p().bgSection),
                            children: (0,
                            r.jsx)("span", {
                                className: "".concat(p().bgInner, " ").concat(p().heroRight, " ").concat(p().heroOrbital)
                            })
                        })]
                    }), (0,
                    r.jsx)("span", {
                        className: p().afterGlowBg
                    })]
                })]
            })
        }
    },
    3341: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return u
            }
        });
        var r = t(5893)
          , a = t(7294)
          , i = t(2233)
          , o = t(8984)
          , s = t(7650)
          , c = t(8285)
          , l = t(5882)
          , d = t.n(l);
        function u(e) {
            var n = e.list
              , t = e.block
              , c = e.color
              , l = e.fullContainer
              , u = (0,
            i._)()
              , p = (0,
            s.YD)({
                threshold: .5,
                triggerOnce: !1
            })
              , m = p.ref
              , y = p.inView;
            (0,
            a.useEffect)((function() {
                y && u.start("visible"),
                y || u.start("hidden")
            }
            ), [u, y]);
            var f = {
                hidden: {
                    y: 20,
                    opacity: -.5
                },
                visible: {
                    y: 0,
                    opacity: 1
                }
            };
            return (0,
            r.jsx)(o.m.ul, {
                className: "".concat(d().list, " ").concat(d()[t], " ").concat(d()[l]),
                ref: m,
                variants: {
                    hidden: {
                        opacity: 1,
                        transition: {
                            delayChildren: .25,
                            staggerChildren: .025
                        }
                    },
                    visible: {
                        opacity: 1,
                        transition: {
                            delayChildren: .025,
                            staggerChildren: .1
                        }
                    }
                },
                initial: "hidden",
                animate: u,
                whileHover: "hover",
                children: n.map((function(e) {
                    var n = e.key
                      , t = e.name
                      , a = e.type;
                    return (0,
                    r.jsxs)(o.m.li, {
                        className: "".concat(d().item, " ").concat(n),
                        variants: f,
                        children: [(0,
                        r.jsx)(h, {
                            iconKey: n,
                            iconType: a,
                            color: c
                        }), (0,
                        r.jsx)("span", {
                            className: d().title,
                            children: t
                        })]
                    }, t)
                }
                ))
            })
        }
        function h(e) {
            var n = e.iconKey
              , t = e.iconType
              , a = "colored";
            switch (!1 === e.color && (a = ""),
            t) {
            case "far":
            case "fad":
            case "fat":
            case "fas":
                return (0,
                r.jsx)(c.Z, {
                    icon: [t, n]
                });
            case "devicon":
                return (0,
                r.jsx)("i", {
                    className: "devicon-".concat(n, "-plain ").concat(a)
                });
            default:
                return ""
            }
        }
    },
    854: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            default: function() {
                return J
            }
        });
        var r = t(5893)
          , a = t(7294);
        function i(e, n, t, r) {
            return new (t || (t = Promise))((function(a, i) {
                function o(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        i(e)
                    }
                }
                function c(e) {
                    var n;
                    e.done ? a(e.value) : (n = e.value,
                    n instanceof t ? n : new t((function(e) {
                        e(n)
                    }
                    ))).then(o, s)
                }
                c((r = r.apply(e, n || [])).next())
            }
            ))
        }
        function o(e, n) {
            var t, r, a, i, o = {
                label: 0,
                sent: function() {
                    if (1 & a[0])
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; o; )
                            try {
                                if (t = 1,
                                r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r),
                                0) : r.next) && !(a = a.call(r, i[1])).done)
                                    return a;
                                switch (r = 0,
                                a && (i = [2 & i[0], a.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    a = i;
                                    break;
                                case 4:
                                    return o.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    o.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = o.ops.pop(),
                                    o.trys.pop();
                                    continue;
                                default:
                                    if (!((a = (a = o.trys).length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                        o = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                        o.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && o.label < a[1]) {
                                        o.label = a[1],
                                        a = i;
                                        break
                                    }
                                    if (a && o.label < a[2]) {
                                        o.label = a[2],
                                        o.ops.push(i);
                                        break
                                    }
                                    a[2] && o.ops.pop(),
                                    o.trys.pop();
                                    continue
                                }
                                i = n.call(e, o)
                            } catch (e) {
                                i = [6, e],
                                r = 0
                            } finally {
                                t = a = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
        function s(e) {
            var n = "function" == typeof Symbol && Symbol.iterator
              , t = n && e[n]
              , r = 0;
            if (t)
                return t.call(e);
            if (e && "number" == typeof e.length)
                return {
                    next: function() {
                        return e && r >= e.length && (e = void 0),
                        {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
            throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }
        function c(e, n) {
            var t = "function" == typeof Symbol && e[Symbol.iterator];
            if (!t)
                return e;
            var r, a, i = t.call(e), o = [];
            try {
                for (; (void 0 === n || n-- > 0) && !(r = i.next()).done; )
                    o.push(r.value)
            } catch (e) {
                a = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (t = i.return) && t.call(i)
                } finally {
                    if (a)
                        throw a.error
                }
            }
            return o
        }
        function l(e, n, t) {
            if (t || 2 === arguments.length)
                for (var r, a = 0, i = n.length; a < i; a++)
                    !r && a in n || (r || (r = Array.prototype.slice.call(n, 0, a)),
                    r[a] = n[a]);
            return e.concat(r || Array.prototype.slice.call(n))
        }
        function d(e, n, t, r) {
            for (var a = [], d = 4; d < arguments.length; d++)
                a[d - 4] = arguments[d];
            return i(this, void 0, void 0, (function() {
                var i, d, p, m, y, f;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        o.trys.push([0, 12, 13, 14]),
                        i = s(a),
                        d = i.next(),
                        o.label = 1;
                    case 1:
                        if (d.done)
                            return [3, 11];
                        switch (typeof (p = d.value)) {
                        case "string":
                            return [3, 2];
                        case "number":
                            return [3, 4];
                        case "function":
                            return [3, 6]
                        }
                        return [3, 8];
                    case 2:
                        return [4, u(e, p, n, t, r)];
                    case 3:
                        return o.sent(),
                        [3, 10];
                    case 4:
                        return [4, h(p)];
                    case 5:
                        return o.sent(),
                        [3, 10];
                    case 6:
                        return [4, p.apply(void 0, l([e, n, t, r], c(a), !1))];
                    case 7:
                        return o.sent(),
                        [3, 10];
                    case 8:
                        return [4, p];
                    case 9:
                        o.sent(),
                        o.label = 10;
                    case 10:
                        return d = i.next(),
                        [3, 1];
                    case 11:
                        return [3, 14];
                    case 12:
                        return m = o.sent(),
                        y = {
                            error: m
                        },
                        [3, 14];
                    case 13:
                        try {
                            d && !d.done && (f = i.return) && f.call(i)
                        } finally {
                            if (y)
                                throw y.error
                        }
                        return [7];
                    case 14:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function u(e, n, t, r, a) {
            return i(this, void 0, void 0, (function() {
                var i;
                return o(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        return i = function(e, n) {
                            var t = c(n).slice(0);
                            return l(l([], c(e), !1), [NaN], !1).findIndex((function(e, n) {
                                return t[n] !== e
                            }
                            ))
                        }(e.textContent, n),
                        [4, p(e, l(l([], c(y(e.textContent, i)), !1), c(m(n, i)), !1), t, r, a)];
                    case 1:
                        return o.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        function h(e) {
            return i(this, void 0, void 0, (function() {
                return o(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, new Promise((function(n) {
                            return setTimeout(n, e)
                        }
                        ))];
                    case 1:
                        return n.sent(),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        function p(e, n, t, r, a) {
            return i(this, void 0, void 0, (function() {
                var i, c, l, d, u, p, m, y, f, v, g, x;
                return o(this, (function(b) {
                    switch (b.label) {
                    case 0:
                        if (i = n,
                        a) {
                            for (c = 0,
                            l = 1; l < n.length; l++)
                                if (d = n[l - 1],
                                (u = n[l]).length > d.length || "" === u) {
                                    c = l;
                                    break
                                }
                            i = n.slice(c, n.length)
                        }
                        b.label = 1;
                    case 1:
                        b.trys.push([1, 6, 7, 8]),
                        p = s(function(e) {
                            var n, t, r, a, i, c, l;
                            return o(this, (function(d) {
                                switch (d.label) {
                                case 0:
                                    n = function(e) {
                                        return o(this, (function(n) {
                                            switch (n.label) {
                                            case 0:
                                                return [4, {
                                                    op: function(n) {
                                                        return requestAnimationFrame((function() {
                                                            return n.textContent = e
                                                        }
                                                        ))
                                                    },
                                                    opCode: function(n) {
                                                        return "" === e || n.textContent.length > e.length ? "DELETE" : "WRITING"
                                                    }
                                                }];
                                            case 1:
                                                return n.sent(),
                                                [2]
                                            }
                                        }
                                        ))
                                    }
                                    ,
                                    d.label = 1;
                                case 1:
                                    d.trys.push([1, 6, 7, 8]),
                                    t = s(e),
                                    r = t.next(),
                                    d.label = 2;
                                case 2:
                                    return r.done ? [3, 5] : (a = r.value,
                                    [5, n(a)]);
                                case 3:
                                    d.sent(),
                                    d.label = 4;
                                case 4:
                                    return r = t.next(),
                                    [3, 2];
                                case 5:
                                    return [3, 8];
                                case 6:
                                    return i = d.sent(),
                                    c = {
                                        error: i
                                    },
                                    [3, 8];
                                case 7:
                                    try {
                                        r && !r.done && (l = t.return) && l.call(t)
                                    } finally {
                                        if (c)
                                            throw c.error
                                    }
                                    return [7];
                                case 8:
                                    return [2]
                                }
                            }
                            ))
                        }(i)),
                        m = p.next(),
                        b.label = 2;
                    case 2:
                        return m.done ? [3, 5] : (y = m.value,
                        f = "WRITING" === y.opCode(e) ? t + t * (Math.random() - .5) : r + r * (Math.random() - .5),
                        y.op(e),
                        [4, h(f)]);
                    case 3:
                        b.sent(),
                        b.label = 4;
                    case 4:
                        return m = p.next(),
                        [3, 2];
                    case 5:
                        return [3, 8];
                    case 6:
                        return v = b.sent(),
                        g = {
                            error: v
                        },
                        [3, 8];
                    case 7:
                        try {
                            m && !m.done && (x = p.return) && x.call(p)
                        } finally {
                            if (g)
                                throw g.error
                        }
                        return [7];
                    case 8:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
        function m(e, n, t) {
            var r = c(e).slice(0);
            return void 0 === n && (n = 0),
            void 0 === t && (t = r.length),
            o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return n < t ? [4, r.slice(0, ++n).join("")] : [3, 2];
                case 1:
                    return e.sent(),
                    [3, 0];
                case 2:
                    return [2]
                }
            }
            ))
        }
        function y(e, n, t) {
            var r = c(e).slice(0);
            return void 0 === n && (n = 0),
            void 0 === t && (t = r.length),
            o(this, (function(e) {
                switch (e.label) {
                case 0:
                    return t > n ? [4, r.slice(0, --t).join("")] : [3, 2];
                case 1:
                    return e.sent(),
                    [3, 0];
                case 2:
                    return [2]
                }
            }
            ))
        }
        !function(e, n) {
            void 0 === n && (n = {});
            var t = n.insertAt;
            if ("undefined" != typeof document) {
                var r = document.head || document.getElementsByTagName("head")[0]
                  , a = document.createElement("style");
                a.type = "text/css",
                "top" === t && r.firstChild ? r.insertBefore(a, r.firstChild) : r.appendChild(a),
                a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
            }
        }(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");
        var f = (0,
        a.memo)((function(e) {
            var n = e.sequence
              , t = e.repeat
              , r = e.className
              , i = e.speed
              , o = void 0 === i ? 40 : i
              , s = e.deletionSpeed
              , u = e.omitDeletionAnimation
              , h = void 0 !== u && u
              , p = e.wrapper
              , m = void 0 === p ? "div" : p
              , y = e.cursor
              , f = void 0 === y || y
              , v = e.style;
            o = Math.abs(o - 100),
            s = s ? Math.abs(s - 100) : o;
            var g, x, b, _, j, k, w = (0,
            a.useRef)(null), C = "index-module_type__E-SaG";
            g = r && r.length > 0 ? f ? "".concat(C, " ").concat(r) : r : f ? C : "",
            x = (0,
            a.useRef)((function() {
                return t === 1 / 0 ? d.apply(void 0, l(l([w.current, o, s, h], c(n), !1), [d], !1)) : "number" == typeof t ? d.apply(void 0, l([w.current, o, s, h], c(Array(1 + t).fill(n).flat()), !1)) : d.apply(void 0, l([w.current, o, s, h], c(n), !1)),
                function() {
                    w.current
                }
            }
            )),
            b = (0,
            a.useRef)(),
            _ = (0,
            a.useRef)(!1),
            j = (0,
            a.useRef)(!1),
            k = c((0,
            a.useState)(0), 2)[1],
            _.current && (j.current = !0),
            (0,
            a.useEffect)((function() {
                return _.current || (b.current = x.current(),
                _.current = !0),
                k((function(e) {
                    return e + 1
                }
                )),
                function() {
                    j.current && b.current && b.current()
                }
            }
            ), []);
            var N = m;
            return a.createElement(N, {
                style: v,
                className: g,
                ref: w
            })
        }
        ), (function(e, n) {
            return !0
        }
        ))
          , v = t(5322)
          , g = t(7738)
          , x = t(5992)
          , b = t(8285)
          , _ = t(5675)
          , j = t.n(_)
          , k = t(1179)
          , w = t.n(k);
        function C() {
            return (0,
            r.jsxs)("div", {
                className: "".concat(w().colorfulV1),
                children: [(0,
                r.jsx)("div", {
                    className: "".concat(w().barContainer, " noEvents"),
                    children: (0,
                    r.jsx)("div", {
                        className: "".concat(w().barGradient)
                    })
                }), (0,
                r.jsx)("div", {
                    className: "".concat(w().radialContainer, " noEvents"),
                    children: (0,
                    r.jsx)("div", {
                        className: "".concat(w().radialGradient)
                    })
                })]
            })
        }
        var N = t(504)
          , S = t.n(N)
          , T = JSON.parse('{"mf":{"BL":"const Andrew = ( name, passion ) =>","ut":"Hello, my name is","NS":60,"C":80,"YS":"h2","wH":1000,"cG":3000,"Kj":12000},"Fs":{"u":"Andrew Nelson.","l":"I design and build meaningful experiences."},"An":"I am a digital polymath \u2014 a constantly evolving digital creator driven by a passion for lifelong learning and the desire to leave a lasting impact.","ZY":{"T":{"TN":"Contact Me"},"B":{"TN":"LinkedIn"}}}');
        function I() {
            var e = (0,
            a.useState)("Initializing")
              , n = (e[0],
            e[1]);
            return (0,
            r.jsxs)(v.Z, {
                classProp: "".concat(w().section),
                children: [(0,
                r.jsxs)(g.Z, {
                    spacing: "VerticalXXXL",
                    children: [(0,
                    r.jsx)(f, {
                        className: "".concat(w().preHeader),
                        sequence: [T.mf.wH, function() {
                            n("typing")
                        }
                        , T.mf.BL, function() {
                            n("typed")
                        }
                        , T.mf.cG, function() {
                            n("deleting")
                        }
                        , T.mf.ut, function() {
                            n("deleted")
                        }
                        , T.mf.Kj],
                        speed: T.mf.NS,
                        deletionSpeed: T.mf.C,
                        wrapper: T.mf.YS,
                        repeat: 1 / 0
                    }), (0,
                    r.jsxs)("section", {
                        children: [(0,
                        r.jsx)("h1", {
                            className: w().header,
                            children: T.Fs.u
                        }), (0,
                        r.jsx)("h1", {
                            className: "".concat(w().header, " ").concat(w().primaryDim),
                            children: T.Fs.l
                        })]
                    }), (0,
                    r.jsx)("section", {
                        children: (0,
                        r.jsx)("p", {
                            className: "".concat(w().primaryBright, " subtitle ").concat((0,
                            x.Z)(["verticalLrg"])),
                            children: T.An
                        })
                    }), (0,
                    r.jsxs)("section", {
                        children: [(0,
                        r.jsx)("button", {
                            className: "button ".concat(S().primary),
                            onClick: function() {
                                return window.location = "mailto:hello@andrewnelson.net"
                            },
                            children: T.ZY.T.TN
                        }), (0,
                        r.jsx)("button", {
                            className: "button ".concat(S().secondary, " leaveSite"),
                            onClick: function() {
                                return window.open("https://www.linkedin.com/in/--andrewnelson/", "_blank")
                            },
                            children: T.ZY.B.TN
                        })]
                    })]
                }), (0,
                r.jsx)(C, {
                    theme: "bg-color-1"
                })]
            })
        }
        t(357);
        var E = t(1498);
        var P = t(3341)
          , B = t(5882)
          , Z = t.n(B);
        function G(e) {
            var n = e.title
              , t = e.copy
              , a = e.list
              , i = e.fullContainer
              , o = e.block
              , s = e.icon
              , c = e.invertedColor
              , l = e.headerIcon
              , d = e.containerClass;
            return (0,
            r.jsxs)("div", {
                className: "".concat(Z().badgeBlockContainer, " ").concat(d),
                children: [(0,
                r.jsx)("span", {
                    className: l,
                    children: (0,
                    r.jsx)(b.Z, {
                        icon: ["fat", s]
                    })
                }), (0,
                r.jsx)("h3", {
                    children: n
                }), (0,
                r.jsx)(A, {
                    copy: t
                }), (0,
                r.jsx)(P.Z, {
                    list: a,
                    block: o,
                    invertedColor: c,
                    fullContainer: i
                })]
            })
        }
        function A(e) {
            var n = e.copy;
            if (n)
                return (0,
                r.jsx)("p", {
                    children: n
                })
        }
        function L(e) {
            var n = e.containerClass
              , t = e.iconClass
              , a = e.icon
              , i = e.title
              , o = e.copy;
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsxs)("div", {
                    className: n,
                    children: [(0,
                    r.jsx)("span", {
                        className: t,
                        children: (0,
                        r.jsx)(b.Z, {
                            icon: a
                        })
                    }), (0,
                    r.jsx)("h3", {
                        children: i
                    }), (0,
                    r.jsx)("p", {
                        children: o
                    })]
                })
            })
        }
        var X = t(518)
          , O = t.n(X);
        function H() {
            return (0,
            r.jsx)(v.Z, {
                classProp: O().section,
                children: (0,
                r.jsxs)(g.Z, {
                    spacing: ["verticalXXXLrg"],
                    children: [(0,
                    r.jsx)(E.Z, {
                        title: "About Me",
                        preTitle: "Synopsis",
                        subTitle: "With a diverse skill set that includes UX design, UI design, full stack development, operational architecture, systems design, photography, and branding, I am a well-rounded digital professional."
                    }), (0,
                    r.jsxs)("section", {
                        className: O().content,
                        children: [(0,
                        r.jsx)("div", {
                            className: O().image,
                            children: (0,
                            r.jsx)("img", {
                                src: "/img/family-photo.jpg",
                                alt: "Nelson family photo"
                            })
                        }), (0,
                        r.jsxs)("div", {
                            className: O().copy,
                            children: [(0,
                            r.jsx)(L, {
                                title: "Softskills that pay the bills",
                                containerClass: O().container,
                                iconClass: O().icon,
                                icon: ["fat", "ear-listen"],
                                copy: "In addition to my design and technical expertise\u2014I also have strong leadership, time management, and multitasking skills\u2014honed through my experience as a business owner / managing partner, husband, and father of two. Outside of work, I enjoy staying active through sports such as hockey and snowboarding. I am confident in my ability to bring passion and value to any project."
                            }), (0,
                            r.jsx)(G, {
                                title: "Reasearch and planning",
                                containerClass: O().container,
                                list: D,
                                fullContainer: "fullContainer",
                                block: "methods",
                                icon: "fingerprint",
                                copy: "One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy\u2014I enjoy working with the many touch points of user experience.",
                                headerIcon: "".concat(O().icon)
                            })]
                        })]
                    })]
                })
            })
        }
        var D = [{
            key: "planet-moon",
            name: "User Research",
            type: "fad"
        }, {
            key: "qrcode",
            name: "Digital Strategy",
            type: "fad"
        }, {
            key: "window",
            name: "Design Systems",
            type: "fad"
        }, {
            key: "cubes",
            name: "Product Strategy",
            type: "far"
        }, {
            key: "layer-plus",
            name: "Brand Strategy",
            type: "fad"
        }, {
            key: "solar-system",
            name: "Operations",
            type: "fad"
        }];
        function M() {
            return (0,
            r.jsx)(v.Z, {
                classProp: "".concat(O().section, " borderBottom"),
                children: (0,
                r.jsxs)(g.Z, {
                    spacing: ["verticalXXXLrg"],
                    children: [(0,
                    r.jsx)(E.Z, {
                        title: "Technical",
                        preTitle: "Hardskills",
                        subTitle: "As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
                    }), (0,
                    r.jsxs)("section", {
                        className: "".concat(O().content, " ").concat(O().container),
                        children: [(0,
                        r.jsxs)("div", {
                            className: O().copy,
                            children: [(0,
                            r.jsx)(L, {
                                title: "Polymath foundations",
                                icon: ["fat", "chart-network"],
                                copy: "With a strong foundation in both design and development, I bring a unique perspective to every project and am constantly learning and evolving to stay up-to-date with the latest industry trends.",
                                iconClass: O().icon,
                                containerClass: O().container
                            }), (0,
                            r.jsx)(G, {
                                title: "Software I love to work with",
                                copy: "With over 20 years of experience creating digital assets, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time.",
                                list: R,
                                block: "software",
                                fullContainer: "fullContainer",
                                icon: "grid-2-plus",
                                containerClass: O().container,
                                headerIcon: O().icon
                            }), (0,
                            r.jsx)(G, {
                                title: "Technologies I love to build with",
                                copy: "I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me.",
                                list: F,
                                block: "tech",
                                fullContainer: "fullContainer",
                                icon: "laptop-code",
                                containerClass: O().container,
                                headerIcon: O().icon
                            })]
                        }), (0,
                        r.jsx)("div", {
                            className: "".concat(O().image, " ").concat(O().technicalSvg),
                            children: (0,
                            r.jsx)(j(), {
                                src: "/img/dataism-24.svg",
                                width: 477,
                                height: 1111,
                                alt: "Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
                            })
                        })]
                    })]
                })
            })
        }
        var R = [{
            key: "photoshop",
            name: "Photoshop",
            type: "devicon"
        }, {
            key: "illustrator",
            name: "Illustrator",
            type: "devicon"
        }, {
            key: "figma",
            name: "Figma",
            type: "devicon"
        }, {
            key: "vscode",
            name: "VSCode",
            type: "devicon"
        }, {
            key: "mailbox",
            name: "Postman",
            type: "fas"
        }, {
            key: "computer-mouse",
            name: "Click Up",
            type: "fas"
        }, {
            key: "list-music",
            name: "Ableton",
            type: "fas"
        }, {
            key: "aftereffects",
            name: "After Effects",
            type: "devicon"
        }, {
            key: "premierepro",
            name: "Premiere Pro",
            type: "devicon"
        }]
          , F = [{
            key: "javascript",
            name: "JavaScript",
            type: "devicon"
        }, {
            key: "nodejs",
            name: "NodeJS",
            type: "devicon"
        }, {
            key: "react",
            name: "React",
            type: "devicon"
        }, {
            key: "nextjs",
            name: "NextJS",
            type: "devicon"
        }, {
            key: "jquery",
            name: "jQuery",
            type: "devicon"
        }, {
            key: "php",
            name: "PHP",
            type: "devicon"
        }, {
            key: "wordpress",
            name: "WordPress",
            type: "devicon"
        }, {
            key: "woocommerce",
            name: "WooCommerce",
            type: "devicon"
        }, {
            key: "google",
            name: "GA4/GTM",
            type: "devicon"
        }, {
            key: "html5",
            name: "HTML5",
            type: "devicon"
        }, {
            key: "css3",
            name: "CSS3",
            type: "devicon"
        }, {
            key: "sass",
            name: "SASS",
            type: "devicon"
        }, {
            key: "git",
            name: "Git",
            type: "devicon"
        }, {
            key: "mysql",
            name: "MySQL",
            type: "devicon"
        }, {
            key: "mongodb",
            name: "MongoDB",
            type: "devicon"
        }];
        var W = t(7984)
          , Q = t(3653)
          , q = JSON.parse('{"dark":{"mesh__primaryDark":"#05070a","mesh__primaryLight":"#07130f","mesh__secondaryDark":"#080608","mesh__secondaryLight":"#090408"},"light":{},"unicorn":{}}');
        function J() {
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(Q.Z, {
                    colors: q
                }), (0,
                r.jsx)(I, {}), (0,
                r.jsx)(W.Z, {}), (0,
                r.jsx)(H, {}), (0,
                r.jsx)(M, {})]
            })
        }
    },
    5882: function(e) {
        e.exports = {
            badgeBlockContainer: "badges_badgeBlockContainer__kevdK",
            list: "badges_list__7K6_N",
            item: "badges_item__4z4QX",
            colored: "badges_colored__v7OXl",
            title: "badges_title__2xfcM",
            methods: "badges_methods__tBEpE",
            invertedColor: "badges_invertedColor__VgL9E",
            fullContainer: "badges_fullContainer__IxLYL"
        }
    },
    504: function(e) {
        e.exports = {
            primary: "button_primary__bzL3_",
            secondary: "button_secondary__v9Tcf"
        }
    },
    82: function(e) {
        e.exports = {
            title: "section_title_title__vFiXQ"
        }
    },
    518: function(e) {
        e.exports = {
            section: "about_section__Qoa01",
            content: "about_content__RzwJH",
            container: "about_container__6NFiN",
            copy: "about_copy__XEObN",
            icon: "about_icon__HUfPT",
            image: "about_image__hW1fB",
            technicalSvg: "about_technicalSvg__abk09"
        }
    },
    1179: function(e) {
        e.exports = {
            section: "hero_section__uxPFI",
            container: "hero_container__axwcG",
            preHeader: "hero_preHeader__d7At9",
            header: "hero_header__NG13s",
            primaryDim: "hero_primaryDim__R8r9T",
            primaryBright: "hero_primaryBright__zh5rT",
            tempBright: "hero_tempBright__aDCjE",
            gitBadges: "hero_gitBadges__lbD96",
            colorfulV1: "hero_colorfulV1__jEWzR",
            svg_background: "hero_svg_background__BQsrK",
            radialContainer: "hero_radialContainer__mQpvT",
            radialGradient: "hero_radialGradient__Zc_Iu",
            barContainer: "hero_barContainer__WgGNh",
            barGradient: "hero_barGradient__jKMAI"
        }
    }
}, function(e) {
    e.O(0, [675, 929, 221, 774, 888, 179], (function() {
        return n = 5728,
        e(e.s = n);
        var n
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
