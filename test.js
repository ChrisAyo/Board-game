
$("#attackBtn").on("click", function () {
    attack()
})

// $("header").css("color", "red")

// function closeModal() {
//     const modal = document.getElementById("fightModal");

//     modal.style.display = "none";
// }

// function openModal(enemy) {
//     const modal = document.getElementById("fightModal");
//     modal.dataset.enemyId = enemy.id
//     modal.style.display = "block";
//     updateStats();
//     console.log(enemy)
// }

// $("#fightModal")



    // $("fightStarts")
    // const fightStarts = document.getElementById("fightStarts");
    // const modal = document.getElementById('fightModal');

    // const enemy = players.data.find(player => {
    //     if (player.id === modal.dataset.enemyId) {
    //         return player
    //     }
    // })

    // console.log(modal.dataset.enemyId)

    // if (players.currentPlayer.hasWon) {
    //     fightStarts.innerHTML = players.currentPlayer.hasWon
    //     console.log(players.currentPlayer.health)
    //     alert(`${players.currentPlayer.name} Has Won  ${enemy.name} Has lost`)
    //     closeModal()
    //     startGame()
    //     fightStarts.innerHTML = "Fight starts"
    // }
    // else {
    //     players.currentPlayer.attack(enemy);
    //     if (players.currentPlayer.hasWon) {
    //         alert(`${players.currentPlayer.name} Has Won  ${enemy.name} Has lost`)
    //         closeModal()
    //         startGame()
    //         fightStarts.innerHTML = "Fight starts"
    //     }
    //     else {
    //         modal.dataset.enemyId = players.currentPlayer.id
    //         players.swap();
    //         defendBtn.disabled = false
    //         fightStarts.innerHTML = "Fight underway"
    //     }

    // }
    // updateStats();



// $("#attackBtn").click(function(