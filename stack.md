```javascript
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  
  getLength() {
    return this.count;
  }
  
  push(...items){
     items.forEach(item => {
      this.items.push(item);
      this.count = this.count + 1;
     });
     return this; 
  }
  
  pop() {
    if(this.count > 0) {
      this.count = this.count - 1;
    }
    
    return this.items.pop();
  }
  
  peek() {
    return this.items.slice(-1)[0];
  }
}

const stack = new Stack();

stack.push(1);
stack.push(4);
console.log(stack.peek());
```
