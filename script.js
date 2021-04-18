// var selection = prompt('would you like coffee or tea?')
// console.log('user typed: ', selection)

// var confirmation = confirm('would you like coffee?')
// console.log('user selected: ', confirmation)

// Create a rock paper scissors game where user plays against computer
// create arrays for R P S

var choices = ['R', 'P', 'S']

//create prompt for user selection and log selection
var userScore = 0
var computerScore = 0

// paper beats rock
// rock beats scissors
// scissors beats paper
function getWinner() {
    var userSelection = prompt('For rock paper scissors choose: R, S or P')

    if (userSelection == 'R' || userSelection == 'P' || userSelection == 'S') {
        console.log('user typed :', userSelection)
        const random = Math.floor(Math.random() * choices.length);
        var computer = choices[random]
        if (userSelection === computer) {
            alert('You tied')
        } else if ((userSelection === 'P' && computer == 'R') || (userSelection == 'R' && computer == 'S') || (userSelection == 'S' && computer == 'P') ) {
            alert('User wins, computer chose: ' + computer)
            userScore += 1
        } else {
            alert('computer wins, computer chose: '+ computer)
            computerScore += 1
        }
        alert('User Score is '+ userScore + ' Computer Score is ' + computerScore)

    } else {
        tryAgain = confirm('Invalid input, try again')
        getWinner()
    }
    
    getGame2()
}

getWinner()

function getGame2() {
    playAgain = confirm('Do you want to play again')
    if (playAgain === true) {
        getWinner()
    } 
}
//define rules

//computer selection

//compare user input to comptuer input

//log win or loss or tie

//replay