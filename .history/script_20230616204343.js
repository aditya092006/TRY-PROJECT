var div;
var display = false;

document.addEventListener('DOMContentLoaded', function() {
    div = document.getElementById('main');
});

function hideShow() {
    console.log("HELLO");
    if (display) {
        div.style.visibility = 'visible';
        display = false;
    } else {
        div.style.visibility = 'hidden';
        display = true;
    }
}
