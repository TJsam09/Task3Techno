// Predefined exchange rates
const exchangeRates = {
  USD: {
    EUR: 0.84,
    GBP: 0.72,
    JPY: 108.73,
  },
  EUR: {
    USD: 1.19,
    GBP: 0.86,
    JPY: 129.37,
  },
  GBP: {
    USD: 1.39,
    EUR: 1.17,
    JPY: 149.61,
  },
  JPY: {
    USD: 0.0092,
    EUR: 0.0077,
    GBP: 0.0067,
  },
};

document.addEventListener("DOMContentLoaded", function () {
  const fromCurrency = document.getElementById("fromCurrency");
  const toCurrency = document.getElementById("toCurrency");
  const amountInput = document.getElementById("amount");
  const convertBtn = document.getElementById("convertBtn");
  const resultText = document.getElementById("resultText");

  // Populate currency dropdowns
  for (let currency in exchangeRates) {
    let option1 = document.createElement("option");
    option1.value = currency;
    option1.textContent = currency;
    fromCurrency.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = currency;
    option2.textContent = currency;
    toCurrency.appendChild(option2);
  }

  // Convert currency
  convertBtn.addEventListener("click", function () {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = parseFloat(amountInput.value);

    if (!isNaN(amount)) {
      if (exchangeRates[from] && exchangeRates[from][to]) {
        const result = amount * exchangeRates[from][to];
        resultText.textContent = `${amount} ${from} = ${result.toFixed(
          2
        )} ${to}`;
      } else {
        resultText.textContent = "Exchange rate not available";
      }
    } else {
      resultText.textContent = "Please enter a valid amount";
    }
  });
});
