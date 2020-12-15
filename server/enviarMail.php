<?php
	header('Access-Control-Allow-Origin: *');
	header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

	$postdata = file_get_contents("php://input");
	$data     = json_decode($postdata);
	$name= $data->name;
	$email= $data->email;
	$message= $data->message;

    $asunto= "Consulta en Lyseis";
    $header= $_GET["email"] . "\r\n";

    $emailpara="info@lyseis.com.ar";

    $v_mensaje = "Nuevo contacto de Lyseis" . "\n" . "Nombre=" . $name ."\n". "Email=" . $email ."\n". "Mensaje="  . $message;

    $mail= @mail($emailpara,$asunto,$v_mensaje,$header);
?>