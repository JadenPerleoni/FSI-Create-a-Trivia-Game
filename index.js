// Your Code Here
let userName = window.prompt('Please enter your name:')
let userScore = 0
let playAgain = true;

function playGame() {
    for(let i = 0; i < questions.length; i++){
        let question = questions[i]
        let answer = window.prompt(question.text)
    
        if(answer == question.correctAnswer) {
            userScore += 10
        }
    }
    
    window.alert(userName + ', your score is: ' + userScore)
}

while (playAgain === true) {
    playGame()
    let userChoice = window.prompt('Would you like to play the game again? Answer yes or no.')
    if (userChoice === 'yes') {
        playAgain = true
        playGame()
    } else {
        playAgain = false
        window.alert('Thanks for playing!')
        
    }
}