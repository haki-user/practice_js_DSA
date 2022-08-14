function insertionSort(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j < i; j++){
            if(arr[i] < arr[j]){
                //insert arr[i] to jth pos
                let temp = arr[i];
                for(let k = i; k > j; k--){
                    arr[k] = arr[k-1];
                }
                arr[j] = temp;
                break; // this works without break and even with continue
            }
        }
    }
    return arr;
}

let a = [99,44,6,2,1,5,63,87,283,4,0];
console.log(insertionSort(a));