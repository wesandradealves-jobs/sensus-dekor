<?php
session_start();

if (!empty($_POST['user_email']) && !empty($_POST['user_name'])) {
	
	if (filter_var($_POST['user_email'], FILTER_VALIDATE_EMAIL)) {
		$name = $_POST['user_name'];
		$address = $_POST['user_address'];
		$email = $_POST['user_email'];
		$subject = $_POST['user_subject'];
		$phone = $_POST['user_phone'];
		$hourly = $_POST['user_hourly'];
		$visit = $_POST['user_visit'];
		$_SESSION['name'] = $name;
		$email_servidor = "contato@sensusdekor.com.br";
		$to = "contato@sensusdekor.com.br";
		$subject = "Contato pelo Site";
		$date_send = date('d/m/Y');
		$hour_send = date('H:i');
		$template = "
			

		<html>
		<body style='background:#F2F2F2; max-width:600px; margin:auto; font-family:'Gill Sans', 'Gill Sans MT', 'Myriad Pro', 'DejaVu Sans Condensed', 'Helvetica', 'Arial', sans-serif; '>	
			<div class='container' style='background:#FFF; width:90%; margin:auto; padding:20px'>
		    <div class='logo'><img src='http://www.sensusdekor.com.br/contato.html/assets/imgs/logo.svg' style='width:150px'></div>
				<div class='header'>
					<h2 style='font-size:1.6em'><span style='color:#f19200'>$name</span> enviou a seguinte mensagem:</h2>
					<p><b>Data de envio:</b> $date_send <br> <b>Hora de envio:</b> $hour_send </p>
				</div>
				<div class='msg' style='background:#002239; color:#fff; border-radius:10px; padding:20px; margin-top:20px;'>
					$name."<br/>".$address."<br/>".$subject."<br/>".$phone."<br/>".$hourly."<br/>".$visit."<br/>"
				</div>		
			</div>
		</body>		
		</html>

		";		

		$headers = "From: $email_servidor\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion() . "\r\n";
	    $headers .= "MIME-Version: 1.0\r\n";
	    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

	    if (mail($to, $subject, nl2br($template), $headers)) {
	    	$_SESSION['msg'] = "Agendamento com sucesso! <br> Responderemos em breve.";
	    	$_SESSION['type'] = "success";
	    	header('Location:http://www.sensusdekor.com.br/contato.html');	    	
	    } else {
	    	$_SESSION['msg'] = "Ocorreu um erro. :( <br> Por algum motivo a mensagem não pode ser enviada. <br> Por favor tente novamente em alguns minutos, caso o erro persista contacte-nos por telefone. Sentimos muito pelo ocorrido. <br> :(";	
	    	$_SESSION['type'] = "mistakes";    	
	    	header('Location:http://www.sensusdekor.com.br/contato.html');
	    }   


	} else {
		$_SESSION['msg'] = "O e-mail informado não é válido. <br> Por gentileza, verifique o e-mail e tente novamente.";
		$_SESSION['type'] = "mistakes";		
		header('Location:http://www.sensusdekor.com.br/contato.html');
	}

} else {
	header('Location:http://www.sensusdekor.com.br/contato.html');
}


?>