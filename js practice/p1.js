// 1 year and century
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
// Example
// For year 1905, the output should be centuryFromYear(year) = 20;
// For year 1700, the output should be centuryFromYear(year) 17.

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
