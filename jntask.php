<?php
header('Access-Control-Allow-Origin: *');

// $data = file_get_contents('php://input');

$TASKS = '/home/zyj/web/tasks/';
$SCRIPTS = '/home/zyj/web/scripts/';
$id = rand();
mkdir($TASKS.$id);

function save_file($path, $v) {
  $f = fopen($path, "w");
  fwrite($f, $v);
  fclose($f);
}

function path($dir, $id, $k) {
  return sprintf("%s/%d/%s", $dir, $id, $k);
}

// save pars
foreach ($_POST as $k => $v) {
  save_file(path($TASKS, $id, $k), $v);
}

foreach ($_FILES as $k => $v) {
  move_uploaded_file($v['tmp_name'], path($TASKS, $id, $k));
}

echo $id;

//system("bash $SCRIPTS".$_POST['script'].".sh $id >/dev/null 2>&1");
system("bash $SCRIPTS".$_POST['script'].".sh $id >$TASKS/log.txt 2>&1");

