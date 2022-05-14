// // 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let a = 1
for(let b = 2; a <= 10; a++ ) {
    console.log(b ** a)
}

// // 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const exp = function(c) {
for(let b = 2; c <= 10; c++ ) {
    console.log(b ** c)
}
}
exp(1)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smile = ":)"
for(let count = 1; count <= 5; count++){
    console.log(smile.repeat(count));
}

// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), 
// а также количество строк для вывода, e.g. function printSmile(stroka, numberOfRows)

const concat = function print(stroka, numberOfRows) {
let count = 0
for(count; count <= numberOfRows; count++){
    console.log(stroka.repeat(count));
}
}
concat("1", 5)


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв
// Проверки: 'case', 'Case', 'Check-list'

const word =  function getWordStructure(word) {
let vowels = word.match(/[aeiouy]/gi)
let consonants = word.match(/[bcdfghjklmnpqrstvwxz]/gi)
console.log ("Слово " + (word) + " состоит из " + 
(vowels === null ? 0 : vowels.length) + " гласных и " + 
(consonants === null ? 0 : consonants.length) + " согласных букв")
}
word("case")
word('Case')
word('Check-list')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'


function isPalindrom(word) {
    let lowRegStr = word.toLowerCase()
    let reverseStr = lowRegStr.split('').reverse().join('')
    if(reverseStr === lowRegStr) {
    console.log("palindrome")
    } 
    else console.log("not palindrome")
}

isPalindrom('Abba')
isPalindrom('abba')
