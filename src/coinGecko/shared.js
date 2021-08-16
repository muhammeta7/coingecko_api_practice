const CoinGecko = require('coingecko-api');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const CoinGeckoClient = new CoinGecko();

const getCoinIds = () => {
    return CoinGeckoClient.coins.list();
}

const csvWriter = (path, columnHeaders) => {
    createCsvWriter({
        path: path,
        header: columnHeaders
    });
    // Add path to save to local machine Update empty '<Your path/coingecko_api_practice/src/coinGecko/data> + nameOfFile.csv'
    // <{id: 'jsonData properties...', title: 'Excel sheet column name'},{id: 'id2', title:'Column2'}>
    // ===================================
    //     {id: id, title: 'Coin_ID'},
    //     {id: 'symbol', title: 'ticker'},
    //     {id: 'name', title: 'name'},
}

const writeCsv = async () => {
    getCoinIds().then(
        resp => {
            csvWriter.writeRecords(resp.data);
        }
    );
}

let coins = [];
let coinId = "";

const selectRandomCoinId = async () => {
    coins = await getCoinIds();
    coins = coins.data.slice(); // Creates copy of coin list array w/ length of 8779
    coinId = coins[Math.floor(Math.random() * coins.length)].id; // set random coin variable
    console.log(coinId);
    return coinId;
};

const fetchCoin = () => {
    return CoinGeckoClient.coins.fetchTickers(coinId);
}

let coinTickerData;
const displayTickerFields = (someList) => {
    let i = 0;
    while( i < someList.length ){
        console.log(someList[i]);
        i++;
    }
}

selectRandomCoinId().then( () => fetchCoin())
    .then( resp => { coinTickerData = resp.data.tickers} )
    .then( () => displayTickerFields(coinTickerData)
);


