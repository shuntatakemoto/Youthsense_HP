// px単位をrem単位に変換する 
// var h = window.innerHeight;
const convertRemToPx = function (h) {
  var fontSize = getComputedStyle(document.documentElement).fontSize;
  return h / parseFloat(fontSize);
}

// areaの高さを指定
var c1 = document.getElementById('area');
window.addEventListener('load', function(){
var h = window.innerHeight;
var H = convertRemToPx(h);
var style = c1.style;
style.minHeight = H-3.4  + 'rem';
}, false);
window.addEventListener('resize', function(){
var h = window.innerHeight;
var H = convertRemToPx(h);
var style = c1.style;
style.minHeight = H-3.4 + 'rem';
}, false);

// circlesの高さを指定
var d1 = document.getElementById('circles');
window.addEventListener('load', function(){
var h = window.innerHeight;
var H = convertRemToPx(h);
var style = d1.style;
style.minHeight = H-3.4 + 'rem';
}, false);
window.addEventListener('resize', function(){
var h = window.innerHeight;
var H = convertRemToPx(h);
var style = d1.style;
style.minHeight = H-3.4 + 'rem';
}, false);

