const isPalindrome = (string) => {
    string = string.toLowerCase();
    let charsArray = string.split('');
    let validChars = "abcçdefgğhıijklmnoöprsştuüvwxyz".split('');
    
    let lettersArr = [];
    charsArray.forEach(char => {
        if(validChars.indexOf(char) > -1)
            lettersArr.push(char);
    });
    if(lettersArr.join('') === lettersArr.reverse().join(''))
        return true
    else
        return false
}

console.log(isPalindrome("Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era."));

