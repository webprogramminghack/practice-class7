'use strict';

let arr1 = new Array();
let arr2 = [];

let fruits = ['Apple', 'Orange', 'Plum'];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum

// Kita bisa mengganti elemen:
fruits[2] = 'Pear'; // sekarang ["Apple", "Orange", "Pear"]

// Atau menambahkan elemen baru ke dalam array:
fruits[3] = 'Lemon'; // sekarang ["Apple", "Orange", "Pear", "Lemon"]

// Jumlah total elemen dalam array adalah panjangnya (length):
let fruits = ['Apple', 'Orange', 'Plum'];

console.log(fruits.length); // 3

// Array Dapat Menyimpan Elemen dari Tipe Data Apapun
// Array dapat menyimpan elemen dari berbagai tipe data, termasuk objek, boolean, bahkan fungsi:
let arr = [
  'Apple',
  { name: 'John' },
  true,
  function () {
    console.log('hello');
  },
];

console.log(arr[1].name); // John
arr[3](); // hello

// Mendapatkan Elemen Terakhir dengan “at”
// Salah satu cara untuk mendapatkan elemen terakhir dalam array adalah dengan menggunakan metode .at():
let fruits = ['Apple', 'Orange', 'Plum'];

console.log(fruits.at(-1)); // Plum

// pop/push, shift/unshift
// pop: Menghapus elemen terakhir dari array dan mengembalikannya.
{
  let fruits = ['Apple', 'Orange', 'Pear'];
  console.log(fruits.pop()); // "Pear"
  console.log(fruits); // ["Apple", "Orange"]
}

// push: Menambahkan elemen ke akhir array.let fruits = ["Apple", "Orange"];
{
  let fruits = ['Apple', 'Orange'];
  fruits.push('Pear');
  console.log(fruits); // ["Apple", "Orange", "Pear"]
}

// shift: Menghapus elemen pertama dari array dan mengembalikannya.
{
  let fruits = ['Apple', 'Orange', 'Pear'];
  console.log(fruits.shift()); // "Apple"
  console.log(fruits); // ["Orange", "Pear"]
}

// unshift: Menambahkan elemen di awal array.let fruits = ["Orange", "Pear"];
{
  fruits.unshift('Apple');
  console.log(fruits); // ["Apple", "Orange", "Pear"]
}

// Metode push dan unshift juga dapat menambahkan beberapa elemen sekaligus:
{
  let fruits = ['Apple'];
  fruits.push('Orange', 'Peach');
  fruits.unshift('Pineapple', 'Lemon');
  console.log(fruits); // ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
}

{
  let fruits = ['Apple', 'Orange', 'Pear'];

  for (let i = 0; i < fruits.length; i++) {
    console.log(arr[i]);
  }
}

{
  let fruits = ['Apple', 'Orange', 'Plum'];

  for (let fruit of fruits) {
    console.log(fruit);
  }
}
