// Select target element
const target = document.getElementById("target");

//first list item
const li1 = document.createElement("li");
li1.textContent = "First item";

//second list item
const li2 = document.createElement("li");
li2.textContent = "Second item";

//Add class my-item
li2.classList.add("my-item");

//third list item
const li3 = document.createElement("li");
li3.textContent = "Third item";

//Append all list
target.appendChild(li1);
target.appendChild(li2);
target.appendChild(li3);
