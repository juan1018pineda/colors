const boxes = document.getElementsByClassName('color-box');
let selectedColor = "red";

function changeColor() {
    selectedColor = document.getElementById('color').value;
    let clickedElement = event.target.innerHTML;
    boxes[clickedElement-1].style.backgroundColor = selectedColor;
}