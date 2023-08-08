const todoInput =document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

const savedTodo = JSON.parse(localStorage.getItem('todos') || []);


for(const todo of savedTodos) {
    addTodoToList(todo);
    
}


function addTodo(){
    const todoText = todoInput.value.trim();
   if (todoText === "") return;
   const todo ={
    id: Date.now(),
    text : todoText,
    completed:false,
   };

   savedTodos.push(todo);
   localStorage.setItem('todos', JSON.stringify(savedTodos));
   todoInput.value="";
}