class Letter//create a class called letter
{
  constructor(myChar, guessed)//give it some attributes
  {
    this.myChar = myChar;//this is the letter for this "letter"
    this.guessed = guessed;//has it been guessed yet?
  }
  guessMe(guess)//is this the right letter?
  {
    if(guess.toLowerCase() == this.myChar.toLowerCase())
    {
      	this.guessed = 1;//if so, we'll set "guessed" to true
      	return(true);
    }
    else//this is not the letter you're looking for
    {
    	return(false);
    }
  }
  showMe()//display the character - if it's not guessed, show an underscore
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

module.exports = {//make myself available to other code
  Letter: Letter
}