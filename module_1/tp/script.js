// import {dico} from "./dico.js";

let randomWord = getRandomWord()
let attempt = 5;


//tirer un mot aléatoire du dictionnaire
function getRandomWord() {
    let index = Math.floor(Math.random() * dico.length)
    return dico[index]
}

//afficher la version cachée du mot
function displayRandomWord() {

    // const SPECIAL_CHARACTER = [" ", "'", "-"]
    // let hideWord = "";
    // for(let i = 0; i < randomWord.length; i++){
    //     if(!SPECIAL_CHARACTER.includes(randomWord[i])){
    //         hideWord += "_"
    //     }else{
    //         hideWord += randomWord.charAt(i)
    //     }
    // }
    document.getElementById('hiddenWord').innerText = randomWord.replace(/\w/g, '_')
    displayAttempt()
}

function displayAttempt(){
    document.getElementById('nbAttempt').innerText = attempt
}


//générer les boutons correspondant à l'alphabet
function generateAlphabet() {

    const alphabet = document.getElementById('alphabet')

    // on boucle de 65 à 90 pour générer les lettres
    for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
        let button = document.createElement('button')
        button.innerText = String.fromCharCode(i)
        button.value = String.fromCharCode(i)

        button.addEventListener('click', function () {
            isLetterInWord(button.value)
        })

        //l'event est passé en paramètre
        //button.addEventListener('click',isLetterInWord)

        alphabet.append(button)
    }

}


//chercher si la lettre sélectionnée est présente dans le mot
function isLetterInWord(letter) {
    let hiddenWord = document.getElementById('hiddenWord').innerText
    let isGoodGuess = false;

    for (let i = 0; i < randomWord.length; i++) {
        //afficher les lettres du mot qui ont été trouvées
        if (randomWord[i] == letter) {
            hiddenWord = hiddenWord.slice(0, i) + letter + hiddenWord.slice(i + 1)
            isGoodGuess = true
        }
    }
    document.getElementById('hiddenWord').innerText = hiddenWord

    if(!isGoodGuess){
        attempt--
        displayAttempt()
    }


    checkWin()
}


//vérifie si on a gagné ou pas encore perdu, compter les tentatives
function checkWin(){
    let hiddenWord = document.getElementById('hiddenWord').innerText

    if(!hiddenWord.includes("_") && attempt > 0){
        alert("Bravo ! C'est win ! ;)")
    }

    if(attempt == 0){
        alert("Dommage !")
    }
}

function init(){
    displayRandomWord()
    generateAlphabet()
}

window.onload = init

//reset pour recommencer