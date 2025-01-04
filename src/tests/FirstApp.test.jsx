
import { render } from "@testing-library/react";
import { FirtApp } from "../firstApp";

describe('Prueba Componente FirstApp', () => {
    test('debe hacer match con el snapshot ', () => {
        // render( <FirtApp title='Carol y Cristhian'/>)
        render(<FirtApp />);
    });
});