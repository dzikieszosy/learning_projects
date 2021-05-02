const gameSummary = {
   numbers: 0,
   wins: 0,
   losses: 0,
   draws: 0,
}

const game = {
   playerHand: "",
   aiHand: ""
}

const hands = [...document.querySelectorAll('.select img')]; //[... coś] - operator rest zamienia na tablice

// wybór ręki
function handSelection() {
   game.playerHand = this.dataset.option;
   hands.forEach(hand => hand.style.boxShadow = ''); // pusty boxshadow
   this.style.boxShadow = '0 0 0 4px yellow'; // wybieranie box shadow
}

//funkcja sterująca
function startGame() {
   if (game.playerHand === "") {
      alert("Wybierz dłoń");
   }
}

hands.forEach(hand => hand.addEventListener('click', handSelection)); //pobiera jeden element z tablicy i uruchamia funkcje wybierania ręki

document.querySelector('.start').addEventListener('click', startGame);