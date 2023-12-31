function calculateProfit(arr){
    var buyValue = arr[0];
    var sellerValue = 0;
    var buyDay = 1;
   for (let i = 0; i < arr.length; i++){
       if(buyValue > arr[i]){
           buyValue = arr[i];
           buyDay = buyDay+i;
       }
       if(sellerValue < arr[i] && buyValue < i+1){
            sellerValue = arr[i];
       }
   }
  return sellerValue-buyValue;
}
let prices = [7,1,5,3,6,4];
console.log(calculateProfit(prices));