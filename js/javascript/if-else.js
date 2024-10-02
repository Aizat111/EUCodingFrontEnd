// let number = 6;

// if (number == 5) {
//   console.log("sayı beştir");
// } else {
//   console.log("sayı beş değildir");
// }

// sayı çift mi tek mi?
// let point = prompt("Bir sayı giriniz...");
// console.log(typeof point);
// point = Number(point);

// if (number % 2 == 0) {
//   console.log("Sayı Çifttir");
// } else {
//   console.log("Sayı Tektir");
// }

// 10dan büyük ve çift ise doğru sayıyı girdiniz yazsın değilse yanlış sayı yazsın

// if (number > 10 && number % 2 == 0) console.log("Doğru sayı");
// else console.log("Yanlış sayı");

// 10dan büyük veya çift ise doğru sayıyı girdiniz yazsın değilse yanlış sayı yazsın
// if (number > 10 || number % 2 == 0) console.log("Doğru sayı");
// else console.log("Yanlış sayı");

// switch (true) {
//   case point >= 82:
//     console.log("AA");
//     break;
//   case point >= 73:
//     console.log("BA");
//     break;
//   case point >= 65:
//     console.log("CC");
//     break;
//   default:
//     console.log("Çok düşük puan aldın");
// }

let username = prompt("Kullanıcı adınızı giriniz...");
console.log(
  username.length > 0
    ? `Kullanıcı adınız ${username.length} karakterden oluşmaktadır`
    : "Kullanıcı adı girilmedi"
);
