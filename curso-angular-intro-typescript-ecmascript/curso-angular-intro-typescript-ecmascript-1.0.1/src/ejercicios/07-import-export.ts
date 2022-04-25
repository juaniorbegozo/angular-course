
/*
    ===== Código de TypeScript =====
*/

import { calculaISV, Producto } from "./06-desestructuracion-func";


const carritoCompras: Producto[] = [
    {
        desc: 'aa',
        precio: 100
    },
    {
        desc: 'bb',
        precio: 200
    }
];

const [total, isv] = calculaISV(carritoCompras);

console.log(total, isv);