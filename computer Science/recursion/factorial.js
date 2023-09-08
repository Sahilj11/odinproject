function fact(number){
    if(number <= 1){
        return number;
    }
    return number * fact(number-1);
}
console.log(fact(5));