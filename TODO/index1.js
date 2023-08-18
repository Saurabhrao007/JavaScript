const title = document.getElementById('title')
const description = document.getElementById('description')
const form = document.querySelector('form')
const tasked = document.querySelector('.tasks')

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []
showAllTasks()

function showAllTasks() {
    tasks.forEach((value, index) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'task')
        const h1 = document.createElement('h1')
        h1.innerText = value.title
        div.append(h1)
        const p = document.createElement('p')
        p.innerText = value.description
        div.append(p)
        const button = document.createElement('button')
        button.innerText = 'Delete'
        button.addEventListener('click', () => {
            deleteAllTasks()
            tasks.splice(index, 1)
            showAllTasks()

        })
        div.append(button)
        tasked.append(div)

    })
}
const deleteAllTasks = () => {
    tasks.forEach(() => {
        const div = document.querySelector('.task')
        div.remove()
    })

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    deleteAllTasks()
    tasks.push({
        title: title.value,
        description: description.value
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log(tasks)
    showAllTasks()
})