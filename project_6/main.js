// random child name

const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Jagienka", "Dobrawa", "Daria", "Asia", "Kira", "Marysia", "Anastazja"];
const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", "Na 100% twierdzę", "Jestem pewien"]

const nameGenerator = () => {
   const index = Math.floor(Math.random() * names.length);
   const prefixIndex = Math.floor(Math.random() * prefixs.length);
   div.innerHTML = `${prefixs[prefixIndex]}, że najlepsze będzie imię <strong>${names[index]}</strong>`;
}

btn.addEventListener('click', nameGenerator)