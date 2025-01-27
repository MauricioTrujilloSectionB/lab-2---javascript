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

console.log(ifsAndElses());
console.log(switchStatements());