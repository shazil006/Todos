
/*
let js ="amazing";
if (js=== "javascript is amazing") alert ("javascript is fun!");
let a =prompt("enter first value");
let b =prompt("enter second value");

console.log (40+30+10-20);

let firstname = "shazil";
let secondname ="kalam";
let thirdname ="sheikh";

console.log(firstname);
console.log(secondname);
console.log(thirdname);

let PI =(13+14+16);
console.log(PI);

let number =(2000);
console.log(number);

let student ="kamran";
console.log(student);

let studentsareshouting = true;
console.log(studentsareshouting);

console.log(typeof true);
console.log(typeof 60);
console.log(typeof "shazil");

let teacher;
console.log(teacher);

teacher = "headmaster";
console.log(teacher);
console.log(typeof null);*/

// let age= 40;
// age = 42;

// const birthyear = 2000;
// var job = "marketing";
// job = "medical representetive";

// const now = 2024;
// const ageshazil = now - 2000;
// const agesherry = now - 1998;
// console.log(ageshazil,agesherry);

// console.log(ageshazil*2 ,agesherry /2**4-2);
// const firstname = "shazil";
// const lastname = "sheikh";

// console.log("shazil"+" "+"sheikh");

// let x = 10 + 5;
// x = 10 *2;
// x*=4;
// x++;
// x--;
// x--;
// console.log(x);

// console.log(ageshazil > agesherry);
// console.log(agesherry >= ageshazil);
// console.log(ageshazil>=18);

// const fullage=ageshazil >= 18;
// console.log(now -2025 > now -2025);


const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    addTodo();
})

function addTodo(todo){
    let todoText = input.value
    console.log(todoText);
    if(todo){
        todoText = todo.text
    }
    if(todoText){
        const todoEl = document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed')

        }
        todoEl.innerText = todoText

        todoEl.addEventListener('click' , ()=> todoEl. 
    classList.toggle('completed'))

    todoEl.addEventListener('contextmenu', (e) =>{
        e.preventDefault()

        todoEl.remove()
    })
        todosUL.appendChild(todoEl)
        input.value =''
    }

}