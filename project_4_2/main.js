// document.body.addEventListener("mousemove", (event) => {
//    // console.log(event.clientX, event.clientY);
//    document.querySelector('h1').textContent = `${event.clientX}, ${event.clientY}`; // visible page or whole page
//    // document.querySelector('h1').textContent = `${event.pageX}, ${event.pageY}`;

//    document.body.style.backgroundColor = `rgb(${event.clientX/3},${event.clientY/2},${event.clientX/event.clientY*20})`;
// })

// second universal method

document.body.addEventListener('click', function (e) {
   const x = e.clientX + 1;
   const y = e.clientY + 1;
   const width = window.innerWidth;
   const height = window.innerHeight;

   const red = x / width * 100;
   const green = y / height * 100;
   const blue = ((x / width * 100) + (y / height * 100)) / 2;

   document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
   console.log(red, green, blue);

})