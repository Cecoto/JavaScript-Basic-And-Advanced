window.addEventListener('load', solution);

function solution() {
  let inputFields = {
    fullName: document.getElementById('fname'),
    email: document.getElementById('email'),
    phoneNumber: document.getElementById('phone'),
    address: document.getElementById('address'),
    postalCode: document.getElementById('code')
  };
  let submitButton = document.getElementById('submitBTN');
  submitButton.addEventListener('click', submit);

  let outputField = document.getElementById('infoPreview');

  let divBlock = document.getElementById('block');


  function submit(event) {
    event.preventDefault();
    let fullName = inputFields.fullName.value;
    let email = inputFields.email.value;
    let phoneNumber = inputFields.phoneNumber.value;
    let address = inputFields.address.value;
    let postalCode = inputFields.postalCode.value;

    let editBtn = document.getElementById('editBTN');
    let continueBTN = document.getElementById('continueBTN');
    editBtn.addEventListener('click', edit);
    continueBTN.addEventListener('click', continueFunc);

    editBtn.disabled = false;
    continueBTN.disabled = false;


    if (fullName == '' && email == '') {
      return;
    }
    submitButton.disabled = true;

    li1 = document.createElement('li');
    li2 = document.createElement('li');
    li3 = document.createElement('li');
    li4 = document.createElement('li');
    li5 = document.createElement('li');

    li1.textContent = `Full Name: ${fullName}`;
    li2.textContent = `Email: ${email}`;
    li3.textContent = `Phone Number: ${phoneNumber}`;
    li4.textContent = `Address: ${address}`;
    li5.textContent = `Postal Code: ${postalCode}`;

    outputField.appendChild(li1);
    outputField.appendChild(li2);
    outputField.appendChild(li3);
    outputField.appendChild(li4);
    outputField.appendChild(li5);


    inputFields.fullName.value = '';
    inputFields.email.value = '';
    inputFields.phoneNumber.value = '';
    inputFields.address.value = '';
    inputFields.postalCode.value = '';

    function edit(event) {
      inputFields.fullName.value = fullName;
      inputFields.email.value = email;
      inputFields.phoneNumber.value = phoneNumber;
      inputFields.address.value = address;
      inputFields.postalCode.value = postalCode;

      editBtn.disabled = true;
      continueBTN.disabled = true;
      submitButton.disabled = false;

      li1.remove();
      li2.remove();
      li3.remove();
      li4.remove();
      li5.remove();

    }
    function continueFunc(event) {
      divBlock.innerHTML = '';

      divBlock.innerHTML = `<h3>Thank you for your reservation!</h3>`;
    }
  }
}
