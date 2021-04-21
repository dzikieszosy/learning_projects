// drag and drop square
const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = divX + "px"; //this way
div.style.top = `${divY}px`; // or this way

let drawActive = false;

div.addEventListener('mousedown', () => {
   div.style.backgroundColor = 'gray';
   drawActive = !drawActive;
})

div.addEventListener('mousemove', (e) => {
   if (drawActive) {
      divX = e.clientX;
      divY = e.clientY;
      div.style.left = `${divX-50}px`;
      div.style.top = `${divY-50}px`;
   }
})

div.addEventListener('mouseup', () => {
   div.style.backgroundColor = 'black';
   drawActive = !drawActive;
})