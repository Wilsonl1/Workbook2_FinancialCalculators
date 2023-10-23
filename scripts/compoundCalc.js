window.onload = handleOnload;

function handleOnload() {
  const calculateButtonEl = document.getElementById("calculateButton");

  calculateButtonEl.onclick = handleCalculateOnClick;
}

function handleCalculateOnClick() {
  console.log("Calculate button Clicked");

  const depositAmountInputEl = document.getElementById("depositAmountField");
  const interestRateInputEl = document.getElementById("interestRateField");
  const termlengthInputEl = document.getElementById("termlengthField");
  const futureVauleInputEl = document.getElementById("futureVauleField");
  const totalInterestEarnedInputEl = document.getElementById(
    "totalInterestEarnedField"
  );

  // what the user will input
  const depositAmount = Number(depositAmountInputEl.value);
  const interestRate = Number(interestRateInputEl.value);
  const termlength = Number(termlengthInputEl.value);

  // New variables that are assigned
  const principal = depositAmount;
  const dailyInterestRate = interestRate / 100 / 365;
  const numberOfTimesCompounded = termlength * 365;

  // calculating the future value of the deposit after the term
  futureVauleInputEl.value =
    principal * (1 + dailyInterestRate)** numberOfTimesCompounded;

  // Calculating the total interest earned on the principal
  totalInterestEarnedInputEl.value = futureVauleInputEl.value - principal;

  // checking to see is my code is working in the browser console
  console.log(
    depositAmount,
    interestRate,
    termlength,
    futureVauleInputEl.value,
    totalInterestEarnedInputEl.value
  );
}
