function greetAliens(aliens) {
    aliens.forEach(element => {
        console.log(`Oh powerful ${element}, we humans offer our unconditional surrender!`);
    });
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);