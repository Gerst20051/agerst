var sad=document.getElementsByTagName('button'),happy=[],halt=false;for(var i=0;i<sad.length;i++){if(sad[i]&&hasClass(sad[i],'cmnt_like_link')){var sad_likebutton=sad[i].getElementsByTagName('span');for(var j=0;j<sad_likebutton.length;j++){if(sad_likebutton[j]&&hasClass(sad_likebutton[j],'default_message')&&sad_likebutton[j].style.display!='none')happy.push(sad[i])}}}function hasClass(a,b){return a.className.match(new RegExp('(\\s|^)'+b+'(\\s|$)'))}var happyDiv=document.createElement('div');happyDiv.innerHTML='<div id=\'happy\' style=\'cursor:pointer;background-color:#ddd;font-size:16px;text-align:center;position:fixed;top:40px;right:40px;width:200px;height:100px;border:4px solid black;z-index:9999;padding-top:15px;\' title="Close" onClick="this.parentNode.removeChild(this)"><span>0</span> of '+happy.length+' comments liked.<div id=\'happyStatus\' style=\'margin-top:30px;\'><a id=\'happyButton\' href=\'#\' style=\'display:block;\' onclick=\'haltFn();\'>Stop it.</a></div></div>';document.getElementsByTagName('body')[0].appendChild(happyDiv);function happyFn(a){if(halt||!a||!a.length){document.getElementById('happyStatus').innerHTML='Done!';return}a[0].click();a[0].style.color='#f00';var b=document.querySelector('#happy span');b.innerHTML=parseInt(b.innerHTML)+1;window.setTimeout(function(){happyFn(a.splice(1))},800)}function haltFn(){halt=true;return false}happyFn(happy);