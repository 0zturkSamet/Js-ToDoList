let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
  var p = document.createElement("p");
  p.classList.add("paragraph-styling");
  p.innerText = inputField.value;
  toDoContainer.appendChild(p);
  inputField.value = "";
  p.addEventListener("click", function () {
    p.style.textDecoration = "line-through";
  });
  p.addEventListener("dblclick", function () {
    toDoContainer.removeChild(p);
  });
});
