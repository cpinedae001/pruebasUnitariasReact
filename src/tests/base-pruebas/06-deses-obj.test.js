import { usContext } from "../../base-pruebas/06-deses-obj";


describe('Prueba 06-deses-obj.test', () => {
    test('Prueba del metodo usContext debe retornar un string', () => { 
        const user ={
            nombre: 'Carito',
            nombreClave: '12345',
            anios: '30',
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const getUserF = usContext({clave:'12345', nombre:'Carito', edad:'30'});
        console.log(getUserF);
        expect(getUserF).toEqual(user);
     }); 

});


