function calculateProfit(arr){
    var buyValue = 0;
    var sellerValue = 0;
    var buyDay = 0;
   for (let i = 0; i < arr.length; i++){
       if(buyValue == 0 || buyValue > arr[i]){
           buyValue = arr[i];
           buyDay = i
       }
       if(sellerValue == 0 || sellerValue < arr[i]){
           if(buyValue < i) {
                sellerValue = arr[i];
           }
       }
   }
   return sellerValue-buyValue;
}
let prices = [7,6,4,3,1];
console.log(calculateProfit(prices));