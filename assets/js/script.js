/* Constants */

/** Sets menu selectors for menu navigation */
const menuSelectors = {
    mainMenu: document.querySelector("#main-menu"),
    gameArea: document.querySelector("#game-area"),
    rulesDifficulty: document.querySelector("#rules-difficulty"),
    leaderboards: document.querySelector("#leaderboards"),
    credits: document.querySelector("#credits"),
    backButton: document.querySelector("#back-button"),
    memoryGame: document.querySelector("#memory-game")
}

/** Defines the selectors used throughout the game */
const selectors = {
    boardContainer: document.querySelector("#board-container"),
    board: document.querySelector("#board"),
    moves: document.querySelector("#moves"),
    timer: document.querySelector("#timer"),
    win: document.querySelector("'.win'")
}

/** Defines values to record game state  */
const state = {
    gameStarted: false, // Checks if the game was started via interacting with the cards.
    flippedCards: 0, // Keeps track of the number of flipped cards. If this number is 2, the cards are flipped back.
    totalFlips: 0, // Keeps track of the total number of flips.
    totalTime: 0, // Keeps track of the amount of time elapsed in seconds.
    loop: null // Used to update the timer every second once the game has started.
}

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
function startGameButton() {
    hideSection(menuSelectors.mainMenu);
    showSectionFlex(menuSelectors.gameArea);
    showSectionBlock(menuSelectors.rulesDifficulty);
    showSectionFlex(menuSelectors.backButton);
}

/** Easy Mode */
function easyGameButton() {
    hideSection(menuSelectors.rulesDifficulty);
    showSectionFlex(menuSelectors.gameArea);
    showSectionFlex(menuSelectors.memoryGame);
}

/** Leaderboards */
 function leaderboardsButton() {
    hideSection(menuSelectors.mainMenu);
    showSectionFlex(menuSelectors.gameArea);
    showSectionBlock(menuSelectors.leaderboards);
    showSectionFlex(menuSelectors.backButton);
}

/** Credits */
 function creditsButton() {
    hideSection(menuSelectors.mainMenu);
    showSectionFlex(menuSelectors.gameArea);
    showSectionBlock(menuSelectors.credits);
    showSectionFlex(menuSelectors.backButton);
}

/** Return to Main Menu */
function returnButton() {
    showSectionFlex(menuSelectors.mainMenu);
    hideSection(menuSelectors.gameArea);
    hideSection(menuSelectors.credits);
    hideSection(menuSelectors.rulesDifficulty);
    hideSection(menuSelectors.leaderboards);
    hideSection(menuSelectors.backButton);
    hideSection(menuSelectors.memoryGame);
}

/* Memory Game */

/** Creates and displays the game */
const generateGame = () => {
    const area = selectors.board.getAttribute("data-area") // Grabs the value of the given attribute and stores it as a constant.

    if (area % 2 !== 0) {
        throw new Error("The area of the board must be an even number.") // Checks if the attribute passed above is an even number. If not, it throws an error.
    }

    const emojis = ["💧", "🔥", "❄", "⚡", "🌀", "🌪", "☄", "💎", "⚗", "🛡", "🏹", "💣", "⚔", "🗝", "🕯", "🎵", "💍", "🎀"] // Array of emoji for card faces. Minimum required is (largest area² / 2).
    const picks = pickRandom(emojis, (area * area) / 2) // Selects (area² / 2) random emoji.
    const shuffledItems = shuffle([...picks, ...picks]) // Creates an array of shuffled pairs of emoji.
    const cards = `
        <div id="board" style="grid-template-columns: repeat(${area}, auto)">
            ${shuffledItems.map(emoji => `
                <div class="card">
                    <div class="card-front"></div>
                    <div class="card-back">${emoji}</div>
                </div>
            `).join("")}
       </div>
    ` // Creates a board of cards based on the area², and adds a card for each item in the shuffled array with the emoji as its back.
    
    const parser = new DOMParser().parseFromString(cards, "text/html") // This adds the board to the HTML.
    selectors.board.replaceWith(parser.querySelector("#board")) // Updates the selector board with the new board.
}

/** Take a selection of random items from an array */
const pickRandom = (array, numberOfItems) => {
    const clonedArray = [...array] // Duplicates the array.
    const randomPicks = [] // Stores randomly picked emoji.

    for (let index = 0; index < numberOfItems; index++) {
        const randomIndex = Math.floor(Math.random() * clonedArray.length) // Returns a random whole number between 0 and the given array length. 
        
        randomPicks.push(clonedArray[randomIndex]) // Stores randomly picked emoji in the randomPicks array.
        clonedArray.splice(randomIndex, 1) // Removes the randomly picked emoji from clonedArray such that it isn't chosen again.
    }

    return randomPicks // Returns the randomly chosen emoji. 
}

/** Shuffles an array using the Fisher-Yates shuffling algorithm */
const shuffle = array => {
    const clonedArray = [...array] // Duplicates the array.

    for (let index = 0; index < clonedArray.length; index++) {
        const randomIndex = Math.floor(Math.random() * (clonedArray.length - index)) + index // Generates a random index between the current index and the end of the array.
        const originalValue = clonedArray[index] // Stores the value at index in clonedArray. This will help us swap places with a value at another index.

        clonedArray[index] = clonedArray[randomIndex] // Sets the value at index to be equal to the value at randomIndex.
        clonedArray[randomIndex] = originalValue // Sets the value at randomIndex to be equal to originalValue, finishing the swapping of values.
    }

    return clonedArray // Returns the shuffled array.
}

/** Adds Event Listener */
const attachEventListener = () => {
    // Attaches an event listener directly to the DOM for a click event.
    document.addEventListener('click', event => { 
        const eventTarget = event.target // Stores the element that was clicked.
        const eventParent = eventTarget.parentElement // Stores the parent of the element of that was clicked.

        // If the element clicked includes the class "card" and its parent doesn't include the class "flipped", then call flipCard on the parent.
        if (eventTarget.className.includes("card") && !eventParent.className.includes("flipped")) {
            flipCard(eventParent) 
        }
    })
}

attachEventListener() 