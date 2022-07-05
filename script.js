const numBoxColor = 4;
const numBox = 25;
// ================ Criar caixas e suas repectivas cores ================================

const color = ['firstBox', 'secondBox', 'thirdBox', 'fourthBox', 'fifthBox', 'sixthBox'];
let colorLi = [];
function createBoxColors(number) {
  const paletteUl = document.getElementById('color-palette');
  for (let index = 0; index < number; index += 1) {
    colorLi = document.createElement('li');
    paletteUl.appendChild(colorLi);
    colorLi.className = 'color';
    colorLi.classList.add(color[index]);
    // ========================== Create Class Selected ===================================
    if (color[index] === 'firstBox') {
      colorLi.classList.add('selected');
    }
  }
}

createBoxColors(numBoxColor);

// ========================== Create Pixel Board ===================================

function createPixelsBoard(number) {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < number; index += 1) {
    const pixel = document.createElement('div');
    pixelBoard.appendChild(pixel);
    pixel.className = 'pixel';
  }
}
createPixelsBoard(numBox);

// ========================== Check Class Selected ===================================
const colorsLi = document.querySelectorAll('.color');
function selectedColor(event) {
  for (let index = 0; index < numBoxColor; index += 1) {
    if (colorsLi[index].classList.contains('selected')) {
      colorsLi[index].classList.remove('selected');
    }
  }
  // sobre o toggle https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
  event.target.classList.add('selected');
}
for (let index = 0; index < numBoxColor; index += 1) {
  colorsLi[index].addEventListener('click', selectedColor);
}

// ========================== Add Color Class Selected ===================================
const pixel = document.querySelectorAll('.pixel');
function addColor(event) {
  for (let index = 0; index < 4; index += 1) {
    if (colorsLi[index].classList.contains('selected')) {
      event.target.classList.toggle(color[index]);
    }
  }
}

for (let index = 0; index < numBox; index += 1) {
  pixel[index].addEventListener('click', addColor);
}
