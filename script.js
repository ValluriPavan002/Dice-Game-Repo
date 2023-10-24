'user strict';
/**
 * getting the elements
 */
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1')
const diceEl = document.querySelector('.dice');
const player0E1 = document.querySelector('.player--0');
const player0E2 = document.querySelector('.player--1');

const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.querySelector('#current--1');


/**
 * starting conditions
 */
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores, currentScore, activePlayer, playing;

const init = function () {
    /**scores of both players stored here in the below 
      * array i.e., player 0 - index 0
      * */
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    player0E1.classList.remove('player--winner');
    player0E2.classList.remove('player--winner');

    player0E1.classList.add('player--active');
    player0E2.classList.remove('player--active');

}

init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //if the current activeplayer is 0 then the
    //activeplayer will be 1 else activeplayer is 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    //changing the visual using toggle method
    player0E1.classList.toggle('player--active');
    player0E2.classList.toggle('player--active');
}

//ROLLING DICE FUNCTIONALITY
rollButton.addEventListener('click', () => {

    if (playing) {
        //1. Generating a random dice roll
        let dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        //2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;

        //3. Check for rolled 1 : if true, switch to next player
        if (dice !== 1) {
            //add dice to current score
            currentScore += dice//currentScore+dice;

            //Building the Id of the player dynamically
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //switch to next player
            //setting the old player current score to 0    
            switchPlayer();
        }
    }
});

holdButton.addEventListener('click', () => {
    if (playing) {
        // 1. add current score to active player's score
        // 2. Check if player's score is already >=100
        // Switch to the next player
        scores[activePlayer] = scores[activePlayer] + currentScore;
        console.log(scores);
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //switching the players when hold button is clicked
        if (scores[activePlayer] >= 100) {
            //setting playing to false as player score is 20
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});


newButton.addEventListener('click', init);

