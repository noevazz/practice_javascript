class Pet {
    constructor(petName, sound) {
        this._petName = petName;
        this._sound - sound;
    }
    get petName() {
        return this._petName;
    }
    set petName(pn) {
        this._petName = pn;
    }
    get sound () {
        return this._sound;
    }
    set sound(s) {
        this._sound = s;
    }
    poop () {
        console.log("taking a shit");        
    }
}

const dog = new Pet("taro", "auuuuu");
dog.poop();
console.log(dog.petName);