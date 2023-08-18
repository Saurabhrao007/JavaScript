const daysElement = document.querySelector('.days')
const hoursElement = document.querySelector('.hours')
const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')
const timeElement = document.querySelector('.timer')
const header = document.querySelector('h1')

const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour

const timerFunction = () => {

    let now = new Date()

    const dd = String(now.getDate()).padStart(2, "0"),
        mm = String(now.getMonth() + 1).padStart(2, "0"),
        yyyy = now.getFullYear(),
        enteredDay = prompt('Enter the Day').padStart(2, "0"),
        enteredMonth = prompt('Enter the Month').padStart(2, "0")
    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`



    now = `${mm}/${dd}/${yyyy}`

    if (targetDate < now) {
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`

    }
    const idInterval = setInterval(() => {
        const timer = new Date(targetDate).getTime()
        const todayTime = new Date().getTime()
        const differenceTime = timer - todayTime
        const leftDays = (Math.floor(differenceTime / day))
        const leftHours = (Math.floor((differenceTime % day) / hour))
        const leftMinutes = (Math.floor((differenceTime % hour) / minute))
        const leftSeconds = (Math.floor((differenceTime % minute) / second))
        daysElement.innerText = leftDays
        hoursElement.innerText = leftHours
        minutesElement.innerText = leftMinutes
        secondsElement.innerText = leftSeconds

        if (differenceTime < 0) {
            header.innerText = 'Congratulations , You are there!'
            timeElement.style.display = 'none'
            clearInterval(idInterval)
        }

    }, 0);






}
timerFunction()