import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp.test', () => {
    test('getHeroeById', () => {  

        const id = 1; 

        const heroe = getHeroeById( id );
        // console.log(heroe);

        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    /* retornando y probando valores nulos o undefined */
    test('getHeroeById retornando y probando valores nulos o undefined', () => {  

        const id = 100; 

        const heroe = getHeroeById( id );
        // console.log(heroe);

        expect(heroe).toBeFalsy();
    });


    test('getHeroesByOwner by DC', () => { 
        const typeHeroes = 'DC';

        const heroesList = getHeroesByOwner(typeHeroes);

        // console.log(heroesList);
        /* este es para probar y decir que sea igual a 0 objetos en la lista */
        // expect(heroesList).toBeGreaterThanOrEqual(0);
        // expect(heroesList).toHaveLength(0);
        expect(heroesList).toBeTruthy();
        expect(heroesList.length >=0).toBe(true);
        expect(heroesList).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
     });
    test('getHeroesByOwner by Marvel', () => { 
        const typeHeroes = 'Marvel';

        const heroesList = getHeroesByOwner(typeHeroes);

        // console.log(heroesList);
        expect(heroesList).toBeTruthy();
        expect(heroesList.length ===2).toBe(true);
     });
})