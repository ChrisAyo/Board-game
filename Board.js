function Board(rows, cols) {
    this.rows = rows
    this.cols = cols
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
    item.postion = { y, x }
}

Board.prototype.removeItem = function (y, x, name) {
    for (let i = 0; i < this.board[y][x].length; i++) {
        if (this.board[y][x][i].name === name) {
            this.board[y][x].splice(i)
        }
    }
}

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

Board.prototype.movePlayer = function (player, direction) {

    let { y, x } = player.postion
    let newY = y
    let newX = x

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

    this.addItem(newY, newX, player)
    this.removeItem(y, x, player.name)
    this.renderItem(y, x)
    this.renderItem(newY, newX)

}

document.onkeydown = function (e) {
    if (event.keyCode == 38) {
        game.movePlayer(player[0], 'up')
    }
    else if (event.keyCode == 37) {
        game.movePlayer(player[0], 'left')
    }
    else if (event.keyCode == 39) {
        game.movePlayer(player[0], 'right')
    }
    else if (event.keyCode == 40) {
        game.movePlayer(player[0], 'down')
    }
    else if (event.keyCode == 87) {
        game.movePlayer(player[1], 'up')
    }
    else if (event.keyCode == 68) {
        game.movePlayer(player[1], 'right')
    }
    else if (event.keyCode == 83) {
        game.movePlayer(player[1], 'down')
    }
    else if (event.keyCode == 65) {
        game.movePlayer(player[1], 'left')
    }


}










// this.addItem(positon, item)

