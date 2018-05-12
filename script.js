let questionNumber = 0;
let score = 0;

//get quiz questions 
function getQuestions() {
    return `<section class="question-page">
       <div class="quiz-container">
          <ul class="quiz-progress">
              <li>Questions: ${questionNumber}</li>
              <li>Score: ${score}</li>
          </ul>
           <form class="quiz-selection">
                <h3 class="question-style">${quiz.questions[questionNumber].question}</h3>
               <label for="a"><input name="option" class="answers" value="a" type="radio">${quiz.questions[questionNumber].a}</label><br>
               <label for="b"><input name="option" class="answers" value="b" type="radio">${quiz.questions[questionNumber].b}</label><br>
               <label for="c"><input name="option" class="answers" value="c" type="radio">${quiz.questions[questionNumber].c}</label><br>
               <label for="d"><input name="option" class="answers" value="d" type="radio">${quiz.questions[questionNumber].d}</label><br>
           </form>
           <div class="submit-container">
               <button class="submit-button">Submit</button>
           </div>
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
    $('.quiz-questions').html(getQuestions);
    $('.quiz-questions').on('click', '.submit-button', function(event) {
        event.preventDefault();
        const valueHolder = $('.quiz-questions').find('.answers:checked').val();
        for (let i = 0; i < quiz.questions.length; i++) {
            if (valueHolder === quiz.questions[i].answer) {
                alert(answers.correct);
            }   else {
                alert(answers.incorrect);
            }
        }
        //$('.submit-button').replaceWith('<button>Next</button>');
        
        
        
    });
}



