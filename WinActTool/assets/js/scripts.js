document.addEventListener("DOMContentLoaded", function(event) {
    document.body.classList.add("body-animation");
});

function openPopup() {
    var popup = document.getElementById("downloadPopup");
    popup.style.display = "flex";
    // Adding animation class
    popup.classList.add("popup-animation");

    // Default title and description
    document.getElementById("popupTitle").innerText = "Choisissez votre téléchargement";
    document.getElementById("popupDescription").innerText = "Sélectionnez l'outil que vous souhaitez télécharger.";
}


function closePopup() {
    var popup = document.getElementById("downloadPopup");
    popup.style.display = "none";
    // Removing animation class
    popup.classList.remove("popup-animation");
}

// Rest of your functions remain the same

// Event listeners
document.querySelector(".loc-button").addEventListener("click", function(event){
    event.preventDefault();
    openPopup();
});

document.getElementById("winactToolButton").addEventListener("click", redirectToWinActTool);
document.getElementById("officeButton").addEventListener("click", redirectToOffice);
