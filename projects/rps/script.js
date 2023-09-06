const options = ["rock", "paper", "scissors"];

const myScore = document.querySelector("#my-score");
const comScore = document.querySelector("#com-score");
const outcomeMsg = document.querySelector("#outcome-msg");
let comChoiceElement;

let myCounter = 0;
let comCounter = 0;

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  const comChoice = options[randomNum];
  comChoiceElement = document.querySelector(`#${comChoice}`);
  return comChoice;
};

const updateScoreCounter = (winner) => {
  if (winner === "me") {
    myCounter++;
    return (myScore.innerText = myCounter);
  }
  comCounter++;
  return (comScore.innerText = comCounter);
};

const shoot = (me, com) => {
  const versus = [me, com];
  if (versus.includes(options[0]) && versus.includes(options[2])) {
    if (me === options[0]) {
      updateScoreCounter("me");
      return "you win";
    }
    updateScoreCounter("com");
    return "you lose";
  } else if (options.indexOf(me) > options.indexOf(com)) {
    updateScoreCounter("me");
    return "you win";
  } else if (options.indexOf(me) < options.indexOf(com)) {
    updateScoreCounter("com");
    return "you lose";
  }
  return "drew";
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    const result = shoot(event.target.innerText, getComputerChoice());
    outcomeMsg.innerText = result;
    outcomeMsg.classList.add("exposed");
    comChoiceElement.classList.add("red");
    setTimeout(() => {
      comChoiceElement.classList.remove("red");
      outcomeMsg.classList.remove("exposed");
    }, 500);
  })
);
