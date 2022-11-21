let quizArray = [
  {
    question: "What is the correct command to create a new React project?",
    options: [
      "npm create-react-app",
      "npx create-react-app myReactApp",
      "npm create-react-app myReactApp",
      "npx create-react-app",
    ],
    crctOption: "npx create-react-app myReactApp",
  },
  {
    question:
      "What command is used to start the React local development server?",
    options: ["npm start", "npm build", "npm run dev", "npm serve"],
    crctOption: "npm start",
  },
  {
    question:
      "What command is used to start the React local development server?",
    options: ["3000", "3500", "5000", "8080"],
    crctOption: "3000",
  },
  {
    question:
      "What command is used to start the React local development server?",
    options: ["False", "True"],
    crctOption: "True",
  },
  {
    question: `function Car() {
            return <h1>Ford Mustang</h1>;
          }
          
          const root = createRoot(document.getElementById('root'));
          root.render(<Car />);`,
    options: ["Component", "h1", "div", "ReactDom"],
    crctOption: "Component",
  },
];
let index = 1;
let options = [];
let res = "";
function quiz(index) {
  let content = "";
  let question = quizArray[index - 1];
  console.log(index);
  if (index <= 5) {
    console.log(index, question);
    content += `    
    </div>
      <p>Question ${index}</p>
      <p>
      ${question.question}
      </p>
      `;
    question.options.map((el) => {
      content += `<div class="options"><input type="radio" name="quiz" id="" value="${el}" onchange="handleChange(event)"> ${el} </div>`;
    });

    content += `
      <hr>
      <span>Question ${index} of 5 </span><button class="btn-next" onclick="quiz(${
      index + 1
    })" id='resbtn'>Next</button><button onclick="quiz(${--index})" class="btn-next" id='btn'>Previous</button>`;
    document.getElementById("container").innerHTML = content;
  }
  if (index === 4) {
    document.getElementById(
      "resbtn"
    ).innerHTML = `<button class="btn-submit" onclick="checkAns(event)" id="resbtn">Submit</button> `;
  }
}

function handleChange(e) {
  e.target.value;
  options.push(e.target.value);
}

let crctOptions=[]
function checkAns(e) {
  e.preventDefault();
  quizArray.filter((el) => crctOptions.push(el.crctOption))
  document.getElementById("resbtn").innerHTML =
      `<button class="btn-submit" onclick="quizchecked(event)" id="resbtn">check Ans</button>`;
}
function quizchecked(e) {
    e.preventDefault();
    let res='';
    res+=`<h2>Your result is:</h2>
    <ol>`
    for(i=0;i<options.length;i++){
        if(crctOptions[i]===options[i])
        {
            res+=`<li>${options[i]}</li>`
        }
        else res+=`<li class='incrct'>${options[i]}</li>`
    }
    res+=`</ol>`
    document.getElementById("result").innerHTML = res;
}

