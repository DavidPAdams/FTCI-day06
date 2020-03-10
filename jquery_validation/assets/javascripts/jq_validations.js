$(document).ready(function() {

  $("#submit").on('click', function() {

    let name = $("#name");
    let email = $("#email");
    let message = $("#message");
    let phone = $("#phone");

    let required = [name, email, phone];

    for (let i = 0; i < required.length; i++) {
      if (required[i].val() === "") {
        $("#error_message").text("Please Fill Out Required Fields").addClass('warning');
        required[i].prev().addClass('warning');
      } else {
        required[i].prev().removeClass('warning');
      }
    }

    if (!$("#form label").hasClass('warning')) {
      $("#form")[0].remove();
      $("#pre-form h2").text("Thanks for your feedback!")
    }

  });
});
