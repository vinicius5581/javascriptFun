// Using prototype

```javascript

function Planet(name, radius, posX, posY) {
  this.name = name;
  this.setRadius(radius);
  this.setPosition(posX, posY);
}

Planet.prototype.setRadius = function(radius) {
  this.radius = radius;
}

Planet.prototype.setPosition = function(x, y) {
  this.x = x;
  this.y = y;
}

Planet.prototype.getPosition = function() {
  return {
    x: this.x,
    y: this.y
  };
}

Planet.prototype.toString = function() {
  return `This is planet ${this.name}`;
}

var Earth = new Planet('Earth', 10, 10, 10);

Earth.toString();
```


// Using the Class constructor
