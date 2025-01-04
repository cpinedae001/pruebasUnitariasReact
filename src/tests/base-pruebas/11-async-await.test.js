import { getImagen } from "../../base-pruebas/11-async-await";

describe('Prueba  11-async-await.test', () => {

    test('getImagen usando async y await', async () => {

        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');

    });

});

