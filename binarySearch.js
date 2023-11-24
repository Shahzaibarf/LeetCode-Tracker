function binarySearch(arr, searchVal){
    let midVal = arr.length/2;
    for(let i = 0; i < midVal; i++){
        if(arr[i] == searchVal){
            return i
        }
    }
    for(let i = midVal; i < arr.length; i++){
        if(arr[i] == searchVal){
            return i
        }
    }
    return -1
}
let arr = [-1,0,3,5,9,12];
let target = 12;
console.log(binarySearch(arr, target));