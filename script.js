let questionNumber = 0;
let score = 0;

//get quiz questions 
function getQuestions() {
    return `<section class="question-page">
       <div class="quiz-container">
          <ul class="quiz-progress">
              <li>Questions: ${questionNumber+1}/10</li>
              <li>Score: ${score}</li>
          </ul>
           <form class="quiz-form">
                <h3 class="question-style">${quiz.questions[questionNumber].question}</h3>
                <p class="in-out"></p>
               <label for="a"><input name="option" class="answers" value="a" type="radio"> ${quiz.questions[questionNumber].a}</label><br>
               <label for="b"><input name="option" class="answers" value="b" type="radio"> ${quiz.questions[questionNumber].b}</label><br>
               <label for="c"><input name="option" class="answers" value="c" type="radio"> ${quiz.questions[questionNumber].c}</label><br>
               <label for="d"><input name="option" class="answers" value="d" type="radio"> ${quiz.questions[questionNumber].d}</label><br>
               <div class="submit-container">
               <button class="appear js-restart">Restart</button>
               <button class="submit-button">Submit</button>
               </div>
           </form>
            
           
       </div>
        <div class="gif-container">
            <img class="gif-small" src="https://media.giphy.com/media/3oKIPtjElfqwMOTbH2/source.gif">
        </div>
   </section>`
}

//Start the quiz    
$('.quiz-start').on('click', '.js-start', function (event) {
    renderQuiz();
    $('.box').hide();
});


//render quiz 
function renderQuiz() {
    $('.quiz-questions').html(getQuestions());
    $('.quiz-questions').on('click', '.submit-button', function (event) {
        event.preventDefault();
        if ($('input[name="option"]:checked').length === 0) {
            $('.in-out').html(`<p class="in-out">Select an answer</p>`);

        } else {


            const valueHolder = $('.quiz-questions').find('.answers:checked').val();

            if (questionNumber === quiz.questions.length - 1 && valueHolder === quiz.questions[questionNumber].answer) {
                score += 1;
                if (score <= 6) {
                    $('.quiz-form').html(`<div class="answer box">
            <h3>Get out of here with that score!</h3>
            <p class="final-score">You got ${score} out of 10!</p>
            <img class="gif-style" src="https://media.giphy.com/media/TlK63ED1ShqW53CCUNO/giphy.gif">
            <p class="final-score">Give it another shot?</p>
            <button class="appear js-restart">Restart</button>
            </div>`);
                }   else if (score >= 7) {
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
                    renderQuiz();

                });
            } else if (valueHolder === quiz.questions[questionNumber].answer) {
                score += 1;
                $('.quiz-form').html(`<div class="answer box">
                <h3>${answers.correct}</h3>
                <p class="fact-style">${quiz.questions[questionNumber].explanation}</p>
                <img class="gif-style" src="https://media.giphy.com/media/l4KhQo2MESJkc6QbS/giphy.gif">
                <button class="next-option">Next</button>
                </div>`);
                //https://media.giphy.com/media/xT8qBhrlNooHBYR9f2/giphy.gif
            } else {

                $('.quiz-form').html(`<div class="answer box">
                <h3>${answers.incorrect}</h3>
                <p class="fact-style">${quiz.questions[questionNumber].explanation}</p>
                <img class="gif-style" src="https://media.giphy.com/media/3o6ZtfPqhS8PwCqp1e/giphy.gif">
                <button class="next-option">Next</button>
                </div>`);
            }

            questionNumber += 1;

            $('.next-option').on('click', function (event) {
                $('.quiz-questions').html(getQuestions);
            });

            return valueHolder;
        }
    });
};
