/* Button Scripts */

/** Start Game
 */
function startGameButton() {
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-area").style.display = "flex";
    document.getElementById("rules-difficulty").style.display = "block";
}

/** Leaderboards
 */
 function leaderboardsButton() {
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("game-area").style.display = "flex";
    document.getElementById("leaderboards").style.display = "block";
}