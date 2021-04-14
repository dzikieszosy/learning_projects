// rozwiązanie

const button = document.querySelector("button");
const li = document.querySelectorAll("li");
let size = 10;



// forEach version
// button.addEventListener("click", function () {
//    li.forEach(function (element) {
//       element.style.display = "block";
//       element.style.fontSize = size + "px";
//    })
//    size += 1;
// })

// for version

button.addEventListener("click", function () {
   for (let i = 0; i < li.length; i++) {
      li[i].style.display = "block";
      li[i].style.fontSize = size + "px";
   }
   size += 1;
})