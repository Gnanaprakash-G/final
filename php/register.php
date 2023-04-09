<?php 
  $action=$_POST["action"];
  $email=$_POST["emailPHP"];
  $username=$_POST["usernamePHP"];
  $password=$_POST["passwordPHP"];
  $db_server="localhost";
  $db_user="root";
  $db_pass="";
  $db_name="registerdb";
  $conn="";
  $conn=mysqli_connect($db_server,$db_user,$db_pass,$db_name);
  if (!empty($email)&& !empty($username)&&!empty($password)) {
    try
    {
        $hash=password_hash($password,PASSWORD_DEFAULT);
        $sql="INSERT INTO users(email,password,username)
        VALUES('$email','$hash','$username')";
        $result=mysqli_query($conn,$sql);
        echo "successfully registered.You can Login now";
    } catch (mysqli_sql_exception) {
      echo "user name already exists";
    }
  }
  else{
    echo '*Please enter all details';
  }
  mysqli_close($conn);
?>