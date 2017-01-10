// The only thing that is different about your SavingsAccount class is that there should be a limit on the number of withdrawals you can make.

// Specifically, each instance of the SavingsAccount class should only be allowed to make 3 withdrawals. Any calls that exceed that limit should not perform the withdrawal and additionally should print out an error message for the user to see.

// Make sure to write code that creates an instance of your class and calls its methods to make sure it works.

// When you are done with this step, commit your changes to git for this file

class SavingsAccount {
    private balance:number;
    private ownerName:string;
    private withdrawls:number;

    constructor(balance:number, ownerName:string, withdrawls:number) {
        this.balance = balance;
        this.ownerName = ownerName;
        this.withdrawls = 0;
    }

    deposit(amount:number) {
        this.balance += amount;
    }

    withdraw(amount:number) {
        if (this.withdrawls > 3) {
            console.log(`Sorry, you have exceeded the maximum withdrawl amount`);
        }
        this.balance -= amount;
        this.withdrawls++;
    }

    checkBalance() {
        console.log(`Current Balance:  ${this.balance}`)
        console.log(`Account Owner:  ${this.ownerName}`)
        console.log(`Withdrawls:  ${this.withdrawls}`)
    }
}

let savings:SavingsAccount = new SavingsAccount(1200, "sally");
savings.checkBalance();
savings.deposit(300);
savings.checkBalance();
savings.withdraw(300);
savings.withdraw(300);
savings.withdraw(300);
savings.withdraw(300);
savings.checkBalance();