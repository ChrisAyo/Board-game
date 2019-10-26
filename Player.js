function Player(name, id, weapon) {
    this.name = name
    this.health = 100
    this.weapon = weapon
    this.defence = false
    this.id = id
    this.type = 'player';
    this.steps = 3
}

//  after each  movement reduce it by 1 when it gets to zero swap the player 


Player.prototype.attack = function (enemy) {
    //<=0
    // make attack = integer 
    // make defence = integer 

    // resolve attack by subtract them postiive value = 1st person attack, negative value = second person attack
    if (enemy.health <= 0) {

        console.log("Stop it, you've won")
    }

    if (enemy.defence) {
        enemy.health = enemy.health - this.weapon.damage / 2

    }

    else {
        enemy.health = enemy.health - this.weapon.damage
    }


}



// const attack = new 


// const grid = boardItems

// let itemFound
// itemFound = grid.find((item) => item.type === [boardItems.type])

// console.log(itemFound)

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