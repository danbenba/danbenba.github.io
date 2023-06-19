var currentQuestion = 0;
var score = 0;

function loadQuestion() {
    var questionDiv = document.getElementById("question");
    var optionsDiv = document.getElementById("options");
    var resultDiv = document.getElementById("result");
    var submitBtn = document.getElementById("submit");
    var nextBtn = document.getElementById("next");

    if (currentQuestion < questions.length) {
        var question = questions[currentQuestion];
        questionDiv.innerHTML = question.question;

        optionsDiv.innerHTML = "";
        if (question.options) {
            for (var i = 0; i < question.options.length; i++) {
                var optionLabel = document.createElement("label");
                var optionInput = document.createElement("input");
                optionInput.type = "radio";
                optionInput.name = "option";
                optionInput.value = question.options[i];
                optionLabel.appendChild(optionInput);
                optionLabel.appendChild(document.createTextNode(question.options[i]));
                optionsDiv.appendChild(optionLabel);
            }
        } else {
            var textInput = document.createElement("input");
            textInput.type = "text";
            optionsDiv.appendChild(textInput);
        }

        resultDiv.innerHTML = "";
        submitBtn.style.display = "block";
        nextBtn.style.display = "none";
    } else {
        showResult();
    }
}

function checkAnswer() {
    var options = document.getElementsByName("option");
    var selectedOption = null;

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i].value;
            break;
        }
    }

    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Votre réponse est " + (selectedOption === questions[currentQuestion].answer ? "correcte" : "incorrecte");
    var submitBtn = document.getElementById("submit");
    var nextBtn = document.getElementById("next");
    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
}

function loadNextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function showResult() {
    var questionDiv = document.getElementById("question");
    var optionsDiv = document.getElementById("options");
    var resultDiv = document.getElementById("result");
    var nextBtn = document.getElementById("next");

    questionDiv.innerHTML = "";
    optionsDiv.innerHTML = "";
    resultDiv.innerHTML = "Vous avez répondu correctement à " + score + " question(s) sur " + questions.length + ".";
    nextBtn.style.display = "none";
}

loadQuestion();
