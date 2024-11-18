function longest(s1, s2) {
    let s3 = s1 + s2;
    let myArray = [];
    for (let i = 0; i < s3.length; i++){
      if (myArray.includes(s3[i])){
        continue
      }else{
        myArray.push(s3[i])
      }
    }
    return myArray.sort().join('');
  }