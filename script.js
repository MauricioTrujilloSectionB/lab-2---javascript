function ifsAndElses() {

    let value = -13; // Number Assignment

    if (value > 0) {
       return ("NUMBER IS POSITIVE!")
    } else if (value < 0) {
       return ("NUMBER IS NEGATIVE!")
    } else {
     return ("NUMBER IS 0!")
    }
}

function switchStatements() {

    let day = 1;

    switch (day) {
        case 1:
            console.log("SUNDAY!") // can also use returns but i gotta remove 'break;'
            break;
        case 2:
            console.log ("MONDAY!")
            break;
        case 3:
            console.log ("TUESDAY!")
            break;
        case 4:
            console.log ("WEDNESDAY!")
            break;
        case 5:
            console.log ("THURSDAY!")
            break;
        case 6:
            console.log ("FRIDAY!")
            break;
        case 7:
            console.log ("SATURDAY!")
            break;

        default :
            console.log("NOT A VALID NUMBER!");
    }
}

function forLoop() {

    for (let i = 0; i <= 5; i++) {
        console.log(i)
    }
}

function whileLoop() {

    let i = 1;

    while (i <= 5) {
        console.log(i++);
    }
}

function doWhileLoop() {

    let i = 1;

    do {
        console.log(i++)
    } while (i <= 5);
}

function breaking() {
    for (let i = 0; i <= 10; i++) {
        if (i == 3) {
            break;
        }
        console.log(i);
    }
}

function continues() {
    for (let i = 0; i <= 10; i++) {
        if (i == 3) {
            continue;
        }
        console.log(i);
    }
}

let globalVar = "I'm A Global Variable!";

function scopesAndContext() {

    let localVar = "I'm A Local Variable!";

    console.log(globalVar);
    console.log(localVar);
}

// console.log(localVar); <-- This cannot be used, as 'localVar' is only accessible from inside the function, unless exported/returned...

console.log(ifsAndElses());
console.log(switchStatements());
console.log(forLoop());
console.log(whileLoop());
console.log(doWhileLoop());
console.log(breaking());
console.log(continues());
console.log(scopesAndContext());
