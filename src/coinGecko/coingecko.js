const axios = require('axios');
const Papa = require('papaparse');
const CoinGecko = require('coingecko-api');

const CoinGeckoClient = new CoinGecko();

let coinList;
// Convert back to CSV

let coinIds;

const getCoinList = async () => {
    return CoinGeckoClient.coins.list();

}

getCoinList()
    .then( resp => {
        coinList = JSON.stringify(resp.data);
    })
    .then( () => console.log(coinList));



// JSON.parse(response.data)
// curl -X 'GET' \
// 'https://api.coingecko.com/api/v3/coins/{coin_id}/tickers' \
// -H 'accept: application/json'