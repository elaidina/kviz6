const quizData = [
    {
        question: "Didlina má 5 dětí. 2 jsou holčičky. Kolik je kluků?",
        a: "3",
        b: "4",
        
        correct: "a",
    },
    {
      question: "Barbi má 25 let. Ken je o 5 let starší. Kolik let je Kenovi?",
      a: "24",
      b: "25",
      
      correct: "b",
  },
  {
    question: "Miška chce spravodlivě rozdělit 15 jahod mezi své 3 dcery. Kolik dostane každá?",
    a: "5",
    b: "6",
    
    correct: "a",
},
{
  question: "Miška staví diamanty z lega. na kždý diamant použije 6 kostek lega. Kolik kostek lega potřebuje na 4 diamanty?",
  a: "24",
  b: "30",
  
  correct: "a",
},{
  question: "Miška má 12 pastelek. Polovinu pastelek půjčila kamarátce. Kolik pastelek jí zbylo?",
  a: "7",
  b: "6",
  
  correct: "b",
},
{
question: "Sněhulák se staví z 5 sněhových koulí. Kolik koulí je potřeba na 5 sněhuláků?",
a: "25",
b: "30",

correct: "a",
},{
  question: "1 kilogram mandarinek stojí 100 korun. Kolik stojí půl kila mandarinek?",
  a: "50 korun",
  b: "40 korun",
  
  correct: "a",
},
{
question: "Žába umí jezdit na kole.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "Auta mají čtyři kola.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Lednice ohřívá jídlo.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "Princezny nosí korunu na hlavě.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Mrkev a petržel jsou zelenina.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "Počítač potřebuje elektřinu.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Kočka je malý hmyz.",
a: "pravda",
b: "lež",

correct: "b",
},{
  question: "Vidlička, lžíce a nožík jsou příbor.",
  a: "pravda",
  b: "lež",
  
  correct: "a",
},
{
question: "Pampeliška je květ.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "Kluci rádi nosí sukně.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "Děti si rádi hrají.",
a: "pravda",
b: "lež",

correct: "a",
},{
  question: "Pejsek rád maluje štětcem.",
  a: "pravda",
  b: "lež",
  
  correct: "b",
},
{
question: "Kočky loví myši.",
a: "pravda",
b: "lež",

correct: "a",
},
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>
        
                  
                  <li>
                  <h4>Správná odpověď: ${question[quizData[i].correct]}</h4>
                <h4>Vybral jsi: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>Získal jsi ${score} bodů z ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Znovu zkusit</button>
            `
        
        
        }
    }
  })