// ==UserScript==
// @name         B站视频选集自定义高度、去除广告
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

        // 删除视频选集上方广告
        let ad1 = document.querySelector('div.video-card-ad-small');
        console.log(ad1);
        if (ad1 !== null) {
           ad1.remove();
        }

        // 删除评论区上方活动
        // let act = document.querySelector('div.activity-m-v1');
        // console.log(act);
        // if (act !== null) {
        //    act.remove();
        // }

        // // 删除评论区上方广告
        // let ad2 = document.querySelector('div.ad-report.ad-floor-exp.left-banner');
        // console.log(ad2);
        // if (ad2 !== null) {
        //    ad2.remove();
        // }

        // // 删除页面最右下角广告
        // let ad3 = document.querySelector('div.ad-report.ad-floor-exp.right-bottom-banner');
        // console.log(ad3);
        // if (ad3 !== null) {
        //    ad3.remove();
        // }
    });
})();