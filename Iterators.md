```javascript
const makeIterator = (arr) => {
    let nextIndex = 0;
    return {
       next: () => nextIndex < arr.length ?
               {value: arr[nextIndex++], done: false} :
               {done: true}
    }
}

const it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
```
