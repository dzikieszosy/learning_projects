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

//losowanie komputera
function aiChoice() {
   return hands[Math.floor(Math.random() * 3)].dataset.option; //losowanie ręki ai
}

function checkResult(player, ai) {
   if (player === ai) {
      return 'draw';
   } else if ((player === "papier" && ai === "kamień") ||
      (player === "kamień" && ai === "nożyczki") ||
      (player === "nożyczki" && ai === "papier")) {
      return 'win';
   } else {
      return 'loss';
   }
}

//funkcja sterująca
function startGame() {
   if (!game.playerHand) return alert("Wybierz dłoń");

   game.aiHand = aiChoice()
   const gameResult = checkResult(game.playerHand, game.aiHand);
}



//nasłuchiwanie
hands.forEach(hand => hand.addEventListener('click', handSelection)); //pobiera jeden element z tablicy i uruchamia funkcje wybierania ręki

document.querySelector('.start').addEventListener('click', startGame);