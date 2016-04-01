// business logic
var ping = function (number) {

  for (var index = 1; index <= number; index +=1) {
    if (index % 3 === 0 && index % 5 === 0) {
      $("#results").append("<li>pingpong</li>")
    } else if (index % 5 === 0) {
      $("#results").append("<li>pong</li>")
    } else if (index % 3 === 0) {
      $("#results").append("<li>ping</li>")
    } else {
      $("#results").append("<li>" + index + "</li>")
    }
  };
};
// to clear the #result div text //
function clearText() {
    document.getElementById("results").innerHTML="";
};
// ****** user interface logic ****** //
$(document).ready(function(){
  $("form#pingPong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#pingPongs").val());
    var result = ping(number);

    $("form#pingPong")[0].reset();
  });
});
