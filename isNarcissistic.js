function isNarcissistic(...args) {
    for (let num of args) {
        if (!isNaN(Number(num))) {
            let stringNumArr = String(num).split('');
            let ans = 0;
            for (let char of stringNumArr){
                ans += Number(char) ** stringNumArr.length
            }
            if (String(ans) !== String(num))return false
        }else{
            return false
        }
    }
    return true
}