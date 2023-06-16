var div;
var display = false;

document.addEventListener('DOMContentLoaded', function() {
    div = document.getElementById('main');
});

function hideShow() {
    console.log("HELLO");
    if (display) {
        div.style.display = 'flex';
        display = false;
    } else {
        div.style.display = 'none';
        display = true;
    }
}
