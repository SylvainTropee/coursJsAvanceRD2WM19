export class Quiz{

    questions
    score
    index

    constructor() {
        this.questions = []
        this.index = 0
        this.score = 0
    }

    addQuestion(question){
        this.questions.push(question)
    }

    displayQuestion(question){
        question.display()
    }

    displayScore(){
        document.getElementById('quiz').innerText = `Score ${this.score} / ${this.index}`
    }

    collectAnswer(){

        const answerValue = document.querySelector("input:checked").value
        console.log(answerValue)

        if(answerValue == this.questions[this.index].correctAnswerNumber){
          this.score++
        }

        this.index++;

        if(this.index == this.questions.length){
            this.displayScore();
        }else{
            this.displayQuestion(this.questions[this.index])
        }

    }


}