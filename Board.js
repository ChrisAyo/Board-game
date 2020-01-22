function Board(rows, cols) {
    this.rows = rows
    this.cols = cols
    this.board = []
    this.generate()
    //this.findItem
}

Board.prototype.restart = function () {
    this.board = []
    this.generate()
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

// check out ....
Board.prototype.removeItem = function (y, x, name) {

    var cleanArray = this.board[y][x].filter(function (cellItem) {

        return cellItem.name !== name
    })
    console.log('clean array', cleanArray)
    this.board[y][x] = cleanArray
}


Board.prototype.render = function (boardId) {
    const board = document.getElementById(boardId)
    board.innerHTML = ""
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
        y = getRandomInt(this.rows)
        x = getRandomInt(this.cols)

        cellOccupied = this.board[y][x].length > 0
    }
    return {
        y, x
    }
}

Board.prototype.checkSurronding = function (newY, newX) {
    if (newY < this.rows && newY >= 0 && newX < this.cols && newX >= 0) {

        return true
    }
}

// search function
Board.prototype.search = function (y, x, distance, type) {
    let foundItems = []

    if (distance === 0) {
        if (this.checkSurronding(y, x)) {
            if (this.board[y][x].length) {

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
            if (this.board[downY][x].length) {
                const itemDown = this.board[downY][x].find(item => item.type === type)

                if (itemDown) {
                    foundItems.push(itemDown)
                }

            }
        }
        if (this.checkSurronding(upY, x)) {
            if (this.board[upY][x].length) {
                const itemUp = this.board[upY][x].find(item => item.type === type)

                if (itemUp) {
                    foundItems.push(itemUp)
                }

            }
        }
    }
    return foundItems
}

Board.prototype.movePlayer = function (player, direction) {
    const result = {
        moved: false,
        enemy: false,
    }

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
        let enemy = this.search(newY, newX, 1, 'player')
        enemy = enemy.filter(item => item.id !== player.id)
        //console.log(!wall.length && !enemy.length)
        console.log(enemy, wall, weapons, newY, newX)

        // check to see it is not itself on this code 
        if (!wall.length && !enemy.length) {
            this.addItem(newY, newX, player)
            this.removeItem(y, x, player.name)
            this.renderItem(y, x)
            this.renderItem(newY, newX)

            result.moved = true

        }


        // add weapon to player if he goes over the weapon
        if (weapons.length && !wall.length) {
            this.addItem(newY, newX, player.weapon)
            player.weapon = weapons[0] // adds weapon to player
            this.removeItem(newY, newX, weapons[0].name) //remove the weapon from the cell 
            //drop weapon
            this.renderItem(y, x)
            this.renderItem(newY, newX)
            // return true
        }

        // done run open modal in this part - Return enemy instead
        console.log('enemy length', enemy)
        if (enemy.length > 0 && !wall.length) {
            this.addItem(newY, newX, player)
            this.removeItem(y, x, player.name)
            this.renderItem(y, x)
            this.renderItem(newY, newX)
            result.enemy = enemy[0]
            openModal(enemy[0]);

        }
    }
    return result

}














