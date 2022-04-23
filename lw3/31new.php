<?php
  header("Content-Type:text/plain");
  $str = trim($_GET[text]);
  while( strpos($str,"  ")!==false)
	$str = str_replace("  ", " ", $str);
  echo $str;