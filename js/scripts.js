var ping = function(number) {
if (number % 3 === 0 && number % 15 != 0) {
  $("#results").append("<li>ping</li>");
} else if (number % 5 === 0 && number % 15 != 0) {
  $("#results").append("<li>pong</li>");
} else if (number % 15 === 0) {
  $("#results").append("<li>pingpong</li>");
} else if (number % 3 != 0 && number % 5 != 0 && number % 15 != 0 ){
  $("#results").append(number);
  $("#results").append("<br>");

}
  else {
    return false;
  }
};

$(document).ready(function(){
  $("form#pingPong").submit(function(event) {
    event.preventDefault();

    var number = $("#pingPongs").val();
    var result = ping(number);
    $("#result").text(result);
  });
});
