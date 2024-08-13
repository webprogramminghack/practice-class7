'use strict';

// Nama constructor function dimulai dengan huruf kapital.
// Constructor function dijalankan dengan operator new.
{
  function User(name) {
    this.name = name;
    this.isAdmin = false;
  }

  let user = new User('Jack');

  // console.log(user);

  let user2 = new User('John');

  // console.log(user2);
}

// Dengan kata lain constructor function adalah function yang digunakan sebagai blueprint untuk membuat objek baru.
// Dengan kata lain, new User(...) melakukan sesuatu seperti ini:
{
  function User(name) {
    // this = {};  (secara implisit)

    // menambahkan properti ke this
    this.name = name;
    this.isAdmin = false;

    // return this;  (secara implisit)
  }
}

// Kita juga dapat langsung menggunakannya seperti ini, meskipun kegunaannya sebagai blueprint jadi tidak terlalu terlihat:
{
  let user = new (function () {
    this.name = 'John';
    this.isAdmin = false;

    // ...kode lain untuk pembuatan user
  })();

  // console.log(user);
}

{
  function BigUser() {
    this.name = 'John';

    return { name: 'Godzilla' }; // <-- mengembalikan objek ini
  }

  // console.log(new BigUser().name); // Godzilla, mendapatkan objek tersebut
}

{
  function User(name) {
    this.name = name;

    this.sayHi = function () {
      console.log('My name is: ' + this.name);
    };
  }

  let john = new User('John');

  john.sayHi();
}
