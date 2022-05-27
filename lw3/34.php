<?php
    header("Content-Type: text/html");
    $email = $_GET["email"];
    $fields_to_get = ["first_name", "last_name", "email", "age"];
    $fields_to_post = ["Имя", "Фамилия", "Email", "Возраст"];
    if(empty($email))
        exit("Введите email!");
    $filename = "data/" . $email . ".txt";
    if (file_exists($filename))
        $fp = fopen($filename, "r+");
    else
        $fp = fopen($filename, "w+");
    rewind($fp);
    for ($i = 0; $i < count($fields_to_get); $i++) {
        if(!empty($_GET[$fields_to_get[$i]]))
            fwrite($fp, $fields_to_post[$i] . ": " . $_GET[$fields_to_get[$i]] . PHP_EOL);
        else
            fgets($fp, 4096);
    }
    fclose($fp);
    echo "Файл создан!" . PHP_EOL;