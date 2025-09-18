//algoritmo para comparar dos numeros y determinar cual es mayor, menor o si son iguales
//incluye bucle, seleccion multiple y funciones

function compararNumeros(numero1, numero2) {

    // bucle que repetira el menu hasta que el usuario elija salir
    do { 
        //mostrar menu
        console.log("Menu:");
        console.log("1. Comparar numeros");
        console.log("2. Salir");
        console.write("Elija una opcion: ");

        //leer opcion del usuario
        var opcion = parseInt(prompt());

        //selleccion multiple usando switch
        switch (opcion) {
            case 1:// empieza a comparar los numeros
                //pedir y leer el primer numero
                numero1 = parseInt(prompt("Ingrese el primer numero: "));

                //pedir y leer el segundo numero
                numero2 = parseInt(prompt("Ingrese el segundo numero: "));

                //condicional para comparar los numeros
                if (numero1 > numero2) {
                    console.log(numero1 + " es mayor que " + numero2);
                } else if (numero1 < numero2) {
                    console.log(numero2 + " es mayor que " + numero1);
                } else {
                    console.log(numero1 + " y " + numero2 + " son iguales");
                }
                break;

            case 2://caso para salir del programa
                console.log("Saliendo del programa...");
                break;

            default://opcion invalida
                console.log("Opcion invalida. Por favor intente de nuevo.");    
                break;
        }
    } while (opcion != 2); //el bucle se repite hasta que la opcion sea 2
    console.log("Fin del programa.");
}   
// Ejemplo de uso:
compararNumeros(5, 3);