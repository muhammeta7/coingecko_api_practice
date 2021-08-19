const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const fetchGateCoinIds = () => {
    return CoinGeckoClient.exchanges.fetchTickers('gate');
}


let gateCoins;
fetchGateCoinIds().then( resp => { gateCoins = parseCoinIds(resp.data.tickers) }).then(
    () => {
        console.log(gateCoins);
    });

// generates list of only Gate coin_id's from CoinGecko
const parseCoinIds = (arr) => {
    let gateCoins = [];
    for(let coin in arr){
        gateCoins.push(arr[coin]['coin_id'])
    }
    return gateCoins;
}

const filteredKeys = ["market", "last", "volume", "converted_last", "converted_volume", "trust_score", "bid_ask_spread_percentage", "timestamp", "last_traded_at", "last_fetch_at","is_anomaly", "is_stale", "trade_url", "token_info_url"]

const displayInfo = (data) => {
    filteredKeys.forEach( (e) => {
        deleteKeys(e);
    })
    return data;
}

const deleteKeys = (obj) => {
    return filteredKeys.forEach(e => delete obj[e]);
}

const csvWriter = createCsvWriter( {
    path: '',
    header:  [
        {id: 'name', title: "Name"},
        {id: 'base', title: 'Base'},
        {id: 'target', title: 'Target'},
        {id: 'coin_id', title: 'Coin_Id'},
        {id: 'target_coin_id', title: 'Target_Coin_ID'},
    ]
});

const writeCsv = async () => {
    fetchGateCoinIds().then(
        resp => {
            csvWriter.writeRecords(displayInfo(resp.data.tickers));
        }
    );
}

writeCsv();