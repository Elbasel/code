function Person (name, age) {
    this.name = name
    this.age = age
}

function SafePerson(name, age) {
    if (! (this instanceof SafePerson)) {
        return new SafePerson(name, age)
    }
    this.name = name
    this.age = age
    
}

Person.prototype.greet = function () {
    console.log(`Hello, My name is ${this.name}`)
}

function Programmer (name, age, language) {
    Person.call(this, name, age)
    this.language = language
}

Programmer.prototype = Object.create(Person.prototype)

// const jack = new Person('Jack', 12)


// const jack = Person('Jack', 12) //This will add jack to window.name
const safeJack = SafePerson('Jack', 12) //This won't pollute the global namespace


// const mary = new Programmer('Mary', 23, 'Python')