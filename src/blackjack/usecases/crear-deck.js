import _ from 'underscore';



/**
 * Esta función crea un nuevo deck 
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S'] 
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array} retorn un nuevo dev de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) 
        throw new Error('TiposDeCarta es Obligatorio');
    
    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

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
    console.log( deck );
    return deck;
}

//export default crearDeck;
