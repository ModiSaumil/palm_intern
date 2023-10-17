// 12

// brackets check 


function isValid(str) {
    const stack = [];
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
        console.warn(stack);
      } else {
        if (stack.length === 0) {
          return false;
        }
  
        const top = stack.pop();
  
        if (
          (char === ')' && top !== '(') ||
          (char === ']' && top !== '[') ||
          (char === '}' && top !== '{')
        ) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Example usage:
  const inputString = "{()}";
  console.log(isValid(inputString)); // true
  