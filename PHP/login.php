<?php include 'connection.php';

	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$id = $obj['id'];

	$password = $obj['password'];
	$md5Pass = md5($password);

	if($obj['id']!=""){

	$result= mysqli_query($link,"SELECT * FROM usuario where id='$id' and contraseña='$md5Pass'");

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
