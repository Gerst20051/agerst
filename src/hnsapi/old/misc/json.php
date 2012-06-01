<?php
header('Content-Type: text/javascript; charset=utf8');
$ref = (isset($_SERVER['HTTP_REFERER'])) ? $_SERVER['HTTP_REFERER'] : '';

if (isset($ref) && !empty($ref)) {
header('Access-Control-Allow-Origin: "*"');

}

$mysql = mysql_connect('localhost','root','');
mysql_select_db('members');

if (isset($_GET['id']) && !empty($_GET['id'])) $ID = $_GET['id'];
if (isset($_GET['fields']) && !empty($_GET['fields'])) $FIELDS = $_GET['fields'];
if (isset($_GET['callback']) && !empty($_GET['callback'])) $CALLBACK = $_GET['callback'];

$query = 'SELECT u.user_id';

if (isset($FIELDS) && $FIELDS != "user_id") {
	$search = array("user_id,","first_name","middle_name","last_name");
	$replace = array("","firstname","middlename","lastname");
	$fields = str_replace($search,$replace,$FIELDS);
	$query .= ','.$fields;
} else $query .= ', username, last_login, date_joined, firstname, middlename, lastname, email, gender, birth_month, birth_day, birth_year, hometown, current_city, community, hobbies, hits, logins, rank, xrank, xratings, voters, friends, website, status, mood, default_image, setting_language';

$query .= ' FROM login u JOIN info i ON u.user_id = i.user_id';

if (isset($ID)) {
	if (strpos($ID,",")) {
		$ids = explode(",",$ID);
		$query .= ' WHERE';
		foreach ($ids as $key => $id) {
			if ($key > 0) $query .= ' OR u.user_id = '.$id;
			else $query .= ' u.user_id = '.$id;
		}
	} elseif (strpos($ID,"-")) {
		$ids = explode("-",$ID);
		$query .= ' WHERE u.user_id > '.$ids[0].' AND u.user_id < '.$ids[1];
	} else $query .= ' WHERE u.user_id = '.$ID;
}

$res = mysql_query($query) or die(mysql_error());

while ($row = mysql_fetch_assoc($res)) {
	for ($i=0; $i<mysql_num_fields($res); $i++) {
		$info = mysql_fetch_field($res,$i);
		$type = $info->type;
		if ($type == 'real') $row[$info->name] = doubleval($row[$info->name]);
		else if ($type == 'int') $row[$info->name] = intval($row[$info->name]);
	}
	$rows[] = $row;
}

$json = '('.json_encode($rows).');';
print_r($CALLBACK.$json);
mysql_close($mysql);
?>