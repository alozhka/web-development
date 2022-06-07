<?php

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
var_dump($data);
//формирую ответ
http_response_code(200);
$json = array(
    'status' => 200,
    'message' => 'success',
    'loaded-content' => $data,
);

$name = $data['name'];
$email = $data['email'];

if ( ($name === '') || ($email === '') )
{
    //меняю ответ если пустые поля + в идеале проверка на валидность
    http_response_code(500);
    $json = array(
        'status' => 500,
        'message' => 'Empty fields in request',
        'loaded-content' => $data,
    );
} else {

    $fName = 'data/' . $email . '.txt';
    $fp = fopen($fName, 'w');

    $text = $name . PHP_EOL . $email . PHP_EOL;
    $ok = fwrite($fp, $text);

    if (!$ok) {
        //меняю ответ если пустые поля + в идеале проверка на валидность
        http_response_code(500);
        $json = array(
            'status' => 500,
            'message' => 'File write error',
            'loaded-content' => $data,
        );
    }

    fclose($fp);
}
http_response_code(500);

echo json_encode($json, JSON_UNESCAPED_UNICODE);