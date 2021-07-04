let pin = '1234'

let balance = 1000 //value can't be a string



//one way to do exports
// module.exports.pin = pin;
// module.exports.bal = balance;

//another method to do exports the account file to be used by other modules in the program.
module.exports={
    pin:pin,
    bal:balance,
}

