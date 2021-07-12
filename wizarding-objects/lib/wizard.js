var Pet = require('./pet');

class Wizard  {
  constructor(obj) {
    obj = obj || {};
    this.name = `${obj.name}`;
    this.pet = [];
  }
}

module.exports = Wizard;
