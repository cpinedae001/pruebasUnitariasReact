import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Probando 05-funciones', () => {
    test('debe retornar un obj', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        console.log(user);
        expect( testUser ).toEqual(user);
    });

    test('Se debe mandar el nombre y validar que regrese el dato',()=>{
        const user = getUsuarioActivo('Daniela');

        expect(user).toEqual({
            uid: 'ABC123',
            username: 'Daniela'
        })
    });
})

