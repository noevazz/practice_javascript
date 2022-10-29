// Write your code here:
function dogFactory(name, breed, weight) {
    return {
      _name: name,
      _breed: breed,
      _weight: weight,
      set name (n) {
        this._name = n;
      },
      set breed (b) {
        this._breed = b;
      },
      set weight (w) {
        this._weight = w;
      },
      get name () {
        return this._name;
      },
      get breed () {
        return this._breed;
      },
      get weight () {
        return this._weight;
      },
      bark() {
        return 'ruff! ruff!';
      },
      eatTooManyTreats() {
        this.weight++;
      },
    }
  }
  
  dogFactory('Joe', 'Pug', 27)
  // Should return { name: 'Joe', breed: 'Pug', weight: 27 }