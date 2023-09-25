(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado!')
        }

        protected getFullname() {
            return `${ this.name } ${ this.realName }`
        }

    }

    class XMen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant:boolean
        ){
            super( name, realName )
            console.log('Constructor Xmen llamado');
        }

        get fullName() {
            return `${ this.name } - ${ this.realName }`;
        }

        set setName( name: string ) {

            if ( name.length < 3 ) {
                throw new Error('EL nombre debe de ser mayor de 3 letras')
            }

            this.name = name;
        }

        getFullnameDesdeXmen() {
            return super.getFullname()
        }

    }

    const wolverine = new XMen('Wolverine','Logan', true)

    wolverine.setName = 'Wolvie';
    
    console.log(wolverine.fullName );
    console.log(wolverine.getFullnameDesdeXmen());

})()