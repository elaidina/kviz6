const quizData = [
    {
        question: "Didlina má 5 dětí. 2 jsou holčičky. Kolik je kluků?",
        a: "3",
        b: "4",
        
        correct: "a",
    },
    {
      question: "Barbi má 25 let. Ken je o 5 let starší. Kolik let je Kenovi?",
      a: "30",
      b: "25",
      
      correct: "a",
  },
  {
    question: "Miška chce spravodlivě rozdělit 15 jahod mezi své 3 dcery. Kolik dostane každá?",
    a: "5",
    b: "6",
    
    correct: "a",
},
{
  question: "Miška staví diamanty z lega. Na každý diamant použije 6 kostek lega. Kolik kostek lega potřebuje na 4 diamanty?",
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
question: "Miška má v misce 25 kakaových cereálií a 26 karamelových cereálií. Kolik cereálií má v misce dokopy?",
a: "50",
b: "51",

correct: "b",
},{
  question: "Auta mají čtyři kola. Kolik kol má 5 aut?",
  a: "20",
  b: "18",
  
  correct: "a",
},
{
question: "Máma má 35 let. Táta je o dva roky mladší. Kolik roků mají dohromady?",
a: "65",
b: "68",

correct: "b",
},{
  question: "Jeden pavouk má 8 noh. Kolik noh mají dva pavouky?",
  a: "16",
  b: "18",
  
  correct: "a",
},
{
question: "Kniha má 20 stránek. Miška každý den přečte 5 stránek. Za kolik dní přečte celou knížku?",
a: "4",
b: "5",

correct: "a",
},{
  question: "Táta nasbíral 3 tašky hub. V každé tašce bylo 10 hub. Kolik hub našel táta spolu?",
  a: "30",
  b: "20",
  
  correct: "a",
},
{
question: "Nad květinou lítalo 6 včel a 3 motýly. Kolikrát víc bylo včel?",
a: "3-krát",
b: "2-krát",

correct: "b",
},{
  question: "Miška kreslí obrázky do knížky. Každý den jich nakreslí 5. Kolik obrázků nakreslí za 5 dní?",
  a: "25",
  b: "35",
  
  correct: "a",
},
{
question: "Na záhradě roste 5 tulipánů, 8 růží a 5 narcisů. Kolik květin je to dohromady?",
a: "18",
b: "16",

correct: "a",
},{
  question: " 20 barbín vytvořilo dvojice. Kolik dvojic vzniklo?",
  a: "12",
  b: "10",
  
  correct: "b",
},
{
question: "Miška má v peněžence pět 10-korun a dvě 5-koruny. Kolik má Miška korun?",
a: "60",
b: "50",

correct: "a",
},{
  question: "Martinka vyrostla na 100 centimetrů. Kolik je to metrů?",
  a: "1",
  b: "10",
  
  correct: "a",
},
{
question: "Únor trvá přesně 4 týdny. Kolik je to dní?",
a: "28",
b: "32",

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