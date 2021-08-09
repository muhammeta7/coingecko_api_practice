const axios = require('axios');
const CoinGecko = require('coingecko-api');

const GATEIO_BASE_URL = "https://data.gateapi.io/api2/1/pairs";
let gatePairs;

const getAllGatePairs = async () => {
    await axios.get(GATEIO_BASE_URL).then( resp => {
        // resp.data.forEach( pair => {
        //     pairs.push(pair.split("_"))
        // })
        gatePairs = resp.data;
        // console.log(resp.data);
    });
}

const getRandomGatePair =  (arr) => {
    return  arr[Math.floor(Math.random() * arr.length)];
}

// Gets random Gate trading pair
// getAllGatePairs().then( () => console.log(getRandomGateTradingPair(pairs)));

getAllGatePairs().then( () => console.log(getRandomGatePair(gatePairs)));


