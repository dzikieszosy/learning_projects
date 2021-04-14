let size = 10;
let orderElement = 1;

const init = () => {
   const btn = document.createElement('button');
   const btnReset = document.createElement('button');
   btn.textContent = "Dodaj 10 elementów listy";
   btnReset.textContent = "Usuń liste";
   btn.style.fontSize = "20px";
   btnReset.style.fontSize = "20px";
   document.body.appendChild(btn);
   document.body.appendChild(btnReset);
   const ul = document.createElement('ul');
   ul.style.listStyle = "none";
   document.body.appendChild(ul);
   btn.addEventListener("click", createLiElement);
   btnReset.addEventListener("click", cleanList);
}

const createLiElement = () => {
   for (let i = 1; i < 11; i++) {
      const li = document.createElement('li');
      li.textContent = `Element nr ${orderElement++}`;
      li.style.fontSize = `${size++}px`
      document.querySelector('ul').appendChild(li);
   }
}

const cleanList = () => {
   document.querySelector('ul').textContent = "";
   orderElement = 1;
   size = 10;
}

init()