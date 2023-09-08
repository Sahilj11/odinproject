function customSearch(arr,callback){
    if(typeof callback == 'function'){
        const length = arr.length;
        let result = false;
        for(let i = 0 ; i < length ; i++){
            result=callback(arr[i]);
        }
        return result;
    }else{
        return false;
    }    
}
console.log(customSearch([1,2,6],function(num){
    return num < 7;
}))
