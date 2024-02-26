let auto = {
    merk: 'Mercedes',
    bouwjaar: 2024,
    kleur: 'rood',
    tweedehands: false,
    props: {}
}
const autos = [
    {
        merk: 'Mercedes',
        bouwjaar: 2024,
        kleur: 'rood',
        tweedehands: false,
        prijs: 80000,
        props: {},
        klanten: [{naam: 'Kevin'}, {naam: 'Pieter'}],
        toString: function (){
            let alleKlantenString = '';
            for (let i = 0; i < this.klanten.length; i++) {
                const huidigeKlant = this.klanten[i];
                alleKlantenString += huidigeKlant.naam;
            }
            return this.merk + ' ' + this.bouwjaar + ' ' + this.kleur + ' ' + this.prijs + ' ' + alleKlantenString ;
        },
        prijsInclusiefBTW: function () {
            return this.prijs * 1.21;
        }
    },
    {
        merk: 'Ford',
        bouwjaar: 2024,
        kleur: 'blauw',
        tweedehands: false,
        props: {},
        klanten: [{naam: 'Kevin'}, {naam: 'Pieter'}],
        toString: function (){
            return this.merk + ' ' + this.bouwjaar + ' ' + this.kleur;
        }
    },
    {
        merk: 'Mercedes',
        bouwjaar: 2024,
        kleur: 'rood',
        tweedehands: false,
        props: {},
        klanten: [{naam: 'Kevin'}, {naam: 'Pieter'}],
        toString: function (){
            return this.merk + ' ' + this.bouwjaar + ' ' + this.kleur;
        }
    }
];
const h1 = document.createElement('h1');
h1.innerText = autos[0].toString();
document.body.appendChild(h1);
for (let i = 0; i < autos.length; i++) {
    const huidigeAuto = autos[i];
    const paragraph = document.createElement('p');
    paragraph.innerText = `Naam eerste gebruiker: ${huidigeAuto.klanten[0].naam} `;
    let klanten = huidigeAuto.klanten
    for (let j = 0; j < klanten.length; j++) {
        const huidigeKlant = klanten[j];
        const h2 = document.createElement('h2');
        h2.innerText = klanten[j].naam
        document.body.appendChild(h2);
    }
    /*const paragraph = document.createElement('p');
    paragraph.innerText = `${huidigeAuto.merk} ${huidigeAuto.kleur}`;*/
    const pasAan = document.getElementById('pas-aan');
    //pasAan.className = 'red white blue';
    pasAan.classList.add('red');
    pasAan.classList.add('white');
    console.log(paragraph);
    document.body.appendChild(paragraph);
}
function telOp() {
    const x = 10
}