const jimmie = new Player('jim', 'p3');
const game = new Board(8, 8);

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

const fistP1 = new Weapon('onePunch', 10, 'weapon-5', 'weapon')
const fistP2 = new Weapon('superFist', 10, 'weapon-6', 'weapon')

const james = new Player('chris', 'player-1', new Weapon('onePunch', 10, 'weapon-5', 'weapon'))
const pat = new Player('jeff', 'player-2', new Weapon('superFist', 10, 'weapon-6', 'weapon'))

const players = {

    data: [james, pat],
    currentPlayer: james,
    currentSteps: 3,
    swap: function () {
        const firstPlayer = this.data.shift();
        this.data.push(firstPlayer);
        this.currentSteps = 3
        this.currentPlayer = this.data[0]
    },

}


document.onkeydown = function (e) {
    const player = players.currentPlayer
    let moved

    if (event.keyCode == 38) {
        moved = game.movePlayer(player, 'up')

    }
    else if (event.keyCode == 37) {
        moved = game.movePlayer(player, 'left')
    }
    else if (event.keyCode == 39) {
        moved = game.movePlayer(player, 'right')
    }
    else if (event.keyCode == 40) {
        moved = game.movePlayer(player, 'down')
    }

    if (moved.moved) {

        players.currentSteps--
        console.log(players.currentSteps)

        if (players.currentSteps === 0) {
            players.swap();
        }
        game.search()

    }

    if (moved.enemy) {

        openModal(moved.enemy)

    }

}


function startGame() {
    game.restart()
    game.render("board")
    players.data.forEach(function (item, index) {
        console.log(item, index)
        item.restartGame()
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

    players.currentPlayer.hasWon = false

}

startGame()

// display current winner 
// then close window 
