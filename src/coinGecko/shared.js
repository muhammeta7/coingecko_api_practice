const CoinGecko = require('coingecko-api');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const CoinGeckoClient = new CoinGecko();

let coinList;

const getCoinIds = () => {
    return CoinGeckoClient.coins.list();
}

const csvWriter = (path, columnHeaders) => {
    createCsvWriter({
        path: path,
        header: columnHeaders
    });
    // Add path to save to local machine Update empty '<Your path/coingecko_api_practice/src/coinGecko/data> + nameOfFile.csv'
    //     {id: id, title: 'Coin_ID'},
    //     id: 'jsonData properties...', title: 'Excel sheet column name'
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

let coinId = "";
const selectRandomCoinId = async () => {
    let coins = await getCoinIds();
    coins = coins.data.slice(); // Creates copy of coin list array w/ length of 8779
    coinId = coins[Math.floor(Math.random() * coins.length)].id; // set random coin variable
    return coinId;
};

selectRandomCoinId().then(() => console.log(coinId));

