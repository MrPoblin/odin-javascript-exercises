const palindromes = function (str) {
    str = str.toLowerCase();
    let allowedCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    str = str.split('').filter((symbol) => {
        for(let i = 0; i < allowedCharacters.length; i++){
            if(symbol == allowedCharacters[i]){
                return true;
            }
        }
        return false;
    }).join('');
    return (str === str.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
