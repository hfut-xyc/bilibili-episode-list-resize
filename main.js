// ==UserScript==
// @name         自定义设置B站的视频选集列表高度
// @namespace    http://tampermonkey.net/
// @version      2025-07-13
// @description  try to take over the world!
// @author       You
// @icon         https://www.bilibili.com/favicon.ico
// @match        https://www.bilibili.com/video/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    window.addEventListener('load', function() {
        let x = document.querySelector('div.video-pod__body');
        console.log(x);
        if (x !== null) {
            x.style.maxHeight = '500px';
        }
    });
})();