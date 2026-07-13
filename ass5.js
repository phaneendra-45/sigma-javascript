/*Answer1*/
let arr=[8,9,10,1,2,3,4,5,6,7];
let num=5;

function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}
console.log(getElements(arr, num));

/*Answer2*/
let str="abcdabcdefgggh";
function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {
            ans += currChar;
        }
    }
    return ans;
}
console.log(getUnique(str));

/*Answer3*/
let country=["Australia","Germany","UnitedStatesofAmerica"];
function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
console.log(longestName(country));

/*Answer4*/
let str4="apnacollege";
function countVowels(str4) {
    let count = 0;
    for (let i = 0; i < str4.length; i++) {
        if (str4.charAt(i) == "a" || str4.charAt(i) == "e" || str4.charAt(i) == "i" || str4.charAt(i) == "o" || str4.charAt(i) == "u") {
            count++;
        }
    }
    return count;
}
console.log(countVowels(str4));
/*Answer5*/
function generateRandom(start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(1, 10));