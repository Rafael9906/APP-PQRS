<?php

 session_start();
 //error_reporting(0);


    include 'connection.php';

  

 $result = mysqli_query($link, "SELECT * FROM radicado");

 if(mysqli_num_rows($result))
 {
   while ($row[] = mysqli_fetch_assoc($result)) {
      $json = json_encode($row);
   }
 }

 else
 {
   echo 'No encontrado';

 }
echo $json;
 mysqli_close($link);

 ?>
