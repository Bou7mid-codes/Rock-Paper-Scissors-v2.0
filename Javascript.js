let choice = '';    // choice variable has to be declared here to be used as a global variable
    
function result(){
  function cpuTurn(){
    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    if (randomNumber <= 33){
      return 'Rock';
    } else if (randomNumber >= 66){
      return 'Scissors';
    } else {
      return 'Paper'
    }
  }
  let cpuChoice = cpuTurn();
  
  function ann(){
    let annWin = `You chose ${choice}, and computer chose ${cpuChoice}, you win!`;
    let annLose = `You chose ${choice}, and computer chose ${cpuChoice}, you lose!`;
    let annTie = `You chose ${choice}, and computer chose ${cpuChoice} , it\'s a tie!`;

    if (choice === 'Rock' && cpuChoice === 'Rock' || 
    choice === 'Paper' && cpuChoice === 'Paper' ||
    choice === 'Scissors' && cpuChoice === 'Scissors'){
      alert(annTie);
    } else if (choice === 'Rock' && cpuChoice === 'Paper' ||
    choice === 'Paper' && cpuChoice === 'Scissors' ||
    choice === 'Scissors' && cpuChoice === 'Rock'){
      alert(annLose);
    } else {
      alert(annWin);
    }
  }
  ann();
}