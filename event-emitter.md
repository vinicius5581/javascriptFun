




```javascript
function Emitter() {
  this.events = {};
}

Emmiter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

Emitter.prototype.emit = function(type) {
  if (this.events[type]) {
    this.events[type].forEach(function(listener) {
      listener();
    });
  }
}

module.exports = Emitter;
```

```javascript
var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet', function() {
  console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
  console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');


// Hello!
// Somewhere, someone said hello.
// A greeting occurred!
```
