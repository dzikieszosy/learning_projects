// add square
const square = document.createElement('div');
document.body.appendChild(square);

let grow = true;

let size = 50;
// add style
square.style.width = size + "px";
square.style.height = size + "px";

// listener
window.addEventListener("scroll", function () {
   if (grow == true) {
      size += 10;
      square.style.width = size + "px";
      square.style.height = size + "px";
   } else {
      size -= 10;
      square.style.width = size + "px";
      square.style.height = size + "px";
   }
   if (size >= window.innerWidth / 2) {
      grow = false;
   } else if (size < 50) {
      grow = true;
   }
})