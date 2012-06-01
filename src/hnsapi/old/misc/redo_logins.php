<?php
session_start();

include ("db.member.inc.php");

$query = 'SELECT user_id FROM homenetspaces';
$result = mysql_query($query, $db) or die(mysql_error($db));
while ($row = mysql_fetch_array($result)) {
$query2 = 'SELECT logins FROM homenetspaces WHERE user_id = ' . $row['user_id'];
$result2 = mysql_query($query2, $db) or die(mysql_error($db));
$row2 = mysql_fetch_assoc($result2);
extract($row2);
mysql_free_result($result2);

$query3 = 'UPDATE login SET
logins = "' . mysql_real_escape_string($logins, $db) . '"
WHERE
user_id = ' . $row['user_id'];
mysql_query($query3, $db) or die(mysql_error());
}
?>