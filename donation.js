document.getElementById('noakhali-donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    const donateAmount = getInputFieldValueById('donate-amount');
    const accountBalance =getTextFieldValueById('account-balance');
    if(accountBalance <= 0 || donateAmount > accountBalance){
        alert('You do not enough balance for donate')
        return;
      }

    if (donateAmount <= 0 || isNaN(donateAmount)) {
        alert("donation-error");
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
        div.className ='card border rounded-xl bg-white space-y-3 p-3';
        div.innerHTML = `
        <p class = "text-xl font-semibold">${donateAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
        <p class="text-base font-medium">Date: ${new Date().toString()}</p>
         `
        // console.log(div);
        document.getElementById('history-container').appendChild(div);

        showDonationModal();

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
        alert("donation-error");
        return;
      }
    else{
        const feniDonation = getTextFieldValueById('feni-donate');
        const totalDonation =feniDonation + amountDonate;
        const remainBalance = accountBalance - amountDonate;

        document.getElementById('account-balance').innerText = remainBalance;
        document.getElementById('feni-donate').innerText = totalDonation ;
        // alert('congratulation')

        const div = document.createElement('div');
        div.className ='card border rounded-xl bg-white space-y-3 p-3';
        div.innerHTML = `
        <p class = "text-xl font-semibold">${amountDonate}  Taka is Donated for Flood Relief in Feni,Bangladesh</p>
        <p class="text-base font-medium">Date: ${new Date().toString()}</p>
         `
        // console.log(div);
        document.getElementById('history-container').appendChild(div);
        
        showDonationModal();
    }
})

document.getElementById('quota-donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    const quotaDonate = getInputFieldValueById('quota-donate-amount');
    const accountBalance =getTextFieldValueById('account-balance');
    if(accountBalance <= 0 ||  quotaDonate > accountBalance){
        alert('You do not enough balance for donate')
        return;
      }

    if (quotaDonate <= 0 || isNaN(quotaDonate)) {
        alert("donation-error");
        return;
      }
    else{
        const quotaDonation = getTextFieldValueById('quota-donate-balance');
        const totalDonation =quotaDonation + quotaDonate;
        const remainBalance = accountBalance - quotaDonate;

        document.getElementById('account-balance').innerText = remainBalance;
        document.getElementById('quota-donate-balance').innerText = totalDonation ;
        // alert('congratulation')

        const div = document.createElement('div');
        div.className ='card border rounded-xl bg-white space-y-3 p-3';
        div.innerHTML = `
        <p class = "text-xl font-semibold">${quotaDonate}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
        <p class="text-base font-medium">Date: ${new Date().toString()}</p>
         `
        // console.log(div);
        document.getElementById('history-container').appendChild(div);

        showDonationModal();

    }
})


