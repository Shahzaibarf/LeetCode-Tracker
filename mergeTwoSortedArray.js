function mergeTwoSortedArray(arr1, arr2) {
    let mergeArray = [];
    mergeArray.push(...arr1,...arr2);
   for (let i = 0; i < mergeArray.length; i++) {
         for (let j = 0; j < mergeArray.length; j++) {
             if (mergeArray[j] > mergeArray[j + 1]) {
                 let temp = mergeArray[j];
                 mergeArray[j] = mergeArray[j + 1];
                 mergeArray[j + 1] = temp;
             }
         }
     }
    return mergeArray;
 }
 console.log(mergeTwoSortedArray([1,2,4],[1,3,4]));
 