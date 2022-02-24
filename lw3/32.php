<?php
  header("Content-Type:text/plain");
  $str = $_GET["identifier"];
  if (is_numeric($str[0]))
    echo "no";
  else
    echo "yes";