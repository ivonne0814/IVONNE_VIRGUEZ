const { encenderLuzSala, encenderLuzCocina, apagarLuces } = require('./logica');

describe('Pruebas del sistema de luces de la casa inteligente', () => {

test('Encender luz de la sala', () => {
    expect(encenderLuzSala()).toBe("La luz de la sala está encendida");
});

test('Encender luz de la cocina', () => {
    expect(encenderLuzCocina()).toBe("La luz de la cocina está encendida");
});

test('Apagar todas las luces', () => {
    expect(apagarLuces()).toBe("Todas las luces están apagadas");
});

});
//casa inteligente, apagar y encender luces