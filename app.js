let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    qString = "?CMC_PRO_API_KEY=" + _0xe548[0] + "&start=1&limit=5&convert=USD";

fetch(url + qString)
    .then(function(response) {
        console.log(response);
    
    });