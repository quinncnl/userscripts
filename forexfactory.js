// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://www.forexfactory.com/strongwillow
// @grant        none
// ==/UserScript==

$("footer").hide();
$(".row").eq(0).hide();

setInterval(function () {
    $(".sync > a").click();
    console.debug("sync");
    
}, 60000);
