export class Question {

    label
    answers
    correctAnswerNumber

    constructor(label, answers, correctAnswerNumber) {
        this.label = label
        this.answers = answers
        this.correctAnswerNumber = correctAnswerNumber
    }

    display() {

        //récupération de la div parent
        const quiz = document.getElementById('quiz')
        quiz.innerHTML = ""

        //création de la div contenant l'énoncé de la question
        const labelDiv = document.createElement('div')
        labelDiv.innerText = this.label

        //création de la div contenant les réponses
        const answersDiv = document.createElement('div')

        this.answers.forEach(function (val, index) {

            const input = document.createElement('input')
            input.type = 'radio'
            input.id = 'answer-' + index
            input.value = index
            input.name = 'quiz'

            const label = document.createElement('label')
            label.setAttribute('for', 'answer-' + index)
            //label.htmlFor = 'answer-' + index
            label.innerText = val

            answersDiv.append(input)
            answersDiv.append(label)
        })

        quiz.append(labelDiv)
        quiz.append(answersDiv)
    }




}