'use strict';

function sayHi() {
  console.log('Hello');
}

let sayHi = function () {
  console.log('Hello');
};

// function is a value
function sayHi() {
  console.log('Hello');
}

let func = sayHi; // (2) menyalin fungsi

func(); // Hello     // (3) menjalankan salinan (berfungsi!)
sayHi(); // Hello    // fungsi asli juga masih berfungsi

// contoh call back non-anonymous function
{
  function ask(question, yes, no) {
    if (true) yes(); // Menggunakan true sebagai simulasi jawaban "Yes"
    else no();
  }

  function showOk() {
    console.log('You agreed.');
  }

  function showCancel() {
    console.log('You canceled the execution.');
  }

  // Penggunaan: fungsi showOk, showCancel diteruskan sebagai argumen ke ask
  ask('Do you agree?', showOk, showCancel);
}

{
  function ask(question, yes, no) {
    if (true) yes(); // Menggunakan true sebagai simulasi jawaban "Yes"
    else no();
  }

  ask(
    'Do you agree?',
    function () {
      console.log('You agreed.');
    },
    function () {
      console.log('You canceled the execution.');
    }
  );

  ask('Do you agree?', showOk, showCancel);
}

{
  // Creation Phase (Compilation Phase):
  // Execution Phase:
  sayHi('John'); // Berfungsi, karena Function Declaration

  function sayHi(name) {
    console.log(`Hello, ${name}`);
  }
}

{
  sayHi('John'); // Error, karena Function Expression belum dibuat

  let sayHi = function (name) {
    console.log(`Hello, ${name}`);
  };
}
