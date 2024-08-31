const formAboutElement = document.querySelector('.amount');
const convertAboutElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');

const countries = [  
  {code:"AED", name:"United Arab Emirates" },
  {code:"ARS", name:"Argentine Peso"},
  {code:"AUD", name:"Australian Dollar"},
  {code:"BRL", name:"Brazilian Real"},
  {code:"CAD", name:"Canadian Dollar"},
  {code:"CHF", name:"Swiss Franc"},
  {code:"CLP", name:"Chilean Peso"},
  {code:"CNY", name:"Chinese Yuan"},
  {code:"COP", name:"Colombian Peso"},
  {code:"CZK", name:"Czech Koruna"},
  {code:"DKK", name:"Danish Kron"},
  {code:"EGP", name:"Egyptian Pond"},
  {code:"EUR", name:"Euro"},
  {code:"GBP", name:"British Pond Sterling"},
  {code:"HKD", name:"Hong Kong Dollar"},
  {code:"HRK", name:"Crotian Kuna"},
  {code:"HUF", name:"Hungarian Forint"},
  {code:"IDR", name:"Indoneshian Rupian"},
  {code:"ILS", name:"Israili new Shekel"},
  {code:"INR", name:"Indian Rupee"},
  {code:"ISK", name:"Icelandic Krona"},
  {code:"JPY", name:"Japanese Yen"},
  {code:"KRW", name:"South Korean Won"},
  {code:"MXN", name:"Mexicon Peso"},
  {code:"MYR", name:"Malaysian Ringget"},
  {code:"NOK", name:"Norwegian Krone"},
  {code:"NZD", name:"New Zealand Dollar"},
  {code:"PEN", name:"Peruvian Sol"},
  {code:"PKR", name:"Pakistani Rupee"},
  {code:"PHP", name:"Philippine Peso"},
  {code:"PLN", name:"Polish Zaloty"},
  {code:"RON", name:"Romanian Reo"},
  {code:"RUB", name:"Russian Ruble"},
  {code:"SEK", name:"Swedish Krona"},
  {code:"SGD", name:"Singapore Dollar"},
  {code:"THB", name:"Thai Baht"},
  {code:"TRY", name:"Turkish Lira"},
  {code:"TWD", name:"Taiwan new Dollar"},
  {code:"UAH", name:"Ukranian Hryvnia"},
  {code:"USD", name:"United States Dollar"},
  {code:"UNY", name:"URUGUAyan Peso"},
  {code:"VND", name:"Vietnemise Dong"},
  {code:"ZAR", name:"South Africian Rand"},
  ];

countries.forEach(country => {
  const option1 = document.createElement('option');
  option1.value = country.code;
  option1.textContent = `${country.code} (${country.name})`;
  fromCurrencyElement.appendChild(option1);

  const option2 = document.createElement('option');
  option2.value = country.code;
  option2.textContent = `${country.code} (${country.name})`;
  toCurrencyElement.appendChild(option2);
  fromCurrencyElement.value = "AED"
  toCurrencyElement.value = "PKR"
})

const getExchangeRate = async() => {
  const amount = parseFloat(formAboutElement.value);
  const fromCurrency = fromCurrencyElement.value;
  const toCurrency = toCurrencyElement.value;

  const response =await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
  const data  =await response.json();

  const conversionRates = data.rates[toCurrency];
  const convertionAmount = amount * conversionRates;
  convertAboutElement.value = convertionAmount;
  resultElement.textContent = `${amount} ${fromCurrency} = ${convertionAmount} ${toCurrency}`
  
}

formAboutElement.addEventListener("input" , getExchangeRate)
fromCurrencyElement.addEventListener("change" , getExchangeRate)
toCurrencyElement.addEventListener("change" , getExchangeRate)
window.addEventListener("load" , getExchangeRate)