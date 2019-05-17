<?php
  header('Content-Type: text/html; charset=UTF-8');

  include 'connection.php';
  include 'date.php';

  $json = file_get_contents('php://input');
  $obj = json_decode($json, true);

  $id = $obj["id"];
  $nombre = $obj["nombre"];
  $correo = $obj["correo"];
  $telefono = $obj["telefono"];
  $pqrs = $obj["pqrs"];
  $comentario = $obj["comentario"];
  $random = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, 6);
  $randomID = substr(str_shuffle("0123456789"), 0, 5);
  $md5Password = md5($random);

  $to= $correo;
  $subject= 'Registro exitoso';
  $message= 'Su contraseña es: '.$random. "\n". 'El número del radicado generado es: '.$randomID;
  $headers= "FROM: EL BOSQUE SUPERMARKET <supermarket.pqrs@gmail.com>\r\n";

  $selectId = mysqli_query($link,"SELECT * FROM users where identificacion='$id'");
  $selectMail = mysqli_query($link,"SELECT * FROM users where email='$correo'");
  $selectPhone = mysqli_query($link,"SELECT * FROM users where telefono='$telefono'");


  $insertUser = mysqli_query($link,"INSERT INTO users(nombre, email, password, identificacion, telefono, id_perfil) VALUES('$nombre','$correo','$md5Password', '$id','$telefono',2)");
  $insertRadicado = mysqli_query($link,"INSERT INTO radicado(fecha_radicado, id_usuario, email, telefono, numero_radicado, id_tipo_pqrs, comentarios, anexo, id_estado_radicado )
    VALUES('$fecha','$id','$correo','$telefono', '$randomID','$pqrs','$comentario',' ',2)");


  if($selectId->num_rows==0)
  {
      if($selectMail->num_rows==0)
      {
        if($selectPhone->num_rows==0)
        {
          if ($insertUser)
          {
            echo json_encode('Ingreso exitoso');

            mail($to,$subject,$message,$headers);

            $insertRadicado;

          }

          else
          {
                echo json_encode('Ingreso fallido');

          }
        }
        else
        {
            echo json_encode('EL número de teléfono ya está registrado');
        }


      }

      else
      {
            echo json_encode('El correo electrónico ya está registrado, inicie sesión e intente nuevamente');
      }
  }
  else
  {
            echo json_encode('Ya existe un usuario con esa identificación, inicie sesión e intente nuevamente');
  }

  mysqli_close($link);

 ?>
