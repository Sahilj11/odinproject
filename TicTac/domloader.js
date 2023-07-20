export default function formDOMLoader(){
    const rows = document.querySelector('#row').value;
    const column = document.querySelector('#column').value;
    return[rows,column];
}
export const gameBoardHTML = document.querySelector('.gameBoard');