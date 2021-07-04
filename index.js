
//cconst{valPin} = require("./atm"); // testing, commented out this section, to pull pin from atm at const {pin} = require('./atm');

const atm = require("./atm");
const { pin } = require("./account"); //import the pin from the account.js module into index.js

const prompt = require('prompt-sync')();


//this is PIN validation before the user can access the following ATM option
//getBal
//withdraw
//deposit
let userPin = prompt('Enter PIN: ');

if(atm.valPin(userPin)){                     //if_else; if user 1234 then it's true, else is false.
    console.log('User login successfull');
}else{
    console.log('Login failed');            // if user does not enter 1234, program will exit.
    process.exit(0);
}

console.log('Welcome'); //welcome prompt

while (true){
    console.log(' 1.Withdraw', "2.Deposit", "3.Balance", "4.Exit"); //option for user to select for the following functions.

    let key = prompt('Please select from the following');

    switch(key){
        case '1':
            atm.withdraw();
            break;
    }
}


