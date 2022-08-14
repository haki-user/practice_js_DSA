function factorialIterative(num){
    let multi = 1;
    for(let i = 2; i <= num; i++){
        multi *= i;
    }
    return multi;
}

function factorialRecursive(num){
    if(num < 2) return 1;
    return factorialRecursive(num-1)*num
}

console.log(factorialIterative(0));
console.log(factorialRecursive(5));