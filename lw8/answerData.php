<?php

header("Content-Type: text/html");
if (!$_POST["email"])
    echo("Введите email!");
else {
    $fileLocation = "data/" . $_POST["email"] . ".txt";
    $file = fopen($fileLocation, "r+");
    if ($file)
        while (($buffer = fgets($file, 4096)) !== false)
            echo($buffer . "<br>");
    else
        echo("Такого файла не существует!");
    fclose($file);
}