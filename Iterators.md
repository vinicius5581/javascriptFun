```
const makeIterator = (arr) => {
    let nextIndex = 0;
    return {
       next: () => nextIndex < arr.length ?
               {value: arr[nextIndex++], done: false} :
               {done: true};
       }
    };
}
```
