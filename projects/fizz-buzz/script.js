let count = 0;

const print = document.getElementById("print");
print.innerText = count;

const buttons = document.querySelectorAll(".btn");

const isFizzBuzz = (countCheck) => {
  if (countCheck % 3 === 0 && countCheck % 5 === 0) {
    return "FizzBuzz";
  } else if (countCheck % 3 === 0) {
    return "Fizz";
  } else if (countCheck % 5 === 0) {
    return "Buzz";
  } else {
    return countCheck;
  }
};

const changePrintValue = (event) => {
  const operator = event.target.innerText;

  if (operator === "-" && !count <= "0") {
    count--;
  } else if (operator === "+" && count >= 0) {
    count++;
  }

  if (count !== 0) {
    const output = isFizzBuzz(count);
    print.innerText = output;
  } else {
    print.innerText = count;
  }
};

buttons.forEach((button) =>
  button.addEventListener("click", (event) => {
    changePrintValue(event);
  })
);
