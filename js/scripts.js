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
// to clear the pages text function
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
 // ************************* OLD CODE *************************
 // ************************* NO LOOP  *************************
// var ping = function(number) {
//   // this spits ping \/
// if ((0 < number && number < 100) && number % 3 === 0 && number % 15 != 0) {
//   $("#results").append("<li>ping</li>");
//   // this spits pong \/
// } else if ((0 < number && number < 100) && number % 5 === 0 && number % 15 != 0) {
//   $("#results").append("<li>pong</li>");
//   // this spits pingpong \/
// } else if ((0 < number && number < 100) && number % 15 === 0) {
//   $("#results").append("<li>pingpong</li>");
//   // this is just spitting regular numbers \/
// } else if ((0 < number && number < 100) && number % 3 != 0 && number % 5 != 0 && number % 15 != 0 && number != 0 ){
//   $("#results").append(
//     $("<li>").append(number)
//   );
// }
// this is spitting bad input message \/
//   else {
//     $("#results").append("<li>bad input</li>");
//     return false;
//   }
// };
