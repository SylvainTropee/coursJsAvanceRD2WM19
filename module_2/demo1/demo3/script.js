//Objet JS structure

function CurlingPlayer(firstname, lastname, age = 12, position, number) {

    this.firstname = firstname ?? 'Michel'
    this.lastname = lastname
    this.age = age
    this.position = position
    this.description = function () {
        return `${this.firstname} ${this.lastname}`
    }
}

let curlingPlayer = new CurlingPlayer("Luigi", 'Mario', 15, {number : 5})
let curlingPlayer2 = new CurlingPlayer("Luigi2", 'Mario2', 152, {number : 55})
let curlingPlayer3 = new CurlingPlayer()
CurlingPlayer.prototype.color = "Blue"
console.log(curlingPlayer)
console.log(curlingPlayer2)
console.log(curlingPlayer3)
console.log(curlingPlayer.firstname)
curlingPlayer.position = "Lanceur"
curlingPlayer.description = function () {
    return `${this.firstname} ${this.lastname}`
}
console.log(curlingPlayer.description())