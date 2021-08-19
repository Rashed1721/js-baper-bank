//handle  deposit button-event

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    // console.log(depositAmount);
    //clear the deposit input field
    depositInput.value = '';

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;


    // update  balance

    const balanceTotal = document.getElementById('balance-total');

    let balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
});

//up withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawInput = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawInput);

    const totalwithdraw = document.getElementById('withdraw-total');
    const previousWithdrawText = totalwithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    totalwithdraw.innerText = currentWithdrawTotal;

    //clear withdraw input
    withdrawInput.value = '';

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    let balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;

})