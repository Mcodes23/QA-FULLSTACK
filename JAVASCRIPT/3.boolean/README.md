# Challenge Questions:
# 1. Password Authentication:
○ Why is it important to store passwords in a hashed format? What security
advantage does this provide over plain text passwords?
# answer: 
Storing passwords in a hashed format is critical for protecting user data, maintaining privacy, and preventing unauthorized access, even in the event of a data breach. It’s a fundamental security best practice for any application that handles sensitive information.
# security advantage
Hashing offers robust protection for sensitive user data, ensuring that even in the event of a breach, passwords remain secure. It mitigates the risk of unauthorized access, complies with regulatory standards, and protects both users and organizations from potential data exploitation.

# 2. Multi-Factor Authentication (MFA):
○ How does implementing MFA enhance the security of the transaction process?
What types of attacks does it help prevent?
# answer
Multi-Factor Authentication (MFA) adds an additional layer of security by requiring users to verify their identity through two or more independent factors before accessing an account or completing a transaction.
# types of attacks
1. Phishing Attacks
2. Brute-Force and Credential Stuffing Attacks
3. Man-in-the-Middle (MITM) Attacks
4. Replay Attacks
5. Social Engineering Attacks

# 3. Balance Verification:
○ Why is it necessary to check the account balance before allowing a withdrawal?
What risks are involved if this step is skipped?
1. To Prevent Overdrafts or Negative Balances:

    Ensuring the account has sufficient funds prevents the user from withdrawing more money than they actually have. Without this check, the account could go into a negative balance (overdraft), leading to financial complications for both the user and the bank.

2. To Maintain Financial Integrity:

    Regular balance checks uphold the accuracy and integrity of the banking system. They ensure that all transactions reflect the actual availability of funds, which is critical for trust and transparency.

3. To Protect Against Fraudulent Activities:

    Fraudsters might attempt to exploit system vulnerabilities by withdrawing funds they don’t have. Verifying the balance before transactions helps mitigate such fraudulent withdrawals.

4. To Avoid Unauthorized Credit Extensions:
    
    If withdrawals are processed without balance checks, the bank might unintentionally provide unauthorized credit to users, leading to potential financial loss for the institution.

5. To Ensure Compliance with Financial Regulations:
    
    Financial institutions are often required to follow specific regulatory guidelines for transaction processing. Ensuring sufficient funds before allowing a withdrawal is part of these compliance measures.
# risks involved
1. Account Overdrafts Leading to Financial Loss
2. System Integrity Issues
3. Increased Risk of Fraud
4. Legal and Compliance Violations
5. Negative Customer Experience:

# 4. Daily Transaction Limit:
○ What purpose does the daily transaction limit serve? How does it help in
preventing fraudulent or excessive withdrawals?
# purpose
1. Fraud Prevention and Risk Mitigation:

    The primary purpose of a daily transaction limit is to reduce potential financial loss in case of unauthorized access or fraudulent activity. Even if an attacker gains access to an account, they can only withdraw a limited amount within a day, minimizing the damage.

2. Account and Financial Management for Users:
    
    Daily limits help users manage their spending and prevent accidental over-withdrawals. This control encourages responsible financial behavior and budgeting.

3. Detection of Abnormal Activity:

    Sudden attempts to withdraw amounts exceeding the daily limit can act as red flags for fraudulent activities. These anomalies can trigger alerts for further investigation by the bank's fraud detection system.

4. Compliance with Financial Regulations:
    
    Many financial institutions are required to impose transaction limits to comply with anti-money laundering (AML) and counter-terrorism financing (CTF) regulations. Limiting transactions helps monitor and report suspicious activities.

5. System Load Balancing:
    
    Daily transaction limits help manage the load on banking systems by spreading transactions over time, reducing the risk of system overload due to large or frequent withdrawals.

# preventing fraudulent or excessive withdrawals
1. Limits the Impact of Account Compromise:
    
    If an attacker gains access to a user's account, the daily transaction limit restricts how much they can steal in a single day. This gives both the user and the bank time to detect and respond to the breach before more damage is done.

2. Prevents Large, Unusual Withdrawals:
   
    Fraudsters often try to withdraw large sums quickly before being detected. A daily limit ensures that even if a fraudulent transaction is initiated, the amount is capped, making it less attractive for attackers.

3. Acts as a Layer of Defense in Multi-Factor Security:
    
    In addition to passwords and MFA, daily limits act as a third layer of defense. Even if the first two layers fail, the limit restricts potential losses.

4. Discourages Money Laundering and Financial Crimes:
    
    Large and frequent withdrawals can be a sign of money laundering or illicit activities. Daily transaction limits make it harder for criminals to move large sums of money quickly, forcing them to engage in riskier, more detectable behavior.

5. Triggers Automated Fraud Detection Systems:
    
    Attempts to exceed the daily limit can automatically trigger fraud alerts or temporarily freeze the account for security verification, allowing banks to intervene quickly.

6. Protects Against Automated or Bot Attacks:
    
    In cases where bots attempt to automate fraudulent withdrawals, a daily limit can throttle the speed and volume of these attacks, giving the system time to detect abnormal behavior.
# 5. Improvement:
○ If you were to add extra features, such as fraud detection (e.g., detecting
abnormal withdrawal patterns), how would you go about doing this? What
additional data would you track to detect fraud?
# steps
1. Track and Collect Relevant Data:

    To effectively detect fraud, the system needs to log transaction details and user behaviors over time.

2. Define Normal Behavior (Baseline Profiling):
    
    Establish normal behavior patterns for each user by analyzing historical data. This might include average withdrawal amounts, usual locations, or transaction times.

3. Create Rules for Detecting Abnormal Activity:
    
    - Set thresholds or rules to flag suspicious activities. For example:
    Multiple failed login attempts followed by large withdrawals.
    - Withdrawals from new locations or devices.
    - Sudden increases in withdrawal amounts compared to the user’s history.
4. Implement Machine Learning (Advanced):

    Use machine learning models like anomaly detection algorithms to learn and adapt to new fraud patterns over time.
5. Trigger Alerts and Automated Actions:

    When suspicious activity is detected, the system can:
        
    - Send alerts to the user and bank administrators.
    - Temporarily freeze the account for further verification.
    - Request additional verification, like re-entering MFA codes.

# Additional data
1. Transaction Data
2. Location Data
3. Device and Network Data
4. User Behavior Data
5. Historical Data
6. External Data Sources (Advanced)
