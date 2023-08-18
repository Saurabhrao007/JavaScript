const secondsElement = document.querySelector('.seconds')
const hoursElement = document.querySelector('.hours')
const minutesElement = document.querySelector('.minutes')
const daysElement = document.querySelector('.days')
const header = document.querySelector('h1')
const container = document.querySelector('.container')

const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour

const countTimer = () => {

    let now = new Date()
    const dd = String(now.getDate()).padStart(2, "0"),
        mm = String(now.getMonth() + 1).padStart(2, "0"),
        yyyy = now.getFullYear()
    const enteredDay = prompt('Enter the Day').padStart(2, "0")
    const enteredMonth = prompt('Enter the Month').padStart(2, "0")

    now = `${mm}/${dd}/${yyyy}`
    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`


    if (targetDate < now) {
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`

    }

    const timerStart = setInterval(() => {

        let targetTime = new Date(targetDate).getTime()
        let nowTime = new Date().getTime()
        let differenceTime = targetTime - nowTime
        const leftDays = (Math.floor(differenceTime / day))
        const leftHours = (Math.floor((differenceTime % day) / hour))
        const leftMinutes = (Math.floor((differenceTime % hour) / minute))
        const leftSeconds = (Math.floor((differenceTime % minute) / second))
        daysElement.innerText = leftDays
        hoursElement.innerText = leftHours
        minutesElement.innerText = leftMinutes
        secondsElement.innerText = leftSeconds
        if (differenceTime < 0) {
            header.innerText = `Time's Up`
            header.style.color = "green"
            clearInterval(timerStart)
            container.style.display = 'none'
        }

    }, 0)


}
countTimer()

