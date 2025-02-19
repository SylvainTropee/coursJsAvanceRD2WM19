let pikachu;

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((data) => {

        let h2 = document.createElement('h2')
        h2.innerText = data.name

        document.body.append(h2)

        let img = document.createElement('img')
        img.src = data.sprites.other.home.front_default

        document.body.append(img)

        let divStat = document.createElement('div')

        data.stats.forEach(function(val){

            let div = document.createElement('div')
            div.innerText = `${val.stat.name} = ${val.base_stat}`

            divStat.append(div)
        })

        document.body.append(divStat)
    })

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(function (response) {
//         return response.text()
//     })
//     .then(function (data) {
//         console.log(data)
//     })


console.log(pikachu)