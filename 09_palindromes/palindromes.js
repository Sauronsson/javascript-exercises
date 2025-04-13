const palindromes = function (word) {
    for(let front = 0, back = word.length-1; front < word.length/2; front++,back--){
        let checkSkips = true
        while (checkSkips) {
            if( word[front].toUpperCase() == word[front].toLowerCase() && !(word[front] >= '0' && word[front] <= '9')){
                front++
            } else if( word[back].toUpperCase() == word[back].toLowerCase() && !(word[back] >= '0' && word[back] <= '9')){
                back--
            } else {
                checkSkips = false
            }
        }
    
        if(word[front].toLowerCase() !== word[back].toLowerCase()){
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
