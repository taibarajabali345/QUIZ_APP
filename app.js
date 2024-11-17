// Quiz Questions
var allQuestions = {
    JavaScript: [
        { question: "What is the purpose of the 'this' keyword in JavaScript?", opt1: "Refers to the current object", opt2: "Refers to a global variable", opt3: "Declares a variable", opt4: "None of the above", ans: "Refers to the current object" },
        { question: "Which method is used to add an element to the end of an array?", opt1: "push()", opt2: "pop()", opt3: "unshift()", opt4: "concat()", ans: "push()" },
        { question: "What is a promise in JavaScript?", opt1: "An object for asynchronous operations", opt2: "A function for synchronous code", opt3: "A method to declare variables", opt4: "None of the above", ans: "An object for asynchronous operations" },
        { question: "Which keyword is used to handle errors in JavaScript?", opt1: "catch", opt2: "try", opt3: "finally", opt4: "All of the above", ans: "All of the above" },
        { question: "What does 'typeof' operator return in JavaScript?", opt1: "The type of a variable", opt2: "The value of a variable", opt3: "A reference to the variable", opt4: "None of the above", ans: "The type of a variable" },
        { question: "Which of the following is a falsy value in JavaScript?", opt1: "0", opt2: "null", opt3: "undefined", opt4: "All of the above", ans: "All of the above" },
        { question: "What is the output of '2' + 2 in JavaScript?", opt1: "22", opt2: "4", opt3: "NaN", opt4: "undefined", ans: "22" },
        { question: "Which method is used to iterate over an array in JavaScript?", opt1: "forEach()", opt2: "map()", opt3: "filter()", opt4: "All of the above", ans: "All of the above" },
        { question: "What does the '===' operator check in JavaScript?", opt1: "Equality in value", opt2: "Equality in value and type", opt3: "Reference equality", opt4: "None of the above", ans: "Equality in value and type" },
        { question: "What is the output of 'typeof NaN'?", opt1: "undefined", opt2: "object", opt3: "number", opt4: "NaN", ans: "number" }
      ],
        HTML: [
          { question: "What is the purpose of the <head> tag in HTML?", opt1: "Contains metadata", opt2: "Contains visible content", opt3: "Contains scripts only", opt4: "Defines the document body", ans: "Contains metadata" },
          { question: "Which attribute is used to define inline styles?", opt1: "style", opt2: "class", opt3: "id", opt4: "src", ans: "style" },
          { question: "Which HTML tag is used to define an unordered list?", opt1: "&lt;ul&gt;", opt2: "&lt;ol&gt;", opt3: "&lt;li&gt;", opt4: "&lt;list&gt;", ans: "&lt;ul&gt;" },
          { question: "What is the correct syntax for creating a hyperlink in HTML?", opt1: "&lt;a href='url'&gt;text&lt;/a&gt;", opt2: "&lt;link src='url'&gt;text&lt;/link&gt;", opt3: "&lt;a url='url'&gt;text&lt;/a&gt;", opt4: "&lt;hyperlink href='url'&gt;text&lt;/hyperlink&gt;", ans: "&lt;a href='url'&gt;text&lt;/a&gt;" },
          { question: "Which element is used to create a table row?", opt1: "&lt;tr&gt;", opt2: "&lt;td&gt;", opt3: "&lt;th&gt;", opt4: "&lt;row&gt;", ans: "&lt;tr&gt;" },
          { question: "What does the &lt;img&gt; tag require to display an image?", opt1: "src attribute", opt2: "alt attribute", opt3: "title attribute", opt4: "Both src and alt attributes", ans: "Both src and alt attributes" },
          { question: "Which tag is used to create a dropdown list?", opt1: "&lt;select&gt;", opt2: "&lt;option&gt;", opt3: "&lt;dropdown&gt;", opt4: "&lt;list&gt;", ans: "&lt;select&gt;" },
          { question: "Which attribute specifies the text color inside a tag?", opt1: "color", opt2: "text", opt3: "style", opt4: "font", ans: "style" },
          { question: "What does the &lt;title&gt; tag define?", opt1: "The document title in the browser tab", opt2: "The main heading of the document", opt3: "The metadata of the document", opt4: "None of the above", ans: "The document title in the browser tab" },
          { question: "Which tag is used to define a block of text with preformatted whitespace?", opt1: "&lt;pre&gt;", opt2: "&lt;code&gt;", opt3: "&lt;block&gt;", opt4: "&lt;format&gt;", ans: "&lt;pre&gt;" }
        ],
      
      CSS: [
        { question: "Which property is used to change text color in CSS?", opt1: "color", opt2: "background-color", opt3: "font-color", opt4: "text-color", ans: "color" },
        { question: "Which property controls the size of text in CSS?", opt1: "font-size", opt2: "text-size", opt3: "font-style", opt4: "text-style", ans: "font-size" },
        { question: "Which CSS property is used to change the background color?", opt1: "background-color", opt2: "color", opt3: "bgcolor", opt4: "background-style", ans: "background-color" },
        { question: "What is the correct way to center text in CSS?", opt1: "text-align: center;", opt2: "align: center;", opt3: "text: center;", opt4: "align-text: center;", ans: "text-align: center;" },
        { question: "Which CSS property is used to make text bold?", opt1: "font-weight", opt2: "font-style", opt3: "text-style", opt4: "text-weight", ans: "font-weight" },
        { question: "Which property is used to change the font in CSS?", opt1: "font-family", opt2: "font-style", opt3: "font-weight", opt4: "font-face", ans: "font-family" },
        { question: "Which property is used to add padding inside an element?", opt1: "padding", opt2: "margin", opt3: "spacing", opt4: "border", ans: "padding" },
        { question: "How do you apply a class selector in CSS?", opt1: ".classname", opt2: "#classname", opt3: "classname", opt4: "*classname", ans: ".classname" },
        { question: "Which property sets the space outside an element?", opt1: "margin", opt2: "padding", opt3: "spacing", opt4: "border", ans: "margin" },
        { question: "Which property sets the height of an element?", opt1: "height", opt2: "line-height", opt3: "max-height", opt4: "min-height", ans: "height" }
      ],
      
  };
  
  var selectedQuiz = "JavaScript";
  var questions = [];
  var index = 0;
  var result = 0;
  var startTime, endTime;
  
  // Start Quiz
  function startQuiz() {
    var username = document.getElementById("username").value;
    var rollno = document.getElementById("rollno").value;
    selectedQuiz = document.getElementById("quiz-type").value;
  
    if (!username || !rollno) {
      Swal.fire({
        icon: "error",
        title: "Incomplete Details",
        text: "Please fill in your name and roll number to proceed!",
      });
      return;
    }
  
    questions = allQuestions[selectedQuiz];
    localStorage.setItem("username", username);
    localStorage.setItem("rollno", rollno);
    localStorage.setItem("selectedQuiz", selectedQuiz);
    localStorage.setItem("userAnswers", JSON.stringify({}));
  
    Swal.fire({
      icon: "success",
      title: "Quiz Started",
      text: `Good luck, ${username}!`,
      timer: 1500,
      showConfirmButton: false,
    });
  
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    startTime = new Date();
    renderQues();
  }
  
  // Render Question
  function renderQues() {
    var container = document.getElementById("quiz-container");
    if (!questions[index]) {
      calculateResult();
      return;
    }
  
    var userAnswer = JSON.parse(localStorage.getItem("userAnswers")) || {};
  
    container.innerHTML = `
      <h3 class="text-center text-body-secondary">${selectedQuiz} Quiz</h3>
      <p class="question">${index + 1}. ${questions[index].question}</p><hr/>
      ${renderOptions(userAnswer[index])}
      <button class="btn btn-primary m-2" onclick="previousQuestion()">Previous</button>
      <button class="btn btn-success m-2" onclick="nextQuestion()">Next</button>
    `;
  }
  
  function renderOptions(selectedOption) {
    const options = ["opt1", "opt2", "opt3", "opt4"];
    return options
      .map(
        (opt) => `
        <div class="options">
          <label>
            <input type="radio" name="option" value="${questions[index][opt]}" ${
          questions[index][opt] === selectedOption ? "checked" : ""
        }> 
            ${questions[index][opt]}
          </label>
        </div>
      `
      )
      .join("");
  }
  
  // Save Answer and Move to the Next Question
  function nextQuestion() {
    saveAnswer();
    if (index < questions.length - 1) {
      index++;
      renderQues();
    } else {
      calculateResult();
    }
  }
  
  // Move to the Previous Question
  function previousQuestion() {
    if (index > 0) {
      index--;
      renderQues();
    }
  }
  
  // Save the User's Answer in Local Storage
  function saveAnswer() {
    const options = document.getElementsByName("option");
    let selectedValue = null;
  
    for (const option of options) {
      if (option.checked) {
        selectedValue = option.value;
        break;
      }
    }
  
    const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || {};
    userAnswers[index] = selectedValue;
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  }
  
  // Calculate the Quiz Result
  function calculateResult() {
    saveAnswer(); // Ensure the last question's answer is saved
    endTime = new Date();
    const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
    const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || {};
  
    result = Object.keys(userAnswers).reduce((score, qIndex) => {
      if (userAnswers[qIndex] === questions[qIndex].ans) {
        score++;
      }
      return score;
    }, 0);
  
    const percentage = ((result / questions.length) * 100).toFixed(2);
    const username = localStorage.getItem("username");
    const rollno = localStorage.getItem("rollno");
  
    Swal.fire({
      icon: percentage >= 70 ? "success" : "error",
      title: "Quiz Completed!",
      html: `
        <b>${percentage >= 70 ? "Congratulations!" : "Better luck next time!"}</b><br>
        Name: ${username}<br>
        Roll No: ${rollno}<br>
        Correct Answers: ${result}/${questions.length}<br>
        Score: ${percentage}%<br>
        Time Taken: ${timeTaken} seconds
      `,
      confirmButtonText: "OK",
    });
  
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("user-info").innerHTML = `Name: ${username}, Roll No: ${rollno}, Quiz: ${selectedQuiz}`;
    document.getElementById("score").innerHTML = `You scored ${result} out of ${questions.length} (${percentage}%).`;
  
    // Clear Local Storage
    localStorage.clear();
  }
  

