$(function () {
  setTimeout('rect()'); //アニメーションを実行
});

function rect() {
  $("#rect").animate({
      top: "-500px" //要素を動かす位置
  }, 8000).animate({
      top: "500px" //要素を戻す位置
  }, 0)
  setTimeout("rect()", 8000);//アニメーションを繰り返す間隔
}