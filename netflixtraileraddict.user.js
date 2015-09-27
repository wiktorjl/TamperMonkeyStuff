// ==UserScript==
// @name       NetflixTrailers
// @namespace  chicyberwarrior
// @version    0.1
// @description  Add links to trailer to Netflix pages
// @match      http://*.netflix.com/WiMovie*
// @copyright  2014+, chicyberwarrior
// ==/UserScript==

// Some code taken from RottenFlix, since I am so lazy and RottenFlix seems to be broken for me.
var a = $("displaypage-overview-details")
title = a.childNodes[0].childNodes[0].innerText;
title = title.replace(/\s+/g, '-').toLowerCase();
a.childNodes[0].childNodes[0].innerHTML += " <a href='http://www.traileraddict.com/search/"+title+"'>Trailers</a>";