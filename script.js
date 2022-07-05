const numBoxColor = 4;
// ================ Criar caixas e suas repectivas cores ================================

function createBoxColors(number) {
  const color = ['firstBox', 'secondBox', 'thirdBox', 'fourthBox', 'fifthBox', 'sixthBox'];
  const paletteUl = document.getElementById('color-palette');
  for (let index = 0; index < number; index += 1) {
    const colorLi = document.createElement('li');
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
createPixelsBoard(25);

// ========================== Check Class Selected ===================================
const colorLi = document.querySelectorAll('.color');
function selectedColor(event) {
  for (let index = 0; index < numBoxColor; index += 1) {
    if (colorLi[index].classList.contains('selected')) {
      colorLi[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}
for (let index = 0; index < numBoxColor; index += 1) {
  colorLi[index].addEventListener('click', selectedColor);
}

// colorLi.classList.add = 'firstBox';
// Cores das caixas
