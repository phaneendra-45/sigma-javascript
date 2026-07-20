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