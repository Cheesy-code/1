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

// if($_POST['send'] == 'SEND'){

//     $to      = 'norbi.sajtos@windowslive.com';
//     $subject = "asasd"; 
//     $message = $_POST['message']; 
//     $headers = "From: ".$_POST['sender_nam‌​e​']." <".$_POST['sender_em‌​ail‌​'].">\r\n"; $headers = "Reply-To: ".$_POST['sender_ema‌​il‌​']."\r\n"; 
//     $headers = "Content-type: text/html; charset=iso-8859-1\r\n";
//     'X-Mailer: PHP/' . phpversion();
//     //check if the mail was sent
//     if (mail($to, $subject, $message, $headers)) {
//         echo json_encode(['result' => true]);
//     }else {
//         echo json_encode(['result' => false]);
//      }
//    }

   
// --------------------------------------------------------------------------------------

$msg = "Teszt üzenet.";

mail("norbi.sajtos@windowslive.com", "My test object", $msg);


?>