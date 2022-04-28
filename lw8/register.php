<?php
    header("Content-type: text/plain");
    if (isset($_POST["email"]))
    {
        $fileName = "data/" . $_POST["email"] . ".txt";
        $file = fopen($fileName, "w+");
        $answer = "Email:" . $_POST["email"] . PHP_EOL;
        fwrite($file, $answer);
        $answer = "Name:" . $_POST["name"] . PHP_EOL;
        fwrite($file, $answer);
        $activity = $_POST["{%activity%}"];
        switch ($activity) {
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
    }
    else
    {
        echo "Такого файла не существует!";
    }