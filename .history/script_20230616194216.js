document.addEventListener('DOMContentLoaded', function() {
    var div = document.getElementById('main');
    var display = false;

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
});
