//Ans1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Clickme";
document.querySelector("body").append(input);
document.querySelector("body").append(button);
//Ans2
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");