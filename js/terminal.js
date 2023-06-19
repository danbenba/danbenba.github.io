document.addEventListener("DOMContentLoaded", function() {
    var terminalInput = document.getElementById("command-input");
    terminalInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        processCommand(terminalInput.value);
        terminalInput.value = "";
      }
    });
  
    function processCommand(command) {
      var output = "";
  
      switch (command) {
        case "help":
          output = "Commandes disponibles : aide, à propos, contact";
          break;
        case "about":
          output = "Il s'agit d'une simple interface de terminal.";
          break;
        case "contact":
          output = "Vous pouvez nous joindre à danbenba@proton.me.";
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
  });
  