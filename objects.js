const dog = {
    _dogname: "ptomo",
    get dogname() {
        return this._dogname;
    },
    set dogname (n) {
        this._dogname = n;
    },
    bark: function (sound) { // same as bark (sound) {  BUT only for objects no for classes
        console.log(sound);
    }
}

dog.bark('woof!');

const {dogname} = dog;
console.log(dogname);