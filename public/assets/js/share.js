// スマホ用シェアボタン

//クリックで動作するボタン
var shareButton = document.getElementById('share');
	//ボタンクリックで実行
	shareButton.addEventListener('click', share);
 
	function share() {
    //web share apiをサポートしているか否か
		if (navigator.share) {
			navigator.share({
				title: document.querySelector('title').textContent,
				text: document.querySelector('meta[name="description"]').getAttribute('content'),
				url: location.href
			});
		}
		//サポートしていない場合の処理
		else {
			alert('このブラウザはシェア機能に対応していません。');
		}
	}