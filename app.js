

function getData(){
    fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=0b273a41-72ec-4cb6-8c21-35a4a6fb12eb")
    .then((response) => response.json())
    .then((data) => {
        
        const btc = data.data[0].quote
        document.getElementById('price')
        .innerHTML = parseFloat(btc.USD.price).toLocaleString('en',{style:'currency',currency: 'USD'})
        
        const eth = data.data[1].quote
        document.getElementById('price2')
        .innerHTML = parseFloat(eth.USD.price).toLocaleString('en',{style:'currency',currency: 'USD'})

        const bnb = data.data[3].quote
        document.getElementById('price3')
        .innerHTML = parseFloat(bnb.USD.price).toLocaleString('en',{style:'currency',currency: 'USD'})

        const doge = data.data[9].quote
        document.getElementById('price4')
        .innerHTML = parseFloat(doge.USD.price).toLocaleString('en',{style:'currency',currency: 'USD'})
    })
}

getData()
  
    