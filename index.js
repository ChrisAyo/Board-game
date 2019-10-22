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

// 
// const foundWeapons = game.search(player[0].position.y, player[0].position.x, 1, 'wall')

// const player1 = {
//     type: 'player',
//     name: 'player1'
// }
// BoardItems = [player1]

// let itemFound
// itemFound = grid.find((item) => item.type === player1.type)

// console.log(itemFound)





// let itemFound
// itemFound = boardItems.find((item) => item.type === 'weapon')

// console.log(itemFound)



// player.forEach(function (item, index) {
//     console.log(item, index)

//     let { y, x } = game.getRandomPosition()
//     game.addItem(y, x, item)
//     game.renderItem(y, x)
// }
// )



// let obj = findItem(player, 'id', 'player-1')


// search = (key, inputArray) => {

//     // let y, x = item.position

//     for (let i = 0; i < inputArray.length; i++) {
//         if (inputArray[i].name === key) {
//             return inputArray[i];
//         }
//     }
// }



// let resultObject = search("tile", boardItems);

// console.log(resultObject.position)

// let arr = [
//     { name: "Krunal", value: "Engineer", other: "Author" },
//     { name: "Ankit", value: "MCA", other: "Author" }
// ];



// function findItem(array, key, value) {
//     for (i = 0; i < array.length; i++) {
//         if (array[i][key] == value) {
//             return array[i].name
//         }
//     }
// }

// const hello = findItem(player, 'id', 'player2')

// const findPlayer = game.searchCell('axe', 'id', 'player-2')

// let obj = findObjectByKey(player, 'id', 'player-2');

// const inventory = [
//     { name: 'apples', quantity: 2 },
//     { name: 'bananas', quantity: 0 },
//     { name: 'cherries', quantity: 5 }
// ];

// function searchCell(item) {
//     if (item == weapon.type) {
//         return item.id === 'weapon-2';
//     }




// }

// console.log(weapons.find(searchCell));