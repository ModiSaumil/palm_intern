// 2 chnage number in array
// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem
// Example
// For inputArray = [1, 2, 1], elentoReplace = 1,
// and substitutionElem 3, the output should be arrayReplace(inputArray, elemToReplace,
// substitutionElem)= [3, 2, 3].


let inputarry = [1, 2, 1];
let repnum = 1;
let chnum = 3;

function changenumber(inputarry, repnum, chnum) {
    for (i = 0; i < inputarry.length; i++) {
        if (inputarry[i] === repnum) 
        {
            inputarry[i] = chnum;
        }
    }
    return inputarry;
}

let ot = changenumber(inputarry, repnum, chnum);
console.log(ot);
