var rs = require("readline-sync");

const validOperations = ["+", "-", "/", "*"];

function runCalc() {
  console.log("Tee-Eye001-Calculator");

  let operation = rs.question(
    "What operation would you like to perform? (/, *, -, +): "
  );
  while (!validOperations.includes(operation)) {
    operation = rs.question("That is not a valid operation...");
    return runCalc();
  }

  var num1 = rs.questionInt("Enter the first number: ");
  var num2 = rs.questionInt("Enter the second number: ");

  if (operation === "/" && num2 === 0) {
    console.log("Enter a number greater or less than 0.");
    while (num2 === 0) {
      num2 = rs.questionInt("Enter the second number: ");
    }
  }

  let result = 0;

  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    result = num1 / num2;
  }

  console.log(`The result is: ${result}`);
}

runCalc();
