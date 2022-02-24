<?php
  header("Content-Type:text/plain");
  $pas = $_GET["password"];
  $reability = 0;
  $reabilty = (int) strlen($pas);
  echo 'password: ', $pas,"\n";
  echo 'reability: ', $reability;