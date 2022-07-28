
let defaultColor = 'black'
let currentColor = 'black'
let backgroundColor = 'white'

const drawingContainer = document.getElementById('drawingContainer');
let px = 16; //pixel #

for(i = 0; i < (px*px); i++){ //for forming the grid
    var newPixel = document.createElement('div');
    newPixel.classList.add('pixels');
    drawingContainer.appendChild(newPixel);
}

drawingContainer.addEventListener('mouseover', (e) => { //this is for drawing
    e.target.style.background = currentColor;
    e.stopPropagation();
});

const colorButton = document.querySelector('#color');
colorButton.addEventListener('click', ()=> {
    currentColor = defaultColor;
});

const clearButton = document.querySelector('#clear');
var allPixels = document.querySelectorAll('.pixels');
clearButton.addEventListener('click', ()=> {
    allPixels.forEach(pixels => {
        pixels.style.background = backgroundColor;
    });
});

const eraserButton = document.querySelector('#erase'); //for erase button
eraserButton.addEventListener('click', ()=> {
    currentColor = 'white';
});



