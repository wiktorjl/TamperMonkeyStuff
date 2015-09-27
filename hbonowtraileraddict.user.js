// ==UserScript==
// @name       HboNowTrailers
// @namespace  chicyberwarrior
// @version    0.1
// @description  Add links to trailer to HBO NOW pages
// @match      https://www.hbonow.com/feature/PROD*
// @copyright  2015+, chicyberwarrior
// ==/UserScript==

setTimeout(function(){
  var title = document.getElementsByClassName('hbo-light')[0].innerHTML;
  title = title.replace(/\s+/g, '-').toLowerCase();
  document.getElementsByClassName('list-inline')[0].innerHTML += " <li><a href='http://www.traileraddict.com/search/"+title+"' class='preview video-link hbo-medium-sm'>Trailers</a></li>";
}, 2000);
