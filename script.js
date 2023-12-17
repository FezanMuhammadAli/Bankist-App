"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = ["a", "b", "c", "d", "e", "f"];
// console.log(arr.slice());
// console.log(arr.slice(-4, -1));
// console.log(arr);

// console.log(arr.splice(1, 4));
// console.log(arr);

// const arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// console.log(arr2);

// console.log(arr.join(" "));
// console.log(arr.concat(arr2));
// console.log(arr.indexOf("a"));

// const arrDum = [23, 11, 39];
// console.log(arrDum[0]);
// console.log(arrDum.at(0));
// console.log(arrDum.at(arrDum.length - 1));
// console.log(arrDum[arrDum.length - 1]);
// console.log(arrDum.slice(-1)[0]);
// console.log("Fezan"[0]);
// console.log("Fezan".at(0));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for iteration
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}.`);
//   } else {
//     console.log(`You withdraw ${movement}.`);
//   }
// }

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`movement ${i + 1}: You deposited ${movement}.`);
//   } else {
//     console.log(`movement ${i + 1}: You withdraw ${movement}.`);
//   }
// }

// forEach iteration
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}.`);
//   } else {
//     console.log(`You withdraw ${movement}.`);
//   }
// });

// movements.forEach(function (movement, index) {
//   if (movement > 0) {
//     console.log(`movement ${index + 1}: You deposited ${movement}.`);
//   } else {
//     console.log(`movement ${index + 1}: You withdraw ${movement}.`);
//   }
// });

// FOR EACH WITH SETS AND mAPS

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(key + ":", value);
// });

// const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value) {
//   console.log(value);
// });

// set has no indexes or keys. they only having the values
// for (const [index, value] of currenciesUnique.entries()) {
//   console.log(`at ${index}: ${value}`);
// }

// CODING CHALLANGE
const juilaData1 = [3, 5, 2, 12, 7];
const kateData1 = [4, 1, 15, 8, 3];
const correctJuliaData1 = juilaData1.slice(1, 3);
const finalData1 = correctJuliaData1.concat(kateData1);

console.log(finalData1);

finalData1.forEach(function (value, index) {
  if (value >= 5) {
    console.log(
      `Dog number ${index + 1} is an adult, and is ${value} years old.`
    );
  } else {
    console.log(`Dog number ${index + 1} is still a puppy 🐶.`);
  }
  // console.log(
  //   `Dog number ${index + 1} is ${
  //     value >= 5
  //       ? ` an adult , and is ${value} years old.`
  //       : ` is still a puppy 🐶.`
  //   }`
  // );
});
