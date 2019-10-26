const jimmie = new Player('jim', 'p3');
const game = new Board(8, 8);
// const Board = boardItems
game.render('board')


boardItems = [
    new Weapon('axe', 25, 'weapon-1', 'weapon'),
    new Weapon('gun', 45, 'weapon-2', 'weapon'),
    new Weapon('water gun', 15, 'weapon-3', 'weapon'),
    new Weapon('whip', 20, 'weapon-4', 'weapon'),
    new Wall('tile', 'grass', 'type'),
    new Wall('tile', 'grass', 'type'),
    new Wall('tile', 'grass', 'type'),
    new Wall('tile', 'grass', 'type'),

]

const players = {

    data: [new Player('chris', 'player-1', new Weapon('onePunch', 10, 'weapon-5', 'weapon')), new Player('jeff', 'player-2', new Weapon('superFist', 10, 'weapon-6', 'weapon'))],
    currentId: 0,
    currentSteps: 3,
    swap: function () {
        this.currentSteps = 3
        this.currentId = 1 - this.currentId

    }

}


// Generating player

// const player = [

//     // this.player()

//     new Player('chris', 'player-1', new Weapon('onePunch', 10, 'weapon-5', 'weapon')),
//     new Player('jeff', 'player-2', new Weapon('superFist', 10, 'weapon-6', 'weapon'))

// ]


players.data.forEach(function (item, index) {
    console.log(item, index)

    let { y, x } = game.getRandomPosition()
    game.addItem(y, x, item)
    game.renderItem(y, x)
})

boardItems.forEach(function (item, index) {
    console.log(item, index)

    let { y, x } = game.getRandomPosition()
    game.addItem(y, x, item)
    game.renderItem(y, x)
})

const foundWeapons = game.search(players.data[players.currentId].position.y, players.data[players.currentId].position.x, 1, 'wall')

