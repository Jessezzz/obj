<?php

/* Set oracle user login and password info */
$dbuser = "yuanxiz"; /* your deakin login */
$dbpass = "oracle19"; /* your oracle access password */
$db = "SSID";
$connect = oci_connect($dbuser, $dbpass, $db);

if (!$connect) {
echo "An error occurred connecting to the database";
exit;
}

/* build sql statement using form data */
$query = "SELECT * FROM Plants";

/* check the sql statement for errors and if errors report them */
$stmt = oci_parse($connect, $query);
//echo "SQL: $query<br>";
if(!$stmt) {
echo "An error occurred in parsing the sql string.\n";
exit;
}
oci_execute($stmt);?>
