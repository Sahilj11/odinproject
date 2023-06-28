let counter = 0;
let myLibrary = [];
let myLength = 1;
const table = document.querySelector('table');

function Book(number ,title, author,pages,read){
    // constructor;
    this.number = number,
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

   // takes input from user 
   document.querySelector('#submit').addEventListener('click', function (e){
    // takes input from user 
    
    e.preventDefault();
    validateForm();
    let title = document.querySelector('#book').value;
    let author = document.querySelector('#author').value;
    let page = document.querySelector('#page').value;
    let read = document.querySelector('#read').value;
    if(read === 'yes') read = "I have read it";
    else if(read === 'no') return "Not read yet";
     console.log(read);
    let newbook = new Book(myLength,title,author,page,read);
    console.log(newbook, "This is newbook");
    myLibrary.push(newbook);
    myLength = myLibrary.length + 1;
    printSubmit();
    console.log(myLibrary);
    // add the resulting obj to myLibrary array
 });

   // add the resulting obj to myLibrary array

function getValue(){
   let entries = Object.values(myLibrary[counter]);
   counter++;
   return entries;
}
function printSubmit () {
      let entries = getValue();
      let length = entries.length;
      const tR = document.createElement('tr');
      for(let i = 0 ; i < length ; i++){
         const tD = document.createElement('td');
         tD.textContent = entries[i];
         tR.appendChild(tD);
      }
      table.appendChild(tR);
}

function validateForm() {
   var x = document.forms["myForm"]["book"].value;
   if (x == "") {
     alert("Name must be filled out");
     return false;
   }
 }