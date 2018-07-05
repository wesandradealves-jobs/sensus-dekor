<?php
 
$emailsender = "contato@" . $_SERVER[HTTP_HOST];
 
/* Verifica qual �o sistema operacional do servidor para ajustar o cabe�alho de forma correta.  */
if(PATH_SEPARATOR == ";") $quebra_linha = "\r\n"; //Se for Windows
else $quebra_linha = "\n"; //Se "não for Windows"
 
// Passando os dados obtidos pelo formul�rio para as vari�veis abaixo
$nomeremetente     = $_POST['user_nome'];
$emailremetente    = $_POST['user_email'];
$emaildestinatario = $emailsender;
$comcopia          = 'wesandradealves@gmail.com';
$assunto           = 'Contato Site';
$mensagem          = $_POST['user_msg'];
 
 
/* Montando a mensagem a ser enviada no corpo do e-mail. */
$mensagemHTML = '<P>Esse email &eacute; um teste enviado no formato HTML via PHP mail();!</P>
<P>Aqui est� a mensagem postada por voc�; formatada em HTML:</P>
<p><b><i>'.$mensagem.'</i></b></p>
<hr>';
 
 
/* Montando o cabeçalho da mensagem */
$headers = "MIME-Version: 1.1" .$quebra_linha;
$headers .= "Content-type: text/html; charset=iso-8859-1" .$quebra_linha;
// Perceba que a linha acima cont�m "text/html", sem essa linha, a mensagem n�o chegar� formatada.
$headers .= "From: " . $emailsender.$quebra_linha;
$headers .= "Cc: " . $comcopia . $quebra_linha;
$headers .= "Reply-To: " . $emailremetente . $quebra_linha;
// Note que o e-mail do remetente ser� usado no campo Reply-To (Responder Para)
 
/* Enviando a mensagem */

//� obrigat�rio o uso do par�metro -r (concatena��o do "From na linha de envio"), aqui na Locaweb:

if(!mail($emaildestinatario, $assunto, $mensagemHTML, $headers ,"-r".$emailsender)){ // Se for Postfix
    $headers .= "Return-Path: " . $emailsender . $quebra_linha; // Se "n�o for Postfix"
    mail($emaildestinatario, $assunto, $mensagemHTML, $headers );
}
 
/* Mostrando na tela as informa��es enviadas por e-mail */
print "Mensagem <b>$assunto</b> enviada com sucesso!<br><br>
De: $emailsender<br>
Para: $emaildestinatario<br>
Com c�pia: $comcopia<br>
<p><a href='".$_SERVER["HTTP_REFERER"]."'>Voltar</a></p>"
?>