const menu = {
    _meal: '',
    _price: 0,
    set meal (mealToCheck) {
        if (typeof mealToCheck === 'string'){
            this._meal = mealToCheck;
        }
    },
    get meal () {
        if (this._meal){
            return this._meal;
        } else {
            return 'the meal is not set'
        }
    },
    set price (priceToCheck) {
        if (typeof priceToCheck === 'number'){
            this._price = priceToCheck;
        }
    },
    get price () {
        if (this._price){
            return this._price;
        } else {
            return 'the price is not set'
        }
    },
}

menu.meal = 'hot-dogs';

console.log(menu.price);
console.log(menu.meal);

console.log(typeof menu);