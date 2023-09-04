const options = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  return options[randomNum];
};

const shoot = (me, com) => {
  const versus = [me, com];
  console.log(`me:${me} com:${com}`);

  if (versus.includes(options[0]) && versus.includes(options[2])) {
    if (me === options[0]) {
      return "you win";
    }
    return "you lose";
  } else if (options.indexOf(me) > options.indexOf(com)) {
    return "you win";
  } else if (options.indexOf(me) < options.indexOf(com)) {
    return "you lose";
  }
  return "drew";
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    console.log(shoot(event.target.innerText, getComputerChoice()));
  })
);
