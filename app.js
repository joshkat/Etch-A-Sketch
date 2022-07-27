const drawingContainer = document.getElementById('drawingContainer');
let px = 16;

for(i = 0; i < (px*px); i++){
    var newPixel = document.createElement('div');
    newPixel.classList.add('pixels');
    drawingContainer.appendChild(newPixel);
}

drawingContainer.addEventListener('mouseover', (e) => {
    e.target.style.background = 'blue';
    e.stopPropagation();
});