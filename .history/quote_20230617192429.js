var quote;

document.addEventListener('DOMContentLoaded', function() {
     quote = getElementById("say");
});

// const quote = getElementById("say");

const api_url = "https://api.quotable.io/random";
async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHtml = data.content;
}

getQuote(api_url);