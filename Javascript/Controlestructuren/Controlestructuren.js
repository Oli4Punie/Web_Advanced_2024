const getal = 20;
const tweedeGetal = '20';
const  naam = prompt("Geef de naam van de school in");

const gelijk = getal == tweedeGetal; //true
const gelijk2 = getal === tweedeGetal; //false

if(naam.toUpperCase() === 'PXL'){

}else{

}

if(getal === 20 || getal === 30){

}else{

}

switch (naam) {
    case "PXL":
        console.log('Hogeschool PXL');
        break;
    case "HOWEST":
        console.log('HOWEST');
        break;
    case "UCLL":
        console.log('UCLL');
        break;
    default:
        console.log('Het was een ander school');
}

const producten = ['keyboard', 'mouse', 'speakers', 'mousemat'];

producten[1] = 'muis';

for (let index = 0; index < producten.length; index++) {
    const element = producten[index];

    const paragraaf = document.createElement('p');
    //paragraaf.innerHTML = `<h1>${element}</h1>`;
    paragraaf.innerText = `${element}`;
    document.body.appendChild(paragraaf);
}

const  zin = "Dit is een zin die moet worden omgedraaid";
const zinArray = zin.split('');
console.log(zinArray);
zinArray.reverse();

const omgedraaideZin = zinArray.join('');
console.log(omgedraaideZin)

const producten2 = ['keyboard', 'mouse', 'speakers', 'mousemat'];
producten2.push('cupholder');
console.log();
