function bubbleSort(arr){ 
   const n = arr.length;
   let m = n;
    for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++){
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        m--;// i added this
    }
    return arr;
}

let a = [99,44,6,2,1,5,63,87,283,4,0];
console.log(bubbleSort(a));