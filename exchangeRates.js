// Fetch exchange rates from NBP API
async function fetchExchangeRates() {
  try {
    const responseEUR = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json');
    const responseUSD = await fetch('http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json');

    if (!responseEUR.ok || !responseUSD.ok) {
      throw new Error('Failed to fetch exchange rates');
    }

    const dataEUR = await responseEUR.json();
    const dataUSD = await responseUSD.json();

    // Extract the rates
    const rateEUR = dataEUR.rates[0].mid;
    const rateUSD = dataUSD.rates[0].mid;

    // Update the widget
    document.getElementById('eur-rate').innerText = `EUR/PLN: ${rateEUR}`;
    document.getElementById('usd-rate').innerText = `USD/PLN: ${rateUSD}`;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
  }
}

// Call the function to fetch and display the rates
fetchExchangeRates();
