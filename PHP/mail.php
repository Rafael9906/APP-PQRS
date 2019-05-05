<?php

 // include 'insert.php';

 $to= 'rafaortiz0206@outlook.com';
 $subject= 'TEST EMAIL';
 $message= '<p>SIRVE<P>';
 $headers= "FROM: EL BOSQUE SUPERMARKET <supermarket.pqrs@gmail.com>\r\n";

mail($to,$subject,$message,$headers);





?>
