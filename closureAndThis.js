var outerVar = 'outer var';
var closure = function() {
    var closureVar = 'closure var';
    return function inner(innerParameter) {
        console.log('inner outerVar', outerVar);
        console.log('inner closureVar', closureVar);
        console.log('inner innerParameter', innerParameter);
        return 'inner return';
    };
};
var outerVar = '123';
var closureInstance = new closure();
console.dir(closureInstance('inner var'));

var outer = function() {
    const outerThis = this;
    console.log('outer this', this);
    return function middle() {
        const middleThis = this;
        console.log('middle outerThis', outerThis);
        console.log('middle this', this);
        return function inner() {
            console.log('inner outerThis', outerThis);
            console.log('inner middleThis', middleThis);
            console.log('inner this', this);
        };
    };
};

var outer1 = {
    outer: function() {
        const outerThis = this;
        this.kd = 'vc';
        console.log('outer this', this);
        return function middle() {
            const middleThis = this;
            this.to = 'ki';
            console.log('middle outerThis', outerThis);
            console.log('middle this', this);
            return function inner() {
                this.te = 'vi';
                console.log('inner outerThis', outerThis);
                console.log('inner middleThis', middleThis);
                console.log('inner this', this);
            }.bind(Object.assign({}, this));
        }.bind(this);
    }.bind({ hey: 'ho' })
};

var outer2 = {
    outer: function() {
        const outerThis = this;
        console.log('outer this', this);
        return {
            middle: function middle() {
                const middleThis = this;
                console.log('middle outerThis', outerThis);
                console.log('middle this', this);
                return {
                    inner: function inner() {
                        console.log('inner outerThis', outerThis);
                        console.log('inner middleThis', middleThis);
                        console.log('inner this', this);
                    }
                };
            }
        };
    }
};

console.log(':::::::::: outer ::::::::::');
outer()()();

console.log(':::::::::: outer1 ::::::::::');
outer1.outer()()();

console.log(':::::::::: outer 2 ::::::::::');
outer2
    .outer()
    .middle()
    .inner();
