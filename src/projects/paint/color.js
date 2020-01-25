/* 
  Canvas Painting App with vanilla JavaScript (no JQuery).
  Author: Vincent Moore
*/

//set canvas context
const canvas = document.querySelector('#renderCanvas'),
      context = canvas.getContext('2d');

//canvas settings
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//context methods
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;
context.globalCompositeOperation = 'addition';

//variables
let isDrawing = false,
    lastX = 0,
    lastY = 0,
    hue = 0,
    direction = true;

//events listeners
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  e.preventDefault();
});

canvas.addEventListener('mouseup', (e) => {
  isDrawing = false;
  e.preventDefault();
});

canvas.addEventListener('mouseout', (e) => {
  isDrawing = false;
  e.preventDefault();
});

//draw function
function draw(e) {
  if(!isDrawing) {
    return 
  } 

  context.strokeStyle = `hsl(${hue}, 100%, 60%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;

  if(hue > 359) {
    hue = 0;
  }

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }

}

//Clear Canvas
const refresh = document.querySelector('#reload');
refresh.addEventListener('click', reloadPage);

function reloadPage() {
  location.reload();
}

//Fade content area in and out
const content = document.querySelector('#content');

canvas.addEventListener('mousedown', fadeContentOut);
canvas.addEventListener('mouseup', fadeContentIn);

function fadeContentOut(e) {
  e.preventDefault();
  let opacity = 1;  // initial opacity
  let timer = setInterval(() => {
      if (opacity <= 0.1){
          clearInterval(timer);
      }
      content.style.opacity = opacity;
      opacity -= 0.1;
  }, 50);
}

function fadeContentIn(e) {
  e.preventDefault();
  let opacity = 0.1;  // initial opacity
  let timer = setInterval(function () {
      if (opacity >= 1){
          clearInterval(timer);
      }
      content.style.opacity = opacity;
      opacity += 0.1;
  }, 40);
}

