
let money = 500;

function checkBankAccount (money) {
    return new Promise((resolve, reject)=>{
        if (money>200){
            resolve('you have enough money');
        } else {
            reject('you are broke');
        }
    });
}

checkBankAccount(money).then(resolvedValue=>{
    console.log(resolvedValue);
}, rejectedValue=>{
    console.log(rejectedValue);
})