const options = ['nie', 'tak', 'nie ma możlwości', 'dupa jesteś', 'ok', 'może być...'];

const addOption = (e) => {
   e.preventDefault();
   const input = document.querySelector('input');
   options.push(input.value);
   alert(`Dodałeś opcję: ${input.value}`);
   input.value = "";
}

const resetOptions = (e) => {
   e.preventDefault();
   options.length = 0;
}

const showAdvice = () => {
   const index = Math.floor(Math.random() * options.length);
   document.querySelector('h1').textContent = options[index];
}

const showOptions = () => {
   alert(options.join(' --- --- '));
}
document.querySelector('.ad').addEventListener('click', addOption);
document.querySelector('.showAdvice').addEventListener('click', showAdvice);
document.querySelector('.clean').addEventListener('click', resetOptions);
document.querySelector('.showOptions').addEventListener('click', showOptions);