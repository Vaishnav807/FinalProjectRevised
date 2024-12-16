const one = document.querySelector(`#one`);
const two = document.querySelector(`#two`);
const three = document.querySelector(`#three`);
const four = document.querySelector(`#four`);
const five = document.querySelector(`#five`);
const submit = document.querySelector(`#sub`);
const result = document.querySelector(`.crtAns`);

let numQuestions = 5;
let comment = "";

function checkAnswer(){
    let score = 0;
    const answers = {
        answer1: "Coca-cola",
        answer2: "Banana",
        answer3: "China",
        answer4: "E",
        answer5: "7"
    };

    if(one.checked){
        const selectedLabel = one.nextElementSibling.innerText;
        if(selectedLabel == answers.answer1){
            score++;
        }
    }

    if(two.checked){
        selectedLabel = two.nextElementSibling.innerText;
        if(selectedLabel == answers.answer2){
            score++;
        }
    }

    if(three.checked){
        selectedLabel = three.nextElementSibling.innerText;
        if(selectedLabel == answers.answer3){
            score++;
        }
    }

    if(four.checked){
        selectedLabel = four.nextElementSibling.innerText;
        if(selectedLabel == answers.answer4){
            score++;
        }
    }

    if(five.checked){
        selectedLabel = five.nextElementSibling.innerText;
        if(selectedLabel == answers.answer5){
            score++;
        }
    }


    if(score == 5){
        comment = "You're on fire!";
    } else if(score == 4){
        comment = "Great effort!";
    } else if(score == 3){
        comment = "Good job! You're almost there";
    } else if(score == 2){
        comment = "You're making progress";
    } else if(score == 1){
        comment = "Focus more!";
    } else {
        comment = "Try again!";
    }
    

    displayResult(score, numQuestions);
}

function displayResult(score, numQuestions){
    result.innerHTML = `You got ${score} out of ${numQuestions} correct! ${comment}`;
}

