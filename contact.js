// $(document).ready(function() {
//     $("#emailForm").on('submit', function(event) {
//         event.preventDefault(); 
//         var formData = $(this).serialize();
//         $.ajax({
//             type: 'POST',
//             url: 'sendmail.php',
//             dataType: "json",
//             data: formData,
//             success: function(response) { 
//                 alert(response.success); 
//             },
//             error: function(xhr, status, error){
//                 console.log(xhr); 
//             }
//         });
//     });
// });

$(document).ready(function () {
    //send button click
    $('#sendMail').on('click', function (e) {
        e.preventDefault();
        $.post('sendmail.php', $('#emailForm').serialize(), function (data) {
            //show the results if the mail was sent or not
            var res = $.parseJSON(data);
            if (res.result === true) {
               $('#feedback').html('your mail was sent');
            }else {
               $('#feedback').html('your mail was not sent');
            }
        });
    });
    });