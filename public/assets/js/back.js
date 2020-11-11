$(function () {
  setTimeout('rect()'); //アニメーションを実行
});

function rect() {
  $("#rect").animate({
      top: "-3000px" //要素を動かす位置
  }, 30000).animate({
      top: "3000px" //要素を戻す位置
  }, 0)
  setTimeout("rect()", 30000);//アニメーションを繰り返す間隔
}
