const user = {
  id: "USER-123456",
  name: {
    first: "Alice",
    last: "Liddell",
  },
  email: "alice@example.com",
  address: {
    shipping: {
      street: "123 Rabbit Hole",
      city: "Wonderland",
      state: "Fantasy",
      postalCode: "12345",
      country: "WL",
    },
    billing: {
      street: "456 Mad Hatter Lane",
      city: "Tea Party",
      state: "Fantasy",
      postalCode: "67890",
      country: "WL",
    },
  },
  payment: {
    total: "100.00",
    currency: "USD",
    details: {
      subtotal: "75.00",
      tax: "15.00",
      shipping: "10.00",
    },
    transactions: [
      { id: "TXN-123", amount: "50.00", description: "Magic Potion" },
      { id: "TXN-456", amount: "50.00", description: "Enchanted Sword" },
    ],
  },
};
const {
  id,
  name: { first: firstName, last: lastName },
  email,
  address: {
    shipping: {
      street: street1,
      city: city1,
      state: state1,
      postalCode: postalCode1,
      country: country1,
    },
    billing: {
      street: street2,
      city: city2,
      state: state2,
      postalCode: postalCode2,
      country: country2,
    },
  },
  payment: {
    total,
    currency,
    details: { subtotal, tax, shipping },
    transactions: [
      { id: idTransaction1, amount: amount1, description: description1 },
      { id: idTransaction2, amount: amount2, description: description2 },
    ],
  },
} = user;
const personalInfo = document.getElementById("personal-info");
const shippingAddress = document.getElementById("shipping-address");
const billingAddress = document.getElementById("billing-address");
const transactionsList = document.getElementById("transactions");

personalInfo.innerHTML = `
  <h1>personal info</h1>
  <p>ID: ${id}</p>
  <p>First Name: ${firstName}</p> 
  <p>Last Name: ${lastName}</p>
  <p>Email: ${email}</p>
`;
shippingAddress.innerHTML = `
 <h1>shipping address</h1>
  <p>Street: ${street1}</p>
  <p>City: ${city1}</p>
  <p>State: ${state1}</p>
  <p>Postal Code: ${postalCode1}</p>
  <p>Country: ${country1}</p>
`;

billingAddress.innerHTML = `
 <h1>billing address</h1>
  <p>Street: ${street2}</p>
  <p>City: ${city2}</p>
  <p>State: ${state2}</p>
  <p>Postal Code: ${postalCode2}</p>
  <p>Country: ${country2}</p>
`;

transactionsList.innerHTML = user.payment.transactions
  .map(
    (transaction) =>
      `<li>Amount: ${transaction.amount}, Description: ${transaction.description}</li>`
  )
  .join("");
