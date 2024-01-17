function reverseLinkedList(arr){
    for(i = 0; i < arr.length; i++){
        var num = arr[i];
        for(j = 0; j < arr.length; j++){
            if(i != j && num > arr[j]){
                num = arr[j];
                arr[j] = arr[i]
                arr[i] = num
            }
        }
    }
    return arr;
}

console.log(reverseLinkedList([1,2,3,4,5]))