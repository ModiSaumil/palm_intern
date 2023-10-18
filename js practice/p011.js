// 3 reverse string in bracket
// Write a function that reverses characters in
// (possibly nested) parentheses in the input
// string.
// Input strings will always be well-formed with
// matching () s.
// Example
// • For inputString = "(bar)", the
// output should be
// reverseInParentheses (inputstring)
// "rab":
// For inputString = "foo(bar)baz"
// the output should be
// reverseInParentheses(inputString)
// = "foorabbaz"
// For inputString =
// "foo(bar)baz(blim)", the output
// should be
// reverseInParentheses (inputString)
// =\"foorabbazmilb"


var name = "foo(hfa)baz"
var split = name.split("");
console.log(split)

var p1 = p2 = 0;

var p3 = []

for(let i=0; i<=split.length; i++){
    if(split[i] == "(" | split[i] == ")"){
        p1= split.indexOf("(")
        p2= split.indexOf(")")
    }
}

for(let j=p1+1; j<=p2-1; j++){
    p3.push(split[j])
    console.log(p3)
}

var rev = p3.reverse()
console.log(rev)
