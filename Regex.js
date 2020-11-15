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

//Validate Email
let emailRegex  = RegExp('^[a-z0-9]+([-_+.][a-z0-9]+)?@[a-z0-9]+[.]{1}[a-z]{2,}(.[a-z]{2,3})?$')
function validateEmail(email) {
    if(emailRegex.test(email)) return "Valid email";
    else return "Invalid email";
}
console.log(validateEmail('abc100.abc@bridgelabz123.com.in'));//UC5
