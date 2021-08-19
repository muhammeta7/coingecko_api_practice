const CoinGecko = require('coingecko-api');
const {createObjectCsvStringifier, createObjectCsvWriter} = require("csv-writer");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const CoinGeckoClient = new CoinGecko();

// Get coin list from coin gecko api and return for later use
const getCoinIds = () => {
    return CoinGeckoClient.coins.list();
}

const fetchGateCoinIds = () => {
    return CoinGeckoClient.exchanges.fetchTickers('gate');
}

let gateCoins;
fetchGateCoinIds().then( resp => { gateCoins = parseCoinIds(resp.data.tickers) }).then(
    (index) => {
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

const filteredKeys = ["converted_last", "is_anomaly", "is_stale", "bid_ask_spread_percentage", "cost_to_move_up_usd", "cost_to_move_down_usd", "bid_ask_spread_percentage", "last_traded_at", "last_fetch_at", "trade_url", "token_info_url"]

const filteredDataKeys = (data) => {
    data.forEach((e) => {
        deleteKeys(e);
    })
    return data;
}

const deleteKeys = (obj) => {
    return filteredKeys.forEach(e => {
        delete obj[e]
    });
}

const fetchCoinTickerData = (coinId) => {
   return CoinGeckoClient.coins.fetchTickers(coinId);
}

const csvWriter = createCsvWriter({
        path: '',
        header: [
            {id: 'coin_id', title: 'Coin_Id'},
            {id: 'base', title: 'Base'},
            {id: 'target', title: 'Target'},
            {id: 'target_coin_id', title: 'Target_Coin_ID'},
            // TODO Market
            {id: 'market', title: 'Market'},
            {id: 'last', title: "Last"},
            {id: 'volume', title: 'Volume'},
            {id: 'converted_volume', title: 'Converted_Volume'},
            {id: 'trust_score', title: 'Trust_Score'},
            {id: 'timestamp', title: 'Timestamp'},
            {id: 'is_anomaly', title: 'Is_Anomaly'},
            {id: 'is_stale', title: 'Is_Stale'}
        ]
    }
);

const writeCsv = async () => {
    fetchCoinTickerData("cardano").then(
        resp => {
            csvWriter.writeRecords(resp.data.tickers);
        }
    );
}


writeCsv();







