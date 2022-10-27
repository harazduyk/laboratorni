// 4. За допомогою javascript помістити 1-й абзац в елемент таблиці No2; другий - в комірку
// таблиці No5; третій - в клітинку таблиці No8. Заголовки помістити відповідно в 1,4 і 7 комірки.

const elementP = document.querySelectorAll("p");
const btnChangePositionElements = document.getElementById("btn");
const table = document.querySelector("table");
const elementH = document.querySelectorAll("h2");

btnChangePositionElements.addEventListener("click", () => {
    const rows = table.tBodies[0].rows;

    for (let i = 0; i < rows.length; i++) {
        rows[i].cells[0].insertAdjacentElement("afterbegin", elementH[i]);
        rows[i].cells[1].insertAdjacentElement("afterbegin", elementP[i]);
    }

});