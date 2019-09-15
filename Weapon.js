function Weapon(name, damage, id) {

    this.name = name;
    this.damage = damage;
    this.health = 10;
    this.defence = 10;
    this.id = id

}

// Weapon.prototype.boostDamage = function (player) {
//     player.damage = player.damage + this.damage
// }

// Weapon.prototype.boostDefence = function (player) {

//     player.defence = player.defence + this.defence
// }

// Weapon.prototype.boostHealth = function (player) {

//     player.health = player.health + this.health
// }



// const weapons = [
//     {
//         type: 'attack',
//         className: 'weapon-attack',
//         effect: 10
//     },
//     {
//         type: 'defence',
//         className: 'weapon-defence',
//         effect: 10
//     },
//     {
//         type: 'health',
//         className: 'weapon-health',
//         effect: 10
//     },

// ]

function Defence(name) {
    this.name = name;
    this.defence = 10
}


function boostAttack(name) {
    this.name = name;
    this.damage = 10
}


function Health(name) {
    this.name = name;
    this.health = 10
}



// Create 4 weapons 
