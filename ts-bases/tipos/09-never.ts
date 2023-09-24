(()=> {


    const error = ( message: string ):(never|number) => { //* Da error o regresa un numero

        if ( false ) {
            throw new Error(message)
        }

        return 1;
    }


    error('Auxilio!');
    console.log('Hola Mundo')
})()