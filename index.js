function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $(".error");
  var $errortext = $(".error-text");
  var errortext = document.querySelectorAll(".error-text");
  var errorimg = document.querySelectorAll(".error-img");
  var $errorimage = $(".error-img");
  var email = $(".ea").val();
  var firstname = $(".fn").val();
  var lastname = $(".ln").val();
  var password = $(".pw").val();

  if (validateEmail(email) && firstname != "" && lastname !== "" && password !== "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var i=0; i< errortext.length; i++){
      errortext[i].style.position = "relative";
      errortext[i].style.top = "2rem";
    }
  } else if (email == "" && firstname == "" && lastname == "" && password == "" ) {
    $result.show();
    $errortext.text("please fill appropraitely");
    for (var x=0; x< errorimg.length; x++) {
      errorimg[x].style.left = "6rem";
    }
  } else if (validateEmail(email) && firstname == "" && lastname !== "" && password !== "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var y=0; y< errortext.length; y++){
      errortext[y].style.position = "relative";
      errortext[y].style.top = "2rem";
    }
    errorimg[0].style.display="block";
    errorimg[0].style.left="6rem";
    errortext[0].style.display="block";
    errortext[0].style.color="red";
    errortext[0].style.top= "0.5rem";
    errortext[0].innerHTML = "Please fill appropraitely!";
  } else if (validateEmail(email) && firstname !== "" && lastname == "" && password !== "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var z=0; z< errortext.length; z++){
      errortext[z].style.position = "relative";
      errortext[z].style.top = "2rem";
    }
    errorimg[1].style.display="block";
    errorimg[1].style.left="6rem";
    errortext[1].style.display="block";
    errortext[1].style.color="red";
    errortext[1].style.top= "0.5rem";
    errortext[1].innerHTML = "Please fill appropraitely!";
  } else if (validateEmail(email) && firstname !== "" && lastname !== "" && password == "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var a=0; a< errortext.length; a++){
      errortext[a].style.position = "relative";
      errortext[a].style.top = "2rem";
    }
    errorimg[3].style.display="block";
    errorimg[3].style.left="6rem";
    errortext[3].style.display="block";
    errortext[3].style.color="red";
    errortext[3].style.top= "0.5rem";
    errortext[3].innerHTML = "Please fill appropraitely!";
  } else if (email =="" && firstname !== "" && lastname !== "" && password !== "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var b=0; b< errortext.length; b++){
      errortext[b].style.position = "relative";
      errortext[b].style.top = "2rem";
    }
    errorimg[2].style.display="block";
    errorimg[2].style.left="6rem";
    errortext[2].style.display="block";
    errortext[2].style.color="red";
    errortext[2].style.top= "0.5rem";
    errortext[2].innerHTML = "Please fill appropraitely!";
  } else if (email !=="" && firstname !== "" && lastname !== "" && password !== "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var o=0; o< errortext.length; o++){
      errortext[o].style.position = "relative";
      errortext[o].style.top = "2rem";
    }
    errorimg[2].style.display="block";
    errorimg[2].style.left="6rem";
    errortext[2].style.display="block";
    errortext[2].style.color="red";
    errortext[2].style.top= "0.5rem";
    errortext[2].innerHTML = "Looks like this is not an email!";
  }
  else if (validateEmail(email) && firstname == "" && lastname !== "" && password == "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var c=0; c< errortext.length; c++){
      errortext[c].style.position = "relative";
      errortext[c].style.top = "2rem";
    }

    errortext[0].innerHTML = "Please fill appropraitely!";
    errortext[0].style.color="red";
    errorimg[0].style.display="block";
    errorimg[0].style.left="6rem";
    errortext[0].style.top= "0.5rem";

    errorimg[3].style.display="block";
    errorimg[3].style.left="6rem";
    errortext[3].style.color="red";
    errortext[3].style.top= "0.5rem";
    errortext[3].innerHTML = "Please fill appropraitely!";
  }

  else if (validateEmail(email) && firstname == "" && lastname == "" && password !== "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var d=0; d< errortext.length; d++){
      errortext[d].style.position = "relative";
      errortext[d].style.top = "2rem";
    }

    errortext[0].innerHTML = "Please fill appropraitely!";
    errortext[0].style.color="red";
    errorimg[0].style.display="block";
    errorimg[0].style.left="6rem";
    errortext[0].style.top= "0.5rem";

    errorimg[1].style.display="block";
    errorimg[1].style.left="6rem";
    errortext[1].style.color="red";
    errortext[1].style.top= "0.5rem";
    errortext[1].innerHTML = "Please fill appropraitely!";
  } else if (email =="" && firstname == "" && lastname !== "" && password !== "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var e=0; e< errortext.length; e++){
      errortext[e].style.position = "relative";
      errortext[e].style.top = "2rem";
    }

    errortext[0].innerHTML = "Please fill appropraitely!";
    errortext[0].style.color="red";
    errorimg[0].style.display="block";
    errorimg[0].style.left="6rem";
    errortext[0].style.top= "0.5rem";

    errorimg[2].style.display="block";
    errorimg[2].style.left="6rem";
    errortext[2].style.color="red";
    errortext[2].style.top= "0.5rem";
    errortext[2].innerHTML = "Please fill appropraitely!";
  } else if (email !=="" && firstname == "" && lastname !== "" && password !== "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var p=0; p< errortext.length; p++){
      errortext[p].style.position = "relative";
      errortext[p].style.top = "2rem";
    }

    errortext[0].innerHTML = "Please fill appropraitely!";
    errortext[0].style.color="red";
    errorimg[0].style.display="block";
    errorimg[0].style.left="6rem";
    errortext[0].style.top= "0.5rem";

    errorimg[2].style.display="block";
    errorimg[2].style.left="8rem";
    errortext[2].style.color="red";
    errortext[2].style.top= "0.5rem";
    errortext[2].innerHTML = "Looks like this is not an email!";
  }
  else if (email == "" && firstname !== "" && lastname == "" && password !== "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var f=0; f< errortext.length; f++){
      errortext[f].style.position = "relative";
      errortext[f].style.top = "2rem";
    }

    errortext[2].innerHTML = "Please fill appropraitely!";
    errortext[2].style.color="red";
    errorimg[2].style.display="block";
    errorimg[2].style.left="6rem";
    errortext[2].style.top= "0.5rem";

    errorimg[1].style.display="block";
    errorimg[1].style.left="6rem";
    errortext[1].style.color="red";
    errortext[1].style.top= "0.5rem";
    errortext[1].innerHTML = "Please fill appropraitely!";
  } else if (email !== "" && firstname !== "" && lastname == "" && password !== "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var q=0; q< errortext.length; q++){
      errortext[q].style.position = "relative";
      errortext[q].style.top = "2rem";
    }

    errortext[2].innerHTML = "Looks like this is not an email!";
    errortext[2].style.color="red";
    errorimg[2].style.display="block";
    errorimg[2].style.left="8rem";
    errortext[2].style.top= "0.5rem";

    errorimg[1].style.display="block";
    errorimg[1].style.left="6rem";
    errortext[1].style.color="red";
    errortext[1].style.top= "0.5rem";
    errortext[1].innerHTML = "Please fill appropraitely!";
  }
   else if (email == "" && firstname !== "" && lastname == "" && password !== "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var g=0; g< errortext.length; g++){
      errortext[g].style.position = "relative";
      errortext[g].style.top = "2rem";
    }

    errortext[3].innerHTML = "Please fill appropraitely!";
    errortext[3].style.color="red";
    errorimg[3].style.display="block";
    errorimg[3].style.left="6rem";
    errortext[3].style.top= "0.5rem";

    errorimg[1].style.display="block";
    errorimg[1].style.left="6rem";
    errortext[1].style.color="red";
    errortext[1].style.top= "0.5rem";
    errortext[1].innerHTML = "Please fill appropraitely!";
  }
  else if (email == "" && firstname !== "" && lastname !== "" && password == "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var h=0; h< errortext.length; h++){
      errortext[h].style.position = "relative";
      errortext[h].style.top = "2rem";
    }

    errortext[3].innerHTML = "Please fill appropraitely!";
    errortext[3].style.color="red";
    errorimg[3].style.display="block";
    errorimg[3].style.left="6rem";
    errortext[3].style.top= "0.5rem";

    errorimg[2].style.display="block";
    errorimg[2].style.left="6rem";
    errortext[2].style.color="red";
    errortext[2].style.top= "0.5rem";
    errortext[2].innerHTML = "Please fill appropraitely!";
  } else if (email !== "" && firstname !== "" && lastname !== "" && password == "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var r=0; r< errortext.length; r++){
      errortext[r].style.position = "relative";
      errortext[r].style.top = "2rem";
    }

    errortext[3].innerHTML = "Please fill appropraitely!";
    errortext[3].style.color="red";
    errorimg[3].style.display="block";
    errorimg[3].style.left="6rem";
    errortext[3].style.top= "0.5rem";

    errorimg[2].style.display="block";
    errorimg[2].style.left="8rem";
    errortext[2].style.color="red";
    errortext[2].style.top= "0.5rem";
    errortext[2].innerHTML = "Looks like this is not an email!";
  }
  else if (email == "" && firstname !== "" && lastname == "" && password == "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var j=0; j< errortext.length; j++){
      errortext[j].style.position = "relative";
      errortext[j].style.top = "2rem";
    }

    errortext[3].innerHTML = "Please fill appropraitely!";
    errortext[3].style.color="red";
    errorimg[3].style.display="block";
    errorimg[3].style.left="6rem";
    errortext[3].style.top= "0.5rem";

    errortext[1].innerHTML = "Please fill appropraitely!";
    errortext[1].style.color="red";
    errorimg[1].style.display="block";
    errorimg[1].style.left="6rem";
    errortext[1].style.top= "0.5rem";

    errorimg[2].style.display="block";
    errorimg[2].style.left="6rem";
    errortext[2].style.color="red";
    errortext[2].style.top= "0.5rem";
    errortext[2].innerHTML = "Please fill appropraitely!";
  } else if (validateEmail(email) && firstname !== "" && lastname == "" && password == "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var t=0; t< errortext.length; t++){
      errortext[t].style.position = "relative";
      errortext[t].style.top = "2rem";
    }

    errortext[3].innerHTML = "Please fill appropraitely!";
    errortext[3].style.color="red";
    errorimg[3].style.display="block";
    errorimg[3].style.left="6rem";
    errortext[3].style.top= "0.5rem";

    errortext[1].innerHTML = "Please fill appropraitely!";
    errortext[1].style.color="red";
    errorimg[1].style.display="block";
    errorimg[1].style.left="6rem";
    errortext[1].style.top= "0.5rem";
  }
  else if (email !== "" && firstname !== "" && lastname == "" && password == "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var s=0; s< errortext.length; s++){
      errortext[s].style.position = "relative";
      errortext[s].style.top = "2rem";
    }

    errortext[3].innerHTML = "Please fill appropraitely!";
    errortext[3].style.color="red";
    errorimg[3].style.display="block";
    errorimg[3].style.left="6rem";
    errortext[3].style.top= "0.5rem";

    errortext[1].innerHTML = "Please fill appropraitely!";
    errortext[1].style.color="red";
    errorimg[1].style.display="block";
    errorimg[1].style.left="6rem";
    errortext[1].style.top= "0.5rem";

    errorimg[2].style.display="block";
    errorimg[2].style.left="8rem";
    errortext[2].style.color="red";
    errortext[2].style.top= "0.5rem";
    errortext[2].innerHTML = "Looks like this is not an email!";
  }  else if (email == "" && firstname == "" && lastname !== "" && password == "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var k=0; k< errortext.length; k++){
      errortext[k].style.position = "relative";
      errortext[k].style.top = "2rem";
    }

    errortext[3].innerHTML = "Please fill appropraitely!";
    errortext[3].style.color="red";
    errorimg[3].style.display="block";
    errorimg[3].style.left="6rem";
    errortext[3].style.top= "0.5rem";

    errortext[0].innerHTML = "Please fill appropraitely!";
    errortext[0].style.color="red";
    errorimg[0].style.display="block";
    errorimg[0].style.left="6rem";
    errortext[0].style.top= "0.5rem";

    errorimg[2].style.display="block";
    errorimg[2].style.left="6rem";
    errortext[2].style.color="red";
    errortext[2].style.top= "0.5rem";
    errortext[2].innerHTML = "Please fill appropraitely!";
  } else if (email !== "" && firstname == "" && lastname !== "" && password == "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var l=0; l< errortext.length; l++){
      errortext[l].style.position = "relative";
      errortext[l].style.top = "2rem";
    }

    errortext[3].innerHTML = "Please fill appropraitely!";
    errortext[3].style.color="red";
    errorimg[3].style.display="block";
    errorimg[3].style.left="6rem";
    errortext[3].style.top= "0.5rem";

    errortext[0].innerHTML = "Please fill appropraitely!";
    errortext[0].style.color="red";
    errorimg[0].style.display="block";
    errorimg[0].style.left="6rem";
    errortext[0].style.top= "0.5rem";

    errorimg[2].style.display="block";
    errorimg[2].style.left="7.8rem";
    errortext[2].style.color="red";
    errortext[2].style.top= "0.5rem";
    errortext[2].innerHTML = "Looks like this is not an email!";
  }
  // else if (email !=="" && firstname == "" && lastname == !"" && password == "") {
  //   $result.show();
  //   $errorimage.hide();
  //   $errortext.text("Looks like this is not an email!");
  //   $errortext.css("color", "purple");
  //   for (var l=0; l< errortext.length; l++){
  //     errortext[l].style.position = "relative";
  //     errortext[l].style.top = "2rem";
  //   }
  //
  //   errorimg[2].style.display= "block";
  //   errorimg[2].style.left="7.9rem";
  //   errortext[2].style.top= "0.5rem";
  //
  //   errortext[3].innerHTML = "Please fill appropraitely!";
  //   errortext[3].style.color="red";
  //   errorimg[3].style.display="block";
  //   errorimg[3].style.left="6rem";
  //   errortext[3].style.top= "0.5rem";
  //
  //   errortext[0].innerHTML = "Please fill appropraitely!";
  //   errortext[0].style.color="red";
  //   errorimg[0].style.display="block";
  //   errorimg[0].style.left="6rem";
  //   errortext[0].style.top= "0.5rem";
  // }
  else if (validateEmail(email) && firstname == "" && lastname == "" && password == "") {
    $result.show();
    $errorimage.hide();
    $errortext.text("Field filled appropraitely!");
    $errortext.css("color", "green");
    for (var n=0; n< errortext.length; n++){
      errortext[n].style.position = "relative";
      errortext[n].style.top = "2rem";
    }

    // errorimg[2].style.display= "block";
    // errorimg[2].style.left="7.9rem";
    // errortext[2].style.top= "0.5rem";

    errortext[3].innerHTML = "Please fill appropraitely!";
    errortext[3].style.color="red";
    errorimg[3].style.display="block";
    errorimg[3].style.left="6rem";
    errortext[3].style.top= "0.5rem";

    errortext[0].innerHTML = "Please fill appropraitely!";
    errortext[0].style.color="red";
    errorimg[0].style.display="block";
    errorimg[0].style.left="6rem";
    errortext[0].style.top= "0.5rem";

    errorimg[1].style.display="block";
    errorimg[1].style.left="6rem";
    errortext[1].style.color="red";
    errortext[1].style.top= "0.5rem";
    errortext[1].innerHTML = "Please fill appropraitely!";
  }   else if (email !== "" && firstname == "" && lastname == "" && password == "") {
      $result.show();
      // $errorimage.hide();
      $errortext.text("Please fill appropraitely!");
      // $errortext.css("color", "green");
      for (var u=0; u< errortext.length; u++){
        errortext[u].style.position = "relative";
        errortext[u].style.top = "0.2rem";
        errorimg[u].style.left = "6rem";
      }

      errorimg[2].style.left="7.8rem";
      errortext[2].innerHTML = "Looks like this is not an email!";

    } else if (email !== "" && firstname == "" && lastname == "" && password !== "") {
    $result.show();
    for (var v=0; v< errortext.length; v++){
      errortext[v].style.position = "relative";
      errortext[v].style.top = "0.2rem";
      errorimg[v].style.left= "6rem";
    }
    errorimg[3].style.display="none";
    errortext[3].style.color="green";
    errortext[3].innerHTML = "Field filled appropraitely!";
    errortext[3].style.top = "2rem";
  errortext[2].innerHTML = "Looks like this is not an email!";
  errorimg[2].style.left="8rem";
  } else if (email == "" && firstname == "" && lastname == "" && password !== "") {
    $result.show();
    for (var m=0; m< errortext.length; m++){
      errortext[m].style.position = "relative";
      errortext[m].style.top = "0.2rem";
      errorimg[m].style.left= "6rem";
    }
    errorimg[3].style.display="none";
    errortext[3].style.color="green";
    errortext[3].innerHTML = "Field filled appropraitely!";
    errortext[3].style.top = "2rem";
  } else {
    $result.hide();
  }
  return false;
}

$("button").on("click", validate);
