//Objet JS Class

class CurlingPlayer{
    firstname
    #lastname

    constructor(firstname, lastname) {
        this.firstname = firstname
        this.#lastname = lastname
    }

    get lastname(){
        return this.#lastname
    }

    set lastname(value){
        this.#lastname = value
    }
}


let cp = new CurlingPlayer('Michel', "D'ici")
cp.lastname = "pas la"
console.log(cp.lastname)

//spread

let tab = [1,2,3,4]
let tab2 = [...tab, 45]

console.log(tab2)









