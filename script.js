function updateDue() {
  var total =     parseInt(document.getElementById("userincome").value);
  var val2 = parseInt(document.getElementById("userrent").value);
  var val3 = parseInt(document.getElementById("usergroceries").value);
  var val4 = parseInt(document.getElementById("usersavings").value);
  var val5 = parseInt(document.getElementById("usersubscriptions").value);
  var val6 = parseInt(
    document.getElementById("usergas/public transport").value);
  var val7 = parseInt(document.getElementById("userother").value);

  // to make sure that they are numbers
  if (!total) {
    total = 0;
  }
  if (!val2) {
    val2 = 0;
  }
  if (!val3) {
    val3 = 0;
  }
  if (!val4) {
    val4 = 0;
  }
  if (!val5) {
    val5 = 0;
  }
  if (!val6) {
    val6 = 0;
  }
  if (!val7) {
    val7 = 0;
  }
//math equation for remaining value
  var ansD = document.getElementById("remainingcash");
  ansD.value = total - val2 - val3 - (total*val4/100) - val5 - val6 - val7;
  
  //this is the calculation for the recommendation
  let recommendText = document.getElementById("rcmdText");
  if (ansD.value > (0.25*total)) {
    recommendText.value = "You're doing great!";
  } else if (ansD.value == (0.25*total)) {
    recommendText.value = "You're in the middle.";
  } else {
    recommendText.value = "bad juju :(";
//    alert("badjuju");
  }

  console.log(ansD);
  console.log(total);
}


