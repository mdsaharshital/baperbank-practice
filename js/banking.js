// deposite handle
document.getElementById('deposit-btn').addEventListener('click', function(){
    //deposite input
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositInput.value);
    // add money to deposit section
    const currentDeposit = document.getElementById('deposit-amount');
    currentDeposit.innerText = parseFloat(currentDeposit.innerText)+ depositAmount;
    // add money to deposit section
    const currentBalance = document.getElementById('balance-amount');
    currentBalance.innerText = parseFloat(currentBalance.innerText)+ parseFloat(depositAmount);
    // clear input field
    depositInput.value = '';
    
})

//withdraw handle
document.getElementById('withdraw-btn').addEventListener('click', function(){
    //withdraw input
    const withdrawInput =document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);
    //get current withdraw
    const currentWithdraw = document.getElementById('withdraw-amount');
    //add money to current withdraw
    currentWithdraw.innerText = parseFloat(currentWithdraw.innerText) + withdrawAmount;
    // decrease money from total balance
    const currentBalance = document.getElementById('balance-amount');
    currentBalance.innerText = parseFloat(currentBalance.innerText)- withdrawAmount;
    // clear input field
    withdrawInput.value = '';
})