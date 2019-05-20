<?php


 //error_reporting(0);

 include 'connection.php';
 //$id = $obj['list'];

  //$result = mysqli_query($link, "SELECT * FROM radicado WHERE id_usuario='$list'");
  $result = mysqli_query($link, "SELECT * FROM radicado");

 if(mysqli_num_rows($result))
 {
   while ($row[] = mysqli_fetch_assoc($result)) {
      $json = json_encode($row);
   }
 }

 else
 {
   $json = json_encode('No encontrado');

 }
echo $json;
// mysqli_close($link);

 ?>
