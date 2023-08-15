document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawValueString = withdrawInput.value ;
    const newWithdrawValue = parseFloat(newWithdrawValueString);
    withdrawInput.value = '';
    if(isNaN(newWithdrawValue)){
        alert('please provide a valid number')
        return;
    }
    
    // withdraw balance section

    const withdrawBalance = document.getElementById('withdraw-amount');
    const displayWithdrawBalanceString = withdrawBalance.innerText;
    const displayWithdrawBalance = parseFloat(displayWithdrawBalanceString);

    // total balance section

    const balanceAmount = document.getElementById('balance-amount');
    const totalBalanceAmountString = balanceAmount.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceAmountString);
    if(newWithdrawValue > totalBalanceAmount){
        alert('Insufficient Balance');
        return;
    }
    // calculate total balance for show in the display 
    const totalWithdrawAmount = newWithdrawValue + displayWithdrawBalance;
    withdrawBalance.innerText = totalWithdrawAmount;

    const newTotalBalance = totalBalanceAmount - newWithdrawValue;
    balanceAmount.innerText = newTotalBalance;

    
})