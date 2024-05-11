const reverseString = function(aString) {
    let reversedString = "";
    for(let i = aString.length; 0 <= i; i--)
    {
        reversedString += aString.charAt(i);
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
