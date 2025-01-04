
import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";
import heroes from "../../data/heroes";

describe('Prueba del archivo 09-promesas.test', () => {

    test('Probando el metodo del tipo promesa', (done) => {
        const id = 1;

        getHeroeByIdAsync(id)
            .then((heroe) => {
                // console.log(heroe);
                expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
                done();
            });
    });

    test('Probando el error dentro de la promesa', (done) => {
        const id = 100;

        getHeroeByIdAsync(id)
            .catch(error => {
                // console.log(error);
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            });
    });
});