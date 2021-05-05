// simple counter

// const add = (start = 0) => {
//    let number = start;
//    return () => {
//       number++;
//       document.body.textContent = `Aktualny stan licznika kliknięć to: ${number}`;
//    }
// }
// const counter = add();
// document.addEventListener('click', counter);

// verify age

const user = (name = "", age) => {
   let userName = name;
   let userAge = age;

   function showName() {
      console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić piwo' : 'Nie możesz kupić piwa'}`);
   }
   return showName;
}

const mieszko = user("Mieszko", 20);
const jagienka = user("Jagienka", 17);

mieszko();
jagienka();