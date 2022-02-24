function render()
{
    n = document.getElementById("img").value;
    for(n;n>0;n--)
    {
        var image = document.createElement('img');
        image.style.width='150px';
        image.style.width = '150px';
        image.setAttribute('src','https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wiktionary.org%2Fwiki%2Fcat&psig=AOvVaw3mnD02svub7tRq8nry_FrJ&ust=1645778882191000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMD0_p_6l_YCFQAAAAAdAAAAABAD');
        document.body.appendChild(image);
    }

}
