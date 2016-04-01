// business logic
var ping = function(number) {
  // this spits ping \/
if ((0 < number && number < 100) && number % 3 === 0 && number % 15 != 0) {
  $("#results").append("<li>ping</li>");
  // this spits pong \/
} else if ((0 < number && number < 100) && number % 5 === 0 && number % 15 != 0) {
  $("#results").append("<li>pong</li>");
  // this spits pingpong \/
} else if ((0 < number && number < 100) && number % 15 === 0) {
  $("#results").append("<li>pingpong</li>");
  // this is just spitting regular numbers \/
} else if ((0 < number && number < 100) && number % 3 != 0 && number % 5 != 0 && number % 15 != 0 && number != 0 ){
  $("#results").append(
    $("<li>").append(number)
  );
}
// this is spitting bad input message \/
  else {
    $("#results").append("<li>bad input</li>");
    return false;
  }
};

// to clear the pages text function *not working
function clearText() {
    document.getElementById('results').value="";
};
// breaker
// user interface logic
// breaker

$(document).ready(function(){
  $("form#pingPong").submit(function(event) {
    event.preventDefault();

    var number = $("#pingPongs").val();
    var result = ping(number);

    $("form#pingPong")[0].reset();
  });
});

// not working at the moment?
    // $("#myform")[0].reset();
// two ways to reset inputform
    // $("form#pingPong").each(function(){
    //     this.reset();
