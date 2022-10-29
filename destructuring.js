console.log('----------Destructuring----------');
const monsterFactory = (name, sound) => { // without destructuring
    return {
        name: name, // this is what we normally do
        sound: sound,
        introduce () {
            console.log(`Hi my name is ${this.name}, ${this.sound}`);
        }
    }
}

const sullivan = monsterFactory('sullivan', "good bye boo, kitty has to go :(");
sullivan.introduce();
 
const monsterFactory2 = (name, sound) => { // with destructuring
    return {
        name, // destructuring allows us to use this syntax if the key will be the same as the value
        sound, //same as comment above
        introduce () {
            console.log(`${this.name}, ${this.sound}`);
        }
    }
}

const boo = monsterFactory2('boo', "kitty!!!");
boo.introduce();


console.log('----------Destructuring assignment----------');

const sullivanSound = sullivan.sound; // This is what we normally do
console.log(sullivanSound);

// but we can use destructuring assignment:
const {sound} = boo; // the name of the variable needs to be enclosed between curly braces
                     // also the variable name needs to be the same as the property name in the object
console.log(sound);

