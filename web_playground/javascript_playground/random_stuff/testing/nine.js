



proto = {sharedProp: 'sharedProp', constructor: Person}

function Person(name, age) {
    this.name = name;
    this.age = age;
};


function Programmer (language) {
    this.language = language;
};


Person.prototype = proto
Programmer.prototype = proto


jack = new Person('Jack', 20)
jack.constructor = Person

sam = new Programmer('Python')



console.log(jack instanceof Programmer) //true: Shouldn't be the case as jack doesn't share anything with Programmer





