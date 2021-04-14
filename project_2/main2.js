// add div
const div = document.createElement('div');
document.body.appendChild(div);

let grow = true;

let width = 100;
let height = 10;
// add style
div.style.width = width + "%";
div.style.height = height + "px";

// listener
window.addEventListener("scroll", function () {
   if (grow == true) {
      height += 10;
      div.style.width = width + "%";
      div.style.height = height + "px";
   } else {
      height -= 10;
      div.style.width = width + "%";
      div.style.height = height + "px";
   }
   if (height >= window.innerHeight / 2) {
      grow = false;
      div.style.backgroundColor = "red";
   } else if (height < 50) {
      grow = true;
      div.style.backgroundColor = "green";
   }
})