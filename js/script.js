/* 
using JavaScript alert, prompt and confirm and by applying algorithm, build a simple app to transfer money from one bank to another using the possible steps in ATMS.

   required topics:
   variable deceleration
   strings
   arrays
   objects
   functions
   loops
   higher array methods
   conditionals
   algorithms
  operators
*/

/* 
Step 1: Visit your nearest ATM and insert your debit/ATM card..
Step 2:Enter your ATM PIN.
Step 3: Enter the 'Transfer' option.
Step 4: Enter the beneficiary's required bank details.
Step 5: Enter the amount 
Step6: confirm the amount and click 'ok'
*/

let MyCardInfo = {
  name: "Omolola Adedayo",
  accountNumber: "0124173190",
  pin: "0000",
  bank: "gtb",
};

function startApp() {
  alert(`Welcome ${MyCardInfo.name}`);
  prompt(" please enter your pin");
}
startApp();

let pin = "0000";

if ((pin = "0000")) {
  prompt("withdraw or Transfer");
} else {
  alert("Invalid");
}

let accountBalance = {
  sender: "40000",
  receiver: "4000",
};

prompt("Enter Amount");

let receiverName = "Praise";
let amount = "10000";

if (amount < accountBalance.sender) {
  confirm(`Are you sure you want to transfer ${amount} to ${receiverName} ?`);
} else {
  alert("Insufficient balance");
}

alert("Transfer Successful");
