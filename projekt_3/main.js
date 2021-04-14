// rozwiązanie

const button = document.querySelector("button");
const li = document.querySelectorAll("li");
let size = 10;



// forEach version
button.addEventListener("click", function () {
   li.forEach(function (element) {
      element.style.display = "block";
      element.style.fontSize = size + "px";
   })
   size += 1;
})