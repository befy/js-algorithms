const reverse = (string) => {
    let words = string.split(' ');
    let reversedWordsArray = [];

    words.map( word => {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reversedWordsArray.push(reversedWord);
    })
    return reversedWordsArray.join(' ');
}

console.log(reverse("javascript, swift, c, c++"));