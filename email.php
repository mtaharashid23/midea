<?php
  $action = $_GET['action'];
  if($action == 'send'){
       sendemail();
  }
  if($action == 'price'){
   pricing();
  }
  if($action == 'request'){
   requesting();
  }
  if($action == 'watch'){
   watchvideo();
  }
  function sendemail(){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];
    $message = 'Name: '.$name."\r\n";
    $message .= 'Email: '.$email."\r\n";
    $message .= 'Message: '.$msg."\r\n";
    // Set your email address where you want to receive emails . 
    $to = 'logan@reviveratings.com';
    $subject = 'Contact Request From Website';
    $send_email = mail($to,$subject,$message);  
    echo ($send_email) ? 'success' : 'error';
  }
  function pricing(){
    $ycompany = $_POST['ycompany'];
    $fname = $_POST['fname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $locations = $_POST['locations'];
    $message = 'Company Name: '.$ycompany."\r\n";
    $message .= 'Name: '.$fname."\r\n";
    $message .= 'Email: '.$email."\r\n";
    $message .= 'Phone: '.$phone."\r\n";
    $message .= 'Location: '.$locations."\r\n";
    // Set your email address where you want to receive emails . 
    $to = 'logan@reviveratings.com';
    $subject = 'Newsletter Request From Website';
    $send_email = mail($to,$subject,$message);   
    echo ($send_email) ? 'success' : 'error';
  }
  function requesting(){
    $cName = $_POST['cName'];
    $bName = $_POST['bName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $date = $_POST['date'];
    $time = $_POST['time'];
    $message = 'Customer Name: '.$cName."\r\n";
    $message .= 'Business Name: '.$bName."\r\n";
    $message .= 'Email: '.$email."\r\n";
    $message .= 'Phone: '.$phone."\r\n";
    $message .= 'Date: '.$date."\r\n";
    $message .= 'Time: '.$time."\r\n";
    // Set your email address where you want to receive emails . 
    $to = 'logan@reviveratings.com';
    $subject = 'Demo Request From Website';
    $send_email = mail($to,$subject,$message);
    echo ($send_email) ? 'success' : 'error';
  }
  function watchvideo(){
    $email = $_POST['email'];
    $message = 'Email: '.$email."\r\n";
    // Set your email address where you want to receive emails . 
    $to = 'logan@reviveratings.com';
    $subject = 'Video Request From Website';
    $send_email = mail($to,$subject,$message);
    echo ($send_email) ? 'success' : 'error';
  }
?>