//Ans1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Clickme";
document.querySelector("body").append(input);
document.querySelector("body").append(button);
//Ans2
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");
//Ans3
letbtn=document.querySelector("#btn");
btn.classList.add("btnStyle");
//Ans4
let h1=document.createElement("h1");
h1.innerHTML="<u> DOM Practice </u>";
document.querySelector("body").append(h1);
//Ans5
let p=document.createElement("p");
p.innerHTML="ApnaCollege<b>Delta</b>Practice";
document.querySelector("body").append(p);