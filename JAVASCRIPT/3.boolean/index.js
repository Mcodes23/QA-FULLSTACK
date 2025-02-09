import bcrypt from 'bcrypt';

// Function to verify the user's password
function verifyPassword(inputPassword, hashedPassword) {
    return bcrypt.compareSync(inputPassword, hashedPassword);
}

// Function to verify the MFA code
function verifyMFA(inputCode, correctCode) {
    return inputCode === correctCode;
}

// Function to check if the user has sufficient balance
function checkBalance(withdrawalAmount, currentBalance) {
    return currentBalance >= withdrawalAmount;
}

// Function to ensure withdrawal does not exceed the daily limit
function checkDailyLimit(withdrawalAmount, dailyLimit) {
    return withdrawalAmount <= dailyLimit;
}

// Main function to process the withdrawal
function processWithdrawal(inputPassword, storedHashedPassword, inputMFA, correctMFA, withdrawalAmount, currentBalance, dailyLimit) {
    if (!verifyPassword(inputPassword, storedHashedPassword)) {
        return "Transaction Failed: Incorrect password.";
    }

    if (!verifyMFA(inputMFA, correctMFA)) {
        return "Transaction Failed: MFA failed.";
    }

    if (!checkBalance(withdrawalAmount, currentBalance)) {
        return "Transaction Failed: Insufficient balance.";
    }

    if (!checkDailyLimit(withdrawalAmount, dailyLimit)) {
        return "Transaction Failed: Amount exceeds daily limit.";
    }

    // Deduct the withdrawal amount from the balance
    currentBalance -= withdrawalAmount;
    return `Transaction Successful. New Balance: $${currentBalance}`;
}

// Example Usage
const hashedPassword = await bcrypt.hash('securePassword123', 10); // Using async/await with bcrypt.hash

const result = processWithdrawal(
    'securePassword123',   // User input password
    hashedPassword,        // Stored hashed password
    '123456',              // User input MFA code
    '123456',              // Correct MFA code
    200,                   // Withdrawal amount
    1000,                  // Current balance
    500                    // Daily transaction limit
);

console.log(result); 
