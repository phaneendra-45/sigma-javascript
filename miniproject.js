let gamesequence = [];
let playersequence = [];
let level = 0;
let started = false;
let h2 = document.querySelector("h2");
let btns = ["red", "yellow", "green", "purple"];
document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game started");
        started = true;
        nextlevel();
    }
});
function btnflash(randbtn) {
randbtn.classList.add("flash");
setTimeout(function() {
    randbtn.classList.remove("flash");
}, 250);
}
function nextlevel() {
    level++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() * 3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    btnflash(randbtn);
}
