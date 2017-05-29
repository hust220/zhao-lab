<?php
//$data = json_decode(file_get_contents('php://input'));
header('Access-Control-Allow-Origin: *');

$id = $_GET["id"];

if (isset($_GET["download"])) {
  header('Content-Type: application/octet-stream');  
  header(sprintf('Content-Disposition: attachment; filename="%s.txt"', $id));  
  header('Content-Transfer-Encoding: binary');
} else {
  header('Content-Type: text/plain');
}

echo file_get_contents("/home/zyj/web/tasks/$id/result");

