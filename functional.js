function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValue = inputField.value;
    const value = parseFloat(inputValue);
    inputField.value = '';
    return value;
}
function updateTotal(fieldId, amount) {
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
}

// function updateBalance(amount, isAdding) {
//     const previousBalance = getInnerTextValue('balance-total');
//     let newBalance;
//     if (isAdding == true) {
//         newBalance = previousBalance + amount;
//     }
//     else {
//         newBalance = previousBalance - amount;
//     }
//     document.getElementById('balance-total').innerText = newBalance;
// }
function updateBalance() {
    const depositTotal = getInnerTextValue('deposit-total');
    const withdrawTotal = getInnerTextValue('withdraw-total');
    const newBalance = depositTotal - withdrawTotal;
    document.getElementById('balance-total').innerText = newBalance;
    console.log(newBalance);
}

function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldText = fieldTag.innerText;
    const value = parseFloat(fieldText);
    return value;
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        // updateBalance(amount, true);
        updateBalance();
    }
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && balance >= amount) {
        updateTotal('withdraw-total', amount);
        // updateBalance(amount, false);
        updateBalance();
    }
})
