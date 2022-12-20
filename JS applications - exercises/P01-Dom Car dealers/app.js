window.addEventListener("load", solve);

function solve() {
  let inputFields = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuelType: document.getElementById('fuel'),
    originalCost: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price')
  };
  let pageSections = {
    tbody: document.getElementById('table-body'),
    soldCars: document.getElementById('sold-wrapper'),
    total: document.getElementById('profit')
  }
  let publishBtn = document.getElementById('publish');
  publishBtn.addEventListener('click', publish);


  function publish(event) {
    event.preventDefault();

    let make = inputFields.make.value;
    let model = inputFields.model.value;
    let year = inputFields.year.value;
    let fuel = inputFields.fuelType.value;
    let originalCost = inputFields.originalCost.value;
    let sellingPrice = inputFields.sellingPrice.value;
    if (make == '' || model == '' || year == '' || fuel == '' || originalCost == '' || sellingPrice == '' || Number(originalCost) > Number(sellingPrice) ||Number(year)<1990 ||Number(year)>2022) {
      return;
    }
    let tr = document.createElement('tr');
    tr.className = 'row';
    tr.innerHTML = `<td>${make}</td>
    <td>${model}</td>
    <td>${year}</td>
    <td>${fuel}</td>
    <td>${originalCost}</td>
    <td>${sellingPrice}</td>
    <td>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn sell">Sell</button>
    </td>`;
    let editBtn = tr.querySelector('.edit');
    let sellBtn = tr.querySelector('.sell');
    editBtn.addEventListener('click', edit);
    sellBtn.addEventListener('click', sell);
    pageSections.tbody.appendChild(tr);

    inputFields.make.value = '';
    inputFields.model.value = '';
    inputFields.year.value = '';
    inputFields.fuelType.value = '';
    inputFields.originalCost.value = '';
    inputFields.sellingPrice.value = '';

    function edit(event) {
      inputFields.make.value = make;
      inputFields.model.value = model;
      inputFields.year.value = year;
      inputFields.fuelType.value = fuel;
      inputFields.originalCost.value = originalCost;
      inputFields.sellingPrice.value = sellingPrice;
      tr.remove();
    }
    function sell(event) {
      tr.remove();
      sellingPrice = Number(sellingPrice);
      originalCost = Number(originalCost);
      let li = document.createElement('li');
      li.className = 'each-list';
      li.innerHTML = `<span>'${make} ${model}'</span>
       <span>${year}</span>
       <span>${sellingPrice - originalCost}</span>`;

      pageSections.soldCars.appendChild(li);

      let allLi = Array.from(pageSections.soldCars.querySelectorAll('li'));

      let total = 0;
     
    for (const li of allLi) {
      total+=Number(li.lastChild.textContent);
    }

      pageSections.total.textContent = total.toFixed(2);

    }
  }
}
