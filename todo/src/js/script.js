/* import {add, sub} from 'date-fns' */
import compareAsc from "date-fns/compareAsc";
let parentList = [];
let project = [];
let todoCounterVar = 1;
class Todo{
    constructor(number,title,description,dueDate,priority,notes){
        this.number = number,
        this.title = title,
        this.description= description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.notes = notes
    }
}

function createTodo(todoCounterVar,title,description,dueDate,priority,notes){
    const todos = new Todo(todoCounterVar,title,description,dueDate,priority,notes);
    let objLength = Object.keys(todos);
    objLength = objLength.length;
    project.push(todos);
    return [todos, objLength];
}
function addTodo(){

}
function sortingTodo(project, sortByValueSelected){
    // based on due date 
    // based on priority
    const priorityObjNumber = {
        High: 1,
        Medium: 2,
        Low: 3
    }
    if(sortByValueSelected === 'byPriority'){
        project.sort(comparePriority);
        printListToDOM(project);
    }else if (sortByValueSelected === 'byDueDate'){
        project.sort(compareAsc);
        printListToDOM(project);
    }
    function comparePriority(a,b){
        const tempValueA =  a.priority;
        const tempValueB = b.priority;
        const aPriority = priorityObjNumber[tempValueA];
        const bPriority = priorityObjNumber[tempValueB];
        return aPriority - bPriority;
    }
    function compareDueDate(a,b){
        const tempDateValueA = a.dueDate;
        const tempDateValueB = b.dueDate;
        return 
    }
}
const todoForm = document.querySelector('#todoform');
todoForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    inputFieldLoader();
})

function inputFieldLoader(){
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    const notes = document.querySelector('#notes').value;
    const todoObject = createTodo(todoCounterVar,title,description,dueDate,priority,notes);
    todoCounterVar++;
    const entries = getValue(todoObject[0]);
    printListToDOM(project);
}

// get values from the new obj created
function getValue(todoObject){
    let entries = Object.values(todoObject);

    return entries;
 }

// color assinging based on priority of task
function priorityColorCreate(priorityValue, tD){
    const temptD = document.querySelector('#priorityColor');
    if(priorityValue === 'High'){
        temptD.style.color = 'red';
    }else if(priorityValue === 'Medium'){
        temptD.style.color = 'yellow';
    }else{
        temptD.style.color = 'green';
    }
}


// go through all the list and print it on DOM
function printListToDOM(project) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = ""; // Clear existing table rows
  
    // Loop through the list and create table rows
    project.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.title}</td>
        <td>${item.description}</td>
        <td>${item.dueDate}</td>
        <td>${item.priority}</td>
        <td>${item.notes}</td>
      `;
      tableBody.appendChild(row);
      /* const priorityValue = item.priority;
      priorityColorCreate(priorityValue); */
    });
  }
const sortingSelect=document.querySelector('#sorting');
sortingSelect.addEventListener('change', (e)=>{
    const sortByValueSelected = sortingSelect.options[sortingSelect.selectedIndex].value;
    sortingTodo(project,sortByValueSelected);
    console.log(sortByValueSelected);
});