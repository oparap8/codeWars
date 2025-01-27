// Write
// String.prototype.hashify()
// that will turn a string into a hash/object. Every character in the string will be the key for the next character.
// E.g.
// '123456'.hashify() == {"1":"2","2":"3","3":"4","4":"5","5":"6","6":"1"} // The last char will be key for 1st
// char
// '11223'.hashify() == {"1":["1","2"],"2":["2","3"],"3":"1"} // when duplicates exist, group them in an array
// // i.e. 1 is key for next char 1, that 1 is key for next char 2, but 1 is already in the hash, so add 2 to key 1
// 'Codewars'.hashify() == {"C":"o","o":"d","d":"e","e":"w","w":"a","a":"r","r":"s","s":"C"}


String.prototype.hashify = function () {
    let obj = {};
    for (let i = 0; i < this.length; i++) {
        const key = this[i];
        const nextChar = this[(i + 1) % this.length]; // Circular reference

        if (!obj[key]) {
            obj[key] = nextChar; // Initialize key
        } else {
            // Key exists, convert to array if necessary and include nextChar
            if (!Array.isArray(obj[key])) {
                obj[key] = [obj[key]];
            }
            
            obj[key].push(nextChar);
        }
    }
    return obj;
};


console.log('123456'.hashify());
console.log('11223'.hashify());
console.log('Codewars'.hashify());