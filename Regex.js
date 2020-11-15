//Validate PIN
let pinRegex = RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$')
function validatePin(pin) {
    if(pinRegex.test(pin)) return "Valid pin";
    else return "Invalid pin";
}

console.log(validatePin(400088));//UC1
console.log(validatePin('A400088'));//UC2
console.log(validatePin('400088B'));//UC3
console.log(validatePin('400 088'));//UC4


