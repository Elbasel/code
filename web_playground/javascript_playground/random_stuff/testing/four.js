const proto = {
    sharedVar: 'sharedVar',
    sharedFunc() {
        console.log('sharedFunc has been called.')
    }
}

const modelMixin = Object.assign( 
    {
        attr: {},

        set (key, value) {
            this.attr[key] = value;
            console.log(this)
        },

        get (key) {
            return this.attr[key]
        }
    }, proto )


const someObj = {name: 'someObj'}
const someOtherObj = {name: 'someOtherObj'}


const model = Object.assign(someObj, modelMixin)
const secondModel = Object.assign(someOtherObj, modelMixin)

someObj.sharedFunc = () => console.log('Modified sharedFunc has been called')
