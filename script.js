const result = document.querySelector(".result");
const marioChoiceContainer = document.querySelector(".mario-choice");
const marioSelection = document.getElementById("mario-selection");
const resultadoImg = document.getElementById("resultado");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const playHuman = (humanChoice) => {
  const marioChoice = playMachine();

  playTheGame(humanChoice, marioChoice);

  displayMarioChoice(marioChoice);
};

const playMachine = () => {
  const choices = ["pedra", "papel", "tesoura"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  console.log("Você: " + human + " Mario: " + machine);

  if (human === machine) {
    result.innerHTML = "Deu empate, tente novamente!";
    resultadoImg.src = "./assets/empate2.png";
    result.style.color = "#27385F";
  } else if (
    (human === "papel" && machine === "pedra") ||
    (human === "pedra" && machine === "tesoura") ||
    (human === "tesoura" && machine === "papel")
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você ganhou!";
    resultadoImg.src = "./assets/ganhou.png";
    result.style.color = "#2C891F";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você perdeu para o Mario!";
    resultadoImg.src = "./assets/perdeu2.png";
    result.style.color = "#E52400";
  }

  marioChoiceContainer.style.display = "block";
};

const displayMarioChoice = (choice) => {
  marioSelection.innerHTML = choice;
};
