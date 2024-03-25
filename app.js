//var, function, and DOM
// Mini Project ==> Bill split application

function split() {
   let amount = document.getElementById('amount');
   let persons = document.getElementById('persons')
   let bill = amount.value / persons.value;
   document.getElementById('bill').innerText = bill;
}


