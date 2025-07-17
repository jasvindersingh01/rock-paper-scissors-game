let userScore = 0;
let computerScore = 0;
let msg = document.querySelector('.Msgbox');
let userScoreSpan = document.querySelector('#your-score');
let computerScoreSpan = document.querySelector('#comp-score');

const choices = document.querySelectorAll('.choice');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        playGame(userChoice);

    })
}
)

const computerPlay = () => {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}
playGame = (userChoice) => {
    console.log(`You clicked on ${userChoice}`);
    const computerChoice = computerPlay();
    console.log(`Computer chose ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log(`It's a tie!`);
        msg.innerHTML = `It's a tie, Play agian!`;
        msg.style.textShadow  = ' 0 0 12px  black';
    }
    else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log('You Won..!');
        msg.innerHTML = `Congratulation, You Won..! Your ${userChoice} beats Computer ${computerChoice}`;
        msg.style.textShadow  = ' 0 0 12px  green';
        userScore++;
        userScoreSpan.innerHTML = userScore;
    }
    else {
        console.log('You Lost..!');
        msg.innerHTML = `Oops, You Lost..! Computer ${computerChoice} beats Your ${userChoice}`;
        msg.style.textShadow  = ' 0 0 12px  red';
        computerScore++;
        computerScoreSpan.innerHTML = computerScore;
    }
}