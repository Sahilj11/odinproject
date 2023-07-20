export function input(e){
    let s = e.target.dataset.place;
    let userInput = userClickRecorder(s);
    let row = userInput[0];
    let column = userInput[1];
    let player = playerObject.getActivePlayer().symbol;
    gameBoardObj.getPlayerEntry(row,column,player);
    playerObject.switchPlayer();
}


export function userClickRecorder(s){
   let userInputArr =  s.split(";");
   return userInputArr;
}