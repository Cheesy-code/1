<?php
// if (isset($_POST['message'])) {
//     $to = 'norbi.sajtos@windowslive.com';
// $subject = "..."; 
//     $message = $_POST['message'];
//     $headers = "From: " . $_POST['sender_nam‌​e​'] . " <" . $_POST['sender_em‌​ail‌​'] . ">\r\n";
//     $headers = "Reply-To: " . $_POST['sender_ema‌​il‌​'] . "\r\n";
//     $headers = "Content-type: text/html; charset=iso-8859-1\r\n";
//     'X-Mailer: PHP/' . phpversion();
//     if (mail($to, $subject, $message, $headers))
//         echo json_encode(['success' => true]);
//     else
//         echo json_encode(['success' => false]);
//     exit;
// }

// --------------------------------------------------------------------------------------
//HTTPS

// if ($_POST['send'] == 'SEND') {

//     $to = 'norbi.sajtos@windowslive.com';
//     $subject = "asasd";
//     $message = $_POST['message'];
//     $headers = "From: " . $_POST['sender_nam‌​e​'] . " <" . $_POST['sender_em‌​ail‌​'] . ">\r\n";
//     $headers = "Reply-To: " . $_POST['sender_ema‌​il‌​'] . "\r\n";
//     $headers = "Content-type: text/html; charset=iso-8859-1\r\n";
//     'X-Mailer: PHP/' . phpversion();
//     //check if the mail was sent
//     if (mail($to, $subject, $message, $headers)) {
//         echo json_encode(['result' => true]);
//     } else {
//         echo json_encode(['result' => false]);
//     }
// }


// --------------------------------------------------------------------------------------


// Pear Mail Library
require_once "Mail.php";

$from = '<norbi.sajtos@windowslive.com>';
$to = '<norbi.sajtos@windowslive.com>';
$subject = 'Hi!';
$body = "Hi,\n\nHow are you?";

$headers = array(
    'From' => $from,
    'To' => $to,
    'Subject' => $subject
);

$smtp = Mail::factory('smtp', array(
        'host' => 'ssl://smtp.gmail.com',
        'port' => '465',
        'auth' => true,
        'username' => 'sajtos8265@gmail.com',
        'password' => '573+2300-/'
    ));

$mail = $smtp->send($to, $headers, $body);

if (PEAR::isError($mail)) {
    echo('<p>' . $mail->getMessage() . '</p>');
} else {
    echo('<p>Message successfully sent!</p>');
}

// --------------------------------------------------------------------------------------

// $msg = "Teszt üzenet.";

// mail("norbi.sajtos@windowslive.com", "My test object", $msg);


?>