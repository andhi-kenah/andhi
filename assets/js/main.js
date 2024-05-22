"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var h26x = document.querySelector("header");
    var sc3x = document.querySelectorAll("section");
    var nd3x = document.querySelectorAll("header nav ul li a .nav-indicator");
    var nv3x = document.querySelectorAll("header nav ul li a .nav-title");
    var m4al = document.querySelector('a[title="Mail"]');
    if (document.body.clientWidth < 903) {
        onscroll = function () {
            scrollY <= 100
                ? (h26x.style.backgroundColor = "transparent")
                : (h26x.style.backgroundColor = "#282a32ee");
        };
    }
    var obCbk = function (entries) {
        entries.forEach(function (entry, i) {
            var id = entry.target.getAttribute("id");
            var nv = document.querySelector("header nav ul li a[href=\"#".concat(id, "\"] .nav-title"));
            var nd = document.querySelector("header nav ul li a[href=\"#".concat(id, "\"] .nav-indicator"));
            if (entry.isIntersecting) {
                nv3x.forEach(function (n) { return n.classList.remove("nav-active"); });
                nd3x.forEach(function (d) { return d.classList.remove("indicator-active"); });
                if (nv3x[i]) {
                    nv === null || nv === void 0 ? void 0 : nv.classList.add("nav-active");
                    nd === null || nd === void 0 ? void 0 : nd.classList.add("indicator-active");
                }
            }
        });
    };
    var obOp = {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
    };
    var ob = new IntersectionObserver(obCbk, obOp);
    sc3x.forEach(function (section) {
        ob.observe(section);
    });
    m4al.addEventListener('click', function (e) {
        var _a;
        var cp = (_a = m4al.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.slice(7);
        if (cp) {
            navigator.clipboard.writeText(cp).then(function () {
                console.log("Copied to clipboard: ".concat(cp));
            })["catch"](function (err) {
                console.error('Failed to copy text: ', err);
            });
        }
    });
});
