const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "works!"]

passwords.forEach((password, index) => {
   passwords[index] = password.toLowerCase();
   console.log(password);
})

const showMessage = (e) => {
   const input = e.target.value.toLowerCase();
   passwords.forEach((password, i) => {
      if (password === input) {
         // console.log('Victory');
         document.querySelector('div').textContent = messages[i];
      }
   })
}

input.addEventListener("input", showMessage)