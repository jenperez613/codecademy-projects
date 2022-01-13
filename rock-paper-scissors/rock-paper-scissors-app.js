const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput==='paper'|| userInput==='scissors' ||
    userInput==='bomb'){
      return userInput;
    } else { 
      console.log('Error, please choose rock, paper, or scissors');
    }
    }
    const getComputerChoice = () => {
      const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
      return 'rock';
      break;
      case 1:
      return 'paper';
      break;
      case 2:
      return 'scissors';
      break;
    };
    }
    const determineWinner = (userChoice, computerChoice) => {
      if (userChoice === computerChoice){
        return 'tie';
      }
      if (userChoice === 'bomb'){
        return 'Cheat code: bomb. You win!';
      }
      if (userChoice ==='rock') {
        if(computerChoice === 'paper') {
          return 'Computer wins!';
            }else {
              return 'Human wins!';
            }
          }
        if (userChoice === 'paper'){
          if (computerChoice === 'scissors'){
            return 'Computer wins!';
          } else {
            return 'Human wins!';
          }
        }  
        
        if (userChoice === 'scissors'){
          if (computerChoice === 'rock'){
            return 'Computer wins!';
              }else {
                return 'Human wins!';
              }
            }
    }
     const playGame = () => {
       const userChoice = getUserChoice('bomb');
       const computerChoice = getComputerChoice();
       console.log('You threw ' + userChoice);
       console.log('Computer threw ' + computerChoice);
       console.log(determineWinner(userChoice, computerChoice));
    
     };
    playGame();