const reverseString = function(initString) {
    let reversedString = "";
    for(let i = initString.length; i > 0; i--){
        reversedString += initString[i - 1];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
