/**
 * Funcion que extrae el valor de la carta la cual se recibe como string
 * @param {String} carta Ejemplo: 8C,AC,JD
 * @returns {Number} Devuelve Numero del valor de la carta Ejemplo: 8, 10, 11
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
