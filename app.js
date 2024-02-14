let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock ,paper, scissors
    const options =["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }
};

const drawGame= () => {
    //console.log("Game was Draw");
    msg.innerText="Game was Draw. Play Again.";
    msg.style.backgroundColor="#081b31";
};

const playGame=(userChoice)=>{
    //console.log("User Choice = ",userChoice);
    //generate computer choice
    let compChoice=genCompChoice();
    //console.log("Computer Choice = ",compChoice);

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissors , paper
            userWin= compChoice===("paper")?false:true ;
        }
        else if(userChoice==="paper"){
            //rock , scissors
            userWin= compChoice===("scissors")?false:true ;
        }
        else{
            //rock,paper
            userWin= compChoice===("rock")?false:true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});