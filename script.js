let questionNumber = 0;
let score = 0;

//get quiz questions 
function getQuestions() {
    return `<section class="question-page">
       <div class="quiz-container">
          <ul class="quiz-progress">
              <li>Questions: ${questionNumber}/10</li>
              <li>Score: ${score}</li>
          </ul>
           <form class="quiz-selection">
                <h3 class="question-style">${quiz.questions[questionNumber].question}</h3>
                <p class="in-out"></p>
               <label for="a"><input name="option" class="answers" value="a" type="radio"> ${quiz.questions[questionNumber].a}</label><br>
               <label for="b"><input name="option" class="answers" value="b" type="radio"> ${quiz.questions[questionNumber].b}</label><br>
               <label for="c"><input name="option" class="answers" value="c" type="radio"> ${quiz.questions[questionNumber].c}</label><br>
               <label for="d"><input name="option" class="answers" value="d" type="radio"> ${quiz.questions[questionNumber].d}</label><br>
           </form>
           <div class="submit-container">
               <button class="submit-button">Submit</button>
           </div>
       </div>
   </section>`
}

//Start the quiz    
$('.quiz-start').on('click', '.js-start', function (event) {
    questionNumber =+ 1;
    renderQuiz();
    $('.box').hide();
});


//render quiz 
function renderQuiz() {
    $('.quiz-questions').html(getQuestions);
    $('.quiz-questions').on('click', '.submit-button', function (event) {
        event.preventDefault();
        if ($('input[name="option"]:checked').length === 0) {
            $('.in-out').html(`<p class="in-out">Select an answer</p>`);

        } else {


            const valueHolder = $('.quiz-questions').find('.answers:checked').val();


            if (valueHolder === quiz.questions[questionNumber].answer) {
                score += 1;
                $('.quiz-selection').replaceWith(`<div class="answer box">
                <h3>${answers.correct}</h3>
                <img class="gif-style" src="https://media.giphy.com/media/10kxE34bJPaUO4/giphy.gif">
                <button class="next-option">Next</button>
                </div>`);

            } else {
                $('.quiz-selection').replaceWith(`<div class="answer box">
                <h3>${answers.incorrect}</h3>
                <img class="gif-style" src="https://media.giphy.com/media/3o6ZtfPqhS8PwCqp1e/giphy.gif">
                <button class="next-option">Next</button>
                </div>`);

            }


            questionNumber += 1;

            $('.next-option').on('click', function (event) {
                $('.quiz-questions').html(getQuestions);
                
            });

            $('.submit-button').hide();
            return valueHolder;
        }
    });
}

function endQuiz() {
    $('.quiz-questions').append(` <div class="quiz-end">
        <p>Your score was ${score} out of 10!</p>
        <h2>Your score is out of this world</h2>
        <button class="submit-button">Restart</button>
    </div>`)
}

