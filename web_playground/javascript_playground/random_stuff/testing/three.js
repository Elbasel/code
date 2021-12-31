const proto =  {
    sharedArray: [],
    sharedOne: 1,
    sharedTwo: 2,
    sharedFunc () {
        console.log('sharedFunc has been called on ' + this.name)
        console.log('this: ' + this)
    }
}

const constructObj = (name) => Object.assign(Object.create(proto), {name}, {privateArray: []})


const firstInstance = constructObj('firstInstance')
const secondInstance = constructObj('secondInstance')
