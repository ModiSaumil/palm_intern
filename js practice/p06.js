// polygon


let n = 5;
let res = 0;
for (let i = 0; i < n; i++) {
    if (i === 0) {
        res = 1
    }
    else {
        res = res + (i * 4);

    }

}
console.warn(res);
