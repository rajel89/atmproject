const account = require("./account"); //account module is imported into the atm.js for hte following; "pin" and "balance"
const wallet = require("./wallet");

const prompt = require("prompt-sync")();

//user Validation
function valPin(pin) {
  if (pin == account.pin) {
    // if pin entered is equal to pin from the account.js file return true else, false.
    return true;
  }
  return false;
}

//withdrawal
function withdraw() {
//   console.log("Withdraw dollar amount");
  wallet.withdAmount = Number(prompt("Enter withdraw amount $ "));

  let cond = Number.isNaN(wallet.withdAmount);
  if (cond) {
    console.log("Wrong input, please try again");
    return;
  }

  account.bal = account.bal - wallet.withdAmount;
  console.log("You have successfully withdrawn $" + wallet.withdAmount);
}

//Deposit
function deposit() {
//   console.log("Deposit dollar amount");
  wallet.depAmount = Number(prompt("Enter deposite amount $ "));

  let cond = Number.isNaN(wallet.depAmount);
  if (cond) {
    console.log("Wrong input, please try again");
    return;
  }

  account.bal = account.bal + wallet.depAmount;
  console.log("You have successfully withdrawn $" + wallet.depAmount);
}

//current balance
function getBalance() {
  console.log("Current Balance $");
  console.log(account.bal); //import balance from the account.js module
}

module.exports = {
  getBal: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  valPin: valPin,
};
