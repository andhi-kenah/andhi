"use strict";
var h26x = (document.getElementById("header"));
var sp4x = (document.getElementById('scroll-down'));
if (document.body.clientWidth < 903) {
    onscroll = function () {
        if (scrollY <= 100) {
            h26x.style.backgroundColor = 'transparent';
        }
        else {
            h26x.style.backgroundColor = '#282a32ee';
        }
    };
}
