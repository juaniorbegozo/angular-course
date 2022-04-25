
/*
    ===== Código de TypeScript =====
*/



class MiSuperClase {
    public miProp: string = 'ABC';
    imprimir() {
        console.log('hola');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miProp);