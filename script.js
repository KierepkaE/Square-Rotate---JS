//Rotation

let rotate = 0;
const deg = 10;

// DOM

let btn = document.querySelector('button');
let div = document.querySelector('div');

div.style.transition = "0.5s";

// Function

btn.addEventListener('click', function() {
    rotate = rotate + deg;
    div.style.transform = "rotate(" + rotate + "deg)";
})