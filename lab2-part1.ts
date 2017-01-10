// Has a constructor with the following parameters
// initialBalance (a number)
// ownerName (a string)
// Saves those parameters as private fields in your class
// Has a deposit method which takes a number amount as a parameter and adds it to your account's balance
// Has a withdraw method which takes a number amount as a parameter and subtracts it to your account's balance
// Has a checkBalance method which prints out the current balance of the account and the account owner's name (pro tip: ES6 template literals make this a bit cleaner)

class CheckingsAccount {
    private balance:number
    private ownerName:string

    constructor(balance:number, ownerName:string) {
        this.balance = balance;
        this.ownerName = ownerName;
    }

    deposit(amount:number) {
        this.balance += amount;
    }

    withdraw(amount:number) {
        this.balance -= amount;
    }

    checkBalance() {
        console.log(`Current Balance:  ${this.balance}`)
        console.log(`Account Owner:  ${this.ownerName}`)
    }
}

let checkings:CheckingsAccount = new CheckingsAccount(1200, "sally");
checkings.checkBalance();
checkings.deposit(300);
checkings.checkBalance();
checkings.withdraw(300);
checkings.checkBalance();