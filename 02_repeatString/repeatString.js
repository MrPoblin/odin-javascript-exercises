const repeatString = function(initString, num) {
    let fullString = "";
    if(num < 0) return 'ERROR';
    for(let i = 0; i < num; i++){
        fullString += initString;
    }
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;
