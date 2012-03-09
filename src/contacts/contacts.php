<?php
session_start();
header('Access-Control-Allow-Origin: *');

define('MYSQL_HOST','localhost');
define('MYSQL_USER','');
define('MYSQL_PASSWORD','');
define('MYSQL_DATABASE','hns');
if (!$con = mysql_connect(MYSQL_HOST,MYSQL_USER,MYSQL_PASSWORD)) throw new Exception('Error connecting to the server');
if (!mysql_select_db(MYSQL_DATABASE,$con)) throw new Exception('Error selecting database');

switch ($_SERVER['REQUEST_METHOD']) {
case 'GET':
$query = mysql_query('SELECT contacts FROM socialhns WHERE user_id = '.$_SESSION['user_id']);
$row = mysql_fetch_array($query);
echo $row[0];
break;
case 'POST':
if (isset($_POST['id']) && !empty($_POST['id']) && isset($_POST['contact']) && !empty($_POST['contact'])) {
$query = mysql_query('SELECT contacts FROM socialhns WHERE user_id = '.$_SESSION['user_id']);
$row = mysql_fetch_array($query);
$row = json_decode($row[0]);
$row[(int)$_POST['id']] = $_POST['contact'];
$contacts = json_encode($row);
mysql_query('UPDATE socialhns SET contacts = "'.$contacts.'" WHERE user_id = '.$_SESSION['user_id']);
}
break;
}
/*
$contacts = array(
array(
"name"=>"Andrew Gerst",
"number"=>"",
"email"=>""
),
array(
"name"=>"Andrew Gerst2",
"number"=>"",
"email"=>""
),
array(
"name"=>"Andrew Gerst3",
"number"=>"",
"email"=>""
)
);
*/
?>