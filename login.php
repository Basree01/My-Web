<?php
    $userName = $_POST['name'];
    $userEmail = $_POST['Email'];
    $Password1 = $_POST['password1'];
    $Password2 = $_POST['password2'];
   
    echo "thank you for contacting us' 
    "your fullname is" . $userName . 
    "your email is" . $userEmail . 
    "your password1 is" . $Password1 . 
    "your password2 is" . $Password2;