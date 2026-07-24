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
function gameflash(randbtn) {
randbtn.classList.add("flash");
setTimeout(function() {
    randbtn.classList.remove("flash");
}, 250);
}
function userflash(randbtn) {
randbtn.classList.add("userflash");
setTimeout(function() {
    randbtn.classList.remove("userflash");
}, 250);
}
function nextlevel() {
    playersequence = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() * 4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gamesequence.push(randcolor);
    console.log(gamesequence);
    gameflash(randbtn);
}
function btnPress() {
    console.log(this);
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    console.log(usercolor);
    playersequence.push(usercolor);
    checkAnswer(playersequence.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
    };

function checkAnswer(idx) {
        if (playersequence[idx] == gamesequence[idx]) {
            if (playersequence.length == gamesequence.length) {
                setTimeout(nextlevel, 1000);
            }
        } else {
            h2.innerText = "Game Over, Press any key to restart";
        }
     }