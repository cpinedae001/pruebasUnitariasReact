import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Prueba 07-deses-arr.test', () => {
    test('Prueba del metodo usContext debe retornar un string y numero', () => {
        const arreglo = ['ABC', 123];
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        //tambien se puede hacer lo siguiente indicando que se espera cualquier
        // de string o lo que se indica


        expect(letters).toEqual(expect.any(String));
        /* este es un ejemplo si fuera caso contrairo, recibe un numero pero se le dice que es 
        string, por lo que debe de dar error.
        */
        // expect(numbers).toEqual(expect.any(String)); //ejemplo
        expect(numbers).toEqual(expect.any(Number));
    });

});





