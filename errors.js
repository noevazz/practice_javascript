console.log(Error('Sorry the value is not right, try again'));

// line above logs the error to the console, but it does not stop the script execution

// we can throw an Error in order to stop the script execution

const customError = Error('Try again friend');


try{
    throw customError;
} catch (e) {
    console.log(e.Error);
}
