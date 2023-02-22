let str: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim" +
" ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex" +
" ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit" +
" esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non" +
" proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

// Вывести
// 1 Длину
console.log(`\nlenght = ${str.length}`);
// 2 50 первых символов
console.log(`\nfirst 50 char \n${str.slice(0, 50)}`)
// 3 Реверс строку
let strRevers: string = "";
for (let i=str.length; i > -1; i--){
    strRevers += str.charAt(i);
}
console.log(`\nstr revers\n${strRevers}`);

// 4 Посчитать количество . в тексте
let num: number = 0;
if (str.includes(".")){
    for (let char of str){
        if (char === '.'){
            num++;
        }
    }
}
console.log(`"." in text ${num}`)

// 5 Вывести самое длиное слово
let longestWord: string = '';
for (let word of str.split(" ")){
    let newWord = word.replace(/[^a-zа-яё]/gi, '');
    if (newWord.length > longestWord.length){
        longestWord = newWord;
    }
}
console.log(`\nLongest word ${longestWord}`);

// 6 Вывести текст от начала до средины
console.log(`\nHalf of the text \n${str.slice(0, str.length/2)}`)
// 7 Вывести текст без слова < in >
console.log(`\nDel word in \n${str.replace(/\bin\b/gi, '')}`)

// 8 Вывести текст заменив букву < l > на < m >
 console.log(`\nReplace l to m ${str.replace('l', 'm')}`);

 // 9 Удалить второе предложение и вывести текст на экран 
let arr: Array<string> = str.split('.');
arr.splice(1, 1);
console.log(`\n Delete second sentence\n${arr.join('.')}`)

// 10 Найти самое длинное слово и заменить его на самое короткое
let longestWord2: string = '';
for (let word of str.split(" ")){
    let newWord = word.replace(/[^a-zа-яё]/gi, '');
    if (newWord.length > longestWord2.length){
        longestWord2 = newWord;
    }
}
let shortestWord2: string = longestWord2;
for (let word of str.split(" ")){
    let newWord = word.replace(/[^a-zа-яё]/gi, '');
    if (newWord.length < shortestWord2.length){
        shortestWord2 = newWord;
    }
}
console.log(`\nReplase longest word to shortest word \n${str.replace(longestWord2, shortestWord2)}`)

// 11 Сделать так, чтобы каждая новое предложение начиналось с табуляции на новой строке
let arr3: string[] = str.split('.');
for ( let i = 0; i < arr3.length; i++){
    arr3[i] = "\t"+arr3[i].trim();
}
console.log(`\ntask 11 \n${arr3.join(".\n")}`);

// 12 Вывести все слова короче 5 символов
let arr4: string[] = [];
for (let subStr of str.split(' ')){
    let word = subStr.replace(/[^a-zа-яё]/gi, '');
    if (word.length < 4 && (arr4.indexOf(word) === -1)){
        arr4.push(word);
    }
}
console.log(`\ntask 12\n${arr4.join(", ")}`);