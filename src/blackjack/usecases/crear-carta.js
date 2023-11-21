
/**
 * 
 * @param {string} carta 
 * @returns {HTMLImageElement} Devuelve un elemento HTML que agrega una imagen
 */
export const crearCarta = (carta) =>{

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    return imgCarta
}