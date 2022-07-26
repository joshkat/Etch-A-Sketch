const drawingContainer = document.getElementById('drawingContainer');

for(i = 0; i < 256; i++){
    var newPixel = document.createElement('div');
    newPixel.classList.add('pixels');
    drawingContainer.appendChild(newPixel);
}

