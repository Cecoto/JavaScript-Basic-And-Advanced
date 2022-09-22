function solve(nums) {


    const result = nums.filter((x ,i) => i % 2 != 0).map(x=>x*2).reverse();
    
console.log(result.join(' '));
}

solve([10, 15, 20, 25]);

solve([3, 0, 10, 4, 7, 3]);