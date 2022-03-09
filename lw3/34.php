<?php

//input all keys
$email = $_GET["email"];
$firstName = $_GET["first_name"];
$lastName = $_GET["last_name"];
$age = $_GET["age"];

//open file in directory /data/
$tmp = "/data/";
if (!file_exists("$tmp.$email.txt"))
{
    $fEmail = fopen($tmp.$email, "a+");
}
else
{
    $fEmail = fopen($tmp.$email, "w+");
    fwrite($fEmail, "First name: ");
    fwrite($fEmail, $firstName);
}
echo "\n";
