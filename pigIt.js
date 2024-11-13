function pigIt(str){
    let punc = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    let newArray = str.split(' ');
    let output = [];
    newArray.forEach(element => {
    if (!punc.includes(element)){
      output.push(element.slice(1) + element[0] + 'ay')
    }else{
      output.push(element)
    }
  })
    return output.join(' ')
  }