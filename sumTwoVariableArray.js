function sumTwoVariableArray(arr){
    let target = 17;
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){
            if(arr[i]+arr[j] === target){
                return [i,j]
            }
        }
    }
    return "Not Found"
}
let arr = [2,7,11,15];
console.log(sumTwoVariableArray(arr))