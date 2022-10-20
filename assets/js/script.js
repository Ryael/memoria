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
    gameStarted: false,
    flippedCards: 0,
    totalFlips: 0,
    totalTime: 0,
    loop: null
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