// Get Modal element
const modal = document.getElementById("fightModal");
//Get open modal button
const modalBtn = document.getElementById("modalBtn");
// Get close button
const closeBtn = document.getElementsByClassName("closeBtn")[0];
// Get Attack Buttton
const attackBtn = document.getElementById("attackBtn");
//Get defend Button
const defendBtn = document.getElementById("defendBtn");



//listen for open click
modalBtn.addEventListener('click', openModal);
// listen for close click
closeBtn.addEventListener('click', closeModal);
// listen for outside click 
window.addEventListener('click', clickOutside);

attackBtn.addEventListener('click', attack);
defendBtn.addEventListener('click', defend);


function attack() {
    const fightStarts = document.getElementById("fightStarts");
    const enemy = players.data[1]

    if (players.currentPlayer.hasWon) {
        fightStarts.innerHTML = "Game Over"
    }
    else {
        players.currentPlayer.attack(enemy);
        if (players.currentPlayer.hasWon) {
            fightStarts.innerHTML = "Game Over"
        }
        else {
            players.swap();

            defendBtn.disabled = false
            fightStarts.innerHTML = "fight underway"
        }
        updateStats();
    }


}


function defend() {
    const fightStarts = document.getElementById("fightStarts")
    players.currentPlayer.defence = true;
    players.swap();
    updateStats();
    defendBtn.disabled = true
    fightStarts.innerHTML = "fight underway"
}

// function to open Modal 
function openModal() {
    modal.style.display = "block";
    updateStats();
}
// function to close
function closeModal() {
    modal.style.display = "none";
}

function clickOutside(e) {
    if (e.target == modal) {

        modal.style.display = "none";
    }
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