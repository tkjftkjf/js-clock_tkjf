const body = document.querySelector("body");

const IMG_NUMBER = 4;

function paintImg(imgNumber){
    const image = new Image();
    image.src = `img/${imgNumber + 1}.jpg`;
    body.appendChild(image);
    image.classList.add("bgImg");
};

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
};

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
};

init();