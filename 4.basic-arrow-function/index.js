'use strict';

// const sum = function () {
//   return a + b;
// };

const sum = (a, b) => a + b;

console.log(sum(1, 2)); // 3

// jauh lebih cepat
let age = 18;

let welcome =
  age < 18 ? () => console.log('Hello!') : () => console.log('Greetings!');

welcome();

{
  let sum = (a, b) => {
    // kurung kurawal membuka fungsi multiline
    let result = a + b;
    console.log(result);
    return result; // jika kita menggunakan kurung kurawal, maka kita memerlukan "return" eksplisit
  };

  console.log(sum(1, 2)); // 3
}

function ask(question, yes, no) {
  if (true) yes(); // Menggunakan true sebagai simulasi jawaban "Yes"
  else no();
}

ask(
  'Do you agree?',
  () => console.log('You agreed.'), // anonymous arrow function
  () => console.log('You canceled the execution.') // anonymous arrow function
);
