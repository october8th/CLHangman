//i will need letters to put into this object.  
//make them available as a class with this require
var {Letter} = require('./letter');
class Word//define the class
{
  constructor(myWord, guessesLeft)//create some attributes
  {
    this.myWord = myWord;//the word string
    this.guessesLeft = guessesLeft;//the number of guesses left
    this.myGuesses = [];//characters i've guessed
    this.displayWord = [];//display the characters with _ if not guessed
    this.letters = [];//letter objects
  }
  displayMe()//show the word with _ for unguessed letters
  {
    this.displayWord = [];//blank it out first
    console.log("\n");//display a blank line
    for (var i = 0; i < this.letters.length; i++) 
    {//grab each letter and if it's not guessed, show a _
      this.displayWord.push(this.letters[i].showMe());
    }
    console.log(this.displayWord.join(" "));//make it pretty
    console.log("\n");//print it to console and send a blank line
  }
  guessLetter(aGuessedLetter)//a guessed letter from the user
  {//add it to the list
    this.myGuesses.push(aGuessedLetter);
    var goodGuess = 0;//was it a good guess though?
    for (var i = 0; i < this.letters.length; i++) 
    {//add up all the times we matched
      if(this.letters[i].guessMe(aGuessedLetter))
      {
        goodGuess += 1;
      }
    }
    this.displayMe();//display all the guessed letters
    return goodGuess;//return if there was a match or not
  }
}

Word.prototype.didIWin = function() //did we guess all the letters?
{
  var winning = 0;
  for (var i = 0; i < this.letters.length; i++) 
  {
    if(this.letters[i].guessed == 1)
    {
      winning += 1;
    }
  }//does the number of correct letters = the number of letters?
  return (winning == this.letters.length);
}

Word.prototype.createLetters = function() 
{//add the letters to the word.  we do this one time
  for (var i = 0; i < this.myWord.length; i++) 
    {//if it is a character we'll put it in as unguessed
      if(this.myWord[i].match(/[A-Z|a-z]/i))
      {
        var MyLetter = new Letter(this.myWord[i],0);
        this.letters.push(MyLetter);
      }
      else
      {//if it's not A-z, we'll just show it and set it to guessed
        var MyLetter = new Letter(this.myWord[i],1);
        this.letters.push(MyLetter);
      }
    }
};

module.exports = {//make myself available to other code
  Word: Word
}