// Get Modal element

//Get open modal button
// const modalBtn = document.getElementById("modalBtn");
// Get close button
const closeBtn = document.getElementsByClassName("closeBtn")[0];
// Get Attack Buttton
const attackBtn = document.getElementById("attackBtn");
//Get defend Button
const defendBtn = document.getElementById("defendBtn");


//listen for open click
// modalBtn.addEventListener('click', openModal);
// listen for close click
// closeBtn.addEventListener('click', closeModal);
// listen for outside click 
// window.addEventListener('click', clickOutside);

// attackBtn.addEventListener('click', attack);
//
defendBtn.addEventListener('click', defend);

// const $: (".button").css("color", "yellow")
// $("attackBtn") click(attack())

function attack() {
    const fightStarts = document.getElementById("fightStarts");
    const modal = document.getElementById('fightModal');

    const enemy = players.data.find(player => {
        if (player.id === modal.dataset.enemyId) {
            return player
        }
    })

    console.log(modal.dataset.enemyId)

    if (players.currentPlayer.hasWon) {
        fightStarts.innerHTML = players.currentPlayer.hasWon
        console.log(players.currentPlayer.health)
        alert(`${players.currentPlayer.name} Has Won  ${enemy.name} Has lost`)
        closeModal()
        startGame()
        fightStarts.innerHTML = "Fight starts"
    }
    else {
        players.currentPlayer.attack(enemy);
        if (players.currentPlayer.hasWon) {
            alert(`${players.currentPlayer.name} Has Won  ${enemy.name} Has lost`)
            closeModal()
            startGame()
            fightStarts.innerHTML = "Fight starts"
        }
        else {
            modal.dataset.enemyId = players.currentPlayer.id
            players.swap();
            defendBtn.disabled = false
            fightStarts.innerHTML = "Fight underway"
        }

    }
    updateStats();
}

function defend() {
    const fightStarts = document.getElementById("fightStarts")
    players.currentPlayer.defence = true;
    // modal.dataset.enemyId = players.currentPlayer.id
    players.swap();
    updateStats();
    defendBtn.disabled = true
    fightStarts.innerHTML = "Fight underway"
}

// function to open Modal 
function openModal(enemy) {
    const modal = document.getElementById("fightModal");
    modal.dataset.enemyId = enemy.id
    modal.style.display = "block";
    updateStats();
    console.log(enemy)
}

// function to close
function closeModal() {
    const modal = document.getElementById("fightModal");

    modal.style.display = "none";
}


function updateStats() {
    const player1 = players.currentPlayer
    const enemy = players.data[1]

    player1Name = document.getElementById("currentPlayerName")
    player1Name.innerHTML = player1.name
    enemyName = document.getElementById("enemyName")
    enemyName.innerHTML = enemy.name

    player1Health = document.getElementById("currentPlayerHealth")
    player1Health.innerHTML = player1.health
    enemyHealth = document.getElementById("enemyHealth")
    enemyHealth.innerHTML = enemy.health

    player1Defence = document.getElementById("currentPlayerDefending")
    player1Defence.innerHTML = player1.defence ? "true" : "false"
    enemyDefence = document.getElementById("enemyDefending")
    enemyDefence.innerHTML = enemy.defence ? "true" : "false"
}