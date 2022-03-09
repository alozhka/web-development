<?php

header("Content-Type:text/plain");
$pas = $_GET["password"];
$reability = 0;
$len = strlen($pas);
//unique symbols +
$cntUnique = strlen(count_chars($pas, 3));;
//digits +
$cntDigits = strlen(preg_replace("/[^0-9]/ui", '', $pas));
//upper&lowerCase +
$cntUpCase = strlen(preg_replace("/[^A-ZА-ЯЁ]/", '', $pas));
$cntLowCase = strlen(preg_replace("/[A-ZА-ЯЁ]/", '', $pas));
$cntRecurent = $len - $cntUnique;
//reability
//$reability = 4*$cntUnique + 4*$cntDigits + 2*($len - $cntUpCase) + 2*($len - $cntLowCase) - 2*$cntRecurent;
if ($len <> 0) //есть хоть что-то
{
    $reability += 4*$len;
}
if ($cntDigits <> 0) //есть цифры
{
    $reability += 4*$cntDigits;
}
if ($cntUpCase <> 0) //верхний рег
{
    $reability += 2*$cntRecurent;
}
if ($cntLowCase <> 0) //нижний рег
{
    $reability += 2*$cntRecurent;
}
if ($cntDigits == $len) //только цифры
{
    $reability -= $cntDigits;
}
if (($cntUpCase + $cntLowCase) == $len) //только буквы
{
    $reability -= $cntDigits;
}
if ($cntRecurent <> 0) //есть повторяющиеся
{
    $reability += $cntRecurent;
}
echo "password: ", $pas,"\n";
echo "reability: ", $reability;