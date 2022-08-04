
let defaultColor = 'grey';
let currentColor = 'grey';
let backgroundColor = 'white';

let defaultMode = 'color';
let currentMode =  'color';

const drawingContainer = document.getElementById('drawingContainer');
let px = 16; //pixel #

for(i = 0; i < (px*px); i++){ //for forming the grid
    var newPixel = document.createElement('div');
    newPixel.classList.add('pixels');
    drawingContainer.appendChild(newPixel);
}

drawingContainer.addEventListener('mouseover', (e) => { //this is for drawing
    if(currentMode == 'color'){
        e.target.style.background = currentColor;
    }
    if(currentMode == 'erase'){
        e.target.style.background = backgroundColor;
    }
    if(currentMode == 'rainbow'){
        rainbowButton.classList.add('currentButton')
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
    e.stopPropagation();
});

const colorPreview = document.querySelector('#previewColor');  //color selector
const pageContainer = document.querySelector('#pageContainer');
currentColor = colorPreview.value;
pageContainer.addEventListener('mouseover', ()=>{
    if(currentMode == defaultMode)
        currentColor = colorPreview.value;
});

const colorButton = document.querySelector('#color'); //color button
colorButton.addEventListener('click', ()=> {
    currentMode = 'color';
    currentColor = colorPreview.value;
});

const clearButton = document.querySelector('#clear'); //clear button
var allPixels = document.querySelectorAll('.pixels');
clearButton.addEventListener('click', ()=> {
    allPixels.forEach(pixels => {
        pixels.style.background = backgroundColor;
    });
});

const eraserButton = document.querySelector('#erase'); //erase button
eraserButton.addEventListener('click', ()=> {
    currentMode = 'erase'
});

const rainbowButton = document.querySelector('#rainbow');
rainbowButton.addEventListener('click', ()=> {
    currentMode = 'rainbow';
});


class Dog {
    constructor(name, weight, breed,){
        this.name = name;
        this.weight = weight;
        this.breed = breed;
    }

    setName(newName){
        this.name = newName;
    }
}

var chloe = new Dog('chloe',30, 'german shepard');
console.log(chloe.weight)
delete chloe.weight
console.log(chloe.weight)

let winter = {
    name: 'Winter',
    weight: null,
    breed: 'shitzu',
}

let user = {
    name: "John",
    age: 30
  };
  
  let key = "name";
  alert( user.key ) // undefined
  alert(user.name)

chloe.setName('Chloe')
console.log(chloe)

console.log(winter)