function render()
{
    n = document.getElementById("img").value;
    for(n;n>0;n--)
    {
        var image = document.createElement('img');
        image.style.width='150px';
        image.style.width = '150px';
        image.setAttribute('src','img/cat.jpg');
        document.body.appendChild(image);
    }

}
