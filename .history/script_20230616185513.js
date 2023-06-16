var div = document.getElementById('sound');
var display=0;


function hideShow()
{
    if(display==1)
    {
        div.style.display = 'block';
    }
    else
    {
        div.style.display = 'none';
        display = 1;
    }
}