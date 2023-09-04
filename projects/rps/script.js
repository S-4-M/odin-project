const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  const options = ["rock", "paper", "scissors"];
  return options[randomNum];
};

const shoot = (me, com) => {
  return [me, com];
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    console.log(shoot(event.target.innerText, getComputerChoice()));
  })
);
