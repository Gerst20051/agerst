var f = document.getElementsByTagName('input');
for (var i = 0; i < f.length; i++) f[i].checked = true;

// OR (FACEBOOK)

javascript:elms=document.getElementsByName("checkableitems[]");for(i=0;i<elms.length;i++){if(elms[i].type="checkbox")elms[i].click()};