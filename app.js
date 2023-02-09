

function getData(){
    fetch("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=0b273a41-72ec-4cb6-8c21-35a4a6fb12eb")
    .then((response) => response.json())
    .then((data) => {
        console.log(data) 
        const name = data.data[0].name
        console.log(name)

        const quote = data.data[0].quote
        console.log(quote)
        document.getElementById('price')
        .innerHTML = parseFloat(quote.USD.price).toLocaleString('en',{style:'currency',currency: 'USD'})
    })
}

getData()
  
    