let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let reset = document.querySelector("#reset");



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const genCompChoice = () => {
    const options = ["stone", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3); 
    return options[randomIdx];
};

const playGame = (userChoice) => {
    console.log("User choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else if(userChoice === "scissors"){
            userWin = compChoice === "stone" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Draw" ;
    msg.style.backgroundColor = "brown" ;
     msg.style.color = "white";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("you win");
        msg.innerText = `You Win as ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";

        userScore++;
        userScorePara.innerText = userScore;



    }  else {
        console.log("you lose");
        msg.innerText =  `You Lose as ${compChoice} beats ${userChoice}` ;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";

        compScore++;
        compScorePara.innerText = compScore;
    } 
   
}

reset.addEventListener( "click" ,() => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = 0;
    compScorePara.innerText = 0;
    console.log("reset clicked");
    msg.innerText = "Play Your Move";
    msg.style.backgroundColor ="aquamarine";
    msg.style.color = "blueviolet";

})





