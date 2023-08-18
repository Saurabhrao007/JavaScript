const para = document.querySelector('.para')

const container = document.querySelector('.container')

let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


const generateWords = (temp) => {
    let word = ''
    for (let i = 0; i < temp; i++) {
        const factor = (Math.random() * 25).toFixed()
        word += alphabets[factor]

    }
    return word
}

const generatePara = () => {
    let words = ''
    const noofwords = document.querySelector('.words')
    for (let i = 0; i < noofwords.value; i++) {
        let random = (Math.random() * 10).toFixed()
        if (random == 0) random = 1
        words += (generateWords(random)) + " "
    }
    let tempPara = document.createElement('p')
    tempPara.innerText = words
    tempPara.setAttribute('class', 'para')
    container.append(tempPara)
}
