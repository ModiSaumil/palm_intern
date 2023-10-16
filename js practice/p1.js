// 1 year and century

function yt(year) {
    var last = Math.floor(year / 100)
    if (last % 100 !== 0) {
        last++
    }
    return last;
}
var year = prompt("enter a year");
year = parseInt(year)
var last = yt(year)
console.log("century for " + year + " is " + last);
