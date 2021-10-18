// Change the font Size of the p tag to 50 pixels.
let myText = document.getElementById("myText");
myText.style.fontSize = "50px";

// Show value of input tag on console on keyup event.
let input = document.getElementById("myInput");
input.addEventListener("keyup", (e) => {
  console.log(input);
});

// Add text class and title attribute with value myTitle to p tag
let myText2 = document.getElementById("myText2");
myText2.title = "myTitle";
myText2.classList.add("text");

// Change background color of div tag
let myStatement = document.querySelector("#myStatement p");
// a) with using toggle class
myStatement.addEventListener("click", () => {
  myStatement.classList.toggle("red");
});
// b) with using style property
// myStatement.style.color = "red";
