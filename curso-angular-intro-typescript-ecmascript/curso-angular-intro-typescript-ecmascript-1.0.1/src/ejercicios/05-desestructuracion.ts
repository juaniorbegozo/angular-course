
/*
    ===== Código de TypeScript =====
*/


interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo:36,
    cancion: 'Mess',
    detalles: {
        autor: 'ed sheeran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles: {autor}} = reproductor;

/*
console.log('Volumen actual: ' + volumen);
console.log('segundo actual: ' + segundo);
console.log('cancion actual: ' + cancion);
console.log('autor es: ' + autor );
*/

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ a, b, c, d] = dbz; 

console.log('PErsonaje1: ' + a);
console.log('PErsonaje2: ' + b);
console.log('PErsonaje3: ' + d);