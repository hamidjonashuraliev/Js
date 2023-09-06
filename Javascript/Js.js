// " use strict";
// // const number = 10;

// // console.log(number);

// let maxSpeed = 15
// // console.log(maxSpeed);                      
// // console.log('4'+4);


// // alert('hello world')
// confirm("sizi yoshiz 30mi")


// for loop
// first way
// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }


// let answers = []
// let questions = [
//     "What is your name",
//     "What is your phone",
//     "How old are you"
// ]

// for (let i = 0; i < questions.length; i++) {
// answers[i] = prompt (questions[i])
// }
//     console.log(answers);

// second way
// let i = 0;
// do {
//     console.log(i);
//     i++
// }while(i <= 10)


// let answers = []
// let questions = [
//     "What is your name",
//     "What is your phone",
//     "How old are you"
// ]

// let i = 0; 
// do { answers[i] = prompt (questions[i])
//     console.log(answers);
//     i++
// } while (i < questions.length )


// third way
// let i = 0
// while(i <= 10){
//     console.log(i);
//     i++
// }


// let answers = []
// let questions = [
//     "What is your name",
//     "What is your phone",
//     "How old are you"
// ]

// let i = 0 
// while(i < questions.length ) {
//     console.log(answers);
//     i++
// } 
// answers[i] = prompt (questions[i]);




// let answers = []
// let questions = [
//     "What is your name",
//     "What is your phone",
//     "How old are you"
// ]
// for (let i = 0; i < questions.length; i++) {
//     answers[i] = prompt (questions[i])
// }
// console.log(answers);

// if else

// let age = prompt ( 'Yoshingiz nechchida?')

// if(age <= 18) {
//     alert('Hali erta')
// } else if (age > 80) {
//     alert('uje kech')
// }else{
//     alert('Hush kelibsiz')
// }

// switch case
// let age = +prompt('Yoshingiz nechida ?')
// switch (age) {
//     case 18:
//         alert('Sizi yoshiz 18da')
//         break
//         case 50:
//             alert('Sizi yoshiz 50da')
//             break
//             default:
//                 alert('Sizi yoshiz nomalum')
// }


// function
//  function decloration
// function myFirstFunction(name) {
//     console.log(`Hi my name is ${name}`);
// }
// myFirstFunction('badboy')


// //  function expressin
// let myFunc = function () {
//     console.log('This function is expression');
// }
// myFunc()

// function myFirstApp(name, age) {
//     alert(`hi my name is $(name) and i am full-stack developer`)

//  function showSkills(){
//     let skills = ['Html', 'Css','Javascript']
//     for (let i = 0; i < skills.length; i++){
//         alert(`You have skills ${skills[i]}`)
//     }
// }
//  showSkills()

//  function checkAge() {
//  let age = prompt('Yoshingiz nechchida?')
// if(age > 18){
//     alert('Exactly data for learning IT')
// }else{
//     alert('Super data for learning IT')
// }

// }
// checkAge()
 

//  function calcPow(num) {
//     return num * num
//  }
//  console.log(calcPow(5));
// }
// myFirstApp('Badboy', 30)


// object
// const theif = {
//     age: 30, // number
//     jacet: 'black', //string
//     isLong: false, //boolean
// }; 
// console.log(theif);

//Array
// const colors = ["red", "black", "blue", 10, [], {}];
// console.log(colors[3]);

// Amaliyot uyga vazifa
// const numberOfSeries = prompt("Nechta serial ko'rdingiz?");
 
// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false,
// };
// const a = prompt("Oxirgi ko'rgan serialingiz?"),
// b = prompt("Nechchi baho berasiz?"),
// c = prompt("Oxirgi ko'rgan serialingiz?"),
// d = prompt("Nechchi baho berasiz?");
// seriesDB.series[a] = b;
// seriesDB.series[c] = d;

// console.log(seriesDB);

// Shartli operatorlar
// 1 if else
// const age = +prompt("How old are you?");

// if( age > 18) {
//     console.log("Welcome");
// } else {
//     console.log("No entry");
// }

// 2 if else if else

// const age = +prompt("How old are you?");
// if(age > 25 ) {
//     console.log("Horroe fils");
// } else if ( age > 18 && age < 25) {
// console.log("Boyevik films");
// } else {
//     console.log("Carton");
// }

// 3 ternary operator

// const age = +prompt("How old are you?");
// age > 25 ? console.log("Horroe films") : console.log("Carton");

//  swith case 

// const color = "green";
// switch (color) {
//     case "red": 
//  console.log("Stop");        
//         break;
// case "green": 
// console.log("Goo");
// break;
// case "yellow":
// console.log("Slowly");
// break;
// default:
//     console.log("Traffic jam");
//         break;
// }
//  tsikl 
// while
//  let startNum = 1;
// //  First
//   while (startNum <= 10) {
//     console.log(startNum);
//     startNum++;
//   }

//   do while
// let startNum = 1;
// do {
//     console.log(startNum);
//     startNum++;
// } while (startNum <= 13); 

//  for loop
// let startNum = 1;
// for(let i = 1; i <= 9; i++) {
//     console.log(i);
// }


// let Num = 11;
// for(let i = 1; i <= 5; i++) {
//     console.log(Num);
//     Num++;
// }

//  contiune   // break
// for(let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         // break
//         continue;;
//     }
//     console.log(i);
// }


// Amaliyot uyga vazifa 2
// const numberOfSeries = prompt("Nechta serial ko'rdingiz?");
 
// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false,
// };

// for (let i = 0; i < 2; i++){
//     const a = prompt("Oxirgi ko'rgan serialingiz?"),
// b = prompt("Nechchi baho berasiz?");

// if (a != null && b != null && a  != "" && b != "") {
//     seriesDB.series[a] = b;
//     console.log('done');
// } else {
//     console.log('error');
//     i--;
//  }
// }
// if (seriesDB.count < 5) {
//     console.log("Kam serial ko'ribsiz");
// } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//     console.log("Siz classik tomoshabin ekansiz");
// } else if (seriesDB.count >= 10) {
//     console.log("Siz serialchi zvezda ekansiz");
// } else {
// console.log("Error");
// }
// console.log(seriesDB);




// Function ES6
// console.log("Open modal");
// function calc(a, b) {
// console.log(a+b);
// }
// calc(10,5);
// calc(9, 10)


//  function decloration 
// const  sumOfAandB = calc(10, 5);
// console.log(sumOfAandB);
// function calc(a, b) {
// return a+b;    
// }

//  function exression


// const logger = function () {
//     console.log("Hello world");
// };
// logger();

//  arrow function

// const calc = (a, b) => a + b;
// console.log(calc(10, 5));

// Method Property
// String property
// const user = "badboy";
// console.log(user.length);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// const user = "badboy";
// console.log(user[3]);

//  Method
//   toUpperCase
// const user = "badboy";
// console.log(user.toUpperCase());
// console.log(user);


// const greeting = "Hello World";
// console.log(greeting.indexOf("W"));

// const greeting = "Hello World";
// console.log(greeting.slice(2, 7)); 

// const greeting = "Hello World";
// console.log(greeting.substring(6, 11));

// const greeting = "Hello World";
// console.log(greeting.substr(6, 3));

// // Number
// // round
// const num = 8.8 ;
//  console.log(Math.round(num));

//  const borderWidth = "15.8px";
//  console.log(parseInt(borderWidth));

//  const borderWidth = "15.8px";
//  console.log(parseFloat(borderWidth));


// Amaliyot uyga vazifa 3
// let numberOfSeries;
//  function startApp() {
//  numberOfSeries = prompt("Nechta serial ko'rdingiz?", "");
//  while(numberOfSeries == "" ||
//   numberOfSeries == null ||
//    isNaN(numberOfSeries) 
//    ) {
//   numberOfSeries = prompt("Nechta serial ko'rdingiz?", "");
//  }
//  }

//  startApp();
// const seriesDB = {
//     count: numberOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false,
// };

// for (let i = 0; i < 2; i++){
//     const a = prompt("Oxirgi ko'rgan serialingiz?"),
// b = prompt("Nechchi baho berasiz?");

// if (a != null && b != null && a  != "" && b != "") {
//     seriesDB.series[a] = b;
//     console.log('done');
// } else {
//     console.log('error');
//     i--;
//  }
// }
// if (seriesDB.count < 5) {
//     console.log("Kam serial ko'ribsiz");
// } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
//     console.log("Siz classik tomoshabin ekansiz");
// } else if (seriesDB.count >= 10) {
//     console.log("Siz serialchi zvezda ekansiz");
// } else {
// console.log("Error");
// }
// console.log(seriesDB);


// OOP obektga yunaltirilgan dasturlash

// const firstName  = "badboy"
// const str  = new String(firstName)
// console.log(firstName);
// console.log(str);

// const car = {
//     motor: "X",
//     color: 'red',
//     isAirbag: true,
//     isSpeed: function () {
//         console.log(320);
//     },
// }

// const gm = {
//     isAirbag: false,
// }

// // Object.setPrototypeOf(gm, car)
// const bmw = Object.create(car)

// console.log(bmw);


// dynamic  typing
// to number 
// 1)
// console.log(typeof Number ('5'));

// // 2)
// console.log(typeof +'7');

// // 3)
// console.log(typeof  parseInt('22'));

// //  to boolean
// // 0, "", null, undefined, NN = har doim false 
// let age = 0
// if (age) {
//     console.log('g');
// }
// age =  20
// if (age) {
//     console.log('g');
// }

// console.log(typeof Boolean ('5'));

// console.log(typeof !! '6');


// DOM bilan ishlash


class Wallet {
    //states
    owner;
    amount;
    currency;
    
    
    //constructor
    constructor(ism, summa, valyuta) {
      this.owner = ism;
      this.amount = summa;
      this.currency = valyuta;
    }
    
    //methods
    checkBalance() {
  console.log('Hi ${this.owner}, your balance: ${this.amount} ${this.currency{');
    }
    
    deposit(money) {
      this.amount = this.amount + money;
    }
  }
  
  
  const myPocket = new Wallet('david', 1000, 'usd');
  myPocket.checkBalance();