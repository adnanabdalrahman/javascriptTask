const args = process.argv.slice(2);

if (!args.length) {
    console.log('please insert a text');
    return false;
}

const encryptedText = args.map(encryptText);
console.log(encryptedText.join(' '));



function encryptText(word){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const plainWord = word.split('');
    let encryptedWord = [];
    plainWord.forEach(letter => {
        let letterIndex = alphabet.indexOf(letter.toLowerCase());
        encryptedWord.push(alphabet[letterIndex+3]);
    });
    return encryptedWord.join('')
}

