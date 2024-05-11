const repeatString = function(aString, amountRepetition) {
    if(amountRepetition < 0){
        return "ERROR"
    }
    
    let combinatorString = ""
    for(let i = 0; i < amountRepetition; i++)
    {
        combinatorString += aString;
    }
    return combinatorString;
};

// Do not edit below this line
module.exports = repeatString;
