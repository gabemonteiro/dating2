$(document).ready(function() {

  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $("#info").show();
  } else if (age === 18) {
    $("#info").show();
  } else {
    $("#under-18").show();
  }

  $("form#info").submit(function(event){

  var name = $("input#name").val();
  var gender = $('select#gender').val();
  var color = $('select#color').val();
  var drink = $('select#drink').val();

  if (name === "" || gender === "unselected" || color === "unselected" || drink === "unselected") {
  alert("Please fill out the entire form.")
}
  if (gender === "male" && color === "red" && drink === "beer") {
    $("#resultsM1").show();
    $("#info").hide();
  }

  event.preventDefault()
  });
});
