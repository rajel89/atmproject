const account = require('./account')
const prompt = require('prompt-sync')();


//current balance
fucntion getBalance(){
    console.log('Current Balance $');
    console.log(account.bal)
}

//withdrawal
fucntion withdraw(){
    console.log('Withdraw dollar amount');
}




//Deposit
function deposit(){
    console.log('Deposit dollar amount');
    
}






module.exports ={
    getBal:getBalance,
    withdraw:withdraw,
    deposit:deposit,
    valPin:valPin

}