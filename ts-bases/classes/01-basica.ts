(() => {

    class Avenger {

        // private name: string = 'Bruce Wayne';
        // private team: string;
        // public realName?: string;

        static avgAge: number = 35;
        static getAvgAge() {
            return this.name; //* Avenger
        }

        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string,
            // avgAge: number = 55,
        ) {
            // Avenger.avgAge = avgAge;
        }

        public bio() {
            return `${ this.name } (${ this.team })!!!`
        }

    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');

    console.log( antman );

    console.log(antman.bio());

    console.log(Avenger.avgAge);

    console.log( Avenger.getAvgAge() );

})()