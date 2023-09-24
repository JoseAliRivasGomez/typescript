(() => {

    enum AudioLevel { //* Para manejar numeros, por defecto empieza en 0, siempre ascendente
        min = 1,
        medium, //* Como no tiene, es 2
        max = 10,
    }

    let currentAudio:AudioLevel = AudioLevel.max;

    
    console.log( currentAudio );
    console.log( AudioLevel );


})()