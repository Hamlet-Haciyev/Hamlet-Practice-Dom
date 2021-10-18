// Task-1
// Write a javascript program to set the background color of a paragraph
// let task1 = document.getElementById("Task1");

// let bgChanger = (bgColor) => {
//   task1.style.backgroundColor = `${bgColor}`;
// };
// bgChanger("red");

//  Task-2
// Write a javascript function that creates a table, accept row, column
// numbers from the user, and input row-column number as content of a cell

// let btn = document.getElementById("btn");
// let table = document.getElementById("table");

// let createTable = () => {
//   let row = parseInt(document.getElementById("row").value);
//   let column = parseInt(document.getElementById("column").value);

//   for (let i = 0; i < row; i++) {
//     let tr = document.createElement("tr");
//     for (let a = 0; a < column; a++) {
//       let td = document.createElement("td");
//       if (a == 0) {
//         td.innerText = i + 1;
//       } else {
//         td.innerText = `Hamlet ${i + 1}`;
//       }
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
// };

// btn.addEventListener("click", createTable);

// Task-3
//Write a javascript program to remove items from a dropdown list.
// let dropdownMenu = document.getElementsByClassName("dropdown-menu")[0];
// let dropdownItem = document.querySelectorAll(".dropdown-menu li");

// 1. Method
// let removeItem = document.getElementById("remove-item");
// let i = 0;
// removeItem.addEventListener("click", () => {
//   dropdownMenu.removeChild(dropdownItem[i]);
//   i++;
// });

// 2.Method
// let removeItem = () => {
//   for (let i = 0; i < dropdownItem.length; i++) {
//     dropdownItem[i].addEventListener("click", () => {
//       dropdownMenu.removeChild(dropdownItem[i]);
//     });
//   }
// };
// removeItem();

// Task-4
// Write a javascript program to get the width and height of the window (any time the window is resized)

// let screenWidthAndHeight = () => {
//   let width = window.innerWidth;
//   let height = window.innerHeight;
//   console.log(width);
//   console.log(height);
// };
// screenWidthAndHeight();
