document.body.addEventListener("mousemove", (event) => {
   // console.log(event.clientX, event.clientY);
   document.querySelector('h1').textContent = `${event.clientX}, ${event.clientY}`; // visible page or whole page
   // document.querySelector('h1').textContent = `${event.pageX}, ${event.pageY}`;

   document.body.style.backgroundColor = `rgb(${event.clientX/3},${event.clientY/2},${event.clientX/event.clientY*20})`;
})