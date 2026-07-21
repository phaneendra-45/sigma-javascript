/* Answer 1 */
// Mouseout
element.addEventListener("mouseout", () => {
    console.log("Mouse left the element");
});

// Keypress
element.addEventListener("keypress", (event) => {
    console.log(event.key);
});

// Scroll
window.addEventListener("scroll", () => {
    console.log("Scrolling...");
});

// Load
window.addEventListener("load", () => {
    console.log("Page loaded");
});

/* Answer 2 */
 let btn = document.createElement("button");
        btn.innerText = "Click Me";
        document.body.appendChild(btn);

        btn.addEventListener("click", function () {
            btn.style.backgroundColor = "green";
        });
/* Answer 3 */
let input = document.getElementById("inp");
        let h2 = document.getElementById("head");

        input.addEventListener("input", function () {
            let name = input.value.replace(/[^a-zA-Z ]/g, "");
            input.value = name;
            h2.innerText = name;
        });