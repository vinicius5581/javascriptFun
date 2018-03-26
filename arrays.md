# Arrays


### Find unique elements

```javascript
> const arr = [2, 3, 4, 2, 1];
> const uniques = arr.filter((x, i, a) => a.indexOf(x) === i);

>> [2, 3, 4, 1]
```
