window.addEventListener('load', solve);

function solve() {
    let inputFields = {
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price')
    };
    let outputFields = {
        furniturelist: document.getElementById('furniture-list'),
        total: document.querySelector('.total-price')
    };
    let addButton = document.getElementById('add');
    addButton.addEventListener('click', add);

    let total = 0;

    function add(event) {
        event.preventDefault();
        let model = inputFields.model.value;
        let year = inputFields.year.value;
        let description = inputFields.description.value;
        let price = inputFields.price.value;

        if (model == '' || description == '' || year < 0 || price < 0) {

        }
        let trInfo = document.createElement('tr');
        trInfo.className = 'info';
        trInfo.innerHTML = `<td>${model}</td>
        <td>${price}</td>
        <td>
            <button class="moreBtn">More Info</button>
            <button class="buyBtn">Buy it</button>
        </td>`;
        let trHide = document.createElement('tr');
        trHide.className = 'hide';
        trHide.innerHTML = `<td>Year: ${year}</td>
        <td colspan="3">Description: ${description}</td>`;

        let moreInfoBtn = trInfo.querySelector('.moreBtn');
        let buyBtn = trInfo.querySelector('.buyBtn');

        moreInfoBtn.addEventListener('click', moreInfo);
        buyBtn.addEventListener('click', buy);

        outputFields.furniturelist.appendChild(trInfo);
        outputFields.furniturelist.appendChild(trHide);


        inputFields.model.value = '';
        inputFields.year.value = '';
        inputFields.description.value = '';
        inputFields.price.value = '';

        function buy(e) {
            trHide.remove();
            trInfo.remove();

            total += Number(price);
            outputFields.total.textContent = Number(total).toFixed(2);
        }
        function moreInfo(e) {

            if (e.currentTarget.textContent == 'More Info') {
                e.currentTarget.textContent = 'Less Info'
                trHide.style.display = 'contents';
            }
            else if (e.currentTarget.textContent == 'Less Info') {
                e.currentTarget.textContent = 'More Info'
                trHide.style.display = 'none';
            }

        }
    }
}
