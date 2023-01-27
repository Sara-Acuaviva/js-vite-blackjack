import { pedirCarta, valorCarta, crearCartaHTML} from "./";

const delayedAction = (action) => {
    return new Promise((res, _) => {
        setTimeout(() => {
          action();
          res();
        }, 500);
    })
}

/**
 * 
 * @param {Number} puntosMinimos puntos mínimos que la máquina necesita para ganar
 * @param {HTMLElement} puntosHTML HTML para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = async ( puntosMinimos, puntosHTML, divCartasComputadora, deck =[] ) => {

    if ( !puntosMinimos ) {throw new Error ('PuntosMinimos son necesarios');}
    if ( !puntosHTML ) {throw new Error ('El argumento puntosHTML es necesario');}

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = await crearCartaHTML(carta); 
        divCartasComputadora.append(imgCarta);

        if( puntosMinimos > 21 ) {
            break;
        }
        await delayedAction(() =>{})

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    await delayedAction(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    });
}