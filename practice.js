"use strict";
let x = 5;
const fname = "John Doe";
document.getElementById("demo").innerHTML = fname + " is " + x + " years old ";
const cars = ["Mercedes", "Volvo" , "Avalon"] ; //Arrays
const vehicle = {type:"Mercedes" , model:"5000" , color:"black"}; //Objects
let date = new Date(26-1-2025);
let y = 34000e5;
typeof y;
var z= 2;
let a = Math.pow(x,2);
x *= 2;
k = x;
x ++ ;
j = x;
//Min and Max
let text = "12345";
let min = Math.min(...text);
let max = Math.max(...text);
let $a = "Bolaji";
let $b = "Oluwaloseyi";
let $result = $a === $b;
//if
let age = 16;
let country = "USA";
let message = "You cannot drive!"
if (country == "USA"){
    if (age >=16){
        message = "You can drive!";
    }
}// else
let hour = new Date().getHours();
let greetings;
if (hour > 18) {
    greetings = "Good Evening";
} else {
     greetings = "Good Day!";
}
//else if
let $age = 20;
let test;
if ($age > 18){
     test = "Adult";
}else if ($age == 18) {
     test = "New Adult";
}else {
     test = "Minor";
}
//Switch
let day;
let $date = new Date().getDay();
 
switch ($date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    break;
  default:
    day = "I am so clueless";
}
//Switch with multiple cases together and default
let _text;
let _date = new Date().getDay();
switch (_date) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}
//Logical Assignment Operators
let v = "Portugal";
let p = v &&= "Brazil";
//Tenary
let bash = "MoneyMan";
let ace = bash? "Charisma" : "Battery";
//Null
let bname = null;
let btext = "missing";
let result = bname ?? btext;
const ncars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
//For Loop
let mtext = "";
for (let i = 0; i < ncars.length; i++) {
  mtext += ncars[i] + "<br>";
}
let $bage = 18;
let $bresult = $bage >= 18? "Adult": "Minor";
//For and IF with break
let trext = "";

badman: { for (let i = 0; i < 10; i++) {
  if (i === 3) { break badman; }
  trext += "The number is " + i + "<br>";
}
}
//Backticks with For Loop
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
document.getElementById("demo").innerHTML = html;
//Array
const hunt = ["Abott","Elementary","Series"];
//Convert Decimal to Binary
document.getElementById("demo").innerHTML = dec2bin(-5);
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}
//Convert Binary to Decimal
document.getElementById("demo").innerHTML = bin2dec(101);
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}
//How to loop an object
const person = {
  name: "Jacobson",
  age: 24,
  city: "Lagos"
};
const keys = Object.keys(person); // ["name", "age", "city"]

let _html = "";

      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value = person[key];
        _html += key + ": " + value + "<br>"; // add each variable to the string with a line break
      }
//Function,Loops and Conditions.
function findMax() {
  let max = -Infinity;
  for(let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
//Function Arrow

const _add = (a, b) =>  a + b;

//function arrow with this 
const $person = {
  name: "John",
  greet: function() {
    return  "Hello" + this.name;
  }
};

console.log(person.greet()); // "John"

// Create an Object
const pserson = {
  name: "John",
  age: 30,
  city: "New York"
};

// Create an Array from the Properties
const myArray = Object.values(pserson);

// Stringify the Array
let tsext = myArray.toString();

//using object entries
const fruits = {Bananas:300, Oranges:200, Apples:500}; 

let tnext = "";
for (let [fruit, amount] of Object.entries(fruits)) {
  tnext += fruit + ": " + amount + "<br>";
}

document.getElementById("demo").innerHTML = tnext;

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create two Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// Display age
document.getElementById("demo").innerHTML =
"My father is " + myFather.age + ". My mother is " + myMother.age + "."; 

function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create 2 Person objects
const _myFather = new Person("John", "Doe", 50, "blue");
const _myMother = new Person("Sally", "Rally", 48, "green");

// Add a Name Method
myMother.changeName = function (name) {
  this.lastName = name;
}

// Change Name
myMother.changeName("Doe");

// Display fullName
document.getElementById("demo").innerHTML =
"My mother's last name is " + myMother.lastName; 


let d = "";
 
for (let i in school.classes){
  d += "<h2>" + school.classes[i].className + "</h2>";

for (let j in school.classes[i].students){
  d += school.classes[i].students[j] + "<br>";}
}

//DATE OBjECT
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const $d = new Date().getDay();
let $day = days[$d];

//PROMISES

function myDisplayer(some) {
  document.getElementById("demo").innerHTML += some;
}

// Create a Promise
const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "King");
});

// Create another Promise
const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Queen");
});

// Run when Any promise fulfills
Promise.any([myPromise1, myPromise2])
.then((value) => {
  myDisplayer(value);
});

{
  // Create an Object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "NO", 
};

// Change a Property:
Object.defineProperty(person, "language", {
  value: "EN",
  writable : true,
  enumerable : true,
  configurable : true
});

// Enumerate Properties
let txt = "";
for (let x in person) {
  txt += person[x] + "<br>";
}
document.getElementById("demo").innerHTML = txt;
}


// Function to display some data
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

// Function to calculate a sum
function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}


ASYNC 
// Three functions to run in steps
function step1() {
  return Promise.resolve("A");
}
function step2(value) {
  return Promise.resolve(value + "B");
}
function step3(value) {
  return Promise.resolve(value + "C");
}

// Function to run the three functions in steps
async function run() {
  let v1 = await step1();
  let v2 = await step2(v1);
  let v3 = await step3(v2);
  myDisplayer(v3);
}

//PROXY AND METADATA
const user = { name: "Jan", age: 40 };

// Wrap Object in a Proxy
const proxy = new Proxy(user, {
  // Use a set tap
  set(target, property, value) {
    // Log changes
    log(property + ": " + value);
    // Safe forwarding
    return Reflect.set(target, property, value);
  }
});

// Function for logging messages
function log(message) {
  const time = new Date().toLocaleTimeString();
  document.getElementById("demo").innerHTML += "[" + time + "] " + message + "<br>";
}

// Change Properties
proxy.name = "John";
proxy.age = 45;
proxy.name = "Paul";



//AJAX
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "demo_get.asp");
  xhttp.send();
}

//add ?t= to the end of the url and add + Math.random() to prevent caching

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "demo_get.asp?t=" + Math.random());
  xhttp.send();
}

//when using xmlhttprequest to send a message with GET
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford");
  xhttp.send();
}
//POST
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("POST", "demo_post2.asp");
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("fname=Henry&lname=Ford");
}


//CHARTS
const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
      legend: {display:true},
      title: {
        display: true,
        text: "World Wine Production 2018",
        font: {size:16}
      }
    }
  }
});