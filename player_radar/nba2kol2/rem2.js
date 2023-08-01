/* rem2.js */
!function (e) {
    function t(a) {
        if (i[a]) return i[a].exports;
        var n = i[a] = {
            exports: {},
            id: a,
            loaded: !1
        };
        return e[a].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
    }
    var i = {};
    return t.m = e, t.c = i, t.p = "", t(0)
}([function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = window;
        t["default"] = i.flex = function (normal, e, t) {
            var a = e || 100, n = t || 1, r = i.document, o = navigator.userAgent, d = o.match(
                /Android[\S\s]+AppleWebkit\/(\d{3})/i), l = o.match(/U3\/((\d+|\.){5,})/i), c = l && parseInt(l[1].split(
                ".").join(""), 10) >= 80, p = navigator.appVersion.match(/(iphone|ipad|ipod)/gi), s = i.devicePixelRatio ||
                1;
            p || d && d[1] > 534 || c || (s = 1);
            var u = normal ? 1 : 1 / s,
                m = r.querySelector('meta[name="viewport"]');
            m || (m = r.createElement("meta"), m.setAttribute("name", "viewport"), r.head.appendChild(m)), m.setAttribute(
                "content", "width=device-width,user-scalable=no,initial-scale=" + u + ",maximum-scale=" + u +
                ",minimum-scale=" + u), r.documentElement.style.fontSize = normal ? "50px" : a / 2 * s * n + "px"
        }, e.exports = t["default"]
}]);
flex(false, 100, 1);

// rem2.js 地址：https://segmentfault.com/a/1190000007350680
// 特点：
// 能细致显示真实的1px的宽度。
// 在此方案下，rem可以让元素在不同大小屏幕上看起来大小一样。老的rem.js方案是屏幕越大，元素越大。
// 在相当数量的布局情境中（比如底部导航元素平分屏幕宽，大尺寸元素），必须使用百分比或者flex才能完美布局。
// rem2.js脚本会检测设备的dpr，根据dpr动态的设置html的font-size;










