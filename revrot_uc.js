function revrot(str, sz) {
  if (sz <= 0 || str === '' || sz > str.length) return '';
  let myArray = str.split('');
  let newArray = [];
  while (myArray.length > sz){
    let placeHolder = '';
    for (let i = 0; i < sz; i++){
      placeHolder += myArray.shift();
    }
    newArray.push(placeHolder)
  }
  for (let num of newArray){
    let numPlaceHolder = '';
    if (num.split('').reduce((acc, curr) => Number(acc) + Number(curr)) % 2 === 0){
      for (let i = sz - 1; i >= 0; i--){
        numPlaceHolder += num[i]
      }
    }else {
      let numPlaceHolder = num.slice(1) + num[0];
    }
    num = numPlaceHolder
    }
    if (myArray.length > 0) newArray.push(myArray.join(''))
    return newArray.join('')
  }


console.log(revrot("123456987654", 6))
