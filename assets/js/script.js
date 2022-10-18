/* Button Scripts */

/** Hides Section by ID */
function hideSection(id) {
    document.getElementById(id).style.display = "none";
}

/** Shows Section by ID as Flex */
function showSectionFlex(id) {
    document.getElementById(id).style.display = "flex";
}

/** Shows Section by ID as Block */
function showSectionBlock(id) {
    document.getElementById(id).style.display = "block";
}

/** Start Game */
function startGameButton() {
    hideSection("main-menu");
    showSectionFlex("game-area");
    showSectionBlock("rules-difficulty");
    showSectionFlex("back-button");
}

/** Leaderboards */
 function leaderboardsButton() {
    hideSection("main-menu");
    showSectionFlex("game-area");
    showSectionBlock("leaderboards");
    showSectionFlex("back-button");
}

/** Credits */
 function creditsButton() {
    hideSection("main-menu");
    showSectionFlex("game-area");
    showSectionBlock("credits");
    showSectionFlex("back-button");
}

/** Return to Main Menu */
function backButton() {
    showSectionFlex("main-menu");
    hideSection("game-area");
    hideSection("credits");
    hideSection("rules-difficulty");
    hideSection("leaderboards");
    hideSection("back-button");
}