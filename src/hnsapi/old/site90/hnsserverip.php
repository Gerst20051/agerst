<?php
header('Access-Control-Allow-Origin: *');
require 'config.php';
$api_paste_name = urlencode('Server IP Address');
$api_results_limit = '50';

$ch = curl_init('http://pastebin.com/api/api_login.php');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, 'api_dev_key='.$api_dev_key.'&api_user_name='.$api_user_name.'&api_user_password='.$api_user_password.'');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 1);
curl_setopt($ch, CURLOPT_NOBODY, 0);
$api_user_key = curl_exec($ch);

$ch = curl_init('http://pastebin.com/api/api_post.php');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, 'api_option=list&api_user_key='.$api_user_key.'&api_dev_key='.$api_dev_key.'&api_results_limit='.$api_results_limit.'');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_VERBOSE, 1);
curl_setopt($ch, CURLOPT_NOBODY, 0);
$xml = curl_exec($ch);
echo $xml;

preg_match('/<paste_key(.*)?>(.*)?<\/paste_key>/', $xml, $paste_key);
preg_match('/<paste_title(.*)?>(.*)?<\/paste_title>/', $xml, $paste_title);

foreach ($paste_title as $key=>$value) {
	if ($value == "Server IP Address") {
		echo 'http://pastebin.com/raw.php?i='.$paste_key[$key];
	}
}
?>