javascript: (function () {
	var a = document.createElement('link');
	a.type = 'text/css';
	a.rel = "stylesheet";
	a.href = "http://agerst.webs.com/hacks/flip.css";
	var b = document.getElementsByTagName('link')[0];
	b.parentNode.insertBefore(a, b)
})()