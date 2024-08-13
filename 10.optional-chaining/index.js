'use strict';

let user = {}; // pengguna tanpa properti "address"

// console.log(user.address.street); // Error!
// console.log(user.address);

// solusi sebelum optional chaining
console.log(user.address ? user.address.street : undefined);
console.log(user.address && user.address.street);

// Pengenalan Optional Chaining ?.
// Dengan optional chaining, kita bisa menulis kode yang lebih bersih dan aman. Operator ?. menghentikan evaluasi jika nilai sebelum ?. adalah undefined atau null dan mengembalikan undefined.
console.log(user?.address?.street); // undefined (tidak ada error)

let key = 'firstName';

let user1 = {
  firstName: 'John',
};

let user2 = null;

console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined

delete user1?.name?.asdasd; // menghapus user.name.asdasd jika user.name ada
