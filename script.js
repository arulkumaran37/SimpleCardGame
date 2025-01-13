
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
console.log(cards)

let player = {
    wins: "You won",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.wins + ": $" + player.chips

//startGame()
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
//renderGame()
function renderGame() {
    cardEl.textContent = "Card: " //+cards[0] +" + "+ cards[1]
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ', ';
        
    }
    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}
//To get random card values 1-11
function getRandomCard(){
    let randnum =  Math.floor( Math.random() * 13) + 1
    if (randnum > 10){
        return 10
    }else if(randnum === 1){
        return 11
    }else
      return randnum;
}
//newCardButton
function newCard(){
    if(isAlive === true && hasBlackJack === false){    
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }}





