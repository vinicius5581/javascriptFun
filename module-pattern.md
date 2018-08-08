```javascript
const myNameSpace = (function() {
  var myPrivateVar = 0;
  var myPrivateMethod = function(foo) {
    console.log(foo);
  };
  return {
    myPublicVar: 'foo',
    myPublicMethod: function(bar){
      myPrivateVar++;
      myPrivateMethod(bar);
    }
  }
})();
```

```javascript
const myNameSpace2 = (() => {
   let myPrivateVar = 0;
   const myPrivateMethod = foo => console.log(foo);
   return {
    myPublicVar: 'foo',
    myPublicMethod: bar => {
      myPrivateVar++;
      myPrivateMethod(bar);
    }
  }
})()
```
