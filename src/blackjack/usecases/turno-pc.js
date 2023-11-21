
import { crearCarta } from "./crear-carta";
import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";



/**
 * 
 * @param {number} puntosMinimos Punto minimos necesarios para empatar o ganar al jugador
 * @param {HTMLElement} puntosHTML Lugar donde se agregan los puntos
 * @param {HTMLElement} divCartasComputadora Lugar donde se agregan las cartas  
 * @param {Array<string>} deck Arreglo con las cartas
 */

// turno de la computadora
export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck ) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCarta(carta);
        divCartasComputadora.append(imgCarta);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
