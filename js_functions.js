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
let playerOne = {
  name: "Hansel",
  hand: "",
  wins: 0
};

let playerTwo = {
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
  } else if((onePlayer.hand==='rock' && twoPlayer.hand==='scissors') || (onePlayer.hand==='paper' && twoPlayer.hand==='rock') || (onePlayer.hand==='scissors' && twoPlayer.hand==='paper')){
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
playGame(player1, player2, 5);

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


