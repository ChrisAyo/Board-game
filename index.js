const jimmie = new Player('jim');
const game = new Board(8, 8);
game.render('board')

weapons = [
    new Weapon('axe', 25, 'weapon-1'),
    new Weapon('gun', 45, 'weapon-2'),
    new Weapon('water gun', 15, 'weapon-3'),
    new Weapon('whip', 20, 'weapon-4'),
    new Weapon('shooter', 45, 'gun1'),
    new Wall('tile', 'grass'),
]

player = [

    new Player('jeff', 'player-2'),
    new Player('chris', 'player-1')
]

weapons.forEach(function (item, index) {
    console.log(item, index)

    let { y, x } = game.getRandomPosition()
    game.addItem(y, x, item)
    game.renderItem(y, x)
}
)




