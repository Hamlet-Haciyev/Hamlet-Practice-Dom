let body = document.getElementsByTagName("body")[0];
body.style.display = "flex";

// element - 1

let element1 = document.createElement("div");
element1.innerText = "box1";

element1.style.border = "4px solid green";
element1.style.backgroundColor = "orange";
element1.style.color = "black";
element1.style.height = "300px";
element1.style.width = "300px";
element1.style.padding = "10px";
element1.style.marginRight = "20px";

// element - 2

let element2 = document.createElement("div");
element2.innerText = "box1s";

let content = document.createElement("h1");
content.innerText = "hi";
content.style.padding = "0 20px";
content.style.fontSize = "45px";

element2.appendChild(content);

element2.style.border = "4px solid red";
element2.style.backgroundColor = "white";
element2.style.color = "black";
element2.style.height = "300px";
element2.style.width = "300px";
element2.style.padding = "10px";
element2.style.marginRight = "20px";

// element - 3

let element3 = document.createElement("div");
element3.innerText = "box2";

element3.style.border = "4px solid green";
element3.style.backgroundColor = "white";
element3.style.color = "black";
element3.style.height = "150px";
element3.style.width = "150px";
element3.style.padding = "10px";
element3.style.marginRight = "20px";
element3.style.alignSelf = "flex-end";

// element - 4
let element4 = document.createElement("div");

element4.style.border = "4px solid red";
element4.style.backgroundColor = "white";
element4.style.height = "300px";
element4.style.width = "300px";
element4.style.padding = "10px";

body.appendChild(element1);
body.appendChild(element2);
body.appendChild(element3);
body.appendChild(element4);
