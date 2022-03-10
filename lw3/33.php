<?php

header("Content-Type:text/plain");
$pas = $_GET["password"];
if (!preg_match_all("/[a-zA-Z0-9]/", $pas))
{
    echo "password is incrorrect";
}
else
{
    $len = strlen($pas);
    //unique symbols +
    $cntUnique = strlen(count_chars($pas, 3));
    //digits +
    $cntDigits = strlen(preg_replace("/[^0-9]/ui", '', $pas));
    //upper&lowerCase +
    $cntUpCase = strlen(preg_replace("/[^A-Z]/", '', $pas));
    $cntLowCase = strlen(preg_replace("/[^a-z]/", '', $pas));
    // количество повторяющихся
    $cntRecurent = 2 * ($len - $cntUnique);
    // количество букв
    $cntLetters = $cntUpCase + $cntLowCase;
    //reability
    if ($len <> 0) //есть хоть что-то (any symbol)
    {
        $reability += 4*$len;
    }
    if ($cntDigits <> 0) //есть цифры
    {
        $reability += 4 * $cntDigits;
    }
    if ($cntUpCase <> 0) //верхний рег
    {
        $reability += 2*($len - $cntUpCase);
    }
    if ($cntLowCase <> 0) //нижний рег
    {
        $reability += 2*($len - $cntLowCase);
    }
    if ($cntDigits === $len) //только цифры
    {
        $reability -= $len; //
    }
    if ($cntLetters === $len) //только буквы
    {
        $reability -= $len;
    }
    if ($cntRecurent <> 0) //есть повторяющиеся
    {
        $reability -= $cntRecurent;
    }
    echo "password: ", $pas,"\n";
    echo "reability: ", $reability;
}