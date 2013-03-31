var sad = document.getElementsByTagName('span'), happy = [], halt = false;

for (var i = 0; i < sad.length; i++) {
	if (sad[i] && hasClass(sad[i], 'UIActionLinks')) {
		var sad_likebutton = sad[i].getElementsByTagName('a');
		for (var j = 0; j < sad_likebutton.length; j++) {
			if (sad_likebutton[j] && hasClass(sad_likebutton[j], 'UFILikeLink') && sad_likebutton[j].style.display != 'none') happy.push(sad_likebutton[j]);
		}
	}
}

function hasClass(ele, cls) {
	return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

var happyDiv = document.createElement('div');
happyDiv.innerHTML = '<div id=\'happy\' style=\'cursor:pointer;background-color:#ddd;font-size:16px;text-align:center;position:fixed;top:40px;right:40px;width:200px;height:100px;border:4px solid black;z-index:9999;padding-top:15px;\' title="Close" onClick="this.parentNode.removeChild(this)"><span>0</span> of ' + happy.length + ' items liked.<div id=\'happyStatus\' style=\'margin-top:30px;\'><a id=\'happyButton\' href=\'#\' style=\'display:block;\' onclick=\'haltFn();\'>Stop it.</a></div></div>';
document.getElementsByTagName('body')[0].appendChild(happyDiv);

function happyFn(happy) {
	if (halt || !happy || !happy.length) {
		document.getElementById('happyStatus').innerHTML = 'Done!';
		return;
	}
	happy[0].click();
	happy[0].style.color = '#f00';
	var countSpan = document.querySelector('#happy span');
	countSpan.innerHTML = parseInt(countSpan.innerHTML) + 1;
	window.setTimeout(function () {
		happyFn(happy.splice(1));
	}, 800);
}

function haltFn() {
	halt = true;
	return false;
}

happyFn(happy);