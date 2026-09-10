function GetComputerChoice(){
    let x=Math.random();
    let choice='aye';
    if(x>=0&&x<0.3){
        choice="stone";
    }

    else if(x>=0.3&&x<0.6){
        choice="paper";
    }

    else{
        choice="scissors";
    }
    return choice;
}
function GetHumanChoice(){
    let x= prompt("Enter A Choice :\n 1.Rock \n 2.Paper \n 3.Scissors ");
    switch(x){
        case'1':
        return "stone";
        break;
        case'2':
        return "paper";
        break;
        case'3':
        return "scissors";
        break;
    }

}
function playRound(Computer,cscore,Human,hscore){
    if(Computer=="stone"&&Human=="scissors"){
        alert("Haha! You LOSE!!! Rock beats Scissors");
        cscore++;
    }
    else if(Computer=="paper"&&Human=="stone"){
        alert("Haha! You LOSE!!! Paper beats Rock");
        cscore++;
    }
    else if(Computer=="scissors"&&Human=="paper"){
        alert("Haha! You LOSE!!! Scissors beats Paper");
        cscore++;
    }
    else if(Human=="stone"&&Computer=="scissors"){
        alert("What a fluke! You WIN!!! Rock beats Scissors");
        hscore++;
    }
    else if(Human=="scissors"&&Computer=="paper"){
        alert("What a fluke! You WIN!!! Scissors beats Paper");
        hscore++;
    }
    else if(Human=="paper"&&Computer=="stone"){
        alert("What a fluke ! You WIN!!! Paper beats Rock");
        hscore++;
    }
    else{
        alert("Fuck! That's a draw");
    }
    return {cscore, hscore};


}
function playGame(){
    let hscore=0;
    let cscore=0;
    let n=prompt("enter no. of rounds");
    for(let i=0;i<n;i++){
        let Computer=GetComputerChoice();
        let Human=GetHumanChoice();        
        let score=playRound(Computer,cscore,Human,hscore);
        cscore=score.cscore;
        hscore=score.hscore;
    }
    console.log("Human Score:");
    console.log(hscore);
    console.log("Computer Score:");
    console.log(cscore);
    if(cscore>hscore){
        console.log("Computer Wins");
    }
    else if(hscore>cscore){
        console.log("Human wins");
    }
    else{
        console.log("Draw)")
    }
}

playGame();
