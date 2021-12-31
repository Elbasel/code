const proto = {
    protoProp: 'protoProp'
}

const rawMixin = function () {
  const attrs = {};

  return Object.assign(this, {
    set (name, value) {
      attrs[name] = value;

      console.log(`${name} has been set to ${value} on:`)
      console.log(this)
    },

    get (name) {
      return attrs[name];
    }
  }, proto);
};

const mixinModel = (target) => rawMixin.call(target);

const george = { name: 'george' };
const jack = {name: 'jack'}
const model = mixinModel(george);
const secondModel = mixinModel(jack)

