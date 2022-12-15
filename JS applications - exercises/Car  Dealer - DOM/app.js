window.addEventListener("load", solve);


function solve() {

  let inputFields = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuel: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price')
  };
  let outputFields = {
    tableBody: document.getElementById('table-body'),
    soldCars: document.getElementById('cars-list'),
    total: document.getElementById('profit')
  };
  let total = 0;
  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publish);

  function publish(event) {
    event.preventDefault();

    let make = inputFields.make.value;
    let model = inputFields.model.value;
    let year = inputFields.year.value;
    let fuel = inputFields.fuel.value;
    let originalCost = Number(inputFields.originalCost.value);
    let sellingPrice = Number(inputFields.sellingPrice.value);

    if (make == '' || model == '' || year == '' || fuel == '' || originalCost == '' || sellingPrice == '') {
      return;
    }
    
    if (originalCost > sellingPrice) {
      return;
    }
    let tr = document.createElement('tr');
    tr.className = 'row';
    tr.innerHTML = `
<td>${make}</td>
<td>${model}</td>
<td>${year}</td>
<td>${fuel}</td>
<td>${originalCost}</td>
<td>${sellingPrice}</td>
<td>
  <button class="action-btn edit">Edit</button>
  <button class="action-btn sell">Sell</button>
</td>`;

    let editButton = tr.querySelectorAll('button')[0];
    let sellButton = tr.querySelectorAll('button')[1];
    editButton.addEventListener('click', edit);
    sellButton.addEventListener('click', sell);
    outputFields.tableBody.appendChild(tr);



    inputFields.make.value = '';
    inputFields.model.value = '';
    inputFields.year.value = '';
    inputFields.fuel.value = '';
    inputFields.originalCost.value = '';
    inputFields.sellingPrice.value = '';

    function edit(event) {
      inputFields.make.value = make;
      inputFields.model.value = model;
      inputFields.year.value = year;
      inputFields.fuel.value = fuel;
      inputFields.originalCost.value = originalCost;
      inputFields.sellingPrice.value = sellingPrice;
      tr.remove();

    }
    function sell(event) {
      tr.remove();
      let li = document.createElement('li');
      li.className = 'each-list';
      let profitMade = sellingPrice - originalCost;
      li.innerHTML = `<span>${make} ${model}</span>
      <span>${year}</span>
      <span>${profitMade}</span>`;

      outputFields.soldCars.appendChild(li);
      total += profitMade;
      outputFields.total.textContent = total.toFixed(2);
    }
  }

}
