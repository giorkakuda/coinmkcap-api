
import { apiKey } from "./app1";

function getData(){ /*obfuscate api key*/
    fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY="+ apiKey)

    .then((response) => {
        if (!response.ok){
            throw new Error('Too many requests. API call limit exceeded. Please try again next month.');
        }
        return response.json();
    })
    .then((data) => {
        
        const btc = data.data[0].quote
        document.getElementById('price')
        .innerHTML = parseFloat(btc.USD.price).toLocaleString('en',{style:'currency',currency: 'USD'})
        
        const eth = data.data[1].quote
        document.getElementById('price2')
        .innerHTML = parseFloat(eth.USD.price).toLocaleString('en',{style:'currency',currency: 'USD'})

        const bnb = data.data.find(coin => coin.symbol === 'BNB').quote
        document.getElementById('price3')
        .innerHTML = parseFloat(bnb.USD.price).toLocaleString('en',{style:'currency',currency: 'USD'})

        const doge = data.data.find(coin => coin.symbol === 'DOGE').quote 
        document.getElementById('price4')
        .innerHTML = parseFloat(doge.USD.price).toLocaleString('en',{style:'currency',currency: 'USD'})
    })
    .catch((error) => {
        document.getElementById('price').innerHTML = error.message;
        document.getElementById('price2').innerHTML = error.message;
        document.getElementById('price3').innerHTML = error.message;
        document.getElementById('price4').innerHTML = error.message;
    });
}

getData()
  
    