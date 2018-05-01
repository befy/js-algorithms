const caesarCipher= (str,num) => {
    num = num % 31;
    let lowerCaseString = str.toLowerCase();
    let alphabet = 'abcçdefgğhıijklmnoöprsştuüvwxyz'.split('');
    let newString = '';
    
    for (let i = 0; i < lowerCaseString.length; i++) {
      let currentLetter = lowerCaseString[i];
      if (currentLetter === ' ') {
        newString += currentLetter;
        continue;
      }
      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + num;
      console.log(currentIndex)
      console.log("------");
      
      console.log(newIndex)
      if (newIndex > 30) 
        newIndex = newIndex - 31;
      if (newIndex < 0) 
        newIndex = 31 + newIndex;
      if (str[i] === str[i].toUpperCase()) {
        newString += alphabet[newIndex].toUpperCase();
      }
      else newString += alphabet[newIndex];
    };
    
    return newString;
  }
  console.log(caesarCipher('Github.com/befy', 2));

