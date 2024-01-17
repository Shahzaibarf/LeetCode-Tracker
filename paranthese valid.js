function isValid(s) {
    const arr = ["()","{}","[]"];
    for (const element of arr){
       if(s === element){
           return true
       } 
    }
    return false;
}
const inputString = "{)";
console.log(isValid(inputString)); // Output: true
