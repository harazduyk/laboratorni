document.addEventListener("DOMContentLoaded", () => showTab(0));
let rtl = document.getElementById("rtl");

let rtr = document.getElementById("rtr");

let rbr = document.getElementById("rbr");

let rbl = document.getElementById("rbl");

let textBlock = document.querySelector("textarea");

let ttl = document.getElementById("ttl");

let ttr = document.getElementById("ttr");

let tbr = document.getElementById("tbr");

let tbl = document.getElementById("tbl");

let block = document.getElementById("block");


const decoratedValue = document.querySelector(".decorate_value");

const decoratedText = document.querySelector(".decorated_text");

rtl.addEventListener("input", generate);

rtr.addEventListener("input", generate);

rbr.addEventListener("input", generate);

rbl.addEventListener("input", generate);



decoratedValue.addEventListener("change", (e) => {
    decoratedText.style.textDecoration = decoratedValue.value;
    decoratedValue.nextElementSibling.textContent = `text-decoration: ${decoratedValue.value};`;
});

function generate(e) {
    ttl.value = +rtl.value;
    ttr.value = +rtr.value;
    tbr.value = +rbr.value;
    tbl.value = +rbl.value;

    let result =
        ttl.value +
        "px " +
        ttr.value +
        "px " +
        tbr.value +
        "px " +
        tbl.value +
        "px";

    block.style.borderRadius = result;
    textBlock.value = "border-radius: " + result + ";";
}

document.querySelector(".tab-header").addEventListener("click", (e) => {
    if (!e.target.classList.contains("tab-h")) return;

    showTab(e.target.dataset.tab);
});

function showTab(index) {
    let indexTab = index;

    let tabsWithHeader = document.querySelectorAll(".tab-h");

    let tabWithContents = document.querySelectorAll(".tabContent");

    for (let i = 0; i < tabsWithHeader.length; i++) {
        tabsWithHeader[i].classList.remove("active");

        if (i == indexTab) tabWithContents[i].style.display = "block";
        else tabWithContents[i].style.display = "none";
    }
    tabsWithHeader[indexTab].classList.add("active");
}

const box = document.querySelector(".box-shadow-generator .box");
const generateCodeBtn = document.querySelector(
    ".box-shadow-generator .generate-code-btn"
);
const code = document.querySelector(".result .code pre code");
const controls = document.querySelectorAll(".box-shadow-generator .control");

let xValue = 0;
let yValue = 0;
let blurValue = 6;
let opacityValue = 0.3;
let spreadValue = 0;
let colorValue = "rgba(0, 0, 0, 0.3)";
let insetValue = false;

const hexToRGBA = (hex) => {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacityValue})`;
};

const generateBoxShadow = () => {
    if (insetValue) {
        box.style.boxShadow = `inset ${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
    } else {
        box.style.boxShadow = `${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
    }
};

const updateValues = () => {
    xValue = document.querySelector("#x-value").value;
    yValue = document.querySelector("#y-value").value;
    blurValue = document.querySelector("#blur").value;
    opacityValue = document.querySelector("#opacity").value;
    spreadValue = document.querySelector("#spread").value;
    colorValue = hexToRGBA(document.querySelector("#color").value);
    insetValue = document.querySelector("#inset").checked;

    generateBoxShadow();
};

controls.forEach((c) => {
    c.addEventListener("input", updateValues);
});

const generateCode = () => {
    if (insetValue) {
        code.innerHTML = `box-shadow: inset ${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
    } else {
        code.innerHTML = `box-shadow: ${xValue}px ${yValue}px ${blurValue}px ${spreadValue}px ${colorValue}`;
    }

    hljs.highlightAll();
};

generateCodeBtn.addEventListener("click", generateCode);