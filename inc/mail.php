<?php
	session_start();

	if (filter_var($_POST['user_email'], FILTER_VALIDATE_EMAIL)) {
		$form = $_POST['form'];
		$name = $_POST['user_nome'];
		$email = $_POST['user_email'];
		$msg = $_POST['user_msg'];
		$email_servidor = "contato@sensusdekor.com.br";
		//$to = $email_servidor;
		$to = 'wesandradealves@gmail.com';
		$date_send = date('d/m/Y');
		$hour_send = date('H:i');

		if($form=='agende'){
			$user_address = $_POST['user_address'];
			$user_phone = $_POST['user_phone'];
			$user_hourly = $_POST['user_hourly'];
			$user_visit_date = $_POST['user_visit_date'];
			$user_visit_datepicker = $_POST['user_visit_datepicker'];
			$subject = "Contato pelo Site";
			$template = '
				Teste de Contato
			';
		} else {
			$subject = "Agendamento pelo Site";
			$template = '
				Teste de Agendamento
			';
		}

		$headers = "From: $email_servidor\r\n" .
			"Reply-To: $email\r\n" .
			"X-Mailer: PHP/" . phpversion() . "\r\n";
		$headers .= "MIME-Version: 1.0\r\n";
		$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

		if (mail($to, $subject, nl2br($template), $headers)) {
			$_SESSION['msg'] = true;
		} else {
			$_SESSION['msg'] = false;	
		}   
	} else {
		$_SESSION['msg'] = false;
	}

	header('Location:https://www.sensusdekor.com.br/contato.html?msg='.$_SESSION['msg']);	
?>