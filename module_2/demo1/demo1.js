//Objet JS

const curlingPlayer = {
    firstname: "Federico",
    lastname: "Mitchel",
    age: 38,
    position : "Balayeur"
}


console.log(curlingPlayer)
console.log(curlingPlayer.firstname)
curlingPlayer.position = "Lanceur"
curlingPlayer.number = 5
curlingPlayer.description = function (){
    return `${this.firstname} ${this.lastname}`
}
console.log(curlingPlayer)
console.log(curlingPlayer.description())