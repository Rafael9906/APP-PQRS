<?php include 'connection.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$id = $obj['id'];

	$password = $obj['password'];
	$md5Pass = md5($password);

	if($obj['id']!=""){

<<<<<<< HEAD
<<<<<<< HEAD
	$result= mysqli_query($link,"SELECT * FROM users where identificacion='$id' and password='$md5Pass'");
=======
	$result= mysqli_query($link,"SELECT * FROM usuario where id='$id' and contraseña='$md5Pass'");
>>>>>>> a288021fd799efc94bd0da83dc9da789fc83f35a
=======
	$result= mysqli_query($link,"SELECT * FROM usuario where id='$id' and contraseña='$md5Pass'");
>>>>>>> parent of 6d1e01d... 1.9

		if($result->num_rows==0){
			echo json_encode('Wrong Details');
		}
		else{
		echo json_encode('ok');

		}
	}
	else{
	  echo json_encode('try again');
	}

?>
