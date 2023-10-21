 window.onload = handleOnload;

function handleOnload() {
  const calculateButtonEl = document.getElementById("calculateButton");

  calculateButtonEl.onclick = handleCalculateOnClick;
}

function handleCalculateOnClick() {
  console.log("Calculate button clicked");

  const loanAmountInputEl = document.getElementById("loanAmountField");
  const interestRateInputEl = document.getElementById("interestRateField");
  const termLengthInputEl = document.getElementById("termLengthField");
  const monthlyMortgagePaymentInputEl = document.getElementById("monthlyMortgageField");
  const totalInterestPaidOverTermInputEl = document.getElementById("totalInterestPaidField");

//  what the user will input
  const loanAmount = Number(loanAmountInputEl.value);
  const interestRate = Number(interestRateInputEl.value);
  const termLength = Number(termLengthInputEl.value);

//  new variables that are assigned
  const principal = loanAmount;
  const monthlyInterestRate = interestRate/ 100/12;
  const numberOfPayments = termLength * 12;

// calculating the monthly mortgage payment
    monthlyMortgagePaymentInputEl.value = principal * ((monthlyInterestRate * (1 + monthlyInterestRate)** numberOfPayments) / ((1 + monthlyInterestRate)** numberOfPayments -1));

// calculating the total mortgage that will be paid by tha end of the loan to eventually calculate the total interest of the loan 
  const totalMortgagePaid = monthlyMortgagePaymentInputEl.value * 12 * termLength;

// calculating the total interest that will be paid by the end of the loan
    totalInterestPaidOverTermInputEl.value = totalMortgagePaid - principal;

// checking to see if my code is working in the browser console
console.log(loanAmount, interestRate, termLength, monthlyMortgagePaymentInputEl.value, totalInterestPaidOverTermInputEl.value);
}
