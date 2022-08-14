function mergeSort(arr){
    if(arr.length === 1){
        return arr;
    }
    const length = arr.length;
    const mid = length/2;
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right){
    const result = [];
    let leftIndex = 0;
    let rightIndex =0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let a = [99,44,6,2,1,5,63,87,283,4,0];
console.log(mergeSort(a));