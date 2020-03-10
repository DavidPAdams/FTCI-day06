//Exercise 1
//calculating gratuity

let billAmount = 113.56;

//Use function assignment syntax to avoid hoisting
let gratuity = function(bill){
  return bill * 0.2;
};

// let gratuity = (bill) => {
//   return bill * 0.2;
// };

let withTotalGrat = function(amount){
  let tip = gratuity(amount);
  let total = amount + tip;
  return total;
};

console.log("Your total including gratuity is: $" + withTotalGrat(billAmount).toFixed(2));






