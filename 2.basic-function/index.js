'use strict';

// Function Declaration
{
  function showMessage() {
    console.log('Hello everyone!');
  }

  showMessage(); // Memanggil fungsi
  showMessage(); // Memanggil fungsi lagi

  // daripada begini
  console.log('Hello everyone!');
  console.log('Hello everyone!');
}

// Local Variables
// Variabel yang dideklarasikan di dalam fungsi hanya terlihat di dalam fungsi tersebut. Ini disebut variabel lokal.
{
  function showMessage() {
    let message = "Hello, I'm JavaScript!"; // Variabel lokal
    console.log(message);
  }

  showMessage(); // Menampilkan "Hello, I'm JavaScript!"
  console.log(message); // Error! Variabel hanya terlihat di dalam fungsi
}

// Outer Variables
// Fungsi dapat mengakses variabel luar juga, yang disebut variabel global.
{
  let userName = 'John';

  function showMessage() {
    let message = 'Hello, ' + userName; // Mengakses variabel global
    console.log(message);
  }

  showMessage(); // Menampilkan "Hello, John"
}

// Fungsi memiliki akses penuh ke variabel luar dan dapat mengubahnya juga.
{
  let userName = 'John';

  function showMessage() {
    userName = 'Bob'; // Mengubah variabel global
    let message = 'Hello, ' + userName;
    console.log(message);
  }

  console.log(userName); // John, sebelum pemanggilan fungsi
  showMessage();
  console.log(userName); // Bob, setelah pemanggilan fungsi
}

// Jika ada variabel dengan nama yang sama di dalam fungsi, variabel tersebut akan menutupi (shadow) variabel luar.
{
  let userName = 'John';

  function showMessage() {
    let userName = 'Bob'; // Deklarasi variabel lokal
    let message = 'Hello, ' + userName;
    console.log(message); // Menampilkan "Hello, Bob"
  }

  showMessage();
  console.log(userName); // John, tidak berubah
}

// Parameters
// Kita dapat pass data ke fungsi menggunakan parameter. Parameter adalah variabel yang dideklarasikan dalam tanda kurung pada deklarasi fungsi.
{
  function showMessage(from, text) {
    // Parameter: from, text
    console.log(from + ': ' + text);
  }

  showMessage('Ann', 'Hello!'); // Menampilkan "Ann: Hello!"
  showMessage('Ann', "What's up?"); // Menampilkan "Ann: What's up?"
}

// Default Values
// Jika sebuah fungsi dipanggil tanpa argumen, nilai parameter akan menjadi undefined. Kita dapat menetapkan nilai default untuk parameter menggunakan tanda =.
{
  function showMessage(from, text = 'no text given') {
    console.log(from + ': ' + text);
  }

  showMessage('Ann'); // Menampilkan "Ann: no text given"
}

// Returning a Value
// Sebuah fungsi dapat mengembalikan nilai ke kode yang memanggilnya menggunakan direktif return.
{
  function sum(a, b) {
    return a + b;
  }

  let result = sum(1, 2);
  console.log(result); // Menampilkan 3

  let result2 = sum(4, 5, 6);
  console.log(result2); // Menampilkan 9

  // Jika function tidak mereturn value
  function logging() {
    console.log('Hello');
  }

  // by default, function akan mereturn undefined jika tidak ada return value
  console.log(logging());
}

// Direktif return dapat diletakkan di mana saja dalam fungsi. Ketika eksekusi mencapai return, fungsi berhenti, dan nilai dikembalikan ke kode pemanggil.
{
  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }

    console.log('This line will never be executed');
  }

  let age = 17;

  if (checkAge(age)) {
    console.log('Access granted');
  } else {
    console.log('Access denied');
  }
}

function doSomething(status) {
  if (!status) return;

  // ... tidak dijalankan
}

// We can call a function from another function
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function showPrimes(n) {
  for (let i = 2; i <= n; i++) {
    if (!isPrime(i)) continue;
    console.log(i); // Menampilkan angka prima
  }
}

showPrimes(10); // Ini akan mencetak angka 2
