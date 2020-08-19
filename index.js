function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $(".email");
  var email = $(".ea").val();
  $result.text("");

  if (validateEmail(email)) {
    // $result.text(email + " is valid :)");
    // $result.css("color", "green");
  } else {
    // $result.text("please provide a valid email");
    // $result.css("color", "red");
    document.querySelector(".email").style.display="block";
    // iconerror.css("display", "block");
  }
  return false;
}

$("button").on("click", validate);
