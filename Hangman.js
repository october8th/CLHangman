//make a word variable available from the word class
var {Word} = require('./word');
//make a random star wars name avaialable
var names = require('starwars-names');
//use inquirer to prompt for input and give output
var inquirer = require("inquirer");
//creat a placeholder for a random word
var MyWord;

function initGame()//set up a new word for a new game
{

    MyWord = new Word(names.random(),8);//create the word with 8 chances
	MyWord.createLetters();//fill the word with letter class objects
	MyWord.displayMe();//show the word with underscores for chars
	console.log("Can you guess the name of this star wars character?")
    nextTurn();//allow the player to take a turn
}

function newGame()//do you want to play again?
{
	inquirer.prompt([
    {
      type: "confirm",
      message: "Would you like to play again?:",
      name: "confirm",
      default: true
    }
    ])
  	.then(answers => 
  	{
    	if(answers.confirm == true)//if the response is positive then yes
    	{
    		initGame();//initialize a new word
    	}
    	else//otherwise quit
    	{
    		return;
    	}
    });
}

    


function nextTurn()//take a turn
{
    inquirer.prompt([//grab a letter of input
    {
      type: 'input',
      name: 'yourGuess',
      message: 'Guess a letter.  Type a character: ',
      validate: function(guess)
      {
      	if(guess.length > 1)//did they type more than one?
      	{
      		return "One character please";
      	}
      	else if(MyWord.myGuesses.indexOf(guess) >= 0)//did they already guess this char?
      	{
      		return "You already guessed this";
      	}
      	else if(guess.match(/[A-Z|a-z]/i))//is it even a char?
      	{
	        return true;//ok we're cool
      	}
        else//we are totally not cool
          return "Please type a character - no numbers or punctuation.";
      }
    }
  ])
  .then(answers => {
    if(MyWord.guessLetter(answers.yourGuess) > 0)//if the letter you guessed is in there
    {
    	console.log("You chose wisely");//you did a good job way to go
    	if(MyWord.didIWin())//did you win yet?
    	{
    		console.log("You won!");//you did! go you!
    		newGame();//want to play again?
    	}
    	else
    	{
    		console.log("You have " + MyWord.guessesLeft + " guesses left.");//how many guesses are left?
    		console.log("Letters you have guessed: " + MyWord.myGuesses);//what letters have you already guessed?
    		nextTurn();//start a new turn with a new guess
    	}
    }
    else
    {
    	console.log("You chose poorly");// you blew it.  bad choice.
    	MyWord.guessesLeft -= 1;// you have one less choice now
    	if(MyWord.guessesLeft == 0)//was that your last one?
    	{
    		console.log("You have lost");//it was your last.  you lose
    		newGame();//want to play again?
    	}
    	else//you have more chances
    	{
    		console.log("You have " + MyWord.guessesLeft + " guesses left.");//how many more do you have?
    		console.log("Letters you have guessed: " + MyWord.myGuesses);//what letters have you already guessed?
    		nextTurn();//start a new turn with a new guess
    	}
    }
  });
}

initGame();//new game new player new everything.