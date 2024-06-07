const choices = document.getElementsByClassName('choice');

  for(var i = 0; i < choices.length; i++) {
    (function(index) {
      choices[index].addEventListener("click", function() {
        const userChoice = this.value.toUpperCase();
        console.log(userChoice)
        const possibles = ['ROCK','SCISSOR','PAPER',];
        const randomKey = (Math.floor(Math.random() * possibles.length));
        const programChoice = possibles[randomKey];
        const result = compareResults(userChoice, programChoice);
        document.getElementById('result').innerHTML= '<p>' + result + '</p>';
      })
    })(i);
  }


function compareResults(userChoice, programChoice){
  let result = '';
  if (userChoice === programChoice){
    result = 'DRAW, computer Choice was ' + programChoice
    return result;
  }
  if(userChoice === 'ROCK'){
    if(programChoice === 'SCISSOR'){
      result = 'WIN!, computer Choice was ' + programChoice
    }else{
      result = 'LOST!, computer Choice was ' + programChoice
    }
    return result
  }
  if(userChoice === 'SCISSOR'){
    if(programChoice === 'PAPER'){
      result = 'WIN!, computer Choice was Paper'
    }else{
      result = 'LOST!, computer Choice was Rock'
    }
    return result
  }
  if(userChoice === 'PAPER'){
    if(programChoice === 'PAPER'){
      result = 'WIN!, computer Choice was Rock' 
    }else{
      result = 'LOST!, computer Choice was SCISSOR' 
    }
    return result
  }
}




