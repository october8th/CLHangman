class Letter
{
  constructor(myChar, guessed)
  {
    this.myChar = myChar;
    this.guessed = guessed;
  }
  guessMe(guess)
  {
    if(guess.toLowerCase() == this.myChar.toLowerCase())
    {
      	this.guessed = 1;
      	return(true);
    }
    else
    {
    	return(false);
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
  Letter: Letter
}