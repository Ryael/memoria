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

/** Sets constants for menu navigation */
const idSelectors = {
    mainMenu: document.querySelector("#main-menu"),
    gameArea: document.querySelector("#game-area"),
    rulesDifficulty: document.querySelector("#rules-difficulty"),
    leaderboards: document.querySelector("#leaderboards"),
    credits: document.querySelector("#credits"),
    backButton: document.querySelector("#back-button"),
    memoryGame: document.querySelector("#memory-game")
}

/** Start Game */
function startGameButton() {
    hideSection(idSelectors.mainMenu);
    showSectionFlex(idSelectors.gameArea);
    showSectionBlock(idSelectors.rulesDifficulty);
    showSectionFlex(idSelectors.backButton);
}

/** Easy Mode */
function easyGameButton() {
    hideSection(idSelectors.rulesDifficulty);
    showSectionFlex(idSelectors.gameArea);
    showSectionFlex(idSelectors.memoryGame);
}

/** Leaderboards */
 function leaderboardsButton() {
    hideSection(idSelectors.mainMenu);
    showSectionFlex(idSelectors.gameArea);
    showSectionBlock(idSelectors.leaderboards);
    showSectionFlex(idSelectors.backButton);
}

/** Credits */
 function creditsButton() {
    hideSection(idSelectors.mainMenu);
    showSectionFlex(idSelectors.gameArea);
    showSectionBlock(idSelectors.credits);
    showSectionFlex(idSelectors.backButton);
}

/** Return to Main Menu */
function returnButton() {
    showSectionFlex(idSelectors.mainMenu);
    hideSection(idSelectors.gameArea);
    hideSection(idSelectors.credits);
    hideSection(idSelectors.rulesDifficulty);
    hideSection(idSelectors.leaderboards);
    hideSection(idSelectors.backButton);
    hideSection(idSelectors.memoryGame);
}

/* Memory Game */

/** Defines the selectors used throughout the game */
const selectors = {
    boardContainer: document.querySelector("#board-container"),
    board: document.querySelector("#board"),
    moves: document.querySelector("#moves"),
    timer: document.querySelector("#timer"),
    win: document.querySelector("#win")
}