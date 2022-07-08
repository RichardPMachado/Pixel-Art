const numBoxColor = 4;

// ================ Criar caixas e suas repectivas cores ================================
function randomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}

const color = ['firstBox', 'secondBox', 'thirdBox', 'fourthBox', 'fifthBox', 'sixthBox'];

function createBoxColors(number) {
  let colorLi = [];
  const paletteUl = document.getElementById('color-palette');
  for (let index = 0; index < number; index += 1) {
    colorLi = document.createElement('li');
    paletteUl.appendChild(colorLi);
    colorLi.className = 'color';
    colorLi.classList.add(color[index]);
    colorLi.style.backgroundColor = randomColor();
    // ========================== Create Class Selected ===================================
    if (color[index] === 'firstBox') {
      colorLi.style.backgroundColor = 'black';
      colorLi.classList.add('selected');
    }
  }
}
createBoxColors(numBoxColor);

// ========================== Create Pixel Board ===================================
const pixelBoard = document.getElementById('pixel-board');
function createPixelsBoard(size) {
  const numBox = size * size;
  pixelBoard.style.setProperty('--size', size);
  for (let index = 0; index < numBox; index += 1) {
    const pixel = document.createElement('div');
    pixelBoard.appendChild(pixel);
    pixel.className = 'pixel';
  }
}
createPixelsBoard(5);
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
function addColor(event) {
  for (let index = 0; index < 4; index += 1) {
    if (colorsLi[index].classList.contains('selected')) {
      const clickAlvo = event.target;
      clickAlvo.style.backgroundColor = colorsLi[index].style.backgroundColor;
    }
  }
}
const pixel = document.querySelectorAll('.pixel');
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', addColor);
}

// ========================== Clear Board ===================================
const clear = document.querySelector('#clear-board');
function clearBoard() {
  const box = document.querySelectorAll('.pixel');
  for (let index = 0; index < box.length; index += 1) {
    box[index].style.background = 'white';
  }
}
clear.addEventListener('click', clearBoard);

// ========================== Min & Max Size =========================================================

function sizeMinMax() {
  const boxQtd = document.getElementById('board-size');
  if (boxQtd.value < 5) {
    boxQtd.value = 5;
  }
  if (boxQtd.value > 50) {
    boxQtd.value = 50;
  }
}

function inputVazio() {
  const input = document.getElementById('board-size');
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    const box = document.querySelectorAll('.pixel');
    for (let index = 0; index < box.length; index += 1) {
      box[index].remove();
    }
    sizeMinMax();
    createPixelsBoard(input.value);
  }
}

const clickSize = document.getElementById('generate-board');
clickSize.addEventListener('click', inputVazio);
