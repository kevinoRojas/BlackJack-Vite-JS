
/**
 * 
 * @param {Array<string>} deck 
 * @returns {string} Devuelve un string que representa el valor y simbolo de una carta
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}