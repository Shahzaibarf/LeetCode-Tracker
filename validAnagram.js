function checkAnagram(s,t) {
    if(s.length !== t.length){
        return false;
    }
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    
    if(sortedS === sortedT) {
        return true
    }
    
    return false;
}

let s = "anagram";
let t = "nagaram";

console.log(checkAnagram(s,t))
