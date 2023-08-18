const container = document.querySelector('.container')

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const generateWords = (temp) => {
    let word = ''
    for (let i = 0; i < temp; i++) {
        const factor = (Math.random() * 25).toFixed(0)
        factor === 0 && 1
        word += alphabets[factor]
    }
    return word
}
const generatePara = () => {
    let data = ''
    const words = document.getElementById('noOfWords')
    for (let i = 0; i < words.value; i++) {
        data += generateWords((Math.random() * 10).toFixed(0)) + ' '
    }
    const para = document.createElement('p')
    para.innerText = data
    para.setAttribute('class', 'para')
    container.append(para)
}