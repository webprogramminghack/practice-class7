'use strict';

{
  let user = {
    name: 'John',
    age: 30,
  };

  user.sayHi = function () {
    // console.log('Hello!');
  };

  user.sayHi(); // Output: Hello!
}

{
  let user = {
    name: 'John',
    age: 30,
    sayHi() {
      // console.log('Hello!');
    },
  };

  user.sayHi(); // Output: Hello!
}

// The this Keyword
// Methods often need to access the data stored within the object they belong to. This is where the this keyword comes into play.

// The value of this is the object "before the dot" – the object that the method is being called on.
{
  let user = {
    name: 'John',
    age: 30,
    sayHi() {
      // console.log(this.name); // 'this' refers to the user object
    },
  };

  user.sayHi(); // Output: John
}

// Why Use this?
// Using this is more reliable than referencing the object directly by name, especially when objects might be assigned to different variables.

{
  let user = {
    name: 'John',
    age: 30,
    sayHi() {
      // console.log(this.name);
    },
  };

  let admin = user;
  user = null; // The original object reference is removed

  admin.sayHi(); // Output: John
}

// "this" is Not Bound
// In JavaScript, this behaves differently than in many other programming languages. It is determined at runtime based on how the function is called, not where it was defined.
{
  let user = { name: 'John' };
  let admin = { name: 'Admin' };

  function sayHi() {
    // console.log(this.name);
  }

  // The value of this is determined by the object "before the dot" at the time the method is called.
  user.sayHi = sayHi;
  admin.sayHi = sayHi;

  user.sayHi(); // Output: John
  admin.sayHi(); // Output: Admin
}

// Calling Without an Object: this == undefined
// If a function is called without an object context, this will be undefined in strict mode:
{
  function sayHi() {
    // console.log(this);
  }

  sayHi(); // Output: undefinedS
}

// Arrow Functions and this
// Arrow functions do not have their own this. Instead, they capture the this value from their enclosing context.
{
  let user = {
    firstName: 'Ilya',
    sayHi() {
      // let this;

      let arrow = function () {
        // console.log(this);
      }.bind(this);

      arrow();
    },
  };

  user.sayHi(); // Output: Ilya
}

{
  let user = {
    firstName: 'Ilya',
    sayHi() {
      // let this;

      let arrow = () => {
        // arrow function doesn't have its own "this"
        // console.log(this);
      };

      arrow();
    },
  };

  // user.sayHi();
}

{
  let user = {
    firstName: 'Ilya',
    // ini akan menjadi undefined karena arrow function tidak memiliki this sendiri
    sayHi: () => console.log(this.firstName),
  };

  user.sayHi(); // Output: undefined
}
