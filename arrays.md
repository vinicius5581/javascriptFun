# Arrays


### Find unique elements

```javascript
> const arr = [2, 3, 4, 2, 1];
> const uniques = arr.filter((x, i, a) => a.indexOf(x) === i);

>> [2, 3, 4, 1]
```

```javascript
> const arr = [1, 1, 2];
> const uniques = [... new Set(arr)];

>> [2, 3, 4, 1]
```
