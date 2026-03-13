if(localStorage.getItem("admin")!=="true"){window.location.href="login.html";}
function logout(){localStorage.removeItem("admin");window.location.href="login.html";}
let questions=JSON.parse(localStorage.getItem("questions"))||[];
const form=document.getElementById("admin-question-form");
const list=document.getElementById("question-list");
form.addEventListener("submit",function(e){
e.preventDefault();
const q=document.getElementById("question").value;
const c=document.getElementById("correct").value;
const w1=document.getElementById("wrong1").value;
const w2=document.getElementById("wrong2").value;
questions.push({question:q,answers:[{text:c,correct:true},{text:w1,correct:false},{text:w2,correct:false}]});
localStorage.setItem("questions",JSON.stringify(questions));
form.reset();displayQuestions();
});
function displayQuestions(){list.innerHTML="";questions.forEach((q,index)=>{const li=document.createElement("li");li.innerHTML=`${q.question}<button onclick="deleteQuestion(${index})">Delete</button>`;list.appendChild(li);});}
function deleteQuestion(index){questions.splice(index,1);localStorage.setItem("questions",JSON.stringify(questions));displayQuestions();}
displayQuestions();