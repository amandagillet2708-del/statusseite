<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$url = $_GET["url"];
echo file_get_contents($url);
?>
