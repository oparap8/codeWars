Array.prototype.remove_ = function(integer_list, values_list){
  
}
function remove(integerList, valuesList){
    let newArray = [];
    for (let int of integerList){
        if (!valuesList.includes){
            newArray.push(int)
        }
    }
    return newArray
}