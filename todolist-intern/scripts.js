const taskAdd = document.getElementById('taskAdd');
const addBtn = document.getElementById('addBtn');
 const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);

taskAdd.addEventListener('keydown', function (e){
    if(e.key === 'Enter') addTask();
});

function addTask(){

    const taskText = taskAdd.value.trim();

    if(taskText === ""){
        alert("please enter a task");
    }

    const li = document.createElement('li');
    li.className = 'task';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.addEventListener('change', () =>{
        li.classList.toggle('completed',checkbox.checked);
    });

    const span = document.createElement('span');
    span.textContent = taskText;
    

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', ()=>{
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskAdd.value='';
}
