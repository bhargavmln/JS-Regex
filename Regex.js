let pinRegex = RegExp('[1-9]{1}[0-9]{5}')
function validatePin(pin) {
    if(pinRegex.test(pin)) return "Valid pin";
    else return "Invalid pin";
}

console.log(validatePin(400088));
console.log(validatePin('A400088'));
console.log(validatePin('400088B'));
