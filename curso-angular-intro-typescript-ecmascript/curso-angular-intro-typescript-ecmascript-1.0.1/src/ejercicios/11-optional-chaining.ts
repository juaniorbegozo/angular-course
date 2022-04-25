
/*
    ===== Código de TypeScript =====
*/



interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasaj1: Pasajero = {
    nombre: 'Juan'
}

const pasaj2: Pasajero = {
    nombre: 'pipi',
    hijos: ['lala', 'meme']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos= pasajero.hijos?.length || 0;

    console.log(cuantosHijos);
}

imprimeHijos(pasaj1);