function checkContainDuplicate(numArr) {
    for (i = 0; i < numArr.length - 1; i++) {
        for (j = 0; j < numArr.length; j++) {
            if (i !== j && numArr[i] === numArr[j]) {
                return true;
            }
        }
    }
    return false
}

console.log(checkContainDuplicate([1, 2, 3]));