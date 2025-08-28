/**
 * Esta Funcion Recibe el Deck y Extrae Una carta De La Baraja
 * @param {Array<String>} deck Ejemplo: [9C, 8D, AC]
 * @returns {<String>} Regresa una carta en formato String, Ejemplo: 8C
 */
export const pedirCarta = (deck) => {
    console.log(deck);
    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}