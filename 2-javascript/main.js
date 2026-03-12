//Window Object & DOM
console.log(window);

//Single element
console.log(document.getElementById("my-form"));
const form = document.getElementById("my-form");
console.log("form -", form);

console.log(document.querySelector(".container"));

//Multiple element
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".item");

items.forEach((item) => console.log(item));

// MANIPULATING THE DOM
///Test
const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Bye";
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");
btn.style.background = "blue";

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.className);
//   document.querySelector("#my-form").style.background = "#ccc";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1>";
//   items[1].style.display = "none";
// });

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// Listen for form submit
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log(name.value);

  if (name.value === "" || email.value === "" || msg.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    // Remove error after 3 seconds
    setTimeout(() => {
      msg.remove();
    }, 3000);
  } else {
    // Create new list item with user
    const li = document.createElement("li");

    // Add text node with input values
    li.appendChild(document.createTextNode(`${name.value}: ${email.value}`));

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    name.value = "";
    email.value = "";
  }
}
