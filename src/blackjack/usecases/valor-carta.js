import _ from "underscore";

/**
 * Obtener valor de la nueva carta dada
 * @param {string} carta 
 * @returns {Number} valor de la carta
 */


export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}