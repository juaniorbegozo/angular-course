
/*
    ===== Código de TypeScript =====
*/


function queTipoSoy<T>(arg: T) {
    return arg;
}

let soyString = queTipoSoy('hola');

let soyNumber = queTipoSoy(100);


let soyArray = queTipoSoy([1,2,3,4]);


let soyExplicito = queTipoSoy<number>(234);