'use strict';

// Primitives: Copy by Value
let message = 'Hello!';
let phrase = message;

phrase = 'World!';

console.log('message :>> ', message);

// Objects: Copy by Reference
let user = { name: 'John' };

let admin = user; // menyalin referensi

admin.name = 'Pete'; // diubah melalui referensi "admin"

console.log('user :>> ', user);

{
  let a = {};
  let b = a; // menyalin referensi

  console.log(a == b); // true
  console.log(a === b); // true
}

{
  let a = {};
  let b = {}; // dua objek independen

  console.log(a == b); // false
}

// Contoh: Cloning Objek dengan Loop:
{
  let user = {
    name: 'John',
    age: 30,
  };

  let clone = {}; // objek kosong baru

  for (let key in user) {
    clone[key] = user[key];
  }

  clone.name = 'Pete'; // mengubah data dalam clone

  console.log(user.name); // John, objek asli tidak berubah
}

// Contoh: Cloning dengan Object.assign:
{
  let someObject = { name: 'Wick' };
  let user = { name: 'John', someObject };

  let clone = Object.assign({}, user);

  // console.log(clone.name); // John

  console.log('equal :>> ', user.someObject === clone.someObject); // true
}

// Menggabungkan Objek dengan Object.assign:
{
  let user = { name: 'John' };

  let permissions1 = { canView: true };
  let permissions2 = { canEdit: true };

  Object.assign(user, permissions1, permissions2);

  console.log(user.name); // John
  console.log(user.canView); // true
  console.log(user.canEdit); // true
}

// Jika properti dengan nama yang sama sudah ada, Object.assign akan menimpanya.
{
  let user = { name: 'John' };

  Object.assign(user, { name: 'Pete' });

  console.log(user.name); // Pete
}

// Nested Cloning
// Jika objek memiliki properti yang juga merupakan objek lain, kita perlu melakukan deep cloning agar objek-objek tersebut benar-benar terpisah.

// Contoh: Deep Cloning dengan structuredClone:
{
  let user = {
    name: 'John',
    sizes: {
      height: 182,
      width: 50,
    },
  };

  let clone = structuredClone(user);

  console.log(user.sizes === clone.sizes); // false, objek berbeda
}
