// ページを読み込む前までの経過時間
var time = new Date().getTime();

if (window.matchMedia('(max-width: 767px)').matches) {
  
//全ての読み込みが完了したら実行
window.onload = function() {
// ページを読み込んだあとまでの経過時間
  var now = new Date().getTime();
  if (now-time<3500){
    setTimeout('stopload()',3500-(now-time));
  } else{
    stopload();
  }
}
}else{
  stopload();
}
//10秒たったら強制的にロード画面を非表示させてコンテンツを表示
setTimeout('stopload()',10000);

function stopload(){
  // ページを読み込んだらローディングを消す
  const spinner = document.getElementById('loading1');
  spinner.classList.add('loaded');
  // ページを読み込んだらコンテンツを表示させる
  const content1 = document.getElementById('hide');
  content1.classList.remove('hidden');
}



