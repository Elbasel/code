var Dog = function(name) {
    this.name = name;

    this.barkCount = 0;

    // this.bark = function() {
    //     barkCount++;
    //     console.log(this.name + " bark");
    // };

    this.getBarkCount = function() {
        console.log(this.name + " has barked " + this.barkCount + " times");
    };
};

Dog.prototype.wagTail = function() {
    console.log(this.name + " wagging tail");
};

Dog.prototype.bark = function() {
    this.barkCount++;
    console.log(this.name + ' bark')
}


var dog = new Dog("Dave");
dog.bark();
dog.bark();
dog.getBarkCount();
dog.wagTail();