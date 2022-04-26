<?php
    header("Content-type: text/plain");
    $fileName = "data/" . $_POST["email"] . ".txt";
    $file = fopen($fileName, "w+");
    $getParameters = ["email", "name"];
    $printParameters = ["Email: ", "Name: "];
    for ($i = 0; $i <= count($getParameters) - 1; $i++) {
        $answer = $printParameters[$i] . $_POST[$getParameters[$i]] . PHP_EOL;
        fwrite($file, $answer);
    }
    $activity = $_POST["{%activity%}"];
    switch ($activity)
    {
        case "programmer":
            fwrite($file, "Activity: programmer" . PHP_EOL);
            break;
        case "designer":
            fwrite($file, "Activity: designer" . PHP_EOL);
            break;
        case "marketer":
            fwrite($file, "Activity: marketing specialist" . PHP_EOL);
            break;
    }
    fclose($file);