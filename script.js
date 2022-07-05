// ================ Criar caixas e suas repectivas cores ================================

function createBoxColors(number) {
  const color = ['firstBox', 'secondBox', 'thirdBox', 'fourthBox', 'fifthBox', 'sixthBox'];
  const paletteUl = document.getElementById('color-palette');
  for (let index = 0; index < number; index += 1) {
    const colorLi = document.createElement('li');
    paletteUl.appendChild(colorLi);
    colorLi.className = 'color';
    colorLi.classList.add(color[index]);
  }
}

createBoxColors(4);

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

// ========================== Create Class Selected ===================================

const blackBox = document.querySelector('.firstBox');
blackBox.classList.add('selected');

// ========================== Check Class Selected ===================================



// colorLi.classList.add = 'firstBox';
// Cores das caixas
