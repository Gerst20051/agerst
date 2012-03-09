javascript: (function () {
	function checkFrames(w) {
		try {
			var inputs = w.document.getElementsByTagName('input');
			for (var i = 0; i < inputs.length; i++) {
				if (inputs[i].type && inputs[i].type == 'checkbox' && inputs[i].checked === false && inputs[i].disabled != 1) {
					inputs[i].click();
				}
			}
		} catch (e) {}
		if (w.frames && w.frames.length > 0) {
			for (var i = 0; i < w.frames.length; i++) {
				var fr = w.frames[i];
				checkFrames(fr);
			}
		}
	}
	checkFrames(window);
})()