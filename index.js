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


// document.onkeydown = function (e) {
//     e = e || window.event;
//     console.log(e)
//     game.movePlayer()
// }




// let { y, x } = game.getRandomPosition()




// randPOS = game.getRandomPosition()
// game.addItem(randPOS.y, randPOS.x, axe)
// game.renderItem(randPOS.y, randPOS.x)
// randPOS = game.getRandomPosition()
// game.addItem(randPOS.y, randPOS.x, whip)
// game.renderItem(randPOS.y, randPOS.x)
// randPOS = game.getRandomPosition()
// game.addItem(randPOS.y, randPOS.x, waterGun)
// game.renderItem(randPOS.y, randPOS.x)
// randPOS = game.getRandomPosition()
// game.addItem(randPOS.y, randPOS.x, goodGuy)
// game.renderItem(randPOS.y, randPOS.x)
// randPOS = game.getRandomPosition()
// game.addItem(randPOS.y, randPOS.x, badGuy)
// game.renderItem(randPOS.y, randPOS.x)
// randPOS = game.getRandomPosition()
// game.addItem(randPOS.y, randPOS.x, block)
// game.renderItem(randPOS.y, randPOS.x)
// randPOS = game.getRandomPosition()
// game.addItem(randPOS.y, randPOS.x, gun)
// game.renderItem(randPOS.y, randPOS.x)
// randPOS = game.getRandomPosition()




// game.renderItem(y, x)



// game.addItem(y, x,)
// game.renderItem(y, x)

// let { y, x } = game.getRandomPosition()
// game.addItem(y, x, waterGun)
// game.renderItem(y, x)




// jimmie.attack(badGuy)
// console.log(jimmie)
// console.log(badGuy.heath)
// axe.damage(badGuy)

// console.log()




