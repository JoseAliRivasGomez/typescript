(()=> {

    abstract class Mutante { //* No se puede inicializar
        constructor(
            public name: string,
            public realName: string
        ){}
    }


    class Xmen extends Mutante {

        salvarMundo() {
            return 'Mundo a salvo!';
        }

    }

    class Villain extends Mutante {

        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }


    const wolverine = new Xmen('Wolverine','Logan');
    const magneto = new Villain('Magneto','Magnus');

    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());

    const printName = ( character: Mutante ) => {
        console.log( character.realName );
    }

    printName( magneto );

})()