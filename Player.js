function Player(name, id) {
    this.name = name
    this.health = 100
    this.damage = 10
    this.defence = 10
    this.id = id
}

Player.prototype.attack = function (enemy) {
    enemy.health = enemy.health - this.damage
}


//shield
//type of weapon axe boomer rang 
//boost 
//obstacles


// const jimmie = new Player('jim');
// const badGuy = new Player('jeff');

// jimmie.attack(badGuy)
// console.log(jimmie)
// console.log(badGuy.heath)

// const Player = (name) => {
//     let health = 100; // 100
//     const getName = () => name;
//     const die = () => {
//         // game over
//     };

//     const damage = x => {
//         health -= x;
//         if (health <= 0) {
//             die();
//         }
//     };
//     const attack = enemy => {
//         if (level < enemy.getLevel()) {
//             damage(1);
//             console.log(`${enemy.getName()} has damaged ${name}`);
//         }

//     };
//     return { attack, damage, getName }
// };

// const jimmie = Player('jim', 10);
// const badGuy = Player('jeff', 5);

// console.log(jimmie)
// jimmie.attack(badGuy);