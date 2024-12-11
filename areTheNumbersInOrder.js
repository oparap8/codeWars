function inAscOrder(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
      if (min > arr[i]) return false;
      min = arr[i]
    }
    return true
  }