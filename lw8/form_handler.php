<?php
    $form = fopen("form.html", "r");
    $sizeForm = fgets($form, 4096);
    if ($form)
        while ($sizeForm !== false)
            echo $sizeForm . PHP_EOL;
    else
        echo "[!] Файл не найден";

    fclose($form);