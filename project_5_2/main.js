// map method

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "works!"];
const div = document.querySelector('div');

const LCPasswords = passwords.map(password => password.toLowerCase());

const showMessage = (e) => {
   const textInput = e.target.value.toLowerCase();

   for (let i = 0; i < LCPasswords.length; i++) {
      if (textInput === LCPasswords[i]) {
         div.innerHTML = messages[i];
      }
   }
}

input.addEventListener("input", showMessage)


// first basic method

// const input = document.querySelector("input");
// const passwords = ['jedEN', 'DwA'];
// const messages = ["super", "works!"]

// passwords.forEach((password, index) => {
//    passwords[index] = password.toLowerCase();
//    console.log(password);
// })

// const showMessage = (e) => {
//    const input = e.target.value.toLowerCase();
//    passwords.forEach((password, i) => {
//       if (password === input) {
//          // console.log('Victory');
//          document.querySelector('div').textContent = messages[i];
//       }
//    })
// }

// input.addEventListener("input", showMessage)