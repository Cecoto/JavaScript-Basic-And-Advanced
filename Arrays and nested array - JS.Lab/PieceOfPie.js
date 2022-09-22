function find(array,flavor1,flavor2) {
    
    const start = array.indexOf(flavor1);
    const end = array.indexOf(flavor2) + 1;
    const result = array.slice(start,end);

     
     return result;
}

console.log(find(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'));