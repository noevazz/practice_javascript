class Media {
    constructor (title, isCheckedOut, ratings) {
        this._title = title;
        this._isCheckedOut = isCheckedOut;
        this._ratings = ratings;
    }
    getAverageRating () {
        return this._ratings.reduce((accumulator, currentValue)=>accumulator+currentValue) / this._ratings.length;
    }
    toggleCheckOutStatus () {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating (r){
        this._ratings.push(r);
    }
}

class Book extends Media {
    constructor (author, title, pages, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings);
        this._author = author;
        this._pages = pages;
    }
}

class Movie extends Media {
    constructor (director, title, runTime, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings);
        this._director = director;
        this._runTime = runTime;
    }
}

class CD extends Media {
    constructor (artist, title, isCheckedOut, ratings, songs) {
        super(title, isCheckedOut, ratings);
        this._artist = artist;
    }
}

const Harry = new Book("noe", "harry potter 1", 400, false, [10, 8, 9, 10, 8, 8]);
console.log(Harry.getAverageRating());