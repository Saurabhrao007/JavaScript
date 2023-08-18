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


const changeBackground = () => {
    const zodiac = document.getElementById('zodiac').value
    for (const key in colors) {
        if (key === zodiac)
            document.body.style.backgroundColor = colors[key]
    }


}