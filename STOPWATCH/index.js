let container = document.querySelector('.container')

let sec = 0,
    temp,
    min = 0,
    hr = 0

const timerStart = () => {

    temp = setInterval(() => {
        if (sec < 59) {
            sec++
        }
        else if (min >= 59) {
            hr++;
            min = 0
        }
        else {
            min++
            sec = 0
        }
        container.innerText = (`${String(hr).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`)
    }, 1000)
}

const timerStop = () => {
    clearInterval(temp)

}