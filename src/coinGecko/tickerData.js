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
    const coinsList = coins.data.slice(); // Creates copy of coin list array w/ length of 8779
    coinId = coinsList[Math.floor(Math.random() * coinsList.length)].id; // set random coin variable
    console.log(coinId);
    return coinId;
};

const fetchCoinTickerData = () => {
    return CoinGeckoClient.coins.fetchTickers(coinId);
}


let coinTickerData;
// TODO converted_volume.usd or [1]
const filteredKeys = ["last", "cost_to_move_up_usd", "cost_to_move_down_usd", "converted_last", "bid_ask_spread_percentage", "last_traded_at", "last_fetch_at", "trade_url", "token_info_url"]

const displayInfo = (data) => {
    data.forEach( (e) => {
        deleteKeys(e);
    })
    return data;
}

const deleteKeys = (obj) => {
    return filteredKeys.forEach(e => delete obj[e]);
}

selectRandomCoinId().then(() => fetchCoinTickerData())
    .then( resp => {
        coinTickerData = resp.data.tickers;
    }).then( () => console.log(displayInfo(coinTickerData)));




