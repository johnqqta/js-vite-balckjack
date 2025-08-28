import { pedirCarta,valorCarta,crearCartaHTML } from "./index";
// turno de la computadora
/**
 * 
 * @param {Number} puntosMinimos Son los puntos minimos que la computadora necesita para ganar y es un number ej: 15 
 * @param {HTMLElement} puntosHTML Son los contenedores donde voy a escribir los puntos en el HTML 
 * @param {HTMLElement} divCartasComputadora El div donde se inserta las cartas de la computadora
 * @param {Array<String>} deck Arreglo de string donde esta toda la baraja de cartas
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck=[] ) => {
    if (!puntosMinimos) throw new Error('Puntos Minimos Son Necesario');
    if (!puntosHTML) throw new Error("Argumento PuntosHTML Es Necesarios");
    if (!divCartasComputadora) throw new Error("Argumento divCartasComputadora Es Necesario");
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;
        divCartasComputadora.append(crearCartaHTML(carta));
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
    }, 800 );
}