const arr = [1,2,3, 10];
const index = arr.length-1;
function product(arr){

  if(arr.length<= 1){
    return arr[0]; 
  }
  return arr.shift()* product(arr);
}
console.log(product(arr));
