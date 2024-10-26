const removeFromArray = function(initArray) {
    for(let i = 1; i < arguments.length; i++){
        for(let j = 0; j < initArray.length; j++){
            if(arguments[i] === initArray[j]) {
                initArray.splice(j, 1);
                j--;
            }
        }
    }

    return initArray;
};

// Do not edit below this line
module.exports = removeFromArray;
