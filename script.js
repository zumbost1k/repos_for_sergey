// function findOutlier(integers) {
//     let odd_score = 0;
//     let even_score = 0;
//     integers.forEach(element => {
//         if (element % 2 == 0) { even_score++ }
//         else { odd_score++ }
//     });
// let newarr=[]
//     if (odd_score > even_score) {
//         integers.forEach(function (el) {

//             if (el % 2 == 0) {
//                newarr.push(el)
//             }

//         });
//     }
//     else {
//         integers.forEach(function (el) {

//             if (el % 2 != 0) {
//                 newarr.push(el)
//             }

//         });
//     }
//     return newarr[0]
// }

// console.log(findOutlier([0, 1, 2]))

// function towerBuilder(n) {
//     let stars_kol1 = (n - 1) * 2 + 1;
//     let Christmas_tree = []
//     let star = 1;
//     for (let i = 0; i < n; i++) {
//         let space = (stars_kol1 - star) / 2
//         let stroka = "";
//         for (let i = 0; i < space; i++) {
//             stroka = stroka.concat(" ")
//         }
//         for (let i = 0; i < star; i++) {
//             stroka = stroka.concat("*")
//         }
//         for (let i = 0; i < space; i++) {
//             stroka = stroka.concat(" ")
//         }
//         star += 2;
//         Christmas_tree.push(stroka)
//     }
//     return Christmas_tree;
// }
// console.log(towerBuilder(6))

// function expandedForm(num) {
//     num = String(num).split("")
//     let itog = ''
//     while (num.length > 0) {
//         if (num[0] != '0') {

//             itog = itog + num[0] + "0".repeat(num.length - 1)
//             num.splice(0, 1)
//             if (num.some(element => {
//                 if (element != "0") { return true }
//             })) {
//                 itog += " + "
//                 continue
//             }
//         }
//         console.log(num)
//         num.splice(0, 1)

//     }
//     return itog

// }
// console.log(expandedForm(9000000000000000000))
// function permutations(string) {
//     let result = [string]

//     string = string.split("")


//     for (let i = 0; i < string.length; i++) {



//         for (let j = 0; j < string.length; j++) {
//             let stroka = string.slice(0, string.length)
//             stroka.splice(i, 1)
//             console.log(stroka)
//             if (result.indexOf(stroka.splice(j, 0, string[i]).join("")) == -1) {
//                 stroka.splice(j, 0, string[i])
//                 result.push(stroka.join(""))

//             }
//         }
//     }

//     console.log(result)
//     return result
// }
//permutations('aabb')
// function partition(arr) {
//     let result_arr = []
//     let intermediate_arr = []
//     for (let i = 0; i < arr[0].length; i++) {
//         intermediate_arr = []
//         for (let j = 0; j < arr[0].length; j++) {
//             if (j != i) {intermediate_arr.push(arr[i][j])

//             }
//         }
//         result_arr.push(intermediate_arr)
//     }

// return result_arr
// }
// console.log(partition([[8,3,5,2],[2,4,2,1],[3,1,1,1],[1,2,0,1]]))


// function permutations(string) {
//     let arr = string.split('')
//     //["a","b","c"]
//     let tmp = arr.slice()
//      //["a","b","c"]
//     let heads = []
//     //[]
//     let  out = [];
//     //[abc,bac ]
//     if (string.length == 1) return [string];
//     arr.forEach(function (v, i, arr) {
//          // v= 'b'
//         if (heads.indexOf(v) == -1) {
//             heads.push(v);
//             //heads = [b]
//             tmp.splice(tmp.indexOf(v), 1);
//             //tmp = [a ,c]
//             permutations(tmp.join('')).forEach(function (w) { out.push(v + w); });
//             //out ==[abc] tmp="ac" w=ac
//             tmp.push(v);
//             //tmp =[a,b,c]
//         }
//     });
//     return out;
// }

// function partition(arr, index) {
//     let temp1 = []
//     for (let i = 1; i < arr.length; i++) {

//         const row = []
//         for (let j = 0; j < arr.length; j++) {
//             if (j !== index) {
//                 row.push(arr[i][j])

//             }


//         }
//         temp1.push(row)


//     }

//     return temp1

// }


// function Minor(arr) {
//     return (arr[0][0] * arr[1][1] - arr[0][1] * arr[1][0])
// }


// function opred(arr){
//     if(arr.length==2){return Minor}
// }


// function determinant(m) {
//     if (m.length == 1) { return m[0][0] }
//     if (m.length == 2) { return Minor(m) }
//     let sum = 0;
//     for (let i = 0; i < m.length; i++) {
//         sum += Math.pow(-1, i) * m[0][i] *determinant(partition(m,i))
//     }
//     return sum
// };
// console.log(determinant([[2,4,2],[3,1,1],[1,2,0]]))
// function zero() {}
// function one() {}
// function two() {}
// function three() {}
// function four() {}
// function five() {}
// function six() {}
// function seven() {}
// function eight() {}
// function nine() {}

// function plus() {}
// function minus() {}
// function times() {}
// function dividedBy() {}
// function one(){
//     return 1
// }
// function two(){
//     return 2
// }
// function plus(){
//     return "+"
// }
// console.log(two(plus(one())))


// function firstNonRepeatingLetter(s) {
//     //if(s.length==0){return ""  }

//     let newstring = s.slice().toLowerCase().split("")
//    let letter =""
//     for (let i = 0; i < newstring.length; i++) {
//         let count = 0;
//         newstring.forEach(element => {
//             if (newstring[i] == element) { count++ }
//         });
//         if (count == 1) {
//             letter = s[i]
//             break
//         }
//     }
//     return letter
// }
// console.log(firstNonRepeatingLetter(''))
// console.log("".length)

// var maxSequence = function(arr){
//     var currentSum = 0;
//     return arr.reduce(function(maxSum, number){
//         //maxsum=6 number=4
//         currentSum = Math.max(currentSum+number, 0);
//         //currentsum=5
//         console.log(currentSum)
//         return Math.max(currentSum, maxSum);
//         //maxsum=6
//     }, 0);
// }
//   console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// function determinant(m) {
//     if (m.length == 0) return 0;
//     if (m.length == 1) return m[0][0];
//     if (m.length == 2) return m[0][0]  m[1][1] - m[0][1]  m[1][0];
//     if (m.length > 2) {
//       return m.reduce((prev, curr, i, arr) => {
//         let miniArr = arr.slice(0, i).concat(arr.slice(i + 1)).map(item => item.slice(1));
//         return prev + (i % 2 == 0 ? 1 : -1 )  curr[0]  determinant(miniArr);
//       }, 0);
//     }
//   };
// class exporter {

//   toRoman(num) {
//     let rimnum = ''
//     while (num > 0) {
//       if (num >= 1000) {
//         num -= 1000;
//         rimnum += 'M';
//         continue;
//       }
//       if (num >= 900) {
//         num -= 900;
//         rimnum += 'CM';
//         continue;
//       }
//       if (num >= 500) {
//         num -= 500;
//         rimnum += 'D';
//         continue;
//       }
//       if (num >= 400) {
//         num -= 400;
//         rimnum += 'CD';
//         continue;
//       }
//       if (num >= 100) {
//         num -= 100;
//         rimnum += 'C';
//         continue;
//       }
//       if (num >= 90) {
//         num -= 90;
//         rimnum += 'XC';
//         continue;
//       }
//       if (num >= 50) {
//         num -= 50;
//         rimnum += 'L';
//         continue;
//       }
//       if (num >= 40) {
//         num -= 40;
//         rimnum += 'XL';
//         continue;
//       }
//       if (num >= 10) {
//         num -= 10;
//         rimnum += 'X';
//         continue;
//       }
//       if (num >= 9) {
//         num -= 9;
//         rimnum += 'IX';
//         continue;
//       }
//       if (num >= 5) {
//         num -= 5;
//         rimnum += 'V';
//         continue;
//       }
//       if (num >= 4) {
//         num -= 4;
//         rimnum += 'IV';
//         continue;
//       }
//       if (num >= 1) {
//         num -= 1;
//         rimnum += 'I';
//         continue;
//       }
//       if (num == 0) { break }
//     }

//     return rimnum
//   }
//   fromRoman(num) {
//     let number = 0;
//     num = num.split("")
//     while (num.length != 0) {
//       if (num[0] === "M") {
//         number += 1000
//         num.splice(0, 1)
//       }
//       if (num[0] === "C" && num[1] == "M") {
//         number += 900;
//         num.splice(0, 2)
//       }
//       if (num[0] === "D") {
//         number += 500
//         num.splice(0, 1)
//       }
//       if (num[0] === "C" && num[1] == "D") {
//         number += 400
//         num.splice(0, 2)
//       }
//       if (num[0] === "C") {
//         number += 100
//         num.splice(0, 1)
//       }
//       if (num[0] === "X" && num[1] == "C") {
//         number += 90;
//         num.splice(0, 2)
//       }
//       if (num[0] === "L") {
//         number += 50
//         num.splice(0, 1)
//       }
//       if (num[0] === "X" && num[1] == "L") {
//         number += 40;
//         num.splice(0, 2)
//       }
//       if (num[0] === "X") {
//         number += 10
//         num.splice(0, 1)
//       }
//       if (num[0] === "I" && num[1] == "X") {
//         number += 9;
//         num.splice(0, 2)
//       }
//       if (num[0] === "V") {
//         number += 5
//         num.splice(0, 1)
//       }
//       if (num[0] === "I" && num[1] == "V") {
//         number += 4
//         num.splice(0, 2)
//       }
//       if (num[0] === "I") {
//         number += 1
//         num.splice(0, 1)
//       }
//     }

//     return number
//   }

// }
// let RomanNumerals = new exporter()
// console.log(RomanNumerals.toRoman(2319))
// Array.prototype.sameStructureAs = function (other) {

//   function checker(arg1, arg2) { if (Array.isArray(arg1) && Array.isArray(arg2) && arg1.length === arg2.length) { return true } }
//   if (this.length !== other.length) { return false }
//   for (let i = 0; i < this.length; i++) {

//     if (checker(this[i], other[i])) { return this[i].sameStructureAs(other[i]); }
//     else if (!Array.isArray(this[i]) && !Array.isArray(other[i]) ) { continue }
//     else { return false }
//   }
//   return true
// };
// console.log([1,'[',']'].sameStructureAs(['[',']',1]))

// function parseInt(string) {
//   var map = {"zero":0,"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9,"ten":10,"eleven":11,"twelve":12,"thirteen":13,"fourteen":14,"fifteen":15,"sixteen":16,"seventeen":17,"eigthteen":18,"nineteen":19,
//     "twenty":20, "thirty":30, "forty":40, "fifty":50, "sixty":60, "seventy":70, "eighty":80, "ninety":90,};
//   var multiMap = {"hundred":100, "thousand":1000, "million":1000000};
//   var result = 0, result2 = 0, multiply = 0;

//   function getNumber(string) {
//     var nArr = string.split("-");
//     if (nArr.length > 1) {
//       return map[nArr[0]] + map[nArr[1]];
//     }
//     return map[string];
//   }

//   string.split(" ").map(function(number) {
//     if (multiMap[number]) {
//       result *= multiMap[number];
//       if (result >= 1000) {
//         result2 = result;
//         result = 0;
//       }
//     }
//     else if (number != "and") {
//       result += getNumber(number);
//     }
//   });
//   return result + result2;
// }
// console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen"))

// function add(a, b) {
//   console.log(parseInt(a,10).toPrecision(40))
//   return (Number(a) + Number(b)).toPrecision(40).split('.')[0]; // Fix me!
// }
// console.log(add('63829983432984289347293874', '90938498237058927340892374089'))
//                  63829983432984293307056128
//                  63829983432984293307056128

// function add (a, b) {
//   var res = '', c = 0
//   a = a.split('')
//   b = b.split('')
//   while (a.length || b.length || c) {
//     c += ~~a.pop() + ~~b.pop()

//     res = c % 10 + res
//     console.log(c)
//     console.log(res)
//     c = c > 9

//   }
//   return res
// }
// console.log(add('63829983432984289347293874', '90938498237058927340892374089'))
// let arr=[
//     [5, 3, 4, 6, 7, 8, 9, 1, 2],
//     [6, 7, 2, 1, 9, 5, 3, 4, 8],
//     [1, 9, 8, 3, 4, 2, 5, 6, 7],
//     [8, 5, 9, 7, 6, 1, 4, 2, 3],
//     [4, 2, 6, 8, 5, 3, 7, 9, 1],
//     [7, 1, 3, 9, 2, 4, 8, 5, 6],
//     [9, 6, 1, 5, 3, 7, 2, 8, 4],
//     [2, 8, 7, 4, 1, 9, 6, 3, 5],
//     [3, 4, 5, 2, 8, 6, 1, 7, 9]
//   ]
// console.log(arr[0].includes(5))

// function validSolution(board) {
//   if (!Array.isArray(board)) { return false }
//   for (let i = 0; i < 9; i++) {
//     let score = 0;
//     for (let j = 1; j < 10; j++) {
//       if (board[i].indexOf(j) >= 0) { score++ }

//     }
//     if (score < 9) { return false }
//   }
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   for (let i = 0; i < 9; i++) {
//     let score = 0
//     let test_arr = arr.slice()
//     for (let j = 0; j < 9; j++) {

//       if (test_arr.includes(board[j][i])) {

//         test_arr.splice(test_arr.indexOf(board[j][i]), 1)
//         score++
//       }

//     }
//     if (score < 9) { return false }

//   }
//   return true

// }
// function validSolution(board) {
//   function hasDuplicates(arr) {
//     return new Set(arr).size !== arr.length;
//   }//if duplicates are found, return true
//   if(!Array.isArray(board)){return true}
//   let arr1 = []
//   let arr2 = []
//   let arr3 = []
//   for (let j = 0; j < 3; j++) {
//     for (let i = 0; i < 3; i++) {
//       board[0].forEach((element, index) => {
//         if (index < 3) { arr1.push(element) }
//         if (index >= 3 && index < 6) { arr2.push(element) }
//         if (index >= 6 && index < 9) { arr3.push(element) }
//       })
//       board.splice(0, 1)
//     }
//     if (hasDuplicates(arr1) || hasDuplicates(arr2) || hasDuplicates(arr3)) { return false }
//     arr1 = []
//     arr2 = []
//     arr3 = []
//   }
// return true



// }



// console.log(validSolution())

// function countChange(money, coins) {
// let result_arr=[];
// let temporary_result=0;

// }

// console.log(countChange(4, [1,2]))

// function generateBC(url, separator) {
//     console.debug(url)
//     function abbreviation(string) {
//         let abbreviation_word = ""
//         const ignor_arr = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"]

//         string.split("-").forEach(element => {
//             if (!ignor_arr.includes(element))
//                 abbreviation_word = abbreviation_word.concat(element[0].toUpperCase()).toUpperCase()
//         });
//         return abbreviation_word
//     }
//     const word_in_center1 = url.replace(/\?|\#.+$/, "").split("/")
//     const last_word1 = word_in_center1[word_in_center1.length - 1]
//     const word_in_center = word_in_center1.slice(1, word_in_center1.length - 1)
//     const last_word = last_word1.replace(/ \.php|\.html|\.asp|index|\.htm/g, "")

//     const center_word_checker = word_in_center.filter(Boolean).map(element => {
//         if (element.length >= 30) {
//             return abbreviation(element)
//         }
//         return element.replace(/[-]/g, " ").toUpperCase()
//     });
// const result_href = ["<a href=\"\/\">HOME</a>", separator]
// center_word_checker.forEach((element, v) => {
//     result_href.push("<a href=\"\/")
//     result_href.push(word_in_center[v])
//     result_href.push("\/\">")
//     result_href.push(element)
//     result_href.push("</a>")
//     result_href.push(separator)
// });
// result_href.push("<span class=\"active\">")
// const veryLastWord = center_word_checker[center_word_checker.length - 1]
// if (veryLastWord.length >= 30) { result_href.push(abbreviation(veryLastWord)) }
// else {

//     const last_word1 = veryLastWord.replace(/[-]/g, " ").toUpperCase()
//     result_href.push(last_word1)
// }
// result_href.push("<\/span>")
// return result_href.join("")



// }



//console.log(generateBC("www.microsoft.com/important/confidential/docs/holiday.index.htm#top", " * "))
// &lt;a href="/"&gt;HOME&lt;/a&gt; / &lt;a href="/users/"&gt;USERS&lt;/a&gt; / &lt;span class="active"&gt;GIACOMOSORBI?REF=CODEWARS&lt;/span&gt;
// &lt;a href="/"&gt;HOME&lt;/a&gt; / &lt;a href="/users/"&gt;USERS&lt;/a&gt; / &lt;span class="active"&gt;GIACOMOSORBI&lt;/span&gt;
// function abbreviation(arg) {
//     const ignorArr = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"]
//     return arg.split("-").reduce((previousValue, presentValue) => {
//         if (!ignorArr.includes(presentValue)) { return previousValue + presentValue[0].toUpperCase() }
//         else { return previousValue + "" }
//     }, "")

// }


// function generateBC(url, separator) {
//     console.debug(url)
//     const allWord = url.replace(/(\.php|\.html|\.asp|index|\.htm|\?|\#).*$/, "").replace(/https:\/\//, "").split("/").filter(Boolean)

//     const filteredAllWord = allWord.map((elem) => {
//         if (elem.length > 30) { return abbreviation(elem) }
//         else { return elem.replace(/[-]/g, " ").toUpperCase() }
//     }
//     )
//     const center_word = filteredAllWord.slice(1, filteredAllWord.length - 1)
//     if(center_word.length===0){return "<a href=\"\/\">HOME</a>" + separator+ "<span class=\"active\">"+allWord[allWord.length-1].toUpperCase()+"<\/span>"}
//     const result_href = ["<a href=\"\/\">HOME</a>", separator]
//     center_word.forEach((element, v) => {
//         result_href.push("<a href=\"\/")
//         result_href.push(allWord[v + 1])
//         result_href.push("\/\">")
//         result_href.push(element)
//         result_href.push("</a>")
//         result_href.push(separator)
//     });
//     result_href.push("<span class=\"active\">")
//     result_href.push(filteredAllWord[filteredAllWord.length - 1])
//     result_href.push("<\/span>")
//     return result_href.join("")

// }
// console.log(generateBC("http://twitter.de?previous=normalSearch&output=full", " # "))
//  &lt;a href="/"&gt;HOME&lt;/a&gt; * &lt;a href="/important/"&gt;IMPORTANT&lt;/a&gt; * &lt;a href="/important/confidential/"&gt;CONFIDENTIAL&lt;/a&gt; * &lt;span class="active"&gt;DOCS&lt;/span&gt;
//  href="/"&gt;HOME&lt;/a&gt; * &lt;a href="/important/"&gt;IMPORTANT&lt;/a&gt; * &lt;a href="/confidential/"&gt;CONFIDENTIAL&lt;/a&gt; * &lt;span class="active"&gt;DOCS&lt;/span&gt


/**
 1. удалить лишнее из URL
 2. преобразовать в хлебные крошки
 3. сделать акроним из длинных частей
 4. обработать крайние случаи
 */

//  function acronimyze(word) {
//     const ignoredWords = ["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"];
//     if (word.length >= 30) {
//       return word.split("-").filter((w) => !ignoredWords.includes(w)).map(w => w[0]).join('').toUpperCase();
//     } else {
//       return word.replace(/-/g, " ").toUpperCase();
//     }
//   }

//   function makeURL(arr, index){
//     return arr.slice(1, index + 1).join('/')
//   }

//   function generateBC(url, separator) {
//     const preparedURL = url.replace(/https?:\/\//, '').replace(/[#?].+$/, "").replace(/\.(html?|php|asp)/, "").replace(/\/index/, "");

//     const urlParts = preparedURL.split("/").filter(Boolean)

//     if(urlParts.length === 1){
//       return `<span class="active">HOME</span>`
//     }

//     return urlParts.map((urlPart, index, arr) => {
//       if (index === 0) {
//         return "<a href=\"/\">HOME</a>";
//       } else if (index === arr.length - 1) {
//         return `<span class="active">${acronimyze(urlPart)}</span>`;
//       } else {
//         return `<a href="/${makeURL(arr, index)}/">${acronimyze(urlPart)}</a>`;
//       }
//     }).join(separator);
//   }
// function sum(arr) {
//     if (arr.length == 0) { return 0 }
//     else {
//         return arr[0] + sum(arr.slice(1))
//     }
// }
// console.log(sum([1, 2, 3, 4, 5]))


// function find_max(arr) {


// }

// Recursive javascript program for
// coin change problem.

// Returns the count of ways we can
// sum coins[0...n-1] coins to get sum "sum"



// function countChange(money, coins) {
//     function count(coins, n, sum) {
//         if (sum == 0) { return 1; }
//         if (sum < 0) { return 0; }
//         if (n <= 0) { return 0; }
//         return count(coins, n - 1, sum) + count(coins, n, sum - coins[n - 1]);
//     }
//     return count(coins, coins.length, money)
// }


// function findTheSameLetters(word, letter) {

//     let score = 0
//     word.forEach(element => {
//         if (element === letter) { score++ }
//     });
//     return score - 1
// }

// function combination(word) {
//     let repeat = 0;
//     let wordArr = word.split("")
//     wordArr.forEach

// }
// const factorial = n => {
//     if(n===0){return 1}
//     return n*factorial(n-1)
//   };
// console.log(factorial(4))

// function hof(n) {

//   if (n === 0) { return 1 }
//   if (n === 1) { return 3 }
//   function sequence(A, B) {
//     if (A.length - 1 === n) { return A[n] }
//     A.push(A[A.length - 1] + B[A.length - 1])

//     for (let i = A[A.length - 2] + 1; i < A[A.length - 1]; i++) {
//       B.push(i)
//     }

//     if (A.length === 3) { B.splice(1, 1) }

//     return sequence(A, B)
//   }
//   return sequence([1, 3], [2, 4]);
// }


// function hof(n) {
//   if (n === 0) { return 1 }
//   function sequence(A, B) {
//     if (A.length - 1 === n) { return A[n] }
//     A.push(A[A.length - 1] + B[A.length - 1])
//     if (A.includes(B[B.length - 1] + 1)) { B.push(B[B.length - 1] + 2) }
//     else (B.push(B[B.length - 1] + 1))
//     return sequence(A, B)
//   }
//   return sequence([1], [2]);
// }


// function hof(n) {
//   let A = [1]
//   let B = [2]
//   while (A.length - 1 !== n) {
//     A.push(A[A.length - 1] + B[A.length - 1])
//     if (A.includes(B[B.length - 1] + 1)) { B.push(B[B.length - 1] + 2) }
//     else (B.push(B[B.length - 1] + 1))
//   }
//   return A[n]
// }
// console.log(hof(100000))

// const R = [null, 1];
// const S = [null, 2];

// function extendSequences (n) {
//   let current = Math.max(R[R.length - 1], S[S.length - 1]);
//   let i;
//   while (R.length <= n || S.length <= n) {
//     i = Math.min(R.length, S.length) - 1;
//     current += 1;
//     if (current === R[i] + S[i]) {
//       R.push(current);
//     } else {
//       S.push(current);
//     }
//   }
// }

// function ffr (n) {
//   extendSequences(n);
//   return R[n];
// }

// function ffs (n) {
//   extendSequences(n);
//   return S[n];
// }

// console.log(ffr(100000))
// function Mormons(startingNumber, reach, target) {
//   function miniMormon(startSumm, reach1, attempt) {
//     if (startSumm >= target) { return attempt }
//     startSumm += (startSumm * reach)
//     reach1 *= reach
//     attempt++
//     return miniMormon(startSumm, reach1, attempt)
//   }
//   return miniMormon(startingNumber, reach, 0)

// }
// console.log(Mormons(20000, 2, 7000000000))



// function serpentineTree(node) {
//     console.log(node)
//     const unclosedObj = []
//     if(node==undefined){return}
//     for (const property in node) {
//         unclosedObj.push(node[property])
//     }
// return [unclosedObj[0],serpentineTree(unclosedObj[1]),serpentineTree(unclosedObj[2])].flat().filter(elem=>{if(elem!=undefined){return true}})
// }


// function serpentineTree(node) {
//   const queue = [node.data]
//   function binarTree(arrnode, level) {
//     level++
//     if (arrnode.length === 0) { return }
//     const levelarr = arrnode.map(elem => {
//       queue.push(elem.data)
//       return [elem.right, elem.left]
//     })
//     if (level % 2 === 0) { return binarTree(levelarr.flat().reverse().filter(Boolean), level) }
//     else { return binarTree(levelarr.flat().filter(Boolean), level) }

//   }
//   binarTree([node.right, node.left].filter(Boolean), 1)
//   return queue.filter(Boolean)
// }

let obj = {
  data: 'A',
  left: Node = {
    data: 'B',
    left: Node = {
      data: 'D',
      left: Node = {
        data: 'H',
        left: undefined,
        right: undefined

      },
      right: undefined
    },
    right: Node = {
      data: 'E',
      left: undefined,
      right: undefined
    }
  },
  right: Node = {
    data: 'C',
    left: Node = {
      data: 'F',
      left: Node = {
        data: 'I',
        left: undefined,
        right: undefined
      },
      right: undefined
    },
    right: Node = {
      data: 'G',
      left: undefined,
      right: Node = {
        data: 'J',
        left: undefined,
        right: undefined
      }
    }
  }
}

function serpentineTree(node) {
  const queue = []
  function binarTree(arrnode, level) {
    const levelArr = []
    level++
    if (arrnode.length === 0) { return }
    while (arrnode.length) {
      const element = arrnode.shift()
      queue.push(element.data)
      if (element.right) { levelArr.push(element.right) }
      if (element.left) { levelArr.push(element.left) }
    };
    if (level % 2 !== 0) { return binarTree(levelArr, level) }
    else { return binarTree(levelArr.reverse(), level) }
  }
  binarTree([node], 0)
  return queue
}

console.log(serpentineTree(obj))
//['A', 'B', 'C', 'F', 'G', 'D', 'E', 'K', 'I']
//['A', 'B', 'C', 'F', 'G', 'D', 'E', 'I','K']