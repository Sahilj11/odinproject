const arr = [1,2,3,4,5];
function find(arr , callback) {
  let copy = arr.slice();
  console.log(copy);
  if(copy.length==0){
    return true;
  }
  if(callback(copy[0])){
    copy.shift();
    return find(copy,callback); 
  }else{
    return false;
  }
}
console.log(find(arr,function(num){
  return num < 7;
}))
