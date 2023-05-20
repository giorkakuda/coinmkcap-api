

function getData(){ 
    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=0b273a41-72ec-4cb6-8c21-35a4a6fb12eb')}`)
    .then(response => {
        if (!response.ok) 
        throw new Error('Too many resquests. API call limit exceeded. Please try again next month.')
        
        return response.json()
    })
    .then((data) => {
        const response = JSON.parse(data.contents); // parsing JSON 
        //console.log(response);
        
        const btc = response.data.find(coin => coin.symbol === 'BTC').quote
        document.getElementById('price')
        .innerHTML = parseFloat(btc.USD.price).toLocaleString('en',{style:'currency',currency: 'USD'})
        
        const eth = response.data.find(coin => coin.symbol === 'ETH').quote
        document.getElementById('price2')
        .innerHTML = parseFloat(eth.USD.price).toLocaleString('en',{style:'currency',currency: 'USD'})

        const bnb = response.data.find(coin => coin.symbol === 'BNB').quote
        document.getElementById('price3')
        .innerHTML = parseFloat(bnb.USD.price).toLocaleString('en',{style:'currency',currency: 'USD'})

        const doge = response.data.find(coin => coin.symbol === 'DOGE').quote 
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

window.onload = function() {
    alert("Please wait. Page loading, API retrieval may take a few seconds.");
};
