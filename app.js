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
        },
                {
            name: 'pictures',
            img: 'images/pictures.png'
        },
        {
            name: 'pictures',
            img: 'images/pictures.png'
        },
    ]

    const grid = document.querySelector('grid')

    //create your board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            // card.addEventListener('cliock', flipcard)
            grid.appendChild(card)
        }
    }

    createBoard 


})