// 19

// You are given an array of integers representing coordinates of obstacles situated on a
// straight line.
// Assume that you are jumping from the point with coordinate e to the right. You are allowed only to make jumps of the same length represented by some integer.
// Find the minimal length of the jump enough to avoid all the obstacles.
// Example
// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoid obstacles (inputArray) = 4.
// Check out the image below for better understanding:

function Obstacles(obs) {
    obs.sort((a, b) => a - b);
    const maxObs = Math.max(...obs);

    for (let jump = 1; jump <= maxObs + 1; jump++) {
        let canJump = true;

        for (let i = 0; i < obs.length; i++) {
            if (obs[i] % jump === 0) {
                canJump = false;
                break;
            }
        }

        if (canJump) {
            return jump;
        }
    }
}

const obss = [2,3,4,5,7,9,10,12,13,16];  
console.log(Obstacles(obss));

