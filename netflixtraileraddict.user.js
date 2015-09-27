// ==UserScript==
// @name       NetflixTrailers
// @namespace  chicyberwarrior
// @version    0.2
// @description  Add links to trailer to Netflix pages
// @match      http://*.netflix.com/title/*
// @copyright  2014+, chicyberwarrior
// ==/UserScript==

setTimeout(function(){
  var title = document.getElementsByClassName('title has-jawbone-nav-transition')[0].innerHTML;
  title = title.replace(/\s+/g, '-').toLowerCase();
  document.getElementsByClassName('duration')[0].innerHTML += " <a href='http://www.traileraddict.com/search/"+title+"'>Trailers</a>";
}, 1000);
