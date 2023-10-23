window.onload = handleOnload;

function handleOnload() {
    const calculateButtonEl = document.getElementById("calculateButton");

    calculateButtonEl.onclick = handleCalculateOnClick;
}

function handleCalculateOnClick() {
    console.log("calculate button clicked");

    const monthlyPayoutInputEl = document.getElementById("monthlyPayoutField");
    const expectedInterestInputEl = document.getElementById("expectedInterestField");
    const numberOfYearsInputEl = document.getElementById("numberOfYearsField");
    const presentValueInputEl = document.getElementById("presentValueField");

    // What the user will input
    const monthlyPayout = Number(monthlyPayoutInputEl.value);
    const expectedInterest = Number(expectedInterestInputEl.value);
    const numberOfYears = Number(numberOfYearsInputEl.value);

    // New variables that are assigned
    const paymentAmount = monthlyPayout;
    const interestRate = expectedInterest/100/12;
    const numberOfPeriods = numberOfYears *12;

    // calculating the present value
    presentValueInputEl.value = paymentAmount * ((1 - (1 + interestRate)**-numberOfPeriods)/ interestRate);

    // checking to see is my code is working in the browser console 
    console.log(monthlyPayout, expectedInterest, numberOfYears, presentValueInputEl.value)
    
}