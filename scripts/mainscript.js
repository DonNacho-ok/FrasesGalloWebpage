const ListaFrases = [
    `EEEEUUUGGHH!
    BOLUDO ME HA SALIO MA'FIERO QUI
    ABRAZO 'E SUEGRA
    EL VASO ESTE, BOLUDO`,
    `CHAAAAAAAAAAA
    TA' LOCA LA GALLINA`,
    `SE MI HACE AGUA 
    LA ESPALDA POR IRME
    A DORMIR LA SIESTA`,
    `ANDA A HOLDEAR BASE
    A LA CONCHA DE TU HERMANA
    PUNTO COM`,
    `ACA TENGO UN QUIRQUINCHO
    PA QUE TE HAGA CABA BIEN
    EL HOYO`,
    `AAAAAAAAYYY MI AMOR
    NO QUERE UN TRAPITO 
    PA TU VAGINA?`,
    `CHAAAAAAAAAAAAAAAAA
    ERRALE UNA BALITA`
];

// 7 frases hasta ahoora, rango 0-6

$(function(){
    window.setInterval(RotadorFrases, 5000)
});

function RotadorFrases(){
    $('#main_text').fadeOut('slow', function(){
        $('#main_text').text(ListaFrases[RandomNum()]);
        $('#main_text').fadeIn('slow')
    });
};

function RandomNum(){
    var numero = Math.floor(Math.random() * 6)
    return numero;
};