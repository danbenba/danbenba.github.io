document.addEventListener("DOMContentLoaded", function() {
    var terminalInput = document.getElementById("command-input");
    terminalInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            processCommand(terminalInput.value);
            terminalInput.value = "";
        }
    });

    var terminal = document.querySelector(".terminal");
    terminal.addEventListener("click", function() {
        if (terminal.requestFullscreen) {
            terminal.requestFullscreen();
        } else if (terminal.mozRequestFullScreen) {
            terminal.mozRequestFullScreen();
        } else if (terminal.webkitRequestFullscreen) {
            terminal.webkitRequestFullscreen();
        } else if (terminal.msRequestFullscreen) {
            terminal.msRequestFullscreen();
        }
    });

    document.addEventListener("fullscreenchange", exitFullscreenHandler);
    document.addEventListener("mozfullscreenchange", exitFullscreenHandler);
    document.addEventListener("webkitfullscreenchange", exitFullscreenHandler);
    document.addEventListener("msfullscreenchange", exitFullscreenHandler);

    function exitFullscreenHandler() {
        if (
            !document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement
        ) {
            console.log("Sortie du mode plein écran");
        }
    }

    function processCommand(command) {
        var output = "";
    
        switch (command) {
            case "help":
                output = "Commandes disponibles : help, about, contact, projects, clear, exit";
                break;
            case "about":
                output = "Un site développé par Dany BENBARA sous le surnom danbenba. Ce projet est l'un de mes plus gros !";
                break;
            case "contact":
                output = "Vous pouvez nous joindre à danbenba@proton.me.";
                break;
            case "projects":
                output = "Liste de projets : projet1, projet2, projet3";
                break;
            case "projet1":
                output = "DixonCode : Fait";
                break;
            case "projet2":
                output = "PassGen V2 : Fait";
                break;
            case "projet3":
                output = "BrutExemple : Fait";
                break;
            case "clear":
                clearTerminal();
                break;
            case "exit":
                window.location.href = "https://danbenba.github.io";
                break;
            case "update":
                window.location.href = "https://danbenba.github.io/update.html";
                break;
            default:
                output = "Commande non trouvée. Tapez 'help' pour voir les commandes disponibles.";
        }
    
        displayOutput(output);
    }    

    function displayOutput(output) {
        var terminalContent = document.querySelector(".terminal-content");
        var outputElement = document.createElement("p");
        outputElement.textContent = output;
        terminalContent.appendChild(outputElement);
        terminalContent.scrollTop = terminalContent.scrollHeight;
    }

    function clearTerminal() {
        var terminalContent = document.querySelector(".terminal-content");
        terminalContent.innerHTML = "";
    }
});
