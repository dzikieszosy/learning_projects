// password message prject

const input = document.getElementById('pass');

const password = "user";
const message = "Please hire me! ;-) Have a good day!!!";
const div = document.querySelector('.message');

input.addEventListener('input', function (e) {
   // console.log(e.target.value);
   if (password === this.value) {
      div.textContent = message;
      document.getElementById('please').style.display = "inline-block";
   } else {
      div.textContent = "";
      document.getElementById('please').style.display = "none";
   }
})

input.addEventListener('focus', (e) => {
   e.target.classList.add('active');

})
input.addEventListener('blur', (e) => {
   e.target.classList.remove('active');

})