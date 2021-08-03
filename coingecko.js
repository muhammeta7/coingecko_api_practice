// Import coingecko-api
const CoinGecko = require('coingecko-api');

// Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();
// initialize empty array to copy CoinGecko coin list into
let coins = [];
let coin = ""; // initialize coin string to get more data

// Make call for coin list and select token at random
const selectRandomCoin = async () => {
    let data = await CoinGeckoClient.coins.list();
    coins = data.data.slice(); // Creates copy of coin list array w/ length of 8779
    coin = coins[Math.floor(Math.random() * coins.length)].id; // set random coin variable
    // coins.forEach( e => console.log(e));
    console.log(coin);
};

selectRandomCoin();

// Get info for trading pair by passing vs_currency parameter
// default is usd
const getTradingPair = async () => {
    let data = await CoinGeckoClient.coins.markets(
        {
            // vs_currency: vs_currency,
            order: "volume_desc",
            per_page: 5,
            page: 1,
            sparkline: false,
            price_change_percentage: "24h"
        }).then(data => console.log(data.data))
}

getTradingPair('usd');