let pikachu;

async function callApi(url) {

    let response = await fetch(url)

    if (response.ok) {
        return await response.json()
    }

}

async function getPikachu() {

    let data = await callApi("https://pokeapi.co/api/v2/pokemon/pikachu")
    buildHtml(data)
}

function buildHtml(data) {
    let h2 = document.createElement('h2')
    h2.innerText = data.name

    document.body.append(h2)

    let img = document.createElement('img')
    img.src = data.sprites.other.home.front_default

    document.body.append(img)

    let divStat = document.createElement('div')

    data.stats.forEach(function (val) {

        let div = document.createElement('div')
        div.innerText = `${val.stat.name} = ${val.base_stat}`

        divStat.append(div)
    })

    document.body.append(divStat)

}

getPikachu()


