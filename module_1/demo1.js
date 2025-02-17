//déclarations
let wizard = "Harry Potter"
let spell = "Lumos !"

let nbDeathlyHallow = 3
let wizards = ["Hermione", "Ron", "Drago", "Michel"]

console.log(typeof wizard)
console.log(nbDeathlyHallow)

for(let wiz of wizards){
    console.log(wiz);
}


let date = new Date()
if(date.getFullYear() === 2025){
    console.log("Bonne année !")
}

//fonctions
function getSpell(){
    return spell;
}

(function getSpelle(index){
    console.log("Pelle ! " + index);
})(12)

//fonction anonyme
const getSpell3 = function(index){
    const spells = [
        'Lumos',
        'Us',
        'MichelSpell'
    ]
    //renvoie le sort de l'index transmis
    return spells[index]
}

console.log(getSpell3(2))

//fonction fléchée
const getSpell4 = (index) => {
    const spells = [
        'Lumos',
        'Us',
        'MichelSpell'
    ]
    //renvoie le sort de l'index transmis
    return spells[index]
}


console.log(getSpell4(1))





















