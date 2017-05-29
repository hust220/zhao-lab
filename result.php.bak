<?php
//$data = json_decode(file_get_contents('php://input'));
$id = $_GET["id"];

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
if ($socket === false) {
   echo "socket_create() failed: reason: " . socket_strerror(socket_last_error()) . "\n";
}

$result = socket_connect($socket, '10.149.121.24', 8888);
if ($result === false) {
   echo "socket_connect() failed.\nReason: ($result) " . socket_strerror(socket_last_error($socket)) . "\n";
}

//$in = 'S{"script":"'.$data["script"].'"}';
$in = 'R'.$id;

socket_write($socket, $in, strlen($in));
$out = socket_read($socket, 2048); 
echo $out;
socket_close($socket);
?>

