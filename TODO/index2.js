const url = 'https://catfact.ninja/fact'
const container = document.querySelector('.container')
const h1 = document.createElement('h1')

const fetchData = () => {
    fetch(url)
        .then((response) =>
            response.json()
        ).then((data) => {
            h1.innerText = data.fact + data.length
            container.append(h1)
        })
        .catch((e) => console.log(e))
        .finally(() => console.log('all done !'))


}


fetchData()