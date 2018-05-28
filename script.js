let questionNumber = 0;
let score = 0;
let newHTML = "";



//get quiz questions 
function getQuestions() {
    newHTML = "";
    for (let i = 0; i < questions[questionNumber].answers.length; i++) {

        newHTML += `<label><input name="option" class="answers" data-answer="${questions[questionNumber].answers[i]}" type="radio"> ${questions[questionNumber].answers[i]} </label><br>`;
    }
    return `<fieldset><legend>Space Quiz</legend><section class="question-page">
       <div class="quiz-container">
          <ul class="quiz-progress">
              <li>Questions: ${questionNumber+1}/10</li>
              <li id="score">Score: ${score}</li>
          </ul>
           <div class="quiz-form">
                <h3 class="question-style">${questions[questionNumber].question}</h3>
                <p class="in-out"></p>
                ${newHTML}
           </div>
           <div class="submit-container">
               <button class="submit-button">Submit</button>
           </div>
           
       </div>
   </section> </fieldset>`
}

//Start the quiz    
$('.quiz-start').on('click', '.js-start', function (event) {
    renderQuiz();
    $('.box').hide();
});


//render quiz 
function renderQuiz() {
    $('.quiz-questions').html(getQuestions());
    $('.quiz-container').submit(function (event) {
        event.preventDefault();



        if ($('input[name="option"]:checked').length === 0) {
            $('.in-out').html(`<p class="in-out">Select an answer</p>`);

        } else {
            $('.submit-button').hide();

            const valueHolder = $('.quiz-container').find('input[name="option"]:checked').data('answer');

            if (valueHolder === questions[questionNumber].answer) {
                score += 1;
                $('.quiz-form').html(`<div class="answer box">
                <h3>${results.correct}</h3>
                <p class="fact-style">${questions[questionNumber].explanation}</p>
                <img class="gif-style" src="https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif">
                <button class="next-option">Next</button>
                </div>`);
            } else {

                $('.quiz-form').html(`<div class="answer box">
                <h3>${results.incorrect}</h3>
                <p class="fact-style">${questions[questionNumber].explanation}</p>
                <img class="gif-style" src="https://media.giphy.com/media/3o6ZtfPqhS8PwCqp1e/giphy.gif">
                <button class="next-option">Next</button>
                </div>`);
            };
            if (questionNumber === questions.length - 1) {

                if (score <= 6) {
                    $('.quiz-form').html(`<div class="answer box">
            <h3>Get out of here with that score!</h3>
            <p class="final-score">You got ${score} out of 10!</p>
            <img class="gif-style" src="https://media.giphy.com/media/TlK63ED1ShqW53CCUNO/giphy.gif">
            <p class="final-score">Give it another shot?</p>
            <button class="appear js-restart">Restart</button>
            </div>`);
                } else if (score >= 7) {
                    $('.quiz-form').html(`<div class="answer box">
            <h3>See you, Space Cowboy!</h3>
            <p class="final-score">You got ${score} out of 10!</p>
            <img class="gif-style" src="https://media.giphy.com/media/10kxE34bJPaUO4/giphy.gif">
            <p class="final-score">Give it another shot?</p>
            <button class="appear js-restart">Restart</button>
            </div>`);
                }

                $('.js-restart').show();
                $('.quiz-form').on('click', '.js-restart', function (event) {
                    score = 0;
                    questionNumber = 0;
                    renderQuiz();

                });
            };



            $('.quiz-questions').find("li#score").html(`<li id="score">Score: ${score}</li>`);
            questionNumber += 1;

            $('.next-option').on('click', function (event) {

                $('.quiz-questions').html(getQuestions);


            });

            return valueHolder;
        };
    })
}
