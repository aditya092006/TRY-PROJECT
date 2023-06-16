var div = document.getElementById('main');

function hideShow() {
    console.log("HELLO");
    if (div.style.display === 'none') {
        div.style.display = 'flex';
    } else {
        div.style.display = 'none';
    }
}
