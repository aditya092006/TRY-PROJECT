var div = document.getElementById('main');
var display=0;


function hideShow()
{
    console.log("HELLO");
    if(display==1)
    {
        div.style.display = 'flex';
    }
    else
    {
        div.style.display = 'none';
        display = 1;
    }
}