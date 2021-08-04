// Import coingecko-api
const axios = require('axios');
const CoinGecko = require('coingecko-api');
let GATEIO_BASE_URL = "https://data.gateapi.io/api2";
const request = require('request');

// Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();
// initialize empty array to copy CoinGecko coin list into
let coins = [];
let coin = ""; // initialize coin string to get more data


// Make call for coin list and select token at random
// const selectRandomCoin = async() => {
//     let data = await CoinGeckoClient.coins.list();
//     coins = data.data.slice(); // Creates copy of coin list array w/ length of 8779
//     coin = coins[Math.floor(Math.random() * coins.length)].id; // set random coin variable
//     // coins.forEach( e => console.log(e));
//     console.log(coin);
// };

// selectRandomCoin();

// Get info for trading pair by passing vs_currency parameter. Default is 'usd'.
// const getTradingPair = async () => {
//     let data = await CoinGeckoClient.coins.markets(
//         {
//             vs_currency: 'usd',
//             order: "volume_desc",
//             per_page: 5,
//             page: 1,
//             sparkline: false,
//             price_change_percentage: "24h"
//         })
//         .then(data => console.log(data.data))
// }
// getTradingPair('usd');
let gateTickers = [];
const getExchangeTickersByVolumeDesc = async() => {
     // Creates copy of coin list array w/ length of 8779
    // coin = coins[Math.floor(Math.random() * coins.length)].id; // set random coin variable
    // await selectRandomCoin();
    let data = await CoinGeckoClient.exchanges.fetchTickers(
        'gate',
        {
            // vs_currency: 'usd',
            // coin_ids: coin,
            order: "volume_desc",
            page: 5,
            // exchange_ids: exchanges.list(),
            // sparkline: false,
            // price_change_percentage: "24h"
        }).then( data =>  console.log(JSON.stringify(data)))


}

// getExchangeTickersByVolumeDesc();

const getGateTradingPairs = () => {
    let pairs = '';
    axios.get(GATEIO_BASE_URL + "/1/pairs")
        .then(res => {
            pairs = JSON.stringify(res.data);
            console.log(pairs.slice(1,pairs.length-1).split(','));
        });
}

getGateTradingPairs();


