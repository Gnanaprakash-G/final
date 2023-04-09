<?php 
  $action=$_POST["action"];
  $email=$_POST["emailPHP"];
  $password=$_POST["passwordPHP"];
  $php_password=null;
  $php_email=null;
  $db_server="localhost";
  $db_user="root";
  $db_pass="";
  $db_name="registerdb";
  $conn="";
  $conn=mysqli_connect($db_server,$db_user,$db_pass,$db_name);
  try {
    if(!empty($email)&&!empty($password))
    {
      $sql = "SELECT * FROM users WHERE email='".$email."'";
      if($result=mysqli_query($conn,$sql))
      {
        while($row=mysqli_fetch_assoc($result))
        {
          $php_email=$row["email"];
          $php_password=$row["password"];
        }
      }
      if(empty($php_email))
      {
        echo 'No user found';
      }
      elseif(password_verify($password,$php_password))
      {
        echo 'success';
      }
      else{
        echo 'wrong password';   
        }
    }
    else{
      echo 'Please Enter Everything';
    }
  } catch (mysqli_sql_exception) {
    echo 'something went wrong!please try again';
  }
  mysqli_close($conn);
?>