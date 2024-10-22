const divElement = document.createElement('div');
divElement.setAttribute("style", "background-color: pink; border: 1px solid black;");

const h1Element = document.createElement('h1');
h1Element.textContent = "I'm in a div";

const pElement = document.createElement('p');
pElement.textContent = "ME TOO!";

divElement.appendChild(h1Element);
divElement.appendChild(pElement);

document.body.appendChild(divElement);

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

btn1.addEventListener("click", () => {
  alert("Hello World");
});

btn2.addEventListener("click", () => {
    alert("This is button 2");
  });

const clicker = document.querySelector("#clicker");

clicker.addEventListener("click", function (e) {
    console.log(e); 
});