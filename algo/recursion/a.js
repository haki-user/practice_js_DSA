// Time complexity O(2^n)
function fibonacci(num){
    if(num < 2) return num;
    return fibonacci(num - 2) + fibonacci(num - 1)
}

console.log(fibonacci(2)) // 1