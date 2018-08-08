```javascript
const myNameSpace = (function() {
  let myPrivateVar = 0;
  const myPrivateMethod = function(foo) {
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
