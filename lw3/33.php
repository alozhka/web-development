<?php
  header("Content-Type:text/plain");
  $pas = $_GET["password"];
  $reability = 0;
  $reabilty = 4 * strlen($pas);
  echo 'password: ', $pas,"\n";
  echo 'reability: ', $reability;