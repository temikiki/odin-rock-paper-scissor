let computer;
player = prompt("rock, paper, scissor, pick one:");
getcomputerchoice();


function getcomputerchoice(){
    computerchoice = Math.floor(Math.random() * 3) + 1;
    
    switch(computerchoice){
        case 1:
            computer = "rock";
            break;
        case 2:
            computer = "paper"
            break;
        case 3:
            computer = "scissor"
    }
}




console.log("computer's choice:" + computer);
console.log("palyer's choice:" + player)

function gamerules(){
    if (computer == player){
        console.log("Draw");
    }
    else if (computer == "rock" && player == "scissor"){
        console.log("computer wins, player loses")
    }
    else if (computer == "scissor" && player == "paper"){
        console.log("computer wins, player loses")
    }
    else if (computer == "paper" && player == "rock"){
        console.log("computer wins, player loses")
    }
    else if (player == "rock" && computer == "scissor"){
        console.log("player wins, computer loses")
    }
    else if (player == "paper" && computer == "rock"){
        console.log("player wins, computer loses")
    }
    else if (player == "scissor" && computer == "paper "){
        console.log("player wins, computer loses")
    }
}
gamerules();
//console.log("hello")