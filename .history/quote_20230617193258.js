var quote;

document.addEventListener('DOMContentLoaded', function() {
     quote = document.getElementById('say');
});

const api_url = "https://api.quotable.io/quotes/random?tags=knowledge";
async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
}

getQuote(api_url);
