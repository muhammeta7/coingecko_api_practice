var axios = require("axios");

// Grab all available predictions for a match id
PREDICTION_DETAILS = 'https://football-prediction-api.p.rapidapi.com/api/v2/predictions/99999';

// Returns information about the accuracy of past predictions. (in the last day, 7 days, 14 days and 30 days)
// Can be additionally filtered by federation and market.
// If no market filter is provided it defaults to classic
PERFORMANCE_STATS = 'https://football-prediction-api.p.rapidapi.com/api/v2/performance-stats';

var options = {
    method: 'GET',
    url: PERFORMANCE_STATS,
    params: {market: 'classic'},
    headers: {
        'x-rapidapi-key': 'YvO7ZbPbFQmsh0TpNIIxr6DR7pgCp18h5VrjsnqmG1sN2ByovE',
        'x-rapidapi-host': 'football-prediction-api.p.rapidapi.com'
    }
};



// axios.request(options).then(function (response) {
//     console.log(response.data);
// }).catch(function (error) {
//     console.error(error);
// });
