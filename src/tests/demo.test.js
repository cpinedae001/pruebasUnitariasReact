
/* */

describe('Pruebas en <DemoComponent/>', () => {
    test(' esta prueba no debe de fallar', () => {
        // 1. inicialización
        const message = 'Hola mundo';
        // 2. estimulo
        const message2 = message.trim();
        // 3. Observamos el comportamiento
        expect(message).toBe(message2);
    });
});
