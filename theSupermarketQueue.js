/**
 * This function calculates the total time it takes to process a queue of customers
 * given the number of available tills.
 * @param {array} customers - an array of numbers representing the time it takes to
 * process each customer
 * @param {number} n - the number of available tills
 * @returns {number} the total time it takes to process the queue
 */
function queueTime(customers, n) { 
    if (customers.length === 0) {
        // if there are no customers, return 0
        return 0;
    }     
    let tills = new Array(n).fill(0);
    let time = 0;
    if (n === 1){
        // if there is only one till, return the sum of all the customers' times
        return customers.reduce((acc, curr) => acc + curr)
    }else if (n >= customers.length){
        // if there are as many or more tills than customers, return the max time of all the customers
        return Math.max(...customers)
    }
    for (let i = 0; i < tills.length; i++){
        // assign the first n customers to the tills
        tills[i] = customers.shift()
    }
    while (customers.length > 0){
        // calculate the minimum time of all the tills
        time += Math.min(...tills)
        let min = Math.min(...tills);
        for (let i = 0; i < tills.length; i++){
            // subtract the minimum time from each till
            tills[i] -= min
        }
       
        for (let j = 0; j < tills.length; j++){
            if (tills[j] === 0){
                // if a till is finished, assign the next customer to it
                tills[j] += customers.shift()
                if (customers.length === 0){
                    break;
                }
            }
        }
    }
    if (customers.length === 0){
        // add the remaining time of all the tills to the total time
        time += Math.max(...tills)
    }
        return time
}

