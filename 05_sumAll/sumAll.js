const sumAll = function(one, two) {
    let sum = 0;
    if(typeof one != "number" || typeof two != "number") return "ERROR";
    else if (one < 0 || two < 0) return "ERROR";
    else if (!Number.isInteger(one) || !Number.isInteger(one)) return "ERROR";

    if(one > two){
        let temp = one;
        one = two;
        two = temp;
    }
    for(; one <= two; one++){
        sum += one;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
