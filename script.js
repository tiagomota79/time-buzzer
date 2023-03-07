const startButton = document.querySelector("#start");
const signal = document.querySelector("#signal");
const team1 = document.querySelector("#team1");
const team1NameInput = document.querySelector("#team1name");
const team2 = document.querySelector("#team2");
const team2NameInput = document.querySelector("#team2name");

let team1Name;
let team2Name;

team1NameInput.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    team1Name = team1NameInput.value;
    team1.innerHTML = team1Name;
  }
});

team2NameInput.addEventListener("keydown", (ev) => {
  if (ev.key === "Enter") {
    team2Name = team2NameInput.value;
    team2.innerHTML = team2Name;
  }
});

function keyboardListener(ev) {
  if (ev.key === "q") {
    handlePlayerInput("team1");
  }
  if (ev.key === "p") {
    handlePlayerInput("team2");
  }
}

function handlePlayerInput(team) {
  const winner = team === "team1" ? team1 : team2;
  document.removeEventListener("keydown", keyboardListener);
  winner.style.backgroundColor = "green";
  startButton.style.display = "inline-block";
  startButton.innerHTML = "Restart";
  startButton.addEventListener("click", restart);
}

let timer = 3;

if (timer === 3) {
  startButton.innerHTML = "Start countdown";
  startButton.addEventListener("click", start);
}

function start() {
  console.log("Game started");
  signal.innerHTML = timer;

  if (timer === 3) {
    const interval = setInterval(() => {
      timer--;
      signal.innerHTML = timer;
      startButton.style.display = "none";
      if (timer <= 0) {
        clearInterval(interval);
        signal.innerHTML = "GO!";
        signal.style.backgroundColor = "red";
        signal.style.fontSize = "75px";
        document.addEventListener("keydown", keyboardListener);
      }
    }, 1000);
  }
}

function restart() {
  signal.innerHTML = "3";
  signal.style.backgroundColor = "coral";
  signal.style.fontSize = "100px";
  timer = 3;
  team1.style.backgroundColor = "";
  team2.style.backgroundColor = "";
  startButton.style.display = "inline-block";
  startButton.innerHTML = "Start countdown";
  startButton.addEventListener("click", start);
}
