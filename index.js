//cconst{valPin} = require("./atm"); // testing, commented out this section, to pull pin from atm at const {pin} = require('./atm');

const atm = require("./atm");
const { pin } = require("./account"); //import the pin from the account.js module into index.js

const prompt = require("prompt-sync")();

//this is PIN validation before the user can access the following ATM option
//getBal
//withdraw
//deposit
let userPin = prompt("Enter PIN: ");
if (atm.valPin(userPin)) {
  //if_else; if user 1234 then it's true, else is false.
  console.log("User login successfull");
} else {
  console.log("Login failed, please enter 4 digit pin"); // if user does not enter 1234, program will exit.
  process.exit(0);
}
console.log("Welcome, select form the following menu"); //welcome prompt
while (true) {
  console.log(" 1.Withdraw\n", "2.Deposit\n", "3.Balance\n", "4.Exit\n"); //option for user to select for the following functions.

  let key = prompt("");

  switch (key){ //the switch function takes the user input value of strings to reference the following actions imported fro mthe atm.js module.
    case "1":
      atm.withdraw();
      break;
    case "2":
      atm.deposit();
      break;
    case "3":
      atm.getBal();
      break;
    case "4":
      process.exit(0); //kills the loop and allows the code to exit
      break;

    default:
      console.log("Wrong user input, please try again\n");
      break;
  }
}
