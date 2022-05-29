function createAccount (pin, amount = 0, loanAmount = 0) {
	return {
		checkBalance (inputPin) { // method to check the balance
			if(inputPin !== pin) return "Invalid PIN."; // if pin incorrect 
			return `$${amount}`; // 
		},
		deposit (inputPin, newAmount) {
			if(inputPin !== pin) return "Invalid PIN.";
			amount += newAmount;
			return `Succesfully deposited $${newAmount}. Current balance: $${amount}.`;
		},
		withdraw (inputPin, withdrawalAmount) {
			if(inputPin !== pin) return "Invalid PIN.";
			if(withdrawalAmount > amount)
				return "Withdrawal amount exceeds account balance. Transaction cancelled.";
			amount -= withdrawalAmount;
			return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;
		},
		changePin (oldPin, newPin) {
			if(oldPin !== pin) return "Invalid PIN.";
			pin = newPin;
			return "PIN successfully changed!";
		},
		// // my practice
		// takeLoan (inputPin, ccAmount) {
		// 	if(inputPin !== pin) return "Invalid PIN";

		// },
		// creditCardAccount (inputPin, loanAmount) {
		// 	if(inputPin !== pin) return "Invalid PIN";
		// 	return `Your credit card has a balance of $${loanAmount}.`;
		// },
		// payCreditCardBalance (inputPin, paymentAmount) {
		// 	if(inputPin !== pin) return "Invalid PIN";
		// 	if(paymentAmount <= loanAmount) {
		// 		loanAmount -= paymentAmount;
		// 		return `Your new balance is ${loanAmount} `;
		// 	}
		// }
	};
}
let account = new createAccount(333, 300, 0);;



// module.exports = { createAccount };
