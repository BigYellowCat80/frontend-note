<?php
    header('Content-type:text/html;charset="utf-8"');

    $username=$_POST["username"];
    $pwd=$_POST["pwd"];

    echo "Your username is {$username}, your password is {$pwd}"

?>