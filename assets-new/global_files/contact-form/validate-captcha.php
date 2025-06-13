<?php

if (isset($_POST['submit']) && $_POST['g-recaptcha-response'] != "") {
    include "config.php";
    $secret = '6Lc7g0gfAAAAAC7s6Wc28Y1snx-m2TO912FBMHA0';
    $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret . '&response=' . $_POST['g-recaptcha-response']);
    $responseData = json_decode($verifyResponse);
    $firstName = $conn->real_escape_string($_POST['first_name']);
    $lastName = $conn->real_escape_string($_POST['last_name']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone = $conn->real_escape_string($_POST['phone']);
    $shipping = $conn->real_escape_string($_POST['shipping_address']);
    $state = $conn->real_escape_string($_POST['state']);
    $zipCode = $conn->real_escape_string($_POST['zip_code']);
    $orderNumber = $conn->real_escape_string($_POST['order_number']);
    $items = $conn->real_escape_string($_POST['items']);
    $qtyItems = $conn->real_escape_string($_POST['qty_items']);
    $sql="INSERT INTO contact_form (first_name, last_name, email, phone, shipping_address, state, zip_code, order_number, items, qty_items) VALUES ('".$firstName."','".$lastName."', '".$email."', '".$phone."', '".$shipping."', '".$state."', '".$zipCode."', '".$orderNumber."', '".$items."', '".$qtyItems."')";
    if(!$result = $conn->query($sql)){
    die('There was an error running the query [' . $conn->error . ']');
    }
    else
    {
        $msg = "Submitted Successfully";
        header("Location: thank-you.php?msg=".$msg);
    }
    }
    else
    {
        $msg = "Please fill the needed fields and the captcha";
        header("Location: thank-you.php?msg=".$msg);
    
    }
   

?>