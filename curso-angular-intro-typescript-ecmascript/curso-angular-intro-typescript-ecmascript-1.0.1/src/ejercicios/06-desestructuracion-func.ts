
/*
    ===== Código de TypeScript =====
*/


export interface Producto {
     desc: string;
     precio: number;
}

const telefono: Producto = {
    desc: 'samsung',
    precio: 200
}

const tablet: Producto = {
    desc: 'samsung',
    precio: 200
}

export function calculaISV( productos: Producto[]): [number, number] {
    let total = 0;

    productos.forEach(  ( {precio} ) => {
        total += precio;
    })

    return [ total, total * 0.15];
}


const articulos = [telefono, tablet];

const [total, isv] = calculaISV(articulos);


console.log(total);
console.log(isv);