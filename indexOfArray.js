var searchArray = function (arrayToSearch, query) {
    if (!Array.isArray(query)) throw new Error("Query must be an array");
    if (query.length !== 2) throw new Error("Query must contain 2 elements");  
    if (!Array.isArray(arrayToSearch[0])) throw new Error("arrayToSearch must be two dimensional");
  for (let i = 0; i < arrayToSearch.length; i++){
      if (arrayToSearch[i].length !== 2) throw new Error("sub-Array of arrayToSearch has length other than 2");
      let counter = 0;
      for (let j = 0; j < arrayToSearch[i].length; j++){
        if (arrayToSearch[i][j] == query[j]){
          counter++
        }
      if (counter === query.length) return i
    }
  }
  return -1
  };
  
  console.log(searchArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 'jjj'))