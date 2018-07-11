// Using prototype

```javascript
function CelestialObject(id, x, y, z) {
  this.id = id;
  this.setPosition(x, y, z);
}

CelestialObject.prototype.setPosition = function(x, y, z) {
  this.x = x;
  this.y = y;
  this.z = z;
}

CelestialObject.prototype.getPosition = function() {
  return {
    x: this.x,
    y: this.y,
    z: this.z,
  };
}

CelestialObject.prototype.toString = function() {
  return `Celestial object: ${this.id}`;
}


function Planet(id, name, radius, posX, posY, posZ) {
  CelestialObject.call(this, id, posX, posY, posZ);
  this.name = name;
  this.setRadius(radius);
}

Planet.prototype = Object.create(CelestialObject.prototype);
Planet.prototype.constructor = Planet;

Planet.prototype.setRadius = function(radius) {
  this.radius = radius;
}

Planet.prototype.toString = function() {
  return `This is planet ${this.name}`;
}

Planet.prototype.toString = function() {
  return `Planet > ${CelestialObject.prototype.toString.call(this)}`;
}

const earth = new Planet('P3', 'Earth', 3,959, 100, 200, 300);
console.log(earth.toString());
console.log(earth.getPosition());
```


// Using the Class constructor
