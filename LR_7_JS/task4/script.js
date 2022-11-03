let imagesList = [
    {
        url: "http://cdn.mapme.club/images/2178/21782-7-chudes-sveta---samye-umopomrachitelnye-postrojki-drevnego-mira.jpg",
        title: "Стародавні піраміди",
        description: "Єгипет",
    },
    {
        url: "https://naukozavr.info/wp-content/uploads/2020/02/Efeleva-vezha.jpg",
        title: "Ейфелева вежа",
        description: "Франція",
    },
    {
        url: "https://knau.kharkov.ua/uploads/posts/2014-04/1398162422_13.jpg",
        title: "Колізей",
        description: "Рим",
    },
];

function initPhotoRotator(identificator, list) {
    let i = 0;

    const rotator = document.getElementById(identificator);

    const headerRotator = document.createElement("div");
    const numberPhotoFromList = document.createElement("p");
    const image = document.createElement("img");

    const leftSide = document.createElement("div");
    const rightSide = document.createElement("div");

    const btnPrev = document.createElement("button");
    const btnNext = document.createElement("button");
    const titleParagraph = document.createElement("p");
    const descriptionParagraph = document.createElement("p");

    headerRotator.classList.add("container_picture");
    leftSide.classList.add("algin_items_center");
    rightSide.classList.add("algin_items_center");
    titleParagraph.classList.add("title");
    descriptionParagraph.classList.add("description");

    numberPhotoFromList.textContent = `Фото ${i + 1} з ${list.length}`;
    titleParagraph.textContent = list[0].title;
    descriptionParagraph.textContent = list[0].description;
    btnPrev.textContent = "Назад";
    btnNext.textContent = "Вперед";
    image.src = list[0].url;

    btnPrev.disabled = true;

    if (imagesList.length == 1 || imagesList.length == 0) btnNext.disabled = true;


    btnPrev.addEventListener("click", () => {
        btnNext.disabled = false;
        i--;

        if (i == 0) btnPrev.disabled = true;
        numberPhotoFromList.textContent = `Фото ${i + 1} з ${list.length}`;
        titleParagraph.textContent = list[i].title;
        descriptionParagraph.textContent = list[i].description;

        image.src = list[i].url;
    });

    btnNext.addEventListener("click", () => {
        btnPrev.disabled = false;
        i++;
        if (i == list.length - 1) btnNext.disabled = true;

        numberPhotoFromList.textContent = `Фото ${i + 1} з ${list.length}`;

        titleParagraph.textContent = list[i].title;
        descriptionParagraph.textContent = list[i].description;

        image.src = list[i].url;
    });

    leftSide.appendChild(btnPrev);
    rightSide.appendChild(btnNext);

    headerRotator.appendChild(numberPhotoFromList);
    headerRotator.appendChild(image);
    headerRotator.appendChild(titleParagraph);
    headerRotator.appendChild(descriptionParagraph);

    rotator.appendChild(leftSide);
    rotator.appendChild(headerRotator);
    rotator.appendChild(rightSide);
}

initPhotoRotator("rotator", imagesList);