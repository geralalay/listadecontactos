// Importar el módulo readline para leer la entrada del usuario
const readline = require("readline");

// Crear una interfaz de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Una función para crear un objeto contacto con nombre y telefono
function crearContacto(nombre, telefono) {
  return {
    nombre: nombre,
    telefono: telefono
  };
}

// Una función para añadir un nuevo contacto a la lista
function añadirContacto(lista, nombre, telefono) {
  let contacto = crearContacto(nombre, telefono);
  lista.push(contacto);
  console.log("Se ha añadido el contacto " + nombre + " " + telefono);
  mostrarMenu(); // Mostrar el menú nuevamente
}

// Una función para borrar un contacto de la lista por su índice
function borrarContacto(lista, indice) {
  if (indice >= 0 && indice < lista.length) {
    let borrado = lista.splice(indice, 1)[0];
    console.log("Se ha borrado el contacto " + borrado.nombre + " " + borrado.telefono);
  } else {
    console.log("Índice inválido");
  }
  mostrarMenu(); // Mostrar el menú nuevamente
}

// Una función para imprimir la lista completa de contactos en consola
function imprimirLista(lista) {
  console.log("Lista de contactos:");
  for (let i = 0; i < lista.length; i++) {
    console.log((i + 1) + ". Nombre: " + lista[i].nombre + ", Telefono: " + lista[i].telefono);
  }
  mostrarMenu(); // Mostrar el menú nuevamente
}

// Función para mostrar el menú
function mostrarMenu() {
  console.log("Seleccione una opción:");
  console.log("1. Añadir un nuevo contacto");
  console.log("2. Borrar un contacto existente");
  console.log("3. Imprimir la lista completa de contactos");
  console.log("4. Salir");
  
  rl.question("", (opcion) => {
    switch (opcion) {
      case "1":
        rl.question("Ingrese el nombre del nuevo contacto:", (nombre) => {
          rl.question("Ingrese el telefono del nuevo contacto:", (telefono) => {
            añadirContacto(lista, nombre, telefono);
          });
        });
        break;
      case "2":
        rl.question("Ingrese el índice del contacto a borrar:", (indice) => {
          borrarContacto(lista, indice - 1);
        });
        break;
      case "3":
        imprimirLista(lista);
        break;
      case "4":
        rl.close();
        console.log("Gracias por usar el gestor de contactos");
        break;
      default:
        console.log("Opción inválida");
        mostrarMenu();
    }
  });
}

// Crear una lista de contactos predefinidos, inicializando el programa
let lista = [
  crearContacto("Juan Pérez", "3453456"),
  crearContacto("María García", "456456"),
  crearContacto("Pedro López", "5875768"),
  crearContacto("Ana Rodríguez", "3456345_")
];

// Mostrar el menú por primera vez
console.log("Bienvenido al gestor de contactos");
mostrarMenu();
