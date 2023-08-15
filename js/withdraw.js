document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawValueString = withdrawInput.value ;
    const newWithdrawValue = parseFloat(newWithdrawValueString);
    
    // withdraw balance section

    const withdrawBalance = document.getElementById('withdraw-amount');
    const displayWithdrawBalanceString = withdrawBalance.innerText;
    const displayWithdrawBalance = parseFloat(displayWithdrawBalanceString);
    const totalWithdrawAmount = newWithdrawValue + displayWithdrawBalance;
    withdrawBalance.innerText = totalWithdrawAmount;

    // total balance section

    const balanceAmount = document.getElementById('balance-amount');
    const totalBalanceAmountString = balanceAmount.innerText;

    const totalBalanceAmount = parseFloat(totalBalanceAmountString);
    const newTotalBalance = totalBalanceAmount - newWithdrawValue;
    balanceAmount.innerText = newTotalBalance;

    withdrawInput.value = '';
})