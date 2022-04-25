
/*
    ===== Código de TypeScript =====
*/

function sumar(a:number, b:number): number {
    return (a + b);
}

const sumarFlecha = (a:number, b: number): number => {
    return a + b;
}

function mult(numero:number, base:number, otro?:number) {
    return numero * base;
}
/*
const res = mult(2, 5);
console.log(res);
*/

interface PersonajeLOR {
    nombre: string;
    pv: number
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50
}

curar(nuevoPersonaje, 20);

