function CreateObject(array) {
    
     
    let obj = {};
    for (let i = 0; i < array.length; i+=2) {
        let product = array[i];
        let calories = array[i+1];
        obj[product] = +calories;
        
    }
console.log(obj);
}



CreateObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);