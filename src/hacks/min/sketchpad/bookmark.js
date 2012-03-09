javascript:(function(){var a=document.createElement("div");a.innerHTML="<style type='text/css'>body,#AG{user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;-webkit-user-select:none;}canvas#canvas{zoom:1}#AG{border:0;background:transparent;cursor:default;height:110px;position:absolute;right:0;top:0;width:60px;z-index:5000}#AG div{border:0;background:transparent;cursor:pointer;position:absolute}.pan{height:42px;right:8px;top:6px;width:42px}.in,.out{height:20px;width:20px}.in{right:21px;top:65px}.out{right:21px;top:88px}</style><div id='AG'><img src='http://agerst.webs.com/p/sketchpad/controls.png'/><div class='pan'></div><div class='in'></div><div class='out'></div></div>";document.body.appendChild(a);z=1;document.getElementById("AG").addEventListener("click",function(e){
if (e.target&&e.target.nodeName=="DIV"){
var b=e.target.className;
if(b=="pan"){spaceKeyDown=!spaceKeyDown}
else if(b=="in"){document.getElementById("canvas").style.zoom=z+=0.1}
else if(b=="out"){document.getElementById("canvas").style.zoom=z-=0.1}
else return
}})})()