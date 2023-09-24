(() => {

    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo está salvado!`;

    let myFunction1: Function;
    let myFunction2: (y:number, z:number) => number;
    let myFunction3: (y:string) => string;
    let myFunction4: () => string;

    myFunction1 = () => {};
    console.log(myFunction1);

    myFunction2 = addNumbers;
    console.log( myFunction2(1, 2) );
    
    myFunction3 = greet;
    console.log( myFunction3( 'Fernando' ) );

    myFunction4 = saveTheWorld;
    console.log( myFunction4() );

})()