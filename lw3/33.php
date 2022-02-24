<?php
  header("Content-Type:text/plain");
  $pas = $_GET["password"];
  $reability = 0;
  $len = strlen($pas);
  //unique symbols +
  $cntUnique = strlen(count_chars($pas, 3));;
  //digits +
  $cntDigits = strlen(preg_replace('/[^0-9]/ui', '', $pas));
  //upper&lowerCase +
  $cntUpCase = strlen(preg_replace('/[^A-ZА-ЯЁ]/', '', $pas));
  $cntLowCase = strlen(preg_replace('/[A-ZА-ЯЁ]/', '', $pas));
  //reability
  $reability = 4*$cntUnique + 4*$cntDigits + 2*($len - $cntUpCase) 
  + 2*($len - $cntLowCase);
  echo 'password: ', $pas,"\n";
  echo 'reability: ', $reabilty," ";