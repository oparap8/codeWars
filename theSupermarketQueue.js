function queueTime(customers, n) { 
    if (customers.length === 0) {
        return 0;
    }     
    let tills = new Array(n).fill(0);
    let time = 0;
    if (n === 1){
        return customers.reduce((acc, curr) => acc + curr)
    }else if (n >= customers.length){
        return Math.max(...customers)
    }
    for (let i = 0; i < tills.length; i++){
        tills[i] = customers.shift()
    }
    while (customers.length > 0){
        time += Math.min(...tills)
        let min = Math.min(...tills);
        for (let i = 0; i < tills.length; i++){
            tills[i] -= min
        }
       
        for (let j = 0; j < tills.length; j++){
            if (tills[j] === 0){
                tills[j] += customers.shift()
                if (customers.length === 0){
                    break;
                }
            }
        }
    }
    if (customers.length === 0){
        time += Math.max(...tills)
    }
        return time
}

