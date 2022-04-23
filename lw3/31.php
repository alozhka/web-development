<?php
  header("Content-Type:text/plain");
  $str = trim($_GET[text]);
  $str = preg_replace('/\s+/', ' ', $str);
  echo $str;