const div = document.querySelector('#container');
const cleaner = document.querySelector('#clean');
const randomColor = document.querySelector('#random');
const gridSize = document.querySelector('#size');
let randomColorBoolean = false;


function deleteGrid() {
  while (div.firstElementChild) {
    div.removeChild(div.lastElementChild);
  }
}

function randomRGB() {
  let RGBColors= [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256),Math.floor(Math.random() * 255)]
  return RGBColors
}

gridSize.addEventListener('click', () => { 
  let newSize = prompt('Digite um número menor ou igual a 100 para definir o tamanho NxN do grid');
  if (parseInt(newSize) <= 100 && parseInt(newSize) > 0) {
    deleteGrid();
    setDefaultGridSize(parseInt(newSize));
  }
})

function setDefaultGridSize (defaultSize = 8) {
  const divXY = 960 / defaultSize;
  for (let i = 0; i < (defaultSize*defaultSize); i++) {
  const newDiv = document.createElement('div');
  newDiv.setAttribute('style', `width: ${divXY}px; height: ${divXY}px;`)
  div.appendChild(newDiv);
}
}
    
div.addEventListener('touchmove', (e) => {
       var touch = e.touches[0];
       // get the DOM element
       var checkbox = document.elementFromPoint(touch.clientX, touch.clientY);
       // make sure an element was found - some areas on the page may have no elements
        if (checkbox && div.contains(checkbox)) {
       // interact with the DOM element
            if (randomColorBoolean) {
               let RGBarray = randomRGB();
               checkbox.style.backgroundColor = `rgb(${RGBarray[0]}, ${RGBarray[1]}, ${RGBarray[2]})`;
            } else {
                checkbox.style.backgroundColor = 'grey';
            }
        }
})

div.addEventListener('click', (e) => {
  if (randomColorBoolean) {
      let RGBarray = randomRGB();
      e.target.style.backgroundColor = `rgb(${RGBarray[0]}, ${RGBarray[1]}, ${RGBarray[2]})`;
  } else {
  e.target.style.backgroundColor = 'grey';
  }
})

randomColor.addEventListener('click', () => {
  randomColorBoolean = !randomColorBoolean;
  (randomColorBoolean) ? randomColor.textContent = 'Default color' : randomColor.textContent = 'Random color';
})

cleaner.addEventListener('click', cleanGrid)

function cleanGrid () {
  for (let element of div.children) {
    element.style.backgroundColor = '';
  }
}
setDefaultGridSize();
