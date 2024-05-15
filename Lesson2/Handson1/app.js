import { calculateCircumference } from "./circleCalculator.js";
document.querySelector("#submitButton").onclick = submitFunction;

import { convertToNumber } from "./validation.js";
document.querySelector("#submitButtonArea").onclick = submitArea;

function submitFunction() {
  let radius = parseFloat(document.getElementById("radius").value);
  let circumference = calculateCircumference(radius);
  document.getElementById(
    "output"
  ).innerHTML = `The circumference is: ${circumference}`;
}
