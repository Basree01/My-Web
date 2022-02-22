<?php
    $userName = $_POST['name'];
    $userEmail = $_POST['Email'];
    $Subject = $_POST['subject'];
    $PhoneNumber = $_POST['phone number'];
    $Message = $_POST['message'];

    echo "thank you for contacting us' 
    "your fullname is" . $userName . 
    "your email is" . $userEmail . 
    "your subject is" . $Subject . 
    "your phone number is" . $PhoneNumber .
    "your message is" . $Message;