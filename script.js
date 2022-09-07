/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
const scoresTotal={computerScore:0,playerScore:0}

const rpsChoice=['Rock','Paper','Scissor']

function getComputerChoice() {
    const computerChoice=Number(Math.floor(Math.random()*3))
    return rpsChoice[computerChoice]
}



// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  
let score;


  if(playerChoice==computerChoice){
    score=0
  }
  else if(playerChoice=="Rock" && computerChoice=="Scissor"){
    score=1
  }
  else if(playerChoice=="Paper" && computerChoice=="Rock"){
    score=1
  }
  else if(playerChoice=="Scissor" && computerChoice=="Paper"){
    score=1
  }
  else{
    score=-1
  }

  return score
}


// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1

  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  const resultDiv=document.getElementById('result')
  const handsDiv=document.getElementById('hands')
  const playerScoreDiv=document.getElementById('player-score')
  const computerScoreDiv=document.getElementById('computer-score')
  if (score==-1){
    resultDiv.innerText="You Lose!!"

  }
  else if(score==0){
    resultDiv.innerText="Its a Draw!!"

  }
  else{
    resultDiv.innerText="You Win!!"

  }
  handsDiv.innerText=`You:${playerChoice} vs Computer:${computerChoice}`
  playerScoreDiv.innerText=`${scoresTotal['playerScore']} is your score`
  computerScoreDiv.innerText=`${scoresTotal['computerScore']} is Computer Score`
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice=getComputerChoice()
  console.log(playerChoice,computerChoice)
  const score=getResult(playerChoice,computerChoice)
  console.log(score)
  
  if (score==1){
    scoresTotal['playerScore']+=1
  }
  else if(score==-1){
    scoresTotal['computerScore']+=1
  }
  else{
    scoresTotal['computerScore']+=0
  }
  showResult(score,playerChoice,computerChoice)



}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    // use querySelector to select all RPS Buttons
    let rpsButtons = document.querySelectorAll('.rpsButton')
  
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    
    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
  
    rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
    const endGameButton=document.getElementById('endGameButton')
    endGameButton.onclick=()=>endGame(scoresTotal)

  }
// ** endGame function clears all the text on the DOM **
function endGame(scoresTotal) {
  scoresTotal['playerScore']=0
  scoresTotal['computerScore']=0

  const resultDiv=document.getElementById('result')
  const handsDiv=document.getElementById('hands')
  const playerScoreDiv=document.getElementById('player-score')
  const computerScoreDiv=document.getElementById('computer-score')
   
  handsDiv.innerText=``
  playerScoreDiv.innerText=``
  computerScoreDiv.innerText=``
  resultDiv.innerText=``
  
}

playGame()
