const colors = {
    aries: 'red',
    taurus: 'pink',
    gemini: 'green',
    cancer: 'blue',
    leo: 'orange',
    virgo: 'peach',
    libra: 'cream',
    scorpio: 'maroon',
    sagittarius: 'yellow',
    capricon: 'black',
    aquarius: 'violet',
    pisces: 'yellow'
}

const getColor = () => {
    const color = document.querySelector('#zodiac').value
    for (key in colors) {
        if (key === color) {
            document.body.style.backgroundColor = colors[key]

        }
    }

}