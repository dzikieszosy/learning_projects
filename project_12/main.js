// pobranie elementów
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');
// funkcja usuwająca element
const removeTask = (e) => {
   // console.log(event.target.textContent); //pobieranie tekstu z poszczególnych li
   // e.target.parentNode.remove(); // usuwanie poszczególnych li za pomocą przycisku (parentNode)
   e.target.parentNode.style.textDecoration = "line-through"; // przekreślenie elementu parentNode
   e.target.remove(); // wywala przycisk "usuń"

}
//funkcja szukająca
const serchTask = (e) => {
   const serchText = e.target.value.toLowerCase();
   let tasks = [...liElements]; //zamiana na tablice
   tasks = tasks.filter(li => li.textContent.toLowerCase().includes(serchText));
   // console.log(tasks);
   ul.textContent = "";
   tasks.forEach(li => ul.appendChild(li));
}
////// TAKI TRENING FILTRA I F. MAP //////
// const arr = [34, 219, 109, 2934, 12, 10, 29];
// //filter
// const oddNumbers = arr.filter((number) => number % 2); //zwraca nieparzyste liczby
// const evenNumbers = arr.filter((number) => !(number % 2)); //zwraca parzyste liczby
// //map - zwraca nową tablice z wartościami
// const double = arr.map(number => number * 2); //zwraca tablice razy dwa
// const mapString = arr.map(number => number + " osób"); //zwraca tablice ze stringiem
// //forEach 
// arr.forEach((number, index) => arr[index] = number * 2); //przebudowanie tablicy tej którą mamy
/////////////////////////////////

document.querySelectorAll('li button').forEach(item => item.addEventListener('click', removeTask)) // nasłuchiwanie na wszystkie button w li
input.addEventListener('input', serchTask)