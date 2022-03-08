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
  $cntReccurent = $len - $cntUnique;
  //reability
  $reability = 4*$cntUnique + 4*$cntDigits + 2*($len - $cntUpCase) 
  + 2*($len - $cntLowCase) - 2*$cntRecurrent;
  if ($cntDigits == 0)
  {
      $reability -= $cntDigits;
  }
  if ($cntUpCase == 0 & $cntLowCase == 0)
  {
      $reability -= $cntDigits;
  }
  echo "password: ", $pas,"\n";
  echo "reability: ", $reabilty,"\n";