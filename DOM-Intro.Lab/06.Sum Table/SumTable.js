function sumTable() {
const rows = [...document.querySelectorAll('tr')]
.slice(1,-1);
let sum = 0;

for (const row of rows) {
    const value = +row.lastElementChild.textContent;
    sum+=value;
}

document.getElementById('sum').textContent = sum;
}