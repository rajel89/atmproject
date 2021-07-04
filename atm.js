const account = require('./account') //account module is imported into the atm.js for hte following; "pin" and "balance"

const prompt = require('prompt-sync')();


//current balance
function getBalance(){
    console.log('Current Balance $');
    console.log(account.bal) //import balance from the account.js module
}

//withdrawal
function withdraw(){
    console.log('Withdraw dollar amount');
}




//Deposit
function deposit(){
    console.log('Deposit dollar amount');

}

//user Validation

function valPin(pin){
    if (pin == account.pin){ // if pin entered is equal to pin from the account.js file return true else, false.
        return true          
    }
        return false
}




module.exports ={
    getBal:getBalance,
    withdraw:withdraw,
    deposit:deposit,
    valPin:valPin

}
