function fibonacciIterative(num){
    if(num < 2) return num;
    let seclast = 1;
    let last = 0;
    for(let i = 2; i<num; i++){
        let temp = seclast;
        seclast += last;
        last = temp;
    }
    return last + seclast;
}
function fibonacciIterative2(num){
    let arr = [0, 1];
    if(num < 2) return num;

    for (let i = 2; i <= num; i++) {
         arr.push(arr[i-2] + arr[i - 1]);
    }
    return arr[num];
}
let map = new Map;
function fibonacciRecursive(num){
    if(map.has(num)) return map.get(num);
    if(num < 2) return num;

    map.set(num,fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2));
    return map.get(num);
}
console.log(fibonacciIterative(1111));
// console.log(fibonacciIterative2(8));
// console.log(fibonacciRecursive(8));

// console.log(fibonacciIterative(40));
// console.log(fibonacciIterative2(3));
console.log(fibonacciRecursive(1111));