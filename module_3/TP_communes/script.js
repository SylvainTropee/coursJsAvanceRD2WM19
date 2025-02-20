const BASE_URL = "https://geo.api.gouv.fr"

async function callApi(url) {
    let response = await fetch(url)

    //if(response.status == 200)
    if (response.ok) {
        return response.json()
    }
}

async function getDepartements() {

    let data = await callApi(`${BASE_URL}/departements`)

    //data.forEach(function (dep) {})
    for (const dep of data) {

        const option = document.createElement('option')
        option.value = dep.code
        option.innerText = dep.code + " - " + dep.nom

        document.getElementById('dep').append(option)
    }
}

async function getCities(code){

    //this si getCities passé en callback représente le select
    // let data = await callApi(`${BASE_URL}/departements/${this.value}/communes`)
    let data = await callApi(`${BASE_URL}/departements/${code}/communes?fields=nom,code`)

    document.getElementById('cities').innerHTML = "<option selected disabled>- Communes -</option>"

    data.forEach(function (city){

        const option = document.createElement('option')
        option.value = city.code
        option.innerText = city.nom

        document.getElementById('cities').append(option)
    })
}

async function getCityDetail(cityCode){

    let data = await callApi(`${BASE_URL}/communes/${cityCode}?fields=nom,codesPostaux,population`)

    let p = document.createElement('p')
    p.innerText = `Nom : ${data.nom}, Population : ${data.population}, CP : ${data.codesPostaux.join('-')}`
    document.body.append(p)
}

function init(){

    getDepartements()

    // document.getElementById('dep').addEventListener('change', function (){
    //     //     getCities(this.value)
    //     // })
    document.getElementById('dep').addEventListener('change', function (){
        //this représente l'instance du select
        getCities(this.value)
    })

    document.getElementById('cities').addEventListener('change', function (){
        //this représente l'instance du select
        getCityDetail(this.value)
    })
}

init()














