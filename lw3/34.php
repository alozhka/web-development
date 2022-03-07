<?php
    //input all keys
    $email = $_GET["email"];
    $first_name = $_GET["first_name"];
    $last_name = $_GET["last_name"];
    $age = $_GET["age"];
    //open file in directory /data/
    $tmp = "/data/";
    if (!file_exists($tmp.$name))
    {
        $fEmail = fopen($tmp.$name, "a+");
    }
    else
    {
        $fEmail = fopen($tmp.$name, "w+");
    }
    