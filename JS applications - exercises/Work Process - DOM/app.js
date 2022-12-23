function solve() {
    let inputFields = {
        firstName: document.getElementById('fname'),
        lastName: document.getElementById('lname'),
        email: document.getElementById('email'),
        birthDate: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary')

    };
    let outputFields = {
        tbody: document.getElementById('tbody'),
        budgetSum: document.getElementById('sum')
    };
    let addButton = document.getElementById('add-worker');
    addButton.addEventListener('click', add);
    let total = 0;

    function add(event) {
        event.preventDefault();
        let firstName = inputFields.firstName.value;
        let lastName = inputFields.lastName.value;
        let email = inputFields.email.value;
        let birthDate = inputFields.birthDate.value;
        let position = inputFields.position.value;
        let salary = Number(inputFields.salary.value);

        if (firstName == '' || lastName == '' || email == '' || birthDate == '' || position == '' || salary == '') {
            return;
        }
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${birthDate}</td>
        <td>${position}</td>
        <td>${salary}</td>
        <td><button class='fired'>Fired</button> <button class='edit'>Edit</button></td>`


        let firedBtn = tr.querySelector('.fired');
        let editBtn = tr.querySelector('.edit');
        firedBtn.addEventListener('click', fire);
        editBtn.addEventListener('click', edit);

        outputFields.tbody.appendChild(tr);

        total += salary;

        outputFields.budgetSum.textContent = total.toFixed(2);

        inputFields.firstName.value = '';
        inputFields.lastName.value = '';
        inputFields.email.value = '';
        inputFields.birthDate.value = '';
        inputFields.position.value = '';
        inputFields.salary.value = '';

        function fire(event) {
            total -= Number(tr.querySelectorAll('td')[5].textContent);
            outputFields.budgetSum.textContent = total.toFixed(2);
            tr.remove();
        }

        function edit(event) {

            inputFields.firstName.value = firstName;
            inputFields.lastName.value = lastName;
            inputFields.email.value = email;
            inputFields.birthDate.value = birthDate;
            inputFields.position.value = position;
            inputFields.salary.value = salary;

            total -= inputFields.salary.value;
            outputFields.budgetSum.textContent = total.toFixed(2);

            tr.remove();

        }

    }

}
solve()