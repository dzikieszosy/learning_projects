//keyUp and down project

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
   // if instruction

   // if (e.keyCode === 38 && red < 255) {
   //    // console.log('key up');
   //    red += 1;
   //    green += 1;
   //    blue += 1;
   //    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
   // } else if (e.keyCode === 40 && red >= 0) {
   //    // console.log('key down');
   //    red--;
   //    green--;
   //    blue--;
   //    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
   // }

   // switch instruction
   switch (e.keyCode) {
      case 38:
         document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red}, ${green < 255 ? ++green : green}, ${blue < 255 ? ++blue : blue})`;
         break;

      case 40:
         document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red}, ${green > 0 ? --green : green}, ${blue > 0 ? --blue : blue})`;
         break;
   }
}

window.addEventListener('keydown', changeColor)