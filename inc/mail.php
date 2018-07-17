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

		if($form=='contato'){
			$subject = "Contato pelo Site";
			$template = '<div style="border: 3px #1F0F3D solid; margin: 60px auto; max-width: 280px; width: 100%; text-align: center;"><div style="margin: -35px auto 0; display: block; background-color: white; padding: 25px 35px 0; margin-left: auto; margin-right: auto; width: 60px;"><img src="https://www.sensusdekor.com.br/assets/imgs/logo-fundo.png"/> </div><div><h1 style="color: #1F0F3D; font-size: 1.3rem; text-transform: uppercase; margin: 20px auto; padding: 0 15px;">Contato pelo Site</h1><ul style="list-style: none; line-height: 1.3rem; text-align: left; padding: 0 18px; text-transform: uppercase;"><li style="margin-left: 0 !important; color: #1F0F3D; font-size: .9rem; "><strong>Nome</strong></li><li style="margin-left: 0 !important; font-size: .8rem; margin-bottom: 20px;">'.(($name) ? $name : '').'</li><li style="margin-left: 0 !important; color: #1F0F3D; font-size: .9rem; "><strong>E-mail:</strong></li><li style="margin-left: 0 !important; font-size: .8rem; margin-bottom: 20px;">'.(($email) ? $email : '').'</li><li style="margin-left: 0 !important; color: #1F0F3D; font-size: .9rem;"><strong>Mensagem</strong></li><li style="margin-left: 0 !important; font-size: .8rem; margin-bottom: 20px; text-transform: initial;">'.(($msg) ? $msg : '').'</li></ul></div></div>';
		} else {
			$user_address = $_POST['user_address'];
			$user_phone = $_POST['user_phone'];
			$user_hourly = $_POST['user_hourly'];
			$user_visit_date = $_POST['user_visit_date'];
			$user_visit_datepicker = $_POST['user_visit_datepicker'];			
			$subject = "Agendamento pelo Site";
			$template = '<div style="border: 3px #1F0F3D solid; margin: 60px auto; max-width: 280px; width: 100%; text-align: center;"><div style="margin: -35px auto 0; display: block; background-color: white; padding: 25px 35px 0; margin-left: auto; margin-right: auto; width: 60px;"><img src="https://www.sensusdekor.com.br/assets/imgs/logo-fundo.png"/> </div><div><h1 style="color: #1F0F3D; font-size: 1.3rem; text-transform: uppercase; margin: 20px auto; padding: 0 15px;">Cadastro de Agendamento</h1><ul style="list-style: none; line-height: 1.3rem; text-align: left; padding: 0 18px; text-transform: uppercase;"><li style="margin-left: 0 !important; color: #1F0F3D; font-size: .9rem; "><strong>Nome</strong></li><li style="margin-left: 0 !important; font-size: .8rem; margin-bottom: 20px;">'.(($name) ? $name : '').'</li><li style="margin-left: 0 !important; color: #1F0F3D; font-size: .9rem; "><strong>E-mail:</strong></li><li style="margin-left: 0 !important; font-size: .8rem; margin-bottom: 20px;">'.(($email) ? $email : '').'</li><li style="margin-left: 0 !important; color: #1F0F3D; font-size: .9rem;"><strong>Tel.</strong></li><li style="margin-left: 0 !important; font-size: .8rem; margin-bottom: 20px;">'.(($user_phone) ? $user_phone : '').'</li><li style="margin-left: 0 !important; color: #1F0F3D; font-size: .9rem; "><strong>Endereço</strong></li><li style="margin-left: 0 !important; font-size: .8rem; margin-bottom: 20px;">'.(($user_address) ? $user_address : '').'</li><li style="margin-left: 0 !important; margin-bottom: 20px;"><div style="border-radius: 20px; color: white; display: block; text-align: center; margin: 0 auto; padding: 25px; background-color: #1F0F3D;"><div style="border-sizing: border-box; display: inline-block; vertical-align: middle; padding-right: 15px; margin-right: -4px; width: calc(50% - 15px);"><h2 style="font-size: 1.5rem;">'.(($user_hourly) ? $user_hourly : '').'</h2></div><div style="border-sizing: border-box; display: inline-block; vertical-align: middle; padding-left: 15px; margin-right: -4px; width: calc(50% - 15px);"><h2 style="font-size: .9rem; color: #e6a21a">'.(($user_visit_date) ? $user_visit_date : $user_visit_datepicker).'</h2></div></div></li><li style="margin-left: 0 !important; color: #1F0F3D; font-size: .9rem; "><strong>Mensagem</strong></li><li style="margin-left: 0 !important; font-size: .8rem; margin-bottom: 20px; text-transform: initial;">'.(($msg) ? $msg : '').'</li></ul></div></div>';
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

	header('Location:https://www.sensusdekor.com.br/'.(($form=='contato') ? 'contato' : 'agende').'.html?msg='.$_SESSION['msg']);	
?>