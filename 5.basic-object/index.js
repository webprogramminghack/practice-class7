'use strict';

// let user = new Object(); // "object constructor" syntax
// let user = {}; // "object literal" syntax

let user = {
  name: 'John', // dengan kunci "name" menyimpan nilai "John"
  age: 30, // dengan kunci "age" menyimpan nilai 30
};

// Properti objek dapat diakses menggunakan dot notation:
console.log(user.name); // John
console.log(user.age); // 30

// Nilai properti dapat berupa tipe data apa saja, termasuk boolean:
user.isAdmin = true;

// Untuk menghapus properti, kita dapat menggunakan operator delete:
delete user.age;

// console.log(user);

// Nama properti yang terdiri dari lebih dari satu kata harus diapit dengan tanda kutip:
{
  let user = {
    name: 'John',
    age: 30,
    'likes birds': true, // nama properti multi-kata harus diapit tanda kutip
  };

  console.log(user['likes birds']);

  // Kita juga dapat menggunakan variabel untuk mengakses properti:
  let key = 'likes birds';
  user[key] = false;

  console.log(user['likes birds']);
}

// Computed Properties
// Kita dapat menggunakan square brackets dalam object literal saat membuat objek. Ini disebut computed properties.
{
  const fruit = 'apple';

  const bag = {
    // #{$fruit}: 5 di scss
    [fruit]: 5,
  };

  console.log('bag :>> ', bag);
}

// Ketika properti memiliki nama yang sama dengan variabel, kita dapat menggunakan shorthand:

{
  function makeUser(name, age) {
    return {
      name, // sama dengan name: name
      age, // sama dengan age: age
    };
  }

  let user = makeUser('John', 30);
  console.log('user :>> ', user);
}

// tipe lain selain string secara otomatis diubah menjadi string saat digunakan sebagai kunci properti:
{
  let obj = {
    0: 'test', // sama dengan "0": "test"
  };

  console.log(obj['0']); // test
}

// Operator "in" dan Pengujian Eksistensi Properti
// JavaScript memungkinkan kita untuk mengakses properti apa pun dari objek, bahkan jika properti tersebut tidak ada. Jika properti tidak ada, hasilnya adalah undefined. Kita dapat menggunakan operator "in" untuk memeriksa apakah properti ada dalam objek.
{
  let user = { name: 'John', age: 30 };

  // kalau di scss pakai map-has-key, di javascript seperti berikut
  console.log('age' in user); // true
  console.log('blabla' in user); // false
}

// Looping dengan "for..in"
// Untuk iterasi atas semua kunci dalam objek, kita dapat menggunakan loop for..in:
{
  let user = {
    name: 'John',
    age: 30,
    isAdmin: true,
  };

  for (let key in user) {
    console.log(key); // name, age, isAdmin
    // console.log(user[key]); // John, 30, true
  }
}

// Objek dalam JavaScript diurutkan dengan cara khusus: properti integer diurutkan secara ascending, sementara properti non-integer muncul sesuai urutan pembuatan.
{
  let codes = {
    49: 'Germany',
    41: 'Switzerland',
    44: 'Great Britain',
    1: 'USA',
  };

  for (let code in codes) {
    console.log(code); // 1, 41, 44, 49
  }
}
