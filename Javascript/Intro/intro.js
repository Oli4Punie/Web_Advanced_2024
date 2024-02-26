    //const input = prompt("geef iets in");
const hoofding = document.getElementById('hoofding');
hoofding.innerText = 'Welkom Jasper op ' + hoofding.innerText;

    const school = 'Hogeschool PXL';
    const tekst = school + ' is geweldig'; // Hogeschool PXL is geweldig

    const zin = `${school} nog wat tekst ${tekst} een volzin maken die nog leesbaar is.`;

    const paragraaf = document.createElement('p');
    paragraaf.innerText = zin;
    document.body.appendChild(paragraaf);