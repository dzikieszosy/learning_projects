const check = function () {
   const number = document.getElementById('field').value;
   // console.log(number);
   if (number > 0) {
      document.getElementById('result').innerHTML = "liczba dodatnia";
   } else if (number < 0) {
      document.getElementById('result').innerHTML = "liczba ujemna";
   } else if (number == "") {
      document.getElementById('result').innerHTML = "wpisz coś!";
   } else if (number == "0") {
      document.getElementById('result').innerHTML = "zero";
   } else {
      document.getElementById('result').innerHTML = 'To nie jest liczba! You know nothing Jon S.<br><img src="nothing.jpg">';
   }

}