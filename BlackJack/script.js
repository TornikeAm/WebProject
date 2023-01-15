let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message= "";

let messageEl = document.getElementById("message-el");
let card = document.getElementById('cards');
let sumEl = document.getElementById("sum-el");

let hasblack = document.getElementById('blackjackWin');
let getPlayer = document.getElementById("player")

let player ={
    name: "Player",
    chips: 145

}
getPlayer.textContent = player.name + " " + player.chips + "$"

function hasBlack(){
    if (hasBlackjack ===true){
        hasblack.textContent = "Congrats, You have Won A blackJack!"
    }
}

function start(){
    isAlive=true;
    hasblack.textContent="";
    let firstCard= getRandomCard();
    let secondCard =getRandomCard();
    cards = [firstCard,secondCard];
    sum=firstCard + secondCard
    renderGame();
}


function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    if (randomNumber > 10){
        return 10
    }else if (randomNumber ===1){
        return 11

    }else{
        return randomNumber
    }

}


function renderGame(){
    sumEl.textContent = "Sum " + sum
    card.textContent = "Cards : ";
    for (let i =0; i < cards.length; i++){
        card.textContent += cards[i] + " "
    }
    // console.log(cards);
    if (sum < 21){
        message = "Do u want to a new card?"
    }
    else if(sum === 21){
        message = "you have a blackjack";
        hasBlackjack = true
        hasBlack();
    }
    else{
        message="u lost";
        isAlive=false;
    }
    messageEl.textContent = message
}   


function newCard(){
    // debugger;
    let rame = 'ager';
    console.log("creating new card");
    let card = getRandomCard();
    sum+= card;
    cards.push(card);
    renderGame();
}

