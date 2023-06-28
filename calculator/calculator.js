let numberCounter = 0;
let operatorCounter = 0;
let arrFirstInput= [];
let arrLastInput = [];
let firstInput , lastInput, operator,result,equalToSign;

// selecting all elements with data-value attribute
const userClicks = document.querySelectorAll('[data-value]');

// iterating through each element and applying callback function
userClicks.forEach(userClick=>{

    // listining the clicks of user
    userClick.addEventListener("click",(event)=>{
       const dataValue = userClick.getAttribute("data-value");
       
       // if click is on number , showing it on display and using array to keep track of previous digits
       if (isNaN(dataValue) === false){
        if (operatorCounter === 0){
            const firs = document.querySelector('p').textContent += dataValue;
        }
        
        // listing AC click
       } else if (dataValue === "AC"){
        // clear the textContent in p element
        console.log("AC");

        // perform function of operator
        } else if (dataValue === "="){
            const temp = arrLastInput.join("");
            lastInput = +temp;
            console.log(calculations(firstInput,lastInput,operator));
            /* arrLastInput.length = 0; */
            arrFirstInput.length =0;
            numberCounter = 0;
            operatorCounter = 0;
            equalToSign++;
            console.log("operator counter after = ", operatorCounter);
            /* console.log(lastInput)*/

            // joining the array and converting it into number for further calculation , emptying the array for 2nd value 
        } else {
            /* document.querySelector('p').textContent = dataValue; */
            operatorCounter++;
            if (operatorCounter === 1 && arrFirstInput.length !== 0){
                const temp = arrFirstInput.join("");
                firstInput = +temp;
                console.log("firstInputjoined", firstInput)
            }
            else{
                if (arrLastInput.length !== 0){
                    const temp = arrLastInput.join("");
                    lastInput = +temp;
                    result = calculations(firstInput,lastInput,operator);
                    console.log("last input been joined", lastInput, result);
                    firstInput = result;
                    arrLastInput.length = 0;
                    console.log("firstInput new = ", firstInput);
                    /* operatorCounter = 0; */
                }
            } 
            operator = dataValue;
            numberCounter = 0;
            console.log("operaterCounter = ",operatorCounter);
        }
    });
});

const calculations = (firstInput,lastInput,operator)=> {
    if (operator === "/"){
        const division = firstInput / lastInput;
        return division;
    }else if(operator === "+"){
        const addition = firstInput + lastInput;
        return addition;
    } else if(operator === "-"){
        const substract = firstInput - lastInput;
        return substract;
    } else if(operator === "*"){
        const multiply = firstInput * lastInput;
        return multiply;
    }else if (operator === "%"){
        const remainder = firstInput % lastInput;
        return remainder;
    }
}
