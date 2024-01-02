const palindromes = function (string) {
    string = string.toLowerCase();
    noSpecials = string.replace(/[^a-zA-Z0-9 ]/g, '');
    string = noSpecials.replace(/\s/g, '');
    invertedString = '';
    for (let i=string.length-1; i>=0;i--){
        invertedString = invertedString + string[i];
    }
    return invertedString == string;
};

// Do not edit below this line
module.exports = palindromes;
