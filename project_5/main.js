// password message prject

const input = document.getElementById('pass');

const password = "user";
const message = "Please hire me! ;-) Have a good day!!!";
const div = document.querySelector('.message');
// const img = document.getElementById('please');

input.addEventListener('input', (e) => {
   // console.log(e.target.value);
   if (password === e.target.value) {
      div.textContent = message;
      document.getElementById('please').style.display = "inline-block";
      // const NewImg = document.createElement('NewImg');
      // NewImg.src = "/img/hireme.jpg";
      // document.getElementById('please').appendChild(NewImg);
   }
})