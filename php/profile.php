<?php
  $action=$_POST["action"];
  // $client = new MongoDB\Client("mongodb://localhost:27017");
  // $userdb=$client ->$userdb;
  // $result=$userdb->createCollection('user');
  // var_dump($result);
  if($action=='store')
  {
    echo $action;
    $email=$_POST["emailPHP"];
    $name=$_POST["namePHP"];
    $date=$_POST["datePHP"];
    $age=$_POST["agePHP"];
    $address=$_POST["addressPHP"];
    $contact=$_POST["contactPHP"];
  }
  elseif($action=='check')
  {
    echo $action;
  }
?>