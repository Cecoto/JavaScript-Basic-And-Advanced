window.addEventListener("load", solve);

function solve() {

  let sendBtn = document.querySelector('#right form button');
  sendBtn.addEventListener('click', submit);

  let inputFields = {
    typeProduct: document.getElementById('type-product'),
    description: document.getElementById('description'),
    clientName: document.getElementById('client-name'),
    clientPhone: document.getElementById('client-phone'),

  };

  let divContainers = {
    recievedOrders: document.getElementById("received-orders"),
    completedOrders: document.getElementById("completed-orders")
  };
  let clearBtn = divContainers.completedOrders.querySelector('button');
  clearBtn.addEventListener('click', clear);
  function submit(event) {
    event.preventDefault();
    let productType = inputFields.typeProduct.value;
    let description = inputFields.description.value;
    let clientName = inputFields.clientName.value;
    let clientPhone = inputFields.clientPhone.value;
    if (description == '' || clientName == '' || clientPhone == '' ) {
      return;
    }
    let div = document.createElement('div');
    div.className = 'container';
    div.innerHTML = `<h2>Product type for repair: ${productType}</h2>
      <h3>Client information: ${clientName}, ${clientPhone}</h3>
      <h4>Description of the problem: ${description}</h4>
      <button class="start-btn">Start repair</button>
      <button class="finish-btn" disabled>Finish repair</button>`;

    let startBtn = div.querySelector('.start-btn');
    let finishBtn = div.querySelector('.finish-btn');

    startBtn.addEventListener('click', startRepair);
    finishBtn.addEventListener('click', finishRepair);

    divContainers.recievedOrders.appendChild(div);

    inputFields.typeProduct.value = '';
    inputFields.description.value = '';
    inputFields.clientName.value = '';
    inputFields.clientPhone.value = '';

    function startRepair(event) {
      startBtn.disabled = true;
      finishBtn.disabled = false;
    }

    function finishRepair(event) {
      startBtn.remove();
      finishBtn.remove();
      div.remove();
      let completedDiv = document.createElement('div');
      completedDiv.className = 'container';
      completedDiv.innerHTML = `<h2>Product type for repair: ${productType}</h2>
     <h3>Client information: ${clientName}, ${clientPhone}</h3>
     <h4>Description of the problem: ${description}</h4>`;
      divContainers.completedOrders.appendChild(completedDiv);
    }

  }


  function startRepair(event) {
    startBtn.disabled = true;
    finishBtn.disabled = false;
  }

  function finishRepair(event) {
    startBtn.remove();
    finishBtn.remove();
    div.remove();
    let completedDiv = document.createElement('div');
    completedDiv.className = 'container';
    completedDiv.innerHTML = `<h2>Product type for repair: ${productType}</h2>
   <h3>Client information: ${clientName}, ${clientPhone}</h3>
   <h4>Description of the problem: ${description}</h4>`;
    divContainers.completedOrders.appendChild(completedDiv);
  }

  function clear(event) {
    event.preventDefault();
   let allContainers = Array.from(event.currentTarget.parentNode.querySelectorAll('.container'));
   for (const container of allContainers) {
    container.remove();
   }
  }


}
