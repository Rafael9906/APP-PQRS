<?php

	session_start();

    include 'connection.php';


	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$id = $obj['id'];

	$password = $obj['password'];
	$md5Pass = md5($password);

	if($obj['id']!=""){

	$result= mysqli_query($link,"SELECT * FROM users where identificacion='$id' and password='$md5Pass'");

		if($result->num_rows==0){
			echo json_encode('Wrong Details');
		}
		else{
		
		$_SESSION['user'] = $id;
		echo json_encode("Identificación: ". $_SESSION['user']);

		}
	}
	else{
	  echo json_encode('try again');
	}

?>
