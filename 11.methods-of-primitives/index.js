'use strict';

let john = {
  name: 'John',
  sayHi: function () {
    console.log('Hi buddy!');
  },
};

john.sayHi(); // Hi buddy!

let str = 'Hello';

console.log(str.toUpperCase()); // HELLO

// Bagaimana ini bisa terjadi?

// Primitives tetap menjadi nilai sederhana.
// JavaScript mengizinkan kita untuk mengakses method dan properti pada string, number, boolean
// Untuk membuat ini berfungsi, JavaScript secara otomatis membuat "object wrapper" sementara untuk memberikan fungsionalitas tambahan, kemudian menghancurkannya setelah digunakan.

// Yang sebenarnya terjadi adalah:

// String str adalah primitive. Ketika kita mencoba mengakses properti atau method, JavaScript membuat object sementara yang mengemas nilai string tersebut.
// Method toUpperCase() dijalankan dan mengembalikan string baru dalam huruf kapital.
// Object sementara dihancurkan, meninggalkan nilai primitive str sendiri.

let n = 1.23456;

console.log(n.toFixed(2)); // 1.23

// Meskipun dimungkinkan untuk secara eksplisit membuat objek pembungkus (wrapper objects) untuk primitives menggunakan new Number(1) atau new Boolean(false), hal ini sangat tidak dianjurkan karena dapat menyebabkan hasil yang tidak terduga.
console.log(typeof 0); // "number"
console.log(typeof new Number(0)); // "object"!

let zero = new Number(0);

if (zero) {
  // zero adalah truthy karena merupakan objek
  console.log('zero is truthy!?!');
}
