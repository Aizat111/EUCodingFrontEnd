// console.log("Main bağlandı");

/*

------Değişkenler------
-number
-string
-boolean
-float
*/

let number1;
number1 = 5;
number1 = 15;
let word = "hello";
let isActive = 5 === "5";
let number2 = "10";

// console.log(number1 + number2);

// console.log(typeof number1);
// console.log(typeof number2);
// console.log(typeof isActive);

const name = "Aizat";
// console.log(name);

// console.log("PI Değeri: " + Math.PI);
// console.log("En büyük sayı : ", Math.max(2, 5, 7, 9, 3));

// ------- Diziler-Arrays------
let arr = [1, 2, false, 4, 5, "elma"];
arr.push(70);
// console.log(arr);
// let lastItem = arr.pop();
// console.log(lastItem);
// console.log(arr.shift());
// console.log(arr.length);
arr.unshift(4);
// console.log(arr);

// --------Objects

let user = {
  username: "Pinokio",
  password: "1234",
  shortname: function () {
    return `${this.username[0]} ${this.password}`;
  },
};

// console.log(user.shortname());
