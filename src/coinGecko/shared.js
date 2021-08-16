export const CoinGecko = require('coingecko-api');
export const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const CoinGeckoClient = new CoinGecko();

export const getCoinList = async () => {
    return CoinGeckoClient.coins.list();
}

export const csvWriter = (path, columnHeaders) => {
    createCsvWriter({
        path: path,
        header: columnHeaders
    }
    // Add path to save to local machine Update empty ''
    // header: [
    //     {id: id, title: 'Coin_ID'},
    //     id: 'jsonData properties...', title: 'Excel sheet column name'
    //     {id: 'symbol', title: 'ticker'},
    //     {id: 'name', title: 'name'},
    // ]
    )}

export const writeCsv = async () => {
    getCoinList().then(
        resp => {
            csvWriter.writeRecords(resp.data);
        }
    );
}