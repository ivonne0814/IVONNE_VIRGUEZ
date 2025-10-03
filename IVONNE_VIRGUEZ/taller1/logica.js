//casa inteligente, apagar y encender luces
// Importar la función 'question' del módulo 'readline-sync' para leer la entrada del usuario   

import { question } from 'readline-sync';

let opcion; // Variable para guardar la opción del usuario

// Bucle principal: se repetirá hasta que el usuario elija "Salir"
do {
    // Mostrar menú en pantalla
    console.log("\n--- MENÚ DE LUCES ---");
    console.log("1. Encender luz de la sala");
    console.log("2. Encender luz de la cocina");
    console.log("3. Apagar todas las luces");
    console.log("4. Salir");
    opcion = parseInt(question("Seleccione una opción: "));

    // Control de flujo con if / else if / else
    if (opcion === 1) {
        // Caso 1: encender la luz de la sala
        console.log("La luz de la sala está encendida ");
    } else if (opcion === 2) {
        // Caso 2: encender la luz de la cocina
        console.log("La luz de la cocina está encendida ");
    } else if (opcion === 3) {
        // Caso 3: apagar todas las luces
        console.log("Todas las luces están apagadas ");
    } else if (opcion === 4) {
        // Caso 4: salir del sistema
        console.log("Saliendo del sistema...");
    } else {
        // Cualquier otra opción no es válida
        console.log("Opción no válida. Intente de nuevo.");
    }

} while (opcion !== 4); // El bucle se repite mientras la opción no sea 4

// Fin del programa
