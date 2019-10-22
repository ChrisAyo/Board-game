function Board(rows, cols) {
    this.rows = rows
    this.cols = cols
    this.board = []
    this.generate()
    this.findItem



}

Board.prototype.generate = function () {
    for (let y = 0; y < this.cols; y++) {
        this.board.push([])
        for (let x = 0; x < this.rows; x++) {
            this.board[y].push([])
        }
    }
}

Board.prototype.addItem = function (y, x, item) {
    this.board[y][x].push(item)
    item.position = { y, x }
}

Board.prototype.removeItem = function (y, x, name) {
    for (let i = 0; i < this.board[y][x].length; i++) {
        if (this.board[y][x][i].name === name) {
            this.board[y][x].splice(i)
        }
    }
}


// const player1 = {
//     type: 'player',
//     name: 'player1'
// }


Board.prototype.render = function (boardId) {
    const board = document.getElementById(boardId)
    for (let y = 0; y < this.cols; y++) {
        const row = document.createElement('div')
        row.setAttribute('class', 'd-flex flex-grow-1')
        row.setAttribute('id', 'row' + y)
        board.appendChild(row)

        for (let x = 0; x < this.rows; x++) {
            const cell = document.createElement('div')
            cell.setAttribute('class', 'flex-fill border d-flex justify-center align-items-center')
            cell.setAttribute('id', 'cell' + y + x)
            row.appendChild(cell)
        }
    }
}

// Board.prototype.searchBoard = function () {

//     //const showItem = 

//     for (let y = 0; y < this.rows; y++) {
//         if (game.board[y][][0].type == 'weapon')

//             for (let x = 0; x < this.cols; x++) {

//                 if (this.board[y][x][i] type === key) {
//                     return inputArray[i];

//                 }

//                 a++
//                 console.log(a)
//             }

//     }

// }


// function findItem(array, key, type) {

//     let weaponList = []

//     for (i = 0; i < array.length; i++) {
//         if (array[i][key][type] === type) {
//             // weaponList.push(array[i])
//             console.log(array[i])
//             // return array[i].position
//         }

//     }
//     // return null
// }


// does not work 

// function showMe(array, key, value) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i][key] === value) {
//             return array[i];
//         }
//     }
//     return null;
// }

Board.prototype.renderItem = function (y, x) {
    const cell = document.getElementById('cell' + y + x)
    cell.innerHTML = ''
    for (let i = 0; i < this.board[y][x].length; i++) {
        const item = document.createElement('div')
        item.setAttribute('class', this.board[y][x][i].id)
        cell.appendChild(item)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

Board.prototype.getRandomPosition = function () {
    // let postion = {
    cellOccupied = true
    var y = 0
    var x = 0

    while (cellOccupied) {
        y = Math.floor(Math.random() * this.rows)
        x = Math.floor(Math.random() * this.cols)

        cellOccupied = this.board[y][x].length > 0
    }

    return {
        y, x
    }
}


Board.prototype.checkSurronding = function (newY, newX) {

    // if (this.search(newY, newX, 1, 'wall') !== this.board[newY][newX].find(item => item.type === 'wall'))

    // {

    //check if there is a wall
    if (newY < this.rows && newY >= 0 && newX < this.cols && newX >= 0) {

        return true
    }


}



// there is no wall in the new position

Board.prototype.search = function (y, x, distance, type) {

    let foundItems = []

    if (distance === 0) {
        if (this.checkSurronding(y, x)) {

            for (i = 0; i < this.board[y][x].length; i++) {

                console.log("Items in cell for" + type);
                console.log(this.board[y][x]);
                const itemFound = this.board[y][x].find(item => item.type === type)

                if (itemFound) {
                    foundItems.push(itemFound)

                }
            }
            return foundItems
        }
    }

    for (let i = 0; i <= distance; i++) {
        const rightX = x + i
        const leftX = x - i
        const downY = y + i
        const upY = y - i
        let item

        if (this.checkSurronding(y, rightX)) {
            if (this.board[y][rightX].length) {

                const itemRight = this.board[y][rightX].find(item => item.type === type)

                if (itemRight) {
                    foundItems.push(itemRight)
                }

            }
        }
        if (this.checkSurronding(y, leftX)) {
            if (this.board[y][leftX].length) {
                const itemLeft = this.board[y][leftX].find(item => item.type === type)

                if (itemLeft) {
                    foundItems.push(itemLeft)
                }

            }
        }
        if (this.checkSurronding(downY, x)) {
            if (this.board[y][downY].length) {
                const itemDown = this.board[downY][x].find(item => item.type === type)

                if (itemDown) {
                    foundItems.push(itemDown)
                }

            }
        }
        if (this.checkSurronding(upY, x)) {
            if (this.board[y][upY].length) {
                const itemUp = this.board[upY][x].find(item => item.type === type)

                if (itemUp) {
                    foundItems.push(itemUp)
                }

            }
        }
    }

    return foundItems
}

// Serch Function


// Board.prototype.search = function (y, x, distance, type) {

//     let foundItems = []

//     if (distance === 0) {
//         if (this.checkSurronding(y, x)) {
//             if (this.board[y][x].length) {
//                 const itemFound = this.board[y][x].find(item => item.type === type)

//                 if (itemFound) {
//                     foundItems.push(itemFound)
//                     return foundItems
//                 }
//             }

//         }
//     }

//     for (let i = 0; i <= distance; i++) {
//         const rightX = x + i
//         const leftX = x - i
//         const downY = y + i
//         const upY = y - i
//         let item

//         if (this.checkSurronding(y, rightX)) {
//             if (this.board[y][rightX].length) {
//                 const itemRight = this.board[y][rightX].find(item => item.type === type)

//                 if (itemRight) {
//                     foundItems.push(itemRight)
//                 }

//             }
//         }
//         if (this.checkSurronding(y, leftX)) {
//             if (this.board[y][leftX].length) {
//                 const itemLeft = this.board[y][leftX].find(item => item.type === type)

//                 if (itemLeft) {
//                     foundItems.push(itemLeft)
//                 }

//             }
//         }
//         if (this.checkSurronding(downY, x)) {
//             if (this.board[y][downY].length) {
//                 const itemDown = this.board[downY][x].find(item => item.type === type)

//                 if (itemDown) {
//                     foundItems.push(itemDown)
//                 }

//             }
//         }
//         if (this.checkSurronding(upY, x)) {
//             if (this.board[y][upY].length) {
//                 const itemUp = this.board[upY][x].find(item => item.type === type)

//                 if (itemUp) {
//                     foundItems.push(itemUp)
//                 }

//             }
//         }
//     }

//     return foundItems
// }

Board.prototype.movePlayer = function (player, direction) {


    let { y, x } = player.position
    newY = y
    newX = x

    if (direction === 'up') {
        newY = y - 1
    }
    else if (direction === 'down') {
        newY = y + 1
    }

    else if (direction === 'right') {
        newX = x + 1
    }

    else if (direction === 'left') {
        newX = x - 1
    }


    if (this.checkSurronding(newY, newX)) {
        const weapons = this.search(newY, newX, 0, 'weapon')
        const wall = this.search(newY, newX, 0, 'wall')
        const enemy = this.search(newY, newX, 0, 'player')
        //console.log(!wall.length && !enemy.length)
        console.log(enemy)
        if (!wall.length && !enemy.length) {
            this.addItem(newY, newX, player)
            this.removeItem(y, x, player.name)
            this.renderItem(y, x)
            this.renderItem(newY, newX)


        }
        // console.log(weapons)
        // trying to add weapon to player if he goes over the weapon
        if (weapons.length && !enemy.length) {

            this.removeItem(newY, newX, weapons[0].name)
            this.addItem(newY, newX, players.data[players.currentId].weapon)
            players.data[players.currentId].weapon = weapons[0]
            // Does not make a diffrence 
            this.renderItem(y, x)
            // this.renderItem(newY, newX)

            // return true
        }
        if (enemy.length > 0) {
            console.log('hello')
        }
    }
    return true

    // swap current player

}

// if (this.search(newY, newX, 1, 'wall') != 'wall') {



// if (this.search(newY, newX, 1, 'player')) {
//     player fight
// }

// if (this.checkSurronding(newY, newX)) {
//     move 
// }


//search for wall
//search for player

//check to make sure we are within bounds
//search for weapon

// if (this.checkSurronding(newY, newX)) {

//     this.addItem(newY, newX, player)
//     this.removeItem(y, x, player.name)
//     this.renderItem(y, x)
//     this.renderItem(newY, newX)

//     //run function for finding player... its the same one as seraching for weapons...
// }

//swapping weapon 

// Player movement 



document.onkeydown = function (e) {
    let moved = false

    if (event.keyCode == 38) {
        moved = game.movePlayer(players.data[players.currentId], 'up')

    }
    else if (event.keyCode == 37) {
        moved = game.movePlayer(players.data[players.currentId], 'left')
    }
    else if (event.keyCode == 39) {
        moved = game.movePlayer(players.data[players.currentId], 'right')
    }
    else if (event.keyCode == 40) {
        moved = game.movePlayer(players.data[players.currentId], 'down')
    }
    else if (event.keyCode == 87) {
        moved = game.movePlayer(player[1], 'up')
    }
    else if (event.keyCode == 68) {
        moved = game.movePlayer(player[1], 'right')
    }
    else if (event.keyCode == 83) {
        moved = game.movePlayer(player[1], 'down')
    }
    else if (event.keyCode == 65) {
        moved = game.movePlayer(player[1], 'left')
    }

    if (moved) {

        players.currentSteps--
        console.log(players.currentSteps)

        if (players.currentSteps == 0) {
            players.swap();
        }
        game.search()

    }

}



// Players Movement Copy 

// document.onkeydown = function (e) {
//     let moved = false

//     if (event.keyCode == 38) {
//         moved = game.movePlayer(player[0], 'up')

//     }
//     else if (event.keyCode == 37) {
//         moved = game.movePlayer(player[0], 'left')
//     }
//     else if (event.keyCode == 39) {
//         moved = game.movePlayer(player[0], 'right')
//     }
//     else if (event.keyCode == 40) {
//         moved = game.movePlayer(player[0], 'down')
//     }
//     else if (event.keyCode == 87) {
//         moved = game.movePlayer(player[1], 'up')
//     }
//     else if (event.keyCode == 68) {
//         moved = game.movePlayer(player[1], 'right')
//     }
//     else if (event.keyCode == 83) {
//         moved = game.movePlayer(player[1], 'down')
//     }
//     else if (event.keyCode == 65) {
//         moved = game.movePlayer(player[1], 'left')
//     }

//     if (moved) {

//         game.search()

//     }

// }

//shift push to swap players in an array from first to bottom 




// board.prototype.findItem = function (array, key, value) {


//     for (i = 0; i < array.length; i++) {
//         if (array[i][key] === value) {
//             return array[i];
//         }
//     }
// }
// for (let i = 0; i < distance; i++) {

//     if (checkSurronding(currentPosition.y, currentPosition.x + i)) {
//         if (game.board[currentPosition.y][currentPosition.x + i].length > 0) {
//             if (game.board[currentPosition.y][currentPosition.x + i][0].type == 'weapon') {
//                 foundWeapons.push(game.board[currentPosition.y][currentPosition.x + i])
//             }
//         }
//     }
//     if (checkSurronding(currentPosition.y, currentPosition.x - i)) {
//         if (game.board[currentPosition.y][currentPosition.x - i].length > 0) {
//             if (game.board[currentPosition.y][currentPosition.x - i][0].type == 'weapon') {
//                 foundWeapons.push(game.board[currentPosition.y][currentPosition.x - i])
//             }
//         }
//     }
//     if (checkSurronding(currentPosition.y + i, currentPosition.x)) {
//         if (game.board[currentPosition.y + i][currentPosition.x].length > 0) {
//             if (game.board[currentPosition.y + i][currentPosition.x][0].type == 'weapon') {
//                 foundWeapons.push(game.board[currentPosition.y + i][currentPosition.x])
//             }
//         }
//     }
//     if (checkSurronding(currentPosition.y - i, currentPosition.x)) {
//         if (game.board[currentPosition.y - i][currentPosition.x].length > 0) {
//             if (game.board[currentPosition.y - i][currentPosition.x][0].type == 'weapon') {
//                 foundWeapons.push(game.board[currentPosition.y - i][currentPosition.x])



//             }
//         }
//     }



// }
// return foundWeapons






