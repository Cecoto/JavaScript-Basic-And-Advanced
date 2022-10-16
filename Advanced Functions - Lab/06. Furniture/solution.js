function solve() {
  const [generateBtn, buyByn] = Array.from(document.querySelectorAll('button'));

  const [input, output] = Array.from(document.querySelectorAll('textarea'));

  const tbody = document.querySelector('tbody');

  generateBtn.addEventListener('click', generate);
  buyByn.addEventListener('click', buy);

  const items = [];
  // parse input JSON and create table
  // find input textarea
  // parse JSON
  // for every item create row and append row to table body
  function generate() {
    const data = JSON.parse(input.value);

    for (let item of data) {
      const row = document.createElement('tr');

      row.appendChild(createColumn('img', item.img));
      row.appendChild(createColumn('p', item.name));
      row.appendChild(createColumn('p', item.price));
      row.appendChild(createColumn('p', item.decFactor));

      const col5 = document.createElement('td');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      col5.appendChild(checkbox);
      row.appendChild(col5);

      tbody.appendChild(row);
      items.push({
        ...item,
        isChecked
      });

      function isChecked() {
        return checkbox.checked;
      }
    }
  }
  function buy() {
    let list = [];
    let total = 0;
    let decoration = 0;

    const bought = items.filter(x => x.isChecked());

    for (let i of bought) {
      list.push(i.name);
      total += Number(i.price)
      decoration += Number(i.decFactor);
    }
    decoration /= bought.length;

    output.value = [
      `Bought furniture: ${list.join(', ')}`,
      `Total price: ${total.toFixed(2)}`,
      `Avarage decoration factor: ${decoration}`
    ].join('\n');

  }
  // find user choices and summerise purchase
  //find all checked boxes
  //for every box read the data from parent row and append the result
  // output the result to the textarea


  function createColumn(type, content) {

    const result = document.createElement('td');
    let inner;
    if (type == 'img') {
      inner = document.createElement('img');
      inner.src = content;
    }
    else {
      inner = document.createElement('p');
      inner.textContent = content;
    }

    result.appendChild(inner);

    return result;
  }
}