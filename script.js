const btn = document.querySelector('.addBtn');
const input = document.querySelector('.wrapper-input');
const ulList = document.querySelector('.list')
const alert = document.querySelector('.alert-noTasks')
const deletebtn1 = document.querySelector('.delete')
const taskList = document.getElementsByTagName('li')
const tools = document.querySelector('tools')
const end = document.querySelector('endList')



let newTask;
let idNumber = 0;
const creativeTask = () => {
    if (input.value !== '') {
        idNumber++
        newTask = document.createElement('li');
        newTask.innerText = input.value;
        newTask.setAttribute('id', `${idNumber}`)
        ulList.appendChild(newTask)

        icons()

        input.value = ''
        alert.innerText = ''
    } else {
        alert.innerText = 'wpisz treść zadania!'
    }

}

const icons = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools')

    newTask.appendChild(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'


    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.innerHTML = 'EDIT'

    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    newTask.appendChild(completeBtn)
    newTask.appendChild(editBtn)
    newTask.appendChild(deleteBtn)
}

const checkClick = e => {
    if (e.target.classList.value !== '') {
        if (e.target.closest('button').classList.contains('complete')) {
            e.target.closest('li').classList.toggle('completed')
            e.target.closest('button').classList.toggle('completed')
            e.target.getElementsById.appendChild.add(end)



        } else if (e.target.closest('button').classList.contains('delete')) {
            deleteTask(e)
        } else if (e.target.closest('button').contains('edit')) {
            editTask(e)
        }
    }

}


const deleteTask = e => {
    const deleteToDo = e.target.closest('li')
    deleteToDo.remove()

    if (taskList.length === 0) {
        alert.innerText = 'Brak zadań!'
    }

}

const enterCheck = e => {
    if (e.keyCode === 13) {

        e.preventDefault();
        creativeTask()
    }
}


btn.addEventListener('click', EnterClick = () => {
    creativeTask()
})

input.addEventListener('keyup', enterCheck)
ulList.addEventListener('click', checkClick)