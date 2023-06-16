document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here

  

var div = document.getElementById('main');

function hideShow() {
    console.log("HELLO");
    if (div.style.display === 'none') {
        div.style.display = 'flex';
    } else {
        div.style.display = 'none';
    }
}
});