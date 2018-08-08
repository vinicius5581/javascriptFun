```javascript
var myRevealingModule = function() {
  var privateVar = 'Ben Cherry';
  var publicVar = 'Hey There';
  
  function privateFunction() {
    console.log('Name: ' + privateVar);
  }
  
  function publicSetName(strName) {
    privateVar = strName;
  }
  
  function publicGetName() {
    privateFunction();
  }
    
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
}();
```
```javascript
const myRevealingModule = (() => {
  let privateVar = 'Ben Cherry';
  const publicVar = 'Hey There';
  
  const privateFunction = () => console.log('Name: ' + privateVar);
  const publicSetName = strName => privateVar = strName;
  const publicGetName = () => privateFunction();
    
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  };
})();
