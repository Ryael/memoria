/* Constants/Configs */

const FLIP_TIME = 400;
const UNMATCHED_TIME = 1000;
const SUPPORTED_EMOJIS = ["💧", "🔥", "🧩", "⚡", "🌀", "🎲", "🧨", "💎", "⭐", "🌙", "🏹", "💣", "⏳", "⚓", "🏺", "🎵", "💍", "🎀"];


/** Sets menu selectors for menu navigation */
const menuSelectors = {
    mainMenu: document.querySelector("#main-menu"),
    gameArea: document.querySelector("#game-area"),
    rulesDifficulty: document.querySelector("#rules-difficulty"),
    leaderboards: document.querySelector("#leaderboards"),
    credits: document.querySelector("#credits"),
    backButton: document.querySelector("#back-button"),
    memoryGame: document.querySelector("#memory-game"),
    gameControls: document.querySelector("#game-stats")
}

/** Defines the selectors used throughout the game */
const selectors = {
    boardContainer: document.querySelector("#board-container"),
    board: document.querySelector("#board"),
    flips: document.querySelector("#flips"),
    timer: document.querySelector("#timer"),
    win: document.querySelector("#win"),
}

const defaultState = {
    gameStarted: false, // Checks if the game was started via interacting with the cards.
    flippedCards: 0, // Keeps track of the number of flipped cards. If this number is 2, the cards are flipped back.
    totalFlips: 0, // Keeps track of the total number of flips.
    totalTime: 0, // Keeps track of the amount of time elapsed in seconds.
    loop: null, // Used to update the timer every second once the game has started.
    disableFlip: false // Prevent flipping cards if true.
};

/** Defines values to record game state  */
const state = {...defaultState};

/* Button Scripts */

/** Hides Section by ID */
function hideSection(item) {
    item.style.display = "none";
}

/** Shows Section by ID as Flex */
function showSectionFlex(item) {
    item.style.display = "flex";
}

/** Shows Section by ID as Block */
function showSectionBlock(item) {
    item.style.display = "block";
}

/** Start Game */
function onStartGameButtonClick() {
    hideSection(menuSelectors.mainMenu);
    showSectionFlex(menuSelectors.gameArea);
    showSectionBlock(menuSelectors.rulesDifficulty);
    showSectionFlex(menuSelectors.backButton);
}

/** Game Area */
function showGameArea() {
    showSectionFlex(menuSelectors.gameArea);
    showSectionFlex(menuSelectors.memoryGame);
    showSectionFlex(menuSelectors.gameControls);
    hideSection(menuSelectors.rulesDifficulty);
}

/** Easy Mode */
function onEasyGameButtonClick() {
    showGameArea();
    generateGame(2);
}

/** Normal Mode */
function onNormalGameButtonClick() {
    showGameArea();
    generateGame(4);
}

/** Hard Mode */
function onHardGameButtonClick() {
    showGameArea();
    generateGame(6);
}

/** Leaderboards */
 function onLeaderboardsButtonClick() {
    hideSection(menuSelectors.mainMenu);
    showSectionFlex(menuSelectors.gameArea);
    showSectionBlock(menuSelectors.leaderboards);
    showSectionFlex(menuSelectors.backButton);
}

/** Credits */
 function onCreditsButtonClick() {
    hideSection(menuSelectors.mainMenu);
    showSectionFlex(menuSelectors.gameArea);
    showSectionBlock(menuSelectors.credits);
    showSectionFlex(menuSelectors.backButton);
}

/** Return to Main Menu */
function onReturnButtonClick() {
    location.reload();
}

/* Memory Game */

/** Creates and displays the game */
const generateGame = (area) => {
    if (area % 2 !== 0) {
        throw new Error("The area of the board must be an even number."); // Checks if the attribute passed above is an even number. If not, it throws an error.
    }

    const boardDifficulty = `board-${area}`;
    const emojis = [...SUPPORTED_EMOJIS]; // Array of emoji for card faces. Minimum required is (largest area² / 2).
    const picks = pickRandom(emojis, (area * area) / 2); // Selects (area² / 2) random emoji.
    const shuffledItems = shuffle([...picks, ...picks]); // Creates an array of shuffled pairs of emoji.
    const cards = `
        <div id="${boardDifficulty}" class="board" style="grid-template-columns: repeat(${area}, auto)">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
            ${shuffledItems.map(emoji => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${emoji}</div>
                </div>
            `).join("")}
       </div>
    `; // Creates a board of cards based on the area², and adds a card for each item in the shuffled array with the emoji as its back.

    const parser = new DOMParser().parseFromString(cards, "text/html"); // This adds the board to the HTML.
    selectors.board.replaceWith(parser.querySelector(`#${boardDifficulty}`)); // Updates the selector board with the new board.

    attachEventListener(); // Attaches event listener to created board.
}

/** Take a selection of random items from an array */
const pickRandom = (array, numberOfItems) => {
    const clonedArray = [...array]; // Duplicates the array.
    const randomPicks = []; // Stores randomly picked emoji.

    for (let index = 0; index < numberOfItems; index++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length); // Returns a random whole number between 0 and the given array length.

        randomPicks.push(clonedArray[randomIndex]); // Stores randomly picked emoji in the randomPicks array.
        clonedArray.splice(randomIndex, 1); // Removes the randomly picked emoji from clonedArray such that it isn't chosen again.
    }

    return randomPicks; // Returns the randomly chosen emoji.
}

/** Shuffles an array using the Fisher-Yates shuffling algorithm */
const shuffle = array => {
    const clonedArray = [...array]; // Duplicates the array.

    for (let index = 0; index < clonedArray.length; index++) {
        const randomIndex = Math.floor(Math.random() * (clonedArray.length - index)) + index; // Generates a random index between the current index and the end of the array.
        const originalValue = clonedArray[index]; // Stores the value at index in clonedArray. This will help us swap places with a value at another index.

        clonedArray[index] = clonedArray[randomIndex]; // Sets the value at index to be equal to the value at randomIndex.
        clonedArray[randomIndex] = originalValue; // Sets the value at randomIndex to be equal to originalValue, finishing the swapping of values.
    }

    return clonedArray // Returns the shuffled array.
}

/** Adds Event Listener */
const attachEventListener = () => {
    // Attaches an event listener directly to the DOM for a click event.
    selectors.boardContainer.addEventListener("click", event => {
        const eventTarget = event.target; // Stores the element that was clicked.
        const eventParent = eventTarget.parentElement; // Stores the parent of the element of that was clicked.

        // If the element clicked includes the class "card" and its parent doesn't include the class "flipped", then call flipCard on the parent.
        if (eventTarget.className.includes("card") && !eventParent.className.includes("flipped")) {
            flipCard(eventParent);
        }
    })
}

/** Converting seconds to minutes and seconds */
function getMinutesAndSecondsFromSeconds(totalSecsElapsed) {
    const minutes = String(Math.floor(totalSecsElapsed / 60)).padStart(2, 0); // Formatted minutes counter.
    const seconds = String(totalSecsElapsed % 60).padStart(2, 0); // Formatted seconds counter.

    return {minutes,seconds };

}
/** Starting the game */
const startGame = () => {
    state.gameStarted = true // Sets the gameStarted state to true.

    // Increases total time state by 1 second.
    state.loop = setInterval(() => {
        state.totalTime++;

        const {minutes, seconds} = getMinutesAndSecondsFromSeconds(state.totalTime);
        selectors.flips.innerHTML = `Flips: <span class="highlight">${state.totalFlips}</span>` // Sets the text of the flips element.
        selectors.timer.innerHTML = `Time: <span class="highlight">${minutes}:${seconds}</span>` // Sets the text of the timer element.
    }, 1000);
}

/** Flipping Cards */
const flipCard = card => {

    // If this card has flipped property, then return out of here
    if (state.disableFlip || card.classList.contains("flipped") || card.classList.contains("matched")) {
        return;
    }

    state.flippedCards++;// Increments the state of flippedCards by 1.

    // If the gameStarted state is false, call startGame().
    if (!state.gameStarted) {
        startGame();
    }

    // If there are less than two flipped cards, add the "flipped" class.
    if (state.flippedCards <= 2) {
        state.disableFlip = true;
        card.classList.add("flipped");

        state.totalFlips++ // Increments the state of totalFlips by 1.

        // Flip the cards back after 0.4 seconds.
        const timeoutRef = setTimeout(() => {
            clearTimeout(timeoutRef);
            state.disableFlip = false;
        }, FLIP_TIME);
    }

    if (state.flippedCards === 2) {
        const flippedCards = document.querySelectorAll(".flipped:not(.matched)"); // Stores flipped cards that haven't been matched.
        let timeOut;

        // If the cards have matching emojis, give them the "matched" and "shake" classes.
        if (flippedCards[0].innerText === flippedCards[1].innerText) {
            timeOut = FLIP_TIME;
            flippedCards[0].classList.add("matched");
            flippedCards[1].classList.add("matched");
        } else if (flippedCards[0].innerText !== flippedCards[1].innerText) {
            timeOut = UNMATCHED_TIME;
            flippedCards[0].classList.add("shake");
            flippedCards[1].classList.add("shake");
        }

        // Flip the cards back after 0.4 second.
        const timeoutRef = setTimeout(() => {
            flipBackCards();
            clearTimeout(timeoutRef);
        }, timeOut);
    }

    // If there are no more to flip, display win state.
    // 0 is falsey so if there are no unflipped cards, !0 would return true.
    if (!document.querySelectorAll(".card:not(.flipped)").length) {
        // Flips the board container and displays winning text and game stats.
        setTimeout(() => {
            const {minutes, seconds} = getMinutesAndSecondsFromSeconds(state.totalTime);
            selectors.boardContainer.classList.add("flipped");
            selectors.win.innerHTML = `
                <span id="win-text">
                    You won!<br />
                    With <span class="highlight">${state.totalFlips}</span> flips<br />
                    in <span class="highlight">${minutes}:${seconds}.</span>
                </span>
            `

            clearInterval(state.loop); // Stops the game loop.
            displayConfetti(); // Displays confetti.
        }, 1000);
    }
}

/** Flipping Cards Back */
const flipBackCards = () => {
    // Unflip all unmatched cards.
    document.querySelectorAll(".card:not(.matched)").forEach(card => {
        card.classList.remove("flipped", "shake");
    })

    state.flippedCards = 0; // Reset flippedCards state to 0.
    state.disableFlip = false;
}

/* Confetti
Source: https://www.kirilv.com/canvas-confetti/ */

/** Displays Confetti */
function displayConfetti() {
    let duration = 10 * 1000; // Duration of the confetti.
    let animationEnd = Date.now() + duration; // End of the confetti.
    let defaults = { startVelocity: 30, spread: 360, ticks: 30, zIndex: 0 }; // Spread, amount, and intensity of the initial confetti blast.

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function() {
    let timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    let particleCount = 50 * (timeLeft / duration);
    // Since particles fall down, start a bit higher than random. Also the speed of the confetti.
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 500);
}