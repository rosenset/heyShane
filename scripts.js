// function myFunction() {
//   var x = document.getElementById("myText").value;
//   document.getElementById("demo").innerHTML = x;
// }
var names = [];

function displayUserName() {
  var theName = document.getElementById("enter").value;
  if (theName == "" || theName.length == 0) {
    return false; //stop the function since the value is empty.
  }
  names.push(theName);
  document.getElementById("name").children[0].innerHTML +=
    "<li>" + names[names.length - 1] + "</li>";
}
