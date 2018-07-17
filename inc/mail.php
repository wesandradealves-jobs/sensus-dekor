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
		$template = '
			<style type="text/css">
				@media screen {
					body,
					html {
						font-weight: normal;
						font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
					}
					h1,
					h2,
					h3,
					h4,
					h5,
					h6 {
						color: #1F0F3D;
						text-transform: uppercase;
						font-size: 1.2rem;
						font-weight: 800;
					}
					h2>span {
						display: block;
					}
					h3,
					h2>span:last-child {
						font-weight: normal
					}
					body,
					html {
						box-sizing: border-box;
						min-width: 320px;
					}
					body button,
					body input,
					body textarea,
					body select,
					html button,
					html input,
					html textarea,
					html select {
						border: 0;
						margin: 0 0;
						padding: 0 0;
					}
					body button:focus,
					body input:focus,
					body textarea:focus,
					body select:focus,
					html button:focus,
					html input:focus,
					html textarea:focus,
					html select:focus {
						outline: 0;
					}
					body *,
					html * {
						box-sizing: inherit;
						line-height: initial;
						position: relative;
						-webkit-box-sizing: inherit;
						-moz-box-sizing: inherit;
					}
					body *::after,
					body *::before,
					html *::after,
					html *::before {
						box-sizing: inherit;
					}
					a {
						color: inherit;
						text-decoration: none;
					}
					p b,
					p strong {
						font-weight: normal;
					}
					h1 {
						margin: 0 0;
						padding: 0 0;
					}
					h2 {
						margin: 0 0;
						padding: 0 0;
					}
					h3 {
						margin: 0 0;
						padding: 0 0;
					}
					h4 {
						margin: 0 0;
						padding: 0 0;
					}
					h5 {
						margin: 0 0;
						padding: 0 0;
					}
					html,
					body,
					div,
					article,
					aside,
					details,
					footer,
					header,
					section,
					applet,
					iframe,
					embed,
					object,
					h1,
					h2,
					h3,
					h4,
					h5,
					h6,
					hgroup blockquote,
					p,
					pre,
					span,
					a,
					abbr,
					acronym,
					address,
					big,
					cite,
					code,
					del,
					dfn,
					em,
					ins,
					kbd,
					q,
					ruby,
					s,
					samp,
					small,
					strike,
					strong,
					sub,
					sup,
					tt,
					var,
					b,
					u,
					i,
					center,
					dl,
					dt,
					dd,
					ol,
					ul,
					li,
					label,
					legend,
					fieldset,
					form,
					table,
					caption,
					tbody,
					tfoot,
					thead,
					tr,
					th,
					td,
					img,
					figure,
					figcaption,
					menu,
					nav,
					output,
					summary,
					time,
					mark,
					canvas,
					audio,
					video {
						margin: 0;
						padding: 0;
						border: 0;
						vertical-align: baseline;
					}
					article,
					aside,
					details,
					figcaption,
					figure,
					footer,
					header,
					hgroup,
					menu,
					nav,
					section {
						display: block;
					}
					blockquote,
					q {
						quotes: none;
						margin: 0;
						padding: 0;
					}
					blockquote:before,
					blockquote:after,
					q:before,
					q:after {
						content: "";
						content: none;
					}
					table {
						border-collapse: collapse;
						border-spacing: 0;
					}
					ol,
					ul {
						list-style: none;
					}
					tbody {
						display: block;
						padding: 30px;
					}
				}
			</style>		
		';

		if($form=='contato'){
			$subject = "Contato pelo Site";
			$template .= '
				<div style="border: 3px #1F0F3D solid; margin: 60px auto; max-width: 280px; width: 100%; text-align: center;">
					<div style="margin: -35px auto 0; display: block;">
						<svg style="background-color: white; padding: 0 35px; display: block; margin: 0 auto; enable-background:new 0 0 120.6 180.3;" height="60" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120.6 180.3" xml:space="preserve">
							<g>
								<path style="fill: #1F0F3D;" class="st0" d="M83.5,36.9c10.2,0,18.5-8.3,18.5-18.5C102,8.3,93.7,0,83.5,0C73.4,0,65.1,8.3,65.1,18.5
								C65.1,28.6,73.4,36.9,83.5,36.9z M83.5,9c5.2,0,9.4,4.2,9.4,9.4s-4.2,9.4-9.4,9.4s-9.4-4.2-9.4-9.4S78.3,9,83.5,9z" />
								<path class="st0" d="M37.1,36.9c10.2,0,18.5-8.3,18.5-18.5C55.5,8.3,47.2,0,37.1,0h0C26.9,0,18.6,8.3,18.6,18.5
								C18.6,28.6,26.9,36.9,37.1,36.9z M37,9L37,9c5.2,0,9.4,4.2,9.4,9.4c0,5.2-4.2,9.4-9.4,9.4c-5.2,0-9.4-4.2-9.4-9.4
								C27.6,13.3,31.8,9,37,9z" />
								<path class="st0" d="M0,41.1v97.5c0,30.4,33.2,40.5,50.7,41.7l19,0l0.1,0c17.5-1.1,50.7-11.3,50.7-41.7V41.1H0z M111.6,138.6
								c0,29-39.1,32.5-42.1,32.7H51.2C48.1,171.1,9,167.5,9,138.6v-10.7l0.1,0v-6.3l14,9.4c0,0-5.8,27,27.9,26.3v-23.9L9,108.2v-58h102.6
								V138.6z" />
								<path class="st0" d="M69.6,157.2c30.7-1.2,27.9-18.6,27.9-18.6V66.4H70v48.5l-17.3-10.7V66.6H23.1v33l46.5,27.6V157.2z" />
							</g>
						</svg>              
					</div>
					<div>
						<h1 style="color: #1F0F3D; font-size: 1rem; margin: 20px auto; padding: 0 15px;">Contato pelo Site</h1>
						<ul style="text-align: left; padding: 0 18px; text-transform: uppercase;">
							<li style="color: #1F0F3D; font-size: .9rem; "><strong>Nome</strong></li>
							<li style="font-size: .8rem; margin-bottom: 20px;">'.($name) ? $name : ''.'</li>
							<li style="color: #1F0F3D; font-size: .9rem; "><strong>E-mail:</strong></li>
							<li style="font-size: .8rem; margin-bottom: 20px;">'.($email) ? $email : ''.'</li>
							<li style="color: #1F0F3D; font-size: .9rem; "><strong>Mensagem</strong></li>
							<li style="font-size: .8rem; margin-bottom: 20px; text-transform: initial;">'.($msg) ? $msg : ''.'</li>                
						</ul>
					</div>
				</div>
			';
		} else {
			$user_address = $_POST['user_address'];
			$user_phone = $_POST['user_phone'];
			$user_hourly = $_POST['user_hourly'];
			$user_visit_date = $_POST['user_visit_date'];
			$user_visit_datepicker = $_POST['user_visit_datepicker'];			
			$subject = "Agendamento pelo Site";
			$template .= '
				<div style="border: 3px #1F0F3D solid; margin: 60px auto; max-width: 280px; width: 100%; text-align: center;">
					<div style="margin: -35px auto 0; display: block;">
						<svg style="background-color: white; padding: 0 35px; display: block; margin: 0 auto; enable-background:new 0 0 120.6 180.3;" height="60" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120.6 180.3" xml:space="preserve">
							<g>
								<path style="fill: #1F0F3D;" class="st0" d="M83.5,36.9c10.2,0,18.5-8.3,18.5-18.5C102,8.3,93.7,0,83.5,0C73.4,0,65.1,8.3,65.1,18.5
								C65.1,28.6,73.4,36.9,83.5,36.9z M83.5,9c5.2,0,9.4,4.2,9.4,9.4s-4.2,9.4-9.4,9.4s-9.4-4.2-9.4-9.4S78.3,9,83.5,9z" />
								<path class="st0" d="M37.1,36.9c10.2,0,18.5-8.3,18.5-18.5C55.5,8.3,47.2,0,37.1,0h0C26.9,0,18.6,8.3,18.6,18.5
								C18.6,28.6,26.9,36.9,37.1,36.9z M37,9L37,9c5.2,0,9.4,4.2,9.4,9.4c0,5.2-4.2,9.4-9.4,9.4c-5.2,0-9.4-4.2-9.4-9.4
								C27.6,13.3,31.8,9,37,9z" />
								<path class="st0" d="M0,41.1v97.5c0,30.4,33.2,40.5,50.7,41.7l19,0l0.1,0c17.5-1.1,50.7-11.3,50.7-41.7V41.1H0z M111.6,138.6
								c0,29-39.1,32.5-42.1,32.7H51.2C48.1,171.1,9,167.5,9,138.6v-10.7l0.1,0v-6.3l14,9.4c0,0-5.8,27,27.9,26.3v-23.9L9,108.2v-58h102.6
								V138.6z" />
								<path class="st0" d="M69.6,157.2c30.7-1.2,27.9-18.6,27.9-18.6V66.4H70v48.5l-17.3-10.7V66.6H23.1v33l46.5,27.6V157.2z" />
							</g>
						</svg>              
					</div>
					<div>
						<h1 style="color: #1F0F3D; font-size: 1rem; margin: 20px auto; padding: 0 15px;">Cadastro de Agendamento</h1>
						<ul style="text-align: left; padding: 0 18px; text-transform: uppercase;">
							<li style="color: #1F0F3D; font-size: .9rem; "><strong>Nome</strong></li>
							<li style="font-size: .8rem; margin-bottom: 20px;">'.($name) ? $name : ''.'</li>
							<li style="color: #1F0F3D; font-size: .9rem; "><strong>E-mail:</strong></li>
							<li style="font-size: .8rem; margin-bottom: 20px;">'.($email) ? $email : ''.'</li>
							<li style="color: #1F0F3D; font-size: .9rem; "><strong>Tel.</strong></li>
							<li style="font-size: .8rem; margin-bottom: 20px;">'.($user_phone) ? $user_phone : ''.'</li>
							<li style="color: #1F0F3D; font-size: .9rem; "><strong>Endereço</strong></li>
							<li style="font-size: .8rem; margin-bottom: 20px;">'.($user_address) ? $user_address : ''.'</li>
							<li style="margin-bottom: 20px;">
								<div style="border-radius: 20px; color: white; display: block; text-align: center; margin: 0 auto; padding: 25px; background-color: #1F0F3D;">
									<div style="display: inline-block; vertical-align: middle; padding-right: 15px; margin-right: -4px; width: 50%;">
										<h2 style="font-size: 1.5rem;">'.($user_hourly) ? $user_hourly : ''.'</h2>
									</div>
									<div style="display: inline-block; vertical-align: middle; padding-left: 15px; margin-right: -4px; width: 50%;">
										<h2 style="font-size: 1.3rem; color: #e6a21a">'.(($user_visit_date) ? $user_visit_date : $user_visit_datepicker).'</h2>
									</div>                        
								</div>
							</li>
							<li style="color: #1F0F3D; font-size: .9rem; "><strong>Mensagem</strong></li>
							<li style="font-size: .8rem; margin-bottom: 20px; text-transform: initial;">'.($msg) ? $msg : ''.'</li>                
						</ul>
					</div>
				</div>
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