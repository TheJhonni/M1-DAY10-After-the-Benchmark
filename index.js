// Keep a global variable score for the user score

let currentQuestion = 0;
let userScore = 0;




// Keep a variable questionNumber for the question the user is answering

let submitAnswer = function () {
  let radios = document.getElementsByName("choice");
  let val = "";
  let lenght = radios.lenght
  for (let i=0; i < lenght; i++) {
    if (radios[i].checked) {
      val = radios[i].value;
      break;
    }
  }
}

if (val == "") {
  alert ("Submit your answer!");
} else if (val == "correct") {
  userScore++
};



window.onload = function () { }






// The player must guess correctly a certain amount of questions
// When questionNumber is bigger then the available questions, present the score


 /* const quizStart = function () {
      currentQuestion = 0;
      GenericScore = 0;
      questionsHtml.innerHTML = questions[currentQuestion];
      optionTrue.innerHTML = questions[currentQuestion].type[Boolean];
      optionTrue.onclick = () => {
          let abc =0;
          if(questions[currentQuestion].correct_answer[abc]) {
            GenericScore++;
                  optionTrue.classList.add("true");
          }

          userScore.innerHTML = score;
          if(questions[currentQuestion].incorrect_answers[abc]) {
            console.log("WRONG ANSWER!")  
            optionTrue.classList.add("false");
          }
    }
    optionFalse.innerHTML = questions[currentQuestion].type[Boolean];
    optionFalse.onclick = () => {
        let abc = 0;
        if(questions[currentQuestion].correct_answer[abc]) {
            GenericScore++;
                optionFalse.classList.add("true");
        }
        userScore.innerHTML = score;
        if(questions[currentQuestion].incorrect_answers[abc]) {
          console.log("WRONG ANSWER!")  
          optionFalse.classList.add("false");
        }
  }



};

quizStart();
*/

    // HINTS
    // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
    // For each question, create a container for wrapping it; then create a radio button
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
    // with, as options, both the correct answer and the incorrect ones
    // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
    //
    // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
    // Display the first question with the text and the radio buttons
    // when the user selects an answer, pick the next question from the array and replace the old one with it
    // saving the user's choice in a variable

  // How to calculate the result? You can do it in 2 ways:
  // If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
  // If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer

  