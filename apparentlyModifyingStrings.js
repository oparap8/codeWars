function apparently(string) {
    if (string === '') return ''
    let myArray = string.split(' ')
    for (let i = 0; i < myArray.length; i++){
        if (['and', 'but'].includes(myArray[i]) && 'apparently' !== myArray[i + 1]){
            myArray.splice(i + 1, 0, 'apparently')
        }
    }
    return myArray.join(' ')
  }

  console.log(apparently("It was great and apparently I've never been on live television before but sometimes I don't watch this."))