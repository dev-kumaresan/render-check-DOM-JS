function render()
{
    n = document.getElementById("img").value;
    for(n;n>0;n--)
    {
        var image = document.createElement('img');
        image.style.width='150px';
        image.style.width = '150px';
        image.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg');
        document.body.appendChild(image);
    }

}
