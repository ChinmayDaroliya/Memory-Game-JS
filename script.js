const cardArray = [
    {
        name: 'fries',
        image: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png'
    },
    {
        name: 'hot dog',
        image: 'images/hotdog.png'
    },
    {
        name: 'icecream',
        image: 'images/icecream.png'
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    },
    {
        name: 'fries',
        image: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        image: 'images/cheeseburger.png'
    },
    {
        name: 'hot dog',
        image: 'images/hotdog.png'
    },
    {
        name: 'icecream',
        image: 'images/icecream.png'
    },
    {
        name: 'milkshake',
        image: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'images/pizza.png'
    }
]

cardArray.sort(()=> 0.5 - Math.random())

const resultDisplay = document.querySelector('#result')
const gridDisplay = document.querySelector('#grid')
let cardChosen = []
let cardChosenIds = []
let cardsWon = []

function createBoard(){
    for(let i = 0 ; i<cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute("src","images/blank.png")
        card.setAttribute("data-id",i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardChosenIds[0]
    const optionTwoId = cardChosenIds[1]

    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("YOU CLICKED THE SAME IMAGE")
    }
    if(cardChosen[0] === cardChosen[1]){
        alert(' you found a match')
        cards[optionOneId].setAttribute("src","images/white.png")
        cards[optionTwoId].setAttribute("src","images/white.png")
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardChosen)
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert("Sorry Try Again")
    }
    cardChosen = []
    cardChosenIds = []
    resultDisplay.innerHTML = cardsWon.length

    if(cardsWon.length === cardArray.length/2){
        resultDisplay.innerHTML = 'Congratulations You Found Them All'
    }
}

function flipCard(){
    let cardId =  this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].image)
    if(cardChosen.length ===2){
        setTimeout(checkMatch,500)
    }
}