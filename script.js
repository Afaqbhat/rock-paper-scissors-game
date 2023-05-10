const mainContext=document.querySelector('.main-context');
const secondaryContext=document.querySelector('.secondary-context');
const decision=document.querySelector('.decision h2');
const scoreboard=document.querySelector('.scoreboard');
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modalContent");
const openModal = document.querySelector(".openModal");
const closeModal = document.querySelector(".closeModal");

const loserSound = new Audio('./sounds/loser.mp3');
const winnerSound= new Audio('./sounds/winner.mp3')

let score=0;

//user choice function
function userPicked(hand){

    //hiding the main one
    mainContext.style.display='none';

    //displaying the secondary one
    secondaryContext.style.display='flex';

    //setting user choice

    document.getElementById('userchoice').src="./images/"+hand+".png "
    
    //calling computerchoice func
    const comhand=computerPicked();
    
    //calling finalResult func
    gameResult(hand,comhand)
}

//computer choice function

    function computerPicked(){
        const choices=['Rock','Paper','Scissors'];
        const randomNumber=Math.floor(Math.random()*choices.length);
        const computerChoice=choices[randomNumber];
    
        //setting computer choice
        
        document.getElementById('computerchoice').src="./images/"+computerChoice+".png";
        return computerChoice
    }


//game decision function
function gameResult(userHand,computerHand){
    console.log(userHand,computerHand)
    switch(userHand + computerHand){
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            decision.innerText="You Win"
            score++;
           winnerSound.play();
            scoreboard.style.backgroundColor='lightgreen';
            break;  
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            decision.innerText="You Lose"
            score--;
            loserSound.play();
            scoreboard.style.backgroundColor='red';
            break;   
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            decision.innerText="Draw"
            break;               
    }
     
    //updating the score
    const updateScore=document.querySelector('.score');
    updateScore.innerText=score;

    //start new game
    document.querySelector('.newGame').addEventListener('click',()=>{
        //displaying the main one
        mainContext.style.display='flex';


         //hiding the secondaryone
    secondaryContext.style.display='none';
    
    //change the bg of scorecard to default
    scoreboard.style.backgroundColor='white'

    //stop the audio
    winnerSound.pause()
    })

}

openModal.addEventListener("click", () => {
    modal.style.display = "block";
    modalContent.style.top = 0;
  })
  
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  })
  window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    })

