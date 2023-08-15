document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositValueString = depositInput.value ;
    const newDepositValue = parseFloat(newDepositValueString);
    depositInput.value = '';
    if(isNaN(newDepositValue)){
        alert('please provide a valid number')
        return;
    }

    // deposit Amonut section

    const displayAmount = document.getElementById('display-amount');
    const displayDepositAmountString = displayAmount.innerText;
    const displayDepositAmount = parseFloat(displayDepositAmountString);

    const totalDisplayDepositAmount = newDepositValue + displayDepositAmount;

    displayAmount.innerText = totalDisplayDepositAmount;

    // balance amount section

    const displayBalance = document.getElementById('balance-amount');
    const totalBalanceAmountString = displayBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceAmountString);
    const newTotalBalanceAmount = newDepositValue + totalBalanceAmount;
    displayBalance.innerText = newTotalBalanceAmount;

    
    

})