const axios = require('axios');
const Papa = require('papaparse');
const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

let coinList;
// Convert back to CSV
var csv;


const getCoinList = async () => {
    coinList = await CoinGeckoClient.coins.all();
    return coinList;
}

getCoinList().then( () => console.log(coinList));

getCoinList().then( () => console.log(coinList));

// JSON.parse(response.data)
// curl -X 'GET' \
// 'https://api.coingecko.com/api/v3/coins/{coin_id}/tickers' \
// -H 'accept: application/json'