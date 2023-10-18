// 9
// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non- negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
// Example
// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.
// Ratiorg needs statues of sizes 4, 5 and 7.


var arr = [1, 8, 6, 3]
var arr_sort = arr.sort(function (a, b) { return a - b });
var new_arr = arr
var Missing_arr = []

for (let i = 0; i <= arr_sort.length - 2; i++) {
    var arr_diff = arr_sort[i + 1] - arr_sort[i]
    if (arr_diff == 1) {
    } else if (arr_diff > 1) {
        new_arr.push(arr[i] + 1)
        Missing_arr.push(arr[i] + 1)
        console.log("Missing Values:", Missing_arr)
        var new_arr_sort = new_arr.sort(function (a, b) { return a - b });
    } else if (arr_diff <= 0) {
        console.log("Error")
        break;
    }
}
