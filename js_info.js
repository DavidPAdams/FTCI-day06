//Bad because it gets hoisted
function doSomething(arg1, arg2){
  //do stuff with args which become parameters
  return something; //'something' needs to be defined in the function
}

//Good way
let doSomething = function(arg1, arg2, arg3){
  //do stuff with args which become parameters
  return something; //'something' needs to be defined in the function
}

//Fancy way
let doSomething = (args) => {
  //do stuff with args which become parameters
  return something; //'something' needs to be defined in the function
}

doSomething(first, second);
someFunction();

let add = function(num1, num2){
  let sum = num1 + num2;
  return sum;
}

let add = function(num1=1, num2=1){
  return num1 + num2;
}

let total = add(2); // total = 3
console.log(total);

let add = function(){
  let sum = 0;
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  console.log(i); // undefined
  return sum;
}

console.log(sum); // undefined

add(1,2,3,4,5,6,7,8);
add(1,2,3,4,5);

var calculator = {
  add: function(n1, n2){
    return n1+n2;
  }
  subtract: function(n1, n2){
    return n1-n2;
  }
}

calculator.add(1,2); // 3
calculator.subtract(2,1); // 1

var calculator = [
  function(){ return something; },
  function(){ return somethingElse; }
]

calculator[0](); // (something)
calculator[1](); // (somethingElse)

var thing = 2;

// IIFE
// Immediatly Invoked Function Expression

(function(par1, par2){
  //some code to do stuff
})(arg1, arg2);


// scope chain
var city = "Atlanta";
var greet = function(){
  console.log("hello" + city);
}

greet(city); // hello Atlanta

// variable name conflict

var name = "David";
var greet = function(){
  var name = "Jacob";
  console.log(name); // Jacob
}

console.log(name); // David
greet(); // Jacob

// jQ

$("#id .cssClass elementTag").filter(function(){
  return this.innerHTML === "myElement";
});










