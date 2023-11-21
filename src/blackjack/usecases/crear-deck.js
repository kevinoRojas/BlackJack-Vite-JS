import _ from 'underscore'

/**
 * 
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>} -retorna un nuevo deck con todas las cartas creadas
 */
//?Estos son los valores de las cartas tipos tiene los tipos corazon,diamante,treboles,espadas 
//?y especiales los caracteres que representan una antidad en el juego de naipe
//? tipos      = ['C','D','H','S'];
//? especiales = ['A','J','Q','K'];
// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta,tiposEspeciales) => {

    if (!tiposDeCarta) {throw new Error('tiposDeCarta es obligatorio')}

    let  deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
