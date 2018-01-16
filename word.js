var {Letter} = require('./letter');
class Word
{
  constructor(myWord, guessesLeft)
  {
    this.myWord = myWord;
    this.guessesLeft = guessesLeft;
    this.myGuesses = [];
  }
  createLetters()
  {
    for (var i = 0; i < this.myWord.length; i++) 
    {
    	if(this.myWord[i].match(/[A-Z|a-z]/i))
    	{
    		var MyLetter = new Letter(this.myWord[i],0);
    		this.letters.push(MyLetter);
    	}
    	else
    	{
    		var MyLetter = new Letter(this.myWord[i],1);
    		this.letters.push(MyLetter);
    	}
    }
  }
  displayMe()
  {
    if(this.guessed == 1)
    {
      	return this.myChar;
    }
    else
    {
      	return "_";
    }
  }
}

module.exports = {
  Word: Word
}