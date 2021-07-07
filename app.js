const boxes = document.getElementsByClassName('color-box');
let selectedColor = "red";

function changeColor() {
    selectedColor = document.getElementById('color').value;
    let clicked = event.target.innerHTML;
    boxes[clicked-1].style.backgroundColor = selectedColor;
}