```javascript
const historagram = [1,2,3,5,3,3,1];

const getMaxArea = hist => {
	const stack = [];
  let max = 0;
  let i = 0;
  
  hist.forEach((colHeigh, i) => {
  	if (!stack.length || stack[stack.length - 1] <= hist[i]) {
    	stack.push(i);
      i++;
    } else {
    	let heightOfCurrentIndex = stack.pop();
      let area = hist[heightOfCurrentIndex] * (!stack.length ? i - 1 : i - 1 - stack[stack.length - 1]);
      if (area > max) {
				max = area;
			}
    }
  });

  while (stack.length) {
  	  let heightOfCurrentIndex = stack.pop();
      let area = hist[heightOfCurrentIndex] * (!stack.length ? i - 1 : i - 1 - stack[stack.length - 1]);
      if (area > max) {
				max = area;
			}
  }
  return max;
};

console.log(getMaxArea(historagram));
```
