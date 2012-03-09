javascript: var s = document.getElementById('HnSScript'), f = document.getElementsByTagName('iframe');
if (s) s.parentNode.removeChild(s);
s = document.createElement('script');
s.setAttribute('src', 'http://www.agerst.webs.com/hacks/all_checkboxes.js');
s.setAttribute('type', 'text/javascript');
s.setAttribute('id', 'HnSScript');
document.body.appendChild(s);
if (f) for (i = 0; i < f.length; i++) f[i].contentDocument.appendChild(s);

// OR
javascript: var f = document.getElementsByTagName('input');
for (var i = 0; i < f.length; i++) f[i].checked = true;

// OR (FACEBOOK)
javascript: elms = document.getElementsByName("checkableitems[]");
for (i = 0; i < elms.length; i++) {
	if (elms[i].type = "checkbox") elms[i].click()
};

// OR
javascript: (function () {
	function checkFrames(w) {
		try {
			var el = w.document.getElementsByTagName('input');
			for (var i = 0; i < el.length; i++) {
				if (el[i].type && el[i].type == 'checkbox') el[i].checked = !el[i].checked;
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
})();