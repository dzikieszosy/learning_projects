const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum, saepe neque reprehenderit modi sed quos consectetur accusantium, perferendis perspiciatis aperiam magnam soluta voluptatum obcaecati earum voluptas similique illo nihil!';

let indexText = 0;
const time = 100;

const addLetter = () => {
   spnText.textContent += txt[indexText];
   indexText++;
   if (indexText == txt.length) clearInterval(indexTyping); //clearinterval resetuje działanie interwału
}

const cursorAnimation = () => {
   spnCursor.classList.toggle('active') //.przełącza klasy z css
}

const indexTyping = setInterval(addLetter, time); //setInterval zwraca index...
setInterval(cursorAnimation, 400);