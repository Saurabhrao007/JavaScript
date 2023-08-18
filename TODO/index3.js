const task = document.querySelector('.task')
const taskes = document.querySelector('.tasks')

let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
showAllTasks()

function showAllTasks() {
    tasks.forEach((item, index) => {
        const div = document.createElement('div')
        const heading = document.createElement('p')
        heading.innerText = item.task
        div.append(heading)
        const description = document.createElement('p')
        description.innerText = item.description
        div.append(description)
        div.setAttribute('class', 'task')
        const buttonId = document.createElement('button')
        buttonId.innerText = 'Delete Task'
        div.append(buttonId)
        buttonId.addEventListener('click', () => {
            removeTasks()
            tasks.splice(index, 1)
            console.log(tasks)
            showAllTasks()

        })
        taskes.append(div)


    })
}
function removeTasks() {
    tasks.forEach(() => {
        const div = document.querySelector('.task')
        div.remove()
    })
}

const addTask = () => {
    const task = document.querySelector('input')
    const description = document.querySelector('textarea')
    if (task.value === '') {
        alert('Fill the values')
        return
    }
    else if (description.value === '') {
        alert('Fill the values')
        return
    }
    removeTasks()
    tasks.push({
        task: task.value,
        description: description.value
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    showAllTasks()


}
