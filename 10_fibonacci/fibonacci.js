const fibonacci = function(num) {
    num = parseInt(num);
    if(num < 0) return "OOPS";
    else if(num === 0) return 0;
    let previous = 1;
    let secPrevious = 0;
    let current = 1;
    for(let i = 1; i < num; i++){
        current = previous + secPrevious;
        secPrevious = previous;
        previous = current;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
