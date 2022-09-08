$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='information']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      cardnum: "required",
      expiration: "required",
      cvc: "required",
      ownername: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true,
      },
    },
    // Specify validation error messages
    messages: {
      cardnum: "Please enter your card number",
      expiration: "Must be filled",
      cvc: "Must be filled",
      ownername: "Please enter your fullname",
      email: "Please enter a valid email address",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      $.ajax({
        url: $(form).action,
        method: $(form).method,
        data: $(form).serialize(),
        success: function () {
          $("#myModal").modal("show");
          $(".header").addClass("pad-right");
        },
      });
    },
  });
});


function hidemodal() {
  $(".modal").modal("toggle");
  setTimeout(function () {
    $(".header").removeClass("pad-right");
  }, 300);
  window.location.href = "https://datnguyen2000.github.io/dragon-gaming/pay-success.html";
}
