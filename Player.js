function Player(name, id, weapon) {
    this.name = name
    this.health = 100
    this.weapon = weapon
    this.defence = false
    this.id = id
    this.type = 'player';
    this.steps = 3
    this.hasWon = false
    this.defaultWeapon = weapon
}

Player.prototype.restartGame = function () {
    this.health = 100
    this.weapon = this.defaultWeapon
}

Player.prototype.attack = function (enemy) {
    if (enemy.health <= 0) {
        this.hasWon = true
    }
    else if (enemy.defence) {
        enemy.health = enemy.health - this.weapon.damage / 2;
        enemy.defence = false;
    }
    else {
        enemy.health = enemy.health - this.weapon.damage
    }
    if (enemy.health <= 0) {
        this.hasWon = true
    }
}





