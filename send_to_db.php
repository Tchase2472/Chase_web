<?php

   $servername = 'localhost';
   $username = 'todd';
   $password = 'Oocae9a';
   $dbname = 'Contact_Info';

   $conn = new mysqli($servername, $username, $password, $dbname);

   if($conn->connect_error){

      die("Connection failed: " . $conn->connect_error);
   }

   $sqlquery = "INSERT INTO visitors VALUES('John', 'Test', 'billy@yahoo.com', 2136356963, 'my message')";

      if($conn->query($sql) === TRUE){

            echo "Record inserted successfully";

      } else {

            echo "Error: " .$sql . "<br>" . $conn->error;

      }

      header('Location: dummy/thankYou.html');

         