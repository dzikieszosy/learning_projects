const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "works!"]

const showMessage = (e) => {
   passwords.forEach((item, i) => {
      if (item.toLowerCase() === e.target.value.toLowerCase()) {
         // console.log('Victory');
         document.querySelector('div').textContent = messages[i];
      }
   })
}

input.addEventListener("input", showMessage)