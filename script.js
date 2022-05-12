const container = document.querySelector(".container");
const colorButtons = document.querySelectorAll(".btn");
const userChoice = document.querySelector("#input-color");
const clearButton = document.querySelector("#btn-clear");
let color = "black";

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    container.appendChild(div);
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const slider = document.querySelector("#slider");
const screenVal = document.querySelector(".value");
slider.addEventListener("input", function () {
  let val = document.getElementById("slider").value;
  screenVal.textContent = val;
  removeAllChildNodes(container);
  container.setAttribute(
    "style",
    `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`
  );
  for (let i = 0; i < val * val; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    container.appendChild(div);
  }
});

const clear = document.querySelector("#btn-clear");
clear.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let square = container.children;
  for (let i = 0; i < val * val; i++) {
    square[i].style.backgroundColor = "white";
  }
});

const black = document.querySelector("#black");
black.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let square = container.children;
  for (let i = 0; i < val * val; i++) {
    square[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
  }
});

const chooseColor = document.querySelector("#color");
chooseColor.addEventListener("input", function () {
  let val = document.getElementById("slider").value;
  let newColor = document.getElementById("color").value;
  let square = container.children;
  for (let i = 0; i < val * val; i++) {
    square[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = newColor;
    });
  }
});

const rainbow = document.querySelector("#btn-rainbow");
rainbow.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let square = container.children;
  for (let i = 0; i < val * val; i++) {
    square[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = getRandomColor();
    });
  }
});

createGrid();
