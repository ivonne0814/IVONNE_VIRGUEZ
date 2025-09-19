const { compararNumeros } = require('./logica');

// Se recomienda instalar una extensión para ejecutar pruebas jest.

describe('compararNumeros', () => {
    let consoleLogSpy;
    let consoleWriteSpy;
    let promptMock;

    beforeEach(() => {
        consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        consoleWriteSpy = jest.spyOn(console, 'write').mockImplementation(() => {});
        global.prompt = jest.fn();
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
        consoleWriteSpy.mockRestore();
        jest.restoreAllMocks();
    });

    test('compara dos números: primero mayor', () => {
        // Simula: opción 1, ingresa 8 y 3, luego opción 2 para salir
        promptMock = global.prompt
            .mockReturnValueOnce('1') // menú: comparar
            .mockReturnValueOnce('8') // primer número
            .mockReturnValueOnce('3') // segundo número
            .mockReturnValueOnce('2'); // salir

        compararNumeros();

        expect(consoleLogSpy).toHaveBeenCalledWith('Menu:');
        expect(consoleLogSpy).toHaveBeenCalledWith('1. Comparar numeros');
        expect(consoleLogSpy).toHaveBeenCalledWith('2. Salir');
        expect(consoleWriteSpy).toHaveBeenCalledWith('Elija una opcion:');
        expect(consoleLogSpy).toHaveBeenCalledWith('8 es mayor que 3');
        expect(consoleLogSpy).toHaveBeenCalledWith('Saliendo del programa...');
        expect(consoleLogSpy).toHaveBeenCalledWith('Fin del programa.');
    });

    test('compara dos números: segundo mayor', () => {
        promptMock = global.prompt
            .mockReturnValueOnce('1')
            .mockReturnValueOnce('2')
            .mockReturnValueOnce('7')
            .mockReturnValueOnce('2');

        compararNumeros();

        expect(consoleLogSpy).toHaveBeenCalledWith('7 es mayor que 2');
    });

    test('compara dos números: iguales', () => {
        promptMock = global.prompt
            .mockReturnValueOnce('1')
            .mockReturnValueOnce('5')
            .mockReturnValueOnce('5')
            .mockReturnValueOnce('2');

        compararNumeros();

        expect(consoleLogSpy).toHaveBeenCalledWith('5 y 5 son iguales');
    });

    test('opción inválida en el menú', () => {
        promptMock = global.prompt
            .mockReturnValueOnce('9') // opción inválida
            .mockReturnValueOnce('2'); // salir

        compararNumeros();

        expect(consoleLogSpy).toHaveBeenCalledWith('Opcion invalida. Por favor intente de nuevo.');
        expect(consoleLogSpy).toHaveBeenCalledWith('Saliendo del programa...');
        expect(consoleLogSpy).toHaveBeenCalledWith('Fin del programa.');
    });
});