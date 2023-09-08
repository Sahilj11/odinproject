
function sumRange(number){
    if(number <= 1){
        return number;
    }
    return number + sumRange(number-1);
}
const result = sumRange(3);
