const reverseString = function(string) {
    let length = string.length;
    let result = ""
    for (let i=length-1; i>=0; i--){
        result += string[i]
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
