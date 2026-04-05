console.log("script.js connected!");

const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach(block => {

    const buttons = block.querySelectorAll(".answer-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => btn.classList.remove("selected"));

            button.classList.add("selected");

        });

    });

});


document.getElementById("show-result").addEventListener("click", displayResult);


function displayResult(){

    let score = 0;

    const selectedAnswers = document.querySelectorAll(".selected");

    selectedAnswers.forEach(button => {

        const answer = button.dataset.answer;

        if(answer === "A") score += 4;
        if(answer === "B") score += 3;
        if(answer === "C") score += 2;
        if(answer === "D") score += 1;

    });


    let result = "";

    if(score >= 12){
        result = "You are Thor! Strong and fearless.";
    }
    else if(score >= 8){
        result = "You are Superman! Powerful and responsible.";
    }
    else{
        result = "You are Spider-Man! Quick and clever.";
    }

    document.getElementById("result-text").textContent = result;

    document.getElementById("result-container").style.display = "block";

}
