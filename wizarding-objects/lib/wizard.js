var Pet = require('./pet');

class Wizard  {
  constructor(obj) {
    obj = obj || {};
    this.name = `${obj.name}`;
    this.pets = [];
  }

  adoptPet(pet)  {
    this.pets.push(pet);
  }
}

module.exports = Wizard;
