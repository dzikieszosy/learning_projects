const removeTask = (e) => {
   // console.log(event.target.textContent); //pobieranie tekstu z poszczególnych li
   // e.target.parentNode.remove(); // usuwanie poszczególnych li za pomocą przycisku (parentNode)
   e.target.parentNode.style.textDecoration = "line-through"; // przekreślenie elementu parentNode
   e.target.remove(); // wywala przycisk "usuń"
}

document.querySelectorAll('li button').forEach(item => item.addEventListener('click', removeTask)) // nasłuchiwanie na wszystkie button w li...