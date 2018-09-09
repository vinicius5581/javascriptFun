/*
Water Over Bar Chart
Problem Description
Given an array of integers that represent the heights of bars in a bar chart,
compute how much water that bar chart could hold.
For example
x = bar
o = water

x
x o o x
x x x x
x x x x
4 2 2 3 = 2

x
x o o x
x x x x o x
x x x x x x
4 2 2 3 1 2 = 3

*/

// Implement your solution here
function computeWater(heights) {
    const highestLeftCache = [];
    const highestRightCache = [];
    let highestLeft = 0;
    let highestRight = 0;
    let totalVolum = 0;
    // get each element highestRight and highestLeft
    for (let i = 0; i < heights.length; i++) {
        highestLeftCache.push(highestLeft);
        highestRightCache.push(highestRight);
        if (heights[i] >= highestLeft) {
            highestLeft = heights[i];
        }
        if (heights[heights.length - 1 - i] >= highestRight) {
            highestRight = heights[heights.length - 1 - i];
        }
    }
    // get each element volum
    for (let i = 0; i < heights.length; i++) {
        if (i !== 0 && i !== heights.length - 1) {
            let bordersHeight = Math.min(
                highestLeftCache[i],
                highestRightCache[heights.length - 1 - i]
            );
            if (bordersHeight > heights[i]) {
                totalVolum += bordersHeight - heights[i];
            }
        }
    }
    return totalVolum; 
}

// Tester function
function testCase(caseNum, heights, expected) {
  var actual = computeWater(heights);
  var output = 'Case ' + caseNum + ': ';
  if (actual == expected) {
    output += 'PASSED';
  } else {
    output += `FAILED; got ${actual}, expected ${expected}`;
  }
  console.log(output);
}

// Test case definitions

/*
x       x
x       x
x   x   x
x   x   x
x x x x x
5 1 3 1 5       heights
0 4 2 4 0 = 10  water
*/
var case1 = [5, 1, 3, 1, 5];


/*
        x
x       x
x   x   x
x   x   x
x x x x x
4 1 3 1 5      heights
0 3 1 3 0 = 7  water
*/
var case2 = [4, 1, 3, 1, 5];

testCase(1, case1, 10);
testCase(2, case2, 7);
