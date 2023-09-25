
//* Los decoradores se ejecutan solo cuando se transpila el codigo
//* Imprime la clase en consola, la clase retorna el constructor 
function printToConsole( constructor: Function ) { 
    console.log( constructor )
}

//* Factory decorator, debe retornar una funcion
const printToConsoleConditional = ( print: boolean = false ):Function => {
    if ( print ) {
        return printToConsole;
    }else {
        return () => {}
    }
}

//* Previene que se expandan las propiedades o metodos de la clase
const bloquearPrototipo = function( constructor: Function ) {
    Object.seal( constructor ) 
    Object.seal( constructor.prototype )
}

//* Factory decorator, debe retornar una funcion
//* Valida el id, ejecuta el metodo solo si el id es valido
function CheckValidPokemonId() {
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {

        // console.log({target, propertyKey, descriptor});
        
        const originalMethod = descriptor.value;

        descriptor.value = ( id: number ) => {
            if( id < 1 || id > 800 ) {
                return console.error('El id del pokemon debe de estar entre 1 y 800')
            } else {
                return originalMethod(id)
            }
        }
        // descriptor.value = () => console.log('Hola mundo');

    }
}

//* Factory decorator, debe retornar una funcion
//* Permite que una propiedad sea de solo lectura, sin importar si es public o private
function readonly( isWritable: boolean = true ):Function {
    return function(target: any, propertyKey: string ){
        
        const descriptor: PropertyDescriptor = {
            get() {
                // console.log( this, 'getter' )
                return 'Fernando'
            },
            set( this, val ){
                // console.log(this, val )
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false //* Para que no se pueda ver
                })
            }
        }
        
        return descriptor;
    }
}






@bloquearPrototipo
// @printToConsole
@printToConsoleConditional(false)
export class Pokemon {

    @readonly(true)
    public publicApi: string = 'https://pokeapi.co'

    constructor(
        public name: string
    ){}


    @CheckValidPokemonId()
    savePokemonToDB( id: number ) {
        console.log(`Pokemon guardado en DB ${ id }`);
    }

}