//1.add event listner to the window load
//2. fetch all student info from server
//3.updae html with recieved data
//4. on submit get value from students
//5. use the data and create POST request
//6. update student list

let url = 'http://localhost:3030/jsonstore/collections/students';

let tbody = document.querySelector('#results tbody');

let form = document.getElementById('form');

window.addEventListener('load', loadStudents);
form.addEventListener('submit', addStudent);
async function addStudent(event) {
    event.preventDefault();

    let dataForm = new FormData(form);
    let infoArr = [...dataForm.values()];

    let gradeNumber = Number(infoArr[3].trim());

    tbody.replaceChildren();
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: infoArr[0],
                lastName: infoArr[1],
                facultyNumber: infoArr[2],
                grade: gradeNumber
            })
        });
        if (response.ok == false) {
            throw new Error('Can not create new record');
        }
        loadStudents();

    } catch (error) {
        alert(error.message);
    }

}
async function loadStudents() {

    try {
        let response = await fetch(url);
        if (response.ok == false) {
            throw new Error('Can not fetch data');
        }

        let data = await response.json();

        Object.values(data).forEach(studentInfo => {
            let student = createElement('tr',
                createElement('td', studentInfo.firstName),
                createElement('td', studentInfo.lastName),
                createElement('td', studentInfo.facultyNumber),
                createElement('td', studentInfo.grade)
            );
            tbody.appendChild(student);
        });

    } catch (error) {
        alert(error.message);
    }

}
function createElement(type, ...content) {
    let element = document.createElement(type);

    content.forEach(c => {
        if (typeof c === 'number' || typeof c == 'string') {
            c = document.createTextNode(c);
        }
        element.appendChild(c);
    });
    return element;
}
