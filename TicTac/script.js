
import {gameBoardHTML} from "./domloader.js";

let gameOver = false;
const playerObject = playerObj();
const gameBoardObj = gameBoard();
// make the board using 2d array 
function gameBoard(){
    let rows = 3;
    let columns = 3;
    let board = [];
    for (let i = 0 ; i < rows ; i++){
        board[i] = [];
        for (let j = 0 ; j < columns ; j++){
            // add each element of array a custom function 
            // which further have getter and setter function
            board[i].push(cell());
        }
    }

    // print gameBoard on console
    function printBoard(){
        let boardValueNew = board.map(row=> row.map(column=> column.getValue()));
        console.log(boardValueNew);
        const allInputField = document.querySelectorAll('td');
        const  allInputFieldArr = Array.from(allInputField);
        let arrCounter = 0;
        for(let i = 0 ; i < 3 ; i++){
            console.log(arrCounter, "outside");
            for(let j = 0 ; j < 3 ; j++){
                if(boardValueNew[i][j] !== 0){
                    allInputField[arrCounter].textContent = boardValueNew[i][j];
                }
                arrCounter++; 
            }
        }
    }

    function gameRule(){

        function horizontalCheck(){
            // logic to check the horizontal lines
            const matchedOrNotX = board.map(row=>row.every(colmun=> colmun.getValue() === "X"));
            const matchedOrNotO = board.map(row=>row.every(colmun=> colmun.getValue() === "O"));
            const resultX = matchedOrNotX.filter((element)=>{
                return element === true;
            })
            const resultO = matchedOrNotO.filter( (element)=>{
                return element === true;
            })
            if(resultO[0] === true || resultX[0] === true){
                let activePlayer = playerObject.getActivePlayer().name;
                console.log(`${activePlayer} won the game`);
                return gameOver = true;
            }
        }
    
        function verticalCheck(){
            // logic 
            for(let i = 0; i < 3 ; i++){
                let tempX = board.map(row=> row.slice(i,i+1));
                tempX = tempX.flat();
                tempX = tempX.every(column=> column.getValue() === "X");
                let tempO = board.map(row=> row.slice(i,i+1));
                tempO = tempO.flat();
                tempO = tempO.every(column=> column.getValue() === "O");
    
                if(tempO === true || tempX === true){
                    let activePlayer = playerObject.getActivePlayer().name;
                    console.log(`${activePlayer} won the game`);
                    return gameOver = true;
                }
            }
        }
        function diagonalCheck(){
            //logic
            diagonalChecker1();
            diagonalChecker2();
        }
        function diagonalChecker1(){
            let diagonalList = [];
                for(let i = 0 ; i < 3 ; i++){
                    diagonalList.push(board[i][i].getValue());
                }
                const diagonalX = diagonalList.every(element=> element === "X");
                const diagonalO = diagonalList.every(element=> element === "O");
                if(diagonalO === true || diagonalX === true){
                    return gameOver = true;
                }
        }
        function diagonalChecker2(){
            let diagonalList = [];
            let j = 2;
                for(let i = 0 ; i < 3 ; i++){
                    diagonalList.push(board[i][j].getValue());
                    j--
                }
                const diagonalX = diagonalList.every(element=> element === "X");
                const diagonalO = diagonalList.every(element=> element === "O");
                if(diagonalO === true || diagonalX === true){
                    return gameOver = true;
                }
        }
        return{
            diagonalCheck,
            horizontalCheck,
            verticalCheck
        }
    }
    const gameRuleObj = gameRule();
    // adding specified value in a specified cell
    function getPlayerEntry(row, column, player){
        // to stop player from add value to already populated cell
        if(board[row][column].getValue()!== 0){
            console.log("Invalid Move, enter in empty cell")
            return false;
        }else{
            board[row][column].addToken(player);
            gameRuleObj.horizontalCheck();
            gameRuleObj.verticalCheck();
            gameRuleObj.diagonalCheck();
            gameBoardObj.printBoard();
            if(gameOver === true){
                playerObject.switchPlayer();
                gameStop();
                resetBoard();
            }
            return true;
        }
    }
    function resetBoard() {
        for (let i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                board[i][j] = cell();
            }
        }
            gameOver = false;
        }
    return {
        printBoard,
        getPlayerEntry,
        resetBoard
    }
}
// fill custom function in each cell 
function cell(){
    let value = 0;

    // setter function
    function addToken(player){
       value = player;
    }

    // getter function
    function getValue(){
        return value;
    }

    return{
        addToken,
        getValue
    }
}
// create two player and switch b/w them after they make the move 
function playerObj(){
    let playerList = [
        {
            name: "Player 1",
            symbol: "X"
        },
        {
            name: "Player 2",
            symbol: "O"
        }
    ];
    let activePlayer = playerList[0];

    // swtich from current active player 
    function switchPlayer(){
        if(gameOver === true){
            activePlayer = playerList[0];
            console.log(`Active Player: ${activePlayer.name}`);
        }else{
            activePlayer = activePlayer === playerList[0] ? playerList[1] : playerList[0]; 
            console.log(`Active Player: ${activePlayer.name}`); 
        }
    }

    // activePlayer getter function
    function getActivePlayer(){
        return activePlayer;
    }
    console.log(`Active Player: ${activePlayer.name}`);
    return {
        switchPlayer,
        getActivePlayer
    }

}


// function doing things which is necessary for a single round 

gameBoardHTML.addEventListener('click',input);

function gameStop() {
    // empty board array
    console.log("Game resetting....");
    gameBoardObj.resetBoard();
    // stop listening to event
    gameBoardHTML.removeEventListener("click", input);
    // other necessary actions
}
function input(e){
    let s = e.target.dataset.place;
    let userInput = userClickRecorder(s);
    let row = userInput[0];
    let column = userInput[1];
    let player = playerObject.getActivePlayer().symbol;
    gameBoardObj.getPlayerEntry(row,column,player);
    playerObject.switchPlayer();
}


function userClickRecorder(s){
   let userInputArr =  s.split(";");
   return userInputArr;
}