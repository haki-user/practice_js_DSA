function selectionSort(arr){
    for(let i = 0; i<arr.length; i++){
        let minptr = i;
        for(let j = i+1; j<arr.length; j++){
            if(arr[minptr] > arr[j]){
                minptr = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minptr];
        arr[minptr] = temp;
    }
    return arr;
}
function mySelectionSort(arr){
    // Why this does'nt work??
    let length = arr.length;
    for(let i = 0; i<length; i++){
        let minptr = i;
        let maxptr = i;
        for(let j = i+1; j<length; j++){
            if(arr[minptr] > arr[j]){
                minptr = j;
            }
            if(arr[maxptr] < arr[j]){
                maxptr = j;
            }   
        }
        let temp = arr[minptr]
        arr[minptr] = arr[i];
        arr[i] = temp;
        
        temp = arr[maxptr]
        arr[maxptr] = arr[length-1]
        arr[length-1] = temp;
        length--;
    }
    return arr;
}

let a = [99,44,6,2,1,5,63,87,283,4,0];
let b = [99,44,6,2,1,5,63,87,283,4,0];
console.log(selectionSort(a));
console.log(mySelectionSort(b));