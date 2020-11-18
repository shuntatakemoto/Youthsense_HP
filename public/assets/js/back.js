var c1 = document.getElementById('area');
window.addEventListener('load', function(){
var h = window.innerHeight;
var style = c1.style;
style.Height = h + 'px';
}, false);
window.addEventListener('resize', function(){
var h = window.innerHeight;
var style = c1.style;
style.Height = h + 'px';
}, false);


var d1 = document.getElementById('circles');
window.addEventListener('load', function(){
var h = window.innerHeight;
var style = d1.style;
style.minHeight = h + 'px';
}, false);
window.addEventListener('resize', function(){
var h = window.innerHeight;
var style = d1.style;
style.minHeight = h + 'px';
}, false);

