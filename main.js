// ==UserScript==
// @name         B站视频选集自定义尺寸
// @namespace    http://tampermonkey.net/
// @version      2025-07-13
// @description  try to take over the world!
// @author       You
// @icon         https://www.bilibili.com/favicon.ico
// @match        https://www.bilibili.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    window.addEventListener('load', function() {
        const MAX_HEIGHT = '500px';
        const WIDTH = '450px';
        const url = window.location.href;

        let x = null;
        let y = null;
        if (url.includes('www.bilibili.com/video')) {
            // 获取视频页面的右侧选集列表
            x = document.querySelector('div.video-pod__body');
            y = document.querySelector('div.video-pod');
        } else if (url.includes('www.bilibili.com/bangumi')){
            // 获取番剧页面的右侧选集列表
            x = document.querySelector('div.imageList_wrap___f73Z');
            y = document.querySelector('div.eplist_ep_list_wrapper__Sy5N8');
        }
        console.log(x);
        if (x !== null) {
            // 设置选集列表的最大高度
            x.style.maxHeight = MAX_HEIGHT;
            console.log('max-height success');
        }
        console.log(y)
        if (y !== null) {
            // 设置选集列表的宽度
            y.style.width = WIDTH;
            console.log('width success');
        }
    });
})();