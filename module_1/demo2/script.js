//demonstration DOM

const colors = ["red", "yellow", "pink", "purple", "cornflowerblue"];

//récupérer le select

let select = document.getElementById('color')

console.log(select)

//ajouter les options du tableau
colors.forEach(function(value){
    //génération des options
    let option = document.createElement('option')
    option.innerText = value
    option.value = value
    //ajout dans le select de l'option
    select.append(option)
})

//ajouter un évènement sur le select
select.addEventListener('change', function (){
    let value = this.value
    let p = document.createElement('p')
    p.innerText = value

    document.body.append(p)

    //document.body.style.backgroundColor = value
    document.body.setAttribute('style', 'background-color : ' + value)
})
