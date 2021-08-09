document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'camera',
            img: 'images/camera.png'
        },
        {
            name: 'camera',
            img: 'images/camera.png'
        },
        {
            name: 'flower',
            img: 'images/flower.png'
        },
        {
            name: 'flower',
            img: 'images/flower.png'
        },
        {
            name: 'folder',
            img: 'images/folder.png'
        },
        {
            name: 'folder',
            img: 'images/folder.png'
        },
        {
            name: 'greengrey',
            img: 'images/greengrey.png'
        },
        {
            name: 'greengrey',
            img: 'images/greengrey.png'
        },
        {
            name: 'paint',
            img: 'images/paint.png'
        },
        {
            name: 'paint',
            img: 'images/paint.png'
        },
        {
            name: 'person',
            img: 'images/person.png'
        },
        {
            name: 'person',
            img: 'images/person.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }



    // check for matches

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', 'images/blank.png')
          cards[optionTwoId].setAttribute('src', 'images/blank.png')
          alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
          alert('You found a match')
          cards[optionOneId].setAttribute('src', 'images/pictures.png')
          cards[optionTwoId].setAttribute('src', 'images/pictures.png')
          cards[optionOneId].removeEventListener('click', flipCard)
          cards[optionTwoId].removeEventListener('click', flipCard) 
          cardsWon.push(cardsChosen)
        } else {
          cards[optionOneId].setAttribute('src', 'images/blank.png')
          cards[optionTwoId].setAttribute('src', 'images/blank.png')
          alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if  (cardsWon.length === cardArray.length/2) {
          resultDisplay.textContent = 'Congratulations! You found them all!'
        }
      }

    //flip your card

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length ===2) {
          setTimeout(checkForMatch, 500)
        }
      }
    
      createBoard()
    })