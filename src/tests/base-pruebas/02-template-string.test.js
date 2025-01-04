import { getSaludo } from "../../base-pruebas/02-template-string";



describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar hola ...algo', ()=>{
        const name = 'Cristhian';

        const message = getSaludo(name);
        expect(message).toBe(`Hola ${ name }`);
    });
})