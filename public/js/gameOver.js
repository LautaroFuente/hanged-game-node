const params = new URLSearchParams(window.location.search);
const stateURL = params.get("state");
const stateGame = document.getElementById("stateGame");

stateGame.textContent = stateURL;

if (stateURL === "GANASTE!") {
  stateGame.classList.add("win-animation");
} else {
  stateGame.classList.add("lose-animation");
}
