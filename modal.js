// Get Modal element
const modal = document.getElementById("fightModal");
//Get open modal button
const modalBtn = document.getElementById("modalBtn");
// Get close button
const closeBtn = document.getElementsByClassName("closeBtn")[0];

//listen for open click
modalBtn.addEventListener('click', openModal);
// listen for close click
closeBtn.addEventListener('click', closeModal);
// listen for outside click 
window.addEventListener('click', clickOutside);
// function to open Modal 
function openModal() {
    modal.style.display = "block";
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
