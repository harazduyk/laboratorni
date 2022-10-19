const text = "Hello world".split("");
const outputElement = document.getElementById("showText");
let i = 0;

let idInterval = setInterval(() => {
    outputElement.textContent = outputElement.textContent + text[i];
    i++;
}, 800);

setTimeout(() => {
    clearInterval(idInterval);
}, text.length * 800);