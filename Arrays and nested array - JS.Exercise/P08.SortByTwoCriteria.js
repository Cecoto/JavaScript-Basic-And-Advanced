function solve(input) {
    
input.sort(secondCriteria);
return input.join('\n');
    function secondCriteria(current,next) {
        
        if (current.length=== next.length) {

            return current.localeCompare(next);
        }
        return current.length-next.length;
    }
}

console.log(solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));
