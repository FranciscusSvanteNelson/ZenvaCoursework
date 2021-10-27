// define the object for the question entity
let question = {
  title: 'Katten',
  alternatives: ['The Dog', 'The Cat', 'The Bird', 'The Fish'],
  correctAnswer: 1
};

let questions = [
  {
    title: 'Katten',
    alternatives: ['The Dog', 'The Cat', 'The Bird', 'The Fish'],
    correctAnswer: 1
  },
  {
    title: 'Fuglen',
    alternatives: ['The Dog', 'The Cat', 'The Bird', 'The Fish'],
    correctAnswer: 2
  },
  {
    title: 'Musen',
    alternatives: ['The Mouse', 'The Rabbit', 'The Moose', 'The Deer'],
    correctAnswer: 0
  },
  {
    title: 'Hunden',
    alternatives: ['The Rat', 'The Owl', 'The Giraffe', 'The Dog'],
    correctAnswer: 3
  }

]


let app = {
  start: function() {
    
    this.currPosition = 0;
    this.score = 0; // property to keep track of score
    
    // get alternatives
    let alts = document.querySelectorAll('.alternative');
  
    alts.forEach((element, index) => {
            
      element.addEventListener('click', () => {
        // check correct answer
        this.checkAnswer(index);
      });
    });
    
    // refresh stats
    this.updateStats();
    
    // show first question
    this.showQuestion(questions[this.currPosition]);
  },
  
  showQuestion: function(q) {
    
    // show question title
    let titleDiv = document.getElementById('title');
    titleDiv.textContent = q.title; 
  
    // show alternatives
    let alts = document.querySelectorAll('.alternative');
  
    alts.forEach(function(element, index){
      element.textContent = q.alternatives[index];
    });
  },
  
  checkAnswer: function(userSelected) {
    
    let currQuestion = questions[this.currPosition];
    
    if(currQuestion.correctAnswer == userSelected) {
      // correct
      console.log('correct');
      this.score++;
      this.showResult(true);
    }
    else {
      // not correct
      console.log('wrong');
      this.showResult(false);
    }
    
    // refresh stats
    this.updateStats();
    
    // increase position
    this.increasePosition();
    
    // show next question
    this.showQuestion(questions[this.currPosition]);
  },
  
  increasePosition: function() {
    this.currPosition++;
    
    if(this.currPosition == questions.length){
      this.currPosition = 0;
    }
  },
  
  updateStats: function() {
    // select the score element
    let scoreDiv = document.getElementById('score');
    // display the score using a template literal
    scoreDiv.textContent = `Your score: ${this.score}`;
  },
  showResult: function(isCorrect){
    let resultDiv = document.getElementById('result');
    let result ='';

    // checks
    if(isCorrect){
      result = 'Correct Answer';
    }
    else {
      // get the current question
      let currQuestion = questions[this.currPosition];
      // get the answer (index)
      let correctAnswerIndex = currQuestion.correctAnswer;
      // show the correct answer text
      let correctAnswerText = currQuestion.alternatives[correctAnswerIndex]



      result = `Wrong Answer. The Correct Answer was: ${correctAnswerText}`;
    }

    resultDiv.textContent = result;
  }
  
};

// initialize the application
app.start();


