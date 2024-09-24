document.getElementById('noakhali-donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    const donateAmount = getInputFieldValueById('donate-amount');
    const accountBalance =getTextFieldValueById('account-balance');
    if(accountBalance <= 0 || donateAmount > accountBalance){
        alert('You do not enough balance for donate')
        return;
      }

    if (donateAmount <= 0 || isNaN(donateAmount)) {
        showError("income-error");
        return;
      }
    else{
        const noakhaliDonation = getTextFieldValueById('noakhali-donation');
        const totalDonation =noakhaliDonation + donateAmount;
        const remainBalance = accountBalance - donateAmount;

        document.getElementById('account-balance').innerText = remainBalance;
        document.getElementById('noakhali-donation').innerText = totalDonation ;
        // alert('congratulation')

        const div = document.createElement('div');
        div.classList.add('card border');
        div.innerHTML = `
        <p>{donateAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
         `
        // console.log(div);
        document.getElementById('history-container').appendChild(div);

    }
});

document.getElementById('feni-donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    const amountDonate = getInputFieldValueById('amount-donate');
    const accountBalance =getTextFieldValueById('account-balance');
    if(accountBalance <= 0 ||  amountDonate > accountBalance){
        alert('You do not enough balance for donate')
        return;
      }

    if (amountDonate <= 0 || isNaN(amountDonate)) {
        showError("income-error");
        return;
      }
    else{
        const feniDonation = getTextFieldValueById('feni-donate');
        const totalDonation =feniDonation + amountDonate;
        const remainBalance = accountBalance - amountDonate;

        document.getElementById('account-balance').innerText = remainBalance;
        document.getElementById('feni-donate').innerText = totalDonation ;
        // alert('congratulation')

    }
})
document.getElementById('quota-donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    const quotaDonateAmount = getInputFieldValueById('quota-donate-amount');

    const accountBalance =getTextFieldValueById('account-balance');
    if(accountBalance <= 0 || quotaDonateAmount > accountBalance){
        alert('You do not enough balance for donate')
        return;
      }

    if (quotaDonateAmount <= 0 || isNaN(quotaDonateAmount)) {
        showError("income-error");
        return;
      }
    
    else{
        const quotaDonation = getTextFieldValueById('quota-donate-balance');
        const totalDonation =quotaDonateAmount + quotaDonation;
        const remainBalance = accountBalance - quotaDonateAmount;

        document.getElementById('account-balance').innerText = remainBalance;
        document.getElementById('quota-donate-balance').innerText = totalDonation ;
      //  alert('congratulation');

    }
});

