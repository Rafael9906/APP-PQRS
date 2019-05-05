<?php

$Timezone = new DateTimeZone('America/Bogota');
$date1 = new DateTime('',$Timezone);
$date=  $date1->format('Y-m-d H:i:s');
$fecha= (string) $date;
?>
