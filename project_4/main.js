document.body.addEventListener("mousemove", (event) => {
   // console.log(event.clientX, event.clientY);
   document.querySelector('h1').textContent = `${event.clientX}, ${event.clientY}`; // visible page or whole page
   // document.querySelector('h1').textContent = `${event.pageX}, ${event.pageY}`;

})