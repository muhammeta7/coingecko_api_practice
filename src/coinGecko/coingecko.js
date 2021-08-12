const axios = require('axios');
const CoinGecko = require('coingecko-api');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const CoinGeckoClient = new CoinGecko();

const csvWriter = createCsvWriter({
    // Add path to store local files
    path: '',
    header: [
        {id: 'id', title: 'Coin_ID'},
        // Each header will establish your columns
        // {id: 'symbol', title: 'ticker'},
        // {id: 'name', title: 'name'},
    ]
});

const getCoinList = async () => {
    return CoinGeckoClient.coins.list();
}

const writeCsv = async () => {
    getCoinList().then(
        resp => {
            csvWriter.writeRecords(resp.data);
        }
    )
}

writeCsv().then( () => console.log("Check the data folder!"));



// JSON.parse(response.data)
// curl -X 'GET' \
// 'https://api.coingecko.com/api/v3/coins/{coin_id}/tickers' \
// -H 'accept: application/json'