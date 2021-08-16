const CoinGecko = require('coingecko-api');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const CoinGeckoClient = new CoinGecko();


export const getCoinIds = async () => {
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

