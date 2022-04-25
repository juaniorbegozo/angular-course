
/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['JAva'];


interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['a', 'b']
}

personaje.puebloNatal = 'sd';

console.table(personaje);