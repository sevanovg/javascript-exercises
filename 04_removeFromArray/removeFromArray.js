const removeFromArray = function(arr, ...args) {
    let res = [];
    for (const element of arr) {
        valid = true
        for (const arg of args) {
            if (element === arg) {
                valid = false;
            }
        }
        if (valid) {
            res.push(element);
        }
    }
    return res;

};

// Do not edit below this line
module.exports = removeFromArray;
