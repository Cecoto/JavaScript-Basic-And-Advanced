function deleteByEmail() {
    let tableRows = document.querySelectorAll('tbody tr');


    let input = document.querySelector('label input').value;

    let isFound = false;
    for (const row of tableRows) {

        if (row.children[1].textContent == input) {
            const parent = row.parentNode;
            parent.removeChild(row);
            isFound = true;
        }
       
    }
    if (isFound) {
        document.getElementById('result').textContent = 'Deleted.';
    }
    else {
        document.getElementById('result').textContent = "Not found.";

    }



}