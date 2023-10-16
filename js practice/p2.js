// 2 chnage number in array

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
