
///////There is a problem that I could not display "todo" array(localStorage) in ul.
const todoInp = document.querySelector('#todo');
const addBtn = document.querySelector('#add');
const list = document.querySelector('#list');
//console.log(input);
if(window.localStorage.getItem("todos") == undefined){
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);
console.log(todosEX);
console.log(todos.length);


addBtn.addEventListener('click', () =>{
    if(todoInp.value != ""){
        todos.push(todoInp.value);
        todos.pop();
         var todo=todoInp.value;
   
        todoInp.value = "";
    
   // console.log(todo);
// create li & span & delete button & update button
    var listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    var input = document.createElement('input');
    input.value=todo;
    input.type = "text";
    input.disabled = true;
    input.style.flexGrow='8';

    var remBtn = document.createElement('button');
    remBtn.textContent='Delete';
    remBtn.classList.add=('UpdatDeletBtn');

    var editBtn = document.createElement('button'); 
    editBtn.textContent='Edit';
    editBtn.classList.add=('UpdatDeletBtn');
    console.log(input);

 
// Add the element to the list  
    listItem.appendChild(input);
    listItem.appendChild(editBtn);
    listItem.appendChild(remBtn);
    list.appendChild(listItem);
   
    window.localStorage.setItem("todos", JSON.stringify(todos));
// EventListener for remBtn
    remBtn.addEventListener('click',e =>{
        //console.log(e.target);
        console.dir(e.target);
        list.removeChild(e.target.parentElement);
       // list.parentNode.removeChild(list);
       let index = todos.indexOf(todo);
       todos.splice(index, 1);
       window.localStorage.setItem("todos", JSON.stringify(todos));
    })

// EvenListener for editBtn
    editBtn.addEventListener('click',e=>{     
        if(input.disabled == true){
            input.disabled = !input.disabled;
         }
         else{
             input.disabled = !input.disabled;
            // input.disabled = !input.disabled;
            let indexof = todos.indexOf(todo);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
         }
     })
     
    }   
    
})


