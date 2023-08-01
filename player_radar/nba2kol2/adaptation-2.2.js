(function (doc, win) {
    var sWide, sketchWide;
    sketchWide = 0;
    sWide = sketchWide == 0 ? 750 : sketchWide;
    var docEl = doc.documentElement,
        resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) {
                return
            }
            if (clientWidth < 320) {
                docEl.style.fontSize = 100 * 320 / sWide + "px"
            } else {
                if (clientWidth > 540) {
                    docEl.style.fontSize = 100 * 540 / sWide + "px"
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / sWide) + "px"
                }
            }
        };
    if (!doc.addEventListener) {
        return
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener("DOMContentLoaded", recalc, false)
})(document, window);