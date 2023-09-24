(()=> {

    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activateBatsignal = ():string => {
        return 'Batiseñal activada!';
    }
    
    console.log(typeof activateBatsignal);

    const heroName = returnName();


})()