function getInputFieldValueById (id){
    const inputValue = document.getElementById(id).value ;
    const inputNumber = parseFloat(inputValue);
    return inputNumber ;
};

function getTextFieldValueById (id){
    const textValue = document.getElementById(id).innerText ;
    const textNumber = parseFloat(textValue);
    return textNumber ;
};
function showDonationModal() {
    const modal = document.getElementById('my_modal_1');
    modal.showModal(); 
  }
  function noakhaliDonate() {
    showDonationModal(); 
  }

  
  function feniDonate() {
    showDonationModal(); 
  }


  function quotaDonate() {
    showDonationModal();
  }
