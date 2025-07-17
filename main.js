// ==UserScript==
// @name         B站视频选集自定义高度
// @namespace    http://tampermonkey.net/
// @version      2025-07-13
// @description  try to take over the world!
// @author       You
// @icon         https://www.bilibili.com/favicon.ico
// @match        https://www.bilibili.com/video/*
// @match        https://www.bilibili.com/bangumi/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    window.addEventListener('load', function() {
        // 设置视频页面-选集列表的最大高度
        let x = document.querySelector('div.video-pod__body');
        console.log(x);
        if (x !== null) {
            x.style.maxHeight = '500px';
        }

        // 设置番剧页面-选集列表的最大高度
        let y = document.querySelector('div.imageList_wrap___f73Z');
        console.log(y);
        if (y !== null) {
            y.style.maxHeight = '500px';
        }
    });
})();