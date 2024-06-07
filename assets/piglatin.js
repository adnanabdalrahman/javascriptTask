const args = process.argv.slice(2);

if (!args.length) {
    console.log('please insert a text');
    return false;
}

const translatedText = args.map(translateToPigLatin);
console.log(translatedText.join(' '));

function translateToPigLatin(word){
    const twoConsonantStart = /^[^aeiou]{2}/;
    const oneConsonantStart = /^[^aeiou]/;
    const vowel  = /^[aeiou]/;
    if(twoConsonantStart.test(word)){
        word = word.slice(2) + word.slice(0, 2) + "ay";
    }else if(oneConsonantStart.test(word)){
        word = word.slice(1) + word.slice(0, 1) + "ay";
    }else{
        word = word + "way";
    }
    return word;
}