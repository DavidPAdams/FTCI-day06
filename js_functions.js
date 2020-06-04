//Exercise 1
//calculating gratuity

let billAmount = 113.56;

//Use function assignment syntax to avoid hoisting
let gratuity = function(bill){
  return bill * 0.2;
};

//Another way to assign a function called 'arrow function'
// let gratuity = (bill) => {
//   return bill * 0.2;
// };

let withTotalGrat = function(amount){
  let tip = gratuity(amount);
  let total = amount + tip;
  return total;
};

console.log("Your total including gratuity is: $" + withTotalGrat(billAmount).toFixed(2));



//Exercise 2
//Rock Paper Scissors

//1.Define a hands array with the values 'rock', 'paper', and 'scissors'

let hands = ["Rock", "Paper", "Scissors"];

//2.Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
let getHand = function(){
  return hands[parseInt(Math.random()*10)%3];
};

//3.Define two objects for two players. Each player has name and getHand() properties
let player1 = {
  name: "Hansel",
  hand: "",
  wins: 0
};

let player2 = {
  name: "Gretel",
  hand: "",
  wins: 0
};

/*4.Define a function called playRound() that
      Takes two player objects as arguments
      Gets hands from each
      Determines the winner
      Logs the hands played and name of the winner.
      If it is a tie, log the hands played and "it's a tie".
      Returns the winner object (null if no winner)*/
let playRound = function(onePlayer, twoPlayer){
  onePlayer.hand = getHand();
  twoPlayer.hand = getHand();
  if(onePlayer.hand===twoPlayer.hand){
    console.log(`No winner, it is a tie with ${onePlayer.hand}`);
    return null;
  } else if((onePlayer.hand==='Rock' && twoPlayer.hand==='Scissors') || 
            (onePlayer.hand==='Paper' && twoPlayer.hand==='Rock') || 
            (onePlayer.hand==='Scissors' && twoPlayer.hand==='Paper')){
    onePlayer.wins += 1;
    console.log(`${onePlayer.name} wins with ${onePlayer.hand} over ${twoPlayer.name}\`s ${twoPlayer.hand}`);
    return onePlayer;
  } else {
    twoPlayer.wins += 1;
    console.log(`${twoPlayer.name} wins with ${twoPlayer.hand} over ${onePlayer.name}\`s ${onePlayer.hand}`);
    return twoPlayer;
  }
};

/*5.Define a function called playGame() that takes arguments player1, player2, and playUntil.
    Play rounds until one of the players wins playUntil hands
    When one player has won enough games, return the winning player object*/
let playGame = function(playerA, playerB, playUntil){
  while(playerA.wins < playUntil && playerB.wins < playUntil){
    playRound(playerA, playerB);
  }
  if(playerA.wins === playUntil){
    console.log(`\n${playerA.name} is victorious\n\n`);
    return playerA;
  } else {
    console.log(`\n${playerB.name} is victorious\n\n`);
    return playerB;
  }
};

//6.Play a game to 5 wins
// playGame(player1, player2, 5);

//Bonus questions
/*  Define a function called playTournament()
    Take 4 players and playUntil as arguments
    Play a game between the first two players, and the second two players
    Play a game between the winners of the first round.
    Announce the tournament winner's name "[name] is the world champion"*/
let player3 = {
  name: 'Jack', 
  hand: '', 
  wins: 0};
let player4 = {
  name: 'Jill', 
  hand: '', 
  wins: 0};
let playTournament = function(player1, player2, player3, player4, playUntil){
  let player12 = playGame(player1, player2, playUntil);
  let player34 = playGame(player3, player4, playUntil);
  player12.wins = 0;
  player34.wins = 0;
  let champion = playGame(player12, player34, playUntil);
  console.log(`${champion.name} is the world champion`);
}

playTournament(player1, player2, player3, player4, 5);




//Interactive RPS:
var hands = ['rock', 'paper', 'scissors'];
var player = "";
var playerWins = 0;
var computerWins = 0;
var playerChoice = "";
var computerChoice = "";

let winner = function(arg, choice){
  if(arg === "computer"){
    computerWins += 1;
    console.log("Too bad, so sad, "+capitalizeFirstLetter(arg)+"'s artifical intelligence wins with "+capitalizeFirstLetter(choice)+" over your "+capitalizeFirstLetter(playerChoice)+"!");
  } else {
    playerWins += 1;
    console.log("Good for you! Your "+capitalizeFirstLetter(choice)+" prevails over the Computer's "+capitalizeFirstLetter(computerChoice)+"!");
  }
}

let draw = function(){
  console.log("It's a draw, each with "+capitalizeFirstLetter(playerChoice)+". Try again.");
}

let capitalizeFirstLetter = function(str) {
  if(str.length > 0){
    var first = str.charAt(0).toUpperCase();
    return first + str.slice(1);
  } else {
    return str;
  }
}

player = prompt("Welcome player, please enter your name:", "John").toLowerCase();

alert("Nice to meet you "+capitalizeFirstLetter(player)+", let's see how you do with 'Rock, Paper, Scissors' against the computer's artificial intelligence!");

while(playerWins < 3 && computerWins < 3){
  playerChoice = prompt(capitalizeFirstLetter(player)+" enter your choice (Rock, Paper, or Scissors) below:").toLowerCase();
  computerChoice = hands[parseInt(Math.random()*hands.length) %3];
  switch(playerChoice){
    case "rock":
      if(computerChoice === "paper"){
        winner("computer", computerChoice);
      } else if(computerChoice === "scissors") {
        winner(player, playerChoice);
      } else {
        draw();
      }
      break;
    case "paper":
      if(computerChoice === "paper"){
        draw();
      } else if(computerChoice === "scissors"){
        winner("computer", computerChoice);
      } else {
        winner(player, playerChoice);
      }
      break;
    case "scissors":
      if(computerChoice === "paper"){
        winner(player, playerChoice);
      } else if(computerChoice === "scissors"){
        draw();
      } else {
        winner("computer", computerChoice);
      }
      break;
    default:
      break;
  }
}

if(playerWins > 2){
  console.log("Congratulations, "+capitalizeFirstLetter(player)+"! You totally owned the Computer's AI!! The final score is "+capitalizeFirstLetter(player)+" "+playerWins+" to Computer "+computerWins);
} else {
  console.log(capitalizeFirstLetter(player)+", what happened? You lost to random plays of the Computer. The final score is "+capitalizeFirstLetter(player)+" "+playerWins+" to Computer "+computerWins+". Here's a tissue.");
}



//Immediately Invoked Functional Expression (IIFE)
//an anonymous function that is immediately executed
(function(){
  //variables and stuff to do with them
})();


//Scope
let outer = function() {
  let x = 'x';
  let inner = function() {
    let y = 'y';
    console.log(x); //'x'
  }
  console.log(x); // 'x'
  console.log(y); // ReferenceError: y is not defined
}

//more scope
let landscape = function() {
  let result = "";

  let flat = function(size) {
    for (let count = 0; count < size; count++){
      result += "_";
    }
  };

  let mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++){
      result += "^";
    }
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());



