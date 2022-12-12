async function attachEvents() {
    //1. get all buttons

    document.getElementById('btnLoad').addEventListener('click', loadData);
    document.getElementById('btnCreate').addEventListener('click', createData);
    let phonebookUl = document.getElementById('phonebook');
    let url = 'http://localhost:3030/jsonstore/phonebook';
    phonebookUl.addEventListener('click', removeContant);




    //3.create load function => fetch all data from server
    //4.display loaded data
    //5.create new record func => get data from input fields and add it to the server
    //6. implement delete function

    function createData(event) {
        let name = document.getElementById('person');
        let phoneNumber = document.getElementById('phone');
        if (!name.value || !phoneNumber.value) {
            return;
        }

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'aplication/json' },
            body: JSON.stringify({
                person: name.value.trim(),
                phone: phoneNumber.value.trim()
            })
        })
            .then(res => {
                loadData();
                return res.json();
            })
            .catch(err => alert(err.message));

        name.value = '';
        phoneNumber.value = '';

    }
    function loadData(event) {

        fetch(url)
            .then(response => response.json())
            .then(data => {
                phonebookUl.replaceChildren();

                Object.values(data).forEach(info => {

                    let li = document.createElement('li');
                    let deleteBtn = document.createElement('button');
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.setAttribute('id', info._id);
                    li.textContent = `${info.person}: ${info.phone}`;
                    li.appendChild(deleteBtn);
                    phonebookUl.appendChild(li);
                });


            })


    }
    function removeContant(e) {
        let currentId = e.target.id;
        if (e.target.textContent == 'Delete') {
            fetch(`${url}/${currentId}`, {
                method: 'DELETE'
            })
                .then(res => {
                    loadData();
                    return res.json();
                })
                .catch(err => alert(err.message));
        }
    }
}

attachEvents();