<?php

file_get_contents('php://input');
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
var_dump($data);

$name = $data['name'];
$email = $data['email'];

if (($name !== "") && ($email !== ""))
{
    $file = fopen('data/' . $email . '.txt', 'w');

    $text = $name . PHP_EOL . $email . PHP_EOL;
    $ok = fwrite($file, $text);

    if ($ok)
        echo 'Данные успешно записаны.';
    else
        echo 'Ошибка при записи в файл.';

    fclose($file);
    return true;
}
else
    return false;