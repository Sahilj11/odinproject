const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function contains(nestedObject , searchQuery){
  // first we need to pass object and get its values 
  // base case will be if the passed item is not object or string(done this because every string in javascript is an object)
  // then searching the returned array for the search query
  //get first element value and do this until first element do not give array
  nestedObject = Object.values(nestedObject)

  if(typeof nestedObject[0] != 'object' || typeof nestedObject[0]=== 'string' || nestedObject[0] instanceof String){
		console.log('this code is implemented')
					console.log(Object.values(nestedObject));
    if(Object.values(nestedObject).find(element => element == searchQuery)){
				return true;
			}else{
      return false;
    }
  }
	return contains(nestedObject[0],searchQuery);
}

console.log(contains(nestedObject, 'foo2'));
